!function(){"use strict";var l=window.location,s=window.document,c=s.currentScript,u=c.getAttribute("data-api")||new URL(c.src).origin+"/api/event";function p(e,t){e&&console.warn("Ignoring Event: "+e),t&&t.callback&&t.callback()}function e(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(l.hostname)||"file:"===l.protocol)return p("localhost",t);if((window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)&&!window.__plausible)return p(null,t);try{if("true"===window.localStorage.plausible_ignore)return p("localStorage flag",t)}catch(e){}var a=c&&c.getAttribute("data-include"),n=c&&c.getAttribute("data-exclude");if("pageview"===e){a=!a||a.split(",").some(i),n=n&&n.split(",").some(i);if(!a||n)return p("exclusion rule",t)}function i(e){var t=l.pathname;return(t+=l.hash).match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var a={},n=(a.n=e,a.u=l.href,a.d=c.getAttribute("data-domain"),a.r=s.referrer||null,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props),c.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)})),r=a.p||{},o=(n.forEach(function(e){var t=e.replace("event-",""),e=c.getAttribute(e);r[t]=r[t]||e}),a.p=r,a.h=1,new XMLHttpRequest);o.open("POST",u,!0),o.setRequestHeader("Content-Type","text/plain"),o.send(JSON.stringify(a)),o.onreadystatechange=function(){4===o.readyState&&t&&t.callback&&t.callback({status:o.status})}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a,n=0;n<t.length;n++)e.apply(this,t[n]);function i(){a=l.pathname,e("pageview")}window.addEventListener("hashchange",i),"prerender"===s.visibilityState?s.addEventListener("visibilitychange",function(){a||"visible"!==s.visibilityState||i()}):i();var d=1;function r(e){var t,a,n,i,r;function o(){n||(n=!0,window.location=a.href)}"auxclick"===e.type&&e.button!==d||((t=function(e){for(;e&&(void 0===e.tagName||!(t=e)||!t.tagName||"a"!==t.tagName.toLowerCase()||!e.href);)e=e.parentNode;var t;return e}(e.target))&&t.href&&t.href.split("?")[0],(r=t)&&r.href&&r.host&&r.host!==l.host&&(r=e,e={name:"Outbound Link: Click",props:{url:(a=t).href}},n=!1,!function(e,t){if(!e.defaultPrevented)return t=!t.target||t.target.match(/^_(self|parent|top)$/i),e=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type,t&&e}(r,a)?(i={props:e.props},plausible(e.name,i)):(i={props:e.props,callback:o},plausible(e.name,i),setTimeout(o,5e3),r.preventDefault())))}s.addEventListener("click",r),s.addEventListener("auxclick",r)}();