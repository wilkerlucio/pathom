goog.provide('com.wsscode.pathom.book.async.intro');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.pathom.trace');
goog.require('com.wsscode.pathom.connect');
com.wsscode.pathom.book.async.intro.async_info = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.intro","async-info","com.wsscode.pathom.book.async.intro/async-info",791195311,null),(function (){var G__72844 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-info","async-info",-364224963)], null)], null);
return G__72844;

})(),(function com$wsscode$pathom$book$async$intro$async_info(_,___$1){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__){
return (function (state_72871){
var state_val_72877 = (state_72871[(1)]);
if((state_val_72877 === (1))){
var inst_72856 = cljs.core.rand_int((1000));
var inst_72857 = ((100) + inst_72856);
var inst_72858 = cljs.core.async.timeout(inst_72857);
var state_72871__$1 = state_72871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72871__$1,(2),inst_72858);
} else {
if((state_val_72877 === (2))){
var inst_72860 = (state_72871[(2)]);
var inst_72861 = [new cljs.core.Keyword(null,"async-info","async-info",-364224963)];
var inst_72862 = ["From async"];
var inst_72863 = cljs.core.PersistentHashMap.fromArrays(inst_72861,inst_72862);
var state_72871__$1 = (function (){var statearr_72947 = state_72871;
(statearr_72947[(7)] = inst_72860);

return statearr_72947;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_72871__$1,inst_72863);
} else {
return null;
}
}
});})(c__45808__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__){
return (function() {
var com$wsscode$pathom$book$async$intro$async_info_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$book$async$intro$async_info_$_state_machine__45526__auto____0 = (function (){
var statearr_72961 = [null,null,null,null,null,null,null,null];
(statearr_72961[(0)] = com$wsscode$pathom$book$async$intro$async_info_$_state_machine__45526__auto__);

(statearr_72961[(1)] = (1));

return statearr_72961;
});
var com$wsscode$pathom$book$async$intro$async_info_$_state_machine__45526__auto____1 = (function (state_72871){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_72871);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e72976){if((e72976 instanceof Object)){
var ex__45529__auto__ = e72976;
var statearr_72978_73061 = state_72871;
(statearr_72978_73061[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72976;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73063 = state_72871;
state_72871 = G__73063;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$intro$async_info_$_state_machine__45526__auto__ = function(state_72871){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$intro$async_info_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$intro$async_info_$_state_machine__45526__auto____1.call(this,state_72871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$intro$async_info_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$intro$async_info_$_state_machine__45526__auto____0;
com$wsscode$pathom$book$async$intro$async_info_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$intro$async_info_$_state_machine__45526__auto____1;
return com$wsscode$pathom$book$async$intro$async_info_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__))
})();
var state__45810__auto__ = (function (){var statearr_72986 = f__45809__auto__();
(statearr_72986[(6)] = c__45808__auto__);

return statearr_72986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__))
);

return c__45808__auto__;
}));
com.wsscode.pathom.book.async.intro.foo = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.intro","foo","com.wsscode.pathom.book.async.intro/foo",241436130,null),(function (){var G__72993 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foo","foo",1268894036)], null)], null);
return G__72993;

})(),(function com$wsscode$pathom$book$async$intro$foo(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),"Regular"], null);
}));
com.wsscode.pathom.book.async.intro.register = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.async.intro.async_info,com.wsscode.pathom.book.async.intro.foo], null);
com.wsscode.pathom.book.async.intro.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.async.intro.register], null)),com.wsscode.pathom.trace.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.async.intro.js.map
