"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[287],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},i="3. \u30c8\u30e9\u30f3\u30b9\u30d1\u30a4\u30eb\uff06\u5b9f\u884c",c={unversionedId:"docs/installation/run",id:"docs/installation/run",title:"3. \u30c8\u30e9\u30f3\u30b9\u30d1\u30a4\u30eb\uff06\u5b9f\u884c",description:"\u30c8\u30e9\u30f3\u30b9\u30d1\u30a4\u30eb\u3068\u5b9f\u884c\u306f\u4e00\u62ec\u3057\u3066\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3067\u884c\u3046\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002",source:"@site/docs/docs/installation/3-run.md",sourceDirName:"docs/installation",slug:"/docs/installation/run",permalink:"/Discord-SimpleMusicBot/docs/docs/installation/run",draft:!1,editUrl:"https://github.com/mtripg6666tdr/Discord-SimpleMusicBot/tree/master/docs/docs/docs/installation/3-run.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"docsSidebar",previous:{title:"2. Bot\u306e\u30c8\u30fc\u30af\u30f3\u306a\u3069\u306e\u8a2d\u5b9a",permalink:"/Discord-SimpleMusicBot/docs/docs/installation/configure"},next:{title:"\u30b3\u30fc\u30c9\u306e\u66f4\u65b0",permalink:"/Discord-SimpleMusicBot/docs/docs/installation/update"}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"3-\u30c8\u30e9\u30f3\u30b9\u30d1\u30a4\u30eb\u5b9f\u884c"},"3. \u30c8\u30e9\u30f3\u30b9\u30d1\u30a4\u30eb\uff06\u5b9f\u884c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u30c8\u30e9\u30f3\u30b9\u30d1\u30a4\u30eb\nnpm run build\n# \u5b9f\u884c\nnpm run onlystart\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"  \u30c8\u30e9\u30f3\u30b9\u30d1\u30a4\u30eb\u3068\u5b9f\u884c\u306f\u4e00\u62ec\u3057\u3066\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3067\u884c\u3046\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n"))),(0,o.kt)("p",null,"\u306a\u304a\u3001\u30b9\u30e9\u30c3\u30b7\u30e5\u30b3\u30de\u30f3\u30c9\u306f\u3001\u8d77\u52d5\u6642\u306b\u81ea\u52d5\u7684\u306b\u8ffd\u52a0\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002\u30b9\u30e9\u30c3\u30b7\u30e5\u30b3\u30de\u30f3\u30c9\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"/Discord-SimpleMusicBot/docs/docs/slashcommand"},"\u3042\u3068\u306e\u30da\u30fc\u30b8"),"\u3067\u89e3\u8aac\u3057\u3066\u3044\u307e\u3059\u3002"))}u.isMDXComponent=!0}}]);