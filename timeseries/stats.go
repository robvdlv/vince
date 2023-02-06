package timeseries

import "context"

func (t *Tables) CurrentVisitors(ctx context.Context, query Query) (*Record, error) {
	return t.events.QueryRealtime(ctx, query.Select("user_id", "referrer").
		Filter("domain", Eq("vince.test")))
}
