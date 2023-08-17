package api

import (
	"errors"
	"net/http"

	"github.com/dgraph-io/badger/v4"
	"github.com/vinceanalytics/vince/internal/db"
	"github.com/vinceanalytics/vince/internal/keys"
	"github.com/vinceanalytics/vince/internal/must"
	"github.com/vinceanalytics/vince/internal/pj"
	"github.com/vinceanalytics/vince/internal/render"
	v1 "github.com/vinceanalytics/vince/proto/v1"
	"google.golang.org/protobuf/proto"
)

func ListSites(w http.ResponseWriter, r *http.Request) {
	o := v1.Site_List{}
	db.Get(r.Context()).View(func(txn *badger.Txn) error {
		itO := badger.DefaultIteratorOptions
		prefix := keys.Site("")
		itO.Prefix = []byte(prefix)
		it := txn.NewIterator(itO)
		defer it.Close()
		for it.Rewind(); it.Valid(); it.Next() {
			it.Item().Value(func(val []byte) error {
				var n v1.Site
				must.One(proto.Unmarshal(val, &n))("failed decoding site object")
				o.List = append(o.List, &n)
				return nil
			})
		}
		return nil
	})
	render.JSON(w, http.StatusOK, &o)
}

func Create(w http.ResponseWriter, r *http.Request) {
	var b v1.Site
	err := pj.UnmarshalDefault(&b, r.Body)
	if err != nil || b.Domain == "" {
		render.ERROR(w, http.StatusBadRequest)
		return
	}
	db.Get(r.Context()).Update(func(txn *badger.Txn) error {
		key := keys.Site(b.Domain)
		it, err := txn.Get([]byte(key))
		if err != nil {
			if errors.Is(err, badger.ErrKeyNotFound) {
				return txn.Set(
					[]byte(key),
					must.Must(proto.Marshal(&b))("failed encoding site object"),
				)
			}
			return err
		}
		return it.Value(func(val []byte) error {
			return proto.Unmarshal(val, &b)
		})
	})
	render.JSON(w, http.StatusOK, &b)
}
