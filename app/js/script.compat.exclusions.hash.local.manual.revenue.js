!function(){"use strict";var e,t,l=window.location,u=window.document,o=u.getElementById("plausible"),s=o.getAttribute("data-api")||(e=(e=o).src.split("/"),t=e[0],e=e[2],t+"//"+e+"/api/event");function c(e,t){e&&console.warn("Ignoring Event: "+e),t&&t.callback&&t.callback()}function a(e,t){try{if("true"===window.localStorage.plausible_ignore)return c("localStorage flag",t)}catch(e){}var a=o&&o.getAttribute("data-include"),n=o&&o.getAttribute("data-exclude");if("pageview"===e){a=!a||a.split(",").some(r),n=n&&n.split(",").some(r);if(!a||n)return c("exclusion rule",t)}function r(e){var t=l.pathname;return(t+=l.hash).match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var a={},i=(a.n=e,a.u=t&&t.u?t.u:l.href,a.d=o.getAttribute("data-domain"),a.r=u.referrer||null,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props),t&&t.revenue&&(a.$=t.revenue),a.h=1,new XMLHttpRequest);i.open("POST",s,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(a)),i.onreadystatechange=function(){4===i.readyState&&t&&t.callback&&t.callback({status:i.status})}}var n=window.plausible&&window.plausible.q||[];window.plausible=a;for(var r=0;r<n.length;r++)a.apply(this,n[r])}();