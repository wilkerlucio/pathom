goog.provide('com.wsscode.pathom.book.connect.batch2');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
goog.require('cljs.core.async');
com.wsscode.pathom.book.connect.batch2.list_things = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch2","list-things","com.wsscode.pathom.book.connect.batch2/list-things",-1418728915,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438)], null)], null)], null)], null),(function com$wsscode$pathom$book$connect$batch2$list_things(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(10)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),(18)], null)], null)], null);
}));
com.wsscode.pathom.book.connect.batch2.slow_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.batch2","slow-resolver","com.wsscode.pathom.book.connect.batch2/slow-resolver",-135470350,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number-added","number-added",1161719489)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),true], null),(function com$wsscode$pathom$book$connect$batch2$slow_resolver(_,input){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__){
return (function (state_53054){
var state_val_53055 = (state_53054[(1)]);
if((state_val_53055 === (1))){
var inst_53018 = cljs.core.async.timeout((1000));
var state_53054__$1 = state_53054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53054__$1,(2),inst_53018);
} else {
if((state_val_53055 === (2))){
var inst_53020 = (state_53054[(2)]);
var inst_53022 = cljs.core.sequential_QMARK_(input);
var state_53054__$1 = (function (){var statearr_53062 = state_53054;
(statearr_53062[(7)] = inst_53020);

return statearr_53062;
})();
if(inst_53022){
var statearr_53063_53109 = state_53054__$1;
(statearr_53063_53109[(1)] = (3));

} else {
var statearr_53064_53110 = state_53054__$1;
(statearr_53064_53110[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53055 === (3))){
var inst_53043 = (function (){return ((function (state_val_53055,c__38971__auto__){
return (function (v){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number-added","number-added",1161719489),(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(v) + (1))], null);
});
;})(state_val_53055,c__38971__auto__))
})();
var inst_53044 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_53043,input);
var state_53054__$1 = state_53054;
var statearr_53079_53112 = state_53054__$1;
(statearr_53079_53112[(2)] = inst_53044);

(statearr_53079_53112[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53055 === (4))){
var inst_53046 = [new cljs.core.Keyword(null,"number-added","number-added",1161719489)];
var inst_53047 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(input);
var inst_53048 = (inst_53047 + (1));
var inst_53049 = [inst_53048];
var inst_53050 = cljs.core.PersistentHashMap.fromArrays(inst_53046,inst_53049);
var state_53054__$1 = state_53054;
var statearr_53080_53114 = state_53054__$1;
(statearr_53080_53114[(2)] = inst_53050);

(statearr_53080_53114[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53055 === (5))){
var inst_53052 = (state_53054[(2)]);
var state_53054__$1 = state_53054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53054__$1,inst_53052);
} else {
return null;
}
}
}
}
}
});})(c__38971__auto__))
;
return ((function (switch__38924__auto__,c__38971__auto__){
return (function() {
var com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38925__auto____0 = (function (){
var statearr_53081 = [null,null,null,null,null,null,null,null];
(statearr_53081[(0)] = com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38925__auto__);

(statearr_53081[(1)] = (1));

return statearr_53081;
});
var com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38925__auto____1 = (function (state_53054){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_53054);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e53082){if((e53082 instanceof Object)){
var ex__38928__auto__ = e53082;
var statearr_53083_53123 = state_53054;
(statearr_53083_53123[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53082;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53133 = state_53054;
state_53054 = G__53133;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38925__auto__ = function(state_53054){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38925__auto____1.call(this,state_53054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38925__auto____0;
com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38925__auto____1;
return com$wsscode$pathom$book$connect$batch2$slow_resolver_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__))
})();
var state__38973__auto__ = (function (){var statearr_53084 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_53084[(6)] = c__38971__auto__);

return statearr_53084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__))
);

return c__38971__auto__;
}));
com.wsscode.pathom.book.connect.batch2.app_registry = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.batch2.list_things,com.wsscode.pathom.book.connect.batch2.slow_resolver], null);
com.wsscode.pathom.book.connect.batch2.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2,com.wsscode.pathom.connect.open_ident_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411),(function (env,error){
console.error("ERROR",error);

return com.wsscode.pathom.core.error_str(error);
})], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.batch2.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.batch2.js.map
