goog.provide('com.wsscode.pathom.book.async.error_propagation');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.trace');
com.wsscode.pathom.book.async.error_propagation.async_info = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.error-propagation","async-info","com.wsscode.pathom.book.async.error-propagation/async-info",-1327160568,null),(function (){var G__60888 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-info","async-info",-364224963)], null)], null);
return G__60888;

})(),(function com$wsscode$pathom$book$async$error_propagation$async_info(_,___$1){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_61025){
var state_val_61026 = (state_61025[(1)]);
if((state_val_61026 === (1))){
var state_61025__$1 = state_61025;
var statearr_61072_61235 = state_61025__$1;
(statearr_61072_61235[(2)] = null);

(statearr_61072_61235[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61026 === (2))){
var inst_61015 = (state_61025[(2)]);
var state_61025__$1 = state_61025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61025__$1,inst_61015);
} else {
if((state_val_61026 === (3))){
var inst_60960 = (state_61025[(2)]);
var state_61025__$1 = state_61025;
var statearr_61095_61236 = state_61025__$1;
(statearr_61095_61236[(2)] = inst_60960);


cljs.core.async.impl.ioc_helpers.process_exception(state_61025__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61026 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_61025,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_60995 = cljs.core.rand_int((1000));
var inst_60997 = ((100) + inst_60995);
var inst_60998 = cljs.core.async.timeout(inst_60997);
var state_61025__$1 = state_61025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61025__$1,(5),inst_60998);
} else {
if((state_val_61026 === (5))){
var inst_61000 = (state_61025[(2)]);
var inst_61001 = com.wsscode.common.async_cljs.throw_err(inst_61000);
var inst_61007 = [new cljs.core.Keyword(null,"async-info","async-info",-364224963)];
var inst_61010 = ["From async"];
var inst_61012 = cljs.core.PersistentHashMap.fromArrays(inst_61007,inst_61010);
var state_61025__$1 = (function (){var statearr_61103 = state_61025;
(statearr_61103[(7)] = inst_61001);

return statearr_61103;
})();
var statearr_61106_61238 = state_61025__$1;
(statearr_61106_61238[(2)] = inst_61012);


cljs.core.async.impl.ioc_helpers.process_exception(state_61025__$1);

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
var statearr_61110 = [null,null,null,null,null,null,null,null];
(statearr_61110[(0)] = com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto__);

(statearr_61110[(1)] = (1));

return statearr_61110;
});
var com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto____1 = (function (state_61025){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_61025);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e61111){if((e61111 instanceof Object)){
var ex__47667__auto__ = e61111;
var statearr_61112_61240 = state_61025;
(statearr_61112_61240[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61111;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61241 = state_61025;
state_61025 = G__61241;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto__ = function(state_61025){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto____1.call(this,state_61025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$async$error_propagation$async_info_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_61122 = f__47947__auto__();
(statearr_61122[(6)] = c__47946__auto__);

return statearr_61122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.async.error_propagation.async_error = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.error-propagation","async-error","com.wsscode.pathom.book.async.error-propagation/async-error",-2079868945,null),(function (){var G__61125 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-error","async-error",528708636)], null)], null);
return G__61125;

})(),(function com$wsscode$pathom$book$async$error_propagation$async_error(_,___$1){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_61148){
var state_val_61149 = (state_61148[(1)]);
if((state_val_61149 === (1))){
var state_61148__$1 = state_61148;
var statearr_61157_61242 = state_61148__$1;
(statearr_61157_61242[(2)] = null);

(statearr_61157_61242[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61149 === (2))){
var inst_61145 = (state_61148[(2)]);
var state_61148__$1 = state_61148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61148__$1,inst_61145);
} else {
if((state_val_61149 === (3))){
var inst_61130 = (state_61148[(2)]);
var state_61148__$1 = state_61148;
var statearr_61164_61243 = state_61148__$1;
(statearr_61164_61243[(2)] = inst_61130);


cljs.core.async.impl.ioc_helpers.process_exception(state_61148__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61149 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_61148,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_61134 = cljs.core.rand_int((1000));
var inst_61135 = ((100) + inst_61134);
var inst_61136 = cljs.core.async.timeout(inst_61135);
var state_61148__$1 = state_61148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61148__$1,(5),inst_61136);
} else {
if((state_val_61149 === (5))){
var inst_61138 = (state_61148[(2)]);
var inst_61139 = com.wsscode.common.async_cljs.throw_err(inst_61138);
var inst_61141 = cljs.core.PersistentHashMap.EMPTY;
var inst_61142 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Error!!",inst_61141);
var inst_61143 = (function(){throw inst_61142})();
var state_61148__$1 = (function (){var statearr_61182 = state_61148;
(statearr_61182[(7)] = inst_61139);

return statearr_61182;
})();
var statearr_61183_61246 = state_61148__$1;
(statearr_61183_61246[(2)] = inst_61143);


cljs.core.async.impl.ioc_helpers.process_exception(state_61148__$1);

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
var statearr_61184 = [null,null,null,null,null,null,null,null];
(statearr_61184[(0)] = com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto__);

(statearr_61184[(1)] = (1));

return statearr_61184;
});
var com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto____1 = (function (state_61148){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_61148);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e61185){if((e61185 instanceof Object)){
var ex__47667__auto__ = e61185;
var statearr_61186_61247 = state_61148;
(statearr_61186_61247[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61185;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61248 = state_61148;
state_61148 = G__61248;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto__ = function(state_61148){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto____1.call(this,state_61148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$async$error_propagation$async_error_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_61188 = f__47947__auto__();
(statearr_61188[(6)] = c__47946__auto__);

return statearr_61188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.async.error_propagation.foo = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.error-propagation","foo","com.wsscode.pathom.book.async.error-propagation/foo",-1472231161,null),(function (){var G__61193 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foo","foo",1268894036)], null)], null);
return G__61193;

})(),(function com$wsscode$pathom$book$async$error_propagation$foo(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),"Regular"], null);
}));
com.wsscode.pathom.book.async.error_propagation.register = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.async.error_propagation.async_info,com.wsscode.pathom.book.async.error_propagation.async_error,com.wsscode.pathom.book.async.error_propagation.foo], null);
com.wsscode.pathom.book.async.error_propagation.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.async.error_propagation.register], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.trace.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.async.error_propagation.js.map
