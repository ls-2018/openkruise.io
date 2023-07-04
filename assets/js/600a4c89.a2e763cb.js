"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[3162],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return n?o.createElement(f,s(s({ref:t},d),{},{components:n})):o.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8657:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],i={title:"PersistentPodState"},l=void 0,p={unversionedId:"user-manuals/persistentpodstate",id:"version-v1.3/user-manuals/persistentpodstate",title:"PersistentPodState",description:"FEATURE STATE: Kruise v1.2.0",source:"@site/versioned_docs/version-v1.3/user-manuals/persistentpodstate.md",sourceDirName:"user-manuals",slug:"/user-manuals/persistentpodstate",permalink:"/docs/v1.3/user-manuals/persistentpodstate",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/persistentpodstate.md",tags:[],version:"v1.3",lastUpdatedBy:"Yuedong Wu",lastUpdatedAt:1688434926,formattedLastUpdatedAt:"7/4/2023",frontMatter:{title:"PersistentPodState"},sidebar:"docs",previous:{title:"ResourceDistribution",permalink:"/docs/v1.3/user-manuals/resourcedistribution"},next:{title:"PodProbeMarker",permalink:"/docs/v1.3/user-manuals/podprobemarker"}},d={},u=[{value:"Usage",id:"usage",level:2},{value:"Annotation Auto Generate PersistentPodState",id:"annotation-auto-generate-persistentpodstate",level:3},{value:"Define PersistentPodState CRD",id:"define-persistentpodstate-crd",level:3},{value:"IP Retention Practice",id:"ip-retention-practice",level:2}],c={toc:u};function m(e){var t=e.components,i=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v1.2.0"),(0,a.kt)("p",null,"With the development of cloud native, more and more companies start to deploy stateful services (e.g., Etcd, MQ) using Kubernetes. K8S StatefulSet is a workload for managing stateful services, and it considers the deployment characteristics of stateful services in many aspects.\nHowever, StatefulSet persistent only limited pod state, such as Pod Name is ordered and unchanging, PVC persistence, and can not cover other states, e.g. Pod IP retention, priority scheduling to previously deployed Nodes, etc. Typical Cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Service Discovery Middleware services are exceptionally sensitive to the Pod IP after deployment, requiring that the IP cannot be changed."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Database services persist data to the host disk, and changes to the Node to which they belong will result in data loss.")))),(0,a.kt)("p",null,'In response to the above description, by customizing PersistentPodState CRD, Kruise is able to persistent other states of the Pod, such as "IP Retention".'),(0,a.kt)("p",null,"For detailed design, please refer to: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/blob/master/docs/proposals/20220421-persistent-pod-state.md"},"PPS Proposal"),"."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"annotation-auto-generate-persistentpodstate"},"Annotation Auto Generate PersistentPodState"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: StatefulSet\nmetadata:\n  annotations:\n    # auto generate PersistentPodState\n    kruise.io/auto-generate-persistent-pod-state: "true"\n    # preferred node affinity, As follows, Pod rebuild will preferred deployment to the same node\n    kruise.io/preferred-persistent-topology: kubernetes.io/hostname[,other node labels]\n    # required node affinity, As follows, Pod rebuild will force deployment to the same zone\n    kruise.io/required-persistent-topology: failure-domain.beta.kubernetes.io/zone[,other node labels]\n')),(0,a.kt)("p",null,"Some common PersistentPodState can be generated by annotation to satisfy most of the scenarios. For some complex scenarios, you can use PersistentPodState CRD to define them directly."),(0,a.kt)("h3",{id:"define-persistentpodstate-crd"},"Define PersistentPodState CRD"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: PersistentPodState\nmetadata:\n  name: echoserver\n  namespace: echoserver\nspec:\n  targetRef:\n    # Native k8s or kruise StatefulSet\n    # only support StatefulSet\n    apiVersion: apps.kruise.io/v1beta1\n    kind: StatefulSet\n    name: echoserver\n  # required node affinity. As follows, Pod rebuild will force deployment to the same zone\n  requiredPersistentTopology:\n    nodeTopologyKeys:\n      failure-domain.beta.kubernetes.io/zone[,other node labels]\n  # preferred node affinity. As follows, Pod rebuild will preferred deployment to the same node\n  preferredPersistentTopology:\n    - preference:\n        nodeTopologyKeys:\n          kubernetes.io/hostname[,other node labels]\n      # int [1, 100]\n      weight: 100\n")),(0,a.kt)("h2",{id:"ip-retention-practice"},"IP Retention Practice"),(0,a.kt)("p",null,'"IP Retention" should be a common requirement for K8S deployments of stateful services. It does not mean "Specified Pod IP", but requires that the Pod IP does not change after the first deployment, either by service release or by machine eviction.\nTo achieve this, we need the K8S network component to support Pod IP retention and the ability to keep the IP as unchanged as possible.\nIn this article, we have modified the Host-local plugin in the flannel network component so that it can achieve the effect of keeping the Pod IP unchanged under the same Node.\nRelated principles will not be stated here, please refer to the code: ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkruise/samples/tree/master/containernetworking/plugins"},"host-local"),"."),(0,a.kt)("p",null,'IP retention seems to be supported by the network component, how is it related with PersistentPodState?\nWell, there are some limitations to the implementation of "Pod IP unchanged" by network components. For example, flannel can only support the same Node to keep the Pod IP unchanged.\nHowever, the most important feature of K8S scheduling is "uncertainty", so "how to ensure that Pods are rebuilt and scheduled to the same Node" is the problem that PersistentPodState solves.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'1. Deploy stateful service echoserver, declaring "IP Retention" via annotations, as follows:')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: StatefulSet\nmetadata:\n  name: echoserver\n  labels:\n    app: echoserver\n  annotations:\n    kruise.io/auto-generate-persistent-pod-state: "true"\n    kruise.io/preferred-persistent-topology: kubernetes.io/hostname\nspec:\n  serviceName: echoserver\n  replicas: 2\n  selector:\n    matchLabels:\n      app: echoserver\n  template:\n    metadata:\n      labels:\n        app: echoserver\n      annotations:\n        # Notify the flannel network component that the Pod rebuild keeps the IP unchanged and "10" means the Pod is deleted until the next successful dispatch, with a maximum of 10 minutes in between\n        # Mainly consider scenarios such as deletion, capacity reduction, etc.\n        io.kubernetes.cri/reserved-ip-duration: "10"\n    spec:\n      terminationGracePeriodSeconds: 5\n      containers:\n      - name: echoserver\n        image: cilium/echoserver:latest\n        imagePullPolicy: IfNotPresent\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. According to the above configuration, kruise automatically generates PersistentPodState and records the node status of the first deployment of Pod in PersistentPodState.Status.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: PersistentPodState\nmetadata:\n  name: configserver\n  namespace: configserver\nspec:\n  targetRef:\n    apiVersion: apps.kruise.io/v1beta1\n    kind: StatefulSet\n    name: configserver\n  preferredPersistentTopology:\n  - preference:\n      nodeTopologyKeys:\n        kubernetes.io/hostname\n    weight: 100\nstatus:\n  podStates:\n    # Record that pod-0 is deployed on worker2 node and pod-1 is deployed on worker1 node\n    configserver-0:\n      nodeName: worker2\n      nodeTopologyLabels:\n        kubernetes.io/hostname: worker2\n    configserver-1:\n      nodeName: worker1\n      nodeTopologyLabels:\n        kubernetes.io/hostname: worker1\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. After Pod rebuild due to service release or Node eviction, etc., kruise injects the recorded Pod node information into Pod NodeAffinity, which in turn enables the Pod IP to remain unchanged, as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: configserver-0\n  namespace: configserver\n  annotations:\n    io.kubernetes.cri/reserved-ip-duration: 10\nspec:\n  # kruise webhook injection\n  affinity:\n    nodeAffinity:\n      preferredDuringSchedulingIgnoredDuringExecution:\n      - preference:\n          matchExpressions:\n          - key: kubernetes.io/hostname\n            operator: In\n            values:\n            - worker2\n        weight: 100\n  containers:\n  ...\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"staticIP",src:n(4836).Z,width:"1268",height:"275"})))}m.isMDXComponent=!0},4836:function(e,t,n){t.Z=n.p+"assets/images/static-ip-5b79470281bcd567a2aaf1e60f2cfb34.png"}}]);