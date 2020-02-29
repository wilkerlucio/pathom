goog.provide('com.wsscode.pathom.book.connect.batch2');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
goog.require('cljs.core.async');
com.wsscode.pathom.book.connect.batch2.list_things = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch2","list-things","com.wsscode.pathom.book.connect.batch2/list-things",-1418728915,null),(function (){var G__72840 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438)], null)], null)], null)], null);
return G__72840;

})(),(function com$wsscode$pathom$book$connect$batch2$list_things(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(10)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(18)], null)], null)], null);
}));
com.wsscode.pathom.book.connect.batch2.slow_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch2","slow-resolver","com.wsscode.pathom.book.connect.batch2/slow-resolver",-135470350,null),(function (){var G__72846 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number-added","number-added",1161719489)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),true], null);
return G__72846;

})(),(function com$wsscode$pathom$book$connect$batch2$slow_resolver(_,input){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__){
return (function (state_72935){
var state_val_72936 = (state_72935[(1)]);
if((state_val_72936 === (1))){
var inst_72875 = cljs.core.async.timeout((1000));
var state_72935__$1 = state_72935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72935__$1,(2),inst_72875);
} else {
if((state_val_72936 === (2))){
var inst_72882 = (state_72935[(2)]);
var inst_72889 = cljs.core.sequential_QMARK_(input);
var state_72935__$1 = (function (){var statearr_72955 = state_72935;
(statearr_72955[(7)] = inst_72882);

return statearr_72955;
})();
if(inst_72889){
var statearr_72962_73081 = state_72935__$1;
(statearr_72962_73081[(1)] = (3));

} else {
var statearr_72968_73082 = state_72935__$1;
(statearr_72968_73082[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72936 === (3))){
var inst_72911 = (function (){return ((function (state_val_72936,c__45808__auto__){
return (function (v){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number-added","number-added",1161719489),(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(v) + (1))], null);
});
;})(state_val_72936,c__45808__auto__))
})();
var inst_72913 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_72911,input);
var state_72935__$1 = state_72935;
var statearr_72980_73089 = state_72935__$1;
(statearr_72980_73089[(2)] = inst_72913);

(statearr_72980_73089[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72936 === (4))){
var inst_72916 = [new cljs.core.Keyword(null,"number-added","number-added",1161719489)];
var inst_72923 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(input);
var inst_72924 = (inst_72923 + (1));
var inst_72925 = [inst_72924];
var inst_72926 = cljs.core.PersistentHashMap.fromArrays(inst_72916,inst_72925);
var state_72935__$1 = state_72935;
var statearr_72988_73094 = state_72935__$1;
(statearr_72988_73094[(2)] = inst_72926);

(statearr_72988_73094[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72936 === (5))){
var inst_72928 = (state_72935[(2)]);
var state_72935__$1 = state_72935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72935__$1,inst_72928);
} else {
return null;
}
}
}
}
}
});})(c__45808__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__){
return (function() {
var com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__45526__auto____0 = (function (){
var statearr_73000 = [null,null,null,null,null,null,null,null];
(statearr_73000[(0)] = com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__45526__auto__);

(statearr_73000[(1)] = (1));

return statearr_73000;
});
var com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__45526__auto____1 = (function (state_72935){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_72935);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e73011){if((e73011 instanceof Object)){
var ex__45529__auto__ = e73011;
var statearr_73022_73111 = state_72935;
(statearr_73022_73111[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73011;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73113 = state_72935;
state_72935 = G__73113;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__45526__auto__ = function(state_72935){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__45526__auto____1.call(this,state_72935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__45526__auto____0;
com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__45526__auto____1;
return com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__))
})();
var state__45810__auto__ = (function (){var statearr_73039 = f__45809__auto__();
(statearr_73039[(6)] = c__45808__auto__);

return statearr_73039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__))
);

return c__45808__auto__;
}));
com.wsscode.pathom.book.connect.batch2.app_registry = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.batch2.list_things,com.wsscode.pathom.book.connect.batch2.slow_resolver], null);
com.wsscode.pathom.book.connect.batch2.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2,com.wsscode.pathom.connect.open_ident_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411),(function (env,error){
console.error("ERROR",error);

return com.wsscode.pathom.core.error_str(error);
})], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.batch2.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.batch2.js.map
