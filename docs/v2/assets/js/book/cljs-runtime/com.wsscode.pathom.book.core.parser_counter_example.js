goog.provide('com.wsscode.pathom.book.core.parser_counter_example');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('cljs.core.async');
com.wsscode.pathom.book.core.parser_counter_example.count_parser = com.wsscode.pathom.core.parser(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),(function (p1__65688_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.book.core.parser-counter-example","counter","com.wsscode.pathom.book.core.parser-counter-example/counter",1694795882).cljs$core$IFn$_invoke$arity$1(p1__65688_SHARP_),cljs.core.inc);
})], null)], null));
com.wsscode.pathom.book.core.parser_counter_example.parser = (function com$wsscode$pathom$book$core$parser_counter_example$parser(env,tx){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__){
return (function (state_65693){
var state_val_65694 = (state_65693[(1)]);
if((state_val_65694 === (1))){
var inst_65689 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var inst_65690 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.book.core.parser-counter-example","counter","com.wsscode.pathom.book.core.parser-counter-example/counter",1694795882),inst_65689);
var inst_65691 = com.wsscode.pathom.book.core.parser_counter_example.count_parser(inst_65690,tx);
var state_65693__$1 = state_65693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65693__$1,inst_65691);
} else {
return null;
}
});})(c__48839__auto__))
;
return ((function (switch__48139__auto__,c__48839__auto__){
return (function() {
var com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__48140__auto____0 = (function (){
var statearr_65701 = [null,null,null,null,null,null,null];
(statearr_65701[(0)] = com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__48140__auto__);

(statearr_65701[(1)] = (1));

return statearr_65701;
});
var com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__48140__auto____1 = (function (state_65693){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_65693);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e65702){var ex__48143__auto__ = e65702;
var statearr_65703_65731 = state_65693;
(statearr_65703_65731[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_65693[(4)]))){
var statearr_65707_65732 = state_65693;
(statearr_65707_65732[(1)] = cljs.core.first((state_65693[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65737 = state_65693;
state_65693 = G__65737;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__48140__auto__ = function(state_65693){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__48140__auto____1.call(this,state_65693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__48140__auto____0;
com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__48140__auto____1;
return com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__))
})();
var state__48841__auto__ = (function (){var statearr_65711 = f__48840__auto__();
(statearr_65711[(6)] = c__48839__auto__);

return statearr_65711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__))
);

return c__48839__auto__;
});

//# sourceMappingURL=com.wsscode.pathom.book.core.parser_counter_example.js.map
