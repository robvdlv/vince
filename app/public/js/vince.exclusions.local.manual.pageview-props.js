!function(){"use strict";var u=window.location,o=window.document,c=o.currentScript,s=c.getAttribute("data-api")||new URL(c.src).origin+"/api/event";function p(t,e){t&&console.warn("Ignoring Event: "+t),e&&e.callback&&e.callback()}function t(t,e){try{if("true"===window.localStorage.plausible_ignore)return p("localStorage flag",e)}catch(t){}var a=c&&c.getAttribute("data-include"),n=c&&c.getAttribute("data-exclude");if("pageview"===t){a=!a||a.split(",").some(r),n=n&&n.split(",").some(r);if(!a||n)return p("exclusion rule",e)}function r(t){return u.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var a={},n=(a.n=t,a.u=e&&e.u?e.u:u.href,a.d=c.getAttribute("data-domain"),a.r=o.referrer||null,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props),c.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)})),i=a.p||{},l=(n.forEach(function(t){var e=t.replace("event-",""),t=c.getAttribute(t);i[e]=i[e]||t}),a.p=i,new XMLHttpRequest);l.open("POST",s,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(a)),l.onreadystatechange=function(){4===l.readyState&&e&&e.callback&&e.callback({status:l.status})}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var a=0;a<e.length;a++)t.apply(this,e[a])}();