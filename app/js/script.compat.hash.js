!function(){"use strict";var t,e,a=window.location,l=window.document,o=l.getElementById("plausible"),r=o.getAttribute("data-api")||(t=(t=o).src.split("/"),e=t[0],t=t[2],e+"//"+t+"/api/event");function s(t,e){t&&console.warn("Ignoring Event: "+t),e&&e.callback&&e.callback()}function i(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(a.hostname)||"file:"===a.protocol)return s("localhost",e);if((window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)&&!window.__plausible)return s(null,e);try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag",e)}catch(t){}var i={},n=(i.n=t,i.u=a.href,i.d=o.getAttribute("data-domain"),i.r=l.referrer||null,e&&e.meta&&(i.m=JSON.stringify(e.meta)),e&&e.props&&(i.p=e.props),i.h=1,new XMLHttpRequest);n.open("POST",r,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(i)),n.onreadystatechange=function(){4===n.readyState&&e&&e.callback&&e.callback({status:n.status})}}var n=window.plausible&&window.plausible.q||[];window.plausible=i;for(var c,d=0;d<n.length;d++)i.apply(this,n[d]);function w(){c=a.pathname,i("pageview")}window.addEventListener("hashchange",w),"prerender"===l.visibilityState?l.addEventListener("visibilitychange",function(){c||"visible"!==l.visibilityState||w()}):w()}();