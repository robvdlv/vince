!function(){"use strict";var o=window.location,u=window.document,p=u.getElementById("plausible"),l=p.getAttribute("data-api")||(d=(d=p).src.split("/"),f=d[0],d=d[2],f+"//"+d+"/api/event");function e(e,t){try{if("true"===window.localStorage.plausible_ignore)return r=t,(n="localStorage flag")&&console.warn("Ignoring Event: "+n),void(r&&r.callback&&r.callback())}catch(e){}var n={},r=(n.n=e,n.u=o.href,n.d=p.getAttribute("data-domain"),n.r=u.referrer||null,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=t.props),t&&t.revenue&&(n.$=t.revenue),p.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)})),a=n.p||{},i=(r.forEach(function(e){var t=e.replace("event-",""),e=p.getAttribute(e);a[t]=a[t]||e}),n.p=a,n.h=1,new XMLHttpRequest);i.open("POST",l,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(n)),i.onreadystatechange=function(){4===i.readyState&&t&&t.callback&&t.callback({status:i.status})}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var n,r=0;r<t.length;r++)e.apply(this,t[r]);function a(){n=o.pathname,e("pageview")}function s(e){return e&&e.tagName&&"a"===e.tagName.toLowerCase()}window.addEventListener("hashchange",a),"prerender"===u.visibilityState?u.addEventListener("visibilitychange",function(){n||"visible"!==u.visibilityState||a()}):a();var c=1;function i(e){var t,n,r,a;if("auxclick"!==e.type||e.button===c)return t=function(e){for(;e&&(void 0===e.tagName||!s(e)||!e.href);)e=e.parentNode;return e}(e.target),n=t&&t.href&&t.href.split("?")[0],!function e(t,n){if(!t||w<n)return!1;if(y(t))return!0;return e(t.parentNode,n+1)}(t,0)&&(r=n)&&(a=r.split(".").pop(),g.some(function(e){return e===a}))?v(e,t,{name:"File Download",props:{url:n}}):void 0}function v(e,t,n){var r,a=!1;function i(){a||(a=!0,window.location=t.href)}!function(e,t){if(!e.defaultPrevented)return t=!t.target||t.target.match(/^_(self|parent|top)$/i),e=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type,t&&e}(e,t)?((r={props:n.props}).revenue=n.revenue,plausible(n.name,r)):((r={props:n.props,callback:i}).revenue=n.revenue,plausible(n.name,r),setTimeout(i,5e3),e.preventDefault())}u.addEventListener("click",i),u.addEventListener("auxclick",i);var f=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma","dmg"],d=p.getAttribute("file-types"),m=p.getAttribute("add-file-types"),g=d&&d.split(",")||m&&m.split(",").concat(f)||f;function b(e){var e=y(e)?e:e&&e.parentNode,t={name:null,props:{},revenue:{}},n=e&&e.classList;if(n)for(var r=0;r<n.length;r++){var a,i,o=n.item(r),u=o.match(/plausible-event-(.+)(=|--)(.+)/),u=(u&&(a=u[1],i=u[3].replace(/\+/g," "),"name"==a.toLowerCase()?t.name=i:t.props[a]=i),o.match(/plausible-revenue-(.+)(=|--)(.+)/));u&&(a=u[1],i=u[3],t.revenue[a]=i)}return t}var w=3;function h(e){if("auxclick"!==e.type||e.button===c){for(var t,n,r,a,i=e.target,o=0;o<=w&&i;o++){if((r=i)&&r.tagName&&"form"===r.tagName.toLowerCase())return;s(i)&&(t=i),y(i)&&(n=i),i=i.parentNode}n&&(a=b(n),t?(a.props.url=t.href,v(e,t,a)):((e={}).props=a.props,e.revenue=a.revenue,plausible(a.name,e)))}}function y(e){var t=e&&e.classList;if(t)for(var n=0;n<t.length;n++)if(t.item(n).match(/plausible-event-name(=|--)(.+)/))return!0;return!1}u.addEventListener("submit",function(e){var t,n=e.target,r=b(n);function a(){t||(t=!0,n.submit())}r.name&&(e.preventDefault(),t=!1,setTimeout(a,5e3),(e={props:r.props,callback:a}).revenue=r.revenue,plausible(r.name,e))}),u.addEventListener("click",h),u.addEventListener("auxclick",h)}();