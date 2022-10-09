"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[8307],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=l,k=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8014:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(7462),l=n(3366),o=(n(7294),n(3905)),a=["components"],i={title:"CloneSet Lifecycle\uff1a\u5728 Pod \u751f\u547d\u5468\u671f\u7ba1\u7406\u4e2d\u63d2\u5165\u5b9a\u5236\u5316\u903b\u8f91"},c=void 0,p={unversionedId:"best-practices/cloneset-lifecycle",id:"version-v1.2/best-practices/cloneset-lifecycle",title:"CloneSet Lifecycle\uff1a\u5728 Pod \u751f\u547d\u5468\u671f\u7ba1\u7406\u4e2d\u63d2\u5165\u5b9a\u5236\u5316\u903b\u8f91",description:"\u56e0\u4e3a\u5404\u79cd\u5404\u6837\u7684\u5386\u53f2\u539f\u56e0\u548c\u5ba2\u89c2\u56e0\u7d20\uff0c\u6709\u4e9b\u7528\u6237\u53ef\u80fd\u65e0\u6cd5\u5c06\u81ea\u5df1\u516c\u53f8\u7684\u6574\u5957\u4f53\u7cfb\u67b6\u6784 Kubernetes \u5316\uff0c\u6bd4\u5982\u6709\u4e9b\u7528\u6237\u6682\u65f6\u65e0\u6cd5\u4f7f\u7528 Kubernetes \u672c\u8eab\u63d0\u4f9b\u7684\u670d\u52a1\u53d1\u73b0\u673a\u5236(Service)\uff0c\u800c\u662f\u4f7f\u7528\u4e86\u72ec\u7acb\u4e8e Kubernetes \u4e4b\u5916\u7684\u53e6\u5916\u4e00\u5957\u670d\u52a1\u6ce8\u518c\u548c\u53d1\u73b0\u4f53\u7cfb\u3002\u5728\u8fd9\u79cd\u67b6\u6784\u4e0b\uff0c\u5982\u679c\u7528\u6237\u5bf9\u670d\u52a1\u8fdb\u884c Kubernetes \u5316\u6539\u9020\uff0c\u53ef\u80fd\u4f1a\u9047\u5230\u8bf8\u591a\u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/best-practices/cloneset-lifecycle.md",sourceDirName:"best-practices",slug:"/best-practices/cloneset-lifecycle",permalink:"/zh/docs/v1.2/best-practices/cloneset-lifecycle",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/best-practices/cloneset-lifecycle.md",tags:[],version:"v1.2",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1654585589,formattedLastUpdatedAt:"2022/6/7",frontMatter:{title:"CloneSet Lifecycle\uff1a\u5728 Pod \u751f\u547d\u5468\u671f\u7ba1\u7406\u4e2d\u63d2\u5165\u5b9a\u5236\u5316\u903b\u8f91"},sidebar:"docs",previous:{title:"\u7ba1\u7406\u65e5\u5fd7\u91c7\u96c6sidecar\u5bb9\u5668\u6700\u4f73\u5b9e\u8df5",permalink:"/zh/docs/v1.2/best-practices/log-container-sidecarset"},next:{title:"\u57fa\u4e8eHPA\u7684\u6781\u81f4\u5f39\u6027\u8c03\u5ea6\u6700\u4f73\u5b9e\u8df5",permalink:"/zh/docs/v1.2/best-practices/elastic-deployment"}},s={},u=[{value:"\u573a\u666f\u5047\u8bbe",id:"\u573a\u666f\u5047\u8bbe",level:3},{value:"\u539f\u7406\u8bf4\u660e",id:"\u539f\u7406\u8bf4\u660e",level:3},{value:"CloneSet LifeCycle \u914d\u7f6e",id:"cloneset-lifecycle-\u914d\u7f6e",level:3},{value:"LifeCycle Operator \u6784\u5efa",id:"lifecycle-operator-\u6784\u5efa",level:3},{value:"Operator \u521d\u59cb\u5316",id:"operator-\u521d\u59cb\u5316",level:4},{value:"Controller \u903b\u8f91\u7f16\u5199",id:"controller-\u903b\u8f91\u7f16\u5199",level:4},{value:"Operator \u90e8\u7f72",id:"operator-\u90e8\u7f72",level:4}],d={toc:u};function f(e){var t=e.components,i=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u56e0\u4e3a\u5404\u79cd\u5404\u6837\u7684\u5386\u53f2\u539f\u56e0\u548c\u5ba2\u89c2\u56e0\u7d20\uff0c\u6709\u4e9b\u7528\u6237\u53ef\u80fd\u65e0\u6cd5\u5c06\u81ea\u5df1\u516c\u53f8\u7684\u6574\u5957\u4f53\u7cfb\u67b6\u6784 Kubernetes \u5316\uff0c\u6bd4\u5982\u6709\u4e9b\u7528\u6237\u6682\u65f6\u65e0\u6cd5\u4f7f\u7528 Kubernetes \u672c\u8eab\u63d0\u4f9b\u7684\u670d\u52a1\u53d1\u73b0\u673a\u5236(Service)\uff0c\u800c\u662f\u4f7f\u7528\u4e86\u72ec\u7acb\u4e8e Kubernetes \u4e4b\u5916\u7684\u53e6\u5916\u4e00\u5957\u670d\u52a1\u6ce8\u518c\u548c\u53d1\u73b0\u4f53\u7cfb\u3002\u5728\u8fd9\u79cd\u67b6\u6784\u4e0b\uff0c\u5982\u679c\u7528\u6237\u5bf9\u670d\u52a1\u8fdb\u884c Kubernetes \u5316\u6539\u9020\uff0c\u53ef\u80fd\u4f1a\u9047\u5230\u8bf8\u591a\u95ee\u9898\u3002\n\u4f8b\u5982\uff0c\u6bcf\u5f53 Kubernetes \u6210\u529f\u521b\u5efa\u51fa\u4e00\u4e2a Pod\uff0c\u90fd\u9700\u8981\u81ea\u884c\u5c06\u8be5 Pod \u6ce8\u518c\u5230\u670d\u52a1\u53d1\u73b0\u4e2d\u5fc3\uff0c\u4ee5\u4fbf\u80fd\u591f\u5bf9\u5185\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\uff1b\u76f8\u5e94\u7684\uff0c\u60f3\u8981\u4e0b\u7ebf\u4e00\u4e2a Pod\uff0c\u4e5f\u901a\u5e38\u5148\u8981\u5c06\u5176\u5728\u670d\u52a1\u53d1\u73b0\u4e2d\u5fc3\u5220\u9664\uff0c\u624d\u80fd\u5c06 Pod \u4f18\u96c5\u4e0b\u7ebf\uff0c\u5426\u5219\u5c31\u53ef\u80fd\u5bfc\u81f4\u6d41\u91cf\u635f\u5931\u3002\u4f46\u662f\u5728\u539f\u751f\u7684 Kubernetes \u4f53\u7cfb\u4e2d\uff0c Pod \u7684\u751f\u547d\u5468\u671f\u7531 Workload \u7ba1\u7406\uff08\u4f8b\u5982 Deployment\uff09\uff0c\n\u5f53\u8fd9\u4e9b Workload \u7684 Replicas \u5b57\u6bb5\u53d1\u751f\u53d8\u5316\u540e\uff0c\u76f8\u5e94\u7684 Controller \u4f1a\u7acb\u5373\u6dfb\u52a0\u6216\u5220\u9664\u6389 Pod\uff0c\u7528\u6237\u5f88\u96be\u5b9a\u5236\u5316\u5730\u53bb\u7ba1\u7406 Pod \u7684\u751f\u547d\u5468\u671f\u3002"),(0,o.kt)("p",null,"\u9762\u5bf9\u8fd9\u7c7b\u95ee\u9898\uff0c\u6446\u5728\u7528\u6237\u9762\u524d\u7684\u5f80\u5f80\u65e0\u975e\u5c31\u8fd9\u4e24\u79cd\u89e3\u51b3\u601d\u8def\uff1a\u4e00\u662f\u7ea6\u675f Kubernetes \u7684\u5f39\u6027\u80fd\u529b\uff0c\n\u4f8b\u5982\u89c4\u5b9a\u53ea\u80fd\u7531\u7279\u5b9a\u7684\u94fe\u8def\u5bf9 Workload \u8fdb\u884c\u6269\u7f29\u5bb9\uff0c\u4ee5\u4fdd\u8bc1\u5728\u5220\u9664 Pod \u524d\u5148\u628a Pod IP \u5728\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u6458\u9664\uff0c\n\u4f46\u8fd9\u6837\u4e00\u6765\u4f1a\u5236\u7ea6 Kubernetes \u672c\u8eab\u7684\u5f39\u6027\u80fd\u529b, \u5e76\u4e14\u4e5f\u589e\u52a0\u4e86\u94fe\u8def\u7ba1\u63a7\u7684\u96be\u5ea6\u548c\u98ce\u9669\u3002\n\u4e8c\u662f\u5728\u6839\u672c\u4e0a\u6539\u9020\u73b0\u6709\u7684\u670d\u52a1\u53d1\u73b0\u4f53\u7cfb\uff0c\u663e\u7136\u8fd9\u662f\u4e00\u4e2a\u66f4\u52a0\u6f2b\u957f\u548c\u9ad8\u98ce\u9669\u7684\u4e8b\u60c5\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"why",src:n(3386).Z,width:"1974",height:"1172"})),(0,o.kt)("p",null,"\u90a3\u4e48\u6709\u6ca1\u6709\u4e00\u79cd\u65e2\u80fd\u591f\u5145\u5206\u5229\u7528 Kubernetes \u5f39\u6027\u80fd\u529b\uff0c\u53c8\u907f\u514d\u5bf9\u65e2\u6709\u670d\u52a1\u53d1\u73b0\u4f53\u7cfb\u8fdb\u884c\u6539\u9020\uff0c\u5feb\u901f\u5f25\u8865\u4e24\u4e2a\u7cfb\u7edf\u4e4b\u95f4 Gap \u7684\u65b9\u6cd5\u5462\uff1f\u7b54\u6848\u662f\u80af\u5b9a\u7684\u3002"),(0,o.kt)("p",null,"OpenKruise CloneSet \u5c31\u63d0\u4f9b\u4e86\u8fd9\u6837\u4e00\u7ec4\u9ad8\u5ea6\u53ef\u5b9a\u5236\u5316\u7684\u6269\u5c55\u80fd\u529b\u6765\u4e13\u95e8\u5e94\u5bf9\u6b64\u7c7b\u573a\u666f\uff0c\u8ba9\u7528\u6237\u80fd\u591f\u5bf9 Pod \u751f\u547d\u5468\u671f\u505a\u66f4\u7cbe\u7ec6\u5316\u3001\u5b9a\u5236\u5316\u7684\u7ba1\u7406\u3002\nCloneSet \u5728 Pod \u751f\u547d\u5468\u671f\u4e2d\u51e0\u4e2a\u91cd\u8981\u7684\u65f6\u95f4\u8282\u70b9\u9884\u7559\u4e86 Hook\uff0c\u4f7f\u5f97\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u4e9b\u65f6\u95f4\u8282\u70b9\u63d2\u5165\u4e00\u4e9b\u5b9a\u5236\u5316\u7684\u6269\u5c55\u52a8\u4f5c\u3002\n\u6bd4\u5982\uff0c\u5728 Pod \u5347\u7ea7\u524d\uff0c\u5c06 Pod IP \u5728\u670d\u52a1\u53d1\u73b0\u4e2d\u5fc3\u5220\u9664\uff0c\u5347\u7ea7\u5b8c\u6210\u540e\u518d\u5c06 Pod IP \u6ce8\u518c\u5230\u670d\u52a1\u53d1\u73b0\u4e2d\u5fc3\uff0c\u6216\u8005\u505a\u4e00\u4e9b\u7279\u6b8a\u7684\u55c5\u63a2\u548c\u76d1\u63a7\u52a8\u4f5c\u3002\n\u5728\u4e0b\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u4f1a\u5728\u4e00\u4e2a\u5177\u4f53\u7684\u573a\u666f\u5bf9\u8fd9\u9879\u80fd\u529b\u8fdb\u884c\u5c55\u5f00\u8bb2\u89e3\uff0c\u5e2e\u4f60\u4f60\u8fdb\u4e00\u6b65\u6df1\u5165\u7406\u89e3\u8fd9\u4e00\u673a\u5236\u3002"),(0,o.kt)("h3",{id:"\u573a\u666f\u5047\u8bbe"},"\u573a\u666f\u5047\u8bbe"),(0,o.kt)("p",null,"\u6211\u4eec\u5047\u8bbe\u573a\u666f\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7528\u6237\u4e0d\u4f7f\u7528 Kubernetes Service \u4f5c\u4e3a\u57fa\u672c\u7684\u670d\u52a1\u53d1\u73b0\u673a\u5236\uff0c\u670d\u52a1\u53d1\u73b0\u4f53\u7cfb\u5b8c\u5168\u72ec\u7acb\u4e8e Kubernetes\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 CloneSet \u4f5c\u4e3a Kubernetes \u5de5\u4f5c\u8d1f\u8f7d\u3002")),(0,o.kt)("p",null,"\u5e76\u4e14\u5bf9\u5177\u4f53\u7684\u9700\u6c42\u505a\u5982\u4e0b\u5408\u7406\u5047\u8bbe\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5f53 Kubernetes Pod \u88ab\u521b\u5efa\u65f6\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5728\u521b\u5efa\u6210\u529f\uff0c\u4e14 Pod Ready \u4e4b\u540e\uff0c\u5c06 Pod IP \u6ce8\u518c\u5230\u670d\u52a1\u53d1\u73b0\u4e2d\u5fc3\uff1b"))),(0,o.kt)("li",{parentName:"ul"},"\u5f53 Kubernetes Pod \u539f\u5730\u5347\u7ea7\u65f6\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5728\u5347\u7ea7\u4e4b\u524d\uff0c\u9700\u8981\u5c06 Pod IP \u4ece\u670d\u52a1\u53d1\u73b0\u4e2d\u5fc3\u5220\u9664\uff08\u6216\u4e3b\u52a8 FailOver\uff09\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u5347\u7ea7\u5b8c\u6210\uff0c\u4e14 Pod Ready \u4e4b\u540e\uff0c\u5c06 Pod IP \u518d\u6b21\u6ce8\u518c\u5230\u670d\u52a1\u53d1\u73b0\u4e2d\u5fc3\uff1b"))),(0,o.kt)("li",{parentName:"ul"},"\u5f53 Kubernetes Pod \u88ab\u5220\u9664\u65f6\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5728\u5220\u9664\u4e4b\u524d\uff0c\u9700\u8981\u5148\u5c06 Pod IP \u4ece\u670d\u52a1\u53d1\u73b0\u4e2d\u5fc3\u5220\u9664\uff1b")))),(0,o.kt)("p",null,"\u57fa\u4e8e\u4ee5\u4e0a\u5047\u8bbe\uff0c\u672c\u6587\u5c06\u8be6\u7ec6\u8bb2\u8ff0\u5982\u4f55\u5229\u7528 CloneSet LifeCycle \u7f16\u5199\u4e00\u4e2a\u7b80\u5355\u7684 Operator \u6765\u5b9e\u73b0\u7528\u6237\u5b9a\u4e49\u7684 Pod \u751f\u547d\u5468\u671f\u7ba1\u7406\u673a\u5236\u3002"),(0,o.kt)("h3",{id:"\u539f\u7406\u8bf4\u660e"},"\u539f\u7406\u8bf4\u660e"),(0,o.kt)("p",null,"CloneSet LifeCycle \u5c06 Pod \u7684\u751f\u547d\u5468\u671f\u5b9a\u4e49\u4e3a\u4ee5\u4e0b 5 \u79cd\u72b6\u6001\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Normal\uff1a\u6b63\u5e38\u72b6\u6001\uff1b"),(0,o.kt)("li",{parentName:"ul"},"PreparingUpdate\uff1a\u51c6\u5907\u539f\u5730\u5347\u7ea7\uff0c\u901a\u8fc7 Lifecycle \u673a\u5236\u963b\u62e6 CloneSet \u5bf9 Pod \u7684\u5347\u7ea7\u64cd\u4f5c\uff0c\u4ee5\u4fbf\u7b49\u5f85\u7528\u6237\u6267\u884c Hook\uff0c\u5b8c\u6210\u5347\u7ea7\u524d\u7684\u4e00\u4e9b\u9884\u5904\u7406\u64cd\u4f5c\uff1b"),(0,o.kt)("li",{parentName:"ul"},"Updating\uff1a\u6b63\u5728\u539f\u5730\u5347\u7ea7\uff1b"),(0,o.kt)("li",{parentName:"ul"},"Updated\uff1a\u539f\u5730\u5347\u7ea7\u5b8c\u6210\uff0c\u901a\u77e5\u7528\u6237 Pod \u5347\u7ea7\u5b8c\u6210\uff0c\u53ef\u4ee5\u505a\u4e00\u4e9b\u6536\u5c3e\u5de5\u4f5c\uff1b"),(0,o.kt)("li",{parentName:"ul"},"PreparingDelete\uff1a\u51c6\u5907\u5220\u9664\uff0c\u901a\u8fc7 Lifecycle \u673a\u5236\u963b\u62e6 CloneSet \u5bf9 Pod \u7684\u5220\u9664\u64cd\u4f5c\uff0c\u4ee5\u4fbf\u7b49\u5f85\u7528\u6237\u6267\u884c Hook\uff0c\u5b8c\u6210\u5220\u9664\u524d\u7684\u4e00\u4e9b\u9884\u5904\u7406\u64cd\u4f5c\uff1b")),(0,o.kt)("p",null,"\u4ee5\u4e0a 5 \u79cd\u72b6\u6001\u4e4b\u95f4\u7684\u8f6c\u6362\u903b\u8f91\u7531\u4e00\u4e2a\u72b6\u6001\u673a\u6240\u63a7\u5236\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://openkruise.io/zh/docs/user-manuals/cloneset/#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90"},"CloneSet \u5b98\u65b9\u6587\u6863")," \u4e2d\u5bf9\u6b64\u8fdb\u884c\u4e86\u8be6\u7ec6\u89e3\u91ca\u3002 \u7528\u6237\u53ef\u4ee5\u53ea\u9009\u62e9\u81ea\u5df1\u6240\u5173\u5fc3\u7684\u4e00\u79cd\u6216\u591a\u79cd\uff0c\u7f16\u5199\u4e00\u4e2a\u72ec\u7acb\u7684 Operator \u6765\u5b9e\u73b0\u8fd9\u4e9b\u72b6\u6001\u7684\u8f6c\u6362\uff0c\u63a7\u5236 Pod \u7684\u751f\u547d\u5468\u671f\uff0c\u5e76\u5728\u6240\u5173\u5fc3\u7684\u65f6\u95f4\u8282\u70b9\u63d2\u5165\u81ea\u5df1\u7684\u5b9a\u5236\u5316\u903b\u8f91\u3002"),(0,o.kt)("h3",{id:"cloneset-lifecycle-\u914d\u7f6e"},"CloneSet LifeCycle \u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nmetadata:\n  namespace: demo\n  name: cloneset-lifecycle-demo\nspec:\n  replicas: 2\n  ##########################################################################\n  ## Lifecycle configuration\n  lifecycle:\n    inPlaceUpdate:\n      labelsHandler:\n        ## define the label that:\n        ##    1. block inPlace update pod operation for cloneset controller\n        ##    2. inform your operator to execute inPlace update hook\n        example.com/unready-blocker-inplace: "true"\n    preDelete:\n      labelsHandler:\n        ## define the label that:\n        ##    1. block deletion pod operation for cloneset controller\n        ##    2. inform your operator to execute preDelete hook\n        example.com/unready-blocker-delete: "true"\n  ##########################################################################\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n        ## this label is useful to judge whether this pod is newly-created.\n        example.com/newly-create: "true"\n        ## corresponding to the spec.lifecycle.inPlaceUpdate.labelsHandler.example.com/unready-blocker-inplace\n        example.com/unready-blocker-inplace: "true"\n        ## corresponding to the spec.lifecycle.preDelete.labelsHandler.example.com/unready-blocker-inplace\n        example.com/unready-blocker-delete: "true"\n      containers:\n        - name: main\n          image: nginx:latest\n          imagePullPolicy: Always\n  updateStrategy:\n    maxUnavailable: 20%\n    type: InPlaceIfPossible\n')),(0,o.kt)("h3",{id:"lifecycle-operator-\u6784\u5efa"},"LifeCycle Operator \u6784\u5efa"),(0,o.kt)("p",null,"\u5728 OpenKruise Github \u4ed3\u5e93\u4e2d\uff0c\u6211\u4eec\u7ed9\u51fa\u4e86\u4e00\u4e2a\u5b8c\u6574\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/samples/tree/master/lifecycle-hook-controller"},"CloneSet LifeCycle Operator \u4ee3\u7801\u793a\u4f8b"),"\u3002\n\u56e0\u6b64\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u4e0d\u518d\u8d58\u8ff0\u4e00\u4e9b\u4ee3\u7801\u7ec6\u8282\uff0c\u800c\u662f\u4e3b\u8981\u7ed3\u5408\u573a\u666f\u5bf9\u4e00\u4e9b\u5173\u952e\u7684\u4ee3\u7801\u903b\u8f91\u8fdb\u884c\u8bb2\u89e3\uff0c\u5982\u679c\u9700\u8981\u53c2\u8003\u5b8c\u6574\u7684\u4ee3\u7801\uff0c\u53ef\u4ee5\u76f4\u63a5\u5230\u8be5\u4ed3\u5e93\u4e2d\u53bb\u627e\u3002"),(0,o.kt)("h4",{id:"operator-\u521d\u59cb\u5316"},"Operator \u521d\u59cb\u5316"),(0,o.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 Kubebuilder \u6784\u5efa Operator\uff0c\u5177\u4f53\u6784\u5efa\u6b65\u9aa4\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://book.kubebuilder.io/quick-start.html#create-a-project"},"Kubebuilder \u5b98\u65b9\u6587\u6863"),"\u3002\n\u521d\u59cb\u5316\u5b8c\u6210\u7684 Operator \u76ee\u5f55\u7ed3\u6784\u7c7b\u4f3c\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ tree\n.\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 Makefile\n\u251c\u2500\u2500 PROJECT\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 config\n\u2502   \u2514\u2500\u2500 ....\n\u251c\u2500\u2500 controllers\n\u2502\xa0\xa0 \u2514\u2500\u2500 lifecyclehook\n\u2502\xa0\xa0     \u2514\u2500\u2500 lifecyclehook_controller.go\n\u251c\u2500\u2500 go.mod\n\u251c\u2500\u2500 go.sum\n\u251c\u2500\u2500 hack\n\u2502\xa0\xa0 \u2514\u2500\u2500 ....\n\u2514\u2500\u2500 main.go\n")),(0,o.kt)("h4",{id:"controller-\u903b\u8f91\u7f16\u5199"},"Controller \u903b\u8f91\u7f16\u5199"),(0,o.kt)("p",null,"Pod \u751f\u547d\u5468\u671f\u72b6\u6001\u7ba1\u7406\u903b\u8f91\u90fd\u4f1a\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"lifecyclehook_controller.go")," \u6587\u4ef6\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"}," Reconcile(req ctrl.Request) (ctrl.Result, error)"),"  \u65b9\u6cd5\u4e2d\u7f16\u5199\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\u5728\u672c\u6587\u7684\u5047\u8bbe\u7684\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06 Pod \u7684\u751f\u547d\u5468\u671f\u7ba1\u7406\u903b\u8f91\u901a\u8fc7\u4ee5\u4e0b\u4ee3\u7801\u6765\u5b9e\u73b0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'\nconst (\n    deleteHookLabel  = "example.com/unready-blocker-delete"\n    inPlaceHookLabel = "example.com/unready-blocker-inplace"\n    newlyCreateLabel = "example.com/newly-create"\n)\n\nfunc (r *SampleReconciler) Reconcile(req ctrl.Request) (ctrl.Result, error) {\n  \n    ... ...\n\n    switchLabel := func(pod *v1.Pod, key, value string) error {\n        body := fmt.Sprintf(`{"metadata":{"labels":{"%s":"%s"}}}`, key, value)\n        if err := r.Patch(context.TODO(), pod, client.RawPatch(types.StrategicMergePatchType, []byte(body))); err != nil {\n            return err\n        }\n        return nil\n    }\n\n\n    /*\n        Pod LifeCycle Hook Logic\n    */\n    switch {\n    // handle newly-created pod\n    case IsNewlyCreateHooked(pod):\n        // register this pod to your service discovery center\n        if err := postRegistry(pod); err != nil {\n            return reconcile.Result{}, err\n        }\n        if err := switchLabel(pod, newlyCreateLabel, "false"); err != nil {\n            return reconcile.Result{}, err\n        }\n        \n    // handle the pod which is preparing to inplace update\n    case IsPreUpdateHooked(pod):\n        // let the service discover center fail over this pod \n        if err := postFailOver(pod); err != nil {\n            return reconcile.Result{}, err\n        }\n        if err := switchLabel(pod, inPlaceHookLabel, "false"); err != nil {\n            return reconcile.Result{}, err\n        }\n        \n    // handle the pod which is updated completely \n    case IsUpdatedHooked(pod):\n        // register this pod again to your service discovery center \n        if err := postRegistry(pod); err != nil {\n            return reconcile.Result{}, err\n        }\n        if err := switchLabel(pod, inPlaceHookLabel, "true"); err != nil {\n            return reconcile.Result{}, err\n        }\n\n    // handle the pod which is preparing to delete  \n    case IsPreDeleteHooked(pod):\n        // just unregister this pod from your service discovery center\n        if err := postUnregister(pod); err != nil {\n            return reconcile.Result{}, err\n        }\n        if err := switchLabel(pod, deleteHookLabel, "false"); err != nil {\n            return reconcile.Result{}, err\n        }\n    }\n\n    return ctrl.Result{}, nil\n}\n\nfunc IsNewlyCreateHooked(pod *v1.Pod) bool {\n    return kruiseappspub.LifecycleStateType(pod.Labels[kruiseappspub.LifecycleStateKey]) == kruiseappspub.LifecycleStateNormal && pod.Labels[newlyCreateLabel] == "true" && IsPodReady(pod)\n}\n\nfunc IsPreUpdateHooked(pod *v1.Pod) bool {\n    return kruiseappspub.LifecycleStateType(pod.Labels[kruiseappspub.LifecycleStateKey]) == kruiseappspub.LifecycleStatePreparingUpdate && pod.Labels[inPlaceHookLabel] == "true"\n}\n\nfunc IsUpdatedHooked(pod *v1.Pod) bool {\n    return kruiseappspub.LifecycleStateType(pod.Labels[kruiseappspub.LifecycleStateKey]) == kruiseappspub.LifecycleStateUpdated && pod.Labels[inPlaceHookLabel] == "false" && IsPodReady(pod)\n}\n\nfunc IsPreDeleteHooked(pod *v1.Pod) bool {\n    return kruiseappspub.LifecycleStateType(pod.Labels[kruiseappspub.LifecycleStateKey]) == kruiseappspub.LifecycleStatePreparingDelete && pod.Labels[DeleteHookLabel] == "true"\n}\n')),(0,o.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u4e2d\u56db\u4e2a case \u5206\u522b\u4ece\u4e0a\u5230\u4e0b\u5bf9\u5e94 Pod \u7684\u521b\u5efa\u540e\u3001\u5347\u7ea7\u524d\u3001\u5347\u7ea7\u540e\u3001\u5220\u9664\u524d\u7b49\u56db\u4e2a\u91cd\u8981\u58f0\u660e\u5468\u671f\u8282\u70b9\uff0c\u7528\u6237\u9700\u8981\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\u6765\u5b8c\u5584\u76f8\u5e94\u7684 Hook\u3002\u5728\u672c\u6587\u7684\u573a\u666f\u4e2d\uff0c\u4e0a\u8ff0\u51e0\u4e2a Hook \u7684\u884c\u4e3a\u5177\u4f53\u4e3a\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"postRegistry(pod *v1.Pod)")," : \u53d1\u9001\u8bf7\u6c42\u901a\u77e5\u670d\u52a1\u53d1\u73b0\u4e2d\u5fc3\u6ce8\u518c\u8be5 Pod \u670d\u52a1\uff1b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"postFailOver(pod *v1.Pod)")," : \u53d1\u9001\u8bf7\u6c42\u901a\u77e5\u670d\u52a1\u53d1\u73b0\u4e2d\u5fc3 Fail Over \u8be5 Pod \u670d\u52a1\uff1b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"postUnregiste(pod *v1.Pod)"),": \u53d1\u9001\u8bf7\u6c42\u901a\u77e5\u670d\u52a1\u53d1\u73b0\u4e2d\u5fc3\u5c06\u8be5 Pod \u670d\u52a1\u6ce8\u9500\u3002")),(0,o.kt)("h4",{id:"operator-\u90e8\u7f72"},"Operator \u90e8\u7f72"),(0,o.kt)("p",null,"\u5f53\u8be5 Operator \u4ee3\u7801\u903b\u8f91\u5b8c\u5584\u540e\uff0c\u9700\u8981\u5c06\u8be5 Operator \u90e8\u7f72\u5230\u76ee\u6807\u96c6\u7fa4\uff0c\u90e8\u7f72\u65b9\u5f0f\u53ef\u53c2\u8003 Kubebuilder \u5b98\u65b9\u6587\u6863\uff0c\u6b64\u5904\u4e0d\u518d\u8d58\u8ff0\u3002"),(0,o.kt)("p",null,"Operator \u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u8be5 Operator \u5c06\u6301\u7eed\u76d1\u542c\u96c6\u7fa4\u4e2d Pod \u7684\u72b6\u6001\uff0c\u5e76\u5728\u6bcf\u4e2a Pod \u7684\u5173\u952e\u751f\u547d\u5468\u671f\u8282\u70b9\u81ea\u52a8\u6267\u884c\u4e0a\u8ff0 Hook\uff0c\u4ece\u800c\u5c06 Kubernetes \u4e0e\u4f60\u7684\u670d\u52a1\u53d1\u73b0\u4e2d\u5fc3\u8fdb\u884c\u8854\u63a5\uff0c\u5f25\u5408\u4e24\u8005\u7684 Gap\u3002"))}f.isMDXComponent=!0},3386:function(e,t,n){t.Z=n.p+"assets/images/cloneset_lifecycle-480f3577668bfc0bd7724851982df69c.png"}}]);