goog.provide('com.wsscode.pathom.book.connect.batch_transform_auto_batch');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
goog.require('cljs.core.async');
com.wsscode.pathom.book.connect.batch_transform_auto_batch.list_things = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch-transform-auto-batch","list-things","com.wsscode.pathom.book.connect.batch-transform-auto-batch/list-things",-730644075,null),(function (){var G__60879 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438)], null)], null)], null)], null);
return G__60879;

})(),(function com$wsscode$pathom$book$connect$batch_transform_auto_batch$list_things(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(10)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(18)], null)], null)], null);
}));
com.wsscode.pathom.book.connect.batch_transform_auto_batch.slow_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch-transform-auto-batch","slow-resolver","com.wsscode.pathom.book.connect.batch-transform-auto-batch/slow-resolver",-992391414,null),(function (){var G__60889 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number-added","number-added",1161719489)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322),com.wsscode.pathom.connect.transform_auto_batch((10))], null);
return G__60889;

})(),(function com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver(_,p__60896){
var map__60900 = p__60896;
var map__60900__$1 = (((((!((map__60900 == null))))?(((((map__60900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60900):map__60900);
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60900__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__60900,map__60900__$1,number){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__60900,map__60900__$1,number){
return (function (state_60923){
var state_val_60925 = (state_60923[(1)]);
if((state_val_60925 === (1))){
var inst_60913 = cljs.core.async.timeout((1000));
var state_60923__$1 = state_60923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60923__$1,(2),inst_60913);
} else {
if((state_val_60925 === (2))){
var inst_60915 = (state_60923[(2)]);
var inst_60917 = [new cljs.core.Keyword(null,"number-added","number-added",1161719489)];
var inst_60919 = (number + (1));
var inst_60920 = [inst_60919];
var inst_60921 = cljs.core.PersistentHashMap.fromArrays(inst_60917,inst_60920);
var state_60923__$1 = (function (){var statearr_60970 = state_60923;
(statearr_60970[(7)] = inst_60915);

return statearr_60970;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60923__$1,inst_60921);
} else {
return null;
}
}
});})(c__47946__auto__,map__60900,map__60900__$1,number))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__60900,map__60900__$1,number){
return (function() {
var com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__47664__auto____0 = (function (){
var statearr_60987 = [null,null,null,null,null,null,null,null];
(statearr_60987[(0)] = com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__47664__auto__);

(statearr_60987[(1)] = (1));

return statearr_60987;
});
var com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__47664__auto____1 = (function (state_60923){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_60923);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e60996){if((e60996 instanceof Object)){
var ex__47667__auto__ = e60996;
var statearr_61011_61140 = state_60923;
(statearr_61011_61140[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60996;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61151 = state_60923;
state_60923 = G__61151;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__47664__auto__ = function(state_60923){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__47664__auto____1.call(this,state_60923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__60900,map__60900__$1,number))
})();
var state__47948__auto__ = (function (){var statearr_61057 = f__47947__auto__();
(statearr_61057[(6)] = c__47946__auto__);

return statearr_61057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__60900,map__60900__$1,number))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.connect.batch_transform_auto_batch.app_registry = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.batch_transform_auto_batch.list_things,com.wsscode.pathom.book.connect.batch_transform_auto_batch.slow_resolver], null);
com.wsscode.pathom.book.connect.batch_transform_auto_batch.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2,com.wsscode.pathom.connect.open_ident_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411),(function (env,error){
console.error("ERROR",error);

return com.wsscode.pathom.core.error_str(error);
})], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.batch_transform_auto_batch.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.batch_transform_auto_batch.js.map
