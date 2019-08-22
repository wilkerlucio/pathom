goog.provide('com.wsscode.pathom.book.async.js_promises');
goog.require('cljs.core');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.core');
goog.require('goog.object');
com.wsscode.pathom.book.async.js_promises.reader = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dog.ceo","random-dog-url","dog.ceo/random-dog-url",-389165241),(function (_){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__){
return (function (state_49445){
var state_val_49447 = (state_49445[(1)]);
if((state_val_49447 === (1))){
var state_49445__$1 = state_49445;
var statearr_49455_49481 = state_49445__$1;
(statearr_49455_49481[(2)] = null);

(statearr_49455_49481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49447 === (2))){
var inst_49443 = (state_49445[(2)]);
var state_49445__$1 = state_49445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49445__$1,inst_49443);
} else {
if((state_val_49447 === (3))){
var inst_49424 = (state_49445[(2)]);
var state_49445__$1 = state_49445;
var statearr_49458_49482 = state_49445__$1;
(statearr_49458_49482[(2)] = inst_49424);


cljs.core.async.impl.ioc_helpers.process_exception(state_49445__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49447 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49445,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_49431 = fetch("https://dog.ceo/api/breeds/image/random");
var inst_49432 = com.wsscode.common.async_cljs.promise__GT_chan(inst_49431);
var state_49445__$1 = state_49445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49445__$1,(6),inst_49432);
} else {
if((state_val_49447 === (5))){
var inst_49439 = (state_49445[(2)]);
var inst_49440 = com.wsscode.common.async_cljs.consumer_pair(inst_49439);
var inst_49441 = goog.object.get(inst_49440,"message");
var state_49445__$1 = state_49445;
var statearr_49462_49485 = state_49445__$1;
(statearr_49462_49485[(2)] = inst_49441);


cljs.core.async.impl.ioc_helpers.process_exception(state_49445__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49447 === (6))){
var inst_49434 = (state_49445[(2)]);
var inst_49435 = com.wsscode.common.async_cljs.consumer_pair(inst_49434);
var inst_49436 = inst_49435.json();
var inst_49437 = com.wsscode.common.async_cljs.promise__GT_chan(inst_49436);
var state_49445__$1 = state_49445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49445__$1,(5),inst_49437);
} else {
return null;
}
}
}
}
}
}
});})(c__39003__auto__))
;
return ((function (switch__38929__auto__,c__39003__auto__){
return (function() {
var com$wsscode$pathom$book$async$js_promises$state_machine__38930__auto__ = null;
var com$wsscode$pathom$book$async$js_promises$state_machine__38930__auto____0 = (function (){
var statearr_49467 = [null,null,null,null,null,null,null];
(statearr_49467[(0)] = com$wsscode$pathom$book$async$js_promises$state_machine__38930__auto__);

(statearr_49467[(1)] = (1));

return statearr_49467;
});
var com$wsscode$pathom$book$async$js_promises$state_machine__38930__auto____1 = (function (state_49445){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_49445);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e49468){if((e49468 instanceof Object)){
var ex__38933__auto__ = e49468;
var statearr_49469_49498 = state_49445;
(statearr_49469_49498[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49468;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49500 = state_49445;
state_49445 = G__49500;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$js_promises$state_machine__38930__auto__ = function(state_49445){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$js_promises$state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$js_promises$state_machine__38930__auto____1.call(this,state_49445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$js_promises$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$js_promises$state_machine__38930__auto____0;
com$wsscode$pathom$book$async$js_promises$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$js_promises$state_machine__38930__auto____1;
return com$wsscode$pathom$book$async$js_promises$state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__))
})();
var state__39005__auto__ = (function (){var statearr_49470 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_49470[(6)] = c__39003__auto__);

return statearr_49470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__))
);

return c__39003__auto__;
})], null);
com.wsscode.pathom.book.async.js_promises.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_plugin(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),com.wsscode.pathom.book.async.js_promises.reader], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.async.js_promises.js.map
