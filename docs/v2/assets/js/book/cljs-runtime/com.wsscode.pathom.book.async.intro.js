goog.provide('com.wsscode.pathom.book.async.intro');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.pathom.trace');
goog.require('com.wsscode.pathom.connect');
com.wsscode.pathom.book.async.intro.async_info = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.intro","async-info","com.wsscode.pathom.book.async.intro/async-info",791195311,null),(function (){var G__65101 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-info","async-info",-364224963)], null)], null);
return G__65101;

})(),(function com$wsscode$pathom$book$async$intro$async_info(_,___$1){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__){
return (function (state_65160){
var state_val_65162 = (state_65160[(1)]);
if((state_val_65162 === (1))){
var inst_65145 = cljs.core.rand_int((1000));
var inst_65148 = ((100) + inst_65145);
var inst_65149 = cljs.core.async.timeout(inst_65148);
var state_65160__$1 = state_65160;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65160__$1,(2),inst_65149);
} else {
if((state_val_65162 === (2))){
var inst_65151 = (state_65160[(2)]);
var inst_65153 = [new cljs.core.Keyword(null,"async-info","async-info",-364224963)];
var inst_65154 = ["From async"];
var inst_65155 = cljs.core.PersistentHashMap.fromArrays(inst_65153,inst_65154);
var state_65160__$1 = (function (){var statearr_65228 = state_65160;
(statearr_65228[(7)] = inst_65151);

return statearr_65228;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_65160__$1,inst_65155);
} else {
return null;
}
}
});})(c__48839__auto__))
;
return ((function (switch__48139__auto__,c__48839__auto__){
return (function() {
var com$wsscode$pathom$book$async$intro$async_info_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$async$intro$async_info_$_state_machine__48140__auto____0 = (function (){
var statearr_65255 = [null,null,null,null,null,null,null,null];
(statearr_65255[(0)] = com$wsscode$pathom$book$async$intro$async_info_$_state_machine__48140__auto__);

(statearr_65255[(1)] = (1));

return statearr_65255;
});
var com$wsscode$pathom$book$async$intro$async_info_$_state_machine__48140__auto____1 = (function (state_65160){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_65160);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e65277){var ex__48143__auto__ = e65277;
var statearr_65281_65376 = state_65160;
(statearr_65281_65376[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_65160[(4)]))){
var statearr_65289_65379 = state_65160;
(statearr_65289_65379[(1)] = cljs.core.first((state_65160[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65386 = state_65160;
state_65160 = G__65386;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$intro$async_info_$_state_machine__48140__auto__ = function(state_65160){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$intro$async_info_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$intro$async_info_$_state_machine__48140__auto____1.call(this,state_65160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$intro$async_info_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$intro$async_info_$_state_machine__48140__auto____0;
com$wsscode$pathom$book$async$intro$async_info_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$intro$async_info_$_state_machine__48140__auto____1;
return com$wsscode$pathom$book$async$intro$async_info_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__))
})();
var state__48841__auto__ = (function (){var statearr_65307 = f__48840__auto__();
(statearr_65307[(6)] = c__48839__auto__);

return statearr_65307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__))
);

return c__48839__auto__;
}));
com.wsscode.pathom.book.async.intro.foo = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.intro","foo","com.wsscode.pathom.book.async.intro/foo",241436130,null),(function (){var G__65321 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foo","foo",1268894036)], null)], null);
return G__65321;

})(),(function com$wsscode$pathom$book$async$intro$foo(_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),"Regular"], null);
}));
com.wsscode.pathom.book.async.intro.register = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.async.intro.async_info,com.wsscode.pathom.book.async.intro.foo], null);
com.wsscode.pathom.book.async.intro.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.async_reader2], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.async.intro.register], null)),com.wsscode.pathom.trace.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.async.intro.js.map
