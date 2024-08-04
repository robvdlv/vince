!function(){"use strict";var e,l=window.location,o=window.document,s=o.getElementById("plausible"),u=s.getAttribute("data-api")||(e=(e=s).src.split("/"),d=e[0],e=e[2],d+"//"+e+"/api/event");function p(e,t){e&&console.warn("Ignoring Event: "+e),t&&t.callback&&t.callback()}function t(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(l.hostname)||"file:"===l.protocol)return p("localhost",t);if((window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)&&!window.__plausible)return p(null,t);try{if("true"===window.localStorage.plausible_ignore)return p("localStorage flag",t)}catch(e){}var a=s&&s.getAttribute("data-include"),i=s&&s.getAttribute("data-exclude");if("pageview"===e){a=!a||a.split(",").some(n),i=i&&i.split(",").some(n);if(!a||i)return p("exclusion rule",t)}function n(e){return l.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var a={},r=(a.n=e,a.u=l.href,a.d=s.getAttribute("data-domain"),a.r=o.referrer||null,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props),t&&t.revenue&&(a.$=t.revenue),new XMLHttpRequest);r.open("POST",u,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(a)),r.onreadystatechange=function(){4===r.readyState&&t&&t.callback&&t.callback({status:r.status})}}var a=window.plausible&&window.plausible.q||[];window.plausible=t;for(var i,n=0;n<a.length;n++)t.apply(this,a[n]);function r(){i!==l.pathname&&(i=l.pathname,t("pageview"))}var c,d=window.history;d.pushState&&(c=d.pushState,d.pushState=function(){c.apply(this,arguments),r()},window.addEventListener("popstate",r)),"prerender"===o.visibilityState?o.addEventListener("visibilitychange",function(){i||"visible"!==o.visibilityState||r()}):r()}();