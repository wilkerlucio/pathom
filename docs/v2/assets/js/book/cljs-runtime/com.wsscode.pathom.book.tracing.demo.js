goog.provide('com.wsscode.pathom.book.tracing.demo');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.trace');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
com.wsscode.pathom.book.tracing.demo.slow_root = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",2143883753,null),(function (){var G__73439 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226)], null)], null);
return G__73439;

})(),(function com$wsscode$pathom$book$tracing$demo$slow_root(env,_){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__){
return (function (state_73485){
var state_val_73486 = (state_73485[(1)]);
if((state_val_73486 === (7))){
var inst_73477 = (state_73485[(2)]);
var inst_73478 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226)];
var inst_73480 = ["foo"];
var inst_73481 = cljs.core.PersistentHashMap.fromArrays(inst_73478,inst_73480);
var state_73485__$1 = (function (){var statearr_73491 = state_73485;
(statearr_73491[(7)] = inst_73477);

return statearr_73491;
})();
var statearr_73492_73775 = state_73485__$1;
(statearr_73492_73775[(2)] = inst_73481);


cljs.core.async.impl.ioc_helpers.process_exception(state_73485__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73486 === (1))){
var state_73485__$1 = state_73485;
var statearr_73495_73776 = state_73485__$1;
(statearr_73495_73776[(2)] = null);

(statearr_73495_73776[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73486 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_73485,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_73446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_73485__$1 = state_73485;
if(cljs.core.truth_(inst_73446)){
var statearr_73499_73778 = state_73485__$1;
(statearr_73499_73778[(1)] = (5));

} else {
var statearr_73500_73781 = state_73485__$1;
(statearr_73500_73781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73486 === (6))){
var inst_73472 = cljs.core.async.timeout((200));
var state_73485__$1 = state_73485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73485__$1,(9),inst_73472);
} else {
if((state_val_73486 === (3))){
var inst_73442 = (state_73485[(2)]);
var state_73485__$1 = state_73485;
var statearr_73502_73784 = state_73485__$1;
(statearr_73502_73784[(2)] = inst_73442);


cljs.core.async.impl.ioc_helpers.process_exception(state_73485__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73486 === (2))){
var inst_73483 = (state_73485[(2)]);
var state_73485__$1 = state_73485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73485__$1,inst_73483);
} else {
if((state_val_73486 === (9))){
var inst_73474 = (state_73485[(2)]);
var inst_73475 = com.wsscode.common.async_cljs.throw_err(inst_73474);
var state_73485__$1 = state_73485;
var statearr_73504_73786 = state_73485__$1;
(statearr_73504_73786[(2)] = inst_73475);

(statearr_73504_73786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73486 === (5))){
var inst_73448 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_73449 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_73450 = ["rgba(255, 255, 0, 0.5)"];
var inst_73451 = cljs.core.PersistentHashMap.fromArrays(inst_73449,inst_73450);
var inst_73452 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_73451];
var inst_73453 = cljs.core.PersistentHashMap.fromArrays(inst_73448,inst_73452);
var inst_73454 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_73453);
var inst_73455 = cljs.core.async.timeout((200));
var state_73485__$1 = (function (){var statearr_73505 = state_73485;
(statearr_73505[(8)] = inst_73454);

return statearr_73505;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73485__$1,(8),inst_73455);
} else {
if((state_val_73486 === (8))){
var inst_73454 = (state_73485[(8)]);
var inst_73457 = (state_73485[(2)]);
var inst_73458 = com.wsscode.common.async_cljs.throw_err(inst_73457);
var inst_73459 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_73460 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_73461 = ["rgba(255, 255, 0, 0.5)"];
var inst_73462 = cljs.core.PersistentHashMap.fromArrays(inst_73460,inst_73461);
var inst_73464 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_73462];
var inst_73465 = cljs.core.PersistentHashMap.fromArrays(inst_73459,inst_73464);
var inst_73466 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_73454,inst_73465);
var state_73485__$1 = (function (){var statearr_73506 = state_73485;
(statearr_73506[(9)] = inst_73466);

return statearr_73506;
})();
var statearr_73508_73794 = state_73485__$1;
(statearr_73508_73794[(2)] = inst_73458);

(statearr_73508_73794[(1)] = (7));


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
});})(c__45808__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__45526__auto____0 = (function (){
var statearr_73511 = [null,null,null,null,null,null,null,null,null,null];
(statearr_73511[(0)] = com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__45526__auto__);

(statearr_73511[(1)] = (1));

return statearr_73511;
});
var com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__45526__auto____1 = (function (state_73485){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_73485);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e73513){if((e73513 instanceof Object)){
var ex__45529__auto__ = e73513;
var statearr_73515_73797 = state_73485;
(statearr_73515_73797[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73513;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73798 = state_73485;
state_73485 = G__73798;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__45526__auto__ = function(state_73485){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__45526__auto____1.call(this,state_73485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__45526__auto____0;
com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__45526__auto____1;
return com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__))
})();
var state__45810__auto__ = (function (){var statearr_73534 = f__45809__auto__();
(statearr_73534[(6)] = c__45808__auto__);

return statearr_73534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__))
);

return c__45808__auto__;
}));
com.wsscode.pathom.book.tracing.demo.slow_root_dep = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo","slow-root-dep","com.wsscode.pathom.book.tracing.demo/slow-root-dep",825026476,null),(function (){var G__73541 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","root-dep","com.wsscode.pathom.book.tracing.demo/root-dep",-1519602177)], null)], null);
return G__73541;

})(),(function com$wsscode$pathom$book$tracing$demo$slow_root_dep(env,_){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__){
return (function (state_73581){
var state_val_73582 = (state_73581[(1)]);
if((state_val_73582 === (7))){
var inst_73571 = (state_73581[(2)]);
var inst_73573 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","root-dep","com.wsscode.pathom.book.tracing.demo/root-dep",-1519602177)];
var inst_73574 = ["nah"];
var inst_73575 = cljs.core.PersistentHashMap.fromArrays(inst_73573,inst_73574);
var state_73581__$1 = (function (){var statearr_73591 = state_73581;
(statearr_73591[(7)] = inst_73571);

return statearr_73591;
})();
var statearr_73592_73804 = state_73581__$1;
(statearr_73592_73804[(2)] = inst_73575);


cljs.core.async.impl.ioc_helpers.process_exception(state_73581__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73582 === (1))){
var state_73581__$1 = state_73581;
var statearr_73596_73806 = state_73581__$1;
(statearr_73596_73806[(2)] = null);

(statearr_73596_73806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73582 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_73581,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_73549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_73581__$1 = state_73581;
if(cljs.core.truth_(inst_73549)){
var statearr_73597_73808 = state_73581__$1;
(statearr_73597_73808[(1)] = (5));

} else {
var statearr_73598_73809 = state_73581__$1;
(statearr_73598_73809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73582 === (6))){
var inst_73566 = cljs.core.async.timeout((200));
var state_73581__$1 = state_73581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73581__$1,(9),inst_73566);
} else {
if((state_val_73582 === (3))){
var inst_73543 = (state_73581[(2)]);
var state_73581__$1 = state_73581;
var statearr_73602_73812 = state_73581__$1;
(statearr_73602_73812[(2)] = inst_73543);


cljs.core.async.impl.ioc_helpers.process_exception(state_73581__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73582 === (2))){
var inst_73578 = (state_73581[(2)]);
var state_73581__$1 = state_73581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73581__$1,inst_73578);
} else {
if((state_val_73582 === (9))){
var inst_73568 = (state_73581[(2)]);
var inst_73569 = com.wsscode.common.async_cljs.throw_err(inst_73568);
var state_73581__$1 = state_73581;
var statearr_73620_73815 = state_73581__$1;
(statearr_73620_73815[(2)] = inst_73569);

(statearr_73620_73815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73582 === (5))){
var inst_73551 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_73552 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472)];
var inst_73553 = cljs.core.PersistentHashMap.fromArrays(inst_73551,inst_73552);
var inst_73554 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_73553);
var inst_73556 = cljs.core.async.timeout((200));
var state_73581__$1 = (function (){var statearr_73621 = state_73581;
(statearr_73621[(8)] = inst_73554);

return statearr_73621;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73581__$1,(8),inst_73556);
} else {
if((state_val_73582 === (8))){
var inst_73554 = (state_73581[(8)]);
var inst_73559 = (state_73581[(2)]);
var inst_73560 = com.wsscode.common.async_cljs.throw_err(inst_73559);
var inst_73561 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_73562 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472)];
var inst_73563 = cljs.core.PersistentHashMap.fromArrays(inst_73561,inst_73562);
var inst_73564 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_73554,inst_73563);
var state_73581__$1 = (function (){var statearr_73625 = state_73581;
(statearr_73625[(9)] = inst_73564);

return statearr_73625;
})();
var statearr_73626_73818 = state_73581__$1;
(statearr_73626_73818[(2)] = inst_73560);

(statearr_73626_73818[(1)] = (7));


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
});})(c__45808__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__45526__auto____0 = (function (){
var statearr_73633 = [null,null,null,null,null,null,null,null,null,null];
(statearr_73633[(0)] = com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__45526__auto__);

(statearr_73633[(1)] = (1));

return statearr_73633;
});
var com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__45526__auto____1 = (function (state_73581){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_73581);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e73636){if((e73636 instanceof Object)){
var ex__45529__auto__ = e73636;
var statearr_73637_73829 = state_73581;
(statearr_73637_73829[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73636;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73830 = state_73581;
state_73581 = G__73830;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__45526__auto__ = function(state_73581){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__45526__auto____1.call(this,state_73581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__45526__auto____0;
com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__45526__auto____1;
return com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__))
})();
var state__45810__auto__ = (function (){var statearr_73645 = f__45809__auto__();
(statearr_73645[(6)] = c__45808__auto__);

return statearr_73645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__))
);

return c__45808__auto__;
}));
com.wsscode.pathom.book.tracing.demo.error_root_dep = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo","error-root-dep","com.wsscode.pathom.book.tracing.demo/error-root-dep",-482974288,null),(function (){var G__73652 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","root-dep-err","com.wsscode.pathom.book.tracing.demo/root-dep-err",-229360029)], null)], null);
return G__73652;

})(),(function com$wsscode$pathom$book$tracing$demo$error_root_dep(env,_){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__){
return (function (state_73716){
var state_val_73717 = (state_73716[(1)]);
if((state_val_73717 === (7))){
var inst_73700 = (state_73716[(2)]);
var inst_73703 = cljs.core.PersistentHashMap.EMPTY;
var inst_73706 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Meh",inst_73703);
var inst_73707 = (function(){throw inst_73706})();
var state_73716__$1 = (function (){var statearr_73721 = state_73716;
(statearr_73721[(7)] = inst_73700);

return statearr_73721;
})();
var statearr_73722_73840 = state_73716__$1;
(statearr_73722_73840[(2)] = inst_73707);


cljs.core.async.impl.ioc_helpers.process_exception(state_73716__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73717 === (1))){
var state_73716__$1 = state_73716;
var statearr_73724_73842 = state_73716__$1;
(statearr_73724_73842[(2)] = null);

(statearr_73724_73842[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73717 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_73716,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_73665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_73716__$1 = state_73716;
if(cljs.core.truth_(inst_73665)){
var statearr_73725_73843 = state_73716__$1;
(statearr_73725_73843[(1)] = (5));

} else {
var statearr_73726_73844 = state_73716__$1;
(statearr_73726_73844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73717 === (6))){
var inst_73695 = cljs.core.async.timeout((200));
var state_73716__$1 = state_73716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73716__$1,(9),inst_73695);
} else {
if((state_val_73717 === (3))){
var inst_73660 = (state_73716[(2)]);
var state_73716__$1 = state_73716;
var statearr_73732_73847 = state_73716__$1;
(statearr_73732_73847[(2)] = inst_73660);


cljs.core.async.impl.ioc_helpers.process_exception(state_73716__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73717 === (2))){
var inst_73712 = (state_73716[(2)]);
var state_73716__$1 = state_73716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73716__$1,inst_73712);
} else {
if((state_val_73717 === (9))){
var inst_73697 = (state_73716[(2)]);
var inst_73698 = com.wsscode.common.async_cljs.throw_err(inst_73697);
var state_73716__$1 = state_73716;
var statearr_73739_73851 = state_73716__$1;
(statearr_73739_73851[(2)] = inst_73698);

(statearr_73739_73851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73717 === (5))){
var inst_73667 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","data","com.wsscode.pathom.book.tracing.demo/data",-654660801)];
var inst_73668 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_73669 = ["rgba(255, 0, 0, 0.5)"];
var inst_73670 = cljs.core.PersistentHashMap.fromArrays(inst_73668,inst_73669);
var inst_73671 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_73670,"Error message"];
var inst_73672 = cljs.core.PersistentHashMap.fromArrays(inst_73667,inst_73671);
var inst_73673 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_73672);
var inst_73674 = cljs.core.async.timeout((200));
var state_73716__$1 = (function (){var statearr_73744 = state_73716;
(statearr_73744[(8)] = inst_73673);

return statearr_73744;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73716__$1,(8),inst_73674);
} else {
if((state_val_73717 === (8))){
var inst_73673 = (state_73716[(8)]);
var inst_73676 = (state_73716[(2)]);
var inst_73677 = com.wsscode.common.async_cljs.throw_err(inst_73676);
var inst_73678 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","data","com.wsscode.pathom.book.tracing.demo/data",-654660801)];
var inst_73681 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_73685 = ["rgba(255, 0, 0, 0.5)"];
var inst_73686 = cljs.core.PersistentHashMap.fromArrays(inst_73681,inst_73685);
var inst_73687 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_73686,"Error message"];
var inst_73688 = cljs.core.PersistentHashMap.fromArrays(inst_73678,inst_73687);
var inst_73689 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_73673,inst_73688);
var state_73716__$1 = (function (){var statearr_73747 = state_73716;
(statearr_73747[(9)] = inst_73689);

return statearr_73747;
})();
var statearr_73749_73855 = state_73716__$1;
(statearr_73749_73855[(2)] = inst_73677);

(statearr_73749_73855[(1)] = (7));


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
});})(c__45808__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__45526__auto____0 = (function (){
var statearr_73754 = [null,null,null,null,null,null,null,null,null,null];
(statearr_73754[(0)] = com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__45526__auto__);

(statearr_73754[(1)] = (1));

return statearr_73754;
});
var com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__45526__auto____1 = (function (state_73716){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_73716);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e73757){if((e73757 instanceof Object)){
var ex__45529__auto__ = e73757;
var statearr_73759_73860 = state_73716;
(statearr_73759_73860[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73757;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73861 = state_73716;
state_73716 = G__73861;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__45526__auto__ = function(state_73716){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__45526__auto____1.call(this,state_73716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__45526__auto____0;
com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__45526__auto____1;
return com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__))
})();
var state__45810__auto__ = (function (){var statearr_73762 = f__45809__auto__();
(statearr_73762[(6)] = c__45808__auto__);

return statearr_73762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__))
);

return c__45808__auto__;
}));
com.wsscode.pathom.book.tracing.demo.app_registry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.tracing.demo.slow_root,com.wsscode.pathom.book.tracing.demo.slow_root_dep,com.wsscode.pathom.book.tracing.demo.error_root_dep], null);
com.wsscode.pathom.trace.trace_tree_collect.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),(function (x,row){
return com.wsscode.pathom.trace.tree_assoc_detail(row,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","data","com.wsscode.pathom.book.tracing.demo/data",-654660801)], null));
}));
com.wsscode.pathom.book.tracing.demo.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.tracing.demo.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));
com.wsscode.pathom.book.tracing.demo.parser(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)], null));

//# sourceMappingURL=com.wsscode.pathom.book.tracing.demo.js.map
