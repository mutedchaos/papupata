(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{478:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var r=t(436),a=t(435),u=t(130),o=t(434),l=t(506),c=t(513),i=t(0);function s(){return Object(i.d)(r.a,null,Object(i.d)(a.a,null,Object(i.d)(u.a,null,Object(i.d)("h1",null,"API Reference"),Object(i.d)("h2",null,"class IncompleteAPIDeclaration"),Object(i.d)("h3",null,"method queryBool")),Object(i.d)(c.a,null),Object(i.d)(o.i,null,"Declares boolean query parameters for an API"),Object(i.d)(o.n,null,Object(i.d)("p",null,"Path params and other query parameters may be defined before query.")),Object(i.d)(o.h,null,Object(i.d)(o.g,{name:"booleanQueryParams",dataType:"Const string array"},Object(i.d)("p",null,"Names of the query parameters. See the example below for the recommended way to set up the const string array."),Object(i.d)("p",null,"At typescript level a regular string array is not treated as an error at declaration time, but using is NOT correct. Unfortunately we have not come up with a way to prevent this kind of usage."))),Object(i.d)(o.f,null,Object(i.d)(l.b,null)),Object(i.d)(o.b,null,'This feature is intented mainly to be used for papupata-to-papupata communications. The string "true" stands for true values on the server, all other values stand for false.'),Object(i.d)(o.e,null,Object(i.d)(o.c,{label:"Declaration"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff')\n              .queryBool(['query1', 'query2'] as const)\n              .response<string>()\n          "),Object(i.d)(o.c,{label:"Usage in invocation"},"\n            await myAPI({query1: true, query2: false})\n            // Invokes URL /do-stuff?query1=true&query2=false\n          "),Object(i.d)(o.c,{label:"Usage in implementation"},"\n            myAPI.implement(req => {\n              const {query1, query2} = req.query\n              return query1 + query2 // would return truefalse in the example. They come in as booleans, not strings.\n            })            \n          "))))}},506:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"a",(function(){return o}));t(1);var r=t(48),a=t(0);function u(){return Object(a.d)(r.a,{to:"/api/PartiallyDeclaredAPI"},"PartiallyDeclaredAPI")}function o(){return Object(a.d)(r.a,{to:"/api/DeclaredAPI"},"DeclaredAPI")}},510:function(e,n,t){"use strict";function r(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  border: 2px dotted transparent;\n  padding: 10px;\n  outline: 5px solid transparent;\n"]);return r=function(){return e},e}t.d(n,"a",(function(){return a}));var a=t(4).a.div(r())},513:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));t(1);var r=t(4),a=t(510),u=t(0);function o(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  border-color: yellowgreen;\n  background-color: #ffd892;\n  outline-color: #ffd892;\n  margin: 20px;\n"]);return o=function(){return e},e}var l=Object(r.a)(a.a)(o()),c=function(e){var n=e.children;return Object(u.d)(l,null,n||"Beware! There is a good chance this will be changed before 1.0 release!")}}}]);
//# sourceMappingURL=component---src-pages-api-partially-declared-api-query-bool-tsx-2f75e5e8283fcebc03aa.js.map