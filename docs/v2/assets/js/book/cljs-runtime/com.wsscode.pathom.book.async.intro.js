goog.provide('com.wsscode.pathom.book.async.intro');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.pathom.profile');
com.wsscode.pathom.book.async.intro.sleep = (function com$wsscode$pathom$book$async$intro$sleep(n){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
setTimeout(((function (c){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword("com.wsscode.pathom.book.async.intro","done","com.wsscode.pathom.book.async.intro/done",767285257));
});})(c))
,n);

return c;
});
com.wsscode.pathom.book.async.intro.reader = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"async-info","async-info",-364224963),(function (_){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__){
return (function (state_49307){
var state_val_49308 = (state_49307[(1)]);
if((state_val_49308 === (1))){
var inst_49299 = cljs.core.rand_int((1000));
var inst_49300 = ((100) + inst_49299);
var inst_49301 = com.wsscode.pathom.book.async.intro.sleep(inst_49300);
var state_49307__$1 = state_49307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49307__$1,(2),inst_49301);
} else {
if((state_val_49308 === (2))){
var inst_49304 = (state_49307[(2)]);
var state_49307__$1 = (function (){var statearr_49326 = state_49307;
(statearr_49326[(7)] = inst_49304);

return statearr_49326;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49307__$1,"From async");
} else {
return null;
}
}
});})(c__39003__auto__))
;
return ((function (switch__38929__auto__,c__39003__auto__){
return (function() {
var com$wsscode$pathom$book$async$intro$state_machine__38930__auto__ = null;
var com$wsscode$pathom$book$async$intro$state_machine__38930__auto____0 = (function (){
var statearr_49328 = [null,null,null,null,null,null,null,null];
(statearr_49328[(0)] = com$wsscode$pathom$book$async$intro$state_machine__38930__auto__);

(statearr_49328[(1)] = (1));

return statearr_49328;
});
var com$wsscode$pathom$book$async$intro$state_machine__38930__auto____1 = (function (state_49307){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_49307);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e49330){if((e49330 instanceof Object)){
var ex__38933__auto__ = e49330;
var statearr_49331_49362 = state_49307;
(statearr_49331_49362[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49330;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49365 = state_49307;
state_49307 = G__49365;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$intro$state_machine__38930__auto__ = function(state_49307){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$intro$state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$intro$state_machine__38930__auto____1.call(this,state_49307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$intro$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$intro$state_machine__38930__auto____0;
com$wsscode$pathom$book$async$intro$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$intro$state_machine__38930__auto____1;
return com$wsscode$pathom$book$async$intro$state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__))
})();
var state__39005__auto__ = (function (){var statearr_49334 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_49334[(6)] = c__39003__auto__);

return statearr_49334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__))
);

return c__39003__auto__;
}),new cljs.core.Keyword(null,"foo","foo",1268894036),(function (_){
return "Regular";
})], null);
com.wsscode.pathom.book.async.intro.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_plugin(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),com.wsscode.pathom.book.async.intro.reader], null)),com.wsscode.pathom.profile.profile_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.async.intro.js.map
