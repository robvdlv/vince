!function(){"use strict";var i=window.location,o=window.document,l=o.currentScript,u=l.getAttribute("data-api")||new URL(l.src).origin+"/api/event";function s(t,e){t&&console.warn("Ignoring Event: "+t),e&&e.callback&&e.callback()}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(i.hostname)||"file:"===i.protocol)return s("localhost",e);if((window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)&&!window.__plausible)return s(null,e);try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag",e)}catch(t){}var n={},t=(n.n=t,n.u=e&&e.u?e.u:i.href,n.d=l.getAttribute("data-domain"),n.r=o.referrer||null,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props),l.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)})),a=n.p||{},r=(t.forEach(function(t){var e=t.replace("event-",""),t=l.getAttribute(t);a[e]=a[e]||t}),n.p=a,new XMLHttpRequest);r.open("POST",u,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(n)),r.onreadystatechange=function(){4===r.readyState&&e&&e.callback&&e.callback({status:r.status})}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n=0;n<e.length;n++)t.apply(this,e[n])}();