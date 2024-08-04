!function(){"use strict";var l=window.location,o=window.document,p=o.getElementById("plausible"),u=p.getAttribute("data-api")||(d=(d=p).src.split("/"),n=d[0],d=d[2],n+"//"+d+"/api/event");function s(e,t){e&&console.warn("Ignoring Event: "+e),t&&t.callback&&t.callback()}function e(e,t){try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag",t)}catch(e){}var a=p&&p.getAttribute("data-include"),r=p&&p.getAttribute("data-exclude");if("pageview"===e){a=!a||a.split(",").some(n),r=r&&r.split(",").some(n);if(!a||r)return s("exclusion rule",t)}function n(e){return l.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var a={},i=(a.n=e,a.u=t&&t.u?t.u:l.href,a.d=p.getAttribute("data-domain"),a.r=o.referrer||null,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props),t&&t.revenue&&(a.$=t.revenue),new XMLHttpRequest);i.open("POST",u,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(a)),i.onreadystatechange=function(){4===i.readyState&&t&&t.callback&&t.callback({status:i.status})}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a=0;a<t.length;a++)e.apply(this,t[a]);var i=1;function r(e){var t,a,r,n;if("auxclick"!==e.type||e.button===i)return t=function(e){for(;e&&(void 0===e.tagName||!(t=e)||!t.tagName||"a"!==t.tagName.toLowerCase()||!e.href);)e=e.parentNode;var t;return e}(e.target),a=t&&t.href&&t.href.split("?")[0],(r=t)&&r.href&&r.host&&r.host!==l.host?c(e,t,{name:"Outbound Link: Click",props:{url:t.href}}):(r=a)&&(n=r.split(".").pop(),g.some(function(e){return e===n}))?c(e,t,{name:"File Download",props:{url:a}}):void 0}function c(e,t,a){var r,n=!1;function i(){n||(n=!0,window.location=t.href)}!function(e,t){if(!e.defaultPrevented)return t=!t.target||t.target.match(/^_(self|parent|top)$/i),e=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type,t&&e}(e,t)?((r={props:a.props}).revenue=a.revenue,plausible(a.name,r)):((r={props:a.props,callback:i}).revenue=a.revenue,plausible(a.name,r),setTimeout(i,5e3),e.preventDefault())}o.addEventListener("click",r),o.addEventListener("auxclick",r);var n=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma","dmg"],d=p.getAttribute("file-types"),f=p.getAttribute("add-file-types"),g=d&&d.split(",")||f&&f.split(",").concat(n)||n}();