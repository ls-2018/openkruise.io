"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[9404],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),u=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=u(n),m=a,d=k["".concat(s,".").concat(m)]||k[m]||c[m]||r;return n?l.createElement(d,i(i({ref:t},p),{},{components:n})):l.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2087:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var l=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],o={title:"Kubectl Plugin"},s=void 0,u={unversionedId:"cli-tool/kubectl-plugin",id:"cli-tool/kubectl-plugin",title:"Kubectl Plugin",description:"Kruise-tools \u4e3a Kruise \u7684\u529f\u80fd\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5305\u62ec kubectl-kruise\uff0c\u5b83\u7684\u662f kubectl \u7684\u6807\u51c6\u63d2\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli-tool/kubectl-plugin.md",sourceDirName:"cli-tool",slug:"/cli-tool/kubectl-plugin",permalink:"/zh/docs/next/cli-tool/kubectl-plugin",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/cli-tool/kubectl-plugin.md",tags:[],version:"current",lastUpdatedBy:"ls-2018",lastUpdatedAt:1695438679,formattedLastUpdatedAt:"2023/9/23",frontMatter:{title:"Kubectl Plugin"},sidebar:"docs",previous:{title:"Other languages",permalink:"/zh/docs/next/developer-manuals/other-languages"},next:{title:"Kustomize ResourceDistribution Generator",permalink:"/zh/docs/next/cli-tool/kustomize-plugin"}},p={},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"Install via Krew",id:"install-via-krew",level:3},{value:"Install manually",id:"install-manually",level:3},{value:"\u5347\u7ea7\u63d2\u4ef6",id:"\u5347\u7ea7\u63d2\u4ef6",level:2},{value:"\u901a\u8fc7 Krew \u5347\u7ea7",id:"\u901a\u8fc7-krew-\u5347\u7ea7",level:3},{value:"\u624b\u52a8\u5347\u7ea7",id:"\u624b\u52a8\u5347\u7ea7",level:3},{value:"Usage",id:"usage",level:2},{value:"expose",id:"expose",level:3},{value:"scale",id:"scale",level:3},{value:"rollout",id:"rollout",level:3},{value:"set",id:"set",level:3},{value:"exec",id:"exec",level:3},{value:"migrate",id:"migrate",level:3},{value:"scaledown",id:"scaledown",level:3}],k={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise-tools"},"Kruise-tools")," \u4e3a Kruise \u7684\u529f\u80fd\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl-kruise"),"\uff0c\u5b83\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u7684\u6807\u51c6\u63d2\u4ef6\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("h3",{id:"install-via-krew"},"Install via Krew"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://krew.sigs.k8s.io/"},"Krew")," \u662f\u4e00\u4e2a kubectl \u7684\u63d2\u4ef6\uff0ckrew \u672c\u8eab\u53ef\u4ee5\u81ea\u4e3e\u5b89\u88c5\u548c\u5347\u7ea7\u3002\n\u9996\u5148, ",(0,r.kt)("a",{parentName:"p",href:"https://krew.sigs.k8s.io/docs/user-guide/setup/install/"},"\u5b89\u88c5 krew"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl krew install kruise")," \u6765\u5b89\u88c5 kruise \u63d2\u4ef6\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl-kruise")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl kruise")," \u6765\u4f7f\u7528\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl-kruise --help\n\n# or\n$ kubectl kruise --help\n")),(0,r.kt)("h3",{id:"install-manually"},"Install manually"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise-tools/releases"},"releases")," \u9875\u9762\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u76ee\u524d\u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"p"},"linux"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"darwin"),"\uff08OS X\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"windows")," \u7cfb\u7edf\u4ee5\u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"x86_64"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"arm64")," \u67b6\u6784\u3002\u5982\u679c\u4f60\u5728\u4f7f\u7528\u5176\u4ed6\u7684\u64cd\u4f5c\u7cfb\u7edf\u6216\u67b6\u6784\uff0c\u9700\u8981\u4e0b\u8f7d ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise-tools"},"kruise-tools")," \u6e90\u7801\u5e76\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"make build")," \u6253\u5305\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u89e3\u538b\u7f29\uff0c\u5e76\u79fb\u52a8\u5230\u7cfb\u7edf PATH \u8def\u5f84\u4e2d\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ tar xvf kubectl-kruise-darwin-amd64.tar.gz\n$ mv darwin-amd64/kubectl-kruise /usr/local/bin/\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl-kruise")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl kruise")," \u547d\u4ee4\u6765\u4f7f\u7528\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl-kruise --help\n\n# or\n$ kubectl kruise --help\n")),(0,r.kt)("h2",{id:"\u5347\u7ea7\u63d2\u4ef6"},"\u5347\u7ea7\u63d2\u4ef6"),(0,r.kt)("h3",{id:"\u901a\u8fc7-krew-\u5347\u7ea7"},"\u901a\u8fc7 Krew \u5347\u7ea7"),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl krew upgrade kruise")," \u5373\u53ef\u5347\u7ea7\u63d2\u4ef6\u3002"),(0,r.kt)("h3",{id:"\u624b\u52a8\u5347\u7ea7"},"\u624b\u52a8\u5347\u7ea7"),(0,r.kt)("p",null,"\u624b\u52a8\u5347\u7ea7\u7684\u65b9\u5f0f\u4e0e\u5b89\u88c5\u8fc7\u7a0b\u4e00\u81f4\u3002"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"expose"},"expose"),(0,r.kt)("p",null,"\u6839\u636e\u4e00\u4e2a workload\uff08\u5982 Deployment\u3001CloneSet\uff09\u3001Service \u6216 Pod \u6765\u751f\u6210\u4e00\u4e2a\u65b0\u7684 service \u5bf9\u8c61\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl kruise expose cloneset nginx --port=80 --target-port=8000\n")),(0,r.kt)("h3",{id:"scale"},"scale"),(0,r.kt)("p",null,"\u4e3a workload\uff08\u5982 Deployment, ReplicaSet, CloneSet, or Advanced StatefulSet\uff09 \u8bbe\u7f6e\u65b0\u7684\u526f\u672c\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl kruise scale --replicas=3 cloneset nginx\n")),(0,r.kt)("p",null,"\u5b83\u7684\u6548\u679c\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl scale --replicas=3 cloneset nginx")," \u76f8\u540c\uff0c\u5373\u539f\u751f ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl scale")," \u4e5f\u9002\u7528\u3002"),(0,r.kt)("h3",{id:"rollout"},"rollout"),(0,r.kt)("p",null,"\u53ef\u7528\u7684\u5b50\u547d\u4ee4: ",(0,r.kt)("inlineCode",{parentName:"p"},"history"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pause"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"restart"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"resume"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"status"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"undo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"approve"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl kruise rollout undo cloneset/nginx\n\n# built-in statefulsets\n$ kubectl kruise rollout status statefulsets/sts1\n\n# kruise statefulsets\n$ kubectl kruise rollout status statefulsets.apps.kruise.io/sts2\n\n# approve a kruise rollout resource named "rollout-demo" in "ns-demo" namespace\n$ kubectl-kruise rollout approve rollout-demo -n ns-demo\n')),(0,r.kt)("h3",{id:"set"},"set"),(0,r.kt)("p",null,"\u53ef\u7528\u7684\u5b50\u547d\u4ee4: ",(0,r.kt)("inlineCode",{parentName:"p"},"env"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"resources"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"selector"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceaccount"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"subject"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl kruise set env cloneset/nginx STORAGE_DIR=/local\n\n$ kubectl kruise set image cloneset/nginx busybox=busybox nginx=nginx:1.9.1\n")),(0,r.kt)("h3",{id:"exec"},"exec"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"exec")," \u547d\u4ee4\u76f4\u63a5\u8fdb\u5165\u5230 Pod \u7684 sidecar \u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# exec sidecar in pod\n$ kubectl kruise exec mypod -S sidecar-container -i -t -- bash\n")),(0,r.kt)("h3",{id:"migrate"},"migrate"),(0,r.kt)("p",null,"\u76ee\u524d\u652f\u6301\u4ece Deployment \u8fc1\u79fb\u5230 CloneSet\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Create an empty CloneSet from an existing Deployment.\n$ kubectl kruise migrate CloneSet --from Deployment -n default --dst-name deployment-name --create\n\n# Create a same replicas CloneSet from an existing Deployment.\n$ kubectl kruise migrate CloneSet --from Deployment -n default --dst-name deployment-name --create --copy\n\n# Migrate replicas from an existing Deployment to an existing CloneSet.\n$ kubectl-kruise migrate CloneSet --from Deployment -n default --src-name cloneset-name --dst-name deployment-name --replicas 10 --max-surge=2\n")),(0,r.kt)("h3",{id:"scaledown"},"scaledown"),(0,r.kt)("p",null,"\u5bf9 cloneset \u6307\u5b9a pod \u7f29\u5bb9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Scale down 2 with  selective pods\n$ kubectl kruise scaledown cloneset/nginx --pods pod-a,pod-b\n")),(0,r.kt)("p",null,"\u5b83\u4f1a\u5c06 cloneset \u8bbe\u7f6e ",(0,r.kt)("strong",{parentName:"p"},"replicas=replicas-2"),"\uff0c\u5e76\u5220\u9664\u6307\u5b9a\u7684\u4e24\u4e2a pod\u3002"))}m.isMDXComponent=!0}}]);