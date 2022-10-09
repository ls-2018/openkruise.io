"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[7545],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9605:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={title:"ResourceDistribution"},l=void 0,p={unversionedId:"user-manuals/resourcedistribution",id:"version-v1.2/user-manuals/resourcedistribution",title:"ResourceDistribution",description:"For the scenario, where the namespace-scoped resources such as Secret and ConfigMap need to be distributed or synchronized to different namespaces, the native k8s currently only supports manual distribution and synchronization by users one-by-one, which is very inconvenient.",source:"@site/versioned_docs/version-v1.2/user-manuals/resourcedistribution.md",sourceDirName:"user-manuals",slug:"/user-manuals/resourcedistribution",permalink:"/docs/v1.2/user-manuals/resourcedistribution",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/resourcedistribution.md",tags:[],version:"v1.2",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1654585589,formattedLastUpdatedAt:"6/7/2022",frontMatter:{title:"ResourceDistribution"},sidebar:"docs",previous:{title:"Container Launch Priority",permalink:"/docs/v1.2/user-manuals/containerlaunchpriority"},next:{title:"PersistentPodState",permalink:"/docs/v1.2/user-manuals/persistentpodstate"}},u={},c=[{value:"API Description",id:"api-description",level:2},{value:"Resource Field",id:"resource-field",level:3},{value:"Targets Field",id:"targets-field",level:3},{value:"A Complete Use Case",id:"a-complete-use-case",level:2},{value:"Distribute Resource",id:"distribute-resource",level:3},{value:"Tracking Failures After The Distribution",id:"tracking-failures-after-the-distribution",level:3},{value:"Update/Sync Resource",id:"updatesync-resource",level:3},{value:"Cascading Deletion",id:"cascading-deletion",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For the scenario, where the namespace-scoped resources such as Secret and ConfigMap need to be distributed or synchronized to different namespaces, the native k8s currently only supports manual distribution and synchronization by users one-by-one, which is very inconvenient. "),(0,i.kt)("p",null,"Typical examples: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When users want to use the imagePullSecrets capability of SidecarSet, they must repeatedly create corresponding Secrets in relevant namespaces, and ensure the correctness and consistency of these Secret configurations;"),(0,i.kt)("li",{parentName:"ul"},"When users want to configure some common environment variables, they probably need to distribute ConfigMaps to multiple namespaces, and the subsequent modifications of these ConfigMaps might require synchronization among these namespaces.")),(0,i.kt)("p",null,"Therefore, in the face of these scenarios that require the resource distribution and ",(0,i.kt)("strong",{parentName:"p"},"continuously synchronization across namespaces"),", we provide a tool, namely ",(0,i.kt)("strong",{parentName:"p"},"ResourceDistribution"),", to do this automatically. "),(0,i.kt)("p",null,"Currently, ResourceDistribution supports the two kind resources --- ",(0,i.kt)("strong",{parentName:"p"},"Secret & ConfigMap"),".  "),(0,i.kt)("h2",{id:"api-description"},"API Description"),(0,i.kt)("p",null,"ResourceDistribution is a kind of ",(0,i.kt)("strong",{parentName:"p"},"cluster-scoped CRD"),", which is mainly composed of two fields: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"resource")," and ",(0,i.kt)("inlineCode",{parentName:"strong"},"targets")),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"resource"))," field is used to describe the resource to be distributed by the user, and ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"targets"))," is used to describe the destination namespaces."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ResourceDistribution\nmetadata:\n  name: sample\nspec:\n  resource:\n    ... ...\n  targets:\n    ... ...\n")),(0,i.kt)("h3",{id:"resource-field"},"Resource Field"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," field must be a ",(0,i.kt)("strong",{parentName:"p"},"complete")," and ",(0,i.kt)("strong",{parentName:"p"},"correct")," resource description in YAML style. "),(0,i.kt)("p",null,"An example of a correctly configuration of ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: ResourceDistribution\nmetadata:\n  name: sample\nspec:\n  resource:\n    apiVersion: v1\n    kind: ConfigMap\n    metadata:\n      name: game-demo\n    data:\n      game.properties: |\n        enemy.types=aliens,monsters\n        player.maximum-lives=5\n      player_initial_lives: "3"\n      ui_properties_file_name: user-interface.properties\n      user-interface.properties: |\n        color.good=purple\n        color.bad=yellow\n        allow.textmode=true\n  targets:\n    ... ...\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tips"),": users can first create corresponding resources in a local namespace and test them, and then copy them after confirming that the resource configuration is correct."),(0,i.kt)("h3",{id:"targets-field"},"Targets Field"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"targets"))," field currently supports four rules to describe the target namespaces, including ",(0,i.kt)("inlineCode",{parentName:"p"},"allNamespaces"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"includedNamespaces"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"excludedNamespaces")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"namespaceLabelSelector"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"allNamespaces"),": match all of the namespaces if it is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),";")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"includedNamespaces"),": match the target namespaces by name;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"namespaceLabelSelector"),": use labelSelector to match the target namespaces;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"excludedNamespaces"),": use name to exclude some namespaces that you do not want to distribute;"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Calculation rule for target namespace:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Initialize target namespace ",(0,i.kt)("em",{parentName:"p"},"T")," = \u2205;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add all namespaces if ",(0,i.kt)("inlineCode",{parentName:"p"},"allNamespaces=true")," to ",(0,i.kt)("em",{parentName:"p"},"T"),";")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the namespaces listed in ",(0,i.kt)("inlineCode",{parentName:"p"},"includedNamespaces")," to ",(0,i.kt)("em",{parentName:"p"},"T"),";")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the namespace matching the ",(0,i.kt)("inlineCode",{parentName:"p"},"namespaceLabelSelector")," to ",(0,i.kt)("em",{parentName:"p"},"T"),";")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Remove the namespaces listed in ",(0,i.kt)("inlineCode",{parentName:"p"},"excludedNamespaces")," from ",(0,i.kt)("em",{parentName:"p"},"T"),";"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"AllNamespaces"),", ",(0,i.kt)("inlineCode",{parentName:"strong"},"includedNamespaces")," and ",(0,i.kt)("inlineCode",{parentName:"strong"},"excludedNamespaces")," are ",(0,i.kt)("em",{parentName:"strong"},'"OR"')," relationship, and ",(0,i.kt)("inlineCode",{parentName:"strong"},"excludedNamespaces")," will always effect if users set it. By the way, ",(0,i.kt)("inlineCode",{parentName:"strong"},"targets")," will always ignore the ",(0,i.kt)("inlineCode",{parentName:"strong"},"kube-system")," and ",(0,i.kt)("inlineCode",{parentName:"strong"},"kube-public")," namespaces.")),(0,i.kt)("p",null,"A correctly configured targets field is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ResourceDistribution\nmetadata:\n  name: sample\nspec:\n  resource:\n    ... ...\n  targets:\n    includedNamespaces:\n      list:\n      - name: ns-1\n      - name: ns-4\n    namespaceLabelSelector:\n      matchLabels:\n        group: test\n    excludedNamespaces:\n        list:\n      - name: ns-3\n")),(0,i.kt)("p",null,"In the above example, the target namespaces of the ResourceDistribution will contain ",(0,i.kt)("inlineCode",{parentName:"p"},"ns-1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ns-4"),", and the namespaces whose labels meet the ",(0,i.kt)("inlineCode",{parentName:"p"},"namespaceLabelSelector"),". However, even if ",(0,i.kt)("inlineCode",{parentName:"p"},"ns-3")," meets the namespaceLabelSelector, it will not be included because it has been explicitly excluded in ",(0,i.kt)("inlineCode",{parentName:"p"},"excludedNamespaces"),"."),(0,i.kt)("h2",{id:"a-complete-use-case"},"A Complete Use Case"),(0,i.kt)("h3",{id:"distribute-resource"},"Distribute Resource"),(0,i.kt)("p",null,"When the user correctly configures the ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"targets")," fields, the ResourceDistribution controller will execute the distribution, and this resource will be automatically created in each target namespaces. "),(0,i.kt)("p",null,"A complete configuration is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: ResourceDistribution\nmetadata:\n  name: sample\nspec:\n  resource:\n    apiVersion: v1\n    kind: ConfigMap\n    metadata:\n      name: game-demo\n    data:\n      game.properties: |\n        enemy.types=aliens,monsters\n        player.maximum-lives=5\n      player_initial_lives: "3"\n      ui_properties_file_name: user-interface.properties\n      user-interface.properties: |\n        color.good=purple\n        color.bad=yellow\n        allow.textmode=true\n  targets:\n    excludedNamespaces:\n      list:\n      - name: ns-3\n    includedNamespaces:\n      list:\n      - name: ns-1\n      - name: ns-4\n    namespaceLabelSelector:\n      matchLabels:\n        group: test\n')),(0,i.kt)("h3",{id:"tracking-failures-after-the-distribution"},"Tracking Failures After The Distribution"),(0,i.kt)("p",null,"Of course, resource distribution may not be always successful. "),(0,i.kt)("p",null,"In the process of distribution, various errors may occur. To this end, we record some conditions of distribution failures in the ",(0,i.kt)("inlineCode",{parentName:"p"},"status")," field so that users can track them."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"First"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"status")," records the total number of target namespaces (desired), the number of successfully distributed target namespaces (succeeded), and the number of failed target namespaces (failed):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"status:\n  Desired:                 3\n  Failed:                  1\n  Succeeded:               2\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Then"),", in order to further make users understand the reason and location (namespaces) of the failed distributions, ",(0,i.kt)("inlineCode",{parentName:"p"},"status")," also summarizes the types of distribution errors, which are divided into 6 categories and recorded in ",(0,i.kt)("inlineCode",{parentName:"p"},"status.conditions"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Four types of conditions record the failures of operating resources, that are ",(0,i.kt)("inlineCode",{parentName:"li"},"Get"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Create"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Update")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Delete")," errors;"),(0,i.kt)("li",{parentName:"ul"},"A type of condition records the error that the namespace does not exist;"),(0,i.kt)("li",{parentName:"ul"},"A type of condition records resource conflicts: If a resource with the same name, kind and apiVersion already exists in the target namespace, this conflicts will be recorded in ",(0,i.kt)("inlineCode",{parentName:"li"},"status.conditions"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Status:\n  Conditions:\n    Last Transition Time:  2021-09-06T08:42:28Z\n    Reason:                Succeeded\n    Status:                False\n    Type:                  GetResourceFailed\n    Last Transition Time:  2021-09-06T08:42:28Z\n    Reason:                Succeeded\n    Status:                False\n    Type:                  CreateResourceFailed\n    Last Transition Time:  2021-09-06T08:42:28Z\n    Reason:                Succeeded\n    Status:                False\n    Type:                  UpdateResourceFailed\n    Last Transition Time:  2021-09-06T08:42:28Z\n    Reason:                Succeeded\n    Status:                False\n    Type:                  DeleteResourceFailed\n    Last Transition Time:  2021-09-06T08:42:28Z\n    Reason:                Succeeded\n    Status:                False\n    Type:                  ConflictOccurred\n    Failed Namespace:\n      ns-1\n      ns-4\n    Last Transition Time:  2021-09-06T08:45:08Z\n    Reason:                namespace not found\n    Status:                True\n    Type:                  NamespaceNotExists\n")),(0,i.kt)("p",null,"The above example shows an error that the target namespaces ",(0,i.kt)("inlineCode",{parentName:"p"},"ns-1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ns-4")," do not exist, and both the error type and namespaces are recorded."),(0,i.kt)("h3",{id:"updatesync-resource"},"Update/Sync Resource"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ResourceDistribution allows users to update the resource field, and the update will automatically sync to all the target namespaces.")),(0,i.kt)("p",null,"When a resource is updated, ResourceDistribution will calculate the hash value of the new version of the resource and record it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"annotations")," of the resource CR. When ResourceDistribution finds that the hash value of the resource was changed, it will update it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: game-demo\n  annotations:  \n    kruise.io/resourcedistribution.resource.from: sample\n    kruise.io/resourcedistribution.resource.distributed.timestamp: 2021-09-06 08:44:52.7861421 +0000 UTC m=+12896.810364601\n    kruise.io/resourcedistribution.resource.hashcode: 0821a13321b2c76b5bd63341a0d97fb46bfdbb2f914e2ad6b613d10632fa4b63\n... ...\n")),(0,i.kt)("p",null,"In particular, we ",(0,i.kt)("strong",{parentName:"p"},"DO NOT")," recommend that users bypass the ResourceDistribution and directly modify the resources unless they know what they are doing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After modifying resources directly, the hash value of resources will not be calculated automatically. Therefore, ",(0,i.kt)("strong",{parentName:"p"},"when the ",(0,i.kt)("inlineCode",{parentName:"strong"},"resource")," field is modified, ResourceDistribution may overwrite the user's direct modification of these resources;"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ResourceDistribution judges whether resources are distributed by the itself through ",(0,i.kt)("inlineCode",{parentName:"p"},"kruise.io/resourcedistribution.resource.from"),". If this annotation was changed, the modified resources will be regarded as conflicts, and will not updated it synchronously any more."))),(0,i.kt)("h3",{id:"cascading-deletion"},"Cascading Deletion"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ResourceDistribution controls the distributed resources through ownerReference. Therefore, it should be noted that when the ResourceDistribution is deleted, all the resources it distributed will also be deleted.")))}m.isMDXComponent=!0}}]);