goog.provide('com.wsscode.pathom.book.core.parser_counter_nested_example');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('cljs.core.async');
com.wsscode.pathom.book.core.parser_counter_nested_example.join_walk_reader = (function com$wsscode$pathom$book$core$parser_counter_nested_example$join_walk_reader(p__73348){
var map__73349 = p__73348;
var map__73349__$1 = (((((!((map__73349 == null))))?(((((map__73349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73349):map__73349);
var env = map__73349__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73349__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.truth_(query)){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.book.core.parser_counter_nested_example.count_parser = com.wsscode.pathom.core.parser(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.core.parser_counter_nested_example.join_walk_reader,(function (p1__73360_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.book.core.parser-counter-nested-example","counter","com.wsscode.pathom.book.core.parser-counter-nested-example/counter",-446887874).cljs$core$IFn$_invoke$arity$1(p1__73360_SHARP_),cljs.core.inc);
})], null)], null)], null));
com.wsscode.pathom.book.core.parser_counter_nested_example.parser = (function com$wsscode$pathom$book$core$parser_counter_nested_example$parser(env,tx){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__){
return (function (state_73369){
var state_val_73370 = (state_73369[(1)]);
if((state_val_73370 === (1))){
var inst_73365 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var inst_73366 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.book.core.parser-counter-nested-example","counter","com.wsscode.pathom.book.core.parser-counter-nested-example/counter",-446887874),inst_73365);
var inst_73367 = com.wsscode.pathom.book.core.parser_counter_nested_example.count_parser(inst_73366,tx);
var state_73369__$1 = state_73369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73369__$1,inst_73367);
} else {
return null;
}
});})(c__45808__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__){
return (function() {
var com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__45526__auto____0 = (function (){
var statearr_73377 = [null,null,null,null,null,null,null];
(statearr_73377[(0)] = com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__45526__auto__);

(statearr_73377[(1)] = (1));

return statearr_73377;
});
var com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__45526__auto____1 = (function (state_73369){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_73369);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e73379){if((e73379 instanceof Object)){
var ex__45529__auto__ = e73379;
var statearr_73387_73401 = state_73369;
(statearr_73387_73401[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73379;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73402 = state_73369;
state_73369 = G__73402;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__45526__auto__ = function(state_73369){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__45526__auto____1.call(this,state_73369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__45526__auto____0;
com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__45526__auto____1;
return com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__))
})();
var state__45810__auto__ = (function (){var statearr_73394 = f__45809__auto__();
(statearr_73394[(6)] = c__45808__auto__);

return statearr_73394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__))
);

return c__45808__auto__;
});

//# sourceMappingURL=com.wsscode.pathom.book.core.parser_counter_nested_example.js.map
