!function(){"use strict";var o=window.location,p=window.document,l=p.getElementById("plausible"),u=l.getAttribute("data-api")||(c=(c=l).src.split("/"),n=c[0],c=c[2],n+"//"+c+"/api/event");function e(e,t){try{if("true"===window.localStorage.plausible_ignore)return r=t,(a="localStorage flag")&&console.warn("Ignoring Event: "+a),void(r&&r.callback&&r.callback())}catch(e){}var a={},r=(a.n=e,a.u=t&&t.u?t.u:o.href,a.d=l.getAttribute("data-domain"),a.r=p.referrer||null,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props),t&&t.revenue&&(a.$=t.revenue),l.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)})),n=a.p||{},i=(r.forEach(function(e){var t=e.replace("event-",""),e=l.getAttribute(e);n[t]=n[t]||e}),a.p=n,new XMLHttpRequest);i.open("POST",u,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(a)),i.onreadystatechange=function(){4===i.readyState&&t&&t.callback&&t.callback({status:i.status})}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a=0;a<t.length;a++)e.apply(this,t[a]);var i=1;function r(e){var t,a,r,n;if("auxclick"!==e.type||e.button===i)return t=function(e){for(;e&&(void 0===e.tagName||!(t=e)||!t.tagName||"a"!==t.tagName.toLowerCase()||!e.href);)e=e.parentNode;var t;return e}(e.target),a=t&&t.href&&t.href.split("?")[0],(r=t)&&r.href&&r.host&&r.host!==o.host?s(e,t,{name:"Outbound Link: Click",props:{url:t.href}}):(r=a)&&(n=r.split(".").pop(),d.some(function(e){return e===n}))?s(e,t,{name:"File Download",props:{url:a}}):void 0}function s(e,t,a){var r,n=!1;function i(){n||(n=!0,window.location=t.href)}!function(e,t){if(!e.defaultPrevented)return t=!t.target||t.target.match(/^_(self|parent|top)$/i),e=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type,t&&e}(e,t)?((r={props:a.props}).revenue=a.revenue,plausible(a.name,r)):((r={props:a.props,callback:i}).revenue=a.revenue,plausible(a.name,r),setTimeout(i,5e3),e.preventDefault())}p.addEventListener("click",r),p.addEventListener("auxclick",r);var n=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma","dmg"],c=l.getAttribute("file-types"),f=l.getAttribute("add-file-types"),d=c&&c.split(",")||f&&f.split(",").concat(n)||n}();