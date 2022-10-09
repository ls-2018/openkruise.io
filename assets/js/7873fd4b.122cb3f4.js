"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[7707],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6148:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),s=["components"],o={title:"SidecarSet"},l=void 0,d={unversionedId:"user-manuals/sidecarset",id:"version-v1.2/user-manuals/sidecarset",title:"SidecarSet",description:"This controller leverages the admission webhook to automatically",source:"@site/versioned_docs/version-v1.2/user-manuals/sidecarset.md",sourceDirName:"user-manuals",slug:"/user-manuals/sidecarset",permalink:"/docs/v1.2/user-manuals/sidecarset",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/sidecarset.md",tags:[],version:"v1.2",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1654585589,formattedLastUpdatedAt:"6/7/2022",frontMatter:{title:"SidecarSet"},sidebar:"docs",previous:{title:"AdvancedCronJob",permalink:"/docs/v1.2/user-manuals/advancedcronjob"},next:{title:"WorkloadSpread",permalink:"/docs/v1.2/user-manuals/workloadspread"}},c={},p=[{value:"Example",id:"example",level:2},{value:"Create SidecarSet",id:"create-sidecarset",level:3},{value:"Create a Pod",id:"create-a-pod",level:3},{value:"update sidecar container Image",id:"update-sidecar-container-image",level:3},{value:"SidecarSet features",id:"sidecarset-features",level:2},{value:"sidecar container injection",id:"sidecar-container-injection",level:3},{value:"injection pause",id:"injection-pause",level:4},{value:"imagePullSecrets",id:"imagepullsecrets",level:4},{value:"sidecarset update strategy",id:"sidecarset-update-strategy",level:3},{value:"partition",id:"partition",level:4},{value:"MaxUnavailable",id:"maxunavailable",level:4},{value:"Pause",id:"pause",level:4},{value:"Selector",id:"selector",level:4},{value:"sidecarset update order",id:"sidecarset-update-order",level:3},{value:"scatter",id:"scatter",level:4},{value:"Hot Upgrade Sidecar",id:"hot-upgrade-sidecar",level:3},{value:"Inject Containers",id:"inject-containers",level:4},{value:"Hot Upgrade",id:"hot-upgrade",level:4},{value:"Migration Demo",id:"migration-demo",level:4},{value:"SidecarSet Status",id:"sidecarset-status",level:3}],u={toc:p};function m(e){var t=e.components,o=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This controller leverages the admission webhook to automatically\ninject a sidecar container for every selected Pod when the Pod is created. The Sidecar\ninjection process is similar to the automatic sidecar injection mechanism used in\n",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/docs/setup/kubernetes/additional-setup/sidecar-injection/"},"istio"),"."),(0,r.kt)("p",null,"Besides injection during Pod creation, SidecarSet controller also provides\nadditional capabilities such as in-place Sidecar container image upgrade, mounting Sidecar volumes, etc.\nBasically, SidecarSet decouples the Sidecar container lifecycle\nmanagement from the main container lifecycle management."),(0,r.kt)("p",null,"The SidecarSet is preferable for managing stateless sidecar containers such as\nmonitoring tools or operation agents."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"create-sidecarset"},"Create SidecarSet"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sidecarset.yaml")," file below describes a SidecarSet that contains a sidecar container named ",(0,r.kt)("inlineCode",{parentName:"p"},"sidecar1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# sidecarset.yaml\napiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: test-sidecarset\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  updateStrategy:\n    type: RollingUpdate\n    maxUnavailable: 1\n  containers:\n  - name: sidecar1\n    image: centos:6.7\n    command: ["sleep", "999d"] # do nothing at all\n    volumeMounts:\n    - name: log-volume\n      mountPath: /var/log\n  volumes: # this field will be merged into pod.spec.volumes\n  - name: log-volume\n    emptyDir: {}\n')),(0,r.kt)("p",null,"Create a SidecarSet based on the YAML file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f sidecarset.yaml\n")),(0,r.kt)("h3",{id:"create-a-pod"},"Create a Pod"),(0,r.kt)("p",null,"Create a pod that matches the sidecarset's selector:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    app: nginx # matches the SidecarSet's selector\n  name: test-pod\nspec:\n  containers:\n  - name: app\n    image: nginx:1.15.1\n")),(0,r.kt)("p",null,"Create this pod and now you will find it's injected with ",(0,r.kt)("inlineCode",{parentName:"p"},"sidecar1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod\nNAME       READY   STATUS    RESTARTS   AGE\ntest-pod   2/2     Running   0          118s\n")),(0,r.kt)("p",null,"In the meantime, the SidecarSet status updated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get sidecarset test-sidecarset -o yaml | grep -A4 status\nstatus:\n  matchedPods: 1\n  observedGeneration: 1\n  readyPods: 1\n  updatedPods: 1\n")),(0,r.kt)("h3",{id:"update-sidecar-container-image"},"update sidecar container Image"),(0,r.kt)("p",null,"update sidecarSet's sidecar container image=centos:7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl edit sidecarsets test-sidecarset\n\n# sidecarset.yaml\napiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: test-sidecarset\nspec:\n  containers:\n    - name: sidecar1\n      image: centos:7\n")),(0,r.kt)("p",null,"The Sidecar container in the pod has been updated to centos:7, and the pod and other containers have not been restarted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get pods |grep test-pod\ntest-pod                            2/2     Running   1          7m34s\n\n$ kubectl get pods test-pod -o yaml |grep \'image: centos\'\n    image: centos:7\n\n$ kubectl describe pods test-pod\nEvents:\n  Type    Reason     Age                 From               Message\n  ----    ------     ----                ----               -------\n  Normal  Killing    5m47s               kubelet            Container sidecar1 definition changed, will be restarted\n  Normal  Pulling    5m17s               kubelet            Pulling image "centos:7"\n  Normal  Created    5m5s (x2 over 12m)  kubelet            Created container sidecar1\n  Normal  Started    5m5s (x2 over 12m)  kubelet            Started container sidecar1\n  Normal  Pulled     5m5s                kubelet            Successfully pulled image "centos:7"\n')),(0,r.kt)("h2",{id:"sidecarset-features"},"SidecarSet features"),(0,r.kt)("p",null,"A sample SidecarSet yaml looks like following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  selector:\n    matchLabels:\n      app: sample\n  containers:\n  - name: nginx\n    image: nginx:alpine\n  initContainers:\n  - name: init-container\n    image: busybox:latest\n    command: [ "/bin/sh", "-c", "sleep 5 && echo \'init container success\'" ]\n  updateStrategy:\n    type: RollingUpdate\n  namespace: ns-1\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"spec.selector Select the POD that needs to be injected and updated by Label. MatchLabels and MatchExpressions are supported. Please refer to the details: ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/")),(0,r.kt)("li",{parentName:"ul"},"spec.containers Define pod.spec.containers","[x]"," that need to be injected and updated, supporting the full K8S Container field. Please refer to the details: ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/containers/"},"https://kubernetes.io/docs/concepts/containers/")),(0,r.kt)("li",{parentName:"ul"},"spec.initContainers Define the pod.spec.initContainers","[x]"," you need to inject, supporting the full K8S InitContainer field. Please refer to the details\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/pods/init-containers/"},"https://kubernetes.io/docs/concepts/workloads/pods/init-containers/"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We will inject those containers by their name in ascending order"),(0,r.kt)("li",{parentName:"ul"},"InitContainers only support injection and do not support POD in-place update"))),(0,r.kt)("li",{parentName:"ul"},"spec.updateStrategy sidecarSet update strategy, type indicates the upgrade method:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"NotUpdate No updates, in this type only inject sidecar containers in pod"),(0,r.kt)("li",{parentName:"ul"},"RollingUpdate Injection and rolling update, which contains a rich update strategy, will be described in more detail later"))),(0,r.kt)("li",{parentName:"ul"},"spec.namespace By default, sidecarset is cluster scope in k8s, that is, for all namespaces (except kube-system, kube-public). When spec.namespace field set, it only applies to pods of that namespace")),(0,r.kt)("h3",{id:"sidecar-container-injection"},"sidecar container injection"),(0,r.kt)("p",null,"The injection of sidecar containers happens at Pod creation time and only Pod spec is updated. The workload template spec will not be updated.\nIn addition to the default K8s Container field, the following fields have been extended to injection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  selector:\n    matchLabels:\n      app: sample\n  containers:\n    # default K8s Container fields\n  - name: nginx\n    image: nginx:alpine\n    volumeMounts:\n    - mountPath: /nginx/conf\n      name: nginx.conf\n    # extended sidecar container fields\n    podInjectPolicy: BeforeAppContainer\n    shareVolumePolicy:\n      type: disabled | enabled\n    transferEnv:\n    - sourceContainerName: main\n      envName: PROXY_IP    \n  volumes:\n  - Name: nginx.conf\n    hostPath: /data/nginx/conf\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"podInjectPolicy Define where Containers are injected into pod.spec.containers",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"BeforeAppContainer(default) Inject into the front of the original pod containers"),(0,r.kt)("li",{parentName:"ul"},"AfterAppContainer Inject into the backend of the original pod containers"))),(0,r.kt)("li",{parentName:"ul"},"data volume sharing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Share specific volumes: Use spec.volumes to define the volumes needed by Sidecar itself. See details\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/volumes/"},"https://kubernetes.io/docs/concepts/storage/volumes/")),(0,r.kt)("li",{parentName:"ul"},"Share pod containers volumes: If ShareVolumePolicy.type is enabled, the sidecar container will share the other container's VolumeMounts in the pod(don't contains the injected sidecar container)"))),(0,r.kt)("li",{parentName:"ul"},"Environment variable sharing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Environment variables can be fetched from another container through spec.containers","[x]",".transferenv, and the environment variable named envName from the container named sourceContainerName is copied to this container")))),(0,r.kt)("h4",{id:"injection-pause"},"injection pause"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v0.10.0"),(0,r.kt)("p",null,"For existing SidecarSets\uff0cusers can pause sidecar injection by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.injectionStrategy.paused=true"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  ... ...\n  injectionStrategy:\n    paused: true\n")),(0,r.kt)("p",null,"This feature only works on the newly-created Pods, and has no impact on the sidecar containers that have been injected."),(0,r.kt)("h4",{id:"imagepullsecrets"},"imagePullSecrets"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v0.10.0"),(0,r.kt)("p",null,"Users can use private images in SidecarSet by configuring ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/"},"spec.imagePullSecrets"),".\nSidecarSet will inject it in to Pods at injection stage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  ... ....\n  imagePullSecrets:\n  - name: my-secret\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Users must ensure that the corresponding Secrets have already existed in the namespaces where Pods need to pull the private images. Otherwise, pulling private images will not succeed."),(0,r.kt)("h3",{id:"sidecarset-update-strategy"},"sidecarset update strategy"),(0,r.kt)("p",null,"Sidecarset not only supports the in-place update of Sidecar container, but also provides a very rich upgrade strategy."),(0,r.kt)("h4",{id:"partition"},"partition"),(0,r.kt)("p",null,"Partition is the ",(0,r.kt)("strong",{parentName:"p"},"desired number or percent of Pods in old revisions"),", defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),".  This field does ",(0,r.kt)("strong",{parentName:"p"},"NOT")," imply any update order."),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"partition")," is set during update:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If it is a number: ",(0,r.kt)("inlineCode",{parentName:"li"},"(replicas - partition)")," number of pods will be updated with the new version."),(0,r.kt)("li",{parentName:"ul"},"If it is a percent: ",(0,r.kt)("inlineCode",{parentName:"li"},"(replicas * (100% - partition))")," number of pods will be updated with the new version.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    partition: 90\n")),(0,r.kt)("p",null,"Assuming that the number of PODs associated with this Sidecarset is 100, this upgrade will only upgrade 10 pods to latest and keep 90 pods old versions."),(0,r.kt)("h4",{id:"maxunavailable"},"MaxUnavailable"),(0,r.kt)("p",null,"MaxUnavailable is the maximum number of PODs that are unavailable at the same time that is guaranteed during the Posting process. The default value is 1."),(0,r.kt)("p",null,"The user can set it to either an absolute value or a percentage (the percentage is calculated by the controller as the cardinality of the selected pod to calculate the absolute value behind one)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    maxUnavailable: 20%\n")),(0,r.kt)("p",null,"Note that maxUnavailable and partition are not necessarily related. For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When {matched pod}=100,partition=50,maxUnavailable=10, the controller will update 50 PODS to the new version, and only 10 PODS will be updated at the same time, until the 50 updated is completed."),(0,r.kt)("li",{parentName:"ul"},"When {matched pod}=100,partition=80,maxUnavailable=30, the controller will update 20 PODS to the new version, because the maxUnavailable number is 30, so the 20 PODS will be updated simultaneously.")),(0,r.kt)("h4",{id:"pause"},"Pause"),(0,r.kt)("p",null,"A user can pause the release by setting pause to true, and the injection capability will remain for newly created, expanded PODS, while updated PODS will remain the updated version, and those that have not been updated will be paused."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    paused: true\n")),(0,r.kt)("h4",{id:"selector"},"Selector"),(0,r.kt)("p",null,"For businesses that have Canary update requirements, this can be done through Strategy.selector filed. First: take the canary updated pods on fixed labels ","[canary. Release]"," = true, second fix the strategy.selector.MatchLabels to select the pod"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    selector:\n      matchLabels:\n        canary.release: true\n")),(0,r.kt)("h3",{id:"sidecarset-update-order"},"sidecarset update order"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The PODs of upgrade is sorted by default to ensure the same order of multiple upgrades"),(0,r.kt)("li",{parentName:"ul"},"The default priority is (the smaller the higher the priority)\uff1a unscheduled < scheduled, pending < unknown < running, not-ready < ready, newer pods < older pods"),(0,r.kt)("li",{parentName:"ul"},"scatter order")),(0,r.kt)("h4",{id:"scatter"},"scatter"),(0,r.kt)("p",null,"The scatter policy allows users to define the scatters of PODs that conform to certain tags throughout the publishing process.\nFor example, if a SidecarSet manages 10 PODS, if there are 3 PODS below with the tag foo=bar, and the user sets this tag in the shatter policy, then these 3 PODS will be published in the 1st, 6th, and 10th positions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    scatterStrategy:\n    - key: foo\n      value: bar\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: If you use Scatter, it is recommended to set only a pair of key-values for scatter. It will be easier to understand.")),(0,r.kt)("h3",{id:"hot-upgrade-sidecar"},"Hot Upgrade Sidecar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v0.9.0"),(0,r.kt)("p",null,"SidecarSet's in-place upgrade will stop the container of old version first and then create the container of new version. Such method is more suitable for sidecar containers that cannot affects service availability, e.g. logging collector."),(0,r.kt)("p",null,"But for many proxy or runtime sidecar containers, e.g. Istio Envoy, this upgrade method is problematic. Envoy, as a proxy container in the Pod, proxies all the traffic, and if restarted directly, the availability of service is affected. Complex grace termination and coordination is required if one need to upgrade envoy sidecar independently of the application container. So we provide a new solution for such sidecar container upgrade."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: hotupgrade-sidecarset\nspec:\n  selector:\n    matchLabels:\n      app: hotupgrade\n  containers:\n  - name: sidecar\n    image: openkruise/hotupgrade-sample:sidecarv1\n    imagePullPolicy: Always\n    lifecycle:\n      postStart:\n        exec:\n          command:\n          - /bin/sh\n          - /migrate.sh\n    upgradeStrategy:\n      upgradeType: HotUpgrade\n      hotUpgradeEmptyImage: openkruise/hotupgrade-sample:empty\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"upgradeType: HotUpgrade indicates hot upgrade for stateful sidecar container."),(0,r.kt)("li",{parentName:"ul"},"hotUpgradeEmptyImage: when upgradeType=HotUpgrade, user needs to provide an empty container for hot upgrades. hotUpgradeEmptyImage has the same configuration as the sidecar container, for example: command, lifecycle, probe, etc, but it doesn't do anything.        "),(0,r.kt)("li",{parentName:"ul"},"lifecycle.postStart: State Migration, the process completes the state migration of stateful container, which needs to be provided by the sidecar image developer.")),(0,r.kt)("p",null,"Hot upgrade consists of the following two processes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"inject hot upgrade sidecar containers"),(0,r.kt)("li",{parentName:"ul"},"in-place hot upgrade sidecar container")),(0,r.kt)("h4",{id:"inject-containers"},"Inject Containers"),(0,r.kt)("p",null,"When the sidecar container upgradeStrategy=HotUpgrade, the SidecarSet Webhook will inject two containers into the Pod:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"{sidecarContainer.name}-1: as shown in the figure below: envoy-1, the container run the actual working sidecar container, such as envoy:1.16.0"),(0,r.kt)("li",{parentName:"ol"},"{sidecarContainer.name}-2: as shown in the figure below: envoy-2, the container run the hot upgrade empty container, and it doesn't have to deal with any real logic, as long as it stays in place, such as empty:1.0")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sidecarset hotupgrade_injection",src:a(9010).Z,width:"677",height:"405"})),(0,r.kt)("h4",{id:"hot-upgrade"},"Hot Upgrade"),(0,r.kt)("p",null,"The SidecarSet Controller breaks down the hot upgrade pgrocess of the sidecar container into three steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Upgrade: upgrade the empty container to the new version of the sidecar container, such as envoy-2.Image = envoy:1.17.0"),(0,r.kt)("li",{parentName:"ol"},"Migration: the process completes the state migration of stateful container, which needs to be provided by the sidecar image developer. PostStartHook completes the migration of the above process.\n(",(0,r.kt)("strong",{parentName:"li"},"Note: PostStartHook must block during the migration, and exit when migration complete."),")"),(0,r.kt)("li",{parentName:"ol"},"Reset: the step resets the old version sidecar container into empty container, such as envoy-1.Image = empty:1.0")),(0,r.kt)("p",null,"The above is the complete hot upgrade process. If a Pod needs to be hot upgraded several times, the above three steps can be repeated."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sidecarset hotupgrade",src:a(2040).Z,width:"653",height:"432"})),(0,r.kt)("h4",{id:"migration-demo"},"Migration Demo"),(0,r.kt)("p",null,"The SidecarSet hot upgrade mechanism not only completes the switching between mesh containers\uff0cbut also provides a coordination mechanism for old and new versions. Yet this is only the first step of a long journey. The mesh container also needs to provide a PostStartHook script to complete the hot migration of the mesh service itself (the above Migration process), such as Envoy hot restart and Mosn lossless restart.\nTo facilitate a better understanding of the Migration process, a migration demo is provided below the kruise repository: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkruise/samples/tree/master/hotupgrade"},"Migration Demo")),(0,r.kt)("p",null,"For design documentation, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/blob/master/docs/proposals/20210305-sidecarset-hotupgrade.md"},"proposals sidecarset hot upgrade")),(0,r.kt)("p",null,"Currently known cases that utilize the SidecarSet hot upgrade mechanism:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://help.aliyun.com/document_detail/193804.html"},"ALIYUN ASM")," implements lossless upgrade of Data Plane in Service Mesh.")),(0,r.kt)("h3",{id:"sidecarset-status"},"SidecarSet Status"),(0,r.kt)("p",null,"When upgrading sidecar containers with a SidecarSet, you can observe the process of upgrading through SidecarSet.Status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# kubectl describe sidecarsets sidecarset-example\nName:         sidecarset-example\nKind:         SidecarSet\nStatus:\n  Matched Pods:         10  # The number of PODs injected and managed by the Sidecarset\n  Updated Pods:         5   # 5 PODs have been updated to the container version in the latest SidecarSet\n  Ready Pods:           8   # Matched Pods pod.status.condition.Ready = true number\n  Updated Ready Pods:   3   # Updated Pods && Ready Pods number\n")))}m.isMDXComponent=!0},2040:function(e,t,a){t.Z=a.p+"assets/images/sidecarset_hotupgrade-8f7325ba1f999667c60bea6d6aec32f9.png"},9010:function(e,t,a){t.Z=a.p+"assets/images/sidecarset_hotupgrade_injection-bc68babcd84165fd3561dd2d4f5f8d9d.png"}}]);