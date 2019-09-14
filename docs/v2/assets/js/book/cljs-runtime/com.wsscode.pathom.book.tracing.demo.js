goog.provide('com.wsscode.pathom.book.tracing.demo');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.trace');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
com.wsscode.pathom.book.tracing.demo.slow_root = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",2143883753,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226)], null)], null),(function com$wsscode$pathom$book$tracing$demo$slow_root(env,_){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__){
return (function (state_53311){
var state_val_53312 = (state_53311[(1)]);
if((state_val_53312 === (7))){
var inst_53299 = (state_53311[(2)]);
var inst_53300 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226)];
var inst_53301 = ["foo"];
var inst_53302 = cljs.core.PersistentHashMap.fromArrays(inst_53300,inst_53301);
var state_53311__$1 = (function (){var statearr_53326 = state_53311;
(statearr_53326[(7)] = inst_53299);

return statearr_53326;
})();
var statearr_53328_53608 = state_53311__$1;
(statearr_53328_53608[(2)] = inst_53302);


cljs.core.async.impl.ioc_helpers.process_exception(state_53311__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53312 === (1))){
var state_53311__$1 = state_53311;
var statearr_53329_53611 = state_53311__$1;
(statearr_53329_53611[(2)] = null);

(statearr_53329_53611[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53312 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53311,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_53270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_53311__$1 = state_53311;
if(cljs.core.truth_(inst_53270)){
var statearr_53331_53614 = state_53311__$1;
(statearr_53331_53614[(1)] = (5));

} else {
var statearr_53332_53616 = state_53311__$1;
(statearr_53332_53616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53312 === (6))){
var inst_53294 = cljs.core.async.timeout((200));
var state_53311__$1 = state_53311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53311__$1,(9),inst_53294);
} else {
if((state_val_53312 === (3))){
var inst_53266 = (state_53311[(2)]);
var state_53311__$1 = state_53311;
var statearr_53336_53621 = state_53311__$1;
(statearr_53336_53621[(2)] = inst_53266);


cljs.core.async.impl.ioc_helpers.process_exception(state_53311__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53312 === (2))){
var inst_53305 = (state_53311[(2)]);
var state_53311__$1 = state_53311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53311__$1,inst_53305);
} else {
if((state_val_53312 === (9))){
var inst_53296 = (state_53311[(2)]);
var inst_53297 = com.wsscode.common.async_cljs.throw_err(inst_53296);
var state_53311__$1 = state_53311;
var statearr_53338_53628 = state_53311__$1;
(statearr_53338_53628[(2)] = inst_53297);

(statearr_53338_53628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53312 === (5))){
var inst_53273 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_53275 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_53276 = ["rgba(255, 255, 0, 0.5)"];
var inst_53277 = cljs.core.PersistentHashMap.fromArrays(inst_53275,inst_53276);
var inst_53278 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_53277];
var inst_53279 = cljs.core.PersistentHashMap.fromArrays(inst_53273,inst_53278);
var inst_53281 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_53279);
var inst_53282 = cljs.core.async.timeout((200));
var state_53311__$1 = (function (){var statearr_53342 = state_53311;
(statearr_53342[(8)] = inst_53281);

return statearr_53342;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53311__$1,(8),inst_53282);
} else {
if((state_val_53312 === (8))){
var inst_53281 = (state_53311[(8)]);
var inst_53284 = (state_53311[(2)]);
var inst_53285 = com.wsscode.common.async_cljs.throw_err(inst_53284);
var inst_53286 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_53287 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_53288 = ["rgba(255, 255, 0, 0.5)"];
var inst_53289 = cljs.core.PersistentHashMap.fromArrays(inst_53287,inst_53288);
var inst_53290 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_53289];
var inst_53291 = cljs.core.PersistentHashMap.fromArrays(inst_53286,inst_53290);
var inst_53292 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_53281,inst_53291);
var state_53311__$1 = (function (){var statearr_53345 = state_53311;
(statearr_53345[(9)] = inst_53292);

return statearr_53345;
})();
var statearr_53346_53637 = state_53311__$1;
(statearr_53346_53637[(2)] = inst_53285);

(statearr_53346_53637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__38971__auto__))
;
return ((function (switch__38924__auto__,c__38971__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38925__auto____0 = (function (){
var statearr_53348 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53348[(0)] = com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38925__auto__);

(statearr_53348[(1)] = (1));

return statearr_53348;
});
var com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38925__auto____1 = (function (state_53311){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_53311);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e53349){if((e53349 instanceof Object)){
var ex__38928__auto__ = e53349;
var statearr_53350_53647 = state_53311;
(statearr_53350_53647[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53349;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53648 = state_53311;
state_53311 = G__53648;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38925__auto__ = function(state_53311){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38925__auto____1.call(this,state_53311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38925__auto____0;
com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38925__auto____1;
return com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__))
})();
var state__38973__auto__ = (function (){var statearr_53362 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_53362[(6)] = c__38971__auto__);

return statearr_53362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__))
);

return c__38971__auto__;
}));
com.wsscode.pathom.book.tracing.demo.slow_root_dep = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo","slow-root-dep","com.wsscode.pathom.book.tracing.demo/slow-root-dep",825026476,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","root-dep","com.wsscode.pathom.book.tracing.demo/root-dep",-1519602177)], null)], null),(function com$wsscode$pathom$book$tracing$demo$slow_root_dep(env,_){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__){
return (function (state_53410){
var state_val_53411 = (state_53410[(1)]);
if((state_val_53411 === (7))){
var inst_53403 = (state_53410[(2)]);
var inst_53404 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","root-dep","com.wsscode.pathom.book.tracing.demo/root-dep",-1519602177)];
var inst_53405 = ["nah"];
var inst_53406 = cljs.core.PersistentHashMap.fromArrays(inst_53404,inst_53405);
var state_53410__$1 = (function (){var statearr_53428 = state_53410;
(statearr_53428[(7)] = inst_53403);

return statearr_53428;
})();
var statearr_53429_53657 = state_53410__$1;
(statearr_53429_53657[(2)] = inst_53406);


cljs.core.async.impl.ioc_helpers.process_exception(state_53410__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53411 === (1))){
var state_53410__$1 = state_53410;
var statearr_53430_53658 = state_53410__$1;
(statearr_53430_53658[(2)] = null);

(statearr_53430_53658[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53411 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53410,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_53376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_53410__$1 = state_53410;
if(cljs.core.truth_(inst_53376)){
var statearr_53432_53662 = state_53410__$1;
(statearr_53432_53662[(1)] = (5));

} else {
var statearr_53433_53665 = state_53410__$1;
(statearr_53433_53665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53411 === (6))){
var inst_53391 = cljs.core.async.timeout((200));
var state_53410__$1 = state_53410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53410__$1,(9),inst_53391);
} else {
if((state_val_53411 === (3))){
var inst_53372 = (state_53410[(2)]);
var state_53410__$1 = state_53410;
var statearr_53435_53670 = state_53410__$1;
(statearr_53435_53670[(2)] = inst_53372);


cljs.core.async.impl.ioc_helpers.process_exception(state_53410__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53411 === (2))){
var inst_53408 = (state_53410[(2)]);
var state_53410__$1 = state_53410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53410__$1,inst_53408);
} else {
if((state_val_53411 === (9))){
var inst_53393 = (state_53410[(2)]);
var inst_53394 = com.wsscode.common.async_cljs.throw_err(inst_53393);
var state_53410__$1 = state_53410;
var statearr_53439_53674 = state_53410__$1;
(statearr_53439_53674[(2)] = inst_53394);

(statearr_53439_53674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53411 === (5))){
var inst_53378 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_53379 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472)];
var inst_53380 = cljs.core.PersistentHashMap.fromArrays(inst_53378,inst_53379);
var inst_53381 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_53380);
var inst_53382 = cljs.core.async.timeout((200));
var state_53410__$1 = (function (){var statearr_53444 = state_53410;
(statearr_53444[(8)] = inst_53381);

return statearr_53444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53410__$1,(8),inst_53382);
} else {
if((state_val_53411 === (8))){
var inst_53381 = (state_53410[(8)]);
var inst_53384 = (state_53410[(2)]);
var inst_53385 = com.wsscode.common.async_cljs.throw_err(inst_53384);
var inst_53386 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_53387 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472)];
var inst_53388 = cljs.core.PersistentHashMap.fromArrays(inst_53386,inst_53387);
var inst_53389 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_53381,inst_53388);
var state_53410__$1 = (function (){var statearr_53449 = state_53410;
(statearr_53449[(9)] = inst_53389);

return statearr_53449;
})();
var statearr_53454_53686 = state_53410__$1;
(statearr_53454_53686[(2)] = inst_53385);

(statearr_53454_53686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__38971__auto__))
;
return ((function (switch__38924__auto__,c__38971__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38925__auto____0 = (function (){
var statearr_53461 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53461[(0)] = com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38925__auto__);

(statearr_53461[(1)] = (1));

return statearr_53461;
});
var com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38925__auto____1 = (function (state_53410){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_53410);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e53473){if((e53473 instanceof Object)){
var ex__38928__auto__ = e53473;
var statearr_53478_53697 = state_53410;
(statearr_53478_53697[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53473;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53700 = state_53410;
state_53410 = G__53700;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38925__auto__ = function(state_53410){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38925__auto____1.call(this,state_53410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38925__auto____0;
com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38925__auto____1;
return com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__))
})();
var state__38973__auto__ = (function (){var statearr_53492 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_53492[(6)] = c__38971__auto__);

return statearr_53492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__))
);

return c__38971__auto__;
}));
com.wsscode.pathom.book.tracing.demo.error_root_dep = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo","error-root-dep","com.wsscode.pathom.book.tracing.demo/error-root-dep",-482974288,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","root-dep-err","com.wsscode.pathom.book.tracing.demo/root-dep-err",-229360029)], null)], null),(function com$wsscode$pathom$book$tracing$demo$error_root_dep(env,_){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__){
return (function (state_53539){
var state_val_53541 = (state_53539[(1)]);
if((state_val_53541 === (7))){
var inst_53532 = (state_53539[(2)]);
var inst_53533 = cljs.core.PersistentHashMap.EMPTY;
var inst_53534 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Meh",inst_53533);
var inst_53535 = (function(){throw inst_53534})();
var state_53539__$1 = (function (){var statearr_53554 = state_53539;
(statearr_53554[(7)] = inst_53532);

return statearr_53554;
})();
var statearr_53556_53709 = state_53539__$1;
(statearr_53556_53709[(2)] = inst_53535);


cljs.core.async.impl.ioc_helpers.process_exception(state_53539__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53541 === (1))){
var state_53539__$1 = state_53539;
var statearr_53560_53717 = state_53539__$1;
(statearr_53560_53717[(2)] = null);

(statearr_53560_53717[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53541 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53539,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_53502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_53539__$1 = state_53539;
if(cljs.core.truth_(inst_53502)){
var statearr_53561_53720 = state_53539__$1;
(statearr_53561_53720[(1)] = (5));

} else {
var statearr_53562_53721 = state_53539__$1;
(statearr_53562_53721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53541 === (6))){
var inst_53527 = cljs.core.async.timeout((200));
var state_53539__$1 = state_53539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53539__$1,(9),inst_53527);
} else {
if((state_val_53541 === (3))){
var inst_53497 = (state_53539[(2)]);
var state_53539__$1 = state_53539;
var statearr_53564_53724 = state_53539__$1;
(statearr_53564_53724[(2)] = inst_53497);


cljs.core.async.impl.ioc_helpers.process_exception(state_53539__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53541 === (2))){
var inst_53537 = (state_53539[(2)]);
var state_53539__$1 = state_53539;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53539__$1,inst_53537);
} else {
if((state_val_53541 === (9))){
var inst_53529 = (state_53539[(2)]);
var inst_53530 = com.wsscode.common.async_cljs.throw_err(inst_53529);
var state_53539__$1 = state_53539;
var statearr_53565_53726 = state_53539__$1;
(statearr_53565_53726[(2)] = inst_53530);

(statearr_53565_53726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53541 === (5))){
var inst_53506 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","data","com.wsscode.pathom.book.tracing.demo/data",-654660801)];
var inst_53507 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_53508 = ["rgba(255, 0, 0, 0.5)"];
var inst_53509 = cljs.core.PersistentHashMap.fromArrays(inst_53507,inst_53508);
var inst_53510 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_53509,"Error message"];
var inst_53511 = cljs.core.PersistentHashMap.fromArrays(inst_53506,inst_53510);
var inst_53512 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_53511);
var inst_53513 = cljs.core.async.timeout((200));
var state_53539__$1 = (function (){var statearr_53568 = state_53539;
(statearr_53568[(8)] = inst_53512);

return statearr_53568;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53539__$1,(8),inst_53513);
} else {
if((state_val_53541 === (8))){
var inst_53512 = (state_53539[(8)]);
var inst_53515 = (state_53539[(2)]);
var inst_53516 = com.wsscode.common.async_cljs.throw_err(inst_53515);
var inst_53518 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","data","com.wsscode.pathom.book.tracing.demo/data",-654660801)];
var inst_53519 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_53521 = ["rgba(255, 0, 0, 0.5)"];
var inst_53522 = cljs.core.PersistentHashMap.fromArrays(inst_53519,inst_53521);
var inst_53523 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_53522,"Error message"];
var inst_53524 = cljs.core.PersistentHashMap.fromArrays(inst_53518,inst_53523);
var inst_53525 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_53512,inst_53524);
var state_53539__$1 = (function (){var statearr_53574 = state_53539;
(statearr_53574[(9)] = inst_53525);

return statearr_53574;
})();
var statearr_53575_53738 = state_53539__$1;
(statearr_53575_53738[(2)] = inst_53516);

(statearr_53575_53738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__38971__auto__))
;
return ((function (switch__38924__auto__,c__38971__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38925__auto____0 = (function (){
var statearr_53578 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53578[(0)] = com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38925__auto__);

(statearr_53578[(1)] = (1));

return statearr_53578;
});
var com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38925__auto____1 = (function (state_53539){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_53539);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e53582){if((e53582 instanceof Object)){
var ex__38928__auto__ = e53582;
var statearr_53583_53747 = state_53539;
(statearr_53583_53747[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53582;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53751 = state_53539;
state_53539 = G__53751;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38925__auto__ = function(state_53539){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38925__auto____1.call(this,state_53539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38925__auto____0;
com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38925__auto____1;
return com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__))
})();
var state__38973__auto__ = (function (){var statearr_53588 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_53588[(6)] = c__38971__auto__);

return statearr_53588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__))
);

return c__38971__auto__;
}));
com.wsscode.pathom.book.tracing.demo.app_registry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.tracing.demo.slow_root,com.wsscode.pathom.book.tracing.demo.slow_root_dep,com.wsscode.pathom.book.tracing.demo.error_root_dep], null);
com.wsscode.pathom.trace.trace_tree_collect.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),(function (x,row){
return com.wsscode.pathom.trace.tree_assoc_detail(row,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","data","com.wsscode.pathom.book.tracing.demo/data",-654660801)], null));
}));
com.wsscode.pathom.book.tracing.demo.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.tracing.demo.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));
var G__53600_53757 = cljs.core.PersistentArrayMap.EMPTY;
var G__53601_53758 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)], null);
(com.wsscode.pathom.book.tracing.demo.parser.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.book.tracing.demo.parser.cljs$core$IFn$_invoke$arity$2(G__53600_53757,G__53601_53758) : com.wsscode.pathom.book.tracing.demo.parser.call(null,G__53600_53757,G__53601_53758));

//# sourceMappingURL=com.wsscode.pathom.book.tracing.demo.js.map
