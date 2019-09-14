goog.provide('com.wsscode.pathom.book.async.error_propagation');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.trace');
com.wsscode.pathom.book.async.error_propagation.async_info = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.error-propagation","async-info","com.wsscode.pathom.book.async.error-propagation/async-info",-1327160568,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-info","async-info",-364224963)], null)], null),(function com$wsscode$pathom$book$async$error_propagation$async_info(_,___$1){
var c__38998__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38998__auto__){
return (function (){
var f__38999__auto__ = (function (){var switch__38924__auto__ = ((function (c__38998__auto__){
return (function (state_47759){
var state_val_47760 = (state_47759[(1)]);
if((state_val_47760 === (1))){
var state_47759__$1 = state_47759;
var statearr_47761_47795 = state_47759__$1;
(statearr_47761_47795[(2)] = null);

(statearr_47761_47795[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47760 === (2))){
var inst_47757 = (state_47759[(2)]);
var state_47759__$1 = state_47759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47759__$1,inst_47757);
} else {
if((state_val_47760 === (3))){
var inst_47743 = (state_47759[(2)]);
var state_47759__$1 = state_47759;
var statearr_47762_47796 = state_47759__$1;
(statearr_47762_47796[(2)] = inst_47743);


cljs.core.async.impl.ioc_helpers.process_exception(state_47759__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47760 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47759,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_47747 = cljs.core.rand_int((1000));
var inst_47748 = ((100) + inst_47747);
var inst_47749 = cljs.core.async.timeout(inst_47748);
var state_47759__$1 = state_47759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47759__$1,(5),inst_47749);
} else {
if((state_val_47760 === (5))){
var inst_47751 = (state_47759[(2)]);
var inst_47752 = com.wsscode.common.async_cljs.throw_err(inst_47751);
var inst_47753 = [new cljs.core.Keyword(null,"async-info","async-info",-364224963)];
var inst_47754 = ["From async"];
var inst_47755 = cljs.core.PersistentHashMap.fromArrays(inst_47753,inst_47754);
var state_47759__$1 = (function (){var statearr_47763 = state_47759;
(statearr_47763[(7)] = inst_47752);

return statearr_47763;
})();
var statearr_47764_47797 = state_47759__$1;
(statearr_47764_47797[(2)] = inst_47755);


cljs.core.async.impl.ioc_helpers.process_exception(state_47759__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__38998__auto__))
;
return ((function (switch__38924__auto__,c__38998__auto__){
return (function() {
var com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__38925__auto____0 = (function (){
var statearr_47765 = [null,null,null,null,null,null,null,null];
(statearr_47765[(0)] = com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__38925__auto__);

(statearr_47765[(1)] = (1));

return statearr_47765;
});
var com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__38925__auto____1 = (function (state_47759){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_47759);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e47766){if((e47766 instanceof Object)){
var ex__38928__auto__ = e47766;
var statearr_47767_47798 = state_47759;
(statearr_47767_47798[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47766;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47799 = state_47759;
state_47759 = G__47799;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__38925__auto__ = function(state_47759){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__38925__auto____1.call(this,state_47759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__38925__auto____0;
com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__38925__auto____1;
return com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38998__auto__))
})();
var state__39000__auto__ = (function (){var statearr_47768 = (f__38999__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38999__auto__.cljs$core$IFn$_invoke$arity$0() : f__38999__auto__.call(null));
(statearr_47768[(6)] = c__38998__auto__);

return statearr_47768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39000__auto__);
});})(c__38998__auto__))
);

return c__38998__auto__;
}));
com.wsscode.pathom.book.async.error_propagation.async_error = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.error-propagation","async-error","com.wsscode.pathom.book.async.error-propagation/async-error",-2079868945,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-error","async-error",528708636)], null)], null),(function com$wsscode$pathom$book$async$error_propagation$async_error(_,___$1){
var c__38998__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38998__auto__){
return (function (){
var f__38999__auto__ = (function (){var switch__38924__auto__ = ((function (c__38998__auto__){
return (function (state_47785){
var state_val_47786 = (state_47785[(1)]);
if((state_val_47786 === (1))){
var state_47785__$1 = state_47785;
var statearr_47787_47800 = state_47785__$1;
(statearr_47787_47800[(2)] = null);

(statearr_47787_47800[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47786 === (2))){
var inst_47783 = (state_47785[(2)]);
var state_47785__$1 = state_47785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47785__$1,inst_47783);
} else {
if((state_val_47786 === (3))){
var inst_47769 = (state_47785[(2)]);
var state_47785__$1 = state_47785;
var statearr_47788_47801 = state_47785__$1;
(statearr_47788_47801[(2)] = inst_47769);


cljs.core.async.impl.ioc_helpers.process_exception(state_47785__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47786 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47785,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_47773 = cljs.core.rand_int((1000));
var inst_47774 = ((100) + inst_47773);
var inst_47775 = cljs.core.async.timeout(inst_47774);
var state_47785__$1 = state_47785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47785__$1,(5),inst_47775);
} else {
if((state_val_47786 === (5))){
var inst_47777 = (state_47785[(2)]);
var inst_47778 = com.wsscode.common.async_cljs.throw_err(inst_47777);
var inst_47779 = cljs.core.PersistentHashMap.EMPTY;
var inst_47780 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Error!!",inst_47779);
var inst_47781 = (function(){throw inst_47780})();
var state_47785__$1 = (function (){var statearr_47789 = state_47785;
(statearr_47789[(7)] = inst_47778);

return statearr_47789;
})();
var statearr_47790_47802 = state_47785__$1;
(statearr_47790_47802[(2)] = inst_47781);


cljs.core.async.impl.ioc_helpers.process_exception(state_47785__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__38998__auto__))
;
return ((function (switch__38924__auto__,c__38998__auto__){
return (function() {
var com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__38925__auto____0 = (function (){
var statearr_47791 = [null,null,null,null,null,null,null,null];
(statearr_47791[(0)] = com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__38925__auto__);

(statearr_47791[(1)] = (1));

return statearr_47791;
});
var com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__38925__auto____1 = (function (state_47785){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_47785);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e47792){if((e47792 instanceof Object)){
var ex__38928__auto__ = e47792;
var statearr_47793_47803 = state_47785;
(statearr_47793_47803[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47792;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47804 = state_47785;
state_47785 = G__47804;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__38925__auto__ = function(state_47785){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__38925__auto____1.call(this,state_47785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__38925__auto____0;
com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__38925__auto____1;
return com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38998__auto__))
})();
var state__39000__auto__ = (function (){var statearr_47794 = (f__38999__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38999__auto__.cljs$core$IFn$_invoke$arity$0() : f__38999__auto__.call(null));
(statearr_47794[(6)] = c__38998__auto__);

return statearr_47794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39000__auto__);
});})(c__38998__auto__))
);

return c__38998__auto__;
}));
com.wsscode.pathom.book.async.error_propagation.foo = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.error-propagation","foo","com.wsscode.pathom.book.async.error-propagation/foo",-1472231161,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foo","foo",1268894036)], null)], null),(function com$wsscode$pathom$book$async$error_propagation$foo(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),"Regular"], null);
}));
com.wsscode.pathom.book.async.error_propagation.register = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.async.error_propagation.async_info,com.wsscode.pathom.book.async.error_propagation.async_error,com.wsscode.pathom.book.async.error_propagation.foo], null);
com.wsscode.pathom.book.async.error_propagation.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.async.error_propagation.register], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.trace.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.async.error_propagation.js.map
