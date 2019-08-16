goog.provide('fulcro.inspect.client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('fulcro_css.css');
goog.require('fulcro.client');
goog.require('fulcro.client.localized_dom');
goog.require('fulcro.client.mutations');
goog.require('fulcro.client.network');
goog.require('fulcro.client.primitives');
goog.require('fulcro.inspect.lib.diff');
goog.require('fulcro.inspect.lib.misc');
goog.require('fulcro.inspect.lib.version');
goog.require('fulcro.inspect.remote.transit');
goog.require('fulcro.inspect.ui.dom_history_viewer');
goog.require('fulcro.inspect.ui.element_picker');
goog.require('fulcro.inspect.ui.helpers');
goog.require('goog.object');
if((typeof fulcro !== 'undefined') && (typeof fulcro.inspect !== 'undefined') && (typeof fulcro.inspect.client !== 'undefined') && (typeof fulcro.inspect.client.started_QMARK__STAR_ !== 'undefined')){
} else {
fulcro.inspect.client.started_QMARK__STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof fulcro !== 'undefined') && (typeof fulcro.inspect !== 'undefined') && (typeof fulcro.inspect.client !== 'undefined') && (typeof fulcro.inspect.client.tools_app_STAR_ !== 'undefined')){
} else {
fulcro.inspect.client.tools_app_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof fulcro !== 'undefined') && (typeof fulcro.inspect !== 'undefined') && (typeof fulcro.inspect.client !== 'undefined') && (typeof fulcro.inspect.client.apps_STAR_ !== 'undefined')){
} else {
fulcro.inspect.client.apps_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof fulcro !== 'undefined') && (typeof fulcro.inspect !== 'undefined') && (typeof fulcro.inspect.client !== 'undefined') && (typeof fulcro.inspect.client.send_ch !== 'undefined')){
} else {
fulcro.inspect.client.send_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((1024)));
}
fulcro.inspect.client.app_uuid_key = new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491);
fulcro.inspect.client.post_message = (function fulcro$inspect$client$post_message(type,data){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(fulcro.inspect.client.send_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,data], null));
});
fulcro.inspect.client.event_data = (function fulcro$inspect$client$event_data(event){
var G__60729 = event;
var G__60729__$1 = (((G__60729 == null))?null:goog.object.getValueByKeys(G__60729,"data","fulcro-inspect-devtool-message"));
if((G__60729__$1 == null)){
return null;
} else {
return fulcro.inspect.remote.transit.read(G__60729__$1);
}
});
fulcro.inspect.client.start_send_message_loop = (function fulcro$inspect$client$start_send_message_loop(){
var c__44617__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto__){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto__){
return (function (state_60762){
var state_val_60763 = (state_60762[(1)]);
if((state_val_60763 === (1))){
var state_60762__$1 = state_60762;
var statearr_60765_61842 = state_60762__$1;
(statearr_60765_61842[(2)] = null);

(statearr_60765_61842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60763 === (2))){
var state_60762__$1 = state_60762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60762__$1,(4),fulcro.inspect.client.send_ch);
} else {
if((state_val_60763 === (3))){
var inst_60760 = (state_60762[(2)]);
var state_60762__$1 = state_60762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60762__$1,inst_60760);
} else {
if((state_val_60763 === (4))){
var inst_60735 = (state_60762[(7)]);
var inst_60735__$1 = (state_60762[(2)]);
var state_60762__$1 = (function (){var statearr_60769 = state_60762;
(statearr_60769[(7)] = inst_60735__$1);

return statearr_60769;
})();
if(cljs.core.truth_(inst_60735__$1)){
var statearr_60770_61848 = state_60762__$1;
(statearr_60770_61848[(1)] = (5));

} else {
var statearr_60773_61850 = state_60762__$1;
(statearr_60773_61850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60763 === (5))){
var inst_60735 = (state_60762[(7)]);
var inst_60740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60735,(0),null);
var inst_60741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60735,(1),null);
var inst_60744 = [new cljs.core.Keyword(null,"fulcro-inspect-remote-message","fulcro-inspect-remote-message",1518065210)];
var inst_60746 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)];
var inst_60747 = (new Date());
var inst_60748 = [inst_60740,inst_60741,inst_60747];
var inst_60749 = cljs.core.PersistentHashMap.fromArrays(inst_60746,inst_60748);
var inst_60750 = fulcro.inspect.remote.transit.write(inst_60749);
var inst_60751 = [inst_60750];
var inst_60752 = cljs.core.PersistentHashMap.fromArrays(inst_60744,inst_60751);
var inst_60753 = cljs.core.clj__GT_js(inst_60752);
var inst_60754 = window.postMessage(inst_60753,"*");
var state_60762__$1 = (function (){var statearr_60785 = state_60762;
(statearr_60785[(8)] = inst_60754);

return statearr_60785;
})();
var statearr_60786_61856 = state_60762__$1;
(statearr_60786_61856[(2)] = null);

(statearr_60786_61856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60763 === (6))){
var state_60762__$1 = state_60762;
var statearr_60788_61857 = state_60762__$1;
(statearr_60788_61857[(2)] = null);

(statearr_60788_61857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60763 === (7))){
var inst_60758 = (state_60762[(2)]);
var state_60762__$1 = state_60762;
var statearr_60794_61859 = state_60762__$1;
(statearr_60794_61859[(2)] = inst_60758);

(statearr_60794_61859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__44617__auto__))
;
return ((function (switch__44304__auto__,c__44617__auto__){
return (function() {
var fulcro$inspect$client$start_send_message_loop_$_state_machine__44305__auto__ = null;
var fulcro$inspect$client$start_send_message_loop_$_state_machine__44305__auto____0 = (function (){
var statearr_60795 = [null,null,null,null,null,null,null,null,null];
(statearr_60795[(0)] = fulcro$inspect$client$start_send_message_loop_$_state_machine__44305__auto__);

(statearr_60795[(1)] = (1));

return statearr_60795;
});
var fulcro$inspect$client$start_send_message_loop_$_state_machine__44305__auto____1 = (function (state_60762){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_60762);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e60799){if((e60799 instanceof Object)){
var ex__44308__auto__ = e60799;
var statearr_60800_61868 = state_60762;
(statearr_60800_61868[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60799;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61870 = state_60762;
state_60762 = G__61870;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
fulcro$inspect$client$start_send_message_loop_$_state_machine__44305__auto__ = function(state_60762){
switch(arguments.length){
case 0:
return fulcro$inspect$client$start_send_message_loop_$_state_machine__44305__auto____0.call(this);
case 1:
return fulcro$inspect$client$start_send_message_loop_$_state_machine__44305__auto____1.call(this,state_60762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$inspect$client$start_send_message_loop_$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$inspect$client$start_send_message_loop_$_state_machine__44305__auto____0;
fulcro$inspect$client$start_send_message_loop_$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$inspect$client$start_send_message_loop_$_state_machine__44305__auto____1;
return fulcro$inspect$client$start_send_message_loop_$_state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto__))
})();
var state__44619__auto__ = (function (){var statearr_60802 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_60802[(6)] = c__44617__auto__);

return statearr_60802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto__))
);

return c__44617__auto__;
});
fulcro.inspect.client.listen_local_messages = (function fulcro$inspect$client$listen_local_messages(){
return window.addEventListener("message",(function (event){
if(cljs.core.truth_((function (){var and__4120__auto__ = (event.source === window);
if(and__4120__auto__){
return goog.object.getValueByKeys(event,"data","fulcro-inspect-devtool-message");
} else {
return and__4120__auto__;
}
})())){
var G__60809 = fulcro.inspect.client.event_data(event);
return (fulcro.inspect.client.handle_devtool_message.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.client.handle_devtool_message.cljs$core$IFn$_invoke$arity$1(G__60809) : fulcro.inspect.client.handle_devtool_message.call(null,G__60809));
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = (event.source === window);
if(and__4120__auto__){
return goog.object.getValueByKeys(event,"data","fulcro-inspect-start-consume");
} else {
return and__4120__auto__;
}
})())){
return fulcro.inspect.client.start_send_message_loop();
} else {
return null;
}
}
}),false);
});
fulcro.inspect.client.app_uuid = (function fulcro$inspect$client$app_uuid(reconciler){
var G__60811 = reconciler;
var G__60811__$1 = (((G__60811 == null))?null:fulcro.client.primitives.app_state(G__60811));
var G__60811__$2 = (((G__60811__$1 == null))?null:cljs.core.deref(G__60811__$1));
if((G__60811__$2 == null)){
return null;
} else {
return fulcro.inspect.client.app_uuid_key.cljs$core$IFn$_invoke$arity$1(G__60811__$2);
}
});
fulcro.inspect.client.app_id = (function fulcro$inspect$client$app_id(reconciler){
var or__4131__auto__ = (function (){var G__60819 = reconciler;
var G__60819__$1 = (((G__60819 == null))?null:fulcro.client.primitives.app_state(G__60819));
var G__60819__$2 = (((G__60819__$1 == null))?null:cljs.core.deref(G__60819__$1));
if((G__60819__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233).cljs$core$IFn$_invoke$arity$1(G__60819__$2);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__60822 = reconciler;
var G__60822__$1 = (((G__60822 == null))?null:fulcro.client.primitives.app_root(G__60822));
if((G__60822__$1 == null)){
return null;
} else {
return fulcro.inspect.ui.helpers.react_display_name(G__60822__$1);
}
}
});
fulcro.inspect.client.inspect_network_init = (function fulcro$inspect$client$inspect_network_init(network,app){
return cljs.core.reset_BANG_(new cljs.core.Keyword("fulcro.inspect.client","app*","fulcro.inspect.client/app*",389597452).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(network)),app);
});
fulcro.inspect.client.transact_inspector_BANG_ = (function fulcro$inspect$client$transact_inspector_BANG_(var_args){
var G__60828 = arguments.length;
switch (G__60828) {
case 1:
return fulcro.inspect.client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.inspect.client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.inspect.client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (tx){
return fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","transact-inspector","fulcro.inspect.client/transact-inspector",-905938352),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.client","tx","fulcro.inspect.client/tx",-815771134),tx], null));
});

fulcro.inspect.client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ref,tx){
return fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","transact-inspector","fulcro.inspect.client/transact-inspector",-905938352),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.client","tx-ref","fulcro.inspect.client/tx-ref",-1370560773),ref,new cljs.core.Keyword("fulcro.inspect.client","tx","fulcro.inspect.client/tx",-815771134),tx], null));
});

fulcro.inspect.client.transact_inspector_BANG_.cljs$lang$maxFixedArity = 2;

fulcro.inspect.client.MAX_HISTORY_SIZE = (100);
fulcro.inspect.client.update_state_history = (function fulcro$inspect$client$update_state_history(app,state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)),cljs.core.update,new cljs.core.Keyword("fulcro.inspect.client","state-history","fulcro.inspect.client/state-history",2111486187),(function (p1__60838_SHARP_){
return fulcro.inspect.lib.misc.fixed_size_assoc(fulcro.inspect.client.MAX_HISTORY_SIZE,p1__60838_SHARP_,cljs.core.hash(state),state);
}));
});
fulcro.inspect.client.db_update = (function fulcro$inspect$client$db_update(app,app_uuid,old_state,new_state){
fulcro.inspect.client.update_state_history(app,new_state);

var diff = fulcro.inspect.lib.diff.diff(old_state,new_state);
return fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","db-update","fulcro.inspect.client/db-update",587693556),cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.inspect.client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.client","prev-state-hash","fulcro.inspect.client/prev-state-hash",413242088),cljs.core.hash(old_state),new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(new_state),new cljs.core.Keyword("fulcro.inspect.client","state-delta","fulcro.inspect.client/state-delta",1518835964),diff]));
});
fulcro.inspect.client.db_from_history = (function fulcro$inspect$client$db_from_history(app,state_hash){
var G__60865 = app;
var G__60865__$1 = (((G__60865 == null))?null:new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__60865));
var G__60865__$2 = (((G__60865__$1 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__60865__$1));
var G__60865__$3 = (((G__60865__$2 == null))?null:cljs.core.deref(G__60865__$2));
var G__60865__$4 = (((G__60865__$3 == null))?null:new cljs.core.Keyword("fulcro.inspect.client","state-history","fulcro.inspect.client/state-history",2111486187).cljs$core$IFn$_invoke$arity$1(G__60865__$3));
if((G__60865__$4 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__60865__$4,state_hash);
}
});
fulcro.inspect.client.dispose_app = (function fulcro$inspect$client$dispose_app(app_uuid){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(fulcro.inspect.client.apps_STAR_,cljs.core.dissoc,app_uuid);

return fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","dispose-app","fulcro.inspect.client/dispose-app",-574872452),cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.inspect.client.app_uuid_key,app_uuid]));
});
fulcro.inspect.client.set_active_app = (function fulcro$inspect$client$set_active_app(app_uuid){
return fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","set-active-app","fulcro.inspect.client/set-active-app",-2049837528),cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.inspect.client.app_uuid_key,app_uuid]));
});
fulcro.inspect.client.inspect_app = (function fulcro$inspect$client$inspect_app(p__60906){
var map__60908 = p__60906;
var map__60908__$1 = (((((!((map__60908 == null))))?(((((map__60908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60908):map__60908);
var app = map__60908__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60908__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60908__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var state_STAR_ = (function (){var G__60920 = app;
var G__60920__$1 = (((G__60920 == null))?null:new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__60920));
var G__60920__$2 = (((G__60920__$1 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__60920__$1));
if((G__60920__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__60920__$2);
}
})();
var app_uuid = cljs.core.random_uuid();
var seq__60921_61893 = cljs.core.seq(networking);
var chunk__60922_61894 = null;
var count__60923_61895 = (0);
var i__60924_61896 = (0);
while(true){
if((i__60924_61896 < count__60923_61895)){
var vec__60938_61897 = chunk__60922_61894.cljs$core$IIndexed$_nth$arity$2(null,i__60924_61896);
var __61899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60938_61897,(0),null);
var n_61900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60938_61897,(1),null);
fulcro.inspect.client.inspect_network_init(n_61900,app);


var G__61904 = seq__60921_61893;
var G__61905 = chunk__60922_61894;
var G__61906 = count__60923_61895;
var G__61907 = (i__60924_61896 + (1));
seq__60921_61893 = G__61904;
chunk__60922_61894 = G__61905;
count__60923_61895 = G__61906;
i__60924_61896 = G__61907;
continue;
} else {
var temp__5720__auto___61908 = cljs.core.seq(seq__60921_61893);
if(temp__5720__auto___61908){
var seq__60921_61909__$1 = temp__5720__auto___61908;
if(cljs.core.chunked_seq_QMARK_(seq__60921_61909__$1)){
var c__4550__auto___61910 = cljs.core.chunk_first(seq__60921_61909__$1);
var G__61911 = cljs.core.chunk_rest(seq__60921_61909__$1);
var G__61912 = c__4550__auto___61910;
var G__61913 = cljs.core.count(c__4550__auto___61910);
var G__61914 = (0);
seq__60921_61893 = G__61911;
chunk__60922_61894 = G__61912;
count__60923_61895 = G__61913;
i__60924_61896 = G__61914;
continue;
} else {
var vec__60944_61915 = cljs.core.first(seq__60921_61909__$1);
var __61916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60944_61915,(0),null);
var n_61917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60944_61915,(1),null);
fulcro.inspect.client.inspect_network_init(n_61917,app);


var G__61921 = cljs.core.next(seq__60921_61909__$1);
var G__61922 = null;
var G__61923 = (0);
var G__61924 = (0);
seq__60921_61893 = G__61921;
chunk__60922_61894 = G__61922;
count__60923_61895 = G__61923;
i__60924_61896 = G__61924;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.inspect.client.apps_STAR_,cljs.core.assoc,app_uuid,app);

fulcro.inspect.client.update_state_history(app,cljs.core.deref(state_STAR_));

fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.inspect.client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),fulcro.inspect.client.app_id(reconciler),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (state_STAR_,app_uuid,map__60908,map__60908__$1,app,reconciler,networking){
return (function (p1__60894_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__60894_SHARP_);
});})(state_STAR_,app_uuid,map__60908,map__60908__$1,app,reconciler,networking))
,cljs.core.str),cljs.core.keys(networking)),new cljs.core.Keyword("fulcro.inspect.client","initial-state","fulcro.inspect.client/initial-state",1225829482),cljs.core.deref(state_STAR_),new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(cljs.core.deref(state_STAR_))]));

cljs.core.add_watch(state_STAR_,app_uuid,((function (state_STAR_,app_uuid,map__60908,map__60908__$1,app,reconciler,networking){
return (function (p1__60897_SHARP_,p2__60898_SHARP_,p3__60895_SHARP_,p4__60896_SHARP_){
return fulcro.inspect.client.db_update(app,app_uuid,p3__60895_SHARP_,p4__60896_SHARP_);
});})(state_STAR_,app_uuid,map__60908,map__60908__$1,app,reconciler,networking))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,fulcro.inspect.client.app_uuid_key,app_uuid);

return app;
});
fulcro.inspect.client.inspect_tx = (function fulcro$inspect$client$inspect_tx(p__60951,p__60952){
var map__60954 = p__60951;
var map__60954__$1 = (((((!((map__60954 == null))))?(((((map__60954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60954):map__60954);
var env = map__60954__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60954__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var map__60956 = p__60952;
var map__60956__$1 = (((((!((map__60956 == null))))?(((((map__60956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60956):map__60956);
var info = map__60956__$1;
var db_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60956__$1,new cljs.core.Keyword("fulcro.history","db-before","fulcro.history/db-before",650457365));
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60956__$1,new cljs.core.Keyword("fulcro.history","db-after","fulcro.history/db-after",-1774997361));
if(cljs.core.truth_(fulcro.client.primitives.app_root(reconciler))){
var tx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(clojure.set.rename_keys(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([info,cljs.core.select_keys(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"component","component",1555936782)], null))], 0)),new cljs.core.Keyword(null,"component","component",1555936782),((function (map__60954,map__60954__$1,env,reconciler,map__60956,map__60956__$1,info,db_before,db_after){
return (function (p1__60950_SHARP_){
var G__60964 = fulcro.client.primitives.react_type(p1__60950_SHARP_);
var G__60965 = "displayName";
return goog.object.get(G__60964,G__60965);
});})(map__60954,map__60954__$1,env,reconciler,map__60956,map__60956__$1,info,db_before,db_after))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"ident-ref","ident-ref",663643478)], null)),new cljs.core.Keyword(null,"old-state","old-state",1039580704),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"new-state","new-state",-490349212),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("fulcro.history","db-before","fulcro.history/db-before",650457365),new cljs.core.Keyword("fulcro.history","db-after","fulcro.history/db-after",-1774997361)], 0)),new cljs.core.Keyword("fulcro.history","db-before-hash","fulcro.history/db-before-hash",-1020674495),cljs.core.hash(db_before),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("fulcro.history","db-after-hash","fulcro.history/db-after-hash",-1603617752),cljs.core.hash(db_after)], 0));
var app_uuid = fulcro.inspect.client.app_uuid(reconciler);
if(cljs.core.truth_(new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(fulcro.client.primitives.app_state(reconciler))))){
return fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","new-client-transaction","fulcro.inspect.client/new-client-transaction",-1086637148),cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.inspect.client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.client","tx","fulcro.inspect.client/tx",-815771134),tx]));
} else {
return null;
}
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {fulcro.client.network.FulcroNetwork}
 * @implements {cljs.core.IKVReduce}
 * @implements {fulcro.client.network.NetworkBehavior}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fulcro.inspect.client.TransformNetwork = (function (network,options,__meta,__extmap,__hash){
this.network = network;
this.options = options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
fulcro.inspect.client.TransformNetwork.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k60978,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__61003 = k60978;
var G__61003__$1 = (((G__61003 instanceof cljs.core.Keyword))?G__61003.fqn:null);
switch (G__61003__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60978,else__4388__auto__);

}
});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__61022){
var vec__61028 = p__61022;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61028,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61028,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#fulcro.inspect.client.TransformNetwork{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"network","network",2050004697),self__.network],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null))], null),self__.__extmap));
});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60977){
var self__ = this;
var G__60977__$1 = this;
return (new cljs.core.RecordIter((0),G__60977__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new fulcro.inspect.client.TransformNetwork(self__.network,self__.options,self__.__meta,self__.__extmap,self__.__hash));
});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__61044 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1657413298 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__61044(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60979,other60980){
var self__ = this;
var this60979__$1 = this;
return (((!((other60980 == null)))) && ((this60979__$1.constructor === other60980.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60979__$1.network,other60980.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60979__$1.options,other60980.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60979__$1.__extmap,other60980.__extmap)));
});

fulcro.inspect.client.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.inspect.client.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$send$arity$4 = (function (_,edn,ok,error){
var self__ = this;
var ___$1 = this;
var map__61063 = self__.options;
var map__61063__$1 = (((((!((map__61063 == null))))?(((((map__61063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61063):map__61063);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61063__$1,new cljs.core.Keyword("fulcro.inspect.client","transform-query","fulcro.inspect.client/transform-query",-974573391),((function (map__61063,map__61063__$1,___$1){
return (function (___$2,x){
return x;
});})(map__61063,map__61063__$1,___$1))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61063__$1,new cljs.core.Keyword("fulcro.inspect.client","transform-response","fulcro.inspect.client/transform-response",664733229),((function (map__61063,map__61063__$1,transform_query,___$1){
return (function (___$2,x){
return x;
});})(map__61063,map__61063__$1,transform_query,___$1))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61063__$1,new cljs.core.Keyword("fulcro.inspect.client","transform-error","fulcro.inspect.client/transform-error",-1523058473),((function (map__61063,map__61063__$1,transform_query,transform_response,___$1){
return (function (___$2,x){
return x;
});})(map__61063,map__61063__$1,transform_query,transform_response,___$1))
);
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61063__$1,new cljs.core.Keyword("fulcro.inspect.client","app*","fulcro.inspect.client/app*",389597452));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.client","request-id","fulcro.inspect.client/request-id",-2031123789),req_id,new cljs.core.Keyword("fulcro.inspect.client","app","fulcro.inspect.client/app",-614448539),cljs.core.deref(app_STAR_)], null);
var temp__5718__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5718__auto__)){
var edn_SINGLEQUOTE_ = temp__5718__auto__;
return fulcro.client.network.send(self__.network,edn_SINGLEQUOTE_,((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__61063,map__61063__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1){
return (function (p1__60975_SHARP_){
var G__61097 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__60975_SHARP_) : transform_response.call(null,env,p1__60975_SHARP_));
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(G__61097) : ok.call(null,G__61097));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__61063,map__61063__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1))
,((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__61063,map__61063__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1){
return (function (p1__60976_SHARP_){
var G__61099 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__60976_SHARP_) : transform_error.call(null,env,p1__60976_SHARP_));
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__61099) : error.call(null,G__61099));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__61063,map__61063__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1))
);
} else {
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(null) : ok.call(null,null));
}
});

fulcro.inspect.client.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
try{fulcro.client.network.start(self__.network);
}catch (e61109){if(cljs.core.truth_((function (){var c__4167__auto__ = new cljs.core.Keyword("fulcro.inspect.client","default","fulcro.inspect.client/default",1295274520);
var x__4168__auto__ = e61109;
return (x__4168__auto__ instanceof c__4167__auto__);
})())){
var e_62014 = e61109;
console.log("Error starting sub network",e_62014);
} else {
throw e61109;

}
}
return this$__$1;
});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"options","options",99638489),null,new cljs.core.Keyword(null,"network","network",2050004697),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new fulcro.inspect.client.TransformNetwork(self__.network,self__.options,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

fulcro.inspect.client.TransformNetwork.prototype.fulcro$client$network$NetworkBehavior$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.inspect.client.TransformNetwork.prototype.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
try{return fulcro.client.network.serialize_requests_QMARK_(self__.network);
}catch (e61128){var _ = e61128;
return true;
}});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__60977){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__61130 = cljs.core.keyword_identical_QMARK_;
var expr__61131 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__61134 = new cljs.core.Keyword(null,"network","network",2050004697);
var G__61135 = expr__61131;
return (pred__61130.cljs$core$IFn$_invoke$arity$2 ? pred__61130.cljs$core$IFn$_invoke$arity$2(G__61134,G__61135) : pred__61130.call(null,G__61134,G__61135));
})())){
return (new fulcro.inspect.client.TransformNetwork(G__60977,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__61137 = new cljs.core.Keyword(null,"options","options",99638489);
var G__61138 = expr__61131;
return (pred__61130.cljs$core$IFn$_invoke$arity$2 ? pred__61130.cljs$core$IFn$_invoke$arity$2(G__61137,G__61138) : pred__61130.call(null,G__61137,G__61138));
})())){
return (new fulcro.inspect.client.TransformNetwork(self__.network,G__60977,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.inspect.client.TransformNetwork(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__60977),null));
}
}
});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"network","network",2050004697),self__.network,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null))], null),self__.__extmap));
});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__60977){
var self__ = this;
var this__4384__auto____$1 = this;
return (new fulcro.inspect.client.TransformNetwork(self__.network,self__.options,G__60977,self__.__extmap,self__.__hash));
});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

fulcro.inspect.client.TransformNetwork.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"network","network",-604431072,null),new cljs.core.Symbol(null,"options","options",1740170016,null)], null);
});

fulcro.inspect.client.TransformNetwork.cljs$lang$type = true;

fulcro.inspect.client.TransformNetwork.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"fulcro.inspect.client/TransformNetwork",null,(1),null));
});

fulcro.inspect.client.TransformNetwork.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"fulcro.inspect.client/TransformNetwork");
});

/**
 * Positional factory function for fulcro.inspect.client/TransformNetwork.
 */
fulcro.inspect.client.__GT_TransformNetwork = (function fulcro$inspect$client$__GT_TransformNetwork(network,options){
return (new fulcro.inspect.client.TransformNetwork(network,options,null,null,null));
});

/**
 * Factory function for fulcro.inspect.client/TransformNetwork, taking a map of keywords to field values.
 */
fulcro.inspect.client.map__GT_TransformNetwork = (function fulcro$inspect$client$map__GT_TransformNetwork(G__60991){
var extmap__4424__auto__ = (function (){var G__61157 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60991,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0));
if(cljs.core.record_QMARK_(G__60991)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61157);
} else {
return G__61157;
}
})();
return (new fulcro.inspect.client.TransformNetwork(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__60991),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__60991),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

fulcro.inspect.client.transform_network = (function fulcro$inspect$client$transform_network(network,options){
return fulcro.inspect.client.__GT_TransformNetwork(network,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("fulcro.inspect.client","app*","fulcro.inspect.client/app*",389597452),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {fulcro.client.network.NetworkBehavior}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {fulcro.client.network.FulcroRemoteI}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fulcro.inspect.client.TransformNetworkI = (function (network,options,__meta,__extmap,__hash){
this.network = network;
this.options = options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k61170,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__61179 = k61170;
var G__61179__$1 = (((G__61179 instanceof cljs.core.Keyword))?G__61179.fqn:null);
switch (G__61179__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61170,else__4388__auto__);

}
});

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__61186){
var vec__61187 = p__61186;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61187,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61187,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#fulcro.inspect.client.TransformNetworkI{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"network","network",2050004697),self__.network],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null))], null),self__.__extmap));
});

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61169){
var self__ = this;
var G__61169__$1 = this;
return (new cljs.core.RecordIter((0),G__61169__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new fulcro.inspect.client.TransformNetworkI(self__.network,self__.options,self__.__meta,self__.__extmap,self__.__hash));
});

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__61230 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1349897959 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__61230(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61171,other61172){
var self__ = this;
var this61171__$1 = this;
return (((!((other61172 == null)))) && ((this61171__$1.constructor === other61172.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61171__$1.network,other61172.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61171__$1.options,other61172.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61171__$1.__extmap,other61172.__extmap)));
});

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"options","options",99638489),null,new cljs.core.Keyword(null,"network","network",2050004697),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new fulcro.inspect.client.TransformNetworkI(self__.network,self__.options,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

fulcro.inspect.client.TransformNetworkI.prototype.fulcro$client$network$NetworkBehavior$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.inspect.client.TransformNetworkI.prototype.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((((!((self__.network == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === self__.network.fulcro$client$network$NetworkBehavior$))))?true:(((!self__.network.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(fulcro.client.network.NetworkBehavior,self__.network):false)):cljs.core.native_satisfies_QMARK_(fulcro.client.network.NetworkBehavior,self__.network))){
return fulcro.client.network.serialize_requests_QMARK_(self__.network);
} else {
return true;
}
});

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__61169){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__61297 = cljs.core.keyword_identical_QMARK_;
var expr__61298 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__61306 = new cljs.core.Keyword(null,"network","network",2050004697);
var G__61307 = expr__61298;
return (pred__61297.cljs$core$IFn$_invoke$arity$2 ? pred__61297.cljs$core$IFn$_invoke$arity$2(G__61306,G__61307) : pred__61297.call(null,G__61306,G__61307));
})())){
return (new fulcro.inspect.client.TransformNetworkI(G__61169,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__61314 = new cljs.core.Keyword(null,"options","options",99638489);
var G__61315 = expr__61298;
return (pred__61297.cljs$core$IFn$_invoke$arity$2 ? pred__61297.cljs$core$IFn$_invoke$arity$2(G__61314,G__61315) : pred__61297.call(null,G__61314,G__61315));
})())){
return (new fulcro.inspect.client.TransformNetworkI(self__.network,G__61169,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.inspect.client.TransformNetworkI(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__61169),null));
}
}
});

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"network","network",2050004697),self__.network,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null))], null),self__.__extmap));
});

fulcro.inspect.client.TransformNetworkI.prototype.fulcro$client$network$FulcroRemoteI$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.inspect.client.TransformNetworkI.prototype.fulcro$client$network$FulcroRemoteI$transmit$arity$2 = (function (_,p__61328){
var self__ = this;
var map__61329 = p__61328;
var map__61329__$1 = (((((!((map__61329 == null))))?(((((map__61329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61329):map__61329);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61329__$1,new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957));
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61329__$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61329__$1,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226));
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61329__$1,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355));
var ___$1 = this;
var map__61337 = self__.options;
var map__61337__$1 = (((((!((map__61337 == null))))?(((((map__61337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61337):map__61337);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61337__$1,new cljs.core.Keyword("fulcro.inspect.client","transform-query","fulcro.inspect.client/transform-query",-974573391),((function (map__61337,map__61337__$1,___$1,map__61329,map__61329__$1,edn,ok_handler,error_handler,progress_handler){
return (function (___$2,x){
return x;
});})(map__61337,map__61337__$1,___$1,map__61329,map__61329__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61337__$1,new cljs.core.Keyword("fulcro.inspect.client","transform-response","fulcro.inspect.client/transform-response",664733229),((function (map__61337,map__61337__$1,transform_query,___$1,map__61329,map__61329__$1,edn,ok_handler,error_handler,progress_handler){
return (function (___$2,x){
return x;
});})(map__61337,map__61337__$1,transform_query,___$1,map__61329,map__61329__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61337__$1,new cljs.core.Keyword("fulcro.inspect.client","transform-error","fulcro.inspect.client/transform-error",-1523058473),((function (map__61337,map__61337__$1,transform_query,transform_response,___$1,map__61329,map__61329__$1,edn,ok_handler,error_handler,progress_handler){
return (function (___$2,x){
return x;
});})(map__61337,map__61337__$1,transform_query,transform_response,___$1,map__61329,map__61329__$1,edn,ok_handler,error_handler,progress_handler))
);
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61337__$1,new cljs.core.Keyword("fulcro.inspect.client","app*","fulcro.inspect.client/app*",389597452));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.client","request-id","fulcro.inspect.client/request-id",-2031123789),req_id,new cljs.core.Keyword("fulcro.inspect.client","app","fulcro.inspect.client/app",-614448539),cljs.core.deref(app_STAR_)], null);
var temp__5718__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5718__auto__)){
var edn_SINGLEQUOTE_ = temp__5718__auto__;
return fulcro.client.network.transmit(self__.network,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),edn_SINGLEQUOTE_,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__61337,map__61337__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1,map__61329,map__61329__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__61164_SHARP_){
var G__61343 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__61164_SHARP_) : transform_response.call(null,env,p1__61164_SHARP_));
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(G__61343) : ok_handler.call(null,G__61343));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__61337,map__61337__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1,map__61329,map__61329__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__61337,map__61337__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1,map__61329,map__61329__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__61167_SHARP_){
var G__61344 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__61167_SHARP_) : transform_error.call(null,env,p1__61167_SHARP_));
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__61344) : error_handler.call(null,G__61344));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__61337,map__61337__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1,map__61329,map__61329__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),progress_handler], null));
} else {
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(null) : ok_handler.call(null,null));
}
});

fulcro.inspect.client.TransformNetworkI.prototype.fulcro$client$network$FulcroRemoteI$abort$arity$2 = (function (_,abort_id){
var self__ = this;
var ___$1 = this;
return fulcro.client.network.abort(self__.network,abort_id);
});

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__61169){
var self__ = this;
var this__4384__auto____$1 = this;
return (new fulcro.inspect.client.TransformNetworkI(self__.network,self__.options,G__61169,self__.__extmap,self__.__hash));
});

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

fulcro.inspect.client.TransformNetworkI.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"network","network",-604431072,null),new cljs.core.Symbol(null,"options","options",1740170016,null)], null);
});

fulcro.inspect.client.TransformNetworkI.cljs$lang$type = true;

fulcro.inspect.client.TransformNetworkI.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"fulcro.inspect.client/TransformNetworkI",null,(1),null));
});

fulcro.inspect.client.TransformNetworkI.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"fulcro.inspect.client/TransformNetworkI");
});

/**
 * Positional factory function for fulcro.inspect.client/TransformNetworkI.
 */
fulcro.inspect.client.__GT_TransformNetworkI = (function fulcro$inspect$client$__GT_TransformNetworkI(network,options){
return (new fulcro.inspect.client.TransformNetworkI(network,options,null,null,null));
});

/**
 * Factory function for fulcro.inspect.client/TransformNetworkI, taking a map of keywords to field values.
 */
fulcro.inspect.client.map__GT_TransformNetworkI = (function fulcro$inspect$client$map__GT_TransformNetworkI(G__61174){
var extmap__4424__auto__ = (function (){var G__61372 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61174,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0));
if(cljs.core.record_QMARK_(G__61174)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61372);
} else {
return G__61372;
}
})();
return (new fulcro.inspect.client.TransformNetworkI(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__61174),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__61174),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

fulcro.inspect.client.transform_network_i = (function fulcro$inspect$client$transform_network_i(network,options){
return fulcro.inspect.client.__GT_TransformNetworkI(network,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("fulcro.inspect.client","app*","fulcro.inspect.client/app*",389597452),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)));
});
fulcro.inspect.client.inspect_network = (function fulcro$inspect$client$inspect_network(remote,network){
var ts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.client","transform-query","fulcro.inspect.client/transform-query",-974573391),(function (p__61399,edn){
var map__61401 = p__61399;
var map__61401__$1 = (((((!((map__61401 == null))))?(((((map__61401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61401):map__61401);
var request_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61401__$1,new cljs.core.Keyword("fulcro.inspect.client","request-id","fulcro.inspect.client/request-id",-2031123789));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61401__$1,new cljs.core.Keyword("fulcro.inspect.client","app","fulcro.inspect.client/app",-614448539));
var start_62175 = (new Date());
var app_uuid_62176 = fulcro.inspect.client.app_uuid(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app));
fulcro.inspect.client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.client.app_uuid_key,app_uuid_62176], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-start","fulcro.inspect.ui.network/request-start",-1415257884,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.inspect.ui.network","remote","fulcro.inspect.ui.network/remote",-307593223),remote,new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),request_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-started-at","fulcro.inspect.ui.network/request-started-at",1582455117),start_62175,new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn","fulcro.inspect.ui.network/request-edn",-1638784885),edn], null),null,(1),null)))))], null));

return edn;
}),new cljs.core.Keyword("fulcro.inspect.client","transform-response","fulcro.inspect.client/transform-response",664733229),(function (p__61423,response){
var map__61424 = p__61423;
var map__61424__$1 = (((((!((map__61424 == null))))?(((((map__61424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61424):map__61424);
var request_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61424__$1,new cljs.core.Keyword("fulcro.inspect.client","request-id","fulcro.inspect.client/request-id",-2031123789));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61424__$1,new cljs.core.Keyword("fulcro.inspect.client","app","fulcro.inspect.client/app",-614448539));
var finished_62183 = (new Date());
var app_uuid_62184 = fulcro.inspect.client.app_uuid(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app));
fulcro.inspect.client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.client.app_uuid_key,app_uuid_62184], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-finish","fulcro.inspect.ui.network/request-finish",817834789,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),request_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),finished_62183,new cljs.core.Keyword("fulcro.inspect.ui.network","response-edn","fulcro.inspect.ui.network/response-edn",221134354),response], null),null,(1),null)))))], null));

return response;
}),new cljs.core.Keyword("fulcro.inspect.client","transform-error","fulcro.inspect.client/transform-error",-1523058473),(function (p__61435,error){
var map__61436 = p__61435;
var map__61436__$1 = (((((!((map__61436 == null))))?(((((map__61436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61436):map__61436);
var request_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61436__$1,new cljs.core.Keyword("fulcro.inspect.client","request-id","fulcro.inspect.client/request-id",-2031123789));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61436__$1,new cljs.core.Keyword("fulcro.inspect.client","app","fulcro.inspect.client/app",-614448539));
var finished_62216 = (new Date());
var app_uuid_62217 = fulcro.inspect.client.app_uuid(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app));
fulcro.inspect.client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.client.app_uuid_key,app_uuid_62217], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-finish","fulcro.inspect.ui.network/request-finish",817834789,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),request_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),finished_62216,new cljs.core.Keyword("fulcro.inspect.ui.network","error","fulcro.inspect.ui.network/error",36212909),error], null),null,(1),null)))))], null));

return error;
})], null);
if((((!((network == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === network.fulcro$client$network$FulcroNetwork$))))?true:false):false)){
return fulcro.inspect.client.transform_network(network,ts);
} else {
if((((!((network == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === network.fulcro$client$network$FulcroRemoteI$))))?true:false):false)){
return fulcro.inspect.client.transform_network_i(network,cljs.core.update.cljs$core$IFn$_invoke$arity$3(ts,new cljs.core.Keyword("fulcro.inspect.client","transform-response","fulcro.inspect.client/transform-response",664733229),((function (ts){
return (function (tr){
return ((function (ts){
return (function (env,p__61449){
var map__61451 = p__61449;
var map__61451__$1 = (((((!((map__61451 == null))))?(((((map__61451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61451):map__61451);
var response = map__61451__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
(tr.cljs$core$IFn$_invoke$arity$2 ? tr.cljs$core$IFn$_invoke$arity$2(env,body) : tr.call(null,env,body));

return response;
});
;})(ts))
});})(ts))
));
} else {
return console.warn("Invalid network",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"network","network",2050004697),network], null));

}
}
});
fulcro.inspect.client.handle_devtool_message = (function fulcro$inspect$client$handle_devtool_message(p__61471){
var map__61475 = p__61471;
var map__61475__$1 = (((((!((map__61475 == null))))?(((((map__61475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61475):map__61475);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61475__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61475__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var G__61488 = type;
var G__61488__$1 = (((G__61488 instanceof cljs.core.Keyword))?G__61488.fqn:null);
switch (G__61488__$1) {
case "fulcro.inspect.client/request-page-apps":
var seq__61490 = cljs.core.seq(cljs.core.vals(cljs.core.deref(fulcro.inspect.client.apps_STAR_)));
var chunk__61491 = null;
var count__61492 = (0);
var i__61493 = (0);
while(true){
if((i__61493 < count__61492)){
var map__61519 = chunk__61491.cljs$core$IIndexed$_nth$arity$2(null,i__61493);
var map__61519__$1 = (((((!((map__61519 == null))))?(((((map__61519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61519):map__61519);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61519__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61519__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.inspect.client.app_uuid_key,fulcro.inspect.client.app_uuid(reconciler),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),fulcro.inspect.client.app_id(reconciler),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (seq__61490,chunk__61491,count__61492,i__61493,map__61519,map__61519__$1,reconciler,networking,G__61488,G__61488__$1,map__61475,map__61475__$1,type,data){
return (function (p1__61455_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__61455_SHARP_);
});})(seq__61490,chunk__61491,count__61492,i__61493,map__61519,map__61519__$1,reconciler,networking,G__61488,G__61488__$1,map__61475,map__61475__$1,type,data))
,cljs.core.str),cljs.core.keys(networking)),new cljs.core.Keyword("fulcro.inspect.client","initial-state","fulcro.inspect.client/initial-state",1225829482),cljs.core.deref(fulcro.client.primitives.app_state(reconciler)),new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(cljs.core.deref(fulcro.client.primitives.app_state(reconciler)))]));


var G__62256 = seq__61490;
var G__62257 = chunk__61491;
var G__62258 = count__61492;
var G__62259 = (i__61493 + (1));
seq__61490 = G__62256;
chunk__61491 = G__62257;
count__61492 = G__62258;
i__61493 = G__62259;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__61490);
if(temp__5720__auto__){
var seq__61490__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61490__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61490__$1);
var G__62260 = cljs.core.chunk_rest(seq__61490__$1);
var G__62261 = c__4550__auto__;
var G__62262 = cljs.core.count(c__4550__auto__);
var G__62263 = (0);
seq__61490 = G__62260;
chunk__61491 = G__62261;
count__61492 = G__62262;
i__61493 = G__62263;
continue;
} else {
var map__61549 = cljs.core.first(seq__61490__$1);
var map__61549__$1 = (((((!((map__61549 == null))))?(((((map__61549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61549):map__61549);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61549__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61549__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.inspect.client.app_uuid_key,fulcro.inspect.client.app_uuid(reconciler),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),fulcro.inspect.client.app_id(reconciler),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (seq__61490,chunk__61491,count__61492,i__61493,map__61549,map__61549__$1,reconciler,networking,seq__61490__$1,temp__5720__auto__,G__61488,G__61488__$1,map__61475,map__61475__$1,type,data){
return (function (p1__61455_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__61455_SHARP_);
});})(seq__61490,chunk__61491,count__61492,i__61493,map__61549,map__61549__$1,reconciler,networking,seq__61490__$1,temp__5720__auto__,G__61488,G__61488__$1,map__61475,map__61475__$1,type,data))
,cljs.core.str),cljs.core.keys(networking)),new cljs.core.Keyword("fulcro.inspect.client","initial-state","fulcro.inspect.client/initial-state",1225829482),cljs.core.deref(fulcro.client.primitives.app_state(reconciler)),new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(cljs.core.deref(fulcro.client.primitives.app_state(reconciler)))]));


var G__62275 = cljs.core.next(seq__61490__$1);
var G__62276 = null;
var G__62277 = (0);
var G__62278 = (0);
seq__61490 = G__62275;
chunk__61491 = G__62276;
count__61492 = G__62277;
i__61493 = G__62278;
continue;
}
} else {
return null;
}
}
break;
}

break;
case "fulcro.inspect.client/reset-app-state":
var map__61570 = data;
var map__61570__$1 = (((((!((map__61570 == null))))?(((((map__61570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61570):map__61570);
var target_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61570__$1,new cljs.core.Keyword(null,"target-state","target-state",-682429993));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61570__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fulcro.inspect.client.apps_STAR_),app_uuid);
if(cljs.core.truth_(temp__5718__auto__)){
var map__61587 = temp__5718__auto__;
var map__61587__$1 = (((((!((map__61587 == null))))?(((((map__61587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61587):map__61587);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61587__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
if(cljs.core.truth_(target_state)){
var target_state_62292__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target_state,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491),app_uuid);
var G__61592_62293 = reconciler;
var G__61592_62294__$1 = (((G__61592_62293 == null))?null:fulcro.client.primitives.app_state(G__61592_62293));
if((G__61592_62294__$1 == null)){
} else {
cljs.core.reset_BANG_(G__61592_62294__$1,target_state_62292__$1);
}
} else {
}

return setTimeout(((function (map__61587,map__61587__$1,reconciler,temp__5718__auto__,map__61570,map__61570__$1,target_state,app_uuid,G__61488,G__61488__$1,map__61475,map__61475__$1,type,data){
return (function (){
return fulcro.client.primitives.force_root_render_BANG_(reconciler);
});})(map__61587,map__61587__$1,reconciler,temp__5718__auto__,map__61570,map__61570__$1,target_state,app_uuid,G__61488,G__61488__$1,map__61475,map__61475__$1,type,data))
,(10));
} else {
return console.log("Reset app on invalid uuid",app_uuid);
}

break;
case "fulcro.inspect.client/transact":
var map__61593 = data;
var map__61593__$1 = (((((!((map__61593 == null))))?(((((map__61593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61593):map__61593);
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61593__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var tx_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61593__$1,new cljs.core.Keyword(null,"tx-ref","tx-ref",-216104949));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61593__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fulcro.inspect.client.apps_STAR_),app_uuid);
if(cljs.core.truth_(temp__5718__auto__)){
var map__61604 = temp__5718__auto__;
var map__61604__$1 = (((((!((map__61604 == null))))?(((((map__61604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61604):map__61604);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61604__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
if(cljs.core.truth_(tx_ref)){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,tx_ref,tx);
} else {
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,tx);
}
} else {
return console.log("Transact on invalid uuid",app_uuid);
}

break;
case "fulcro.inspect.client/pick-element":
var map__61616 = data;
var map__61616__$1 = (((((!((map__61616 == null))))?(((((map__61616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61616):map__61616);
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61616__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
return fulcro.inspect.ui.element_picker.pick_element(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491),app_uuid,new cljs.core.Keyword("fulcro.inspect.ui.element-picker","on-pick","fulcro.inspect.ui.element-picker/on-pick",-1116265320),((function (map__61616,map__61616__$1,app_uuid,G__61488,G__61488__$1,map__61475,map__61475__$1,type,data){
return (function (comp){
if(cljs.core.truth_(comp)){
var details = fulcro.inspect.ui.element_picker.inspect_component(comp);
return fulcro.inspect.client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.element","panel-id","fulcro.inspect.ui.element/panel-id",714724520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491),app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.element","set-element","fulcro.inspect.ui.element/set-element",1898236728,null),null,(1),null)),(new cljs.core.List(null,details,null,(1),null)))))], null));
} else {
return fulcro.inspect.client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.element","panel-id","fulcro.inspect.ui.element/panel-id",714724520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491),app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.mutations","set-props","fulcro.client.mutations/set-props",-1739323709,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("ui","picking?","ui/picking?",969621556),null,(1),null)),(new cljs.core.List(null,false,null,(1),null)))))),null,(1),null)))))], null));
}
});})(map__61616,map__61616__$1,app_uuid,G__61488,G__61488__$1,map__61475,map__61475__$1,type,data))
], null));

break;
case "fulcro.inspect.client/show-dom-preview":
var map__61646 = data;
var map__61646__$1 = (((((!((map__61646 == null))))?(((((map__61646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61646):map__61646);
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61646__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var app = (function (){var G__61648 = cljs.core.deref(fulcro.inspect.client.apps_STAR_);
if((G__61648 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__61648,app_uuid);
}
})();
var app_state = fulcro.inspect.client.db_from_history(app,new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756).cljs$core$IFn$_invoke$arity$1(data));
var reconciler = (function (){var G__61652 = cljs.core.deref(fulcro.inspect.client.apps_STAR_);
var G__61652__$1 = (((G__61652 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__61652,app_uuid));
if((G__61652__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__61652__$1);
}
})();
var app_root_class = fulcro.client.primitives.react_type(fulcro.client.primitives.app_root(reconciler));
var app_root_class_factory = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(app_root_class);
var root_query = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(app_root_class,app_state);
var view_tree = fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$3(root_query,app_state,app_state);
var data__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(view_tree,cljs.core.assoc,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),app_root_class_factory));
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(fulcro.inspect.client.tools_app_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.dom-history-viewer","dom-viewer","fulcro.inspect.ui.dom-history-viewer/dom-viewer",212161533),new cljs.core.Keyword(null,"singleton","singleton",-1768662798)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.dom-history-viewer","show-dom-preview","fulcro.inspect.ui.dom-history-viewer/show-dom-preview",626121644,null),null,(1),null)),(new cljs.core.List(null,data__$1,null,(1),null)))))], null));

break;
case "fulcro.inspect.client/hide-dom-preview":
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(fulcro.inspect.client.tools_app_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.dom-history-viewer","dom-viewer","fulcro.inspect.ui.dom-history-viewer/dom-viewer",212161533),new cljs.core.Keyword(null,"singleton","singleton",-1768662798)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.dom-history-viewer","hide-dom-preview","fulcro.inspect.ui.dom-history-viewer/hide-dom-preview",1398943440,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)))))], null));

break;
case "fulcro.inspect.client/network-request":
var map__61657 = data;
var map__61657__$1 = (((((!((map__61657 == null))))?(((((map__61657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61657):map__61657);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61657__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61657__$1,new cljs.core.Keyword("fulcro.inspect.client","remote","fulcro.inspect.client/remote",-306964848));
var msg_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61657__$1,new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-id","fulcro.inspect.ui-parser/msg-id",-467621998));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61657__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fulcro.inspect.client.apps_STAR_),app_uuid);
if(cljs.core.truth_(temp__5720__auto__)){
var app = temp__5720__auto__;
var remote__$1 = (function (){var G__61660 = new cljs.core.Keyword(null,"networking","networking",586110628).cljs$core$IFn$_invoke$arity$1(app);
return (remote.cljs$core$IFn$_invoke$arity$1 ? remote.cljs$core$IFn$_invoke$arity$1(G__61660) : remote.call(null,G__61660));
})();
var response_handler = ((function (remote__$1,app,temp__5720__auto__,map__61657,map__61657__$1,query,remote,msg_id,app_uuid,G__61488,G__61488__$1,map__61475,map__61475__$1,type,data){
return (function (res){
return fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","message-response","fulcro.inspect.client/message-response",587955053),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-id","fulcro.inspect.ui-parser/msg-id",-467621998),msg_id,new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-response","fulcro.inspect.ui-parser/msg-response",1721295840),res], null));
});})(remote__$1,app,temp__5720__auto__,map__61657,map__61657__$1,query,remote,msg_id,app_uuid,G__61488,G__61488__$1,map__61475,map__61475__$1,type,data))
;
if((((!((remote__$1 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === remote__$1.fulcro$client$network$FulcroNetwork$))))?true:false):false)){
return fulcro.client.network.send(remote__$1,query,response_handler,response_handler);
} else {
if((((!((remote__$1 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === remote__$1.fulcro$client$network$FulcroRemoteI$))))?true:false):false)){
return fulcro.client.network.transmit(remote__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),query,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(response_handler,new cljs.core.Keyword(null,"body","body",-2049205669)),new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(response_handler,new cljs.core.Keyword(null,"body","body",-2049205669))], null));
} else {
return null;
}
}
} else {
return null;
}

break;
case "fulcro.inspect.client/console-log":
var map__61671 = data;
var map__61671__$1 = (((((!((map__61671 == null))))?(((((map__61671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61671):map__61671);
var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61671__$1,new cljs.core.Keyword(null,"log","log",-1595516004));
var log_js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61671__$1,new cljs.core.Keyword(null,"log-js","log-js",-1565471667));
var warn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61671__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61671__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(log)){
return console.log(log);
} else {
if(cljs.core.truth_(log_js)){
return console.log(cljs.core.clj__GT_js(log_js));
} else {
if(cljs.core.truth_(warn)){
return console.warn(warn);
} else {
if(cljs.core.truth_(error)){
return console.error(error);
} else {
return null;
}
}
}
}

break;
case "fulcro.inspect.client/check-client-version":
return fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","client-version","fulcro.inspect.client/client-version",728119531),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"version","version",425292698),fulcro.inspect.lib.version.last_inspect_version], null));

break;
default:
return console.log("Unknown message",type);

}
});
if((typeof fulcro !== 'undefined') && (typeof fulcro.inspect !== 'undefined') && (typeof fulcro.inspect.client !== 'undefined') && (typeof fulcro.inspect.client.ClientRoot !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.client.ClientRoot = (function fulcro$inspect$client$ClientRoot(){
var this__55957__auto__ = this;
React.Component.apply(this__55957__auto__,arguments);

if((!((this__55957__auto__.initLocalState == null)))){
this__55957__auto__.state = this__55957__auto__.initLocalState();
} else {
this__55957__auto__.state = ({});
}

return this__55957__auto__;
});

var G__61686_62567 = fulcro.inspect.client.ClientRoot.prototype;
var G__61687_62568 = React.Component.prototype;
var G__61688_62569 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__61686_62567,G__61687_62568,G__61688_62569);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("fulcro.inspect.client","ClientRoot","fulcro.inspect.client/ClientRoot",-683834442),fulcro.inspect.client.ClientRoot);

var x61690_62570 = fulcro.inspect.client.ClientRoot.prototype;
x61690_62570.render = ((function (x61690_62570){
return (function (){
var this__54322__auto__ = this;
var this$ = this__54322__auto__;
var _STAR_reconciler_STAR__orig_val__61693 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__61694 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__61695 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__61696 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__61697 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__61698 = fulcro.client.primitives.get_reconciler(this__54322__auto__);
var _STAR_depth_STAR__temp_val__61699 = (fulcro.client.primitives.depth(this__54322__auto__) + (1));
var _STAR_shared_STAR__temp_val__61700 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__54322__auto__);
var _STAR_instrument_STAR__temp_val__61701 = fulcro.client.primitives.instrument(this__54322__auto__);
var _STAR_parent_STAR__temp_val__61702 = this__54322__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__61698;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__61699;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__61700;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__61701;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__61702;

try{var map__61707 = fulcro.client.primitives.props(this$);
var map__61707__$1 = (((((!((map__61707 == null))))?(((((map__61707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61707):map__61707);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61707__$1,new cljs.core.Keyword(null,"history","history",-247395220));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro_css.css.style_element(this$),(fulcro.inspect.ui.dom_history_viewer.ui_dom_history_view.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.ui.dom_history_viewer.ui_dom_history_view.cljs$core$IFn$_invoke$arity$1(history) : fulcro.inspect.ui.dom_history_viewer.ui_dom_history_view.call(null,history))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__61697;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__61696;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__61695;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__61694;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__61693;
}});})(x61690_62570))
;


fulcro.inspect.client.ClientRoot.prototype.constructor = fulcro.inspect.client.ClientRoot;

fulcro.inspect.client.ClientRoot.prototype.constructor.displayName = "fulcro.inspect.client/ClientRoot";

fulcro.inspect.client.ClientRoot.prototype.fulcro$isComponent = true;

var x61711_62616 = fulcro.inspect.client.ClientRoot;
x61711_62616.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x61711_62616.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x61711_62616){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x61711_62616))
;

x61711_62616.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x61711_62616){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.element_picker.MarkerCSS,fulcro.inspect.ui.dom_history_viewer.DOMHistoryView], null);
});})(x61711_62616))
;

x61711_62616.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x61711_62616.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x61711_62616){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),fulcro.inspect.ui.dom_history_viewer.DOMHistoryView], null),params);
});})(x61711_62616))
;

x61711_62616.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x61711_62616.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x61711_62616){
return (function (this$,p__61720){
var map__61721 = p__61720;
var map__61721__$1 = (((((!((map__61721 == null))))?(((((map__61721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61721):map__61721);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61721__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.client","root","fulcro.inspect.client/root",-1445929181),"main"], null);
});})(x61711_62616))
;

x61711_62616.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x61711_62616.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x61711_62616){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.dom_history_viewer.DOMHistoryView)], null)], null);
});})(x61711_62616))
;


var x61730_62674 = fulcro.inspect.client.ClientRoot.prototype;
x61730_62674.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x61730_62674.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x61730_62674){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x61730_62674))
;

x61730_62674.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x61730_62674){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.element_picker.MarkerCSS,fulcro.inspect.ui.dom_history_viewer.DOMHistoryView], null);
});})(x61730_62674))
;

x61730_62674.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x61730_62674.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x61730_62674){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),fulcro.inspect.ui.dom_history_viewer.DOMHistoryView], null),params);
});})(x61730_62674))
;

x61730_62674.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x61730_62674.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x61730_62674){
return (function (this$,p__61731){
var map__61732 = p__61731;
var map__61732__$1 = (((((!((map__61732 == null))))?(((((map__61732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61732):map__61732);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61732__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.client","root","fulcro.inspect.client/root",-1445929181),"main"], null);
});})(x61730_62674))
;

x61730_62674.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x61730_62674.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x61730_62674){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.dom_history_viewer.DOMHistoryView)], null)], null);
});})(x61730_62674))
;


fulcro.inspect.client.ClientRoot.cljs$lang$type = true;

fulcro.inspect.client.ClientRoot.cljs$lang$ctorStr = "fulcro.inspect.client/ClientRoot";

fulcro.inspect.client.ClientRoot.cljs$lang$ctorPrWriter = (function (this__55960__auto__,writer__55961__auto__,opt__55962__auto__){
return cljs.core._write(writer__55961__auto__,"fulcro.inspect.client/ClientRoot");
});
fulcro.inspect.client.install = (function fulcro$inspect$client$install(_){
document.documentElement.setAttribute("__fulcro-inspect-remote-installed__",true);

if(cljs.core.truth_(cljs.core.deref(fulcro.inspect.client.started_QMARK__STAR_))){
return null;
} else {
console.log("Installing Fulcro Inspect",cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_(fulcro.inspect.client.started_QMARK__STAR_,true);

var app_62747 = fulcro.client.new_fulcro_client();
var node_62748 = document.createElement("div");
document.body.appendChild(node_62748);

cljs.core.reset_BANG_(fulcro.inspect.client.tools_app_STAR_,fulcro.client.mount(app_62747,fulcro.inspect.client.ClientRoot,node_62748));

fulcro.client.register_tool(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client","tool-id","fulcro.client/tool-id",92631184),new cljs.core.Keyword("fulcro.inspect.client","fulcro-inspect-remote","fulcro.inspect.client/fulcro-inspect-remote",309494381),new cljs.core.Keyword("fulcro.client","app-started","fulcro.client/app-started",1807137305),fulcro.inspect.client.inspect_app,new cljs.core.Keyword("fulcro.client","network-wrapper","fulcro.client/network-wrapper",-982819985),(function (networks){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__61805){
var vec__61806 = p__61805;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61806,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61806,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fulcro.inspect.client.inspect_network(k,v)], null);
})),networks);
}),new cljs.core.Keyword("fulcro.client","tx-listen","fulcro.client/tx-listen",267162069),fulcro.inspect.client.inspect_tx], null));

return fulcro.inspect.client.listen_local_messages();
}
});

//# sourceMappingURL=fulcro.inspect.client.js.map
