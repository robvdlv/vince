!function(){"use strict";var r=window.location,p=window.document,o=p.currentScript,l=o.getAttribute("data-api")||new URL(o.src).origin+"/api/event";function e(e,t){try{if("true"===window.localStorage.plausible_ignore)return a=t,(i="localStorage flag")&&console.warn("Ignoring Event: "+i),void(a&&a.callback&&a.callback())}catch(e){}var a,i={},n=(i.n=e,i.u=r.href,i.d=o.getAttribute("data-domain"),i.r=p.referrer||null,t&&t.meta&&(i.m=JSON.stringify(t.meta)),t&&t.props&&(i.p=t.props),t&&t.revenue&&(i.$=t.revenue),new XMLHttpRequest);n.open("POST",l,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(i)),n.onreadystatechange=function(){4===n.readyState&&t&&t.callback&&t.callback({status:n.status})}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a,i=0;i<t.length;i++)e.apply(this,t[i]);function n(){a!==r.pathname&&(a=r.pathname,e("pageview"))}var s,u=window.history;u.pushState&&(s=u.pushState,u.pushState=function(){s.apply(this,arguments),n()},window.addEventListener("popstate",n)),"prerender"===p.visibilityState?p.addEventListener("visibilitychange",function(){a||"visible"!==p.visibilityState||n()}):n();var c=1;function d(e){var t,a,i,n,r,p,o;function l(){n||(n=!0,window.location=i.href)}"auxclick"===e.type&&e.button!==c||(t=function(e){for(;e&&(void 0===e.tagName||!(t=e)||!t.tagName||"a"!==t.tagName.toLowerCase()||!e.href);)e=e.parentNode;var t;return e}(e.target),a=t&&t.href&&t.href.split("?")[0],(p=a)&&(o=p.split(".").pop(),g.some(function(e){return e===o}))&&(n=!(p={name:"File Download",props:{url:a}}),!function(e,t){if(!e.defaultPrevented)return t=!t.target||t.target.match(/^_(self|parent|top)$/i),e=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type,t&&e}(a=e,i=t)?((r={props:p.props}).revenue=p.revenue,plausible(p.name,r)):((r={props:p.props,callback:l}).revenue=p.revenue,plausible(p.name,r),setTimeout(l,5e3),a.preventDefault())))}p.addEventListener("click",d),p.addEventListener("auxclick",d);var u=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma","dmg"],v=o.getAttribute("file-types"),f=o.getAttribute("add-file-types"),g=v&&v.split(",")||f&&f.split(",").concat(u)||u}();