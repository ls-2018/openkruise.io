"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[6292],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7799:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={slug:"openkruise-1.3",title:"OpenKruise v1.3, New Custom Pod Probe Capabilities and Significant Performance Improvements for Large-Scale Clusters",authors:["zmberg"],tags:["release"]},s=void 0,p={permalink:"/blog/openkruise-1.3",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/blog/2022-10-07-release-1.3.md",source:"@site/blog/2022-10-07-release-1.3.md",title:"OpenKruise v1.3, New Custom Pod Probe Capabilities and Significant Performance Improvements for Large-Scale Clusters",description:"We\u2019re pleased to announce the release of OpenKruise 1.3, which is a CNCF Sandbox level project.",date:"2022-10-07T00:00:00.000Z",formattedDate:"October 7, 2022",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:8.495,truncated:!1,authors:[{name:"Mingshan Zhao",title:"Member of OpenKruise",url:"https://github.com/zmberg",imageURL:"https://github.com/zmberg.png",key:"zmberg"}],frontMatter:{slug:"openkruise-1.3",title:"OpenKruise v1.3, New Custom Pod Probe Capabilities and Significant Performance Improvements for Large-Scale Clusters",authors:["zmberg"],tags:["release"]},prevItem:{title:"OpenKruise V1.4 Release, New Job Sidecar Terminator Capability",permalink:"/blog/openkruise-1.4"},nextItem:{title:"OpenKruise v1.2, new PersistentPodState feature to achieve IP retention",permalink:"/blog/openkruise-1.2"}},c={authorsImageUrls:[void 0]},d=[{value:"What&#39;s new?",id:"whats-new",level:2},{value:"1. New CRD and Controller: PodProbeMarker",id:"1-new-crd-and-controller-podprobemarker",level:3},{value:"2. Performance optimization: significant performance improvements for large-scale clusters",id:"2-performance-optimization-significant-performance-improvements-for-large-scale-clusters",level:3},{value:"3. SidecarSet support inject specific historical version",id:"3-sidecarset-support-inject-specific-historical-version",level:3},{value:"select revision via ControllerRevision name",id:"select-revision-via-controllerrevision-name",level:4},{value:"select revision via custom version label",id:"select-revision-via-custom-version-label",level:4},{value:"4. SidecarSet support inject pod annotations",id:"4-sidecarset-support-inject-pod-annotations",level:3},{value:"5. Advanced DaemonSet support pre-downloading image for update",id:"5-advanced-daemonset-support-pre-downloading-image-for-update",level:3},{value:"6. CloneSet Scaling with PreparingDelete",id:"6-cloneset-scaling-with-preparingdelete",level:3},{value:"7. Advanced CronJob Time zones",id:"7-advanced-cronjob-time-zones",level:3},{value:"8. Other changes",id:"8-other-changes",level:3},{value:"Get Involved",id:"get-involved",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We\u2019re pleased to announce the release of OpenKruise 1.3, which is a CNCF Sandbox level project."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://openkruise.io"},"OpenKruise")," is an extended component suite for Kubernetes, which mainly focuses on application automations, such as deployment, upgrade, ops and availability protection. Mostly features provided by OpenKruise are built primarily based on CRD extensions. They can work in pure Kubernetes clusters without any other dependences."),(0,o.kt)("h2",{id:"whats-new"},"What's new?"),(0,o.kt)("p",null,"In release v1.3, OpenKruise provides a new CRD named ",(0,o.kt)("inlineCode",{parentName:"p"},"PodProbeMarker"),", improves its performance in large-scale clusters, Advanced DaemonSet support pre-download image,\nand some new features have been added to CloneSet, WorkloadSpread, AdvancedCronJob, SidecarSet etc."),(0,o.kt)("p",null,"Here we are going to introduce some changes of it."),(0,o.kt)("h3",{id:"1-new-crd-and-controller-podprobemarker"},"1. New CRD and Controller: PodProbeMarker"),(0,o.kt)("p",null,"Kubernetes provides three Pod lifecycle management:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Readiness Probe")," Used to determine whether the business container is ready to respond to user requests. If the probe fails, the Pod will be removed from Service Endpoints."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Liveness Probe")," Used to determine the health status of the container. If the probe fails, the kubelet will restart the container."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Startup Probe")," Used to know when a container application has started. If such a probe is configured, it disables liveness and readiness checks until it succeeds.")),(0,o.kt)("p",null,"So the Probe capabilities provided in Kubernetes have defined specific semantics and related behaviors.\n",(0,o.kt)("strong",{parentName:"p"},"In addition, there is actually a need to customize Probe semantics and related behaviors"),", such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GameServer defines Idle Probe to determine whether the Pod currently has a game match"),", if not, from the perspective of cost optimization, the Pod can be scaled down."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"K8S Operator defines the main-secondary probe to determine the role of the current Pod (main or secondary)"),". When upgrading, the secondary can be upgraded first,\nso as to achieve the behavior of selecting the main only once during the upgrade process, reducing the service interruption time during the upgrade process.")),(0,o.kt)("p",null,"OpenKruise provides the ability to customize the Probe and return the result to the Pod Status, and the user can decide the follow-up behavior based on the probe result."),(0,o.kt)("p",null,"An object of PodProbeMarker may look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: PodProbeMarker\nmetadata:\n  name: game-server-probe\n  namespace: ns\nspec:\n  selector:\n    matchLabels:\n    app: game-server\n  probes:\n  - name: Idle\n    containerName: game-server\n    probe:\n      exec: /home/game/idle.sh\n      initialDelaySeconds: 10\n      timeoutSeconds: 3\n      periodSeconds: 10\n      successThreshold: 1\n      failureThreshold: 3\n    markerPolicy:\n    - state: Succeeded\n      labels:\n        gameserver-idle: 'true'\n      annotations:\n        controller.kubernetes.io/pod-deletion-cost: '-10'\n    - state: Failed\n      labels:\n        gameserver-idle: 'false'\n      annotations:\n        controller.kubernetes.io/pod-deletion-cost: '10'\n    podConditionType: game.io/idle\n")),(0,o.kt)("p",null,"PodProbeMarker results can be viewed at Pod Object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    app: game-server\n    gameserver-idle: 'true'\n  annotations:\n    controller.kubernetes.io/pod-deletion-cost: '-10'\n  name: game-server-58cb9f5688-7sbd8\n  namespace: ns\nspec:\n  ...\nstatus:\n  conditions:\n    # podConditionType\n  - type: game.io/idle\n    # Probe State 'Succeeded' indicates 'True', and 'Failed' indicates 'False'\n    status: \"True\"\n    lastProbeTime: \"2022-09-09T07:13:04Z\"\n    lastTransitionTime: \"2022-09-09T07:13:04Z\"\n    # If the probe fails to execute, the message is stderr\n    message: \"\"\n")),(0,o.kt)("h3",{id:"2-performance-optimization-significant-performance-improvements-for-large-scale-clusters"},"2. Performance optimization: significant performance improvements for large-scale clusters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openkruise/kruise/pull/1026"},"#1026")," The introduction of a delayed queueing mechanism significantly optimizes the CloneSet controller work queue buildup problem when kruise-manager is pulled up in large-scale application clusters,\nideally reducing initialization time by more than 80%."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openkruise/kruise/pull/1027"},"#1027")," Optimize PodUnavailableBudget controller Event Handler logic to reduce the number of irrelevant Pods in the queue."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openkruise/kruise/pull/1011"},"#1011")," The caching mechanism optimizes the CPU and Memory consumption of Advanced DaemonSet's repetitive simulation of Pod scheduling computations in large-scale clusters."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openkruise/kruise/pull/1015"},"#1015"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/openkruise/kruise/pull/1068"},"#1068")," Significantly reduce runtime memory consumption in large clusters. Complete the Disable DeepCopy feature started in v1.1, and reduce the conversion consumption of expressions type label selector.")),(0,o.kt)("h3",{id:"3-sidecarset-support-inject-specific-historical-version"},"3. SidecarSet support inject specific historical version"),(0,o.kt)("p",null,"SidecarSet will record historical revision of some fields such as ",(0,o.kt)("inlineCode",{parentName:"p"},"containers"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"volumes"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"initContainers"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"imagePullSecrets")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"patchPodMetadata")," via ControllerRevision.\n",(0,o.kt)("strong",{parentName:"p"},"Based on this feature, you can easily select a specific historical revision to inject when creating Pods, rather than always inject the latest revision of sidecar.")),(0,o.kt)("p",null,"SidecarSet records ControllerRevision in the same namespace as Kruise Manager. You can execute ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get controllerrevisions -n kruise-system -l kruise.io/sidecarset-name=<your-sidecarset-name>")," to list the ControllerRevisions of your SidecarSet.\nMoreover, the ControllerRevision name of current SidecarSet revision is shown in ",(0,o.kt)("inlineCode",{parentName:"p"},"status.latestRevision")," field, so you can record it very easily."),(0,o.kt)("p",null,"There are two configuration methods as follows:"),(0,o.kt)("h4",{id:"select-revision-via-controllerrevision-name"},"select revision via ControllerRevision name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  ...\n  updateStrategy:\n    partition: 90%\n  injectionStrategy:\n    revisionName: <specific-controllerrevision-name>\n")),(0,o.kt)("h4",{id:"select-revision-via-custom-version-label"},"select revision via custom version label"),(0,o.kt)("p",null,"You can add or update the label ",(0,o.kt)("inlineCode",{parentName:"p"},"apps.kruise.io/sidecarset-custom-version=<your-version-id>")," to SidecarSet when creating or publishing SidecarSet, to mark each historical revision.\nSidecarSet will bring this label down to the corresponding ControllerRevision object, and you can easily use the ",(0,o.kt)("inlineCode",{parentName:"p"},"<your-version-id>")," to describe which historical revision you want to inject."),(0,o.kt)("p",null,"Assume that you are publishing ",(0,o.kt)("inlineCode",{parentName:"p"},"version-2")," in canary way (you wish only 10% Pods will be upgraded), and you want to inject the stable ",(0,o.kt)("inlineCode",{parentName:"p"},"version-1")," to newly-created Pods to reduce the risk of the canary publishing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\n  labels:\n    apps.kruise.io/sidecarset-custom-version: example/version-2\nspec:\n  ...\n  updateStrategy:\n    partition: 90%\n  injectionStrategy:\n    customVersion: example/version-1\n")),(0,o.kt)("h3",{id:"4-sidecarset-support-inject-pod-annotations"},"4. SidecarSet support inject pod annotations"),(0,o.kt)("p",null,"SidecarSet support inject pod annotations, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nspec:\n  containers:\n    ...\n  patchPodMetadata:\n  - annotations:\n      oom-score: \'{"log-agent": 1}\'\n      custom.example.com/sidecar-configuration: \'{"command": "/home/admin/bin/start.sh", "log-level": "3"}\'\n    patchPolicy: MergePatchJson\n  - annotations:\n    apps.kruise.io/container-launch-priority: Ordered\n  patchPolicy: Overwrite | Retain\n')),(0,o.kt)("p",null,"patchPolicy is the injected policy, as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Retain:")," By default, if annotation","[key]","=value exists in the Pod, the original value of the Pod will be retained. Inject annotations","[key]","=value2 only if annotation","[key]"," does not exist in the Pod."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Overwrite:")," Corresponding to Retain, when annotation","[key]","=value exists in the Pod, it will be overwritten value2."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MergePatchJson:")," Corresponding to Overwrite, the annotations value is a json string. If the annotations","[key]"," does not exist in the Pod, it will be injected directly. If it exists, do a json value merge.\nFor example: annotations","[oom-score]","='{\"main\": 2}' exists in the Pod, after injection, the value json is merged into annotations","[oom-score]",'=\'{"log-agent": 1, "main": 2}\'.')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," When the patchPolicy is Overwrite and MergePatchJson, the annotations can be updated synchronously when the SidecarSet in-place update the Sidecar Container.\nHowever, if only the annotations are modified, it will not take effect. It must be in-place update together with the sidecar container image.\nWhen patchPolicy is Retain, the annotations will not be updated when the SidecarSet in-place update the Sidecar Container."),(0,o.kt)("p",null,"According to the above configuration, when the sidecarSet is injected into the sidecar container, it will inject Pod annotations synchronously, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  annotations:\n    apps.kruise.io/container-launch-priority: Ordered\n    oom-score: \'{"log-agent": 1, "main": 2}\'\n    custom.example.com/sidecar-configuration: \'{"command": "/home/admin/bin/start.sh", "log-level": "3"}\'\nname: test-pod\nspec:\n  containers:\n    ...\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," SidecarSet should not modify any configuration outside the sidecar container for security consideration, so if you want to use this capability, you need to first configure SidecarSet_PatchPodMetadata_WhiteList whitelist\nor turn off whitelist checks via Feature-gate SidecarSetPatchPodMetadataDefaultsAllowed=true."),(0,o.kt)("h3",{id:"5-advanced-daemonset-support-pre-downloading-image-for-update"},"5. Advanced DaemonSet support pre-downloading image for update"),(0,o.kt)("p",null,"If you have enabled the ",(0,o.kt)("inlineCode",{parentName:"p"},"PreDownloadImageForDaemonSetUpdate")," feature-gate,\nDaemonSet controller will automatically pre-download the image you want to update to the nodes of all old Pods.\nIt is quite useful to accelerate the progress of applications upgrade."),(0,o.kt)("p",null,"The parallelism of each new image pre-downloading by DaemonSet is ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),", which means the image is downloaded on nodes one by one.\nYou can change the parallelism using ",(0,o.kt)("inlineCode",{parentName:"p"},"apps.kruise.io/image-predownload-parallelism")," annotation on DaemonSet according to the capability of image registry,\nfor registries with more bandwidth and P2P image downloading ability, a larger parallelism can speed up the pre-download process."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: DaemonSet\nmetadata:\n  annotations:\n    apps.kruise.io/image-predownload-parallelism: "10"\n')),(0,o.kt)("h3",{id:"6-cloneset-scaling-with-preparingdelete"},"6. CloneSet Scaling with PreparingDelete"),(0,o.kt)("p",null,"CloneSet considers Pods in ",(0,o.kt)("inlineCode",{parentName:"p"},"PreparingDelete")," state as normal by default, which means these Pods will still be calculated in the ",(0,o.kt)("inlineCode",{parentName:"p"},"replicas")," number."),(0,o.kt)("p",null,"In this situation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if you scale down ",(0,o.kt)("inlineCode",{parentName:"li"},"replicas")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"N")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"N-1"),", when the Pod to be deleted is still in ",(0,o.kt)("inlineCode",{parentName:"li"},"PreparingDelete"),", you scale up ",(0,o.kt)("inlineCode",{parentName:"li"},"replicas")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"N"),", the CloneSet will move the Pod back to ",(0,o.kt)("inlineCode",{parentName:"li"},"Normal"),"."),(0,o.kt)("li",{parentName:"ul"},"if you scale down ",(0,o.kt)("inlineCode",{parentName:"li"},"replicas")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"N")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"N-1")," and put a Pod into ",(0,o.kt)("inlineCode",{parentName:"li"},"podsToDelete"),", when the specific Pod is still in ",(0,o.kt)("inlineCode",{parentName:"li"},"PreparingDelete"),", you scale up ",(0,o.kt)("inlineCode",{parentName:"li"},"replicas")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"N"),", the CloneSet will not create a new Pod until the specific Pod goes into terminating."),(0,o.kt)("li",{parentName:"ul"},"if you specificly delete a Pod without ",(0,o.kt)("inlineCode",{parentName:"li"},"replicas")," changed, when the specific Pod is still in ",(0,o.kt)("inlineCode",{parentName:"li"},"PreparingDelete"),", the CloneSet will not create a new Pod until the specific Pod goes into terminating.")),(0,o.kt)("p",null,"Since Kruise v1.3.0, you can put a ",(0,o.kt)("inlineCode",{parentName:"p"},'apps.kruise.io/cloneset-scaling-exclude-preparing-delete: "true"')," label into CloneSet, which indicates Pods in ",(0,o.kt)("inlineCode",{parentName:"p"},"PreparingDelete")," will not be calculated in the ",(0,o.kt)("inlineCode",{parentName:"p"},"replicas")," number."),(0,o.kt)("p",null,"In this situation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if you scale down ",(0,o.kt)("inlineCode",{parentName:"li"},"replicas")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"N")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"N-1"),", when the Pod to be deleted is still in ",(0,o.kt)("inlineCode",{parentName:"li"},"PreparingDelete"),", you scale up ",(0,o.kt)("inlineCode",{parentName:"li"},"replicas")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"N"),", the CloneSet will move the Pod back to ",(0,o.kt)("inlineCode",{parentName:"li"},"Normal"),"."),(0,o.kt)("li",{parentName:"ul"},"if you scale down ",(0,o.kt)("inlineCode",{parentName:"li"},"replicas")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"N")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"N-1")," and put a Pod into ",(0,o.kt)("inlineCode",{parentName:"li"},"podsToDelete"),", even if the specific Pod is still in ",(0,o.kt)("inlineCode",{parentName:"li"},"PreparingDelete"),", you scale up ",(0,o.kt)("inlineCode",{parentName:"li"},"replicas")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"N"),", the CloneSet will create a new Pod immediately."),(0,o.kt)("li",{parentName:"ul"},"if you specificly delete a Pod without ",(0,o.kt)("inlineCode",{parentName:"li"},"replicas")," changed, even if the specific Pod is still in ",(0,o.kt)("inlineCode",{parentName:"li"},"PreparingDelete"),", the CloneSet will create a new Pod immediately.")),(0,o.kt)("h3",{id:"7-advanced-cronjob-time-zones"},"7. Advanced CronJob Time zones"),(0,o.kt)("p",null,"All CronJob schedule: times are based on the timezone of the kruise-controller-manager by default,\nwhich means the timezone set for the kruise-controller-manager container determines the timezone that the cron job controller uses."),(0,o.kt)("p",null,"However, we have introduce a ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.timeZone")," field in v1.3.0.\nYou can set it to the name of a valid time zone name. For example, setting ",(0,o.kt)("inlineCode",{parentName:"p"},'spec.timeZone: "Etc/UTC"')," instructs Kruise to interpret the schedule relative to Coordinated Universal Time."),(0,o.kt)("p",null,"A time zone database from the Go standard library is included in the binaries and used as a fallback in case an external database is not available on the system."),(0,o.kt)("h3",{id:"8-other-changes"},"8. Other changes"),(0,o.kt)("p",null,"For more changes, their authors and commits, you can read the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/releases"},"Github release"),"."),(0,o.kt)("h2",{id:"get-involved"},"Get Involved"),(0,o.kt)("p",null,"Welcome to get involved with OpenKruise by joining us in Github/Slack/DingTalk/WeChat.\nHave something you\u2019d like to broadcast to our community?\nShare your voice at our ",(0,o.kt)("a",{parentName:"p",href:"https://shimo.im/docs/gXqmeQOYBehZ4vqo"},"Bi-weekly community meeting (Chinese)"),", or through the channels below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Join the community on ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.slack.com/channels/openkruise"},"Slack")," (English)."),(0,o.kt)("li",{parentName:"ul"},"Join the community on DingTalk: Search GroupID ",(0,o.kt)("inlineCode",{parentName:"li"},"23330762")," (Chinese)."),(0,o.kt)("li",{parentName:"ul"},"Join the community on WeChat (new): Search User ",(0,o.kt)("inlineCode",{parentName:"li"},"openkruise")," and let the robot invite you (Chinese).")))}m.isMDXComponent=!0}}]);