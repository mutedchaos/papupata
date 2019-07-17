(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{197:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return o});var r=t(7),a=t(223),i=t(219),l=t(216),c=t(224);function o(){return Object(r.d)(a.a,null,Object(r.d)(i.a,null,Object(r.d)(l.a,null,Object(r.d)("h1",null,"API Reference"),Object(r.d)("h2",null,"class DeclaredAPI"),Object(r.d)("h3",null,"exposed type RequestType")),Object(r.d)(c.h,null,"Represents the type of express request that has been modified to be typed according to the declaration. This makes it easier to have functions that take the request and do things with it."),Object(r.d)(c.k,null,Object(r.d)("p",null,"The exposed types are used with the typeof operator. See the example below for details."),Object(r.d)("p",null,"Although the types are presented as fields on the API, they have no runtime value.")),Object(r.d)(c.a,null,"There is at this time no way to create partial typed requests objects, which should be helpful for the same purposes."),Object(r.d)(c.d,null,Object(r.d)(c.b,{label:"Basic usage"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff')\n              .query(['collection'] as const)\n              .response<string>()\n\n            type RequestType = typeof myAPI['RequestType']\n            // RequestType is now the type of a modified express request    \n          "),Object(r.d)(c.b,{label:"Practical usage"},"\n            myAPI.implement(req => {\n              return getCollection(req)\n            })\n\n            function getCollection(req: typeof myAPI['RequestType']) {\n              // This function has access to the typed request\n              return collections.get(req.query.collection)\n            }\n          "))))}},212:function(e,n,t){"use strict";t.d(n,"b",function(){return r}),t.d(n,"d",function(){return a}),t.d(n,"a",function(){return i}),t.d(n,"f",function(){return l}),t.d(n,"c",function(){return c}),t.d(n,"e",function(){return o});var r={brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},a={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},i={xs:0,sm:576,md:768,lg:992,xl:1200},l={md:720,lg:960,xl:1140},c={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},o={header:60}},215:function(e,n,t){"use strict";t.d(n,"b",function(){return d});var r=t(7),a=t(0),i=t.n(a),l=t(64),c=t.n(l);t.d(n,"a",function(){return c.a});t(218),t(8).default.enqueue;var o=i.a.createContext({});function u(e){var n=e.staticQueryData,t=e.data,a=e.query,l=e.render,c=t?t.data:n[a]&&n[a].data;return Object(r.d)(i.a.Fragment,null,c&&l(c),!c&&Object(r.d)("div",null,"Loading (StaticQuery)"))}var d=function(e){var n=e.data,t=e.query,a=e.render,i=e.children;return Object(r.d)(o.Consumer,null,function(e){return Object(r.d)(u,{data:n,query:t,render:a||i,staticQueryData:e})})}},216:function(e,n,t){"use strict";var r=t(214),a=t(7),i=(t(0),t(212)),l=t(217),c=Object(r.a)("div",{target:"e1c6zxln0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(l.a)(i.f.lg),"em;");n.a=function(e){var n=e.children,t=e.className;return Object(a.d)(c,{className:t},n)}},217:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=t(212),a=function(e){return e/r.c.fontSize.regular}},218:function(e,n,t){var r;e.exports=(r=t(221))&&r.default||r},219:function(e,n,t){"use strict";var r=t(214),a=t(7),i=(t(0),t(212)),l=Object(r.a)("div",{target:"e20rco30"})("display:block;flex:1;position:relative;padding:",i.c.containerPadding,"rem;margin-bottom:3rem;");n.a=function(e){var n=e.children,t=e.className;return Object(a.d)(l,{className:t},n)}},220:function(e){e.exports={data:{site:{siteMetadata:{title:"Papupata Documentation",description:"Documentation for the typescript library papupata, for utilizing types for AJAX requests."}}}}},221:function(e,n,t){"use strict";t.r(n);t(19);var r=t(0),a=t.n(r),i=t(88);n.default=function(e){var n=e.location,t=e.pageResources;return t?a.a.createElement(i.a,Object.assign({location:n,pageResources:t},t.json)):null}},222:function(e){e.exports={data:{site:{pathPrefix:"/papupata"}}}},223:function(e,n,t){"use strict";var r=t(7),a=t(220),i=t(0),l=t(226),c=t.n(l),o=t(215),u=(t(227),t(212)),d=t(217),s="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+u.c.fontSize.regular+"px !important;\n    line-height: "+u.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+u.d.sansSerif+";\n    color: "+u.b.black+";\n    background-color: "+u.b.white+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+u.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+u.b.ui.light+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+u.b.ui.light+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+u.b.ui.whisper+";\n        }\n        tr {\n          background-color: "+u.b.ui.whisper+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+u.b.black+";\n    font-weight: 600;\n    line-height: "+u.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+u.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+u.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+u.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+u.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+u.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+u.b.ui.light+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+u.b.ui.light+";\n    color: "+u.b.gray.calm+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(d.a)(u.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n",b=t(214),p=t(229),f=t(216),h=Object(b.a)("header",{target:"e14yya1q0"})("height:",u.e.header,"px;padding:0 ",u.c.containerPadding,"rem;background-color:",u.b.brand,";color:",Object(p.a)(.5,u.b.white),";"),m=Object(b.a)(f.a,{target:"e14yya1q1"})({name:"voneje",styles:"display:flex;flex-direction:row;align-items:center;height:100%;"}),j=Object(b.a)(o.a,{target:"e14yya1q2"})("color:",u.b.white,";font-size:1.5rem;font-weight:600;&:hover,&:focus{text-decoration:none;}"),g=function(e){var n=e.title;return Object(r.d)(h,null,Object(r.d)(m,null,Object(r.d)(j,{to:"/"},n)))},O=Object(b.a)("div",{target:"e17su9850"})({name:"zf0iqh",styles:"display:flex;flex-direction:column;min-height:100vh;"}),y=function(e){var n=e.children,t=e.className;return Object(r.d)(i.Fragment,null,Object(r.d)(r.a,{styles:function(){return Object(r.c)(s)}}),Object(r.d)(O,{className:t},n))},v=Object(b.a)("main",{target:"e1qy7fsr0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),P=function(e){var n=e.children,t=e.className;return Object(r.d)(v,{className:t},n)},A=t(213),I=(t(129),t(130),t(228),t(222)),x=t(20);function k(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  ",";\n"]);return k=function(){return e},e}var w=Object(A.a)(o.a)(k(),function(e){return"true"===e.current?"\n  \n  font-weight: bold;\n  ":""});function q(e){var n=e.link,t=e.children;return Object(r.d)("div",null,Object(r.d)(o.b,{query:"87648239",render:function(e){var a=e.site.pathPrefix;return Object(r.d)(x.Location,null,function(e){var i=e.location;return Object(r.d)(w,{current:[a+n,n].includes(i.pathname)?"true":"false",to:n},t)})},data:I}))}function D(){var e=S(["\n  font-style: italic;\n"]);return D=function(){return e},e}function z(){var e=S(["\n  margin-left: 20px;\n"]);return z=function(){return e},e}function T(){var e=S([""]);return T=function(){return e},e}function R(){var e=S(["\n  border-right: 1px solid #aaa;\n  margin-right: 30px;\n  padding-right: 30px;\n  padding-left: 30px;\n  margin-top: 30px;\n"]);return R=function(){return e},e}function S(e,n){return n||(n=e.slice(0)),e.raw=n,e}var N=A.a.div(R()),C=A.a.h2(T()),M=A.a.div(z()),B=function(e){var n=e.children;return Object(r.d)("span",null,n,"()")},L=A.a.span(D());function F(){return Object(r.d)(N,null,Object(r.d)(C,null,"Table of contents"),Object(r.d)(q,{link:"/what-is-papupata"},"What is papupata?"),Object(r.d)(q,{link:"/getting-started"},"Getting started"),Object(r.d)(q,{link:"/api-reference"},"API Reference"),Object(r.d)(M,null,Object(r.d)(q,{link:"/api/APIDeclaration"},"class APIDeclaration"),Object(r.d)(M,null,Object(r.d)(q,{link:"/api/APIDeclaration/configure"},Object(r.d)(B,null,"configure")),Object(r.d)(q,{link:"/api/APIDeclaration/declareDeleteAPI"},Object(r.d)(B,null,"declareDeleteAPI")),Object(r.d)(q,{link:"/api/APIDeclaration/declareGetAPI"},Object(r.d)(B,null,"declareGetAPI")),Object(r.d)(q,{link:"/api/APIDeclaration/declarePostAPI"},Object(r.d)(B,null,"declarePostAPI")),Object(r.d)(q,{link:"/api/APIDeclaration/declarePutAPI"},Object(r.d)(B,null,"declarePutAPI"))),Object(r.d)(q,{link:"/api/IncompleteAPIDeclaration"},"IncompleteAPIDeclaration"),Object(r.d)(M,null,Object(r.d)(q,{link:"/api/IncompleteAPIDeclaration/params"},Object(r.d)(B,null,"params")),Object(r.d)(q,{link:"/api/IncompleteAPIDeclaration/query"},Object(r.d)(B,null,"query")),Object(r.d)(q,{link:"/api/IncompleteAPIDeclaration/optionalQuery"},Object(r.d)(B,null,"optionalQuery")),Object(r.d)(q,{link:"/api/IncompleteAPIDeclaration/queryBool"},Object(r.d)(B,null,"queryBool")),Object(r.d)(q,{link:"/api/IncompleteAPIDeclaration/body"},Object(r.d)(B,null,"body")),Object(r.d)(q,{link:"/api/IncompleteAPIDeclaration/response"},Object(r.d)(B,null,"response"))),Object(r.d)(q,{link:"/api/DeclaredAPI"},"DeclaredAPI"),Object(r.d)(M,null,Object(r.d)(q,{link:"/api/DeclaredAPI/invoke"},Object(r.d)(B,null)),Object(r.d)(q,{link:"/api/DeclaredAPI/getURL"},Object(r.d)(B,null,"getURL")),Object(r.d)(q,{link:"/api/DeclaredAPI/implement"},Object(r.d)(B,null,"implement")),Object(r.d)(q,{link:"/api/DeclaredAPI/implementWithMiddleware"},Object(r.d)(B,null,"implementWithMiddleware")),Object(r.d)(q,{link:"/api/DeclaredAPI/ResponseType"},Object(r.d)(L,null,"ResponseType")),Object(r.d)(q,{link:"/api/DeclaredAPI/ServerResponseType"},Object(r.d)(L,null,"ServerResponseType")),Object(r.d)(q,{link:"/api/DeclaredAPI/BodyType"},Object(r.d)(L,null,"BodyType")),Object(r.d)(q,{link:"/api/DeclaredAPI/CallArgsType"},Object(r.d)(L,null,"CallArgsType")),Object(r.d)(q,{link:"/api/DeclaredAPI/RequestType"},Object(r.d)(L,null,"RequestType"))),Object(r.d)(q,{link:"/api/fetchAdapter"},"fetchAdapter"),Object(r.d)(q,{link:"/api/requestPromiseAdapter"},"requestPromiseAdapter")))}function Q(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  display: flex;\n"]);return Q=function(){return e},e}var U=A.a.div(Q());function G(e){var n=e.children;return Object(r.d)(U,null,Object(r.d)(F,null),n)}n.a=function(e){var n=e.children;return Object(r.d)(o.b,{query:"991718019",render:function(e){return Object(r.d)(y,null,Object(r.d)(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]}),Object(r.d)(g,{title:e.site.siteMetadata.title}),Object(r.d)(G,null,Object(r.d)(P,null,n)))},data:a})}},224:function(e,n,t){"use strict";t.d(n,"i",function(){return p}),t.d(n,"j",function(){return f}),t.d(n,"h",function(){return j}),t.d(n,"k",function(){return g}),t.d(n,"g",function(){return O}),t.d(n,"f",function(){return y}),t.d(n,"e",function(){return v}),t.d(n,"a",function(){return P}),t.d(n,"d",function(){return A}),t.d(n,"b",function(){return I}),t.d(n,"c",function(){return x});t(16);var r=t(7),a=t(213),i=t(0),l=t.n(i),c=t(225);function o(){var e=b(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]);return o=function(){return e},e}function u(){var e=b([""]);return u=function(){return e},e}function d(){var e=b([""]);return d=function(){return e},e}function s(){var e=b([""]);return s=function(){return e},e}function b(e,n){return n||(n=e.slice(0)),e.raw=n,e}var p=a.a.section(s()),f=a.a.h4(d()),h=a.a.h5(u()),m=a.a.section(o()),j=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Purpose"),n)},g=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Usage"),n)},O=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Parameters"),Object(r.d)("table",null,Object(r.d)("thead",null,Object(r.d)("tr",null,Object(r.d)("th",null,"Name"),Object(r.d)("th",null,"Type"),Object(r.d)("th",null,"Description"))),Object(r.d)("tbody",null,n)))},y=function(e){var n=e.children,t=e.name,a=e.dataType;return Object(r.d)("tr",null,Object(r.d)("td",null,t),Object(r.d)("td",null,a),Object(r.d)("td",null,n))},v=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Returns"),n)},P=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Caveats"),n)},A=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Examples"),n)},I=function(e){var n=e.children,t=e.label;return Object(r.d)(l.a.Fragment,null,t&&Object(r.d)(h,null,t),Object(r.d)(c.a,{language:"typescript"},n))},x=function(e){var n=e.children;return Object(r.d)(m,null,Object(r.d)(h,null,"Common to examples below:"),n)}},225:function(e,n,t){"use strict";t.d(n,"a",function(){return u});t(230),t(65),t(18);var r=t(7),a=(t(0),t(213)),i=t(456),l=t(455);function c(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}([""]);return c=function(){return e},e}var o=a.a.div(c()),u=function(e){var n=e.language,t=e.children;return Object(r.d)(o,null,Object(r.d)(i.a,{language:n,style:l.a},function(e){var n=e.split("\n");for(;n.length&&!n[0].trim();)n.shift();for(;n.length&&!n[n.length-1].trim();)n.pop();var t=(n[0].match(/^\s+/)||[""])[0];return n.map(function(e){return e.startsWith(t)?e.substring(t.length):e}).join("\n")}(t)))}}}]);
//# sourceMappingURL=component---src-pages-api-declared-api-request-type-tsx-f65f0f63c0ce170df59e.js.map