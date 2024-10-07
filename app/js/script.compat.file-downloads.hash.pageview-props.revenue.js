!function(){"use strict";var r=window.location,o=window.document,l=o.getElementById("plausible"),p=l.getAttribute("data-api")||(f=(f=l).src.split("/"),d=f[0],f=f[2],d+"//"+f+"/api/event");function s(e,t){e&&console.warn("Ignoring Event: "+e),t&&t.callback&&t.callback()}function e(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(r.hostname)||"file:"===r.protocol)return s("localhost",t);if((window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)&&!window.__plausible)return s(null,t);try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag",t)}catch(e){}var n={},e=(n.n=e,n.u=r.href,n.d=l.getAttribute("data-domain"),n.r=o.referrer||null,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=t.props),t&&t.revenue&&(n.$=t.revenue),l.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)})),a=n.p||{},i=(e.forEach(function(e){var t=e.replace("event-",""),e=l.getAttribute(e);a[t]=a[t]||e}),n.p=a,n.h=1,new XMLHttpRequest);i.open("POST",p,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(n)),i.onreadystatechange=function(){4===i.readyState&&t&&t.callback&&t.callback({status:i.status})}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var n,a=0;a<t.length;a++)e.apply(this,t[a]);function i(){n=r.pathname,e("pageview")}window.addEventListener("hashchange",i),"prerender"===o.visibilityState?o.addEventListener("visibilitychange",function(){n||"visible"!==o.visibilityState||i()}):i();var u=1;function c(e){var t,n,a,i,r,o,l;function p(){i||(i=!0,window.location=a.href)}"auxclick"===e.type&&e.button!==u||(t=function(e){for(;e&&(void 0===e.tagName||!(t=e)||!t.tagName||"a"!==t.tagName.toLowerCase()||!e.href);)e=e.parentNode;var t;return e}(e.target),n=t&&t.href&&t.href.split("?")[0],(o=n)&&(l=o.split(".").pop(),w.some(function(e){return e===l}))&&(i=!(o={name:"File Download",props:{url:n}}),!function(e,t){if(!e.defaultPrevented)return t=!t.target||t.target.match(/^_(self|parent|top)$/i),e=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type,t&&e}(n=e,a=t)?((r={props:o.props}).revenue=o.revenue,plausible(o.name,r)):((r={props:o.props,callback:p}).revenue=o.revenue,plausible(o.name,r),setTimeout(p,5e3),n.preventDefault())))}o.addEventListener("click",c),o.addEventListener("auxclick",c);var d=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma","dmg"],f=l.getAttribute("file-types"),v=l.getAttribute("add-file-types"),w=f&&f.split(",")||v&&v.split(",").concat(d)||d}();