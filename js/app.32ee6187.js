(function(){"use strict";var e={8166:function(e,n,t){var r=t(1106),o=function(){var e=this,n=e._self._c;return n("div",[n("van-tabbar",{attrs:{route:""}},[n("van-tabbar-item",{attrs:{to:"/",icon:"home-o"}},[e._v("首页")]),n("van-tabbar-item",{attrs:{to:"/student",icon:"search"}},[e._v("院校库")]),n("van-tabbar-item",{attrs:{to:"/message",icon:"setting-o"}},[e._v("消息 ")]),n("van-tabbar-item",{attrs:{to:"/my",icon:"friends-o"}},[e._v("我的")])],1),n("router-view")],1)},i=[],a=t(2349),u={},c=(0,a.Z)(u,o,i,!1,null,null,null),f=c.exports,s=t(5880);r.ZP.use(s.Z);const d=[{path:"/",name:"home",component:()=>t.e(643).then(t.bind(t,4643))},{path:"/my",name:"my",component:()=>t.e(193).then(t.bind(t,5193))},{path:"/message",name:"message",component:()=>t.e(818).then(t.bind(t,4818))},{path:"/student",name:"student",component:()=>Promise.all([t.e(728),t.e(585)]).then(t.bind(t,8585))},{path:"/select",name:"SelectSchool",component:()=>t.e(890).then(t.bind(t,9890))},{path:"/factory",name:"selectFactory",component:()=>Promise.all([t.e(728),t.e(338)]).then(t.bind(t,3338))},{path:"/aiview",name:"AIView",component:()=>t.e(526).then(t.bind(t,4526))},{path:"/intro",name:"IntroductionView",component:()=>t.e(859).then(t.bind(t,7859))},{path:"/test",name:"TestView",component:()=>t.e(693).then(t.bind(t,8693))},{path:"/login",name:"LoginView",component:()=>t.e(350).then(t.bind(t,1350))},{path:"/register",name:"RegisterView",component:()=>t.e(884).then(t.bind(t,4884))}],l=new s.Z({routes:d});var p=l,m=t(9839);t(2258);r.ZP.use(m.ZP),r.ZP.config.productionTip=!1,new r.ZP({router:p,render:e=>e(f)}).$mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{193:"ddeb4a9f",338:"30ee77d7",350:"1ae80a2b",526:"97b6392f",585:"d97a9d02",643:"e92c80ed",693:"e5304f59",728:"b32f14ea",818:"833761cb",859:"7131a3c9",884:"2079365b",890:"a461a677"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{193:"1c614ff0",338:"f823f6df",350:"9ab98a68",526:"379b520b",585:"e52e60fc",643:"f3ab07e4",693:"b5134097",818:"4c7965db",859:"1f45e2f7",884:"7a679ad9"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="webapp-work:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var d=f[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+i){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=r),e[r]=[o];var l=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=l.bind(null,u.onerror),u.onload=l.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),u=t.p+a;if(n(a,u))return o();e(r,u,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={193:1,338:1,350:1,526:1,585:1,643:1,693:1,818:1,859:1,884:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],c=r[2],f=0;if(a.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var s=c(t)}for(n&&n(r);f<a.length;f++)i=a[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},r=self["webpackChunkwebapp_work"]=self["webpackChunkwebapp_work"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(8166)}));r=t.O(r)})();
//# sourceMappingURL=app.32ee6187.js.map