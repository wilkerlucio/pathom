goog.provide('com.wsscode.pathom.book.async.demos');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.book.app_types');
goog.require('com.wsscode.pathom.fulcro.network');
goog.require('com.wsscode.common.async_cljs');
goog.require('goog.object');
goog.require('fulcro.client');
goog.require('fulcro.client.data_fetch');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.localized_dom');
goog.require('com.wsscode.pathom.book.async.intro');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
com.wsscode.pathom.book.async.demos.indexes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.async !== 'undefined') && (typeof com.wsscode.pathom.book.async.demos !== 'undefined') && (typeof com.wsscode.pathom.book.async.demos.resolver_con !== 'undefined')){
} else {
com.wsscode.pathom.book.async.demos.resolver_con = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__65486 = cljs.core.get_global_hierarchy;
return (fexpr__65486.cljs$core$IFn$_invoke$arity$0 ? fexpr__65486.cljs$core$IFn$_invoke$arity$0() : fexpr__65486.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.wsscode.pathom.book.async.demos","resolver-con"),com.wsscode.pathom.connect.resolver_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
com.wsscode.pathom.book.async.demos.defresolver = com.wsscode.pathom.connect.resolver_factory(com.wsscode.pathom.book.async.demos.resolver_con,com.wsscode.pathom.book.async.demos.indexes);
com.wsscode.pathom.book.async.demos.fetch_json = (function com$wsscode$pathom$book$async$demos$fetch_json(url){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__){
return (function (state_65514){
var state_val_65515 = (state_65514[(1)]);
if((state_val_65515 === (1))){
var state_65514__$1 = state_65514;
var statearr_65517_65739 = state_65514__$1;
(statearr_65517_65739[(2)] = null);

(statearr_65517_65739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65515 === (2))){
var _ = (function (){var statearr_65518 = state_65514;
(statearr_65518[(4)] = cljs.core.cons((5),(state_65514[(4)])));

return statearr_65518;
})();
var inst_65497 = fetch(url);
var inst_65498 = com.wsscode.common.async_cljs.promise__GT_chan(inst_65497);
var state_65514__$1 = state_65514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65514__$1,(7),inst_65498);
} else {
if((state_val_65515 === (3))){
var inst_65511 = (state_65514[(2)]);
var state_65514__$1 = state_65514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65514__$1,inst_65511);
} else {
if((state_val_65515 === (4))){
var inst_65489 = (state_65514[(2)]);
var state_65514__$1 = state_65514;
var statearr_65520_65749 = state_65514__$1;
(statearr_65520_65749[(2)] = inst_65489);

(statearr_65520_65749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65515 === (5))){
var _ = (function (){var statearr_65521 = state_65514;
(statearr_65521[(4)] = cljs.core.rest((state_65514[(4)])));

return statearr_65521;
})();
var state_65514__$1 = state_65514;
var ex65519 = (state_65514__$1[(2)]);
var statearr_65522_65753 = state_65514__$1;
(statearr_65522_65753[(5)] = ex65519);


var statearr_65523_65755 = state_65514__$1;
(statearr_65523_65755[(1)] = (4));

(statearr_65523_65755[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65515 === (6))){
var inst_65506 = (state_65514[(2)]);
var inst_65507 = com.wsscode.common.async_cljs.consumer_pair(inst_65506);
var inst_65508 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_65507,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var _ = (function (){var statearr_65524 = state_65514;
(statearr_65524[(4)] = cljs.core.rest((state_65514[(4)])));

return statearr_65524;
})();
var state_65514__$1 = state_65514;
var statearr_65525_65757 = state_65514__$1;
(statearr_65525_65757[(2)] = inst_65508);

(statearr_65525_65757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65515 === (7))){
var inst_65501 = (state_65514[(2)]);
var inst_65502 = com.wsscode.common.async_cljs.consumer_pair(inst_65501);
var inst_65503 = inst_65502.json();
var inst_65504 = com.wsscode.common.async_cljs.promise__GT_chan(inst_65503);
var state_65514__$1 = state_65514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65514__$1,(6),inst_65504);
} else {
return null;
}
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
var com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__48140__auto____0 = (function (){
var statearr_65527 = [null,null,null,null,null,null,null];
(statearr_65527[(0)] = com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__48140__auto__);

(statearr_65527[(1)] = (1));

return statearr_65527;
});
var com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__48140__auto____1 = (function (state_65514){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_65514);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e65529){var ex__48143__auto__ = e65529;
var statearr_65530_65768 = state_65514;
(statearr_65530_65768[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_65514[(4)]))){
var statearr_65531_65770 = state_65514;
(statearr_65531_65770[(1)] = cljs.core.first((state_65514[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65773 = state_65514;
state_65514 = G__65773;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__48140__auto__ = function(state_65514){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__48140__auto____1.call(this,state_65514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__48140__auto____0;
com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__48140__auto____1;
return com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__))
})();
var state__48841__auto__ = (function (){var statearr_65533 = f__48840__auto__();
(statearr_65533[(6)] = c__48839__auto__);

return statearr_65533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__))
);

return c__48839__auto__;
});
com.wsscode.pathom.book.async.demos.defresolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.demos","random-dog","com.wsscode.pathom.book.async.demos/random-dog",-327443551,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),false], null),(function (_,___$1){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__){
return (function (state_65552){
var state_val_65553 = (state_65552[(1)]);
if((state_val_65553 === (1))){
var state_65552__$1 = state_65552;
var statearr_65554_65784 = state_65552__$1;
(statearr_65554_65784[(2)] = null);

(statearr_65554_65784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65553 === (2))){
var ___$2 = (function (){var statearr_65555 = state_65552;
(statearr_65555[(4)] = cljs.core.cons((5),(state_65552[(4)])));

return statearr_65555;
})();
var inst_65540 = [new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324)];
var inst_65541 = com.wsscode.pathom.book.async.demos.fetch_json("https://dog.ceo/api/breeds/image/random");
var state_65552__$1 = (function (){var statearr_65556 = state_65552;
(statearr_65556[(7)] = inst_65540);

return statearr_65556;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65552__$1,(6),inst_65541);
} else {
if((state_val_65553 === (3))){
var inst_65550 = (state_65552[(2)]);
var state_65552__$1 = state_65552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65552__$1,inst_65550);
} else {
if((state_val_65553 === (4))){
var inst_65534 = (state_65552[(2)]);
var state_65552__$1 = state_65552;
var statearr_65558_65788 = state_65552__$1;
(statearr_65558_65788[(2)] = inst_65534);

(statearr_65558_65788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65553 === (5))){
var ___$2 = (function (){var statearr_65559 = state_65552;
(statearr_65559[(4)] = cljs.core.rest((state_65552[(4)])));

return statearr_65559;
})();
var state_65552__$1 = state_65552;
var ex65557 = (state_65552__$1[(2)]);
var statearr_65560_65793 = state_65552__$1;
(statearr_65560_65793[(5)] = ex65557);


var statearr_65561_65794 = state_65552__$1;
(statearr_65561_65794[(1)] = (4));

(statearr_65561_65794[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65553 === (6))){
var inst_65540 = (state_65552[(7)]);
var inst_65543 = (state_65552[(2)]);
var inst_65544 = com.wsscode.common.async_cljs.throw_err(inst_65543);
var inst_65545 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_65544);
var inst_65546 = [inst_65545];
var inst_65547 = cljs.core.PersistentHashMap.fromArrays(inst_65540,inst_65546);
var ___$2 = (function (){var statearr_65564 = state_65552;
(statearr_65564[(4)] = cljs.core.rest((state_65552[(4)])));

return statearr_65564;
})();
var state_65552__$1 = state_65552;
var statearr_65566_65797 = state_65552__$1;
(statearr_65566_65797[(2)] = inst_65547);

(statearr_65566_65797[(1)] = (3));


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
var com$wsscode$pathom$book$async$demos$state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$async$demos$state_machine__48140__auto____0 = (function (){
var statearr_65567 = [null,null,null,null,null,null,null,null];
(statearr_65567[(0)] = com$wsscode$pathom$book$async$demos$state_machine__48140__auto__);

(statearr_65567[(1)] = (1));

return statearr_65567;
});
var com$wsscode$pathom$book$async$demos$state_machine__48140__auto____1 = (function (state_65552){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_65552);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e65568){var ex__48143__auto__ = e65568;
var statearr_65569_65803 = state_65552;
(statearr_65569_65803[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_65552[(4)]))){
var statearr_65570_65806 = state_65552;
(statearr_65570_65806[(1)] = cljs.core.first((state_65552[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65808 = state_65552;
state_65552 = G__65808;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$state_machine__48140__auto__ = function(state_65552){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$state_machine__48140__auto____1.call(this,state_65552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$state_machine__48140__auto____0;
com$wsscode$pathom$book$async$demos$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$state_machine__48140__auto____1;
return com$wsscode$pathom$book$async$demos$state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__))
})();
var state__48841__auto__ = (function (){var statearr_65571 = f__48840__auto__();
(statearr_65571[(6)] = c__48839__auto__);

return statearr_65571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__))
);

return c__48839__auto__;
}));
com.wsscode.pathom.book.async.demos.namespace_keys = (function com$wsscode$pathom$book$async$demos$namespace_keys(x,ns){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__65572){
var vec__65573 = p__65572;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65573,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65573,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.name(k)),v], null);
})),x);
});
com.wsscode.pathom.book.async.demos.adapt_schedule = (function com$wsscode$pathom$book$async$demos$adapt_schedule(schedule){
return com.wsscode.pathom.book.async.demos.namespace_keys(schedule,"tvmaze.schedule");
});
com.wsscode.pathom.book.async.demos.adapt_externals = (function com$wsscode$pathom$book$async$demos$adapt_externals(externals){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__65576){
var vec__65577 = p__65576;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65577,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65577,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),"id"),v], null);
})),externals);
});
com.wsscode.pathom.book.async.demos.adapt_show = (function com$wsscode$pathom$book$async$demos$adapt_show(p__65580){
var map__65581 = p__65580;
var map__65581__$1 = (((((!((map__65581 == null))))?(((((map__65581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65581):map__65581);
var show = map__65581__$1;
var externals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65581__$1,new cljs.core.Keyword(null,"externals","externals",-1256019925));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.book.async.demos.namespace_keys(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(show,new cljs.core.Keyword(null,"externals","externals",-1256019925),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"_links","_links",-1764230981)], 0)),new cljs.core.Keyword(null,"schedule","schedule",349275266),com.wsscode.pathom.book.async.demos.adapt_schedule),"tvmaze.show"),com.wsscode.pathom.book.async.demos.adapt_externals(externals)], 0));
});
com.wsscode.pathom.book.async.demos.defresolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.demos","tvmaze-show-by-id","com.wsscode.pathom.book.async.demos/tvmaze-show-by-id",1540496513,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tvmaze.show","url","tvmaze.show/url",-1942518592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","schedule","tvmaze.show/schedule",-1718496512),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tvmaze.schedule","time","tvmaze.schedule/time",802197486),new cljs.core.Keyword("tvmaze.schedule","days","tvmaze.schedule/days",-918360656)], null)], null),new cljs.core.Keyword("thetvdb","id","thetvdb/id",449796035),new cljs.core.Keyword("tvrage","id","tvrage/id",-235863707),new cljs.core.Keyword("tvmaze.show","weight","tvmaze.show/weight",553349573),new cljs.core.Keyword("tvmaze.show","type","tvmaze.show/type",-247594970),new cljs.core.Keyword("tvmaze.show","name","tvmaze.show/name",-89886777),new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","webChannel","tvmaze.show/webChannel",1466870059),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"country","country",312965309)], null)], null),new cljs.core.Keyword("tvmaze.show","status","tvmaze.show/status",355218797),new cljs.core.Keyword("tvmaze.show","language","tvmaze.show/language",-1804963698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","image","tvmaze.show/image",1908475534),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"original","original",-445386197)], null)], null),new cljs.core.Keyword("tvmaze.show","runtime","tvmaze.show/runtime",-2073961586),new cljs.core.Keyword("tvmaze.show","updated","tvmaze.show/updated",1380136306),new cljs.core.Keyword("imdb","id","imdb/id",-1385293390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","network","tvmaze.show/network",-302880909),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"timezone","timezone",1831928099)], null)], null)], null)], null),new cljs.core.Keyword("tvmaze.show","officialSite","tvmaze.show/officialSite",1325720278),new cljs.core.Keyword("tvmaze.show","summary","tvmaze.show/summary",-1569507370),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","rating","tvmaze.show/rating",-1135011368),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"average","average",-492356168)], null)], null),new cljs.core.Keyword("tvmaze.show","premiered","tvmaze.show/premiered",1517198014),new cljs.core.Keyword("tvmaze.show","genres","tvmaze.show/genres",1518905183)], null)], null),(function (_,p__65583){
var map__65584 = p__65583;
var map__65584__$1 = (((((!((map__65584 == null))))?(((((map__65584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65584):map__65584);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65584__$1,new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770));
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,map__65584,map__65584__$1,id){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,map__65584,map__65584__$1,id){
return (function (state_65602){
var state_val_65603 = (state_65602[(1)]);
if((state_val_65603 === (1))){
var state_65602__$1 = state_65602;
var statearr_65604_65843 = state_65602__$1;
(statearr_65604_65843[(2)] = null);

(statearr_65604_65843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65603 === (2))){
var ___$1 = (function (){var statearr_65605 = state_65602;
(statearr_65605[(4)] = cljs.core.cons((5),(state_65602[(4)])));

return statearr_65605;
})();
var inst_65592 = ["http://api.tvmaze.com/shows/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_65593 = com.wsscode.pathom.book.async.demos.fetch_json(inst_65592);
var state_65602__$1 = state_65602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65602__$1,(6),inst_65593);
} else {
if((state_val_65603 === (3))){
var inst_65600 = (state_65602[(2)]);
var state_65602__$1 = state_65602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65602__$1,inst_65600);
} else {
if((state_val_65603 === (4))){
var inst_65586 = (state_65602[(2)]);
var state_65602__$1 = state_65602;
var statearr_65607_65849 = state_65602__$1;
(statearr_65607_65849[(2)] = inst_65586);

(statearr_65607_65849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65603 === (5))){
var ___$1 = (function (){var statearr_65608 = state_65602;
(statearr_65608[(4)] = cljs.core.rest((state_65602[(4)])));

return statearr_65608;
})();
var state_65602__$1 = state_65602;
var ex65606 = (state_65602__$1[(2)]);
var statearr_65609_65858 = state_65602__$1;
(statearr_65609_65858[(5)] = ex65606);


var statearr_65610_65859 = state_65602__$1;
(statearr_65610_65859[(1)] = (4));

(statearr_65610_65859[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65603 === (6))){
var inst_65595 = (state_65602[(2)]);
var inst_65596 = com.wsscode.common.async_cljs.throw_err(inst_65595);
var inst_65597 = com.wsscode.pathom.book.async.demos.adapt_show(inst_65596);
var ___$1 = (function (){var statearr_65611 = state_65602;
(statearr_65611[(4)] = cljs.core.rest((state_65602[(4)])));

return statearr_65611;
})();
var state_65602__$1 = state_65602;
var statearr_65612_65862 = state_65602__$1;
(statearr_65612_65862[(2)] = inst_65597);

(statearr_65612_65862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__48839__auto__,map__65584,map__65584__$1,id))
;
return ((function (switch__48139__auto__,c__48839__auto__,map__65584,map__65584__$1,id){
return (function() {
var com$wsscode$pathom$book$async$demos$state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$async$demos$state_machine__48140__auto____0 = (function (){
var statearr_65613 = [null,null,null,null,null,null,null];
(statearr_65613[(0)] = com$wsscode$pathom$book$async$demos$state_machine__48140__auto__);

(statearr_65613[(1)] = (1));

return statearr_65613;
});
var com$wsscode$pathom$book$async$demos$state_machine__48140__auto____1 = (function (state_65602){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_65602);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e65614){var ex__48143__auto__ = e65614;
var statearr_65615_65866 = state_65602;
(statearr_65615_65866[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_65602[(4)]))){
var statearr_65616_65869 = state_65602;
(statearr_65616_65869[(1)] = cljs.core.first((state_65602[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65872 = state_65602;
state_65602 = G__65872;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$state_machine__48140__auto__ = function(state_65602){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$state_machine__48140__auto____1.call(this,state_65602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$state_machine__48140__auto____0;
com$wsscode$pathom$book$async$demos$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$state_machine__48140__auto____1;
return com$wsscode$pathom$book$async$demos$state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,map__65584,map__65584__$1,id))
})();
var state__48841__auto__ = (function (){var statearr_65617 = f__48840__auto__();
(statearr_65617[(6)] = c__48839__auto__);

return statearr_65617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,map__65584,map__65584__$1,id))
);

return c__48839__auto__;
}));
com.wsscode.pathom.book.async.demos.adapt_episode = (function com$wsscode$pathom$book$async$demos$adapt_episode(episode){
return com.wsscode.pathom.book.async.demos.namespace_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(episode,new cljs.core.Keyword(null,"_links","_links",-1764230981)),"tvmaze.episode");
});
com.wsscode.pathom.book.async.demos.defresolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.demos","tvmaze-show-episodes","com.wsscode.pathom.book.async.demos/tvmaze-show-episodes",1735213976,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","episodes","tvmaze.show/episodes",-57025717),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tvmaze.episode","runtime","tvmaze.episode/runtime",-1090727774),new cljs.core.Keyword("tvmaze.episode","season","tvmaze.episode/season",-2123196477),new cljs.core.Keyword("tvmaze.episode","url","tvmaze.episode/url",-1087178748),new cljs.core.Keyword("tvmaze.episode","id","tvmaze.episode/id",-1746946074),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.episode","image","tvmaze.episode/image",-1361384630),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"original","original",-445386197)], null)], null),new cljs.core.Keyword("tvmaze.episode","airstamp","tvmaze.episode/airstamp",833726231),new cljs.core.Keyword("tvmaze.episode","airtime","tvmaze.episode/airtime",-2046164552),new cljs.core.Keyword("tvmaze.episode","summary","tvmaze.episode/summary",-469088902),new cljs.core.Keyword("tvmaze.episode","name","tvmaze.episode/name",-1147972997),new cljs.core.Keyword("tvmaze.episode","number","tvmaze.episode/number",202108),new cljs.core.Keyword("tvmaze.episode","airdate","tvmaze.episode/airdate",575526911)], null)], null)], null)], null),(function (_,p__65618){
var map__65619 = p__65618;
var map__65619__$1 = (((((!((map__65619 == null))))?(((((map__65619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65619):map__65619);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65619__$1,new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770));
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,map__65619,map__65619__$1,id){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,map__65619,map__65619__$1,id){
return (function (state_65642){
var state_val_65643 = (state_65642[(1)]);
if((state_val_65643 === (1))){
var state_65642__$1 = state_65642;
var statearr_65647_65886 = state_65642__$1;
(statearr_65647_65886[(2)] = null);

(statearr_65647_65886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65643 === (2))){
var ___$1 = (function (){var statearr_65648 = state_65642;
(statearr_65648[(4)] = cljs.core.cons((5),(state_65642[(4)])));

return statearr_65648;
})();
var inst_65629 = [new cljs.core.Keyword("tvmaze.show","episodes","tvmaze.show/episodes",-57025717)];
var inst_65630 = ["http://api.tvmaze.com/shows/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/episodes"].join('');
var inst_65631 = com.wsscode.pathom.book.async.demos.fetch_json(inst_65630);
var state_65642__$1 = (function (){var statearr_65649 = state_65642;
(statearr_65649[(7)] = inst_65629);

return statearr_65649;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65642__$1,(6),inst_65631);
} else {
if((state_val_65643 === (3))){
var inst_65640 = (state_65642[(2)]);
var state_65642__$1 = state_65642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65642__$1,inst_65640);
} else {
if((state_val_65643 === (4))){
var inst_65623 = (state_65642[(2)]);
var state_65642__$1 = state_65642;
var statearr_65651_65891 = state_65642__$1;
(statearr_65651_65891[(2)] = inst_65623);

(statearr_65651_65891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65643 === (5))){
var ___$1 = (function (){var statearr_65653 = state_65642;
(statearr_65653[(4)] = cljs.core.rest((state_65642[(4)])));

return statearr_65653;
})();
var state_65642__$1 = state_65642;
var ex65650 = (state_65642__$1[(2)]);
var statearr_65654_65894 = state_65642__$1;
(statearr_65654_65894[(5)] = ex65650);


var statearr_65655_65895 = state_65642__$1;
(statearr_65655_65895[(1)] = (4));

(statearr_65655_65895[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65643 === (6))){
var inst_65629 = (state_65642[(7)]);
var inst_65633 = (state_65642[(2)]);
var inst_65634 = com.wsscode.common.async_cljs.throw_err(inst_65633);
var inst_65635 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.async.demos.adapt_episode,inst_65634);
var inst_65636 = [inst_65635];
var inst_65637 = cljs.core.PersistentHashMap.fromArrays(inst_65629,inst_65636);
var ___$1 = (function (){var statearr_65656 = state_65642;
(statearr_65656[(4)] = cljs.core.rest((state_65642[(4)])));

return statearr_65656;
})();
var state_65642__$1 = state_65642;
var statearr_65657_65901 = state_65642__$1;
(statearr_65657_65901[(2)] = inst_65637);

(statearr_65657_65901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__48839__auto__,map__65619,map__65619__$1,id))
;
return ((function (switch__48139__auto__,c__48839__auto__,map__65619,map__65619__$1,id){
return (function() {
var com$wsscode$pathom$book$async$demos$state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$async$demos$state_machine__48140__auto____0 = (function (){
var statearr_65659 = [null,null,null,null,null,null,null,null];
(statearr_65659[(0)] = com$wsscode$pathom$book$async$demos$state_machine__48140__auto__);

(statearr_65659[(1)] = (1));

return statearr_65659;
});
var com$wsscode$pathom$book$async$demos$state_machine__48140__auto____1 = (function (state_65642){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_65642);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e65660){var ex__48143__auto__ = e65660;
var statearr_65661_65913 = state_65642;
(statearr_65661_65913[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_65642[(4)]))){
var statearr_65662_65914 = state_65642;
(statearr_65662_65914[(1)] = cljs.core.first((state_65642[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65919 = state_65642;
state_65642 = G__65919;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$state_machine__48140__auto__ = function(state_65642){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$state_machine__48140__auto____1.call(this,state_65642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$state_machine__48140__auto____0;
com$wsscode$pathom$book$async$demos$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$state_machine__48140__auto____1;
return com$wsscode$pathom$book$async$demos$state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,map__65619,map__65619__$1,id))
})();
var state__48841__auto__ = (function (){var statearr_65663 = f__48840__auto__();
(statearr_65663[(6)] = c__48839__auto__);

return statearr_65663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,map__65619,map__65619__$1,id))
);

return c__48839__auto__;
}));
com.wsscode.pathom.book.async.demos.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.all_async_readers,com.wsscode.pathom.core.ident_join_reader,com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.book.async.demos.resolver_con,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.deref(com.wsscode.pathom.book.async.demos.indexes)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.error_handler_plugin], null)], null));
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.async !== 'undefined') && (typeof com.wsscode.pathom.book.async.demos !== 'undefined') && (typeof com.wsscode.pathom.book.async.demos.AsyncParserDemo !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.async.demos.AsyncParserDemo = (function com$wsscode$pathom$book$async$demos$AsyncParserDemo(){
var this__52443__auto__ = this;
React.Component.apply(this__52443__auto__,arguments);

if((!((this__52443__auto__.initLocalState == null)))){
this__52443__auto__.state = this__52443__auto__.initLocalState();
} else {
this__52443__auto__.state = ({});
}

return this__52443__auto__;
});

goog.object.extend(com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","AsyncParserDemo","com.wsscode.pathom.book.async.demos/AsyncParserDemo",1707225919),com.wsscode.pathom.book.async.demos.AsyncParserDemo);

var x65675_65925 = com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype;
x65675_65925.render = ((function (x65675_65925){
return (function (){
var this__51361__auto__ = this;
var this$ = this__51361__auto__;
var _STAR_reconciler_STAR__orig_val__65676 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__65677 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__65678 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__65679 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__65680 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__65681 = fulcro.client.primitives.get_reconciler(this__51361__auto__);
var _STAR_depth_STAR__temp_val__65682 = (fulcro.client.primitives.depth(this__51361__auto__) + (1));
var _STAR_shared_STAR__temp_val__65683 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__51361__auto__);
var _STAR_instrument_STAR__temp_val__65684 = fulcro.client.primitives.instrument(this__51361__auto__);
var _STAR_parent_STAR__temp_val__65685 = this__51361__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__65681;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__65682;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__65683;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__65684;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__65685;

try{var map__65686 = fulcro.client.primitives.props(this$);
var map__65686__$1 = (((((!((map__65686 == null))))?(((((map__65686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65686):map__65686);
var props = map__65686__$1;
var random_dog_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65686__$1,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.data_fetch.marker_table,new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(fulcro.client.data_fetch.loading_QMARK_(marker))?fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Loading..."], 0)):fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (marker,map__65686,map__65686__$1,props,random_dog_url,_STAR_reconciler_STAR__orig_val__65676,_STAR_depth_STAR__orig_val__65677,_STAR_shared_STAR__orig_val__65678,_STAR_instrument_STAR__orig_val__65679,_STAR_parent_STAR__orig_val__65680,_STAR_reconciler_STAR__temp_val__65681,_STAR_depth_STAR__temp_val__65682,_STAR_shared_STAR__temp_val__65683,_STAR_instrument_STAR__temp_val__65684,_STAR_parent_STAR__temp_val__65685,this$,this__51361__auto__,x65675_65925){
return (function (){
return fulcro.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null)], 0));
});})(marker,map__65686,map__65686__$1,props,random_dog_url,_STAR_reconciler_STAR__orig_val__65676,_STAR_depth_STAR__orig_val__65677,_STAR_shared_STAR__orig_val__65678,_STAR_instrument_STAR__orig_val__65679,_STAR_parent_STAR__orig_val__65680,_STAR_reconciler_STAR__temp_val__65681,_STAR_depth_STAR__temp_val__65682,_STAR_shared_STAR__temp_val__65683,_STAR_instrument_STAR__temp_val__65684,_STAR_parent_STAR__temp_val__65685,this$,this__51361__auto__,x65675_65925))
], null),"Load"], 0)))], 0)),(cljs.core.truth_(random_dog_url)?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),random_dog_url], null)], 0))], 0)):null)], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__65680;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__65679;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__65678;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__65677;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__65676;
}});})(x65675_65925))
;


com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype.constructor = com.wsscode.pathom.book.async.demos.AsyncParserDemo;

com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype.constructor.displayName = "com.wsscode.pathom.book.async.demos/AsyncParserDemo";

com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype.fulcro$isComponent = true;

var x65695_65932 = com.wsscode.pathom.book.async.demos.AsyncParserDemo;
x65695_65932.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65695_65932.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65695_65932){
return (function (this$,p__65696){
var map__65697 = p__65696;
var map__65697__$1 = (((((!((map__65697 == null))))?(((((map__65697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65697):map__65697);
var props = map__65697__$1;
var random_dog_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65697__$1,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),"singleton"], null);
});})(x65695_65932))
;

x65695_65932.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65695_65932.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65695_65932){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.data_fetch.marker_table,new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null)], null);
});})(x65695_65932))
;


var x65700_65939 = com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype;
x65700_65939.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65700_65939.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x65700_65939){
return (function (this$,p__65705){
var map__65708 = p__65705;
var map__65708__$1 = (((((!((map__65708 == null))))?(((((map__65708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65708):map__65708);
var props = map__65708__$1;
var random_dog_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65708__$1,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),"singleton"], null);
});})(x65700_65939))
;

x65700_65939.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65700_65939.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x65700_65939){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.data_fetch.marker_table,new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null)], null);
});})(x65700_65939))
;


com.wsscode.pathom.book.async.demos.AsyncParserDemo.cljs$lang$type = true;

com.wsscode.pathom.book.async.demos.AsyncParserDemo.cljs$lang$ctorStr = "com.wsscode.pathom.book.async.demos/AsyncParserDemo";

com.wsscode.pathom.book.async.demos.AsyncParserDemo.cljs$lang$ctorPrWriter = (function (this__52446__auto__,writer__52447__auto__,opt__52448__auto__){
return cljs.core._write(writer__52447__auto__,"com.wsscode.pathom.book.async.demos/AsyncParserDemo");
});
com.wsscode.pathom.book.async.demos.async_parser_demo = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.async.demos.AsyncParserDemo);

//# sourceMappingURL=com.wsscode.pathom.book.async.demos.js.map
