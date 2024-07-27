package web

import (
	"embed"
	"html/template"
)

//go:embed templates
var templateData embed.FS

var (
	layouts = template.Must(template.ParseFS(
		templateData, "templates/layout/*",
	))
	home     = template.Must(look("focus").ParseFS(templateData, "templates/page/index.html"))
	login    = template.Must(look("focus").ParseFS(templateData, "templates/auth/login.html"))
	register = template.Must(look("focus").ParseFS(templateData, "templates/auth/register.html"))
)

func look(name string) *template.Template {
	return template.Must(layouts.Lookup(name).Clone())
}
