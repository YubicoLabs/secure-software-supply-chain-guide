"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[648],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),o=r(6010);const a={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,i),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),o=r(7294),a=r(6010),i=r(2466),u=r(6550),s=r(1980),l=r(7392),c=r(12);function d(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}function p(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=p(e),[i,u]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[s,l]=f({queryString:r,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,c.Nk)(r);return[n,(0,o.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),g=(()=>{const e=s??d;return m({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),l(e),h(e)}),[l,h,a]),tabValues:a}}var g=r(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:u,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=l[r].value;n!==u&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t)},l.map((e=>{let{value:t,label:r,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,a.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":u===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=h(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",b.tabList)},o.createElement(y,(0,n.Z)({},e,t)),o.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return o.createElement(k,(0,n.Z)({key:String(t)},e))}},8598:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>l,toc:()=>d});var n=r(7462),o=(r(7294),r(3905)),a=r(4866),i=r(5162);const u={sidebar_position:1},s="Administrator guide",l={unversionedId:"guides/administrators",id:"guides/administrators",title:"Administrator guide",description:"This page will provide guidance for administrators to help add configurations and settings to your source control tools to prevent unwanted access, and require the use of commit signing.",source:"@site/docs/guides/administrators.mdx",sourceDirName:"guides",slug:"/guides/administrators",permalink:"/docs/guides/administrators",draft:!1,editUrl:"https://github.com/YubicoLabs/secure-software-supply-chain-guide/tree/main/docs/docs/guides/administrators.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Role based guides",permalink:"/docs/guides"},next:{title:"Developer guide",permalink:"/docs/guides/developers"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Account protection",id:"account-protection",level:2},{value:"Enforce 2FA on your personal account",id:"enforce-2fa-on-your-personal-account",level:3},{value:"Enforce 2FA in your organization",id:"enforce-2fa-in-your-organization",level:3},{value:"Communicate your organization\u2019s preference for Security Keys",id:"communicate-your-organizations-preference-for-security-keys",level:3},{value:"Commit signing",id:"commit-signing",level:2},{value:"Enforce branch protection rules",id:"enforce-branch-protection-rules",level:3}],p={toc:d},m="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"administrator-guide"},"Administrator guide"),(0,o.kt)("p",null,"This page will provide guidance for administrators to help add configurations and settings to your source control tools to prevent unwanted access, and require the use of commit signing."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The administrator refers to any person/organization responsible for overseeing and owning the source control tools where your code is managed. This can range from a single developer looking to protect their personal repository, or large enterprises with a team dedicated to managing developer tools."),(0,o.kt)("p",null,"This page will provide guidance on how to enable MFA and commit signing on GitHub and GitLab."),(0,o.kt)("p",null,"While the guidance on this page isn\u2019t specific to YubiKeys, it will lay the foundations to allow your developers to leverage their security keys for seamless authentication and commit signing."),(0,o.kt)("h2",{id:"account-protection"},"Account protection"),(0,o.kt)("p",null,"We will start by enabling account protection in your source control tool. The main idea is to ",(0,o.kt)("strong",{parentName:"p"},"not")," allow your users to use traditional forms of authentication that are prone to phishing attacks. You will want to require the use of two-factor or multi-factor authentication to access accounts"),(0,o.kt)("h3",{id:"enforce-2fa-on-your-personal-account"},"Enforce 2FA on your personal account"),(0,o.kt)(a.Z,{groupId:"source-control-type",className:"my_tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"GitHub",label:"GitHub",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key"},"Configuring two-factor authentication using a security\nkey"))),(0,o.kt)(i.Z,{value:"GitLab",label:"GitLab",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/profile/account/two_factor_authentication.html#enable-two-factor-authentication"},"Enable two-factor authentication")))),(0,o.kt)("h3",{id:"enforce-2fa-in-your-organization"},"Enforce 2FA in your organization"),(0,o.kt)(a.Z,{groupId:"source-control-type",className:"my_tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"GitHub",label:"GitHub",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization#requiring-two-factor-authentication-in-your-organization"},"Requiring two-factor authentication in your organization"))),(0,o.kt)(i.Z,{value:"GitLab",label:"GitLab",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/profile/account/two_factor_authentication.html#enable-two-factor-authentication"},"Enable two-factor authentication")))),(0,o.kt)("admonition",{title:"Ensure you understand the effects of changing this setting",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Before you require the use of 2FA in your source control tool, ensure that you understand how this will affect you and your users. For instance, your tool may remove all members in your organization who do not have a 2FA factor enabled.")),(0,o.kt)("h3",{id:"communicate-your-organizations-preference-for-security-keys"},"Communicate your organization\u2019s preference for Security Keys"),(0,o.kt)("p",null,"Both of the tools listed above allow for the user to select a variety of different traditional 2FA methods, such as an authenticator app, or SMS OTP. Ensure that you clearly articulate to developers in your organization that they should be enrolling their YubiKey as their 2FA method."),(0,o.kt)("p",null,"Some tools may allow you to view event/audit logs to see 2FA enrollment events. This will allow you to ensure that users are enrolling security keys vs enrolling other 2FA types."),(0,o.kt)("h2",{id:"commit-signing"},"Commit signing"),(0,o.kt)("p",null,"Next let\u2019s dive into steps that administrators can take to ensure that users are required to submit commits that have been cryptographically signed by a trusted source. This will be done by enforcing branch protection rules on a specific repository."),(0,o.kt)("p",null,"We are focused on enforcing branch protection rules that require commit signing, but you should also take the opportunity to add other requirements such as requiring pull requests and approvals for your main branch."),(0,o.kt)("h3",{id:"enforce-branch-protection-rules"},"Enforce branch protection rules"),(0,o.kt)(a.Z,{groupId:"source-control-type",className:"my_tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"GitHub",label:"GitHub",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule#creating-a-branch-protection-rule"},"Create a branch protection rule"))),(0,o.kt)(i.Z,{value:"GitLab",label:"GitLab",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/project/repository/push_rules.html#prevent-unintended-consequences"},"Reject unsigned commits")))),(0,o.kt)("p",null,"Note that signing commits will require that your developers generate either SSH or GPG keys using their YubiKeys. The next page, ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/developers"},"Developer guide"),", will cover the steps needed to add signing keys to a developers account in more detail. It\u2019s also important for administrators to ensure that developer machines have the tools needed to help in the generation of signing keys."))}f.isMDXComponent=!0}}]);