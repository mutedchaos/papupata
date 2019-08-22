(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{197:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return o});var r=t(9),a=t(239),i=t(235),l=t(232),c=t(240);function o(e){var n=e.withMiddleware;return Object(r.d)(a.a,null,Object(r.d)(i.a,null,Object(r.d)(l.a,null,Object(r.d)("h1",null,"API Reference"),Object(r.d)("h2",null,"class DeclaredAPI"),Object(r.d)("h3",null,"method implement",n&&"WithMiddleware")),Object(r.d)(c.h,null,"Implements an API using express"),Object(r.d)(c.k,null,"Instead of calling the methods on an express app or router yourself, you use this function to have papupata do it for you."),Object(r.d)(c.g,null,n&&Object(r.d)(c.f,{name:"middleware",dataType:"Function[]"},"An array of express middleware functions."),Object(r.d)(c.f,{name:"implementation",dataType:"Function"},"A function that implements the route. Specified as follows",Object(r.d)(c.g,null,Object(r.d)(c.f,{name:"req",dataType:"Request"},"This is a typed express request -- that is, body, params and query have been replaced with typed versions of themselves."),Object(r.d)(c.f,{name:"res",dataType:"Response"},"Express response corresponding to the request.")),Object(r.d)(c.e,null,"ResponseType, ServerResponseType, or a promise of either"),Object(r.d)("ul",null,Object(r.d)("li",null,'Do note that the "next" parameter typically used in routes is not present'),Object(r.d)("li",null,"Anything thrown (includes returned rejected promises) is given to the usual next function"),Object(r.d)("li",null,"If undefined is returned, nothing is sent automatically. This could at times explain hanging requests. Of course, unless you explicitly declared the API to return undefined, you should see type errors, too.")))),Object(r.d)(c.e,null,"Nothing"),Object(r.d)(c.a,null,Object(r.d)("ul",null,Object(r.d)("li",null,"Either application of router must be configured or the function throws"),Object(r.d)("li",null,"You can implement an API multiple times, but it is unlikely to do you any good."),Object(r.d)("li",null,"There is at this time no way to cleanly implement an API that does not just return its value, and instead, say, streams it."))),Object(r.d)(c.d,null,Object(r.d)(c.b,{label:"Declaration"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff/:param')\n              .params(['param'] as const)\n              .query(['q'] as const)\n              .body({key: string})\n              .response<string>()\n          "),n?Object(r.d)(c.b,{label:"Usage in implementation"},"\n            await myAPI.implementWithMiddleware(\n              [(req, res, next) => { console.log(req.url); next() }],\n              (req, res) => {\n              const {q} = req.query,\n                {param} = req.params,\n                {key} = req.body\n              res.set('x-my-header', 'Hello')\n              return [param, q, key].join()\n            })            \n          "):Object(r.d)(c.b,{label:"Usage in implementation"},"\n            await myAPI.implement((req, res) => {\n              const {q} = req.query,\n                {param} = req.params,\n                {key} = req.body\n              res.set('x-my-header', 'Hello')\n              return [param, q, key].join()\n            })            \n          "),Object(r.d)(c.b,{label:"Usage in invocation"},"\n            const response = await myAPI({param: 'abc', q: 'def', key: 'ghi'})            \n            // Response in the example will be abc,def,ghi\n          "))))}},228:function(e,n,t){"use strict";t.d(n,"b",function(){return r}),t.d(n,"d",function(){return a}),t.d(n,"a",function(){return i}),t.d(n,"f",function(){return l}),t.d(n,"c",function(){return c}),t.d(n,"e",function(){return o});var r={brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},a={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},i={xs:0,sm:576,md:768,lg:992,xl:1200},l={md:720,lg:960,xl:1140},c={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},o={header:60}},231:function(e,n,t){"use strict";t.d(n,"b",function(){return d});var r=t(9),a=t(0),i=t.n(a),l=t(76),c=t.n(l);t.d(n,"a",function(){return c.a});t(234),t(10).default.enqueue;var o=i.a.createContext({});function u(e){var n=e.staticQueryData,t=e.data,a=e.query,l=e.render,c=t?t.data:n[a]&&n[a].data;return Object(r.d)(i.a.Fragment,null,c&&l(c),!c&&Object(r.d)("div",null,"Loading (StaticQuery)"))}var d=function(e){var n=e.data,t=e.query,a=e.render,i=e.children;return Object(r.d)(o.Consumer,null,function(e){return Object(r.d)(u,{data:n,query:t,render:a||i,staticQueryData:e})})}},232:function(e,n,t){"use strict";var r=t(230),a=t(9),i=(t(0),t(228)),l=t(233),c=Object(r.a)("div",{target:"e1c6zxln0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(l.a)(i.f.lg),"em;");n.a=function(e){var n=e.children,t=e.className;return Object(a.d)(c,{className:t},n)}},233:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=t(228),a=function(e){return e/r.c.fontSize.regular}},234:function(e,n,t){var r;e.exports=(r=t(237))&&r.default||r},235:function(e,n,t){"use strict";var r=t(230),a=t(9),i=(t(0),t(228)),l=Object(r.a)("div",{target:"e20rco30"})("display:block;flex:1;position:relative;padding:",i.c.containerPadding,"rem;margin-bottom:3rem;");n.a=function(e){var n=e.children,t=e.className;return Object(a.d)(l,{className:t},n)}},236:function(e){e.exports={data:{site:{siteMetadata:{title:"Papupata Documentation",description:"Documentation for the typescript library papupata, for utilizing types for AJAX requests."}}}}},237:function(e,n,t){"use strict";t.r(n);t(22);var r=t(0),a=t.n(r),i=t(101);n.default=function(e){var n=e.location,t=e.pageResources;return t?a.a.createElement(i.a,Object.assign({location:n,pageResources:t},t.json)):null}},238:function(e){e.exports={data:{site:{pathPrefix:"/papupata"}}}},239:function(e,n,t){"use strict";var r=t(9),a=t(236),i=t(0),l=t(242),c=t.n(l),o=t(231),u=(t(243),t(228)),d=t(233),s="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+u.c.fontSize.regular+"px !important;\n    line-height: "+u.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+u.d.sansSerif+";\n    color: "+u.b.black+";\n    background-color: "+u.b.white+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+u.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+u.b.ui.light+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+u.b.ui.light+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+u.b.ui.whisper+";\n        }\n        tr {\n          background-color: "+u.b.ui.whisper+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+u.b.black+";\n    font-weight: 600;\n    line-height: "+u.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+u.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+u.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+u.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+u.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+u.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+u.b.ui.light+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+u.b.ui.light+";\n    color: "+u.b.gray.calm+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(d.a)(u.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n",b=t(230),p=t(245),f=t(232),m=Object(b.a)("header",{target:"e14yya1q0"})("height:",u.e.header,"px;padding:0 ",u.c.containerPadding,"rem;background-color:",u.b.brand,";color:",Object(p.a)(.5,u.b.white),";"),h=Object(b.a)(f.a,{target:"e14yya1q1"})({name:"voneje",styles:"display:flex;flex-direction:row;align-items:center;height:100%;"}),j=Object(b.a)(o.a,{target:"e14yya1q2"})("color:",u.b.white,";font-size:1.5rem;font-weight:600;&:hover,&:focus{text-decoration:none;}"),O=function(e){var n=e.title;return Object(r.d)(m,null,Object(r.d)(h,null,Object(r.d)(j,{to:"/"},n)))},g=Object(b.a)("div",{target:"e17su9850"})({name:"zf0iqh",styles:"display:flex;flex-direction:column;min-height:100vh;"}),y=function(e){var n=e.children,t=e.className;return Object(r.d)(i.Fragment,null,Object(r.d)(r.a,{styles:function(){return Object(r.c)(s)}}),Object(r.d)(g,{className:t},n))},v=Object(b.a)("main",{target:"e1qy7fsr0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),P=function(e){var n=e.children,t=e.className;return Object(r.d)(v,{className:t},n)},x=t(229),A=(t(140),t(141),t(244),t(238)),I=t(23);function k(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  ",";\n"]);return k=function(){return e},e}var w=Object(x.a)(o.a)(k(),function(e){return"true"===e.current?"\n  \n  font-weight: bold;\n  ":""});function q(e){var n=e.link,t=e.children;return Object(r.d)("div",null,Object(r.d)(o.b,{query:"87648239",render:function(e){var a=e.site.pathPrefix;return Object(r.d)(I.Location,null,function(e){var i=e.location;return Object(r.d)(w,{current:[a+n,n].includes(i.pathname)?"true":"false",to:n},t)})},data:A}))}function D(){var e=M(["\n"]);return D=function(){return e},e}function z(){var e=M(["\n  font-style: italic;\n"]);return z=function(){return e},e}function T(){var e=M(["\n  margin-left: 20px;\n"]);return T=function(){return e},e}function R(){var e=M([""]);return R=function(){return e},e}function S(){var e=M(["\n  border-right: 1px solid #aaa;\n  margin-right: 30px;\n  padding-right: 30px;\n  padding-left: 30px;\n  margin-top: 30px;\n"]);return S=function(){return e},e}function M(e,n){return n||(n=e.slice(0)),e.raw=n,e}var N=x.a.div(S()),C=x.a.h2(R()),U=x.a.div(T()),F=function(e){var n=e.children;return Object(r.d)("span",null,n,"()")},H=x.a.span(z()),L=x.a.span(D());function W(){return Object(r.d)(N,null,Object(r.d)(C,null,"Table of contents"),Object(r.d)(q,{link:"/what-is-papupata"},"What is papupata?"),Object(r.d)(q,{link:"/getting-started"},"Getting started"),Object(r.d)(q,{link:"/api-reference"},"API Reference"),Object(r.d)(U,null,Object(r.d)(q,{link:"/api/APIDeclaration"},"class APIDeclaration"),Object(r.d)(U,null,Object(r.d)(q,{link:"/api/APIDeclaration/configure"},Object(r.d)(F,null,"configure")),Object(r.d)(q,{link:"/api/APIDeclaration/declareDeleteAPI"},Object(r.d)(F,null,"declareDeleteAPI")),Object(r.d)(q,{link:"/api/APIDeclaration/declareGetAPI"},Object(r.d)(F,null,"declareGetAPI")),Object(r.d)(q,{link:"/api/APIDeclaration/declarePostAPI"},Object(r.d)(F,null,"declarePostAPI")),Object(r.d)(q,{link:"/api/APIDeclaration/declarePutAPI"},Object(r.d)(F,null,"declarePutAPI"))),Object(r.d)(q,{link:"/api/IncompleteAPIDeclaration"},"IncompleteAPIDeclaration"),Object(r.d)(U,null,Object(r.d)(q,{link:"/api/IncompleteAPIDeclaration/params"},Object(r.d)(F,null,"params")),Object(r.d)(q,{link:"/api/IncompleteAPIDeclaration/query"},Object(r.d)(F,null,"query")),Object(r.d)(q,{link:"/api/IncompleteAPIDeclaration/optionalQuery"},Object(r.d)(F,null,"optionalQuery")),Object(r.d)(q,{link:"/api/IncompleteAPIDeclaration/queryBool"},Object(r.d)(F,null,"queryBool")),Object(r.d)(q,{link:"/api/IncompleteAPIDeclaration/body"},Object(r.d)(F,null,"body")),Object(r.d)(q,{link:"/api/IncompleteAPIDeclaration/response"},Object(r.d)(F,null,"response"))),Object(r.d)(q,{link:"/api/DeclaredAPI"},"DeclaredAPI"),Object(r.d)(U,null,Object(r.d)(q,{link:"/api/DeclaredAPI/invoke"},Object(r.d)(F,null,"invoke")),Object(r.d)(q,{link:"/api/DeclaredAPI/getURL"},Object(r.d)(F,null,"getURL")),Object(r.d)(q,{link:"/api/DeclaredAPI/implement"},Object(r.d)(F,null,"implement")),Object(r.d)(q,{link:"/api/DeclaredAPI/implementation"},Object(r.d)(L,null,"implementation")),Object(r.d)(q,{link:"/api/DeclaredAPI/implementWithMiddleware"},Object(r.d)(F,null,"implementWithMiddleware")),Object(r.d)(q,{link:"/api/DeclaredAPI/ResponseType"},Object(r.d)(H,null,"ResponseType")),Object(r.d)(q,{link:"/api/DeclaredAPI/ServerResponseType"},Object(r.d)(H,null,"ServerResponseType")),Object(r.d)(q,{link:"/api/DeclaredAPI/BodyType"},Object(r.d)(H,null,"BodyType")),Object(r.d)(q,{link:"/api/DeclaredAPI/CallArgsType"},Object(r.d)(H,null,"CallArgsType")),Object(r.d)(q,{link:"/api/DeclaredAPI/RequestType"},Object(r.d)(H,null,"RequestType"))),Object(r.d)(q,{link:"/api/fetchAdapter"},"fetchAdapter"),Object(r.d)(q,{link:"/api/requestPromiseAdapter"},"requestPromiseAdapter")))}function B(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  display: flex;\n"]);return B=function(){return e},e}var Q=x.a.div(B());function E(e){var n=e.children;return Object(r.d)(Q,null,Object(r.d)(W,null),n)}n.a=function(e){var n=e.children;return Object(r.d)(o.b,{query:"991718019",render:function(e){return Object(r.d)(y,null,Object(r.d)(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]}),Object(r.d)(O,{title:e.site.siteMetadata.title}),Object(r.d)(E,null,Object(r.d)(P,null,n)))},data:a})}},240:function(e,n,t){"use strict";t.d(n,"i",function(){return p}),t.d(n,"j",function(){return f}),t.d(n,"h",function(){return j}),t.d(n,"k",function(){return O}),t.d(n,"g",function(){return g}),t.d(n,"f",function(){return y}),t.d(n,"e",function(){return v}),t.d(n,"a",function(){return P}),t.d(n,"d",function(){return x}),t.d(n,"b",function(){return A}),t.d(n,"c",function(){return I});t(17);var r=t(9),a=t(229),i=t(0),l=t.n(i),c=t(241);function o(){var e=b(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]);return o=function(){return e},e}function u(){var e=b([""]);return u=function(){return e},e}function d(){var e=b([""]);return d=function(){return e},e}function s(){var e=b([""]);return s=function(){return e},e}function b(e,n){return n||(n=e.slice(0)),e.raw=n,e}var p=a.a.section(s()),f=a.a.h4(d()),m=a.a.h5(u()),h=a.a.section(o()),j=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Purpose"),n)},O=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Usage"),n)},g=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Parameters"),Object(r.d)("table",null,Object(r.d)("thead",null,Object(r.d)("tr",null,Object(r.d)("th",null,"Name"),Object(r.d)("th",null,"Type"),Object(r.d)("th",null,"Description"))),Object(r.d)("tbody",null,n)))},y=function(e){var n=e.children,t=e.name,a=e.dataType;return Object(r.d)("tr",null,Object(r.d)("td",null,t),Object(r.d)("td",null,a),Object(r.d)("td",null,n))},v=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Returns"),n)},P=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Caveats"),n)},x=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Examples"),n)},A=function(e){var n=e.children,t=e.label;return Object(r.d)(l.a.Fragment,null,t&&Object(r.d)(m,null,t),Object(r.d)(c.a,{language:"typescript"},n))},I=function(e){var n=e.children;return Object(r.d)(h,null,Object(r.d)(m,null,"Common to examples below:"),n)}},241:function(e,n,t){"use strict";t.d(n,"a",function(){return u});t(246),t(77),t(21);var r=t(9),a=(t(0),t(229)),i=t(472),l=t(471);function c(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}([""]);return c=function(){return e},e}var o=a.a.div(c()),u=function(e){var n=e.language,t=e.children;return Object(r.d)(o,null,Object(r.d)(i.a,{language:n,style:l.a},function(e){var n=e.split("\n");for(;n.length&&!n[0].trim();)n.shift();for(;n.length&&!n[n.length-1].trim();)n.pop();var t=(n[0].match(/^\s+/)||[""])[0];return n.map(function(e){return e.startsWith(t)?e.substring(t.length):e}).join("\n")}(t)))}}}]);
//# sourceMappingURL=component---src-pages-api-declared-api-implement-tsx-7f8125c7502ed517452a.js.map