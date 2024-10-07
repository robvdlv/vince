!function(){"use strict";var i=window.location,o=window.document,l=o.currentScript,p=l.getAttribute("data-api")||new URL(l.src).origin+"/api/event";function s(t,e){t&&console.warn("Ignoring Event: "+t),e&&e.callback&&e.callback()}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(i.hostname)||"file:"===i.protocol)return s("localhost",e);if((window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)&&!window.__plausible)return s(null,e);try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag",e)}catch(t){}var a={},t=(a.n=t,a.u=e&&e.u?e.u:i.href,a.d=l.getAttribute("data-domain"),a.r=o.referrer||null,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props),l.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)})),r=a.p||{},n=(t.forEach(function(t){var e=t.replace("event-",""),t=l.getAttribute(t);r[e]=r[e]||t}),a.p=r,a.h=1,new XMLHttpRequest);n.open("POST",p,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(a)),n.onreadystatechange=function(){4===n.readyState&&e&&e.callback&&e.callback({status:n.status})}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var a=0;a<e.length;a++)t.apply(this,e[a]);var c=1;function r(t){var e,a,r,n,i,o,l;function p(){n||(n=!0,window.location=r.href)}"auxclick"===t.type&&t.button!==c||(e=function(t){for(;t&&(void 0===t.tagName||!(e=t)||!e.tagName||"a"!==e.tagName.toLowerCase()||!t.href);)t=t.parentNode;var e;return t}(t.target),a=e&&e.href&&e.href.split("?")[0],(o=a)&&(l=o.split(".").pop(),f.some(function(t){return t===l}))&&(n=!(o={name:"File Download",props:{url:a}}),!function(t,e){if(!t.defaultPrevented)return e=!e.target||e.target.match(/^_(self|parent|top)$/i),t=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type,e&&t}(a=t,r=e)?(i={props:o.props},plausible(o.name,i)):(i={props:o.props,callback:p},plausible(o.name,i),setTimeout(p,5e3),a.preventDefault())))}o.addEventListener("click",r),o.addEventListener("auxclick",r);var n=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma","dmg"],u=l.getAttribute("file-types"),d=l.getAttribute("add-file-types"),f=u&&u.split(",")||d&&d.split(",").concat(n)||n}();