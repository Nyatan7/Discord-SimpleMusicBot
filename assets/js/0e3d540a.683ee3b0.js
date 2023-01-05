"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6513],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return t?o.createElement(k,a(a({ref:n},d),{},{components:t})):o.createElement(k,a({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9853:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const l={},a="\u30dc\u30c3\u30c8\u306e\u8a2d\u5b9a\u306b\u3064\u3044\u3066",i={unversionedId:"docs/installation/configuration",id:"docs/installation/configuration",title:"\u30dc\u30c3\u30c8\u306e\u8a2d\u5b9a\u306b\u3064\u3044\u3066",description:"\u672c\u30dc\u30c3\u30c8\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306f\u3001.env\u3068config.json\u306e2\u30d5\u30a1\u30a4\u30eb\u3067\u3059\u3002\u3053\u308c\u3089\u306b\u5404\u7a2e\u8a2d\u5b9a\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002",source:"@site/docs/docs/installation/configuration.md",sourceDirName:"docs/installation",slug:"/docs/installation/configuration",permalink:"/Discord-SimpleMusicBot/docs/docs/installation/configuration",draft:!1,editUrl:"https://github.com/mtripg6666tdr/Discord-SimpleMusicBot/tree/master/docs/docs/docs/installation/configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Docker\u3092\u4f7f\u7528\u3059\u308b",permalink:"/Discord-SimpleMusicBot/docs/docs/installation/docker"},next:{title:"\u30dc\u30c3\u30c8\u306e\u6a29\u9650",permalink:"/Discord-SimpleMusicBot/docs/docs/permission"}},p={},c=[{value:"<code>.env</code>\u30d5\u30a1\u30a4\u30eb",id:"env\u30d5\u30a1\u30a4\u30eb",level:2},{value:"<code>TOKEN</code>",id:"token",level:3},{value:"<code>CSE_KEY</code>",id:"cse_key",level:3},{value:"<code>GAS_URL</code>",id:"gas_url",level:3},{value:"<code>GAS_TOKEN</code>",id:"gas_token",level:3},{value:"<code>config.json</code>\u30d5\u30a1\u30a4\u30eb",id:"configjson\u30d5\u30a1\u30a4\u30eb",level:2},{value:"<code>adminId</code> (string|null)",id:"adminid-stringnull",level:3},{value:"<code>debug</code> (boolean)",id:"debug-boolean",level:3},{value:"<code>maintenance</code> (boolean)",id:"maintenance-boolean",level:3},{value:"<code>errorChannel</code> (string|null)",id:"errorchannel-stringnull",level:3},{value:"<code>proxy</code> (string|null)",id:"proxy-stringnull",level:3},{value:"<code>prefix</code> (string|null)",id:"prefix-stringnull",level:3},{value:"<code>webserver</code> (boolean)",id:"webserver-boolean",level:3},{value:"<code>bgm</code> (object)",id:"bgm-object",level:3},{value:"<code>noMessageContent</code> (boolean)",id:"nomessagecontent-boolean",level:3}],d={toc:c};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u30dc\u30c3\u30c8\u306e\u8a2d\u5b9a\u306b\u3064\u3044\u3066"},"\u30dc\u30c3\u30c8\u306e\u8a2d\u5b9a\u306b\u3064\u3044\u3066"),(0,r.kt)("p",null,"\u672c\u30dc\u30c3\u30c8\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},".env"),"\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"config.json"),"\u306e2\u30d5\u30a1\u30a4\u30eb\u3067\u3059\u3002\u3053\u308c\u3089\u306b\u5404\u7a2e\u8a2d\u5b9a\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5404\u30b5\u30f3\u30d7\u30eb\u30d5\u30a1\u30a4\u30eb\u3092\u53c2\u8003\u306b\u3057\u3066\u5404\u81ea\u3067\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"env\u30d5\u30a1\u30a4\u30eb"},(0,r.kt)("inlineCode",{parentName:"h2"},".env"),"\u30d5\u30a1\u30a4\u30eb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mtripg6666tdr/Discord-SimpleMusicBot/blob/master/.env.sample"},"\u30b5\u30f3\u30d7\u30eb\u30d5\u30a1\u30a4\u30eb"))),(0,r.kt)("p",null,"\u3053\u3061\u3089\u306b\u306f\u4e3b\u306b\u30c8\u30fc\u30af\u30f3\u306a\u3069\u306e\u8a8d\u8a3c\u60c5\u5831\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},".env.sample"),"\u304c\u30b5\u30f3\u30d7\u30eb\u30d5\u30a1\u30a4\u30eb\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u306e\u3067\u3001\u30b3\u30d4\u30fc\uff06\u30ea\u30cd\u30fc\u30e0\u3057\u3066\u304a\u4f7f\u3044\u304f\u3060\u3055\u3044\u3002  "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u306a\u304a\u3001",(0,r.kt)("inlineCode",{parentName:"p"},".env"),"\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u308f\u305a\u3001\u74b0\u5883\u5909\u6570\u3067\u3082\u4ee3\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u90fd\u5408\u306e\u826f\u3044\u65b9\u3092\u304a\u4f7f\u3044\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("h3",{id:"token"},(0,r.kt)("inlineCode",{parentName:"h3"},"TOKEN")),(0,r.kt)("p",null,"  \u30dc\u30c3\u30c8\u306e\u30c8\u30fc\u30af\u30f3\u3067\u3059\u3002Discord Developer Portal\u304b\u3089\u53d6\u5f97\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h3",{id:"cse_key"},(0,r.kt)("inlineCode",{parentName:"h3"},"CSE_KEY")),(0,r.kt)("p",null,"  \u6b4c\u8a5e\u691c\u7d22\u306b\u4f7f\u7528\u3059\u308bGoogle Custom Search\u306ekey\u3067\u3059\u3002(\u4efb\u610f\u6307\u5b9a)"),(0,r.kt)("h3",{id:"gas_url"},(0,r.kt)("inlineCode",{parentName:"h3"},"GAS_URL")),(0,r.kt)("p",null,"  \u300c\u30ad\u30e5\u30fc\u3084\u30eb\u30fc\u30d7\u306e\u6709\u52b9\u7121\u52b9\u7b49\u306e\u30c7\u30fc\u30bf\u306e\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u300d\u306b\u4f7f\u7528\u3059\u308b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30b5\u30fc\u30d0\u30fc\u306eURL\u3067\u3059\u3002(\u4efb\u610f\u6307\u5b9a)",(0,r.kt)("br",{parentName:"p"}),"\n","\u30b5\u30fc\u30d0\u30fc\u306e\u4ed5\u69d8\u7b49\u306b\u3064\u3044\u3066\u306f",(0,r.kt)("a",{parentName:"p",href:"/Discord-SimpleMusicBot/docs/docs/backup/overview"},"\u30d0\u30c3\u30af\u30a2\u30c3\u30d7"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h3",{id:"gas_token"},(0,r.kt)("inlineCode",{parentName:"h3"},"GAS_TOKEN")),(0,r.kt)("p",null,"  \u300c\u30ad\u30e5\u30fc\u3084\u30eb\u30fc\u30d7\u306e\u6709\u52b9\u7121\u52b9\u7b49\u306e\u30c7\u30fc\u30bf\u306e\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u300d\u306b\u4f7f\u7528\u3059\u308b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30b5\u30fc\u30d0\u30fc\u306e\u30c8\u30fc\u30af\u30f3\u3067\u3059\u3002(\u4efb\u610f\u6307\u5b9a)",(0,r.kt)("br",{parentName:"p"}),"\n","\u30b5\u30fc\u30d0\u30fc\u306e\u4ed5\u69d8\u7b49\u306b\u3064\u3044\u3066\u306f",(0,r.kt)("a",{parentName:"p",href:"/Discord-SimpleMusicBot/docs/docs/backup/overview"},"\u30d0\u30c3\u30af\u30a2\u30c3\u30d7"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"configjson\u30d5\u30a1\u30a4\u30eb"},(0,r.kt)("inlineCode",{parentName:"h2"},"config.json"),"\u30d5\u30a1\u30a4\u30eb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mtripg6666tdr/Discord-SimpleMusicBot/blob/master/config.json.sample"},"\u30b5\u30f3\u30d7\u30eb\u30d5\u30a1\u30a4\u30eb"))),(0,r.kt)("p",null,"\u3053\u3061\u3089\u306b\u306f\u30dc\u30c3\u30c8\u306e\u8a2d\u5b9a\u60c5\u5831\u306a\u3069\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002  "),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u4efb\u610f\u6307\u5b9a\u306e\u8a2d\u5b9a\u306b\u95a2\u3057\u3066\u306f\u3001",(0,r.kt)("strong",{parentName:"p"},'\u5024\u3092null\u306b\u3057\u3066\u304f\u3060\u3055\u3044("null"\u3067\u306f\u306a\u304fnull)'),(0,r.kt)("br",{parentName:"p"}),"\n","\u4f8b\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "proxy": null\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"config.json.sample"),"\u304c\u30b5\u30f3\u30d7\u30eb\u30d5\u30a1\u30a4\u30eb\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u306e\u3067\u3001\u30b3\u30d4\u30fc\uff06\u30ea\u30cd\u30fc\u30e0\u3057\u3066\u304a\u4f7f\u3044\u304f\u3060\u3055\u3044\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",'(\u30ab\u30c3\u30b3\u5185\u306f\u8a2d\u5b9a\u5024\u306e\u3001TypeScript\u8868\u8a18\u306e"\u578b"\u3067\u3059\u3002)'),(0,r.kt)("h3",{id:"adminid-stringnull"},(0,r.kt)("inlineCode",{parentName:"h3"},"adminId")," (string|null)"),(0,r.kt)("p",null,"  \u7ba1\u7406\u4eba\u306e\u30e6\u30fc\u30b6\u30fc\u306eID\u3002\u8a2d\u5b9a\u3057\u306a\u3044\u5834\u5408\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"null")),(0,r.kt)("h3",{id:"debug-boolean"},(0,r.kt)("inlineCode",{parentName:"h3"},"debug")," (boolean)"),(0,r.kt)("p",null,"  \u30c7\u30d0\u30c3\u30b0\u7528\u306e\u69cb\u6210\u3067\u8d77\u52d5\u3059\u308b\u304b\u3002\u30c7\u30d0\u30c3\u30b0\u7528\u69cb\u6210\u3067\u306f\u3001\u51fa\u529b\u3055\u308c\u308b\u30ed\u30b0\u306e\u91cf\u304c\u5897\u3048\u3001\u30ed\u30b0\u304c\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u51fa\u529b\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"maintenance-boolean"},(0,r.kt)("inlineCode",{parentName:"h3"},"maintenance")," (boolean)"),(0,r.kt)("p",null,"  \u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u7528\u306e\u69cb\u6210\u3067\u8d77\u52d5\u3059\u308b\u304b\u3002\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u7528\u69cb\u6210\u3067\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"adminId"),"\u3067\u6307\u5b9a\u3057\u305f\u7ba1\u7406\u8005\u4ee5\u5916\u304b\u3089\u306e\u30b3\u30de\u30f3\u30c9\u3092\u3059\u3079\u3066\u7121\u8996\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"errorchannel-stringnull"},(0,r.kt)("inlineCode",{parentName:"h3"},"errorChannel")," (string|null)"),(0,r.kt)("p",null,"  \u30a8\u30e9\u30fc\u30ec\u30dd\u30fc\u30c8\u3092\u9001\u4fe1\u3059\u308b\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30f3\u30cd\u30eb\u306eID\u3002\u8a2d\u5b9a\u3057\u306a\u3044\u5834\u5408\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"null")),(0,r.kt)("h3",{id:"proxy-stringnull"},(0,r.kt)("inlineCode",{parentName:"h3"},"proxy")," (string|null)"),(0,r.kt)("p",null,"  \u30d7\u30ed\u30ad\u30b7\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u305d\u306eURL\u3002\u8a2d\u5b9a\u3057\u306a\u3044\u5834\u5408\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"null")),(0,r.kt)("h3",{id:"prefix-stringnull"},(0,r.kt)("inlineCode",{parentName:"h3"},"prefix")," (string|null)"),(0,r.kt)("p",null,"  \u6307\u5b9a\u3059\u308b\u5834\u5408\u306f\u4e00\u6587\u5b57\u3067\u30c7\u30d5\u30a9\u30eb\u30c8\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002(\u4efb\u610f\u6307\u5b9a)",(0,r.kt)("br",{parentName:"p"}),"\n","\u3053\u3061\u3089\u306f\u4e92\u63db\u6027\u306e\u305f\u3081\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u81ea\u4f53\u304c\u7701\u7565\u3055\u308c\u3066\u3044\u3066\u3082\u52d5\u4f5c\u3059\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"webserver-boolean"},(0,r.kt)("inlineCode",{parentName:"h3"},"webserver")," (boolean)"),(0,r.kt)("p",null,"  \u30a6\u30a7\u30d6\u30b5\u30fc\u30d0\u30fc\u3092\u8d77\u52d5\u3059\u308b\u304b\uff08\u4efb\u610f\u6307\u5b9a\uff09",(0,r.kt)("br",{parentName:"p"}),"\n","\u3053\u3061\u3089\u306f\u4e92\u63db\u6027\u306e\u305f\u3081\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u81ea\u4f53\u304c\u7701\u7565\u3055\u308c\u3066\u3044\u3066\u3082\u52d5\u4f5c\u3059\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"bgm-object"},(0,r.kt)("inlineCode",{parentName:"h3"},"bgm")," (object)"),(0,r.kt)("p",null,"  \u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001\u81ea\u52d5\u7684\u306bBGM\u3092\u518d\u751f\u3059\u308b\u3088\u3046\u306b\u69cb\u6210\u3067\u304d\u307e\u3059\u3002(\u4efb\u610f\u6307\u5b9a)",(0,r.kt)("br",{parentName:"p"}),"\n","\u8a2d\u5b9a\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mtripg6666tdr/Discord-SimpleMusicBot/blob/master/util/config-with-bgm.json"},"\u3053\u3061\u3089\u306e\u30d5\u30a1\u30a4\u30eb"),"\u3092\u53c2\u8003\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u3053\u3061\u3089\u306f\u4e92\u63db\u6027\u306e\u305f\u3081\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u81ea\u4f53\u304c\u7701\u7565\u3055\u308c\u3066\u3044\u3066\u3082\u52d5\u4f5c\u3059\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"nomessagecontent-boolean"},(0,r.kt)("inlineCode",{parentName:"h3"},"noMessageContent")," (boolean)"),(0,r.kt)("p",null,"  Message Content Intent\u304cDiscord Developers Portal\u3067\u7121\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\u306b\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002(\u4efb\u610f\u6307\u5b9a)",(0,r.kt)("br",{parentName:"p"}),"\n","\u30c7\u30d5\u30a9\u30eb\u30c8\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\u3067\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u3053\u3061\u3089\u306f\u4e92\u63db\u6027\u306e\u305f\u3081\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u81ea\u4f53\u304c\u7701\u7565\u3055\u308c\u3066\u3044\u3066\u3082\u52d5\u4f5c\u3059\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u8a2d\u5b9a\u306f\u3053\u308c\u3067\u4ee5\u4e0a\u3068\u306a\u308a\u307e\u3059\u3002"))}s.isMDXComponent=!0}}]);