"use strict";(self.webpackChunkstarfish_ql=self.webpackChunkstarfish_ql||[]).push([[239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,h=c["".concat(s,".").concat(f)]||c[f]||u[f]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="StarfishQL Concepts",l={unversionedId:"introduction/starfish-ql",id:"introduction/starfish-ql",title:"StarfishQL Concepts",description:"Before diving into the details, it's important to grasp the following fundamental concepts in a high-level sense:",source:"@site/docs/00-introduction/03-starfish-ql.md",sourceDirName:"00-introduction",slug:"/introduction/starfish-ql",permalink:"/StarfishQL/docs/introduction/starfish-ql",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/StarfishQL/docs/00-introduction/03-starfish-ql.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677060416,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Objective",permalink:"/StarfishQL/docs/introduction/objective"},next:{title:"Set up the Graph Query Engine",permalink:"/StarfishQL/docs/install-and-config/setup-graph-queery-engine"}},s={},p=[{value:"Entity",id:"entity",level:2},{value:"Node",id:"node",level:2},{value:"Relation",id:"relation",level:2},{value:"Edge",id:"edge",level:2},{value:"Graph",id:"graph",level:2},{value:"Attribute",id:"attribute",level:2},{value:"Query",id:"query",level:2},{value:"Constraint",id:"constraint",level:2},{value:"Criteria",id:"criteria",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"starfishql-concepts"},"StarfishQL Concepts"),(0,a.kt)("p",null,"Before diving into the details, it's important to grasp the following fundamental concepts in a high-level sense:"),(0,a.kt)("h2",{id:"entity"},"Entity"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"e.g. Crate")),(0,a.kt)("p",null,"Data to be stored and processed that is meaningful in itself."),(0,a.kt)("p",null,'Within the database, entities can be homogeneous (as in the crates.io example, all are simply "crates") or heterogeneous (say we distinguish between "library crates" and "application crates" and represent them as different entities). '),(0,a.kt)("h2",{id:"node"},"Node"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"e.g. serde, rand, sea-orm")),(0,a.kt)("p",null,"An instance of an Entity."),(0,a.kt)("h2",{id:"relation"},"Relation"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"e.g. Depends")),(0,a.kt)("p",null,"Relation between entities. It can be directed or undirected (equivalent on both directions).",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("h2",{id:"edge"},"Edge"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"e.g. sea-orm -depends-on-> serde")),(0,a.kt)("p",null,"An instance of a relation. A connection between two nodes."),(0,a.kt)("h2",{id:"graph"},"Graph"),(0,a.kt)("p",null,"A data structure containing a set of nodes N and a set of edges E, where E must only use the nodes in N."),(0,a.kt)("h2",{id:"attribute"},"Attribute"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"e.g. version")),(0,a.kt)("p",null,"Quantities (numeric, scaler values) and qualities (categorical, enum labels) attached onto each node or edge.",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,a.kt)("h2",{id:"query"},"Query"),(0,a.kt)("p",null,"A description of the data we want to extract from the database."),(0,a.kt)("p",null,"The query result can be a graph, a vector (of nodes) or a scaler value. "),(0,a.kt)("h2",{id:"constraint"},"Constraint"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"e.g. Traverse up to 3 levels deep, Only include nodes with at least 3 edges")),(0,a.kt)("p",null,"When performing a query, the requirements of graph traversal or criteria on the topology. "),(0,a.kt)("h2",{id:"criteria"},"Criteria"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'e.g. version = "0.0.1"')),(0,a.kt)("p",null,"When performing a query, the filters applied to the nodes and edges (usually on attributes)."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"So far, development has been centred around directed graphs. Hence, some functionalities have not been thoroughly tested for undirected graphs.",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Only node attributes are supported for the time being.",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);