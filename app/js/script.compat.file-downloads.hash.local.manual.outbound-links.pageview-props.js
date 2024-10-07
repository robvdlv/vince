!function(){"use strict";var o=window.location,p=window.document,l=p.getElementById("plausible"),s=l.getAttribute("data-api")||(c=(c=l).src.split("/"),n=c[0],c=c[2],n+"//"+c+"/api/event");function t(t,e){try{if("true"===window.localStorage.plausible_ignore)return r=e,(a="localStorage flag")&&console.warn("Ignoring Event: "+a),void(r&&r.callback&&r.callback())}catch(t){}var a={},r=(a.n=t,a.u=e&&e.u?e.u:o.href,a.d=l.getAttribute("data-domain"),a.r=p.referrer||null,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props),l.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)})),n=a.p||{},i=(r.forEach(function(t){var e=t.replace("event-",""),t=l.getAttribute(t);n[e]=n[e]||t}),a.p=n,a.h=1,new XMLHttpRequest);i.open("POST",s,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(a)),i.onreadystatechange=function(){4===i.readyState&&e&&e.callback&&e.callback({status:i.status})}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var a=0;a<e.length;a++)t.apply(this,e[a]);var i=1;function r(t){var e,a,r,n;if("auxclick"!==t.type||t.button===i)return e=function(t){for(;t&&(void 0===t.tagName||!(e=t)||!e.tagName||"a"!==e.tagName.toLowerCase()||!t.href);)t=t.parentNode;var e;return t}(t.target),a=e&&e.href&&e.href.split("?")[0],(r=e)&&r.href&&r.host&&r.host!==o.host?u(t,e,{name:"Outbound Link: Click",props:{url:e.href}}):(r=a)&&(n=r.split(".").pop(),d.some(function(t){return t===n}))?u(t,e,{name:"File Download",props:{url:a}}):void 0}function u(t,e,a){var r,n=!1;function i(){n||(n=!0,window.location=e.href)}!function(t,e){if(!t.defaultPrevented)return e=!e.target||e.target.match(/^_(self|parent|top)$/i),t=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type,e&&t}(t,e)?(r={props:a.props},plausible(a.name,r)):(r={props:a.props,callback:i},plausible(a.name,r),setTimeout(i,5e3),t.preventDefault())}p.addEventListener("click",r),p.addEventListener("auxclick",r);var n=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma","dmg"],c=l.getAttribute("file-types"),f=l.getAttribute("add-file-types"),d=c&&c.split(",")||f&&f.split(",").concat(n)||n}();