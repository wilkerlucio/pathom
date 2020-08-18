goog.provide('com.wsscode.pathom.book.async.error_propagation');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.trace');
com.wsscode.pathom.book.async.error_propagation.async_info = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.error-propagation","async-info","com.wsscode.pathom.book.async.error-propagation/async-info",-1327160568,null),(function (){var G__93296 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-info","async-info",-364224963)], null)], null);
return G__93296;

})(),(function com$wsscode$pathom$book$async$error_propagation$async_info(_,___$1){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_93335){
var state_val_93336 = (state_93335[(1)]);
if((state_val_93336 === (1))){
var state_93335__$1 = state_93335;
var statearr_93373_93625 = state_93335__$1;
(statearr_93373_93625[(2)] = null);

(statearr_93373_93625[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93336 === (2))){
var inst_93332 = (state_93335[(2)]);
var state_93335__$1 = state_93335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_93335__$1,inst_93332);
} else {
if((state_val_93336 === (3))){
var inst_93309 = (state_93335[(2)]);
var state_93335__$1 = state_93335;
var statearr_93419_93628 = state_93335__$1;
(statearr_93419_93628[(2)] = inst_93309);


cljs.core.async.impl.ioc_helpers.process_exception(state_93335__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93336 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_93335,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_93316 = cljs.core.rand_int((1000));
var inst_93317 = ((100) + inst_93316);
var inst_93318 = cljs.core.async.timeout(inst_93317);
var state_93335__$1 = state_93335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93335__$1,(5),inst_93318);
} else {
if((state_val_93336 === (5))){
var inst_93320 = (state_93335[(2)]);
var inst_93321 = com.wsscode.common.async_cljs.throw_err(inst_93320);
var inst_93327 = [new cljs.core.Keyword(null,"async-info","async-info",-364224963)];
var inst_93329 = ["From async"];
var inst_93330 = cljs.core.PersistentHashMap.fromArrays(inst_93327,inst_93329);
var state_93335__$1 = (function (){var statearr_93474 = state_93335;
(statearr_93474[(7)] = inst_93321);

return statearr_93474;
})();
var statearr_93480_93642 = state_93335__$1;
(statearr_93480_93642[(2)] = inst_93330);


cljs.core.async.impl.ioc_helpers.process_exception(state_93335__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__){
return (function() {
var com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto____0 = (function (){
var statearr_93487 = [null,null,null,null,null,null,null,null];
(statearr_93487[(0)] = com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto__);

(statearr_93487[(1)] = (1));

return statearr_93487;
});
var com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto____1 = (function (state_93335){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_93335);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e93492){if((e93492 instanceof Object)){
var ex__47667__auto__ = e93492;
var statearr_93498_93654 = state_93335;
(statearr_93498_93654[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_93335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93492;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93655 = state_93335;
state_93335 = G__93655;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto__ = function(state_93335){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto____1.call(this,state_93335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_93508 = f__47947__auto__();
(statearr_93508[(6)] = c__47946__auto__);

return statearr_93508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.async.error_propagation.async_error = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.error-propagation","async-error","com.wsscode.pathom.book.async.error-propagation/async-error",-2079868945,null),(function (){var G__93517 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-error","async-error",528708636)], null)], null);
return G__93517;

})(),(function com$wsscode$pathom$book$async$error_propagation$async_error(_,___$1){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_93551){
var state_val_93552 = (state_93551[(1)]);
if((state_val_93552 === (1))){
var state_93551__$1 = state_93551;
var statearr_93564_93659 = state_93551__$1;
(statearr_93564_93659[(2)] = null);

(statearr_93564_93659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93552 === (2))){
var inst_93549 = (state_93551[(2)]);
var state_93551__$1 = state_93551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_93551__$1,inst_93549);
} else {
if((state_val_93552 === (3))){
var inst_93532 = (state_93551[(2)]);
var state_93551__$1 = state_93551;
var statearr_93567_93660 = state_93551__$1;
(statearr_93567_93660[(2)] = inst_93532);


cljs.core.async.impl.ioc_helpers.process_exception(state_93551__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93552 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_93551,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_93539 = cljs.core.rand_int((1000));
var inst_93540 = ((100) + inst_93539);
var inst_93541 = cljs.core.async.timeout(inst_93540);
var state_93551__$1 = state_93551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93551__$1,(5),inst_93541);
} else {
if((state_val_93552 === (5))){
var inst_93543 = (state_93551[(2)]);
var inst_93544 = com.wsscode.common.async_cljs.throw_err(inst_93543);
var inst_93545 = cljs.core.PersistentHashMap.EMPTY;
var inst_93546 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Error!!",inst_93545);
var inst_93547 = (function(){throw inst_93546})();
var state_93551__$1 = (function (){var statearr_93572 = state_93551;
(statearr_93572[(7)] = inst_93544);

return statearr_93572;
})();
var statearr_93575_93664 = state_93551__$1;
(statearr_93575_93664[(2)] = inst_93547);


cljs.core.async.impl.ioc_helpers.process_exception(state_93551__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__){
return (function() {
var com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto____0 = (function (){
var statearr_93584 = [null,null,null,null,null,null,null,null];
(statearr_93584[(0)] = com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto__);

(statearr_93584[(1)] = (1));

return statearr_93584;
});
var com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto____1 = (function (state_93551){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_93551);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e93588){if((e93588 instanceof Object)){
var ex__47667__auto__ = e93588;
var statearr_93589_93666 = state_93551;
(statearr_93589_93666[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_93551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93588;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93667 = state_93551;
state_93551 = G__93667;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto__ = function(state_93551){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto____1.call(this,state_93551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_93608 = f__47947__auto__();
(statearr_93608[(6)] = c__47946__auto__);

return statearr_93608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.async.error_propagation.foo = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.error-propagation","foo","com.wsscode.pathom.book.async.error-propagation/foo",-1472231161,null),(function (){var G__93609 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foo","foo",1268894036)], null)], null);
return G__93609;

})(),(function com$wsscode$pathom$book$async$error_propagation$foo(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),"Regular"], null);
}));
com.wsscode.pathom.book.async.error_propagation.register = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.async.error_propagation.async_info,com.wsscode.pathom.book.async.error_propagation.async_error,com.wsscode.pathom.book.async.error_propagation.foo], null);
com.wsscode.pathom.book.async.error_propagation.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.async.error_propagation.register], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.trace.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.async.error_propagation.js.map
