package site

import (
	"encoding/json"
	"net/http"

	"github.com/vinceanalytics/vince/internal/caches"
	"github.com/vinceanalytics/vince/internal/models"
	"github.com/vinceanalytics/vince/internal/render"
	"github.com/vinceanalytics/vince/internal/timeseries"
	"github.com/vinceanalytics/vince/pkg/log"
	"github.com/vinceanalytics/vince/pkg/names"
	"github.com/vinceanalytics/vince/pkg/spec"
	"gorm.io/gorm"
)

func APIGet(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	owner := models.GetUser(ctx)
	site := models.GetSite(ctx)
	render.JSON(w, http.StatusOK, siteSpec(owner, site))
}

func APIUpdate(w http.ResponseWriter, r *http.Request) {
	render.JSONError(w, http.StatusNotImplemented, http.StatusText(http.StatusNotImplemented))
}

func APIList(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	owner := models.GetUser(ctx)
	models.PreloadUser(ctx, owner, "Sites")
	o := make([]spec.Site, len(owner.Sites))
	for i := range owner.Sites {
		o[i] = siteSpec(owner, owner.Sites[i])
	}
	render.JSON(w, http.StatusOK, o)
}

func APIDelete(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	owner := models.GetUser(ctx)
	site := models.GetSite(ctx)

	// remove site from database
	models.DeleteSite(ctx, owner, site)

	// remove site from cache
	caches.Site(ctx).Del(site.Domain)

	// remove site events in collection  buffers
	timeseries.GetMap(ctx).Delete(site.ID)

	// permanently remove site stats
	timeseries.DropSite(ctx, owner.ID, site.ID)

	render.JSON(w, http.StatusOK, siteSpec(owner, site))
}

func APICreate(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	owner := models.GetUser(ctx)
	var o spec.CreateSite
	err := json.NewDecoder(r.Body).Decode(&o)
	if err != nil {
		log.Get().Err(err).Msg("failed to decode create site request body")
		render.JSONError(w, http.StatusBadRequest, http.StatusText(http.StatusBadRequest))
		return
	}
	var valid []string
	if o.Domain == "" {
		valid = append(valid, "missing domain field")
	} else {
		if !names.Site(o.Domain) {
			valid = append(valid, "invalid domain name")
		}
		exist := models.Exists(ctx, func(db *gorm.DB) *gorm.DB {
			return db.Model(&models.Site{}).Where("domain = ?", o.Domain)
		})
		if exist {
			valid = append(valid, "site with the name already exists")
		}
	}
	if len(valid) > 0 {
		render.JSONError(w, http.StatusBadRequest, valid)
		return
	}
	site := &models.Site{
		Domain: o.Domain,
	}
	if o.Public != nil {
		site.Public = *o.Public
	}
	if o.Description != nil {
		site.Description = *o.Description
	}
	err = models.Get(ctx).Model(owner).Association("Sites").Append(&site)
	if err != nil {
		log.Get().Err(err).
			Str("handler", "APICreate").
			Msg("failed to save site")
		render.JSONError(w, http.StatusBadRequest, http.StatusText(http.StatusBadRequest))
		return
	}
	render.JSON(w, http.StatusCreated, siteSpec(owner, site))
}

func siteSpec(owner *models.User, site *models.Site) spec.Site {
	return spec.Site{
		Domain:      site.Domain,
		Public:      site.Public,
		Description: site.Description,
		Owner:       owner.Name,
		CreatedAt:   site.CreatedAt,
		UpdatedAt:   site.UpdatedAt,
	}
}
