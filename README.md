# vince

The Cloud Native Web Analytics Platform.


# Features

- Alert notification
- Time on site tracking
- Conversion tracking 
- Multiple site management
- User Interaction Management 
- Campaign Management 
- Report Generation
- Goal Tracking 
- Event Tracking 
- Cloud Native (seamless k8s integration)
- Automatic TLS

# Origins

This started as a go port of [Plausible](https://github.com/plausible/analytics), with 
the intention to remove clickhouse and postgresql dependency aiming for a self hosted solution
used by all team sizes.

We use 
- sqlite for operational data (users,sites etc)
- badger for persistance of aggregates


# Install

Please see [Installation]() to choose the best method that works for you.

# Usage

For quick setup

```
mkdir .vince
```
```
vince config
```
```
source .vince/secrets
```
```
vince
```


This will get you up and running for a test drive. Vince will be running on port
8080. You can go ahead and  see [Getting Started]() to guide you on creating your
first site.


# The name vince 

Vince is named after [Vince Staples](https://en.wikipedia.org/wiki/Vince_Staples) , 
my favorite hip hop artist.

It was late night, 1 year after I quit my job and took a sabbatical, I was listening
to one of his album [Big Fish Theory](https://en.wikipedia.org/wiki/Big_Fish_Theory)
. The song Big Fish inspired me to program again.

The lyrics that got me going.
```
I was up late night ballin'
Countin' up hundreds by the thousand
```

So, enjoy the outcome of my late nights, hoping to be counting hundreds by the thousand
soon, or in my next life.