(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{201:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return u});var r=t(7),i=(t(0),t(223)),a=t(220),c=t(217),l=t(224),o=t(237);function u(){return Object(r.d)(i.a,null,Object(r.d)(a.a,null,Object(r.d)(c.a,null,Object(r.d)("h1",null,"API Reference"),Object(r.d)("h2",null,"fetchAdapter")),Object(r.d)(l.h,null,"An adapter that utilizes fetch to invoke APIs"),Object(r.d)(o.a,null,Object(r.d)("p",null,"The adapter is not documented, and is not of all that high quality as it is and it makes various non-general assumptions. It should serve to give you some ideas on how a proper fetch adapter might be implemented, though."))))}},213:function(n,e,t){"use strict";t.d(e,"b",function(){return r}),t.d(e,"d",function(){return i}),t.d(e,"a",function(){return a}),t.d(e,"f",function(){return c}),t.d(e,"c",function(){return l}),t.d(e,"e",function(){return o});var r={brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},i={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},a={xs:0,sm:576,md:768,lg:992,xl:1200},c={md:720,lg:960,xl:1140},l={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},o={header:60}},216:function(n,e,t){"use strict";t.d(e,"b",function(){return d});var r=t(7),i=t(0),a=t.n(i),c=t(65),l=t.n(c);t.d(e,"a",function(){return l.a});t(219),t(8);var o=a.a.createContext({});function u(n){var e=n.staticQueryData,t=n.data,i=n.query,c=n.render,l=t?t.data:e[i]&&e[i].data;return Object(r.d)(a.a.Fragment,null,l&&c(l),!l&&Object(r.d)("div",null,"Loading (StaticQuery)"))}var d=function(n){var e=n.data,t=n.query,i=n.render,a=n.children;return Object(r.d)(o.Consumer,null,function(n){return Object(r.d)(u,{data:e,query:t,render:i||a,staticQueryData:n})})}},217:function(n,e,t){"use strict";var r=t(215),i=t(7),a=(t(0),t(213)),c=t(218),l=Object(r.a)("div",{target:"e1c6zxln0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(c.a)(a.f.lg),"em;");e.a=function(n){var e=n.children,t=n.className;return Object(i.d)(l,{className:t},e)}},218:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(213),i=function(n){return n/r.c.fontSize.regular}},219:function(n,e,t){var r;n.exports=(r=t(222))&&r.default||r},220:function(n,e,t){"use strict";var r=t(215),i=t(7),a=(t(0),t(213)),c=Object(r.a)("div",{target:"e20rco30"})("display:block;flex:1;position:relative;padding:",a.c.containerPadding,"rem;margin-bottom:3rem;");e.a=function(n){var e=n.children,t=n.className;return Object(i.d)(c,{className:t},e)}},221:function(n){n.exports={data:{site:{siteMetadata:{title:"Papupata Documentation",description:"Documentation for the typescript library papupata, for utilizing types for AJAX requests."}}}}},222:function(n,e,t){"use strict";t.r(e);t(19);var r=t(0),i=t.n(r),a=t(91);e.default=function(n){var e=n.location,t=n.pageResources;return t?i.a.createElement(a.a,Object.assign({location:e,pageResources:t},t.json)):null}},223:function(n,e,t){"use strict";var r=t(7),i=t(221),a=t(0),c=t(226),l=t.n(c),o=t(216),u=(t(227),t(213)),d=t(218),s="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+u.c.fontSize.regular+"px !important;\n    line-height: "+u.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+u.d.sansSerif+";\n    color: "+u.b.black+";\n    background-color: "+u.b.white+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+u.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+u.b.ui.light+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+u.b.ui.light+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+u.b.ui.whisper+";\n        }\n        tr {\n          background-color: "+u.b.ui.whisper+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+u.b.black+";\n    font-weight: 600;\n    line-height: "+u.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+u.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+u.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+u.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+u.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+u.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+u.b.ui.light+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+u.b.ui.light+";\n    color: "+u.b.gray.calm+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(d.a)(u.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n",b=t(215),f=t(229),p=t(217),h=Object(b.a)("header",{target:"e14yya1q0"})("height:",u.e.header,"px;padding:0 ",u.c.containerPadding,"rem;background-color:",u.b.brand,";color:",Object(f.a)(.5,u.b.white),";"),m=Object(b.a)(p.a,{target:"e14yya1q1"})({name:"voneje",styles:"display:flex;flex-direction:row;align-items:center;height:100%;"}),g=Object(b.a)(o.a,{target:"e14yya1q2"})("color:",u.b.white,";font-size:1.5rem;font-weight:600;&:hover,&:focus{text-decoration:none;}"),j=function(n){var e=n.title;return Object(r.d)(h,null,Object(r.d)(m,null,Object(r.d)(g,{to:"/"},e)))},O=Object(b.a)("div",{target:"e17su9850"})({name:"zf0iqh",styles:"display:flex;flex-direction:column;min-height:100vh;"}),v=function(n){var e=n.children,t=n.className;return Object(r.d)(a.Fragment,null,Object(r.d)(r.a,{styles:function(){return Object(r.c)(s)}}),Object(r.d)(O,{className:t},e))},y=Object(b.a)("main",{target:"e1qy7fsr0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),k=function(n){var e=n.children,t=n.className;return Object(r.d)(y,{className:t},e)},x=t(214),P=(t(228),t(20));function A(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  ",";\n"]);return A=function(){return n},n}var w=Object(x.a)(o.a)(A(),function(n){return"true"===n.current?"\n  \n  font-weight: bold;\n  ":""});function I(n){var e=n.link,t=n.children;return Object(r.d)("div",null,Object(r.d)(P.Location,null,function(n){var i=n.location;return Object(r.d)(w,{current:i.pathname===e?"true":"false",to:e},t,JSON.stringify(i))}))}function D(){var n=T(["\n  font-style: italic;\n"]);return D=function(){return n},n}function z(){var n=T(["\n  margin-left: 20px;\n"]);return z=function(){return n},n}function q(){var n=T([""]);return q=function(){return n},n}function S(){var n=T(["\n  border-right: 1px solid #aaa;\n  margin-right: 30px;\n  padding-right: 30px;\n  padding-left: 30px;\n  margin-top: 30px;\n"]);return S=function(){return n},n}function T(n,e){return e||(e=n.slice(0)),n.raw=e,n}var R=x.a.div(S()),N=x.a.h2(q()),M=x.a.div(z()),C=function(n){var e=n.children;return Object(r.d)("span",null,e,"()")},L=x.a.span(D());function B(){return Object(r.d)(R,null,Object(r.d)(N,null,"Table of contents"),Object(r.d)(I,{link:"/what-is-papupata"},"What is papupata?"),Object(r.d)(I,{link:"/getting-started"},"Getting started"),Object(r.d)(I,{link:"/api-reference"},"API Reference"),Object(r.d)(M,null,Object(r.d)(I,{link:"/api/APIDeclaration"},"class APIDeclaration"),Object(r.d)(M,null,Object(r.d)(I,{link:"/api/APIDeclaration/configure"},Object(r.d)(C,null,"configure")),Object(r.d)(I,{link:"/api/APIDeclaration/declareDeleteAPI"},Object(r.d)(C,null,"declareDeleteAPI")),Object(r.d)(I,{link:"/api/APIDeclaration/declareGetAPI"},Object(r.d)(C,null,"declareGetAPI")),Object(r.d)(I,{link:"/api/APIDeclaration/declarePostAPI"},Object(r.d)(C,null,"declarePostAPI")),Object(r.d)(I,{link:"/api/APIDeclaration/declarePutAPI"},Object(r.d)(C,null,"declarePutAPI"))),Object(r.d)(I,{link:"/api/IncompleteAPIDeclaration"},"IncompleteAPIDeclaration"),Object(r.d)(M,null,Object(r.d)(I,{link:"/api/IncompleteAPIDeclaration/params"},Object(r.d)(C,null,"params")),Object(r.d)(I,{link:"/api/IncompleteAPIDeclaration/query"},Object(r.d)(C,null,"query")),Object(r.d)(I,{link:"/api/IncompleteAPIDeclaration/optionalQuery"},Object(r.d)(C,null,"optionalQuery")),Object(r.d)(I,{link:"/api/IncompleteAPIDeclaration/queryBool"},Object(r.d)(C,null,"queryBool")),Object(r.d)(I,{link:"/api/IncompleteAPIDeclaration/body"},Object(r.d)(C,null,"body")),Object(r.d)(I,{link:"/api/IncompleteAPIDeclaration/response"},Object(r.d)(C,null,"response"))),Object(r.d)(I,{link:"/api/DeclaredAPI"},"DeclaredAPI"),Object(r.d)(M,null,Object(r.d)(I,{link:"/api/DeclaredAPI/invoke"},Object(r.d)(C,null)),Object(r.d)(I,{link:"/api/DeclaredAPI/getURL"},Object(r.d)(C,null,"getURL")),Object(r.d)(I,{link:"/api/DeclaredAPI/implement"},Object(r.d)(C,null,"implement")),Object(r.d)(I,{link:"/api/DeclaredAPI/implementWithMiddleware"},Object(r.d)(C,null,"implementWithMiddleware")),Object(r.d)(I,{link:"/api/DeclaredAPI/ResponseType"},Object(r.d)(L,null,"ResponseType")),Object(r.d)(I,{link:"/api/DeclaredAPI/ServerResponseType"},Object(r.d)(L,null,"ServerResponseType")),Object(r.d)(I,{link:"/api/DeclaredAPI/BodyType"},Object(r.d)(L,null,"BodyType")),Object(r.d)(I,{link:"/api/DeclaredAPI/CallArgsType"},Object(r.d)(L,null,"CallArgsType")),Object(r.d)(I,{link:"/api/DeclaredAPI/RequestType"},Object(r.d)(L,null,"RequestType"))),Object(r.d)(I,{link:"/api/fetchAdapter"},"fetchAdapter"),Object(r.d)(I,{link:"/api/requestPromiseAdapter"},"requestPromiseAdapter")))}function F(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  display: flex;\n"]);return F=function(){return n},n}var Q=x.a.div(F());function U(n){var e=n.children;return Object(r.d)(Q,null,Object(r.d)(B,null),e)}e.a=function(n){var e=n.children;return Object(r.d)(o.b,{query:"991718019",render:function(n){return Object(r.d)(v,null,Object(r.d)(l.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:n.site.siteMetadata.description},{name:"keywords",content:n.site.siteMetadata.keywords}]}),Object(r.d)(j,{title:n.site.siteMetadata.title}),Object(r.d)(U,null,Object(r.d)(k,null,e)))},data:i})}},224:function(n,e,t){"use strict";t.d(e,"i",function(){return f}),t.d(e,"j",function(){return p}),t.d(e,"h",function(){return g}),t.d(e,"k",function(){return j}),t.d(e,"g",function(){return O}),t.d(e,"f",function(){return v}),t.d(e,"e",function(){return y}),t.d(e,"a",function(){return k}),t.d(e,"d",function(){return x}),t.d(e,"b",function(){return P}),t.d(e,"c",function(){return A});t(16);var r=t(7),i=t(214),a=t(0),c=t.n(a),l=t(225);function o(){var n=b(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]);return o=function(){return n},n}function u(){var n=b([""]);return u=function(){return n},n}function d(){var n=b([""]);return d=function(){return n},n}function s(){var n=b([""]);return s=function(){return n},n}function b(n,e){return e||(e=n.slice(0)),n.raw=e,n}var f=i.a.section(s()),p=i.a.h4(d()),h=i.a.h5(u()),m=i.a.section(o()),g=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Purpose"),e)},j=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Usage"),e)},O=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Parameters"),Object(r.d)("table",null,Object(r.d)("thead",null,Object(r.d)("tr",null,Object(r.d)("th",null,"Name"),Object(r.d)("th",null,"Type"),Object(r.d)("th",null,"Description"))),Object(r.d)("tbody",null,e)))},v=function(n){var e=n.children,t=n.name,i=n.dataType;return Object(r.d)("tr",null,Object(r.d)("td",null,t),Object(r.d)("td",null,i),Object(r.d)("td",null,e))},y=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Returns"),e)},k=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Caveats"),e)},x=function(n){var e=n.children;return Object(r.d)(f,null,Object(r.d)(p,null,"Examples"),e)},P=function(n){var e=n.children,t=n.label;return Object(r.d)(c.a.Fragment,null,t&&Object(r.d)(h,null,t),Object(r.d)(l.a,{language:"typescript"},e))},A=function(n){var e=n.children;return Object(r.d)(m,null,Object(r.d)(h,null,"Common to examples below:"),e)}},225:function(n,e,t){"use strict";t.d(e,"a",function(){return u});t(230),t(66),t(18);var r=t(7),i=(t(0),t(214)),a=t(456),c=t(455);function l(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}([""]);return l=function(){return n},n}var o=i.a.div(l()),u=function(n){var e=n.language,t=n.children;return Object(r.d)(o,null,Object(r.d)(a.a,{language:e,style:c.a},function(n){var e=n.split("\n");for(;e.length&&!e[0].trim();)e.shift();for(;e.length&&!e[e.length-1].trim();)e.pop();var t=(e[0].match(/^\s+/)||[""])[0];return e.map(function(n){return n.startsWith(t)?n.substring(t.length):n}).join("\n")}(t)))}},234:function(n,e,t){"use strict";function r(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  border: 2px dotted transparent;\n  padding: 10px;\n  outline: 5px solid transparent;\n"]);return r=function(){return n},n}t.d(e,"a",function(){return i});var i=t(214).a.div(r())},237:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(7),i=(t(0),t(214)),a=t(234);function c(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  border-color: yellowgreen;\n  background-color: #ffffa7;\n  outline-color: #ffffa7;\n  margin: 20px;\n"]);return c=function(){return n},n}var l=Object(i.a)(a.a)(c()),o=function(n){var e=n.children;return Object(r.d)(l,null,e||"This section needs more work.")}}}]);
//# sourceMappingURL=component---src-pages-api-fetch-adapter-tsx-33b35d522c39a4c26462.js.map