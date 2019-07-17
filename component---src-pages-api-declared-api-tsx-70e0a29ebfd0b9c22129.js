(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{192:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d});var r=t(7),a=(t(0),t(223)),i=t(220),c=t(217),l=t(224),o=t(236);function d(){return Object(r.d)(a.a,null,Object(r.d)(i.a,null,Object(r.d)(c.a,null,Object(r.d)("h1",null,"API Reference"),Object(r.d)("h2",null,"interface DeclaredAPI")),Object(r.d)(l.h,null,"Represents a declared API and allow interacting with it."),Object(r.d)(l.k,null,Object(r.d)("p",null,'Technically there is nothing called "DeclaredAPI" in the code base. This is simply a representation of what is returned when an API has been declared.'),Object(r.d)("p",null,"Some of the types used for the API are exposed in an unusual fashion. In the future we might look into adding some wrapper types that allow for more conventional means for accessing them.")),Object(r.d)(o.b,{context:"DeclaredAPI"},Object(r.d)(o.c,{name:"invoke",displayName:"()",dataType:"Promise<ResponseType>"},"DeclaredAPI itself is a function, which can be called to call the API itself. The response is returned wrapped in a promise. Error handling is dependant on the adapter being used."),Object(r.d)(o.c,{name:"getURL",dataType:"string"},"Returns URL to the API."),Object(r.d)(o.c,{name:"implement",dataType:"void"},"Implement an API."),Object(r.d)(o.c,{name:"implementWithMiddleware",dataType:"void"},"Implement an API, providing additional middleware for it."),Object(r.d)(o.a,{name:"ResponseType"},"The type of the response."),Object(r.d)(o.a,{name:"ServerResponseType"},"The type of the response as the server returns it."),Object(r.d)(o.a,{name:"CallArgsType"},"The type of the parameter object passed to invoke the API."),Object(r.d)(o.a,{name:"RequestType"},"The type of the modified express request passed to the impementing function.")),Object(r.d)(l.d,null,Object(r.d)(l.b,{label:"Using the exposed types"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff/:pathParam')              \n              .response<string>()\n\n            type RespType = typeof myAPI['ResponseType']\n            // RespType is now string\n          "))))}},213:function(e,n,t){"use strict";t.d(n,"b",function(){return r}),t.d(n,"d",function(){return a}),t.d(n,"a",function(){return i}),t.d(n,"f",function(){return c}),t.d(n,"c",function(){return l}),t.d(n,"e",function(){return o});var r={brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},a={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},i={xs:0,sm:576,md:768,lg:992,xl:1200},c={md:720,lg:960,xl:1140},l={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},o={header:60}},216:function(e,n,t){"use strict";t.d(n,"b",function(){return u});var r=t(7),a=t(0),i=t.n(a),c=t(65),l=t.n(c);t.d(n,"a",function(){return l.a});t(219),t(8);var o=i.a.createContext({});function d(e){var n=e.staticQueryData,t=e.data,a=e.query,c=e.render,l=t?t.data:n[a]&&n[a].data;return Object(r.d)(i.a.Fragment,null,l&&c(l),!l&&Object(r.d)("div",null,"Loading (StaticQuery)"))}var u=function(e){var n=e.data,t=e.query,a=e.render,i=e.children;return Object(r.d)(o.Consumer,null,function(e){return Object(r.d)(d,{data:n,query:t,render:a||i,staticQueryData:e})})}},217:function(e,n,t){"use strict";var r=t(215),a=t(7),i=(t(0),t(213)),c=t(218),l=Object(r.a)("div",{target:"e1c6zxln0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(c.a)(i.f.lg),"em;");n.a=function(e){var n=e.children,t=e.className;return Object(a.d)(l,{className:t},n)}},218:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=t(213),a=function(e){return e/r.c.fontSize.regular}},219:function(e,n,t){var r;e.exports=(r=t(222))&&r.default||r},220:function(e,n,t){"use strict";var r=t(215),a=t(7),i=(t(0),t(213)),c=Object(r.a)("div",{target:"e20rco30"})("display:block;flex:1;position:relative;padding:",i.c.containerPadding,"rem;margin-bottom:3rem;");n.a=function(e){var n=e.children,t=e.className;return Object(a.d)(c,{className:t},n)}},221:function(e){e.exports={data:{site:{siteMetadata:{title:"Papupata Documentation",description:"Documentation for the typescript library papupata, for utilizing types for AJAX requests."}}}}},222:function(e,n,t){"use strict";t.r(n);t(19);var r=t(0),a=t.n(r),i=t(91);n.default=function(e){var n=e.location,t=e.pageResources;return t?a.a.createElement(i.a,Object.assign({location:n,pageResources:t},t.json)):null}},223:function(e,n,t){"use strict";var r=t(7),a=t(221),i=t(0),c=t(226),l=t.n(c),o=t(216),d=(t(227),t(213)),u=t(218),s="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+d.c.fontSize.regular+"px !important;\n    line-height: "+d.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+d.d.sansSerif+";\n    color: "+d.b.black+";\n    background-color: "+d.b.white+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+d.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+d.b.ui.light+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+d.b.ui.light+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+d.b.ui.whisper+";\n        }\n        tr {\n          background-color: "+d.b.ui.whisper+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+d.b.black+";\n    font-weight: 600;\n    line-height: "+d.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+d.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+d.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+d.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+d.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+d.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+d.b.ui.light+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+d.b.ui.light+";\n    color: "+d.b.gray.calm+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(u.a)(d.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n",b=t(215),p=t(229),f=t(217),h=Object(b.a)("header",{target:"e14yya1q0"})("height:",d.e.header,"px;padding:0 ",d.c.containerPadding,"rem;background-color:",d.b.brand,";color:",Object(p.a)(.5,d.b.white),";"),j=Object(b.a)(f.a,{target:"e14yya1q1"})({name:"voneje",styles:"display:flex;flex-direction:row;align-items:center;height:100%;"}),m=Object(b.a)(o.a,{target:"e14yya1q2"})("color:",d.b.white,";font-size:1.5rem;font-weight:600;&:hover,&:focus{text-decoration:none;}"),O=function(e){var n=e.title;return Object(r.d)(h,null,Object(r.d)(j,null,Object(r.d)(m,{to:"/"},n)))},g=Object(b.a)("div",{target:"e17su9850"})({name:"zf0iqh",styles:"display:flex;flex-direction:column;min-height:100vh;"}),y=function(e){var n=e.children,t=e.className;return Object(r.d)(i.Fragment,null,Object(r.d)(r.a,{styles:function(){return Object(r.c)(s)}}),Object(r.d)(g,{className:t},n))},v=Object(b.a)("main",{target:"e1qy7fsr0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),P=function(e){var n=e.children,t=e.className;return Object(r.d)(v,{className:t},n)},I=t(214),A=(t(228),t(20));function w(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  ",";\n"]);return w=function(){return e},e}var x=Object(I.a)(o.a)(w(),function(e){return"true"===e.current?"\n  \n  font-weight: bold;\n  ":""});function k(e){var n=e.link,t=e.children;return Object(r.d)("div",null,Object(r.d)(A.Location,null,function(e){var a=e.location;return Object(r.d)(x,{current:a.pathname===n?"true":"false",to:n},t,JSON.stringify(a))}))}function D(){var e=z(["\n  font-style: italic;\n"]);return D=function(){return e},e}function T(){var e=z(["\n  margin-left: 20px;\n"]);return T=function(){return e},e}function R(){var e=z([""]);return R=function(){return e},e}function q(){var e=z(["\n  border-right: 1px solid #aaa;\n  margin-right: 30px;\n  padding-right: 30px;\n  padding-left: 30px;\n  margin-top: 30px;\n"]);return q=function(){return e},e}function z(e,n){return n||(n=e.slice(0)),e.raw=n,e}var S=I.a.div(q()),N=I.a.h2(R()),C=I.a.div(T()),M=function(e){var n=e.children;return Object(r.d)("span",null,n,"()")},L=I.a.span(D());function U(){return Object(r.d)(S,null,Object(r.d)(N,null,"Table of contents"),Object(r.d)(k,{link:"/what-is-papupata"},"What is papupata?"),Object(r.d)(k,{link:"/getting-started"},"Getting started"),Object(r.d)(k,{link:"/api-reference"},"API Reference"),Object(r.d)(C,null,Object(r.d)(k,{link:"/api/APIDeclaration"},"class APIDeclaration"),Object(r.d)(C,null,Object(r.d)(k,{link:"/api/APIDeclaration/configure"},Object(r.d)(M,null,"configure")),Object(r.d)(k,{link:"/api/APIDeclaration/declareDeleteAPI"},Object(r.d)(M,null,"declareDeleteAPI")),Object(r.d)(k,{link:"/api/APIDeclaration/declareGetAPI"},Object(r.d)(M,null,"declareGetAPI")),Object(r.d)(k,{link:"/api/APIDeclaration/declarePostAPI"},Object(r.d)(M,null,"declarePostAPI")),Object(r.d)(k,{link:"/api/APIDeclaration/declarePutAPI"},Object(r.d)(M,null,"declarePutAPI"))),Object(r.d)(k,{link:"/api/IncompleteAPIDeclaration"},"IncompleteAPIDeclaration"),Object(r.d)(C,null,Object(r.d)(k,{link:"/api/IncompleteAPIDeclaration/params"},Object(r.d)(M,null,"params")),Object(r.d)(k,{link:"/api/IncompleteAPIDeclaration/query"},Object(r.d)(M,null,"query")),Object(r.d)(k,{link:"/api/IncompleteAPIDeclaration/optionalQuery"},Object(r.d)(M,null,"optionalQuery")),Object(r.d)(k,{link:"/api/IncompleteAPIDeclaration/queryBool"},Object(r.d)(M,null,"queryBool")),Object(r.d)(k,{link:"/api/IncompleteAPIDeclaration/body"},Object(r.d)(M,null,"body")),Object(r.d)(k,{link:"/api/IncompleteAPIDeclaration/response"},Object(r.d)(M,null,"response"))),Object(r.d)(k,{link:"/api/DeclaredAPI"},"DeclaredAPI"),Object(r.d)(C,null,Object(r.d)(k,{link:"/api/DeclaredAPI/invoke"},Object(r.d)(M,null)),Object(r.d)(k,{link:"/api/DeclaredAPI/getURL"},Object(r.d)(M,null,"getURL")),Object(r.d)(k,{link:"/api/DeclaredAPI/implement"},Object(r.d)(M,null,"implement")),Object(r.d)(k,{link:"/api/DeclaredAPI/implementWithMiddleware"},Object(r.d)(M,null,"implementWithMiddleware")),Object(r.d)(k,{link:"/api/DeclaredAPI/ResponseType"},Object(r.d)(L,null,"ResponseType")),Object(r.d)(k,{link:"/api/DeclaredAPI/ServerResponseType"},Object(r.d)(L,null,"ServerResponseType")),Object(r.d)(k,{link:"/api/DeclaredAPI/BodyType"},Object(r.d)(L,null,"BodyType")),Object(r.d)(k,{link:"/api/DeclaredAPI/CallArgsType"},Object(r.d)(L,null,"CallArgsType")),Object(r.d)(k,{link:"/api/DeclaredAPI/RequestType"},Object(r.d)(L,null,"RequestType"))),Object(r.d)(k,{link:"/api/fetchAdapter"},"fetchAdapter"),Object(r.d)(k,{link:"/api/requestPromiseAdapter"},"requestPromiseAdapter")))}function B(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  display: flex;\n"]);return B=function(){return e},e}var F=I.a.div(B());function Q(e){var n=e.children;return Object(r.d)(F,null,Object(r.d)(U,null),n)}n.a=function(e){var n=e.children;return Object(r.d)(o.b,{query:"991718019",render:function(e){return Object(r.d)(y,null,Object(r.d)(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]}),Object(r.d)(O,{title:e.site.siteMetadata.title}),Object(r.d)(Q,null,Object(r.d)(P,null,n)))},data:a})}},224:function(e,n,t){"use strict";t.d(n,"i",function(){return p}),t.d(n,"j",function(){return f}),t.d(n,"h",function(){return m}),t.d(n,"k",function(){return O}),t.d(n,"g",function(){return g}),t.d(n,"f",function(){return y}),t.d(n,"e",function(){return v}),t.d(n,"a",function(){return P}),t.d(n,"d",function(){return I}),t.d(n,"b",function(){return A}),t.d(n,"c",function(){return w});t(16);var r=t(7),a=t(214),i=t(0),c=t.n(i),l=t(225);function o(){var e=b(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]);return o=function(){return e},e}function d(){var e=b([""]);return d=function(){return e},e}function u(){var e=b([""]);return u=function(){return e},e}function s(){var e=b([""]);return s=function(){return e},e}function b(e,n){return n||(n=e.slice(0)),e.raw=n,e}var p=a.a.section(s()),f=a.a.h4(u()),h=a.a.h5(d()),j=a.a.section(o()),m=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Purpose"),n)},O=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Usage"),n)},g=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Parameters"),Object(r.d)("table",null,Object(r.d)("thead",null,Object(r.d)("tr",null,Object(r.d)("th",null,"Name"),Object(r.d)("th",null,"Type"),Object(r.d)("th",null,"Description"))),Object(r.d)("tbody",null,n)))},y=function(e){var n=e.children,t=e.name,a=e.dataType;return Object(r.d)("tr",null,Object(r.d)("td",null,t),Object(r.d)("td",null,a),Object(r.d)("td",null,n))},v=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Returns"),n)},P=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Caveats"),n)},I=function(e){var n=e.children;return Object(r.d)(p,null,Object(r.d)(f,null,"Examples"),n)},A=function(e){var n=e.children,t=e.label;return Object(r.d)(c.a.Fragment,null,t&&Object(r.d)(h,null,t),Object(r.d)(l.a,{language:"typescript"},n))},w=function(e){var n=e.children;return Object(r.d)(j,null,Object(r.d)(h,null,"Common to examples below:"),n)}},225:function(e,n,t){"use strict";t.d(n,"a",function(){return d});t(230),t(66),t(18);var r=t(7),a=(t(0),t(214)),i=t(456),c=t(455);function l(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}([""]);return l=function(){return e},e}var o=a.a.div(l()),d=function(e){var n=e.language,t=e.children;return Object(r.d)(o,null,Object(r.d)(i.a,{language:n,style:c.a},function(e){var n=e.split("\n");for(;n.length&&!n[0].trim();)n.shift();for(;n.length&&!n[n.length-1].trim();)n.pop();var t=(n[0].match(/^\s+/)||[""])[0];return n.map(function(e){return e.startsWith(t)?e.substring(t.length):e}).join("\n")}(t)))}},236:function(e,n,t){"use strict";t.d(n,"b",function(){return I}),t.d(n,"c",function(){return A}),t.d(n,"d",function(){return w}),t.d(n,"a",function(){return x});t(16);var r=t(7),a=t(224),i=t(0),c=t(214),l=t(216);function o(){var e=f([""]);return o=function(){return e},e}function d(){var e=f([""]);return d=function(){return e},e}function u(){var e=f([""]);return u=function(){return e},e}function s(){var e=f([""]);return s=function(){return e},e}function b(){var e=f([""]);return b=function(){return e},e}function p(){var e=f([""]);return p=function(){return e},e}function f(e,n){return n||(n=e.slice(0)),e.raw=n,e}var h=c.a.tr(p()),j=c.a.td(b()),m=c.a.td(s()),O=c.a.td(u()),g=c.a.td(d()),y=c.a.td(o()),v=Object(i.createContext)({context:""}),P=function(e){var n=e.name,t=e.children,a=Object(i.useContext)(v).context;return Object(r.d)(j,null,Object(r.d)(l.a,{to:"/api/"+a+"/"+n},t||n))},I=function(e){var n=e.children,t=e.context,i=e.includeRequiredColumn;return Object(r.d)(a.i,null,Object(r.d)(v.Provider,{value:{context:t}},Object(r.d)(a.j,null,"Members"),Object(r.d)("table",null,Object(r.d)("thead",null,Object(r.d)("th",null,"Name"),Object(r.d)("th",null,"Type"),Object(r.d)("th",null,"Data type/return type"),Object(r.d)("th",null,"Description"),i&&Object(r.d)("th",null,"Required")),Object(r.d)("tbody",null,n))))},A=function(e){var n=e.children,t=e.name,a=e.dataType,i=e.required,c=e.displayName;return Object(r.d)(h,null,Object(r.d)(P,{name:t},c),Object(r.d)(m,null,"method"),Object(r.d)(O,null,a),Object(r.d)(g,null,n),void 0!==i&&Object(r.d)(y,null,!0===i?"Yes":!1===i?"No":i))},w=function(e){var n=e.children,t=e.name,a=e.dataType,i=e.required;return Object(r.d)(h,null,Object(r.d)(j,null,t),Object(r.d)(m,null,"property"),Object(r.d)(O,null,a),Object(r.d)(g,null,n),void 0!==i&&Object(r.d)(y,null,!0===i?"Yes":!1===i?"No":i))},x=function(e){var n=e.children,t=e.name;return Object(r.d)(h,null,Object(r.d)(j,null,t),Object(r.d)(m,null,"property"),Object(r.d)(O,null,"n/a"),Object(r.d)(g,null,n,". Type type itself must be accessed using the typeof operator."))}}}]);
//# sourceMappingURL=component---src-pages-api-declared-api-tsx-70e0a29ebfd0b9c22129.js.map