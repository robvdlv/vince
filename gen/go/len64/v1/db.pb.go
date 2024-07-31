// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        (unknown)
// source: len64/v1/db.proto

package v1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ROLE int32

const (
	ROLE_OWNER  ROLE = 0
	ROLE_ADMIN  ROLE = 1
	ROLE_VIEWER ROLE = 2
)

// Enum value maps for ROLE.
var (
	ROLE_name = map[int32]string{
		0: "OWNER",
		1: "ADMIN",
		2: "VIEWER",
	}
	ROLE_value = map[string]int32{
		"OWNER":  0,
		"ADMIN":  1,
		"VIEWER": 2,
	}
)

func (x ROLE) Enum() *ROLE {
	p := new(ROLE)
	*p = x
	return p
}

func (x ROLE) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ROLE) Descriptor() protoreflect.EnumDescriptor {
	return file_len64_v1_db_proto_enumTypes[0].Descriptor()
}

func (ROLE) Type() protoreflect.EnumType {
	return &file_len64_v1_db_proto_enumTypes[0]
}

func (x ROLE) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ROLE.Descriptor instead.
func (ROLE) EnumDescriptor() ([]byte, []int) {
	return file_len64_v1_db_proto_rawDescGZIP(), []int{0}
}

type Site struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id     []byte  `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Domain string  `protobuf:"bytes,2,opt,name=domain,proto3" json:"domain,omitempty"`
	Public bool    `protobuf:"varint,3,opt,name=public,proto3" json:"public,omitempty"`
	Goals  []*Goal `protobuf:"bytes,4,rep,name=goals,proto3" json:"goals,omitempty"`
}

func (x *Site) Reset() {
	*x = Site{}
	if protoimpl.UnsafeEnabled {
		mi := &file_len64_v1_db_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Site) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Site) ProtoMessage() {}

func (x *Site) ProtoReflect() protoreflect.Message {
	mi := &file_len64_v1_db_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Site.ProtoReflect.Descriptor instead.
func (*Site) Descriptor() ([]byte, []int) {
	return file_len64_v1_db_proto_rawDescGZIP(), []int{0}
}

func (x *Site) GetId() []byte {
	if x != nil {
		return x.Id
	}
	return nil
}

func (x *Site) GetDomain() string {
	if x != nil {
		return x.Domain
	}
	return ""
}

func (x *Site) GetPublic() bool {
	if x != nil {
		return x.Public
	}
	return false
}

func (x *Site) GetGoals() []*Goal {
	if x != nil {
		return x.Goals
	}
	return nil
}

type Goal struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        []byte `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	EventName string `protobuf:"bytes,2,opt,name=event_name,json=eventName,proto3" json:"event_name,omitempty"`
	PagePath  string `protobuf:"bytes,3,opt,name=page_path,json=pagePath,proto3" json:"page_path,omitempty"`
}

func (x *Goal) Reset() {
	*x = Goal{}
	if protoimpl.UnsafeEnabled {
		mi := &file_len64_v1_db_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Goal) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Goal) ProtoMessage() {}

func (x *Goal) ProtoReflect() protoreflect.Message {
	mi := &file_len64_v1_db_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Goal.ProtoReflect.Descriptor instead.
func (*Goal) Descriptor() ([]byte, []int) {
	return file_len64_v1_db_proto_rawDescGZIP(), []int{1}
}

func (x *Goal) GetId() []byte {
	if x != nil {
		return x.Id
	}
	return nil
}

func (x *Goal) GetEventName() string {
	if x != nil {
		return x.EventName
	}
	return ""
}

func (x *Goal) GetPagePath() string {
	if x != nil {
		return x.PagePath
	}
	return ""
}

type User struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id         []byte        `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name       string        `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Email      string        `protobuf:"bytes,3,opt,name=email,proto3" json:"email,omitempty"`
	Password   []byte        `protobuf:"bytes,4,opt,name=password,proto3" json:"password,omitempty"`
	Sites      []*Site       `protobuf:"bytes,5,rep,name=sites,proto3" json:"sites,omitempty"`
	Invitation []*Invitation `protobuf:"bytes,6,rep,name=invitation,proto3" json:"invitation,omitempty"`
	Membership []*Membership `protobuf:"bytes,7,rep,name=membership,proto3" json:"membership,omitempty"`
}

func (x *User) Reset() {
	*x = User{}
	if protoimpl.UnsafeEnabled {
		mi := &file_len64_v1_db_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *User) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*User) ProtoMessage() {}

func (x *User) ProtoReflect() protoreflect.Message {
	mi := &file_len64_v1_db_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use User.ProtoReflect.Descriptor instead.
func (*User) Descriptor() ([]byte, []int) {
	return file_len64_v1_db_proto_rawDescGZIP(), []int{2}
}

func (x *User) GetId() []byte {
	if x != nil {
		return x.Id
	}
	return nil
}

func (x *User) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *User) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *User) GetPassword() []byte {
	if x != nil {
		return x.Password
	}
	return nil
}

func (x *User) GetSites() []*Site {
	if x != nil {
		return x.Sites
	}
	return nil
}

func (x *User) GetInvitation() []*Invitation {
	if x != nil {
		return x.Invitation
	}
	return nil
}

func (x *User) GetMembership() []*Membership {
	if x != nil {
		return x.Membership
	}
	return nil
}

type Invitation struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id   []byte `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Role ROLE   `protobuf:"varint,2,opt,name=role,proto3,enum=v1.ROLE" json:"role,omitempty"`
	Site *Site  `protobuf:"bytes,3,opt,name=site,proto3" json:"site,omitempty"`
}

func (x *Invitation) Reset() {
	*x = Invitation{}
	if protoimpl.UnsafeEnabled {
		mi := &file_len64_v1_db_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Invitation) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Invitation) ProtoMessage() {}

func (x *Invitation) ProtoReflect() protoreflect.Message {
	mi := &file_len64_v1_db_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Invitation.ProtoReflect.Descriptor instead.
func (*Invitation) Descriptor() ([]byte, []int) {
	return file_len64_v1_db_proto_rawDescGZIP(), []int{3}
}

func (x *Invitation) GetId() []byte {
	if x != nil {
		return x.Id
	}
	return nil
}

func (x *Invitation) GetRole() ROLE {
	if x != nil {
		return x.Role
	}
	return ROLE_OWNER
}

func (x *Invitation) GetSite() *Site {
	if x != nil {
		return x.Site
	}
	return nil
}

type Membership struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id   []byte `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Uid  []byte `protobuf:"bytes,2,opt,name=uid,proto3" json:"uid,omitempty"`
	Sid  []byte `protobuf:"bytes,3,opt,name=sid,proto3" json:"sid,omitempty"`
	Role ROLE   `protobuf:"varint,4,opt,name=role,proto3,enum=v1.ROLE" json:"role,omitempty"`
}

func (x *Membership) Reset() {
	*x = Membership{}
	if protoimpl.UnsafeEnabled {
		mi := &file_len64_v1_db_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Membership) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Membership) ProtoMessage() {}

func (x *Membership) ProtoReflect() protoreflect.Message {
	mi := &file_len64_v1_db_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Membership.ProtoReflect.Descriptor instead.
func (*Membership) Descriptor() ([]byte, []int) {
	return file_len64_v1_db_proto_rawDescGZIP(), []int{4}
}

func (x *Membership) GetId() []byte {
	if x != nil {
		return x.Id
	}
	return nil
}

func (x *Membership) GetUid() []byte {
	if x != nil {
		return x.Uid
	}
	return nil
}

func (x *Membership) GetSid() []byte {
	if x != nil {
		return x.Sid
	}
	return nil
}

func (x *Membership) GetRole() ROLE {
	if x != nil {
		return x.Role
	}
	return ROLE_OWNER
}

var File_len64_v1_db_proto protoreflect.FileDescriptor

var file_len64_v1_db_proto_rawDesc = []byte{
	0x0a, 0x11, 0x6c, 0x65, 0x6e, 0x36, 0x34, 0x2f, 0x76, 0x31, 0x2f, 0x64, 0x62, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x02, 0x76, 0x31, 0x22, 0x66, 0x0a, 0x04, 0x53, 0x69, 0x74, 0x65, 0x12,
	0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x02, 0x69, 0x64, 0x12,
	0x16, 0x0a, 0x06, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x06, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x12, 0x16, 0x0a, 0x06, 0x70, 0x75, 0x62, 0x6c, 0x69,
	0x63, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x12,
	0x1e, 0x0a, 0x05, 0x67, 0x6f, 0x61, 0x6c, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x08,
	0x2e, 0x76, 0x31, 0x2e, 0x47, 0x6f, 0x61, 0x6c, 0x52, 0x05, 0x67, 0x6f, 0x61, 0x6c, 0x73, 0x22,
	0x52, 0x0a, 0x04, 0x47, 0x6f, 0x61, 0x6c, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0c, 0x52, 0x02, 0x69, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x65, 0x76, 0x65, 0x6e, 0x74,
	0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x65, 0x76, 0x65,
	0x6e, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x70,
	0x61, 0x74, 0x68, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x61, 0x67, 0x65, 0x50,
	0x61, 0x74, 0x68, 0x22, 0xdc, 0x01, 0x0a, 0x04, 0x55, 0x73, 0x65, 0x72, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f,
	0x72, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f,
	0x72, 0x64, 0x12, 0x1e, 0x0a, 0x05, 0x73, 0x69, 0x74, 0x65, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x08, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x69, 0x74, 0x65, 0x52, 0x05, 0x73, 0x69, 0x74,
	0x65, 0x73, 0x12, 0x2e, 0x0a, 0x0a, 0x69, 0x6e, 0x76, 0x69, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x18, 0x06, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x6e, 0x76, 0x69,
	0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0a, 0x69, 0x6e, 0x76, 0x69, 0x74, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x12, 0x2e, 0x0a, 0x0a, 0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70,
	0x18, 0x07, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x65, 0x6d, 0x62,
	0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x52, 0x0a, 0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x68,
	0x69, 0x70, 0x22, 0x58, 0x0a, 0x0a, 0x49, 0x6e, 0x76, 0x69, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x02, 0x69, 0x64,
	0x12, 0x1c, 0x0a, 0x04, 0x72, 0x6f, 0x6c, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x08,
	0x2e, 0x76, 0x31, 0x2e, 0x52, 0x4f, 0x4c, 0x45, 0x52, 0x04, 0x72, 0x6f, 0x6c, 0x65, 0x12, 0x1c,
	0x0a, 0x04, 0x73, 0x69, 0x74, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x08, 0x2e, 0x76,
	0x31, 0x2e, 0x53, 0x69, 0x74, 0x65, 0x52, 0x04, 0x73, 0x69, 0x74, 0x65, 0x22, 0x5e, 0x0a, 0x0a,
	0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x02, 0x69, 0x64, 0x12, 0x10, 0x0a, 0x03, 0x75, 0x69,
	0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x03, 0x75, 0x69, 0x64, 0x12, 0x10, 0x0a, 0x03,
	0x73, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x03, 0x73, 0x69, 0x64, 0x12, 0x1c,
	0x0a, 0x04, 0x72, 0x6f, 0x6c, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x08, 0x2e, 0x76,
	0x31, 0x2e, 0x52, 0x4f, 0x4c, 0x45, 0x52, 0x04, 0x72, 0x6f, 0x6c, 0x65, 0x2a, 0x28, 0x0a, 0x04,
	0x52, 0x4f, 0x4c, 0x45, 0x12, 0x09, 0x0a, 0x05, 0x4f, 0x57, 0x4e, 0x45, 0x52, 0x10, 0x00, 0x12,
	0x09, 0x0a, 0x05, 0x41, 0x44, 0x4d, 0x49, 0x4e, 0x10, 0x01, 0x12, 0x0a, 0x0a, 0x06, 0x56, 0x49,
	0x45, 0x57, 0x45, 0x52, 0x10, 0x02, 0x42, 0x63, 0x0a, 0x06, 0x63, 0x6f, 0x6d, 0x2e, 0x76, 0x31,
	0x42, 0x07, 0x44, 0x62, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x28, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x67, 0x65, 0x72, 0x6e, 0x65, 0x73, 0x74, 0x2f,
	0x6c, 0x65, 0x6e, 0x36, 0x34, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x6c, 0x65, 0x6e,
	0x36, 0x34, 0x2f, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x56, 0x58, 0x58, 0xaa, 0x02, 0x02, 0x56, 0x31,
	0xca, 0x02, 0x02, 0x56, 0x31, 0xe2, 0x02, 0x0e, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x02, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_len64_v1_db_proto_rawDescOnce sync.Once
	file_len64_v1_db_proto_rawDescData = file_len64_v1_db_proto_rawDesc
)

func file_len64_v1_db_proto_rawDescGZIP() []byte {
	file_len64_v1_db_proto_rawDescOnce.Do(func() {
		file_len64_v1_db_proto_rawDescData = protoimpl.X.CompressGZIP(file_len64_v1_db_proto_rawDescData)
	})
	return file_len64_v1_db_proto_rawDescData
}

var file_len64_v1_db_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_len64_v1_db_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_len64_v1_db_proto_goTypes = []interface{}{
	(ROLE)(0),          // 0: v1.ROLE
	(*Site)(nil),       // 1: v1.Site
	(*Goal)(nil),       // 2: v1.Goal
	(*User)(nil),       // 3: v1.User
	(*Invitation)(nil), // 4: v1.Invitation
	(*Membership)(nil), // 5: v1.Membership
}
var file_len64_v1_db_proto_depIdxs = []int32{
	2, // 0: v1.Site.goals:type_name -> v1.Goal
	1, // 1: v1.User.sites:type_name -> v1.Site
	4, // 2: v1.User.invitation:type_name -> v1.Invitation
	5, // 3: v1.User.membership:type_name -> v1.Membership
	0, // 4: v1.Invitation.role:type_name -> v1.ROLE
	1, // 5: v1.Invitation.site:type_name -> v1.Site
	0, // 6: v1.Membership.role:type_name -> v1.ROLE
	7, // [7:7] is the sub-list for method output_type
	7, // [7:7] is the sub-list for method input_type
	7, // [7:7] is the sub-list for extension type_name
	7, // [7:7] is the sub-list for extension extendee
	0, // [0:7] is the sub-list for field type_name
}

func init() { file_len64_v1_db_proto_init() }
func file_len64_v1_db_proto_init() {
	if File_len64_v1_db_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_len64_v1_db_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Site); i {
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
		file_len64_v1_db_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Goal); i {
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
		file_len64_v1_db_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*User); i {
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
		file_len64_v1_db_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Invitation); i {
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
		file_len64_v1_db_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Membership); i {
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
			RawDescriptor: file_len64_v1_db_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_len64_v1_db_proto_goTypes,
		DependencyIndexes: file_len64_v1_db_proto_depIdxs,
		EnumInfos:         file_len64_v1_db_proto_enumTypes,
		MessageInfos:      file_len64_v1_db_proto_msgTypes,
	}.Build()
	File_len64_v1_db_proto = out.File
	file_len64_v1_db_proto_rawDesc = nil
	file_len64_v1_db_proto_goTypes = nil
	file_len64_v1_db_proto_depIdxs = nil
}
