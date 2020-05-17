goog.provide('com.wsscode.pathom.book.connect.batch2');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
goog.require('cljs.core.async');
com.wsscode.pathom.book.connect.batch2.list_things = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch2","list-things","com.wsscode.pathom.book.connect.batch2/list-things",-1418728915,null),(function (){var G__60898 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438)], null)], null)], null)], null);
return G__60898;

})(),(function com$wsscode$pathom$book$connect$batch2$list_things(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(10)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(18)], null)], null)], null);
}));
com.wsscode.pathom.book.connect.batch2.slow_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch2","slow-resolver","com.wsscode.pathom.book.connect.batch2/slow-resolver",-135470350,null),(function (){var G__60926 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number-added","number-added",1161719489)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),true], null);
return G__60926;

})(),(function com$wsscode$pathom$book$connect$batch2$slow_resolver(_,input){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_61068){
var state_val_61070 = (state_61068[(1)]);
if((state_val_61070 === (1))){
var inst_60941 = cljs.core.async.timeout((1000));
var state_61068__$1 = state_61068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61068__$1,(2),inst_60941);
} else {
if((state_val_61070 === (2))){
var inst_60943 = (state_61068[(2)]);
var inst_60945 = cljs.core.sequential_QMARK_(input);
var state_61068__$1 = (function (){var statearr_61114 = state_61068;
(statearr_61114[(7)] = inst_60943);

return statearr_61114;
})();
if(inst_60945){
var statearr_61117_61227 = state_61068__$1;
(statearr_61117_61227[(1)] = (3));

} else {
var statearr_61119_61228 = state_61068__$1;
(statearr_61119_61228[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (3))){
var inst_61002 = (function (){return ((function (state_val_61070,c__47946__auto__){
return (function (v){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number-added","number-added",1161719489),(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(v) + (1))], null);
});
;})(state_val_61070,c__47946__auto__))
})();
var inst_61003 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_61002,input);
var state_61068__$1 = state_61068;
var statearr_61124_61230 = state_61068__$1;
(statearr_61124_61230[(2)] = inst_61003);

(statearr_61124_61230[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (4))){
var inst_61034 = [new cljs.core.Keyword(null,"number-added","number-added",1161719489)];
var inst_61042 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(input);
var inst_61045 = (inst_61042 + (1));
var inst_61046 = [inst_61045];
var inst_61047 = cljs.core.PersistentHashMap.fromArrays(inst_61034,inst_61046);
var state_61068__$1 = state_61068;
var statearr_61191_61234 = state_61068__$1;
(statearr_61191_61234[(2)] = inst_61047);

(statearr_61191_61234[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (5))){
var inst_61061 = (state_61068[(2)]);
var state_61068__$1 = state_61068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61068__$1,inst_61061);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__){
return (function() {
var com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__47664__auto____0 = (function (){
var statearr_61195 = [null,null,null,null,null,null,null,null];
(statearr_61195[(0)] = com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__47664__auto__);

(statearr_61195[(1)] = (1));

return statearr_61195;
});
var com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__47664__auto____1 = (function (state_61068){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_61068);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e61197){if((e61197 instanceof Object)){
var ex__47667__auto__ = e61197;
var statearr_61198_61237 = state_61068;
(statearr_61198_61237[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61197;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61239 = state_61068;
state_61068 = G__61239;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__47664__auto__ = function(state_61068){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__47664__auto____1.call(this,state_61068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_61201 = f__47947__auto__();
(statearr_61201[(6)] = c__47946__auto__);

return statearr_61201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.connect.batch2.app_registry = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.batch2.list_things,com.wsscode.pathom.book.connect.batch2.slow_resolver], null);
com.wsscode.pathom.book.connect.batch2.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2,com.wsscode.pathom.connect.open_ident_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411),(function (env,error){
console.error("ERROR",error);

return com.wsscode.pathom.core.error_str(error);
})], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.batch2.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.batch2.js.map
