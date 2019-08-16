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
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__){
return (function (state_49014){
var state_val_49015 = (state_49014[(1)]);
if((state_val_49015 === (1))){
var inst_49006 = cljs.core.rand_int((1000));
var inst_49008 = ((100) + inst_49006);
var inst_49009 = com.wsscode.pathom.book.async.intro.sleep(inst_49008);
var state_49014__$1 = state_49014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49014__$1,(2),inst_49009);
} else {
if((state_val_49015 === (2))){
var inst_49012 = (state_49014[(2)]);
var state_49014__$1 = (function (){var statearr_49029 = state_49014;
(statearr_49029[(7)] = inst_49012);

return statearr_49029;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49014__$1,"From async");
} else {
return null;
}
}
});})(c__39084__auto__))
;
return ((function (switch__38786__auto__,c__39084__auto__){
return (function() {
var com$wsscode$pathom$book$async$intro$state_machine__38787__auto__ = null;
var com$wsscode$pathom$book$async$intro$state_machine__38787__auto____0 = (function (){
var statearr_49032 = [null,null,null,null,null,null,null,null];
(statearr_49032[(0)] = com$wsscode$pathom$book$async$intro$state_machine__38787__auto__);

(statearr_49032[(1)] = (1));

return statearr_49032;
});
var com$wsscode$pathom$book$async$intro$state_machine__38787__auto____1 = (function (state_49014){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_49014);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e49034){if((e49034 instanceof Object)){
var ex__38790__auto__ = e49034;
var statearr_49036_49071 = state_49014;
(statearr_49036_49071[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49034;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49073 = state_49014;
state_49014 = G__49073;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$intro$state_machine__38787__auto__ = function(state_49014){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$intro$state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$intro$state_machine__38787__auto____1.call(this,state_49014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$intro$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$intro$state_machine__38787__auto____0;
com$wsscode$pathom$book$async$intro$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$intro$state_machine__38787__auto____1;
return com$wsscode$pathom$book$async$intro$state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__))
})();
var state__39086__auto__ = (function (){var statearr_49041 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_49041[(6)] = c__39084__auto__);

return statearr_49041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__))
);

return c__39084__auto__;
}),new cljs.core.Keyword(null,"foo","foo",1268894036),(function (_){
return "Regular";
})], null);
com.wsscode.pathom.book.async.intro.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_plugin(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),com.wsscode.pathom.book.async.intro.reader], null)),com.wsscode.pathom.profile.profile_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.async.intro.js.map
