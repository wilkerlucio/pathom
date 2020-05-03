goog.provide('com.wsscode.pathom.book.connect.batch');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
goog.require('cljs.core.async');
goog.require('com.wsscode.pathom.profile');
com.wsscode.pathom.book.connect.batch.list_things = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch","list-things","com.wsscode.pathom.book.connect.batch/list-things",-114820299,null),(function (){var G__72845 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438)], null)], null)], null)], null);
return G__72845;

})(),(function com$wsscode$pathom$book$connect$batch$list_things(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(10)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(18)], null)], null)], null);
}));
com.wsscode.pathom.book.connect.batch.slow_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch","slow-resolver","com.wsscode.pathom.book.connect.batch/slow-resolver",555020778,null),(function (){var G__72900 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number-added","number-added",1161719489)], null)], null);
return G__72900;

})(),(function com$wsscode$pathom$book$connect$batch$slow_resolver(_,p__72938){
var map__72939 = p__72938;
var map__72939__$1 = (((((!((map__72939 == null))))?(((((map__72939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72939):map__72939);
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72939__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,map__72939,map__72939__$1,number){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,map__72939,map__72939__$1,number){
return (function (state_72958){
var state_val_72959 = (state_72958[(1)]);
if((state_val_72959 === (1))){
var inst_72948 = cljs.core.async.timeout((1000));
var state_72958__$1 = state_72958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72958__$1,(2),inst_72948);
} else {
if((state_val_72959 === (2))){
var inst_72950 = (state_72958[(2)]);
var inst_72951 = [new cljs.core.Keyword(null,"number-added","number-added",1161719489)];
var inst_72952 = (number + (1));
var inst_72953 = [inst_72952];
var inst_72954 = cljs.core.PersistentHashMap.fromArrays(inst_72951,inst_72953);
var state_72958__$1 = (function (){var statearr_72990 = state_72958;
(statearr_72990[(7)] = inst_72950);

return statearr_72990;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_72958__$1,inst_72954);
} else {
return null;
}
}
});})(c__45808__auto__,map__72939,map__72939__$1,number))
;
return ((function (switch__45525__auto__,c__45808__auto__,map__72939,map__72939__$1,number){
return (function() {
var com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__45526__auto____0 = (function (){
var statearr_72998 = [null,null,null,null,null,null,null,null];
(statearr_72998[(0)] = com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__45526__auto__);

(statearr_72998[(1)] = (1));

return statearr_72998;
});
var com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__45526__auto____1 = (function (state_72958){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_72958);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e73009){if((e73009 instanceof Object)){
var ex__45529__auto__ = e73009;
var statearr_73021_73076 = state_72958;
(statearr_73021_73076[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73009;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73095 = state_72958;
state_72958 = G__73095;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__45526__auto__ = function(state_72958){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__45526__auto____1.call(this,state_72958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__45526__auto____0;
com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__45526__auto____1;
return com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,map__72939,map__72939__$1,number))
})();
var state__45810__auto__ = (function (){var statearr_73038 = f__45809__auto__();
(statearr_73038[(6)] = c__45808__auto__);

return statearr_73038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,map__72939,map__72939__$1,number))
);

return c__45808__auto__;
}));
com.wsscode.pathom.book.connect.batch.app_registry = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.batch.list_things,com.wsscode.pathom.book.connect.batch.slow_resolver], null);
com.wsscode.pathom.book.connect.batch.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2,com.wsscode.pathom.connect.open_ident_reader], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.batch.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.batch.js.map
