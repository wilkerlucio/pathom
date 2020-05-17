goog.provide('com.wsscode.pathom.book.tracing.demo');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.trace');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
com.wsscode.pathom.book.tracing.demo.slow_root = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",2143883753,null),(function (){var G__61998 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226)], null)], null);
return G__61998;

})(),(function com$wsscode$pathom$book$tracing$demo$slow_root(env,_){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_62042){
var state_val_62043 = (state_62042[(1)]);
if((state_val_62043 === (7))){
var inst_62035 = (state_62042[(2)]);
var inst_62036 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226)];
var inst_62037 = ["foo"];
var inst_62038 = cljs.core.PersistentHashMap.fromArrays(inst_62036,inst_62037);
var state_62042__$1 = (function (){var statearr_62049 = state_62042;
(statearr_62049[(7)] = inst_62035);

return statearr_62049;
})();
var statearr_62050_62319 = state_62042__$1;
(statearr_62050_62319[(2)] = inst_62038);


cljs.core.async.impl.ioc_helpers.process_exception(state_62042__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62043 === (1))){
var state_62042__$1 = state_62042;
var statearr_62052_62321 = state_62042__$1;
(statearr_62052_62321[(2)] = null);

(statearr_62052_62321[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62043 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_62042,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_62005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_62042__$1 = state_62042;
if(cljs.core.truth_(inst_62005)){
var statearr_62054_62325 = state_62042__$1;
(statearr_62054_62325[(1)] = (5));

} else {
var statearr_62056_62328 = state_62042__$1;
(statearr_62056_62328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62043 === (6))){
var inst_62029 = cljs.core.async.timeout((200));
var state_62042__$1 = state_62042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62042__$1,(9),inst_62029);
} else {
if((state_val_62043 === (3))){
var inst_62001 = (state_62042[(2)]);
var state_62042__$1 = state_62042;
var statearr_62057_62329 = state_62042__$1;
(statearr_62057_62329[(2)] = inst_62001);


cljs.core.async.impl.ioc_helpers.process_exception(state_62042__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62043 === (2))){
var inst_62040 = (state_62042[(2)]);
var state_62042__$1 = state_62042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62042__$1,inst_62040);
} else {
if((state_val_62043 === (9))){
var inst_62031 = (state_62042[(2)]);
var inst_62032 = com.wsscode.common.async_cljs.throw_err(inst_62031);
var state_62042__$1 = state_62042;
var statearr_62060_62330 = state_62042__$1;
(statearr_62060_62330[(2)] = inst_62032);

(statearr_62060_62330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62043 === (5))){
var inst_62007 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_62008 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_62009 = ["rgba(255, 255, 0, 0.5)"];
var inst_62010 = cljs.core.PersistentHashMap.fromArrays(inst_62008,inst_62009);
var inst_62011 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_62010];
var inst_62012 = cljs.core.PersistentHashMap.fromArrays(inst_62007,inst_62011);
var inst_62013 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_62012);
var inst_62015 = cljs.core.async.timeout((200));
var state_62042__$1 = (function (){var statearr_62061 = state_62042;
(statearr_62061[(8)] = inst_62013);

return statearr_62061;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62042__$1,(8),inst_62015);
} else {
if((state_val_62043 === (8))){
var inst_62013 = (state_62042[(8)]);
var inst_62018 = (state_62042[(2)]);
var inst_62019 = com.wsscode.common.async_cljs.throw_err(inst_62018);
var inst_62020 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_62022 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_62023 = ["rgba(255, 255, 0, 0.5)"];
var inst_62024 = cljs.core.PersistentHashMap.fromArrays(inst_62022,inst_62023);
var inst_62025 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_62024];
var inst_62026 = cljs.core.PersistentHashMap.fromArrays(inst_62020,inst_62025);
var inst_62027 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_62013,inst_62026);
var state_62042__$1 = (function (){var statearr_62074 = state_62042;
(statearr_62074[(9)] = inst_62027);

return statearr_62074;
})();
var statearr_62075_62337 = state_62042__$1;
(statearr_62075_62337[(2)] = inst_62019);

(statearr_62075_62337[(1)] = (7));


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
});})(c__47946__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto____0 = (function (){
var statearr_62080 = [null,null,null,null,null,null,null,null,null,null];
(statearr_62080[(0)] = com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto__);

(statearr_62080[(1)] = (1));

return statearr_62080;
});
var com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto____1 = (function (state_62042){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_62042);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e62083){if((e62083 instanceof Object)){
var ex__47667__auto__ = e62083;
var statearr_62086_62344 = state_62042;
(statearr_62086_62344[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62083;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62345 = state_62042;
state_62042 = G__62345;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto__ = function(state_62042){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto____1.call(this,state_62042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_62090 = f__47947__auto__();
(statearr_62090[(6)] = c__47946__auto__);

return statearr_62090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.tracing.demo.slow_root_dep = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo","slow-root-dep","com.wsscode.pathom.book.tracing.demo/slow-root-dep",825026476,null),(function (){var G__62095 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","root-dep","com.wsscode.pathom.book.tracing.demo/root-dep",-1519602177)], null)], null);
return G__62095;

})(),(function com$wsscode$pathom$book$tracing$demo$slow_root_dep(env,_){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_62132){
var state_val_62133 = (state_62132[(1)]);
if((state_val_62133 === (7))){
var inst_62124 = (state_62132[(2)]);
var inst_62125 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","root-dep","com.wsscode.pathom.book.tracing.demo/root-dep",-1519602177)];
var inst_62126 = ["nah"];
var inst_62127 = cljs.core.PersistentHashMap.fromArrays(inst_62125,inst_62126);
var state_62132__$1 = (function (){var statearr_62137 = state_62132;
(statearr_62137[(7)] = inst_62124);

return statearr_62137;
})();
var statearr_62138_62355 = state_62132__$1;
(statearr_62138_62355[(2)] = inst_62127);


cljs.core.async.impl.ioc_helpers.process_exception(state_62132__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62133 === (1))){
var state_62132__$1 = state_62132;
var statearr_62141_62356 = state_62132__$1;
(statearr_62141_62356[(2)] = null);

(statearr_62141_62356[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62133 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_62132,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_62102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_62132__$1 = state_62132;
if(cljs.core.truth_(inst_62102)){
var statearr_62146_62366 = state_62132__$1;
(statearr_62146_62366[(1)] = (5));

} else {
var statearr_62149_62368 = state_62132__$1;
(statearr_62149_62368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62133 === (6))){
var inst_62119 = cljs.core.async.timeout((200));
var state_62132__$1 = state_62132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62132__$1,(9),inst_62119);
} else {
if((state_val_62133 === (3))){
var inst_62098 = (state_62132[(2)]);
var state_62132__$1 = state_62132;
var statearr_62152_62370 = state_62132__$1;
(statearr_62152_62370[(2)] = inst_62098);


cljs.core.async.impl.ioc_helpers.process_exception(state_62132__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62133 === (2))){
var inst_62129 = (state_62132[(2)]);
var state_62132__$1 = state_62132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62132__$1,inst_62129);
} else {
if((state_val_62133 === (9))){
var inst_62121 = (state_62132[(2)]);
var inst_62122 = com.wsscode.common.async_cljs.throw_err(inst_62121);
var state_62132__$1 = state_62132;
var statearr_62159_62375 = state_62132__$1;
(statearr_62159_62375[(2)] = inst_62122);

(statearr_62159_62375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62133 === (5))){
var inst_62104 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_62105 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472)];
var inst_62106 = cljs.core.PersistentHashMap.fromArrays(inst_62104,inst_62105);
var inst_62107 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_62106);
var inst_62108 = cljs.core.async.timeout((200));
var state_62132__$1 = (function (){var statearr_62164 = state_62132;
(statearr_62164[(8)] = inst_62107);

return statearr_62164;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62132__$1,(8),inst_62108);
} else {
if((state_val_62133 === (8))){
var inst_62107 = (state_62132[(8)]);
var inst_62110 = (state_62132[(2)]);
var inst_62111 = com.wsscode.common.async_cljs.throw_err(inst_62110);
var inst_62113 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_62115 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472)];
var inst_62116 = cljs.core.PersistentHashMap.fromArrays(inst_62113,inst_62115);
var inst_62117 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_62107,inst_62116);
var state_62132__$1 = (function (){var statearr_62168 = state_62132;
(statearr_62168[(9)] = inst_62117);

return statearr_62168;
})();
var statearr_62170_62386 = state_62132__$1;
(statearr_62170_62386[(2)] = inst_62111);

(statearr_62170_62386[(1)] = (7));


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
});})(c__47946__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto____0 = (function (){
var statearr_62174 = [null,null,null,null,null,null,null,null,null,null];
(statearr_62174[(0)] = com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto__);

(statearr_62174[(1)] = (1));

return statearr_62174;
});
var com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto____1 = (function (state_62132){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_62132);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e62176){if((e62176 instanceof Object)){
var ex__47667__auto__ = e62176;
var statearr_62178_62393 = state_62132;
(statearr_62178_62393[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62176;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62394 = state_62132;
state_62132 = G__62394;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto__ = function(state_62132){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto____1.call(this,state_62132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_62183 = f__47947__auto__();
(statearr_62183[(6)] = c__47946__auto__);

return statearr_62183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.tracing.demo.error_root_dep = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo","error-root-dep","com.wsscode.pathom.book.tracing.demo/error-root-dep",-482974288,null),(function (){var G__62190 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","root-dep-err","com.wsscode.pathom.book.tracing.demo/root-dep-err",-229360029)], null)], null);
return G__62190;

})(),(function com$wsscode$pathom$book$tracing$demo$error_root_dep(env,_){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_62245){
var state_val_62246 = (state_62245[(1)]);
if((state_val_62246 === (7))){
var inst_62237 = (state_62245[(2)]);
var inst_62239 = cljs.core.PersistentHashMap.EMPTY;
var inst_62240 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Meh",inst_62239);
var inst_62241 = (function(){throw inst_62240})();
var state_62245__$1 = (function (){var statearr_62253 = state_62245;
(statearr_62253[(7)] = inst_62237);

return statearr_62253;
})();
var statearr_62254_62406 = state_62245__$1;
(statearr_62254_62406[(2)] = inst_62241);


cljs.core.async.impl.ioc_helpers.process_exception(state_62245__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62246 === (1))){
var state_62245__$1 = state_62245;
var statearr_62258_62414 = state_62245__$1;
(statearr_62258_62414[(2)] = null);

(statearr_62258_62414[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62246 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_62245,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_62199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_62245__$1 = state_62245;
if(cljs.core.truth_(inst_62199)){
var statearr_62263_62419 = state_62245__$1;
(statearr_62263_62419[(1)] = (5));

} else {
var statearr_62264_62421 = state_62245__$1;
(statearr_62264_62421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62246 === (6))){
var inst_62231 = cljs.core.async.timeout((200));
var state_62245__$1 = state_62245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62245__$1,(9),inst_62231);
} else {
if((state_val_62246 === (3))){
var inst_62195 = (state_62245[(2)]);
var state_62245__$1 = state_62245;
var statearr_62267_62423 = state_62245__$1;
(statearr_62267_62423[(2)] = inst_62195);


cljs.core.async.impl.ioc_helpers.process_exception(state_62245__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62246 === (2))){
var inst_62243 = (state_62245[(2)]);
var state_62245__$1 = state_62245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62245__$1,inst_62243);
} else {
if((state_val_62246 === (9))){
var inst_62233 = (state_62245[(2)]);
var inst_62234 = com.wsscode.common.async_cljs.throw_err(inst_62233);
var state_62245__$1 = state_62245;
var statearr_62269_62428 = state_62245__$1;
(statearr_62269_62428[(2)] = inst_62234);

(statearr_62269_62428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62246 === (5))){
var inst_62202 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","data","com.wsscode.pathom.book.tracing.demo/data",-654660801)];
var inst_62206 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_62207 = ["rgba(255, 0, 0, 0.5)"];
var inst_62208 = cljs.core.PersistentHashMap.fromArrays(inst_62206,inst_62207);
var inst_62209 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_62208,"Error message"];
var inst_62210 = cljs.core.PersistentHashMap.fromArrays(inst_62202,inst_62209);
var inst_62211 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_62210);
var inst_62212 = cljs.core.async.timeout((200));
var state_62245__$1 = (function (){var statearr_62274 = state_62245;
(statearr_62274[(8)] = inst_62211);

return statearr_62274;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62245__$1,(8),inst_62212);
} else {
if((state_val_62246 === (8))){
var inst_62211 = (state_62245[(8)]);
var inst_62214 = (state_62245[(2)]);
var inst_62215 = com.wsscode.common.async_cljs.throw_err(inst_62214);
var inst_62216 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","data","com.wsscode.pathom.book.tracing.demo/data",-654660801)];
var inst_62222 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_62225 = ["rgba(255, 0, 0, 0.5)"];
var inst_62226 = cljs.core.PersistentHashMap.fromArrays(inst_62222,inst_62225);
var inst_62227 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_62226,"Error message"];
var inst_62228 = cljs.core.PersistentHashMap.fromArrays(inst_62216,inst_62227);
var inst_62229 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_62211,inst_62228);
var state_62245__$1 = (function (){var statearr_62281 = state_62245;
(statearr_62281[(9)] = inst_62229);

return statearr_62281;
})();
var statearr_62282_62437 = state_62245__$1;
(statearr_62282_62437[(2)] = inst_62215);

(statearr_62282_62437[(1)] = (7));


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
});})(c__47946__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto____0 = (function (){
var statearr_62290 = [null,null,null,null,null,null,null,null,null,null];
(statearr_62290[(0)] = com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto__);

(statearr_62290[(1)] = (1));

return statearr_62290;
});
var com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto____1 = (function (state_62245){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_62245);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e62293){if((e62293 instanceof Object)){
var ex__47667__auto__ = e62293;
var statearr_62295_62443 = state_62245;
(statearr_62295_62443[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62293;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62446 = state_62245;
state_62245 = G__62446;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto__ = function(state_62245){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto____1.call(this,state_62245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_62299 = f__47947__auto__();
(statearr_62299[(6)] = c__47946__auto__);

return statearr_62299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.tracing.demo.app_registry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.tracing.demo.slow_root,com.wsscode.pathom.book.tracing.demo.slow_root_dep,com.wsscode.pathom.book.tracing.demo.error_root_dep], null);
com.wsscode.pathom.trace.trace_tree_collect.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),(function (x,row){
return com.wsscode.pathom.trace.tree_assoc_detail(row,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","data","com.wsscode.pathom.book.tracing.demo/data",-654660801)], null));
}));
com.wsscode.pathom.book.tracing.demo.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.tracing.demo.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));
com.wsscode.pathom.book.tracing.demo.parser(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)], null));

//# sourceMappingURL=com.wsscode.pathom.book.tracing.demo.js.map
