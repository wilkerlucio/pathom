goog.provide('com.wsscode.pathom.book.async.intro');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.pathom.trace');
goog.require('com.wsscode.pathom.connect');
com.wsscode.pathom.book.async.intro.async_info = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.intro","async-info","com.wsscode.pathom.book.async.intro/async-info",791195311,null),(function (){var G__60931 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-info","async-info",-364224963)], null)], null);
return G__60931;

})(),(function com$wsscode$pathom$book$async$intro$async_info(_,___$1){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_60957){
var state_val_60958 = (state_60957[(1)]);
if((state_val_60958 === (1))){
var inst_60947 = cljs.core.rand_int((1000));
var inst_60948 = ((100) + inst_60947);
var inst_60949 = cljs.core.async.timeout(inst_60948);
var state_60957__$1 = state_60957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60957__$1,(2),inst_60949);
} else {
if((state_val_60958 === (2))){
var inst_60951 = (state_60957[(2)]);
var inst_60952 = [new cljs.core.Keyword(null,"async-info","async-info",-364224963)];
var inst_60953 = ["From async"];
var inst_60954 = cljs.core.PersistentHashMap.fromArrays(inst_60952,inst_60953);
var state_60957__$1 = (function (){var statearr_60988 = state_60957;
(statearr_60988[(7)] = inst_60951);

return statearr_60988;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60957__$1,inst_60954);
} else {
return null;
}
}
});})(c__47946__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__){
return (function() {
var com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto____0 = (function (){
var statearr_61022 = [null,null,null,null,null,null,null,null];
(statearr_61022[(0)] = com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto__);

(statearr_61022[(1)] = (1));

return statearr_61022;
});
var com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto____1 = (function (state_60957){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_60957);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e61037){if((e61037 instanceof Object)){
var ex__47667__auto__ = e61037;
var statearr_61050_61127 = state_60957;
(statearr_61050_61127[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61037;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61129 = state_60957;
state_60957 = G__61129;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto__ = function(state_60957){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto____1.call(this,state_60957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_61074 = f__47947__auto__();
(statearr_61074[(6)] = c__47946__auto__);

return statearr_61074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.async.intro.foo = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.intro","foo","com.wsscode.pathom.book.async.intro/foo",241436130,null),(function (){var G__61096 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foo","foo",1268894036)], null)], null);
return G__61096;

})(),(function com$wsscode$pathom$book$async$intro$foo(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),"Regular"], null);
}));
com.wsscode.pathom.book.async.intro.register = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.async.intro.async_info,com.wsscode.pathom.book.async.intro.foo], null);
com.wsscode.pathom.book.async.intro.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.async.intro.register], null)),com.wsscode.pathom.trace.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.async.intro.js.map
