goog.provide('com.wsscode.pathom.book.tracing.demo');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.trace');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
com.wsscode.pathom.book.tracing.demo.slow_root = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",2143883753,null),(function (){var G__66102 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226)], null)], null);
return G__66102;

})(),(function com$wsscode$pathom$book$tracing$demo$slow_root(env,_){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__){
return (function (state_66147){
var state_val_66148 = (state_66147[(1)]);
if((state_val_66148 === (7))){
var inst_66131 = cljs.core.async.timeout((200));
var state_66147__$1 = state_66147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66147__$1,(10),inst_66131);
} else {
if((state_val_66148 === (1))){
var state_66147__$1 = state_66147;
var statearr_66150_66513 = state_66147__$1;
(statearr_66150_66513[(2)] = null);

(statearr_66150_66513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66148 === (4))){
var inst_66103 = (state_66147[(2)]);
var state_66147__$1 = state_66147;
var statearr_66151_66517 = state_66147__$1;
(statearr_66151_66517[(2)] = inst_66103);

(statearr_66151_66517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66148 === (6))){
var inst_66111 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_66113 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_66114 = ["rgba(255, 255, 0, 0.5)"];
var inst_66115 = cljs.core.PersistentHashMap.fromArrays(inst_66113,inst_66114);
var inst_66116 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_66115];
var inst_66117 = cljs.core.PersistentHashMap.fromArrays(inst_66111,inst_66116);
var inst_66118 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_66117);
var inst_66119 = cljs.core.async.timeout((200));
var state_66147__$1 = (function (){var statearr_66153 = state_66147;
(statearr_66153[(7)] = inst_66118);

return statearr_66153;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66147__$1,(9),inst_66119);
} else {
if((state_val_66148 === (3))){
var inst_66143 = (state_66147[(2)]);
var state_66147__$1 = state_66147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66147__$1,inst_66143);
} else {
if((state_val_66148 === (2))){
var ___$1 = (function (){var statearr_66158 = state_66147;
(statearr_66158[(4)] = cljs.core.cons((5),(state_66147[(4)])));

return statearr_66158;
})();
var inst_66109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_66147__$1 = state_66147;
if(cljs.core.truth_(inst_66109)){
var statearr_66159_66526 = state_66147__$1;
(statearr_66159_66526[(1)] = (6));

} else {
var statearr_66166_66527 = state_66147__$1;
(statearr_66166_66527[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66148 === (9))){
var inst_66118 = (state_66147[(7)]);
var inst_66121 = (state_66147[(2)]);
var inst_66122 = com.wsscode.common.async_cljs.throw_err(inst_66121);
var inst_66123 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_66124 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_66125 = ["rgba(255, 255, 0, 0.5)"];
var inst_66126 = cljs.core.PersistentHashMap.fromArrays(inst_66124,inst_66125);
var inst_66127 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_66126];
var inst_66128 = cljs.core.PersistentHashMap.fromArrays(inst_66123,inst_66127);
var inst_66129 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_66118,inst_66128);
var state_66147__$1 = (function (){var statearr_66180 = state_66147;
(statearr_66180[(8)] = inst_66129);

return statearr_66180;
})();
var statearr_66181_66532 = state_66147__$1;
(statearr_66181_66532[(2)] = inst_66122);

(statearr_66181_66532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66148 === (5))){
var ___$1 = (function (){var statearr_66185 = state_66147;
(statearr_66185[(4)] = cljs.core.rest((state_66147[(4)])));

return statearr_66185;
})();
var state_66147__$1 = state_66147;
var ex66157 = (state_66147__$1[(2)]);
var statearr_66187_66537 = state_66147__$1;
(statearr_66187_66537[(5)] = ex66157);


var statearr_66188_66539 = state_66147__$1;
(statearr_66188_66539[(1)] = (4));

(statearr_66188_66539[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66148 === (10))){
var inst_66133 = (state_66147[(2)]);
var inst_66134 = com.wsscode.common.async_cljs.throw_err(inst_66133);
var state_66147__$1 = state_66147;
var statearr_66192_66541 = state_66147__$1;
(statearr_66192_66541[(2)] = inst_66134);

(statearr_66192_66541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66148 === (8))){
var inst_66136 = (state_66147[(2)]);
var inst_66137 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226)];
var inst_66139 = ["foo"];
var inst_66140 = cljs.core.PersistentHashMap.fromArrays(inst_66137,inst_66139);
var ___$1 = (function (){var statearr_66198 = state_66147;
(statearr_66198[(4)] = cljs.core.rest((state_66147[(4)])));

return statearr_66198;
})();
var state_66147__$1 = (function (){var statearr_66200 = state_66147;
(statearr_66200[(9)] = inst_66136);

return statearr_66200;
})();
var statearr_66203_66548 = state_66147__$1;
(statearr_66203_66548[(2)] = inst_66140);

(statearr_66203_66548[(1)] = (3));


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
}
});})(c__48839__auto__))
;
return ((function (switch__48139__auto__,c__48839__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__48140__auto____0 = (function (){
var statearr_66205 = [null,null,null,null,null,null,null,null,null,null];
(statearr_66205[(0)] = com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__48140__auto__);

(statearr_66205[(1)] = (1));

return statearr_66205;
});
var com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__48140__auto____1 = (function (state_66147){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_66147);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e66208){var ex__48143__auto__ = e66208;
var statearr_66209_66553 = state_66147;
(statearr_66209_66553[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_66147[(4)]))){
var statearr_66211_66554 = state_66147;
(statearr_66211_66554[(1)] = cljs.core.first((state_66147[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66556 = state_66147;
state_66147 = G__66556;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__48140__auto__ = function(state_66147){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__48140__auto____1.call(this,state_66147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__48140__auto____0;
com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__48140__auto____1;
return com$wsscode$pathom$book$tracing$demo$slow_root_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__))
})();
var state__48841__auto__ = (function (){var statearr_66213 = f__48840__auto__();
(statearr_66213[(6)] = c__48839__auto__);

return statearr_66213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__))
);

return c__48839__auto__;
}));
com.wsscode.pathom.book.tracing.demo.slow_root_dep = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo","slow-root-dep","com.wsscode.pathom.book.tracing.demo/slow-root-dep",825026476,null),(function (){var G__66215 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","root-dep","com.wsscode.pathom.book.tracing.demo/root-dep",-1519602177)], null)], null);
return G__66215;

})(),(function com$wsscode$pathom$book$tracing$demo$slow_root_dep(env,_){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__){
return (function (state_66259){
var state_val_66261 = (state_66259[(1)]);
if((state_val_66261 === (7))){
var inst_66245 = cljs.core.async.timeout((200));
var state_66259__$1 = state_66259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66259__$1,(10),inst_66245);
} else {
if((state_val_66261 === (1))){
var state_66259__$1 = state_66259;
var statearr_66281_66567 = state_66259__$1;
(statearr_66281_66567[(2)] = null);

(statearr_66281_66567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66261 === (4))){
var inst_66221 = (state_66259[(2)]);
var state_66259__$1 = state_66259;
var statearr_66282_66570 = state_66259__$1;
(statearr_66282_66570[(2)] = inst_66221);

(statearr_66282_66570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66261 === (6))){
var inst_66231 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_66233 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472)];
var inst_66234 = cljs.core.PersistentHashMap.fromArrays(inst_66231,inst_66233);
var inst_66235 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_66234);
var inst_66236 = cljs.core.async.timeout((200));
var state_66259__$1 = (function (){var statearr_66288 = state_66259;
(statearr_66288[(7)] = inst_66235);

return statearr_66288;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66259__$1,(9),inst_66236);
} else {
if((state_val_66261 === (3))){
var inst_66256 = (state_66259[(2)]);
var state_66259__$1 = state_66259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66259__$1,inst_66256);
} else {
if((state_val_66261 === (2))){
var ___$1 = (function (){var statearr_66292 = state_66259;
(statearr_66292[(4)] = cljs.core.cons((5),(state_66259[(4)])));

return statearr_66292;
})();
var inst_66228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_66259__$1 = state_66259;
if(cljs.core.truth_(inst_66228)){
var statearr_66293_66581 = state_66259__$1;
(statearr_66293_66581[(1)] = (6));

} else {
var statearr_66296_66582 = state_66259__$1;
(statearr_66296_66582[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66261 === (9))){
var inst_66235 = (state_66259[(7)]);
var inst_66238 = (state_66259[(2)]);
var inst_66239 = com.wsscode.common.async_cljs.throw_err(inst_66238);
var inst_66240 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_66241 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472)];
var inst_66242 = cljs.core.PersistentHashMap.fromArrays(inst_66240,inst_66241);
var inst_66243 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_66235,inst_66242);
var state_66259__$1 = (function (){var statearr_66301 = state_66259;
(statearr_66301[(8)] = inst_66243);

return statearr_66301;
})();
var statearr_66303_66586 = state_66259__$1;
(statearr_66303_66586[(2)] = inst_66239);

(statearr_66303_66586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66261 === (5))){
var ___$1 = (function (){var statearr_66304 = state_66259;
(statearr_66304[(4)] = cljs.core.rest((state_66259[(4)])));

return statearr_66304;
})();
var state_66259__$1 = state_66259;
var ex66291 = (state_66259__$1[(2)]);
var statearr_66307_66591 = state_66259__$1;
(statearr_66307_66591[(5)] = ex66291);


var statearr_66309_66593 = state_66259__$1;
(statearr_66309_66593[(1)] = (4));

(statearr_66309_66593[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66261 === (10))){
var inst_66247 = (state_66259[(2)]);
var inst_66248 = com.wsscode.common.async_cljs.throw_err(inst_66247);
var state_66259__$1 = state_66259;
var statearr_66311_66594 = state_66259__$1;
(statearr_66311_66594[(2)] = inst_66248);

(statearr_66311_66594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66261 === (8))){
var inst_66250 = (state_66259[(2)]);
var inst_66251 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","root-dep","com.wsscode.pathom.book.tracing.demo/root-dep",-1519602177)];
var inst_66252 = ["nah"];
var inst_66253 = cljs.core.PersistentHashMap.fromArrays(inst_66251,inst_66252);
var ___$1 = (function (){var statearr_66316 = state_66259;
(statearr_66316[(4)] = cljs.core.rest((state_66259[(4)])));

return statearr_66316;
})();
var state_66259__$1 = (function (){var statearr_66318 = state_66259;
(statearr_66318[(9)] = inst_66250);

return statearr_66318;
})();
var statearr_66319_66600 = state_66259__$1;
(statearr_66319_66600[(2)] = inst_66253);

(statearr_66319_66600[(1)] = (3));


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
}
});})(c__48839__auto__))
;
return ((function (switch__48139__auto__,c__48839__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__48140__auto____0 = (function (){
var statearr_66323 = [null,null,null,null,null,null,null,null,null,null];
(statearr_66323[(0)] = com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__48140__auto__);

(statearr_66323[(1)] = (1));

return statearr_66323;
});
var com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__48140__auto____1 = (function (state_66259){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_66259);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e66325){var ex__48143__auto__ = e66325;
var statearr_66326_66608 = state_66259;
(statearr_66326_66608[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_66259[(4)]))){
var statearr_66331_66612 = state_66259;
(statearr_66331_66612[(1)] = cljs.core.first((state_66259[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66618 = state_66259;
state_66259 = G__66618;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__48140__auto__ = function(state_66259){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__48140__auto____1.call(this,state_66259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__48140__auto____0;
com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__48140__auto____1;
return com$wsscode$pathom$book$tracing$demo$slow_root_dep_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__))
})();
var state__48841__auto__ = (function (){var statearr_66337 = f__48840__auto__();
(statearr_66337[(6)] = c__48839__auto__);

return statearr_66337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__))
);

return c__48839__auto__;
}));
com.wsscode.pathom.book.tracing.demo.error_root_dep = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo","error-root-dep","com.wsscode.pathom.book.tracing.demo/error-root-dep",-482974288,null),(function (){var G__66341 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","slow-root","com.wsscode.pathom.book.tracing.demo/slow-root",503352226),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","root-dep-err","com.wsscode.pathom.book.tracing.demo/root-dep-err",-229360029)], null)], null);
return G__66341;

})(),(function com$wsscode$pathom$book$tracing$demo$error_root_dep(env,_){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__){
return (function (state_66420){
var state_val_66421 = (state_66420[(1)]);
if((state_val_66421 === (7))){
var inst_66405 = cljs.core.async.timeout((200));
var state_66420__$1 = state_66420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66420__$1,(10),inst_66405);
} else {
if((state_val_66421 === (1))){
var state_66420__$1 = state_66420;
var statearr_66426_66628 = state_66420__$1;
(statearr_66426_66628[(2)] = null);

(statearr_66426_66628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66421 === (4))){
var inst_66352 = (state_66420[(2)]);
var state_66420__$1 = state_66420;
var statearr_66433_66630 = state_66420__$1;
(statearr_66433_66630[(2)] = inst_66352);

(statearr_66433_66630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66421 === (6))){
var inst_66372 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","data","com.wsscode.pathom.book.tracing.demo/data",-654660801)];
var inst_66382 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_66383 = ["rgba(255, 0, 0, 0.5)"];
var inst_66384 = cljs.core.PersistentHashMap.fromArrays(inst_66382,inst_66383);
var inst_66385 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_66384,"Error message"];
var inst_66386 = cljs.core.PersistentHashMap.fromArrays(inst_66372,inst_66385);
var inst_66387 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_66386);
var inst_66392 = cljs.core.async.timeout((200));
var state_66420__$1 = (function (){var statearr_66440 = state_66420;
(statearr_66440[(7)] = inst_66387);

return statearr_66440;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66420__$1,(9),inst_66392);
} else {
if((state_val_66421 === (3))){
var inst_66417 = (state_66420[(2)]);
var state_66420__$1 = state_66420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66420__$1,inst_66417);
} else {
if((state_val_66421 === (2))){
var ___$1 = (function (){var statearr_66443 = state_66420;
(statearr_66443[(4)] = cljs.core.cons((5),(state_66420[(4)])));

return statearr_66443;
})();
var inst_66362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_66420__$1 = state_66420;
if(cljs.core.truth_(inst_66362)){
var statearr_66446_66636 = state_66420__$1;
(statearr_66446_66636[(1)] = (6));

} else {
var statearr_66447_66637 = state_66420__$1;
(statearr_66447_66637[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66421 === (9))){
var inst_66387 = (state_66420[(7)]);
var inst_66394 = (state_66420[(2)]);
var inst_66395 = com.wsscode.common.async_cljs.throw_err(inst_66394);
var inst_66396 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","data","com.wsscode.pathom.book.tracing.demo/data",-654660801)];
var inst_66398 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_66399 = ["rgba(255, 0, 0, 0.5)"];
var inst_66400 = cljs.core.PersistentHashMap.fromArrays(inst_66398,inst_66399);
var inst_66401 = [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),inst_66400,"Error message"];
var inst_66402 = cljs.core.PersistentHashMap.fromArrays(inst_66396,inst_66401);
var inst_66403 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_66387,inst_66402);
var state_66420__$1 = (function (){var statearr_66454 = state_66420;
(statearr_66454[(8)] = inst_66403);

return statearr_66454;
})();
var statearr_66455_66642 = state_66420__$1;
(statearr_66455_66642[(2)] = inst_66395);

(statearr_66455_66642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66421 === (5))){
var ___$1 = (function (){var statearr_66458 = state_66420;
(statearr_66458[(4)] = cljs.core.rest((state_66420[(4)])));

return statearr_66458;
})();
var state_66420__$1 = state_66420;
var ex66442 = (state_66420__$1[(2)]);
var statearr_66463_66645 = state_66420__$1;
(statearr_66463_66645[(5)] = ex66442);


var statearr_66465_66647 = state_66420__$1;
(statearr_66465_66647[(1)] = (4));

(statearr_66465_66647[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66421 === (10))){
var inst_66407 = (state_66420[(2)]);
var inst_66408 = com.wsscode.common.async_cljs.throw_err(inst_66407);
var state_66420__$1 = state_66420;
var statearr_66468_66648 = state_66420__$1;
(statearr_66468_66648[(2)] = inst_66408);

(statearr_66468_66648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66421 === (8))){
var inst_66411 = (state_66420[(2)]);
var inst_66412 = cljs.core.PersistentHashMap.EMPTY;
var inst_66413 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Meh",inst_66412);
var inst_66414 = (function(){throw inst_66413})();
var ___$1 = (function (){var statearr_66470 = state_66420;
(statearr_66470[(4)] = cljs.core.rest((state_66420[(4)])));

return statearr_66470;
})();
var state_66420__$1 = (function (){var statearr_66475 = state_66420;
(statearr_66475[(9)] = inst_66411);

return statearr_66475;
})();
var statearr_66477_66652 = state_66420__$1;
(statearr_66477_66652[(2)] = inst_66414);

(statearr_66477_66652[(1)] = (3));


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
}
});})(c__48839__auto__))
;
return ((function (switch__48139__auto__,c__48839__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__48140__auto____0 = (function (){
var statearr_66478 = [null,null,null,null,null,null,null,null,null,null];
(statearr_66478[(0)] = com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__48140__auto__);

(statearr_66478[(1)] = (1));

return statearr_66478;
});
var com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__48140__auto____1 = (function (state_66420){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_66420);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e66483){var ex__48143__auto__ = e66483;
var statearr_66484_66657 = state_66420;
(statearr_66484_66657[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_66420[(4)]))){
var statearr_66485_66662 = state_66420;
(statearr_66485_66662[(1)] = cljs.core.first((state_66420[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66664 = state_66420;
state_66420 = G__66664;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__48140__auto__ = function(state_66420){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__48140__auto____1.call(this,state_66420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__48140__auto____0;
com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__48140__auto____1;
return com$wsscode$pathom$book$tracing$demo$error_root_dep_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__))
})();
var state__48841__auto__ = (function (){var statearr_66487 = f__48840__auto__();
(statearr_66487[(6)] = c__48839__auto__);

return statearr_66487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__))
);

return c__48839__auto__;
}));
com.wsscode.pathom.book.tracing.demo.app_registry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.tracing.demo.slow_root,com.wsscode.pathom.book.tracing.demo.slow_root_dep,com.wsscode.pathom.book.tracing.demo.error_root_dep], null);
com.wsscode.pathom.trace.trace_tree_collect.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","my-event","com.wsscode.pathom.book.tracing.demo/my-event",170189472),(function (x,row){
return com.wsscode.pathom.trace.tree_assoc_detail(row,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.tracing.demo","data","com.wsscode.pathom.book.tracing.demo/data",-654660801)], null));
}));
com.wsscode.pathom.book.tracing.demo.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.tracing.demo.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));
com.wsscode.pathom.book.tracing.demo.parser(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)], null));

//# sourceMappingURL=com.wsscode.pathom.book.tracing.demo.js.map
