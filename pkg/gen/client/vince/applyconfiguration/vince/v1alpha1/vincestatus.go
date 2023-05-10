/*
Licensed under the GNU AFFERO GENERAL PUBLIC LICENSE Version 3
*/
// Code generated by applyconfiguration-gen. DO NOT EDIT.

package v1alpha1

import (
	appsv1 "k8s.io/api/apps/v1"
	v1 "k8s.io/api/core/v1"
)

// VinceStatusApplyConfiguration represents an declarative configuration of the VinceStatus type for use
// with apply.
type VinceStatusApplyConfiguration struct {
	Secret      *string             `json:"secret,omitempty"`
	Service     *v1.ServiceStatus   `json:"service,omitempty"`
	Pod         *v1.PodStatus       `json:"pod,omitempty"`
	StatefulSet *appsv1.StatefulSet `json:"stateful_set,omitempty"`
}

// VinceStatusApplyConfiguration constructs an declarative configuration of the VinceStatus type for use with
// apply.
func VinceStatus() *VinceStatusApplyConfiguration {
	return &VinceStatusApplyConfiguration{}
}

// WithSecret sets the Secret field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the Secret field is set to the value of the last call.
func (b *VinceStatusApplyConfiguration) WithSecret(value string) *VinceStatusApplyConfiguration {
	b.Secret = &value
	return b
}

// WithService sets the Service field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the Service field is set to the value of the last call.
func (b *VinceStatusApplyConfiguration) WithService(value v1.ServiceStatus) *VinceStatusApplyConfiguration {
	b.Service = &value
	return b
}

// WithPod sets the Pod field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the Pod field is set to the value of the last call.
func (b *VinceStatusApplyConfiguration) WithPod(value v1.PodStatus) *VinceStatusApplyConfiguration {
	b.Pod = &value
	return b
}

// WithStatefulSet sets the StatefulSet field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the StatefulSet field is set to the value of the last call.
func (b *VinceStatusApplyConfiguration) WithStatefulSet(value appsv1.StatefulSet) *VinceStatusApplyConfiguration {
	b.StatefulSet = &value
	return b
}
