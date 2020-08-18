goog.provide('com.wsscode.pathom.book.core.parser_counter_nested_example');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('cljs.core.async');
com.wsscode.pathom.book.core.parser_counter_nested_example.join_walk_reader = (function com$wsscode$pathom$book$core$parser_counter_nested_example$join_walk_reader(p__93847){
var map__93848 = p__93847;
var map__93848__$1 = (((((!((map__93848 == null))))?(((((map__93848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93848):map__93848);
var env = map__93848__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93848__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.truth_(query)){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.book.core.parser_counter_nested_example.count_parser = com.wsscode.pathom.core.parser(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.core.parser_counter_nested_example.join_walk_reader,(function (p1__93852_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.book.core.parser-counter-nested-example","counter","com.wsscode.pathom.book.core.parser-counter-nested-example/counter",-446887874).cljs$core$IFn$_invoke$arity$1(p1__93852_SHARP_),cljs.core.inc);
})], null)], null)], null));
com.wsscode.pathom.book.core.parser_counter_nested_example.parser = (function com$wsscode$pathom$book$core$parser_counter_nested_example$parser(env,tx){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_93871){
var state_val_93872 = (state_93871[(1)]);
if((state_val_93872 === (1))){
var inst_93866 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var inst_93867 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.book.core.parser-counter-nested-example","counter","com.wsscode.pathom.book.core.parser-counter-nested-example/counter",-446887874),inst_93866);
var inst_93868 = com.wsscode.pathom.book.core.parser_counter_nested_example.count_parser(inst_93867,tx);
var state_93871__$1 = state_93871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_93871__$1,inst_93868);
} else {
return null;
}
});})(c__47946__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__){
return (function() {
var com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto____0 = (function (){
var statearr_93905 = [null,null,null,null,null,null,null];
(statearr_93905[(0)] = com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto__);

(statearr_93905[(1)] = (1));

return statearr_93905;
});
var com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto____1 = (function (state_93871){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_93871);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e93906){if((e93906 instanceof Object)){
var ex__47667__auto__ = e93906;
var statearr_93907_93944 = state_93871;
(statearr_93907_93944[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_93871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93906;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93956 = state_93871;
state_93871 = G__93956;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto__ = function(state_93871){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto____1.call(this,state_93871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_93911 = f__47947__auto__();
(statearr_93911[(6)] = c__47946__auto__);

return statearr_93911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
});

//# sourceMappingURL=com.wsscode.pathom.book.core.parser_counter_nested_example.js.map
