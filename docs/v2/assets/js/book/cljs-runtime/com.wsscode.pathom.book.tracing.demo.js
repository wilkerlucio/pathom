goog.provide('com.wsscode.pathom.book.tracing.demo');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.trace');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
com.wsscode.pathom.book.tracing.demo.slow_root = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",2143883753,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226)], null)], null),(function com$wsscode$pathom$book$tracing$demo$slow_root(env,_){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__){
return (function (state_53888){
var state_val_53889 = (state_53888[(1)]);
if((state_val_53889 === (7))){
var inst_53866 = (state_53888[(2)]);
var inst_53871 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226)];
var inst_53875 = ["foo"];
var inst_53876 = cljs.core.PersistentHashMap.fromArrays(inst_53871,inst_53875);
var state_53888__$1 = (function (){var statearr_53896 = state_53888;
(statearr_53896[(7)] = inst_53866);

return statearr_53896;
})();
var statearr_53899_54225 = state_53888__$1;
(statearr_53899_54225[(2)] = inst_53876);


cljs.core.async.impl.ioc_helpers.process_exception(state_53888__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53889 === (1))){
var state_53888__$1 = state_53888;
var statearr_53912_54240 = state_53888__$1;
(statearr_53912_54240[(2)] = null);

(statearr_53912_54240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53889 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53888,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_53834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_53888__$1 = state_53888;
if(cljs.core.truth_(inst_53834)){
var statearr_53918_54242 = state_53888__$1;
(statearr_53918_54242[(1)] = (5));

} else {
var statearr_53919_54243 = state_53888__$1;
(statearr_53919_54243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53889 === (6))){
var inst_53861 = cljs.core.async.timeout((200));
var state_53888__$1 = state_53888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53888__$1,(9),inst_53861);
} else {
if((state_val_53889 === (3))){
var inst_53830 = (state_53888[(2)]);
var state_53888__$1 = state_53888;
var statearr_53926_54251 = state_53888__$1;
(statearr_53926_54251[(2)] = inst_53830);


cljs.core.async.impl.ioc_helpers.process_exception(state_53888__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53889 === (2))){
var inst_53879 = (state_53888[(2)]);
var state_53888__$1 = state_53888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53888__$1,inst_53879);
} else {
if((state_val_53889 === (9))){
var inst_53863 = (state_53888[(2)]);
var inst_53864 = com.wsscode.common.async_cljs.throw_err(inst_53863);
var state_53888__$1 = state_53888;
var statearr_53946_54253 = state_53888__$1;
(statearr_53946_54253[(2)] = inst_53864);

(statearr_53946_54253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53889 === (5))){
var inst_53838 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_53839 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_53840 = ["rgba(255, 255, 0, 0.5)"];
var inst_53841 = cljs.core.PersistentHashMap.fromArrays(inst_53839,inst_53840);
var inst_53842 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_53841];
var inst_53843 = cljs.core.PersistentHashMap.fromArrays(inst_53838,inst_53842);
var inst_53844 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_53843);
var inst_53845 = cljs.core.async.timeout((200));
var state_53888__$1 = (function (){var statearr_53960 = state_53888;
(statearr_53960[(8)] = inst_53844);

return statearr_53960;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53888__$1,(8),inst_53845);
} else {
if((state_val_53889 === (8))){
var inst_53844 = (state_53888[(8)]);
var inst_53847 = (state_53888[(2)]);
var inst_53848 = com.wsscode.common.async_cljs.throw_err(inst_53847);
var inst_53850 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_53854 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_53855 = ["rgba(255, 255, 0, 0.5)"];
var inst_53856 = cljs.core.PersistentHashMap.fromArrays(inst_53854,inst_53855);
var inst_53857 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_53856];
var inst_53858 = cljs.core.PersistentHashMap.fromArrays(inst_53850,inst_53857);
var inst_53859 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_53844,inst_53858);
var state_53888__$1 = (function (){var statearr_53967 = state_53888;
(statearr_53967[(9)] = inst_53859);

return statearr_53967;
})();
var statearr_53968_54261 = state_53888__$1;
(statearr_53968_54261[(2)] = inst_53848);

(statearr_53968_54261[(1)] = (7));


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
});})(c__39084__auto__))
;
return ((function (switch__38786__auto__,c__39084__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38787__auto____0 = (function (){
var statearr_53971 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53971[(0)] = com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38787__auto__);

(statearr_53971[(1)] = (1));

return statearr_53971;
});
var com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38787__auto____1 = (function (state_53888){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_53888);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e53976){if((e53976 instanceof Object)){
var ex__38790__auto__ = e53976;
var statearr_53978_54265 = state_53888;
(statearr_53978_54265[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53976;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54268 = state_53888;
state_53888 = G__54268;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38787__auto__ = function(state_53888){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38787__auto____1.call(this,state_53888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38787__auto____0;
com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38787__auto____1;
return com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__))
})();
var state__39086__auto__ = (function (){var statearr_53997 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_53997[(6)] = c__39084__auto__);

return statearr_53997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__))
);

return c__39084__auto__;
}));
com.wsscode.pathom.book.tracing.demo.slow_root_dep = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo","slow-root-dep","com.wsscode.pathom.book.tracing.demo/slow-root-dep",825026476,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","root-dep","com.wsscode.pathom.book.tracing.demo/root-dep",-1519602177)], null)], null),(function com$wsscode$pathom$book$tracing$demo$slow_root_dep(env,_){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__){
return (function (state_54035){
var state_val_54036 = (state_54035[(1)]);
if((state_val_54036 === (7))){
var inst_54027 = (state_54035[(2)]);
var inst_54028 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","root-dep","com.wsscode.pathom.book.tracing.demo/root-dep",-1519602177)];
var inst_54029 = ["nah"];
var inst_54030 = cljs.core.PersistentHashMap.fromArrays(inst_54028,inst_54029);
var state_54035__$1 = (function (){var statearr_54044 = state_54035;
(statearr_54044[(7)] = inst_54027);

return statearr_54044;
})();
var statearr_54049_54278 = state_54035__$1;
(statearr_54049_54278[(2)] = inst_54030);


cljs.core.async.impl.ioc_helpers.process_exception(state_54035__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54036 === (1))){
var state_54035__$1 = state_54035;
var statearr_54050_54279 = state_54035__$1;
(statearr_54050_54279[(2)] = null);

(statearr_54050_54279[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54036 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_54035,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_54005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_54035__$1 = state_54035;
if(cljs.core.truth_(inst_54005)){
var statearr_54053_54281 = state_54035__$1;
(statearr_54053_54281[(1)] = (5));

} else {
var statearr_54055_54282 = state_54035__$1;
(statearr_54055_54282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54036 === (6))){
var inst_54021 = cljs.core.async.timeout((200));
var state_54035__$1 = state_54035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54035__$1,(9),inst_54021);
} else {
if((state_val_54036 === (3))){
var inst_54001 = (state_54035[(2)]);
var state_54035__$1 = state_54035;
var statearr_54058_54284 = state_54035__$1;
(statearr_54058_54284[(2)] = inst_54001);


cljs.core.async.impl.ioc_helpers.process_exception(state_54035__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54036 === (2))){
var inst_54032 = (state_54035[(2)]);
var state_54035__$1 = state_54035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54035__$1,inst_54032);
} else {
if((state_val_54036 === (9))){
var inst_54023 = (state_54035[(2)]);
var inst_54024 = com.wsscode.common.async_cljs.throw_err(inst_54023);
var state_54035__$1 = state_54035;
var statearr_54061_54287 = state_54035__$1;
(statearr_54061_54287[(2)] = inst_54024);

(statearr_54061_54287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54036 === (5))){
var inst_54008 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_54009 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472)];
var inst_54010 = cljs.core.PersistentHashMap.fromArrays(inst_54008,inst_54009);
var inst_54011 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_54010);
var inst_54012 = cljs.core.async.timeout((200));
var state_54035__$1 = (function (){var statearr_54071 = state_54035;
(statearr_54071[(8)] = inst_54011);

return statearr_54071;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54035__$1,(8),inst_54012);
} else {
if((state_val_54036 === (8))){
var inst_54011 = (state_54035[(8)]);
var inst_54014 = (state_54035[(2)]);
var inst_54015 = com.wsscode.common.async_cljs.throw_err(inst_54014);
var inst_54016 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_54017 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472)];
var inst_54018 = cljs.core.PersistentHashMap.fromArrays(inst_54016,inst_54017);
var inst_54019 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_54011,inst_54018);
var state_54035__$1 = (function (){var statearr_54074 = state_54035;
(statearr_54074[(9)] = inst_54019);

return statearr_54074;
})();
var statearr_54079_54296 = state_54035__$1;
(statearr_54079_54296[(2)] = inst_54015);

(statearr_54079_54296[(1)] = (7));


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
});})(c__39084__auto__))
;
return ((function (switch__38786__auto__,c__39084__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38787__auto____0 = (function (){
var statearr_54090 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54090[(0)] = com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38787__auto__);

(statearr_54090[(1)] = (1));

return statearr_54090;
});
var com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38787__auto____1 = (function (state_54035){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_54035);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e54091){if((e54091 instanceof Object)){
var ex__38790__auto__ = e54091;
var statearr_54093_54302 = state_54035;
(statearr_54093_54302[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54091;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54307 = state_54035;
state_54035 = G__54307;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38787__auto__ = function(state_54035){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38787__auto____1.call(this,state_54035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38787__auto____0;
com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38787__auto____1;
return com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__))
})();
var state__39086__auto__ = (function (){var statearr_54098 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_54098[(6)] = c__39084__auto__);

return statearr_54098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__))
);

return c__39084__auto__;
}));
com.wsscode.pathom.book.tracing.demo.error_root_dep = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo","error-root-dep","com.wsscode.pathom.book.tracing.demo/error-root-dep",-482974288,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","root-dep-err","com.wsscode.pathom.book.tracing.demo/root-dep-err",-229360029)], null)], null),(function com$wsscode$pathom$book$tracing$demo$error_root_dep(env,_){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__){
return (function (state_54147){
var state_val_54149 = (state_54147[(1)]);
if((state_val_54149 === (7))){
var inst_54140 = (state_54147[(2)]);
var inst_54141 = cljs.core.PersistentHashMap.EMPTY;
var inst_54142 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Meh",inst_54141);
var inst_54143 = (function(){throw inst_54142})();
var state_54147__$1 = (function (){var statearr_54160 = state_54147;
(statearr_54160[(7)] = inst_54140);

return statearr_54160;
})();
var statearr_54161_54321 = state_54147__$1;
(statearr_54161_54321[(2)] = inst_54143);


cljs.core.async.impl.ioc_helpers.process_exception(state_54147__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54149 === (1))){
var state_54147__$1 = state_54147;
var statearr_54164_54324 = state_54147__$1;
(statearr_54164_54324[(2)] = null);

(statearr_54164_54324[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54149 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_54147,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_54109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_54147__$1 = state_54147;
if(cljs.core.truth_(inst_54109)){
var statearr_54167_54329 = state_54147__$1;
(statearr_54167_54329[(1)] = (5));

} else {
var statearr_54171_54330 = state_54147__$1;
(statearr_54171_54330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54149 === (6))){
var inst_54134 = cljs.core.async.timeout((200));
var state_54147__$1 = state_54147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54147__$1,(9),inst_54134);
} else {
if((state_val_54149 === (3))){
var inst_54105 = (state_54147[(2)]);
var state_54147__$1 = state_54147;
var statearr_54177_54331 = state_54147__$1;
(statearr_54177_54331[(2)] = inst_54105);


cljs.core.async.impl.ioc_helpers.process_exception(state_54147__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54149 === (2))){
var inst_54145 = (state_54147[(2)]);
var state_54147__$1 = state_54147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54147__$1,inst_54145);
} else {
if((state_val_54149 === (9))){
var inst_54136 = (state_54147[(2)]);
var inst_54137 = com.wsscode.common.async_cljs.throw_err(inst_54136);
var state_54147__$1 = state_54147;
var statearr_54180_54333 = state_54147__$1;
(statearr_54180_54333[(2)] = inst_54137);

(statearr_54180_54333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54149 === (5))){
var inst_54114 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","data","com.wsscode.pathom.book.tracing.demo/data",-654660801)];
var inst_54115 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_54116 = ["rgba(255, 0, 0, 0.5)"];
var inst_54117 = cljs.core.PersistentHashMap.fromArrays(inst_54115,inst_54116);
var inst_54118 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_54117,"Error message"];
var inst_54119 = cljs.core.PersistentHashMap.fromArrays(inst_54114,inst_54118);
var inst_54120 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_54119);
var inst_54122 = cljs.core.async.timeout((200));
var state_54147__$1 = (function (){var statearr_54187 = state_54147;
(statearr_54187[(8)] = inst_54120);

return statearr_54187;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54147__$1,(8),inst_54122);
} else {
if((state_val_54149 === (8))){
var inst_54120 = (state_54147[(8)]);
var inst_54124 = (state_54147[(2)]);
var inst_54125 = com.wsscode.common.async_cljs.throw_err(inst_54124);
var inst_54126 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","data","com.wsscode.pathom.book.tracing.demo/data",-654660801)];
var inst_54127 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_54128 = ["rgba(255, 0, 0, 0.5)"];
var inst_54129 = cljs.core.PersistentHashMap.fromArrays(inst_54127,inst_54128);
var inst_54130 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_54129,"Error message"];
var inst_54131 = cljs.core.PersistentHashMap.fromArrays(inst_54126,inst_54130);
var inst_54132 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_54120,inst_54131);
var state_54147__$1 = (function (){var statearr_54191 = state_54147;
(statearr_54191[(9)] = inst_54132);

return statearr_54191;
})();
var statearr_54193_54339 = state_54147__$1;
(statearr_54193_54339[(2)] = inst_54125);

(statearr_54193_54339[(1)] = (7));


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
});})(c__39084__auto__))
;
return ((function (switch__38786__auto__,c__39084__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38787__auto____0 = (function (){
var statearr_54196 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54196[(0)] = com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38787__auto__);

(statearr_54196[(1)] = (1));

return statearr_54196;
});
var com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38787__auto____1 = (function (state_54147){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_54147);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e54197){if((e54197 instanceof Object)){
var ex__38790__auto__ = e54197;
var statearr_54198_54340 = state_54147;
(statearr_54198_54340[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54197;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54341 = state_54147;
state_54147 = G__54341;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38787__auto__ = function(state_54147){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38787__auto____1.call(this,state_54147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38787__auto____0;
com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38787__auto____1;
return com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__))
})();
var state__39086__auto__ = (function (){var statearr_54203 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_54203[(6)] = c__39084__auto__);

return statearr_54203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__))
);

return c__39084__auto__;
}));
com.wsscode.pathom.book.tracing.demo.app_registry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.tracing.demo.slow_root,com.wsscode.pathom.book.tracing.demo.slow_root_dep,com.wsscode.pathom.book.tracing.demo.error_root_dep], null);
com.wsscode.pathom.trace.trace_tree_collect.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),(function (x,row){
return com.wsscode.pathom.trace.tree_assoc_detail(row,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","data","com.wsscode.pathom.book.tracing.demo/data",-654660801)], null));
}));
com.wsscode.pathom.book.tracing.demo.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.tracing.demo.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));
var G__54212_54353 = cljs.core.PersistentArrayMap.EMPTY;
var G__54213_54354 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)], null);
(com.wsscode.pathom.book.tracing.demo.parser.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.book.tracing.demo.parser.cljs$core$IFn$_invoke$arity$2(G__54212_54353,G__54213_54354) : com.wsscode.pathom.book.tracing.demo.parser.call(null,G__54212_54353,G__54213_54354));

//# sourceMappingURL=com.wsscode.pathom.book.tracing.demo.js.map
