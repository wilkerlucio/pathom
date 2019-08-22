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
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__53892 = cljs.core.get_global_hierarchy;
return (fexpr__53892.cljs$core$IFn$_invoke$arity$0 ? fexpr__53892.cljs$core$IFn$_invoke$arity$0() : fexpr__53892.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.wsscode.pathom.book.async.demos","resolver-con"),com.wsscode.pathom.connect.resolver_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
com.wsscode.pathom.book.async.demos.defresolver = com.wsscode.pathom.connect.resolver_factory(com.wsscode.pathom.book.async.demos.resolver_con,com.wsscode.pathom.book.async.demos.indexes);
com.wsscode.pathom.book.async.demos.fetch_json = (function com$wsscode$pathom$book$async$demos$fetch_json(url){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__){
return (function (state_53918){
var state_val_53919 = (state_53918[(1)]);
if((state_val_53919 === (1))){
var state_53918__$1 = state_53918;
var statearr_53935_54454 = state_53918__$1;
(statearr_53935_54454[(2)] = null);

(statearr_53935_54454[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53919 === (2))){
var inst_53916 = (state_53918[(2)]);
var state_53918__$1 = state_53918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53918__$1,inst_53916);
} else {
if((state_val_53919 === (3))){
var inst_53896 = (state_53918[(2)]);
var state_53918__$1 = state_53918;
var statearr_53936_54458 = state_53918__$1;
(statearr_53936_54458[(2)] = inst_53896);


cljs.core.async.impl.ioc_helpers.process_exception(state_53918__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53919 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53918,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_53904 = fetch(url);
var inst_53905 = com.wsscode.common.async_cljs.promise__GT_chan(inst_53904);
var state_53918__$1 = state_53918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53918__$1,(6),inst_53905);
} else {
if((state_val_53919 === (5))){
var inst_53912 = (state_53918[(2)]);
var inst_53913 = com.wsscode.common.async_cljs.consumer_pair(inst_53912);
var inst_53914 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_53913,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_53918__$1 = state_53918;
var statearr_53942_54462 = state_53918__$1;
(statearr_53942_54462[(2)] = inst_53914);


cljs.core.async.impl.ioc_helpers.process_exception(state_53918__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53919 === (6))){
var inst_53907 = (state_53918[(2)]);
var inst_53908 = com.wsscode.common.async_cljs.consumer_pair(inst_53907);
var inst_53909 = inst_53908.json();
var inst_53910 = com.wsscode.common.async_cljs.promise__GT_chan(inst_53909);
var state_53918__$1 = state_53918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53918__$1,(5),inst_53910);
} else {
return null;
}
}
}
}
}
}
});})(c__39003__auto__))
;
return ((function (switch__38929__auto__,c__39003__auto__){
return (function() {
var com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38930__auto____0 = (function (){
var statearr_53943 = [null,null,null,null,null,null,null];
(statearr_53943[(0)] = com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38930__auto__);

(statearr_53943[(1)] = (1));

return statearr_53943;
});
var com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38930__auto____1 = (function (state_53918){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_53918);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e53947){if((e53947 instanceof Object)){
var ex__38933__auto__ = e53947;
var statearr_53948_54473 = state_53918;
(statearr_53948_54473[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53947;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54474 = state_53918;
state_53918 = G__54474;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38930__auto__ = function(state_53918){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38930__auto____1.call(this,state_53918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38930__auto____0;
com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38930__auto____1;
return com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__))
})();
var state__39005__auto__ = (function (){var statearr_53949 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_53949[(6)] = c__39003__auto__);

return statearr_53949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__))
);

return c__39003__auto__;
});
var G__53950_54475 = new cljs.core.Symbol("com.wsscode.pathom.book.async.demos","random-dog","com.wsscode.pathom.book.async.demos/random-dog",-327443551,null);
var G__53951_54476 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),false], null);
var G__53952_54477 = ((function (G__53950_54475,G__53951_54476){
return (function (_,___$1){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,G__53950_54475,G__53951_54476){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,G__53950_54475,G__53951_54476){
return (function (state_53968){
var state_val_53969 = (state_53968[(1)]);
if((state_val_53969 === (1))){
var state_53968__$1 = state_53968;
var statearr_53970_54478 = state_53968__$1;
(statearr_53970_54478[(2)] = null);

(statearr_53970_54478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53969 === (2))){
var inst_53966 = (state_53968[(2)]);
var state_53968__$1 = state_53968;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53968__$1,inst_53966);
} else {
if((state_val_53969 === (3))){
var inst_53953 = (state_53968[(2)]);
var state_53968__$1 = state_53968;
var statearr_53971_54483 = state_53968__$1;
(statearr_53971_54483[(2)] = inst_53953);


cljs.core.async.impl.ioc_helpers.process_exception(state_53968__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53969 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53968,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_53957 = [new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324)];
var inst_53958 = com.wsscode.pathom.book.async.demos.fetch_json("https://dog.ceo/api/breeds/image/random");
var state_53968__$1 = (function (){var statearr_53974 = state_53968;
(statearr_53974[(7)] = inst_53957);

return statearr_53974;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53968__$1,(5),inst_53958);
} else {
if((state_val_53969 === (5))){
var inst_53957 = (state_53968[(7)]);
var inst_53960 = (state_53968[(2)]);
var inst_53961 = com.wsscode.common.async_cljs.throw_err(inst_53960);
var inst_53962 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_53961);
var inst_53963 = [inst_53962];
var inst_53964 = cljs.core.PersistentHashMap.fromArrays(inst_53957,inst_53963);
var state_53968__$1 = state_53968;
var statearr_53976_54489 = state_53968__$1;
(statearr_53976_54489[(2)] = inst_53964);


cljs.core.async.impl.ioc_helpers.process_exception(state_53968__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39003__auto__,G__53950_54475,G__53951_54476))
;
return ((function (switch__38929__auto__,c__39003__auto__,G__53950_54475,G__53951_54476){
return (function() {
var com$wsscode$pathom$book$async$demos$state_machine__38930__auto__ = null;
var com$wsscode$pathom$book$async$demos$state_machine__38930__auto____0 = (function (){
var statearr_53986 = [null,null,null,null,null,null,null,null];
(statearr_53986[(0)] = com$wsscode$pathom$book$async$demos$state_machine__38930__auto__);

(statearr_53986[(1)] = (1));

return statearr_53986;
});
var com$wsscode$pathom$book$async$demos$state_machine__38930__auto____1 = (function (state_53968){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_53968);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e53987){if((e53987 instanceof Object)){
var ex__38933__auto__ = e53987;
var statearr_53988_54498 = state_53968;
(statearr_53988_54498[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53987;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54500 = state_53968;
state_53968 = G__54500;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$state_machine__38930__auto__ = function(state_53968){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$state_machine__38930__auto____1.call(this,state_53968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$state_machine__38930__auto____0;
com$wsscode$pathom$book$async$demos$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$state_machine__38930__auto____1;
return com$wsscode$pathom$book$async$demos$state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,G__53950_54475,G__53951_54476))
})();
var state__39005__auto__ = (function (){var statearr_53990 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_53990[(6)] = c__39003__auto__);

return statearr_53990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,G__53950_54475,G__53951_54476))
);

return c__39003__auto__;
});})(G__53950_54475,G__53951_54476))
;
(com.wsscode.pathom.book.async.demos.defresolver.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.book.async.demos.defresolver.cljs$core$IFn$_invoke$arity$3(G__53950_54475,G__53951_54476,G__53952_54477) : com.wsscode.pathom.book.async.demos.defresolver.call(null,G__53950_54475,G__53951_54476,G__53952_54477));
com.wsscode.pathom.book.async.demos.namespace_keys = (function com$wsscode$pathom$book$async$demos$namespace_keys(x,ns){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__53994){
var vec__53995 = p__53994;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53995,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53995,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.name(k)),v], null);
})),x);
});
com.wsscode.pathom.book.async.demos.adapt_schedule = (function com$wsscode$pathom$book$async$demos$adapt_schedule(schedule){
return com.wsscode.pathom.book.async.demos.namespace_keys(schedule,"tvmaze.schedule");
});
com.wsscode.pathom.book.async.demos.adapt_externals = (function com$wsscode$pathom$book$async$demos$adapt_externals(externals){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__54001){
var vec__54002 = p__54001;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54002,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54002,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),"id"),v], null);
})),externals);
});
com.wsscode.pathom.book.async.demos.adapt_show = (function com$wsscode$pathom$book$async$demos$adapt_show(p__54006){
var map__54007 = p__54006;
var map__54007__$1 = (((((!((map__54007 == null))))?(((((map__54007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54007):map__54007);
var show = map__54007__$1;
var externals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54007__$1,new cljs.core.Keyword(null,"externals","externals",-1256019925));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.book.async.demos.namespace_keys(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(show,new cljs.core.Keyword(null,"externals","externals",-1256019925),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"_links","_links",-1764230981)], 0)),new cljs.core.Keyword(null,"schedule","schedule",349275266),com.wsscode.pathom.book.async.demos.adapt_schedule),"tvmaze.show"),com.wsscode.pathom.book.async.demos.adapt_externals(externals)], 0));
});
var G__54009_54516 = new cljs.core.Symbol("com.wsscode.pathom.book.async.demos","tvmaze-show-by-id","com.wsscode.pathom.book.async.demos/tvmaze-show-by-id",1540496513,null);
var G__54010_54517 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tvmaze.show","url","tvmaze.show/url",-1942518592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","schedule","tvmaze.show/schedule",-1718496512),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tvmaze.schedule","time","tvmaze.schedule/time",802197486),new cljs.core.Keyword("tvmaze.schedule","days","tvmaze.schedule/days",-918360656)], null)], null),new cljs.core.Keyword("thetvdb","id","thetvdb/id",449796035),new cljs.core.Keyword("tvrage","id","tvrage/id",-235863707),new cljs.core.Keyword("tvmaze.show","weight","tvmaze.show/weight",553349573),new cljs.core.Keyword("tvmaze.show","type","tvmaze.show/type",-247594970),new cljs.core.Keyword("tvmaze.show","name","tvmaze.show/name",-89886777),new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","webChannel","tvmaze.show/webChannel",1466870059),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"country","country",312965309)], null)], null),new cljs.core.Keyword("tvmaze.show","status","tvmaze.show/status",355218797),new cljs.core.Keyword("tvmaze.show","language","tvmaze.show/language",-1804963698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","image","tvmaze.show/image",1908475534),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"original","original",-445386197)], null)], null),new cljs.core.Keyword("tvmaze.show","runtime","tvmaze.show/runtime",-2073961586),new cljs.core.Keyword("tvmaze.show","updated","tvmaze.show/updated",1380136306),new cljs.core.Keyword("imdb","id","imdb/id",-1385293390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","network","tvmaze.show/network",-302880909),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"timezone","timezone",1831928099)], null)], null)], null)], null),new cljs.core.Keyword("tvmaze.show","officialSite","tvmaze.show/officialSite",1325720278),new cljs.core.Keyword("tvmaze.show","summary","tvmaze.show/summary",-1569507370),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","rating","tvmaze.show/rating",-1135011368),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"average","average",-492356168)], null)], null),new cljs.core.Keyword("tvmaze.show","premiered","tvmaze.show/premiered",1517198014),new cljs.core.Keyword("tvmaze.show","genres","tvmaze.show/genres",1518905183)], null)], null);
var G__54011_54518 = ((function (G__54009_54516,G__54010_54517){
return (function (_,p__54019){
var map__54022 = p__54019;
var map__54022__$1 = (((((!((map__54022 == null))))?(((((map__54022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54022):map__54022);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54022__$1,new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770));
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,map__54022,map__54022__$1,id,G__54009_54516,G__54010_54517){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,map__54022,map__54022__$1,id,G__54009_54516,G__54010_54517){
return (function (state_54073){
var state_val_54074 = (state_54073[(1)]);
if((state_val_54074 === (1))){
var state_54073__$1 = state_54073;
var statearr_54076_54524 = state_54073__$1;
(statearr_54076_54524[(2)] = null);

(statearr_54076_54524[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54074 === (2))){
var inst_54071 = (state_54073[(2)]);
var state_54073__$1 = state_54073;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54073__$1,inst_54071);
} else {
if((state_val_54074 === (3))){
var inst_54051 = (state_54073[(2)]);
var state_54073__$1 = state_54073;
var statearr_54080_54526 = state_54073__$1;
(statearr_54080_54526[(2)] = inst_54051);


cljs.core.async.impl.ioc_helpers.process_exception(state_54073__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54074 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_54073,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_54064 = ["http://api.tvmaze.com/shows/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_54065 = com.wsscode.pathom.book.async.demos.fetch_json(inst_54064);
var state_54073__$1 = state_54073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54073__$1,(5),inst_54065);
} else {
if((state_val_54074 === (5))){
var inst_54067 = (state_54073[(2)]);
var inst_54068 = com.wsscode.common.async_cljs.throw_err(inst_54067);
var inst_54069 = com.wsscode.pathom.book.async.demos.adapt_show(inst_54068);
var state_54073__$1 = state_54073;
var statearr_54083_54529 = state_54073__$1;
(statearr_54083_54529[(2)] = inst_54069);


cljs.core.async.impl.ioc_helpers.process_exception(state_54073__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39003__auto__,map__54022,map__54022__$1,id,G__54009_54516,G__54010_54517))
;
return ((function (switch__38929__auto__,c__39003__auto__,map__54022,map__54022__$1,id,G__54009_54516,G__54010_54517){
return (function() {
var com$wsscode$pathom$book$async$demos$state_machine__38930__auto__ = null;
var com$wsscode$pathom$book$async$demos$state_machine__38930__auto____0 = (function (){
var statearr_54085 = [null,null,null,null,null,null,null];
(statearr_54085[(0)] = com$wsscode$pathom$book$async$demos$state_machine__38930__auto__);

(statearr_54085[(1)] = (1));

return statearr_54085;
});
var com$wsscode$pathom$book$async$demos$state_machine__38930__auto____1 = (function (state_54073){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_54073);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e54087){if((e54087 instanceof Object)){
var ex__38933__auto__ = e54087;
var statearr_54088_54535 = state_54073;
(statearr_54088_54535[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54087;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54536 = state_54073;
state_54073 = G__54536;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$state_machine__38930__auto__ = function(state_54073){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$state_machine__38930__auto____1.call(this,state_54073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$state_machine__38930__auto____0;
com$wsscode$pathom$book$async$demos$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$state_machine__38930__auto____1;
return com$wsscode$pathom$book$async$demos$state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,map__54022,map__54022__$1,id,G__54009_54516,G__54010_54517))
})();
var state__39005__auto__ = (function (){var statearr_54092 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_54092[(6)] = c__39003__auto__);

return statearr_54092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,map__54022,map__54022__$1,id,G__54009_54516,G__54010_54517))
);

return c__39003__auto__;
});})(G__54009_54516,G__54010_54517))
;
(com.wsscode.pathom.book.async.demos.defresolver.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.book.async.demos.defresolver.cljs$core$IFn$_invoke$arity$3(G__54009_54516,G__54010_54517,G__54011_54518) : com.wsscode.pathom.book.async.demos.defresolver.call(null,G__54009_54516,G__54010_54517,G__54011_54518));
com.wsscode.pathom.book.async.demos.adapt_episode = (function com$wsscode$pathom$book$async$demos$adapt_episode(episode){
return com.wsscode.pathom.book.async.demos.namespace_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(episode,new cljs.core.Keyword(null,"_links","_links",-1764230981)),"tvmaze.episode");
});
var G__54099_54539 = new cljs.core.Symbol("com.wsscode.pathom.book.async.demos","tvmaze-show-episodes","com.wsscode.pathom.book.async.demos/tvmaze-show-episodes",1735213976,null);
var G__54100_54540 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","episodes","tvmaze.show/episodes",-57025717),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tvmaze.episode","runtime","tvmaze.episode/runtime",-1090727774),new cljs.core.Keyword("tvmaze.episode","season","tvmaze.episode/season",-2123196477),new cljs.core.Keyword("tvmaze.episode","url","tvmaze.episode/url",-1087178748),new cljs.core.Keyword("tvmaze.episode","id","tvmaze.episode/id",-1746946074),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.episode","image","tvmaze.episode/image",-1361384630),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"original","original",-445386197)], null)], null),new cljs.core.Keyword("tvmaze.episode","airstamp","tvmaze.episode/airstamp",833726231),new cljs.core.Keyword("tvmaze.episode","airtime","tvmaze.episode/airtime",-2046164552),new cljs.core.Keyword("tvmaze.episode","summary","tvmaze.episode/summary",-469088902),new cljs.core.Keyword("tvmaze.episode","name","tvmaze.episode/name",-1147972997),new cljs.core.Keyword("tvmaze.episode","number","tvmaze.episode/number",202108),new cljs.core.Keyword("tvmaze.episode","airdate","tvmaze.episode/airdate",575526911)], null)], null)], null)], null);
var G__54101_54541 = ((function (G__54099_54539,G__54100_54540){
return (function (_,p__54104){
var map__54105 = p__54104;
var map__54105__$1 = (((((!((map__54105 == null))))?(((((map__54105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54105):map__54105);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54105__$1,new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770));
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,map__54105,map__54105__$1,id,G__54099_54539,G__54100_54540){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,map__54105,map__54105__$1,id,G__54099_54539,G__54100_54540){
return (function (state_54140){
var state_val_54141 = (state_54140[(1)]);
if((state_val_54141 === (1))){
var state_54140__$1 = state_54140;
var statearr_54176_54548 = state_54140__$1;
(statearr_54176_54548[(2)] = null);

(statearr_54176_54548[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (2))){
var inst_54138 = (state_54140[(2)]);
var state_54140__$1 = state_54140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54140__$1,inst_54138);
} else {
if((state_val_54141 === (3))){
var inst_54116 = (state_54140[(2)]);
var state_54140__$1 = state_54140;
var statearr_54178_54549 = state_54140__$1;
(statearr_54178_54549[(2)] = inst_54116);


cljs.core.async.impl.ioc_helpers.process_exception(state_54140__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_54140,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_54126 = [new cljs.core.Keyword("tvmaze.show","episodes","tvmaze.show/episodes",-57025717)];
var inst_54129 = ["http://api.tvmaze.com/shows/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/episodes"].join('');
var inst_54130 = com.wsscode.pathom.book.async.demos.fetch_json(inst_54129);
var state_54140__$1 = (function (){var statearr_54181 = state_54140;
(statearr_54181[(7)] = inst_54126);

return statearr_54181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54140__$1,(5),inst_54130);
} else {
if((state_val_54141 === (5))){
var inst_54126 = (state_54140[(7)]);
var inst_54132 = (state_54140[(2)]);
var inst_54133 = com.wsscode.common.async_cljs.throw_err(inst_54132);
var inst_54134 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.async.demos.adapt_episode,inst_54133);
var inst_54135 = [inst_54134];
var inst_54136 = cljs.core.PersistentHashMap.fromArrays(inst_54126,inst_54135);
var state_54140__$1 = state_54140;
var statearr_54188_54552 = state_54140__$1;
(statearr_54188_54552[(2)] = inst_54136);


cljs.core.async.impl.ioc_helpers.process_exception(state_54140__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39003__auto__,map__54105,map__54105__$1,id,G__54099_54539,G__54100_54540))
;
return ((function (switch__38929__auto__,c__39003__auto__,map__54105,map__54105__$1,id,G__54099_54539,G__54100_54540){
return (function() {
var com$wsscode$pathom$book$async$demos$state_machine__38930__auto__ = null;
var com$wsscode$pathom$book$async$demos$state_machine__38930__auto____0 = (function (){
var statearr_54191 = [null,null,null,null,null,null,null,null];
(statearr_54191[(0)] = com$wsscode$pathom$book$async$demos$state_machine__38930__auto__);

(statearr_54191[(1)] = (1));

return statearr_54191;
});
var com$wsscode$pathom$book$async$demos$state_machine__38930__auto____1 = (function (state_54140){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_54140);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e54193){if((e54193 instanceof Object)){
var ex__38933__auto__ = e54193;
var statearr_54194_54566 = state_54140;
(statearr_54194_54566[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54193;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54567 = state_54140;
state_54140 = G__54567;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$state_machine__38930__auto__ = function(state_54140){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$state_machine__38930__auto____1.call(this,state_54140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$state_machine__38930__auto____0;
com$wsscode$pathom$book$async$demos$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$state_machine__38930__auto____1;
return com$wsscode$pathom$book$async$demos$state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,map__54105,map__54105__$1,id,G__54099_54539,G__54100_54540))
})();
var state__39005__auto__ = (function (){var statearr_54196 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_54196[(6)] = c__39003__auto__);

return statearr_54196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,map__54105,map__54105__$1,id,G__54099_54539,G__54100_54540))
);

return c__39003__auto__;
});})(G__54099_54539,G__54100_54540))
;
(com.wsscode.pathom.book.async.demos.defresolver.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.book.async.demos.defresolver.cljs$core$IFn$_invoke$arity$3(G__54099_54539,G__54100_54540,G__54101_54541) : com.wsscode.pathom.book.async.demos.defresolver.call(null,G__54099_54539,G__54100_54540,G__54101_54541));
com.wsscode.pathom.book.async.demos.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_plugin(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.all_async_readers,com.wsscode.pathom.core.ident_join_reader,com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.book.async.demos.resolver_con,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.deref(com.wsscode.pathom.book.async.demos.indexes)], null)),com.wsscode.pathom.core.error_handler_plugin], null)], null));
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.async !== 'undefined') && (typeof com.wsscode.pathom.book.async.demos !== 'undefined') && (typeof com.wsscode.pathom.book.async.demos.AsyncParserDemo !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.async.demos.AsyncParserDemo = (function com$wsscode$pathom$book$async$demos$AsyncParserDemo(){
var this__43233__auto__ = this;
React.Component.apply(this__43233__auto__,arguments);

if((!((this__43233__auto__.initLocalState == null)))){
this__43233__auto__.state = this__43233__auto__.initLocalState();
} else {
this__43233__auto__.state = ({});
}

return this__43233__auto__;
});

var G__54378_54576 = com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype;
var G__54379_54577 = React.Component.prototype;
var G__54380_54578 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__54378_54576,G__54379_54577,G__54380_54578);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","AsyncParserDemo","com.wsscode.pathom.book.async.demos/AsyncParserDemo",1707225919),com.wsscode.pathom.book.async.demos.AsyncParserDemo);

var x54382_54580 = com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype;
x54382_54580.render = ((function (x54382_54580){
return (function (){
var this__42151__auto__ = this;
var this$ = this__42151__auto__;
var _STAR_reconciler_STAR__orig_val__54387 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__54388 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__54389 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__54390 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__54391 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__54392 = fulcro.client.primitives.get_reconciler(this__42151__auto__);
var _STAR_depth_STAR__temp_val__54393 = (fulcro.client.primitives.depth(this__42151__auto__) + (1));
var _STAR_shared_STAR__temp_val__54394 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42151__auto__);
var _STAR_instrument_STAR__temp_val__54395 = fulcro.client.primitives.instrument(this__42151__auto__);
var _STAR_parent_STAR__temp_val__54396 = this__42151__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__54392;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__54393;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__54394;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__54395;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__54396;

try{var map__54403 = fulcro.client.primitives.props(this$);
var map__54403__$1 = (((((!((map__54403 == null))))?(((((map__54403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54403):map__54403);
var props = map__54403__$1;
var random_dog_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54403__$1,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.data_fetch.marker_table,new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(fulcro.client.data_fetch.loading_QMARK_(marker))?fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Loading..."], 0)):fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (marker,map__54403,map__54403__$1,props,random_dog_url,_STAR_reconciler_STAR__orig_val__54387,_STAR_depth_STAR__orig_val__54388,_STAR_shared_STAR__orig_val__54389,_STAR_instrument_STAR__orig_val__54390,_STAR_parent_STAR__orig_val__54391,_STAR_reconciler_STAR__temp_val__54392,_STAR_depth_STAR__temp_val__54393,_STAR_shared_STAR__temp_val__54394,_STAR_instrument_STAR__temp_val__54395,_STAR_parent_STAR__temp_val__54396,this$,this__42151__auto__,x54382_54580){
return (function (){
return fulcro.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null)], 0));
});})(marker,map__54403,map__54403__$1,props,random_dog_url,_STAR_reconciler_STAR__orig_val__54387,_STAR_depth_STAR__orig_val__54388,_STAR_shared_STAR__orig_val__54389,_STAR_instrument_STAR__orig_val__54390,_STAR_parent_STAR__orig_val__54391,_STAR_reconciler_STAR__temp_val__54392,_STAR_depth_STAR__temp_val__54393,_STAR_shared_STAR__temp_val__54394,_STAR_instrument_STAR__temp_val__54395,_STAR_parent_STAR__temp_val__54396,this$,this__42151__auto__,x54382_54580))
], null),"Load"], 0)))], 0)),(cljs.core.truth_(random_dog_url)?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),random_dog_url], null)], 0))], 0)):null)], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__54391;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__54390;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__54389;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__54388;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__54387;
}});})(x54382_54580))
;


com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype.constructor = com.wsscode.pathom.book.async.demos.AsyncParserDemo;

com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype.constructor.displayName = "com.wsscode.pathom.book.async.demos/AsyncParserDemo";

com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype.fulcro$isComponent = true;

var x54413_54595 = com.wsscode.pathom.book.async.demos.AsyncParserDemo;
x54413_54595.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x54413_54595.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x54413_54595){
return (function (this$,p__54415){
var map__54418 = p__54415;
var map__54418__$1 = (((((!((map__54418 == null))))?(((((map__54418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54418):map__54418);
var props = map__54418__$1;
var random_dog_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54418__$1,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),"singleton"], null);
});})(x54413_54595))
;

x54413_54595.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x54413_54595.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x54413_54595){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.data_fetch.marker_table,new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null)], null);
});})(x54413_54595))
;


var x54422_54600 = com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype;
x54422_54600.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x54422_54600.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x54422_54600){
return (function (this$,p__54426){
var map__54428 = p__54426;
var map__54428__$1 = (((((!((map__54428 == null))))?(((((map__54428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54428):map__54428);
var props = map__54428__$1;
var random_dog_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54428__$1,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),"singleton"], null);
});})(x54422_54600))
;

x54422_54600.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x54422_54600.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x54422_54600){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.data_fetch.marker_table,new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null)], null);
});})(x54422_54600))
;


com.wsscode.pathom.book.async.demos.AsyncParserDemo.cljs$lang$type = true;

com.wsscode.pathom.book.async.demos.AsyncParserDemo.cljs$lang$ctorStr = "com.wsscode.pathom.book.async.demos/AsyncParserDemo";

com.wsscode.pathom.book.async.demos.AsyncParserDemo.cljs$lang$ctorPrWriter = (function (this__43236__auto__,writer__43237__auto__,opt__43238__auto__){
return cljs.core._write(writer__43237__auto__,"com.wsscode.pathom.book.async.demos/AsyncParserDemo");
});
com.wsscode.pathom.book.async.demos.async_parser_demo = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.async.demos.AsyncParserDemo);

//# sourceMappingURL=com.wsscode.pathom.book.async.demos.js.map
