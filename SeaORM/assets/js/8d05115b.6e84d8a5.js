"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[95508],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(a),f=n,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},11226:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={},o="Data Loader",l={unversionedId:"relation/data-loader",id:"version-0.12.x/relation/data-loader",title:"Data Loader",description:"The LoaderTrait provides an API to load related entities in batches.",source:"@site/versioned_docs/version-0.12.x/06-relation/07-data-loader.md",sourceDirName:"06-relation",slug:"/relation/data-loader",permalink:"/SeaORM/docs/relation/data-loader",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/06-relation/07-data-loader.md",tags:[],version:"0.12.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1692391252,formattedLastUpdatedAt:"Aug 18, 2023",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Join Condition",permalink:"/SeaORM/docs/relation/custom-join-condition"},next:{title:"Bakery Schema",permalink:"/SeaORM/docs/relation/bakery-schema"}},c={},s=[],d={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data-loader"},"Data Loader"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/query/trait.LoaderTrait.html"},"LoaderTrait")," provides an API to load related entities in batches."),(0,n.kt)("p",null,"Consider this one to many relation:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"let cake_with_fruits: Vec<(cake::Model, Vec<fruit::Model>)> = Cake::find()\n    .find_with_related(Fruit)\n    .all(db)\n    .await?;\n")),(0,n.kt)("p",null,"The SQL query generated is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT\n    "cake"."id" AS "A_id",\n    "cake"."name" AS "A_name",\n    "fruit"."id" AS "B_id",\n    "fruit"."name" AS "B_name",\n    "fruit"."cake_id" AS "B_cake_id"\nFROM "cake"\nLEFT JOIN "fruit" ON "cake"."id" = "fruit"."cake_id"\nORDER BY "cake"."id" ASC\n')),(0,n.kt)("p",null,"This is great, but if the N is a large number, the 1 side's (Cake) data will be duplicated a lot. This results in more data being transferred over the wire. In the many to many case, both sides may duplicate. Using the Loader would ensure each model is transferred only once. For this reason, SeaORM currently can't eager load more than 2 entities together."),(0,n.kt)("p",null,"The following loads the same data as above, but with two queries:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"let cakes: Vec<cake::Model> = Cake::find().all(db).await?;\nlet fruits: Vec<Vec<fruit::Model>> = cakes.load_many(Fruit, db).await?;\n\nfor (cake, fruits) in cakes.into_iter().zip(fruits.into_iter()) { .. }\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT "cake"."id", "cake"."name" FROM "cake"\nSELECT "fruit"."id", "fruit"."name", "fruit"."cake_id" FROM "fruit" WHERE "fruit"."cake_id" IN (..)\n')),(0,n.kt)("p",null,"You can stack these together:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"let cakes: Vec<cake::Model> = Cake::find().all(db).await?;\nlet fruits: Vec<Vec<fruit::Model>> = cakes.load_many(Fruit, db).await?;\nlet fillings: Vec<Vec<filling::Model>> = cakes.load_many_to_many(Filling, CakeFilling, db).await?;\n")),(0,n.kt)("p",null,"In an advanced use case, you can apply filters on the related entity:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"let fruits_in_stock: Vec<Vec<fruit::Model>> = cakes.load_many(\n    fruit::Entity::find().filter(fruit::Column::Stock.gt(0i32)),\n    db\n).await?;\n")))}u.isMDXComponent=!0}}]);