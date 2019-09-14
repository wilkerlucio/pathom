goog.provide('com.wsscode.pathom.book.connect.batch');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
goog.require('cljs.core.async');
goog.require('com.wsscode.pathom.profile');
com.wsscode.pathom.book.connect.batch.list_things = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch","list-things","com.wsscode.pathom.book.connect.batch/list-things",-114820299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438)], null)], null)], null)], null),(function com$wsscode$pathom$book$connect$batch$list_things(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(10)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(18)], null)], null)], null);
}));
com.wsscode.pathom.book.connect.batch.slow_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch","slow-resolver","com.wsscode.pathom.book.connect.batch/slow-resolver",555020778,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number-added","number-added",1161719489)], null)], null),(function com$wsscode$pathom$book$connect$batch$slow_resolver(_,p__52896){
var map__52898 = p__52896;
var map__52898__$1 = (((((!((map__52898 == null))))?(((((map__52898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52898):map__52898);
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52898__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,map__52898,map__52898__$1,number){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,map__52898,map__52898__$1,number){
return (function (state_52925){
var state_val_52926 = (state_52925[(1)]);
if((state_val_52926 === (1))){
var inst_52912 = cljs.core.async.timeout((1000));
var state_52925__$1 = state_52925;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52925__$1,(2),inst_52912);
} else {
if((state_val_52926 === (2))){
var inst_52914 = (state_52925[(2)]);
var inst_52917 = [new cljs.core.Keyword(null,"number-added","number-added",1161719489)];
var inst_52919 = (number + (1));
var inst_52920 = [inst_52919];
var inst_52922 = cljs.core.PersistentHashMap.fromArrays(inst_52917,inst_52920);
var state_52925__$1 = (function (){var statearr_52950 = state_52925;
(statearr_52950[(7)] = inst_52914);

return statearr_52950;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52925__$1,inst_52922);
} else {
return null;
}
}
});})(c__38971__auto__,map__52898,map__52898__$1,number))
;
return ((function (switch__38924__auto__,c__38971__auto__,map__52898,map__52898__$1,number){
return (function() {
var com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38925__auto____0 = (function (){
var statearr_52954 = [null,null,null,null,null,null,null,null];
(statearr_52954[(0)] = com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38925__auto__);

(statearr_52954[(1)] = (1));

return statearr_52954;
});
var com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38925__auto____1 = (function (state_52925){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_52925);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e52959){if((e52959 instanceof Object)){
var ex__38928__auto__ = e52959;
var statearr_52965_53034 = state_52925;
(statearr_52965_53034[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52959;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53036 = state_52925;
state_52925 = G__53036;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38925__auto__ = function(state_52925){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38925__auto____1.call(this,state_52925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38925__auto____0;
com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38925__auto____1;
return com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,map__52898,map__52898__$1,number))
})();
var state__38973__auto__ = (function (){var statearr_52987 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_52987[(6)] = c__38971__auto__);

return statearr_52987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,map__52898,map__52898__$1,number))
);

return c__38971__auto__;
}));
com.wsscode.pathom.book.connect.batch.app_registry = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.batch.list_things,com.wsscode.pathom.book.connect.batch.slow_resolver], null);
com.wsscode.pathom.book.connect.batch.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2,com.wsscode.pathom.connect.open_ident_reader], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.batch.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.batch.js.map
