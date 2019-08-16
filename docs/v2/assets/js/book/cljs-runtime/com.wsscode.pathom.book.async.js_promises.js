goog.provide('com.wsscode.pathom.book.async.js_promises');
goog.require('cljs.core');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.core');
goog.require('goog.object');
com.wsscode.pathom.book.async.js_promises.reader = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dog.ceo","random-dog-url","dog.ceo/random-dog-url",-389165241),(function (_){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__){
return (function (state_48835){
var state_val_48836 = (state_48835[(1)]);
if((state_val_48836 === (1))){
var state_48835__$1 = state_48835;
var statearr_48866_48907 = state_48835__$1;
(statearr_48866_48907[(2)] = null);

(statearr_48866_48907[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48836 === (2))){
var inst_48829 = (state_48835[(2)]);
var state_48835__$1 = state_48835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48835__$1,inst_48829);
} else {
if((state_val_48836 === (3))){
var inst_48813 = (state_48835[(2)]);
var state_48835__$1 = state_48835;
var statearr_48872_48910 = state_48835__$1;
(statearr_48872_48910[(2)] = inst_48813);


cljs.core.async.impl.ioc_helpers.process_exception(state_48835__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48836 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48835,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_48817 = fetch("https://dog.ceo/api/breeds/image/random");
var inst_48818 = com.wsscode.common.async_cljs.promise__GT_chan(inst_48817);
var state_48835__$1 = state_48835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48835__$1,(6),inst_48818);
} else {
if((state_val_48836 === (5))){
var inst_48825 = (state_48835[(2)]);
var inst_48826 = com.wsscode.common.async_cljs.consumer_pair(inst_48825);
var inst_48827 = goog.object.get(inst_48826,"message");
var state_48835__$1 = state_48835;
var statearr_48880_48933 = state_48835__$1;
(statearr_48880_48933[(2)] = inst_48827);


cljs.core.async.impl.ioc_helpers.process_exception(state_48835__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48836 === (6))){
var inst_48820 = (state_48835[(2)]);
var inst_48821 = com.wsscode.common.async_cljs.consumer_pair(inst_48820);
var inst_48822 = inst_48821.json();
var inst_48823 = com.wsscode.common.async_cljs.promise__GT_chan(inst_48822);
var state_48835__$1 = state_48835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48835__$1,(5),inst_48823);
} else {
return null;
}
}
}
}
}
}
});})(c__39084__auto__))
;
return ((function (switch__38786__auto__,c__39084__auto__){
return (function() {
var com$wsscode$pathom$book$async$js_promises$state_machine__38787__auto__ = null;
var com$wsscode$pathom$book$async$js_promises$state_machine__38787__auto____0 = (function (){
var statearr_48885 = [null,null,null,null,null,null,null];
(statearr_48885[(0)] = com$wsscode$pathom$book$async$js_promises$state_machine__38787__auto__);

(statearr_48885[(1)] = (1));

return statearr_48885;
});
var com$wsscode$pathom$book$async$js_promises$state_machine__38787__auto____1 = (function (state_48835){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_48835);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e48887){if((e48887 instanceof Object)){
var ex__38790__auto__ = e48887;
var statearr_48888_48943 = state_48835;
(statearr_48888_48943[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48887;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48944 = state_48835;
state_48835 = G__48944;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$js_promises$state_machine__38787__auto__ = function(state_48835){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$js_promises$state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$js_promises$state_machine__38787__auto____1.call(this,state_48835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$js_promises$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$js_promises$state_machine__38787__auto____0;
com$wsscode$pathom$book$async$js_promises$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$js_promises$state_machine__38787__auto____1;
return com$wsscode$pathom$book$async$js_promises$state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__))
})();
var state__39086__auto__ = (function (){var statearr_48895 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_48895[(6)] = c__39084__auto__);

return statearr_48895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__))
);

return c__39084__auto__;
})], null);
com.wsscode.pathom.book.async.js_promises.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_plugin(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),com.wsscode.pathom.book.async.js_promises.reader], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.async.js_promises.js.map
