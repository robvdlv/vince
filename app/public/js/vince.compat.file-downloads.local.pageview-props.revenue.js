!function(){"use strict";var p=window.location,o=window.document,l=o.getElementById("plausible"),s=l.getAttribute("data-api")||(v=(v=l).src.split("/"),u=v[0],v=v[2],u+"//"+v+"/api/event");function e(e,t){try{if("true"===window.localStorage.plausible_ignore)return n=t,(a="localStorage flag")&&console.warn("Ignoring Event: "+a),void(n&&n.callback&&n.callback())}catch(e){}var a={},n=(a.n=e,a.u=p.href,a.d=l.getAttribute("data-domain"),a.r=o.referrer||null,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props),t&&t.revenue&&(a.$=t.revenue),l.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)})),i=a.p||{},r=(n.forEach(function(e){var t=e.replace("event-",""),e=l.getAttribute(e);i[t]=i[t]||e}),a.p=i,new XMLHttpRequest);r.open("POST",s,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(a)),r.onreadystatechange=function(){4===r.readyState&&t&&t.callback&&t.callback({status:r.status})}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a,n=0;n<t.length;n++)e.apply(this,t[n]);function i(){a!==p.pathname&&(a=p.pathname,e("pageview"))}var r,u=window.history;u.pushState&&(r=u.pushState,u.pushState=function(){r.apply(this,arguments),i()},window.addEventListener("popstate",i)),"prerender"===o.visibilityState?o.addEventListener("visibilitychange",function(){a||"visible"!==o.visibilityState||i()}):i();var c=1;function d(e){var t,a,n,i,r,p,o;function l(){i||(i=!0,window.location=n.href)}"auxclick"===e.type&&e.button!==c||(t=function(e){for(;e&&(void 0===e.tagName||!(t=e)||!t.tagName||"a"!==t.tagName.toLowerCase()||!e.href);)e=e.parentNode;var t;return e}(e.target),a=t&&t.href&&t.href.split("?")[0],(p=a)&&(o=p.split(".").pop(),m.some(function(e){return e===o}))&&(i=!(p={name:"File Download",props:{url:a}}),!function(e,t){if(!e.defaultPrevented)return t=!t.target||t.target.match(/^_(self|parent|top)$/i),e=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type,t&&e}(a=e,n=t)?((r={props:p.props}).revenue=p.revenue,plausible(p.name,r)):((r={props:p.props,callback:l}).revenue=p.revenue,plausible(p.name,r),setTimeout(l,5e3),a.preventDefault())))}o.addEventListener("click",d),o.addEventListener("auxclick",d);var v=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma","dmg"],f=l.getAttribute("file-types"),g=l.getAttribute("add-file-types"),m=f&&f.split(",")||g&&g.split(",").concat(v)||v}();