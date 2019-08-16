goog.provide('com.wsscode.pathom.book.connect.batch');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
goog.require('cljs.core.async');
goog.require('com.wsscode.pathom.profile');
com.wsscode.pathom.book.connect.batch.list_things = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch","list-things","com.wsscode.pathom.book.connect.batch/list-things",-114820299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438)], null)], null)], null)], null),(function com$wsscode$pathom$book$connect$batch$list_things(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(10)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(18)], null)], null)], null);
}));
com.wsscode.pathom.book.connect.batch.slow_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch","slow-resolver","com.wsscode.pathom.book.connect.batch/slow-resolver",555020778,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number-added","number-added",1161719489)], null)], null),(function com$wsscode$pathom$book$connect$batch$slow_resolver(_,p__53604){
var map__53622 = p__53604;
var map__53622__$1 = (((((!((map__53622 == null))))?(((((map__53622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53622):map__53622);
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53622__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,map__53622,map__53622__$1,number){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,map__53622,map__53622__$1,number){
return (function (state_53641){
var state_val_53642 = (state_53641[(1)]);
if((state_val_53642 === (1))){
var inst_53633 = cljs.core.async.timeout((1000));
var state_53641__$1 = state_53641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53641__$1,(2),inst_53633);
} else {
if((state_val_53642 === (2))){
var inst_53635 = (state_53641[(2)]);
var inst_53636 = [new cljs.core.Keyword(null,"number-added","number-added",1161719489)];
var inst_53637 = (number + (1));
var inst_53638 = [inst_53637];
var inst_53639 = cljs.core.PersistentHashMap.fromArrays(inst_53636,inst_53638);
var state_53641__$1 = (function (){var statearr_53645 = state_53641;
(statearr_53645[(7)] = inst_53635);

return statearr_53645;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53641__$1,inst_53639);
} else {
return null;
}
}
});})(c__39084__auto__,map__53622,map__53622__$1,number))
;
return ((function (switch__38786__auto__,c__39084__auto__,map__53622,map__53622__$1,number){
return (function() {
var com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38787__auto____0 = (function (){
var statearr_53646 = [null,null,null,null,null,null,null,null];
(statearr_53646[(0)] = com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38787__auto__);

(statearr_53646[(1)] = (1));

return statearr_53646;
});
var com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38787__auto____1 = (function (state_53641){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_53641);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e53647){if((e53647 instanceof Object)){
var ex__38790__auto__ = e53647;
var statearr_53648_53702 = state_53641;
(statearr_53648_53702[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53647;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53707 = state_53641;
state_53641 = G__53707;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38787__auto__ = function(state_53641){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38787__auto____1.call(this,state_53641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38787__auto____0;
com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38787__auto____1;
return com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,map__53622,map__53622__$1,number))
})();
var state__39086__auto__ = (function (){var statearr_53649 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_53649[(6)] = c__39084__auto__);

return statearr_53649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,map__53622,map__53622__$1,number))
);

return c__39084__auto__;
}));
com.wsscode.pathom.book.connect.batch.app_registry = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.batch.list_things,com.wsscode.pathom.book.connect.batch.slow_resolver], null);
com.wsscode.pathom.book.connect.batch.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2,com.wsscode.pathom.connect.open_ident_reader], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.batch.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.batch.js.map
