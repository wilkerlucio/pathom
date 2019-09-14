goog.provide('com.wsscode.pathom.book.async.intro');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.pathom.trace');
goog.require('com.wsscode.pathom.connect');
com.wsscode.pathom.book.async.intro.async_info = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.intro","async-info","com.wsscode.pathom.book.async.intro/async-info",791195311,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-info","async-info",-364224963)], null)], null),(function com$wsscode$pathom$book$async$intro$async_info(_,___$1){
var c__38998__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38998__auto__){
return (function (){
var f__38999__auto__ = (function (){var switch__38924__auto__ = ((function (c__38998__auto__){
return (function (state_48148){
var state_val_48149 = (state_48148[(1)]);
if((state_val_48149 === (1))){
var inst_48139 = cljs.core.rand_int((1000));
var inst_48140 = ((100) + inst_48139);
var inst_48141 = cljs.core.async.timeout(inst_48140);
var state_48148__$1 = state_48148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48148__$1,(2),inst_48141);
} else {
if((state_val_48149 === (2))){
var inst_48143 = (state_48148[(2)]);
var inst_48144 = [new cljs.core.Keyword(null,"async-info","async-info",-364224963)];
var inst_48145 = ["From async"];
var inst_48146 = cljs.core.PersistentHashMap.fromArrays(inst_48144,inst_48145);
var state_48148__$1 = (function (){var statearr_48150 = state_48148;
(statearr_48150[(7)] = inst_48143);

return statearr_48150;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48148__$1,inst_48146);
} else {
return null;
}
}
});})(c__38998__auto__))
;
return ((function (switch__38924__auto__,c__38998__auto__){
return (function() {
var com$wsscode$pathom$book$async$intro$async_info_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$async$intro$async_info_$_state_machine__38925__auto____0 = (function (){
var statearr_48151 = [null,null,null,null,null,null,null,null];
(statearr_48151[(0)] = com$wsscode$pathom$book$async$intro$async_info_$_state_machine__38925__auto__);

(statearr_48151[(1)] = (1));

return statearr_48151;
});
var com$wsscode$pathom$book$async$intro$async_info_$_state_machine__38925__auto____1 = (function (state_48148){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_48148);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e48152){if((e48152 instanceof Object)){
var ex__38928__auto__ = e48152;
var statearr_48153_48155 = state_48148;
(statearr_48153_48155[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48152;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48156 = state_48148;
state_48148 = G__48156;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$intro$async_info_$_state_machine__38925__auto__ = function(state_48148){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$intro$async_info_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$intro$async_info_$_state_machine__38925__auto____1.call(this,state_48148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$intro$async_info_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$intro$async_info_$_state_machine__38925__auto____0;
com$wsscode$pathom$book$async$intro$async_info_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$intro$async_info_$_state_machine__38925__auto____1;
return com$wsscode$pathom$book$async$intro$async_info_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38998__auto__))
})();
var state__39000__auto__ = (function (){var statearr_48154 = (f__38999__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38999__auto__.cljs$core$IFn$_invoke$arity$0() : f__38999__auto__.call(null));
(statearr_48154[(6)] = c__38998__auto__);

return statearr_48154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39000__auto__);
});})(c__38998__auto__))
);

return c__38998__auto__;
}));
com.wsscode.pathom.book.async.intro.foo = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.intro","foo","com.wsscode.pathom.book.async.intro/foo",241436130,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foo","foo",1268894036)], null)], null),(function com$wsscode$pathom$book$async$intro$foo(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),"Regular"], null);
}));
com.wsscode.pathom.book.async.intro.register = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.async.intro.async_info,com.wsscode.pathom.book.async.intro.foo], null);
com.wsscode.pathom.book.async.intro.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.async.intro.register], null)),com.wsscode.pathom.trace.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.async.intro.js.map
