(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{465:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return u}));var a=t(436),o=t(435),c=t(130),i=t(434),l=t(48),s=(t(1),t(0));function u(){return Object(s.d)(a.a,null,Object(s.d)(o.a,null,Object(s.d)(c.a,null,Object(s.d)("h1",null,"API Reference"),Object(s.d)("h2",null,"class DeclaredAPI"),Object(s.d)("h3",null,"method mockOnce")),Object(s.d)(i.i,null,"Causes an API invocation to be omitted, instead returning a mock value"),Object(s.d)(i.a,{version:"1.1.0"}),Object(s.d)(i.n,null,Object(s.d)("p",null,"This function is meant to help with testing components that use papupata. When using this function instead of"," ",Object(s.d)(l.a,{to:"/api/DeclaredAPI/mock"},"mock")," you do not need to call ",Object(s.d)(l.a,{to:"/api/DeclaredAPI/unmock"},"unmock")," afterwards, assuming the API was invoked, as it is automatically called upon the invocation.")),Object(s.d)(i.h,null,Object(s.d)(i.g,{name:"mockValue",dataType:"Function or value"},Object(s.d)("p",null,"If a function, that function is invoked when the API is invoked and its return value is returned as the mock response from the API."),Object(s.d)("p",null,"Otherwise the value given as this parameter is returned as the mock response from the API."))),Object(s.d)(i.f,null,"nothing"),Object(s.d)(i.e,null,Object(s.d)(i.c,{label:"Value"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff/:param')\n              .response<string>()\n\n            myAPI.mockOnce('test')\n            \n            const value1 = await myAPI() // value1 is now \"test\"\n            const value2 = await myAPI() // value is now obtained by invoking the actual API\n            \n          "),Object(s.d)(i.c,{label:"Function"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff/:param')\n              .response<string>()\n\n            myAPI.mock(() => 'test')\n            \n            const value1 = await myAPI() // value1 is now \"test\"\n            const value2 = await myAPI() // value is now obtained by invoking the actual API\n            \n            myAPI.unmock()\n          "))))}}}]);
//# sourceMappingURL=component---src-pages-api-declared-api-mock-once-tsx-6e18c66ee960b549c524.js.map