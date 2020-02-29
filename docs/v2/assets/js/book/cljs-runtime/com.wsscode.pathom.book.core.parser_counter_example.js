goog.provide('com.wsscode.pathom.book.core.parser_counter_example');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('cljs.core.async');
com.wsscode.pathom.book.core.parser_counter_example.count_parser = com.wsscode.pathom.core.parser(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),(function (p1__73331_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.book.core.parser-counter-example","counter","com.wsscode.pathom.book.core.parser-counter-example/counter",1694795882).cljs$core$IFn$_invoke$arity$1(p1__73331_SHARP_),cljs.core.inc);
})], null)], null));
com.wsscode.pathom.book.core.parser_counter_example.parser = (function com$wsscode$pathom$book$core$parser_counter_example$parser(env,tx){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__){
return (function (state_73339){
var state_val_73340 = (state_73339[(1)]);
if((state_val_73340 === (1))){
var inst_73335 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var inst_73336 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.book.core.parser-counter-example","counter","com.wsscode.pathom.book.core.parser-counter-example/counter",1694795882),inst_73335);
var inst_73337 = com.wsscode.pathom.book.core.parser_counter_example.count_parser(inst_73336,tx);
var state_73339__$1 = state_73339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73339__$1,inst_73337);
} else {
return null;
}
});})(c__45808__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__){
return (function() {
var com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__45526__auto____0 = (function (){
var statearr_73354 = [null,null,null,null,null,null,null];
(statearr_73354[(0)] = com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__45526__auto__);

(statearr_73354[(1)] = (1));

return statearr_73354;
});
var com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__45526__auto____1 = (function (state_73339){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_73339);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e73356){if((e73356 instanceof Object)){
var ex__45529__auto__ = e73356;
var statearr_73359_73374 = state_73339;
(statearr_73359_73374[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73356;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73375 = state_73339;
state_73339 = G__73375;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__45526__auto__ = function(state_73339){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__45526__auto____1.call(this,state_73339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__45526__auto____0;
com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__45526__auto____1;
return com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__))
})();
var state__45810__auto__ = (function (){var statearr_73364 = f__45809__auto__();
(statearr_73364[(6)] = c__45808__auto__);

return statearr_73364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__))
);

return c__45808__auto__;
});

//# sourceMappingURL=com.wsscode.pathom.book.core.parser_counter_example.js.map
