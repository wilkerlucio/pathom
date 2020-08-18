goog.provide('com.wsscode.pathom.book.tracing.demo');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.trace');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
com.wsscode.pathom.book.tracing.demo.slow_root = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",2143883753,null),(function (){var G__93851 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226)], null)], null);
return G__93851;

})(),(function com$wsscode$pathom$book$tracing$demo$slow_root(env,_){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_93903){
var state_val_93904 = (state_93903[(1)]);
if((state_val_93904 === (7))){
var inst_93896 = (state_93903[(2)]);
var inst_93897 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226)];
var inst_93898 = ["foo"];
var inst_93899 = cljs.core.PersistentHashMap.fromArrays(inst_93897,inst_93898);
var state_93903__$1 = (function (){var statearr_93908 = state_93903;
(statearr_93908[(7)] = inst_93896);

return statearr_93908;
})();
var statearr_93909_94162 = state_93903__$1;
(statearr_93909_94162[(2)] = inst_93899);


cljs.core.async.impl.ioc_helpers.process_exception(state_93903__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93904 === (1))){
var state_93903__$1 = state_93903;
var statearr_93910_94170 = state_93903__$1;
(statearr_93910_94170[(2)] = null);

(statearr_93910_94170[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93904 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_93903,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_93861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_93903__$1 = state_93903;
if(cljs.core.truth_(inst_93861)){
var statearr_93913_94171 = state_93903__$1;
(statearr_93913_94171[(1)] = (5));

} else {
var statearr_93915_94172 = state_93903__$1;
(statearr_93915_94172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93904 === (6))){
var inst_93891 = cljs.core.async.timeout((200));
var state_93903__$1 = state_93903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93903__$1,(9),inst_93891);
} else {
if((state_val_93904 === (3))){
var inst_93856 = (state_93903[(2)]);
var state_93903__$1 = state_93903;
var statearr_93920_94175 = state_93903__$1;
(statearr_93920_94175[(2)] = inst_93856);


cljs.core.async.impl.ioc_helpers.process_exception(state_93903__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93904 === (2))){
var inst_93901 = (state_93903[(2)]);
var state_93903__$1 = state_93903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_93903__$1,inst_93901);
} else {
if((state_val_93904 === (9))){
var inst_93893 = (state_93903[(2)]);
var inst_93894 = com.wsscode.common.async_cljs.throw_err(inst_93893);
var state_93903__$1 = state_93903;
var statearr_93938_94180 = state_93903__$1;
(statearr_93938_94180[(2)] = inst_93894);

(statearr_93938_94180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93904 === (5))){
var inst_93865 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_93870 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_93873 = ["rgba(255, 255, 0, 0.5)"];
var inst_93874 = cljs.core.PersistentHashMap.fromArrays(inst_93870,inst_93873);
var inst_93875 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_93874];
var inst_93876 = cljs.core.PersistentHashMap.fromArrays(inst_93865,inst_93875);
var inst_93877 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_93876);
var inst_93878 = cljs.core.async.timeout((200));
var state_93903__$1 = (function (){var statearr_93942 = state_93903;
(statearr_93942[(8)] = inst_93877);

return statearr_93942;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93903__$1,(8),inst_93878);
} else {
if((state_val_93904 === (8))){
var inst_93877 = (state_93903[(8)]);
var inst_93880 = (state_93903[(2)]);
var inst_93881 = com.wsscode.common.async_cljs.throw_err(inst_93880);
var inst_93882 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_93883 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_93884 = ["rgba(255, 255, 0, 0.5)"];
var inst_93885 = cljs.core.PersistentHashMap.fromArrays(inst_93883,inst_93884);
var inst_93886 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_93885];
var inst_93887 = cljs.core.PersistentHashMap.fromArrays(inst_93882,inst_93886);
var inst_93888 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_93877,inst_93887);
var state_93903__$1 = (function (){var statearr_93947 = state_93903;
(statearr_93947[(9)] = inst_93888);

return statearr_93947;
})();
var statearr_93955_94186 = state_93903__$1;
(statearr_93955_94186[(2)] = inst_93881);

(statearr_93955_94186[(1)] = (7));


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
var statearr_93959 = [null,null,null,null,null,null,null,null,null,null];
(statearr_93959[(0)] = com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto__);

(statearr_93959[(1)] = (1));

return statearr_93959;
});
var com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto____1 = (function (state_93903){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_93903);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e93961){if((e93961 instanceof Object)){
var ex__47667__auto__ = e93961;
var statearr_93962_94192 = state_93903;
(statearr_93962_94192[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_93903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93961;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94194 = state_93903;
state_93903 = G__94194;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto__ = function(state_93903){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto____1.call(this,state_93903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_93979 = f__47947__auto__();
(statearr_93979[(6)] = c__47946__auto__);

return statearr_93979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.tracing.demo.slow_root_dep = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo","slow-root-dep","com.wsscode.pathom.book.tracing.demo/slow-root-dep",825026476,null),(function (){var G__93982 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","root-dep","com.wsscode.pathom.book.tracing.demo/root-dep",-1519602177)], null)], null);
return G__93982;

})(),(function com$wsscode$pathom$book$tracing$demo$slow_root_dep(env,_){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_94018){
var state_val_94019 = (state_94018[(1)]);
if((state_val_94019 === (7))){
var inst_94010 = (state_94018[(2)]);
var inst_94011 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","root-dep","com.wsscode.pathom.book.tracing.demo/root-dep",-1519602177)];
var inst_94012 = ["nah"];
var inst_94013 = cljs.core.PersistentHashMap.fromArrays(inst_94011,inst_94012);
var state_94018__$1 = (function (){var statearr_94024 = state_94018;
(statearr_94024[(7)] = inst_94010);

return statearr_94024;
})();
var statearr_94026_94196 = state_94018__$1;
(statearr_94026_94196[(2)] = inst_94013);


cljs.core.async.impl.ioc_helpers.process_exception(state_94018__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94019 === (1))){
var state_94018__$1 = state_94018;
var statearr_94027_94197 = state_94018__$1;
(statearr_94027_94197[(2)] = null);

(statearr_94027_94197[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94019 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_94018,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_93989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_94018__$1 = state_94018;
if(cljs.core.truth_(inst_93989)){
var statearr_94029_94198 = state_94018__$1;
(statearr_94029_94198[(1)] = (5));

} else {
var statearr_94030_94199 = state_94018__$1;
(statearr_94030_94199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94019 === (6))){
var inst_94005 = cljs.core.async.timeout((200));
var state_94018__$1 = state_94018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_94018__$1,(9),inst_94005);
} else {
if((state_val_94019 === (3))){
var inst_93985 = (state_94018[(2)]);
var state_94018__$1 = state_94018;
var statearr_94033_94200 = state_94018__$1;
(statearr_94033_94200[(2)] = inst_93985);


cljs.core.async.impl.ioc_helpers.process_exception(state_94018__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94019 === (2))){
var inst_94015 = (state_94018[(2)]);
var state_94018__$1 = state_94018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_94018__$1,inst_94015);
} else {
if((state_val_94019 === (9))){
var inst_94007 = (state_94018[(2)]);
var inst_94008 = com.wsscode.common.async_cljs.throw_err(inst_94007);
var state_94018__$1 = state_94018;
var statearr_94035_94201 = state_94018__$1;
(statearr_94035_94201[(2)] = inst_94008);

(statearr_94035_94201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94019 === (5))){
var inst_93992 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_93993 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472)];
var inst_93994 = cljs.core.PersistentHashMap.fromArrays(inst_93992,inst_93993);
var inst_93995 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_93994);
var inst_93996 = cljs.core.async.timeout((200));
var state_94018__$1 = (function (){var statearr_94055 = state_94018;
(statearr_94055[(8)] = inst_93995);

return statearr_94055;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_94018__$1,(8),inst_93996);
} else {
if((state_val_94019 === (8))){
var inst_93995 = (state_94018[(8)]);
var inst_93998 = (state_94018[(2)]);
var inst_93999 = com.wsscode.common.async_cljs.throw_err(inst_93998);
var inst_94000 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_94001 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472)];
var inst_94002 = cljs.core.PersistentHashMap.fromArrays(inst_94000,inst_94001);
var inst_94003 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_93995,inst_94002);
var state_94018__$1 = (function (){var statearr_94063 = state_94018;
(statearr_94063[(9)] = inst_94003);

return statearr_94063;
})();
var statearr_94064_94203 = state_94018__$1;
(statearr_94064_94203[(2)] = inst_93999);

(statearr_94064_94203[(1)] = (7));


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
var statearr_94067 = [null,null,null,null,null,null,null,null,null,null];
(statearr_94067[(0)] = com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto__);

(statearr_94067[(1)] = (1));

return statearr_94067;
});
var com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto____1 = (function (state_94018){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_94018);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e94069){if((e94069 instanceof Object)){
var ex__47667__auto__ = e94069;
var statearr_94073_94208 = state_94018;
(statearr_94073_94208[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_94018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e94069;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94209 = state_94018;
state_94018 = G__94209;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto__ = function(state_94018){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto____1.call(this,state_94018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_94074 = f__47947__auto__();
(statearr_94074[(6)] = c__47946__auto__);

return statearr_94074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.tracing.demo.error_root_dep = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo","error-root-dep","com.wsscode.pathom.book.tracing.demo/error-root-dep",-482974288,null),(function (){var G__94077 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","root-dep-err","com.wsscode.pathom.book.tracing.demo/root-dep-err",-229360029)], null)], null);
return G__94077;

})(),(function com$wsscode$pathom$book$tracing$demo$error_root_dep(env,_){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_94115){
var state_val_94116 = (state_94115[(1)]);
if((state_val_94116 === (7))){
var inst_94108 = (state_94115[(2)]);
var inst_94109 = cljs.core.PersistentHashMap.EMPTY;
var inst_94110 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Meh",inst_94109);
var inst_94111 = (function(){throw inst_94110})();
var state_94115__$1 = (function (){var statearr_94124 = state_94115;
(statearr_94124[(7)] = inst_94108);

return statearr_94124;
})();
var statearr_94125_94222 = state_94115__$1;
(statearr_94125_94222[(2)] = inst_94111);


cljs.core.async.impl.ioc_helpers.process_exception(state_94115__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94116 === (1))){
var state_94115__$1 = state_94115;
var statearr_94128_94223 = state_94115__$1;
(statearr_94128_94223[(2)] = null);

(statearr_94128_94223[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94116 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_94115,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_94082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_94115__$1 = state_94115;
if(cljs.core.truth_(inst_94082)){
var statearr_94132_94228 = state_94115__$1;
(statearr_94132_94228[(1)] = (5));

} else {
var statearr_94133_94230 = state_94115__$1;
(statearr_94133_94230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94116 === (6))){
var inst_94103 = cljs.core.async.timeout((200));
var state_94115__$1 = state_94115;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_94115__$1,(9),inst_94103);
} else {
if((state_val_94116 === (3))){
var inst_94078 = (state_94115[(2)]);
var state_94115__$1 = state_94115;
var statearr_94134_94248 = state_94115__$1;
(statearr_94134_94248[(2)] = inst_94078);


cljs.core.async.impl.ioc_helpers.process_exception(state_94115__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94116 === (2))){
var inst_94113 = (state_94115[(2)]);
var state_94115__$1 = state_94115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_94115__$1,inst_94113);
} else {
if((state_val_94116 === (9))){
var inst_94105 = (state_94115[(2)]);
var inst_94106 = com.wsscode.common.async_cljs.throw_err(inst_94105);
var state_94115__$1 = state_94115;
var statearr_94137_94251 = state_94115__$1;
(statearr_94137_94251[(2)] = inst_94106);

(statearr_94137_94251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94116 === (5))){
var inst_94084 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","data","com.wsscode.pathom.book.tracing.demo/data",-654660801)];
var inst_94085 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_94086 = ["rgba(255, 0, 0, 0.5)"];
var inst_94087 = cljs.core.PersistentHashMap.fromArrays(inst_94085,inst_94086);
var inst_94088 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_94087,"Error message"];
var inst_94089 = cljs.core.PersistentHashMap.fromArrays(inst_94084,inst_94088);
var inst_94090 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_94089);
var inst_94091 = cljs.core.async.timeout((200));
var state_94115__$1 = (function (){var statearr_94143 = state_94115;
(statearr_94143[(8)] = inst_94090);

return statearr_94143;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_94115__$1,(8),inst_94091);
} else {
if((state_val_94116 === (8))){
var inst_94090 = (state_94115[(8)]);
var inst_94093 = (state_94115[(2)]);
var inst_94094 = com.wsscode.common.async_cljs.throw_err(inst_94093);
var inst_94095 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","data","com.wsscode.pathom.book.tracing.demo/data",-654660801)];
var inst_94096 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_94097 = ["rgba(255, 0, 0, 0.5)"];
var inst_94098 = cljs.core.PersistentHashMap.fromArrays(inst_94096,inst_94097);
var inst_94099 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_94098,"Error message"];
var inst_94100 = cljs.core.PersistentHashMap.fromArrays(inst_94095,inst_94099);
var inst_94101 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_94090,inst_94100);
var state_94115__$1 = (function (){var statearr_94145 = state_94115;
(statearr_94145[(9)] = inst_94101);

return statearr_94145;
})();
var statearr_94146_94262 = state_94115__$1;
(statearr_94146_94262[(2)] = inst_94094);

(statearr_94146_94262[(1)] = (7));


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
var statearr_94152 = [null,null,null,null,null,null,null,null,null,null];
(statearr_94152[(0)] = com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto__);

(statearr_94152[(1)] = (1));

return statearr_94152;
});
var com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto____1 = (function (state_94115){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_94115);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e94153){if((e94153 instanceof Object)){
var ex__47667__auto__ = e94153;
var statearr_94154_94264 = state_94115;
(statearr_94154_94264[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_94115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e94153;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94267 = state_94115;
state_94115 = G__94267;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto__ = function(state_94115){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto____1.call(this,state_94115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_94155 = f__47947__auto__();
(statearr_94155[(6)] = c__47946__auto__);

return statearr_94155;
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
