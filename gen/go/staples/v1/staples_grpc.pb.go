// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: staples/v1/staples.proto

package v1

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	Staples_Build_FullMethodName = "/v1.Staples/Build"
)

// StaplesClient is the client API for Staples service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type StaplesClient interface {
	// Build returns version details of the current ots binary.
	Build(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*Version, error)
}

type staplesClient struct {
	cc grpc.ClientConnInterface
}

func NewStaplesClient(cc grpc.ClientConnInterface) StaplesClient {
	return &staplesClient{cc}
}

func (c *staplesClient) Build(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*Version, error) {
	out := new(Version)
	err := c.cc.Invoke(ctx, Staples_Build_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// StaplesServer is the server API for Staples service.
// All implementations must embed UnimplementedStaplesServer
// for forward compatibility
type StaplesServer interface {
	// Build returns version details of the current ots binary.
	Build(context.Context, *emptypb.Empty) (*Version, error)
	mustEmbedUnimplementedStaplesServer()
}

// UnimplementedStaplesServer must be embedded to have forward compatible implementations.
type UnimplementedStaplesServer struct {
}

func (UnimplementedStaplesServer) Build(context.Context, *emptypb.Empty) (*Version, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Build not implemented")
}
func (UnimplementedStaplesServer) mustEmbedUnimplementedStaplesServer() {}

// UnsafeStaplesServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to StaplesServer will
// result in compilation errors.
type UnsafeStaplesServer interface {
	mustEmbedUnimplementedStaplesServer()
}

func RegisterStaplesServer(s grpc.ServiceRegistrar, srv StaplesServer) {
	s.RegisterService(&Staples_ServiceDesc, srv)
}

func _Staples_Build_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(StaplesServer).Build(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Staples_Build_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(StaplesServer).Build(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

// Staples_ServiceDesc is the grpc.ServiceDesc for Staples service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Staples_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "v1.Staples",
	HandlerType: (*StaplesServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Build",
			Handler:    _Staples_Build_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "staples/v1/staples.proto",
}
