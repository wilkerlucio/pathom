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
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__73158 = cljs.core.get_global_hierarchy;
return (fexpr__73158.cljs$core$IFn$_invoke$arity$0 ? fexpr__73158.cljs$core$IFn$_invoke$arity$0() : fexpr__73158.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.wsscode.pathom.book.async.demos","resolver-con"),com.wsscode.pathom.connect.resolver_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
com.wsscode.pathom.book.async.demos.defresolver = com.wsscode.pathom.connect.resolver_factory(com.wsscode.pathom.book.async.demos.resolver_con,com.wsscode.pathom.book.async.demos.indexes);
com.wsscode.pathom.book.async.demos.fetch_json = (function com$wsscode$pathom$book$async$demos$fetch_json(url){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__){
return (function (state_73177){
var state_val_73178 = (state_73177[(1)]);
if((state_val_73178 === (1))){
var state_73177__$1 = state_73177;
var statearr_73179_73410 = state_73177__$1;
(statearr_73179_73410[(2)] = null);

(statearr_73179_73410[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73178 === (2))){
var inst_73175 = (state_73177[(2)]);
var state_73177__$1 = state_73177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73177__$1,inst_73175);
} else {
if((state_val_73178 === (3))){
var inst_73159 = (state_73177[(2)]);
var state_73177__$1 = state_73177;
var statearr_73180_73413 = state_73177__$1;
(statearr_73180_73413[(2)] = inst_73159);


cljs.core.async.impl.ioc_helpers.process_exception(state_73177__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73178 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_73177,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_73163 = fetch(url);
var inst_73164 = com.wsscode.common.async_cljs.promise__GT_chan(inst_73163);
var state_73177__$1 = state_73177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73177__$1,(6),inst_73164);
} else {
if((state_val_73178 === (5))){
var inst_73171 = (state_73177[(2)]);
var inst_73172 = com.wsscode.common.async_cljs.consumer_pair(inst_73171);
var inst_73173 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_73172,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_73177__$1 = state_73177;
var statearr_73183_73416 = state_73177__$1;
(statearr_73183_73416[(2)] = inst_73173);


cljs.core.async.impl.ioc_helpers.process_exception(state_73177__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73178 === (6))){
var inst_73166 = (state_73177[(2)]);
var inst_73167 = com.wsscode.common.async_cljs.consumer_pair(inst_73166);
var inst_73168 = inst_73167.json();
var inst_73169 = com.wsscode.common.async_cljs.promise__GT_chan(inst_73168);
var state_73177__$1 = state_73177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73177__$1,(5),inst_73169);
} else {
return null;
}
}
}
}
}
}
});})(c__45808__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__){
return (function() {
var com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__45526__auto____0 = (function (){
var statearr_73184 = [null,null,null,null,null,null,null];
(statearr_73184[(0)] = com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__45526__auto__);

(statearr_73184[(1)] = (1));

return statearr_73184;
});
var com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__45526__auto____1 = (function (state_73177){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_73177);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e73185){if((e73185 instanceof Object)){
var ex__45529__auto__ = e73185;
var statearr_73186_73418 = state_73177;
(statearr_73186_73418[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73185;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73420 = state_73177;
state_73177 = G__73420;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__45526__auto__ = function(state_73177){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__45526__auto____1.call(this,state_73177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__45526__auto____0;
com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__45526__auto____1;
return com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__))
})();
var state__45810__auto__ = (function (){var statearr_73187 = f__45809__auto__();
(statearr_73187[(6)] = c__45808__auto__);

return statearr_73187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__))
);

return c__45808__auto__;
});
com.wsscode.pathom.book.async.demos.defresolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.demos","random-dog","com.wsscode.pathom.book.async.demos/random-dog",-327443551,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),false], null),(function (_,___$1){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__){
return (function (state_73205){
var state_val_73206 = (state_73205[(1)]);
if((state_val_73206 === (1))){
var state_73205__$1 = state_73205;
var statearr_73207_73426 = state_73205__$1;
(statearr_73207_73426[(2)] = null);

(statearr_73207_73426[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73206 === (2))){
var inst_73202 = (state_73205[(2)]);
var state_73205__$1 = state_73205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73205__$1,inst_73202);
} else {
if((state_val_73206 === (3))){
var inst_73188 = (state_73205[(2)]);
var state_73205__$1 = state_73205;
var statearr_73214_73429 = state_73205__$1;
(statearr_73214_73429[(2)] = inst_73188);


cljs.core.async.impl.ioc_helpers.process_exception(state_73205__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73206 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_73205,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_73193 = [new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324)];
var inst_73194 = com.wsscode.pathom.book.async.demos.fetch_json("https://dog.ceo/api/breeds/image/random");
var state_73205__$1 = (function (){var statearr_73215 = state_73205;
(statearr_73215[(7)] = inst_73193);

return statearr_73215;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73205__$1,(5),inst_73194);
} else {
if((state_val_73206 === (5))){
var inst_73193 = (state_73205[(7)]);
var inst_73196 = (state_73205[(2)]);
var inst_73197 = com.wsscode.common.async_cljs.throw_err(inst_73196);
var inst_73198 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_73197);
var inst_73199 = [inst_73198];
var inst_73200 = cljs.core.PersistentHashMap.fromArrays(inst_73193,inst_73199);
var state_73205__$1 = state_73205;
var statearr_73220_73432 = state_73205__$1;
(statearr_73220_73432[(2)] = inst_73200);


cljs.core.async.impl.ioc_helpers.process_exception(state_73205__$1);

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
var com$wsscode$pathom$book$async$demos$state_machine__45526__auto__ = null;
var com$wsscode$pathom$book$async$demos$state_machine__45526__auto____0 = (function (){
var statearr_73221 = [null,null,null,null,null,null,null,null];
(statearr_73221[(0)] = com$wsscode$pathom$book$async$demos$state_machine__45526__auto__);

(statearr_73221[(1)] = (1));

return statearr_73221;
});
var com$wsscode$pathom$book$async$demos$state_machine__45526__auto____1 = (function (state_73205){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_73205);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e73224){if((e73224 instanceof Object)){
var ex__45529__auto__ = e73224;
var statearr_73225_73434 = state_73205;
(statearr_73225_73434[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73224;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73435 = state_73205;
state_73205 = G__73435;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$state_machine__45526__auto__ = function(state_73205){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$state_machine__45526__auto____1.call(this,state_73205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$state_machine__45526__auto____0;
com$wsscode$pathom$book$async$demos$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$state_machine__45526__auto____1;
return com$wsscode$pathom$book$async$demos$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__))
})();
var state__45810__auto__ = (function (){var statearr_73236 = f__45809__auto__();
(statearr_73236[(6)] = c__45808__auto__);

return statearr_73236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__))
);

return c__45808__auto__;
}));
com.wsscode.pathom.book.async.demos.namespace_keys = (function com$wsscode$pathom$book$async$demos$namespace_keys(x,ns){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__73240){
var vec__73241 = p__73240;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73241,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73241,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.name(k)),v], null);
})),x);
});
com.wsscode.pathom.book.async.demos.adapt_schedule = (function com$wsscode$pathom$book$async$demos$adapt_schedule(schedule){
return com.wsscode.pathom.book.async.demos.namespace_keys(schedule,"tvmaze.schedule");
});
com.wsscode.pathom.book.async.demos.adapt_externals = (function com$wsscode$pathom$book$async$demos$adapt_externals(externals){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__73252){
var vec__73253 = p__73252;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73253,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73253,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),"id"),v], null);
})),externals);
});
com.wsscode.pathom.book.async.demos.adapt_show = (function com$wsscode$pathom$book$async$demos$adapt_show(p__73259){
var map__73260 = p__73259;
var map__73260__$1 = (((((!((map__73260 == null))))?(((((map__73260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73260):map__73260);
var show = map__73260__$1;
var externals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73260__$1,new cljs.core.Keyword(null,"externals","externals",-1256019925));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.book.async.demos.namespace_keys(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(show,new cljs.core.Keyword(null,"externals","externals",-1256019925),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"_links","_links",-1764230981)], 0)),new cljs.core.Keyword(null,"schedule","schedule",349275266),com.wsscode.pathom.book.async.demos.adapt_schedule),"tvmaze.show"),com.wsscode.pathom.book.async.demos.adapt_externals(externals)], 0));
});
com.wsscode.pathom.book.async.demos.defresolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.demos","tvmaze-show-by-id","com.wsscode.pathom.book.async.demos/tvmaze-show-by-id",1540496513,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tvmaze.show","url","tvmaze.show/url",-1942518592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","schedule","tvmaze.show/schedule",-1718496512),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tvmaze.schedule","time","tvmaze.schedule/time",802197486),new cljs.core.Keyword("tvmaze.schedule","days","tvmaze.schedule/days",-918360656)], null)], null),new cljs.core.Keyword("thetvdb","id","thetvdb/id",449796035),new cljs.core.Keyword("tvrage","id","tvrage/id",-235863707),new cljs.core.Keyword("tvmaze.show","weight","tvmaze.show/weight",553349573),new cljs.core.Keyword("tvmaze.show","type","tvmaze.show/type",-247594970),new cljs.core.Keyword("tvmaze.show","name","tvmaze.show/name",-89886777),new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","webChannel","tvmaze.show/webChannel",1466870059),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"country","country",312965309)], null)], null),new cljs.core.Keyword("tvmaze.show","status","tvmaze.show/status",355218797),new cljs.core.Keyword("tvmaze.show","language","tvmaze.show/language",-1804963698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","image","tvmaze.show/image",1908475534),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"original","original",-445386197)], null)], null),new cljs.core.Keyword("tvmaze.show","runtime","tvmaze.show/runtime",-2073961586),new cljs.core.Keyword("tvmaze.show","updated","tvmaze.show/updated",1380136306),new cljs.core.Keyword("imdb","id","imdb/id",-1385293390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","network","tvmaze.show/network",-302880909),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"timezone","timezone",1831928099)], null)], null)], null)], null),new cljs.core.Keyword("tvmaze.show","officialSite","tvmaze.show/officialSite",1325720278),new cljs.core.Keyword("tvmaze.show","summary","tvmaze.show/summary",-1569507370),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","rating","tvmaze.show/rating",-1135011368),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"average","average",-492356168)], null)], null),new cljs.core.Keyword("tvmaze.show","premiered","tvmaze.show/premiered",1517198014),new cljs.core.Keyword("tvmaze.show","genres","tvmaze.show/genres",1518905183)], null)], null),(function (_,p__73262){
var map__73263 = p__73262;
var map__73263__$1 = (((((!((map__73263 == null))))?(((((map__73263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73263):map__73263);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73263__$1,new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770));
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,map__73263,map__73263__$1,id){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,map__73263,map__73263__$1,id){
return (function (state_73278){
var state_val_73279 = (state_73278[(1)]);
if((state_val_73279 === (1))){
var state_73278__$1 = state_73278;
var statearr_73280_73488 = state_73278__$1;
(statearr_73280_73488[(2)] = null);

(statearr_73280_73488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73279 === (2))){
var inst_73276 = (state_73278[(2)]);
var state_73278__$1 = state_73278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73278__$1,inst_73276);
} else {
if((state_val_73279 === (3))){
var inst_73265 = (state_73278[(2)]);
var state_73278__$1 = state_73278;
var statearr_73281_73490 = state_73278__$1;
(statearr_73281_73490[(2)] = inst_73265);


cljs.core.async.impl.ioc_helpers.process_exception(state_73278__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73279 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_73278,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_73269 = ["http://api.tvmaze.com/shows/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_73270 = com.wsscode.pathom.book.async.demos.fetch_json(inst_73269);
var state_73278__$1 = state_73278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73278__$1,(5),inst_73270);
} else {
if((state_val_73279 === (5))){
var inst_73272 = (state_73278[(2)]);
var inst_73273 = com.wsscode.common.async_cljs.throw_err(inst_73272);
var inst_73274 = com.wsscode.pathom.book.async.demos.adapt_show(inst_73273);
var state_73278__$1 = state_73278;
var statearr_73284_73497 = state_73278__$1;
(statearr_73284_73497[(2)] = inst_73274);


cljs.core.async.impl.ioc_helpers.process_exception(state_73278__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__45808__auto__,map__73263,map__73263__$1,id))
;
return ((function (switch__45525__auto__,c__45808__auto__,map__73263,map__73263__$1,id){
return (function() {
var com$wsscode$pathom$book$async$demos$state_machine__45526__auto__ = null;
var com$wsscode$pathom$book$async$demos$state_machine__45526__auto____0 = (function (){
var statearr_73287 = [null,null,null,null,null,null,null];
(statearr_73287[(0)] = com$wsscode$pathom$book$async$demos$state_machine__45526__auto__);

(statearr_73287[(1)] = (1));

return statearr_73287;
});
var com$wsscode$pathom$book$async$demos$state_machine__45526__auto____1 = (function (state_73278){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_73278);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e73289){if((e73289 instanceof Object)){
var ex__45529__auto__ = e73289;
var statearr_73291_73501 = state_73278;
(statearr_73291_73501[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73289;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73503 = state_73278;
state_73278 = G__73503;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$state_machine__45526__auto__ = function(state_73278){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$state_machine__45526__auto____1.call(this,state_73278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$state_machine__45526__auto____0;
com$wsscode$pathom$book$async$demos$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$state_machine__45526__auto____1;
return com$wsscode$pathom$book$async$demos$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,map__73263,map__73263__$1,id))
})();
var state__45810__auto__ = (function (){var statearr_73292 = f__45809__auto__();
(statearr_73292[(6)] = c__45808__auto__);

return statearr_73292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,map__73263,map__73263__$1,id))
);

return c__45808__auto__;
}));
com.wsscode.pathom.book.async.demos.adapt_episode = (function com$wsscode$pathom$book$async$demos$adapt_episode(episode){
return com.wsscode.pathom.book.async.demos.namespace_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(episode,new cljs.core.Keyword(null,"_links","_links",-1764230981)),"tvmaze.episode");
});
com.wsscode.pathom.book.async.demos.defresolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.demos","tvmaze-show-episodes","com.wsscode.pathom.book.async.demos/tvmaze-show-episodes",1735213976,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","episodes","tvmaze.show/episodes",-57025717),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tvmaze.episode","runtime","tvmaze.episode/runtime",-1090727774),new cljs.core.Keyword("tvmaze.episode","season","tvmaze.episode/season",-2123196477),new cljs.core.Keyword("tvmaze.episode","url","tvmaze.episode/url",-1087178748),new cljs.core.Keyword("tvmaze.episode","id","tvmaze.episode/id",-1746946074),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.episode","image","tvmaze.episode/image",-1361384630),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"original","original",-445386197)], null)], null),new cljs.core.Keyword("tvmaze.episode","airstamp","tvmaze.episode/airstamp",833726231),new cljs.core.Keyword("tvmaze.episode","airtime","tvmaze.episode/airtime",-2046164552),new cljs.core.Keyword("tvmaze.episode","summary","tvmaze.episode/summary",-469088902),new cljs.core.Keyword("tvmaze.episode","name","tvmaze.episode/name",-1147972997),new cljs.core.Keyword("tvmaze.episode","number","tvmaze.episode/number",202108),new cljs.core.Keyword("tvmaze.episode","airdate","tvmaze.episode/airdate",575526911)], null)], null)], null)], null),(function (_,p__73303){
var map__73304 = p__73303;
var map__73304__$1 = (((((!((map__73304 == null))))?(((((map__73304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73304):map__73304);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73304__$1,new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770));
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,map__73304,map__73304__$1,id){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,map__73304,map__73304__$1,id){
return (function (state_73325){
var state_val_73326 = (state_73325[(1)]);
if((state_val_73326 === (1))){
var state_73325__$1 = state_73325;
var statearr_73330_73535 = state_73325__$1;
(statearr_73330_73535[(2)] = null);

(statearr_73330_73535[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73326 === (2))){
var inst_73322 = (state_73325[(2)]);
var state_73325__$1 = state_73325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73325__$1,inst_73322);
} else {
if((state_val_73326 === (3))){
var inst_73307 = (state_73325[(2)]);
var state_73325__$1 = state_73325;
var statearr_73333_73539 = state_73325__$1;
(statearr_73333_73539[(2)] = inst_73307);


cljs.core.async.impl.ioc_helpers.process_exception(state_73325__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73326 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_73325,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_73312 = [new cljs.core.Keyword("tvmaze.show","episodes","tvmaze.show/episodes",-57025717)];
var inst_73313 = ["http://api.tvmaze.com/shows/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/episodes"].join('');
var inst_73314 = com.wsscode.pathom.book.async.demos.fetch_json(inst_73313);
var state_73325__$1 = (function (){var statearr_73343 = state_73325;
(statearr_73343[(7)] = inst_73312);

return statearr_73343;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73325__$1,(5),inst_73314);
} else {
if((state_val_73326 === (5))){
var inst_73312 = (state_73325[(7)]);
var inst_73316 = (state_73325[(2)]);
var inst_73317 = com.wsscode.common.async_cljs.throw_err(inst_73316);
var inst_73318 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.async.demos.adapt_episode,inst_73317);
var inst_73319 = [inst_73318];
var inst_73320 = cljs.core.PersistentHashMap.fromArrays(inst_73312,inst_73319);
var state_73325__$1 = state_73325;
var statearr_73346_73557 = state_73325__$1;
(statearr_73346_73557[(2)] = inst_73320);


cljs.core.async.impl.ioc_helpers.process_exception(state_73325__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__45808__auto__,map__73304,map__73304__$1,id))
;
return ((function (switch__45525__auto__,c__45808__auto__,map__73304,map__73304__$1,id){
return (function() {
var com$wsscode$pathom$book$async$demos$state_machine__45526__auto__ = null;
var com$wsscode$pathom$book$async$demos$state_machine__45526__auto____0 = (function (){
var statearr_73352 = [null,null,null,null,null,null,null,null];
(statearr_73352[(0)] = com$wsscode$pathom$book$async$demos$state_machine__45526__auto__);

(statearr_73352[(1)] = (1));

return statearr_73352;
});
var com$wsscode$pathom$book$async$demos$state_machine__45526__auto____1 = (function (state_73325){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_73325);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e73355){if((e73355 instanceof Object)){
var ex__45529__auto__ = e73355;
var statearr_73357_73585 = state_73325;
(statearr_73357_73585[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73355;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73588 = state_73325;
state_73325 = G__73588;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$state_machine__45526__auto__ = function(state_73325){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$state_machine__45526__auto____1.call(this,state_73325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$state_machine__45526__auto____0;
com$wsscode$pathom$book$async$demos$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$state_machine__45526__auto____1;
return com$wsscode$pathom$book$async$demos$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,map__73304,map__73304__$1,id))
})();
var state__45810__auto__ = (function (){var statearr_73363 = f__45809__auto__();
(statearr_73363[(6)] = c__45808__auto__);

return statearr_73363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,map__73304,map__73304__$1,id))
);

return c__45808__auto__;
}));
com.wsscode.pathom.book.async.demos.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.all_async_readers,com.wsscode.pathom.core.ident_join_reader,com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.book.async.demos.resolver_con,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.deref(com.wsscode.pathom.book.async.demos.indexes)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.error_handler_plugin], null)], null));
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.async !== 'undefined') && (typeof com.wsscode.pathom.book.async.demos !== 'undefined') && (typeof com.wsscode.pathom.book.async.demos.AsyncParserDemo !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.async.demos.AsyncParserDemo = (function com$wsscode$pathom$book$async$demos$AsyncParserDemo(){
var this__56858__auto__ = this;
React.Component.apply(this__56858__auto__,arguments);

if((!((this__56858__auto__.initLocalState == null)))){
this__56858__auto__.state = this__56858__auto__.initLocalState();
} else {
this__56858__auto__.state = ({});
}

return this__56858__auto__;
});

goog.object.extend(com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","AsyncParserDemo","com.wsscode.pathom.book.async.demos/AsyncParserDemo",1707225919),com.wsscode.pathom.book.async.demos.AsyncParserDemo);

var x73376_73600 = com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype;
x73376_73600.render = ((function (x73376_73600){
return (function (){
var this__55246__auto__ = this;
var this$ = this__55246__auto__;
var _STAR_reconciler_STAR__orig_val__73381 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__73382 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__73383 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__73384 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__73385 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__73386 = fulcro.client.primitives.get_reconciler(this__55246__auto__);
var _STAR_depth_STAR__temp_val__73388 = (fulcro.client.primitives.depth(this__55246__auto__) + (1));
var _STAR_shared_STAR__temp_val__73389 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__55246__auto__);
var _STAR_instrument_STAR__temp_val__73390 = fulcro.client.primitives.instrument(this__55246__auto__);
var _STAR_parent_STAR__temp_val__73391 = this__55246__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__73386;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__73388;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__73389;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__73390;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__73391;

try{var map__73395 = fulcro.client.primitives.props(this$);
var map__73395__$1 = (((((!((map__73395 == null))))?(((((map__73395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73395):map__73395);
var props = map__73395__$1;
var random_dog_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73395__$1,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.data_fetch.marker_table,new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(fulcro.client.data_fetch.loading_QMARK_(marker))?fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Loading..."], 0)):fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (marker,map__73395,map__73395__$1,props,random_dog_url,_STAR_reconciler_STAR__orig_val__73381,_STAR_depth_STAR__orig_val__73382,_STAR_shared_STAR__orig_val__73383,_STAR_instrument_STAR__orig_val__73384,_STAR_parent_STAR__orig_val__73385,_STAR_reconciler_STAR__temp_val__73386,_STAR_depth_STAR__temp_val__73388,_STAR_shared_STAR__temp_val__73389,_STAR_instrument_STAR__temp_val__73390,_STAR_parent_STAR__temp_val__73391,this$,this__55246__auto__,x73376_73600){
return (function (){
return fulcro.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null)], 0));
});})(marker,map__73395,map__73395__$1,props,random_dog_url,_STAR_reconciler_STAR__orig_val__73381,_STAR_depth_STAR__orig_val__73382,_STAR_shared_STAR__orig_val__73383,_STAR_instrument_STAR__orig_val__73384,_STAR_parent_STAR__orig_val__73385,_STAR_reconciler_STAR__temp_val__73386,_STAR_depth_STAR__temp_val__73388,_STAR_shared_STAR__temp_val__73389,_STAR_instrument_STAR__temp_val__73390,_STAR_parent_STAR__temp_val__73391,this$,this__55246__auto__,x73376_73600))
], null),"Load"], 0)))], 0)),(cljs.core.truth_(random_dog_url)?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),random_dog_url], null)], 0))], 0)):null)], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__73385;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__73384;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__73383;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__73382;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__73381;
}});})(x73376_73600))
;


com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype.constructor = com.wsscode.pathom.book.async.demos.AsyncParserDemo;

com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype.constructor.displayName = "com.wsscode.pathom.book.async.demos/AsyncParserDemo";

com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype.fulcro$isComponent = true;

var x73397_73639 = com.wsscode.pathom.book.async.demos.AsyncParserDemo;
x73397_73639.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x73397_73639.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x73397_73639){
return (function (this$,p__73398){
var map__73399 = p__73398;
var map__73399__$1 = (((((!((map__73399 == null))))?(((((map__73399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73399):map__73399);
var props = map__73399__$1;
var random_dog_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73399__$1,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),"singleton"], null);
});})(x73397_73639))
;

x73397_73639.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x73397_73639.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x73397_73639){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.data_fetch.marker_table,new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null)], null);
});})(x73397_73639))
;


var x73403_73649 = com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype;
x73403_73649.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x73403_73649.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x73403_73649){
return (function (this$,p__73404){
var map__73405 = p__73404;
var map__73405__$1 = (((((!((map__73405 == null))))?(((((map__73405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73405):map__73405);
var props = map__73405__$1;
var random_dog_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73405__$1,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),"singleton"], null);
});})(x73403_73649))
;

x73403_73649.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x73403_73649.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x73403_73649){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.data_fetch.marker_table,new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null)], null);
});})(x73403_73649))
;


com.wsscode.pathom.book.async.demos.AsyncParserDemo.cljs$lang$type = true;

com.wsscode.pathom.book.async.demos.AsyncParserDemo.cljs$lang$ctorStr = "com.wsscode.pathom.book.async.demos/AsyncParserDemo";

com.wsscode.pathom.book.async.demos.AsyncParserDemo.cljs$lang$ctorPrWriter = (function (this__56861__auto__,writer__56862__auto__,opt__56863__auto__){
return cljs.core._write(writer__56862__auto__,"com.wsscode.pathom.book.async.demos/AsyncParserDemo");
});
com.wsscode.pathom.book.async.demos.async_parser_demo = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.async.demos.AsyncParserDemo);

//# sourceMappingURL=com.wsscode.pathom.book.async.demos.js.map
