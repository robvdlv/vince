!function(){"use strict";var t,e,r=window.location,o=window.document,l=o.getElementById("plausible"),s=l.getAttribute("data-api")||(t=(t=l).src.split("/"),e=t[0],t=t[2],e+"//"+t+"/api/event");function u(t,e){t&&console.warn("Ignoring Event: "+t),e&&e.callback&&e.callback()}function n(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(r.hostname)||"file:"===r.protocol)return u("localhost",e);if((window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)&&!window.__plausible)return u(null,e);try{if("true"===window.localStorage.plausible_ignore)return u("localStorage flag",e)}catch(t){}var n={},t=(n.n=t,n.u=e&&e.u?e.u:r.href,n.d=l.getAttribute("data-domain"),n.r=o.referrer||null,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props),l.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)})),a=n.p||{},i=(t.forEach(function(t){var e=t.replace("event-",""),t=l.getAttribute(t);a[e]=a[e]||t}),n.p=a,n.h=1,new XMLHttpRequest);i.open("POST",s,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(n)),i.onreadystatechange=function(){4===i.readyState&&e&&e.callback&&e.callback({status:i.status})}}var a=window.plausible&&window.plausible.q||[];window.plausible=n;for(var i=0;i<a.length;i++)n.apply(this,a[i])}();