"use strict";(self.webpackChunkseaography=self.webpackChunkseaography||[]).push([[690],{6957:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,u=f["".concat(c,".").concat(m)]||f[m]||d[m]||o;return n?r.createElement(u,i(i({ref:t},s),{},{components:n})):r.createElement(u,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(1308),a=(n(6687),n(6957));const o={},i="DataLoader",l={unversionedId:"data-loader",id:"data-loader",title:"DataLoader",description:"TODO",source:"@site/docs/06-data-loader.md",sourceDirName:".",slug:"/data-loader",permalink:"/Seaography/docs/next/data-loader",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Seaography/docs/06-data-loader.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1698392458,formattedLastUpdatedAt:"Oct 27, 2023",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Macros documentation",permalink:"/Seaography/docs/next/macros-documentation"}},c={},p=[],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dataloader"},"DataLoader"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("p",null,"Consider the following GraphQL query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  film(\n    pagination: { page: { limit: 3, page: 0 } }\n    filters: { releaseYear: { eq: 2006 } }\n    orderBy: { title: ASC }\n  ) {\n    nodes {\n      title\n      description\n      releaseYear\n      actor {\n        nodes {\n          firstName\n          lastName\n        }\n      }\n    }\n  }\n}\n")),(0,a.kt)("p",null,"Behind the scene, the following SQL were queried:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n  `film`.`film_id`,\n  `film`.`title`,\n  `film`.`description`,\n  `film`.`release_year`,\n  `film`.`language_id`,\n  `film`.`original_language_id`,\n  `film`.`rental_duration`,\n  `film`.`rental_rate`,\n  `film`.`length`,\n  `film`.`replacement_cost`,\n  `film`.`rating`,\n  `film`.`special_features`,\n  `film`.`last_update`\nFROM\n  `film`\nWHERE\n  `film`.`release_year` = ?\nORDER BY\n  `film`.`title` ASC\nLIMIT\n  ? OFFSET ?\n\nSELECT\n  `actor`.`actor_id`,\n  `actor`.`first_name`,\n  `actor`.`last_name`,\n  `actor`.`last_update`\nFROM\n  `actor`\n  INNER JOIN `film_actor` ON `film_actor`.`actor_id` = `actor`.`actor_id`\n  INNER JOIN `film` ON `film`.`film_id` = `film_actor`.`film_id`\nWHERE\n  `film`.`film_id` = ?\n  AND (TRUE)\n")))}d.isMDXComponent=!0}}]);