
<p align="center">
    <img src="./logo.svg" alt="Vince Logo" />
    <br>
    <a href="https://vinceanalytics.com/">Website</a> |
    <a href="https://vinceanalytics.com/#getting-started">Getting started</a> |
    <a href="https://vinceanalytics.com/#stats-api">API</a>
</p>


## What ?

`vince` is a lightweight , API only, distributed ,  highly optimized and privacy friendly modern server for collecting and analyzing website analytics. 

## Why ?

- You want to self host(own your data) painlessly
- You want to save money (use very little resources) 
- You only need to consume the API to access the stats
- You manage large number of sites

## Features

- **Extremely fast** relative to competitors. Uses apache `arrow` for fast vectorized in memory computation. It is designed from grounds up, and highly optimized for web analytics use case.

- **Zero Dependency**: Ships a single binary with everything in it. No runtime dependency.

- **High events ingestion rate** : Non blocking ingestion, you can deploy for very popular sites without worrying.

- **Fast query api** : Instant results for active and historical data.

- **Easy to operate**: One line commandline flags with env variables is all you need.

- **Works with any language and tooling**: No need for special sdk, a simple `http` `api` is exposed. Anything that can speak `http` can work with `vince`

- **10X more data storage** : We use columnar storage with extensive compression schemes. Don't worry about running out of disk. Store and query large volume of data. In fact we are able to persist data forever efficiently.

- **Unlimited sites**: There is no limit on how many sites you can manage.

-  **Light weight script**: < 1Kb script. Zero overhead on your website

- **Privacy friendly**: No cookies and fully compliant with GDPR, CCPA and PECR.

- **GET /api/v1/stats/realtime/visitors**: find  who is currently visiting your site

- **GET /api/v1/stats/aggregate**: Aggregate by `bounce_rate`, `events` , `pageviews`,`views_per_visit`,`visit_duration` and `visits` over a period of time.

- **GET /api/v1/stats/timeseries** : Get time series data for reporting breaking down by `bounce_rate`, `events` , `pageviews`,`views_per_visit`,`visit_duration` and `visits`

- **GET /api/v1/stats/breakdown**: Gain deeper insight by breaking down metrics my properties. We support multiple properties in a single query. e.g breakdown by `source`, `browser` etc.

Check out the [getting started](https://vinceanalytics.com/#getting-started) instructions if you want to give `vince` a try.


# NOTE

I am the author Geofrey Ernest. If you are looking for a senior Go engineer, I am available for hire. I am open for fulltime or part time arrangements.

Please reach out to me via gernest at vinceanalytics.com


# Credits

- [rqlite](https://github.com/rqlite/rqlite)  for raft
- [frostdb](https://github.com/polarsignals/frostdb)  for in memory lsm tree
- [plausible](https://github.com/plausible/analytics) for the API
