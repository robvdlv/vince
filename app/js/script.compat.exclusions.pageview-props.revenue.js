!function(){"use strict";var t,o=window.location,s=window.document,u=s.getElementById("plausible"),p=u.getAttribute("data-api")||(t=(t=u).src.split("/"),d=t[0],t=t[2],d+"//"+t+"/api/event");function c(t,e){t&&console.warn("Ignoring Event: "+t),e&&e.callback&&e.callback()}function e(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return c("localhost",e);if((window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)&&!window.__plausible)return c(null,e);try{if("true"===window.localStorage.plausible_ignore)return c("localStorage flag",e)}catch(t){}var i=u&&u.getAttribute("data-include"),n=u&&u.getAttribute("data-exclude");if("pageview"===t){i=!i||i.split(",").some(a),n=n&&n.split(",").some(a);if(!i||n)return c("exclusion rule",e)}function a(t){return o.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var i={},n=(i.n=t,i.u=o.href,i.d=u.getAttribute("data-domain"),i.r=s.referrer||null,e&&e.meta&&(i.m=JSON.stringify(e.meta)),e&&e.props&&(i.p=e.props),e&&e.revenue&&(i.$=e.revenue),u.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)})),r=i.p||{},l=(n.forEach(function(t){var e=t.replace("event-",""),t=u.getAttribute(t);r[e]=r[e]||t}),i.p=r,new XMLHttpRequest);l.open("POST",p,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(i)),l.onreadystatechange=function(){4===l.readyState&&e&&e.callback&&e.callback({status:l.status})}}var i=window.plausible&&window.plausible.q||[];window.plausible=e;for(var n,a=0;a<i.length;a++)e.apply(this,i[a]);function r(){n!==o.pathname&&(n=o.pathname,e("pageview"))}var l,d=window.history;d.pushState&&(l=d.pushState,d.pushState=function(){l.apply(this,arguments),r()},window.addEventListener("popstate",r)),"prerender"===s.visibilityState?s.addEventListener("visibilitychange",function(){n||"visible"!==s.visibilityState||r()}):r()}();