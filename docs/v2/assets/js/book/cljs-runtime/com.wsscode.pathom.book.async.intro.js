goog.provide('com.wsscode.pathom.book.async.intro');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.pathom.trace');
goog.require('com.wsscode.pathom.connect');
com.wsscode.pathom.book.async.intro.async_info = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.intro","async-info","com.wsscode.pathom.book.async.intro/async-info",791195311,null),(function (){var G__93513 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-info","async-info",-364224963)], null)], null);
return G__93513;

})(),(function com$wsscode$pathom$book$async$intro$async_info(_,___$1){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_93529){
var state_val_93530 = (state_93529[(1)]);
if((state_val_93530 === (1))){
var inst_93519 = cljs.core.rand_int((1000));
var inst_93520 = ((100) + inst_93519);
var inst_93521 = cljs.core.async.timeout(inst_93520);
var state_93529__$1 = state_93529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93529__$1,(2),inst_93521);
} else {
if((state_val_93530 === (2))){
var inst_93523 = (state_93529[(2)]);
var inst_93525 = [new cljs.core.Keyword(null,"async-info","async-info",-364224963)];
var inst_93526 = ["From async"];
var inst_93527 = cljs.core.PersistentHashMap.fromArrays(inst_93525,inst_93526);
var state_93529__$1 = (function (){var statearr_93559 = state_93529;
(statearr_93559[(7)] = inst_93523);

return statearr_93559;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_93529__$1,inst_93527);
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
var statearr_93614 = [null,null,null,null,null,null,null,null];
(statearr_93614[(0)] = com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto__);

(statearr_93614[(1)] = (1));

return statearr_93614;
});
var com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto____1 = (function (state_93529){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_93529);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e93617){if((e93617 instanceof Object)){
var ex__47667__auto__ = e93617;
var statearr_93618_93656 = state_93529;
(statearr_93618_93656[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_93529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93617;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93657 = state_93529;
state_93529 = G__93657;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto__ = function(state_93529){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto____1.call(this,state_93529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$async$intro$async_info_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_93622 = f__47947__auto__();
(statearr_93622[(6)] = c__47946__auto__);

return statearr_93622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.async.intro.foo = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.intro","foo","com.wsscode.pathom.book.async.intro/foo",241436130,null),(function (){var G__93627 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foo","foo",1268894036)], null)], null);
return G__93627;

})(),(function com$wsscode$pathom$book$async$intro$foo(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),"Regular"], null);
}));
com.wsscode.pathom.book.async.intro.register = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.async.intro.async_info,com.wsscode.pathom.book.async.intro.foo], null);
com.wsscode.pathom.book.async.intro.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.async.intro.register], null)),com.wsscode.pathom.trace.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.async.intro.js.map
