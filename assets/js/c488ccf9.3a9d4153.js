"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[3859],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(k,i(i({ref:n},u),{},{components:t})):r.createElement(k,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5584:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={title:"Architecture"},c=void 0,l={unversionedId:"core-concepts/architecture",id:"version-v1.2/core-concepts/architecture",title:"Architecture",description:"The overall architecture of OpenKruise is shown as below:",source:"@site/versioned_docs/version-v1.2/core-concepts/architecture.md",sourceDirName:"core-concepts",slug:"/core-concepts/architecture",permalink:"/docs/v1.2/core-concepts/architecture",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/core-concepts/architecture.md",tags:[],version:"v1.2",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1654585589,formattedLastUpdatedAt:"6/7/2022",frontMatter:{title:"Architecture"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/v1.2/installation"},next:{title:"InPlace Update",permalink:"/docs/v1.2/core-concepts/inplace-update"}},u={},p=[{value:"API",id:"api",level:2},{value:"Manager",id:"manager",level:2},{value:"Daemon",id:"daemon",level:2}],d={toc:p};function m(e){var n=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The overall architecture of OpenKruise is shown as below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt",src:t(2143).Z,width:"3709",height:"1659"})),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,"All features provided by OpenKruise are following ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes API"),", including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CRD definition, such as")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ kubectl get crd | grep kruise.io\nadvancedcronjobs.apps.kruise.io            2021-09-16T06:02:36Z\nbroadcastjobs.apps.kruise.io               2021-09-16T06:02:36Z\nclonesets.apps.kruise.io                   2021-09-16T06:02:36Z\ncontainerrecreaterequests.apps.kruise.io   2021-09-16T06:02:36Z\ndaemonsets.apps.kruise.io                  2021-09-16T06:02:36Z\nimagepulljobs.apps.kruise.io               2021-09-16T06:02:36Z\nnodeimages.apps.kruise.io                  2021-09-16T06:02:36Z\npodunavailablebudgets.policy.kruise.io     2021-09-16T06:02:36Z\nresourcedistributions.apps.kruise.io       2021-09-16T06:02:36Z\nsidecarsets.apps.kruise.io                 2021-09-16T06:02:36Z\nstatefulsets.apps.kruise.io                2021-09-16T06:02:36Z\nuniteddeployments.apps.kruise.io           2021-09-16T06:02:37Z\nworkloadspreads.apps.kruise.io             2021-09-16T06:02:37Z\n# ...\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Specific identities (e.g. labels, annotations, envs) in resources, such as")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  labels:\n    # To protect pods in this namespace from cascading deletion.\n    policy.kruise.io/delete-protection: Cascading\n")),(0,a.kt)("h2",{id:"manager"},"Manager"),(0,a.kt)("p",null,"Kruise-manager is a control plane component that runs controllers and webhooks, it is deployed by a Deployment in ",(0,a.kt)("inlineCode",{parentName:"p"},"kruise-system")," namespace."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get deploy -n kruise-system\nNAME                        READY   UP-TO-DATE   AVAILABLE   AGE\nkruise-controller-manager   2/2     2            2           4h6m\n\n$ kubectl get pod -n kruise-system -l control-plane=controller-manager\nNAME                                         READY   STATUS    RESTARTS   AGE\nkruise-controller-manager-68dc6d87cc-k9vg8   1/1     Running   0          4h6m\nkruise-controller-manager-68dc6d87cc-w7x82   1/1     Running   0          4h6m\n")),(0,a.kt)("p",null,"Logically, each controller like cloneset-controller or sidecarset-controller is a separate process, but to reduce complexity, they are all compiled into a single binary and run in the ",(0,a.kt)("inlineCode",{parentName:"p"},"kruise-controller-manager-xxx")," single Pod."),(0,a.kt)("p",null,"Besides controllers, this Pod also contains the admission webhooks for Kruise CRDs and Pod. It creates webhook configurations to configure which resources should be handled, and provides a Service for kube-apiserver calling."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get svc -n kruise-system\nNAME                     TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE\nkruise-webhook-service   ClusterIP   172.24.9.234   <none>        443/TCP   4h9m\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"kruise-webhook-service")," is much important for kube-apiserver calling."),(0,a.kt)("h2",{id:"daemon"},"Daemon"),(0,a.kt)("p",null,"This is a new daemon component released since Kruise v0.8.0 version."),(0,a.kt)("p",null,"It is deployed by DaemonSet, runs on every node and manages things like image pre-download, container restarting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod -n kruise-system -l control-plane=daemon\nNAME                  READY   STATUS    RESTARTS   AGE\nkruise-daemon-6hw6d   1/1     Running   0          4h7m\nkruise-daemon-d7xr4   1/1     Running   0          4h7m\nkruise-daemon-dqp8z   1/1     Running   0          4h7m\nkruise-daemon-dv96r   1/1     Running   0          4h7m\nkruise-daemon-q7594   1/1     Running   0          4h7m\nkruise-daemon-vnsbw   1/1     Running   0          4h7m\n")))}m.isMDXComponent=!0},2143:function(e,n,t){n.Z=t.p+"assets/images/architecture-08f2cb3a5b19c102412f9df77b365eef.png"}}]);