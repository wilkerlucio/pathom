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
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__53677 = cljs.core.get_global_hierarchy;
return (fexpr__53677.cljs$core$IFn$_invoke$arity$0 ? fexpr__53677.cljs$core$IFn$_invoke$arity$0() : fexpr__53677.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.wsscode.pathom.book.async.demos","resolver-con"),com.wsscode.pathom.connect.resolver_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
com.wsscode.pathom.book.async.demos.defresolver = com.wsscode.pathom.connect.resolver_factory(com.wsscode.pathom.book.async.demos.resolver_con,com.wsscode.pathom.book.async.demos.indexes);
com.wsscode.pathom.book.async.demos.fetch_json = (function com$wsscode$pathom$book$async$demos$fetch_json(url){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__){
return (function (state_53701){
var state_val_53703 = (state_53701[(1)]);
if((state_val_53703 === (1))){
var state_53701__$1 = state_53701;
var statearr_53709_54200 = state_53701__$1;
(statearr_53709_54200[(2)] = null);

(statearr_53709_54200[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (2))){
var inst_53699 = (state_53701[(2)]);
var state_53701__$1 = state_53701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53701__$1,inst_53699);
} else {
if((state_val_53703 === (3))){
var inst_53683 = (state_53701[(2)]);
var state_53701__$1 = state_53701;
var statearr_53713_54206 = state_53701__$1;
(statearr_53713_54206[(2)] = inst_53683);


cljs.core.async.impl.ioc_helpers.process_exception(state_53701__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53701,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_53687 = fetch(url);
var inst_53688 = com.wsscode.common.async_cljs.promise__GT_chan(inst_53687);
var state_53701__$1 = state_53701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53701__$1,(6),inst_53688);
} else {
if((state_val_53703 === (5))){
var inst_53695 = (state_53701[(2)]);
var inst_53696 = com.wsscode.common.async_cljs.consumer_pair(inst_53695);
var inst_53697 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_53696,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_53701__$1 = state_53701;
var statearr_53718_54211 = state_53701__$1;
(statearr_53718_54211[(2)] = inst_53697);


cljs.core.async.impl.ioc_helpers.process_exception(state_53701__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (6))){
var inst_53690 = (state_53701[(2)]);
var inst_53691 = com.wsscode.common.async_cljs.consumer_pair(inst_53690);
var inst_53692 = inst_53691.json();
var inst_53693 = com.wsscode.common.async_cljs.promise__GT_chan(inst_53692);
var state_53701__$1 = state_53701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53701__$1,(5),inst_53693);
} else {
return null;
}
}
}
}
}
}
});})(c__39084__auto__))
;
return ((function (switch__38786__auto__,c__39084__auto__){
return (function() {
var com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38787__auto____0 = (function (){
var statearr_53734 = [null,null,null,null,null,null,null];
(statearr_53734[(0)] = com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38787__auto__);

(statearr_53734[(1)] = (1));

return statearr_53734;
});
var com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38787__auto____1 = (function (state_53701){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_53701);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e53735){if((e53735 instanceof Object)){
var ex__38790__auto__ = e53735;
var statearr_53736_54219 = state_53701;
(statearr_53736_54219[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53735;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54222 = state_53701;
state_53701 = G__54222;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38787__auto__ = function(state_53701){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38787__auto____1.call(this,state_53701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38787__auto____0;
com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38787__auto____1;
return com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__))
})();
var state__39086__auto__ = (function (){var statearr_53741 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_53741[(6)] = c__39084__auto__);

return statearr_53741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__))
);

return c__39084__auto__;
});
var G__53742_54226 = new cljs.core.Symbol("com.wsscode.pathom.book.async.demos","random-dog","com.wsscode.pathom.book.async.demos/random-dog",-327443551,null);
var G__53743_54227 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),false], null);
var G__53744_54228 = ((function (G__53742_54226,G__53743_54227){
return (function (_,___$1){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,G__53742_54226,G__53743_54227){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,G__53742_54226,G__53743_54227){
return (function (state_53761){
var state_val_53762 = (state_53761[(1)]);
if((state_val_53762 === (1))){
var state_53761__$1 = state_53761;
var statearr_53766_54245 = state_53761__$1;
(statearr_53766_54245[(2)] = null);

(statearr_53766_54245[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53762 === (2))){
var inst_53758 = (state_53761[(2)]);
var state_53761__$1 = state_53761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53761__$1,inst_53758);
} else {
if((state_val_53762 === (3))){
var inst_53745 = (state_53761[(2)]);
var state_53761__$1 = state_53761;
var statearr_53767_54250 = state_53761__$1;
(statearr_53767_54250[(2)] = inst_53745);


cljs.core.async.impl.ioc_helpers.process_exception(state_53761__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53762 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53761,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_53749 = [new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324)];
var inst_53750 = com.wsscode.pathom.book.async.demos.fetch_json("https://dog.ceo/api/breeds/image/random");
var state_53761__$1 = (function (){var statearr_53768 = state_53761;
(statearr_53768[(7)] = inst_53749);

return statearr_53768;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53761__$1,(5),inst_53750);
} else {
if((state_val_53762 === (5))){
var inst_53749 = (state_53761[(7)]);
var inst_53752 = (state_53761[(2)]);
var inst_53753 = com.wsscode.common.async_cljs.throw_err(inst_53752);
var inst_53754 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_53753);
var inst_53755 = [inst_53754];
var inst_53756 = cljs.core.PersistentHashMap.fromArrays(inst_53749,inst_53755);
var state_53761__$1 = state_53761;
var statearr_53769_54255 = state_53761__$1;
(statearr_53769_54255[(2)] = inst_53756);


cljs.core.async.impl.ioc_helpers.process_exception(state_53761__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39084__auto__,G__53742_54226,G__53743_54227))
;
return ((function (switch__38786__auto__,c__39084__auto__,G__53742_54226,G__53743_54227){
return (function() {
var com$wsscode$pathom$book$async$demos$state_machine__38787__auto__ = null;
var com$wsscode$pathom$book$async$demos$state_machine__38787__auto____0 = (function (){
var statearr_53770 = [null,null,null,null,null,null,null,null];
(statearr_53770[(0)] = com$wsscode$pathom$book$async$demos$state_machine__38787__auto__);

(statearr_53770[(1)] = (1));

return statearr_53770;
});
var com$wsscode$pathom$book$async$demos$state_machine__38787__auto____1 = (function (state_53761){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_53761);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e53771){if((e53771 instanceof Object)){
var ex__38790__auto__ = e53771;
var statearr_53772_54258 = state_53761;
(statearr_53772_54258[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54260 = state_53761;
state_53761 = G__54260;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$state_machine__38787__auto__ = function(state_53761){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$state_machine__38787__auto____1.call(this,state_53761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$state_machine__38787__auto____0;
com$wsscode$pathom$book$async$demos$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$state_machine__38787__auto____1;
return com$wsscode$pathom$book$async$demos$state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,G__53742_54226,G__53743_54227))
})();
var state__39086__auto__ = (function (){var statearr_53773 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_53773[(6)] = c__39084__auto__);

return statearr_53773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,G__53742_54226,G__53743_54227))
);

return c__39084__auto__;
});})(G__53742_54226,G__53743_54227))
;
(com.wsscode.pathom.book.async.demos.defresolver.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.book.async.demos.defresolver.cljs$core$IFn$_invoke$arity$3(G__53742_54226,G__53743_54227,G__53744_54228) : com.wsscode.pathom.book.async.demos.defresolver.call(null,G__53742_54226,G__53743_54227,G__53744_54228));
com.wsscode.pathom.book.async.demos.namespace_keys = (function com$wsscode$pathom$book$async$demos$namespace_keys(x,ns){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__53777){
var vec__53778 = p__53777;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53778,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53778,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.name(k)),v], null);
})),x);
});
com.wsscode.pathom.book.async.demos.adapt_schedule = (function com$wsscode$pathom$book$async$demos$adapt_schedule(schedule){
return com.wsscode.pathom.book.async.demos.namespace_keys(schedule,"tvmaze.schedule");
});
com.wsscode.pathom.book.async.demos.adapt_externals = (function com$wsscode$pathom$book$async$demos$adapt_externals(externals){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__53787){
var vec__53788 = p__53787;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53788,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53788,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),"id"),v], null);
})),externals);
});
com.wsscode.pathom.book.async.demos.adapt_show = (function com$wsscode$pathom$book$async$demos$adapt_show(p__53793){
var map__53794 = p__53793;
var map__53794__$1 = (((((!((map__53794 == null))))?(((((map__53794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53794):map__53794);
var show = map__53794__$1;
var externals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53794__$1,new cljs.core.Keyword(null,"externals","externals",-1256019925));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.book.async.demos.namespace_keys(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(show,new cljs.core.Keyword(null,"externals","externals",-1256019925),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"_links","_links",-1764230981)], 0)),new cljs.core.Keyword(null,"schedule","schedule",349275266),com.wsscode.pathom.book.async.demos.adapt_schedule),"tvmaze.show"),com.wsscode.pathom.book.async.demos.adapt_externals(externals)], 0));
});
var G__53798_54272 = new cljs.core.Symbol("com.wsscode.pathom.book.async.demos","tvmaze-show-by-id","com.wsscode.pathom.book.async.demos/tvmaze-show-by-id",1540496513,null);
var G__53799_54274 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tvmaze.show","url","tvmaze.show/url",-1942518592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","schedule","tvmaze.show/schedule",-1718496512),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tvmaze.schedule","time","tvmaze.schedule/time",802197486),new cljs.core.Keyword("tvmaze.schedule","days","tvmaze.schedule/days",-918360656)], null)], null),new cljs.core.Keyword("thetvdb","id","thetvdb/id",449796035),new cljs.core.Keyword("tvrage","id","tvrage/id",-235863707),new cljs.core.Keyword("tvmaze.show","weight","tvmaze.show/weight",553349573),new cljs.core.Keyword("tvmaze.show","type","tvmaze.show/type",-247594970),new cljs.core.Keyword("tvmaze.show","name","tvmaze.show/name",-89886777),new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","webChannel","tvmaze.show/webChannel",1466870059),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"country","country",312965309)], null)], null),new cljs.core.Keyword("tvmaze.show","status","tvmaze.show/status",355218797),new cljs.core.Keyword("tvmaze.show","language","tvmaze.show/language",-1804963698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","image","tvmaze.show/image",1908475534),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"original","original",-445386197)], null)], null),new cljs.core.Keyword("tvmaze.show","runtime","tvmaze.show/runtime",-2073961586),new cljs.core.Keyword("tvmaze.show","updated","tvmaze.show/updated",1380136306),new cljs.core.Keyword("imdb","id","imdb/id",-1385293390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","network","tvmaze.show/network",-302880909),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"timezone","timezone",1831928099)], null)], null)], null)], null),new cljs.core.Keyword("tvmaze.show","officialSite","tvmaze.show/officialSite",1325720278),new cljs.core.Keyword("tvmaze.show","summary","tvmaze.show/summary",-1569507370),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","rating","tvmaze.show/rating",-1135011368),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"average","average",-492356168)], null)], null),new cljs.core.Keyword("tvmaze.show","premiered","tvmaze.show/premiered",1517198014),new cljs.core.Keyword("tvmaze.show","genres","tvmaze.show/genres",1518905183)], null)], null);
var G__53800_54275 = ((function (G__53798_54272,G__53799_54274){
return (function (_,p__53802){
var map__53803 = p__53802;
var map__53803__$1 = (((((!((map__53803 == null))))?(((((map__53803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53803):map__53803);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53803__$1,new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770));
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,map__53803,map__53803__$1,id,G__53798_54272,G__53799_54274){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,map__53803,map__53803__$1,id,G__53798_54272,G__53799_54274){
return (function (state_53818){
var state_val_53819 = (state_53818[(1)]);
if((state_val_53819 === (1))){
var state_53818__$1 = state_53818;
var statearr_53820_54286 = state_53818__$1;
(statearr_53820_54286[(2)] = null);

(statearr_53820_54286[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53819 === (2))){
var inst_53816 = (state_53818[(2)]);
var state_53818__$1 = state_53818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53818__$1,inst_53816);
} else {
if((state_val_53819 === (3))){
var inst_53805 = (state_53818[(2)]);
var state_53818__$1 = state_53818;
var statearr_53822_54292 = state_53818__$1;
(statearr_53822_54292[(2)] = inst_53805);


cljs.core.async.impl.ioc_helpers.process_exception(state_53818__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53819 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53818,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_53809 = ["http://api.tvmaze.com/shows/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_53810 = com.wsscode.pathom.book.async.demos.fetch_json(inst_53809);
var state_53818__$1 = state_53818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53818__$1,(5),inst_53810);
} else {
if((state_val_53819 === (5))){
var inst_53812 = (state_53818[(2)]);
var inst_53813 = com.wsscode.common.async_cljs.throw_err(inst_53812);
var inst_53814 = com.wsscode.pathom.book.async.demos.adapt_show(inst_53813);
var state_53818__$1 = state_53818;
var statearr_53824_54293 = state_53818__$1;
(statearr_53824_54293[(2)] = inst_53814);


cljs.core.async.impl.ioc_helpers.process_exception(state_53818__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39084__auto__,map__53803,map__53803__$1,id,G__53798_54272,G__53799_54274))
;
return ((function (switch__38786__auto__,c__39084__auto__,map__53803,map__53803__$1,id,G__53798_54272,G__53799_54274){
return (function() {
var com$wsscode$pathom$book$async$demos$state_machine__38787__auto__ = null;
var com$wsscode$pathom$book$async$demos$state_machine__38787__auto____0 = (function (){
var statearr_53825 = [null,null,null,null,null,null,null];
(statearr_53825[(0)] = com$wsscode$pathom$book$async$demos$state_machine__38787__auto__);

(statearr_53825[(1)] = (1));

return statearr_53825;
});
var com$wsscode$pathom$book$async$demos$state_machine__38787__auto____1 = (function (state_53818){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_53818);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e53826){if((e53826 instanceof Object)){
var ex__38790__auto__ = e53826;
var statearr_53827_54298 = state_53818;
(statearr_53827_54298[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53826;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54299 = state_53818;
state_53818 = G__54299;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$state_machine__38787__auto__ = function(state_53818){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$state_machine__38787__auto____1.call(this,state_53818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$state_machine__38787__auto____0;
com$wsscode$pathom$book$async$demos$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$state_machine__38787__auto____1;
return com$wsscode$pathom$book$async$demos$state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,map__53803,map__53803__$1,id,G__53798_54272,G__53799_54274))
})();
var state__39086__auto__ = (function (){var statearr_53837 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_53837[(6)] = c__39084__auto__);

return statearr_53837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,map__53803,map__53803__$1,id,G__53798_54272,G__53799_54274))
);

return c__39084__auto__;
});})(G__53798_54272,G__53799_54274))
;
(com.wsscode.pathom.book.async.demos.defresolver.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.book.async.demos.defresolver.cljs$core$IFn$_invoke$arity$3(G__53798_54272,G__53799_54274,G__53800_54275) : com.wsscode.pathom.book.async.demos.defresolver.call(null,G__53798_54272,G__53799_54274,G__53800_54275));
com.wsscode.pathom.book.async.demos.adapt_episode = (function com$wsscode$pathom$book$async$demos$adapt_episode(episode){
return com.wsscode.pathom.book.async.demos.namespace_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(episode,new cljs.core.Keyword(null,"_links","_links",-1764230981)),"tvmaze.episode");
});
var G__53883_54308 = new cljs.core.Symbol("com.wsscode.pathom.book.async.demos","tvmaze-show-episodes","com.wsscode.pathom.book.async.demos/tvmaze-show-episodes",1735213976,null);
var G__53884_54309 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","episodes","tvmaze.show/episodes",-57025717),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tvmaze.episode","runtime","tvmaze.episode/runtime",-1090727774),new cljs.core.Keyword("tvmaze.episode","season","tvmaze.episode/season",-2123196477),new cljs.core.Keyword("tvmaze.episode","url","tvmaze.episode/url",-1087178748),new cljs.core.Keyword("tvmaze.episode","id","tvmaze.episode/id",-1746946074),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.episode","image","tvmaze.episode/image",-1361384630),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"original","original",-445386197)], null)], null),new cljs.core.Keyword("tvmaze.episode","airstamp","tvmaze.episode/airstamp",833726231),new cljs.core.Keyword("tvmaze.episode","airtime","tvmaze.episode/airtime",-2046164552),new cljs.core.Keyword("tvmaze.episode","summary","tvmaze.episode/summary",-469088902),new cljs.core.Keyword("tvmaze.episode","name","tvmaze.episode/name",-1147972997),new cljs.core.Keyword("tvmaze.episode","number","tvmaze.episode/number",202108),new cljs.core.Keyword("tvmaze.episode","airdate","tvmaze.episode/airdate",575526911)], null)], null)], null)], null);
var G__53885_54310 = ((function (G__53883_54308,G__53884_54309){
return (function (_,p__53890){
var map__53891 = p__53890;
var map__53891__$1 = (((((!((map__53891 == null))))?(((((map__53891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53891):map__53891);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53891__$1,new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770));
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,map__53891,map__53891__$1,id,G__53883_54308,G__53884_54309){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,map__53891,map__53891__$1,id,G__53883_54308,G__53884_54309){
return (function (state_53916){
var state_val_53917 = (state_53916[(1)]);
if((state_val_53917 === (1))){
var state_53916__$1 = state_53916;
var statearr_53924_54319 = state_53916__$1;
(statearr_53924_54319[(2)] = null);

(statearr_53924_54319[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53917 === (2))){
var inst_53913 = (state_53916[(2)]);
var state_53916__$1 = state_53916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53916__$1,inst_53913);
} else {
if((state_val_53917 === (3))){
var inst_53894 = (state_53916[(2)]);
var state_53916__$1 = state_53916;
var statearr_53932_54323 = state_53916__$1;
(statearr_53932_54323[(2)] = inst_53894);


cljs.core.async.impl.ioc_helpers.process_exception(state_53916__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53917 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53916,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_53900 = [new cljs.core.Keyword("tvmaze.show","episodes","tvmaze.show/episodes",-57025717)];
var inst_53901 = ["http://api.tvmaze.com/shows/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/episodes"].join('');
var inst_53902 = com.wsscode.pathom.book.async.demos.fetch_json(inst_53901);
var state_53916__$1 = (function (){var statearr_53934 = state_53916;
(statearr_53934[(7)] = inst_53900);

return statearr_53934;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53916__$1,(5),inst_53902);
} else {
if((state_val_53917 === (5))){
var inst_53900 = (state_53916[(7)]);
var inst_53904 = (state_53916[(2)]);
var inst_53905 = com.wsscode.common.async_cljs.throw_err(inst_53904);
var inst_53906 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.async.demos.adapt_episode,inst_53905);
var inst_53907 = [inst_53906];
var inst_53908 = cljs.core.PersistentHashMap.fromArrays(inst_53900,inst_53907);
var state_53916__$1 = state_53916;
var statearr_53935_54332 = state_53916__$1;
(statearr_53935_54332[(2)] = inst_53908);


cljs.core.async.impl.ioc_helpers.process_exception(state_53916__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39084__auto__,map__53891,map__53891__$1,id,G__53883_54308,G__53884_54309))
;
return ((function (switch__38786__auto__,c__39084__auto__,map__53891,map__53891__$1,id,G__53883_54308,G__53884_54309){
return (function() {
var com$wsscode$pathom$book$async$demos$state_machine__38787__auto__ = null;
var com$wsscode$pathom$book$async$demos$state_machine__38787__auto____0 = (function (){
var statearr_53945 = [null,null,null,null,null,null,null,null];
(statearr_53945[(0)] = com$wsscode$pathom$book$async$demos$state_machine__38787__auto__);

(statearr_53945[(1)] = (1));

return statearr_53945;
});
var com$wsscode$pathom$book$async$demos$state_machine__38787__auto____1 = (function (state_53916){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_53916);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e53947){if((e53947 instanceof Object)){
var ex__38790__auto__ = e53947;
var statearr_53948_54334 = state_53916;
(statearr_53948_54334[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53947;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54335 = state_53916;
state_53916 = G__54335;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$state_machine__38787__auto__ = function(state_53916){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$state_machine__38787__auto____1.call(this,state_53916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$state_machine__38787__auto____0;
com$wsscode$pathom$book$async$demos$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$state_machine__38787__auto____1;
return com$wsscode$pathom$book$async$demos$state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,map__53891,map__53891__$1,id,G__53883_54308,G__53884_54309))
})();
var state__39086__auto__ = (function (){var statearr_53952 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_53952[(6)] = c__39084__auto__);

return statearr_53952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,map__53891,map__53891__$1,id,G__53883_54308,G__53884_54309))
);

return c__39084__auto__;
});})(G__53883_54308,G__53884_54309))
;
(com.wsscode.pathom.book.async.demos.defresolver.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.book.async.demos.defresolver.cljs$core$IFn$_invoke$arity$3(G__53883_54308,G__53884_54309,G__53885_54310) : com.wsscode.pathom.book.async.demos.defresolver.call(null,G__53883_54308,G__53884_54309,G__53885_54310));
com.wsscode.pathom.book.async.demos.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_plugin(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.all_async_readers,com.wsscode.pathom.core.ident_join_reader,com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.book.async.demos.resolver_con,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.deref(com.wsscode.pathom.book.async.demos.indexes)], null)),com.wsscode.pathom.core.error_handler_plugin], null)], null));
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.async !== 'undefined') && (typeof com.wsscode.pathom.book.async.demos !== 'undefined') && (typeof com.wsscode.pathom.book.async.demos.AsyncParserDemo !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.async.demos.AsyncParserDemo = (function com$wsscode$pathom$book$async$demos$AsyncParserDemo(){
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__54066_54342 = com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype;
var G__54067_54343 = React.Component.prototype;
var G__54068_54344 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__54066_54342,G__54067_54343,G__54068_54344);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","AsyncParserDemo","com.wsscode.pathom.book.async.demos/AsyncParserDemo",1707225919),com.wsscode.pathom.book.async.demos.AsyncParserDemo);

var x54073_54346 = com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype;
x54073_54346.render = ((function (x54073_54346){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__54080 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__54081 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__54082 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__54083 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__54084 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__54085 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__54086 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__54087 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__54088 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__54089 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__54085;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__54086;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__54087;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__54088;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__54089;

try{var map__54096 = fulcro.client.primitives.props(this$);
var map__54096__$1 = (((((!((map__54096 == null))))?(((((map__54096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54096):map__54096);
var props = map__54096__$1;
var random_dog_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54096__$1,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.data_fetch.marker_table,new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(fulcro.client.data_fetch.loading_QMARK_(marker))?fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Loading..."], 0)):fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (marker,map__54096,map__54096__$1,props,random_dog_url,_STAR_reconciler_STAR__orig_val__54080,_STAR_depth_STAR__orig_val__54081,_STAR_shared_STAR__orig_val__54082,_STAR_instrument_STAR__orig_val__54083,_STAR_parent_STAR__orig_val__54084,_STAR_reconciler_STAR__temp_val__54085,_STAR_depth_STAR__temp_val__54086,_STAR_shared_STAR__temp_val__54087,_STAR_instrument_STAR__temp_val__54088,_STAR_parent_STAR__temp_val__54089,this$,this__42008__auto__,x54073_54346){
return (function (){
return fulcro.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null)], 0));
});})(marker,map__54096,map__54096__$1,props,random_dog_url,_STAR_reconciler_STAR__orig_val__54080,_STAR_depth_STAR__orig_val__54081,_STAR_shared_STAR__orig_val__54082,_STAR_instrument_STAR__orig_val__54083,_STAR_parent_STAR__orig_val__54084,_STAR_reconciler_STAR__temp_val__54085,_STAR_depth_STAR__temp_val__54086,_STAR_shared_STAR__temp_val__54087,_STAR_instrument_STAR__temp_val__54088,_STAR_parent_STAR__temp_val__54089,this$,this__42008__auto__,x54073_54346))
], null),"Load"], 0)))], 0)),(cljs.core.truth_(random_dog_url)?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),random_dog_url], null)], 0))], 0)):null)], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__54084;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__54083;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__54082;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__54081;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__54080;
}});})(x54073_54346))
;


com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype.constructor = com.wsscode.pathom.book.async.demos.AsyncParserDemo;

com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype.constructor.displayName = "com.wsscode.pathom.book.async.demos/AsyncParserDemo";

com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype.fulcro$isComponent = true;

var x54121_54372 = com.wsscode.pathom.book.async.demos.AsyncParserDemo;
x54121_54372.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x54121_54372.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x54121_54372){
return (function (this$,p__54150){
var map__54152 = p__54150;
var map__54152__$1 = (((((!((map__54152 == null))))?(((((map__54152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54152):map__54152);
var props = map__54152__$1;
var random_dog_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54152__$1,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),"singleton"], null);
});})(x54121_54372))
;

x54121_54372.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x54121_54372.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x54121_54372){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.data_fetch.marker_table,new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null)], null);
});})(x54121_54372))
;


var x54163_54376 = com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype;
x54163_54376.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x54163_54376.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x54163_54376){
return (function (this$,p__54170){
var map__54174 = p__54170;
var map__54174__$1 = (((((!((map__54174 == null))))?(((((map__54174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54174):map__54174);
var props = map__54174__$1;
var random_dog_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54174__$1,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),"singleton"], null);
});})(x54163_54376))
;

x54163_54376.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x54163_54376.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x54163_54376){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.data_fetch.marker_table,new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null)], null);
});})(x54163_54376))
;


com.wsscode.pathom.book.async.demos.AsyncParserDemo.cljs$lang$type = true;

com.wsscode.pathom.book.async.demos.AsyncParserDemo.cljs$lang$ctorStr = "com.wsscode.pathom.book.async.demos/AsyncParserDemo";

com.wsscode.pathom.book.async.demos.AsyncParserDemo.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.book.async.demos/AsyncParserDemo");
});
com.wsscode.pathom.book.async.demos.async_parser_demo = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.async.demos.AsyncParserDemo);

//# sourceMappingURL=com.wsscode.pathom.book.async.demos.js.map
