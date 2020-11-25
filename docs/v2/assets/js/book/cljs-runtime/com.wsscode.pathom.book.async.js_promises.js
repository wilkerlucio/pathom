goog.provide('com.wsscode.pathom.book.async.js_promises');
goog.require('cljs.core');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
goog.require('goog.object');
com.wsscode.pathom.book.async.js_promises.random_dog = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.js-promises","random-dog","com.wsscode.pathom.book.async.js-promises/random-dog",-689387435,null),(function (){var G__65064 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dog.ceo","random-dog-url","dog.ceo/random-dog-url",-389165241)], null)], null);
return G__65064;

})(),(function com$wsscode$pathom$book$async$js_promises$random_dog(env,p__65070){
var map__65075 = p__65070;
var map__65075__$1 = (((((!((map__65075 == null))))?(((((map__65075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65075):map__65075);
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,map__65075,map__65075__$1){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,map__65075,map__65075__$1){
return (function (state_65147){
var state_val_65152 = (state_65147[(1)]);
if((state_val_65152 === (1))){
var state_65147__$1 = state_65147;
var statearr_65212_65390 = state_65147__$1;
(statearr_65212_65390[(2)] = null);

(statearr_65212_65390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65152 === (2))){
var _ = (function (){var statearr_65230 = state_65147;
(statearr_65230[(4)] = cljs.core.cons((5),(state_65147[(4)])));

return statearr_65230;
})();
var inst_65110 = [new cljs.core.Keyword("dog.ceo","random-dog-url","dog.ceo/random-dog-url",-389165241)];
var inst_65127 = fetch("https://dog.ceo/api/breeds/image/random");
var inst_65128 = com.wsscode.common.async_cljs.promise__GT_chan(inst_65127);
var state_65147__$1 = (function (){var statearr_65248 = state_65147;
(statearr_65248[(7)] = inst_65110);

return statearr_65248;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65147__$1,(7),inst_65128);
} else {
if((state_val_65152 === (3))){
var inst_65142 = (state_65147[(2)]);
var state_65147__$1 = state_65147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65147__$1,inst_65142);
} else {
if((state_val_65152 === (4))){
var inst_65100 = (state_65147[(2)]);
var state_65147__$1 = state_65147;
var statearr_65283_65421 = state_65147__$1;
(statearr_65283_65421[(2)] = inst_65100);

(statearr_65283_65421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65152 === (5))){
var _ = (function (){var statearr_65296 = state_65147;
(statearr_65296[(4)] = cljs.core.rest((state_65147[(4)])));

return statearr_65296;
})();
var state_65147__$1 = state_65147;
var ex65259 = (state_65147__$1[(2)]);
var statearr_65306_65425 = state_65147__$1;
(statearr_65306_65425[(5)] = ex65259);


var statearr_65309_65426 = state_65147__$1;
(statearr_65309_65426[(1)] = (4));

(statearr_65309_65426[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65152 === (6))){
var inst_65110 = (state_65147[(7)]);
var inst_65135 = (state_65147[(2)]);
var inst_65136 = com.wsscode.common.async_cljs.consumer_pair(inst_65135);
var inst_65137 = goog.object.get(inst_65136,"message");
var inst_65138 = [inst_65137];
var inst_65139 = cljs.core.PersistentHashMap.fromArrays(inst_65110,inst_65138);
var _ = (function (){var statearr_65328 = state_65147;
(statearr_65328[(4)] = cljs.core.rest((state_65147[(4)])));

return statearr_65328;
})();
var state_65147__$1 = state_65147;
var statearr_65330_65432 = state_65147__$1;
(statearr_65330_65432[(2)] = inst_65139);

(statearr_65330_65432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65152 === (7))){
var inst_65130 = (state_65147[(2)]);
var inst_65131 = com.wsscode.common.async_cljs.consumer_pair(inst_65130);
var inst_65132 = inst_65131.json();
var inst_65133 = com.wsscode.common.async_cljs.promise__GT_chan(inst_65132);
var state_65147__$1 = state_65147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65147__$1,(6),inst_65133);
} else {
return null;
}
}
}
}
}
}
}
});})(c__48839__auto__,map__65075,map__65075__$1))
;
return ((function (switch__48139__auto__,c__48839__auto__,map__65075,map__65075__$1){
return (function() {
var com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__48140__auto____0 = (function (){
var statearr_65343 = [null,null,null,null,null,null,null,null];
(statearr_65343[(0)] = com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__48140__auto__);

(statearr_65343[(1)] = (1));

return statearr_65343;
});
var com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__48140__auto____1 = (function (state_65147){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_65147);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e65346){var ex__48143__auto__ = e65346;
var statearr_65347_65441 = state_65147;
(statearr_65347_65441[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_65147[(4)]))){
var statearr_65348_65444 = state_65147;
(statearr_65348_65444[(1)] = cljs.core.first((state_65147[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65445 = state_65147;
state_65147 = G__65445;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__48140__auto__ = function(state_65147){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__48140__auto____1.call(this,state_65147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__48140__auto____0;
com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__48140__auto____1;
return com$wsscode$pathom$book$async$js_promises$random_dog_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,map__65075,map__65075__$1))
})();
var state__48841__auto__ = (function (){var statearr_65353 = f__48840__auto__();
(statearr_65353[(6)] = c__48839__auto__);

return statearr_65353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,map__65075,map__65075__$1))
);

return c__48839__auto__;
}));
com.wsscode.pathom.book.async.js_promises.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.async.js_promises.random_dog], null)], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.async.js_promises.js.map
