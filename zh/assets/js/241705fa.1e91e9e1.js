"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[3685],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3702:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={slug:"openkruise-1.4",title:"OpenKruise V1.4 \u7248\u672c\u89e3\u8bfb\uff1a\u65b0\u589eJob Sidecar Terminator\u80fd\u529b",authors:["zmberg"],tags:["release"]},u=void 0,s={permalink:"/zh/blog/openkruise-1.4",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/blog/2023-04-18-release-1.4.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2023-04-18-release-1.4.md",title:"OpenKruise V1.4 \u7248\u672c\u89e3\u8bfb\uff1a\u65b0\u589eJob Sidecar Terminator\u80fd\u529b",description:"OpenKruise\uff08 https://github.com/openkruise/kruise \uff09\u662f\u963f\u91cc\u4e91\u5f00\u6e90\u7684\u4e91\u539f\u751f\u5e94\u7528\u81ea\u52a8\u5316\u7ba1\u7406\u5957\u4ef6\uff0c\u4e5f\u662f\u5f53\u524d\u6258\u7ba1\u5728 Cloud Native Computing Foundation (CNCF) \u4e0b\u7684\u5b75\u5316\u9879\u76ee\u3002\u5b83\u6765\u81ea\u963f\u91cc\u5df4\u5df4\u591a\u5e74\u6765\u5bb9\u5668\u5316\u3001\u4e91\u539f\u751f\u7684\u6280\u672f\u6c89\u6dc0\uff0c\u662f\u963f\u91cc\u5185\u90e8\u751f\u4ea7\u73af\u5883\u5927\u89c4\u6a21\u5e94\u7528\u7684\u57fa\u4e8e Kubernetes \u4e4b\u4e0a\u7684\u6807\u51c6\u6269\u5c55\u7ec4\u4ef6\uff0c\u4e5f\u662f\u7d27\u8d34\u4e0a\u6e38\u793e\u533a\u6807\u51c6\u3001\u9002\u5e94\u4e92\u8054\u7f51\u89c4\u6a21\u5316\u573a\u666f\u7684\u6280\u672f\u7406\u5ff5\u4e0e\u6700\u4f73\u5b9e\u8df5\u3002",date:"2023-04-18T00:00:00.000Z",formattedDate:"2023\u5e744\u670818\u65e5",tags:[{label:"release",permalink:"/zh/blog/tags/release"}],readingTime:9.955,truncated:!1,authors:[{name:"Mingshan Zhao",title:"Member of OpenKruise",url:"https://github.com/zmberg",imageURL:"https://github.com/zmberg.png",key:"zmberg"}],frontMatter:{slug:"openkruise-1.4",title:"OpenKruise V1.4 \u7248\u672c\u89e3\u8bfb\uff1a\u65b0\u589eJob Sidecar Terminator\u80fd\u529b",authors:["zmberg"],tags:["release"]},nextItem:{title:"OpenKruise v1.3\uff1a\u65b0\u589e\u81ea\u5b9a\u4e49 Pod Probe \u63a2\u9488\u80fd\u529b\u4e0e\u5927\u89c4\u6a21\u96c6\u7fa4\u6027\u80fd\u663e\u8457\u63d0\u5347",permalink:"/zh/blog/openkruise-1.3"}},c={authorsImageUrls:[void 0]},p=[{value:"1. \u91cd\u8981\u66f4\u65b0",id:"1-\u91cd\u8981\u66f4\u65b0",level:2},{value:"2. Sidecar\u5bb9\u5668\u7ba1\u7406\u80fd\u529b\uff1aJob Sidecar Terminator",id:"2-sidecar\u5bb9\u5668\u7ba1\u7406\u80fd\u529bjob-sidecar-terminator",level:2},{value:"\u8fd0\u884c\u5728\u666e\u901a\u8282\u70b9\u7684 Pod",id:"\u8fd0\u884c\u5728\u666e\u901a\u8282\u70b9\u7684-pod",level:3},{value:"\u8fd0\u884c\u5728\u865a\u62df\u8282\u70b9\u7684 Pod",id:"\u8fd0\u884c\u5728\u865a\u62df\u8282\u70b9\u7684-pod",level:3},{value:"\u6b65\u9aa4\u4e00: \u51c6\u5907\u4e00\u4e2a\u5feb\u901f\u9000\u51fa\u955c\u50cf",id:"\u6b65\u9aa4\u4e00-\u51c6\u5907\u4e00\u4e2a\u5feb\u901f\u9000\u51fa\u955c\u50cf",level:4},{value:"\u6b65\u9aa4\u4e8c: \u914d\u7f6e\u4f60\u7684 sidecar \u5bb9\u5668",id:"\u6b65\u9aa4\u4e8c-\u914d\u7f6e\u4f60\u7684-sidecar-\u5bb9\u5668",level:4},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"3. \u589e\u5f3a\u7248\u672c\u7684\u5de5\u4f5c\u8d1f\u8f7d",id:"3-\u589e\u5f3a\u7248\u672c\u7684\u5de5\u4f5c\u8d1f\u8f7d",level:2},{value:"CloneSet \u4f18\u5316\u6027\u80fd \uff1a\u65b0\u589e FeatureGate CloneSetEventHandlerOptimization",id:"cloneset-\u4f18\u5316\u6027\u80fd-\u65b0\u589e-featuregate-cloneseteventhandleroptimization",level:3},{value:"CloneSet \u65b0\u589e disablePVCReuse \u5b57\u6bb5",id:"cloneset-\u65b0\u589e-disablepvcreuse-\u5b57\u6bb5",level:3},{value:"CloneSet \u589e\u52a0 PreNormal \u751f\u547d\u5468\u671f\u94a9\u5b50",id:"cloneset-\u589e\u52a0-prenormal-\u751f\u547d\u5468\u671f\u94a9\u5b50",level:3},{value:"4. \u9ad8\u7ea7\u7684\u5e94\u7528\u8fd0\u7ef4\u80fd\u529b",id:"4-\u9ad8\u7ea7\u7684\u5e94\u7528\u8fd0\u7ef4\u80fd\u529b",level:2},{value:"\u5bb9\u5668\u91cd\u542f\u65b0\u589e forceRecreate \u5b57\u6bb5",id:"\u5bb9\u5668\u91cd\u542f\u65b0\u589e-forcerecreate-\u5b57\u6bb5",level:3},{value:"\u955c\u50cf\u9884\u70ed\u652f\u6301 Attach metadata into cri interface",id:"\u955c\u50cf\u9884\u70ed\u652f\u6301-attach-metadata-into-cri-interface",level:3},{value:"\u793e\u533a\u53c2\u4e0e",id:"\u793e\u533a\u53c2\u4e0e",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"OpenKruise\uff08 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise"},"https://github.com/openkruise/kruise")," \uff09\u662f\u963f\u91cc\u4e91\u5f00\u6e90\u7684\u4e91\u539f\u751f\u5e94\u7528\u81ea\u52a8\u5316\u7ba1\u7406\u5957\u4ef6\uff0c\u4e5f\u662f\u5f53\u524d\u6258\u7ba1\u5728 Cloud Native Computing Foundation (CNCF) \u4e0b\u7684\u5b75\u5316\u9879\u76ee\u3002\u5b83\u6765\u81ea\u963f\u91cc\u5df4\u5df4\u591a\u5e74\u6765\u5bb9\u5668\u5316\u3001\u4e91\u539f\u751f\u7684\u6280\u672f\u6c89\u6dc0\uff0c\u662f\u963f\u91cc\u5185\u90e8\u751f\u4ea7\u73af\u5883\u5927\u89c4\u6a21\u5e94\u7528\u7684\u57fa\u4e8e Kubernetes \u4e4b\u4e0a\u7684\u6807\u51c6\u6269\u5c55\u7ec4\u4ef6\uff0c\u4e5f\u662f\u7d27\u8d34\u4e0a\u6e38\u793e\u533a\u6807\u51c6\u3001\u9002\u5e94\u4e92\u8054\u7f51\u89c4\u6a21\u5316\u573a\u666f\u7684\u6280\u672f\u7406\u5ff5\u4e0e\u6700\u4f73\u5b9e\u8df5\u3002"),(0,l.kt)("p",null,"OpenKruise \u5728 2023.3.31 \u53d1\u5e03\u4e86\u6700\u65b0\u7684 v1.4 \u7248\u672c\uff08",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/blob/master/CHANGELOG.md"},"ChangeLog"),"\uff09\uff0c\u65b0\u589e Job Sidecar Terminator \u91cd\u78c5\u529f\u80fd\uff0c\u672c\u6587\u4ee5\u4e0b\u5bf9\u65b0\u7248\u672c\u505a\u6574\u4f53\u7684\u6982\u89c8\u4ecb\u7ecd\u3002"),(0,l.kt)("h2",{id:"1-\u91cd\u8981\u66f4\u65b0"},"1. \u91cd\u8981\u66f4\u65b0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u65b9\u4fbf\u5927\u5bb6\u4f7f\u7528 Kruise \u589e\u5f3a\u80fd\u529b\uff0c\u9ed8\u8ba4\u6253\u5f00\u4e86\u4e00\u4e9b\u7a33\u5b9a\u7684\u80fd\u529b\uff0c\u5982\u4e0b\uff1aResourcesDeletionProtection, WorkloadSpread, PodUnavailableBudgetDeleteGate, InPlaceUpdateEnvFromMetadata, StatefulSetAutoDeletePVC, PodProbeMarkerGate\u3002\u4e0a\u8ff0\u80fd\u529b\u5927\u90e8\u5206\u662f\u9700\u8981\u7279\u522b\u914d\u7f6e\u624d\u4f1a\u751f\u6548\u7684\uff0c\u6240\u4ee5\u9ed8\u8ba4\u6253\u5f00\u4e00\u822c\u4e0d\u4f1a\u5bf9\u5b58\u91cf\u96c6\u7fa4\u9020\u6210\u5f71\u54cd\uff0c\u5982\u679c\u6709\u4e00\u4e9b\u7279\u6027\u4e0d\u60f3\u4f7f\u7528\uff0c\u53ef\u4ee5\u5728\u5347\u7ea7\u65f6\u5173\u95ed\u3002"),(0,l.kt)("li",{parentName:"ul"},"Kruise-Manager leader \u9009\u4e3e\u65b9\u5f0f\u4ece configmaps \u8fc1\u79fb\u4e3a configmapsleases\uff0c\u4e3a\u540e\u9762\u8fc1\u79fb\u5230 leases \u65b9\u5f0f\u505a\u51c6\u5907\uff0c\u53e6\u5916\uff0c\u8fd9\u662f\u5b98\u65b9\u63d0\u4f9b\u7684\u5e73\u6ed1\u5347\u7ea7\u7684\u65b9\u5f0f\uff0c\u4e0d\u4f1a\u5bf9\u5b58\u91cf\u7684\u96c6\u7fa4\u9020\u6210\u5f71\u54cd\u3002")),(0,l.kt)("h2",{id:"2-sidecar\u5bb9\u5668\u7ba1\u7406\u80fd\u529bjob-sidecar-terminator"},"2. Sidecar\u5bb9\u5668\u7ba1\u7406\u80fd\u529b\uff1aJob Sidecar Terminator"),(0,l.kt)("p",null,"\u5728 Kubernetes \u4e2d\u5bf9\u4e8e Job \u7c7b\u578b Workload\uff0c\u4eba\u4eec\u901a\u5e38\u5e0c\u671b\u5f53\u4e3b\u5bb9\u5668\u5b8c\u6210\u4efb\u52a1\u5e76\u9000\u51fa\u540e\uff0cPod \u8fdb\u5165\u5df2\u5b8c\u6210\u72b6\u6001\u3002\u7136\u800c\uff0c\u5f53\u8fd9\u4e9b Pod \u62e5\u6709 Long-Running Sidecar \u5bb9\u5668\u65f6\uff0c\u7531\u4e8e Sidecar \u5bb9\u5668\u5728\u4e3b\u5bb9\u5668\u9000\u51fa\u540e\u65e0\u6cd5\u81ea\u884c\u9000\u51fa\uff0c\u5bfc\u81f4 Pod \u4e00\u76f4\u65e0\u6cd5\u8fdb\u5165\u5df2\u5b8c\u6210\u72b6\u6001\u3002\u9762\u5bf9\u8fd9\u4e2a\u95ee\u9898\uff0c\u793e\u533a\u7684\u5e38\u89c1\u89e3\u51b3\u65b9\u6848\u4e00\u822c\u90fd\u9700\u8981\u5bf9 Main \u548c Sidecar \u8fdb\u884c\u6539\u9020\uff0c\u4e24\u8005\u901a\u8fc7 Volume \u5171\u4eab\u6765\u5b9e\u73b0 Main \u5bb9\u5668\u9000\u51fa\u4e4b\u540e\uff0cSidecar \u5bb9\u5668\u5b8c\u6210\u9000\u51fa\u7684\u6548\u679c\u3002"),(0,l.kt)("p",null,"\u793e\u533a\u7684\u89e3\u51b3\u65b9\u6848\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f46\u662f\u9700\u8981\u5bf9\u5bb9\u5668\u8fdb\u884c\u6539\u9020\uff0c\u5c24\u5176\u5bf9\u4e8e\u793e\u533a\u901a\u7528\u7684 Sidecar \u5bb9\u5668\uff0c\u6539\u9020\u548c\u7ef4\u62a4\u7684\u6210\u672c\u592a\u9ad8\u4e86\u3002"),(0,l.kt)("p",null,"\u4e3a\u6b64\uff0c\u6211\u4eec\u5728 Kruise \u4e2d\u52a0\u5165\u4e86\u4e00\u4e2a\u540d\u4e3a SidecarTerminator \u7684\u63a7\u5236\u5668\uff0c\u4e13\u95e8\u7528\u4e8e\u5728\u6b64\u7c7b\u573a\u666f\u4e0b\uff0c\u76d1\u542c\u4e3b\u5bb9\u5668\u7684\u5b8c\u6210\u72b6\u6001\uff0c\u5e76\u9009\u62e9\u5408\u9002\u7684\u65f6\u673a\u7ec8\u6b62\u6389 Pod \u4e2d\u7684 sidecar \u5bb9\u5668\uff0c\u5e76\u4e14\u65e0\u9700\u5bf9 Main \u548c Sidecar \u5bb9\u5668\u8fdb\u884c\u4fb5\u5165\u5f0f\u6539\u9020\u3002"),(0,l.kt)("h3",{id:"\u8fd0\u884c\u5728\u666e\u901a\u8282\u70b9\u7684-pod"},"\u8fd0\u884c\u5728\u666e\u901a\u8282\u70b9\u7684 Pod"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u5141\u8bb8\u4e8e\u666e\u901a\u8282\u70b9\u7684 Pod\uff08\u5e38\u89c4Kubelet\uff09\uff0c\u4f7f\u7528\u8be5\u7279\u6027\u975e\u5e38\u7b80\u5355\uff0c\u7528\u6237\u53ea\u9700\u8981\u5728\u8981\u5728\u76ee\u6807 sidecar \u5bb9\u5668\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u7279\u6b8a\u7684 env \u5bf9\u5176\u8fdb\u884c\u6807\u8bc6\uff0c\u63a7\u5236\u5668\u4f1a\u5728\u6070\u5f53\u7684\u65f6\u673a\u5229\u7528 Kruise Daemon \u63d0\u4f9b\u7684 CRR \u7684\u80fd\u529b\uff0c\u5c06\u8fd9\u4e9b sidecar \u5bb9\u5668\u7ec8\u6b62\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Job\nspec:\n  template:\n    spec:\n      containers:\n      - name: sidecar\n        env:\n        - name: KRUISE_TERMINATE_SIDECAR_WHEN_JOB_EXIT\n          value: "true"\n      - name: main\n      ...\n')),(0,l.kt)("h3",{id:"\u8fd0\u884c\u5728\u865a\u62df\u8282\u70b9\u7684-pod"},"\u8fd0\u884c\u5728\u865a\u62df\u8282\u70b9\u7684 Pod"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e9b\u63d0\u4f9b Serverless \u5bb9\u5668\u7684\u5e73\u53f0\uff0c\u4f8b\u5982 ECI \u6216\u8005 Fargate, \u5176 Pods \u53ea\u80fd\u8fd0\u884c\u4e8e Virtual-Kubelet \u4e4b\u7c7b\u7684\u865a\u62df\u8282\u70b9\u3002 \u7136\u800c\uff0cKruise Daemon \u65e0\u6cd5\u90e8\u7f72\u548c\u5de5\u4f5c\u5728\u8fd9\u4e9b\u865a\u62df\u8282\u70b9\u4e4b\u4e0a\uff0c\u5bfc\u81f4\u65e0\u6cd5\u4f7f\u7528 CRR \u80fd\u529b\u5c06\u5bb9\u5668\u7ec8\u6b62\u3002 \u4f46\u5e78\u8fd0\u5730\u662f\uff0c\u6211\u4eec\u53ef\u4ee5\u501f\u52a9\u539f\u751f Kubernetes \u63d0\u4f9b\u7684 Pod \u539f\u5730\u5347\u7ea7\u673a\u5236\u6765\u8fbe\u5230\u540c\u6837\u7684\u76ee\u7684\uff1a\u53ea\u9700\u8981\u6784\u9020\u4e00\u4e2a\u7279\u6b8a\u955c\u50cf\uff0c\u8fd9\u4e2a\u955c\u50cf\u7684\u552f\u4e00\u4f5c\u7528\u5c31\u662f\u5f53\u88ab\u62c9\u8d77\u540e\uff0c\u4f1a\u5feb\u901f\u5730\u4e3b\u52a8\u9000\u51fa\uff0c\u8fd9\u6837\u4e00\u6765\uff0c\u53ea\u9700\u8981\u5728\u9000\u51fa sidecar \u65f6\uff0c\u5c06\u539f\u672c\u7684 sidecar \u955c\u50cf\u66ff\u6362\u4e3a\u5feb\u901f\u9000\u51fa\u955c\u50cf\uff0c\u5373\u53ef\u8fbe\u5230\u9000\u51fa sidecar \u7684\u76ee\u7684\u3002"),(0,l.kt)("h4",{id:"\u6b65\u9aa4\u4e00-\u51c6\u5907\u4e00\u4e2a\u5feb\u901f\u9000\u51fa\u955c\u50cf"},"\u6b65\u9aa4\u4e00: \u51c6\u5907\u4e00\u4e2a\u5feb\u901f\u9000\u51fa\u955c\u50cf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8be5\u955c\u50cf\u53ea\u9700\u8981\u5177\u5907\u975e\u5e38\u7b80\u5355\u7684\u903b\u8f91\uff1a\u5f53\u5176\u88ab\u62c9\u8d77\u540e\uff0c\u76f4\u63a5\u9000\u51fa\uff0c\u4e14\u9000\u51fa\u7801\u4e3a 0\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8be5\u955c\u50cf\u9700\u8981\u517c\u5bb9\u539f sidecar \u955c\u50cf\u7684 commands \u548c args\uff0c\u4ee5\u9632\u5bb9\u5668\u88ab\u62c9\u8d77\u65f6\u62a5\u9519\u3002")),(0,l.kt)("h4",{id:"\u6b65\u9aa4\u4e8c-\u914d\u7f6e\u4f60\u7684-sidecar-\u5bb9\u5668"},"\u6b65\u9aa4\u4e8c: \u914d\u7f6e\u4f60\u7684 sidecar \u5bb9\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Job\nspec:\n  template:\n    spec:\n      containers:\n      - name: sidecar\n        env:\n        - name: KRUISE_TERMINATE_SIDECAR_WHEN_JOB_EXIT_WITH_IMAGE\n          value: "example/quick-exit:v1.0.0"\n      - name: main\n      ...\n')),(0,l.kt)("p",null,'\u4f7f\u7528\u4f60\u81ea\u5df1\u51c6\u5907\u7684\u5feb\u901f\u9000\u51fa\u955c\u50cf\u6765\u66ff\u6362\u4e0a\u8ff0 "example/quick-exit:v1.0.0".'),(0,l.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"sidecar \u5bb9\u5668\u5fc5\u987b\u80fd\u591f\u54cd\u5e94 SIGTERM \u4fe1\u53f7\uff0c\u5e76\u4e14\u5f53\u6536\u5230\u6b64\u4fe1\u53f7\u65f6\uff0centrypoint \u8fdb\u7a0b\u9700\u8981\u9000\u51fa(\u5373 sidecar \u5bb9\u5668\u9700\u8981\u9000\u51fa)\uff0c\u5e76\u4e14\u9000\u51fa\u7801\u5e94\u5f53\u4e3a 0\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8be5\u7279\u6027\u9002\u7528\u4e8e\u4efb\u610f Job \u7c7b\u578b Workload \u6240\u7ba1\u7406\u7684 Pod\uff0c\u53ea\u8981\u4ed6\u4eec\u7684 RestartPolicy \u4e3a Never/OnFailure \u5373\u53ef\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5177\u6709\u73af\u5883\u53d8\u91cf KRUISE_TERMINATE_SIDECAR_WHEN_JOB_EXIT \u7684\u5bb9\u5668\u5c06\u88ab\u89c6\u4e3a sidecar \u5bb9\u5668\uff0c\u5176\u4ed6\u5bb9\u5668\u5c06\u88ab\u89c6\u4e3a\u4e3b\u5bb9\u5668\uff0c\u5f53\u6240\u6709\u4e3b\u5bb9\u5668\u5b8c\u6210\u540e\uff0csidecar \u5bb9\u5668\u624d\u4f1a\u88ab\u7ec8\u6b62\uff1a"),(0,l.kt)("li",{parentName:"ul"},'\u5728 Never \u91cd\u542f\u7b56\u7565\u4e0b\uff0c\u4e3b\u5bb9\u5668\u4e00\u65e6\u9000\u51fa\uff0c\u5c06\u88ab\u89c6\u4e3a"\u5df2\u5b8c\u6210"\u3002'),(0,l.kt)("li",{parentName:"ul"},'\u5728 OnFailure \u91cd\u542f\u7b56\u7565\u4e0b\uff0c\u4e3b\u5bb9\u5668\u9000\u51fa\u4ee3\u7801\u5fc5\u987b\u4e3a0\uff0c\u624d\u4f1a\u88ab\u89c6\u4e3a"\u5df2\u5b8c\u6210"\u3002')),(0,l.kt)("h2",{id:"3-\u589e\u5f3a\u7248\u672c\u7684\u5de5\u4f5c\u8d1f\u8f7d"},"3. \u589e\u5f3a\u7248\u672c\u7684\u5de5\u4f5c\u8d1f\u8f7d"),(0,l.kt)("h3",{id:"cloneset-\u4f18\u5316\u6027\u80fd-\u65b0\u589e-featuregate-cloneseteventhandleroptimization"},"CloneSet \u4f18\u5316\u6027\u80fd \uff1a\u65b0\u589e FeatureGate CloneSetEventHandlerOptimization"),(0,l.kt)("p",null,"\u5f53\u524d\uff0c\u65e0\u8bba\u662f Pod \u7684\u72b6\u6001\u53d8\u5316\u8fd8\u662f Metadata \u53d8\u5316\uff0cPod Update \u4e8b\u4ef6\u90fd\u4f1a\u89e6\u53d1 CloneSet reconcile \u903b\u8f91\u3002CloneSet Reconcile \u9ed8\u8ba4\u914d\u7f6e\u4e86\u4e09\u4e2a worker\uff0c\u5bf9\u4e8e\u96c6\u7fa4\u89c4\u6a21\u8f83\u5c0f\u7684\u573a\u666f\uff0c\u8fd9\u79cd\u60c5\u51b5\u5e76\u4e0d\u4f1a\u9020\u6210\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u4f46\u5bf9\u4e8e\u96c6\u7fa4\u89c4\u6a21\u8f83\u5927\u6216 Pod Update \u4e8b\u4ef6\u8f83\u591a\u7684\u60c5\u51b5\uff0c\u8fd9\u4e9b\u65e0\u6548\u7684 reconcile \u5c06\u4f1a\u963b\u585e\u771f\u6b63\u7684 CloneSet reconcile\uff0c\u8fdb\u800c\u5bfc\u81f4 CloneSet \u7684\u6eda\u52a8\u5347\u7ea7\u7b49\u53d8\u66f4\u5ef6\u8fdf\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u53ef\u4ee5\u6253\u5f00 feature-gate CloneSetEventHandlerOptimization \u6765\u51cf\u5c11\u4e00\u4e9b\u4e0d\u5fc5\u8981\u7684 reconcile \u5165\u961f\u3002"),(0,l.kt)("h3",{id:"cloneset-\u65b0\u589e-disablepvcreuse-\u5b57\u6bb5"},"CloneSet \u65b0\u589e disablePVCReuse \u5b57\u6bb5"),(0,l.kt)("p",null,"\u5982\u679c\u4e00\u4e2a Pod \u88ab\u5916\u90e8\u76f4\u63a5\u8c03\u7528\u5220\u9664\u6216\u9a71\u9010\u65f6\uff0c\u8fd9\u4e2a Pod \u5173\u8054\u7684 PVCs \u8fd8\u90fd\u5b58\u5728\uff1b\u5e76\u4e14 CloneSet controller \u53d1\u73b0\u6570\u91cf\u4e0d\u8db3\u91cd\u65b0\u6269\u5bb9\u65f6\uff0c\u65b0\u6269\u51fa\u6765\u7684 Pod \u4f1a\u590d\u7528\u539f Pod \u7684 instance-id \u5e76\u5173\u8054\u539f\u6765\u7684 PVCs\u3002"),(0,l.kt)("p",null,"\u7136\u800c\uff0c\u5982\u679c Pod \u6240\u5728\u7684 Node \u51fa\u73b0\u5f02\u5e38\uff0c\u590d\u7528\u53ef\u80fd\u4f1a\u5bfc\u81f4\u65b0 Pod \u542f\u52a8\u5931\u8d25\uff0c\u8be6\u60c5\u53c2\u8003 issue 1099\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u60a8\u53ef\u4ee5\u8bbe\u7f6e\u5b57\u6bb5 disablePVCReuse=true\uff0c\u5f53 Pod \u88ab\u9a71\u9010\u6216\u8005\u5220\u9664\u540e\uff0c\u4e0e Pod \u76f8\u5173\u7684 PVCs \u5c06\u88ab\u81ea\u52a8\u5220\u9664\uff0c\u4e0d\u518d\u88ab\u590d\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nspec:\n  ...\n  replicas: 4\n  scaleStrategy:\n    disablePVCReuse: true\n")),(0,l.kt)("h3",{id:"cloneset-\u589e\u52a0-prenormal-\u751f\u547d\u5468\u671f\u94a9\u5b50"},"CloneSet \u589e\u52a0 PreNormal \u751f\u547d\u5468\u671f\u94a9\u5b50"),(0,l.kt)("p",null,"CloneSet \u5df2\u7ecf\u652f\u6301\u4e86PreparingUpdate\u3001PreparingDelete \u4e24\u79cd\u751f\u547d\u5468\u671f\u94a9\u5b50\uff0c\u7528\u4e8e\u5e94\u7528\u7684\u4f18\u96c5\u4e0b\u7ebf\uff0c\u8be6\u60c5\u53c2\u8003\u793e\u533a\u6587\u6863\u3002\u4e3a\u4e86\u652f\u6301\u4f18\u96c5\u4e0a\u7ebf\u7684\u573a\u666f\uff0c\u672c\u6b21\u65b0\u589e\u52a0\u4e86 PreNormal \u72b6\u6001\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nspec:\n  # define with finalizer\n  lifecycle:\n    preNormal:\n      finalizersHandler:\n      - example.io/unready-blocker\n\n  # or define with label\n  lifecycle:\n    preNormal:\n      labelsHandler:\n        example.io/block-unready: "true"\n')),(0,l.kt)("p",null,"\u5f53 CloneSet \u521b\u5efa\u4e00\u4e2a Pod\uff08\u5305\u62ec\u6b63\u5e38\u6269\u5bb9\u548c\u91cd\u5efa\u5347\u7ea7\uff09\u65f6\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c Pod \u6ee1\u8db3\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"PreNormal")," hook \u7684\u5b9a\u4e49\uff0c\u624d\u4f1a\u88ab\u8ba4\u4e3a\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"Available"),"\uff0c\u5e76\u4e14\u624d\u4f1a\u8fdb\u5165 ",(0,l.kt)("inlineCode",{parentName:"li"},"Normal")," \u72b6\u6001\n\u8fd9\u5bf9\u4e8e\u4e00\u4e9b Pod \u521b\u5efa\u65f6\u7684\u540e\u7f6e\u68c0\u67e5\u5f88\u6709\u7528\uff0c\u6bd4\u5982\u4f60\u53ef\u4ee5\u68c0\u67e5 Pod \u662f\u5426\u5df2\u7ecf\u6302\u8f7d\u5230 SLB \u540e\u7aef\uff0c\u4ece\u800c\u907f\u514d\u6eda\u52a8\u5347\u7ea7\u65f6\uff0c\u65e7\u5b9e\u4f8b\u9500\u6bc1\u540e\uff0c\u65b0\u5b9e\u4f8b\u6302\u8f7d\u5931\u8d25\u5bfc\u81f4\u7684\u6d41\u91cf\u635f\u5931\u3002")),(0,l.kt)("h2",{id:"4-\u9ad8\u7ea7\u7684\u5e94\u7528\u8fd0\u7ef4\u80fd\u529b"},"4. \u9ad8\u7ea7\u7684\u5e94\u7528\u8fd0\u7ef4\u80fd\u529b"),(0,l.kt)("h3",{id:"\u5bb9\u5668\u91cd\u542f\u65b0\u589e-forcerecreate-\u5b57\u6bb5"},"\u5bb9\u5668\u91cd\u542f\u65b0\u589e forceRecreate \u5b57\u6bb5"),(0,l.kt)("p",null,"\u5f53\u521b\u5efa ",(0,l.kt)("a",{parentName:"p",href:"https://openkruise.io/docs/user-manuals/containerrecreaterequest"},"CRR")," \u8d44\u6e90\u65f6\uff0c\u5982\u679c\u5bb9\u5668\u6b63\u5728\u542f\u52a8\u8fc7\u7a0b\u4e2d\uff0cCRR \u5c06\u4e0d\u4f1a\u518d\u91cd\u542f\u5bb9\u5668\u3002\u5982\u679c\u60a8\u60f3\u8981\u5f3a\u5236\u91cd\u542f\u5bb9\u5668\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u5b57\u6bb5\u5f00\u542f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ContainerRecreateRequest\nspec:\n  ...\n  strategy:\n    forceRecreate: true\n")),(0,l.kt)("h3",{id:"\u955c\u50cf\u9884\u70ed\u652f\u6301-attach-metadata-into-cri-interface"},"\u955c\u50cf\u9884\u70ed\u652f\u6301 Attach metadata into cri interface"),(0,l.kt)("p",null,"\u5f53 Kubelet \u521b\u5efa Pod \u65f6\uff0cKubelet \u5c06\u4f1a attach metadata \u5230 container runtime cri \u63a5\u53e3\u3002\u955c\u50cf\u4ed3\u5e93\u53ef\u4ee5\u6839\u636e\u8fd9\u4e9b metadata \u4fe1\u606f\u6765\u786e\u5b9a\u62c9\u955c\u50cf\u7684\u6765\u6e90\u4e1a\u52a1\uff0c\u5982\u679c\u53d1\u751f\u4e86\u4ed3\u5e93\u8fc7\u8f7d\u3001\u538b\u529b\u8fc7\u5927\u7684\u60c5\u51b5\uff0c\u53ef\u4ee5\u5bf9\u5177\u4f53\u7684\u4e1a\u52a1\u8fdb\u884c\u964d\u7ea7\u5904\u7406\u3002OpenKruise \u955c\u50cf\u9884\u70ed\u540c\u6837\u652f\u6301\u7c7b\u4f3c\u7684\u80fd\u529b\uff0c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: ImagePullJob\nspec:\n  ...\n  image: nginx:1.9.1\n  sandboxConfig:\n    annotations:\n      io.kubernetes.image.metrics.tags: "cluster=cn-shanghai"\n    labels:\n      io.kubernetes.image.app: "foo"\n')),(0,l.kt)("h2",{id:"\u793e\u533a\u53c2\u4e0e"},"\u793e\u533a\u53c2\u4e0e"),(0,l.kt)("p",null,"\u975e\u5e38\u6b22\u8fce\u4f60\u901a\u8fc7 Github/Slack/\u9489\u9489/\u5fae\u4fe1 \u7b49\u65b9\u5f0f\u52a0\u5165\u6211\u4eec\u6765\u53c2\u4e0e OpenKruise \u5f00\u6e90\u793e\u533a\u3002\n\u4f60\u662f\u5426\u5df2\u7ecf\u6709\u4e00\u4e9b\u5e0c\u671b\u4e0e\u6211\u4eec\u793e\u533a\u4ea4\u6d41\u7684\u5185\u5bb9\u5462\uff1f\n\u53ef\u4ee5\u5728\u6211\u4eec\u7684",(0,l.kt)("a",{parentName:"p",href:"https://shimo.im/docs/gXqmeQOYBehZ4vqo"},"\u793e\u533a\u53cc\u5468\u4f1a"),"\u4e0a\u5206\u4eab\u4f60\u7684\u58f0\u97f3\uff0c\u6216\u901a\u8fc7\u4ee5\u4e0b\u6e20\u9053\u53c2\u4e0e\u8ba8\u8bba\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u52a0\u5165\u793e\u533a ",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.slack.com/channels/openkruise"},"Slack channel")," (English)"),(0,l.kt)("li",{parentName:"ul"},"\u52a0\u5165\u793e\u533a\u9489\u9489\u7fa4\uff1a\u641c\u7d22\u7fa4\u53f7 ",(0,l.kt)("inlineCode",{parentName:"li"},"23330762")," (Chinese)"),(0,l.kt)("li",{parentName:"ul"},"\u52a0\u5165\u793e\u533a\u5fae\u4fe1\u7fa4\uff08\u65b0\uff09\uff1a\u6dfb\u52a0\u7528\u6237 ",(0,l.kt)("inlineCode",{parentName:"li"},"openkruise")," \u5e76\u8ba9\u673a\u5668\u4eba\u62c9\u4f60\u5165\u7fa4 (Chinese)")))}m.isMDXComponent=!0}}]);