!function(){"use strict";var t,r=window.location,l=window.document,s=l.getElementById("plausible"),o=s.getAttribute("data-api")||(t=(t=s).src.split("/"),c=t[0],t=t[2],c+"//"+t+"/api/event");function e(t,e){try{if("true"===window.localStorage.plausible_ignore)return a=e,(i="localStorage flag")&&console.warn("Ignoring Event: "+i),void(a&&a.callback&&a.callback())}catch(t){}var a,i={},n=(i.n=t,i.u=r.href,i.d=s.getAttribute("data-domain"),i.r=l.referrer||null,e&&e.meta&&(i.m=JSON.stringify(e.meta)),e&&e.props&&(i.p=e.props),e&&e.revenue&&(i.$=e.revenue),new XMLHttpRequest);n.open("POST",o,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(i)),n.onreadystatechange=function(){4===n.readyState&&e&&e.callback&&e.callback({status:n.status})}}var a=window.plausible&&window.plausible.q||[];window.plausible=e;for(var i,n=0;n<a.length;n++)e.apply(this,a[n]);function p(){i!==r.pathname&&(i=r.pathname,e("pageview"))}var u,c=window.history;c.pushState&&(u=c.pushState,c.pushState=function(){u.apply(this,arguments),p()},window.addEventListener("popstate",p)),"prerender"===l.visibilityState?l.addEventListener("visibilitychange",function(){i||"visible"!==l.visibilityState||p()}):p()}();