"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[8900],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),c=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),u=a,h=p["".concat(m,".").concat(u)]||p[u]||l[u]||i;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},816:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},o="Streamer",s={unversionedId:"streamer/streamer",id:"version-0.3.x/streamer/streamer",title:"Streamer",description:"The Streamer trait defines the common interface of streaming clients.",source:"@site/versioned_docs/version-0.3.x/03-streamer/01-streamer.md",sourceDirName:"03-streamer",slug:"/streamer/streamer",permalink:"/SeaStreamer/docs/streamer/streamer",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/versioned_docs/version-0.3.x/03-streamer/01-streamer.md",tags:[],version:"0.3.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1692425931,formattedLastUpdatedAt:"Aug 19, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Example Processors",permalink:"/SeaStreamer/docs/getting-started/examples"},next:{title:"Producer",permalink:"/SeaStreamer/docs/streamer/producer"}},m={},c=[{value:"<code>ConnectOptions</code>",id:"connectoptions",level:2},{value:"<code>timeout</code>",id:"timeout",level:3},{value:"<code>connect</code>",id:"connect",level:2},{value:"<code>disconnect</code>",id:"disconnect",level:2},{value:"<code>create_producer</code>",id:"create_producer",level:2},{value:"<code>create_generic_producer</code>",id:"create_generic_producer",level:2},{value:"<code>create_consumer</code>",id:"create_consumer",level:2}],d={toc:c};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"streamer"},"Streamer"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-streamer/*/sea_streamer/trait.Streamer.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Streamer"))," trait defines the common interface of streaming clients."),(0,a.kt)("p",null,"Implemented by:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-kafka/*/sea_streamer_kafka/struct.KafkaStreamer.html"},(0,a.kt)("inlineCode",{parentName:"a"},"KafkaStreamer"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-redis/*/sea_streamer_redis/struct.RedisStreamer.html"},(0,a.kt)("inlineCode",{parentName:"a"},"RedisStreamer"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-stdio/*/sea_streamer_stdio/struct.StdioStreamer.html"},(0,a.kt)("inlineCode",{parentName:"a"},"StdioStreamer"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/sea-streamer-file/*/sea_streamer_file/struct.FileStreamer.html"},(0,a.kt)("inlineCode",{parentName:"a"},"FileStreamer")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("h4",{parentName:"admonition",id:"kafka-semantics"},"Kafka semantics"),(0,a.kt)("p",{parentName:"admonition"},"Consult ",(0,a.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#intro_concepts_and_terms"},"https://kafka.apache.org/documentation/#intro_concepts_and_terms")," for a gentle introduction.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("h4",{parentName:"admonition",id:"redis-semantics"},"Redis semantics"),(0,a.kt)("p",{parentName:"admonition"},"SeaStreamer Redis aims to provide a Kafka-like client experience, but there are some fundamental differences between Redis and Kafka:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"In Redis sequence numbers are not contiguous"),(0,a.kt)("li",{parentName:"ul"},"In Redis messages are dispatched to consumers among group members in a first-ask-first-served manner, which leads to the next point"),(0,a.kt)("li",{parentName:"ul"},"In Redis ACK has to be done per message"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("h4",{parentName:"admonition",id:"stdio-semantics"},"Stdio semantics"),(0,a.kt)("p",{parentName:"admonition"},"The Stdio backend spawn two dedicated threads to handle stdin and stdout respectively. The host part of the Streamer URI is always empty, i.e. in ",(0,a.kt)("inlineCode",{parentName:"p"},"stdio://"),", the host is ",(0,a.kt)("inlineCode",{parentName:"p"}," "),". There is only shard ",(0,a.kt)("inlineCode",{parentName:"p"},"ZERO"),".")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("h4",{parentName:"admonition",id:"file-semantics"},"File semantics"),(0,a.kt)("p",{parentName:"admonition"},"In File, unlike Stdio, there can be multiple independent Streamers in the same process."),(0,a.kt)("p",{parentName:"admonition"},"In File, unlike other backends, it is possible to signify end of stream with a ",(0,a.kt)("inlineCode",{parentName:"p"},"EOS")," message. See the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-streamer-file/latest/sea_streamer_file/struct.FileConnectOptions.html#method.set_end_with_eos"},(0,a.kt)("inlineCode",{parentName:"a"},"end_with_eos"))," option."),(0,a.kt)("p",{parentName:"admonition"},"Currently it only streams to Shard ",(0,a.kt)("inlineCode",{parentName:"p"},"ZERO"),"."),(0,a.kt)("p",{parentName:"admonition"},"If the file is removed from the file system, the streamer would stop.")),(0,a.kt)("h2",{id:"connectoptions"},(0,a.kt)("inlineCode",{parentName:"h2"},"ConnectOptions")),(0,a.kt)("h3",{id:"timeout"},(0,a.kt)("inlineCode",{parentName:"h3"},"timeout")),(0,a.kt)("p",null,"Set the default network timeout for all connections."),(0,a.kt)("h2",{id:"connect"},(0,a.kt)("inlineCode",{parentName:"h2"},"connect")),(0,a.kt)("p",null,"Establish a connection to the streaming server. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Streamer")," implementation does not have to maintain an open connection to the server."),(0,a.kt)("h2",{id:"disconnect"},(0,a.kt)("inlineCode",{parentName:"h2"},"disconnect")),(0,a.kt)("p",null,"Disconnect from the streaming server. The intention is to flush remaining messages and exit gracefully. You have to ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," this operation until it completes. Once you called this method, all producers and consumers created will become unusable."),(0,a.kt)("h2",{id:"create_producer"},(0,a.kt)("inlineCode",{parentName:"h2"},"create_producer")),(0,a.kt)("p",null,"Create a producer that streams to the specified stream."),(0,a.kt)("h2",{id:"create_generic_producer"},(0,a.kt)("inlineCode",{parentName:"h2"},"create_generic_producer")),(0,a.kt)("p",null,"Create a producer that can stream to any stream."),(0,a.kt)("h2",{id:"create_consumer"},(0,a.kt)("inlineCode",{parentName:"h2"},"create_consumer")),(0,a.kt)("p",null,"Create a consumer subscribing to the specified streams."))}l.isMDXComponent=!0}}]);