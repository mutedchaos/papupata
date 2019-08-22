(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{212:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return o});var r=t(9),a=t(239),i=t(235),l=t(232),c=t(240);function o(){return Object(r.d)(a.a,null,Object(r.d)(i.a,null,Object(r.d)(l.a,null,Object(r.d)("h1",null,"API Reference"),Object(r.d)("h2",null,"class DeclaredAPI"),Object(r.d)("h3",null,"method invoke")),Object(r.d)(c.h,null,"Calls the declared API"),Object(r.d)(c.k,null,"All query parameters (including body) are passed as a single object. The invocation mechanisms spreads them out to the declared containers automatically."),Object(r.d)(c.g,null,Object(r.d)(c.f,{name:"params",dataType:"Object"},"All parameters to the API")),Object(r.d)(c.e,null,"Promise<ResponseType>"),Object(r.d)(c.a,null,Object(r.d)("ul",null,Object(r.d)("li",null,"Base URL and makeRequest function must be configured or the function will throw."),Object(r.d)("li",null,"There is no validation for the data returned by the server, it is assumed to be of the correct shape"),Object(r.d)("li",null,"Error handling is adapter-dependant."))),Object(r.d)(c.d,null,Object(r.d)(c.b,{label:"Declaration"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff/:param')\n              .params(['param'] as const)\n              .query(['q'] as const)\n              .body({key: string})\n              .response<string>()\n          "),Object(r.d)(c.b,{label:"Usage in implementation"},"\n            await myAPI.implement(req => {\n              const {q} = req.query,\n                {param} = req.params,\n                {key} = req.body\n              return [param, q, key].join()\n            })            \n          "),Object(r.d)(c.b,{label:"Usage in invocation"},"\n            const response = await myAPI({param: 'abc', q: 'def', key: 'ghi'})            \n            // Response in the example will be abc,def,ghi\n          "))))}},228:function(n,e,t){"use strict";t.d(e,"b",function(){return r}),t.d(e,"d",function(){return a}),t.d(e,"a",function(){return i}),t.d(e,"f",function(){return l}),t.d(e,"c",function(){return c}),t.d(e,"e",function(){return o});var r={brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},a={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},i={xs:0,sm:576,md:768,lg:992,xl:1200},l={md:720,lg:960,xl:1140},c={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},o={header:60}},231:function(n,e,t){"use strict";t.d(e,"b",function(){return u});var r=t(9),a=t(0),i=t.n(a),l=t(76),c=t.n(l);t.d(e,"a",function(){return c.a});t(234),t(10).default.enqueue;var o=i.a.createContext({});function d(n){var e=n.staticQueryData,t=n.data,a=n.query,l=n.render,c=t?t.data:e[a]&&e[a].data;return Object(r.d)(i.a.Fragment,null,c&&l(c),!c&&Object(r.d)("div",null,"Loading (StaticQuery)"))}var u=function(n){var e=n.data,t=n.query,a=n.render,i=n.children;return Object(r.d)(o.Consumer,null,function(n){return Object(r.d)(d,{data:e,query:t,render:a||i,staticQueryData:n})})}},232:function(n,e,t){"use strict";var r=t(230),a=t(9),i=(t(0),t(228)),l=t(233),c=Object(r.a)("div",{target:"e1c6zxln0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(l.a)(i.f.lg),"em;");e.a=function(n){var e=n.children,t=n.className;return Object(a.d)(c,{className:t},e)}},233:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var r=t(228),a=function(n){return n/r.c.fontSize.regular}},234:function(n,e,t){var r;n.exports=(r=t(237))&&r.default||r},235:function(n,e,t){"use strict";var r=t(230),a=t(9),i=(t(0),t(228)),l=Object(r.a)("div",{target:"e20rco30"})("display:block;flex:1;position:relative;padding:",i.c.containerPadding,"rem;margin-bottom:3rem;");e.a=function(n){var e=n.children,t=n.className;return Object(a.d)(l,{className:t},e)}},236:function(n){n.exports={data:{site:{siteMetadata:{title:"Papupata Documentation",description:"Documentation for the typescript library papupata, for utilizing types for AJAX requests."}}}}},237:function(n,e,t){"use strict";t.r(e);t(22);var r=t(0),a=t.n(r),i=t(101);e.default=function(n){var e=n.location,t=n.pageResources;return t?a.a.createElement(i.a,Object.assign({location:e,pageResources:t},t.json)):null}},238:function(n){n.exports={data:{site:{pathPrefix:"/papupata"}}}},239:function(n,e,t){"use strict";var r=t(9),a=t(236),i=t(0),l=t(242),c=t.n(l),o=t(231),d=(t(243),t(228)),u=t(233),s="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+d.c.fontSize.regular+"px !important;\n    line-height: "+d.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+d.d.sansSerif+";\n    color: "+d.b.black+";\n    background-color: "+d.b.white+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+d.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+d.b.ui.light+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+d.b.ui.light+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+d.b.ui.whisper+";\n        }\n        tr {\n          background-color: "+d.b.ui.whisper+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+d.b.black+";\n    font-weight: 600;\n    line-height: "+d.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+d.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+d.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+d.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+d.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+d.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+d.b.ui.light+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+d.b.ui.light+";\n    color: "+d.b.gray.calm+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(u.a)(d.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n",b=t(230),f=t(245),p=t(232),m=Object(b.a)("header",{target:"e14yya1q0"})("height:",d.e.header,"px;padding:0 ",d.c.containerPadding,"rem;background-color:",d.b.brand,";color:",Object(f.a)(.5,d.b.white),";"),j=Object(b.a)(p.a,{target:"e14yya1q1"})({name:"voneje",styles:"display:flex;flex-direction:row;align-items:center;height:100%;"}),h=Object(b.a)(o.a,{target:"e14yya1q2"})("color:",d.b.white,";font-size:1.5rem;font-weight:600;&:hover,&:focus{text-decoration:none;}"),O=function(n){var e=n.title;return Object(r.d)(m,null,Object(r.d)(j,null,Object(r.d)(h,{to:"/"},e)))},g=Object(b.a)("div",{target:"e17su9850"})({name:"zf0iqh",styles:"display:flex;flex-direction:column;min-height:100vh;"}),v=function(n){var e=n.children,t=n.className;return Object(r.d)(i.Fragment,null,Object(r.d)(r.a,{styles:function(){return Object(r.c)(s)}}),Object(r.d)(g,{className:t},e))},y=Object(b.a)("main",{target:"e1qy7fsr0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),P=function(n){var e=n.children,t=n.className;return Object(r.d)(y,{className:t},e)},k=t(229),A=(t(140),t(141),t(244),t(238)),I=t(23);function x(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  ",";\n"]);return x=function(){return n},n}var w=Object(k.a)(o.a)(x(),function(n){return"true"===n.current?"\n  \n  font-weight: bold;\n  ":""});function D(n){var e=n.link,t=n.children;return Object(r.d)("div",null,Object(r.d)(o.b,{query:"87648239",render:function(n){var a=n.site.pathPrefix;return Object(r.d)(I.Location,null,function(n){var i=n.location;return Object(r.d)(w,{current:[a+e,e].includes(i.pathname)?"true":"false",to:e},t)})},data:A}))}function q(){var n=N(["\n"]);return q=function(){return n},n}function z(){var n=N(["\n  font-style: italic;\n"]);return z=function(){return n},n}function R(){var n=N(["\n  margin-left: 20px;\n"]);return R=function(){return n},n}function T(){var n=N([""]);return T=function(){return n},n}function S(){var n=N(["\n  border-right: 1px solid #aaa;\n  margin-right: 30px;\n  padding-right: 30px;\n  padding-left: 30px;\n  margin-top: 30px;\n"]);return S=function(){return n},n}function N(n,e){return e||(e=n.slice(0)),n.raw=e,n}var M=k.a.div(S()),C=k.a.h2(T()),U=k.a.div(R()),L=function(n){var e=n.children;return Object(r.d)("span",null,e,"()")},B=k.a.span(z()),F=k.a.span(q());function Q(){return Object(r.d)(M,null,Object(r.d)(C,null,"Table of contents"),Object(r.d)(D,{link:"/what-is-papupata"},"What is papupata?"),Object(r.d)(D,{link:"/getting-started"},"Getting started"),Object(r.d)(D,{link:"/api-reference"},"API Reference"),Object(r.d)(U,null,Object(r.d)(D,{link:"/api/APIDeclaration"},"class APIDeclaration"),Object(r.d)(U,null,Object(r.d)(D,{link:"/api/APIDeclaration/configure"},Object(r.d)(L,null,"configure")),Object(r.d)(D,{link:"/api/APIDeclaration/declareDeleteAPI"},Object(r.d)(L,null,"declareDeleteAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/declareGetAPI"},Object(r.d)(L,null,"declareGetAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/declarePostAPI"},Object(r.d)(L,null,"declarePostAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/declarePutAPI"},Object(r.d)(L,null,"declarePutAPI"))),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration"},"IncompleteAPIDeclaration"),Object(r.d)(U,null,Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/params"},Object(r.d)(L,null,"params")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/query"},Object(r.d)(L,null,"query")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/optionalQuery"},Object(r.d)(L,null,"optionalQuery")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/queryBool"},Object(r.d)(L,null,"queryBool")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/body"},Object(r.d)(L,null,"body")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/response"},Object(r.d)(L,null,"response"))),Object(r.d)(D,{link:"/api/DeclaredAPI"},"DeclaredAPI"),Object(r.d)(U,null,Object(r.d)(D,{link:"/api/DeclaredAPI/invoke"},Object(r.d)(L,null,"invoke")),Object(r.d)(D,{link:"/api/DeclaredAPI/getURL"},Object(r.d)(L,null,"getURL")),Object(r.d)(D,{link:"/api/DeclaredAPI/implement"},Object(r.d)(L,null,"implement")),Object(r.d)(D,{link:"/api/DeclaredAPI/implementation"},Object(r.d)(F,null,"implementation")),Object(r.d)(D,{link:"/api/DeclaredAPI/implementWithMiddleware"},Object(r.d)(L,null,"implementWithMiddleware")),Object(r.d)(D,{link:"/api/DeclaredAPI/ResponseType"},Object(r.d)(B,null,"ResponseType")),Object(r.d)(D,{link:"/api/DeclaredAPI/ServerResponseType"},Object(r.d)(B,null,"ServerResponseType")),Object(r.d)(D,{link:"/api/DeclaredAPI/BodyType"},Object(r.d)(B,null,"BodyType")),Object(r.d)(D,{link:"/api/DeclaredAPI/CallArgsType"},Object(r.d)(B,null,"CallArgsType")),Object(r.d)(D,{link:"/api/DeclaredAPI/RequestType"},Object(r.d)(B,null,"RequestType"))),Object(r.d)(D,{link:"/api/fetchAdapter"},"fetchAdapter"),Object(r.d)(D,{link:"/api/requestPromiseAdapter"},"requestPromiseAdapter")))}function G(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  display: flex;\n"]);return G=function(){return n},n}var H=k.a.div(G());function W(n){var e=n.children;return Object(r.d)(H,null,Object(r.d)(Q,null),e)}e.a=function(n){var e=n.children;return Object(r.d)(o.b,{query:"991718019",render:function(n){return Object(r.d)(v,null,Object(r.d)(c.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:n.site.siteMetadata.description},{name:"keywords",content:n.site.siteMetadata.keywords}]}),Object(r.d)(O,{title:n.site.siteMetadata.title}),Object(r.d)(W,null,Object(r.d)(P,null,e)))},data:a})}},240:function(n,e,t){"use strict";t.d(e,"i",function(){return f}),t.d(e,"j",function(){return p}),t.d(e,"h",function(){return h}),t.d(e,"k",function(){return O}),t.d(e,"g",function(){return g}),t.d(e,"f",function(){return v}),t.d(e,"e",function(){return y}),t.d(e,"a",function(){return P}),t.d(e,"d",function(){return k}),t.d(e,"b",function(){return A}),t.d(e,"c",function(){return I});t(17);var r=t(9),a=t(229),i=t(0),l=t.n(i),c=t(241);function o(){var n=b(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]);return o=function(){return n},n}function d(){var n=b([""]);return d=function(){return n},n}function u(){var n=b([""]);return u=function(){return n},n}function s(){var n=b([""]);return s=function(){return n},n}function b(n,e){return e||(e=n.slice(0)),n.raw=e,n}var f=a.a.section(s()),p=a.a.h4(u()),m=a.a.h5(d()),j=a.a.section(o()),h=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Purpose"),e)},O=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Usage"),e)},g=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Parameters"),Object(r.d)("table",null,Object(r.d)("thead",null,Object(r.d)("tr",null,Object(r.d)("th",null,"Name"),Object(r.d)("th",null,"Type"),Object(r.d)("th",null,"Description"))),Object(r.d)("tbody",null,e)))},v=function(n){var e=n.children,t=n.name,a=n.dataType;return Object(r.d)("tr",null,Object(r.d)("td",null,t),Object(r.d)("td",null,a),Object(r.d)("td",null,e))},y=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Returns"),e)},P=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Caveats"),e)},k=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Examples"),e)},A=function(n){var e=n.children,t=n.label;return Object(r.d)(l.a.Fragment,null,t&&Object(r.d)(m,null,t),Object(r.d)(c.a,{language:"typescript"},e))},I=function(n){var e=n.children;return Object(r.d)(j,null,Object(r.d)(m,null,"Common to examples below:"),e)}},241:function(n,e,t){"use strict";t.d(e,"a",function(){return d});t(246),t(77),t(21);var r=t(9),a=(t(0),t(229)),i=t(472),l=t(471);function c(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}([""]);return c=function(){return n},n}var o=a.a.div(c()),d=function(n){var e=n.language,t=n.children;return Object(r.d)(o,null,Object(r.d)(i.a,{language:e,style:l.a},function(n){var e=n.split("\n");for(;e.length&&!e[0].trim();)e.shift();for(;e.length&&!e[e.length-1].trim();)e.pop();var t=(e[0].match(/^\s+/)||[""])[0];return e.map(function(n){return n.startsWith(t)?n.substring(t.length):n}).join("\n")}(t)))}}}]);
//# sourceMappingURL=component---src-pages-api-declared-api-invoke-tsx-6910685c91c86eca1fd8.js.map