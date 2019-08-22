goog.provide('com.wsscode.pathom.book.tracing.demo');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.trace');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
com.wsscode.pathom.book.tracing.demo.slow_root = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",2143883753,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226)], null)], null),(function com$wsscode$pathom$book$tracing$demo$slow_root(env,_){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__){
return (function (state_54062){
var state_val_54063 = (state_54062[(1)]);
if((state_val_54063 === (7))){
var inst_54050 = (state_54062[(2)]);
var inst_54052 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226)];
var inst_54054 = ["foo"];
var inst_54055 = cljs.core.PersistentHashMap.fromArrays(inst_54052,inst_54054);
var state_54062__$1 = (function (){var statearr_54075 = state_54062;
(statearr_54075[(7)] = inst_54050);

return statearr_54075;
})();
var statearr_54077_54320 = state_54062__$1;
(statearr_54077_54320[(2)] = inst_54055);


cljs.core.async.impl.ioc_helpers.process_exception(state_54062__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54063 === (1))){
var state_54062__$1 = state_54062;
var statearr_54078_54321 = state_54062__$1;
(statearr_54078_54321[(2)] = null);

(statearr_54078_54321[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54063 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_54062,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_54020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_54062__$1 = state_54062;
if(cljs.core.truth_(inst_54020)){
var statearr_54081_54323 = state_54062__$1;
(statearr_54081_54323[(1)] = (5));

} else {
var statearr_54082_54324 = state_54062__$1;
(statearr_54082_54324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54063 === (6))){
var inst_54045 = cljs.core.async.timeout((200));
var state_54062__$1 = state_54062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54062__$1,(9),inst_54045);
} else {
if((state_val_54063 === (3))){
var inst_54015 = (state_54062[(2)]);
var state_54062__$1 = state_54062;
var statearr_54084_54326 = state_54062__$1;
(statearr_54084_54326[(2)] = inst_54015);


cljs.core.async.impl.ioc_helpers.process_exception(state_54062__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54063 === (2))){
var inst_54057 = (state_54062[(2)]);
var state_54062__$1 = state_54062;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54062__$1,inst_54057);
} else {
if((state_val_54063 === (9))){
var inst_54047 = (state_54062[(2)]);
var inst_54048 = com.wsscode.common.async_cljs.throw_err(inst_54047);
var state_54062__$1 = state_54062;
var statearr_54086_54328 = state_54062__$1;
(statearr_54086_54328[(2)] = inst_54048);

(statearr_54086_54328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54063 === (5))){
var inst_54024 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_54025 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_54026 = ["rgba(255, 255, 0, 0.5)"];
var inst_54027 = cljs.core.PersistentHashMap.fromArrays(inst_54025,inst_54026);
var inst_54028 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_54027];
var inst_54029 = cljs.core.PersistentHashMap.fromArrays(inst_54024,inst_54028);
var inst_54030 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_54029);
var inst_54031 = cljs.core.async.timeout((200));
var state_54062__$1 = (function (){var statearr_54089 = state_54062;
(statearr_54089[(8)] = inst_54030);

return statearr_54089;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54062__$1,(8),inst_54031);
} else {
if((state_val_54063 === (8))){
var inst_54030 = (state_54062[(8)]);
var inst_54033 = (state_54062[(2)]);
var inst_54034 = com.wsscode.common.async_cljs.throw_err(inst_54033);
var inst_54035 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_54037 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_54038 = ["rgba(255, 255, 0, 0.5)"];
var inst_54039 = cljs.core.PersistentHashMap.fromArrays(inst_54037,inst_54038);
var inst_54040 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_54039];
var inst_54041 = cljs.core.PersistentHashMap.fromArrays(inst_54035,inst_54040);
var inst_54042 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_54030,inst_54041);
var state_54062__$1 = (function (){var statearr_54093 = state_54062;
(statearr_54093[(9)] = inst_54042);

return statearr_54093;
})();
var statearr_54094_54332 = state_54062__$1;
(statearr_54094_54332[(2)] = inst_54034);

(statearr_54094_54332[(1)] = (7));


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
});})(c__39003__auto__))
;
return ((function (switch__38929__auto__,c__39003__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38930__auto____0 = (function (){
var statearr_54095 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54095[(0)] = com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38930__auto__);

(statearr_54095[(1)] = (1));

return statearr_54095;
});
var com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38930__auto____1 = (function (state_54062){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_54062);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e54097){if((e54097 instanceof Object)){
var ex__38933__auto__ = e54097;
var statearr_54102_54334 = state_54062;
(statearr_54102_54334[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54097;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54335 = state_54062;
state_54062 = G__54335;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38930__auto__ = function(state_54062){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38930__auto____1.call(this,state_54062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38930__auto____0;
com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38930__auto____1;
return com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__))
})();
var state__39005__auto__ = (function (){var statearr_54107 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_54107[(6)] = c__39003__auto__);

return statearr_54107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__))
);

return c__39003__auto__;
}));
com.wsscode.pathom.book.tracing.demo.slow_root_dep = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo","slow-root-dep","com.wsscode.pathom.book.tracing.demo/slow-root-dep",825026476,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","root-dep","com.wsscode.pathom.book.tracing.demo/root-dep",-1519602177)], null)], null),(function com$wsscode$pathom$book$tracing$demo$slow_root_dep(env,_){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__){
return (function (state_54174){
var state_val_54175 = (state_54174[(1)]);
if((state_val_54175 === (7))){
var inst_54167 = (state_54174[(2)]);
var inst_54168 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","root-dep","com.wsscode.pathom.book.tracing.demo/root-dep",-1519602177)];
var inst_54169 = ["nah"];
var inst_54170 = cljs.core.PersistentHashMap.fromArrays(inst_54168,inst_54169);
var state_54174__$1 = (function (){var statearr_54179 = state_54174;
(statearr_54179[(7)] = inst_54167);

return statearr_54179;
})();
var statearr_54180_54343 = state_54174__$1;
(statearr_54180_54343[(2)] = inst_54170);


cljs.core.async.impl.ioc_helpers.process_exception(state_54174__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (1))){
var state_54174__$1 = state_54174;
var statearr_54183_54344 = state_54174__$1;
(statearr_54183_54344[(2)] = null);

(statearr_54183_54344[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_54174,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_54146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_54174__$1 = state_54174;
if(cljs.core.truth_(inst_54146)){
var statearr_54185_54346 = state_54174__$1;
(statearr_54185_54346[(1)] = (5));

} else {
var statearr_54186_54347 = state_54174__$1;
(statearr_54186_54347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (6))){
var inst_54161 = cljs.core.async.timeout((200));
var state_54174__$1 = state_54174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54174__$1,(9),inst_54161);
} else {
if((state_val_54175 === (3))){
var inst_54142 = (state_54174[(2)]);
var state_54174__$1 = state_54174;
var statearr_54189_54350 = state_54174__$1;
(statearr_54189_54350[(2)] = inst_54142);


cljs.core.async.impl.ioc_helpers.process_exception(state_54174__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (2))){
var inst_54172 = (state_54174[(2)]);
var state_54174__$1 = state_54174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54174__$1,inst_54172);
} else {
if((state_val_54175 === (9))){
var inst_54164 = (state_54174[(2)]);
var inst_54165 = com.wsscode.common.async_cljs.throw_err(inst_54164);
var state_54174__$1 = state_54174;
var statearr_54195_54353 = state_54174__$1;
(statearr_54195_54353[(2)] = inst_54165);

(statearr_54195_54353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (5))){
var inst_54148 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_54149 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472)];
var inst_54150 = cljs.core.PersistentHashMap.fromArrays(inst_54148,inst_54149);
var inst_54151 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_54150);
var inst_54152 = cljs.core.async.timeout((200));
var state_54174__$1 = (function (){var statearr_54197 = state_54174;
(statearr_54197[(8)] = inst_54151);

return statearr_54197;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54174__$1,(8),inst_54152);
} else {
if((state_val_54175 === (8))){
var inst_54151 = (state_54174[(8)]);
var inst_54154 = (state_54174[(2)]);
var inst_54155 = com.wsscode.common.async_cljs.throw_err(inst_54154);
var inst_54156 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_54157 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472)];
var inst_54158 = cljs.core.PersistentHashMap.fromArrays(inst_54156,inst_54157);
var inst_54159 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_54151,inst_54158);
var state_54174__$1 = (function (){var statearr_54199 = state_54174;
(statearr_54199[(9)] = inst_54159);

return statearr_54199;
})();
var statearr_54200_54358 = state_54174__$1;
(statearr_54200_54358[(2)] = inst_54155);

(statearr_54200_54358[(1)] = (7));


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
});})(c__39003__auto__))
;
return ((function (switch__38929__auto__,c__39003__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38930__auto____0 = (function (){
var statearr_54201 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54201[(0)] = com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38930__auto__);

(statearr_54201[(1)] = (1));

return statearr_54201;
});
var com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38930__auto____1 = (function (state_54174){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_54174);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e54202){if((e54202 instanceof Object)){
var ex__38933__auto__ = e54202;
var statearr_54207_54364 = state_54174;
(statearr_54207_54364[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54202;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54368 = state_54174;
state_54174 = G__54368;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38930__auto__ = function(state_54174){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38930__auto____1.call(this,state_54174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38930__auto____0;
com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38930__auto____1;
return com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__))
})();
var state__39005__auto__ = (function (){var statearr_54208 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_54208[(6)] = c__39003__auto__);

return statearr_54208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__))
);

return c__39003__auto__;
}));
com.wsscode.pathom.book.tracing.demo.error_root_dep = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo","error-root-dep","com.wsscode.pathom.book.tracing.demo/error-root-dep",-482974288,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","root-dep-err","com.wsscode.pathom.book.tracing.demo/root-dep-err",-229360029)], null)], null),(function com$wsscode$pathom$book$tracing$demo$error_root_dep(env,_){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__){
return (function (state_54260){
var state_val_54261 = (state_54260[(1)]);
if((state_val_54261 === (7))){
var inst_54253 = (state_54260[(2)]);
var inst_54254 = cljs.core.PersistentHashMap.EMPTY;
var inst_54255 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Meh",inst_54254);
var inst_54256 = (function(){throw inst_54255})();
var state_54260__$1 = (function (){var statearr_54264 = state_54260;
(statearr_54264[(7)] = inst_54253);

return statearr_54264;
})();
var statearr_54265_54383 = state_54260__$1;
(statearr_54265_54383[(2)] = inst_54256);


cljs.core.async.impl.ioc_helpers.process_exception(state_54260__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54261 === (1))){
var state_54260__$1 = state_54260;
var statearr_54268_54384 = state_54260__$1;
(statearr_54268_54384[(2)] = null);

(statearr_54268_54384[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54261 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_54260,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_54226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_54260__$1 = state_54260;
if(cljs.core.truth_(inst_54226)){
var statearr_54271_54397 = state_54260__$1;
(statearr_54271_54397[(1)] = (5));

} else {
var statearr_54272_54398 = state_54260__$1;
(statearr_54272_54398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54261 === (6))){
var inst_54248 = cljs.core.async.timeout((200));
var state_54260__$1 = state_54260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54260__$1,(9),inst_54248);
} else {
if((state_val_54261 === (3))){
var inst_54221 = (state_54260[(2)]);
var state_54260__$1 = state_54260;
var statearr_54274_54402 = state_54260__$1;
(statearr_54274_54402[(2)] = inst_54221);


cljs.core.async.impl.ioc_helpers.process_exception(state_54260__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54261 === (2))){
var inst_54258 = (state_54260[(2)]);
var state_54260__$1 = state_54260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54260__$1,inst_54258);
} else {
if((state_val_54261 === (9))){
var inst_54250 = (state_54260[(2)]);
var inst_54251 = com.wsscode.common.async_cljs.throw_err(inst_54250);
var state_54260__$1 = state_54260;
var statearr_54276_54407 = state_54260__$1;
(statearr_54276_54407[(2)] = inst_54251);

(statearr_54276_54407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54261 === (5))){
var inst_54228 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","data","com.wsscode.pathom.book.tracing.demo/data",-654660801)];
var inst_54229 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_54230 = ["rgba(255, 0, 0, 0.5)"];
var inst_54231 = cljs.core.PersistentHashMap.fromArrays(inst_54229,inst_54230);
var inst_54232 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_54231,"Error message"];
var inst_54233 = cljs.core.PersistentHashMap.fromArrays(inst_54228,inst_54232);
var inst_54234 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_54233);
var inst_54235 = cljs.core.async.timeout((200));
var state_54260__$1 = (function (){var statearr_54281 = state_54260;
(statearr_54281[(8)] = inst_54234);

return statearr_54281;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54260__$1,(8),inst_54235);
} else {
if((state_val_54261 === (8))){
var inst_54234 = (state_54260[(8)]);
var inst_54237 = (state_54260[(2)]);
var inst_54238 = com.wsscode.common.async_cljs.throw_err(inst_54237);
var inst_54239 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","data","com.wsscode.pathom.book.tracing.demo/data",-654660801)];
var inst_54241 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_54242 = ["rgba(255, 0, 0, 0.5)"];
var inst_54243 = cljs.core.PersistentHashMap.fromArrays(inst_54241,inst_54242);
var inst_54244 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_54243,"Error message"];
var inst_54245 = cljs.core.PersistentHashMap.fromArrays(inst_54239,inst_54244);
var inst_54246 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_54234,inst_54245);
var state_54260__$1 = (function (){var statearr_54299 = state_54260;
(statearr_54299[(9)] = inst_54246);

return statearr_54299;
})();
var statearr_54300_54421 = state_54260__$1;
(statearr_54300_54421[(2)] = inst_54238);

(statearr_54300_54421[(1)] = (7));


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
});})(c__39003__auto__))
;
return ((function (switch__38929__auto__,c__39003__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38930__auto____0 = (function (){
var statearr_54303 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54303[(0)] = com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38930__auto__);

(statearr_54303[(1)] = (1));

return statearr_54303;
});
var com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38930__auto____1 = (function (state_54260){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_54260);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e54306){if((e54306 instanceof Object)){
var ex__38933__auto__ = e54306;
var statearr_54308_54423 = state_54260;
(statearr_54308_54423[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54306;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54429 = state_54260;
state_54260 = G__54429;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38930__auto__ = function(state_54260){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38930__auto____1.call(this,state_54260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38930__auto____0;
com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38930__auto____1;
return com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__))
})();
var state__39005__auto__ = (function (){var statearr_54310 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_54310[(6)] = c__39003__auto__);

return statearr_54310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__))
);

return c__39003__auto__;
}));
com.wsscode.pathom.book.tracing.demo.app_registry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.tracing.demo.slow_root,com.wsscode.pathom.book.tracing.demo.slow_root_dep,com.wsscode.pathom.book.tracing.demo.error_root_dep], null);
com.wsscode.pathom.trace.trace_tree_collect.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),(function (x,row){
return com.wsscode.pathom.trace.tree_assoc_detail(row,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","data","com.wsscode.pathom.book.tracing.demo/data",-654660801)], null));
}));
com.wsscode.pathom.book.tracing.demo.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.tracing.demo.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));
var G__54315_54442 = cljs.core.PersistentArrayMap.EMPTY;
var G__54316_54443 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)], null);
(com.wsscode.pathom.book.tracing.demo.parser.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.book.tracing.demo.parser.cljs$core$IFn$_invoke$arity$2(G__54315_54442,G__54316_54443) : com.wsscode.pathom.book.tracing.demo.parser.call(null,G__54315_54442,G__54316_54443));

//# sourceMappingURL=com.wsscode.pathom.book.tracing.demo.js.map
