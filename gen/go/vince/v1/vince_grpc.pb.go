// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: vince/v1/vince.proto

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
	InternalCLuster_Join_FullMethodName       = "/v1.InternalCLuster/Join"
	InternalCLuster_Load_FullMethodName       = "/v1.InternalCLuster/Load"
	InternalCLuster_Backup_FullMethodName     = "/v1.InternalCLuster/Backup"
	InternalCLuster_RemoveNode_FullMethodName = "/v1.InternalCLuster/RemoveNode"
	InternalCLuster_Notify_FullMethodName     = "/v1.InternalCLuster/Notify"
	InternalCLuster_NodeAPI_FullMethodName    = "/v1.InternalCLuster/NodeAPI"
	InternalCLuster_SendData_FullMethodName   = "/v1.InternalCLuster/SendData"
	InternalCLuster_Realtime_FullMethodName   = "/v1.InternalCLuster/Realtime"
	InternalCLuster_Aggregate_FullMethodName  = "/v1.InternalCLuster/Aggregate"
	InternalCLuster_Timeseries_FullMethodName = "/v1.InternalCLuster/Timeseries"
	InternalCLuster_BreakDown_FullMethodName  = "/v1.InternalCLuster/BreakDown"
)

// InternalCLusterClient is the client API for InternalCLuster service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type InternalCLusterClient interface {
	Join(ctx context.Context, in *Join_Request, opts ...grpc.CallOption) (*Join_Response, error)
	Load(ctx context.Context, in *Load_Request, opts ...grpc.CallOption) (*emptypb.Empty, error)
	Backup(ctx context.Context, in *Backup_Request, opts ...grpc.CallOption) (InternalCLuster_BackupClient, error)
	RemoveNode(ctx context.Context, in *RemoveNode_Request, opts ...grpc.CallOption) (*emptypb.Empty, error)
	Notify(ctx context.Context, in *Notify_Request, opts ...grpc.CallOption) (*emptypb.Empty, error)
	NodeAPI(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*NodeMeta, error)
	SendData(ctx context.Context, in *Data, opts ...grpc.CallOption) (*emptypb.Empty, error)
	Realtime(ctx context.Context, in *Realtime_Request, opts ...grpc.CallOption) (*Realtime_Response, error)
	Aggregate(ctx context.Context, in *Aggregate_Request, opts ...grpc.CallOption) (*Aggregate_Response, error)
	Timeseries(ctx context.Context, in *Timeseries_Request, opts ...grpc.CallOption) (*Timeseries_Response, error)
	BreakDown(ctx context.Context, in *BreakDown_Request, opts ...grpc.CallOption) (*BreakDown_Response, error)
}

type internalCLusterClient struct {
	cc grpc.ClientConnInterface
}

func NewInternalCLusterClient(cc grpc.ClientConnInterface) InternalCLusterClient {
	return &internalCLusterClient{cc}
}

func (c *internalCLusterClient) Join(ctx context.Context, in *Join_Request, opts ...grpc.CallOption) (*Join_Response, error) {
	out := new(Join_Response)
	err := c.cc.Invoke(ctx, InternalCLuster_Join_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *internalCLusterClient) Load(ctx context.Context, in *Load_Request, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, InternalCLuster_Load_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *internalCLusterClient) Backup(ctx context.Context, in *Backup_Request, opts ...grpc.CallOption) (InternalCLuster_BackupClient, error) {
	stream, err := c.cc.NewStream(ctx, &InternalCLuster_ServiceDesc.Streams[0], InternalCLuster_Backup_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &internalCLusterBackupClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type InternalCLuster_BackupClient interface {
	Recv() (*Backup_Response, error)
	grpc.ClientStream
}

type internalCLusterBackupClient struct {
	grpc.ClientStream
}

func (x *internalCLusterBackupClient) Recv() (*Backup_Response, error) {
	m := new(Backup_Response)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *internalCLusterClient) RemoveNode(ctx context.Context, in *RemoveNode_Request, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, InternalCLuster_RemoveNode_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *internalCLusterClient) Notify(ctx context.Context, in *Notify_Request, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, InternalCLuster_Notify_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *internalCLusterClient) NodeAPI(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*NodeMeta, error) {
	out := new(NodeMeta)
	err := c.cc.Invoke(ctx, InternalCLuster_NodeAPI_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *internalCLusterClient) SendData(ctx context.Context, in *Data, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, InternalCLuster_SendData_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *internalCLusterClient) Realtime(ctx context.Context, in *Realtime_Request, opts ...grpc.CallOption) (*Realtime_Response, error) {
	out := new(Realtime_Response)
	err := c.cc.Invoke(ctx, InternalCLuster_Realtime_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *internalCLusterClient) Aggregate(ctx context.Context, in *Aggregate_Request, opts ...grpc.CallOption) (*Aggregate_Response, error) {
	out := new(Aggregate_Response)
	err := c.cc.Invoke(ctx, InternalCLuster_Aggregate_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *internalCLusterClient) Timeseries(ctx context.Context, in *Timeseries_Request, opts ...grpc.CallOption) (*Timeseries_Response, error) {
	out := new(Timeseries_Response)
	err := c.cc.Invoke(ctx, InternalCLuster_Timeseries_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *internalCLusterClient) BreakDown(ctx context.Context, in *BreakDown_Request, opts ...grpc.CallOption) (*BreakDown_Response, error) {
	out := new(BreakDown_Response)
	err := c.cc.Invoke(ctx, InternalCLuster_BreakDown_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// InternalCLusterServer is the server API for InternalCLuster service.
// All implementations must embed UnimplementedInternalCLusterServer
// for forward compatibility
type InternalCLusterServer interface {
	Join(context.Context, *Join_Request) (*Join_Response, error)
	Load(context.Context, *Load_Request) (*emptypb.Empty, error)
	Backup(*Backup_Request, InternalCLuster_BackupServer) error
	RemoveNode(context.Context, *RemoveNode_Request) (*emptypb.Empty, error)
	Notify(context.Context, *Notify_Request) (*emptypb.Empty, error)
	NodeAPI(context.Context, *emptypb.Empty) (*NodeMeta, error)
	SendData(context.Context, *Data) (*emptypb.Empty, error)
	Realtime(context.Context, *Realtime_Request) (*Realtime_Response, error)
	Aggregate(context.Context, *Aggregate_Request) (*Aggregate_Response, error)
	Timeseries(context.Context, *Timeseries_Request) (*Timeseries_Response, error)
	BreakDown(context.Context, *BreakDown_Request) (*BreakDown_Response, error)
	mustEmbedUnimplementedInternalCLusterServer()
}

// UnimplementedInternalCLusterServer must be embedded to have forward compatible implementations.
type UnimplementedInternalCLusterServer struct {
}

func (UnimplementedInternalCLusterServer) Join(context.Context, *Join_Request) (*Join_Response, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Join not implemented")
}
func (UnimplementedInternalCLusterServer) Load(context.Context, *Load_Request) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Load not implemented")
}
func (UnimplementedInternalCLusterServer) Backup(*Backup_Request, InternalCLuster_BackupServer) error {
	return status.Errorf(codes.Unimplemented, "method Backup not implemented")
}
func (UnimplementedInternalCLusterServer) RemoveNode(context.Context, *RemoveNode_Request) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RemoveNode not implemented")
}
func (UnimplementedInternalCLusterServer) Notify(context.Context, *Notify_Request) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Notify not implemented")
}
func (UnimplementedInternalCLusterServer) NodeAPI(context.Context, *emptypb.Empty) (*NodeMeta, error) {
	return nil, status.Errorf(codes.Unimplemented, "method NodeAPI not implemented")
}
func (UnimplementedInternalCLusterServer) SendData(context.Context, *Data) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SendData not implemented")
}
func (UnimplementedInternalCLusterServer) Realtime(context.Context, *Realtime_Request) (*Realtime_Response, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Realtime not implemented")
}
func (UnimplementedInternalCLusterServer) Aggregate(context.Context, *Aggregate_Request) (*Aggregate_Response, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Aggregate not implemented")
}
func (UnimplementedInternalCLusterServer) Timeseries(context.Context, *Timeseries_Request) (*Timeseries_Response, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Timeseries not implemented")
}
func (UnimplementedInternalCLusterServer) BreakDown(context.Context, *BreakDown_Request) (*BreakDown_Response, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BreakDown not implemented")
}
func (UnimplementedInternalCLusterServer) mustEmbedUnimplementedInternalCLusterServer() {}

// UnsafeInternalCLusterServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to InternalCLusterServer will
// result in compilation errors.
type UnsafeInternalCLusterServer interface {
	mustEmbedUnimplementedInternalCLusterServer()
}

func RegisterInternalCLusterServer(s grpc.ServiceRegistrar, srv InternalCLusterServer) {
	s.RegisterService(&InternalCLuster_ServiceDesc, srv)
}

func _InternalCLuster_Join_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Join_Request)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InternalCLusterServer).Join(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InternalCLuster_Join_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InternalCLusterServer).Join(ctx, req.(*Join_Request))
	}
	return interceptor(ctx, in, info, handler)
}

func _InternalCLuster_Load_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Load_Request)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InternalCLusterServer).Load(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InternalCLuster_Load_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InternalCLusterServer).Load(ctx, req.(*Load_Request))
	}
	return interceptor(ctx, in, info, handler)
}

func _InternalCLuster_Backup_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(Backup_Request)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(InternalCLusterServer).Backup(m, &internalCLusterBackupServer{stream})
}

type InternalCLuster_BackupServer interface {
	Send(*Backup_Response) error
	grpc.ServerStream
}

type internalCLusterBackupServer struct {
	grpc.ServerStream
}

func (x *internalCLusterBackupServer) Send(m *Backup_Response) error {
	return x.ServerStream.SendMsg(m)
}

func _InternalCLuster_RemoveNode_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RemoveNode_Request)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InternalCLusterServer).RemoveNode(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InternalCLuster_RemoveNode_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InternalCLusterServer).RemoveNode(ctx, req.(*RemoveNode_Request))
	}
	return interceptor(ctx, in, info, handler)
}

func _InternalCLuster_Notify_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Notify_Request)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InternalCLusterServer).Notify(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InternalCLuster_Notify_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InternalCLusterServer).Notify(ctx, req.(*Notify_Request))
	}
	return interceptor(ctx, in, info, handler)
}

func _InternalCLuster_NodeAPI_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InternalCLusterServer).NodeAPI(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InternalCLuster_NodeAPI_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InternalCLusterServer).NodeAPI(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _InternalCLuster_SendData_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Data)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InternalCLusterServer).SendData(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InternalCLuster_SendData_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InternalCLusterServer).SendData(ctx, req.(*Data))
	}
	return interceptor(ctx, in, info, handler)
}

func _InternalCLuster_Realtime_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Realtime_Request)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InternalCLusterServer).Realtime(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InternalCLuster_Realtime_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InternalCLusterServer).Realtime(ctx, req.(*Realtime_Request))
	}
	return interceptor(ctx, in, info, handler)
}

func _InternalCLuster_Aggregate_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Aggregate_Request)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InternalCLusterServer).Aggregate(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InternalCLuster_Aggregate_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InternalCLusterServer).Aggregate(ctx, req.(*Aggregate_Request))
	}
	return interceptor(ctx, in, info, handler)
}

func _InternalCLuster_Timeseries_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Timeseries_Request)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InternalCLusterServer).Timeseries(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InternalCLuster_Timeseries_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InternalCLusterServer).Timeseries(ctx, req.(*Timeseries_Request))
	}
	return interceptor(ctx, in, info, handler)
}

func _InternalCLuster_BreakDown_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BreakDown_Request)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InternalCLusterServer).BreakDown(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InternalCLuster_BreakDown_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InternalCLusterServer).BreakDown(ctx, req.(*BreakDown_Request))
	}
	return interceptor(ctx, in, info, handler)
}

// InternalCLuster_ServiceDesc is the grpc.ServiceDesc for InternalCLuster service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var InternalCLuster_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "v1.InternalCLuster",
	HandlerType: (*InternalCLusterServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Join",
			Handler:    _InternalCLuster_Join_Handler,
		},
		{
			MethodName: "Load",
			Handler:    _InternalCLuster_Load_Handler,
		},
		{
			MethodName: "RemoveNode",
			Handler:    _InternalCLuster_RemoveNode_Handler,
		},
		{
			MethodName: "Notify",
			Handler:    _InternalCLuster_Notify_Handler,
		},
		{
			MethodName: "NodeAPI",
			Handler:    _InternalCLuster_NodeAPI_Handler,
		},
		{
			MethodName: "SendData",
			Handler:    _InternalCLuster_SendData_Handler,
		},
		{
			MethodName: "Realtime",
			Handler:    _InternalCLuster_Realtime_Handler,
		},
		{
			MethodName: "Aggregate",
			Handler:    _InternalCLuster_Aggregate_Handler,
		},
		{
			MethodName: "Timeseries",
			Handler:    _InternalCLuster_Timeseries_Handler,
		},
		{
			MethodName: "BreakDown",
			Handler:    _InternalCLuster_BreakDown_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "Backup",
			Handler:       _InternalCLuster_Backup_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "vince/v1/vince.proto",
}
