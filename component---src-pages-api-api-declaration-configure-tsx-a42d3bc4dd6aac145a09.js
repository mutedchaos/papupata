(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{186:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return s});var r=t(7),a=t(223),i=t(219),c=t(216),l=t(224),o=t(236),u=t(215),d=t(237);function s(){return Object(r.d)(a.a,null,Object(r.d)(i.a,null,Object(r.d)(c.a,null,Object(r.d)("h1",null,"API Reference"),Object(r.d)("h2",null,"class APIDeclaration"),Object(r.d)("h3",null,"method configure")),Object(r.d)(l.h,null,"Configures papupata for implementing or calling APIs."),Object(r.d)(l.k,null,"This method must be called before any of the declared APIs are implemented or called. Failure to having done so will cause the operation to fail."),Object(r.d)(l.g,null,Object(r.d)(l.f,{name:"config",dataType:Object(r.d)("a",{href:"#config"},"Config")},"Configuration. See below. Instead of an actual config null can be provided to unconfigure papupata, which can be useful to reset things for tests, for example.")),Object(r.d)(l.e,null,"Nothing"),Object(r.d)("h3",{id:"config"},"config object"),Object(r.d)(o.b,{includeRequiredColumn:!0,context:"APIDeclaration/configure"},Object(r.d)(o.d,{name:"baseURL",dataType:"string",required:"Conditionally *1"},"Base URL used for all API invocations. This can be an empty string, in which case the calls on the browser are made relative to the root of the current host."),Object(r.d)(o.d,{name:"makeRequest",dataType:"Function",required:"Conditionally *2"},Object(r.d)("p",null,"This function is used internally for calling APIs. The function is as follows:"),Object(r.d)(l.g,null,Object(r.d)(l.f,{name:"method",dataType:"string"}),Object(r.d)(l.f,{name:"url",dataType:"string"}),Object(r.d)(l.f,{name:"query",dataType:"object"}),Object(r.d)(l.f,{name:"body",dataType:"object"}),Object(r.d)(l.f,{name:"params",dataType:"object"},"Do note that params are already baked into the URL, there is no need for the function to do that.")),Object(r.d)(l.e,null,"Promise","<any>","; the promise, on a successful request, should resolve with the response type of the declared request. Typically this means parsing the JSON data."),Object(r.d)("p",null,"Two adapters are supplied with papupata, ",Object(r.d)(u.a,{to:"/api/fetchAdapter"},"one for fetch")," and"," ",Object(r.d)(u.a,{to:"/api/requestPromiseAdapter"},"one for request-promise"),".")),Object(r.d)(o.d,{name:"application",dataType:"Express application",required:"Conditionally *3"},"Express application, on which the declared APIs will be attached. If you make sure all the api declarations are invoked as the routing is being set up then using the application is fine, but if there is a chance that routes will be added later then the router is the better option."),Object(r.d)(o.d,{name:"router",dataType:"Express router",required:"Conditionally *3"},"Express router, on which the declared APIs will be attached. The main advantage of using a router over app is that APIs can be added after the whole application has been configured, assuming no middleware is added to the router itself after the routes.")),Object(r.d)("div",null,"*1: For invoking APIs or calling the getURL method on them"),Object(r.d)("div",null,"*2: For invoking APIs"),Object(r.d)("div",null,"*3: For implementing APIs exactly one of either app or router must be provided"),Object(r.d)(l.d,null,Object(r.d)(l.c,null,"For all examples below, it is assumed that the API declaration happens in ./api.ts such as this:",Object(r.d)(l.b,{label:"api.ts"},"\n            import {APIDeclaration} from 'papupata'\n            export const api = new APIDeclaration()\n            ")),Object(r.d)(l.b,{label:"Simple server configuration"},"\n            import express from 'express'\n            import {api} from './api'\n            const app = express()\n            api.configure({\n              application: app\n            })\n          "),Object(r.d)(d.a,null,"It needs to be verified that the example below works"),Object(r.d)(l.b,{label:"Server with router"},"\n            import express, {Router} from 'express'\n            import {api} from './api'          \n            const app = express()\n            const router = new Router()\n            app.use(router)\n            api.configure({\n              router\n            })\n          "),Object(r.d)(l.b,{label:"Configuring browser to use fetch from the local host"},"\n            import {api} from './api'\n            import {fetchAdapter} from 'papupata/dist/main/fetch-adapter'\n            api.configure({\n              baseURL: '',\n              makeRequest: fetchAdapter\n            })\n          "))))}},212:function(e,n,t){"use strict";t.d(n,"b",function(){return r}),t.d(n,"d",function(){return a}),t.d(n,"a",function(){return i}),t.d(n,"f",function(){return c}),t.d(n,"c",function(){return l}),t.d(n,"e",function(){return o});var r={brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},a={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},i={xs:0,sm:576,md:768,lg:992,xl:1200},c={md:720,lg:960,xl:1140},l={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},o={header:60}},215:function(e,n,t){"use strict";t.d(n,"b",function(){return d});var r=t(7),a=t(0),i=t.n(a),c=t(64),l=t.n(c);t.d(n,"a",function(){return l.a});t(218),t(8).default.enqueue;var o=i.a.createContext({});function u(e){var n=e.staticQueryData,t=e.data,a=e.query,c=e.render,l=t?t.data:n[a]&&n[a].data;return Object(r.d)(i.a.Fragment,null,l&&c(l),!l&&Object(r.d)("div",null,"Loading (StaticQuery)"))}var d=function(e){var n=e.data,t=e.query,a=e.render,i=e.children;return Object(r.d)(o.Consumer,null,function(e){return Object(r.d)(u,{data:n,query:t,render:a||i,staticQueryData:e})})}},216:function(e,n,t){"use strict";var r=t(214),a=t(7),i=(t(0),t(212)),c=t(217),l=Object(r.a)("div",{target:"e1c6zxln0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(c.a)(i.f.lg),"em;");n.a=function(e){var n=e.children,t=e.className;return Object(a.d)(l,{className:t},n)}},217:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=t(212),a=function(e){return e/r.c.fontSize.regular}},218:function(e,n,t){var r;e.exports=(r=t(221))&&r.default||r},219:function(e,n,t){"use strict";var r=t(214),a=t(7),i=(t(0),t(212)),c=Object(r.a)("div",{target:"e20rco30"})("display:block;flex:1;position:relative;padding:",i.c.containerPadding,"rem;margin-bottom:3rem;");n.a=function(e){var n=e.children,t=e.className;return Object(a.d)(c,{className:t},n)}},220:function(e){e.exports={data:{site:{siteMetadata:{title:"Papupata Documentation",description:"Documentation for the typescript library papupata, for utilizing types for AJAX requests."}}}}},221:function(e,n,t){"use strict";t.r(n);t(19);var r=t(0),a=t.n(r),i=t(88);n.default=function(e){var n=e.location,t=e.pageResources;return t?a.a.createElement(i.a,Object.assign({location:n,pageResources:t},t.json)):null}},222:function(e){e.exports={data:{site:{pathPrefix:"/papupata"}}}},223:function(e,n,t){"use strict";var r=t(7),a=t(220),i=t(0),c=t(226),l=t.n(c),o=t(215),u=(t(227),t(212)),d=t(217),s="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+u.c.fontSize.regular+"px !important;\n    line-height: "+u.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+u.d.sansSerif+";\n    color: "+u.b.black+";\n    background-color: "+u.b.white+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+u.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+u.b.ui.light+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+u.b.ui.light+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+u.b.ui.whisper+";\n        }\n        tr {\n          background-color: "+u.b.ui.whisper+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+u.b.black+";\n    font-weight: 600;\n    line-height: "+u.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+u.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+u.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+u.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+u.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+u.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+u.b.ui.light+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+u.b.ui.light+";\n    color: "+u.b.gray.calm+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(d.a)(u.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n",b=t(214),p=t(229),f=t(216),h=Object(b.a)("header",{target:"e14yya1q0"})("height:",u.e.header,"px;padding:0 ",u.c.containerPadding,"rem;background-color:",u.b.brand,";color:",Object(p.a)(.5,u.b.white),";"),m=Object(b.a)(f.a,{target:"e14yya1q1"})({name:"voneje",styles:"display:flex;flex-direction:row;align-items:center;height:100%;"}),j=Object(b.a)(o.a,{target:"e14yya1q2"})("color:",u.b.white,";font-size:1.5rem;font-weight:600;&:hover,&:focus{text-decoration:none;}"),O=function(e){var n=e.title;return Object(r.d)(h,null,Object(r.d)(m,null,Object(r.d)(j,{to:"/"},n)))},g=Object(b.a)("div",{target:"e17su9850"})({name:"zf0iqh",styles:"display:flex;flex-direction:column;min-height:100vh;"}),v=function(e){var n=e.children,t=e.className;return Object(r.d)(i.Fragment,null,Object(r.d)(r.a,{styles:function(){return Object(r.c)(s)}}),Object(r.d)(g,{className:t},n))},y=Object(b.a)("main",{target:"e1qy7fsr0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),x=function(e){var n=e.children,t=e.className;return Object(r.d)(y,{className:t},n)},w=t(213),P=(t(129),t(130),t(228),t(222)),A=t(20);function I(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  ",";\n"]);return I=function(){return e},e}var k=Object(w.a)(o.a)(I(),function(e){return"true"===e.current?"\n  \n  font-weight: bold;\n  ":""});function D(e){var n=e.link,t=e.children;return Object(r.d)("div",null,Object(r.d)(o.b,{query:"87648239",render:function(e){var a=e.site.pathPrefix;return Object(r.d)(A.Location,null,function(e){var i=e.location;return Object(r.d)(k,{current:[a+n,n].includes(i.pathname)?"true":"false",to:n},t)})},data:P}))}function q(){var e=C(["\n  font-style: italic;\n"]);return q=function(){return e},e}function T(){var e=C(["\n  margin-left: 20px;\n"]);return T=function(){return e},e}function R(){var e=C([""]);return R=function(){return e},e}function z(){var e=C(["\n  border-right: 1px solid #aaa;\n  margin-right: 30px;\n  padding-right: 30px;\n  padding-left: 30px;\n  margin-top: 30px;\n"]);return z=function(){return e},e}function C(e,n){return n||(n=e.slice(0)),e.raw=n,e}var S=w.a.div(z()),N=w.a.h2(R()),M=w.a.div(T()),F=function(e){var n=e.children;return Object(r.d)("span",null,n,"()")},L=w.a.span(q());function U(){return Object(r.d)(S,null,Object(r.d)(N,null,"Table of contents"),Object(r.d)(D,{link:"/what-is-papupata"},"What is papupata?"),Object(r.d)(D,{link:"/getting-started"},"Getting started"),Object(r.d)(D,{link:"/api-reference"},"API Reference"),Object(r.d)(M,null,Object(r.d)(D,{link:"/api/APIDeclaration"},"class APIDeclaration"),Object(r.d)(M,null,Object(r.d)(D,{link:"/api/APIDeclaration/configure"},Object(r.d)(F,null,"configure")),Object(r.d)(D,{link:"/api/APIDeclaration/declareDeleteAPI"},Object(r.d)(F,null,"declareDeleteAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/declareGetAPI"},Object(r.d)(F,null,"declareGetAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/declarePostAPI"},Object(r.d)(F,null,"declarePostAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/declarePutAPI"},Object(r.d)(F,null,"declarePutAPI"))),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration"},"IncompleteAPIDeclaration"),Object(r.d)(M,null,Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/params"},Object(r.d)(F,null,"params")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/query"},Object(r.d)(F,null,"query")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/optionalQuery"},Object(r.d)(F,null,"optionalQuery")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/queryBool"},Object(r.d)(F,null,"queryBool")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/body"},Object(r.d)(F,null,"body")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/response"},Object(r.d)(F,null,"response"))),Object(r.d)(D,{link:"/api/DeclaredAPI"},"DeclaredAPI"),Object(r.d)(M,null,Object(r.d)(D,{link:"/api/DeclaredAPI/invoke"},Object(r.d)(F,null)),Object(r.d)(D,{link:"/api/DeclaredAPI/getURL"},Object(r.d)(F,null,"getURL")),Object(r.d)(D,{link:"/api/DeclaredAPI/implement"},Object(r.d)(F,null,"implement")),Object(r.d)(D,{link:"/api/DeclaredAPI/implementWithMiddleware"},Object(r.d)(F,null,"implementWithMiddleware")),Object(r.d)(D,{link:"/api/DeclaredAPI/ResponseType"},Object(r.d)(L,null,"ResponseType")),Object(r.d)(D,{link:"/api/DeclaredAPI/ServerResponseType"},Object(r.d)(L,null,"ServerResponseType")),Object(r.d)(D,{link:"/api/DeclaredAPI/BodyType"},Object(r.d)(L,null,"BodyType")),Object(r.d)(D,{link:"/api/DeclaredAPI/CallArgsType"},Object(r.d)(L,null,"CallArgsType")),Object(r.d)(D,{link:"/api/DeclaredAPI/RequestType"},Object(r.d)(L,null,"RequestType"))),Object(r.d)(D,{link:"/api/fetchAdapter"},"fetchAdapter"),Object(r.d)(D,{link:"/api/requestPromiseAdapter"},"requestPromiseAdapter")))}function B(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  display: flex;\n"]);return B=function(){return e},e}var E=w.a.div(B());function Q(e){var n=e.children;return Object(r.d)(E,null,Object(r.d)(U,null),n)}n.a=function(e){var n=e.children;return Object(r.d)(o.b,{query:"991718019",render:function(e){return Object(r.d)(v,null,Object(r.d)(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]}),Object(r.d)(O,{title:e.site.siteMetadata.title}),Object(r.d)(Q,null,Object(r.d)(x,null,n)))},data:a})}},224:function(e,n,t){"use strict";t.d(n,"i",function(){return p}),t.d(n,"j",function(){return f}),t.d(n,"h",function(){return j}),t.d(n,"k",function(){return O}),t.d(n,"g",function(){return g}),t.d(n,"f",function(){return v}),t.d(n,"e",function(){return y}),t.d(n,"a",function(){return x}),t.d(n,"d",function(){return w}),t.d(n,"b",function(){return P}),t.d(n,"c",function(){return A});t(16);var r=t(7),a=t(213),i=t(0),c=t.n(i),l=t(225);function o(){var e=b(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]);return o=function(){return e},e}function u(){var e=b([""]);return u=function(){return e},e}function d(){var e=b([""]);return d=function(){return e},e}function s(){var e=b([""]);return s=function(){return e},e}function b(e,n){return n||(n=e.slice(0)),e.raw=n,e}var p=a.a.section(s()),f=a.a.h4(d()),h=a.a.h5(u()),m=a.a.section(o()),j=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Purpose"),n)},O=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Usage"),n)},g=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Parameters"),Object(r.d)("table",null,Object(r.d)("thead",null,Object(r.d)("tr",null,Object(r.d)("th",null,"Name"),Object(r.d)("th",null,"Type"),Object(r.d)("th",null,"Description"))),Object(r.d)("tbody",null,n)))},v=function(e){var n=e.children,t=e.name,a=e.dataType;return Object(r.d)("tr",null,Object(r.d)("td",null,t),Object(r.d)("td",null,a),Object(r.d)("td",null,n))},y=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Returns"),n)},x=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Caveats"),n)},w=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Examples"),n)},P=function(e){var n=e.children,t=e.label;return Object(r.d)(c.a.Fragment,null,t&&Object(r.d)(h,null,t),Object(r.d)(l.a,{language:"typescript"},n))},A=function(e){var n=e.children;return Object(r.d)(m,null,Object(r.d)(h,null,"Common to examples below:"),n)}},225:function(e,n,t){"use strict";t.d(n,"a",function(){return u});t(230),t(65),t(18);var r=t(7),a=(t(0),t(213)),i=t(456),c=t(455);function l(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}([""]);return l=function(){return e},e}var o=a.a.div(l()),u=function(e){var n=e.language,t=e.children;return Object(r.d)(o,null,Object(r.d)(i.a,{language:n,style:c.a},function(e){var n=e.split("\n");for(;n.length&&!n[0].trim();)n.shift();for(;n.length&&!n[n.length-1].trim();)n.pop();var t=(n[0].match(/^\s+/)||[""])[0];return n.map(function(e){return e.startsWith(t)?e.substring(t.length):e}).join("\n")}(t)))}},234:function(e,n,t){"use strict";function r(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  border: 2px dotted transparent;\n  padding: 10px;\n  outline: 5px solid transparent;\n"]);return r=function(){return e},e}t.d(n,"a",function(){return a});var a=t(213).a.div(r())},236:function(e,n,t){"use strict";t.d(n,"b",function(){return w}),t.d(n,"c",function(){return P}),t.d(n,"d",function(){return A}),t.d(n,"a",function(){return I});t(16);var r=t(7),a=t(224),i=t(0),c=t(213),l=t(215);function o(){var e=f([""]);return o=function(){return e},e}function u(){var e=f([""]);return u=function(){return e},e}function d(){var e=f([""]);return d=function(){return e},e}function s(){var e=f([""]);return s=function(){return e},e}function b(){var e=f([""]);return b=function(){return e},e}function p(){var e=f([""]);return p=function(){return e},e}function f(e,n){return n||(n=e.slice(0)),e.raw=n,e}var h=c.a.tr(p()),m=c.a.td(b()),j=c.a.td(s()),O=c.a.td(d()),g=c.a.td(u()),v=c.a.td(o()),y=Object(i.createContext)({context:""}),x=function(e){var n=e.name,t=e.children,a=Object(i.useContext)(y).context;return Object(r.d)(m,null,Object(r.d)(l.a,{to:"/api/"+a+"/"+n},t||n))},w=function(e){var n=e.children,t=e.context,i=e.includeRequiredColumn;return Object(r.d)(a.i,null,Object(r.d)(y.Provider,{value:{context:t}},Object(r.d)(a.j,null,"Members"),Object(r.d)("table",null,Object(r.d)("thead",null,Object(r.d)("th",null,"Name"),Object(r.d)("th",null,"Type"),Object(r.d)("th",null,"Data type/return type"),Object(r.d)("th",null,"Description"),i&&Object(r.d)("th",null,"Required")),Object(r.d)("tbody",null,n))))},P=function(e){var n=e.children,t=e.name,a=e.dataType,i=e.required,c=e.displayName;return Object(r.d)(h,null,Object(r.d)(x,{name:t},c),Object(r.d)(j,null,"method"),Object(r.d)(O,null,a),Object(r.d)(g,null,n),void 0!==i&&Object(r.d)(v,null,!0===i?"Yes":!1===i?"No":i))},A=function(e){var n=e.children,t=e.name,a=e.dataType,i=e.required;return Object(r.d)(h,null,Object(r.d)(m,null,t),Object(r.d)(j,null,"property"),Object(r.d)(O,null,a),Object(r.d)(g,null,n),void 0!==i&&Object(r.d)(v,null,!0===i?"Yes":!1===i?"No":i))},I=function(e){var n=e.children,t=e.name;return Object(r.d)(h,null,Object(r.d)(m,null,t),Object(r.d)(j,null,"property"),Object(r.d)(O,null,"n/a"),Object(r.d)(g,null,n,". Type type itself must be accessed using the typeof operator."))}},237:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=t(7),a=(t(0),t(213)),i=t(234);function c(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  border-color: yellowgreen;\n  background-color: #ffffa7;\n  outline-color: #ffffa7;\n  margin: 20px;\n"]);return c=function(){return e},e}var l=Object(a.a)(i.a)(c()),o=function(e){var n=e.children;return Object(r.d)(l,null,n||"This section needs more work.")}}}]);
//# sourceMappingURL=component---src-pages-api-api-declaration-configure-tsx-a42d3bc4dd6aac145a09.js.map