package location

import (
	"bytes"
	_ "embed"
	"strings"

	"github.com/vinceanalytics/vince/fb"
)

//go:generate go run gen/main.go

var (
	//go:embed location.fbs.bin
	locaData []byte
	root     = fb.New(locaData)
)

type City struct {
	Name string `json:"name"`
	Flag string `json:"country_flag"`
}

func GetRegionCode(region string) string {
	return root.Translate(region)
}

func GetCityCode(country, city string) uint32 {
	i, ok := root.Geo.Search([]byte(country + "-" + city))
	if !ok {
		return 0
	}
	code, _ := root.CityCode.GetValue(uint64(i))
	return uint32(code)
}

func GetCity(code uint32) City {
	v, ok := root.City.GetValue(uint64(code))
	if !ok {
		return City{Name: "N/A"}
	}
	name := root.Geo.Get(int(v))
	country, city, _ := bytes.Cut(name, []byte{'-'})
	i, _ := root.CountryCode.Search(country)
	return City{
		Name: string(city),
		Flag: string(root.CountryFlag.Get(int(i))),
	}
}

type Country struct {
	Code string `json:"code"`
	Name string `json:"name"`
	Flag string `json:"flag"`
}

func GetCountry(code string) Country {
	i, ok := root.CountryCode.Search([]byte(code))
	if !ok {
		return Country{Code: code}
	}
	return Country{
		Code: code,
		Name: string(root.CountryName.Get(i)),
		Flag: string(root.CountryFlag.Get(i)),
	}
}

type Region struct {
	Name string `json:"name"`
	Flag string `json:"flag"`
}

func GetRegion(code string) Region {
	i, ok := root.RegionCode.Search([]byte(code))
	if !ok {
		return Region{Name: code}
	}
	name := root.RegionName.Get(i)
	var flag string
	a, _, _ := strings.Cut(code, "-")
	if n, ok := root.CountryCode.Search([]byte(a)); ok {
		flag = string(root.CountryFlag.Get(n))
	}
	return Region{Name: string(name), Flag: flag}
}
