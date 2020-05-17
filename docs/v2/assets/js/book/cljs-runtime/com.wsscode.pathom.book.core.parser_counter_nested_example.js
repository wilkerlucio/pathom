goog.provide('com.wsscode.pathom.book.core.parser_counter_nested_example');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('cljs.core.async');
com.wsscode.pathom.book.core.parser_counter_nested_example.join_walk_reader = (function com$wsscode$pathom$book$core$parser_counter_nested_example$join_walk_reader(p__61415){
var map__61416 = p__61415;
var map__61416__$1 = (((((!((map__61416 == null))))?(((((map__61416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61416):map__61416);
var env = map__61416__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61416__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.truth_(query)){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.book.core.parser_counter_nested_example.count_parser = com.wsscode.pathom.core.parser(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.core.parser_counter_nested_example.join_walk_reader,(function (p1__61419_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.book.core.parser-counter-nested-example","counter","com.wsscode.pathom.book.core.parser-counter-nested-example/counter",-446887874).cljs$core$IFn$_invoke$arity$1(p1__61419_SHARP_),cljs.core.inc);
})], null)], null)], null));
com.wsscode.pathom.book.core.parser_counter_nested_example.parser = (function com$wsscode$pathom$book$core$parser_counter_nested_example$parser(env,tx){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_61424){
var state_val_61425 = (state_61424[(1)]);
if((state_val_61425 === (1))){
var inst_61420 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var inst_61421 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.book.core.parser-counter-nested-example","counter","com.wsscode.pathom.book.core.parser-counter-nested-example/counter",-446887874),inst_61420);
var inst_61422 = com.wsscode.pathom.book.core.parser_counter_nested_example.count_parser(inst_61421,tx);
var state_61424__$1 = state_61424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61424__$1,inst_61422);
} else {
return null;
}
});})(c__47946__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__){
return (function() {
var com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto____0 = (function (){
var statearr_61426 = [null,null,null,null,null,null,null];
(statearr_61426[(0)] = com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto__);

(statearr_61426[(1)] = (1));

return statearr_61426;
});
var com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto____1 = (function (state_61424){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_61424);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e61427){if((e61427 instanceof Object)){
var ex__47667__auto__ = e61427;
var statearr_61428_61465 = state_61424;
(statearr_61428_61465[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61427;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61467 = state_61424;
state_61424 = G__61467;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto__ = function(state_61424){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto____1.call(this,state_61424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_61432 = f__47947__auto__();
(statearr_61432[(6)] = c__47946__auto__);

return statearr_61432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
});

//# sourceMappingURL=com.wsscode.pathom.book.core.parser_counter_nested_example.js.map
