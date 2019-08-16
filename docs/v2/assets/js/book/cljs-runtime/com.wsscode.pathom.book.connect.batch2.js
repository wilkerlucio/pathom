goog.provide('com.wsscode.pathom.book.connect.batch2');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
goog.require('cljs.core.async');
com.wsscode.pathom.book.connect.batch2.list_things = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch2","list-things","com.wsscode.pathom.book.connect.batch2/list-things",-1418728915,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438)], null)], null)], null)], null),(function com$wsscode$pathom$book$connect$batch2$list_things(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(10)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(18)], null)], null)], null);
}));
com.wsscode.pathom.book.connect.batch2.slow_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch2","slow-resolver","com.wsscode.pathom.book.connect.batch2/slow-resolver",-135470350,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number-added","number-added",1161719489)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),true], null),(function com$wsscode$pathom$book$connect$batch2$slow_resolver(_,input){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__){
return (function (state_53514){
var state_val_53515 = (state_53514[(1)]);
if((state_val_53515 === (1))){
var inst_53498 = cljs.core.async.timeout((1000));
var state_53514__$1 = state_53514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53514__$1,(2),inst_53498);
} else {
if((state_val_53515 === (2))){
var inst_53500 = (state_53514[(2)]);
var inst_53501 = cljs.core.sequential_QMARK_(input);
var state_53514__$1 = (function (){var statearr_53523 = state_53514;
(statearr_53523[(7)] = inst_53500);

return statearr_53523;
})();
if(inst_53501){
var statearr_53536_53651 = state_53514__$1;
(statearr_53536_53651[(1)] = (3));

} else {
var statearr_53537_53652 = state_53514__$1;
(statearr_53537_53652[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (3))){
var inst_53503 = (function (){return ((function (state_val_53515,c__39084__auto__){
return (function (v){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number-added","number-added",1161719489),(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(v) + (1))], null);
});
;})(state_val_53515,c__39084__auto__))
})();
var inst_53504 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_53503,input);
var state_53514__$1 = state_53514;
var statearr_53548_53655 = state_53514__$1;
(statearr_53548_53655[(2)] = inst_53504);

(statearr_53548_53655[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (4))){
var inst_53506 = [new cljs.core.Keyword(null,"number-added","number-added",1161719489)];
var inst_53507 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(input);
var inst_53508 = (inst_53507 + (1));
var inst_53509 = [inst_53508];
var inst_53510 = cljs.core.PersistentHashMap.fromArrays(inst_53506,inst_53509);
var state_53514__$1 = state_53514;
var statearr_53549_53657 = state_53514__$1;
(statearr_53549_53657[(2)] = inst_53510);

(statearr_53549_53657[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (5))){
var inst_53512 = (state_53514[(2)]);
var state_53514__$1 = state_53514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53514__$1,inst_53512);
} else {
return null;
}
}
}
}
}
});})(c__39084__auto__))
;
return ((function (switch__38786__auto__,c__39084__auto__){
return (function() {
var com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38787__auto____0 = (function (){
var statearr_53574 = [null,null,null,null,null,null,null,null];
(statearr_53574[(0)] = com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38787__auto__);

(statearr_53574[(1)] = (1));

return statearr_53574;
});
var com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38787__auto____1 = (function (state_53514){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_53514);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e53580){if((e53580 instanceof Object)){
var ex__38790__auto__ = e53580;
var statearr_53582_53663 = state_53514;
(statearr_53582_53663[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53580;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53665 = state_53514;
state_53514 = G__53665;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38787__auto__ = function(state_53514){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38787__auto____1.call(this,state_53514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38787__auto____0;
com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38787__auto____1;
return com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__))
})();
var state__39086__auto__ = (function (){var statearr_53583 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_53583[(6)] = c__39084__auto__);

return statearr_53583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__))
);

return c__39084__auto__;
}));
com.wsscode.pathom.book.connect.batch2.app_registry = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.batch2.list_things,com.wsscode.pathom.book.connect.batch2.slow_resolver], null);
com.wsscode.pathom.book.connect.batch2.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2,com.wsscode.pathom.connect.open_ident_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411),(function (env,error){
console.error("ERROR",error);

return com.wsscode.pathom.core.error_str(error);
})], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.batch2.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.batch2.js.map
