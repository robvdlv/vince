!function(){"use strict";var o=window.location,p=window.document,s=p.currentScript,l=s.getAttribute("data-api")||new URL(s.src).origin+"/api/event";function t(t,e){try{if("true"===window.localStorage.plausible_ignore)return i=e,(a="localStorage flag")&&console.warn("Ignoring Event: "+a),void(i&&i.callback&&i.callback())}catch(t){}var a={},i=(a.n=t,a.u=o.href,a.d=s.getAttribute("data-domain"),a.r=p.referrer||null,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props),s.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)})),n=a.p||{},r=(i.forEach(function(t){var e=t.replace("event-",""),t=s.getAttribute(t);n[e]=n[e]||t}),a.p=n,new XMLHttpRequest);r.open("POST",l,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(a)),r.onreadystatechange=function(){4===r.readyState&&e&&e.callback&&e.callback({status:r.status})}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var a,i=0;i<e.length;i++)t.apply(this,e[i]);function n(){a!==o.pathname&&(a=o.pathname,t("pageview"))}var r,u=window.history;u.pushState&&(r=u.pushState,u.pushState=function(){r.apply(this,arguments),n()},window.addEventListener("popstate",n)),"prerender"===p.visibilityState?p.addEventListener("visibilitychange",function(){a||"visible"!==p.visibilityState||n()}):n();var c=1;function d(t){var e,a,i,n;if("auxclick"!==t.type||t.button===c)return e=function(t){for(;t&&(void 0===t.tagName||!(e=t)||!e.tagName||"a"!==e.tagName.toLowerCase()||!t.href);)t=t.parentNode;var e;return t}(t.target),a=e&&e.href&&e.href.split("?")[0],(i=e)&&i.href&&i.host&&i.host!==o.host?f(t,e,{name:"Outbound Link: Click",props:{url:e.href}}):(i=a)&&(n=i.split(".").pop(),m.some(function(t){return t===n}))?f(t,e,{name:"File Download",props:{url:a}}):void 0}function f(t,e,a){var i,n=!1;function r(){n||(n=!0,window.location=e.href)}!function(t,e){if(!t.defaultPrevented)return e=!e.target||e.target.match(/^_(self|parent|top)$/i),t=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type,e&&t}(t,e)?(i={props:a.props},plausible(a.name,i)):(i={props:a.props,callback:r},plausible(a.name,i),setTimeout(r,5e3),t.preventDefault())}p.addEventListener("click",d),p.addEventListener("auxclick",d);var u=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma","dmg"],v=s.getAttribute("file-types"),g=s.getAttribute("add-file-types"),m=v&&v.split(",")||g&&g.split(",").concat(u)||u}();