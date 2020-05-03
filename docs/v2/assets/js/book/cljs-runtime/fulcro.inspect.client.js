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
var G__62032 = event;
var G__62032__$1 = (((G__62032 == null))?null:goog.object.getValueByKeys(G__62032,"data","fulcro-inspect-devtool-message"));
if((G__62032__$1 == null)){
return null;
} else {
return fulcro.inspect.remote.transit.read(G__62032__$1);
}
});
fulcro.inspect.client.start_send_message_loop = (function fulcro$inspect$client$start_send_message_loop(){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__){
return (function (state_62063){
var state_val_62064 = (state_62063[(1)]);
if((state_val_62064 === (1))){
var state_62063__$1 = state_62063;
var statearr_62071_62866 = state_62063__$1;
(statearr_62071_62866[(2)] = null);

(statearr_62071_62866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62064 === (2))){
var state_62063__$1 = state_62063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62063__$1,(4),fulcro.inspect.client.send_ch);
} else {
if((state_val_62064 === (3))){
var inst_62061 = (state_62063[(2)]);
var state_62063__$1 = state_62063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62063__$1,inst_62061);
} else {
if((state_val_62064 === (4))){
var inst_62039 = (state_62063[(7)]);
var inst_62039__$1 = (state_62063[(2)]);
var state_62063__$1 = (function (){var statearr_62072 = state_62063;
(statearr_62072[(7)] = inst_62039__$1);

return statearr_62072;
})();
if(cljs.core.truth_(inst_62039__$1)){
var statearr_62073_62880 = state_62063__$1;
(statearr_62073_62880[(1)] = (5));

} else {
var statearr_62074_62881 = state_62063__$1;
(statearr_62074_62881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62064 === (5))){
var inst_62039 = (state_62063[(7)]);
var inst_62044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62039,(0),null);
var inst_62045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62039,(1),null);
var inst_62046 = [new cljs.core.Keyword(null,"fulcro-inspect-remote-message","fulcro-inspect-remote-message",1518065210)];
var inst_62047 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)];
var inst_62048 = (new Date());
var inst_62049 = [inst_62044,inst_62045,inst_62048];
var inst_62050 = cljs.core.PersistentHashMap.fromArrays(inst_62047,inst_62049);
var inst_62051 = fulcro.inspect.remote.transit.write(inst_62050);
var inst_62052 = [inst_62051];
var inst_62053 = cljs.core.PersistentHashMap.fromArrays(inst_62046,inst_62052);
var inst_62054 = cljs.core.clj__GT_js(inst_62053);
var inst_62055 = window.postMessage(inst_62054,"*");
var state_62063__$1 = (function (){var statearr_62078 = state_62063;
(statearr_62078[(8)] = inst_62055);

return statearr_62078;
})();
var statearr_62079_62904 = state_62063__$1;
(statearr_62079_62904[(2)] = null);

(statearr_62079_62904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62064 === (6))){
var state_62063__$1 = state_62063;
var statearr_62080_62910 = state_62063__$1;
(statearr_62080_62910[(2)] = null);

(statearr_62080_62910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62064 === (7))){
var inst_62059 = (state_62063[(2)]);
var state_62063__$1 = state_62063;
var statearr_62081_62919 = state_62063__$1;
(statearr_62081_62919[(2)] = inst_62059);

(statearr_62081_62919[(1)] = (3));


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
});})(c__45808__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__){
return (function() {
var fulcro$inspect$client$start_send_message_loop_$_state_machine__45526__auto__ = null;
var fulcro$inspect$client$start_send_message_loop_$_state_machine__45526__auto____0 = (function (){
var statearr_62082 = [null,null,null,null,null,null,null,null,null];
(statearr_62082[(0)] = fulcro$inspect$client$start_send_message_loop_$_state_machine__45526__auto__);

(statearr_62082[(1)] = (1));

return statearr_62082;
});
var fulcro$inspect$client$start_send_message_loop_$_state_machine__45526__auto____1 = (function (state_62063){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_62063);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e62083){if((e62083 instanceof Object)){
var ex__45529__auto__ = e62083;
var statearr_62084_62933 = state_62063;
(statearr_62084_62933[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62083;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62936 = state_62063;
state_62063 = G__62936;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
fulcro$inspect$client$start_send_message_loop_$_state_machine__45526__auto__ = function(state_62063){
switch(arguments.length){
case 0:
return fulcro$inspect$client$start_send_message_loop_$_state_machine__45526__auto____0.call(this);
case 1:
return fulcro$inspect$client$start_send_message_loop_$_state_machine__45526__auto____1.call(this,state_62063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$inspect$client$start_send_message_loop_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$inspect$client$start_send_message_loop_$_state_machine__45526__auto____0;
fulcro$inspect$client$start_send_message_loop_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$inspect$client$start_send_message_loop_$_state_machine__45526__auto____1;
return fulcro$inspect$client$start_send_message_loop_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__))
})();
var state__45810__auto__ = (function (){var statearr_62088 = f__45809__auto__();
(statearr_62088[(6)] = c__45808__auto__);

return statearr_62088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__))
);

return c__45808__auto__;
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
var G__62089 = fulcro.inspect.client.event_data(event);
return (fulcro.inspect.client.handle_devtool_message.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.client.handle_devtool_message.cljs$core$IFn$_invoke$arity$1(G__62089) : fulcro.inspect.client.handle_devtool_message.call(null,G__62089));
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
var G__62093 = reconciler;
var G__62093__$1 = (((G__62093 == null))?null:fulcro.client.primitives.app_state(G__62093));
var G__62093__$2 = (((G__62093__$1 == null))?null:cljs.core.deref(G__62093__$1));
if((G__62093__$2 == null)){
return null;
} else {
return fulcro.inspect.client.app_uuid_key.cljs$core$IFn$_invoke$arity$1(G__62093__$2);
}
});
fulcro.inspect.client.app_id = (function fulcro$inspect$client$app_id(reconciler){
var or__4131__auto__ = (function (){var G__62101 = reconciler;
var G__62101__$1 = (((G__62101 == null))?null:fulcro.client.primitives.app_state(G__62101));
var G__62101__$2 = (((G__62101__$1 == null))?null:cljs.core.deref(G__62101__$1));
if((G__62101__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233).cljs$core$IFn$_invoke$arity$1(G__62101__$2);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__62102 = reconciler;
var G__62102__$1 = (((G__62102 == null))?null:fulcro.client.primitives.app_root(G__62102));
if((G__62102__$1 == null)){
return null;
} else {
return fulcro.inspect.ui.helpers.react_display_name(G__62102__$1);
}
}
});
fulcro.inspect.client.inspect_network_init = (function fulcro$inspect$client$inspect_network_init(network,app){
return cljs.core.reset_BANG_(new cljs.core.Keyword("fulcro.inspect.client","app*","fulcro.inspect.client/app*",389597452).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(network)),app);
});
fulcro.inspect.client.transact_inspector_BANG_ = (function fulcro$inspect$client$transact_inspector_BANG_(var_args){
var G__62113 = arguments.length;
switch (G__62113) {
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)),cljs.core.update,new cljs.core.Keyword("fulcro.inspect.client","state-history","fulcro.inspect.client/state-history",2111486187),(function (p1__62119_SHARP_){
return fulcro.inspect.lib.misc.fixed_size_assoc(fulcro.inspect.client.MAX_HISTORY_SIZE,p1__62119_SHARP_,cljs.core.hash(state),state);
}));
});
fulcro.inspect.client.db_update = (function fulcro$inspect$client$db_update(app,app_uuid,old_state,new_state){
fulcro.inspect.client.update_state_history(app,new_state);

var diff = fulcro.inspect.lib.diff.diff(old_state,new_state);
return fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","db-update","fulcro.inspect.client/db-update",587693556),cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.inspect.client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.client","prev-state-hash","fulcro.inspect.client/prev-state-hash",413242088),cljs.core.hash(old_state),new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(new_state),new cljs.core.Keyword("fulcro.inspect.client","state-delta","fulcro.inspect.client/state-delta",1518835964),diff]));
});
fulcro.inspect.client.db_from_history = (function fulcro$inspect$client$db_from_history(app,state_hash){
var G__62135 = app;
var G__62135__$1 = (((G__62135 == null))?null:new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__62135));
var G__62135__$2 = (((G__62135__$1 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__62135__$1));
var G__62135__$3 = (((G__62135__$2 == null))?null:cljs.core.deref(G__62135__$2));
var G__62135__$4 = (((G__62135__$3 == null))?null:new cljs.core.Keyword("fulcro.inspect.client","state-history","fulcro.inspect.client/state-history",2111486187).cljs$core$IFn$_invoke$arity$1(G__62135__$3));
if((G__62135__$4 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__62135__$4,state_hash);
}
});
fulcro.inspect.client.dispose_app = (function fulcro$inspect$client$dispose_app(app_uuid){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(fulcro.inspect.client.apps_STAR_,cljs.core.dissoc,app_uuid);

return fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","dispose-app","fulcro.inspect.client/dispose-app",-574872452),cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.inspect.client.app_uuid_key,app_uuid]));
});
fulcro.inspect.client.set_active_app = (function fulcro$inspect$client$set_active_app(app_uuid){
return fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","set-active-app","fulcro.inspect.client/set-active-app",-2049837528),cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.inspect.client.app_uuid_key,app_uuid]));
});
fulcro.inspect.client.inspect_app = (function fulcro$inspect$client$inspect_app(p__62151){
var map__62152 = p__62151;
var map__62152__$1 = (((((!((map__62152 == null))))?(((((map__62152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62152):map__62152);
var app = map__62152__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62152__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62152__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var state_STAR_ = (function (){var G__62159 = app;
var G__62159__$1 = (((G__62159 == null))?null:new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__62159));
var G__62159__$2 = (((G__62159__$1 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__62159__$1));
if((G__62159__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__62159__$2);
}
})();
var app_uuid = cljs.core.random_uuid();
var seq__62160_63086 = cljs.core.seq(networking);
var chunk__62161_63087 = null;
var count__62162_63088 = (0);
var i__62163_63089 = (0);
while(true){
if((i__62163_63089 < count__62162_63088)){
var vec__62177_63091 = chunk__62161_63087.cljs$core$IIndexed$_nth$arity$2(null,i__62163_63089);
var __63092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62177_63091,(0),null);
var n_63093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62177_63091,(1),null);
fulcro.inspect.client.inspect_network_init(n_63093,app);


var G__63096 = seq__62160_63086;
var G__63097 = chunk__62161_63087;
var G__63098 = count__62162_63088;
var G__63099 = (i__62163_63089 + (1));
seq__62160_63086 = G__63096;
chunk__62161_63087 = G__63097;
count__62162_63088 = G__63098;
i__62163_63089 = G__63099;
continue;
} else {
var temp__5720__auto___63108 = cljs.core.seq(seq__62160_63086);
if(temp__5720__auto___63108){
var seq__62160_63116__$1 = temp__5720__auto___63108;
if(cljs.core.chunked_seq_QMARK_(seq__62160_63116__$1)){
var c__4550__auto___63119 = cljs.core.chunk_first(seq__62160_63116__$1);
var G__63124 = cljs.core.chunk_rest(seq__62160_63116__$1);
var G__63125 = c__4550__auto___63119;
var G__63126 = cljs.core.count(c__4550__auto___63119);
var G__63127 = (0);
seq__62160_63086 = G__63124;
chunk__62161_63087 = G__63125;
count__62162_63088 = G__63126;
i__62163_63089 = G__63127;
continue;
} else {
var vec__62183_63130 = cljs.core.first(seq__62160_63116__$1);
var __63131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62183_63130,(0),null);
var n_63132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62183_63130,(1),null);
fulcro.inspect.client.inspect_network_init(n_63132,app);


var G__63138 = cljs.core.next(seq__62160_63116__$1);
var G__63139 = null;
var G__63140 = (0);
var G__63141 = (0);
seq__62160_63086 = G__63138;
chunk__62161_63087 = G__63139;
count__62162_63088 = G__63140;
i__62163_63089 = G__63141;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.inspect.client.apps_STAR_,cljs.core.assoc,app_uuid,app);

fulcro.inspect.client.update_state_history(app,cljs.core.deref(state_STAR_));

fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.inspect.client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),fulcro.inspect.client.app_id(reconciler),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (state_STAR_,app_uuid,map__62152,map__62152__$1,app,reconciler,networking){
return (function (p1__62144_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__62144_SHARP_);
});})(state_STAR_,app_uuid,map__62152,map__62152__$1,app,reconciler,networking))
,cljs.core.str),cljs.core.keys(networking)),new cljs.core.Keyword("fulcro.inspect.client","initial-state","fulcro.inspect.client/initial-state",1225829482),cljs.core.deref(state_STAR_),new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(cljs.core.deref(state_STAR_))]));

cljs.core.add_watch(state_STAR_,app_uuid,((function (state_STAR_,app_uuid,map__62152,map__62152__$1,app,reconciler,networking){
return (function (p1__62148_SHARP_,p2__62149_SHARP_,p3__62146_SHARP_,p4__62147_SHARP_){
return fulcro.inspect.client.db_update(app,app_uuid,p3__62146_SHARP_,p4__62147_SHARP_);
});})(state_STAR_,app_uuid,map__62152,map__62152__$1,app,reconciler,networking))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,fulcro.inspect.client.app_uuid_key,app_uuid);

return app;
});
fulcro.inspect.client.inspect_tx = (function fulcro$inspect$client$inspect_tx(p__62190,p__62191){
var map__62193 = p__62190;
var map__62193__$1 = (((((!((map__62193 == null))))?(((((map__62193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62193):map__62193);
var env = map__62193__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62193__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var map__62194 = p__62191;
var map__62194__$1 = (((((!((map__62194 == null))))?(((((map__62194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62194):map__62194);
var info = map__62194__$1;
var db_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62194__$1,new cljs.core.Keyword("fulcro.history","db-before","fulcro.history/db-before",650457365));
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62194__$1,new cljs.core.Keyword("fulcro.history","db-after","fulcro.history/db-after",-1774997361));
if(cljs.core.truth_(fulcro.client.primitives.app_root(reconciler))){
var tx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(clojure.set.rename_keys(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([info,cljs.core.select_keys(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"component","component",1555936782)], null))], 0)),new cljs.core.Keyword(null,"component","component",1555936782),((function (map__62193,map__62193__$1,env,reconciler,map__62194,map__62194__$1,info,db_before,db_after){
return (function (p1__62187_SHARP_){
return goog.object.get(fulcro.client.primitives.react_type(p1__62187_SHARP_),"displayName");
});})(map__62193,map__62193__$1,env,reconciler,map__62194,map__62194__$1,info,db_before,db_after))
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

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k62216,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__62234 = k62216;
var G__62234__$1 = (((G__62234 instanceof cljs.core.Keyword))?G__62234.fqn:null);
switch (G__62234__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62216,else__4388__auto__);

}
});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__62236){
var vec__62238 = p__62236;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62238,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62238,(1),null);
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

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62215){
var self__ = this;
var G__62215__$1 = this;
return (new cljs.core.RecordIter((0),G__62215__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1657413298 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
(this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62217,other62218){
var self__ = this;
var this62217__$1 = this;
return (((!((other62218 == null)))) && ((this62217__$1.constructor === other62218.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62217__$1.network,other62218.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62217__$1.options,other62218.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62217__$1.__extmap,other62218.__extmap)));
});

fulcro.inspect.client.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.inspect.client.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$send$arity$4 = (function (_,edn,ok,error){
var self__ = this;
var ___$1 = this;
var map__62260 = self__.options;
var map__62260__$1 = (((((!((map__62260 == null))))?(((((map__62260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62260):map__62260);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62260__$1,new cljs.core.Keyword("fulcro.inspect.client","transform-query","fulcro.inspect.client/transform-query",-974573391),((function (map__62260,map__62260__$1,___$1){
return (function (___$2,x){
return x;
});})(map__62260,map__62260__$1,___$1))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62260__$1,new cljs.core.Keyword("fulcro.inspect.client","transform-response","fulcro.inspect.client/transform-response",664733229),((function (map__62260,map__62260__$1,transform_query,___$1){
return (function (___$2,x){
return x;
});})(map__62260,map__62260__$1,transform_query,___$1))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62260__$1,new cljs.core.Keyword("fulcro.inspect.client","transform-error","fulcro.inspect.client/transform-error",-1523058473),((function (map__62260,map__62260__$1,transform_query,transform_response,___$1){
return (function (___$2,x){
return x;
});})(map__62260,map__62260__$1,transform_query,transform_response,___$1))
);
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62260__$1,new cljs.core.Keyword("fulcro.inspect.client","app*","fulcro.inspect.client/app*",389597452));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.client","request-id","fulcro.inspect.client/request-id",-2031123789),req_id,new cljs.core.Keyword("fulcro.inspect.client","app","fulcro.inspect.client/app",-614448539),cljs.core.deref(app_STAR_)], null);
var temp__5718__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5718__auto__)){
var edn_SINGLEQUOTE_ = temp__5718__auto__;
return fulcro.client.network.send(self__.network,edn_SINGLEQUOTE_,((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__62260,map__62260__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1){
return (function (p1__62213_SHARP_){
var G__62267 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__62213_SHARP_) : transform_response.call(null,env,p1__62213_SHARP_));
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(G__62267) : ok.call(null,G__62267));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__62260,map__62260__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1))
,((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__62260,map__62260__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1){
return (function (p1__62214_SHARP_){
var G__62268 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__62214_SHARP_) : transform_error.call(null,env,p1__62214_SHARP_));
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__62268) : error.call(null,G__62268));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__62260,map__62260__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1))
);
} else {
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(null) : ok.call(null,null));
}
});

fulcro.inspect.client.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
try{fulcro.client.network.start(self__.network);
}catch (e62273){if(cljs.core.truth_((function (){var c__4167__auto__ = new cljs.core.Keyword("fulcro.inspect.client","default","fulcro.inspect.client/default",1295274520);
var x__4168__auto__ = e62273;
return (x__4168__auto__ instanceof c__4167__auto__);
})())){
var e_63364 = e62273;
console.log("Error starting sub network",e_63364);
} else {
throw e62273;

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
}catch (e62286){var _ = e62286;
return true;
}});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__62215){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__62289 = cljs.core.keyword_identical_QMARK_;
var expr__62290 = k__4393__auto__;
if(cljs.core.truth_((pred__62289.cljs$core$IFn$_invoke$arity$2 ? pred__62289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"network","network",2050004697),expr__62290) : pred__62289.call(null,new cljs.core.Keyword(null,"network","network",2050004697),expr__62290)))){
return (new fulcro.inspect.client.TransformNetwork(G__62215,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62289.cljs$core$IFn$_invoke$arity$2 ? pred__62289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options","options",99638489),expr__62290) : pred__62289.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__62290)))){
return (new fulcro.inspect.client.TransformNetwork(self__.network,G__62215,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.inspect.client.TransformNetwork(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__62215),null));
}
}
});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"network","network",2050004697),self__.network,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null))], null),self__.__extmap));
});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__62215){
var self__ = this;
var this__4384__auto____$1 = this;
return (new fulcro.inspect.client.TransformNetwork(self__.network,self__.options,G__62215,self__.__extmap,self__.__hash));
});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4391__auto__,(0)),cljs.core._nth(entry__4391__auto__,(1)));
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
fulcro.inspect.client.map__GT_TransformNetwork = (function fulcro$inspect$client$map__GT_TransformNetwork(G__62223){
var extmap__4424__auto__ = (function (){var G__62313 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62223,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0));
if(cljs.core.record_QMARK_(G__62223)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62313);
} else {
return G__62313;
}
})();
return (new fulcro.inspect.client.TransformNetwork(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__62223),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__62223),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k62326,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__62358 = k62326;
var G__62358__$1 = (((G__62358 instanceof cljs.core.Keyword))?G__62358.fqn:null);
switch (G__62358__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62326,else__4388__auto__);

}
});

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__62364){
var vec__62365 = p__62364;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62365,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62365,(1),null);
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

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62325){
var self__ = this;
var G__62325__$1 = this;
return (new cljs.core.RecordIter((0),G__62325__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1349897959 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
(this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62327,other62328){
var self__ = this;
var this62327__$1 = this;
return (((!((other62328 == null)))) && ((this62327__$1.constructor === other62328.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62327__$1.network,other62328.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62327__$1.options,other62328.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62327__$1.__extmap,other62328.__extmap)));
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

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__62325){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__62404 = cljs.core.keyword_identical_QMARK_;
var expr__62405 = k__4393__auto__;
if(cljs.core.truth_((pred__62404.cljs$core$IFn$_invoke$arity$2 ? pred__62404.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"network","network",2050004697),expr__62405) : pred__62404.call(null,new cljs.core.Keyword(null,"network","network",2050004697),expr__62405)))){
return (new fulcro.inspect.client.TransformNetworkI(G__62325,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62404.cljs$core$IFn$_invoke$arity$2 ? pred__62404.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options","options",99638489),expr__62405) : pred__62404.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__62405)))){
return (new fulcro.inspect.client.TransformNetworkI(self__.network,G__62325,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.inspect.client.TransformNetworkI(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__62325),null));
}
}
});

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"network","network",2050004697),self__.network,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null))], null),self__.__extmap));
});

fulcro.inspect.client.TransformNetworkI.prototype.fulcro$client$network$FulcroRemoteI$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.inspect.client.TransformNetworkI.prototype.fulcro$client$network$FulcroRemoteI$transmit$arity$2 = (function (_,p__62411){
var self__ = this;
var map__62412 = p__62411;
var map__62412__$1 = (((((!((map__62412 == null))))?(((((map__62412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62412):map__62412);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62412__$1,new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957));
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62412__$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62412__$1,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226));
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62412__$1,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355));
var ___$1 = this;
var map__62417 = self__.options;
var map__62417__$1 = (((((!((map__62417 == null))))?(((((map__62417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62417):map__62417);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62417__$1,new cljs.core.Keyword("fulcro.inspect.client","transform-query","fulcro.inspect.client/transform-query",-974573391),((function (map__62417,map__62417__$1,___$1,map__62412,map__62412__$1,edn,ok_handler,error_handler,progress_handler){
return (function (___$2,x){
return x;
});})(map__62417,map__62417__$1,___$1,map__62412,map__62412__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62417__$1,new cljs.core.Keyword("fulcro.inspect.client","transform-response","fulcro.inspect.client/transform-response",664733229),((function (map__62417,map__62417__$1,transform_query,___$1,map__62412,map__62412__$1,edn,ok_handler,error_handler,progress_handler){
return (function (___$2,x){
return x;
});})(map__62417,map__62417__$1,transform_query,___$1,map__62412,map__62412__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62417__$1,new cljs.core.Keyword("fulcro.inspect.client","transform-error","fulcro.inspect.client/transform-error",-1523058473),((function (map__62417,map__62417__$1,transform_query,transform_response,___$1,map__62412,map__62412__$1,edn,ok_handler,error_handler,progress_handler){
return (function (___$2,x){
return x;
});})(map__62417,map__62417__$1,transform_query,transform_response,___$1,map__62412,map__62412__$1,edn,ok_handler,error_handler,progress_handler))
);
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62417__$1,new cljs.core.Keyword("fulcro.inspect.client","app*","fulcro.inspect.client/app*",389597452));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.client","request-id","fulcro.inspect.client/request-id",-2031123789),req_id,new cljs.core.Keyword("fulcro.inspect.client","app","fulcro.inspect.client/app",-614448539),cljs.core.deref(app_STAR_)], null);
var temp__5718__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5718__auto__)){
var edn_SINGLEQUOTE_ = temp__5718__auto__;
return fulcro.client.network.transmit(self__.network,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),edn_SINGLEQUOTE_,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__62417,map__62417__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1,map__62412,map__62412__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__62319_SHARP_){
var G__62430 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__62319_SHARP_) : transform_response.call(null,env,p1__62319_SHARP_));
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(G__62430) : ok_handler.call(null,G__62430));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__62417,map__62417__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1,map__62412,map__62412__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__62417,map__62417__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1,map__62412,map__62412__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__62321_SHARP_){
var G__62432 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__62321_SHARP_) : transform_error.call(null,env,p1__62321_SHARP_));
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__62432) : error_handler.call(null,G__62432));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__62417,map__62417__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1,map__62412,map__62412__$1,edn,ok_handler,error_handler,progress_handler))
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

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__62325){
var self__ = this;
var this__4384__auto____$1 = this;
return (new fulcro.inspect.client.TransformNetworkI(self__.network,self__.options,G__62325,self__.__extmap,self__.__hash));
});

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4391__auto__,(0)),cljs.core._nth(entry__4391__auto__,(1)));
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
fulcro.inspect.client.map__GT_TransformNetworkI = (function fulcro$inspect$client$map__GT_TransformNetworkI(G__62342){
var extmap__4424__auto__ = (function (){var G__62442 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62342,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0));
if(cljs.core.record_QMARK_(G__62342)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62442);
} else {
return G__62442;
}
})();
return (new fulcro.inspect.client.TransformNetworkI(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__62342),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__62342),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

fulcro.inspect.client.transform_network_i = (function fulcro$inspect$client$transform_network_i(network,options){
return fulcro.inspect.client.__GT_TransformNetworkI(network,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("fulcro.inspect.client","app*","fulcro.inspect.client/app*",389597452),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)));
});
fulcro.inspect.client.inspect_network = (function fulcro$inspect$client$inspect_network(remote,network){
var ts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.client","transform-query","fulcro.inspect.client/transform-query",-974573391),(function (p__62466,edn){
var map__62467 = p__62466;
var map__62467__$1 = (((((!((map__62467 == null))))?(((((map__62467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62467):map__62467);
var request_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62467__$1,new cljs.core.Keyword("fulcro.inspect.client","request-id","fulcro.inspect.client/request-id",-2031123789));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62467__$1,new cljs.core.Keyword("fulcro.inspect.client","app","fulcro.inspect.client/app",-614448539));
var start_63544 = (new Date());
var app_uuid_63545 = fulcro.inspect.client.app_uuid(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app));
fulcro.inspect.client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.client.app_uuid_key,app_uuid_63545], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-start","fulcro.inspect.ui.network/request-start",-1415257884,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.inspect.ui.network","remote","fulcro.inspect.ui.network/remote",-307593223),remote,new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),request_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-started-at","fulcro.inspect.ui.network/request-started-at",1582455117),start_63544,new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn","fulcro.inspect.ui.network/request-edn",-1638784885),edn], null),null,(1),null)))))], null));

return edn;
}),new cljs.core.Keyword("fulcro.inspect.client","transform-response","fulcro.inspect.client/transform-response",664733229),(function (p__62476,response){
var map__62477 = p__62476;
var map__62477__$1 = (((((!((map__62477 == null))))?(((((map__62477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62477):map__62477);
var request_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62477__$1,new cljs.core.Keyword("fulcro.inspect.client","request-id","fulcro.inspect.client/request-id",-2031123789));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62477__$1,new cljs.core.Keyword("fulcro.inspect.client","app","fulcro.inspect.client/app",-614448539));
var finished_63556 = (new Date());
var app_uuid_63557 = fulcro.inspect.client.app_uuid(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app));
fulcro.inspect.client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.client.app_uuid_key,app_uuid_63557], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-finish","fulcro.inspect.ui.network/request-finish",817834789,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),request_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),finished_63556,new cljs.core.Keyword("fulcro.inspect.ui.network","response-edn","fulcro.inspect.ui.network/response-edn",221134354),response], null),null,(1),null)))))], null));

return response;
}),new cljs.core.Keyword("fulcro.inspect.client","transform-error","fulcro.inspect.client/transform-error",-1523058473),(function (p__62486,error){
var map__62487 = p__62486;
var map__62487__$1 = (((((!((map__62487 == null))))?(((((map__62487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62487):map__62487);
var request_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62487__$1,new cljs.core.Keyword("fulcro.inspect.client","request-id","fulcro.inspect.client/request-id",-2031123789));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62487__$1,new cljs.core.Keyword("fulcro.inspect.client","app","fulcro.inspect.client/app",-614448539));
var finished_63569 = (new Date());
var app_uuid_63570 = fulcro.inspect.client.app_uuid(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app));
fulcro.inspect.client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.client.app_uuid_key,app_uuid_63570], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-finish","fulcro.inspect.ui.network/request-finish",817834789,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),request_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),finished_63569,new cljs.core.Keyword("fulcro.inspect.ui.network","error","fulcro.inspect.ui.network/error",36212909),error], null),null,(1),null)))))], null));

return error;
})], null);
if((((!((network == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === network.fulcro$client$network$FulcroNetwork$))))?true:false):false)){
return fulcro.inspect.client.transform_network(network,ts);
} else {
if((((!((network == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === network.fulcro$client$network$FulcroRemoteI$))))?true:false):false)){
return fulcro.inspect.client.transform_network_i(network,cljs.core.update.cljs$core$IFn$_invoke$arity$3(ts,new cljs.core.Keyword("fulcro.inspect.client","transform-response","fulcro.inspect.client/transform-response",664733229),((function (ts){
return (function (tr){
return ((function (ts){
return (function (env,p__62503){
var map__62504 = p__62503;
var map__62504__$1 = (((((!((map__62504 == null))))?(((((map__62504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62504):map__62504);
var response = map__62504__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62504__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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
fulcro.inspect.client.handle_devtool_message = (function fulcro$inspect$client$handle_devtool_message(p__62516){
var map__62517 = p__62516;
var map__62517__$1 = (((((!((map__62517 == null))))?(((((map__62517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62517):map__62517);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62517__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62517__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var G__62524 = type;
var G__62524__$1 = (((G__62524 instanceof cljs.core.Keyword))?G__62524.fqn:null);
switch (G__62524__$1) {
case "fulcro.inspect.client/request-page-apps":
var seq__62531 = cljs.core.seq(cljs.core.vals(cljs.core.deref(fulcro.inspect.client.apps_STAR_)));
var chunk__62532 = null;
var count__62533 = (0);
var i__62534 = (0);
while(true){
if((i__62534 < count__62533)){
var map__62558 = chunk__62532.cljs$core$IIndexed$_nth$arity$2(null,i__62534);
var map__62558__$1 = (((((!((map__62558 == null))))?(((((map__62558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62558):map__62558);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62558__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62558__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.inspect.client.app_uuid_key,fulcro.inspect.client.app_uuid(reconciler),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),fulcro.inspect.client.app_id(reconciler),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (seq__62531,chunk__62532,count__62533,i__62534,map__62558,map__62558__$1,reconciler,networking,G__62524,G__62524__$1,map__62517,map__62517__$1,type,data){
return (function (p1__62508_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__62508_SHARP_);
});})(seq__62531,chunk__62532,count__62533,i__62534,map__62558,map__62558__$1,reconciler,networking,G__62524,G__62524__$1,map__62517,map__62517__$1,type,data))
,cljs.core.str),cljs.core.keys(networking)),new cljs.core.Keyword("fulcro.inspect.client","initial-state","fulcro.inspect.client/initial-state",1225829482),cljs.core.deref(fulcro.client.primitives.app_state(reconciler)),new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(cljs.core.deref(fulcro.client.primitives.app_state(reconciler)))]));


var G__63598 = seq__62531;
var G__63599 = chunk__62532;
var G__63600 = count__62533;
var G__63601 = (i__62534 + (1));
seq__62531 = G__63598;
chunk__62532 = G__63599;
count__62533 = G__63600;
i__62534 = G__63601;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__62531);
if(temp__5720__auto__){
var seq__62531__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62531__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62531__$1);
var G__63611 = cljs.core.chunk_rest(seq__62531__$1);
var G__63612 = c__4550__auto__;
var G__63613 = cljs.core.count(c__4550__auto__);
var G__63614 = (0);
seq__62531 = G__63611;
chunk__62532 = G__63612;
count__62533 = G__63613;
i__62534 = G__63614;
continue;
} else {
var map__62571 = cljs.core.first(seq__62531__$1);
var map__62571__$1 = (((((!((map__62571 == null))))?(((((map__62571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62571):map__62571);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62571__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62571__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.inspect.client.app_uuid_key,fulcro.inspect.client.app_uuid(reconciler),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),fulcro.inspect.client.app_id(reconciler),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (seq__62531,chunk__62532,count__62533,i__62534,map__62571,map__62571__$1,reconciler,networking,seq__62531__$1,temp__5720__auto__,G__62524,G__62524__$1,map__62517,map__62517__$1,type,data){
return (function (p1__62508_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__62508_SHARP_);
});})(seq__62531,chunk__62532,count__62533,i__62534,map__62571,map__62571__$1,reconciler,networking,seq__62531__$1,temp__5720__auto__,G__62524,G__62524__$1,map__62517,map__62517__$1,type,data))
,cljs.core.str),cljs.core.keys(networking)),new cljs.core.Keyword("fulcro.inspect.client","initial-state","fulcro.inspect.client/initial-state",1225829482),cljs.core.deref(fulcro.client.primitives.app_state(reconciler)),new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(cljs.core.deref(fulcro.client.primitives.app_state(reconciler)))]));


var G__63626 = cljs.core.next(seq__62531__$1);
var G__63627 = null;
var G__63628 = (0);
var G__63629 = (0);
seq__62531 = G__63626;
chunk__62532 = G__63627;
count__62533 = G__63628;
i__62534 = G__63629;
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
var map__62583 = data;
var map__62583__$1 = (((((!((map__62583 == null))))?(((((map__62583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62583):map__62583);
var target_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62583__$1,new cljs.core.Keyword(null,"target-state","target-state",-682429993));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62583__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fulcro.inspect.client.apps_STAR_),app_uuid);
if(cljs.core.truth_(temp__5718__auto__)){
var map__62588 = temp__5718__auto__;
var map__62588__$1 = (((((!((map__62588 == null))))?(((((map__62588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62588):map__62588);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62588__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
if(cljs.core.truth_(target_state)){
var target_state_63636__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target_state,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491),app_uuid);
var G__62601_63637 = reconciler;
var G__62601_63638__$1 = (((G__62601_63637 == null))?null:fulcro.client.primitives.app_state(G__62601_63637));
if((G__62601_63638__$1 == null)){
} else {
cljs.core.reset_BANG_(G__62601_63638__$1,target_state_63636__$1);
}
} else {
}

return setTimeout(((function (map__62588,map__62588__$1,reconciler,temp__5718__auto__,map__62583,map__62583__$1,target_state,app_uuid,G__62524,G__62524__$1,map__62517,map__62517__$1,type,data){
return (function (){
return fulcro.client.primitives.force_root_render_BANG_(reconciler);
});})(map__62588,map__62588__$1,reconciler,temp__5718__auto__,map__62583,map__62583__$1,target_state,app_uuid,G__62524,G__62524__$1,map__62517,map__62517__$1,type,data))
,(10));
} else {
return console.log("Reset app on invalid uuid",app_uuid);
}

break;
case "fulcro.inspect.client/transact":
var map__62603 = data;
var map__62603__$1 = (((((!((map__62603 == null))))?(((((map__62603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62603):map__62603);
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62603__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var tx_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62603__$1,new cljs.core.Keyword(null,"tx-ref","tx-ref",-216104949));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62603__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fulcro.inspect.client.apps_STAR_),app_uuid);
if(cljs.core.truth_(temp__5718__auto__)){
var map__62609 = temp__5718__auto__;
var map__62609__$1 = (((((!((map__62609 == null))))?(((((map__62609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62609):map__62609);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62609__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
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
var map__62614 = data;
var map__62614__$1 = (((((!((map__62614 == null))))?(((((map__62614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62614):map__62614);
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62614__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
return fulcro.inspect.ui.element_picker.pick_element(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491),app_uuid,new cljs.core.Keyword("fulcro.inspect.ui.element-picker","on-pick","fulcro.inspect.ui.element-picker/on-pick",-1116265320),((function (map__62614,map__62614__$1,app_uuid,G__62524,G__62524__$1,map__62517,map__62517__$1,type,data){
return (function (comp){
if(cljs.core.truth_(comp)){
var details = fulcro.inspect.ui.element_picker.inspect_component(comp);
return fulcro.inspect.client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.element","panel-id","fulcro.inspect.ui.element/panel-id",714724520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491),app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.element","set-element","fulcro.inspect.ui.element/set-element",1898236728,null),null,(1),null)),(new cljs.core.List(null,details,null,(1),null)))))], null));
} else {
return fulcro.inspect.client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.element","panel-id","fulcro.inspect.ui.element/panel-id",714724520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491),app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.mutations","set-props","fulcro.client.mutations/set-props",-1739323709,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("ui","picking?","ui/picking?",969621556),null,(1),null)),(new cljs.core.List(null,false,null,(1),null)))))),null,(1),null)))))], null));
}
});})(map__62614,map__62614__$1,app_uuid,G__62524,G__62524__$1,map__62517,map__62517__$1,type,data))
], null));

break;
case "fulcro.inspect.client/show-dom-preview":
var map__62623 = data;
var map__62623__$1 = (((((!((map__62623 == null))))?(((((map__62623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62623):map__62623);
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62623__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var app = (function (){var G__62626 = cljs.core.deref(fulcro.inspect.client.apps_STAR_);
if((G__62626 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__62626,app_uuid);
}
})();
var app_state = fulcro.inspect.client.db_from_history(app,new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756).cljs$core$IFn$_invoke$arity$1(data));
var reconciler = (function (){var G__62628 = cljs.core.deref(fulcro.inspect.client.apps_STAR_);
var G__62628__$1 = (((G__62628 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__62628,app_uuid));
if((G__62628__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__62628__$1);
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
var map__62634 = data;
var map__62634__$1 = (((((!((map__62634 == null))))?(((((map__62634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62634):map__62634);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62634__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62634__$1,new cljs.core.Keyword("fulcro.inspect.client","remote","fulcro.inspect.client/remote",-306964848));
var msg_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62634__$1,new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-id","fulcro.inspect.ui-parser/msg-id",-467621998));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62634__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fulcro.inspect.client.apps_STAR_),app_uuid);
if(cljs.core.truth_(temp__5720__auto__)){
var app = temp__5720__auto__;
var remote__$1 = (function (){var G__62644 = new cljs.core.Keyword(null,"networking","networking",586110628).cljs$core$IFn$_invoke$arity$1(app);
return (remote.cljs$core$IFn$_invoke$arity$1 ? remote.cljs$core$IFn$_invoke$arity$1(G__62644) : remote.call(null,G__62644));
})();
var response_handler = ((function (remote__$1,app,temp__5720__auto__,map__62634,map__62634__$1,query,remote,msg_id,app_uuid,G__62524,G__62524__$1,map__62517,map__62517__$1,type,data){
return (function (res){
return fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","message-response","fulcro.inspect.client/message-response",587955053),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-id","fulcro.inspect.ui-parser/msg-id",-467621998),msg_id,new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-response","fulcro.inspect.ui-parser/msg-response",1721295840),res], null));
});})(remote__$1,app,temp__5720__auto__,map__62634,map__62634__$1,query,remote,msg_id,app_uuid,G__62524,G__62524__$1,map__62517,map__62517__$1,type,data))
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
var map__62653 = data;
var map__62653__$1 = (((((!((map__62653 == null))))?(((((map__62653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62653):map__62653);
var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62653__$1,new cljs.core.Keyword(null,"log","log",-1595516004));
var log_js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62653__$1,new cljs.core.Keyword(null,"log-js","log-js",-1565471667));
var warn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62653__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62653__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
var this__56858__auto__ = this;
React.Component.apply(this__56858__auto__,arguments);

if((!((this__56858__auto__.initLocalState == null)))){
this__56858__auto__.state = this__56858__auto__.initLocalState();
} else {
this__56858__auto__.state = ({});
}

return this__56858__auto__;
});

goog.object.extend(fulcro.inspect.client.ClientRoot.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("fulcro.inspect.client","ClientRoot","fulcro.inspect.client/ClientRoot",-683834442),fulcro.inspect.client.ClientRoot);

var x62676_63710 = fulcro.inspect.client.ClientRoot.prototype;
x62676_63710.render = ((function (x62676_63710){
return (function (){
var this__55246__auto__ = this;
var this$ = this__55246__auto__;
var _STAR_reconciler_STAR__orig_val__62680 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__62681 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__62682 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__62683 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__62684 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__62685 = fulcro.client.primitives.get_reconciler(this__55246__auto__);
var _STAR_depth_STAR__temp_val__62686 = (fulcro.client.primitives.depth(this__55246__auto__) + (1));
var _STAR_shared_STAR__temp_val__62687 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__55246__auto__);
var _STAR_instrument_STAR__temp_val__62688 = fulcro.client.primitives.instrument(this__55246__auto__);
var _STAR_parent_STAR__temp_val__62689 = this__55246__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__62685;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__62686;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__62687;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__62688;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__62689;

try{var map__62690 = fulcro.client.primitives.props(this$);
var map__62690__$1 = (((((!((map__62690 == null))))?(((((map__62690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62690):map__62690);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62690__$1,new cljs.core.Keyword(null,"history","history",-247395220));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro_css.css.style_element(this$),(fulcro.inspect.ui.dom_history_viewer.ui_dom_history_view.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.ui.dom_history_viewer.ui_dom_history_view.cljs$core$IFn$_invoke$arity$1(history) : fulcro.inspect.ui.dom_history_viewer.ui_dom_history_view.call(null,history))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__62684;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__62683;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__62682;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__62681;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__62680;
}});})(x62676_63710))
;


fulcro.inspect.client.ClientRoot.prototype.constructor = fulcro.inspect.client.ClientRoot;

fulcro.inspect.client.ClientRoot.prototype.constructor.displayName = "fulcro.inspect.client/ClientRoot";

fulcro.inspect.client.ClientRoot.prototype.fulcro$isComponent = true;

var x62696_63719 = fulcro.inspect.client.ClientRoot;
x62696_63719.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x62696_63719.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x62696_63719){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x62696_63719))
;

x62696_63719.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x62696_63719){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.element_picker.MarkerCSS,fulcro.inspect.ui.dom_history_viewer.DOMHistoryView], null);
});})(x62696_63719))
;

x62696_63719.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x62696_63719.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x62696_63719){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),fulcro.inspect.ui.dom_history_viewer.DOMHistoryView], null),params);
});})(x62696_63719))
;

x62696_63719.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x62696_63719.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x62696_63719){
return (function (this$,p__62707){
var map__62712 = p__62707;
var map__62712__$1 = (((((!((map__62712 == null))))?(((((map__62712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62712):map__62712);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62712__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.client","root","fulcro.inspect.client/root",-1445929181),"main"], null);
});})(x62696_63719))
;

x62696_63719.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x62696_63719.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x62696_63719){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.dom_history_viewer.DOMHistoryView)], null)], null);
});})(x62696_63719))
;


var x62723_63730 = fulcro.inspect.client.ClientRoot.prototype;
x62723_63730.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x62723_63730.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x62723_63730){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x62723_63730))
;

x62723_63730.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x62723_63730){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.element_picker.MarkerCSS,fulcro.inspect.ui.dom_history_viewer.DOMHistoryView], null);
});})(x62723_63730))
;

x62723_63730.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x62723_63730.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x62723_63730){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),fulcro.inspect.ui.dom_history_viewer.DOMHistoryView], null),params);
});})(x62723_63730))
;

x62723_63730.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x62723_63730.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x62723_63730){
return (function (this$,p__62761){
var map__62762 = p__62761;
var map__62762__$1 = (((((!((map__62762 == null))))?(((((map__62762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62762):map__62762);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62762__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.client","root","fulcro.inspect.client/root",-1445929181),"main"], null);
});})(x62723_63730))
;

x62723_63730.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x62723_63730.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x62723_63730){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.dom_history_viewer.DOMHistoryView)], null)], null);
});})(x62723_63730))
;


fulcro.inspect.client.ClientRoot.cljs$lang$type = true;

fulcro.inspect.client.ClientRoot.cljs$lang$ctorStr = "fulcro.inspect.client/ClientRoot";

fulcro.inspect.client.ClientRoot.cljs$lang$ctorPrWriter = (function (this__56861__auto__,writer__56862__auto__,opt__56863__auto__){
return cljs.core._write(writer__56862__auto__,"fulcro.inspect.client/ClientRoot");
});
fulcro.inspect.client.install = (function fulcro$inspect$client$install(_){
document.documentElement.setAttribute("__fulcro-inspect-remote-installed__",true);

if(cljs.core.truth_(cljs.core.deref(fulcro.inspect.client.started_QMARK__STAR_))){
return null;
} else {
console.log("Installing Fulcro Inspect",cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_(fulcro.inspect.client.started_QMARK__STAR_,true);

var app_63745 = fulcro.client.new_fulcro_client();
var node_63746 = document.createElement("div");
document.body.appendChild(node_63746);

cljs.core.reset_BANG_(fulcro.inspect.client.tools_app_STAR_,fulcro.client.mount(app_63745,fulcro.inspect.client.ClientRoot,node_63746));

fulcro.client.register_tool(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client","tool-id","fulcro.client/tool-id",92631184),new cljs.core.Keyword("fulcro.inspect.client","fulcro-inspect-remote","fulcro.inspect.client/fulcro-inspect-remote",309494381),new cljs.core.Keyword("fulcro.client","app-started","fulcro.client/app-started",1807137305),fulcro.inspect.client.inspect_app,new cljs.core.Keyword("fulcro.client","network-wrapper","fulcro.client/network-wrapper",-982819985),(function (networks){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__62791){
var vec__62797 = p__62791;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62797,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62797,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fulcro.inspect.client.inspect_network(k,v)], null);
})),networks);
}),new cljs.core.Keyword("fulcro.client","tx-listen","fulcro.client/tx-listen",267162069),fulcro.inspect.client.inspect_tx], null));

return fulcro.inspect.client.listen_local_messages();
}
});

//# sourceMappingURL=fulcro.inspect.client.js.map
