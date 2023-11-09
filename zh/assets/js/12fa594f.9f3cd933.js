"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[9589],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,k=m["".concat(o,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(k,u(u({ref:t},c),{},{components:n})):r.createElement(k,u({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,u=new Array(i);u[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var p=2;p<i;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1563:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),u=["components"],l={},o="\u9879\u76ee\u8d21\u732e",p={unversionedId:"developer-manuals/contribution",id:"developer-manuals/contribution",title:"\u9879\u76ee\u8d21\u732e",description:"\u6b22\u8fce\u6765\u5230 OpenKruiseGame \u793e\u533a\u3002\u968f\u65f6\u63d0\u4f9b\u5e2e\u52a9\u3001\u62a5\u544a\u95ee\u9898\u3001\u63d0\u9ad8\u6587\u6863\u8d28\u91cf\u3001\u4fee\u590d\u9519\u8bef\u6216\u5f15\u5165\u65b0\u529f\u80fd\u3002\u6709\u5173\u5982\u4f55\u5411 OpenKruiseGame \u63d0\u4ea4\u5185\u5bb9\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1\u4e0b\u6587\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-kruisegame/current/developer-manuals/contribution.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/contribution",permalink:"/zh/kruisegame/developer-manuals/contribution",draft:!1,tags:[],version:"current",lastUpdatedBy:"skkkkkkk",lastUpdatedAt:1681291192,formattedLastUpdatedAt:"2023/4/12",frontMatter:{},sidebar:"kruisegame",previous:{title:"\u4f1a\u8bdd\u7c7b\u6e38\u620f\uff08PvP\u5f00\u623f\u95f4\uff09\u6700\u4f73\u5b9e\u8df5",permalink:"/zh/kruisegame/best-practices/session-based-game"},next:{title:"FAQ",permalink:"/zh/kruisegame/developer-manuals/faq"}},c={},s=[{value:"\u63d0\u4ea4\u95ee\u9898\u5e76\u53c2\u4e0e\u57fa\u4e8e\u573a\u666f\u7684\u8ba8\u8bba",id:"\u63d0\u4ea4\u95ee\u9898\u5e76\u53c2\u4e0e\u57fa\u4e8e\u573a\u666f\u7684\u8ba8\u8bba",level:2},{value:"\u8d21\u732e\u4ee3\u7801\u548c\u6587\u6863",id:"\u8d21\u732e\u4ee3\u7801\u548c\u6587\u6863",level:2},{value:"\u9700\u8981\u989d\u5916\u5e2e\u52a9",id:"\u9700\u8981\u989d\u5916\u5e2e\u52a9",level:2},{value:"\u6210\u4e3a OpenKruiseGame \u7684\u6838\u5fc3\u8d21\u732e\u8005",id:"\u6210\u4e3a-openkruisegame-\u7684\u6838\u5fc3\u8d21\u732e\u8005",level:2}],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u9879\u76ee\u8d21\u732e"},"\u9879\u76ee\u8d21\u732e"),(0,i.kt)("p",null,"\u6b22\u8fce\u6765\u5230 OpenKruiseGame \u793e\u533a\u3002\u968f\u65f6\u63d0\u4f9b\u5e2e\u52a9\u3001\u62a5\u544a\u95ee\u9898\u3001\u63d0\u9ad8\u6587\u6863\u8d28\u91cf\u3001\u4fee\u590d\u9519\u8bef\u6216\u5f15\u5165\u65b0\u529f\u80fd\u3002\u6709\u5173\u5982\u4f55\u5411 OpenKruiseGame \u63d0\u4ea4\u5185\u5bb9\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1\u4e0b\u6587\u3002"),(0,i.kt)("h2",{id:"\u63d0\u4ea4\u95ee\u9898\u5e76\u53c2\u4e0e\u57fa\u4e8e\u573a\u666f\u7684\u8ba8\u8bba"},"\u63d0\u4ea4\u95ee\u9898\u5e76\u53c2\u4e0e\u57fa\u4e8e\u573a\u666f\u7684\u8ba8\u8bba"),(0,i.kt)("p",null,"OpenKruiseGame \u662f\u4e00\u4e2a\u975e\u5e38\u5f00\u653e\u7684\u793e\u533a\uff0c\u968f\u65f6\u63d0\u4ea4\u5404\u79cd\u7c7b\u578b\u7684\u95ee\u9898\uff0c\u4ee5\u4e0b\u5217\u8868\u663e\u793a\u4e86\u95ee\u9898\u7c7b\u578b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9519\u8bef\u62a5\u544a"),(0,i.kt)("li",{parentName:"ul"},"\u529f\u80fd\u8981\u6c42"),(0,i.kt)("li",{parentName:"ul"},"\u6027\u80fd\u95ee\u9898"),(0,i.kt)("li",{parentName:"ul"},"\u529f\u80fd\u63d0\u6848"),(0,i.kt)("li",{parentName:"ul"},"\u7279\u5f81\u8bbe\u8ba1"),(0,i.kt)("li",{parentName:"ul"},"\u5f81\u6c42\u5e2e\u52a9"),(0,i.kt)("li",{parentName:"ul"},"\u6587\u6863\u4e0d\u5b8c\u6574"),(0,i.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u6539\u8fdb"),(0,i.kt)("li",{parentName:"ul"},"\u5173\u4e8e\u9879\u76ee\u7684\u4efb\u4f55\u95ee\u9898")),(0,i.kt)("p",null,"\u5f53\u60a8\u63d0\u4ea4\u95ee\u9898\u65f6\uff0c\u8bf7\u786e\u4fdd\u60a8\u5df2\u7ecf\u8fdb\u884c\u4e86\u6570\u636e\u5c4f\u853d\uff0c\u4ee5\u786e\u4fdd\u60a8\u7684\u4fe1\u606f\u7684\u673a\u5bc6\u6027\uff0c\u4f8b\u5982 AccessKey\u3002"),(0,i.kt)("h2",{id:"\u8d21\u732e\u4ee3\u7801\u548c\u6587\u6863"},"\u8d21\u732e\u4ee3\u7801\u548c\u6587\u6863"),(0,i.kt)("p",null,"\u80fd\u591f\u4e3a OpenKruiseGame \u63d0\u4f9b\u5e2e\u52a9\u7684\u884c\u52a8\u503c\u5f97\u9f13\u52b1\uff0c\u60a8\u53ef\u4ee5\u63d0\u4ea4\u60a8\u5e0c\u671b\u5728\u62c9\u53d6\u8bf7\u6c42\u4e2d\u4fee\u590d\u7684\u5185\u5bb9\u3002\n*\u5982\u679c\u60a8\u53d1\u73b0\u62fc\u5199\u9519\u8bef\uff0c\u8bf7\u66f4\u6b63\u5b83\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u53d1\u73b0\u4ee3\u7801\u9519\u8bef\uff0c\u8bf7\u4fee\u590d\u5b83\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u53d1\u73b0\u7f3a\u5c11\u7684\u5355\u5143\u6d4b\u8bd5\uff0c\u8bf7\u89e3\u51b3\u95ee\u9898\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u53d1\u73b0\u6587\u6863\u4e0d\u5b8c\u6574\u6216\u6709\u9519\u8bef\uff0c\u8bf7\u66f4\u65b0\u5b83\u3002")),(0,i.kt)("h2",{id:"\u9700\u8981\u989d\u5916\u5e2e\u52a9"},"\u9700\u8981\u989d\u5916\u5e2e\u52a9"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5728\u6e38\u620f\u670d\u52a1\u5668\u4e91\u539f\u751f\u6539\u9020\u8fc7\u7a0b\u4e2d\u9047\u5230\u5176\u4ed6\u7c7b\u578b\u7684\u95ee\u9898\u9700\u8981\u5e2e\u52a9\uff0c\u8bf7\u53d1\u90ae\u4ef6\u7ed9\u6211\u4eec\u5bfb\u6c42\u8fdb\u4e00\u6b65\u7684\u5e2e\u52a9\uff0c\u90ae\u7bb1:",(0,i.kt)("a",{parentName:"p",href:"mailto:zhongwei.lzw@alibaba-inc.com"},"zhongwei.lzw@alibaba-inc.com")),(0,i.kt)("h2",{id:"\u6210\u4e3a-openkruisegame-\u7684\u6838\u5fc3\u8d21\u732e\u8005"},"\u6210\u4e3a OpenKruiseGame \u7684\u6838\u5fc3\u8d21\u732e\u8005"),(0,i.kt)("p",null,"\u4e5f\u975e\u5e38\u6b22\u8fce\u5927\u5bb6\u53c2\u4e0eOpenKruiseGame\u4f1a\u8bae\uff0c\u5171\u540c\u51b3\u5b9aOpenKruiseGame\u7684\u672a\u6765\u53d1\u5c55\u65b9\u5411.\u4f5c\u4e3aOpenKruise\u7684\u4e00\u4e2a\u5b50\u9879\u76ee\uff0cOpenKruiseGame\u5728\u6211\u4eec\u53cc\u5468\u4f1a\u4e0a\u8ba8\u8bbaOpenKruise\u7684\u65f6\u5019\u4e5f\u4f1a\u8ba8\u8bba\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{target:"_blank",href:"https://github.com/openkruise/kruise#community"},"\u65f6\u95f4\u8868"),"."))}f.isMDXComponent=!0}}]);