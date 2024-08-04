!function(){"use strict";var l=window.location,p=window.document,u=p.getElementById("plausible"),s=u.getAttribute("data-api")||(f=(f=u).src.split("/"),n=f[0],f=f[2],n+"//"+f+"/api/event");function c(t,e){t&&console.warn("Ignoring Event: "+t),e&&e.callback&&e.callback()}function t(t,e){try{if("true"===window.localStorage.plausible_ignore)return c("localStorage flag",e)}catch(t){}var a=u&&u.getAttribute("data-include"),r=u&&u.getAttribute("data-exclude");if("pageview"===t){a=!a||a.split(",").some(n),r=r&&r.split(",").some(n);if(!a||r)return c("exclusion rule",e)}function n(t){return l.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var a={},r=(a.n=t,a.u=e&&e.u?e.u:l.href,a.d=u.getAttribute("data-domain"),a.r=p.referrer||null,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props),u.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)})),i=a.p||{},o=(r.forEach(function(t){var e=t.replace("event-",""),t=u.getAttribute(t);i[e]=i[e]||t}),a.p=i,new XMLHttpRequest);o.open("POST",s,!0),o.setRequestHeader("Content-Type","text/plain"),o.send(JSON.stringify(a)),o.onreadystatechange=function(){4===o.readyState&&e&&e.callback&&e.callback({status:o.status})}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var a=0;a<e.length;a++)t.apply(this,e[a]);var i=1;function r(t){var e,a,r,n;if("auxclick"!==t.type||t.button===i)return e=function(t){for(;t&&(void 0===t.tagName||!(e=t)||!e.tagName||"a"!==e.tagName.toLowerCase()||!t.href);)t=t.parentNode;var e;return t}(t.target),a=e&&e.href&&e.href.split("?")[0],(r=e)&&r.href&&r.host&&r.host!==l.host?o(t,e,{name:"Outbound Link: Click",props:{url:e.href}}):(r=a)&&(n=r.split(".").pop(),g.some(function(t){return t===n}))?o(t,e,{name:"File Download",props:{url:a}}):void 0}function o(t,e,a){var r,n=!1;function i(){n||(n=!0,window.location=e.href)}!function(t,e){if(!t.defaultPrevented)return e=!e.target||e.target.match(/^_(self|parent|top)$/i),t=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type,e&&t}(t,e)?(r={props:a.props},plausible(a.name,r)):(r={props:a.props,callback:i},plausible(a.name,r),setTimeout(i,5e3),t.preventDefault())}p.addEventListener("click",r),p.addEventListener("auxclick",r);var n=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma","dmg"],f=u.getAttribute("file-types"),d=u.getAttribute("add-file-types"),g=f&&f.split(",")||d&&d.split(",").concat(n)||n}();