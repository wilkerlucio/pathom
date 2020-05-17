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
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__61249 = cljs.core.get_global_hierarchy;
return (fexpr__61249.cljs$core$IFn$_invoke$arity$0 ? fexpr__61249.cljs$core$IFn$_invoke$arity$0() : fexpr__61249.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.wsscode.pathom.book.async.demos","resolver-con"),com.wsscode.pathom.connect.resolver_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
com.wsscode.pathom.book.async.demos.defresolver = com.wsscode.pathom.connect.resolver_factory(com.wsscode.pathom.book.async.demos.resolver_con,com.wsscode.pathom.book.async.demos.indexes);
com.wsscode.pathom.book.async.demos.fetch_json = (function com$wsscode$pathom$book$async$demos$fetch_json(url){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_61268){
var state_val_61269 = (state_61268[(1)]);
if((state_val_61269 === (1))){
var state_61268__$1 = state_61268;
var statearr_61270_61498 = state_61268__$1;
(statearr_61270_61498[(2)] = null);

(statearr_61270_61498[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61269 === (2))){
var inst_61266 = (state_61268[(2)]);
var state_61268__$1 = state_61268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61268__$1,inst_61266);
} else {
if((state_val_61269 === (3))){
var inst_61250 = (state_61268[(2)]);
var state_61268__$1 = state_61268;
var statearr_61271_61502 = state_61268__$1;
(statearr_61271_61502[(2)] = inst_61250);


cljs.core.async.impl.ioc_helpers.process_exception(state_61268__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61269 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_61268,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_61254 = fetch(url);
var inst_61255 = com.wsscode.common.async_cljs.promise__GT_chan(inst_61254);
var state_61268__$1 = state_61268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61268__$1,(6),inst_61255);
} else {
if((state_val_61269 === (5))){
var inst_61262 = (state_61268[(2)]);
var inst_61263 = com.wsscode.common.async_cljs.consumer_pair(inst_61262);
var inst_61264 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_61263,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_61268__$1 = state_61268;
var statearr_61272_61510 = state_61268__$1;
(statearr_61272_61510[(2)] = inst_61264);


cljs.core.async.impl.ioc_helpers.process_exception(state_61268__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61269 === (6))){
var inst_61257 = (state_61268[(2)]);
var inst_61258 = com.wsscode.common.async_cljs.consumer_pair(inst_61257);
var inst_61259 = inst_61258.json();
var inst_61260 = com.wsscode.common.async_cljs.promise__GT_chan(inst_61259);
var state_61268__$1 = state_61268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61268__$1,(5),inst_61260);
} else {
return null;
}
}
}
}
}
}
});})(c__47946__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__){
return (function() {
var com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto____0 = (function (){
var statearr_61273 = [null,null,null,null,null,null,null];
(statearr_61273[(0)] = com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto__);

(statearr_61273[(1)] = (1));

return statearr_61273;
});
var com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto____1 = (function (state_61268){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_61268);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e61274){if((e61274 instanceof Object)){
var ex__47667__auto__ = e61274;
var statearr_61275_61517 = state_61268;
(statearr_61275_61517[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61274;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61518 = state_61268;
state_61268 = G__61518;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto__ = function(state_61268){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto____1.call(this,state_61268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_61276 = f__47947__auto__();
(statearr_61276[(6)] = c__47946__auto__);

return statearr_61276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
});
com.wsscode.pathom.book.async.demos.defresolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.demos","random-dog","com.wsscode.pathom.book.async.demos/random-dog",-327443551,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),false], null),(function (_,___$1){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_61294){
var state_val_61295 = (state_61294[(1)]);
if((state_val_61295 === (1))){
var state_61294__$1 = state_61294;
var statearr_61296_61544 = state_61294__$1;
(statearr_61296_61544[(2)] = null);

(statearr_61296_61544[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61295 === (2))){
var inst_61292 = (state_61294[(2)]);
var state_61294__$1 = state_61294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61294__$1,inst_61292);
} else {
if((state_val_61295 === (3))){
var inst_61279 = (state_61294[(2)]);
var state_61294__$1 = state_61294;
var statearr_61297_61549 = state_61294__$1;
(statearr_61297_61549[(2)] = inst_61279);


cljs.core.async.impl.ioc_helpers.process_exception(state_61294__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61295 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_61294,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_61283 = [new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324)];
var inst_61284 = com.wsscode.pathom.book.async.demos.fetch_json("https://dog.ceo/api/breeds/image/random");
var state_61294__$1 = (function (){var statearr_61298 = state_61294;
(statearr_61298[(7)] = inst_61283);

return statearr_61298;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61294__$1,(5),inst_61284);
} else {
if((state_val_61295 === (5))){
var inst_61283 = (state_61294[(7)]);
var inst_61286 = (state_61294[(2)]);
var inst_61287 = com.wsscode.common.async_cljs.throw_err(inst_61286);
var inst_61288 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_61287);
var inst_61289 = [inst_61288];
var inst_61290 = cljs.core.PersistentHashMap.fromArrays(inst_61283,inst_61289);
var state_61294__$1 = state_61294;
var statearr_61299_61559 = state_61294__$1;
(statearr_61299_61559[(2)] = inst_61290);


cljs.core.async.impl.ioc_helpers.process_exception(state_61294__$1);

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
var com$wsscode$pathom$book$async$demos$state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$async$demos$state_machine__47664__auto____0 = (function (){
var statearr_61300 = [null,null,null,null,null,null,null,null];
(statearr_61300[(0)] = com$wsscode$pathom$book$async$demos$state_machine__47664__auto__);

(statearr_61300[(1)] = (1));

return statearr_61300;
});
var com$wsscode$pathom$book$async$demos$state_machine__47664__auto____1 = (function (state_61294){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_61294);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e61301){if((e61301 instanceof Object)){
var ex__47667__auto__ = e61301;
var statearr_61302_61565 = state_61294;
(statearr_61302_61565[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61301;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61567 = state_61294;
state_61294 = G__61567;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$state_machine__47664__auto__ = function(state_61294){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$state_machine__47664__auto____1.call(this,state_61294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$state_machine__47664__auto____0;
com$wsscode$pathom$book$async$demos$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$state_machine__47664__auto____1;
return com$wsscode$pathom$book$async$demos$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_61303 = f__47947__auto__();
(statearr_61303[(6)] = c__47946__auto__);

return statearr_61303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.async.demos.namespace_keys = (function com$wsscode$pathom$book$async$demos$namespace_keys(x,ns){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__61306){
var vec__61307 = p__61306;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61307,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61307,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.name(k)),v], null);
})),x);
});
com.wsscode.pathom.book.async.demos.adapt_schedule = (function com$wsscode$pathom$book$async$demos$adapt_schedule(schedule){
return com.wsscode.pathom.book.async.demos.namespace_keys(schedule,"tvmaze.schedule");
});
com.wsscode.pathom.book.async.demos.adapt_externals = (function com$wsscode$pathom$book$async$demos$adapt_externals(externals){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__61310){
var vec__61311 = p__61310;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61311,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61311,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),"id"),v], null);
})),externals);
});
com.wsscode.pathom.book.async.demos.adapt_show = (function com$wsscode$pathom$book$async$demos$adapt_show(p__61314){
var map__61315 = p__61314;
var map__61315__$1 = (((((!((map__61315 == null))))?(((((map__61315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61315):map__61315);
var show = map__61315__$1;
var externals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61315__$1,new cljs.core.Keyword(null,"externals","externals",-1256019925));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.book.async.demos.namespace_keys(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(show,new cljs.core.Keyword(null,"externals","externals",-1256019925),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"_links","_links",-1764230981)], 0)),new cljs.core.Keyword(null,"schedule","schedule",349275266),com.wsscode.pathom.book.async.demos.adapt_schedule),"tvmaze.show"),com.wsscode.pathom.book.async.demos.adapt_externals(externals)], 0));
});
com.wsscode.pathom.book.async.demos.defresolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.demos","tvmaze-show-by-id","com.wsscode.pathom.book.async.demos/tvmaze-show-by-id",1540496513,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tvmaze.show","url","tvmaze.show/url",-1942518592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","schedule","tvmaze.show/schedule",-1718496512),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tvmaze.schedule","time","tvmaze.schedule/time",802197486),new cljs.core.Keyword("tvmaze.schedule","days","tvmaze.schedule/days",-918360656)], null)], null),new cljs.core.Keyword("thetvdb","id","thetvdb/id",449796035),new cljs.core.Keyword("tvrage","id","tvrage/id",-235863707),new cljs.core.Keyword("tvmaze.show","weight","tvmaze.show/weight",553349573),new cljs.core.Keyword("tvmaze.show","type","tvmaze.show/type",-247594970),new cljs.core.Keyword("tvmaze.show","name","tvmaze.show/name",-89886777),new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","webChannel","tvmaze.show/webChannel",1466870059),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"country","country",312965309)], null)], null),new cljs.core.Keyword("tvmaze.show","status","tvmaze.show/status",355218797),new cljs.core.Keyword("tvmaze.show","language","tvmaze.show/language",-1804963698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","image","tvmaze.show/image",1908475534),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"original","original",-445386197)], null)], null),new cljs.core.Keyword("tvmaze.show","runtime","tvmaze.show/runtime",-2073961586),new cljs.core.Keyword("tvmaze.show","updated","tvmaze.show/updated",1380136306),new cljs.core.Keyword("imdb","id","imdb/id",-1385293390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","network","tvmaze.show/network",-302880909),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"timezone","timezone",1831928099)], null)], null)], null)], null),new cljs.core.Keyword("tvmaze.show","officialSite","tvmaze.show/officialSite",1325720278),new cljs.core.Keyword("tvmaze.show","summary","tvmaze.show/summary",-1569507370),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","rating","tvmaze.show/rating",-1135011368),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"average","average",-492356168)], null)], null),new cljs.core.Keyword("tvmaze.show","premiered","tvmaze.show/premiered",1517198014),new cljs.core.Keyword("tvmaze.show","genres","tvmaze.show/genres",1518905183)], null)], null),(function (_,p__61317){
var map__61318 = p__61317;
var map__61318__$1 = (((((!((map__61318 == null))))?(((((map__61318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61318):map__61318);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61318__$1,new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770));
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__61318,map__61318__$1,id){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__61318,map__61318__$1,id){
return (function (state_61333){
var state_val_61334 = (state_61333[(1)]);
if((state_val_61334 === (1))){
var state_61333__$1 = state_61333;
var statearr_61335_61620 = state_61333__$1;
(statearr_61335_61620[(2)] = null);

(statearr_61335_61620[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61334 === (2))){
var inst_61331 = (state_61333[(2)]);
var state_61333__$1 = state_61333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61333__$1,inst_61331);
} else {
if((state_val_61334 === (3))){
var inst_61320 = (state_61333[(2)]);
var state_61333__$1 = state_61333;
var statearr_61336_61624 = state_61333__$1;
(statearr_61336_61624[(2)] = inst_61320);


cljs.core.async.impl.ioc_helpers.process_exception(state_61333__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61334 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_61333,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_61324 = ["http://api.tvmaze.com/shows/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_61325 = com.wsscode.pathom.book.async.demos.fetch_json(inst_61324);
var state_61333__$1 = state_61333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61333__$1,(5),inst_61325);
} else {
if((state_val_61334 === (5))){
var inst_61327 = (state_61333[(2)]);
var inst_61328 = com.wsscode.common.async_cljs.throw_err(inst_61327);
var inst_61329 = com.wsscode.pathom.book.async.demos.adapt_show(inst_61328);
var state_61333__$1 = state_61333;
var statearr_61337_61631 = state_61333__$1;
(statearr_61337_61631[(2)] = inst_61329);


cljs.core.async.impl.ioc_helpers.process_exception(state_61333__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__,map__61318,map__61318__$1,id))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__61318,map__61318__$1,id){
return (function() {
var com$wsscode$pathom$book$async$demos$state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$async$demos$state_machine__47664__auto____0 = (function (){
var statearr_61338 = [null,null,null,null,null,null,null];
(statearr_61338[(0)] = com$wsscode$pathom$book$async$demos$state_machine__47664__auto__);

(statearr_61338[(1)] = (1));

return statearr_61338;
});
var com$wsscode$pathom$book$async$demos$state_machine__47664__auto____1 = (function (state_61333){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_61333);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e61344){if((e61344 instanceof Object)){
var ex__47667__auto__ = e61344;
var statearr_61345_61651 = state_61333;
(statearr_61345_61651[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61344;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61654 = state_61333;
state_61333 = G__61654;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$state_machine__47664__auto__ = function(state_61333){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$state_machine__47664__auto____1.call(this,state_61333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$state_machine__47664__auto____0;
com$wsscode$pathom$book$async$demos$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$state_machine__47664__auto____1;
return com$wsscode$pathom$book$async$demos$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__61318,map__61318__$1,id))
})();
var state__47948__auto__ = (function (){var statearr_61346 = f__47947__auto__();
(statearr_61346[(6)] = c__47946__auto__);

return statearr_61346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__61318,map__61318__$1,id))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.async.demos.adapt_episode = (function com$wsscode$pathom$book$async$demos$adapt_episode(episode){
return com.wsscode.pathom.book.async.demos.namespace_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(episode,new cljs.core.Keyword(null,"_links","_links",-1764230981)),"tvmaze.episode");
});
com.wsscode.pathom.book.async.demos.defresolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.demos","tvmaze-show-episodes","com.wsscode.pathom.book.async.demos/tvmaze-show-episodes",1735213976,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","episodes","tvmaze.show/episodes",-57025717),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tvmaze.episode","runtime","tvmaze.episode/runtime",-1090727774),new cljs.core.Keyword("tvmaze.episode","season","tvmaze.episode/season",-2123196477),new cljs.core.Keyword("tvmaze.episode","url","tvmaze.episode/url",-1087178748),new cljs.core.Keyword("tvmaze.episode","id","tvmaze.episode/id",-1746946074),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.episode","image","tvmaze.episode/image",-1361384630),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"original","original",-445386197)], null)], null),new cljs.core.Keyword("tvmaze.episode","airstamp","tvmaze.episode/airstamp",833726231),new cljs.core.Keyword("tvmaze.episode","airtime","tvmaze.episode/airtime",-2046164552),new cljs.core.Keyword("tvmaze.episode","summary","tvmaze.episode/summary",-469088902),new cljs.core.Keyword("tvmaze.episode","name","tvmaze.episode/name",-1147972997),new cljs.core.Keyword("tvmaze.episode","number","tvmaze.episode/number",202108),new cljs.core.Keyword("tvmaze.episode","airdate","tvmaze.episode/airdate",575526911)], null)], null)], null)], null),(function (_,p__61351){
var map__61352 = p__61351;
var map__61352__$1 = (((((!((map__61352 == null))))?(((((map__61352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61352):map__61352);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61352__$1,new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770));
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__61352,map__61352__$1,id){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__61352,map__61352__$1,id){
return (function (state_61370){
var state_val_61371 = (state_61370[(1)]);
if((state_val_61371 === (1))){
var state_61370__$1 = state_61370;
var statearr_61372_61669 = state_61370__$1;
(statearr_61372_61669[(2)] = null);

(statearr_61372_61669[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61371 === (2))){
var inst_61368 = (state_61370[(2)]);
var state_61370__$1 = state_61370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61370__$1,inst_61368);
} else {
if((state_val_61371 === (3))){
var inst_61354 = (state_61370[(2)]);
var state_61370__$1 = state_61370;
var statearr_61373_61672 = state_61370__$1;
(statearr_61373_61672[(2)] = inst_61354);


cljs.core.async.impl.ioc_helpers.process_exception(state_61370__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61371 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_61370,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_61358 = [new cljs.core.Keyword("tvmaze.show","episodes","tvmaze.show/episodes",-57025717)];
var inst_61359 = ["http://api.tvmaze.com/shows/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/episodes"].join('');
var inst_61360 = com.wsscode.pathom.book.async.demos.fetch_json(inst_61359);
var state_61370__$1 = (function (){var statearr_61374 = state_61370;
(statearr_61374[(7)] = inst_61358);

return statearr_61374;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61370__$1,(5),inst_61360);
} else {
if((state_val_61371 === (5))){
var inst_61358 = (state_61370[(7)]);
var inst_61362 = (state_61370[(2)]);
var inst_61363 = com.wsscode.common.async_cljs.throw_err(inst_61362);
var inst_61364 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.async.demos.adapt_episode,inst_61363);
var inst_61365 = [inst_61364];
var inst_61366 = cljs.core.PersistentHashMap.fromArrays(inst_61358,inst_61365);
var state_61370__$1 = state_61370;
var statearr_61375_61682 = state_61370__$1;
(statearr_61375_61682[(2)] = inst_61366);


cljs.core.async.impl.ioc_helpers.process_exception(state_61370__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__,map__61352,map__61352__$1,id))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__61352,map__61352__$1,id){
return (function() {
var com$wsscode$pathom$book$async$demos$state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$async$demos$state_machine__47664__auto____0 = (function (){
var statearr_61376 = [null,null,null,null,null,null,null,null];
(statearr_61376[(0)] = com$wsscode$pathom$book$async$demos$state_machine__47664__auto__);

(statearr_61376[(1)] = (1));

return statearr_61376;
});
var com$wsscode$pathom$book$async$demos$state_machine__47664__auto____1 = (function (state_61370){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_61370);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e61377){if((e61377 instanceof Object)){
var ex__47667__auto__ = e61377;
var statearr_61378_61686 = state_61370;
(statearr_61378_61686[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61377;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61688 = state_61370;
state_61370 = G__61688;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$state_machine__47664__auto__ = function(state_61370){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$state_machine__47664__auto____1.call(this,state_61370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$state_machine__47664__auto____0;
com$wsscode$pathom$book$async$demos$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$state_machine__47664__auto____1;
return com$wsscode$pathom$book$async$demos$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__61352,map__61352__$1,id))
})();
var state__47948__auto__ = (function (){var statearr_61379 = f__47947__auto__();
(statearr_61379[(6)] = c__47946__auto__);

return statearr_61379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__61352,map__61352__$1,id))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.async.demos.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.all_async_readers,com.wsscode.pathom.core.ident_join_reader,com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.book.async.demos.resolver_con,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.deref(com.wsscode.pathom.book.async.demos.indexes)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.error_handler_plugin], null)], null));
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.async !== 'undefined') && (typeof com.wsscode.pathom.book.async.demos !== 'undefined') && (typeof com.wsscode.pathom.book.async.demos.AsyncParserDemo !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.async.demos.AsyncParserDemo = (function com$wsscode$pathom$book$async$demos$AsyncParserDemo(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","AsyncParserDemo","com.wsscode.pathom.book.async.demos/AsyncParserDemo",1707225919),com.wsscode.pathom.book.async.demos.AsyncParserDemo);

var x61403_61709 = com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype;
x61403_61709.render = ((function (x61403_61709){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__61404 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__61405 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__61406 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__61407 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__61408 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__61409 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__61410 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__61411 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__61412 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__61413 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__61409;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__61410;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__61411;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__61412;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__61413;

try{var map__61430 = fulcro.client.primitives.props(this$);
var map__61430__$1 = (((((!((map__61430 == null))))?(((((map__61430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61430):map__61430);
var props = map__61430__$1;
var random_dog_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61430__$1,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.data_fetch.marker_table,new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(fulcro.client.data_fetch.loading_QMARK_(marker))?fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Loading..."], 0)):fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (marker,map__61430,map__61430__$1,props,random_dog_url,_STAR_reconciler_STAR__orig_val__61404,_STAR_depth_STAR__orig_val__61405,_STAR_shared_STAR__orig_val__61406,_STAR_instrument_STAR__orig_val__61407,_STAR_parent_STAR__orig_val__61408,_STAR_reconciler_STAR__temp_val__61409,_STAR_depth_STAR__temp_val__61410,_STAR_shared_STAR__temp_val__61411,_STAR_instrument_STAR__temp_val__61412,_STAR_parent_STAR__temp_val__61413,this$,this__50885__auto__,x61403_61709){
return (function (){
return fulcro.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null)], 0));
});})(marker,map__61430,map__61430__$1,props,random_dog_url,_STAR_reconciler_STAR__orig_val__61404,_STAR_depth_STAR__orig_val__61405,_STAR_shared_STAR__orig_val__61406,_STAR_instrument_STAR__orig_val__61407,_STAR_parent_STAR__orig_val__61408,_STAR_reconciler_STAR__temp_val__61409,_STAR_depth_STAR__temp_val__61410,_STAR_shared_STAR__temp_val__61411,_STAR_instrument_STAR__temp_val__61412,_STAR_parent_STAR__temp_val__61413,this$,this__50885__auto__,x61403_61709))
], null),"Load"], 0)))], 0)),(cljs.core.truth_(random_dog_url)?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),random_dog_url], null)], 0))], 0)):null)], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__61408;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__61407;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__61406;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__61405;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__61404;
}});})(x61403_61709))
;


com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype.constructor = com.wsscode.pathom.book.async.demos.AsyncParserDemo;

com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype.constructor.displayName = "com.wsscode.pathom.book.async.demos/AsyncParserDemo";

com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype.fulcro$isComponent = true;

var x61444_61720 = com.wsscode.pathom.book.async.demos.AsyncParserDemo;
x61444_61720.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x61444_61720.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x61444_61720){
return (function (this$,p__61445){
var map__61446 = p__61445;
var map__61446__$1 = (((((!((map__61446 == null))))?(((((map__61446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61446):map__61446);
var props = map__61446__$1;
var random_dog_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61446__$1,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),"singleton"], null);
});})(x61444_61720))
;

x61444_61720.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x61444_61720.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x61444_61720){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.data_fetch.marker_table,new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null)], null);
});})(x61444_61720))
;


var x61453_61728 = com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype;
x61453_61728.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x61453_61728.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x61453_61728){
return (function (this$,p__61457){
var map__61459 = p__61457;
var map__61459__$1 = (((((!((map__61459 == null))))?(((((map__61459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61459):map__61459);
var props = map__61459__$1;
var random_dog_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61459__$1,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),"singleton"], null);
});})(x61453_61728))
;

x61453_61728.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x61453_61728.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x61453_61728){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.data_fetch.marker_table,new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null)], null);
});})(x61453_61728))
;


com.wsscode.pathom.book.async.demos.AsyncParserDemo.cljs$lang$type = true;

com.wsscode.pathom.book.async.demos.AsyncParserDemo.cljs$lang$ctorStr = "com.wsscode.pathom.book.async.demos/AsyncParserDemo";

com.wsscode.pathom.book.async.demos.AsyncParserDemo.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.book.async.demos/AsyncParserDemo");
});
com.wsscode.pathom.book.async.demos.async_parser_demo = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.async.demos.AsyncParserDemo);

//# sourceMappingURL=com.wsscode.pathom.book.async.demos.js.map
