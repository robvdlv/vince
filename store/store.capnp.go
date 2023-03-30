// Code generated by capnpc-go. DO NOT EDIT.

package store

import (
	capnp "capnproto.org/go/capnp/v3"
	text "capnproto.org/go/capnp/v3/encoding/text"
	schemas "capnproto.org/go/capnp/v3/schemas"
	math "math"
)

type Calendar capnp.Struct

// Calendar_TypeID is the unique identifier for the type Calendar.
const Calendar_TypeID = 0xf8bd901143c99f61

func NewCalendar(s *capnp.Segment) (Calendar, error) {
	st, err := capnp.NewStruct(s, capnp.ObjectSize{DataSize: 0, PointerCount: 3})
	return Calendar(st), err
}

func NewRootCalendar(s *capnp.Segment) (Calendar, error) {
	st, err := capnp.NewRootStruct(s, capnp.ObjectSize{DataSize: 0, PointerCount: 3})
	return Calendar(st), err
}

func ReadRootCalendar(msg *capnp.Message) (Calendar, error) {
	root, err := msg.Root()
	return Calendar(root.Struct()), err
}

func (s Calendar) String() string {
	str, _ := text.Marshal(0xf8bd901143c99f61, capnp.Struct(s))
	return str
}

func (s Calendar) EncodeAsPtr(seg *capnp.Segment) capnp.Ptr {
	return capnp.Struct(s).EncodeAsPtr(seg)
}

func (Calendar) DecodeFromPtr(p capnp.Ptr) Calendar {
	return Calendar(capnp.Struct{}.DecodeFromPtr(p))
}

func (s Calendar) ToPtr() capnp.Ptr {
	return capnp.Struct(s).ToPtr()
}
func (s Calendar) IsValid() bool {
	return capnp.Struct(s).IsValid()
}

func (s Calendar) Message() *capnp.Message {
	return capnp.Struct(s).Message()
}

func (s Calendar) Segment() *capnp.Segment {
	return capnp.Struct(s).Segment()
}
func (s Calendar) Visitors() (capnp.Float64List, error) {
	p, err := capnp.Struct(s).Ptr(0)
	return capnp.Float64List(p.List()), err
}

func (s Calendar) HasVisitors() bool {
	return capnp.Struct(s).HasPtr(0)
}

func (s Calendar) SetVisitors(v capnp.Float64List) error {
	return capnp.Struct(s).SetPtr(0, v.ToPtr())
}

// NewVisitors sets the visitors field to a newly
// allocated capnp.Float64List, preferring placement in s's segment.
func (s Calendar) NewVisitors(n int32) (capnp.Float64List, error) {
	l, err := capnp.NewFloat64List(capnp.Struct(s).Segment(), n)
	if err != nil {
		return capnp.Float64List{}, err
	}
	err = capnp.Struct(s).SetPtr(0, l.ToPtr())
	return l, err
}
func (s Calendar) Visits() (capnp.Float64List, error) {
	p, err := capnp.Struct(s).Ptr(1)
	return capnp.Float64List(p.List()), err
}

func (s Calendar) HasVisits() bool {
	return capnp.Struct(s).HasPtr(1)
}

func (s Calendar) SetVisits(v capnp.Float64List) error {
	return capnp.Struct(s).SetPtr(1, v.ToPtr())
}

// NewVisits sets the visits field to a newly
// allocated capnp.Float64List, preferring placement in s's segment.
func (s Calendar) NewVisits(n int32) (capnp.Float64List, error) {
	l, err := capnp.NewFloat64List(capnp.Struct(s).Segment(), n)
	if err != nil {
		return capnp.Float64List{}, err
	}
	err = capnp.Struct(s).SetPtr(1, l.ToPtr())
	return l, err
}
func (s Calendar) Events() (capnp.Float64List, error) {
	p, err := capnp.Struct(s).Ptr(2)
	return capnp.Float64List(p.List()), err
}

func (s Calendar) HasEvents() bool {
	return capnp.Struct(s).HasPtr(2)
}

func (s Calendar) SetEvents(v capnp.Float64List) error {
	return capnp.Struct(s).SetPtr(2, v.ToPtr())
}

// NewEvents sets the events field to a newly
// allocated capnp.Float64List, preferring placement in s's segment.
func (s Calendar) NewEvents(n int32) (capnp.Float64List, error) {
	l, err := capnp.NewFloat64List(capnp.Struct(s).Segment(), n)
	if err != nil {
		return capnp.Float64List{}, err
	}
	err = capnp.Struct(s).SetPtr(2, l.ToPtr())
	return l, err
}

// Calendar_List is a list of Calendar.
type Calendar_List = capnp.StructList[Calendar]

// NewCalendar creates a new list of Calendar.
func NewCalendar_List(s *capnp.Segment, sz int32) (Calendar_List, error) {
	l, err := capnp.NewCompositeList(s, capnp.ObjectSize{DataSize: 0, PointerCount: 3}, sz)
	return capnp.StructList[Calendar](l), err
}

// Calendar_Future is a wrapper for a Calendar promised by a client call.
type Calendar_Future struct{ *capnp.Future }

func (f Calendar_Future) Struct() (Calendar, error) {
	p, err := f.Future.Ptr()
	return Calendar(p.Struct()), err
}

type Sum capnp.Struct

// Sum_TypeID is the unique identifier for the type Sum.
const Sum_TypeID = 0xb5b7b963d0a9b4d4

func NewSum(s *capnp.Segment) (Sum, error) {
	st, err := capnp.NewStruct(s, capnp.ObjectSize{DataSize: 24, PointerCount: 0})
	return Sum(st), err
}

func NewRootSum(s *capnp.Segment) (Sum, error) {
	st, err := capnp.NewRootStruct(s, capnp.ObjectSize{DataSize: 24, PointerCount: 0})
	return Sum(st), err
}

func ReadRootSum(msg *capnp.Message) (Sum, error) {
	root, err := msg.Root()
	return Sum(root.Struct()), err
}

func (s Sum) String() string {
	str, _ := text.Marshal(0xb5b7b963d0a9b4d4, capnp.Struct(s))
	return str
}

func (s Sum) EncodeAsPtr(seg *capnp.Segment) capnp.Ptr {
	return capnp.Struct(s).EncodeAsPtr(seg)
}

func (Sum) DecodeFromPtr(p capnp.Ptr) Sum {
	return Sum(capnp.Struct{}.DecodeFromPtr(p))
}

func (s Sum) ToPtr() capnp.Ptr {
	return capnp.Struct(s).ToPtr()
}
func (s Sum) IsValid() bool {
	return capnp.Struct(s).IsValid()
}

func (s Sum) Message() *capnp.Message {
	return capnp.Struct(s).Message()
}

func (s Sum) Segment() *capnp.Segment {
	return capnp.Struct(s).Segment()
}
func (s Sum) Visitors() float64 {
	return math.Float64frombits(capnp.Struct(s).Uint64(0))
}

func (s Sum) SetVisitors(v float64) {
	capnp.Struct(s).SetUint64(0, math.Float64bits(v))
}

func (s Sum) Visits() float64 {
	return math.Float64frombits(capnp.Struct(s).Uint64(8))
}

func (s Sum) SetVisits(v float64) {
	capnp.Struct(s).SetUint64(8, math.Float64bits(v))
}

func (s Sum) Events() float64 {
	return math.Float64frombits(capnp.Struct(s).Uint64(16))
}

func (s Sum) SetEvents(v float64) {
	capnp.Struct(s).SetUint64(16, math.Float64bits(v))
}

// Sum_List is a list of Sum.
type Sum_List = capnp.StructList[Sum]

// NewSum creates a new list of Sum.
func NewSum_List(s *capnp.Segment, sz int32) (Sum_List, error) {
	l, err := capnp.NewCompositeList(s, capnp.ObjectSize{DataSize: 24, PointerCount: 0}, sz)
	return capnp.StructList[Sum](l), err
}

// Sum_Future is a wrapper for a Sum promised by a client call.
type Sum_Future struct{ *capnp.Future }

func (f Sum_Future) Struct() (Sum, error) {
	p, err := f.Future.Ptr()
	return Sum(p.Struct()), err
}

const schema_da1eebf4d7c0f83e = "x\xdat\xce\xb1J\xc3P\x14\xc6\xf1\xef\xbb7\xb5C" +
	"\xb5x\xdb\x82N\xfa\x04*\xae\x1dT\xa8\x82\x88B\x0f" +
	":t\x11\x0c5C\xa161\x89}\x06G\x1d\x1d\xc4" +
	"\xd9\xa9 \x8a\x88\x08\xaen\x0e\x82\xd0Wp\x12\x14\xea" +
	"\x14\xb9E\x9bZp\xba\xf7\xfc9p~\x93\xf7+\xce" +
	"\xe2\xc4\x94\x82\x92\xe9\xccX\xf2r}\xf9\\\xbf\xbb\xbd" +
	"\x81\x14\xa8\x93\xa5\xde\xe3\xeb\xc7\xdbL\x17N\x160\xef" +
	"W\xe6\xcb\xbe\x9f\x1d0q/\x9e*\xe6\xe4\xa1\x07S" +
	"`\xba\x97\xd1Y\xa0x\xcan\xf1\x9c\xf6w\xc6\x0e\xe6" +
	"\x92(\xf6Co!\x8a\xe9\x87\xde|\xdd\x0dZ\xb3A" +
	"y\xfb\xe8\xa0J\xca\xb8v\x00\x87\x80Y\xdb\x00dU" +
	"S\xaa\x8a\x86,\xd1\xc6\xad2 \xeb\x9a\xb2\xa3h\x94" +
	"*Q\x01Fl\xdc\xd4\x94\x9ab\xd2nD\x8d\xd8\x0f" +
	"#\x00\xccA1\x07.\xf7[4\x18\xbd\xb6\xd7J\xc7" +
	"\x81F\xfdj\x82r\xc5mz\xad}\xed\x86\xff\x90\xf6" +
	"\x86H\xbb\xf6zMS\xe2!\xd2\xa1\x8dMM9\x1e" +
	"!\xe5\xc1\xaaf\xffv>\x95\x8d\xd4\x1f\xe0\xdf\xfa\x1d" +
	"\x00\x00\xff\xff.j\\\xcf"

func RegisterSchema(reg *schemas.Registry) {
	reg.Register(&schemas.Schema{
		String: schema_da1eebf4d7c0f83e,
		Nodes: []uint64{
			0xb5b7b963d0a9b4d4,
			0xf8bd901143c99f61,
		},
		Compressed: true,
	})
}
