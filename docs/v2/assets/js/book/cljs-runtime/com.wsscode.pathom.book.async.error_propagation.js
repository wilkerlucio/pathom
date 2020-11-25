goog.provide('com.wsscode.pathom.book.async.error_propagation');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.trace');
com.wsscode.pathom.book.async.error_propagation.async_info = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.error-propagation","async-info","com.wsscode.pathom.book.async.error-propagation/async-info",-1327160568,null),(function (){var G__65065 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-info","async-info",-364224963)], null)], null);
return G__65065;

})(),(function com$wsscode$pathom$book$async$error_propagation$async_info(_,___$1){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__){
return (function (state_65121){
var state_val_65122 = (state_65121[(1)]);
if((state_val_65122 === (1))){
var state_65121__$1 = state_65121;
var statearr_65188_65468 = state_65121__$1;
(statearr_65188_65468[(2)] = null);

(statearr_65188_65468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65122 === (2))){
var ___$2 = (function (){var statearr_65210 = state_65121;
(statearr_65210[(4)] = cljs.core.cons((5),(state_65121[(4)])));

return statearr_65210;
})();
var inst_65092 = cljs.core.rand_int((1000));
var inst_65093 = ((100) + inst_65092);
var inst_65094 = cljs.core.async.timeout(inst_65093);
var state_65121__$1 = state_65121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65121__$1,(6),inst_65094);
} else {
if((state_val_65122 === (3))){
var inst_65115 = (state_65121[(2)]);
var state_65121__$1 = state_65121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65121__$1,inst_65115);
} else {
if((state_val_65122 === (4))){
var inst_65082 = (state_65121[(2)]);
var state_65121__$1 = state_65121;
var statearr_65250_65469 = state_65121__$1;
(statearr_65250_65469[(2)] = inst_65082);

(statearr_65250_65469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65122 === (5))){
var ___$2 = (function (){var statearr_65272 = state_65121;
(statearr_65272[(4)] = cljs.core.rest((state_65121[(4)])));

return statearr_65272;
})();
var state_65121__$1 = state_65121;
var ex65222 = (state_65121__$1[(2)]);
var statearr_65282_65471 = state_65121__$1;
(statearr_65282_65471[(5)] = ex65222);


var statearr_65288_65472 = state_65121__$1;
(statearr_65288_65472[(1)] = (4));

(statearr_65288_65472[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65122 === (6))){
var inst_65096 = (state_65121[(2)]);
var inst_65097 = com.wsscode.common.async_cljs.throw_err(inst_65096);
var inst_65099 = [new cljs.core.Keyword(null,"async-info","async-info",-364224963)];
var inst_65111 = ["From async"];
var inst_65112 = cljs.core.PersistentHashMap.fromArrays(inst_65099,inst_65111);
var ___$2 = (function (){var statearr_65303 = state_65121;
(statearr_65303[(4)] = cljs.core.rest((state_65121[(4)])));

return statearr_65303;
})();
var state_65121__$1 = (function (){var statearr_65308 = state_65121;
(statearr_65308[(7)] = inst_65097);

return statearr_65308;
})();
var statearr_65312_65473 = state_65121__$1;
(statearr_65312_65473[(2)] = inst_65112);

(statearr_65312_65473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__48839__auto__))
;
return ((function (switch__48139__auto__,c__48839__auto__){
return (function() {
var com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__48140__auto____0 = (function (){
var statearr_65326 = [null,null,null,null,null,null,null,null];
(statearr_65326[(0)] = com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__48140__auto__);

(statearr_65326[(1)] = (1));

return statearr_65326;
});
var com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__48140__auto____1 = (function (state_65121){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_65121);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e65333){var ex__48143__auto__ = e65333;
var statearr_65335_65478 = state_65121;
(statearr_65335_65478[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_65121[(4)]))){
var statearr_65337_65480 = state_65121;
(statearr_65337_65480[(1)] = cljs.core.first((state_65121[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65481 = state_65121;
state_65121 = G__65481;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__48140__auto__ = function(state_65121){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__48140__auto____1.call(this,state_65121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__48140__auto____0;
com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__48140__auto____1;
return com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__))
})();
var state__48841__auto__ = (function (){var statearr_65342 = f__48840__auto__();
(statearr_65342[(6)] = c__48839__auto__);

return statearr_65342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__))
);

return c__48839__auto__;
}));
com.wsscode.pathom.book.async.error_propagation.async_error = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.error-propagation","async-error","com.wsscode.pathom.book.async.error-propagation/async-error",-2079868945,null),(function (){var G__65350 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-error","async-error",528708636)], null)], null);
return G__65350;

})(),(function com$wsscode$pathom$book$async$error_propagation$async_error(_,___$1){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__){
return (function (state_65374){
var state_val_65375 = (state_65374[(1)]);
if((state_val_65375 === (1))){
var state_65374__$1 = state_65374;
var statearr_65378_65482 = state_65374__$1;
(statearr_65378_65482[(2)] = null);

(statearr_65378_65482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65375 === (2))){
var ___$2 = (function (){var statearr_65382 = state_65374;
(statearr_65382[(4)] = cljs.core.cons((5),(state_65374[(4)])));

return statearr_65382;
})();
var inst_65360 = cljs.core.rand_int((1000));
var inst_65361 = ((100) + inst_65360);
var inst_65362 = cljs.core.async.timeout(inst_65361);
var state_65374__$1 = state_65374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65374__$1,(6),inst_65362);
} else {
if((state_val_65375 === (3))){
var inst_65371 = (state_65374[(2)]);
var state_65374__$1 = state_65374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65374__$1,inst_65371);
} else {
if((state_val_65375 === (4))){
var inst_65354 = (state_65374[(2)]);
var state_65374__$1 = state_65374;
var statearr_65392_65483 = state_65374__$1;
(statearr_65392_65483[(2)] = inst_65354);

(statearr_65392_65483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65375 === (5))){
var ___$2 = (function (){var statearr_65397 = state_65374;
(statearr_65397[(4)] = cljs.core.rest((state_65374[(4)])));

return statearr_65397;
})();
var state_65374__$1 = state_65374;
var ex65387 = (state_65374__$1[(2)]);
var statearr_65404_65484 = state_65374__$1;
(statearr_65404_65484[(5)] = ex65387);


var statearr_65406_65485 = state_65374__$1;
(statearr_65406_65485[(1)] = (4));

(statearr_65406_65485[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65375 === (6))){
var inst_65364 = (state_65374[(2)]);
var inst_65365 = com.wsscode.common.async_cljs.throw_err(inst_65364);
var inst_65366 = cljs.core.PersistentHashMap.EMPTY;
var inst_65367 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Error!!",inst_65366);
var inst_65368 = (function(){throw inst_65367})();
var ___$2 = (function (){var statearr_65420 = state_65374;
(statearr_65420[(4)] = cljs.core.rest((state_65374[(4)])));

return statearr_65420;
})();
var state_65374__$1 = (function (){var statearr_65423 = state_65374;
(statearr_65423[(7)] = inst_65365);

return statearr_65423;
})();
var statearr_65424_65487 = state_65374__$1;
(statearr_65424_65487[(2)] = inst_65368);

(statearr_65424_65487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__48839__auto__))
;
return ((function (switch__48139__auto__,c__48839__auto__){
return (function() {
var com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__48140__auto____0 = (function (){
var statearr_65427 = [null,null,null,null,null,null,null,null];
(statearr_65427[(0)] = com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__48140__auto__);

(statearr_65427[(1)] = (1));

return statearr_65427;
});
var com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__48140__auto____1 = (function (state_65374){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_65374);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e65430){var ex__48143__auto__ = e65430;
var statearr_65431_65496 = state_65374;
(statearr_65431_65496[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_65374[(4)]))){
var statearr_65436_65499 = state_65374;
(statearr_65436_65499[(1)] = cljs.core.first((state_65374[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65516 = state_65374;
state_65374 = G__65516;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__48140__auto__ = function(state_65374){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__48140__auto____1.call(this,state_65374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__48140__auto____0;
com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__48140__auto____1;
return com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__))
})();
var state__48841__auto__ = (function (){var statearr_65440 = f__48840__auto__();
(statearr_65440[(6)] = c__48839__auto__);

return statearr_65440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__))
);

return c__48839__auto__;
}));
com.wsscode.pathom.book.async.error_propagation.foo = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.error-propagation","foo","com.wsscode.pathom.book.async.error-propagation/foo",-1472231161,null),(function (){var G__65442 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foo","foo",1268894036)], null)], null);
return G__65442;

})(),(function com$wsscode$pathom$book$async$error_propagation$foo(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),"Regular"], null);
}));
com.wsscode.pathom.book.async.error_propagation.register = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.async.error_propagation.async_info,com.wsscode.pathom.book.async.error_propagation.async_error,com.wsscode.pathom.book.async.error_propagation.foo], null);
com.wsscode.pathom.book.async.error_propagation.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.async.error_propagation.register], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.trace.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.async.error_propagation.js.map
