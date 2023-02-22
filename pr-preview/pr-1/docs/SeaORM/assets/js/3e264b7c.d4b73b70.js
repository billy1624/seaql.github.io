"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[8602],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,b=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return r?n.createElement(b,c(c({ref:t},m),{},{components:r})):n.createElement(b,c({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},66263:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={},c="Basic Schema",o={unversionedId:"basic-crud/basic-schema",id:"basic-crud/basic-schema",title:"Basic Schema",description:"We will be using this basic schema for demonstration:",source:"@site/docs/05-basic-crud/01-basic-schema.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/basic-schema",permalink:"/SeaORM/docs/next/basic-crud/basic-schema",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/05-basic-crud/01-basic-schema.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677052242,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Enumeration",permalink:"/SeaORM/docs/next/generate-entity/enumeration"},next:{title:"Select",permalink:"/SeaORM/docs/next/basic-crud/select"}},s={},l=[],m={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic-schema"},"Basic Schema"),(0,a.kt)("p",null,"We will be using this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/src/tests_cfg"},"basic schema")," for demonstration:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cake")," one-to-many ",(0,a.kt)("inlineCode",{parentName:"li"},"fruit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cake")," many-to-many ",(0,a.kt)("inlineCode",{parentName:"li"},"filling")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cake_filling")," is the junction table between ",(0,a.kt)("inlineCode",{parentName:"li"},"cake")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"filling"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/SeaQL/sea-orm/master/src/tests_cfg/basic_schema.svg",alt:"Basic Schema"})))}p.isMDXComponent=!0}}]);