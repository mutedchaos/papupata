(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{454:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n(436),s=n(435),l=n(130),r=n(434),o=n(0);function c(){return Object(o.d)(a.a,null,Object(o.d)(s.a,null,Object(o.d)(l.a,null,Object(o.d)("h1",null,"API Reference"),Object(o.d)("h2",null,"class DeclaredAPI"),Object(o.d)("h3",null,"exposed type CallArgsType")),Object(o.d)(r.i,null,"Represents the type of arguments to API invocation. This exists to help you create functions that return parts or all of a requests's parameters."),Object(o.d)(r.n,null,Object(o.d)("p",null,"The exposed types are used with the typeof operator. See the example below for details."),Object(o.d)("p",null,"Although the types are presented as fields on the API, they have no runtime value.")),Object(o.d)(r.e,null,Object(o.d)(r.c,{label:"Basic usage"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff')\n              .query(['q'] as const)\n              .body<{key: string}>\n              .response<string>()\n\n            type CallArgsType = typeof myAPI['CallArgsType']\n            // CallArgsType is now {key: string, q: string}            \n          "),Object(o.d)(r.c,{label:"Practical usage"},"\n            await myAPI(getRequestParams())\n\n            function getRequestParams(): typeof myAPI['CallArgsType']  {\n              // Now typescript will complain because we do not return everything it needs\n            }\n          "))))}}}]);
//# sourceMappingURL=component---src-pages-api-declared-api-call-args-type-tsx-0bde61d17e3376736711.js.map