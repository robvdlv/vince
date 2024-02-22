package events

import (
	"fmt"

	"github.com/apache/arrow/go/v15/arrow"
	"github.com/apache/arrow/go/v15/arrow/array"
	"github.com/apache/arrow/go/v15/arrow/memory"
	v1 "github.com/vinceanalytics/vince/gen/go/events/v1"
	"google.golang.org/protobuf/reflect/protoreflect"
)

type Builder struct {
	r      *array.RecordBuilder
	fields map[protoreflect.FieldNumber]buildFunc
}

type field struct {
	number protoreflect.FieldNumber
	arrow  arrow.Field
}

func New(mem memory.Allocator) *Builder {
	dt := &v1.Data{}
	fs := dt.ProtoReflect()
	fds := fs.Descriptor().Fields()
	fields := make([]*field, 0, fds.Len())
	for i := 0; i < fds.Len(); i++ {
		f := fds.Get(i)
		fields = append(fields, &field{
			number: f.Number(),
			arrow: arrow.Field{
				Name:     string(f.Name()),
				Nullable: f.HasOptionalKeyword(),
				Type:     kinds[f.Kind()],
			},
		})
	}
	af := make([]arrow.Field, 0, len(fields))
	for i := range fields {
		af = append(af, fields[i].arrow)
	}
	r := array.NewRecordBuilder(mem, arrow.NewSchema(af, nil))
	fm := make(map[protoreflect.FieldNumber]buildFunc)
	for i, f := range r.Fields() {
		fm[fields[i].number] = newBuild(f)
	}
	return &Builder{r: r, fields: fm}
}

func (b *Builder) NewRecord() arrow.Record {
	return b.r.NewRecord()
}

func (b *Builder) Release() {
	b.r.Release()
}

func (b *Builder) Write(list *v1.List) {
	ls := list.GetItems()
	if len(ls) == 0 {
		return
	}
	b.r.Reserve(len(ls))
	for _, e := range ls {
		b.writeData(e)
	}
}

func (b *Builder) writeData(data *v1.Data) {
	fs := data.ProtoReflect()
	fds := fs.Descriptor().Fields()
	for i := 0; i < fds.Len(); i++ {
		f := fds.Get(i)
		if f.HasOptionalKeyword() && !fs.Has(f) {
			b.fields[f.Number()](protoreflect.ValueOf(nil))
			continue
		}
		b.fields[f.Number()](fs.Get(f))
	}
}

var kinds = map[protoreflect.Kind]arrow.DataType{
	protoreflect.Int64Kind:  arrow.PrimitiveTypes.Int64,
	protoreflect.DoubleKind: arrow.PrimitiveTypes.Float64,
	protoreflect.BoolKind:   arrow.FixedWidthTypes.Boolean,
	protoreflect.StringKind: &arrow.DictionaryType{
		IndexType: arrow.PrimitiveTypes.Uint32,
		ValueType: arrow.BinaryTypes.String,
	},
}

func newBuild(a array.Builder) buildFunc {
	switch e := a.(type) {
	case *array.Int64Builder:
		return func(fv protoreflect.Value) {
			e.Append(fv.Int())
		}
	case *array.Float64Builder:
		return func(fv protoreflect.Value) {
			e.Append(fv.Float())
		}
	case *array.BooleanBuilder:
		return func(fv protoreflect.Value) {
			if !fv.IsValid() {
				e.AppendNull()
				return
			}
			e.Append(fv.Bool())
		}
	case *array.BinaryDictionaryBuilder:
		return func(fv protoreflect.Value) {
			v := fv.String()
			if v == "" {
				e.AppendNull()
				return
			}
			e.Append([]byte(v))
		}
	default:
		panic(fmt.Sprintf("%T is not supported", e))
	}
}

type buildFunc func(fv protoreflect.Value)
