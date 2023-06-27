package account

import (
	"net/http"

	"github.com/vinceanalytics/vince/internal/models"
	"github.com/vinceanalytics/vince/internal/render"
	"github.com/vinceanalytics/vince/internal/templates"
	"github.com/vinceanalytics/vince/internal/timeseries"
)

var homeTpl = templates.App("user/home.html")

func Home(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	u := models.GetUser(ctx)
	models.PreloadUser(ctx, u, "Sites")
	o := templates.Overview{
		Global: timeseries.Global(ctx, u.ID, 0),
		Panel:  r.URL.Query().Get("panel"),
	}
	for _, site := range u.Sites {
		o.Sites = append(o.Sites, templates.SiteOverView{
			Site:   site,
			Owner:  u.Name,
			Global: timeseries.Global(ctx, u.ID, site.ID),
		})
	}
	render.HTML(ctx, w, homeTpl, http.StatusOK, func(ctx *templates.Context) {
		ctx.USER = u
		ctx.Header.Mode = "profile"
		ctx.Overview = &o
	})
}
