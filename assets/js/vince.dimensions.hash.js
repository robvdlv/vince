(function(){"use strict";var c=window.location,n=window.document,i=n.currentScript,p=i.getAttribute("data-api")||h(i);function s(r){console.warn("Ignoring Event: "+r)}function h(r){return new URL(r.src).origin+"/api/event"}function l(r,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(c.hostname)||c.protocol==="file:")return s("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if(window.localStorage.vince_ignore==="true")return s("localStorage flag")}catch(o){}var e={};e.n=r,e.u=c.href,e.d=i.getAttribute("data-domain"),e.r=n.referrer||null,e.w=window.innerWidth,t&&t.meta&&(e.m=JSON.stringify(t.meta)),t&&t.props&&(e.p=t.props);var b=i.getAttributeNames().filter(function(o){return o.substring(0,6)==="event-"}),w=e.p||{};b.forEach(function(o){var g=o.replace("event-",""),m=i.getAttribute(o);w[g]=w[g]||m}),e.p=w,e.h=1;var a=new XMLHttpRequest;a.open("POST",p,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(e)),a.onreadystatechange=function(){a.readyState===4&&t&&t.callback&&t.callback()}}}var v=window.vince&&window.vince.q||[];window.vince=l;for(var d=0;d<v.length;d++)l.apply(this,v[d]);var f;function u(){f=c.pathname,l("pageview")}window.addEventListener("hashchange",u);function y(){!f&&n.visibilityState==="visible"&&u()}n.visibilityState==="prerender"?n.addEventListener("visibilitychange",y):u()})();
