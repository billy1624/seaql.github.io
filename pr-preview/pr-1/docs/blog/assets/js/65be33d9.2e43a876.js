"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[4024],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),h=a,g=m["".concat(s,".").concat(h)]||m[h]||c[h]||o;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8033:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={slug:"2021-08-30-release-model",title:"Release Model",author:"Chris Tsang",author_title:"SeaQL Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",tags:["news"]},l=void 0,i={permalink:"/blog/2021-08-30-release-model",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2021-08-30-release-model.md",source:"@site/blog/2021-08-30-release-model.md",title:"Release Model",description:"Today we will outline our release plan in the near future.",date:"2021-08-30T00:00:00.000Z",formattedDate:"August 30, 2021",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:.85,hasTruncateMarker:!1,authors:[{name:"Chris Tsang",title:"SeaQL Team",url:"https://github.com/tyt2y3",imageURL:"https://avatars.githubusercontent.com/u/1782664?v=4"}],frontMatter:{slug:"2021-08-30-release-model",title:"Release Model",author:"Chris Tsang",author_title:"SeaQL Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",tags:["news"]},prevItem:{title:"Introducing SeaORM",permalink:"/blog/2021-09-20-introducing-sea-orm"},nextItem:{title:"Hello World",permalink:"/blog/2021-08-07-hello-world"}},s={authorsImageUrls:[void 0]},u=[],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Today we will outline our release plan in the near future."),(0,a.kt)("p",null,"One of Rust's slogan is ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/appendix-07-nightly-rust.html#stability-without-stagnation"},"Stability Without Stagnation"),", and SeaQL's take on it, is 'progression without stagnation'."),(0,a.kt)("p",null,"Before reaching ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0"),", we will be releasing every week, incorporating the latest changes and merged pull requests. There will be at most one incompatible release per month, so you will be expecting ",(0,a.kt)("inlineCode",{parentName:"p"},"0.2")," in Sep 2021 and ",(0,a.kt)("inlineCode",{parentName:"p"},"0.9")," in Apr 2022. We will decide by then whether the next release is an incremental ",(0,a.kt)("inlineCode",{parentName:"p"},"0.10")," or a stable ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0"),"."),(0,a.kt)("p",null,"After that, a major release will be rolled out every year. So you will probably be expecting a ",(0,a.kt)("inlineCode",{parentName:"p"},"2.0")," in 2023."),(0,a.kt)("p",null,"All of these is only made possible with a solid infrastructure. While we have a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/actions"},"test suite"),", its coverage will likely never be enough. We urge you to submit test cases to SeaORM if a particular feature is of importance to you."),(0,a.kt)("p",null,"We hope that a rolling release model will provide momentum to the community and propell us forward in the near future."))}c.isMDXComponent=!0}}]);