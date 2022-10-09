"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[2055],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3417:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={title:"InPlace Update"},p=void 0,s={unversionedId:"core-concepts/inplace-update",id:"version-v1.2/core-concepts/inplace-update",title:"InPlace Update",description:"In-place Update is one of the key features provided by OpenKruise.",source:"@site/versioned_docs/version-v1.2/core-concepts/inplace-update.md",sourceDirName:"core-concepts",slug:"/core-concepts/inplace-update",permalink:"/docs/v1.2/core-concepts/inplace-update",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/core-concepts/inplace-update.md",tags:[],version:"v1.2",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1654585589,formattedLastUpdatedAt:"6/7/2022",frontMatter:{title:"InPlace Update"},sidebar:"docs",previous:{title:"Architecture",permalink:"/docs/v1.2/core-concepts/architecture"},next:{title:"CloneSet",permalink:"/docs/v1.2/user-manuals/cloneset"}},c={},d=[{value:"What is in-place update?",id:"what-is-in-place-update",level:2},{value:"Understand <em>InPlaceIfPossible</em>",id:"understand-inplaceifpossible",level:2},{value:"Workflow overview",id:"workflow-overview",level:2},{value:"InPlace update with launch priorities",id:"inplace-update-with-launch-priorities",level:2},{value:"Requirements",id:"requirements",level:2}],u={toc:d};function m(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In-place Update is one of the key features provided by OpenKruise."),(0,o.kt)("p",null,"Workloads that support in-place update:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/user-manuals/cloneset"},"CloneSet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/user-manuals/advancedstatefulset"},"Advanced StatefulSet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/user-manuals/advanceddaemonset"},"Advanced DaemonSet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/user-manuals/advanceddaemonset"},"SidecarSet"))),(0,o.kt)("p",null,"Currently ",(0,o.kt)("inlineCode",{parentName:"p"},"CloneSet"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced StatefulSet")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced DaemonSet")," re-use the same code package ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/tree/master/pkg/util/inplaceupdate"},(0,o.kt)("inlineCode",{parentName:"a"},"./pkg/util/inplaceupdate"))," and have similar behaviours of in-place update. In this article, we would like to introduce the usage and workflow of them."),(0,o.kt)("p",null,"Note that the in-place update workflow of ",(0,o.kt)("inlineCode",{parentName:"p"},"SidecarSet")," is a little different from the other workloads, such as it will not set Pod to not-ready before update. So the things we talk below do not totally go for ",(0,o.kt)("inlineCode",{parentName:"p"},"SidecarSet"),"."),(0,o.kt)("h2",{id:"what-is-in-place-update"},"What is in-place update?"),(0,o.kt)("p",null,"Once we are going to update image in a existing Pod, look at the comparation between ",(0,o.kt)("em",{parentName:"p"},"Recreate")," and ",(0,o.kt)("em",{parentName:"p"},"InPlace")," Update:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:n(3662).Z,width:"2080",height:"1754"})),(0,o.kt)("p",null,"In ",(0,o.kt)("strong",{parentName:"p"},"ReCreate")," way we have to delete the old Pod and create a new Pod:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pod name and uid all changed, because they are totally different Pod objects (such as Deployment update)"),(0,o.kt)("li",{parentName:"ul"},"Or Pod name may not change but uid changed, because they are still different Pod objects, althrough re-use the same name (such as StatefulSet update)"),(0,o.kt)("li",{parentName:"ul"},"Node name of the Pod changed, because the new Pod is almost impossible to be scheduled to the previous node."),(0,o.kt)("li",{parentName:"ul"},"Pod IP changed, because the new Pod is almost impossible to be allocated the previous IP.")),(0,o.kt)("p",null,"But for ",(0,o.kt)("strong",{parentName:"p"},"InPlace")," way we can re-use the Pod object but only modify the fields in it, so that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Avoid additional cost of scheduling, allocating IP, allocating and mounting volumes"),(0,o.kt)("li",{parentName:"ul"},"Faster image pulling, because of we can re-use most of image layers pulled by the old image and only to pull several new layers"),(0,o.kt)("li",{parentName:"ul"},"When a container is in-place updating, the other containers in Pod will not be affected and remain running.")),(0,o.kt)("h2",{id:"understand-inplaceifpossible"},"Understand ",(0,o.kt)("em",{parentName:"h2"},"InPlaceIfPossible")),(0,o.kt)("p",null,"The update type in Kruise workloads is named ",(0,o.kt)("inlineCode",{parentName:"p"},"InPlaceIfPossible"),", which tells Kruise to update Pods in-place as possible, and it should go back to ReCreate Update if impossible."),(0,o.kt)("p",null,"What changes does it consider to be possilble to in-place update?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Update ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.template.metadata.*")," in workloads, such as labels and annotations, Kruise will only update the metadata to existing Pods without recreate them."),(0,o.kt)("li",{parentName:"ol"},"Update ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.template.spec.containers[x].image")," in workloads, Kruise will in-place update the container image in Pods without recreate them."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Since Kruise v1.0 (including v1.0 alpha/beta)"),", update ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.template.metadata.labels/annotations")," and there exists container env from the changed labels/annotations, Kruise will in-place update them to renew the env value in containers.")),(0,o.kt)("p",null,"Otherwise, the changes to other fields such as ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.template.spec.containers[x].env")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.template.spec.containers[x].resources")," will go back to ReCreate Update."),(0,o.kt)("p",null,"Take the CloneSet YAML below as an example:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Modify ",(0,o.kt)("inlineCode",{parentName:"li"},"app-image:v1")," image, will trigger in-place update."),(0,o.kt)("li",{parentName:"ol"},"Modify the value of ",(0,o.kt)("inlineCode",{parentName:"li"},"app-config")," in annotations, will trigger in-place update (Read the ",(0,o.kt)("a",{parentName:"li",href:"#requirements"},"Requirements")," below)."),(0,o.kt)("li",{parentName:"ol"},"Modify the two fields above together, will tigger in-place update both image and environment."),(0,o.kt)("li",{parentName:"ol"},"Directly modify the value of ",(0,o.kt)("inlineCode",{parentName:"li"},"APP_NAME")," in env or add a new env, will trigger recreate update.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nmetadata:\n  ...\nspec:\n  replicas: 1\n  template:\n    metadata:\n      annotations:\n        app-config: \"... the real env value ...\"\n    spec:\n      containers:\n      - name: app\n        image: app-image:v1\n        env:\n        - name: APP_CONFIG\n          valueFrom:\n            fieldRef:\n              fieldPath: metadata.annotations['app-config']\n        - name: APP_NAME\n          value: xxx\n  updateStrategy:\n    type: InPlaceIfPossible\n")),(0,o.kt)("h2",{id:"workflow-overview"},"Workflow overview"),(0,o.kt)("p",null,"You can see the whole workflow of in-place update below (",(0,o.kt)("em",{parentName:"p"},"you may need to right click and open it in a new tab"),"):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:n(7654).Z,width:"3654",height:"1778"})),(0,o.kt)("h2",{id:"inplace-update-with-launch-priorities"},"InPlace update with launch priorities"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v1.1.0"),(0,o.kt)("p",null,"When you in-place update multiple containers at once and the containers have different ",(0,o.kt)("a",{parentName:"p",href:"/docs/user-manuals/containerlaunchpriority"},"launch priorities"),",\nKruise will update the containers by order according to the priorities."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For pods without container launch priorities, no guarantees of the execution order during in-place update multiple containers."),(0,o.kt)("li",{parentName:"ul"},"For pods with container launch priorities:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"keep execution order during in-place update multiple containers with different priorities."),(0,o.kt)("li",{parentName:"ul"},"no guarantees of the execution order during in-place update multiple containers with the same priority.")))),(0,o.kt)("p",null,"For example, we have the CloneSet that includes two containers with different priorities:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nmetadata:\n  ...\nspec:\n  replicas: 1\n  template:\n    metadata:\n      annotations:\n        app-config: "... config v1 ..."\n    spec:\n      containers:\n      - name: sidecar\n        env:\n        - name: KRUISE_CONTAINER_PRIORITY\n          value: "10"\n        - name: APP_CONFIG\n          valueFrom:\n            fieldRef:\n              fieldPath: metadata.annotations[\'app-config\']\n      - name: main\n        image: main-image:v1\n  updateStrategy:\n    type: InPlaceIfPossible\n')),(0,o.kt)("p",null,"When we update the CloneSet to change ",(0,o.kt)("inlineCode",{parentName:"p"},"app-config")," annotation and image of main container, which means both sidecar and main containers need to update,\nKruise will firstly in-place update pods that recreates sidecar container with the new env from annotation."),(0,o.kt)("p",null,"At this moment, we can find the ",(0,o.kt)("inlineCode",{parentName:"p"},"apps.kruise.io/inplace-update-state")," annotation in updated Pod and see its value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "revision": "{CLONESET_NAME}-{HASH}",         // the target revision name of this in-place update\n  "updateTimestamp": "2022-03-22T09:06:55Z",    // the start time of this whole update\n  "nextContainerImages": {"main": "main-image:v2"},                // the next containers that should update images\n  // "nextContainerRefMetadata": {...},                            // the next containers that should update env from annotations/labels\n  "preCheckBeforeNext": {"containersRequiredReady": ["sidecar"]},  // the pre-check must be satisfied before the next containers can update\n  "containerBatchesRecord":[\n    {"timestamp":"2022-03-22T09:06:55Z","containers":["sidecar"]}  // the first batch of containers that have updated (it just means the spec of containers has updated, such as images in pod.spec.container or annotaions/labels, but dosn\'t mean the real containers on node have been updated completely)\n  ]\n}\n')),(0,o.kt)("p",null,"When the sidecar container has been updated successfully, Kruise will update the next main container. Finally, you will find the ",(0,o.kt)("inlineCode",{parentName:"p"},"apps.kruise.io/inplace-update-state")," annotation looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "revision": "{CLONESET_NAME}-{HASH}",\n  "updateTimestamp": "2022-03-22T09:06:55Z",\n  "lastContainerStatuses":{"main":{"imageID":"THE IMAGE ID OF OLD MAIN CONTAINER"}},\n  "containerBatchesRecord":[\n    {"timestamp":"2022-03-22T09:06:55Z","containers":["sidecar"]},\n    {"timestamp":"2022-03-22T09:07:20Z","containers":["main"]}\n  ]\n}\n')),(0,o.kt)("p",null,"Usually, users only have to care about the ",(0,o.kt)("inlineCode",{parentName:"p"},"containerBatchesRecord")," to make sure the containers are updated in different batches. If the Pod is blocking during in-place update, you should check the ",(0,o.kt)("inlineCode",{parentName:"p"},"nextContainerImages/nextContainerRefMetadata")," and see if the previous containers in ",(0,o.kt)("inlineCode",{parentName:"p"},"preCheckBeforeNext")," have been updated successfully and ready."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"To use InPlace Update for env from metadata, you have to enable ",(0,o.kt)("inlineCode",{parentName:"p"},"kruise-daemon")," (",(0,o.kt)("em",{parentName:"p"},"defaults to be enabled"),") and ",(0,o.kt)("inlineCode",{parentName:"p"},"InPlaceUpdateEnvFromMetadata")," feature-gate when install or upgrade Kruise chart. "),(0,o.kt)("p",null,"Note that if you have some nodes of virtual-kubelet type, kruise-daemon may not work on them and in-place update for env from metadata will not be executed."))}m.isMDXComponent=!0},3662:function(e,t,n){t.Z=n.p+"assets/images/inplace-update-comparation-fc948df195e332f578d4967c34b0c3d3.png"},7654:function(e,t,n){t.Z=n.p+"assets/images/inplace-update-workflow-7b4d4bb7cfb4e72882f2a6bb76f422f1.png"}}]);