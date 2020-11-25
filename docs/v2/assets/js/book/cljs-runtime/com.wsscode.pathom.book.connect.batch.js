goog.provide('com.wsscode.pathom.book.connect.batch');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
goog.require('cljs.core.async');
goog.require('com.wsscode.pathom.profile');
com.wsscode.pathom.book.connect.batch.list_things = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch","list-things","com.wsscode.pathom.book.connect.batch/list-things",-114820299,null),(function (){var G__65078 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438)], null)], null)], null)], null);
return G__65078;

})(),(function com$wsscode$pathom$book$connect$batch$list_things(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(10)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(18)], null)], null)], null);
}));
com.wsscode.pathom.book.connect.batch.slow_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch","slow-resolver","com.wsscode.pathom.book.connect.batch/slow-resolver",555020778,null),(function (){var G__65167 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number-added","number-added",1161719489)], null)], null);
return G__65167;

})(),(function com$wsscode$pathom$book$connect$batch$slow_resolver(_,p__65190){
var map__65199 = p__65190;
var map__65199__$1 = (((((!((map__65199 == null))))?(((((map__65199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65199):map__65199);
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65199__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,map__65199,map__65199__$1,number){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,map__65199,map__65199__$1,number){
return (function (state_65235){
var state_val_65236 = (state_65235[(1)]);
if((state_val_65236 === (1))){
var inst_65224 = cljs.core.async.timeout((1000));
var state_65235__$1 = state_65235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65235__$1,(2),inst_65224);
} else {
if((state_val_65236 === (2))){
var inst_65226 = (state_65235[(2)]);
var inst_65227 = [new cljs.core.Keyword(null,"number-added","number-added",1161719489)];
var inst_65231 = (number + (1));
var inst_65232 = [inst_65231];
var inst_65233 = cljs.core.PersistentHashMap.fromArrays(inst_65227,inst_65232);
var state_65235__$1 = (function (){var statearr_65285 = state_65235;
(statearr_65285[(7)] = inst_65226);

return statearr_65285;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_65235__$1,inst_65233);
} else {
return null;
}
}
});})(c__48839__auto__,map__65199,map__65199__$1,number))
;
return ((function (switch__48139__auto__,c__48839__auto__,map__65199,map__65199__$1,number){
return (function() {
var com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__48140__auto____0 = (function (){
var statearr_65299 = [null,null,null,null,null,null,null,null];
(statearr_65299[(0)] = com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__48140__auto__);

(statearr_65299[(1)] = (1));

return statearr_65299;
});
var com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__48140__auto____1 = (function (state_65235){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_65235);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e65310){var ex__48143__auto__ = e65310;
var statearr_65313_65399 = state_65235;
(statearr_65313_65399[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_65235[(4)]))){
var statearr_65319_65405 = state_65235;
(statearr_65319_65405[(1)] = cljs.core.first((state_65235[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65418 = state_65235;
state_65235 = G__65418;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__48140__auto__ = function(state_65235){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__48140__auto____1.call(this,state_65235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__48140__auto____0;
com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__48140__auto____1;
return com$wsscode$pathom$book$connect$batch$slow_resolver_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,map__65199,map__65199__$1,number))
})();
var state__48841__auto__ = (function (){var statearr_65332 = f__48840__auto__();
(statearr_65332[(6)] = c__48839__auto__);

return statearr_65332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,map__65199,map__65199__$1,number))
);

return c__48839__auto__;
}));
com.wsscode.pathom.book.connect.batch.app_registry = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.batch.list_things,com.wsscode.pathom.book.connect.batch.slow_resolver], null);
com.wsscode.pathom.book.connect.batch.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2,com.wsscode.pathom.connect.open_ident_reader], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.batch.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.batch.js.map
