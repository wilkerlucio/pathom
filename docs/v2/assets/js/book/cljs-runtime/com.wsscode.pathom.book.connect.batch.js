goog.provide('com.wsscode.pathom.book.connect.batch');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
goog.require('cljs.core.async');
goog.require('com.wsscode.pathom.profile');
com.wsscode.pathom.book.connect.batch.list_things = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch","list-things","com.wsscode.pathom.book.connect.batch/list-things",-114820299,null),(function (){var G__93295 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438)], null)], null)], null)], null);
return G__93295;

})(),(function com$wsscode$pathom$book$connect$batch$list_things(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(10)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(18)], null)], null)], null);
}));
com.wsscode.pathom.book.connect.batch.slow_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch","slow-resolver","com.wsscode.pathom.book.connect.batch/slow-resolver",555020778,null),(function (){var G__93333 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number-added","number-added",1161719489)], null)], null);
return G__93333;

})(),(function com$wsscode$pathom$book$connect$batch$slow_resolver(_,p__93340){
var map__93343 = p__93340;
var map__93343__$1 = (((((!((map__93343 == null))))?(((((map__93343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93343):map__93343);
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93343__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__93343,map__93343__$1,number){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__93343,map__93343__$1,number){
return (function (state_93397){
var state_val_93400 = (state_93397[(1)]);
if((state_val_93400 === (1))){
var inst_93379 = cljs.core.async.timeout((1000));
var state_93397__$1 = state_93397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93397__$1,(2),inst_93379);
} else {
if((state_val_93400 === (2))){
var inst_93381 = (state_93397[(2)]);
var inst_93383 = [new cljs.core.Keyword(null,"number-added","number-added",1161719489)];
var inst_93390 = (number + (1));
var inst_93391 = [inst_93390];
var inst_93392 = cljs.core.PersistentHashMap.fromArrays(inst_93383,inst_93391);
var state_93397__$1 = (function (){var statearr_93476 = state_93397;
(statearr_93476[(7)] = inst_93381);

return statearr_93476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_93397__$1,inst_93392);
} else {
return null;
}
}
});})(c__47946__auto__,map__93343,map__93343__$1,number))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__93343,map__93343__$1,number){
return (function() {
var com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__47664__auto____0 = (function (){
var statearr_93484 = [null,null,null,null,null,null,null,null];
(statearr_93484[(0)] = com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__47664__auto__);

(statearr_93484[(1)] = (1));

return statearr_93484;
});
var com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__47664__auto____1 = (function (state_93397){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_93397);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e93488){if((e93488 instanceof Object)){
var ex__47667__auto__ = e93488;
var statearr_93494_93582 = state_93397;
(statearr_93494_93582[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_93397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93488;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93585 = state_93397;
state_93397 = G__93585;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__47664__auto__ = function(state_93397){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__47664__auto____1.call(this,state_93397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__93343,map__93343__$1,number))
})();
var state__47948__auto__ = (function (){var statearr_93506 = f__47947__auto__();
(statearr_93506[(6)] = c__47946__auto__);

return statearr_93506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__93343,map__93343__$1,number))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.connect.batch.app_registry = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.batch.list_things,com.wsscode.pathom.book.connect.batch.slow_resolver], null);
com.wsscode.pathom.book.connect.batch.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2,com.wsscode.pathom.connect.open_ident_reader], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.batch.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.batch.js.map
