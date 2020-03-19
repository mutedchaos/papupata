(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{474:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var r=n(436),a=n(435),l=n(129),u=n(434),c=n(490),o=n(0);function i(){return Object(o.d)(r.a,null,Object(o.d)(a.a,null,Object(o.d)(l.a,null,Object(o.d)("h1",null,"API Reference"),Object(o.d)("h2",null,"class IncompleteAPIDeclaration"),Object(o.d)("h3",null,"method query")),Object(o.d)(u.i,null,"Declares required string query parameters for an API"),Object(o.d)(u.n,null,Object(o.d)("p",null,"Only path params may be defined before query.")),Object(o.d)(u.h,null,Object(o.d)(u.g,{name:"queryParams",dataType:"Const string array"},Object(o.d)("p",null,"Names of the query parameters. See the example below for the recommended way to set up the const string array."),Object(o.d)("p",null,"At typescript level a regular string array is not treated as an error at declaration time, but using is NOT correct. Unfortunately we have not come up with a way to prevent this kind of usage."))),Object(o.d)(u.f,null,Object(o.d)(c.b,null)),Object(o.d)(u.b,null,Object(o.d)("ul",null,Object(o.d)("li",null,"At this time there server side implementation allows undefined values to go through when the API is invoked using means other than papupata."))),Object(o.d)(u.e,null,Object(o.d)(u.c,{label:"Declaration"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff')\n              .query(['query1', 'query2'] as const)\n              .response<string>()\n          "),Object(o.d)(u.c,{label:"Usage in invocation"},"\n            await myAPI({query1: 'abc', query2: 'def'})\n            // Invokes URL /do-stuff?query1=abd&query2=def\n          "),Object(o.d)(u.c,{label:"Usage in implementation"},"\n            myAPI.implement(req => {\n              const {query1, query2} = req.query\n              return query1 + query2 // would return abcdef in the example\n            })            \n          "))))}},490:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));n(1);var r=n(48),a=n(0);function l(){return Object(a.d)(r.a,{to:"/api/IncompleteApiDeclaration"},"IncompleteApiDeclaration")}function u(){return Object(a.d)(r.a,{to:"/api/DeclaredAPI"},"DeclaredAPI")}}}]);
//# sourceMappingURL=component---src-pages-api-incomplete-api-declaration-query-tsx-76a441c73357b2124594.js.map