goog.provide('com.wsscode.pathom.book.connect.batch');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
goog.require('cljs.core.async');
goog.require('com.wsscode.pathom.profile');
com.wsscode.pathom.book.connect.batch.list_things = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch","list-things","com.wsscode.pathom.book.connect.batch/list-things",-114820299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438)], null)], null)], null)], null),(function com$wsscode$pathom$book$connect$batch$list_things(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(10)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(18)], null)], null)], null);
}));
com.wsscode.pathom.book.connect.batch.slow_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch","slow-resolver","com.wsscode.pathom.book.connect.batch/slow-resolver",555020778,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number-added","number-added",1161719489)], null)], null),(function com$wsscode$pathom$book$connect$batch$slow_resolver(_,p__53694){
var map__53696 = p__53694;
var map__53696__$1 = (((((!((map__53696 == null))))?(((((map__53696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53696):map__53696);
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53696__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,map__53696,map__53696__$1,number){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,map__53696,map__53696__$1,number){
return (function (state_53738){
var state_val_53739 = (state_53738[(1)]);
if((state_val_53739 === (1))){
var inst_53715 = cljs.core.async.timeout((1000));
var state_53738__$1 = state_53738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53738__$1,(2),inst_53715);
} else {
if((state_val_53739 === (2))){
var inst_53717 = (state_53738[(2)]);
var inst_53725 = [new cljs.core.Keyword(null,"number-added","number-added",1161719489)];
var inst_53732 = (number + (1));
var inst_53733 = [inst_53732];
var inst_53734 = cljs.core.PersistentHashMap.fromArrays(inst_53725,inst_53733);
var state_53738__$1 = (function (){var statearr_53748 = state_53738;
(statearr_53748[(7)] = inst_53717);

return statearr_53748;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53738__$1,inst_53734);
} else {
return null;
}
}
});})(c__39003__auto__,map__53696,map__53696__$1,number))
;
return ((function (switch__38929__auto__,c__39003__auto__,map__53696,map__53696__$1,number){
return (function() {
var com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38930__auto____0 = (function (){
var statearr_53762 = [null,null,null,null,null,null,null,null];
(statearr_53762[(0)] = com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38930__auto__);

(statearr_53762[(1)] = (1));

return statearr_53762;
});
var com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38930__auto____1 = (function (state_53738){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_53738);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e53783){if((e53783 instanceof Object)){
var ex__38933__auto__ = e53783;
var statearr_53792_53839 = state_53738;
(statearr_53792_53839[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53783;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53842 = state_53738;
state_53738 = G__53842;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38930__auto__ = function(state_53738){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38930__auto____1.call(this,state_53738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38930__auto____0;
com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38930__auto____1;
return com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,map__53696,map__53696__$1,number))
})();
var state__39005__auto__ = (function (){var statearr_53797 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_53797[(6)] = c__39003__auto__);

return statearr_53797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,map__53696,map__53696__$1,number))
);

return c__39003__auto__;
}));
com.wsscode.pathom.book.connect.batch.app_registry = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.batch.list_things,com.wsscode.pathom.book.connect.batch.slow_resolver], null);
com.wsscode.pathom.book.connect.batch.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2,com.wsscode.pathom.connect.open_ident_reader], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.batch.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.batch.js.map
