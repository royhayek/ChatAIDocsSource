"use strict";(self.webpackChunkchatai_documentation=self.webpackChunkchatai_documentation||[]).push([[2107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(y,o(o({ref:t},c),{},{components:a})):n.createElement(y,o({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4451:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2},o="API Key",s={unversionedId:"tutorial-basics/api-key",id:"tutorial-basics/api-key",title:"API Key",description:"In this step, we are going to create an OpenAI API Key.",source:"@site/docs/tutorial-basics/api-key.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/api-key",permalink:"/ChatAIDocs/docs/tutorial-basics/api-key",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/api-key.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Package Name",permalink:"/ChatAIDocs/docs/tutorial-basics/package-name"},next:{title:"Firebase",permalink:"/ChatAIDocs/docs/tutorial-basics/firebase"}},p={},l=[{value:"Creating the key",id:"creating-the-key",level:2},{value:"Setting the key",id:"setting-the-key",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-key"},"API Key"),(0,r.kt)("p",null,"In this step, we are going to create an ",(0,r.kt)("strong",{parentName:"p"},"OpenAI API Key"),"."),(0,r.kt)("h2",{id:"creating-the-key"},"Creating the key"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to ",(0,r.kt)("a",{parentName:"li",href:"https://platform.openai.com/account/api-keys"},"https://platform.openai.com/account/api-keys"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Login with your existing account or sign up.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Api Key 1",src:a(2038).Z,width:"3358",height:"1718"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a secret key, and note it somewhere")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Api Key 2",src:a(4616).Z,width:"3358",height:"1718"})),(0,r.kt)("admonition",{title:"Free Quota",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"As a free trial API user, you will benefit from an initial credit of $5 that expires after three months."),(0,r.kt)("p",{parentName:"admonition"},"Upgrading to the pay-as-you-go plan will increase your usage quota to $120/month which is required when deploying the app and going live.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set up a paid account for production")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Api Key 4",src:a(572).Z,width:"3358",height:"1702"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can monitor your usage under the usage tab")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Api Key 4",src:a(1167).Z,width:"3358",height:"1702"})),(0,r.kt)("h2",{id:"setting-the-key"},"Setting the key"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Go to the project files, open the ",(0,r.kt)("strong",{parentName:"li"},".env")," file and paste your ",(0,r.kt)("strong",{parentName:"li"},"API Key"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Api Key 3",src:a(1781).Z,width:"3358",height:"1718"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Save and move to the next step")),(0,r.kt)("admonition",{title:"Changing the key",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The app should be rebuilt and restarted whenever any change is made to the key within the env file")))}d.isMDXComponent=!0},2038:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api-key-1-139738c30f4fcac5fe88b6c4a1af2910.png"},4616:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api-key-2-bf5736712028334ffc732865d995463e.png"},1781:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api-key-3-a4029f69d86e2280ac07c68531e34127.png"},572:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api-key-4-534dbb337635f192dbf22a03e86bd4c7.png"},1167:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api-key-5-d841b7e68a15d3eb34d9167609ca5ebc.png"}}]);