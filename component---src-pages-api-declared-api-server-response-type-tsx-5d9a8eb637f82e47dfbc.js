(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{469:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a}));var p=t(436),r=t(435),s=t(130),o=t(434),l=t(0);function a(){return Object(l.d)(p.a,null,Object(l.d)(r.a,null,Object(l.d)(s.a,null,Object(l.d)("h1",null,"API Reference"),Object(l.d)("h2",null,"class DeclaredAPI"),Object(l.d)("h3",null,"exposed type ServerResponseType")),Object(l.d)(o.i,null,"Represents the type returned from the API implementation."),Object(l.d)(o.n,null,Object(l.d)("p",null,"The exposed types are used with the typeof operator. See the example below for details."),Object(l.d)("p",null,"Although the types are presented as fields on the API, they have no runtime value.")),Object(l.d)(o.e,null,Object(l.d)(o.c,{label:"Implicit, same type"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff')\n              .response<string>()\n\n            type ServerResponseType = typeof myAPI['ServerResponseType']\n            // ServerResponseType is now string\n          "),Object(l.d)(o.c,{label:"Explicit differing type"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff')\n              .response<string, Date>()\n\n            type ServerResponseType = typeof myAPI['ServerResponseType']\n            // ServerResponseType is now Date\n          "))))}}}]);
//# sourceMappingURL=component---src-pages-api-declared-api-server-response-type-tsx-5d9a8eb637f82e47dfbc.js.map