goog.provide('com.wsscode.pathom.book.async.error_propagation');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.trace');
com.wsscode.pathom.book.async.error_propagation.async_info = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.error-propagation","async-info","com.wsscode.pathom.book.async.error-propagation/async-info",-1327160568,null),(function (){var G__72850 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-info","async-info",-364224963)], null)], null);
return G__72850;

})(),(function com$wsscode$pathom$book$async$error_propagation$async_info(_,___$1){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__){
return (function (state_72930){
var state_val_72931 = (state_72930[(1)]);
if((state_val_72931 === (1))){
var state_72930__$1 = state_72930;
var statearr_72942_73114 = state_72930__$1;
(statearr_72942_73114[(2)] = null);

(statearr_72942_73114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72931 === (2))){
var inst_72921 = (state_72930[(2)]);
var state_72930__$1 = state_72930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72930__$1,inst_72921);
} else {
if((state_val_72931 === (3))){
var inst_72892 = (state_72930[(2)]);
var state_72930__$1 = state_72930;
var statearr_72957_73118 = state_72930__$1;
(statearr_72957_73118[(2)] = inst_72892);


cljs.core.async.impl.ioc_helpers.process_exception(state_72930__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72931 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_72930,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_72905 = cljs.core.rand_int((1000));
var inst_72906 = ((100) + inst_72905);
var inst_72908 = cljs.core.async.timeout(inst_72906);
var state_72930__$1 = state_72930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72930__$1,(5),inst_72908);
} else {
if((state_val_72931 === (5))){
var inst_72910 = (state_72930[(2)]);
var inst_72912 = com.wsscode.common.async_cljs.throw_err(inst_72910);
var inst_72915 = [new cljs.core.Keyword(null,"async-info","async-info",-364224963)];
var inst_72917 = ["From async"];
var inst_72918 = cljs.core.PersistentHashMap.fromArrays(inst_72915,inst_72917);
var state_72930__$1 = (function (){var statearr_72981 = state_72930;
(statearr_72981[(7)] = inst_72912);

return statearr_72981;
})();
var statearr_72982_73120 = state_72930__$1;
(statearr_72982_73120[(2)] = inst_72918);


cljs.core.async.impl.ioc_helpers.process_exception(state_72930__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__45808__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__){
return (function() {
var com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__45526__auto____0 = (function (){
var statearr_72991 = [null,null,null,null,null,null,null,null];
(statearr_72991[(0)] = com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__45526__auto__);

(statearr_72991[(1)] = (1));

return statearr_72991;
});
var com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__45526__auto____1 = (function (state_72930){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_72930);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e72994){if((e72994 instanceof Object)){
var ex__45529__auto__ = e72994;
var statearr_72999_73125 = state_72930;
(statearr_72999_73125[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72994;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73126 = state_72930;
state_72930 = G__73126;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__45526__auto__ = function(state_72930){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__45526__auto____1.call(this,state_72930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__45526__auto____0;
com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__45526__auto____1;
return com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__))
})();
var state__45810__auto__ = (function (){var statearr_73029 = f__45809__auto__();
(statearr_73029[(6)] = c__45808__auto__);

return statearr_73029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__))
);

return c__45808__auto__;
}));
com.wsscode.pathom.book.async.error_propagation.async_error = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.error-propagation","async-error","com.wsscode.pathom.book.async.error-propagation/async-error",-2079868945,null),(function (){var G__73041 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-error","async-error",528708636)], null)], null);
return G__73041;

})(),(function com$wsscode$pathom$book$async$error_propagation$async_error(_,___$1){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__){
return (function (state_73059){
var state_val_73060 = (state_73059[(1)]);
if((state_val_73060 === (1))){
var state_73059__$1 = state_73059;
var statearr_73062_73146 = state_73059__$1;
(statearr_73062_73146[(2)] = null);

(statearr_73062_73146[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73060 === (2))){
var inst_73057 = (state_73059[(2)]);
var state_73059__$1 = state_73059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73059__$1,inst_73057);
} else {
if((state_val_73060 === (3))){
var inst_73043 = (state_73059[(2)]);
var state_73059__$1 = state_73059;
var statearr_73064_73147 = state_73059__$1;
(statearr_73064_73147[(2)] = inst_73043);


cljs.core.async.impl.ioc_helpers.process_exception(state_73059__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73060 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_73059,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_73047 = cljs.core.rand_int((1000));
var inst_73048 = ((100) + inst_73047);
var inst_73049 = cljs.core.async.timeout(inst_73048);
var state_73059__$1 = state_73059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73059__$1,(5),inst_73049);
} else {
if((state_val_73060 === (5))){
var inst_73051 = (state_73059[(2)]);
var inst_73052 = com.wsscode.common.async_cljs.throw_err(inst_73051);
var inst_73053 = cljs.core.PersistentHashMap.EMPTY;
var inst_73054 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Error!!",inst_73053);
var inst_73055 = (function(){throw inst_73054})();
var state_73059__$1 = (function (){var statearr_73069 = state_73059;
(statearr_73069[(7)] = inst_73052);

return statearr_73069;
})();
var statearr_73072_73149 = state_73059__$1;
(statearr_73072_73149[(2)] = inst_73055);


cljs.core.async.impl.ioc_helpers.process_exception(state_73059__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__45808__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__){
return (function() {
var com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__45526__auto____0 = (function (){
var statearr_73075 = [null,null,null,null,null,null,null,null];
(statearr_73075[(0)] = com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__45526__auto__);

(statearr_73075[(1)] = (1));

return statearr_73075;
});
var com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__45526__auto____1 = (function (state_73059){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_73059);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e73077){if((e73077 instanceof Object)){
var ex__45529__auto__ = e73077;
var statearr_73080_73151 = state_73059;
(statearr_73080_73151[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73077;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73153 = state_73059;
state_73059 = G__73153;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__45526__auto__ = function(state_73059){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__45526__auto____1.call(this,state_73059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__45526__auto____0;
com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__45526__auto____1;
return com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__))
})();
var state__45810__auto__ = (function (){var statearr_73088 = f__45809__auto__();
(statearr_73088[(6)] = c__45808__auto__);

return statearr_73088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__))
);

return c__45808__auto__;
}));
com.wsscode.pathom.book.async.error_propagation.foo = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.error-propagation","foo","com.wsscode.pathom.book.async.error-propagation/foo",-1472231161,null),(function (){var G__73092 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foo","foo",1268894036)], null)], null);
return G__73092;

})(),(function com$wsscode$pathom$book$async$error_propagation$foo(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),"Regular"], null);
}));
com.wsscode.pathom.book.async.error_propagation.register = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.async.error_propagation.async_info,com.wsscode.pathom.book.async.error_propagation.async_error,com.wsscode.pathom.book.async.error_propagation.foo], null);
com.wsscode.pathom.book.async.error_propagation.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.async.error_propagation.register], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.trace.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.async.error_propagation.js.map
