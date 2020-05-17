goog.provide('com.wsscode.pathom.book.core.parser_counter_example');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('cljs.core.async');
com.wsscode.pathom.book.core.parser_counter_example.count_parser = com.wsscode.pathom.core.parser(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),(function (p1__61380_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.book.core.parser-counter-example","counter","com.wsscode.pathom.book.core.parser-counter-example/counter",1694795882).cljs$core$IFn$_invoke$arity$1(p1__61380_SHARP_),cljs.core.inc);
})], null)], null));
com.wsscode.pathom.book.core.parser_counter_example.parser = (function com$wsscode$pathom$book$core$parser_counter_example$parser(env,tx){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_61385){
var state_val_61386 = (state_61385[(1)]);
if((state_val_61386 === (1))){
var inst_61381 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var inst_61382 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.book.core.parser-counter-example","counter","com.wsscode.pathom.book.core.parser-counter-example/counter",1694795882),inst_61381);
var inst_61383 = com.wsscode.pathom.book.core.parser_counter_example.count_parser(inst_61382,tx);
var state_61385__$1 = state_61385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61385__$1,inst_61383);
} else {
return null;
}
});})(c__47946__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__){
return (function() {
var com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__47664__auto____0 = (function (){
var statearr_61388 = [null,null,null,null,null,null,null];
(statearr_61388[(0)] = com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__47664__auto__);

(statearr_61388[(1)] = (1));

return statearr_61388;
});
var com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__47664__auto____1 = (function (state_61385){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_61385);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e61389){if((e61389 instanceof Object)){
var ex__47667__auto__ = e61389;
var statearr_61390_61399 = state_61385;
(statearr_61390_61399[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61389;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61402 = state_61385;
state_61385 = G__61402;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__47664__auto__ = function(state_61385){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__47664__auto____1.call(this,state_61385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_61392 = f__47947__auto__();
(statearr_61392[(6)] = c__47946__auto__);

return statearr_61392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
});

//# sourceMappingURL=com.wsscode.pathom.book.core.parser_counter_example.js.map
