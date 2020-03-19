(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{464:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var o=n(436),a=n(435),c=n(130),i=n(434),l=n(48),s=(n(1),n(0));function u(){return Object(s.d)(o.a,null,Object(s.d)(a.a,null,Object(s.d)(c.a,null,Object(s.d)("h1",null,"API Reference"),Object(s.d)("h2",null,"class DeclaredAPI"),Object(s.d)("h3",null,"method mock")),Object(s.d)(i.i,null,"Causes API invocations to be omitted, instead returning a mock value"),Object(s.d)(i.a,{version:"1.1.0"}),Object(s.d)(i.n,null,Object(s.d)("p",null,"This function is meant to help with testing components that use papupata. If you only wish to mock a single invocation, you might want to use the ",Object(s.d)(l.a,{to:"/api/DeclaredAPI/mockOnce"},"mockOnce")," method instead, as it automatically removes the mock implementation as soon as the invocation has been completed."),Object(s.d)("p",null,"If you wish to restore the API to its normal state after mocking it, use the ",Object(s.d)(l.a,{to:"/api/DeclaredAPI/unmock"},"unmock")," ","method, or the ",Object(s.d)(l.a,{to:"/api/APIDeclaration/unmockAll"},"unmockAll")," method of the API declaration")),Object(s.d)(i.h,null,Object(s.d)(i.g,{name:"mockValue",dataType:"Function or value"},Object(s.d)("p",null,"If a function, that function is invoked when the API is invoked and its return value is returned as the mock response from the API."),Object(s.d)("p",null,"Otherwise the value given as this parameter is returned as the mock response from the API."))),Object(s.d)(i.f,null,"nothing"),Object(s.d)(i.e,null,Object(s.d)(i.c,{label:"Value"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff/:param')\n              .response<string>()\n\n            myAPI.mock('test')\n            \n            const value = await myAPI() // value is now \"test\"\n            \n            myAPI.unmock()\n          "),Object(s.d)(i.c,{label:"Function"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff/:param')\n              .response<string>()\n\n            myAPI.mock(() => 'test')\n            \n            const value = await myAPI() // value is now \"test\"\n            \n            myAPI.unmock()\n          "))))}}}]);
//# sourceMappingURL=component---src-pages-api-declared-api-mock-tsx-d8e8d73e37a264ae4258.js.map