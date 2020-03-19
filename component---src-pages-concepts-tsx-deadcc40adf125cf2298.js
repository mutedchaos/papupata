(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{485:function(e,t,n){"use strict";n.r(t);n(1);var a=n(435),r=n(130),o=n(436),l=(n(48),n(434)),i=n(504),s=n(0),c=function(e){var t=e.children,n=e.label;return Object(s.d)(l.j,null,Object(s.d)(l.k,null,n),Object(s.d)("div",null,t))};t.default=function(){return Object(s.d)(o.a,null,Object(s.d)(a.a,null,Object(s.d)(r.a,null,Object(s.d)("h1",null,"Concepts and terms"),Object(s.d)("p",null,"This document covers terminology used throughout the rest of the documentation."),Object(s.d)(c,{label:"API"},"An HTTP endpoint."),Object(s.d)(c,{label:"API Declaration"},Object(s.d)("p",null,"An API declaration describes an HTTP endpoint, along with its payload and expected response."),Object(s.d)("p",null,"The ",Object(s.d)(i.a,null,"APIDeclaration")," class in papupata allows for declaring APIs on the same host so that they share configuration.")),Object(s.d)(c,{label:"Middleware"},"One or more layers of code between and HTTP server and the business logic. Typically used for things like authentication, authorization, logging and error handling."),Object(s.d)(c,{label:"Calling/invoking APIs"},"The act of making an HTTP request, sending a payload and receiving response."),Object(s.d)(c,{label:"Implementing APIs"},"The act of providing business logic connected to an HTTP server to process the inputs of an API to produce any necessary side effects and a response."),Object(s.d)(c,{label:"Client"},"Any party that uses papupata to make HTTP requests. It is not necessarily a browser -- it is not uncommon for node processes to make requests to external systems, in which case they are clients as well."),Object(s.d)(c,{label:"Server"},"A HTTP (or HTTPs) server that forwards requests for papupata to handle."),Object(s.d)(c,{label:"Request"},"A call to an API. Initialized from the client and processed on the server."),Object(s.d)(c,{label:"Mocking"},"Substituting production code and logic with another, typically simpler one for the purpose of testing."),Object(s.d)(c,{label:"express"},"A node.js library for implementing http server. See ",Object(s.d)("a",{href:"https://expressjs.com/"},"https://expressjs.com/"),". At this time papupata natively supports only express as the http server for implementing APIs."),Object(s.d)(c,{label:"body, query parameter"},"Parts of an HTTP request. They along with path parameters are the payload for a request."),Object(s.d)(c,{label:"path parameter"},Object(s.d)("p",null,"A parametrized part of the path in URLs. For example, in"),Object(s.d)(l.c,null,"\n            API.declareGetAPI('/get/document/:id')/*...*/\n          "),Object(s.d)("p",null,"the ",Object(s.d)(i.a,null,":id")," signifies a path parameter, and is replaced with the value for the parameter when invoking the API.")))))}},504:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return b}));n(505),n(1);var a=n(434),r=n(4),o=n(0);function l(){var e=c(['\n  font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace\n']);return l=function(){return e},e}function i(){var e=c(["\n  font-size: 1.1em;\n"]);return i=function(){return e},e}function s(){var e=c([""]);return s=function(){return e},e}function c(e,t){return t||(t=e.slice(0)),e.raw=t,e}function u(e){var t=e.children;return Object(o.d)(a.j,null,Object(o.d)(a.k,null,"Overview"),t)}var d=r.a.h4(s()),p=r.a.h5(i());function h(e){var t=e.content;return Object(o.d)("div",null,Object(o.d)(a.j,null,Object(o.d)(a.k,null,"Table of contents"),Object(o.d)("ul",null,t.map((function(e){return Object(o.d)("li",{style:{marginLeft:18*(e.level||0)},key:e.anchor},Object(o.d)("a",{href:"#"+e.anchor},e.heading))})))),t.map((function(e){var t=e.level?p:d;return Object(o.d)(a.j,{id:e.anchor,key:e.anchor},Object(o.d)(t,null,e.heading),e.content)})))}var b=r.a.span(l())},505:function(e,t,n){"use strict";n(102)("anchor",(function(e){return function(t){return e(this,"a","name",t)}}))}}]);
//# sourceMappingURL=component---src-pages-concepts-tsx-deadcc40adf125cf2298.js.map