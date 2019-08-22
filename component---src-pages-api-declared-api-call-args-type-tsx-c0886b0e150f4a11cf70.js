(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{208:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return o});var r=t(9),a=t(239),i=t(235),l=t(232),c=t(240);function o(){return Object(r.d)(a.a,null,Object(r.d)(i.a,null,Object(r.d)(l.a,null,Object(r.d)("h1",null,"API Reference"),Object(r.d)("h2",null,"class DeclaredAPI"),Object(r.d)("h3",null,"exposed type CallArgsType")),Object(r.d)(c.h,null,"Represents the type of arguments to API invocation. This exists to help you create functions that return parts or all of a requests's parameters."),Object(r.d)(c.k,null,Object(r.d)("p",null,"The exposed types are used with the typeof operator. See the example below for details."),Object(r.d)("p",null,"Although the types are presented as fields on the API, they have no runtime value.")),Object(r.d)(c.d,null,Object(r.d)(c.b,{label:"Basic usage"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff')\n              .query(['q'] as const)\n              .body<{key: string}>\n              .response<string>()\n\n            type CallArgsType = typeof myAPI['CallArgsType']\n            // CallArgsType is now {key: string, q: string}            \n          "),Object(r.d)(c.b,{label:"Practical usage"},"\n            await myAPI(getRequestParams())\n\n            function getRequestParams(): typeof myAPI['CallArgsType']  {\n              // Now typescript will complain because we do not return everything it needs\n            }\n          "))))}},228:function(n,e,t){"use strict";t.d(e,"b",function(){return r}),t.d(e,"d",function(){return a}),t.d(e,"a",function(){return i}),t.d(e,"f",function(){return l}),t.d(e,"c",function(){return c}),t.d(e,"e",function(){return o});var r={brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},a={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},i={xs:0,sm:576,md:768,lg:992,xl:1200},l={md:720,lg:960,xl:1140},c={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},o={header:60}},231:function(n,e,t){"use strict";t.d(e,"b",function(){return d});var r=t(9),a=t(0),i=t.n(a),l=t(76),c=t.n(l);t.d(e,"a",function(){return c.a});t(234),t(10).default.enqueue;var o=i.a.createContext({});function u(n){var e=n.staticQueryData,t=n.data,a=n.query,l=n.render,c=t?t.data:e[a]&&e[a].data;return Object(r.d)(i.a.Fragment,null,c&&l(c),!c&&Object(r.d)("div",null,"Loading (StaticQuery)"))}var d=function(n){var e=n.data,t=n.query,a=n.render,i=n.children;return Object(r.d)(o.Consumer,null,function(n){return Object(r.d)(u,{data:e,query:t,render:a||i,staticQueryData:n})})}},232:function(n,e,t){"use strict";var r=t(230),a=t(9),i=(t(0),t(228)),l=t(233),c=Object(r.a)("div",{target:"e1c6zxln0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(l.a)(i.f.lg),"em;");e.a=function(n){var e=n.children,t=n.className;return Object(a.d)(c,{className:t},e)}},233:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var r=t(228),a=function(n){return n/r.c.fontSize.regular}},234:function(n,e,t){var r;n.exports=(r=t(237))&&r.default||r},235:function(n,e,t){"use strict";var r=t(230),a=t(9),i=(t(0),t(228)),l=Object(r.a)("div",{target:"e20rco30"})("display:block;flex:1;position:relative;padding:",i.c.containerPadding,"rem;margin-bottom:3rem;");e.a=function(n){var e=n.children,t=n.className;return Object(a.d)(l,{className:t},e)}},236:function(n){n.exports={data:{site:{siteMetadata:{title:"Papupata Documentation",description:"Documentation for the typescript library papupata, for utilizing types for AJAX requests."}}}}},237:function(n,e,t){"use strict";t.r(e);t(22);var r=t(0),a=t.n(r),i=t(101);e.default=function(n){var e=n.location,t=n.pageResources;return t?a.a.createElement(i.a,Object.assign({location:e,pageResources:t},t.json)):null}},238:function(n){n.exports={data:{site:{pathPrefix:"/papupata"}}}},239:function(n,e,t){"use strict";var r=t(9),a=t(236),i=t(0),l=t(242),c=t.n(l),o=t(231),u=(t(243),t(228)),d=t(233),s="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+u.c.fontSize.regular+"px !important;\n    line-height: "+u.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+u.d.sansSerif+";\n    color: "+u.b.black+";\n    background-color: "+u.b.white+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+u.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+u.b.ui.light+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+u.b.ui.light+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+u.b.ui.whisper+";\n        }\n        tr {\n          background-color: "+u.b.ui.whisper+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+u.b.black+";\n    font-weight: 600;\n    line-height: "+u.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+u.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+u.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+u.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+u.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+u.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+u.b.ui.light+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+u.b.ui.light+";\n    color: "+u.b.gray.calm+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(d.a)(u.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n",b=t(230),p=t(245),f=t(232),m=Object(b.a)("header",{target:"e14yya1q0"})("height:",u.e.header,"px;padding:0 ",u.c.containerPadding,"rem;background-color:",u.b.brand,";color:",Object(p.a)(.5,u.b.white),";"),h=Object(b.a)(f.a,{target:"e14yya1q1"})({name:"voneje",styles:"display:flex;flex-direction:row;align-items:center;height:100%;"}),g=Object(b.a)(o.a,{target:"e14yya1q2"})("color:",u.b.white,";font-size:1.5rem;font-weight:600;&:hover,&:focus{text-decoration:none;}"),j=function(n){var e=n.title;return Object(r.d)(m,null,Object(r.d)(h,null,Object(r.d)(g,{to:"/"},e)))},O=Object(b.a)("div",{target:"e17su9850"})({name:"zf0iqh",styles:"display:flex;flex-direction:column;min-height:100vh;"}),y=function(n){var e=n.children,t=n.className;return Object(r.d)(i.Fragment,null,Object(r.d)(r.a,{styles:function(){return Object(r.c)(s)}}),Object(r.d)(O,{className:t},e))},v=Object(b.a)("main",{target:"e1qy7fsr0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),P=function(n){var e=n.children,t=n.className;return Object(r.d)(v,{className:t},e)},A=t(229),I=(t(140),t(141),t(244),t(238)),k=t(23);function x(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  ",";\n"]);return x=function(){return n},n}var w=Object(A.a)(o.a)(x(),function(n){return"true"===n.current?"\n  \n  font-weight: bold;\n  ":""});function D(n){var e=n.link,t=n.children;return Object(r.d)("div",null,Object(r.d)(o.b,{query:"87648239",render:function(n){var a=n.site.pathPrefix;return Object(r.d)(k.Location,null,function(n){var i=n.location;return Object(r.d)(w,{current:[a+e,e].includes(i.pathname)?"true":"false",to:e},t)})},data:I}))}function q(){var n=C(["\n"]);return q=function(){return n},n}function z(){var n=C(["\n  font-style: italic;\n"]);return z=function(){return n},n}function T(){var n=C(["\n  margin-left: 20px;\n"]);return T=function(){return n},n}function R(){var n=C([""]);return R=function(){return n},n}function S(){var n=C(["\n  border-right: 1px solid #aaa;\n  margin-right: 30px;\n  padding-right: 30px;\n  padding-left: 30px;\n  margin-top: 30px;\n"]);return S=function(){return n},n}function C(n,e){return e||(e=n.slice(0)),n.raw=e,n}var N=A.a.div(S()),M=A.a.h2(R()),B=A.a.div(T()),L=function(n){var e=n.children;return Object(r.d)("span",null,e,"()")},F=A.a.span(z()),Q=A.a.span(q());function U(){return Object(r.d)(N,null,Object(r.d)(M,null,"Table of contents"),Object(r.d)(D,{link:"/what-is-papupata"},"What is papupata?"),Object(r.d)(D,{link:"/getting-started"},"Getting started"),Object(r.d)(D,{link:"/api-reference"},"API Reference"),Object(r.d)(B,null,Object(r.d)(D,{link:"/api/APIDeclaration"},"class APIDeclaration"),Object(r.d)(B,null,Object(r.d)(D,{link:"/api/APIDeclaration/configure"},Object(r.d)(L,null,"configure")),Object(r.d)(D,{link:"/api/APIDeclaration/declareDeleteAPI"},Object(r.d)(L,null,"declareDeleteAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/declareGetAPI"},Object(r.d)(L,null,"declareGetAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/declarePostAPI"},Object(r.d)(L,null,"declarePostAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/declarePutAPI"},Object(r.d)(L,null,"declarePutAPI"))),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration"},"IncompleteAPIDeclaration"),Object(r.d)(B,null,Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/params"},Object(r.d)(L,null,"params")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/query"},Object(r.d)(L,null,"query")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/optionalQuery"},Object(r.d)(L,null,"optionalQuery")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/queryBool"},Object(r.d)(L,null,"queryBool")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/body"},Object(r.d)(L,null,"body")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/response"},Object(r.d)(L,null,"response"))),Object(r.d)(D,{link:"/api/DeclaredAPI"},"DeclaredAPI"),Object(r.d)(B,null,Object(r.d)(D,{link:"/api/DeclaredAPI/invoke"},Object(r.d)(L,null,"invoke")),Object(r.d)(D,{link:"/api/DeclaredAPI/getURL"},Object(r.d)(L,null,"getURL")),Object(r.d)(D,{link:"/api/DeclaredAPI/implement"},Object(r.d)(L,null,"implement")),Object(r.d)(D,{link:"/api/DeclaredAPI/implementation"},Object(r.d)(Q,null,"implementation")),Object(r.d)(D,{link:"/api/DeclaredAPI/implementWithMiddleware"},Object(r.d)(L,null,"implementWithMiddleware")),Object(r.d)(D,{link:"/api/DeclaredAPI/ResponseType"},Object(r.d)(F,null,"ResponseType")),Object(r.d)(D,{link:"/api/DeclaredAPI/ServerResponseType"},Object(r.d)(F,null,"ServerResponseType")),Object(r.d)(D,{link:"/api/DeclaredAPI/BodyType"},Object(r.d)(F,null,"BodyType")),Object(r.d)(D,{link:"/api/DeclaredAPI/CallArgsType"},Object(r.d)(F,null,"CallArgsType")),Object(r.d)(D,{link:"/api/DeclaredAPI/RequestType"},Object(r.d)(F,null,"RequestType"))),Object(r.d)(D,{link:"/api/fetchAdapter"},"fetchAdapter"),Object(r.d)(D,{link:"/api/requestPromiseAdapter"},"requestPromiseAdapter")))}function G(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  display: flex;\n"]);return G=function(){return n},n}var H=A.a.div(G());function W(n){var e=n.children;return Object(r.d)(H,null,Object(r.d)(U,null),e)}e.a=function(n){var e=n.children;return Object(r.d)(o.b,{query:"991718019",render:function(n){return Object(r.d)(y,null,Object(r.d)(c.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:n.site.siteMetadata.description},{name:"keywords",content:n.site.siteMetadata.keywords}]}),Object(r.d)(j,{title:n.site.siteMetadata.title}),Object(r.d)(W,null,Object(r.d)(P,null,e)))},data:a})}},240:function(n,e,t){"use strict";t.d(e,"i",function(){return p}),t.d(e,"j",function(){return f}),t.d(e,"h",function(){return g}),t.d(e,"k",function(){return j}),t.d(e,"g",function(){return O}),t.d(e,"f",function(){return y}),t.d(e,"e",function(){return v}),t.d(e,"a",function(){return P}),t.d(e,"d",function(){return A}),t.d(e,"b",function(){return I}),t.d(e,"c",function(){return k});t(17);var r=t(9),a=t(229),i=t(0),l=t.n(i),c=t(241);function o(){var n=b(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]);return o=function(){return n},n}function u(){var n=b([""]);return u=function(){return n},n}function d(){var n=b([""]);return d=function(){return n},n}function s(){var n=b([""]);return s=function(){return n},n}function b(n,e){return e||(e=n.slice(0)),n.raw=e,n}var p=a.a.section(s()),f=a.a.h4(d()),m=a.a.h5(u()),h=a.a.section(o()),g=function(n){var e=n.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Purpose"),e)},j=function(n){var e=n.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Usage"),e)},O=function(n){var e=n.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Parameters"),Object(r.d)("table",null,Object(r.d)("thead",null,Object(r.d)("tr",null,Object(r.d)("th",null,"Name"),Object(r.d)("th",null,"Type"),Object(r.d)("th",null,"Description"))),Object(r.d)("tbody",null,e)))},y=function(n){var e=n.children,t=n.name,a=n.dataType;return Object(r.d)("tr",null,Object(r.d)("td",null,t),Object(r.d)("td",null,a),Object(r.d)("td",null,e))},v=function(n){var e=n.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Returns"),e)},P=function(n){var e=n.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Caveats"),e)},A=function(n){var e=n.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Examples"),e)},I=function(n){var e=n.children,t=n.label;return Object(r.d)(l.a.Fragment,null,t&&Object(r.d)(m,null,t),Object(r.d)(c.a,{language:"typescript"},e))},k=function(n){var e=n.children;return Object(r.d)(h,null,Object(r.d)(m,null,"Common to examples below:"),e)}},241:function(n,e,t){"use strict";t.d(e,"a",function(){return u});t(246),t(77),t(21);var r=t(9),a=(t(0),t(229)),i=t(472),l=t(471);function c(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}([""]);return c=function(){return n},n}var o=a.a.div(c()),u=function(n){var e=n.language,t=n.children;return Object(r.d)(o,null,Object(r.d)(i.a,{language:e,style:l.a},function(n){var e=n.split("\n");for(;e.length&&!e[0].trim();)e.shift();for(;e.length&&!e[e.length-1].trim();)e.pop();var t=(e[0].match(/^\s+/)||[""])[0];return e.map(function(n){return n.startsWith(t)?n.substring(t.length):n}).join("\n")}(t)))}}}]);
//# sourceMappingURL=component---src-pages-api-declared-api-call-args-type-tsx-c0886b0e150f4a11cf70.js.map