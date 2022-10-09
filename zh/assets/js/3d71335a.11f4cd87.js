"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[4528],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,k=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5347:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={title:"Container Launch Priority"},u=void 0,p={unversionedId:"user-manuals/containerlaunchpriority",id:"version-v1.3/user-manuals/containerlaunchpriority",title:"Container Launch Priority",description:"FEATURE STATE: Kruise v1.0.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.3/user-manuals/containerlaunchpriority.md",sourceDirName:"user-manuals",slug:"/user-manuals/containerlaunchpriority",permalink:"/zh/docs/user-manuals/containerlaunchpriority",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/containerlaunchpriority.md",tags:[],version:"v1.3",lastUpdatedBy:"berg",lastUpdatedAt:1665303128,formattedLastUpdatedAt:"2022/10/9",frontMatter:{title:"Container Launch Priority"},sidebar:"docs",previous:{title:"ImagePullJob",permalink:"/zh/docs/user-manuals/imagepulljob"},next:{title:"ResourceDistribution",permalink:"/zh/docs/user-manuals/resourcedistribution"}},c={},s=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u6309\u7167 container \u987a\u5e8f\u542f\u52a8",id:"\u6309\u7167-container-\u987a\u5e8f\u542f\u52a8",level:3},{value:"\u6309\u81ea\u5b9a\u4e49\u987a\u5e8f\u542f\u52a8",id:"\u6309\u81ea\u5b9a\u4e49\u987a\u5e8f\u542f\u52a8",level:3},{value:"\u4f7f\u7528\u8981\u6c42",id:"\u4f7f\u7528\u8981\u6c42",level:2},{value:"\u5b9e\u73b0\u7ec6\u8282",id:"\u5b9e\u73b0\u7ec6\u8282",level:2}],m={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v1.0.0"),(0,o.kt)("p",null,"Container Launch Priority \u63d0\u4f9b\u4e86\u63a7\u5236\u4e00\u4e2a Pod \u4e2d\u5bb9\u5668\u542f\u52a8\u987a\u5e8f\u7684\u65b9\u6cd5\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u901a\u5e38\u6765\u8bf4 Pod \u5bb9\u5668\u7684\u542f\u52a8\u548c\u9000\u51fa\u987a\u5e8f\u662f\u7531 Kubelet \u7ba1\u7406\u7684\u3002Kubernetes \u66fe\u7ecf\u6709\u4e00\u4e2a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/753-sidecar-containers"},"KEP")," \u8ba1\u5212\u5728 container \u4e2d\u589e\u52a0\u4e00\u4e2a type \u5b57\u6bb5\u6765\u6807\u8bc6\u4e0d\u540c\u7c7b\u578b\u5bb9\u5668\u7684\u542f\u505c\u4f18\u5148\u7ea7\u3002\n\u4f46\u662f\u7531\u4e8e",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/enhancements/issues/753#issuecomment-713471597"},"sig-node\u8003\u8651\u5230\u5bf9\u73b0\u6709\u4ee3\u7801\u67b6\u6784\u7684\u6539\u52a8\u592a\u5927"),"\uff0c\u5b83\u5df2\u7ecf\u88ab\u62d2\u7edd\u4e86\u3002")),(0,o.kt)("p",null,"\u6ce8\u610f\uff0c\u8fd9\u4e2a\u529f\u80fd\u4f5c\u7528\u5728 Pod \u5bf9\u8c61\u4e0a\uff0c\u4e0d\u7ba1\u5b83\u7684 owner \u662f\u4ec0\u4e48\u7c7b\u578b\u7684\uff0c\u56e0\u6b64\u53ef\u4ee5\u9002\u7528\u4e8e Deployment\u3001CloneSet \u4ee5\u53ca\u5176\u4ed6\u7684 workload \u79cd\u7c7b\u3002"),(0,o.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,o.kt)("h3",{id:"\u6309\u7167-container-\u987a\u5e8f\u542f\u52a8"},"\u6309\u7167 container \u987a\u5e8f\u542f\u52a8"),(0,o.kt)("p",null,"\u53ea\u9700\u8981\u5728 Pod \u4e2d\u5b9a\u4e49\u4e00\u4e2a annotation \u5373\u53ef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\n  annotations:\n    apps.kruise.io/container-launch-priority: Ordered\nspec:\n  containers:\n  - name: sidecar\n    # ...\n  - name: main\n    # ...\n")),(0,o.kt)("p",null,"Kruise \u4f1a\u4fdd\u8bc1\u524d\u9762\u7684\u5bb9\u5668\uff08sidecar\uff09\u4f1a\u5728\u540e\u9762\u5bb9\u5668\uff08main\uff09\u4e4b\u524d\u542f\u52a8\u3002"),(0,o.kt)("h3",{id:"\u6309\u81ea\u5b9a\u4e49\u987a\u5e8f\u542f\u52a8"},"\u6309\u81ea\u5b9a\u4e49\u987a\u5e8f\u542f\u52a8"),(0,o.kt)("p",null,"\u9700\u8981\u5728 Pod container \u4e2d\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"KRUISE_CONTAINER_PRIORITY")," \u73af\u5883\u53d8\u91cf:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nspec:\n  containers:\n  - name: main\n    # ...\n  - name: sidecar\n    env:\n    - name: KRUISE_CONTAINER_PRIORITY\n      value: "1"\n    # ...\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u503c\u7684\u8303\u56f4\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"[-2147483647, 2147483647]"),"\uff0c\u4e0d\u5199\u9ed8\u8ba4\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6743\u91cd\u9ad8\u7684\u5bb9\u5668\uff0c\u4f1a\u4fdd\u8bc1\u5728\u6743\u91cd\u4f4e\u7684\u5bb9\u5668\u4e4b\u524d\u542f\u52a8\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u76f8\u540c\u6743\u91cd\u7684\u5bb9\u5668\u4e0d\u4fdd\u8bc1\u542f\u52a8\u987a\u5e8f\u3002")),(0,o.kt)("h2",{id:"\u4f7f\u7528\u8981\u6c42"},"\u4f7f\u7528\u8981\u6c42"),(0,o.kt)("p",null,"\u4f7f\u7528 ContainerLaunchPriority \u529f\u80fd\u9700\u8981\u6253\u5f00 ",(0,o.kt)("inlineCode",{parentName:"p"},"PodWebhook")," feature-gate\uff08\u9ed8\u8ba4\u5c31\u662f\u6253\u5f00\u7684\uff0c\u9664\u975e\u663e\u5f0f\u5173\u95ed\uff09\u3002"),(0,o.kt)("h2",{id:"\u5b9e\u73b0\u7ec6\u8282"},"\u5b9e\u73b0\u7ec6\u8282"),(0,o.kt)("p",null,"Kruise webhook \u4f1a\u5904\u7406\u6240\u6709 Pod \u521b\u5efa\u7684\u8bf7\u6c42\u3002\n\u5f53 webhook \u53d1\u73b0 Pod \u4e2d\u5e26\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"apps.kruise.io/container-launch-priority")," annotation \u6216\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"KRUISE_CONTAINER_PRIORITY")," \u73af\u5883\u53d8\u91cf\uff0c\u5219\u5728\u5b83\u7684\u6bcf\u4e2a\u5bb9\u5668\u4e2d\u6ce8\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"KRUISE_CONTAINER_BARRIER")," \u73af\u5883\u53d8\u91cf\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"KRUISE_CONTAINER_BARRIER")," \u73af\u5883\u53d8\u91cf\u662f value from \u4e00\u4e2a\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"{pod-name}-barrier")," \u7684 ConfigMap\uff0ckey \u662f\u4e0e\u8fd9\u4e2a\u5bb9\u5668\u7684\u6743\u91cd\u6240\u5bf9\u5e94\u3002\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nspec:\n  containers:\n  - name: main\n    # ...\n    env:\n    - name: KRUISE_CONTAINER_BARRIER\n      valueFrom:\n        configMapKeyRef:\n          name: {pod-name}-barrier\n          key: "p_0"\n  - name: sidecar\n    env:\n    - name: KRUISE_CONTAINER_PRIORITY\n      value: "1"\n    - name: KRUISE_CONTAINER_BARRIER\n      valueFrom:\n        configMapKeyRef:\n          name: {pod-name}-barrier\n          key: "p_1"\n    # ...\n')),(0,o.kt)("p",null,"\u7136\u540e Kruise controller \u4f1a\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684 ConfigMap\uff0c\u5e76\u6309\u7167\u6743\u91cd\u987a\u5e8f\u4ee5\u53ca Pod \u4e2d\u5bb9\u5668\u7684\u542f\u52a8\u72b6\u6001\u9010\u6e10\u5c06 key \u52a0\u5165\u5230 ConfigMap \u4e2d\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0a\u9762\u7684\u4f8b\u5b50\u6765\u770b\uff0ccontroller \u4f1a\u5148\u52a0\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"p_1")," key\uff0c\u7b49\u5f85 sidecar \u5bb9\u5668\u542f\u52a8\u6210\u529f\u540e\uff0c\u518d\u52a0\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"p_0")," key \u6765\u5141\u8bb8 Kubelet \u542f\u52a8 main \u5bb9\u5668\u3002"),(0,o.kt)("p",null,"\u53e6\u5916\uff0c\u5728 Pod \u542f\u52a8\u7684\u8fc7\u7a0b\u4e2d\uff0c\u7528 kubectl \u53ef\u80fd\u4f1a\u770b\u5230 Pod \u5904\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateContainerConfigError")," \u72b6\u6001\uff0c\u8fd9\u662f\u7531\u4e8e Kubelet \u6ca1\u6709\u627e\u5230\u90e8\u5206\u5bb9\u5668\u7684 ConfigMap key \u5bfc\u81f4\u7684\uff0c\u5728\u5168\u90e8\u5bb9\u5668\u542f\u52a8\u5b8c\u6210\u540e\u4f1a\u6d88\u5931\u3002"))}d.isMDXComponent=!0}}]);