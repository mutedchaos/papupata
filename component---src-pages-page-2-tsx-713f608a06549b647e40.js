(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{212:function(e,n,t){"use strict";t.r(n);var r=t(7),a=(t(0),t(216)),i=t(220),l=t(217),c=t(224);n.default=function(){return Object(r.d)(c.a,null,Object(r.d)(i.a,null,Object(r.d)(l.a,null,Object(r.d)("h1",null,"Hi from the second page"),Object(r.d)("p",null,"Welcome to page 2"),Object(r.d)("ul",null,Object(r.d)("li",null,Object(r.d)(a.a,{to:"/a-markdown-page/"},"Show me some Markdown!")),Object(r.d)("li",null,Object(r.d)(a.a,{to:"/"},"Take me back home."))))))}},213:function(e,n,t){"use strict";t.d(n,"b",function(){return r}),t.d(n,"d",function(){return a}),t.d(n,"a",function(){return i}),t.d(n,"f",function(){return l}),t.d(n,"c",function(){return c}),t.d(n,"e",function(){return o});var r={brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},a={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},i={xs:0,sm:576,md:768,lg:992,xl:1200},l={md:720,lg:960,xl:1140},c={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},o={header:60}},216:function(e,n,t){"use strict";t.d(n,"b",function(){return u});var r=t(7),a=t(0),i=t.n(a),l=t(65),c=t.n(l);t.d(n,"a",function(){return c.a});t(219),t(8);var o=i.a.createContext({});function d(e){var n=e.staticQueryData,t=e.data,a=e.query,l=e.render,c=t?t.data:n[a]&&n[a].data;return Object(r.d)(i.a.Fragment,null,c&&l(c),!c&&Object(r.d)("div",null,"Loading (StaticQuery)"))}var u=function(e){var n=e.data,t=e.query,a=e.render,i=e.children;return Object(r.d)(o.Consumer,null,function(e){return Object(r.d)(d,{data:n,query:t,render:a||i,staticQueryData:e})})}},217:function(e,n,t){"use strict";var r=t(215),a=t(7),i=(t(0),t(213)),l=t(218),c=Object(r.a)("div",{target:"e1c6zxln0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(l.a)(i.f.lg),"em;");n.a=function(e){var n=e.children,t=e.className;return Object(a.d)(c,{className:t},n)}},218:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=t(213),a=function(e){return e/r.c.fontSize.regular}},219:function(e,n,t){var r;e.exports=(r=t(222))&&r.default||r},220:function(e,n,t){"use strict";var r=t(215),a=t(7),i=(t(0),t(213)),l=Object(r.a)("div",{target:"e20rco30"})("display:block;flex:1;position:relative;padding:",i.c.containerPadding,"rem;margin-bottom:3rem;");n.a=function(e){var n=e.children,t=e.className;return Object(a.d)(l,{className:t},n)}},221:function(e){e.exports={data:{site:{siteMetadata:{title:"Papupata Documentation",description:"Documentation for the typescript library papupata, for utilizing types for AJAX requests."}}}}},222:function(e,n,t){"use strict";t.r(n);t(19);var r=t(0),a=t.n(r),i=t(91);n.default=function(e){var n=e.location,t=e.pageResources;return t?a.a.createElement(i.a,Object.assign({location:n,pageResources:t},t.json)):null}},223:function(e){e.exports={data:{site:{pathPrefix:"/papupata"}}}},224:function(e,n,t){"use strict";var r=t(7),a=t(221),i=t(0),l=t(227),c=t.n(l),o=t(216),d=(t(228),t(213)),u=t(218),s="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+d.c.fontSize.regular+"px !important;\n    line-height: "+d.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+d.d.sansSerif+";\n    color: "+d.b.black+";\n    background-color: "+d.b.white+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+d.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+d.b.ui.light+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+d.b.ui.light+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+d.b.ui.whisper+";\n        }\n        tr {\n          background-color: "+d.b.ui.whisper+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+d.b.black+";\n    font-weight: 600;\n    line-height: "+d.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+d.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+d.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+d.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+d.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+d.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+d.b.ui.light+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+d.b.ui.light+";\n    color: "+d.b.gray.calm+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(u.a)(d.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n",b=t(215),p=t(230),f=t(217),m=Object(b.a)("header",{target:"e14yya1q0"})("height:",d.e.header,"px;padding:0 ",d.c.containerPadding,"rem;background-color:",d.b.brand,";color:",Object(p.a)(.5,d.b.white),";"),g=Object(b.a)(f.a,{target:"e14yya1q1"})({name:"voneje",styles:"display:flex;flex-direction:row;align-items:center;height:100%;"}),h=Object(b.a)(o.a,{target:"e14yya1q2"})("color:",d.b.white,";font-size:1.5rem;font-weight:600;&:hover,&:focus{text-decoration:none;}"),j=function(e){var n=e.title;return Object(r.d)(m,null,Object(r.d)(g,null,Object(r.d)(h,{to:"/"},n)))},O=Object(b.a)("div",{target:"e17su9850"})({name:"zf0iqh",styles:"display:flex;flex-direction:column;min-height:100vh;"}),y=function(e){var n=e.children,t=e.className;return Object(r.d)(i.Fragment,null,Object(r.d)(r.a,{styles:function(){return Object(r.c)(s)}}),Object(r.d)(O,{className:t},n))},v=Object(b.a)("main",{target:"e1qy7fsr0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),k=function(e){var n=e.children,t=e.className;return Object(r.d)(v,{className:t},n)},P=t(214),x=(t(130),t(131),t(229),t(223)),A=t(20);function I(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  ",";\n"]);return I=function(){return e},e}var w=Object(P.a)(o.a)(I(),function(e){return"true"===e.current?"\n  \n  font-weight: bold;\n  ":""});function D(e){var n=e.link,t=e.children;return Object(r.d)("div",null,Object(r.d)(o.b,{query:"87648239",render:function(e){var a=e.site.pathPrefix;return Object(r.d)(A.Location,null,function(e){var i=e.location;return Object(r.d)(w,{current:[a+n,n].includes(i.pathname)?"true":"false",to:n},t)})},data:x}))}function z(){var e=R(["\n  font-style: italic;\n"]);return z=function(){return e},e}function q(){var e=R(["\n  margin-left: 20px;\n"]);return q=function(){return e},e}function S(){var e=R([""]);return S=function(){return e},e}function T(){var e=R(["\n  border-right: 1px solid #aaa;\n  margin-right: 30px;\n  padding-right: 30px;\n  padding-left: 30px;\n  margin-top: 30px;\n"]);return T=function(){return e},e}function R(e,n){return n||(n=e.slice(0)),e.raw=n,e}var M=P.a.div(T()),N=P.a.h2(S()),C=P.a.div(q()),L=function(e){var n=e.children;return Object(r.d)("span",null,n,"()")},B=P.a.span(z());function H(){return Object(r.d)(M,null,Object(r.d)(N,null,"Table of contents"),Object(r.d)(D,{link:"/what-is-papupata"},"What is papupata?"),Object(r.d)(D,{link:"/getting-started"},"Getting started"),Object(r.d)(D,{link:"/api-reference"},"API Reference"),Object(r.d)(C,null,Object(r.d)(D,{link:"/api/APIDeclaration"},"class APIDeclaration"),Object(r.d)(C,null,Object(r.d)(D,{link:"/api/APIDeclaration/configure"},Object(r.d)(L,null,"configure")),Object(r.d)(D,{link:"/api/APIDeclaration/declareDeleteAPI"},Object(r.d)(L,null,"declareDeleteAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/declareGetAPI"},Object(r.d)(L,null,"declareGetAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/declarePostAPI"},Object(r.d)(L,null,"declarePostAPI")),Object(r.d)(D,{link:"/api/APIDeclaration/declarePutAPI"},Object(r.d)(L,null,"declarePutAPI"))),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration"},"IncompleteAPIDeclaration"),Object(r.d)(C,null,Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/params"},Object(r.d)(L,null,"params")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/query"},Object(r.d)(L,null,"query")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/optionalQuery"},Object(r.d)(L,null,"optionalQuery")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/queryBool"},Object(r.d)(L,null,"queryBool")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/body"},Object(r.d)(L,null,"body")),Object(r.d)(D,{link:"/api/IncompleteAPIDeclaration/response"},Object(r.d)(L,null,"response"))),Object(r.d)(D,{link:"/api/DeclaredAPI"},"DeclaredAPI"),Object(r.d)(C,null,Object(r.d)(D,{link:"/api/DeclaredAPI/invoke"},Object(r.d)(L,null)),Object(r.d)(D,{link:"/api/DeclaredAPI/getURL"},Object(r.d)(L,null,"getURL")),Object(r.d)(D,{link:"/api/DeclaredAPI/implement"},Object(r.d)(L,null,"implement")),Object(r.d)(D,{link:"/api/DeclaredAPI/implementWithMiddleware"},Object(r.d)(L,null,"implementWithMiddleware")),Object(r.d)(D,{link:"/api/DeclaredAPI/ResponseType"},Object(r.d)(B,null,"ResponseType")),Object(r.d)(D,{link:"/api/DeclaredAPI/ServerResponseType"},Object(r.d)(B,null,"ServerResponseType")),Object(r.d)(D,{link:"/api/DeclaredAPI/BodyType"},Object(r.d)(B,null,"BodyType")),Object(r.d)(D,{link:"/api/DeclaredAPI/CallArgsType"},Object(r.d)(B,null,"CallArgsType")),Object(r.d)(D,{link:"/api/DeclaredAPI/RequestType"},Object(r.d)(B,null,"RequestType"))),Object(r.d)(D,{link:"/api/fetchAdapter"},"fetchAdapter"),Object(r.d)(D,{link:"/api/requestPromiseAdapter"},"requestPromiseAdapter")))}function Q(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  display: flex;\n"]);return Q=function(){return e},e}var F=P.a.div(Q());function G(e){var n=e.children;return Object(r.d)(F,null,Object(r.d)(H,null),n)}n.a=function(e){var n=e.children;return Object(r.d)(o.b,{query:"991718019",render:function(e){return Object(r.d)(y,null,Object(r.d)(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]}),Object(r.d)(j,{title:e.site.siteMetadata.title}),Object(r.d)(G,null,Object(r.d)(k,null,n)))},data:a})}}}]);
//# sourceMappingURL=component---src-pages-page-2-tsx-713f608a06549b647e40.js.map