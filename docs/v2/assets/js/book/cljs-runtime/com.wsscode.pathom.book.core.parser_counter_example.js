goog.provide('com.wsscode.pathom.book.core.parser_counter_example');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('cljs.core.async');
com.wsscode.pathom.book.core.parser_counter_example.count_parser = com.wsscode.pathom.core.parser(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),(function (p1__53194_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.book.core.parser-counter-example","counter","com.wsscode.pathom.book.core.parser-counter-example/counter",1694795882).cljs$core$IFn$_invoke$arity$1(p1__53194_SHARP_),cljs.core.inc);
})], null)], null));
com.wsscode.pathom.book.core.parser_counter_example.parser = (function com$wsscode$pathom$book$core$parser_counter_example$parser(env,tx){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__){
return (function (state_53245){
var state_val_53246 = (state_53245[(1)]);
if((state_val_53246 === (1))){
var inst_53241 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var inst_53242 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.book.core.parser-counter-example","counter","com.wsscode.pathom.book.core.parser-counter-example/counter",1694795882),inst_53241);
var inst_53243 = (com.wsscode.pathom.book.core.parser_counter_example.count_parser.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.book.core.parser_counter_example.count_parser.cljs$core$IFn$_invoke$arity$2(inst_53242,tx) : com.wsscode.pathom.book.core.parser_counter_example.count_parser.call(null,inst_53242,tx));
var state_53245__$1 = state_53245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53245__$1,inst_53243);
} else {
return null;
}
});})(c__38971__auto__))
;
return ((function (switch__38924__auto__,c__38971__auto__){
return (function() {
var com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__38925__auto____0 = (function (){
var statearr_53257 = [null,null,null,null,null,null,null];
(statearr_53257[(0)] = com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__38925__auto__);

(statearr_53257[(1)] = (1));

return statearr_53257;
});
var com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__38925__auto____1 = (function (state_53245){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_53245);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e53258){if((e53258 instanceof Object)){
var ex__38928__auto__ = e53258;
var statearr_53259_53333 = state_53245;
(statearr_53259_53333[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53258;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53334 = state_53245;
state_53245 = G__53334;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__38925__auto__ = function(state_53245){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__38925__auto____1.call(this,state_53245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__38925__auto____0;
com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__38925__auto____1;
return com$wsscode$pathom$book$core$parser_counter_example$parser_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__))
})();
var state__38973__auto__ = (function (){var statearr_53261 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_53261[(6)] = c__38971__auto__);

return statearr_53261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__))
);

return c__38971__auto__;
});

//# sourceMappingURL=com.wsscode.pathom.book.core.parser_counter_example.js.map
