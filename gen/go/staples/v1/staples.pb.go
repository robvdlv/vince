// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        (unknown)
// source: staples/v1/staples.proto

package v1

import (
	_ "buf.build/gen/go/bufbuild/protovalidate/protocolbuffers/go/buf/validate"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	durationpb "google.golang.org/protobuf/types/known/durationpb"
	_ "google.golang.org/protobuf/types/known/emptypb"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Version struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Version string `protobuf:"bytes,1,opt,name=version,proto3" json:"version,omitempty"`
}

func (x *Version) Reset() {
	*x = Version{}
	if protoimpl.UnsafeEnabled {
		mi := &file_staples_v1_staples_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Version) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Version) ProtoMessage() {}

func (x *Version) ProtoReflect() protoreflect.Message {
	mi := &file_staples_v1_staples_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Version.ProtoReflect.Descriptor instead.
func (*Version) Descriptor() ([]byte, []int) {
	return file_staples_v1_staples_proto_rawDescGZIP(), []int{0}
}

func (x *Version) GetVersion() string {
	if x != nil {
		return x.Version
	}
	return ""
}

type Config struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Data        string  `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	Listen      string  `protobuf:"bytes,2,opt,name=listen,proto3" json:"listen,omitempty"`
	RateLimit   float64 `protobuf:"fixed64,3,opt,name=rate_limit,json=rateLimit,proto3" json:"rate_limit,omitempty"`
	GranuleSize int64   `protobuf:"varint,5,opt,name=granule_size,json=granuleSize,proto3" json:"granule_size,omitempty"`
	// Path to the geoiip database used to set web analytics country attribute.
	GeoipDbPath string   `protobuf:"bytes,8,opt,name=geoip_db_path,json=geoipDbPath,proto3" json:"geoip_db_path,omitempty"`
	Domains     []string `protobuf:"bytes,9,rep,name=domains,proto3" json:"domains,omitempty"`
	// How long data will be persisted, Older data is automatically deleted.
	RetentionPeriod *durationpb.Duration `protobuf:"bytes,10,opt,name=retention_period,json=retentionPeriod,proto3" json:"retention_period,omitempty"`
	AutoTls         bool                 `protobuf:"varint,11,opt,name=auto_tls,json=autoTls,proto3" json:"auto_tls,omitempty"`
	Acme            *Acme                `protobuf:"bytes,12,opt,name=acme,proto3" json:"acme,omitempty"`
	AuthToken       string               `protobuf:"bytes,13,opt,name=auth_token,json=authToken,proto3" json:"auth_token,omitempty"`
}

func (x *Config) Reset() {
	*x = Config{}
	if protoimpl.UnsafeEnabled {
		mi := &file_staples_v1_staples_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Config) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Config) ProtoMessage() {}

func (x *Config) ProtoReflect() protoreflect.Message {
	mi := &file_staples_v1_staples_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Config.ProtoReflect.Descriptor instead.
func (*Config) Descriptor() ([]byte, []int) {
	return file_staples_v1_staples_proto_rawDescGZIP(), []int{1}
}

func (x *Config) GetData() string {
	if x != nil {
		return x.Data
	}
	return ""
}

func (x *Config) GetListen() string {
	if x != nil {
		return x.Listen
	}
	return ""
}

func (x *Config) GetRateLimit() float64 {
	if x != nil {
		return x.RateLimit
	}
	return 0
}

func (x *Config) GetGranuleSize() int64 {
	if x != nil {
		return x.GranuleSize
	}
	return 0
}

func (x *Config) GetGeoipDbPath() string {
	if x != nil {
		return x.GeoipDbPath
	}
	return ""
}

func (x *Config) GetDomains() []string {
	if x != nil {
		return x.Domains
	}
	return nil
}

func (x *Config) GetRetentionPeriod() *durationpb.Duration {
	if x != nil {
		return x.RetentionPeriod
	}
	return nil
}

func (x *Config) GetAutoTls() bool {
	if x != nil {
		return x.AutoTls
	}
	return false
}

func (x *Config) GetAcme() *Acme {
	if x != nil {
		return x.Acme
	}
	return nil
}

func (x *Config) GetAuthToken() string {
	if x != nil {
		return x.AuthToken
	}
	return ""
}

type Acme struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Email  string `protobuf:"bytes,1,opt,name=email,proto3" json:"email,omitempty"`
	Domain string `protobuf:"bytes,2,opt,name=domain,proto3" json:"domain,omitempty"`
}

func (x *Acme) Reset() {
	*x = Acme{}
	if protoimpl.UnsafeEnabled {
		mi := &file_staples_v1_staples_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Acme) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Acme) ProtoMessage() {}

func (x *Acme) ProtoReflect() protoreflect.Message {
	mi := &file_staples_v1_staples_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Acme.ProtoReflect.Descriptor instead.
func (*Acme) Descriptor() ([]byte, []int) {
	return file_staples_v1_staples_proto_rawDescGZIP(), []int{2}
}

func (x *Acme) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *Acme) GetDomain() string {
	if x != nil {
		return x.Domain
	}
	return ""
}

type PrimaryIndex struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Resources map[string]*PrimaryIndex_Resource `protobuf:"bytes,1,rep,name=resources,proto3" json:"resources,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *PrimaryIndex) Reset() {
	*x = PrimaryIndex{}
	if protoimpl.UnsafeEnabled {
		mi := &file_staples_v1_staples_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PrimaryIndex) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PrimaryIndex) ProtoMessage() {}

func (x *PrimaryIndex) ProtoReflect() protoreflect.Message {
	mi := &file_staples_v1_staples_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PrimaryIndex.ProtoReflect.Descriptor instead.
func (*PrimaryIndex) Descriptor() ([]byte, []int) {
	return file_staples_v1_staples_proto_rawDescGZIP(), []int{3}
}

func (x *PrimaryIndex) GetResources() map[string]*PrimaryIndex_Resource {
	if x != nil {
		return x.Resources
	}
	return nil
}

type Granule struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id   string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Min  int64  `protobuf:"varint,2,opt,name=min,proto3" json:"min,omitempty"`
	Max  int64  `protobuf:"varint,3,opt,name=max,proto3" json:"max,omitempty"`
	Size uint64 `protobuf:"varint,4,opt,name=size,proto3" json:"size,omitempty"`
	Rows uint64 `protobuf:"varint,5,opt,name=rows,proto3" json:"rows,omitempty"`
}

func (x *Granule) Reset() {
	*x = Granule{}
	if protoimpl.UnsafeEnabled {
		mi := &file_staples_v1_staples_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Granule) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Granule) ProtoMessage() {}

func (x *Granule) ProtoReflect() protoreflect.Message {
	mi := &file_staples_v1_staples_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Granule.ProtoReflect.Descriptor instead.
func (*Granule) Descriptor() ([]byte, []int) {
	return file_staples_v1_staples_proto_rawDescGZIP(), []int{4}
}

func (x *Granule) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Granule) GetMin() int64 {
	if x != nil {
		return x.Min
	}
	return 0
}

func (x *Granule) GetMax() int64 {
	if x != nil {
		return x.Max
	}
	return 0
}

func (x *Granule) GetSize() uint64 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *Granule) GetRows() uint64 {
	if x != nil {
		return x.Rows
	}
	return 0
}

type Event struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// / EventName
	N   string `protobuf:"bytes,1,opt,name=n,proto3" json:"n,omitempty"`
	Url string `protobuf:"bytes,2,opt,name=url,proto3" json:"url,omitempty"`
	// Domain
	D string `protobuf:"bytes,3,opt,name=d,proto3" json:"d,omitempty"`
	// Screen width
	W int32 `protobuf:"varint,4,opt,name=w,proto3" json:"w,omitempty"`
	// Hash mode
	H  bool   `protobuf:"varint,5,opt,name=h,proto3" json:"h,omitempty"`
	Ip string `protobuf:"bytes,6,opt,name=ip,proto3" json:"ip,omitempty"`
	// user agent
	Ua string `protobuf:"bytes,7,opt,name=ua,proto3" json:"ua,omitempty"`
	// Referrer
	R         string                 `protobuf:"bytes,8,opt,name=r,proto3" json:"r,omitempty"`
	Timestamp *timestamppb.Timestamp `protobuf:"bytes,9,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
}

func (x *Event) Reset() {
	*x = Event{}
	if protoimpl.UnsafeEnabled {
		mi := &file_staples_v1_staples_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Event) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Event) ProtoMessage() {}

func (x *Event) ProtoReflect() protoreflect.Message {
	mi := &file_staples_v1_staples_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Event.ProtoReflect.Descriptor instead.
func (*Event) Descriptor() ([]byte, []int) {
	return file_staples_v1_staples_proto_rawDescGZIP(), []int{5}
}

func (x *Event) GetN() string {
	if x != nil {
		return x.N
	}
	return ""
}

func (x *Event) GetUrl() string {
	if x != nil {
		return x.Url
	}
	return ""
}

func (x *Event) GetD() string {
	if x != nil {
		return x.D
	}
	return ""
}

func (x *Event) GetW() int32 {
	if x != nil {
		return x.W
	}
	return 0
}

func (x *Event) GetH() bool {
	if x != nil {
		return x.H
	}
	return false
}

func (x *Event) GetIp() string {
	if x != nil {
		return x.Ip
	}
	return ""
}

func (x *Event) GetUa() string {
	if x != nil {
		return x.Ua
	}
	return ""
}

func (x *Event) GetR() string {
	if x != nil {
		return x.R
	}
	return ""
}

func (x *Event) GetTimestamp() *timestamppb.Timestamp {
	if x != nil {
		return x.Timestamp
	}
	return nil
}

type Domain struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *Domain) Reset() {
	*x = Domain{}
	if protoimpl.UnsafeEnabled {
		mi := &file_staples_v1_staples_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Domain) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Domain) ProtoMessage() {}

func (x *Domain) ProtoReflect() protoreflect.Message {
	mi := &file_staples_v1_staples_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Domain.ProtoReflect.Descriptor instead.
func (*Domain) Descriptor() ([]byte, []int) {
	return file_staples_v1_staples_proto_rawDescGZIP(), []int{6}
}

func (x *Domain) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type GetDomainRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *GetDomainRequest) Reset() {
	*x = GetDomainRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_staples_v1_staples_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetDomainRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetDomainRequest) ProtoMessage() {}

func (x *GetDomainRequest) ProtoReflect() protoreflect.Message {
	mi := &file_staples_v1_staples_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetDomainRequest.ProtoReflect.Descriptor instead.
func (*GetDomainRequest) Descriptor() ([]byte, []int) {
	return file_staples_v1_staples_proto_rawDescGZIP(), []int{7}
}

type GetDomainResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Domains []*Domain `protobuf:"bytes,1,rep,name=domains,proto3" json:"domains,omitempty"`
}

func (x *GetDomainResponse) Reset() {
	*x = GetDomainResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_staples_v1_staples_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetDomainResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetDomainResponse) ProtoMessage() {}

func (x *GetDomainResponse) ProtoReflect() protoreflect.Message {
	mi := &file_staples_v1_staples_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetDomainResponse.ProtoReflect.Descriptor instead.
func (*GetDomainResponse) Descriptor() ([]byte, []int) {
	return file_staples_v1_staples_proto_rawDescGZIP(), []int{8}
}

func (x *GetDomainResponse) GetDomains() []*Domain {
	if x != nil {
		return x.Domains
	}
	return nil
}

type SendEventResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Dropped bool `protobuf:"varint,1,opt,name=dropped,proto3" json:"dropped,omitempty"`
}

func (x *SendEventResponse) Reset() {
	*x = SendEventResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_staples_v1_staples_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SendEventResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SendEventResponse) ProtoMessage() {}

func (x *SendEventResponse) ProtoReflect() protoreflect.Message {
	mi := &file_staples_v1_staples_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SendEventResponse.ProtoReflect.Descriptor instead.
func (*SendEventResponse) Descriptor() ([]byte, []int) {
	return file_staples_v1_staples_proto_rawDescGZIP(), []int{9}
}

func (x *SendEventResponse) GetDropped() bool {
	if x != nil {
		return x.Dropped
	}
	return false
}

type PrimaryIndex_Resource struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name     string              `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Granules map[string]*Granule `protobuf:"bytes,2,rep,name=granules,proto3" json:"granules,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *PrimaryIndex_Resource) Reset() {
	*x = PrimaryIndex_Resource{}
	if protoimpl.UnsafeEnabled {
		mi := &file_staples_v1_staples_proto_msgTypes[11]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PrimaryIndex_Resource) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PrimaryIndex_Resource) ProtoMessage() {}

func (x *PrimaryIndex_Resource) ProtoReflect() protoreflect.Message {
	mi := &file_staples_v1_staples_proto_msgTypes[11]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PrimaryIndex_Resource.ProtoReflect.Descriptor instead.
func (*PrimaryIndex_Resource) Descriptor() ([]byte, []int) {
	return file_staples_v1_staples_proto_rawDescGZIP(), []int{3, 1}
}

func (x *PrimaryIndex_Resource) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PrimaryIndex_Resource) GetGranules() map[string]*Granule {
	if x != nil {
		return x.Granules
	}
	return nil
}

var File_staples_v1_staples_proto protoreflect.FileDescriptor

var file_staples_v1_staples_proto_rawDesc = []byte{
	0x0a, 0x18, 0x73, 0x74, 0x61, 0x70, 0x6c, 0x65, 0x73, 0x2f, 0x76, 0x31, 0x2f, 0x73, 0x74, 0x61,
	0x70, 0x6c, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x02, 0x76, 0x31, 0x1a, 0x1b,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f,
	0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d,
	0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x64, 0x75,
	0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x62, 0x75,
	0x66, 0x2f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2f, 0x76, 0x61, 0x6c, 0x69, 0x64,
	0x61, 0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x23, 0x0a, 0x07, 0x56, 0x65, 0x72,
	0x73, 0x69, 0x6f, 0x6e, 0x12, 0x18, 0x0a, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x22, 0xfa,
	0x02, 0x0a, 0x06, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x12, 0x1a, 0x0a, 0x04, 0x64, 0x61, 0x74,
	0x61, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x06, 0xba, 0x48, 0x03, 0xc8, 0x01, 0x01, 0x52,
	0x04, 0x64, 0x61, 0x74, 0x61, 0x12, 0x1e, 0x0a, 0x06, 0x6c, 0x69, 0x73, 0x74, 0x65, 0x6e, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x06, 0xba, 0x48, 0x03, 0xc8, 0x01, 0x01, 0x52, 0x06, 0x6c,
	0x69, 0x73, 0x74, 0x65, 0x6e, 0x12, 0x25, 0x0a, 0x0a, 0x72, 0x61, 0x74, 0x65, 0x5f, 0x6c, 0x69,
	0x6d, 0x69, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x01, 0x42, 0x06, 0xba, 0x48, 0x03, 0xc8, 0x01,
	0x01, 0x52, 0x09, 0x72, 0x61, 0x74, 0x65, 0x4c, 0x69, 0x6d, 0x69, 0x74, 0x12, 0x29, 0x0a, 0x0c,
	0x67, 0x72, 0x61, 0x6e, 0x75, 0x6c, 0x65, 0x5f, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x05, 0x20, 0x01,
	0x28, 0x03, 0x42, 0x06, 0xba, 0x48, 0x03, 0xc8, 0x01, 0x01, 0x52, 0x0b, 0x67, 0x72, 0x61, 0x6e,
	0x75, 0x6c, 0x65, 0x53, 0x69, 0x7a, 0x65, 0x12, 0x22, 0x0a, 0x0d, 0x67, 0x65, 0x6f, 0x69, 0x70,
	0x5f, 0x64, 0x62, 0x5f, 0x70, 0x61, 0x74, 0x68, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b,
	0x67, 0x65, 0x6f, 0x69, 0x70, 0x44, 0x62, 0x50, 0x61, 0x74, 0x68, 0x12, 0x18, 0x0a, 0x07, 0x64,
	0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x73, 0x18, 0x09, 0x20, 0x03, 0x28, 0x09, 0x52, 0x07, 0x64, 0x6f,
	0x6d, 0x61, 0x69, 0x6e, 0x73, 0x12, 0x4c, 0x0a, 0x10, 0x72, 0x65, 0x74, 0x65, 0x6e, 0x74, 0x69,
	0x6f, 0x6e, 0x5f, 0x70, 0x65, 0x72, 0x69, 0x6f, 0x64, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x19, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x44, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x42, 0x06, 0xba, 0x48, 0x03, 0xc8,
	0x01, 0x01, 0x52, 0x0f, 0x72, 0x65, 0x74, 0x65, 0x6e, 0x74, 0x69, 0x6f, 0x6e, 0x50, 0x65, 0x72,
	0x69, 0x6f, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x61, 0x75, 0x74, 0x6f, 0x5f, 0x74, 0x6c, 0x73, 0x18,
	0x0b, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x61, 0x75, 0x74, 0x6f, 0x54, 0x6c, 0x73, 0x12, 0x1c,
	0x0a, 0x04, 0x61, 0x63, 0x6d, 0x65, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x08, 0x2e, 0x76,
	0x31, 0x2e, 0x41, 0x63, 0x6d, 0x65, 0x52, 0x04, 0x61, 0x63, 0x6d, 0x65, 0x12, 0x1d, 0x0a, 0x0a,
	0x61, 0x75, 0x74, 0x68, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x09, 0x61, 0x75, 0x74, 0x68, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0x4c, 0x0a, 0x04, 0x41,
	0x63, 0x6d, 0x65, 0x12, 0x20, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x42, 0x0a, 0xba, 0x48, 0x07, 0xc8, 0x01, 0x01, 0x72, 0x02, 0x60, 0x01, 0x52, 0x05,
	0x65, 0x6d, 0x61, 0x69, 0x6c, 0x12, 0x22, 0x0a, 0x06, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x0a, 0xba, 0x48, 0x07, 0xc8, 0x01, 0x01, 0x72, 0x02, 0x68,
	0x01, 0x52, 0x06, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x22, 0xd6, 0x02, 0x0a, 0x0c, 0x50, 0x72,
	0x69, 0x6d, 0x61, 0x72, 0x79, 0x49, 0x6e, 0x64, 0x65, 0x78, 0x12, 0x3d, 0x0a, 0x09, 0x72, 0x65,
	0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1f, 0x2e,
	0x76, 0x31, 0x2e, 0x50, 0x72, 0x69, 0x6d, 0x61, 0x72, 0x79, 0x49, 0x6e, 0x64, 0x65, 0x78, 0x2e,
	0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x09,
	0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x1a, 0x57, 0x0a, 0x0e, 0x52, 0x65, 0x73,
	0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b,
	0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x2f, 0x0a,
	0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x76,
	0x31, 0x2e, 0x50, 0x72, 0x69, 0x6d, 0x61, 0x72, 0x79, 0x49, 0x6e, 0x64, 0x65, 0x78, 0x2e, 0x52,
	0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02,
	0x38, 0x01, 0x1a, 0xad, 0x01, 0x0a, 0x08, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x12,
	0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x12, 0x43, 0x0a, 0x08, 0x67, 0x72, 0x61, 0x6e, 0x75, 0x6c, 0x65, 0x73, 0x18,
	0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x27, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x69, 0x6d, 0x61,
	0x72, 0x79, 0x49, 0x6e, 0x64, 0x65, 0x78, 0x2e, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65,
	0x2e, 0x47, 0x72, 0x61, 0x6e, 0x75, 0x6c, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x08,
	0x67, 0x72, 0x61, 0x6e, 0x75, 0x6c, 0x65, 0x73, 0x1a, 0x48, 0x0a, 0x0d, 0x47, 0x72, 0x61, 0x6e,
	0x75, 0x6c, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x21, 0x0a, 0x05, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0b, 0x2e, 0x76, 0x31, 0x2e,
	0x47, 0x72, 0x61, 0x6e, 0x75, 0x6c, 0x65, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02,
	0x38, 0x01, 0x22, 0x65, 0x0a, 0x07, 0x47, 0x72, 0x61, 0x6e, 0x75, 0x6c, 0x65, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x10, 0x0a,
	0x03, 0x6d, 0x69, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x03, 0x6d, 0x69, 0x6e, 0x12,
	0x10, 0x0a, 0x03, 0x6d, 0x61, 0x78, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x03, 0x6d, 0x61,
	0x78, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x04, 0x52,
	0x04, 0x73, 0x69, 0x7a, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x72, 0x6f, 0x77, 0x73, 0x18, 0x05, 0x20,
	0x01, 0x28, 0x04, 0x52, 0x04, 0x72, 0x6f, 0x77, 0x73, 0x22, 0xe3, 0x01, 0x0a, 0x05, 0x45, 0x76,
	0x65, 0x6e, 0x74, 0x12, 0x14, 0x0a, 0x01, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x06,
	0xba, 0x48, 0x03, 0xc8, 0x01, 0x01, 0x52, 0x01, 0x6e, 0x12, 0x1d, 0x0a, 0x03, 0x75, 0x72, 0x6c,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x0b, 0xba, 0x48, 0x08, 0xc8, 0x01, 0x01, 0x72, 0x03,
	0x88, 0x01, 0x01, 0x52, 0x03, 0x75, 0x72, 0x6c, 0x12, 0x18, 0x0a, 0x01, 0x64, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x42, 0x0a, 0xba, 0x48, 0x07, 0xc8, 0x01, 0x01, 0x72, 0x02, 0x68, 0x01, 0x52,
	0x01, 0x64, 0x12, 0x0c, 0x0a, 0x01, 0x77, 0x18, 0x04, 0x20, 0x01, 0x28, 0x05, 0x52, 0x01, 0x77,
	0x12, 0x0c, 0x0a, 0x01, 0x68, 0x18, 0x05, 0x20, 0x01, 0x28, 0x08, 0x52, 0x01, 0x68, 0x12, 0x17,
	0x0a, 0x02, 0x69, 0x70, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x42, 0x07, 0xba, 0x48, 0x04, 0x72,
	0x02, 0x70, 0x01, 0x52, 0x02, 0x69, 0x70, 0x12, 0x0e, 0x0a, 0x02, 0x75, 0x61, 0x18, 0x07, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x02, 0x75, 0x61, 0x12, 0x0c, 0x0a, 0x01, 0x72, 0x18, 0x08, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x01, 0x72, 0x12, 0x38, 0x0a, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
	0x6d, 0x70, 0x18, 0x09, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x22,
	0x28, 0x0a, 0x06, 0x44, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x12, 0x1e, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x0a, 0xba, 0x48, 0x07, 0xc8, 0x01, 0x01, 0x72,
	0x02, 0x68, 0x01, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x12, 0x0a, 0x10, 0x47, 0x65, 0x74,
	0x44, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0x39, 0x0a,
	0x11, 0x47, 0x65, 0x74, 0x44, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x24, 0x0a, 0x07, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x73, 0x18, 0x01, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x0a, 0x2e, 0x76, 0x31, 0x2e, 0x44, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x52,
	0x07, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x73, 0x22, 0x2d, 0x0a, 0x11, 0x53, 0x65, 0x6e, 0x64,
	0x45, 0x76, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x18, 0x0a,
	0x07, 0x64, 0x72, 0x6f, 0x70, 0x70, 0x65, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07,
	0x64, 0x72, 0x6f, 0x70, 0x70, 0x65, 0x64, 0x42, 0x6f, 0x0a, 0x06, 0x63, 0x6f, 0x6d, 0x2e, 0x76,
	0x31, 0x42, 0x0c, 0x53, 0x74, 0x61, 0x70, 0x6c, 0x65, 0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50,
	0x01, 0x5a, 0x2f, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x76, 0x69,
	0x6e, 0x63, 0x65, 0x61, 0x6e, 0x61, 0x6c, 0x79, 0x74, 0x69, 0x63, 0x73, 0x2f, 0x74, 0x73, 0x75,
	0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x73, 0x74, 0x61, 0x70, 0x6c, 0x65, 0x73, 0x2f,
	0x76, 0x31, 0xa2, 0x02, 0x03, 0x56, 0x58, 0x58, 0xaa, 0x02, 0x02, 0x56, 0x31, 0xca, 0x02, 0x02,
	0x56, 0x31, 0xe2, 0x02, 0x0e, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0xea, 0x02, 0x02, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_staples_v1_staples_proto_rawDescOnce sync.Once
	file_staples_v1_staples_proto_rawDescData = file_staples_v1_staples_proto_rawDesc
)

func file_staples_v1_staples_proto_rawDescGZIP() []byte {
	file_staples_v1_staples_proto_rawDescOnce.Do(func() {
		file_staples_v1_staples_proto_rawDescData = protoimpl.X.CompressGZIP(file_staples_v1_staples_proto_rawDescData)
	})
	return file_staples_v1_staples_proto_rawDescData
}

var file_staples_v1_staples_proto_msgTypes = make([]protoimpl.MessageInfo, 13)
var file_staples_v1_staples_proto_goTypes = []interface{}{
	(*Version)(nil),               // 0: v1.Version
	(*Config)(nil),                // 1: v1.Config
	(*Acme)(nil),                  // 2: v1.Acme
	(*PrimaryIndex)(nil),          // 3: v1.PrimaryIndex
	(*Granule)(nil),               // 4: v1.Granule
	(*Event)(nil),                 // 5: v1.Event
	(*Domain)(nil),                // 6: v1.Domain
	(*GetDomainRequest)(nil),      // 7: v1.GetDomainRequest
	(*GetDomainResponse)(nil),     // 8: v1.GetDomainResponse
	(*SendEventResponse)(nil),     // 9: v1.SendEventResponse
	nil,                           // 10: v1.PrimaryIndex.ResourcesEntry
	(*PrimaryIndex_Resource)(nil), // 11: v1.PrimaryIndex.Resource
	nil,                           // 12: v1.PrimaryIndex.Resource.GranulesEntry
	(*durationpb.Duration)(nil),   // 13: google.protobuf.Duration
	(*timestamppb.Timestamp)(nil), // 14: google.protobuf.Timestamp
}
var file_staples_v1_staples_proto_depIdxs = []int32{
	13, // 0: v1.Config.retention_period:type_name -> google.protobuf.Duration
	2,  // 1: v1.Config.acme:type_name -> v1.Acme
	10, // 2: v1.PrimaryIndex.resources:type_name -> v1.PrimaryIndex.ResourcesEntry
	14, // 3: v1.Event.timestamp:type_name -> google.protobuf.Timestamp
	6,  // 4: v1.GetDomainResponse.domains:type_name -> v1.Domain
	11, // 5: v1.PrimaryIndex.ResourcesEntry.value:type_name -> v1.PrimaryIndex.Resource
	12, // 6: v1.PrimaryIndex.Resource.granules:type_name -> v1.PrimaryIndex.Resource.GranulesEntry
	4,  // 7: v1.PrimaryIndex.Resource.GranulesEntry.value:type_name -> v1.Granule
	8,  // [8:8] is the sub-list for method output_type
	8,  // [8:8] is the sub-list for method input_type
	8,  // [8:8] is the sub-list for extension type_name
	8,  // [8:8] is the sub-list for extension extendee
	0,  // [0:8] is the sub-list for field type_name
}

func init() { file_staples_v1_staples_proto_init() }
func file_staples_v1_staples_proto_init() {
	if File_staples_v1_staples_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_staples_v1_staples_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Version); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_staples_v1_staples_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Config); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_staples_v1_staples_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Acme); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_staples_v1_staples_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PrimaryIndex); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_staples_v1_staples_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Granule); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_staples_v1_staples_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Event); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_staples_v1_staples_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Domain); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_staples_v1_staples_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetDomainRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_staples_v1_staples_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetDomainResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_staples_v1_staples_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SendEventResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_staples_v1_staples_proto_msgTypes[11].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PrimaryIndex_Resource); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_staples_v1_staples_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   13,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_staples_v1_staples_proto_goTypes,
		DependencyIndexes: file_staples_v1_staples_proto_depIdxs,
		MessageInfos:      file_staples_v1_staples_proto_msgTypes,
	}.Build()
	File_staples_v1_staples_proto = out.File
	file_staples_v1_staples_proto_rawDesc = nil
	file_staples_v1_staples_proto_goTypes = nil
	file_staples_v1_staples_proto_depIdxs = nil
}
