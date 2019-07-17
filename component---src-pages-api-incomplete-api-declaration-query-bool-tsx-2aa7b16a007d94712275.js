(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{207:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return d});var r=t(7),a=t(224),i=t(220),l=t(217),c=t(225),o=t(234),u=t(241);function d(){return Object(r.d)(a.a,null,Object(r.d)(i.a,null,Object(r.d)(l.a,null,Object(r.d)("h1",null,"API Reference"),Object(r.d)("h2",null,"class IncompleteAPIDeclaration"),Object(r.d)("h3",null,"method queryBool")),Object(r.d)(u.a,null),Object(r.d)(c.h,null,"Declares boolean query parameters for an API"),Object(r.d)(c.k,null,Object(r.d)("p",null,"Path params and other query parameters may be defined before query.")),Object(r.d)(c.g,null,Object(r.d)(c.f,{name:"booleanQueryParams",dataType:"Const string array"},Object(r.d)("p",null,"Names of the query parameters. See the example below for the recommended way to set up the const string array."),Object(r.d)("p",null,"At typescript level a regular string array is not treated as an error at declaration time, but using is NOT correct. Unfortunately we have not come up with a way to prevent this kind of usage."))),Object(r.d)(c.e,null,Object(r.d)(o.b,null)),Object(r.d)(c.a,null,'This feature is intented mainly to be used for papupata-to-papupata communications. The string "true" stands for true values on the server, all other values stand for false.'),Object(r.d)(c.d,null,Object(r.d)(c.b,{label:"Declaration"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff')\n              .queryBool(['query1', 'query2'] as const)\n              .response<string>()\n          "),Object(r.d)(c.b,{label:"Usage in invocation"},"\n            await myAPI({query1: true, query2: false})\n            // Invokes URL /do-stuff?query1=true&query2=false\n          "),Object(r.d)(c.b,{label:"Usage in implementation"},"\n            await myAPI.implement(req => {\n              const {query1, query2} = req.query\n              return query1 + query2 // would return truefalse in the example. They come in as booleans, not strings.\n            })            \n          "))))}},213:function(n,e,t){"use strict";t.d(e,"b",function(){return r}),t.d(e,"d",function(){return a}),t.d(e,"a",function(){return i}),t.d(e,"f",function(){return l}),t.d(e,"c",function(){return c}),t.d(e,"e",function(){return o});var r={brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},a={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},i={xs:0,sm:576,md:768,lg:992,xl:1200},l={md:720,lg:960,xl:1140},c={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},o={header:60}},216:function(n,e,t){"use strict";t.d(e,"b",function(){return d});var r=t(7),a=t(0),i=t.n(a),l=t(65),c=t.n(l);t.d(e,"a",function(){return c.a});t(219),t(8);var o=i.a.createContext({});function u(n){var e=n.staticQueryData,t=n.data,a=n.query,l=n.render,c=t?t.data:e[a]&&e[a].data;return Object(r.d)(i.a.Fragment,null,c&&l(c),!c&&Object(r.d)("div",null,"Loading (StaticQuery)"))}var d=function(n){var e=n.data,t=n.query,a=n.render,i=n.children;return Object(r.d)(o.Consumer,null,function(n){return Object(r.d)(u,{data:e,query:t,render:a||i,staticQueryData:n})})}},217:function(n,e,t){"use strict";var r=t(215),a=t(7),i=(t(0),t(213)),l=t(218),c=Object(r.a)("div",{target:"e1c6zxln0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(l.a)(i.f.lg),"em;");e.a=function(n){var e=n.children,t=n.className;return Object(a.d)(c,{className:t},e)}},218:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var r=t(213),a=function(n){return n/r.c.fontSize.regular}},219:function(n,e,t){var r;n.exports=(r=t(222))&&r.default||r},220:function(n,e,t){"use strict";var r=t(215),a=t(7),i=(t(0),t(213)),l=Object(r.a)("div",{target:"e20rco30"})("display:block;flex:1;position:relative;padding:",i.c.containerPadding,"rem;margin-bottom:3rem;");e.a=function(n){var e=n.children,t=n.className;return Object(a.d)(l,{className:t},e)}},221:function(n){n.exports={data:{site:{siteMetadata:{title:"Papupata Documentation",description:"Documentation for the typescript library papupata, for utilizing types for AJAX requests."}}}}},222:function(n,e,t){"use strict";t.r(e);t(19);var r=t(0),a=t.n(r),i=t(91);e.default=function(n){var e=n.location,t=n.pageResources;return t?a.a.createElement(i.a,Object.assign({location:e,pageResources:t},t.json)):null}},223:function(n){n.exports={data:{site:{pathPrefix:"/papupata"}}}},224:function(n,e,t){"use strict";var r=t(7),a=t(221),i=t(0),l=t(227),c=t.n(l),o=t(216),u=(t(228),t(213)),d=t(218),s="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+u.c.fontSize.regular+"px !important;\n    line-height: "+u.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+u.d.sansSerif+";\n    color: "+u.b.black+";\n    background-color: "+u.b.white+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+u.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+u.b.ui.light+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+u.b.ui.light+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+u.b.ui.whisper+";\n        }\n        tr {\n          background-color: "+u.b.ui.whisper+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+u.b.black+";\n    font-weight: 600;\n    line-height: "+u.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+u.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+u.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+u.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+u.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+u.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+u.b.ui.light+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+u.b.ui.light+";\n    color: "+u.b.gray.calm+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(d.a)(u.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n",b=t(215),f=t(230),p=t(217),m=Object(b.a)("header",{target:"e14yya1q0"})("height:",u.e.header,"px;padding:0 ",u.c.containerPadding,"rem;background-color:",u.b.brand,";color:",Object(f.a)(.5,u.b.white),";"),h=Object(b.a)(p.a,{target:"e14yya1q1"})({name:"voneje",styles:"display:flex;flex-direction:row;align-items:center;height:100%;"}),j=Object(b.a)(o.a,{target:"e14yya1q2"})("color:",u.b.white,";font-size:1.5rem;font-weight:600;&:hover,&:focus{text-decoration:none;}"),O=function(n){var e=n.title;return Object(r.d)(m,null,Object(r.d)(h,null,Object(r.d)(j,{to:"/"},e)))},g=Object(b.a)("div",{target:"e17su9850"})({name:"zf0iqh",styles:"display:flex;flex-direction:column;min-height:100vh;"}),y=function(n){var e=n.children,t=n.className;return Object(r.d)(i.Fragment,null,Object(r.d)(r.a,{styles:function(){return Object(r.c)(s)}}),Object(r.d)(g,{className:t},e))},v=Object(b.a)("main",{target:"e1qy7fsr0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),P=function(n){var e=n.children,t=n.className;return Object(r.d)(v,{className:t},e)},I=t(214),A=(t(130),t(131),t(229),t(223)),w=t(20);function x(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  ",";\n"]);return x=function(){return n},n}var k=Object(I.a)(o.a)(x(),function(n){return"true"===n.current?"\n  \n  font-weight: bold;\n  ":""});function D(n){var e=n.link,t=n.children;return Object(r.d)("div",null,Object(r.d)(o.b,{query:"87648239",render:function(n){var a=n.site.pathPrefix;return Object(r.d)(w.Location,null,function(n){var i=n.location;return Object(r.d)(k,{current:[a+e,e].includes(i.pathname)?"true":"false",to:e},t)})},data:A}))}function q(){var n=R(["\n  font-style: italic;\n"]);return q=function(){return n},n}function z(){var n=R(["\n  margin-left: 20px;\n"]);return z=function(){return n},n}function T(){var n=R([""]);return T=function(){return n},n}function S(){var n=R(["\n  border-right: 1px solid #aaa;\n  margin-right: 30px;\n  padding-right: 30px;\n  padding-left: 30px;\n  margin-top: 30px;\n"]);return S=function(){return n},n}function R(n,e){return e||(e=n.slice(0)),n.raw=e,n}var N=I.a.div(S()),M=I.a.h2(T()),C=I.a.div(z()),U=function(n){var e=n.children;return Object(r.d)("span",null,e,"()")},B=I.a.span(q());function L(){return Object(r.d)(N,null,Object(r.d)(M,null,"Table of contents"),Object(r.d)(D,{link:"/what-is-papupata"},"What is papupata?"),Object(r.d)(D,{link:"/getting-started"},"Getting started"),Object(r.d)(D,{link:"/api-reference"},"API Reference"),Object(r.d)(C,null,Object(r.d)(D,{link:"/api/APIDeclaration"},"class APIDeclaration"),Object(r.d)(C,null,Object(r.d)(D,{link:"/api/APIDeclaration/configure"},Object(r.d)(U,null,"configure")),Object(r.d)(D,{link:"/api/APIDeclaration/declareDeleteAPI"},Object(r.d)(U,null,"declareDeleteAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/declareGetAPI"},Object(r.d)(U,null,"declareGetAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/declarePostAPI"},Object(r.d)(U,null,"declarePostAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/declarePutAPI"},Object(r.d)(U,null,"declarePutAPI"))),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration"},"IncompleteAPIDeclaration"),Object(r.d)(C,null,Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/params"},Object(r.d)(U,null,"params")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/query"},Object(r.d)(U,null,"query")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/optionalQuery"},Object(r.d)(U,null,"optionalQuery")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/queryBool"},Object(r.d)(U,null,"queryBool")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/body"},Object(r.d)(U,null,"body")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/response"},Object(r.d)(U,null,"response"))),Object(r.d)(D,{link:"/api/DeclaredAPI"},"DeclaredAPI"),Object(r.d)(C,null,Object(r.d)(D,{link:"/api/DeclaredAPI/invoke"},Object(r.d)(U,null)),Object(r.d)(D,{link:"/api/DeclaredAPI/getURL"},Object(r.d)(U,null,"getURL")),Object(r.d)(D,{link:"/api/DeclaredAPI/implement"},Object(r.d)(U,null,"implement")),Object(r.d)(D,{link:"/api/DeclaredAPI/implementWithMiddleware"},Object(r.d)(U,null,"implementWithMiddleware")),Object(r.d)(D,{link:"/api/DeclaredAPI/ResponseType"},Object(r.d)(B,null,"ResponseType")),Object(r.d)(D,{link:"/api/DeclaredAPI/ServerResponseType"},Object(r.d)(B,null,"ServerResponseType")),Object(r.d)(D,{link:"/api/DeclaredAPI/BodyType"},Object(r.d)(B,null,"BodyType")),Object(r.d)(D,{link:"/api/DeclaredAPI/CallArgsType"},Object(r.d)(B,null,"CallArgsType")),Object(r.d)(D,{link:"/api/DeclaredAPI/RequestType"},Object(r.d)(B,null,"RequestType"))),Object(r.d)(D,{link:"/api/fetchAdapter"},"fetchAdapter"),Object(r.d)(D,{link:"/api/requestPromiseAdapter"},"requestPromiseAdapter")))}function Q(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  display: flex;\n"]);return Q=function(){return n},n}var F=I.a.div(Q());function G(n){var e=n.children;return Object(r.d)(F,null,Object(r.d)(L,null),e)}e.a=function(n){var e=n.children;return Object(r.d)(o.b,{query:"991718019",render:function(n){return Object(r.d)(y,null,Object(r.d)(c.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:n.site.siteMetadata.description},{name:"keywords",content:n.site.siteMetadata.keywords}]}),Object(r.d)(O,{title:n.site.siteMetadata.title}),Object(r.d)(G,null,Object(r.d)(P,null,e)))},data:a})}},225:function(n,e,t){"use strict";t.d(e,"i",function(){return f}),t.d(e,"j",function(){return p}),t.d(e,"h",function(){return j}),t.d(e,"k",function(){return O}),t.d(e,"g",function(){return g}),t.d(e,"f",function(){return y}),t.d(e,"e",function(){return v}),t.d(e,"a",function(){return P}),t.d(e,"d",function(){return I}),t.d(e,"b",function(){return A}),t.d(e,"c",function(){return w});t(16);var r=t(7),a=t(214),i=t(0),l=t.n(i),c=t(226);function o(){var n=b(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]);return o=function(){return n},n}function u(){var n=b([""]);return u=function(){return n},n}function d(){var n=b([""]);return d=function(){return n},n}function s(){var n=b([""]);return s=function(){return n},n}function b(n,e){return e||(e=n.slice(0)),n.raw=e,n}var f=a.a.section(s()),p=a.a.h4(d()),m=a.a.h5(u()),h=a.a.section(o()),j=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Purpose"),e)},O=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Usage"),e)},g=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Parameters"),Object(r.d)("table",null,Object(r.d)("thead",null,Object(r.d)("tr",null,Object(r.d)("th",null,"Name"),Object(r.d)("th",null,"Type"),Object(r.d)("th",null,"Description"))),Object(r.d)("tbody",null,e)))},y=function(n){var e=n.children,t=n.name,a=n.dataType;return Object(r.d)("tr",null,Object(r.d)("td",null,t),Object(r.d)("td",null,a),Object(r.d)("td",null,e))},v=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Returns"),e)},P=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Caveats"),e)},I=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Examples"),e)},A=function(n){var e=n.children,t=n.label;return Object(r.d)(l.a.Fragment,null,t&&Object(r.d)(m,null,t),Object(r.d)(c.a,{language:"typescript"},e))},w=function(n){var e=n.children;return Object(r.d)(h,null,Object(r.d)(m,null,"Common to examples below:"),e)}},226:function(n,e,t){"use strict";t.d(e,"a",function(){return u});t(231),t(66),t(18);var r=t(7),a=(t(0),t(214)),i=t(457),l=t(456);function c(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}([""]);return c=function(){return n},n}var o=a.a.div(c()),u=function(n){var e=n.language,t=n.children;return Object(r.d)(o,null,Object(r.d)(i.a,{language:e,style:l.a},function(n){var e=n.split("\n");for(;e.length&&!e[0].trim();)e.shift();for(;e.length&&!e[e.length-1].trim();)e.pop();var t=(e[0].match(/^\s+/)||[""])[0];return e.map(function(n){return n.startsWith(t)?n.substring(t.length):n}).join("\n")}(t)))}},234:function(n,e,t){"use strict";t.d(e,"b",function(){return i}),t.d(e,"a",function(){return l});var r=t(7),a=(t(0),t(216));function i(){return Object(r.d)(a.a,{to:"/api/IncompleteApiDeclaration"},"IncompleteApiDeclaration")}function l(){return Object(r.d)(a.a,{to:"/api/DeclaredAPI"},"DeclaredAPI")}},235:function(n,e,t){"use strict";function r(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  border: 2px dotted transparent;\n  padding: 10px;\n  outline: 5px solid transparent;\n"]);return r=function(){return n},n}t.d(e,"a",function(){return a});var a=t(214).a.div(r())},241:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(7),a=(t(0),t(214)),i=t(235);function l(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  border-color: yellowgreen;\n  background-color: #ffd892;\n  outline-color: #ffd892;\n  margin: 20px;\n"]);return l=function(){return n},n}var c=Object(a.a)(i.a)(l()),o=function(n){var e=n.children;return Object(r.d)(c,null,e||"Beware! There is a good chance this will be changed before 1.0 release!")}}}]);
//# sourceMappingURL=component---src-pages-api-incomplete-api-declaration-query-bool-tsx-2aa7b16a007d94712275.js.map