package request

import (
	"context"
	"encoding/json"
	"io"
	"net/http"

	"github.com/bufbuild/protovalidate-go"
	"github.com/vinceanalytics/vince/logger"
	"google.golang.org/protobuf/encoding/protojson"
	"google.golang.org/protobuf/proto"
)

var m = protojson.MarshalOptions{Multiline: true}

const (
	maxBodySize = 1 << 20
)

type validatorKey struct{}

func With(ctx context.Context, v *protovalidate.Validator) context.Context {
	return context.WithValue(ctx, validatorKey{}, v)
}

func Get(ctx context.Context) *protovalidate.Validator {
	return ctx.Value(validatorKey{}).(*protovalidate.Validator)
}

func Read(w http.ResponseWriter, r *http.Request, o proto.Message) bool {
	ctx := r.Context()
	if r.ContentLength == 0 || r.ContentLength > maxBodySize {
		logger.Get(ctx).Error("Invalid content length", "contentLength", r.ContentLength)
		Error(ctx, w, http.StatusBadRequest, http.StatusText(http.StatusBadRequest))
		return false
	}
	b, err := io.ReadAll(io.LimitReader(r.Body, r.ContentLength))
	if err != nil {
		logger.Get(ctx).Error("Failed reading request body", "err", err)
		Error(ctx, w, http.StatusBadRequest, http.StatusText(http.StatusBadRequest))
		return false
	}
	err = protojson.Unmarshal(b, o)
	if err != nil {
		logger.Get(ctx).Error("Failed decoding request body", "err", err)
		Error(ctx, w, http.StatusBadRequest, http.StatusText(http.StatusBadRequest))
		return false
	}
	if err := Get(ctx).Validate(o); err != nil {
		logger.Get(ctx).Error("Failed validating request body", "err", err)
		Error(ctx, w, http.StatusBadRequest, err.Error())
		return false
	}
	return true
}

func Write(ctx context.Context, w http.ResponseWriter, o proto.Message) {
	data, err := m.Marshal(o)
	if err != nil {
		logger.Fail("Can't marshall proto messages", "err", err)
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_, err = w.Write(data)
	if err != nil {
		logger.Get(ctx).Error("Failed writing response", "err", err)
	}
}

func Error(ctx context.Context, w http.ResponseWriter, code int, reason string) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	err := json.NewEncoder(w).Encode(errResult{Reason: reason})
	if err != nil {
		logger.Get(ctx).Error("S", "err", err)
	}
}

func Internal(ctx context.Context, w http.ResponseWriter) {
	Error(ctx, w, http.StatusInternalServerError, "Something went wrong")
}

type errResult struct {
	Reason string `json:"reason"`
}
