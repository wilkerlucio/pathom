goog.provide('com.wsscode.pathom.book.async.error_propagation');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.profile');
com.wsscode.pathom.book.async.error_propagation.sleep = (function com$wsscode$pathom$book$async$error_propagation$sleep(n){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
setTimeout(((function (c){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword("com.wsscode.pathom.book.async.error-propagation","done","com.wsscode.pathom.book.async.error-propagation/done",-1073591128));
});})(c))
,n);

return c;
});
com.wsscode.pathom.book.async.error_propagation.reader = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"async-info","async-info",-364224963),(function (_){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__){
return (function (state_49318){
var state_val_49319 = (state_49318[(1)]);
if((state_val_49319 === (1))){
var state_49318__$1 = state_49318;
var statearr_49325_49396 = state_49318__$1;
(statearr_49325_49396[(2)] = null);

(statearr_49325_49396[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49319 === (2))){
var inst_49316 = (state_49318[(2)]);
var state_49318__$1 = state_49318;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49318__$1,inst_49316);
} else {
if((state_val_49319 === (3))){
var inst_49297 = (state_49318[(2)]);
var state_49318__$1 = state_49318;
var statearr_49327_49397 = state_49318__$1;
(statearr_49327_49397[(2)] = inst_49297);


cljs.core.async.impl.ioc_helpers.process_exception(state_49318__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49319 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49318,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_49309 = cljs.core.rand_int((1000));
var inst_49310 = ((100) + inst_49309);
var inst_49311 = com.wsscode.pathom.book.async.error_propagation.sleep(inst_49310);
var state_49318__$1 = state_49318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49318__$1,(5),inst_49311);
} else {
if((state_val_49319 === (5))){
var inst_49313 = (state_49318[(2)]);
var inst_49314 = com.wsscode.common.async_cljs.throw_err(inst_49313);
var state_49318__$1 = (function (){var statearr_49332 = state_49318;
(statearr_49332[(7)] = inst_49314);

return statearr_49332;
})();
var statearr_49333_49400 = state_49318__$1;
(statearr_49333_49400[(2)] = "From async");


cljs.core.async.impl.ioc_helpers.process_exception(state_49318__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39003__auto__))
;
return ((function (switch__38929__auto__,c__39003__auto__){
return (function() {
var com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto__ = null;
var com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto____0 = (function (){
var statearr_49335 = [null,null,null,null,null,null,null,null];
(statearr_49335[(0)] = com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto__);

(statearr_49335[(1)] = (1));

return statearr_49335;
});
var com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto____1 = (function (state_49318){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_49318);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e49336){if((e49336 instanceof Object)){
var ex__38933__auto__ = e49336;
var statearr_49337_49403 = state_49318;
(statearr_49337_49403[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49336;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49407 = state_49318;
state_49318 = G__49407;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto__ = function(state_49318){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto____1.call(this,state_49318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto____0;
com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto____1;
return com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__))
})();
var state__39005__auto__ = (function (){var statearr_49341 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_49341[(6)] = c__39003__auto__);

return statearr_49341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__))
);

return c__39003__auto__;
}),new cljs.core.Keyword(null,"async-error","async-error",528708636),(function (_){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__){
return (function (state_49359){
var state_val_49360 = (state_49359[(1)]);
if((state_val_49360 === (1))){
var state_49359__$1 = state_49359;
var statearr_49364_49410 = state_49359__$1;
(statearr_49364_49410[(2)] = null);

(statearr_49364_49410[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49360 === (2))){
var inst_49357 = (state_49359[(2)]);
var state_49359__$1 = state_49359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49359__$1,inst_49357);
} else {
if((state_val_49360 === (3))){
var inst_49343 = (state_49359[(2)]);
var state_49359__$1 = state_49359;
var statearr_49366_49414 = state_49359__$1;
(statearr_49366_49414[(2)] = inst_49343);


cljs.core.async.impl.ioc_helpers.process_exception(state_49359__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49360 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49359,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_49347 = cljs.core.rand_int((1000));
var inst_49348 = ((100) + inst_49347);
var inst_49349 = com.wsscode.pathom.book.async.error_propagation.sleep(inst_49348);
var state_49359__$1 = state_49359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49359__$1,(5),inst_49349);
} else {
if((state_val_49360 === (5))){
var inst_49351 = (state_49359[(2)]);
var inst_49352 = com.wsscode.common.async_cljs.throw_err(inst_49351);
var inst_49353 = cljs.core.PersistentHashMap.EMPTY;
var inst_49354 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Error!!",inst_49353);
var inst_49355 = (function(){throw inst_49354})();
var state_49359__$1 = (function (){var statearr_49368 = state_49359;
(statearr_49368[(7)] = inst_49352);

return statearr_49368;
})();
var statearr_49369_49421 = state_49359__$1;
(statearr_49369_49421[(2)] = inst_49355);


cljs.core.async.impl.ioc_helpers.process_exception(state_49359__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39003__auto__))
;
return ((function (switch__38929__auto__,c__39003__auto__){
return (function() {
var com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto__ = null;
var com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto____0 = (function (){
var statearr_49373 = [null,null,null,null,null,null,null,null];
(statearr_49373[(0)] = com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto__);

(statearr_49373[(1)] = (1));

return statearr_49373;
});
var com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto____1 = (function (state_49359){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_49359);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e49375){if((e49375 instanceof Object)){
var ex__38933__auto__ = e49375;
var statearr_49377_49450 = state_49359;
(statearr_49377_49450[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49375;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49453 = state_49359;
state_49359 = G__49453;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto__ = function(state_49359){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto____1.call(this,state_49359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto____0;
com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto____1;
return com$wsscode$pathom$book$async$error_propagation$state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__))
})();
var state__39005__auto__ = (function (){var statearr_49388 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_49388[(6)] = c__39003__auto__);

return statearr_49388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__))
);

return c__39003__auto__;
}),new cljs.core.Keyword(null,"foo","foo",1268894036),(function (_){
return "Regular";
})], null);
com.wsscode.pathom.book.async.error_propagation.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_plugin(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),com.wsscode.pathom.book.async.error_propagation.reader], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.profile.profile_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.async.error_propagation.js.map
