goog.provide('com.wsscode.pathom.book.async.js_promises');
goog.require('cljs.core');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
goog.require('goog.object');
com.wsscode.pathom.book.async.js_promises.random_dog = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.js-promises","random-dog","com.wsscode.pathom.book.async.js-promises/random-dog",-689387435,null),(function (){var G__72836 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dog.ceo","random-dog-url","dog.ceo/random-dog-url",-389165241)], null)], null);
return G__72836;

})(),(function com$wsscode$pathom$book$async$js_promises$random_dog(env,p__72841){
var map__72842 = p__72841;
var map__72842__$1 = (((((!((map__72842 == null))))?(((((map__72842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72842):map__72842);
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,map__72842,map__72842__$1){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,map__72842,map__72842__$1){
return (function (state_72893){
var state_val_72896 = (state_72893[(1)]);
if((state_val_72896 === (1))){
var state_72893__$1 = state_72893;
var statearr_72941_73066 = state_72893__$1;
(statearr_72941_73066[(2)] = null);

(statearr_72941_73066[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (2))){
var inst_72886 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72893__$1,inst_72886);
} else {
if((state_val_72896 === (3))){
var inst_72849 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
var statearr_72963_73070 = state_72893__$1;
(statearr_72963_73070[(2)] = inst_72849);


cljs.core.async.impl.ioc_helpers.process_exception(state_72893__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_72893,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_72855 = [new cljs.core.Keyword("dog.ceo","random-dog-url","dog.ceo/random-dog-url",-389165241)];
var inst_72865 = fetch("https://dog.ceo/api/breeds/image/random");
var inst_72866 = com.wsscode.common.async_cljs.promise__GT_chan(inst_72865);
var state_72893__$1 = (function (){var statearr_72979 = state_72893;
(statearr_72979[(7)] = inst_72855);

return statearr_72979;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72893__$1,(6),inst_72866);
} else {
if((state_val_72896 === (5))){
var inst_72855 = (state_72893[(7)]);
var inst_72874 = (state_72893[(2)]);
var inst_72876 = com.wsscode.common.async_cljs.consumer_pair(inst_72874);
var inst_72878 = goog.object.get(inst_72876,"message");
var inst_72880 = [inst_72878];
var inst_72881 = cljs.core.PersistentHashMap.fromArrays(inst_72855,inst_72880);
var state_72893__$1 = state_72893;
var statearr_72989_73078 = state_72893__$1;
(statearr_72989_73078[(2)] = inst_72881);


cljs.core.async.impl.ioc_helpers.process_exception(state_72893__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (6))){
var inst_72868 = (state_72893[(2)]);
var inst_72869 = com.wsscode.common.async_cljs.consumer_pair(inst_72868);
var inst_72870 = inst_72869.json();
var inst_72872 = com.wsscode.common.async_cljs.promise__GT_chan(inst_72870);
var state_72893__$1 = state_72893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72893__$1,(5),inst_72872);
} else {
return null;
}
}
}
}
}
}
});})(c__45808__auto__,map__72842,map__72842__$1))
;
return ((function (switch__45525__auto__,c__45808__auto__,map__72842,map__72842__$1){
return (function() {
var com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__45526__auto____0 = (function (){
var statearr_73010 = [null,null,null,null,null,null,null,null];
(statearr_73010[(0)] = com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__45526__auto__);

(statearr_73010[(1)] = (1));

return statearr_73010;
});
var com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__45526__auto____1 = (function (state_72893){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_72893);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e73027){if((e73027 instanceof Object)){
var ex__45529__auto__ = e73027;
var statearr_73035_73091 = state_72893;
(statearr_73035_73091[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73027;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73093 = state_72893;
state_72893 = G__73093;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__45526__auto__ = function(state_72893){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__45526__auto____1.call(this,state_72893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__45526__auto____0;
com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__45526__auto____1;
return com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,map__72842,map__72842__$1))
})();
var state__45810__auto__ = (function (){var statearr_73042 = f__45809__auto__();
(statearr_73042[(6)] = c__45808__auto__);

return statearr_73042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,map__72842,map__72842__$1))
);

return c__45808__auto__;
}));
com.wsscode.pathom.book.async.js_promises.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.async.js_promises.random_dog], null)], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.async.js_promises.js.map
