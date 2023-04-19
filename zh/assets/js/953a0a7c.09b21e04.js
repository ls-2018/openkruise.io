"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[4224],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=d(a),k=r,c=m["".concat(p,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(c,i(i({ref:e},s),{},{components:a})):n.createElement(c,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5193:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={},p="API Specifications",d={unversionedId:"user-manuals/api-specifications",id:"user-manuals/api-specifications",title:"API Specifications",description:"A basic example for Kruise Rollouts resource YAML:",source:"@site/rollouts/user-manuals/api-specifications.md",sourceDirName:"user-manuals",slug:"/user-manuals/api-specifications",permalink:"/zh/rollouts/user-manuals/api-specifications",draft:!1,tags:[],version:"current",lastUpdatedBy:"berg",lastUpdatedAt:1681869057,formattedLastUpdatedAt:"2023/4/19",frontMatter:{},sidebar:"rollouts",previous:{title:"Installation",permalink:"/zh/rollouts/installation"},next:{title:"Basic Usage Guide",permalink:"/zh/rollouts/user-manuals/basic-usage"}},s={},u=[{value:"API Details",id:"api-details",level:2},{value:"Workload Binding API (Mandatory)",id:"workload-binding-api-mandatory",level:3},{value:"Traffic Binding API (Optional)",id:"traffic-binding-api-optional",level:3},{value:"Strategy API (Mandatory)",id:"strategy-api-mandatory",level:3},{value:"Special Annotations of Rollout (Optional)",id:"special-annotations-of-rollout-optional",level:3},{value:"Special Annotations of Workload (Optional)",id:"special-annotations-of-workload-optional",level:3},{value:"Rollout Status You Should Know",id:"rollout-status-you-should-know",level:3}],m={toc:u};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"api-specifications"},"API Specifications"),(0,l.kt)("p",null,"A basic example for Kruise Rollouts resource YAML:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rollouts.kruise.io/v1alpha1\nkind: Rollout\nmetadata:\n  name: rollouts-demo\n  # The rollout resource needs to be in the same namespace as the corresponding workload\n  namespace: defaults\n  # This annotation can help us upgrade the Deployment using partition, just like StatefulSet/CloneSet.\n  annotations:\n    rollouts.kruise.io/rolling-style: partition\nspec:\n  objectRef:\n    # rollout of published workloads, currently only supports Deployment, CloneSet, StatefulSet, Advanced StatefulSet\n    workloadRef:\n      apiVersion: apps/v1\n      kind: Deployment\n      name: echoserver\n  strategy:\n    canary:\n      steps:\n      ### the 1-st batch ###\n      # routing 5% traffics to the new version\n      - weight: 5\n      # Need Manual confirmation before enter to next batch\n        pause: {}\n      # optional, The first step of released replicas. If not set, the default is to use 'weight', as shown above is 5%.\n        replicas: 1\n      ### the 2-nd batch ###\n      - replicas: 50%\n      # Automatically enter the next batch after waiting 2 hours\n        pause:\n          duration: 7200\n      ### the 3-rd batch ###\n      - replicas: 100%\n      trafficRoutings:\n      # service name that is related with the workload\n      - service: echoserver\n      # ingress name that is related with the service\n        ingress:\n          name: echoserver\n")),(0,l.kt)("p",null,"There are 3 major parts of api specifications you should pay attention to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Binding your workload: Tell Rollout which workload it should work on;"),(0,l.kt)("li",{parentName:"ul"},"Binding your traffic configuration: Tell Rollout which traffic configuration it should focus on."),(0,l.kt)("li",{parentName:"ul"},"Config your deployment strategy before releasing: Tell Rollout how to roll your workload and traffic.")),(0,l.kt)("h2",{id:"api-details"},"API Details"),(0,l.kt)("h3",{id:"workload-binding-api-mandatory"},"Workload Binding API (Mandatory)"),(0,l.kt)("p",null,"Tell Kruise Rollout which workload should be bounded:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rollouts.kruise.io/v1alpha1\nkind: Rollout\nmetadata:\n  namespace: <your-workload-ns>\nspec:\n  objectRef:\n    workloadRef:\n      apiVersion: apps/v1\n      kind: StatefulSet\n      name: <your-workload-name>\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apiVersion")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"Workload APIVersion")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kind")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"Workload Kind")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"Workload Name")))),(0,l.kt)("p",null,"Currently, Kruise Rollout supports Deployment, CloneSet, StatefulSet, and Advanced StatefulSet."),(0,l.kt)("p",null,"Note:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The workload should be at the same namespace as the Rollout.")),(0,l.kt)("h3",{id:"traffic-binding-api-optional"},"Traffic Binding API (Optional)"),(0,l.kt)("p",null,'Different from "Workload Binding", Traffic Binding is not necessary. If you do not set the following specifications, the traffic configuration will keep their native behavior, for example, keeping load balance for all versioned Pods.'),(0,l.kt)("p",null,"If you need do something special for traffic routings, just tell Kruise Rollout which traffic configurations should be bound:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rollouts.kruise.io/v1alpha1\nkind: Rollout\nmetadata:\n  namespace: <your-workload-ns>\nspec:\n  trafficRoutings:\n  - service: <service-name-that-is-related-your-workload>\n    ingress:\n      classType: <traffic-type> # example: nginx | higress, defaults to "nginx"\n      name: <ingress-name-that-is-related-the-service>\n    gateway: # alternative\uff1a ingress or gateway-api\n      httpRouteName: <gateway-api-httpRoute-name>\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"service")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"Name of service that select the pods of bounded workload")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ingress")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional) Description of the Ingress object you want to bind")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gateway")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional) Description of the ",(0,l.kt)("a",{parentName:"td",href:"https://gateway-api.sigs.k8s.io/"},"Gateway API")," resources you want to bind")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ingress.classType")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"nginx"'),(0,l.kt)("td",{parentName:"tr",align:null},'Ingress type, such as "nginx", "higress", or others')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ingress.name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"Name of ingress resource that bounded the service")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gateway.httpRouteName")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"Name of ",(0,l.kt)("a",{parentName:"td",href:"https://gateway-api.sigs.k8s.io/concepts/api-overview/#httproute"},"HTTPRoute")," resource of Gateway API")))),(0,l.kt)("p",null,"Note:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ingress")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"gateway")," can not be nil at the same time if you decide to use ",(0,l.kt)("inlineCode",{parentName:"li"},"trafficRoutings"),".")),(0,l.kt)("h3",{id:"strategy-api-mandatory"},"Strategy API (Mandatory)"),(0,l.kt)("p",null,"Describe your strategy of rollout:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rollouts.kruise.io/v1alpha1\nkind: Rollout\nmetadata:\n  namespace: <your-workload-ns>\nspec:\n  strategy:\n    canary:\n      steps:\n      # the first step\n      - weight: 5\n        replicas:\n        pause:\n          duration: 1000\n        matches:\n          - headers:\n              - type: Exact # or "RegularExpression"\n                name: <matched-header-name>\n                value: <matched-header-value, or reg-expression>\n      # the second step\n      - weight: 10\n        ... ....\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"steps[x].weight")),(0,l.kt)("td",{parentName:"tr",align:null},"*integer"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional) Percent weight of canary traffic for new-version Pods.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"steps[x].replicas")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"integer or "),"string"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional) Absolute number or Percent of new-version Pods. If nil, the default is to use 'weight' as replicas.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"steps[x].pause")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"{}"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional) Manual confirmation or auto confirmation before enter the next step.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"steps[x].pause.duration")),(0,l.kt)("td",{parentName:"tr",align:null},"*integer"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional) Duration time before auto confirmation. if nil, means need manual confirmation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"steps[x].matches")),(0,l.kt)("td",{parentName:"tr",align:null},"[]object"),(0,l.kt)("td",{parentName:"tr",align:null},"[]"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional) The HTTP header match rules you want to traffic to new-version Pods.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"headers[x].type")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"Exact"'),(0,l.kt)("td",{parentName:"tr",align:null},'"Exact" or "RegularExpression" rule to match key and value')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"headers[x].name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"Matched HTTP header name. (And-Relationship between headers","[i]"," and headers","[j]",")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"headers[x].value")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"Matched HTTP header value.")))),(0,l.kt)("p",null,"Note:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"steps[x].weight")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"steps[x].replicas")," can not be nil at the same time."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"steps[x].matches[i] and steps[x].matches[j]")," have ",(0,l.kt)("strong",{parentName:"li"},"Or"),"-relationship;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"steps[x].matches[y].headers[i] and steps[x].matches[y].header[j]")," have ",(0,l.kt)("strong",{parentName:"li"},"And"),"-relationship;")),(0,l.kt)("h3",{id:"special-annotations-of-rollout-optional"},"Special Annotations of Rollout (Optional)"),(0,l.kt)("p",null,"There are some special annotations in Rollout to enable specific abilities."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Annotations"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rollouts.kruise.io/rolling-type")),(0,l.kt)("td",{parentName:"tr",align:null},'"canary" or "partition"'),(0,l.kt)("td",{parentName:"tr",align:null},'"canary"'),(0,l.kt)("td",{parentName:"tr",align:null},'"canary" means using canary update strategy for Deployment; "partition" means using multi-batch update strategy for Deployment;')))),(0,l.kt)("h3",{id:"special-annotations-of-workload-optional"},"Special Annotations of Workload (Optional)"),(0,l.kt)("p",null,"There are some special annotations in Bounded Workload to enable specific abilities."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Annotations"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rollouts.kruise.io/rollout-id")),(0,l.kt)("td",{parentName:"tr",align:null},"any string"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"The concept is similar to the release order number. To solve the problem that users should know whether the current changes of workload is observed by Kruise Rollout controller.")))),(0,l.kt)("h3",{id:"rollout-status-you-should-know"},"Rollout Status You Should Know"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Rollout\nstatus:\n  phase: Healthy\n  observedGeneration: 2\n  canaryStatus:\n    canaryReplicas: 10\n    canaryReadyReplicas: 10\n    canaryRevision: 76fd76f75b\n    currentStepIndex: 3\n    currentStepState: Completed\n    observedRolloutID: "20230313093823"\n    observedWorkloadGeneration: 20\n    podTemplateHash: 76fd76f75b\n    stableRevision: b76b6f48f\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Mode"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"phase")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ready-only"),(0,l.kt)("td",{parentName:"tr",align:null},'"Initial" means no bounded workload; "Healthy" means bounded workload is promoted; "Progressing" means rollout is working.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"observedGeneration")),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"ready-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Observed rollout spec generation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"canaryStatus")),(0,l.kt)("td",{parentName:"tr",align:null},"*object"),(0,l.kt)("td",{parentName:"tr",align:null},"ready-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Information about rollout progressing.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"canaryStatus.canaryReplicas")),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"ready-only"),(0,l.kt)("td",{parentName:"tr",align:null},"workload updated replicas")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"canaryStatus.canaryReadyReplicas")),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"ready-only"),(0,l.kt)("td",{parentName:"tr",align:null},"workload updated ready replicas.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"canaryStatus.podTemplateHash")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ready-only"),(0,l.kt)("td",{parentName:"tr",align:null},"workload update(new) revision hash.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"canaryStatus.canaryRevision")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ready-only"),(0,l.kt)("td",{parentName:"tr",align:null},"workload update(new) revision hash calculated by Kruise Rollout controller.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"canaryStatus.stableRevision")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ready-only"),(0,l.kt)("td",{parentName:"tr",align:null},"workload stable(old) revision hash recorded before progressing.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"canaryStatus.observedRolloutID")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ready-only"),(0,l.kt)("td",{parentName:"tr",align:null},"corresponding to workload ",(0,l.kt)("inlineCode",{parentName:"td"},"rollouts.kruise.io/rollout-id")," annotations. if they are equal, it means rollout controller watched workload changes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"canaryStatus.currentStepIndex")),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"ready-only"),(0,l.kt)("td",{parentName:"tr",align:null},"rollout current step index. Start from 1.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"canaryStatus.currentStepState")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ready&write"),(0,l.kt)("td",{parentName:"tr",align:null},'rollout current step state. Both "StepReady" and "Complete" mean current step is ready.')))))}k.isMDXComponent=!0}}]);