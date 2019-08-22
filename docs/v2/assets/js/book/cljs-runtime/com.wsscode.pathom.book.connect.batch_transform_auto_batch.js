goog.provide('com.wsscode.pathom.book.connect.batch_transform_auto_batch');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
goog.require('cljs.core.async');
com.wsscode.pathom.book.connect.batch_transform_auto_batch.list_things = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch-transform-auto-batch","list-things","com.wsscode.pathom.book.connect.batch-transform-auto-batch/list-things",-730644075,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438)], null)], null)], null)], null),(function com$wsscode$pathom$book$connect$batch_transform_auto_batch$list_things(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(10)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(18)], null)], null)], null);
}));
com.wsscode.pathom.book.connect.batch_transform_auto_batch.slow_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch-transform-auto-batch","slow-resolver","com.wsscode.pathom.book.connect.batch-transform-auto-batch/slow-resolver",-992391414,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number-added","number-added",1161719489)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322),com.wsscode.pathom.connect.transform_auto_batch((10))], null),(function com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver(_,p__53693){
var map__53698 = p__53693;
var map__53698__$1 = (((((!((map__53698 == null))))?(((((map__53698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53698):map__53698);
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53698__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,map__53698,map__53698__$1,number){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,map__53698,map__53698__$1,number){
return (function (state_53736){
var state_val_53737 = (state_53736[(1)]);
if((state_val_53737 === (1))){
var inst_53718 = cljs.core.async.timeout((1000));
var state_53736__$1 = state_53736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53736__$1,(2),inst_53718);
} else {
if((state_val_53737 === (2))){
var inst_53721 = (state_53736[(2)]);
var inst_53726 = [new cljs.core.Keyword(null,"number-added","number-added",1161719489)];
var inst_53728 = (number + (1));
var inst_53729 = [inst_53728];
var inst_53730 = cljs.core.PersistentHashMap.fromArrays(inst_53726,inst_53729);
var state_53736__$1 = (function (){var statearr_53747 = state_53736;
(statearr_53747[(7)] = inst_53721);

return statearr_53747;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53736__$1,inst_53730);
} else {
return null;
}
}
});})(c__39003__auto__,map__53698,map__53698__$1,number))
;
return ((function (switch__38929__auto__,c__39003__auto__,map__53698,map__53698__$1,number){
return (function() {
var com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__38930__auto____0 = (function (){
var statearr_53753 = [null,null,null,null,null,null,null,null];
(statearr_53753[(0)] = com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__38930__auto__);

(statearr_53753[(1)] = (1));

return statearr_53753;
});
var com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__38930__auto____1 = (function (state_53736){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_53736);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e53771){if((e53771 instanceof Object)){
var ex__38933__auto__ = e53771;
var statearr_53784_53841 = state_53736;
(statearr_53784_53841[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53843 = state_53736;
state_53736 = G__53843;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__38930__auto__ = function(state_53736){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__38930__auto____1.call(this,state_53736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__38930__auto____0;
com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__38930__auto____1;
return com$wsscode$pathom$book$connect$batch_transform_auto_batch$slow_resolver_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,map__53698,map__53698__$1,number))
})();
var state__39005__auto__ = (function (){var statearr_53796 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_53796[(6)] = c__39003__auto__);

return statearr_53796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,map__53698,map__53698__$1,number))
);

return c__39003__auto__;
}));
com.wsscode.pathom.book.connect.batch_transform_auto_batch.app_registry = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.batch_transform_auto_batch.list_things,com.wsscode.pathom.book.connect.batch_transform_auto_batch.slow_resolver], null);
com.wsscode.pathom.book.connect.batch_transform_auto_batch.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2,com.wsscode.pathom.connect.open_ident_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411),(function (env,error){
console.error("ERROR",error);

return com.wsscode.pathom.core.error_str(error);
})], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.batch_transform_auto_batch.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.batch_transform_auto_batch.js.map
