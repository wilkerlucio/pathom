goog.provide('com.wsscode.pathom.book.connect.batch2');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
goog.require('cljs.core.async');
com.wsscode.pathom.book.connect.batch2.list_things = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch2","list-things","com.wsscode.pathom.book.connect.batch2/list-things",-1418728915,null),(function (){var G__65063 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438)], null)], null)], null)], null);
return G__65063;

})(),(function com$wsscode$pathom$book$connect$batch2$list_things(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(10)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(18)], null)], null)], null);
}));
com.wsscode.pathom.book.connect.batch2.slow_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch2","slow-resolver","com.wsscode.pathom.book.connect.batch2/slow-resolver",-135470350,null),(function (){var G__65117 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number-added","number-added",1161719489)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),true], null);
return G__65117;

})(),(function com$wsscode$pathom$book$connect$batch2$slow_resolver(_,input){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__){
return (function (state_65195){
var state_val_65196 = (state_65195[(1)]);
if((state_val_65196 === (1))){
var inst_65161 = cljs.core.async.timeout((1000));
var state_65195__$1 = state_65195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65195__$1,(2),inst_65161);
} else {
if((state_val_65196 === (2))){
var inst_65164 = (state_65195[(2)]);
var inst_65165 = cljs.core.sequential_QMARK_(input);
var state_65195__$1 = (function (){var statearr_65247 = state_65195;
(statearr_65247[(7)] = inst_65164);

return statearr_65247;
})();
if(inst_65165){
var statearr_65258_65389 = state_65195__$1;
(statearr_65258_65389[(1)] = (3));

} else {
var statearr_65270_65393 = state_65195__$1;
(statearr_65270_65393[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65196 === (3))){
var inst_65169 = (function (){return ((function (state_val_65196,c__48839__auto__){
return (function (v){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number-added","number-added",1161719489),(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(v) + (1))], null);
});
;})(state_val_65196,c__48839__auto__))
})();
var inst_65170 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_65169,input);
var state_65195__$1 = state_65195;
var statearr_65291_65408 = state_65195__$1;
(statearr_65291_65408[(2)] = inst_65170);

(statearr_65291_65408[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65196 === (4))){
var inst_65176 = [new cljs.core.Keyword(null,"number-added","number-added",1161719489)];
var inst_65178 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(input);
var inst_65179 = (inst_65178 + (1));
var inst_65180 = [inst_65179];
var inst_65181 = cljs.core.PersistentHashMap.fromArrays(inst_65176,inst_65180);
var state_65195__$1 = state_65195;
var statearr_65305_65422 = state_65195__$1;
(statearr_65305_65422[(2)] = inst_65181);

(statearr_65305_65422[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65196 === (5))){
var inst_65183 = (state_65195[(2)]);
var state_65195__$1 = state_65195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65195__$1,inst_65183);
} else {
return null;
}
}
}
}
}
});})(c__48839__auto__))
;
return ((function (switch__48139__auto__,c__48839__auto__){
return (function() {
var com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__48140__auto____0 = (function (){
var statearr_65325 = [null,null,null,null,null,null,null,null];
(statearr_65325[(0)] = com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__48140__auto__);

(statearr_65325[(1)] = (1));

return statearr_65325;
});
var com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__48140__auto____1 = (function (state_65195){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_65195);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e65331){var ex__48143__auto__ = e65331;
var statearr_65334_65428 = state_65195;
(statearr_65334_65428[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_65195[(4)]))){
var statearr_65336_65429 = state_65195;
(statearr_65336_65429[(1)] = cljs.core.first((state_65195[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65434 = state_65195;
state_65195 = G__65434;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__48140__auto__ = function(state_65195){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__48140__auto____1.call(this,state_65195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__48140__auto____0;
com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__48140__auto____1;
return com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__))
})();
var state__48841__auto__ = (function (){var statearr_65340 = f__48840__auto__();
(statearr_65340[(6)] = c__48839__auto__);

return statearr_65340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__))
);

return c__48839__auto__;
}));
com.wsscode.pathom.book.connect.batch2.app_registry = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.batch2.list_things,com.wsscode.pathom.book.connect.batch2.slow_resolver], null);
com.wsscode.pathom.book.connect.batch2.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2,com.wsscode.pathom.connect.open_ident_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411),(function (env,error){
console.error("ERROR",error);

return com.wsscode.pathom.core.error_str(error);
})], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.batch2.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.batch2.js.map
