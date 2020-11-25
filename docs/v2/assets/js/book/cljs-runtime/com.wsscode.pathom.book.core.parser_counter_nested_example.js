goog.provide('com.wsscode.pathom.book.core.parser_counter_nested_example');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('cljs.core.async');
com.wsscode.pathom.book.core.parser_counter_nested_example.join_walk_reader = (function com$wsscode$pathom$book$core$parser_counter_nested_example$join_walk_reader(p__65704){
var map__65706 = p__65704;
var map__65706__$1 = (((((!((map__65706 == null))))?(((((map__65706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65706):map__65706);
var env = map__65706__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65706__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.truth_(query)){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.book.core.parser_counter_nested_example.count_parser = com.wsscode.pathom.core.parser(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.core.parser_counter_nested_example.join_walk_reader,(function (p1__65712_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.book.core.parser-counter-nested-example","counter","com.wsscode.pathom.book.core.parser-counter-nested-example/counter",-446887874).cljs$core$IFn$_invoke$arity$1(p1__65712_SHARP_),cljs.core.inc);
})], null)], null)], null));
com.wsscode.pathom.book.core.parser_counter_nested_example.parser = (function com$wsscode$pathom$book$core$parser_counter_nested_example$parser(env,tx){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__){
return (function (state_65725){
var state_val_65727 = (state_65725[(1)]);
if((state_val_65727 === (1))){
var inst_65720 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var inst_65721 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.book.core.parser-counter-nested-example","counter","com.wsscode.pathom.book.core.parser-counter-nested-example/counter",-446887874),inst_65720);
var inst_65722 = com.wsscode.pathom.book.core.parser_counter_nested_example.count_parser(inst_65721,tx);
var state_65725__$1 = state_65725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65725__$1,inst_65722);
} else {
return null;
}
});})(c__48839__auto__))
;
return ((function (switch__48139__auto__,c__48839__auto__){
return (function() {
var com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__48140__auto____0 = (function (){
var statearr_65734 = [null,null,null,null,null,null,null];
(statearr_65734[(0)] = com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__48140__auto__);

(statearr_65734[(1)] = (1));

return statearr_65734;
});
var com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__48140__auto____1 = (function (state_65725){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_65725);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e65741){var ex__48143__auto__ = e65741;
var statearr_65742_65778 = state_65725;
(statearr_65742_65778[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_65725[(4)]))){
var statearr_65743_65779 = state_65725;
(statearr_65743_65779[(1)] = cljs.core.first((state_65725[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65780 = state_65725;
state_65725 = G__65780;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__48140__auto__ = function(state_65725){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__48140__auto____1.call(this,state_65725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__48140__auto____0;
com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__48140__auto____1;
return com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__))
})();
var state__48841__auto__ = (function (){var statearr_65750 = f__48840__auto__();
(statearr_65750[(6)] = c__48839__auto__);

return statearr_65750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__))
);

return c__48839__auto__;
});

//# sourceMappingURL=com.wsscode.pathom.book.core.parser_counter_nested_example.js.map
