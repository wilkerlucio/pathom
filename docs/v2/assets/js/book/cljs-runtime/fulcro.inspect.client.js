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
var G__63652 = event;
var G__63652__$1 = (((G__63652 == null))?null:goog.object.getValueByKeys(G__63652,"data","fulcro-inspect-devtool-message"));
if((G__63652__$1 == null)){
return null;
} else {
return fulcro.inspect.remote.transit.read(G__63652__$1);
}
});
fulcro.inspect.client.start_send_message_loop = (function fulcro$inspect$client$start_send_message_loop(){
var c__50615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto__){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto__){
return (function (state_63696){
var state_val_63697 = (state_63696[(1)]);
if((state_val_63697 === (1))){
var state_63696__$1 = state_63696;
var statearr_63698_64853 = state_63696__$1;
(statearr_63698_64853[(2)] = null);

(statearr_63698_64853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63697 === (2))){
var state_63696__$1 = state_63696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63696__$1,(4),fulcro.inspect.client.send_ch);
} else {
if((state_val_63697 === (3))){
var inst_63694 = (state_63696[(2)]);
var state_63696__$1 = state_63696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63696__$1,inst_63694);
} else {
if((state_val_63697 === (4))){
var inst_63664 = (state_63696[(7)]);
var inst_63664__$1 = (state_63696[(2)]);
var state_63696__$1 = (function (){var statearr_63704 = state_63696;
(statearr_63704[(7)] = inst_63664__$1);

return statearr_63704;
})();
if(cljs.core.truth_(inst_63664__$1)){
var statearr_63706_64858 = state_63696__$1;
(statearr_63706_64858[(1)] = (5));

} else {
var statearr_63708_64860 = state_63696__$1;
(statearr_63708_64860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63697 === (5))){
var inst_63664 = (state_63696[(7)]);
var inst_63672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63664,(0),null);
var inst_63673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63664,(1),null);
var inst_63675 = [new cljs.core.Keyword(null,"fulcro-inspect-remote-message","fulcro-inspect-remote-message",1518065210)];
var inst_63679 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)];
var inst_63681 = (new Date());
var inst_63682 = [inst_63672,inst_63673,inst_63681];
var inst_63683 = cljs.core.PersistentHashMap.fromArrays(inst_63679,inst_63682);
var inst_63684 = fulcro.inspect.remote.transit.write(inst_63683);
var inst_63685 = [inst_63684];
var inst_63686 = cljs.core.PersistentHashMap.fromArrays(inst_63675,inst_63685);
var inst_63687 = cljs.core.clj__GT_js(inst_63686);
var inst_63688 = window.postMessage(inst_63687,"*");
var state_63696__$1 = (function (){var statearr_63714 = state_63696;
(statearr_63714[(8)] = inst_63688);

return statearr_63714;
})();
var statearr_63717_64866 = state_63696__$1;
(statearr_63717_64866[(2)] = null);

(statearr_63717_64866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63697 === (6))){
var state_63696__$1 = state_63696;
var statearr_63721_64869 = state_63696__$1;
(statearr_63721_64869[(2)] = null);

(statearr_63721_64869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63697 === (7))){
var inst_63692 = (state_63696[(2)]);
var state_63696__$1 = state_63696;
var statearr_63723_64870 = state_63696__$1;
(statearr_63723_64870[(2)] = inst_63692);

(statearr_63723_64870[(1)] = (3));


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
});})(c__50615__auto__))
;
return ((function (switch__48679__auto__,c__50615__auto__){
return (function() {
var fulcro$inspect$client$start_send_message_loop_$_state_machine__48680__auto__ = null;
var fulcro$inspect$client$start_send_message_loop_$_state_machine__48680__auto____0 = (function (){
var statearr_63728 = [null,null,null,null,null,null,null,null,null];
(statearr_63728[(0)] = fulcro$inspect$client$start_send_message_loop_$_state_machine__48680__auto__);

(statearr_63728[(1)] = (1));

return statearr_63728;
});
var fulcro$inspect$client$start_send_message_loop_$_state_machine__48680__auto____1 = (function (state_63696){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_63696);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e63731){var ex__48683__auto__ = e63731;
var statearr_63732_64880 = state_63696;
(statearr_63732_64880[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_63696[(4)]))){
var statearr_63734_64883 = state_63696;
(statearr_63734_64883[(1)] = cljs.core.first((state_63696[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64884 = state_63696;
state_63696 = G__64884;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
fulcro$inspect$client$start_send_message_loop_$_state_machine__48680__auto__ = function(state_63696){
switch(arguments.length){
case 0:
return fulcro$inspect$client$start_send_message_loop_$_state_machine__48680__auto____0.call(this);
case 1:
return fulcro$inspect$client$start_send_message_loop_$_state_machine__48680__auto____1.call(this,state_63696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$inspect$client$start_send_message_loop_$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$inspect$client$start_send_message_loop_$_state_machine__48680__auto____0;
fulcro$inspect$client$start_send_message_loop_$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$inspect$client$start_send_message_loop_$_state_machine__48680__auto____1;
return fulcro$inspect$client$start_send_message_loop_$_state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto__))
})();
var state__50617__auto__ = (function (){var statearr_63740 = f__50616__auto__();
(statearr_63740[(6)] = c__50615__auto__);

return statearr_63740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto__))
);

return c__50615__auto__;
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
var G__63753 = fulcro.inspect.client.event_data(event);
return (fulcro.inspect.client.handle_devtool_message.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.client.handle_devtool_message.cljs$core$IFn$_invoke$arity$1(G__63753) : fulcro.inspect.client.handle_devtool_message.call(null,G__63753));
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
var G__63762 = reconciler;
var G__63762__$1 = (((G__63762 == null))?null:fulcro.client.primitives.app_state(G__63762));
var G__63762__$2 = (((G__63762__$1 == null))?null:cljs.core.deref(G__63762__$1));
if((G__63762__$2 == null)){
return null;
} else {
return fulcro.inspect.client.app_uuid_key.cljs$core$IFn$_invoke$arity$1(G__63762__$2);
}
});
fulcro.inspect.client.app_id = (function fulcro$inspect$client$app_id(reconciler){
var or__4131__auto__ = (function (){var G__63766 = reconciler;
var G__63766__$1 = (((G__63766 == null))?null:fulcro.client.primitives.app_state(G__63766));
var G__63766__$2 = (((G__63766__$1 == null))?null:cljs.core.deref(G__63766__$1));
if((G__63766__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233).cljs$core$IFn$_invoke$arity$1(G__63766__$2);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__63769 = reconciler;
var G__63769__$1 = (((G__63769 == null))?null:fulcro.client.primitives.app_root(G__63769));
if((G__63769__$1 == null)){
return null;
} else {
return fulcro.inspect.ui.helpers.react_display_name(G__63769__$1);
}
}
});
fulcro.inspect.client.inspect_network_init = (function fulcro$inspect$client$inspect_network_init(network,app){
return cljs.core.reset_BANG_(new cljs.core.Keyword("fulcro.inspect.client","app*","fulcro.inspect.client/app*",389597452).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(network)),app);
});
fulcro.inspect.client.transact_inspector_BANG_ = (function fulcro$inspect$client$transact_inspector_BANG_(var_args){
var G__63782 = arguments.length;
switch (G__63782) {
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)),cljs.core.update,new cljs.core.Keyword("fulcro.inspect.client","state-history","fulcro.inspect.client/state-history",2111486187),(function (p1__63793_SHARP_){
return fulcro.inspect.lib.misc.fixed_size_assoc(fulcro.inspect.client.MAX_HISTORY_SIZE,p1__63793_SHARP_,cljs.core.hash(state),state);
}));
});
fulcro.inspect.client.db_update = (function fulcro$inspect$client$db_update(app,app_uuid,old_state,new_state){
fulcro.inspect.client.update_state_history(app,new_state);

var diff = fulcro.inspect.lib.diff.diff(old_state,new_state);
return fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","db-update","fulcro.inspect.client/db-update",587693556),cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.inspect.client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.client","prev-state-hash","fulcro.inspect.client/prev-state-hash",413242088),cljs.core.hash(old_state),new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(new_state),new cljs.core.Keyword("fulcro.inspect.client","state-delta","fulcro.inspect.client/state-delta",1518835964),diff]));
});
fulcro.inspect.client.db_from_history = (function fulcro$inspect$client$db_from_history(app,state_hash){
var G__63813 = app;
var G__63813__$1 = (((G__63813 == null))?null:new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__63813));
var G__63813__$2 = (((G__63813__$1 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__63813__$1));
var G__63813__$3 = (((G__63813__$2 == null))?null:cljs.core.deref(G__63813__$2));
var G__63813__$4 = (((G__63813__$3 == null))?null:new cljs.core.Keyword("fulcro.inspect.client","state-history","fulcro.inspect.client/state-history",2111486187).cljs$core$IFn$_invoke$arity$1(G__63813__$3));
if((G__63813__$4 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__63813__$4,state_hash);
}
});
fulcro.inspect.client.dispose_app = (function fulcro$inspect$client$dispose_app(app_uuid){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(fulcro.inspect.client.apps_STAR_,cljs.core.dissoc,app_uuid);

return fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","dispose-app","fulcro.inspect.client/dispose-app",-574872452),cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.inspect.client.app_uuid_key,app_uuid]));
});
fulcro.inspect.client.set_active_app = (function fulcro$inspect$client$set_active_app(app_uuid){
return fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","set-active-app","fulcro.inspect.client/set-active-app",-2049837528),cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.inspect.client.app_uuid_key,app_uuid]));
});
fulcro.inspect.client.inspect_app = (function fulcro$inspect$client$inspect_app(p__63834){
var map__63835 = p__63834;
var map__63835__$1 = (((((!((map__63835 == null))))?(((((map__63835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63835):map__63835);
var app = map__63835__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63835__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63835__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var state_STAR_ = (function (){var G__63840 = app;
var G__63840__$1 = (((G__63840 == null))?null:new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__63840));
var G__63840__$2 = (((G__63840__$1 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__63840__$1));
if((G__63840__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__63840__$2);
}
})();
var app_uuid = cljs.core.random_uuid();
var seq__63843_64929 = cljs.core.seq(networking);
var chunk__63844_64930 = null;
var count__63845_64931 = (0);
var i__63846_64932 = (0);
while(true){
if((i__63846_64932 < count__63845_64931)){
var vec__63864_64936 = chunk__63844_64930.cljs$core$IIndexed$_nth$arity$2(null,i__63846_64932);
var __64937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63864_64936,(0),null);
var n_64938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63864_64936,(1),null);
fulcro.inspect.client.inspect_network_init(n_64938,app);


var G__64950 = seq__63843_64929;
var G__64951 = chunk__63844_64930;
var G__64952 = count__63845_64931;
var G__64953 = (i__63846_64932 + (1));
seq__63843_64929 = G__64950;
chunk__63844_64930 = G__64951;
count__63845_64931 = G__64952;
i__63846_64932 = G__64953;
continue;
} else {
var temp__5720__auto___64959 = cljs.core.seq(seq__63843_64929);
if(temp__5720__auto___64959){
var seq__63843_64960__$1 = temp__5720__auto___64959;
if(cljs.core.chunked_seq_QMARK_(seq__63843_64960__$1)){
var c__4550__auto___64965 = cljs.core.chunk_first(seq__63843_64960__$1);
var G__64968 = cljs.core.chunk_rest(seq__63843_64960__$1);
var G__64969 = c__4550__auto___64965;
var G__64970 = cljs.core.count(c__4550__auto___64965);
var G__64971 = (0);
seq__63843_64929 = G__64968;
chunk__63844_64930 = G__64969;
count__63845_64931 = G__64970;
i__63846_64932 = G__64971;
continue;
} else {
var vec__63870_64976 = cljs.core.first(seq__63843_64960__$1);
var __64977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63870_64976,(0),null);
var n_64978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63870_64976,(1),null);
fulcro.inspect.client.inspect_network_init(n_64978,app);


var G__64994 = cljs.core.next(seq__63843_64960__$1);
var G__64995 = null;
var G__64996 = (0);
var G__64997 = (0);
seq__63843_64929 = G__64994;
chunk__63844_64930 = G__64995;
count__63845_64931 = G__64996;
i__63846_64932 = G__64997;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.inspect.client.apps_STAR_,cljs.core.assoc,app_uuid,app);

fulcro.inspect.client.update_state_history(app,cljs.core.deref(state_STAR_));

fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.inspect.client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),fulcro.inspect.client.app_id(reconciler),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (state_STAR_,app_uuid,map__63835,map__63835__$1,app,reconciler,networking){
return (function (p1__63827_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__63827_SHARP_);
});})(state_STAR_,app_uuid,map__63835,map__63835__$1,app,reconciler,networking))
,cljs.core.str),cljs.core.keys(networking)),new cljs.core.Keyword("fulcro.inspect.client","initial-state","fulcro.inspect.client/initial-state",1225829482),cljs.core.deref(state_STAR_),new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(cljs.core.deref(state_STAR_))]));

cljs.core.add_watch(state_STAR_,app_uuid,((function (state_STAR_,app_uuid,map__63835,map__63835__$1,app,reconciler,networking){
return (function (p1__63831_SHARP_,p2__63832_SHARP_,p3__63829_SHARP_,p4__63830_SHARP_){
return fulcro.inspect.client.db_update(app,app_uuid,p3__63829_SHARP_,p4__63830_SHARP_);
});})(state_STAR_,app_uuid,map__63835,map__63835__$1,app,reconciler,networking))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,fulcro.inspect.client.app_uuid_key,app_uuid);

return app;
});
fulcro.inspect.client.inspect_tx = (function fulcro$inspect$client$inspect_tx(p__63884,p__63885){
var map__63887 = p__63884;
var map__63887__$1 = (((((!((map__63887 == null))))?(((((map__63887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63887):map__63887);
var env = map__63887__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63887__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var map__63888 = p__63885;
var map__63888__$1 = (((((!((map__63888 == null))))?(((((map__63888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63888):map__63888);
var info = map__63888__$1;
var db_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63888__$1,new cljs.core.Keyword("fulcro.history","db-before","fulcro.history/db-before",650457365));
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63888__$1,new cljs.core.Keyword("fulcro.history","db-after","fulcro.history/db-after",-1774997361));
if(cljs.core.truth_(fulcro.client.primitives.app_root(reconciler))){
var tx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(clojure.set.rename_keys(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([info,cljs.core.select_keys(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"component","component",1555936782)], null))], 0)),new cljs.core.Keyword(null,"component","component",1555936782),((function (map__63887,map__63887__$1,env,reconciler,map__63888,map__63888__$1,info,db_before,db_after){
return (function (p1__63881_SHARP_){
return goog.object.get(fulcro.client.primitives.react_type(p1__63881_SHARP_),"displayName");
});})(map__63887,map__63887__$1,env,reconciler,map__63888,map__63888__$1,info,db_before,db_after))
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

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k63914,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__63946 = k63914;
var G__63946__$1 = (((G__63946 instanceof cljs.core.Keyword))?G__63946.fqn:null);
switch (G__63946__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63914,else__4388__auto__);

}
});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__63952){
var vec__63955 = p__63952;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63955,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63955,(1),null);
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

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63913){
var self__ = this;
var G__63913__$1 = this;
return (new cljs.core.RecordIter((0),G__63913__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63915,other63916){
var self__ = this;
var this63915__$1 = this;
return (((!((other63916 == null)))) && ((this63915__$1.constructor === other63916.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63915__$1.network,other63916.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63915__$1.options,other63916.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63915__$1.__extmap,other63916.__extmap)));
});

fulcro.inspect.client.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.inspect.client.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$send$arity$4 = (function (_,edn,ok,error){
var self__ = this;
var ___$1 = this;
var map__63986 = self__.options;
var map__63986__$1 = (((((!((map__63986 == null))))?(((((map__63986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63986):map__63986);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63986__$1,new cljs.core.Keyword("fulcro.inspect.client","transform-query","fulcro.inspect.client/transform-query",-974573391),((function (map__63986,map__63986__$1,___$1){
return (function (___$2,x){
return x;
});})(map__63986,map__63986__$1,___$1))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63986__$1,new cljs.core.Keyword("fulcro.inspect.client","transform-response","fulcro.inspect.client/transform-response",664733229),((function (map__63986,map__63986__$1,transform_query,___$1){
return (function (___$2,x){
return x;
});})(map__63986,map__63986__$1,transform_query,___$1))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63986__$1,new cljs.core.Keyword("fulcro.inspect.client","transform-error","fulcro.inspect.client/transform-error",-1523058473),((function (map__63986,map__63986__$1,transform_query,transform_response,___$1){
return (function (___$2,x){
return x;
});})(map__63986,map__63986__$1,transform_query,transform_response,___$1))
);
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63986__$1,new cljs.core.Keyword("fulcro.inspect.client","app*","fulcro.inspect.client/app*",389597452));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.client","request-id","fulcro.inspect.client/request-id",-2031123789),req_id,new cljs.core.Keyword("fulcro.inspect.client","app","fulcro.inspect.client/app",-614448539),cljs.core.deref(app_STAR_)], null);
var temp__5718__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5718__auto__)){
var edn_SINGLEQUOTE_ = temp__5718__auto__;
return fulcro.client.network.send(self__.network,edn_SINGLEQUOTE_,((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__63986,map__63986__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1){
return (function (p1__63906_SHARP_){
var G__64002 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__63906_SHARP_) : transform_response.call(null,env,p1__63906_SHARP_));
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(G__64002) : ok.call(null,G__64002));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__63986,map__63986__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1))
,((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__63986,map__63986__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1){
return (function (p1__63907_SHARP_){
var G__64008 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__63907_SHARP_) : transform_error.call(null,env,p1__63907_SHARP_));
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__64008) : error.call(null,G__64008));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__63986,map__63986__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1))
);
} else {
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(null) : ok.call(null,null));
}
});

fulcro.inspect.client.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
try{fulcro.client.network.start(self__.network);
}catch (e64024){if(cljs.core.truth_((function (){var c__4167__auto__ = new cljs.core.Keyword("fulcro.inspect.client","default","fulcro.inspect.client/default",1295274520);
var x__4168__auto__ = e64024;
return (x__4168__auto__ instanceof c__4167__auto__);
})())){
var e_65050 = e64024;
console.log("Error starting sub network",e_65050);
} else {
throw e64024;

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
}catch (e64075){var _ = e64075;
return true;
}});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__63913){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__64096 = cljs.core.keyword_identical_QMARK_;
var expr__64097 = k__4393__auto__;
if(cljs.core.truth_((pred__64096.cljs$core$IFn$_invoke$arity$2 ? pred__64096.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"network","network",2050004697),expr__64097) : pred__64096.call(null,new cljs.core.Keyword(null,"network","network",2050004697),expr__64097)))){
return (new fulcro.inspect.client.TransformNetwork(G__63913,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64096.cljs$core$IFn$_invoke$arity$2 ? pred__64096.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options","options",99638489),expr__64097) : pred__64096.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__64097)))){
return (new fulcro.inspect.client.TransformNetwork(self__.network,G__63913,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.inspect.client.TransformNetwork(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__63913),null));
}
}
});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"network","network",2050004697),self__.network,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null))], null),self__.__extmap));
});

fulcro.inspect.client.TransformNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__63913){
var self__ = this;
var this__4384__auto____$1 = this;
return (new fulcro.inspect.client.TransformNetwork(self__.network,self__.options,G__63913,self__.__extmap,self__.__hash));
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
fulcro.inspect.client.map__GT_TransformNetwork = (function fulcro$inspect$client$map__GT_TransformNetwork(G__63928){
var extmap__4424__auto__ = (function (){var G__64160 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63928,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0));
if(cljs.core.record_QMARK_(G__63928)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64160);
} else {
return G__64160;
}
})();
return (new fulcro.inspect.client.TransformNetwork(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__63928),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__63928),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k64180,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__64199 = k64180;
var G__64199__$1 = (((G__64199 instanceof cljs.core.Keyword))?G__64199.fqn:null);
switch (G__64199__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64180,else__4388__auto__);

}
});

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__64206){
var vec__64210 = p__64206;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64210,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64210,(1),null);
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

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64179){
var self__ = this;
var G__64179__$1 = this;
return (new cljs.core.RecordIter((0),G__64179__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64181,other64182){
var self__ = this;
var this64181__$1 = this;
return (((!((other64182 == null)))) && ((this64181__$1.constructor === other64182.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64181__$1.network,other64182.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64181__$1.options,other64182.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64181__$1.__extmap,other64182.__extmap)));
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

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__64179){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__64253 = cljs.core.keyword_identical_QMARK_;
var expr__64254 = k__4393__auto__;
if(cljs.core.truth_((pred__64253.cljs$core$IFn$_invoke$arity$2 ? pred__64253.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"network","network",2050004697),expr__64254) : pred__64253.call(null,new cljs.core.Keyword(null,"network","network",2050004697),expr__64254)))){
return (new fulcro.inspect.client.TransformNetworkI(G__64179,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64253.cljs$core$IFn$_invoke$arity$2 ? pred__64253.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options","options",99638489),expr__64254) : pred__64253.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__64254)))){
return (new fulcro.inspect.client.TransformNetworkI(self__.network,G__64179,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.inspect.client.TransformNetworkI(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__64179),null));
}
}
});

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"network","network",2050004697),self__.network,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null))], null),self__.__extmap));
});

fulcro.inspect.client.TransformNetworkI.prototype.fulcro$client$network$FulcroRemoteI$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.inspect.client.TransformNetworkI.prototype.fulcro$client$network$FulcroRemoteI$transmit$arity$2 = (function (_,p__64265){
var self__ = this;
var map__64266 = p__64265;
var map__64266__$1 = (((((!((map__64266 == null))))?(((((map__64266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64266):map__64266);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64266__$1,new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957));
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64266__$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64266__$1,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226));
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64266__$1,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355));
var ___$1 = this;
var map__64271 = self__.options;
var map__64271__$1 = (((((!((map__64271 == null))))?(((((map__64271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64271):map__64271);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64271__$1,new cljs.core.Keyword("fulcro.inspect.client","transform-query","fulcro.inspect.client/transform-query",-974573391),((function (map__64271,map__64271__$1,___$1,map__64266,map__64266__$1,edn,ok_handler,error_handler,progress_handler){
return (function (___$2,x){
return x;
});})(map__64271,map__64271__$1,___$1,map__64266,map__64266__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64271__$1,new cljs.core.Keyword("fulcro.inspect.client","transform-response","fulcro.inspect.client/transform-response",664733229),((function (map__64271,map__64271__$1,transform_query,___$1,map__64266,map__64266__$1,edn,ok_handler,error_handler,progress_handler){
return (function (___$2,x){
return x;
});})(map__64271,map__64271__$1,transform_query,___$1,map__64266,map__64266__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64271__$1,new cljs.core.Keyword("fulcro.inspect.client","transform-error","fulcro.inspect.client/transform-error",-1523058473),((function (map__64271,map__64271__$1,transform_query,transform_response,___$1,map__64266,map__64266__$1,edn,ok_handler,error_handler,progress_handler){
return (function (___$2,x){
return x;
});})(map__64271,map__64271__$1,transform_query,transform_response,___$1,map__64266,map__64266__$1,edn,ok_handler,error_handler,progress_handler))
);
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64271__$1,new cljs.core.Keyword("fulcro.inspect.client","app*","fulcro.inspect.client/app*",389597452));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.client","request-id","fulcro.inspect.client/request-id",-2031123789),req_id,new cljs.core.Keyword("fulcro.inspect.client","app","fulcro.inspect.client/app",-614448539),cljs.core.deref(app_STAR_)], null);
var temp__5718__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5718__auto__)){
var edn_SINGLEQUOTE_ = temp__5718__auto__;
return fulcro.client.network.transmit(self__.network,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),edn_SINGLEQUOTE_,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__64271,map__64271__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1,map__64266,map__64266__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__64174_SHARP_){
var G__64287 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__64174_SHARP_) : transform_response.call(null,env,p1__64174_SHARP_));
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(G__64287) : ok_handler.call(null,G__64287));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__64271,map__64271__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1,map__64266,map__64266__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__64271,map__64271__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1,map__64266,map__64266__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__64175_SHARP_){
var G__64290 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__64175_SHARP_) : transform_error.call(null,env,p1__64175_SHARP_));
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__64290) : error_handler.call(null,G__64290));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__64271,map__64271__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1,map__64266,map__64266__$1,edn,ok_handler,error_handler,progress_handler))
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

fulcro.inspect.client.TransformNetworkI.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__64179){
var self__ = this;
var this__4384__auto____$1 = this;
return (new fulcro.inspect.client.TransformNetworkI(self__.network,self__.options,G__64179,self__.__extmap,self__.__hash));
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
fulcro.inspect.client.map__GT_TransformNetworkI = (function fulcro$inspect$client$map__GT_TransformNetworkI(G__64185){
var extmap__4424__auto__ = (function (){var G__64317 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__64185,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0));
if(cljs.core.record_QMARK_(G__64185)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64317);
} else {
return G__64317;
}
})();
return (new fulcro.inspect.client.TransformNetworkI(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__64185),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__64185),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

fulcro.inspect.client.transform_network_i = (function fulcro$inspect$client$transform_network_i(network,options){
return fulcro.inspect.client.__GT_TransformNetworkI(network,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("fulcro.inspect.client","app*","fulcro.inspect.client/app*",389597452),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)));
});
fulcro.inspect.client.inspect_network = (function fulcro$inspect$client$inspect_network(remote,network){
var ts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.client","transform-query","fulcro.inspect.client/transform-query",-974573391),(function (p__64341,edn){
var map__64343 = p__64341;
var map__64343__$1 = (((((!((map__64343 == null))))?(((((map__64343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64343):map__64343);
var request_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64343__$1,new cljs.core.Keyword("fulcro.inspect.client","request-id","fulcro.inspect.client/request-id",-2031123789));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64343__$1,new cljs.core.Keyword("fulcro.inspect.client","app","fulcro.inspect.client/app",-614448539));
var start_65231 = (new Date());
var app_uuid_65232 = fulcro.inspect.client.app_uuid(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app));
fulcro.inspect.client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.client.app_uuid_key,app_uuid_65232], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-start","fulcro.inspect.ui.network/request-start",-1415257884,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.inspect.ui.network","remote","fulcro.inspect.ui.network/remote",-307593223),remote,new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),request_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-started-at","fulcro.inspect.ui.network/request-started-at",1582455117),start_65231,new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn","fulcro.inspect.ui.network/request-edn",-1638784885),edn], null),null,(1),null)))))], null));

return edn;
}),new cljs.core.Keyword("fulcro.inspect.client","transform-response","fulcro.inspect.client/transform-response",664733229),(function (p__64349,response){
var map__64351 = p__64349;
var map__64351__$1 = (((((!((map__64351 == null))))?(((((map__64351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64351):map__64351);
var request_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64351__$1,new cljs.core.Keyword("fulcro.inspect.client","request-id","fulcro.inspect.client/request-id",-2031123789));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64351__$1,new cljs.core.Keyword("fulcro.inspect.client","app","fulcro.inspect.client/app",-614448539));
var finished_65265 = (new Date());
var app_uuid_65266 = fulcro.inspect.client.app_uuid(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app));
fulcro.inspect.client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.client.app_uuid_key,app_uuid_65266], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-finish","fulcro.inspect.ui.network/request-finish",817834789,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),request_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),finished_65265,new cljs.core.Keyword("fulcro.inspect.ui.network","response-edn","fulcro.inspect.ui.network/response-edn",221134354),response], null),null,(1),null)))))], null));

return response;
}),new cljs.core.Keyword("fulcro.inspect.client","transform-error","fulcro.inspect.client/transform-error",-1523058473),(function (p__64360,error){
var map__64362 = p__64360;
var map__64362__$1 = (((((!((map__64362 == null))))?(((((map__64362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64362):map__64362);
var request_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64362__$1,new cljs.core.Keyword("fulcro.inspect.client","request-id","fulcro.inspect.client/request-id",-2031123789));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64362__$1,new cljs.core.Keyword("fulcro.inspect.client","app","fulcro.inspect.client/app",-614448539));
var finished_65273 = (new Date());
var app_uuid_65274 = fulcro.inspect.client.app_uuid(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app));
fulcro.inspect.client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.client.app_uuid_key,app_uuid_65274], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-finish","fulcro.inspect.ui.network/request-finish",817834789,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),request_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),finished_65273,new cljs.core.Keyword("fulcro.inspect.ui.network","error","fulcro.inspect.ui.network/error",36212909),error], null),null,(1),null)))))], null));

return error;
})], null);
if((((!((network == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === network.fulcro$client$network$FulcroNetwork$))))?true:false):false)){
return fulcro.inspect.client.transform_network(network,ts);
} else {
if((((!((network == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === network.fulcro$client$network$FulcroRemoteI$))))?true:false):false)){
return fulcro.inspect.client.transform_network_i(network,cljs.core.update.cljs$core$IFn$_invoke$arity$3(ts,new cljs.core.Keyword("fulcro.inspect.client","transform-response","fulcro.inspect.client/transform-response",664733229),((function (ts){
return (function (tr){
return ((function (ts){
return (function (env,p__64380){
var map__64381 = p__64380;
var map__64381__$1 = (((((!((map__64381 == null))))?(((((map__64381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64381):map__64381);
var response = map__64381__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64381__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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
fulcro.inspect.client.handle_devtool_message = (function fulcro$inspect$client$handle_devtool_message(p__64447){
var map__64450 = p__64447;
var map__64450__$1 = (((((!((map__64450 == null))))?(((((map__64450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64450):map__64450);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64450__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64450__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var G__64454 = type;
var G__64454__$1 = (((G__64454 instanceof cljs.core.Keyword))?G__64454.fqn:null);
switch (G__64454__$1) {
case "fulcro.inspect.client/request-page-apps":
var seq__64458 = cljs.core.seq(cljs.core.vals(cljs.core.deref(fulcro.inspect.client.apps_STAR_)));
var chunk__64459 = null;
var count__64460 = (0);
var i__64461 = (0);
while(true){
if((i__64461 < count__64460)){
var map__64488 = chunk__64459.cljs$core$IIndexed$_nth$arity$2(null,i__64461);
var map__64488__$1 = (((((!((map__64488 == null))))?(((((map__64488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64488):map__64488);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64488__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64488__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.inspect.client.app_uuid_key,fulcro.inspect.client.app_uuid(reconciler),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),fulcro.inspect.client.app_id(reconciler),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (seq__64458,chunk__64459,count__64460,i__64461,map__64488,map__64488__$1,reconciler,networking,G__64454,G__64454__$1,map__64450,map__64450__$1,type,data){
return (function (p1__64404_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__64404_SHARP_);
});})(seq__64458,chunk__64459,count__64460,i__64461,map__64488,map__64488__$1,reconciler,networking,G__64454,G__64454__$1,map__64450,map__64450__$1,type,data))
,cljs.core.str),cljs.core.keys(networking)),new cljs.core.Keyword("fulcro.inspect.client","initial-state","fulcro.inspect.client/initial-state",1225829482),cljs.core.deref(fulcro.client.primitives.app_state(reconciler)),new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(cljs.core.deref(fulcro.client.primitives.app_state(reconciler)))]));


var G__65297 = seq__64458;
var G__65298 = chunk__64459;
var G__65299 = count__64460;
var G__65300 = (i__64461 + (1));
seq__64458 = G__65297;
chunk__64459 = G__65298;
count__64460 = G__65299;
i__64461 = G__65300;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__64458);
if(temp__5720__auto__){
var seq__64458__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64458__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__64458__$1);
var G__65302 = cljs.core.chunk_rest(seq__64458__$1);
var G__65303 = c__4550__auto__;
var G__65304 = cljs.core.count(c__4550__auto__);
var G__65305 = (0);
seq__64458 = G__65302;
chunk__64459 = G__65303;
count__64460 = G__65304;
i__64461 = G__65305;
continue;
} else {
var map__64501 = cljs.core.first(seq__64458__$1);
var map__64501__$1 = (((((!((map__64501 == null))))?(((((map__64501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64501):map__64501);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64501__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64501__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.inspect.client.app_uuid_key,fulcro.inspect.client.app_uuid(reconciler),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),fulcro.inspect.client.app_id(reconciler),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (seq__64458,chunk__64459,count__64460,i__64461,map__64501,map__64501__$1,reconciler,networking,seq__64458__$1,temp__5720__auto__,G__64454,G__64454__$1,map__64450,map__64450__$1,type,data){
return (function (p1__64404_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__64404_SHARP_);
});})(seq__64458,chunk__64459,count__64460,i__64461,map__64501,map__64501__$1,reconciler,networking,seq__64458__$1,temp__5720__auto__,G__64454,G__64454__$1,map__64450,map__64450__$1,type,data))
,cljs.core.str),cljs.core.keys(networking)),new cljs.core.Keyword("fulcro.inspect.client","initial-state","fulcro.inspect.client/initial-state",1225829482),cljs.core.deref(fulcro.client.primitives.app_state(reconciler)),new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(cljs.core.deref(fulcro.client.primitives.app_state(reconciler)))]));


var G__65314 = cljs.core.next(seq__64458__$1);
var G__65315 = null;
var G__65316 = (0);
var G__65317 = (0);
seq__64458 = G__65314;
chunk__64459 = G__65315;
count__64460 = G__65316;
i__64461 = G__65317;
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
var map__64509 = data;
var map__64509__$1 = (((((!((map__64509 == null))))?(((((map__64509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64509):map__64509);
var target_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64509__$1,new cljs.core.Keyword(null,"target-state","target-state",-682429993));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64509__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fulcro.inspect.client.apps_STAR_),app_uuid);
if(cljs.core.truth_(temp__5718__auto__)){
var map__64515 = temp__5718__auto__;
var map__64515__$1 = (((((!((map__64515 == null))))?(((((map__64515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64515):map__64515);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64515__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
if(cljs.core.truth_(target_state)){
var target_state_65320__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target_state,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491),app_uuid);
var G__64521_65323 = reconciler;
var G__64521_65324__$1 = (((G__64521_65323 == null))?null:fulcro.client.primitives.app_state(G__64521_65323));
if((G__64521_65324__$1 == null)){
} else {
cljs.core.reset_BANG_(G__64521_65324__$1,target_state_65320__$1);
}
} else {
}

return setTimeout(((function (map__64515,map__64515__$1,reconciler,temp__5718__auto__,map__64509,map__64509__$1,target_state,app_uuid,G__64454,G__64454__$1,map__64450,map__64450__$1,type,data){
return (function (){
return fulcro.client.primitives.force_root_render_BANG_(reconciler);
});})(map__64515,map__64515__$1,reconciler,temp__5718__auto__,map__64509,map__64509__$1,target_state,app_uuid,G__64454,G__64454__$1,map__64450,map__64450__$1,type,data))
,(10));
} else {
return console.log("Reset app on invalid uuid",app_uuid);
}

break;
case "fulcro.inspect.client/transact":
var map__64523 = data;
var map__64523__$1 = (((((!((map__64523 == null))))?(((((map__64523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64523):map__64523);
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64523__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var tx_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64523__$1,new cljs.core.Keyword(null,"tx-ref","tx-ref",-216104949));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64523__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fulcro.inspect.client.apps_STAR_),app_uuid);
if(cljs.core.truth_(temp__5718__auto__)){
var map__64533 = temp__5718__auto__;
var map__64533__$1 = (((((!((map__64533 == null))))?(((((map__64533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64533):map__64533);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64533__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
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
var map__64539 = data;
var map__64539__$1 = (((((!((map__64539 == null))))?(((((map__64539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64539):map__64539);
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64539__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
return fulcro.inspect.ui.element_picker.pick_element(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491),app_uuid,new cljs.core.Keyword("fulcro.inspect.ui.element-picker","on-pick","fulcro.inspect.ui.element-picker/on-pick",-1116265320),((function (map__64539,map__64539__$1,app_uuid,G__64454,G__64454__$1,map__64450,map__64450__$1,type,data){
return (function (comp){
if(cljs.core.truth_(comp)){
var details = fulcro.inspect.ui.element_picker.inspect_component(comp);
return fulcro.inspect.client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.element","panel-id","fulcro.inspect.ui.element/panel-id",714724520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491),app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.element","set-element","fulcro.inspect.ui.element/set-element",1898236728,null),null,(1),null)),(new cljs.core.List(null,details,null,(1),null)))))], null));
} else {
return fulcro.inspect.client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.element","panel-id","fulcro.inspect.ui.element/panel-id",714724520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491),app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.mutations","set-props","fulcro.client.mutations/set-props",-1739323709,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("ui","picking?","ui/picking?",969621556),null,(1),null)),(new cljs.core.List(null,false,null,(1),null)))))),null,(1),null)))))], null));
}
});})(map__64539,map__64539__$1,app_uuid,G__64454,G__64454__$1,map__64450,map__64450__$1,type,data))
], null));

break;
case "fulcro.inspect.client/show-dom-preview":
var map__64593 = data;
var map__64593__$1 = (((((!((map__64593 == null))))?(((((map__64593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64593):map__64593);
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64593__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var app = (function (){var G__64598 = cljs.core.deref(fulcro.inspect.client.apps_STAR_);
if((G__64598 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__64598,app_uuid);
}
})();
var app_state = fulcro.inspect.client.db_from_history(app,new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756).cljs$core$IFn$_invoke$arity$1(data));
var reconciler = (function (){var G__64601 = cljs.core.deref(fulcro.inspect.client.apps_STAR_);
var G__64601__$1 = (((G__64601 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__64601,app_uuid));
if((G__64601__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__64601__$1);
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
var map__64615 = data;
var map__64615__$1 = (((((!((map__64615 == null))))?(((((map__64615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64615):map__64615);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64615__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64615__$1,new cljs.core.Keyword("fulcro.inspect.client","remote","fulcro.inspect.client/remote",-306964848));
var msg_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64615__$1,new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-id","fulcro.inspect.ui-parser/msg-id",-467621998));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64615__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fulcro.inspect.client.apps_STAR_),app_uuid);
if(cljs.core.truth_(temp__5720__auto__)){
var app = temp__5720__auto__;
var remote__$1 = (function (){var G__64623 = new cljs.core.Keyword(null,"networking","networking",586110628).cljs$core$IFn$_invoke$arity$1(app);
return (remote.cljs$core$IFn$_invoke$arity$1 ? remote.cljs$core$IFn$_invoke$arity$1(G__64623) : remote.call(null,G__64623));
})();
var response_handler = ((function (remote__$1,app,temp__5720__auto__,map__64615,map__64615__$1,query,remote,msg_id,app_uuid,G__64454,G__64454__$1,map__64450,map__64450__$1,type,data){
return (function (res){
return fulcro.inspect.client.post_message(new cljs.core.Keyword("fulcro.inspect.client","message-response","fulcro.inspect.client/message-response",587955053),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-id","fulcro.inspect.ui-parser/msg-id",-467621998),msg_id,new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-response","fulcro.inspect.ui-parser/msg-response",1721295840),res], null));
});})(remote__$1,app,temp__5720__auto__,map__64615,map__64615__$1,query,remote,msg_id,app_uuid,G__64454,G__64454__$1,map__64450,map__64450__$1,type,data))
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
var map__64638 = data;
var map__64638__$1 = (((((!((map__64638 == null))))?(((((map__64638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64638):map__64638);
var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64638__$1,new cljs.core.Keyword(null,"log","log",-1595516004));
var log_js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64638__$1,new cljs.core.Keyword(null,"log-js","log-js",-1565471667));
var warn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64638__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64638__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
var this__56082__auto__ = this;
React.Component.apply(this__56082__auto__,arguments);

if((!((this__56082__auto__.initLocalState == null)))){
this__56082__auto__.state = this__56082__auto__.initLocalState();
} else {
this__56082__auto__.state = ({});
}

return this__56082__auto__;
});

goog.object.extend(fulcro.inspect.client.ClientRoot.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("fulcro.inspect.client","ClientRoot","fulcro.inspect.client/ClientRoot",-683834442),fulcro.inspect.client.ClientRoot);

var x64667_65365 = fulcro.inspect.client.ClientRoot.prototype;
x64667_65365.render = ((function (x64667_65365){
return (function (){
var this__55000__auto__ = this;
var this$ = this__55000__auto__;
var _STAR_reconciler_STAR__orig_val__64673 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__64674 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__64675 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__64676 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__64677 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__64678 = fulcro.client.primitives.get_reconciler(this__55000__auto__);
var _STAR_depth_STAR__temp_val__64679 = (fulcro.client.primitives.depth(this__55000__auto__) + (1));
var _STAR_shared_STAR__temp_val__64680 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__55000__auto__);
var _STAR_instrument_STAR__temp_val__64681 = fulcro.client.primitives.instrument(this__55000__auto__);
var _STAR_parent_STAR__temp_val__64682 = this__55000__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__64678;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__64679;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__64680;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__64681;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__64682;

try{var map__64688 = fulcro.client.primitives.props(this$);
var map__64688__$1 = (((((!((map__64688 == null))))?(((((map__64688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64688):map__64688);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64688__$1,new cljs.core.Keyword(null,"history","history",-247395220));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro_css.css.style_element(this$),(fulcro.inspect.ui.dom_history_viewer.ui_dom_history_view.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.ui.dom_history_viewer.ui_dom_history_view.cljs$core$IFn$_invoke$arity$1(history) : fulcro.inspect.ui.dom_history_viewer.ui_dom_history_view.call(null,history))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__64677;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__64676;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__64675;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__64674;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__64673;
}});})(x64667_65365))
;


fulcro.inspect.client.ClientRoot.prototype.constructor = fulcro.inspect.client.ClientRoot;

fulcro.inspect.client.ClientRoot.prototype.constructor.displayName = "fulcro.inspect.client/ClientRoot";

fulcro.inspect.client.ClientRoot.prototype.fulcro$isComponent = true;

var x64698_65370 = fulcro.inspect.client.ClientRoot;
x64698_65370.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x64698_65370.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x64698_65370){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x64698_65370))
;

x64698_65370.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x64698_65370){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.element_picker.MarkerCSS,fulcro.inspect.ui.dom_history_viewer.DOMHistoryView], null);
});})(x64698_65370))
;

x64698_65370.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x64698_65370.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x64698_65370){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),fulcro.inspect.ui.dom_history_viewer.DOMHistoryView], null),params);
});})(x64698_65370))
;

x64698_65370.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x64698_65370.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x64698_65370){
return (function (this$,p__64716){
var map__64718 = p__64716;
var map__64718__$1 = (((((!((map__64718 == null))))?(((((map__64718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64718):map__64718);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64718__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.client","root","fulcro.inspect.client/root",-1445929181),"main"], null);
});})(x64698_65370))
;

x64698_65370.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x64698_65370.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x64698_65370){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.dom_history_viewer.DOMHistoryView)], null)], null);
});})(x64698_65370))
;


var x64729_65375 = fulcro.inspect.client.ClientRoot.prototype;
x64729_65375.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x64729_65375.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x64729_65375){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x64729_65375))
;

x64729_65375.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x64729_65375){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.element_picker.MarkerCSS,fulcro.inspect.ui.dom_history_viewer.DOMHistoryView], null);
});})(x64729_65375))
;

x64729_65375.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x64729_65375.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x64729_65375){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),fulcro.inspect.ui.dom_history_viewer.DOMHistoryView], null),params);
});})(x64729_65375))
;

x64729_65375.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x64729_65375.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x64729_65375){
return (function (this$,p__64744){
var map__64746 = p__64744;
var map__64746__$1 = (((((!((map__64746 == null))))?(((((map__64746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64746):map__64746);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64746__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.client","root","fulcro.inspect.client/root",-1445929181),"main"], null);
});})(x64729_65375))
;

x64729_65375.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x64729_65375.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x64729_65375){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.dom_history_viewer.DOMHistoryView)], null)], null);
});})(x64729_65375))
;


fulcro.inspect.client.ClientRoot.cljs$lang$type = true;

fulcro.inspect.client.ClientRoot.cljs$lang$ctorStr = "fulcro.inspect.client/ClientRoot";

fulcro.inspect.client.ClientRoot.cljs$lang$ctorPrWriter = (function (this__56085__auto__,writer__56086__auto__,opt__56087__auto__){
return cljs.core._write(writer__56086__auto__,"fulcro.inspect.client/ClientRoot");
});
fulcro.inspect.client.install = (function fulcro$inspect$client$install(_){
document.documentElement.setAttribute("__fulcro-inspect-remote-installed__",true);

if(cljs.core.truth_(cljs.core.deref(fulcro.inspect.client.started_QMARK__STAR_))){
return null;
} else {
console.log("Installing Fulcro Inspect",cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_(fulcro.inspect.client.started_QMARK__STAR_,true);

var app_65380 = fulcro.client.new_fulcro_client();
var node_65381 = document.createElement("div");
document.body.appendChild(node_65381);

cljs.core.reset_BANG_(fulcro.inspect.client.tools_app_STAR_,fulcro.client.mount(app_65380,fulcro.inspect.client.ClientRoot,node_65381));

fulcro.client.register_tool(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client","tool-id","fulcro.client/tool-id",92631184),new cljs.core.Keyword("fulcro.inspect.client","fulcro-inspect-remote","fulcro.inspect.client/fulcro-inspect-remote",309494381),new cljs.core.Keyword("fulcro.client","app-started","fulcro.client/app-started",1807137305),fulcro.inspect.client.inspect_app,new cljs.core.Keyword("fulcro.client","network-wrapper","fulcro.client/network-wrapper",-982819985),(function (networks){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__64766){
var vec__64767 = p__64766;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64767,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64767,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fulcro.inspect.client.inspect_network(k,v)], null);
})),networks);
}),new cljs.core.Keyword("fulcro.client","tx-listen","fulcro.client/tx-listen",267162069),fulcro.inspect.client.inspect_tx], null));

return fulcro.inspect.client.listen_local_messages();
}
});

//# sourceMappingURL=fulcro.inspect.client.js.map
