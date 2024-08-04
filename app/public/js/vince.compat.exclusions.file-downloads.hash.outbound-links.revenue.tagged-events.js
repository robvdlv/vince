!function(){"use strict";var o=window.location,l=window.document,u=l.getElementById("plausible"),p=u.getAttribute("data-api")||(m=(m=u).src.split("/"),d=m[0],m=m[2],d+"//"+m+"/api/event");function s(e,t){e&&console.warn("Ignoring Event: "+e),t&&t.callback&&t.callback()}function e(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return s("localhost",t);if((window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)&&!window.__plausible)return s(null,t);try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag",t)}catch(e){}var n=u&&u.getAttribute("data-include"),r=u&&u.getAttribute("data-exclude");if("pageview"===e){n=!n||n.split(",").some(a),r=r&&r.split(",").some(a);if(!n||r)return s("exclusion rule",t)}function a(e){var t=o.pathname;return(t+=o.hash).match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var n={},i=(n.n=e,n.u=o.href,n.d=u.getAttribute("data-domain"),n.r=l.referrer||null,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=t.props),t&&t.revenue&&(n.$=t.revenue),n.h=1,new XMLHttpRequest);i.open("POST",p,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(n)),i.onreadystatechange=function(){4===i.readyState&&t&&t.callback&&t.callback({status:i.status})}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var n,r=0;r<t.length;r++)e.apply(this,t[r]);function a(){n=o.pathname,e("pageview")}function c(e){return e&&e.tagName&&"a"===e.tagName.toLowerCase()}window.addEventListener("hashchange",a),"prerender"===l.visibilityState?l.addEventListener("visibilitychange",function(){n||"visible"!==l.visibilityState||a()}):a();var f=1;function i(e){if("auxclick"!==e.type||e.button===f){var t,n,r=function(e){for(;e&&(void 0===e.tagName||!c(e)||!e.href);)e=e.parentNode;return e}(e.target),a=r&&r.href&&r.href.split("?")[0];if(!function e(t,n){if(!t||b<n)return!1;if(k(t))return!0;return e(t.parentNode,n+1)}(r,0))return(t=r)&&t.href&&t.host&&t.host!==o.host?v(e,r,{name:"Outbound Link: Click",props:{url:r.href}}):(t=a)&&(n=t.split(".").pop(),w.some(function(e){return e===n}))?v(e,r,{name:"File Download",props:{url:a}}):void 0}}function v(e,t,n){var r,a=!1;function i(){a||(a=!0,window.location=t.href)}!function(e,t){if(!e.defaultPrevented)return t=!t.target||t.target.match(/^_(self|parent|top)$/i),e=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type,t&&e}(e,t)?((r={props:n.props}).revenue=n.revenue,plausible(n.name,r)):((r={props:n.props,callback:i}).revenue=n.revenue,plausible(n.name,r),setTimeout(i,5e3),e.preventDefault())}l.addEventListener("click",i),l.addEventListener("auxclick",i);var d=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma","dmg"],m=u.getAttribute("file-types"),g=u.getAttribute("add-file-types"),w=m&&m.split(",")||g&&g.split(",").concat(d)||d;function h(e){var e=k(e)?e:e&&e.parentNode,t={name:null,props:{},revenue:{}},n=e&&e.classList;if(n)for(var r=0;r<n.length;r++){var a,i,o=n.item(r),l=o.match(/plausible-event-(.+)(=|--)(.+)/),l=(l&&(a=l[1],i=l[3].replace(/\+/g," "),"name"==a.toLowerCase()?t.name=i:t.props[a]=i),o.match(/plausible-revenue-(.+)(=|--)(.+)/));l&&(a=l[1],i=l[3],t.revenue[a]=i)}return t}var b=3;function y(e){if("auxclick"!==e.type||e.button===f){for(var t,n,r,a,i=e.target,o=0;o<=b&&i;o++){if((r=i)&&r.tagName&&"form"===r.tagName.toLowerCase())return;c(i)&&(t=i),k(i)&&(n=i),i=i.parentNode}n&&(a=h(n),t?(a.props.url=t.href,v(e,t,a)):((e={}).props=a.props,e.revenue=a.revenue,plausible(a.name,e)))}}function k(e){var t=e&&e.classList;if(t)for(var n=0;n<t.length;n++)if(t.item(n).match(/plausible-event-name(=|--)(.+)/))return!0;return!1}l.addEventListener("submit",function(e){var t,n=e.target,r=h(n);function a(){t||(t=!0,n.submit())}r.name&&(e.preventDefault(),t=!1,setTimeout(a,5e3),(e={props:r.props,callback:a}).revenue=r.revenue,plausible(r.name,e))}),l.addEventListener("click",y),l.addEventListener("auxclick",y)}();