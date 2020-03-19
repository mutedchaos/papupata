(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{481:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));n(1);var a=n(434),l=n(130),o=n(435),i=n(436),r=n(0);function s(){return Object(r.d)(i.a,null,Object(r.d)(o.a,null,Object(r.d)(l.a,null,Object(r.d)("h1",null,"API Reference"),Object(r.d)("h2",null,"skipHandlingRoute")),Object(r.d)(a.c,null,"import {skipHandlingRoute} from 'papupata'"),Object(r.d)(a.a,{version:"1.5.0"}),Object(r.d)(a.i,null,"A token value a route implementation or papupata middleware can return to have express move on to the other route handlers and middleware."),Object(r.d)(a.n,null,Object(r.d)("p",null,"Most people will no need this, but there are a few use cases where this functionality can be useful."),Object(r.d)("p",null,"If routing needs are such, that there can be false positives for the route implementation, then this value can be used to defer the execution to other handlers. A common case would be serving HTML if the client expects it, and only running the API call itself for calls that have, say, Accept header requesting JSON."),Object(r.d)("p",null,"Another case would be when autoImplementAllAPIs is enabled, but you cannot actually implement all the APIs with papupata. Perhaps you need a pecualiar combination of middleware that make it more difficult, maybe you even want to defer to another papupata router. Or perhaps the route is implemented by a library. In these cases you can implement the route as one that always returns skipHandlingRoute to indicate that other code is responsible for it.")),Object(r.d)(a.e,null,Object(r.d)(a.c,{label:"Conditional skip"},"\n                api.implement(req => {\n                    if (req.headers.accept.includes('text/html')) return skipHandlingRoute\n                    return processRequest(req)\n                })\n            "),Object(r.d)(a.c,{label:"Defer execution to non-papupata implementation"},"\n                const api = API.declareGetAPI('/test').response<string>()\n                api.implement(() => skipHandlingRoute)\n                app.get('/test', (_req, res) => res.send('OK!'))\n            "))))}}}]);
//# sourceMappingURL=component---src-pages-api-skip-handling-route-tsx-86c4268e5f202339e432.js.map