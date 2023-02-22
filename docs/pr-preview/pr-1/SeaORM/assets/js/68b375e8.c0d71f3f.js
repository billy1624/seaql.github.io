"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[7690],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=l(r),m=a,f=s["".concat(u,".").concat(m)]||s[m]||c[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},19306:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={},o="Update",p={unversionedId:"basic-crud/update",id:"version-0.4.x/basic-crud/update",title:"Update",description:"Update One",source:"@site/versioned_docs/version-0.4.x/05-basic-crud/03-update.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/update",permalink:"/pr-preview/pr-1/SeaORM/docs/0.4.x/basic-crud/update",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/05-basic-crud/03-update.md",tags:[],version:"0.4.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677055496,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:3,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"Insert",permalink:"/pr-preview/pr-1/SeaORM/docs/0.4.x/basic-crud/insert"},next:{title:"Save",permalink:"/pr-preview/pr-1/SeaORM/docs/0.4.x/basic-crud/save"}},u={},l=[{value:"Update One",id:"update-one",level:2},{value:"Update Many",id:"update-many",level:2}],d={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"update"},"Update"),(0,a.kt)("h2",{id:"update-one"},"Update One"),(0,a.kt)("p",null,"You will get a ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," from find result. If you want to save the model back into the database, you need to convert it into an ",(0,a.kt)("inlineCode",{parentName:"p"},"ActiveModel")," ",(0,a.kt)("em",{parentName:"p"},"first"),". The generated query will only include the ",(0,a.kt)("inlineCode",{parentName:"p"},"Set")," attributes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let pear: Option<fruit::Model> = Fruit::find_by_id(28).one(db).await?;\n\n// Into ActiveModel\nlet mut pear: fruit::ActiveModel = pear.unwrap().into();\n\n// Update name attribute\npear.name = Set("Sweet pear".to_owned());\n\n// Update corresponding row in database using primary key value\nlet pear: fruit::ActiveModel = pear.update(db).await?;\n')),(0,a.kt)("h2",{id:"update-many"},"Update Many"),(0,a.kt)("p",null,"You can also update multiple rows in the database without finding each ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," with SeaORM select."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// Bulk set attributes using ActiveModel\nlet pear: fruit::ActiveModel = Fruit::update_many()\n    .set(pear)\n    .filter(fruit::Column::Id.eq(1))\n    .exec(db)\n    .await?;\n\n// UPDATE `fruit` SET `cake_id` = 1 WHERE `fruit`.`name` LIKE '%Apple%'\nFruit::update_many()\n    .col_expr(fruit::Column::CakeId, Expr::value(1))\n    .filter(fruit::Column::Name.contains(\"Apple\"))\n    .exec(db)\n    .await?;\n")))}c.isMDXComponent=!0}}]);