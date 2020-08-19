goog.provide('com.wsscode.pathom.book.async.js_promises');
goog.require('cljs.core');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
goog.require('goog.object');
com.wsscode.pathom.book.async.js_promises.random_dog = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.js-promises","random-dog","com.wsscode.pathom.book.async.js-promises/random-dog",-689387435,null),(function (){var G__93302 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dog.ceo","random-dog-url","dog.ceo/random-dog-url",-389165241)], null)], null);
return G__93302;

})(),(function com$wsscode$pathom$book$async$js_promises$random_dog(env,p__93314){
var map__93326 = p__93314;
var map__93326__$1 = (((((!((map__93326 == null))))?(((((map__93326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93326):map__93326);
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__93326,map__93326__$1){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__93326,map__93326__$1){
return (function (state_93372){
var state_val_93374 = (state_93372[(1)]);
if((state_val_93374 === (1))){
var state_93372__$1 = state_93372;
var statearr_93427_93604 = state_93372__$1;
(statearr_93427_93604[(2)] = null);

(statearr_93427_93604[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93374 === (2))){
var inst_93369 = (state_93372[(2)]);
var state_93372__$1 = state_93372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_93372__$1,inst_93369);
} else {
if((state_val_93374 === (3))){
var inst_93345 = (state_93372[(2)]);
var state_93372__$1 = state_93372;
var statearr_93472_93606 = state_93372__$1;
(statearr_93472_93606[(2)] = inst_93345);


cljs.core.async.impl.ioc_helpers.process_exception(state_93372__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93374 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_93372,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_93352 = [new cljs.core.Keyword("dog.ceo","random-dog-url","dog.ceo/random-dog-url",-389165241)];
var inst_93355 = fetch("https://dog.ceo/api/breeds/image/random");
var inst_93356 = com.wsscode.common.async_cljs.promise__GT_chan(inst_93355);
var state_93372__$1 = (function (){var statearr_93482 = state_93372;
(statearr_93482[(7)] = inst_93352);

return statearr_93482;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93372__$1,(6),inst_93356);
} else {
if((state_val_93374 === (5))){
var inst_93352 = (state_93372[(7)]);
var inst_93363 = (state_93372[(2)]);
var inst_93364 = com.wsscode.common.async_cljs.consumer_pair(inst_93363);
var inst_93365 = goog.object.get(inst_93364,"message");
var inst_93366 = [inst_93365];
var inst_93367 = cljs.core.PersistentHashMap.fromArrays(inst_93352,inst_93366);
var state_93372__$1 = state_93372;
var statearr_93497_93610 = state_93372__$1;
(statearr_93497_93610[(2)] = inst_93367);


cljs.core.async.impl.ioc_helpers.process_exception(state_93372__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93374 === (6))){
var inst_93358 = (state_93372[(2)]);
var inst_93359 = com.wsscode.common.async_cljs.consumer_pair(inst_93358);
var inst_93360 = inst_93359.json();
var inst_93361 = com.wsscode.common.async_cljs.promise__GT_chan(inst_93360);
var state_93372__$1 = state_93372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93372__$1,(5),inst_93361);
} else {
return null;
}
}
}
}
}
}
});})(c__47946__auto__,map__93326,map__93326__$1))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__93326,map__93326__$1){
return (function() {
var com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto____0 = (function (){
var statearr_93565 = [null,null,null,null,null,null,null,null];
(statearr_93565[(0)] = com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto__);

(statearr_93565[(1)] = (1));

return statearr_93565;
});
var com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto____1 = (function (state_93372){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_93372);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e93566){if((e93566 instanceof Object)){
var ex__47667__auto__ = e93566;
var statearr_93568_93620 = state_93372;
(statearr_93568_93620[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_93372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93566;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93623 = state_93372;
state_93372 = G__93623;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto__ = function(state_93372){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto____1.call(this,state_93372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__93326,map__93326__$1))
})();
var state__47948__auto__ = (function (){var statearr_93569 = f__47947__auto__();
(statearr_93569[(6)] = c__47946__auto__);

return statearr_93569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__93326,map__93326__$1))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.async.js_promises.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.async.js_promises.random_dog], null)], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.async.js_promises.js.map
