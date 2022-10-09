"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[7473],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3201:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={slug:"openkruise-1.3",title:"OpenKruise v1.3\uff1a\u65b0\u589e\u81ea\u5b9a\u4e49 Pod Probe \u63a2\u9488\u80fd\u529b\u4e0e\u5927\u89c4\u6a21\u96c6\u7fa4\u6027\u80fd\u663e\u8457\u63d0\u5347",authors:["zmberg"],tags:["release"]},p=void 0,s={permalink:"/zh/blog/openkruise-1.3",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/blog/2022-10-07-release-1.3.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022-10-07-release-1.3.md",title:"OpenKruise v1.3\uff1a\u65b0\u589e\u81ea\u5b9a\u4e49 Pod Probe \u63a2\u9488\u80fd\u529b\u4e0e\u5927\u89c4\u6a21\u96c6\u7fa4\u6027\u80fd\u663e\u8457\u63d0\u5347",description:"\u4e91\u539f\u751f\u5e94\u7528\u81ea\u52a8\u5316\u7ba1\u7406\u5957\u4ef6\u3001CNCF Sandbox \u9879\u76ee -- OpenKruise\uff0c\u8fd1\u671f\u53d1\u5e03\u4e86 v1.3 \u7248\u672c\u3002",date:"2022-10-07T00:00:00.000Z",formattedDate:"2022\u5e7410\u67087\u65e5",tags:[{label:"release",permalink:"/zh/blog/tags/release"}],readingTime:11.635,truncated:!1,authors:[{name:"Mingshan Zhao",title:"Member of OpenKruise",url:"https://github.com/zmberg",imageURL:"https://github.com/zmberg.png",key:"zmberg"}],frontMatter:{slug:"openkruise-1.3",title:"OpenKruise v1.3\uff1a\u65b0\u589e\u81ea\u5b9a\u4e49 Pod Probe \u63a2\u9488\u80fd\u529b\u4e0e\u5927\u89c4\u6a21\u96c6\u7fa4\u6027\u80fd\u663e\u8457\u63d0\u5347",authors:["zmberg"],tags:["release"]},nextItem:{title:"OpenKruise v1.2\uff1a\u65b0\u589e PersistentPodState \u5b9e\u73b0\u6709\u72b6\u6001 Pod \u62d3\u6251\u56fa\u5b9a\u4e0e IP \u590d\u7528",permalink:"/zh/blog/openkruise-1.2"}},d={authorsImageUrls:[void 0]},u=[{value:"\u7248\u672c\u89e3\u6790",id:"\u7248\u672c\u89e3\u6790",level:2},{value:"1. \u65b0\u589e CRD \u548c Controller\uff1aPodProbeMarker",id:"1-\u65b0\u589e-crd-\u548c-controllerpodprobemarker",level:3},{value:"2. \u6027\u80fd\u4f18\u5316\uff1a\u5927\u89c4\u6a21\u96c6\u7fa4\u6027\u80fd\u663e\u8457\u63d0\u5347",id:"2-\u6027\u80fd\u4f18\u5316\u5927\u89c4\u6a21\u96c6\u7fa4\u6027\u80fd\u663e\u8457\u63d0\u5347",level:3},{value:"3. SidecarSet \u652f\u6301\u6ce8\u5165\u7279\u5b9a\u7684\u5386\u53f2\u7248\u672c",id:"3-sidecarset-\u652f\u6301\u6ce8\u5165\u7279\u5b9a\u7684\u5386\u53f2\u7248\u672c",level:3},{value:"\u901a\u8fc7 ControllerRevision \u540d\u79f0\u6307\u5b9a\u6ce8\u5165\u7684 Sidecar \u7248\u672c",id:"\u901a\u8fc7-controllerrevision-\u540d\u79f0\u6307\u5b9a\u6ce8\u5165\u7684-sidecar-\u7248\u672c",level:4},{value:"\u901a\u8fc7\u81ea\u5b9a\u4e49\u7248\u672c\u6807\u8bc6\u6307\u5b9a\u6ce8\u5165\u7684 Sidecar \u7248\u672c",id:"\u901a\u8fc7\u81ea\u5b9a\u4e49\u7248\u672c\u6807\u8bc6\u6307\u5b9a\u6ce8\u5165\u7684-sidecar-\u7248\u672c",level:4},{value:"4. SidecarSet \u652f\u6301\u6ce8\u5165 Pod Annotations",id:"4-sidecarset-\u652f\u6301\u6ce8\u5165-pod-annotations",level:3},{value:"5. Advanced DaemonSet \u652f\u6301\u955c\u50cf\u9884\u70ed",id:"5-advanced-daemonset-\u652f\u6301\u955c\u50cf\u9884\u70ed",level:3},{value:"6. CloneSet \u6269\u7f29\u5bb9\u4e0e PreparingDelete",id:"6-cloneset-\u6269\u7f29\u5bb9\u4e0e-preparingdelete",level:3},{value:"7. Advanced CronJob Time zones",id:"7-advanced-cronjob-time-zones",level:3},{value:"8. \u5176\u4ed6\u6539\u52a8",id:"8-\u5176\u4ed6\u6539\u52a8",level:3},{value:"\u793e\u533a\u53c2\u4e0e",id:"\u793e\u533a\u53c2\u4e0e",level:2}],c={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4e91\u539f\u751f\u5e94\u7528\u81ea\u52a8\u5316\u7ba1\u7406\u5957\u4ef6\u3001CNCF Sandbox \u9879\u76ee -- OpenKruise\uff0c\u8fd1\u671f\u53d1\u5e03\u4e86 v1.3 \u7248\u672c\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://openkruise.io"},"OpenKruise")," \u662f\u9488\u5bf9 Kubernetes \u7684\u589e\u5f3a\u80fd\u529b\u5957\u4ef6\uff0c\u805a\u7126\u4e8e\u4e91\u539f\u751f\u5e94\u7528\u7684\u90e8\u7f72\u3001\u5347\u7ea7\u3001\u8fd0\u7ef4\u3001\u7a33\u5b9a\u6027\u9632\u62a4\u7b49\u9886\u57df\u3002\n\u6240\u6709\u7684\u529f\u80fd\u90fd\u901a\u8fc7 CRD \u7b49\u6807\u51c6\u65b9\u5f0f\u6269\u5c55\uff0c\u53ef\u4ee5\u9002\u7528\u4e8e 1.16 \u4ee5\u4e0a\u7248\u672c\u7684\u4efb\u610f Kubernetes \u96c6\u7fa4\u3002\u5355\u6761 helm \u547d\u4ee4\u5373\u53ef\u5b8c\u6210 Kruise \u7684\u4e00\u952e\u90e8\u7f72\uff0c\u65e0\u9700\u66f4\u591a\u914d\u7f6e\u3002"),(0,i.kt)("h2",{id:"\u7248\u672c\u89e3\u6790"},"\u7248\u672c\u89e3\u6790"),(0,i.kt)("p",null,"\u5728\u7248\u672cv1.3\u4e2d\uff0cOpenKruise\u63d0\u4f9b\u4e86\u65b0\u7684CRD\u8d44\u6e90 ",(0,i.kt)("inlineCode",{parentName:"p"},"PodProbeMarker"),"\uff0c\u6539\u5584\u4e86\u5927\u89c4\u6a21\u96c6\u7fa4\u7684\u4e00\u4e9b\u6027\u80fd\u95ee\u9898\uff0cAdvanced DaemonSet\u652f\u6301\u955c\u50cf\u9884\u70ed\uff0c\n\u4ee5\u53ca CloneSet\u3001WorkloadSpread\u3001Advanced CronJob\u3001SidecarSet\u4e00\u4e9b\u65b0\u7684\u7279\u6027\u3002"),(0,i.kt)("h3",{id:"1-\u65b0\u589e-crd-\u548c-controllerpodprobemarker"},"1. \u65b0\u589e CRD \u548c Controller\uff1aPodProbeMarker"),(0,i.kt)("p",null,"Kubernetes\u63d0\u4f9b\u4e86\u4e09\u79cd\u9ed8\u8ba4\u7684Pod\u751f\u547d\u5468\u671f\u7ba1\u7406\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Readiness Probe")," \u7528\u6765\u5224\u65ad\u4e1a\u52a1\u5bb9\u5668\u662f\u5426\u5df2\u7ecf\u51c6\u5907\u597d\u54cd\u5e94\u7528\u6237\u8bf7\u6c42\uff0c\u5982\u679c\u68c0\u67e5\u5931\u8d25\uff0c\u4f1a\u5c06\u8be5Pod\u4eceService Endpoints\u4e2d\u5254\u9664\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Liveness Probe")," \u7528\u6765\u5224\u65ad\u5bb9\u5668\u7684\u5065\u5eb7\u72b6\u6001\uff0c\u5982\u679c\u68c0\u67e5\u5931\u8d25\uff0ckubelet\u5c06\u4f1a\u91cd\u542f\u8be5\u5bb9\u5668\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Startup Probe")," \u7528\u6765\u5224\u65ad\u5bb9\u5668\u662f\u5426\u542f\u52a8\u5b8c\u6210\uff0c\u5982\u679c\u5b9a\u4e49\u4e86\u8be5Probe\uff0c\u90a3\u4e48Readiness Probe\u4e0eLiveness Probe\u5c06\u4f1a\u5728\u5b83\u6210\u529f\u4e4b\u540e\u518d\u6267\u884c\u3002")),(0,i.kt)("p",null,"\u6240\u4ee5Kubernetes\u4e2d\u63d0\u4f9b\u7684Probe\u80fd\u529b\u90fd\u5df2\u7ecf\u9650\u5b9a\u4e86\u7279\u5b9a\u7684\u8bed\u4e49\u4ee5\u53ca\u76f8\u5173\u7684\u884c\u4e3a\u3002",(0,i.kt)("strong",{parentName:"p"},"\u9664\u6b64\u4e4b\u5916\uff0c\u5176\u5b9e\u8fd8\u662f\u5b58\u5728\u81ea\u5b9a\u4e49Probe\u8bed\u4e49\u4ee5\u53ca\u76f8\u5173\u884c\u4e3a\u7684\u9700\u6c42"),"\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GameServer\u5b9a\u4e49 Idle Probe \u7528\u6765\u5224\u65ad\u8be5Pod\u5f53\u524d\u662f\u5426\u5b58\u5728\u6e38\u620f\u5bf9\u5c40"),"\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u4ece\u6210\u672c\u4f18\u5316\u7684\u89d2\u5ea6\uff0c\u53ef\u4ee5\u5c06\u8be5Pod\u7f29\u5bb9\u6389\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"K8S Operator\u5b9a\u4e49 main-secondary Probe \u6765\u5224\u65ad\u5f53\u524dPod\u7684\u89d2\u8272\uff08main or secondary\uff09"),"\uff0c\u5347\u7ea7\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u4f18\u5148\u5347\u7ea7 secondary\uff0c\u8fdb\u800c\u8fbe\u5230\u5347\u7ea7\u8fc7\u7a0b\u53ea\u6709\u4e00\u6b21\u9009\u4e3b\u7684\u884c\u4e3a\uff0c\u964d\u4f4e\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u670d\u52a1\u6296\u52a8\u65f6\u95f4\u3002")),(0,i.kt)("p",null,"OpenKruise\u63d0\u4f9b\u4e86\u81ea\u5b9a\u4e49Probe\u7684\u80fd\u529b\uff0c\u5e76\u5c06\u7ed3\u679c\u8fd4\u56de\u5230Pod Status\u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u8be5\u7ed3\u679c\u51b3\u5b9a\u540e\u7eed\u7684\u884c\u4e3a\u3002"),(0,i.kt)("p",null,"PodProbeMarker\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: PodProbeMarker\nmetadata:\n  name: game-server-probe\n  namespace: ns\nspec:\n  selector:\n    matchLabels:\n      app: game-server\n  probes:\n  - name: Idle\n    containerName: game-server\n    probe:\n      exec: /home/game/idle.sh\n      initialDelaySeconds: 10\n      timeoutSeconds: 3\n      periodSeconds: 10\n      successThreshold: 1\n      failureThreshold: 3\n    markerPolicy:\n    - state: Succeeded\n      labels:\n        gameserver-idle: 'true'\n      annotations:\n        controller.kubernetes.io/pod-deletion-cost: '-10'\n    - state: Failed\n      labels:\n        gameserver-idle: 'false'\n      annotations:\n        controller.kubernetes.io/pod-deletion-cost: '10'\n        podConditionType: game.io/idle\n")),(0,i.kt)("p",null,"PodProbeMarker\u7ed3\u679c\u53ef\u4ee5\u901a\u8fc7Pod\u5bf9\u8c61\u67e5\u770b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    app: game-server\n    gameserver-idle: 'true'\n  annotations:\n    controller.kubernetes.io/pod-deletion-cost: '-10'\n  name: game-server-58cb9f5688-7sbd8\n  namespace: ns\nspec:\n  ...\nstatus:\n  conditions:\n    # podConditionType\n  - type: game.io/idle\n    # Probe State 'Succeeded' indicates 'True', and 'Failed' indicates 'False'\n    status: \"True\"\n    lastProbeTime: \"2022-09-09T07:13:04Z\"\n    lastTransitionTime: \"2022-09-09T07:13:04Z\"\n    # If the probe fails to execute, the message is stderr\n    message: \"\"\n")),(0,i.kt)("h3",{id:"2-\u6027\u80fd\u4f18\u5316\u5927\u89c4\u6a21\u96c6\u7fa4\u6027\u80fd\u663e\u8457\u63d0\u5347"},"2. \u6027\u80fd\u4f18\u5316\uff1a\u5927\u89c4\u6a21\u96c6\u7fa4\u6027\u80fd\u663e\u8457\u63d0\u5347"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/openkruise/kruise/pull/1026"},"#1026")," \u5f15\u5165\u4e86\u5ef6\u8fdf\u5165\u961f\u673a\u5236\uff0c\u5927\u5e45\u4f18\u5316\u4e86\u5728\u5927\u89c4\u6a21\u5e94\u7528\u96c6\u7fa4\u4e0b kruise-manager \u62c9\u8d77\u65f6\u7684 CloneSet \u63a7\u5236\u5668\u5de5\u4f5c\u961f\u5217\u5806\u79ef\u95ee\u9898\uff0c\u5728\u7406\u60f3\u60c5\u51b5\u4e0b\u521d\u59cb\u5316\u65f6\u95f4\u51cf\u5c11\u4e86 80% \u4ee5\u4e0a\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/openkruise/kruise/pull/1027"},"#1027")," \u4f18\u5316 PodUnavailableBudget \u63a7\u5236\u5668 Event Handler \u903b\u8f91\uff0c\u51cf\u5c11\u65e0\u5173 Pod \u5165\u961f\u6570\u91cf\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/openkruise/kruise/pull/1011"},"#1011")," \u901a\u8fc7\u7f13\u5b58\u673a\u5236\uff0c\u4f18\u5316\u4e86\u5927\u89c4\u6a21\u96c6\u7fa4\u4e0b Advanced DaemonSet \u91cd\u590d\u6a21\u62df Pod \u8c03\u5ea6\u8ba1\u7b97\u7684 CPU\u3001Memory \u6d88\u8017\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/openkruise/kruise/pull/1015"},"#1015"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/openkruise/kruise/pull/1068"},"#1068")," \u5927\u5e45\u964d\u4f4e\u4e86\u5927\u89c4\u6a21\u96c6\u7fa4\u4e0b\u7684\u8fd0\u884c\u65f6\u5185\u5b58\u6d88\u8017\u3002\u5f25\u8865\u4e86 v1.1 \u7248\u672c\u4e2d Disable DeepCopy \u7684\u4e00\u4e9b\u758f\u6f0f\u70b9\uff0c\u51cf\u5c11 expressions \u7c7b\u578b label selector \u7684\u8f6c\u6362\u6d88\u8017\u3002")),(0,i.kt)("h3",{id:"3-sidecarset-\u652f\u6301\u6ce8\u5165\u7279\u5b9a\u7684\u5386\u53f2\u7248\u672c"},"3. SidecarSet \u652f\u6301\u6ce8\u5165\u7279\u5b9a\u7684\u5386\u53f2\u7248\u672c"),(0,i.kt)("p",null,"SidecarSet \u901a\u8fc7 ControllerRevision \u8bb0\u5f55\u4e86\u5173\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"containers"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"volumes"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"initContainers"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"imagePullSecrets")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"patchPodMetadata")," \u7b49\u5b57\u6bb5\u7684\u5386\u53f2\u7248\u672c\uff0c\u5e76\u5141\u8bb8\u7528\u6237\u5728 Pod \u521b\u5efa\u65f6\u9009\u62e9\u7279\u5b9a\u7684\u5386\u53f2\u7248\u672c\u8fdb\u884c\u6ce8\u5165\u3002\n\u57fa\u4e8e\u8fd9\u4e00\u7279\u6027\uff0c\u7528\u6237\u53ef\u4ee5\u89c4\u907f\u5728 SidecarSet \u7070\u5ea6\u53d1\u5e03\u65f6\uff0c\u56e0Deployment \u7b49 Workload \u6269\u5bb9\u3001\u5347\u7ea7\u7b49\u64cd\u4f5c\u5e26\u6765\u7684 SidecarSet \u53d1\u5e03\u98ce\u9669\u3002\u5982\u679c\u4e0d\u9009\u62e9\u6ce8\u5165\u7248\u672c\uff0cSidecarSet \u5c06\u5bf9\u91cd\u5efa Pod \u9ed8\u8ba4\u5168\u90fd\u6ce8\u5165\u6700\u65b0\u7248\u672c Sidecar\u3002"),(0,i.kt)("p",null,"SidecarSet \u76f8\u5173 ControllerRevision \u8d44\u6e90\u88ab\u653e\u7f6e\u5728\u4e86\u4e0e Kruise-Manager \u76f8\u540c\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get controllerrvisions -n kruise-system -l kruise.io/sidecarset-name=your-sidecarset-name")," \u6765\u67e5\u770b\u3002\n\u6b64\u5916\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u901a\u8fc7 SidecarSet \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"status.latestRevision")," \u5b57\u6bb5\u770b\u5230\u5f53\u524d\u7248\u672c\u5bf9\u5e94\u7684 ControllerRevision \u540d\u79f0\uff0c\u4ee5\u65b9\u4fbf\u81ea\u884c\u8bb0\u5f55\u3002"),(0,i.kt)("h4",{id:"\u901a\u8fc7-controllerrevision-\u540d\u79f0\u6307\u5b9a\u6ce8\u5165\u7684-sidecar-\u7248\u672c"},"\u901a\u8fc7 ControllerRevision \u540d\u79f0\u6307\u5b9a\u6ce8\u5165\u7684 Sidecar \u7248\u672c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  ...\n  injectionStrategy:\n    revisionName: specific-controllerRevision-name\n")),(0,i.kt)("h4",{id:"\u901a\u8fc7\u81ea\u5b9a\u4e49\u7248\u672c\u6807\u8bc6\u6307\u5b9a\u6ce8\u5165\u7684-sidecar-\u7248\u672c"},"\u901a\u8fc7\u81ea\u5b9a\u4e49\u7248\u672c\u6807\u8bc6\u6307\u5b9a\u6ce8\u5165\u7684 Sidecar \u7248\u672c"),(0,i.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5728\u53d1\u7248\u65f6\uff0c\u540c\u65f6\u7ed9 SidecarSet \u6253\u4e0a ",(0,i.kt)("inlineCode",{parentName:"p"},"apps.kruise.io/sidecarset-custom-version=your-version-id")," \u6765\u6807\u8bb0\u6bcf\u4e00\u4e2a\u5386\u53f2\u7248\u672c\uff0cSidecarSet \u4f1a\u5c06\u8fd9\u4e2a label \u5411\u4e0b\u5e26\u5165\u5230\u5bf9\u5e94\u7684 ControllerRevision \u5bf9\u8c61\uff0c\u4ee5\u4fbf\u7528\u6237\u8fdb\u884c\u7b5b\u9009\uff0c\u5e76\u4e14\u5141\u8bb8\u7528\u6237\u5728\u9009\u62e9\u6ce8\u5165\u5386\u53f2\u7248\u672c\u65f6\uff0c\u4f7f\u7528\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"your-version-id")," \u6765\u8fdb\u884c\u63cf\u8ff0\u3002"),(0,i.kt)("p",null,"\u5047\u8bbe\u7528\u6237\u53ea\u60f3\u7070\u5ea6 ",(0,i.kt)("inlineCode",{parentName:"p"},"10%")," \u7684 Pods \u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"version-2"),"\uff0c\u5e76\u4e14\u5bf9\u4e8e\u65b0\u521b\u5efa\u7684 Pod \u5e0c\u671b\u90fd\u6ce8\u5165\u66f4\u52a0\u7a33\u5b9a\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"version-1")," \u7248\u672c\u6765\u63a7\u5236\u7070\u5ea6\u98ce\u9669\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\n  labels:\n    apps.kruise.io/sidecarset-custom-version: version-2\nspec:\n  ...\n  updateStrategy:\n    partition: 90%\n  injectionStrategy:\n    customVersion: version-1\n")),(0,i.kt)("h3",{id:"4-sidecarset-\u652f\u6301\u6ce8\u5165-pod-annotations"},"4. SidecarSet \u652f\u6301\u6ce8\u5165 Pod Annotations"),(0,i.kt)("p",null,"SidecarSet\u652f\u6301\u6ce8\u5165Pod Annotations\uff0c\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nspec:\n  containers:\n  ...\n  patchPodMetadata:\n  - annotations:\n    oom-score: \'{"log-agent": 1}\'\n    custom.example.com/sidecar-configuration: \'{"command": "/home/admin/bin/start.sh", "log-level": "3"}\'\n  patchPolicy: MergePatchJson\n  - annotations:\n    apps.kruise.io/container-launch-priority: Ordered\n    patchPolicy: Overwrite | Retain\n')),(0,i.kt)("p",null,"patchPolicy\u4e3a\u6ce8\u5165\u7684\u7b56\u7565\uff0c\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Retain\uff1a")," \u9ed8\u8ba4\u7b56\u7565\uff0c\u5982\u679cPod\u4e2d\u5b58\u5728 annotation","[key]","=value \uff0c\u5219\u4fdd\u7559Pod\u539f\u6709\u7684value\u3002\u53ea\u6709\u5f53 Pod\u4e2d\u4e0d\u5b58\u5728 annotation","[key]"," \u65f6\uff0c\u624d\u6ce8\u5165 annotations","[key]","=value\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Overwrite\uff1a")," \u4e0e Retain \u5bf9\u5e94\uff0c\u5f53 Pod \u4e2d\u5b58\u5728 annotation","[key]","=value\uff0c\u5c06\u88ab\u5f3a\u5236\u8986\u76d6\u4e3a value2\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"MergePatchJson\uff1a")," \u4e0e Overwrite \u5bf9\u5e94\uff0cannotations value\u4e3a json \u5b57\u7b26\u4e32\u3002\u5982\u679c Pod \u4e0d\u5b58\u5728\u8be5 annotations","[key]","\uff0c\u5219\u76f4\u63a5\u6ce8\u5165\u3002\u5982\u679c\u5b58\u5728\uff0c\u5219\u8fdb\u884c json value\u5408\u5e76\u3002\n\u4f8b\u5982\uff1aPod\u4e2d\u5b58\u5728 annotations","[oom-score]","='{\"main\": 2}'\uff0c\u6ce8\u5165\u540e\u5c06 value json\u5408\u5e76\u4e3a annotations","[oom-score]",'=\'{"log-agent": 1, "main": 2}\'\u3002')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," patchPolicy\u4e3aOverwrite\u548cMergePatchJson\u65f6\uff0cSidecarSet\u539f\u5730\u5347\u7ea7 Sidecar Container\u65f6\uff0c\u80fd\u591f\u540c\u6b65\u66f4\u65b0\u8be5 annotations\u3002\u4f46\u662f\uff0c\u5982\u679c\u53ea\u4fee\u6539annotations\u5219\u4e0d\u80fd\u751f\u6548\uff0c\u53ea\u80fd\u642d\u914dSidecar\u5bb9\u5668\u955c\u50cf\u4e00\u8d77\u539f\u5730\u5347\u7ea7\u3002\npatchPolicy\u4e3aRetain\u65f6\uff0cSidecarSet\u539f\u5730\u5347\u7ea7 Sidecar Container\u65f6\uff0c\u5c06\u4e0d\u4f1a\u540c\u6b65\u66f4\u65b0\u8be5 annotations\u3002"),(0,i.kt)("p",null,"\u4e0a\u8ff0\u914d\u7f6e\u540e\uff0csidecarSet\u5728\u6ce8\u5165sidecar container\u65f6\uff0c\u4f1a\u6ce8\u5165Pod annotations\uff0c\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  annotations:\n    apps.kruise.io/container-launch-priority: Ordered\n    oom-score: \'{"log-agent": 1, "main": 2}\'\n    custom.example.com/sidecar-configuration: \'{"command": "/home/admin/bin/start.sh", "log-level": "3"}\'\n  name: test-pod\nspec:\n  containers:\n    ...\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," SidecarSet\u4ece\u5b89\u5168\u7684\u8003\u8651\u4e0d\u5e94\u8be5\u6ce8\u5165\u6216\u4fee\u6539\u9664 sidecar container \u4e4b\u5916\u7684 Pod \u5b57\u6bb5\uff0c\u6240\u4ee5\u5982\u679c\u60f3\u8981\u4f7f\u7528\u8be5\u80fd\u529b\uff0c\u9996\u5148\u9700\u8981\u914d\u7f6e SidecarSet_PatchPodMetadata_WhiteList \u767d\u540d\u5355\n\u6216\u901a\u8fc7 Feature-gate SidecarSetPatchPodMetadataDefaultsAllowed=true \u5173\u95ed\u767d\u540d\u5355\u6821\u9a8c\u3002"),(0,i.kt)("h3",{id:"5-advanced-daemonset-\u652f\u6301\u955c\u50cf\u9884\u70ed"},"5. Advanced DaemonSet \u652f\u6301\u955c\u50cf\u9884\u70ed"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u5728\u5b89\u88c5\u6216\u5347\u7ea7 Kruise \u7684\u65f6\u5019\u542f\u7528\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"PreDownloadImageForDaemonSetUpdate")," feature-gate\uff0c\nDaemonSet \u63a7\u5236\u5668\u4f1a\u81ea\u52a8\u5728\u6240\u6709\u65e7\u7248\u672c pod \u6240\u5728 node \u8282\u70b9\u4e0a\u9884\u70ed\u4f60\u6b63\u5728\u7070\u5ea6\u53d1\u5e03\u7684\u65b0\u7248\u672c\u955c\u50cf\u3002 \u8fd9\u5bf9\u4e8e\u5e94\u7528\u53d1\u5e03\u52a0\u901f\u5f88\u6709\u5e2e\u52a9\u3002"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b DaemonSet \u6bcf\u4e2a\u65b0\u955c\u50cf\u9884\u70ed\u65f6\u7684\u5e76\u53d1\u5ea6\u90fd\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c\u4e5f\u5c31\u662f\u4e00\u4e2a\u4e2a\u8282\u70b9\u62c9\u955c\u50cf\u3002\n\u5982\u679c\u9700\u8981\u8c03\u6574\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"apps.kruise.io/image-predownload-parallelism")," annotation \u6765\u8bbe\u7f6e\u5e76\u53d1\u5ea6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: DaemonSet\nmetadata:\n  annotations:\n    apps.kruise.io/image-predownload-parallelism: "10"\n')),(0,i.kt)("h3",{id:"6-cloneset-\u6269\u7f29\u5bb9\u4e0e-preparingdelete"},"6. CloneSet \u6269\u7f29\u5bb9\u4e0e PreparingDelete"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cCloneSet \u5c06\u5904\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"PreparingDelete")," \u72b6\u6001\u7684 Pod \u89c6\u4e3a\u6b63\u5e38\uff0c\u610f\u5473\u7740\u8fd9\u4e9b Pod \u4ecd\u7136\u88ab\u8ba1\u7b97\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"replicas")," \u6570\u91cf\u4e2d\u3002"),(0,i.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"replicas")," \u4ece ",(0,i.kt)("inlineCode",{parentName:"li"},"N")," \u6539\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"N-1"),"\uff0c\u5f53\u4e00\u4e2a\u8981\u5220\u9664\u7684 Pod \u8fd8\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"PreparingDelete")," \u72b6\u6001\u4e2d\u65f6\uff0c\u4f60\u91cd\u65b0\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"replicas")," \u6539\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"N"),"\uff0cCloneSet \u4f1a\u5c06\u8fd9\u4e2a Pod \u91cd\u65b0\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"Normal")," \u72b6\u6001\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"replicas")," \u4ece ",(0,i.kt)("inlineCode",{parentName:"li"},"N")," \u6539\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"N-1")," \u7684\u540c\u65f6\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"podsToDelete")," \u4e2d\u8bbe\u7f6e\u4e86\u4e00\u4e2a Pod\uff0c\u5f53\u8fd9\u4e2a Pod \u8fd8\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"PreparingDelete")," \u72b6\u6001\u4e2d\u65f6\uff0c\u4f60\u91cd\u65b0\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"replicas")," \u6539\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"N"),"\uff0cCloneSet \u4f1a\u7b49\u5230\u8fd9\u4e2a Pod \u771f\u6b63\u8fdb\u5165 terminating \u4e4b\u540e\u518d\u6269\u5bb9\u4e00\u4e2a Pod \u51fa\u6765\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5728\u4e0d\u6539\u53d8 ",(0,i.kt)("inlineCode",{parentName:"li"},"replicas")," \u7684\u65f6\u5019\u6307\u5b9a\u5220\u9664\u4e00\u4e2a Pod\uff0c\u5f53\u8fd9\u4e2a Pod \u8fd8\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"PreparingDelete")," \u72b6\u6001\u4e2d\u65f6\uff0cCloneSet \u4f1a\u7b49\u5230\u8fd9\u4e2a Pod \u771f\u6b63\u8fdb\u5165 terminating \u4e4b\u540e\u518d\u6269\u5bb9\u4e00\u4e2a Pod \u51fa\u6765\u3002")),(0,i.kt)("p",null,"\u4ece Kruise v1.3.0 \u7248\u672c\u5f00\u59cb\uff0c\u4f60\u53ef\u4ee5\u5728 CloneSet \u4e2d\u8bbe\u7f6e\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},'apps.kruise.io/cloneset-scaling-exclude-preparing-delete: "true"')," \u6807\u7b7e\uff0c\u5b83\u6807\u5fd7\u7740\u8fd9\u4e2a CloneSet \u4e0d\u4f1a\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"PreparingDelete")," \u72b6\u6001\u7684 Pod \u8ba1\u7b97\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"replicas")," \u6570\u91cf\u4e2d\u3002"),(0,i.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"replicas")," \u4ece ",(0,i.kt)("inlineCode",{parentName:"li"},"N")," \u6539\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"N-1"),"\uff0c\u5f53\u4e00\u4e2a\u8981\u5220\u9664\u7684 Pod \u8fd8\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"PreparingDelete")," \u72b6\u6001\u4e2d\u65f6\uff0c\u4f60\u91cd\u65b0\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"replicas")," \u6539\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"N"),"\uff0cCloneSet \u4f1a\u5c06\u8fd9\u4e2a Pod \u91cd\u65b0\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"Normal")," \u72b6\u6001\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"replicas")," \u4ece ",(0,i.kt)("inlineCode",{parentName:"li"},"N")," \u6539\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"N-1")," \u7684\u540c\u65f6\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"podsToDelete")," \u4e2d\u8bbe\u7f6e\u4e86\u4e00\u4e2a Pod\uff0c\u5f53\u8fd9\u4e2a Pod \u8fd8\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"PreparingDelete")," \u72b6\u6001\u4e2d\u65f6\uff0c\u4f60\u91cd\u65b0\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"replicas")," \u6539\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"N"),"\uff0cCloneSet \u4f1a\u7acb\u5373\u521b\u5efa\u4e00\u4e2a\u65b0 Pod\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5728\u4e0d\u6539\u53d8 ",(0,i.kt)("inlineCode",{parentName:"li"},"replicas")," \u7684\u65f6\u5019\u6307\u5b9a\u5220\u9664\u4e00\u4e2a Pod\uff0c\u5f53\u8fd9\u4e2a Pod \u8fd8\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"PreparingDelete")," \u72b6\u6001\u4e2d\u65f6\uff0cCloneSet \u4f1a\u7acb\u5373\u521b\u5efa\u4e00\u4e2a\u65b0 Pod\u3002")),(0,i.kt)("h3",{id:"7-advanced-cronjob-time-zones"},"7. Advanced CronJob Time zones"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709 AdvancedCronJob schedule \u8c03\u5ea6\u65f6\uff0c\u90fd\u662f\u57fa\u4e8e kruise-controller-manager \u5bb9\u5668\u672c\u5730\u7684\u65f6\u533a\u6240\u8ba1\u7b97\u7684\u3002"),(0,i.kt)("p",null,"\u4e0d\u8fc7\uff0c\u5728 v1.3.0 \u7248\u672c\u4e2d\u6211\u4eec\u5f15\u5165\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.timeZone")," \u5b57\u6bb5\uff0c\u4f60\u53ef\u4ee5\u5c06\u5b83\u8bbe\u7f6e\u4e3a\u4efb\u610f\u5408\u6cd5\u65f6\u533a\u7684\u540d\u5b57\u3002\u4f8b\u5982\uff0c\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},'spec.timeZone: "Asia/Shanghai"')," \u5219 Kruise \u4f1a\u6839\u636e\u56fd\u5185\u7684\u65f6\u533a\u8ba1\u7b97 schedule \u4efb\u52a1\u89e6\u53d1\u65f6\u95f4\u3002"),(0,i.kt)("p",null,"Go \u6807\u51c6\u5e93\u4e2d\u5185\u7f6e\u4e86\u65f6\u533a\u6570\u636e\u5e93\uff0c\u4f5c\u4e3a\u5728\u5bb9\u5668\u7684\u7cfb\u7edf\u73af\u5883\u4e2d\u6ca1\u6709\u5916\u7f6e\u6570\u636e\u5e93\u65f6\u7684 fallback \u9009\u62e9\u3002"),(0,i.kt)("h3",{id:"8-\u5176\u4ed6\u6539\u52a8"},"8. \u5176\u4ed6\u6539\u52a8"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/releases"},"Github release")," \u9875\u9762\uff0c\u6765\u67e5\u770b\u66f4\u591a\u7684\u6539\u52a8\u4ee5\u53ca\u5b83\u4eec\u7684\u4f5c\u8005\u4e0e\u63d0\u4ea4\u8bb0\u5f55\u3002"),(0,i.kt)("h2",{id:"\u793e\u533a\u53c2\u4e0e"},"\u793e\u533a\u53c2\u4e0e"),(0,i.kt)("p",null,"\u975e\u5e38\u6b22\u8fce\u4f60\u901a\u8fc7 Github/Slack/\u9489\u9489/\u5fae\u4fe1 \u7b49\u65b9\u5f0f\u52a0\u5165\u6211\u4eec\u6765\u53c2\u4e0e OpenKruise \u5f00\u6e90\u793e\u533a\u3002\n\u4f60\u662f\u5426\u5df2\u7ecf\u6709\u4e00\u4e9b\u5e0c\u671b\u4e0e\u6211\u4eec\u793e\u533a\u4ea4\u6d41\u7684\u5185\u5bb9\u5462\uff1f\n\u53ef\u4ee5\u5728\u6211\u4eec\u7684",(0,i.kt)("a",{parentName:"p",href:"https://shimo.im/docs/gXqmeQOYBehZ4vqo"},"\u793e\u533a\u53cc\u5468\u4f1a"),"\u4e0a\u5206\u4eab\u4f60\u7684\u58f0\u97f3\uff0c\u6216\u901a\u8fc7\u4ee5\u4e0b\u6e20\u9053\u53c2\u4e0e\u8ba8\u8bba\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u52a0\u5165\u793e\u533a ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.slack.com/channels/openkruise"},"Slack channel")," (English)"),(0,i.kt)("li",{parentName:"ul"},"\u52a0\u5165\u793e\u533a\u9489\u9489\u7fa4\uff1a\u641c\u7d22\u7fa4\u53f7 ",(0,i.kt)("inlineCode",{parentName:"li"},"23330762")," (Chinese)"),(0,i.kt)("li",{parentName:"ul"},"\u52a0\u5165\u793e\u533a\u5fae\u4fe1\u7fa4\uff08\u65b0\uff09\uff1a\u6dfb\u52a0\u7528\u6237 ",(0,i.kt)("inlineCode",{parentName:"li"},"openkruise")," \u5e76\u8ba9\u673a\u5668\u4eba\u62c9\u4f60\u5165\u7fa4 (Chinese)")))}m.isMDXComponent=!0}}]);