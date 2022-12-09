"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6513],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||s[d]||i;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="\u30dc\u30c3\u30c8\u306e\u8a2d\u5b9a\u306b\u3064\u3044\u3066",l={unversionedId:"docs/installation/configuration",id:"docs/installation/configuration",title:"\u30dc\u30c3\u30c8\u306e\u8a2d\u5b9a\u306b\u3064\u3044\u3066",description:"\u30dc\u30c3\u30c8\u306e\u5404\u7a2e\u8a2d\u5b9a\u3092.env\u3001config.json\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002",source:"@site/docs/docs/installation/configuration.md",sourceDirName:"docs/installation",slug:"/docs/installation/configuration",permalink:"/Discord-SimpleMusicBot/docs/docs/installation/configuration",draft:!1,editUrl:"https://github.com/mtripg6666tdr/Discord-SimpleMusicBot/tree/master/docs/docs/docs/installation/configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Docker\u3092\u4f7f\u7528\u3059\u308b",permalink:"/Discord-SimpleMusicBot/docs/docs/installation/docker"},next:{title:"\u30dc\u30c3\u30c8\u306e\u6a29\u9650",permalink:"/Discord-SimpleMusicBot/docs/docs/permission"}},p={},c=[{value:"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066",id:"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066",level:2},{value:"<code>.env</code>\u30d5\u30a1\u30a4\u30eb",id:"env\u30d5\u30a1\u30a4\u30eb",level:2},{value:"<code>config.json</code>\u30d5\u30a1\u30a4\u30eb",id:"configjson\u30d5\u30a1\u30a4\u30eb",level:2}],m={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u30dc\u30c3\u30c8\u306e\u8a2d\u5b9a\u306b\u3064\u3044\u3066"},"\u30dc\u30c3\u30c8\u306e\u8a2d\u5b9a\u306b\u3064\u3044\u3066"),(0,a.kt)("p",null,"\u30dc\u30c3\u30c8\u306e\u5404\u7a2e\u8a2d\u5b9a\u3092",(0,a.kt)("inlineCode",{parentName:"p"},".env"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"config.json"),"\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u8a73\u3057\u304f\u306f\u4ee5\u4e0b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h2",{id:"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066"),(0,a.kt)("p",null,"\u672c\u30dc\u30c3\u30c8\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},".env"),"\u3068",(0,a.kt)("inlineCode",{parentName:"p"},"config.json"),"\u306e2\u30d5\u30a1\u30a4\u30eb\u3067\u3059\u3002"),(0,a.kt)("h2",{id:"env\u30d5\u30a1\u30a4\u30eb"},(0,a.kt)("inlineCode",{parentName:"h2"},".env"),"\u30d5\u30a1\u30a4\u30eb"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mtripg6666tdr/Discord-SimpleMusicBot/blob/master/.env.sample"},"\u30b5\u30f3\u30d7\u30eb\u30d5\u30a1\u30a4\u30eb")),(0,a.kt)("p",null,"\u3053\u3061\u3089\u306b\u306f\u4e3b\u306b\u30c8\u30fc\u30af\u30f3\u306a\u3069\u306e\u8a8d\u8a3c\u60c5\u5831\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".env.sample"),"\u304c\u30b5\u30f3\u30d7\u30eb\u30d5\u30a1\u30a4\u30eb\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u306e\u3067\u3001\u30b3\u30d4\u30fc\uff06\u30ea\u30cd\u30fc\u30e0\u3057\u3066\u304a\u4f7f\u3044\u304f\u3060\u3055\u3044\u3002  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TOKEN",(0,a.kt)("br",{parentName:"li"}),"\u30dc\u30c3\u30c8\u306e\u30c8\u30fc\u30af\u30f3\u3067\u3059\u3002Discord Developer Portal\u304b\u3089\u53d6\u5f97\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("li",{parentName:"ul"},"CSE_KEY",(0,a.kt)("br",{parentName:"li"}),"\u6b4c\u8a5e\u691c\u7d22\u306b\u4f7f\u7528\u3059\u308bGoogle Custom Search\u306ekey\u3067\u3059\u3002(\u4efb\u610f\u6307\u5b9a)"),(0,a.kt)("li",{parentName:"ul"},"GAS_URL",(0,a.kt)("br",{parentName:"li"}),"\u300c\u30ad\u30e5\u30fc\u3084\u30eb\u30fc\u30d7\u306e\u6709\u52b9\u7121\u52b9\u7b49\u306e\u30c7\u30fc\u30bf\u306e\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u300d\u306b\u4f7f\u7528\u3059\u308b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30b5\u30fc\u30d0\u30fc\u306eURL\u3067\u3059\u3002(\u4efb\u610f\u6307\u5b9a)",(0,a.kt)("br",{parentName:"li"}),"\u30b5\u30fc\u30d0\u30fc\u306e\u4ed5\u69d8\u7b49\u306b\u3064\u3044\u3066\u306f\u3042\u3068\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("li",{parentName:"ul"},"GAS_TOKEN",(0,a.kt)("br",{parentName:"li"}),"\u300c\u30ad\u30e5\u30fc\u3084\u30eb\u30fc\u30d7\u306e\u6709\u52b9\u7121\u52b9\u7b49\u306e\u30c7\u30fc\u30bf\u306e\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u300d\u306b\u4f7f\u7528\u3059\u308b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30b5\u30fc\u30d0\u30fc\u306e\u30c8\u30fc\u30af\u30f3\u3067\u3059\u3002(\u4efb\u610f\u6307\u5b9a)",(0,a.kt)("br",{parentName:"li"}),"\u30b5\u30fc\u30d0\u30fc\u306e\u4ed5\u69d8\u7b49\u306b\u3064\u3044\u3066\u306f\u3042\u3068\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("h2",{id:"configjson\u30d5\u30a1\u30a4\u30eb"},(0,a.kt)("inlineCode",{parentName:"h2"},"config.json"),"\u30d5\u30a1\u30a4\u30eb"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mtripg6666tdr/Discord-SimpleMusicBot/blob/master/config.json.sample"},"\u30b5\u30f3\u30d7\u30eb\u30d5\u30a1\u30a4\u30eb")),(0,a.kt)("p",null,"\u3053\u3061\u3089\u306b\u306f\u30dc\u30c3\u30c8\u306e\u8a2d\u5b9a\u60c5\u5831\u306a\u3069\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002  "),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u4efb\u610f\u6307\u5b9a\u306e\u8a2d\u5b9a\u306b\u95a2\u3057\u3066\u306f\u3001",(0,a.kt)("strong",{parentName:"p"},'\u5024\u3092null\u306b\u3057\u3066\u304f\u3060\u3055\u3044("null"\u3067\u306f\u306a\u304fnull)'),(0,a.kt)("br",{parentName:"p"}),"\n","\u4f8b\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "proxy": null\n}\n'))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"config.json.sample"),"\u304c\u30b5\u30f3\u30d7\u30eb\u30d5\u30a1\u30a4\u30eb\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u306e\u3067\u3001\u30b3\u30d4\u30fc\uff06\u30ea\u30cd\u30fc\u30e0\u3057\u3066\u304a\u4f7f\u3044\u304f\u3060\u3055\u3044\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","(\u30ab\u30c3\u30b3\u5185\u306f\u3001\u578b\u3067\u3059\u3002)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"adminId (string|null)",(0,a.kt)("br",{parentName:"li"}),"\u7ba1\u7406\u4eba\u306e\u30e6\u30fc\u30b6\u30fc\u306eID\u3002\u8a2d\u5b9a\u3057\u306a\u3044\u5834\u5408\u306f",(0,a.kt)("inlineCode",{parentName:"li"},"null")),(0,a.kt)("li",{parentName:"ul"},"debug (boolean)",(0,a.kt)("br",{parentName:"li"}),"\u30c7\u30d0\u30c3\u30b0\u7528\u306e\u69cb\u6210\u3067\u8d77\u52d5\u3059\u308b\u304b\u3002\u30c7\u30d0\u30c3\u30b0\u7528\u69cb\u6210\u3067\u306f\u3001\u51fa\u529b\u3055\u308c\u308b\u30ed\u30b0\u306e\u91cf\u304c\u5897\u3048\u3001\u30ed\u30b0\u304c\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u51fa\u529b\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"maintenance (boolean)",(0,a.kt)("br",{parentName:"li"}),"\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u7528\u306e\u69cb\u6210\u3067\u8d77\u52d5\u3059\u308b\u304b\u3002\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u7528\u69cb\u6210\u3067\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"adminId"),"\u3067\u6307\u5b9a\u3057\u305f\u7ba1\u7406\u8005\u4ee5\u5916\u304b\u3089\u306e\u30b3\u30de\u30f3\u30c9\u3092\u3059\u3079\u3066\u7121\u8996\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"errorChannel (string|null)",(0,a.kt)("br",{parentName:"li"}),"\u30a8\u30e9\u30fc\u30ec\u30dd\u30fc\u30c8\u3092\u9001\u4fe1\u3059\u308b\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30f3\u30cd\u30eb\u306eID\u3002\u8a2d\u5b9a\u3057\u306a\u3044\u5834\u5408\u306f",(0,a.kt)("inlineCode",{parentName:"li"},"null")),(0,a.kt)("li",{parentName:"ul"},"proxy (string|null)",(0,a.kt)("br",{parentName:"li"}),"\u30d7\u30ed\u30ad\u30b7\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u305d\u306eURL\u3002\u8a2d\u5b9a\u3057\u306a\u3044\u5834\u5408\u306f",(0,a.kt)("inlineCode",{parentName:"li"},"null")),(0,a.kt)("li",{parentName:"ul"},"prefix (string|null)",(0,a.kt)("br",{parentName:"li"}),"\u6307\u5b9a\u3059\u308b\u5834\u5408\u306f\u4e00\u6587\u5b57\u3067\u30c7\u30d5\u30a9\u30eb\u30c8\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002(\u4efb\u610f\u6307\u5b9a)",(0,a.kt)("br",{parentName:"li"}),"\u3053\u3061\u3089\u306f\u4e92\u63db\u6027\u306e\u305f\u3081\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u81ea\u4f53\u304c\u7701\u7565\u3055\u308c\u3066\u3044\u3066\u3082\u52d5\u4f5c\u3059\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"webserver (boolean)",(0,a.kt)("br",{parentName:"li"}),"\u30a6\u30a7\u30d6\u30b5\u30fc\u30d0\u30fc\u3092\u8d77\u52d5\u3059\u308b\u304b\uff08\u4efb\u610f\u6307\u5b9a\uff09",(0,a.kt)("br",{parentName:"li"}),"\u3053\u3061\u3089\u306f\u4e92\u63db\u6027\u306e\u305f\u3081\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u81ea\u4f53\u304c\u7701\u7565\u3055\u308c\u3066\u3044\u3066\u3082\u52d5\u4f5c\u3059\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"bgm (object)",(0,a.kt)("br",{parentName:"li"}),"\u81ea\u52d5\u7684\u306bBGM\u3092\u518d\u751f\u3059\u308b\u3088\u3046\u306b\u69cb\u6210\u3067\u304d\u307e\u3059\u3002\u8a2d\u5b9a\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mtripg6666tdr/Discord-SimpleMusicBot/blob/master/util/config-with-bgm.json"},"\u3053\u3061\u3089\u306e\u30d5\u30a1\u30a4\u30eb"),"\u3092\u53c2\u8003\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}s.isMDXComponent=!0}}]);