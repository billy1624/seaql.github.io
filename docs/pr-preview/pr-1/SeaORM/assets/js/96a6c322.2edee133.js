"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[7859],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=p;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},16115:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={},s="JSON",c={unversionedId:"basic-crud/json",id:"version-0.5.x/basic-crud/json",title:"JSON",description:"Select JSON Result",source:"@site/versioned_docs/version-0.5.x/05-basic-crud/06-json.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/json",permalink:"/SeaORM/docs/0.5.x/basic-crud/json",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.5.x/05-basic-crud/06-json.md",tags:[],version:"0.5.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677053267,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:6,frontMatter:{},sidebar:"version-0.5.x/tutorialSidebar",previous:{title:"Delete",permalink:"/SeaORM/docs/0.5.x/basic-crud/delete"},next:{title:"Raw SQL",permalink:"/SeaORM/docs/0.5.x/basic-crud/raw-sql"}},i={},l=[{value:"Select JSON Result",id:"select-json-result",level:2}],u={toc:l};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"json"},"JSON"),(0,a.kt)("h2",{id:"select-json-result"},"Select JSON Result"),(0,a.kt)("p",null,"All SeaORM selects are capable of returning ",(0,a.kt)("inlineCode",{parentName:"p"},"serde_json::Value"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// Find by id\nlet cake: Option<serde_json::Value> = Cake::find_by_id(1)\n    .into_json()\n    .one(db)\n    .await?;\n\nassert_eq!(\n    cake,\n    Some(serde_json::json!({\n        "id": 1,\n        "name": "Cheese Cake"\n    }))\n);\n\n// Find with filter\nlet cakes: Vec<serde_json::Value> = Cake::find()\n    .filter(cake::Column::Name.contains("chocolate"))\n    .order_by_asc(cake::Column::Name)\n    .into_json()\n    .all(db)\n    .await?;\n\nassert_eq!(\n    cakes,\n    vec![\n        serde_json::json!({\n            "id": 2,\n            "name": "Chocolate Forest"\n        }),\n        serde_json::json!({\n            "id": 8,\n            "name": "Chocolate Cupcake"\n        }),\n    ]\n);\n\n// Paginate json result\nlet cake_pages: Paginator<_> = Cake::find()\n    .filter(cake::Column::Name.contains("chocolate"))\n    .order_by_asc(cake::Column::Name)\n    .into_json()\n    .paginate(db, 50);\n\nwhile let Some(cakes) = cake_pages.fetch_and_next().await? {\n    // Do something on cakes: Vec<serde_json::Value>\n}\n')))}d.isMDXComponent=!0}}]);