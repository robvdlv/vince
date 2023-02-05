package vince

import (
	"net/http"
	"net/url"

	"github.com/gernest/vince/timeseries"
)

func (v *Vince) v1Stats() http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodGet {
			switch r.URL.Path {
			case "/api/v1/stats/realtime/visitors":
				v.v1StatsRealtimeVisitors(w, r)
				return
			case "/api/v1/stats/aggregate":
				v.v1StatsAggregate(w, r)
				return
			case "/api/v1/stats/breakdown":
				v.v1StatsBreakdown(w, r)
				return
			case "/api/v1/stats/timeseries":
				v.v1StatsTimeseries(w, r)
				return
			}
		}
		http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
	})
}

func (v *Vince) v1StatsRealtimeVisitors(w http.ResponseWriter, r *http.Request) {
	query := make(url.Values)
	query.Set("period", "realtime")
	if r, err := v.ts.CurrentVisitors(r.Context(), timeseries.QueryFrom(query)); err != nil {
		xlg.Err(err).Msg("failed to query events")
	} else {
		ServeJSON(w, http.StatusOK, r)
	}
}

func (v *Vince) v1StatsAggregate(w http.ResponseWriter, r *http.Request) {
}
func (v *Vince) v1StatsBreakdown(w http.ResponseWriter, r *http.Request) {
}
func (v *Vince) v1StatsTimeseries(w http.ResponseWriter, r *http.Request) {
}
