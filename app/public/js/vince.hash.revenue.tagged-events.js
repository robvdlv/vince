!function(){"use strict";var a=window.location,i=window.document,o=i.currentScript,u=o.getAttribute("data-api")||new URL(o.src).origin+"/api/event";function l(e,t){e&&console.warn("Ignoring Event: "+e),t&&t.callback&&t.callback()}function e(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(a.hostname)||"file:"===a.protocol)return l("localhost",t);if((window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)&&!window.__plausible)return l(null,t);try{if("true"===window.localStorage.plausible_ignore)return l("localStorage flag",t)}catch(e){}var n={},r=(n.n=e,n.u=a.href,n.d=o.getAttribute("data-domain"),n.r=i.referrer||null,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=t.props),t&&t.revenue&&(n.$=t.revenue),n.h=1,new XMLHttpRequest);r.open("POST",u,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(n)),r.onreadystatechange=function(){4===r.readyState&&t&&t.callback&&t.callback({status:r.status})}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var n,r=0;r<t.length;r++)e.apply(this,t[r]);function s(){n=a.pathname,e("pageview")}function c(e){return e&&e.tagName&&"a"===e.tagName.toLowerCase()}window.addEventListener("hashchange",s),"prerender"===i.visibilityState?i.addEventListener("visibilitychange",function(){n||"visible"!==i.visibilityState||s()}):s();var p=1;function f(e){"auxclick"===e.type&&e.button!==p||((e=function(e){for(;e&&(void 0===e.tagName||!c(e)||!e.href);)e=e.parentNode;return e}(e.target))&&e.href&&e.href.split("?")[0],function e(t,n){if(!t||m<n)return!1;if(g(t))return!0;return e(t.parentNode,n+1)}(e,0))}function v(e,t,n){var r,a=!1;function i(){a||(a=!0,window.location=t.href)}!function(e,t){if(!e.defaultPrevented)return t=!t.target||t.target.match(/^_(self|parent|top)$/i),e=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type,t&&e}(e,t)?((r={props:n.props}).revenue=n.revenue,plausible(n.name,r)):((r={props:n.props,callback:i}).revenue=n.revenue,plausible(n.name,r),setTimeout(i,5e3),e.preventDefault())}function d(e){var e=g(e)?e:e&&e.parentNode,t={name:null,props:{},revenue:{}},n=e&&e.classList;if(n)for(var r=0;r<n.length;r++){var a,i,o=n.item(r),u=o.match(/plausible-event-(.+)(=|--)(.+)/),u=(u&&(a=u[1],i=u[3].replace(/\+/g," "),"name"==a.toLowerCase()?t.name=i:t.props[a]=i),o.match(/plausible-revenue-(.+)(=|--)(.+)/));u&&(a=u[1],i=u[3],t.revenue[a]=i)}return t}i.addEventListener("click",f),i.addEventListener("auxclick",f);var m=3;function w(e){if("auxclick"!==e.type||e.button===p){for(var t,n,r,a,i=e.target,o=0;o<=m&&i;o++){if((r=i)&&r.tagName&&"form"===r.tagName.toLowerCase())return;c(i)&&(t=i),g(i)&&(n=i),i=i.parentNode}n&&(a=d(n),t?(a.props.url=t.href,v(e,t,a)):((e={}).props=a.props,e.revenue=a.revenue,plausible(a.name,e)))}}function g(e){var t=e&&e.classList;if(t)for(var n=0;n<t.length;n++)if(t.item(n).match(/plausible-event-name(=|--)(.+)/))return!0;return!1}i.addEventListener("submit",function(e){var t,n=e.target,r=d(n);function a(){t||(t=!0,n.submit())}r.name&&(e.preventDefault(),t=!1,setTimeout(a,5e3),(e={props:r.props,callback:a}).revenue=r.revenue,plausible(r.name,e))}),i.addEventListener("click",w),i.addEventListener("auxclick",w)}();