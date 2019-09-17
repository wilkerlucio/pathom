goog.provide('com.wsscode.pathom.book.async.js_promises');
goog.require('cljs.core');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
goog.require('goog.object');
com.wsscode.pathom.book.async.js_promises.random_dog = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.js-promises","random-dog","com.wsscode.pathom.book.async.js-promises/random-dog",-689387435,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dog.ceo","random-dog-url","dog.ceo/random-dog-url",-389165241)], null)], null),(function com$wsscode$pathom$book$async$js_promises$random_dog(env,p__47517){
var map__47518 = p__47517;
var map__47518__$1 = (((((!((map__47518 == null))))?(((((map__47518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47518):map__47518);
var c__38998__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38998__auto__,map__47518,map__47518__$1){
return (function (){
var f__38999__auto__ = (function (){var switch__38924__auto__ = ((function (c__38998__auto__,map__47518,map__47518__$1){
return (function (state_47541){
var state_val_47542 = (state_47541[(1)]);
if((state_val_47542 === (1))){
var state_47541__$1 = state_47541;
var statearr_47543_47551 = state_47541__$1;
(statearr_47543_47551[(2)] = null);

(statearr_47543_47551[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47542 === (2))){
var inst_47539 = (state_47541[(2)]);
var state_47541__$1 = state_47541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47541__$1,inst_47539);
} else {
if((state_val_47542 === (3))){
var inst_47520 = (state_47541[(2)]);
var state_47541__$1 = state_47541;
var statearr_47544_47552 = state_47541__$1;
(statearr_47544_47552[(2)] = inst_47520);


cljs.core.async.impl.ioc_helpers.process_exception(state_47541__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47542 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47541,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_47524 = [new cljs.core.Keyword("dog.ceo","random-dog-url","dog.ceo/random-dog-url",-389165241)];
var inst_47525 = fetch("https://dog.ceo/api/breeds/image/random");
var inst_47526 = com.wsscode.common.async_cljs.promise__GT_chan(inst_47525);
var state_47541__$1 = (function (){var statearr_47545 = state_47541;
(statearr_47545[(7)] = inst_47524);

return statearr_47545;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47541__$1,(6),inst_47526);
} else {
if((state_val_47542 === (5))){
var inst_47524 = (state_47541[(7)]);
var inst_47533 = (state_47541[(2)]);
var inst_47534 = com.wsscode.common.async_cljs.consumer_pair(inst_47533);
var inst_47535 = goog.object.get(inst_47534,"message");
var inst_47536 = [inst_47535];
var inst_47537 = cljs.core.PersistentHashMap.fromArrays(inst_47524,inst_47536);
var state_47541__$1 = state_47541;
var statearr_47546_47553 = state_47541__$1;
(statearr_47546_47553[(2)] = inst_47537);


cljs.core.async.impl.ioc_helpers.process_exception(state_47541__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47542 === (6))){
var inst_47528 = (state_47541[(2)]);
var inst_47529 = com.wsscode.common.async_cljs.consumer_pair(inst_47528);
var inst_47530 = inst_47529.json();
var inst_47531 = com.wsscode.common.async_cljs.promise__GT_chan(inst_47530);
var state_47541__$1 = state_47541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47541__$1,(5),inst_47531);
} else {
return null;
}
}
}
}
}
}
});})(c__38998__auto__,map__47518,map__47518__$1))
;
return ((function (switch__38924__auto__,c__38998__auto__,map__47518,map__47518__$1){
return (function() {
var com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__38925__auto____0 = (function (){
var statearr_47547 = [null,null,null,null,null,null,null,null];
(statearr_47547[(0)] = com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__38925__auto__);

(statearr_47547[(1)] = (1));

return statearr_47547;
});
var com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__38925__auto____1 = (function (state_47541){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_47541);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e47548){if((e47548 instanceof Object)){
var ex__38928__auto__ = e47548;
var statearr_47549_47554 = state_47541;
(statearr_47549_47554[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47548;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47555 = state_47541;
state_47541 = G__47555;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__38925__auto__ = function(state_47541){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__38925__auto____1.call(this,state_47541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__38925__auto____0;
com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__38925__auto____1;
return com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38998__auto__,map__47518,map__47518__$1))
})();
var state__39000__auto__ = (function (){var statearr_47550 = (f__38999__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38999__auto__.cljs$core$IFn$_invoke$arity$0() : f__38999__auto__.call(null));
(statearr_47550[(6)] = c__38998__auto__);

return statearr_47550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39000__auto__);
});})(c__38998__auto__,map__47518,map__47518__$1))
);

return c__38998__auto__;
}));
com.wsscode.pathom.book.async.js_promises.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.async.js_promises.random_dog], null)], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.async.js_promises.js.map
