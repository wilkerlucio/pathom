goog.provide('com.wsscode.pathom.book.async.js_promises');
goog.require('cljs.core');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
goog.require('goog.object');
com.wsscode.pathom.book.async.js_promises.random_dog = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.js-promises","random-dog","com.wsscode.pathom.book.async.js-promises/random-dog",-689387435,null),(function (){var G__60891 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dog.ceo","random-dog-url","dog.ceo/random-dog-url",-389165241)], null)], null);
return G__60891;

})(),(function com$wsscode$pathom$book$async$js_promises$random_dog(env,p__60899){
var map__60903 = p__60899;
var map__60903__$1 = (((((!((map__60903 == null))))?(((((map__60903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60903):map__60903);
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__60903,map__60903__$1){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__60903,map__60903__$1){
return (function (state_61093){
var state_val_61094 = (state_61093[(1)]);
if((state_val_61094 === (1))){
var state_61093__$1 = state_61093;
var statearr_61101_61189 = state_61093__$1;
(statearr_61101_61189[(2)] = null);

(statearr_61101_61189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61094 === (2))){
var inst_61090 = (state_61093[(2)]);
var state_61093__$1 = state_61093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61093__$1,inst_61090);
} else {
if((state_val_61094 === (3))){
var inst_60959 = (state_61093[(2)]);
var state_61093__$1 = state_61093;
var statearr_61108_61194 = state_61093__$1;
(statearr_61108_61194[(2)] = inst_60959);


cljs.core.async.impl.ioc_helpers.process_exception(state_61093__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61094 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_61093,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_60989 = [new cljs.core.Keyword("dog.ceo","random-dog-url","dog.ceo/random-dog-url",-389165241)];
var inst_61076 = fetch("https://dog.ceo/api/breeds/image/random");
var inst_61077 = com.wsscode.common.async_cljs.promise__GT_chan(inst_61076);
var state_61093__$1 = (function (){var statearr_61128 = state_61093;
(statearr_61128[(7)] = inst_60989);

return statearr_61128;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61093__$1,(6),inst_61077);
} else {
if((state_val_61094 === (5))){
var inst_60989 = (state_61093[(7)]);
var inst_61084 = (state_61093[(2)]);
var inst_61085 = com.wsscode.common.async_cljs.consumer_pair(inst_61084);
var inst_61086 = goog.object.get(inst_61085,"message");
var inst_61087 = [inst_61086];
var inst_61088 = cljs.core.PersistentHashMap.fromArrays(inst_60989,inst_61087);
var state_61093__$1 = state_61093;
var statearr_61150_61200 = state_61093__$1;
(statearr_61150_61200[(2)] = inst_61088);


cljs.core.async.impl.ioc_helpers.process_exception(state_61093__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61094 === (6))){
var inst_61079 = (state_61093[(2)]);
var inst_61080 = com.wsscode.common.async_cljs.consumer_pair(inst_61079);
var inst_61081 = inst_61080.json();
var inst_61082 = com.wsscode.common.async_cljs.promise__GT_chan(inst_61081);
var state_61093__$1 = state_61093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61093__$1,(5),inst_61082);
} else {
return null;
}
}
}
}
}
}
});})(c__47946__auto__,map__60903,map__60903__$1))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__60903,map__60903__$1){
return (function() {
var com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto____0 = (function (){
var statearr_61158 = [null,null,null,null,null,null,null,null];
(statearr_61158[(0)] = com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto__);

(statearr_61158[(1)] = (1));

return statearr_61158;
});
var com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto____1 = (function (state_61093){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_61093);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e61161){if((e61161 instanceof Object)){
var ex__47667__auto__ = e61161;
var statearr_61163_61209 = state_61093;
(statearr_61163_61209[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61161;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61223 = state_61093;
state_61093 = G__61223;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto__ = function(state_61093){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto____1.call(this,state_61093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__60903,map__60903__$1))
})();
var state__47948__auto__ = (function (){var statearr_61179 = f__47947__auto__();
(statearr_61179[(6)] = c__47946__auto__);

return statearr_61179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__60903,map__60903__$1))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.async.js_promises.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.async.js_promises.random_dog], null)], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.async.js_promises.js.map
