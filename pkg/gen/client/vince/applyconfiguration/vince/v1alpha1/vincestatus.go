/*
Licensed under the GNU AFFERO GENERAL PUBLIC LICENSE Version 3
*/
// Code generated by applyconfiguration-gen. DO NOT EDIT.

package v1alpha1

// VinceStatusApplyConfiguration represents an declarative configuration of the VinceStatus type for use
// with apply.
type VinceStatusApplyConfiguration struct {
	Secret *string `json:"secret,omitempty"`
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
