(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{206:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return u});var r=t(9),a=t(240),i=t(239),c=t(236),l=t(244),o=t(235);t(0);function u(){return Object(r.d)(a.a,null,Object(r.d)(i.a,null,Object(r.d)(c.a,null,Object(r.d)("h1",null,"API Reference"),Object(r.d)("h2",null,"class APIDeclaration"),Object(r.d)("h3",null,"method unmockAll")),Object(r.d)(l.i,null,"Undoes API mocking"),Object(r.d)(l.a,{version:"1.1.0"}),Object(r.d)(l.l,null,Object(r.d)("p",null,"This function undoes the mocking done by the ",Object(r.d)(o.a,{to:"/api/DeclaredAPI/mock"},"mock")," and ",Object(r.d)(o.a,{to:"/api/DeclaredAPI/mockOnce"},"mockOnce")," methods for any of the APIs in the declaration.")),Object(r.d)(l.h,null),Object(r.d)(l.f,null,"nothing"),Object(r.d)(l.e,null,Object(r.d)(l.c,null,"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff/:param')\n              .response<string>()\n\n            myAPI.mock('test')\n            \n            api.unmockAll()\n          "))))}},232:function(n,e,t){"use strict";t.d(e,"b",function(){return r}),t.d(e,"d",function(){return a}),t.d(e,"a",function(){return i}),t.d(e,"f",function(){return c}),t.d(e,"c",function(){return l}),t.d(e,"e",function(){return o});var r={brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},a={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},i={xs:0,sm:576,md:768,lg:992,xl:1200},c={md:720,lg:960,xl:1140},l={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},o={header:60}},235:function(n,e,t){"use strict";t.d(e,"b",function(){return d});var r=t(9),a=t(0),i=t.n(a),c=t(76),l=t.n(c);t.d(e,"a",function(){return l.a});t(238),t(10).default.enqueue;var o=i.a.createContext({});function u(n){var e=n.staticQueryData,t=n.data,a=n.query,c=n.render,l=t?t.data:e[a]&&e[a].data;return Object(r.d)(i.a.Fragment,null,l&&c(l),!l&&Object(r.d)("div",null,"Loading (StaticQuery)"))}var d=function(n){var e=n.data,t=n.query,a=n.render,i=n.children;return Object(r.d)(o.Consumer,null,function(n){return Object(r.d)(u,{data:e,query:t,render:a||i,staticQueryData:n})})}},236:function(n,e,t){"use strict";var r=t(234),a=t(9),i=(t(0),t(232)),c=t(237),l=Object(r.a)("div",{target:"e1c6zxln0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(c.a)(i.f.lg),"em;");e.a=function(n){var e=n.children,t=n.className;return Object(a.d)(l,{className:t},e)}},237:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var r=t(232),a=function(n){return n/r.c.fontSize.regular}},238:function(n,e,t){var r;n.exports=(r=t(242))&&r.default||r},239:function(n,e,t){"use strict";var r=t(234),a=t(9),i=(t(0),t(232)),c=Object(r.a)("div",{target:"e20rco30"})("display:block;flex:1;position:relative;padding:",i.c.containerPadding,"rem;margin-bottom:3rem;");e.a=function(n){var e=n.children,t=n.className;return Object(a.d)(c,{className:t},e)}},240:function(n,e,t){"use strict";var r=t(9),a=t(241),i=t(0),c=t(246),l=t.n(c),o=t(235),u=(t(247),t(232)),d=t(237),b="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+u.c.fontSize.regular+"px !important;\n    line-height: "+u.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+u.d.sansSerif+";\n    color: "+u.b.black+";\n    background-color: "+u.b.white+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+u.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+u.b.ui.light+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+u.b.ui.light+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+u.b.ui.whisper+";\n        }\n        tr {\n          background-color: "+u.b.ui.whisper+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+u.b.black+";\n    font-weight: 600;\n    line-height: "+u.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+u.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+u.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+u.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+u.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+u.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+u.b.ui.light+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+u.b.ui.light+";\n    color: "+u.b.gray.calm+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(d.a)(u.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n",s=t(234),f=t(249),p=t(236),m=Object(s.a)("header",{target:"e14yya1q0"})("height:",u.e.header,"px;padding:0 ",u.c.containerPadding,"rem;background-color:",u.b.brand,";color:",Object(f.a)(.5,u.b.white),";"),j=Object(s.a)(p.a,{target:"e14yya1q1"})({name:"voneje",styles:"display:flex;flex-direction:row;align-items:center;height:100%;"}),O=Object(s.a)(o.a,{target:"e14yya1q2"})("color:",u.b.white,";font-size:1.5rem;font-weight:600;&:hover,&:focus{text-decoration:none;}"),h=function(n){var e=n.title;return Object(r.d)(m,null,Object(r.d)(j,null,Object(r.d)(O,{to:"/"},e)))},g=Object(s.a)("div",{target:"e17su9850"})({name:"zf0iqh",styles:"display:flex;flex-direction:column;min-height:100vh;"}),v=function(n){var e=n.children,t=n.className;return Object(r.d)(i.Fragment,null,Object(r.d)(r.a,{styles:function(){return Object(r.c)(b)}}),Object(r.d)(g,{className:t},e))},y=Object(s.a)("main",{target:"e1qy7fsr0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),k=function(n){var e=n.children,t=n.className;return Object(r.d)(y,{className:t},e)},P=t(233),A=(t(140),t(141),t(248),t(243)),I=t(23);function x(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  ",";\n"]);return x=function(){return n},n}var w=Object(P.a)(o.a)(x(),function(n){return"true"===n.current?"\n  \n  font-weight: bold;\n  ":""});function D(n){var e=n.link,t=n.children;return Object(r.d)("div",null,Object(r.d)(o.b,{query:"87648239",render:function(n){var a=n.site.pathPrefix;return Object(r.d)(I.Location,null,function(n){var i=n.location;return Object(r.d)(w,{current:[a+e,e].includes(i.pathname)?"true":"false",to:e},t)})},data:A}))}function z(){var n=N(["\n"]);return z=function(){return n},n}function q(){var n=N(["\n  font-style: italic;\n"]);return q=function(){return n},n}function T(){var n=N(["\n  margin-left: 20px;\n"]);return T=function(){return n},n}function S(){var n=N([""]);return S=function(){return n},n}function R(){var n=N(["\n  border-right: 1px solid #aaa;\n  margin-right: 30px;\n  padding-right: 30px;\n  padding-left: 30px;\n  margin-top: 30px;\n"]);return R=function(){return n},n}function N(n,e){return e||(e=n.slice(0)),n.raw=e,n}var C=P.a.div(R()),M=P.a.h2(S()),F=P.a.div(T()),L=function(n){var e=n.children;return Object(r.d)("span",null,e,"()")},U=P.a.span(q()),B=P.a.span(z());function Q(){return Object(r.d)(C,null,Object(r.d)(M,null,"Table of contents"),Object(r.d)(D,{link:"/what-is-papupata"},"What is papupata?"),Object(r.d)(D,{link:"/getting-started"},"Getting started"),Object(r.d)(D,{link:"/api-reference"},"API Reference"),Object(r.d)(F,null,Object(r.d)(D,{link:"/api/APIDeclaration"},"class APIDeclaration"),Object(r.d)(F,null,Object(r.d)(D,{link:"/api/APIDeclaration/configure"},Object(r.d)(L,null,"configure")),Object(r.d)(D,{link:"/api/APIDeclaration/declareDeleteAPI"},Object(r.d)(L,null,"declareDeleteAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/declareGetAPI"},Object(r.d)(L,null,"declareGetAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/declarePostAPI"},Object(r.d)(L,null,"declarePostAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/declarePutAPI"},Object(r.d)(L,null,"declarePutAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/unmockAll"},Object(r.d)(L,null,"unmockAll"))),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration"},"IncompleteAPIDeclaration"),Object(r.d)(F,null,Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/params"},Object(r.d)(L,null,"params")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/query"},Object(r.d)(L,null,"query")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/optionalQuery"},Object(r.d)(L,null,"optionalQuery")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/queryBool"},Object(r.d)(L,null,"queryBool")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/body"},Object(r.d)(L,null,"body")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/response"},Object(r.d)(L,null,"response"))),Object(r.d)(D,{link:"/api/DeclaredAPI"},"DeclaredAPI"),Object(r.d)(F,null,Object(r.d)(D,{link:"/api/DeclaredAPI/invoke"},Object(r.d)(L,null,"invoke")),Object(r.d)(D,{link:"/api/DeclaredAPI/getURL"},Object(r.d)(L,null,"getURL")),Object(r.d)(D,{link:"/api/DeclaredAPI/implement"},Object(r.d)(L,null,"implement")),Object(r.d)(D,{link:"/api/DeclaredAPI/implementation"},Object(r.d)(B,null,"implementation")),Object(r.d)(D,{link:"/api/DeclaredAPI/implementWithMiddleware"},Object(r.d)(L,null,"implementWithMiddleware")),Object(r.d)(D,{link:"/api/DeclaredAPI/mock"},Object(r.d)(L,null,"mock")),Object(r.d)(D,{link:"/api/DeclaredAPI/mockOnce"},Object(r.d)(L,null,"mockOnce")),Object(r.d)(D,{link:"/api/DeclaredAPI/unmock"},Object(r.d)(L,null,"unmock")),Object(r.d)(D,{link:"/api/DeclaredAPI/ResponseType"},Object(r.d)(U,null,"ResponseType")),Object(r.d)(D,{link:"/api/DeclaredAPI/ServerResponseType"},Object(r.d)(U,null,"ServerResponseType")),Object(r.d)(D,{link:"/api/DeclaredAPI/BodyType"},Object(r.d)(U,null,"BodyType")),Object(r.d)(D,{link:"/api/DeclaredAPI/CallArgsType"},Object(r.d)(U,null,"CallArgsType")),Object(r.d)(D,{link:"/api/DeclaredAPI/RequestType"},Object(r.d)(U,null,"RequestType"))),Object(r.d)(D,{link:"/api/fetchAdapter"},"fetchAdapter"),Object(r.d)(D,{link:"/api/requestPromiseAdapter"},"requestPromiseAdapter")))}function G(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  display: flex;\n"]);return G=function(){return n},n}var H=P.a.div(G());function W(n){var e=n.children;return Object(r.d)(H,null,Object(r.d)(Q,null),e)}e.a=function(n){var e=n.children;return Object(r.d)(o.b,{query:"991718019",render:function(n){return Object(r.d)(v,null,Object(r.d)(l.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:n.site.siteMetadata.description},{name:"keywords",content:n.site.siteMetadata.keywords}]}),Object(r.d)(h,{title:n.site.siteMetadata.title}),Object(r.d)(W,null,Object(r.d)(k,null,e)))},data:a})}},241:function(n){n.exports={data:{site:{siteMetadata:{title:"Papupata Documentation",description:"Documentation for the typescript library papupata, for utilizing types for AJAX requests."}}}}},242:function(n,e,t){"use strict";t.r(e);t(22);var r=t(0),a=t.n(r),i=t(101);e.default=function(n){var e=n.location,t=n.pageResources;return t?a.a.createElement(i.a,Object.assign({location:e,pageResources:t},t.json)):null}},243:function(n){n.exports={data:{site:{pathPrefix:"/papupata"}}}},244:function(n,e,t){"use strict";t(17);var r=t(9),a=t(233),i=t(0),c=t.n(i),l=t(245),o=i.createContext(!1);function u(){var n=f(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]);return u=function(){return n},n}function d(){var n=f([""]);return d=function(){return n},n}function b(){var n=f([""]);return b=function(){return n},n}function s(){var n=f([""]);return s=function(){return n},n}function f(n,e){return e||(e=n.slice(0)),n.raw=e,n}t.d(e,"j",function(){return p}),t.d(e,"k",function(){return m}),t.d(e,"i",function(){return h}),t.d(e,"a",function(){return g}),t.d(e,"l",function(){return v}),t.d(e,"h",function(){return y}),t.d(e,"g",function(){return k}),t.d(e,"f",function(){return P}),t.d(e,"b",function(){return A}),t.d(e,"e",function(){return I}),t.d(e,"c",function(){return x}),t.d(e,"d",function(){return w});var p=a.a.section(s()),m=a.a.h4(b()),j=a.a.h5(d()),O=a.a.section(u()),h=function(n){var e=n.children;return Object(r.d)(p,null,Object(r.d)(m,null,"Purpose"),e)},g=function(n){var e=n.version;return Object(r.d)(p,null,Object(r.d)(m,null,"Availability"),"This functionality is available from papupata version ",e," onwards.")},v=function(n){var e=n.children;return Object(r.d)(p,null,Object(r.d)(m,null,"Usage"),e)},y=function(n){var e=n.children,t=n.includeAvailableFrom;return Object(r.d)(p,null,Object(r.d)(o.Provider,{value:!!t},Object(r.d)(m,null,"Parameters"),e?Object(r.d)("table",null,Object(r.d)("thead",null,Object(r.d)("tr",null,Object(r.d)("th",null,"Name"),Object(r.d)("th",null,"Type"),Object(r.d)("th",null,"Description"),t&&Object(r.d)("th",null,"Introduced in"))),Object(r.d)("tbody",null,e)):Object(r.d)("p",null,"There are no parameters.")))},k=function(n){var e=n.children,t=n.name,a=n.dataType,i=n.availableFrom,l=void 0===i?"1.0.0":i,u=c.a.useContext(o);return Object(r.d)("tr",null,Object(r.d)("td",null,t),Object(r.d)("td",null,a),Object(r.d)("td",null,e),u&&Object(r.d)("td",null,l))},P=function(n){var e=n.children;return Object(r.d)(p,null,Object(r.d)(m,null,"Returns"),e)},A=function(n){var e=n.children;return Object(r.d)(p,null,Object(r.d)(m,null,"Caveats"),e)},I=function(n){var e=n.children;return Object(r.d)(p,null,Object(r.d)(m,null,"Examples"),e)},x=function(n){var e=n.children,t=n.label;return Object(r.d)(c.a.Fragment,null,t&&Object(r.d)(j,null,t),Object(r.d)(l.a,{language:"typescript"},e))},w=function(n){var e=n.children;return Object(r.d)(O,null,Object(r.d)(j,null,"Common to examples below:"),e)}},245:function(n,e,t){"use strict";t.d(e,"a",function(){return u});t(250),t(77),t(21);var r=t(9),a=(t(0),t(233)),i=t(476),c=t(475);function l(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}([""]);return l=function(){return n},n}var o=a.a.div(l()),u=function(n){var e=n.language,t=n.children;return Object(r.d)(o,null,Object(r.d)(i.a,{language:e,style:c.a},function(n){var e=n.split("\n");for(;e.length&&!e[0].trim();)e.shift();for(;e.length&&!e[e.length-1].trim();)e.pop();var t=(e[0].match(/^\s+/)||[""])[0];return e.map(function(n){return n.startsWith(t)?n.substring(t.length):n}).join("\n")}(t)))}}}]);
//# sourceMappingURL=component---src-pages-api-api-declaration-unmock-all-tsx-370025b16361a282a58f.js.map