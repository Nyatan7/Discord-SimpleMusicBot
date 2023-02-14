"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Docker\u3092\u4f7f\u7528\u3059\u308b",l={unversionedId:"docs/installation/docker",id:"docs/installation/docker",title:"Docker\u3092\u4f7f\u7528\u3059\u308b",description:"\u30d7\u30ea\u30d3\u30eb\u30c9\u3055\u308c\u3066\u3044\u308bDocker\u30a4\u30e1\u30fc\u30b8\u3092\u4f7f\u7528\u3057\u3066\u7c21\u5358\u306b\u30dc\u30c3\u30c8\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002",source:"@site/docs/docs/installation/docker.md",sourceDirName:"docs/installation",slug:"/docs/installation/docker",permalink:"/Discord-SimpleMusicBot/docs/docs/installation/docker",draft:!1,editUrl:"https://github.com/mtripg6666tdr/Discord-SimpleMusicBot/tree/master/docs/docs/docs/installation/docker.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"\u30af\u30ed\u30fc\u30f3\u3057\u3066\u5b9f\u884c\u3059\u308b",permalink:"/Discord-SimpleMusicBot/docs/docs/installation/normal"},next:{title:"\u30dc\u30c3\u30c8\u306e\u8a2d\u5b9a\u306b\u3064\u3044\u3066",permalink:"/Discord-SimpleMusicBot/docs/docs/installation/configuration"}},c={},p=[{value:"\u5fc5\u8981\u306a\u74b0\u5883",id:"\u5fc5\u8981\u306a\u74b0\u5883",level:2},{value:"\u8a2d\u5b9a\u306e\u624b\u9806",id:"\u8a2d\u5b9a\u306e\u624b\u9806",level:2},{value:"1. \u30a4\u30e1\u30fc\u30b8\u3092Pull",id:"1-\u30a4\u30e1\u30fc\u30b8\u3092pull",level:3},{value:"2. \u30dc\u30c3\u30c8\u306e\u8a2d\u5b9a",id:"2-\u30dc\u30c3\u30c8\u306e\u8a2d\u5b9a",level:3},{value:"3. \u5b9f\u884c",id:"3-\u5b9f\u884c",level:3},{value:"\u8d77\u52d5\u3068\u505c\u6b62",id:"\u8d77\u52d5\u3068\u505c\u6b62",level:2},{value:"\u66f4\u65b0",id:"\u66f4\u65b0",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker\u3092\u4f7f\u7528\u3059\u308b"},"Docker\u3092\u4f7f\u7528\u3059\u308b"),(0,a.kt)("p",null,"\u30d7\u30ea\u30d3\u30eb\u30c9\u3055\u308c\u3066\u3044\u308bDocker\u30a4\u30e1\u30fc\u30b8\u3092\u4f7f\u7528\u3057\u3066\u7c21\u5358\u306b\u30dc\u30c3\u30c8\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u5fc5\u8981\u306a\u74b0\u5883"},"\u5fc5\u8981\u306a\u74b0\u5883"),(0,a.kt)("p",null,"\u3053\u306e\u30dc\u30c3\u30c8\u3092Docker\u3067\u5229\u7528\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u74b0\u5883\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Docker\u3092\u5229\u7528\u3067\u304d\u308b\u3053\u3068"),(0,a.kt)("li",{parentName:"ul"},"CPU\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u304cAMD64\u307e\u305f\u306fARM64")),(0,a.kt)("h2",{id:"\u8a2d\u5b9a\u306e\u624b\u9806"},"\u8a2d\u5b9a\u306e\u624b\u9806"),(0,a.kt)("h3",{id:"1-\u30a4\u30e1\u30fc\u30b8\u3092pull"},"1. \u30a4\u30e1\u30fc\u30b8\u3092Pull"),(0,a.kt)("p",null,"\u30a4\u30e1\u30fc\u30b8\u3092Pull\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ghcr.io/mtripg6666tdr/discord-music-bot:latest\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u6307\u5b9a\u3057\u3066Pull\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"docker pull ghcr.io/mtripg6666tdr/discord-music-bot:3.4.0"),(0,a.kt)("br",{parentName:"p"}),"\n","\u30a4\u30e1\u30fc\u30b8\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u308b\u306e\u306f\u3001v3.4.0\u4ee5\u964d\u3067\u3059\u3002  ")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"GitHub Packages\u306b\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u3046\u3061\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"3.4.0"),"\u306e\u3088\u3046\u306a\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u6587\u5b57\u5217\u3067\u30bf\u30b0\u4ed8\u3051\u3055\u308c\u3066\u3044\u306a\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306f\u3001\u958b\u767a\u6bb5\u968e\u306e\u30a4\u30e1\u30fc\u30b8\u3067\u3059\u306e\u3067\u3001\u4f7f\u7528\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u30a4\u30e1\u30fc\u30b8\u306f\u3001\u30ea\u30ea\u30fc\u30b9\u30ce\u30fc\u30c8\u304c\u516c\u958b\u3055\u308c\u3066\u304b\u3089\u3001\u7d0430\uff5e40\u5206\u5f8c\u306b\u30d3\u30eb\u30c9\u304c\u5b8c\u4e86\u3057\u516c\u958b\u3055\u308c\u307e\u3059\u3002")),(0,a.kt)("h3",{id:"2-\u30dc\u30c3\u30c8\u306e\u8a2d\u5b9a"},"2. \u30dc\u30c3\u30c8\u306e\u8a2d\u5b9a"),(0,a.kt)("p",null,"\u30dc\u30c3\u30c8\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f\u3001\u30dc\u30c3\u30c8\u306e\u30c8\u30fc\u30af\u30f3\u3092\u542b\u3080\u5404\u7a2e\u8a2d\u5b9a\u304c\u5fc5\u8981\u3067\u3059\u3002",(0,a.kt)("a",{parentName:"p",href:"./configuration"},"\u300c\u30dc\u30c3\u30c8\u306e\u8a2d\u5b9a\u306b\u3064\u3044\u3066\u300d"),"\u3092\u53c2\u8003\u306b\u3001\u8a2d\u5b9a\u3092\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306f\u9069\u5f53\u306a\u5834\u6240\u306b\u914d\u7f6e\u3057\u307e\u3059\u3002\u305d\u306e\u969b\u306f\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9\u3092\u63a7\u3048\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},".env"),"\u306e\u5185\u5bb9\u306f",(0,a.kt)("inlineCode",{parentName:"p"},".env"),"\u3092\u4f7f\u7528\u305b\u305a\u3068\u3082\u3001\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u3067\u6307\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"3-\u5b9f\u884c"},"3. \u5b9f\u884c"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'docker container run --mount type=bind,source="<config.json\u306e\u30d1\u30b9>",target=/app/config.json --env-file "<.env\u306e\u30d1\u30b9>" --name <\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u540d\u524d> --detach ghcr.io/mtripg6666tdr/discord-music-bot\n')),(0,a.kt)("p",null,"\u4f8b\u3048\u3070\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"config.json"),"\u306e\u5834\u6240\u304c",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\data\\config.json"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},".env"),"\u306e\u5834\u6240\u304c",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\data\\.env"),"\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u540d\u524d\u3092",(0,a.kt)("inlineCode",{parentName:"p"},"dsmb-instance-1"),"\u3068\u3059\u308b\u306e\u5834\u5408\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'docker container run --mount type=bind,source="C:\\data\\config.json",target=/app/config.json --env-file "C:\\data\\.env" --name dsmb-instance-1 --detach ghcr.io/mtripg6666tdr/discord-music-bot\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".env"),"\u306e\u5185\u5bb9\u3092\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u3067\u6e21\u3059\u5834\u5408\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'docker container run --mount type=bind,source="<config.json\u306e\u30d1\u30b9>",target=/app/config.json --env TOKEN=<Discord\u306e\u30c8\u30fc\u30af\u30f3> --name <\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u540d\u524d> --detach ghcr.io/mtripg6666tdr/discord-music-bot\n')),(0,a.kt)("p",null,"\u30b3\u30de\u30f3\u30c9\u306e\u4f7f\u7528\u65b9\u6cd5\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306f",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.jp/engine/reference/commandline/container_run.html"},"Docker\u306e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h2",{id:"\u8d77\u52d5\u3068\u505c\u6b62"},"\u8d77\u52d5\u3068\u505c\u6b62"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8d77\u52d5\u3059\u308b\u306b\u306f\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002  "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker container start <\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u540d\u524d>\n")),(0,a.kt)("p",{parentName:"li"},"\u30b3\u30de\u30f3\u30c9\u306e\u4f7f\u7528\u65b9\u6cd5\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306f",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.jp/engine/reference/commandline/container_start.html"},"Docker\u306e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u505c\u6b62\u3059\u308b\u306b\u306f\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002  "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker container stop <\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u540d\u524d>\n")),(0,a.kt)("p",{parentName:"li"},"\u30b3\u30de\u30f3\u30c9\u306e\u4f7f\u7528\u65b9\u6cd5\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306f",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.jp/engine/reference/commandline/container_stop.html"},"Docker\u306e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,a.kt)("h2",{id:"\u66f4\u65b0"},"\u66f4\u65b0"),(0,a.kt)("p",null,"\u30dc\u30c3\u30c8\u3092\u66f4\u65b0\u3059\u308b\u306b\u306f\u3001\u30b3\u30f3\u30c6\u30ca\u3092\u524a\u9664\u3057\u3066\u304b\u3089\u3001",(0,a.kt)("a",{parentName:"p",href:"#1-%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8%E3%82%92pull"},"\u4e0a\u306e\u624b\u9806"),"\u306b\u3057\u305f\u304c\u3063\u3066\u518d\u5ea6\u30b3\u30f3\u30c6\u30ca\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7a3c\u50cd\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u505c\u6b62\u3057\u307e\u3059\u3002\ndocker container stop <\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u540d\u524d>\n# \u30b3\u30f3\u30c6\u30ca\u306e\u524a\u9664\ndocker container rm <\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u540d\u524d>\n")))}d.isMDXComponent=!0}}]);