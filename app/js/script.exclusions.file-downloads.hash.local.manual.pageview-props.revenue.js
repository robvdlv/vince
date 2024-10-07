!function(){"use strict";var o=window.location,l=window.document,u=l.currentScript,c=u.getAttribute("data-api")||new URL(u.src).origin+"/api/event";function s(e,t){e&&console.warn("Ignoring Event: "+e),t&&t.callback&&t.callback()}function e(e,t){try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag",t)}catch(e){}var a=u&&u.getAttribute("data-include"),r=u&&u.getAttribute("data-exclude");if("pageview"===e){a=!a||a.split(",").some(n),r=r&&r.split(",").some(n);if(!a||r)return s("exclusion rule",t)}function n(e){var t=o.pathname;return(t+=o.hash).match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var a={},r=(a.n=e,a.u=t&&t.u?t.u:o.href,a.d=u.getAttribute("data-domain"),a.r=l.referrer||null,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props),t&&t.revenue&&(a.$=t.revenue),u.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)})),i=a.p||{},p=(r.forEach(function(e){var t=e.replace("event-",""),e=u.getAttribute(e);i[t]=i[t]||e}),a.p=i,a.h=1,new XMLHttpRequest);p.open("POST",c,!0),p.setRequestHeader("Content-Type","text/plain"),p.send(JSON.stringify(a)),p.onreadystatechange=function(){4===p.readyState&&t&&t.callback&&t.callback({status:p.status})}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a=0;a<t.length;a++)e.apply(this,t[a]);var f=1;function r(e){var t,a,r,n,i,p,o;function l(){n||(n=!0,window.location=r.href)}"auxclick"===e.type&&e.button!==f||(t=function(e){for(;e&&(void 0===e.tagName||!(t=e)||!t.tagName||"a"!==t.tagName.toLowerCase()||!e.href);)e=e.parentNode;var t;return e}(e.target),a=t&&t.href&&t.href.split("?")[0],(p=a)&&(o=p.split(".").pop(),d.some(function(e){return e===o}))&&(n=!(p={name:"File Download",props:{url:a}}),!function(e,t){if(!e.defaultPrevented)return t=!t.target||t.target.match(/^_(self|parent|top)$/i),e=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type,t&&e}(a=e,r=t)?((i={props:p.props}).revenue=p.revenue,plausible(p.name,i)):((i={props:p.props,callback:l}).revenue=p.revenue,plausible(p.name,i),setTimeout(l,5e3),a.preventDefault())))}l.addEventListener("click",r),l.addEventListener("auxclick",r);var n=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma","dmg"],i=u.getAttribute("file-types"),p=u.getAttribute("add-file-types"),d=i&&i.split(",")||p&&p.split(",").concat(n)||n}();