!function(){"use strict";var l=window.location,o=window.document,u=o.currentScript,s=u.getAttribute("data-api")||new URL(u.src).origin+"/api/event";function c(e,t){e&&console.warn("Ignoring Event: "+e),t&&t.callback&&t.callback()}function e(e,t){try{if("true"===window.localStorage.plausible_ignore)return c("localStorage flag",t)}catch(e){}var a=u&&u.getAttribute("data-include"),n=u&&u.getAttribute("data-exclude");if("pageview"===e){a=!a||a.split(",").some(r),n=n&&n.split(",").some(r);if(!a||n)return c("exclusion rule",t)}function r(e){var t=l.pathname;return(t+=l.hash).match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var a={},n=(a.n=e,a.u=l.href,a.d=u.getAttribute("data-domain"),a.r=o.referrer||null,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props),t&&t.revenue&&(a.$=t.revenue),u.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)})),i=a.p||{},p=(n.forEach(function(e){var t=e.replace("event-",""),e=u.getAttribute(e);i[t]=i[t]||e}),a.p=i,a.h=1,new XMLHttpRequest);p.open("POST",s,!0),p.setRequestHeader("Content-Type","text/plain"),p.send(JSON.stringify(a)),p.onreadystatechange=function(){4===p.readyState&&t&&t.callback&&t.callback({status:p.status})}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a,n=0;n<t.length;n++)e.apply(this,t[n]);function r(){a=l.pathname,e("pageview")}window.addEventListener("hashchange",r),"prerender"===o.visibilityState?o.addEventListener("visibilitychange",function(){a||"visible"!==o.visibilityState||r()}):r();var d=1;function i(e){var t,a,n,r,i,p,l;function o(){r||(r=!0,window.location=n.href)}"auxclick"===e.type&&e.button!==d||(t=function(e){for(;e&&(void 0===e.tagName||!(t=e)||!t.tagName||"a"!==t.tagName.toLowerCase()||!e.href);)e=e.parentNode;var t;return e}(e.target),a=t&&t.href&&t.href.split("?")[0],(p=a)&&(l=p.split(".").pop(),g.some(function(e){return e===l}))&&(r=!(p={name:"File Download",props:{url:a}}),!function(e,t){if(!e.defaultPrevented)return t=!t.target||t.target.match(/^_(self|parent|top)$/i),e=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type,t&&e}(a=e,n=t)?((i={props:p.props}).revenue=p.revenue,plausible(p.name,i)):((i={props:p.props,callback:o}).revenue=p.revenue,plausible(p.name,i),setTimeout(o,5e3),a.preventDefault())))}o.addEventListener("click",i),o.addEventListener("auxclick",i);var p=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma","dmg"],f=u.getAttribute("file-types"),v=u.getAttribute("add-file-types"),g=f&&f.split(",")||v&&v.split(",").concat(p)||p}();