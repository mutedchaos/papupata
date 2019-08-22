(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{200:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return f});var r=t(9),a=(t(0),t(239)),i=t(235),c=t(232),l=t(231),u=t(240),o=t(252),d=t(249),b=t(251),s=function(n){var e=n.method;return Object(r.d)(o.c,{name:"declare"+Object(b.a)(e)+"API",dataType:Object(r.d)(d.b,null)},"Declares an API using the ",e.toUpperCase()," HTTP method.")};function f(){return Object(r.d)(a.a,null,Object(r.d)(i.a,null,Object(r.d)(c.a,null,Object(r.d)("h1",null,"API Reference"),Object(r.d)("h2",null,"class APIDeclaration")),Object(r.d)(u.h,null,"Used for declaring, implementing and callind APIs"),Object(r.d)(u.k,null,Object(r.d)("p",null,"Once created, APIs can be declared using most of the methods. Before implemting or calling the APIs the object must be configured using its ",Object(r.d)(l.a,{to:"/api/APIDeclaration/configure"},"configure method.")),Object(r.d)("p",null,"APIDeclaration has an expicit type parameter, which can be used to override the type of the request used in the API implementations. It defaults to express request.")),Object(r.d)(o.b,{context:"APIDeclaration"},Object(r.d)(o.c,{name:"configure",dataType:"void"},"Configures papupata to allow implementing and/or calling the declared APIs."),Object(r.d)(s,{method:"delete"}),Object(r.d)(s,{method:"get"}),Object(r.d)(s,{method:"post"}),Object(r.d)(s,{method:"put"}))))}},228:function(n,e,t){"use strict";t.d(e,"b",function(){return r}),t.d(e,"d",function(){return a}),t.d(e,"a",function(){return i}),t.d(e,"f",function(){return c}),t.d(e,"c",function(){return l}),t.d(e,"e",function(){return u});var r={brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},a={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},i={xs:0,sm:576,md:768,lg:992,xl:1200},c={md:720,lg:960,xl:1140},l={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},u={header:60}},231:function(n,e,t){"use strict";t.d(e,"b",function(){return d});var r=t(9),a=t(0),i=t.n(a),c=t(76),l=t.n(c);t.d(e,"a",function(){return l.a});t(234),t(10).default.enqueue;var u=i.a.createContext({});function o(n){var e=n.staticQueryData,t=n.data,a=n.query,c=n.render,l=t?t.data:e[a]&&e[a].data;return Object(r.d)(i.a.Fragment,null,l&&c(l),!l&&Object(r.d)("div",null,"Loading (StaticQuery)"))}var d=function(n){var e=n.data,t=n.query,a=n.render,i=n.children;return Object(r.d)(u.Consumer,null,function(n){return Object(r.d)(o,{data:e,query:t,render:a||i,staticQueryData:n})})}},232:function(n,e,t){"use strict";var r=t(230),a=t(9),i=(t(0),t(228)),c=t(233),l=Object(r.a)("div",{target:"e1c6zxln0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(c.a)(i.f.lg),"em;");e.a=function(n){var e=n.children,t=n.className;return Object(a.d)(l,{className:t},e)}},233:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var r=t(228),a=function(n){return n/r.c.fontSize.regular}},234:function(n,e,t){var r;n.exports=(r=t(237))&&r.default||r},235:function(n,e,t){"use strict";var r=t(230),a=t(9),i=(t(0),t(228)),c=Object(r.a)("div",{target:"e20rco30"})("display:block;flex:1;position:relative;padding:",i.c.containerPadding,"rem;margin-bottom:3rem;");e.a=function(n){var e=n.children,t=n.className;return Object(a.d)(c,{className:t},e)}},236:function(n){n.exports={data:{site:{siteMetadata:{title:"Papupata Documentation",description:"Documentation for the typescript library papupata, for utilizing types for AJAX requests."}}}}},237:function(n,e,t){"use strict";t.r(e);t(22);var r=t(0),a=t.n(r),i=t(101);e.default=function(n){var e=n.location,t=n.pageResources;return t?a.a.createElement(i.a,Object.assign({location:e,pageResources:t},t.json)):null}},238:function(n){n.exports={data:{site:{pathPrefix:"/papupata"}}}},239:function(n,e,t){"use strict";var r=t(9),a=t(236),i=t(0),c=t(242),l=t.n(c),u=t(231),o=(t(243),t(228)),d=t(233),b="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+o.c.fontSize.regular+"px !important;\n    line-height: "+o.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+o.d.sansSerif+";\n    color: "+o.b.black+";\n    background-color: "+o.b.white+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+o.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+o.b.ui.light+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+o.b.ui.light+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+o.b.ui.whisper+";\n        }\n        tr {\n          background-color: "+o.b.ui.whisper+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+o.b.black+";\n    font-weight: 600;\n    line-height: "+o.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+o.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+o.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+o.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+o.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+o.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+o.b.ui.light+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+o.b.ui.light+";\n    color: "+o.b.gray.calm+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(d.a)(o.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n",s=t(230),f=t(245),p=t(232),j=Object(s.a)("header",{target:"e14yya1q0"})("height:",o.e.header,"px;padding:0 ",o.c.containerPadding,"rem;background-color:",o.b.brand,";color:",Object(f.a)(.5,o.b.white),";"),O=Object(s.a)(p.a,{target:"e14yya1q1"})({name:"voneje",styles:"display:flex;flex-direction:row;align-items:center;height:100%;"}),m=Object(s.a)(u.a,{target:"e14yya1q2"})("color:",o.b.white,";font-size:1.5rem;font-weight:600;&:hover,&:focus{text-decoration:none;}"),h=function(n){var e=n.title;return Object(r.d)(j,null,Object(r.d)(O,null,Object(r.d)(m,{to:"/"},e)))},g=Object(s.a)("div",{target:"e17su9850"})({name:"zf0iqh",styles:"display:flex;flex-direction:column;min-height:100vh;"}),v=function(n){var e=n.children,t=n.className;return Object(r.d)(i.Fragment,null,Object(r.d)(r.a,{styles:function(){return Object(r.c)(b)}}),Object(r.d)(g,{className:t},e))},y=Object(s.a)("main",{target:"e1qy7fsr0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),P=function(n){var e=n.children,t=n.className;return Object(r.d)(y,{className:t},e)},I=t(229),A=(t(140),t(141),t(244),t(238)),x=t(23);function k(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  ",";\n"]);return k=function(){return n},n}var w=Object(I.a)(u.a)(k(),function(n){return"true"===n.current?"\n  \n  font-weight: bold;\n  ":""});function D(n){var e=n.link,t=n.children;return Object(r.d)("div",null,Object(r.d)(u.b,{query:"87648239",render:function(n){var a=n.site.pathPrefix;return Object(r.d)(x.Location,null,function(n){var i=n.location;return Object(r.d)(w,{current:[a+e,e].includes(i.pathname)?"true":"false",to:e},t)})},data:A}))}function q(){var n=C(["\n"]);return q=function(){return n},n}function z(){var n=C(["\n  font-style: italic;\n"]);return z=function(){return n},n}function T(){var n=C(["\n  margin-left: 20px;\n"]);return T=function(){return n},n}function R(){var n=C([""]);return R=function(){return n},n}function S(){var n=C(["\n  border-right: 1px solid #aaa;\n  margin-right: 30px;\n  padding-right: 30px;\n  padding-left: 30px;\n  margin-top: 30px;\n"]);return S=function(){return n},n}function C(n,e){return e||(e=n.slice(0)),n.raw=e,n}var N=I.a.div(S()),M=I.a.h2(R()),U=I.a.div(T()),L=function(n){var e=n.children;return Object(r.d)("span",null,e,"()")},B=I.a.span(z()),F=I.a.span(q());function H(){return Object(r.d)(N,null,Object(r.d)(M,null,"Table of contents"),Object(r.d)(D,{link:"/what-is-papupata"},"What is papupata?"),Object(r.d)(D,{link:"/getting-started"},"Getting started"),Object(r.d)(D,{link:"/api-reference"},"API Reference"),Object(r.d)(U,null,Object(r.d)(D,{link:"/api/APIDeclaration"},"class APIDeclaration"),Object(r.d)(U,null,Object(r.d)(D,{link:"/api/APIDeclaration/configure"},Object(r.d)(L,null,"configure")),Object(r.d)(D,{link:"/api/APIDeclaration/declareDeleteAPI"},Object(r.d)(L,null,"declareDeleteAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/declareGetAPI"},Object(r.d)(L,null,"declareGetAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/declarePostAPI"},Object(r.d)(L,null,"declarePostAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/declarePutAPI"},Object(r.d)(L,null,"declarePutAPI"))),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration"},"IncompleteAPIDeclaration"),Object(r.d)(U,null,Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/params"},Object(r.d)(L,null,"params")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/query"},Object(r.d)(L,null,"query")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/optionalQuery"},Object(r.d)(L,null,"optionalQuery")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/queryBool"},Object(r.d)(L,null,"queryBool")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/body"},Object(r.d)(L,null,"body")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/response"},Object(r.d)(L,null,"response"))),Object(r.d)(D,{link:"/api/DeclaredAPI"},"DeclaredAPI"),Object(r.d)(U,null,Object(r.d)(D,{link:"/api/DeclaredAPI/invoke"},Object(r.d)(L,null,"invoke")),Object(r.d)(D,{link:"/api/DeclaredAPI/getURL"},Object(r.d)(L,null,"getURL")),Object(r.d)(D,{link:"/api/DeclaredAPI/implement"},Object(r.d)(L,null,"implement")),Object(r.d)(D,{link:"/api/DeclaredAPI/implementation"},Object(r.d)(F,null,"implementation")),Object(r.d)(D,{link:"/api/DeclaredAPI/implementWithMiddleware"},Object(r.d)(L,null,"implementWithMiddleware")),Object(r.d)(D,{link:"/api/DeclaredAPI/ResponseType"},Object(r.d)(B,null,"ResponseType")),Object(r.d)(D,{link:"/api/DeclaredAPI/ServerResponseType"},Object(r.d)(B,null,"ServerResponseType")),Object(r.d)(D,{link:"/api/DeclaredAPI/BodyType"},Object(r.d)(B,null,"BodyType")),Object(r.d)(D,{link:"/api/DeclaredAPI/CallArgsType"},Object(r.d)(B,null,"CallArgsType")),Object(r.d)(D,{link:"/api/DeclaredAPI/RequestType"},Object(r.d)(B,null,"RequestType"))),Object(r.d)(D,{link:"/api/fetchAdapter"},"fetchAdapter"),Object(r.d)(D,{link:"/api/requestPromiseAdapter"},"requestPromiseAdapter")))}function Q(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  display: flex;\n"]);return Q=function(){return n},n}var G=I.a.div(Q());function W(n){var e=n.children;return Object(r.d)(G,null,Object(r.d)(H,null),e)}e.a=function(n){var e=n.children;return Object(r.d)(u.b,{query:"991718019",render:function(n){return Object(r.d)(v,null,Object(r.d)(l.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:n.site.siteMetadata.description},{name:"keywords",content:n.site.siteMetadata.keywords}]}),Object(r.d)(h,{title:n.site.siteMetadata.title}),Object(r.d)(W,null,Object(r.d)(P,null,e)))},data:a})}},240:function(n,e,t){"use strict";t.d(e,"i",function(){return f}),t.d(e,"j",function(){return p}),t.d(e,"h",function(){return m}),t.d(e,"k",function(){return h}),t.d(e,"g",function(){return g}),t.d(e,"f",function(){return v}),t.d(e,"e",function(){return y}),t.d(e,"a",function(){return P}),t.d(e,"d",function(){return I}),t.d(e,"b",function(){return A}),t.d(e,"c",function(){return x});t(17);var r=t(9),a=t(229),i=t(0),c=t.n(i),l=t(241);function u(){var n=s(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]);return u=function(){return n},n}function o(){var n=s([""]);return o=function(){return n},n}function d(){var n=s([""]);return d=function(){return n},n}function b(){var n=s([""]);return b=function(){return n},n}function s(n,e){return e||(e=n.slice(0)),n.raw=e,n}var f=a.a.section(b()),p=a.a.h4(d()),j=a.a.h5(o()),O=a.a.section(u()),m=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Purpose"),e)},h=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Usage"),e)},g=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Parameters"),Object(r.d)("table",null,Object(r.d)("thead",null,Object(r.d)("tr",null,Object(r.d)("th",null,"Name"),Object(r.d)("th",null,"Type"),Object(r.d)("th",null,"Description"))),Object(r.d)("tbody",null,e)))},v=function(n){var e=n.children,t=n.name,a=n.dataType;return Object(r.d)("tr",null,Object(r.d)("td",null,t),Object(r.d)("td",null,a),Object(r.d)("td",null,e))},y=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Returns"),e)},P=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Caveats"),e)},I=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Examples"),e)},A=function(n){var e=n.children,t=n.label;return Object(r.d)(c.a.Fragment,null,t&&Object(r.d)(j,null,t),Object(r.d)(l.a,{language:"typescript"},e))},x=function(n){var e=n.children;return Object(r.d)(O,null,Object(r.d)(j,null,"Common to examples below:"),e)}},241:function(n,e,t){"use strict";t.d(e,"a",function(){return o});t(246),t(77),t(21);var r=t(9),a=(t(0),t(229)),i=t(472),c=t(471);function l(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}([""]);return l=function(){return n},n}var u=a.a.div(l()),o=function(n){var e=n.language,t=n.children;return Object(r.d)(u,null,Object(r.d)(i.a,{language:e,style:c.a},function(n){var e=n.split("\n");for(;e.length&&!e[0].trim();)e.shift();for(;e.length&&!e[e.length-1].trim();)e.pop();var t=(e[0].match(/^\s+/)||[""])[0];return e.map(function(n){return n.startsWith(t)?n.substring(t.length):n}).join("\n")}(t)))}},249:function(n,e,t){"use strict";t.d(e,"b",function(){return i}),t.d(e,"a",function(){return c});var r=t(9),a=(t(0),t(231));function i(){return Object(r.d)(a.a,{to:"/api/IncompleteApiDeclaration"},"IncompleteApiDeclaration")}function c(){return Object(r.d)(a.a,{to:"/api/DeclaredAPI"},"DeclaredAPI")}},251:function(n,e,t){"use strict";function r(n){return n[0].toUpperCase()+n.substr(1).toLowerCase()}t.d(e,"a",function(){return r})},252:function(n,e,t){"use strict";t.d(e,"b",function(){return I}),t.d(e,"c",function(){return A}),t.d(e,"d",function(){return x}),t.d(e,"a",function(){return k});t(17);var r=t(9),a=t(240),i=t(0),c=t(229),l=t(231);function u(){var n=p([""]);return u=function(){return n},n}function o(){var n=p([""]);return o=function(){return n},n}function d(){var n=p([""]);return d=function(){return n},n}function b(){var n=p([""]);return b=function(){return n},n}function s(){var n=p([""]);return s=function(){return n},n}function f(){var n=p([""]);return f=function(){return n},n}function p(n,e){return e||(e=n.slice(0)),n.raw=e,n}var j=c.a.tr(f()),O=c.a.td(s()),m=c.a.td(b()),h=c.a.td(d()),g=c.a.td(o()),v=c.a.td(u()),y=Object(i.createContext)({context:""}),P=function(n){var e=n.name,t=n.children,a=Object(i.useContext)(y).context;return Object(r.d)(O,null,Object(r.d)(l.a,{to:"/api/"+a+"/"+e},t||e))},I=function(n){var e=n.children,t=n.context,i=n.includeRequiredColumn;return Object(r.d)(a.i,null,Object(r.d)(y.Provider,{value:{context:t}},Object(r.d)(a.j,null,"Members"),Object(r.d)("table",null,Object(r.d)("thead",null,Object(r.d)("th",null,"Name"),Object(r.d)("th",null,"Type"),Object(r.d)("th",null,"Data type/return type"),Object(r.d)("th",null,"Description"),i&&Object(r.d)("th",null,"Required")),Object(r.d)("tbody",null,e))))},A=function(n){var e=n.children,t=n.name,a=n.dataType,i=n.required,c=n.displayName;return Object(r.d)(j,null,Object(r.d)(P,{name:t},c),Object(r.d)(m,null,"method"),Object(r.d)(h,null,a),Object(r.d)(g,null,e),void 0!==i&&Object(r.d)(v,null,!0===i?"Yes":!1===i?"No":i))},x=function(n){var e=n.children,t=n.name,a=n.dataType,i=n.required;return Object(r.d)(j,null,Object(r.d)(O,null,t),Object(r.d)(m,null,"property"),Object(r.d)(h,null,a),Object(r.d)(g,null,e),void 0!==i&&Object(r.d)(v,null,!0===i?"Yes":!1===i?"No":i))},k=function(n){var e=n.children,t=n.name;return Object(r.d)(j,null,Object(r.d)(O,null,t),Object(r.d)(m,null,"property"),Object(r.d)(h,null,"n/a"),Object(r.d)(g,null,e,". Type type itself must be accessed using the typeof operator."))}}}]);
//# sourceMappingURL=component---src-pages-api-api-declaration-tsx-60ec1f0c792defeed7d8.js.map