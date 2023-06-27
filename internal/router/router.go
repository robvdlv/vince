package router

import (
	"context"
	"net/http"
	"net/http/pprof"

	"github.com/prometheus/client_golang/prometheus/promhttp"
	"github.com/vinceanalytics/vince/internal/api"
	"github.com/vinceanalytics/vince/internal/auth"
	"github.com/vinceanalytics/vince/internal/avatar"
	"github.com/vinceanalytics/vince/internal/config"
	"github.com/vinceanalytics/vince/internal/handlers/account"
	"github.com/vinceanalytics/vince/internal/handlers/goals"
	"github.com/vinceanalytics/vince/internal/handlers/pat"
	"github.com/vinceanalytics/vince/internal/handlers/site"
	"github.com/vinceanalytics/vince/internal/pages"
	"github.com/vinceanalytics/vince/internal/plug"
	"github.com/vinceanalytics/vince/internal/render"
	"github.com/vinceanalytics/vince/internal/share"
	"github.com/vinceanalytics/vince/internal/stats"
)

func Pipe(ctx context.Context) plug.Pipeline {
	metrics := promhttp.Handler()
	pipe2 := plug.SharedLink()

	// Pipeline for public facing apis. This includes events ingestion api and
	// health endpoints.
	public := plug.API(ctx)

	pipe6 := plug.InternalStatsAPI()
	browser := plug.Browser(ctx)
	pipe5 := append(plug.Browser(ctx), plug.Protect()...)

	// This is the pipeline for authorized owned resources accessed from the web
	// browser.
	o := append(plug.Browser(ctx), plug.Protect()...).And(plug.RequireAccount)

	// Pipeline for accessing publicly reachable resources via the web browser.
	www := append(plug.Browser(ctx), plug.Protect()...).And(plug.RequireLoggedOut)
	return plug.Pipeline{
		browser.PathGET("/metrics", metrics.ServeHTTP),
		// add prefix matches on the top of the pipeline for faster lookups
		plug.Ok(config.Get(ctx).EnableProfile,
			pipe5.Prefix("/debug/pprof/", pprof.Index),
		),
		plug.PREFIX("/api/stats",
			pipe6.GET("/api/stats/:site", stats.Query),
			NotFound,
		),

		plug.PREFIX("/share/",
			pipe2.GET(`^/share/:site$`, share.SharedLink),
			pipe2.GET(`^/share/:slug/authenticate$`, share.AuthenticateSharedLink),
			NotFound,
		),

		public.PathPOST("/api/event", api.Events),
		public.PathGET("/health", api.Health),
		public.PathGET("/version", api.Version),

		browser.PathGET("/", pages.Home),
		browser.PathGET("/avatar", avatar.Serve),
		www.PathGET("/register", auth.RegisterForm),
		www.PathPOST("/register", auth.Register),
		www.GET(`^/register/invitation/:invitation_id$`, auth.RegisterFromInvitationForm),
		www.POST(`^/register/invitation/:invitation_id$`, auth.RegisterFromInvitation),
		www.PathGET("/activate", auth.ActivateForm),
		www.PathPOST("/activate", auth.Activate),
		www.PathPOST("/activate/request-code", auth.RequestActivationCode),
		www.PathGET("/login", auth.LoginForm),
		www.PathPOST("/login", auth.Login),
		www.PathGET("/password/request-reset", auth.PasswordResetRequestForm),
		www.PathPOST("/password/request-reset", auth.PasswordResetRequest),
		www.PathGET("/password/reset", auth.PasswordResetForm),
		www.PathPOST("/password/reset", auth.PasswordReset),

		o.PathGET("/password", auth.PasswordForm),
		o.PathPOST("/password", auth.SetPassword),
		o.PathGET("/logout", auth.Logout),
		o.PathGET("/settings", account.Settings),
		o.PathPOST("/settings", account.SaveSettings),
		o.PathPOST("/settings/tokens", pat.Create),
		o.DELETE(`^/settings/tokens/:id$`, pat.Delete),

		o.PathPOST("/new", site.Create),
		o.PathGET("/new", site.New),
		o.GET("^/:owner/:site/settings$", site.Settings),
		o.POST("^/:owner/:site/settings/visibility/public$", site.Public),
		o.POST("^/:owner/:site/settings/visibility/private$", site.Private),
		o.GET("^/:owner/:site/goals/new$", goals.New),
		o.POST("^/:owner/:site/goals$", goals.Create),
		o.DELETE("^/:owner/:site/goals/:goal$", goals.Delete),
		o.GET("^/:owner/:site$", site.Home),
		o.DELETE("^/:owner/:site$", site.Delete),
		o.GET("^/:owner$", account.Home),
		NotFound,
	}
}

func NotFound(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		render.ERROR(r.Context(), w, http.StatusNotFound)
	})
}
