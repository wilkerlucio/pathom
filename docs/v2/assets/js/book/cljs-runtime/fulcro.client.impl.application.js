goog.provide('fulcro.client.impl.application');
goog.require('cljs.core');
goog.require('fulcro.logging');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.mutations');
goog.require('fulcro.history');
goog.require('clojure.set');
goog.require('fulcro.client.impl.data_fetch');
goog.require('fulcro.util');
goog.require('fulcro.client.util');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('fulcro.client.network');
goog.require('fulcro.client.impl.protocols');
/**
 * This internal function is responsible for generating and returning a function that can accomplish calling the fallbacks that
 *   appear in an incoming transaction, which is in turn used by the error-handling logic of the plumbing.
 */
fulcro.client.impl.application.fallback_handler = (function fulcro$client$impl$application$fallback_handler(p__58640,query){
var map__58641 = p__58640;
var map__58641__$1 = (((((!((map__58641 == null))))?(((((map__58641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58641):map__58641);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58641__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return ((function (map__58641,map__58641__$1,reconciler){
return (function (error){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.client.primitives.app_state(reconciler),cljs.core.assoc,new cljs.core.Keyword("fulcro","server-error","fulcro/server-error",-1254037316),error);

var temp__5718__auto__ = fulcro.client.primitives.fallback_tx(query,error);
if(cljs.core.truth_(temp__5718__auto__)){
var q = temp__5718__auto__;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),25], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Transaction failed. Running fallback.",q], 0));
}catch (e58644){if((e58644 instanceof Error)){
var e__48124__auto___59496 = e58644;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),25], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___59496], 0));
} else {
throw e58644;

}
}
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,q);
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),27], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Fallback triggered, but no fallbacks were defined."], 0));
}catch (e58646){if((e58646 instanceof Error)){
var e__48124__auto__ = e58646;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),27], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto__], 0));
} else {
throw e58646;

}
}}
});
;})(map__58641,map__58641__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
fulcro.client.impl.application._enqueue = (function fulcro$client$impl$application$_enqueue(reconciler,remote,q,v){
fulcro.client.primitives.add_pending_request(reconciler,remote,v);

var c__44617__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto__){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto__){
return (function (state_58654){
var state_val_58655 = (state_58654[(1)]);
if((state_val_58655 === (1))){
var state_58654__$1 = state_58654;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58654__$1,(2),q,v);
} else {
if((state_val_58655 === (2))){
var inst_58652 = (state_58654[(2)]);
var state_58654__$1 = state_58654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58654__$1,inst_58652);
} else {
return null;
}
}
});})(c__44617__auto__))
;
return ((function (switch__44304__auto__,c__44617__auto__){
return (function() {
var fulcro$client$impl$application$_enqueue_$_state_machine__44305__auto__ = null;
var fulcro$client$impl$application$_enqueue_$_state_machine__44305__auto____0 = (function (){
var statearr_58658 = [null,null,null,null,null,null,null];
(statearr_58658[(0)] = fulcro$client$impl$application$_enqueue_$_state_machine__44305__auto__);

(statearr_58658[(1)] = (1));

return statearr_58658;
});
var fulcro$client$impl$application$_enqueue_$_state_machine__44305__auto____1 = (function (state_58654){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_58654);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e58660){if((e58660 instanceof Object)){
var ex__44308__auto__ = e58660;
var statearr_58661_59502 = state_58654;
(statearr_58661_59502[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58660;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59504 = state_58654;
state_58654 = G__59504;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
fulcro$client$impl$application$_enqueue_$_state_machine__44305__auto__ = function(state_58654){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$_enqueue_$_state_machine__44305__auto____0.call(this);
case 1:
return fulcro$client$impl$application$_enqueue_$_state_machine__44305__auto____1.call(this,state_58654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$impl$application$_enqueue_$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$_enqueue_$_state_machine__44305__auto____0;
fulcro$client$impl$application$_enqueue_$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$_enqueue_$_state_machine__44305__auto____1;
return fulcro$client$impl$application$_enqueue_$_state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto__))
})();
var state__44619__auto__ = (function (){var statearr_58663 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_58663[(6)] = c__44617__auto__);

return statearr_58663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto__))
);

return c__44617__auto__;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("fulcro.client.impl.application","-enqueue","fulcro.client.impl.application/-enqueue",-1535560443,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"any?","any?",-1959531460),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"any?","any?",-1959531460),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"payload","payload",-383036092)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any?","any?",-1959531460),cljs.core.keyword_QMARK_,cljs.core.any_QMARK_,new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any?","any?",-1959531460),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"any?","any?",-1959531460),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * Do a properly-plumbed network send. This function recursively strips ui attributes from the tx and pushes the tx over
 *   the network. It installs the given on-load and on-error handlers to deal with the network response. DEPRECATED: If
 *   you're doing something really low-level with networking, use send-with-history-tracking.
 */
fulcro.client.impl.application.real_send = (function fulcro$client$impl$application$real_send(var_args){
var G__58679 = arguments.length;
switch (G__58679) {
case 2:
return fulcro.client.impl.application.real_send.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return fulcro.client.impl.application.real_send.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.application.real_send.cljs$core$IFn$_invoke$arity$2 = (function (net,p__58680){
var map__58681 = p__58680;
var map__58681__$1 = (((((!((map__58681 == null))))?(((((map__58681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58681):map__58681);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var on_done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword(null,"on-done","on-done",-699252077));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819));
var progress_tx = ((function (map__58681,map__58681__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (p1__58675_SHARP_){
return fulcro.client.mutations.progressive_update_transaction(tx,p1__58675_SHARP_);
});})(map__58681,map__58681__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
;
var tx__$1 = fulcro.client.primitives.strip_ui(tx);
if((((!((net == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === net.fulcro$client$network$ProgressiveTransfer$))))?true:false):false)){
return fulcro.client.network.updating_send(net,tx__$1,on_done,on_error,on_load);
} else {
if((((!((net == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === net.fulcro$client$network$FulcroNetwork$))))?true:false):false)){
return fulcro.client.network.send(net,tx__$1,on_done,on_error);
} else {
if((((!((net == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === net.fulcro$client$network$FulcroRemoteI$))))?true:false):false)){
var on_done__$1 = ((function (progress_tx,tx__$1,map__58681,map__58681__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (p__58698){
var map__58699 = p__58698;
var map__58699__$1 = (((((!((map__58699 == null))))?(((((map__58699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58699):map__58699);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58699__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var transaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58699__$1,new cljs.core.Keyword(null,"transaction","transaction",1777321997));
return (on_done.cljs$core$IFn$_invoke$arity$2 ? on_done.cljs$core$IFn$_invoke$arity$2(body,transaction) : on_done.call(null,body,transaction));
});})(progress_tx,tx__$1,map__58681,map__58681__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
;
var on_error__$1 = ((function (on_done__$1,progress_tx,tx__$1,map__58681,map__58681__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (p__58709){
var map__58710 = p__58709;
var map__58710__$1 = (((((!((map__58710 == null))))?(((((map__58710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58710):map__58710);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58710__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(body) : on_error.call(null,body));
});})(on_done__$1,progress_tx,tx__$1,map__58681,map__58681__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
;
var on_load__$1 = ((function (on_done__$1,on_error__$1,progress_tx,tx__$1,map__58681,map__58681__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (progress){
if(cljs.core.truth_(reconciler)){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,progress_tx(progress));
} else {
return null;
}
});})(on_done__$1,on_error__$1,progress_tx,tx__$1,map__58681,map__58681__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
;
return fulcro.client.network.transmit(net,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),tx__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267),abort_id,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),on_done__$1,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226),on_error__$1,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),on_load__$1], null));
} else {
return null;
}
}
}
});

fulcro.client.impl.application.real_send.cljs$core$IFn$_invoke$arity$5 = (function (net,tx,on_done,on_error,on_load){
return fulcro.client.impl.application.real_send.cljs$core$IFn$_invoke$arity$2(net,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tx","tx",466630418),tx,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_done,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error,new cljs.core.Keyword(null,"on-load","on-load",1415151594),on_load], null));
});

fulcro.client.impl.application.real_send.cljs$lang$maxFixedArity = 5;

/**
 * Does a real send but includes history activity tracking to prevent the gc of history that is related to active
 *   network requests. If you're doing something really low level in the networking, you want this over real-send.
 */
fulcro.client.impl.application.send_with_history_tracking = (function fulcro$client$impl$application$send_with_history_tracking(var_args){
var G__58724 = arguments.length;
switch (G__58724) {
case 2:
return fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 6:
return fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2 = (function (net,p__58732){
var map__58733 = p__58732;
var map__58733__$1 = (((((!((map__58733 == null))))?(((((map__58733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58733):map__58733);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58733__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58733__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58733__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var on_done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58733__$1,new cljs.core.Keyword(null,"on-done","on-done",-699252077));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58733__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58733__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var map__58737 = payload;
var map__58737__$1 = (((((!((map__58737 == null))))?(((((map__58737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58737):map__58737);
var history_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58737__$1,new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564));
var tx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58737__$1,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58737__$1,new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012));
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58737__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var uuid = fulcro.util.unique_key();
var network_activity = fulcro.client.primitives.get_network_activity(reconciler);
var with_network_activity_tracking = ((function (map__58737,map__58737__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__58733,map__58733__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (handler){
return ((function (map__58737,map__58737__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__58733,map__58733__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (resp,items_or_tx){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(network_activity,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remote,new cljs.core.Keyword(null,"active-requests","active-requests",1354177961)], null),((function (map__58737,map__58737__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__58733,map__58733__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (p1__58722_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__58722_SHARP_,uuid);
});})(map__58737,map__58737__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__58733,map__58733__$1,reconciler,payload,tx,on_done,on_error,on_load))
);

setTimeout(((function (map__58737,map__58737__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__58733,map__58733__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"active-requests","active-requests",1354177961).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(network_activity),remote))),(0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.client.primitives.app_state(reconciler),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","status","fulcro.client.network/status",570358457),remote], null),new cljs.core.Keyword(null,"idle","idle",-2007156861));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(network_activity,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remote,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"idle","idle",-2007156861));

return fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","status","fulcro.client.network/status",570358457)], null));
} else {
return null;
}
});})(map__58737,map__58737__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__58733,map__58733__$1,reconciler,payload,tx,on_done,on_error,on_load))
,(0));

return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(resp,items_or_tx) : handler.call(null,resp,items_or_tx));
});
;})(map__58737,map__58737__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__58733,map__58733__$1,reconciler,payload,tx,on_done,on_error,on_load))
});})(map__58737,map__58737__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__58733,map__58733__$1,reconciler,payload,tx,on_done,on_error,on_load))
;
var with_history_recording = ((function (map__58737,map__58737__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,with_network_activity_tracking,map__58733,map__58733__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (handler){
return ((function (map__58737,map__58737__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,with_network_activity_tracking,map__58733,map__58733__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (resp,items_or_tx){
if(cljs.core.truth_((function (){var and__4120__auto__ = history_atom;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = remote;
if(cljs.core.truth_(and__4120__auto____$1)){
return tx_time;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(history_atom,fulcro.history.remote_activity_finished,remote,tx_time);
} else {
}

return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(resp,items_or_tx) : handler.call(null,resp,items_or_tx));
});
;})(map__58737,map__58737__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,with_network_activity_tracking,map__58733,map__58733__$1,reconciler,payload,tx,on_done,on_error,on_load))
});})(map__58737,map__58737__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,with_network_activity_tracking,map__58733,map__58733__$1,reconciler,payload,tx,on_done,on_error,on_load))
;
var on_done__$1 = with_network_activity_tracking(with_history_recording(on_done));
var on_error__$1 = with_network_activity_tracking(with_history_recording(on_error));
if(cljs.core.truth_((function (){var and__4120__auto__ = history_atom;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = tx_time;
if(cljs.core.truth_(and__4120__auto____$1)){
return remote;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(history_atom,fulcro.history.remote_activity_started,remote,tx_time);
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),89], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Payload had no history details."], 0));
}catch (e58748){if((e58748 instanceof Error)){
var e__48124__auto___59594 = e58748;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),89], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___59594], 0));
} else {
throw e58748;

}
}}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(network_activity,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remote,new cljs.core.Keyword(null,"active-requests","active-requests",1354177961)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([uuid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758).cljs$core$IFn$_invoke$arity$1(payload),new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267).cljs$core$IFn$_invoke$arity$1(payload)], null)], 0));

return fulcro.client.impl.application.real_send.cljs$core$IFn$_invoke$arity$2(net,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),tx,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_done__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594),on_load,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id], null));
});

fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$6 = (function (payload,net,tx,on_done,on_error,on_load){
return fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(net,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload,new cljs.core.Keyword(null,"tx","tx",466630418),tx,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_done,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error,new cljs.core.Keyword(null,"on-load","on-load",1415151594),on_load], null));
});

fulcro.client.impl.application.send_with_history_tracking.cljs$lang$maxFixedArity = 6;

/**
 * Split a tx that contains mutations.
 * 
 * Examples:
 * [(f) (g)] => [[(f) (g)]]
 * [(f) (g) (f) (k)] => [[(f) (g)] [(f) (k)]]
 * [(f) (g) (f) (k) (g)] => [[(f) (g)] [(f) (k) (g)]]
 * 
 * This function splits any mutation that uses the same dispatch symbol more than once (since returns from server go
 * into a map, and that is the only way to get return values from both), and also when the mutations do not share abort
 * IDs (so that mutations do not get grouped into a transaction that could cause them to get cancelled incorrectly).
 * 
 * Returns a sequence that contains one or more transactions.
 */
fulcro.client.impl.application.split_mutations = (function fulcro$client$impl$application$split_mutations(tx){
if((!(((cljs.core.vector_QMARK_(tx)) && (cljs.core.every_QMARK_((function (t){
return ((fulcro.util.mutation_join_QMARK_(t)) || (((cljs.core.list_QMARK_(t)) && ((cljs.core.first(t) instanceof cljs.core.Symbol)))));
}),tx)))))){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),112], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INTERNAL ERROR: split-mutations was asked to split a tx that contained things other than mutations.",tx], 0));
}catch (e58759){if((e58759 instanceof Error)){
var e__48124__auto___59599 = e58759;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),112], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___59599], 0));
} else {
throw e58759;

}
}
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx], null);
} else {
if(cljs.core.empty_QMARK_(tx)){
return cljs.core.PersistentVector.EMPTY;
} else {
var dispatch_symbols = (function (tx__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_)),(function (){var G__58763 = tx__$1;
var G__58763__$1 = (((G__58763 == null))?null:fulcro.client.primitives.query__GT_ast(G__58763));
if((G__58763__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__58763__$1);
}
})());
});
var compatible_abort_QMARK_ = ((function (dispatch_symbols){
return (function (tx1,tx2){
var a1 = fulcro.client.mutations.abort_ids(tx1);
var a2 = fulcro.client.mutations.abort_ids(tx2);
return ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(a1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a1,a2)))) || (((cljs.core.empty_QMARK_(a1)) && (cljs.core.empty_QMARK_(a2)))));
});})(dispatch_symbols))
;
var can_be_included_QMARK_ = ((function (dispatch_symbols,compatible_abort_QMARK_){
return (function (tx__$1,expr){
return ((cljs.core.empty_QMARK_(tx__$1)) || (((compatible_abort_QMARK_(tx__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr], null))) && (cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(dispatch_symbols(tx__$1),dispatch_symbols(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr], null))))))));
});})(dispatch_symbols,compatible_abort_QMARK_))
;
var map__58760 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (dispatch_symbols,compatible_abort_QMARK_,can_be_included_QMARK_){
return (function (p__58767,expr){
var map__58768 = p__58767;
var map__58768__$1 = (((((!((map__58768 == null))))?(((((map__58768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58768):map__58768);
var acc = map__58768__$1;
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58768__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
if(can_be_included_QMARK_(current,expr)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.conj,expr);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"transactions","transactions",-1425846118),cljs.core.conj,current),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr], null));
}
});})(dispatch_symbols,compatible_abort_QMARK_,can_be_included_QMARK_))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transactions","transactions",-1425846118),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.PersistentVector.EMPTY], null),tx);
var map__58760__$1 = (((((!((map__58760 == null))))?(((((map__58760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58760):map__58760);
var transactions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58760__$1,new cljs.core.Keyword(null,"transactions","transactions",-1425846118));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58760__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
if(cljs.core.empty_QMARK_(current)){
return transactions;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(transactions,current);
}
}
}
});
/**
 * Splits out the (remote) mutations and fallbacks in a transaction, creates an error handler that can
 * trigger fallbacks, and enqueues the remote mutations on the network queue. If duplicate mutation names
 * appear, then they will be separated into separate network requests.
 * 
 * NOTE: If the mutation in the tx has duplicates, then the same fallback will be used for the
 * resulting split tx. See `split-mutations` (which is used by this function to split dupes out of txes).
 */
fulcro.client.impl.application.enqueue_mutations = (function fulcro$client$impl$application$enqueue_mutations(p__58773,remote_tx_map,cb){
var map__58774 = p__58773;
var map__58774__$1 = (((((!((map__58774 == null))))?(((((map__58774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58774):map__58774);
var app = map__58774__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58774__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58774__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var history = fulcro.client.primitives.get_history(reconciler);
var seq__58783 = cljs.core.seq(cljs.core.keys(remote_tx_map));
var chunk__58784 = null;
var count__58785 = (0);
var i__58786 = (0);
while(true){
if((i__58786 < count__58785)){
var remote = chunk__58784.cljs$core$IIndexed$_nth$arity$2(null,i__58786);
var queue_59628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_59629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var refresh_set_59630 = (function (){var or__4131__auto__ = (function (){var G__58832 = full_remote_transaction_59629;
var G__58832__$1 = (((G__58832 == null))?null:cljs.core.meta(G__58832));
var G__58832__$2 = (((G__58832__$1 == null))?null:new cljs.core.Keyword("fulcro.client.primitives","refresh","fulcro.client.primitives/refresh",481513561).cljs$core$IFn$_invoke$arity$1(G__58832__$1));
if((G__58832__$2 == null)){
return null;
} else {
return cljs.core.vec(G__58832__$2);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var tx_time_59631 = (function (){var G__58833 = full_remote_transaction_59629;
var G__58833__$1 = (((G__58833 == null))?null:cljs.core.meta(G__58833));
if((G__58833__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456).cljs$core$IFn$_invoke$arity$1(G__58833__$1);
}
})();
var fallback_59632 = fulcro.client.impl.application.fallback_handler(app,full_remote_transaction_59629);
var desired_remote_mutations_59633 = fulcro.client.primitives.remove_loads_and_fallbacks(full_remote_transaction_59629);
var tx_list_59634 = fulcro.client.impl.application.split_mutations(desired_remote_mutations_59633);
var has_mutations_QMARK__59635 = ((function (seq__58783,chunk__58784,count__58785,i__58786,queue_59628,full_remote_transaction_59629,refresh_set_59630,tx_time_59631,fallback_59632,desired_remote_mutations_59633,tx_list_59634,remote,history,map__58774,map__58774__$1,app,reconciler,send_queues){
return (function (tx){
return (cljs.core.count(tx) > (0));
});})(seq__58783,chunk__58784,count__58785,i__58786,queue_59628,full_remote_transaction_59629,refresh_set_59630,tx_time_59631,fallback_59632,desired_remote_mutations_59633,tx_list_59634,remote,history,map__58774,map__58774__$1,app,reconciler,send_queues))
;
var payload_59636 = ((function (seq__58783,chunk__58784,count__58785,i__58786,queue_59628,full_remote_transaction_59629,refresh_set_59630,tx_time_59631,fallback_59632,desired_remote_mutations_59633,tx_list_59634,has_mutations_QMARK__59635,remote,history,map__58774,map__58774__$1,app,reconciler,send_queues){
return (function (tx){
var abort_id = (function (){var G__58835 = tx;
var G__58835__$1 = (((G__58835 == null))?null:fulcro.client.mutations.abort_ids(G__58835));
if((G__58835__$1 == null)){
return null;
} else {
return cljs.core.first(G__58835__$1);
}
})();
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),tx,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456),tx_time_59631,new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564),history,new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012),remote,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267),abort_id,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603),((function (seq__58783,chunk__58784,count__58785,i__58786,abort_id,queue_59628,full_remote_transaction_59629,refresh_set_59630,tx_time_59631,fallback_59632,desired_remote_mutations_59633,tx_list_59634,has_mutations_QMARK__59635,remote,history,map__58774,map__58774__$1,app,reconciler,send_queues){
return (function (result,mtx){
var G__58837 = result;
var G__58838 = (function (){var or__4131__auto__ = mtx;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return tx;
}
})();
var G__58839 = remote;
return (cb.cljs$core$IFn$_invoke$arity$3 ? cb.cljs$core$IFn$_invoke$arity$3(G__58837,G__58838,G__58839) : cb.call(null,G__58837,G__58838,G__58839));
});})(seq__58783,chunk__58784,count__58785,i__58786,abort_id,queue_59628,full_remote_transaction_59629,refresh_set_59630,tx_time_59631,fallback_59632,desired_remote_mutations_59633,tx_list_59634,has_mutations_QMARK__59635,remote,history,map__58774,map__58774__$1,app,reconciler,send_queues))
,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629),((function (seq__58783,chunk__58784,count__58785,i__58786,abort_id,queue_59628,full_remote_transaction_59629,refresh_set_59630,tx_time_59631,fallback_59632,desired_remote_mutations_59633,tx_list_59634,has_mutations_QMARK__59635,remote,history,map__58774,map__58774__$1,app,reconciler,send_queues){
return (function (result){
return (fallback_59632.cljs$core$IFn$_invoke$arity$1 ? fallback_59632.cljs$core$IFn$_invoke$arity$1(result) : fallback_59632.call(null,result));
});})(seq__58783,chunk__58784,count__58785,i__58786,abort_id,queue_59628,full_remote_transaction_59629,refresh_set_59630,tx_time_59631,fallback_59632,desired_remote_mutations_59633,tx_list_59634,has_mutations_QMARK__59635,remote,history,map__58774,map__58774__$1,app,reconciler,send_queues))
], null);
});})(seq__58783,chunk__58784,count__58785,i__58786,queue_59628,full_remote_transaction_59629,refresh_set_59630,tx_time_59631,fallback_59632,desired_remote_mutations_59633,tx_list_59634,has_mutations_QMARK__59635,remote,history,map__58774,map__58774__$1,app,reconciler,send_queues))
;
var seq__58842_59726 = cljs.core.seq(tx_list_59634);
var chunk__58843_59727 = null;
var count__58844_59728 = (0);
var i__58845_59729 = (0);
while(true){
if((i__58845_59729 < count__58844_59728)){
var tx_59730 = chunk__58843_59727.cljs$core$IIndexed$_nth$arity$2(null,i__58845_59729);
if(has_mutations_QMARK__59635(tx_59730)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_59628,payload_59636(tx_59730));
} else {
}


var G__59741 = seq__58842_59726;
var G__59742 = chunk__58843_59727;
var G__59743 = count__58844_59728;
var G__59744 = (i__58845_59729 + (1));
seq__58842_59726 = G__59741;
chunk__58843_59727 = G__59742;
count__58844_59728 = G__59743;
i__58845_59729 = G__59744;
continue;
} else {
var temp__5720__auto___59746 = cljs.core.seq(seq__58842_59726);
if(temp__5720__auto___59746){
var seq__58842_59748__$1 = temp__5720__auto___59746;
if(cljs.core.chunked_seq_QMARK_(seq__58842_59748__$1)){
var c__4550__auto___59749 = cljs.core.chunk_first(seq__58842_59748__$1);
var G__59750 = cljs.core.chunk_rest(seq__58842_59748__$1);
var G__59751 = c__4550__auto___59749;
var G__59752 = cljs.core.count(c__4550__auto___59749);
var G__59753 = (0);
seq__58842_59726 = G__59750;
chunk__58843_59727 = G__59751;
count__58844_59728 = G__59752;
i__58845_59729 = G__59753;
continue;
} else {
var tx_59755 = cljs.core.first(seq__58842_59748__$1);
if(has_mutations_QMARK__59635(tx_59755)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_59628,payload_59636(tx_59755));
} else {
}


var G__59758 = cljs.core.next(seq__58842_59748__$1);
var G__59759 = null;
var G__59760 = (0);
var G__59761 = (0);
seq__58842_59726 = G__59758;
chunk__58843_59727 = G__59759;
count__58844_59728 = G__59760;
i__58845_59729 = G__59761;
continue;
}
} else {
}
}
break;
}


var G__59762 = seq__58783;
var G__59763 = chunk__58784;
var G__59764 = count__58785;
var G__59765 = (i__58786 + (1));
seq__58783 = G__59762;
chunk__58784 = G__59763;
count__58785 = G__59764;
i__58786 = G__59765;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__58783);
if(temp__5720__auto__){
var seq__58783__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58783__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58783__$1);
var G__59767 = cljs.core.chunk_rest(seq__58783__$1);
var G__59768 = c__4550__auto__;
var G__59769 = cljs.core.count(c__4550__auto__);
var G__59770 = (0);
seq__58783 = G__59767;
chunk__58784 = G__59768;
count__58785 = G__59769;
i__58786 = G__59770;
continue;
} else {
var remote = cljs.core.first(seq__58783__$1);
var queue_59778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_59779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var refresh_set_59780 = (function (){var or__4131__auto__ = (function (){var G__58854 = full_remote_transaction_59779;
var G__58854__$1 = (((G__58854 == null))?null:cljs.core.meta(G__58854));
var G__58854__$2 = (((G__58854__$1 == null))?null:new cljs.core.Keyword("fulcro.client.primitives","refresh","fulcro.client.primitives/refresh",481513561).cljs$core$IFn$_invoke$arity$1(G__58854__$1));
if((G__58854__$2 == null)){
return null;
} else {
return cljs.core.vec(G__58854__$2);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var tx_time_59781 = (function (){var G__58856 = full_remote_transaction_59779;
var G__58856__$1 = (((G__58856 == null))?null:cljs.core.meta(G__58856));
if((G__58856__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456).cljs$core$IFn$_invoke$arity$1(G__58856__$1);
}
})();
var fallback_59782 = fulcro.client.impl.application.fallback_handler(app,full_remote_transaction_59779);
var desired_remote_mutations_59783 = fulcro.client.primitives.remove_loads_and_fallbacks(full_remote_transaction_59779);
var tx_list_59784 = fulcro.client.impl.application.split_mutations(desired_remote_mutations_59783);
var has_mutations_QMARK__59785 = ((function (seq__58783,chunk__58784,count__58785,i__58786,queue_59778,full_remote_transaction_59779,refresh_set_59780,tx_time_59781,fallback_59782,desired_remote_mutations_59783,tx_list_59784,remote,seq__58783__$1,temp__5720__auto__,history,map__58774,map__58774__$1,app,reconciler,send_queues){
return (function (tx){
return (cljs.core.count(tx) > (0));
});})(seq__58783,chunk__58784,count__58785,i__58786,queue_59778,full_remote_transaction_59779,refresh_set_59780,tx_time_59781,fallback_59782,desired_remote_mutations_59783,tx_list_59784,remote,seq__58783__$1,temp__5720__auto__,history,map__58774,map__58774__$1,app,reconciler,send_queues))
;
var payload_59786 = ((function (seq__58783,chunk__58784,count__58785,i__58786,queue_59778,full_remote_transaction_59779,refresh_set_59780,tx_time_59781,fallback_59782,desired_remote_mutations_59783,tx_list_59784,has_mutations_QMARK__59785,remote,seq__58783__$1,temp__5720__auto__,history,map__58774,map__58774__$1,app,reconciler,send_queues){
return (function (tx){
var abort_id = (function (){var G__58864 = tx;
var G__58864__$1 = (((G__58864 == null))?null:fulcro.client.mutations.abort_ids(G__58864));
if((G__58864__$1 == null)){
return null;
} else {
return cljs.core.first(G__58864__$1);
}
})();
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),tx,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456),tx_time_59781,new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564),history,new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012),remote,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267),abort_id,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603),((function (seq__58783,chunk__58784,count__58785,i__58786,abort_id,queue_59778,full_remote_transaction_59779,refresh_set_59780,tx_time_59781,fallback_59782,desired_remote_mutations_59783,tx_list_59784,has_mutations_QMARK__59785,remote,seq__58783__$1,temp__5720__auto__,history,map__58774,map__58774__$1,app,reconciler,send_queues){
return (function (result,mtx){
var G__58867 = result;
var G__58868 = (function (){var or__4131__auto__ = mtx;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return tx;
}
})();
var G__58869 = remote;
return (cb.cljs$core$IFn$_invoke$arity$3 ? cb.cljs$core$IFn$_invoke$arity$3(G__58867,G__58868,G__58869) : cb.call(null,G__58867,G__58868,G__58869));
});})(seq__58783,chunk__58784,count__58785,i__58786,abort_id,queue_59778,full_remote_transaction_59779,refresh_set_59780,tx_time_59781,fallback_59782,desired_remote_mutations_59783,tx_list_59784,has_mutations_QMARK__59785,remote,seq__58783__$1,temp__5720__auto__,history,map__58774,map__58774__$1,app,reconciler,send_queues))
,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629),((function (seq__58783,chunk__58784,count__58785,i__58786,abort_id,queue_59778,full_remote_transaction_59779,refresh_set_59780,tx_time_59781,fallback_59782,desired_remote_mutations_59783,tx_list_59784,has_mutations_QMARK__59785,remote,seq__58783__$1,temp__5720__auto__,history,map__58774,map__58774__$1,app,reconciler,send_queues){
return (function (result){
return (fallback_59782.cljs$core$IFn$_invoke$arity$1 ? fallback_59782.cljs$core$IFn$_invoke$arity$1(result) : fallback_59782.call(null,result));
});})(seq__58783,chunk__58784,count__58785,i__58786,abort_id,queue_59778,full_remote_transaction_59779,refresh_set_59780,tx_time_59781,fallback_59782,desired_remote_mutations_59783,tx_list_59784,has_mutations_QMARK__59785,remote,seq__58783__$1,temp__5720__auto__,history,map__58774,map__58774__$1,app,reconciler,send_queues))
], null);
});})(seq__58783,chunk__58784,count__58785,i__58786,queue_59778,full_remote_transaction_59779,refresh_set_59780,tx_time_59781,fallback_59782,desired_remote_mutations_59783,tx_list_59784,has_mutations_QMARK__59785,remote,seq__58783__$1,temp__5720__auto__,history,map__58774,map__58774__$1,app,reconciler,send_queues))
;
var seq__58873_59815 = cljs.core.seq(tx_list_59784);
var chunk__58874_59816 = null;
var count__58875_59817 = (0);
var i__58876_59818 = (0);
while(true){
if((i__58876_59818 < count__58875_59817)){
var tx_59819 = chunk__58874_59816.cljs$core$IIndexed$_nth$arity$2(null,i__58876_59818);
if(has_mutations_QMARK__59785(tx_59819)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_59778,payload_59786(tx_59819));
} else {
}


var G__59821 = seq__58873_59815;
var G__59822 = chunk__58874_59816;
var G__59823 = count__58875_59817;
var G__59824 = (i__58876_59818 + (1));
seq__58873_59815 = G__59821;
chunk__58874_59816 = G__59822;
count__58875_59817 = G__59823;
i__58876_59818 = G__59824;
continue;
} else {
var temp__5720__auto___59827__$1 = cljs.core.seq(seq__58873_59815);
if(temp__5720__auto___59827__$1){
var seq__58873_59828__$1 = temp__5720__auto___59827__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58873_59828__$1)){
var c__4550__auto___59829 = cljs.core.chunk_first(seq__58873_59828__$1);
var G__59830 = cljs.core.chunk_rest(seq__58873_59828__$1);
var G__59831 = c__4550__auto___59829;
var G__59832 = cljs.core.count(c__4550__auto___59829);
var G__59833 = (0);
seq__58873_59815 = G__59830;
chunk__58874_59816 = G__59831;
count__58875_59817 = G__59832;
i__58876_59818 = G__59833;
continue;
} else {
var tx_59834 = cljs.core.first(seq__58873_59828__$1);
if(has_mutations_QMARK__59785(tx_59834)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_59778,payload_59786(tx_59834));
} else {
}


var G__59835 = cljs.core.next(seq__58873_59828__$1);
var G__59836 = null;
var G__59837 = (0);
var G__59838 = (0);
seq__58873_59815 = G__59835;
chunk__58874_59816 = G__59836;
count__58875_59817 = G__59837;
i__58876_59818 = G__59838;
continue;
}
} else {
}
}
break;
}


var G__59839 = cljs.core.next(seq__58783__$1);
var G__59840 = null;
var G__59841 = (0);
var G__59842 = (0);
seq__58783 = G__59839;
chunk__58784 = G__59840;
count__58785 = G__59841;
i__58786 = G__59842;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Finds any loads marked `parallel` and triggers real network requests immediately. Remaining loads
 *   are pulled into a single fetch payload (combined into one query) and enqueued behind any prior mutations/reads that
 *   were already requested in a prior UI/event cycle. Thus non-parallel reads are processed in clusters grouped due to UI
 *   events (a single event might trigger many reads which will all go to the server as a single combined request).
 *   Further UI events that trigger remote interaction will end up waiting until prior network request(s) are complete.
 * 
 *   This ensures that default reasoning is simple and sequential in the face of optimistic UI updates (real network
 *   traffic characteristics could cause out of order processing, and you would not want
 *   a 'create list' to be processed on the server *after* an 'add an item to the list'). 
 */
fulcro.client.impl.application.enqueue_reads = (function fulcro$client$impl$application$enqueue_reads(p__58892){
var map__58893 = p__58892;
var map__58893__$1 = (((((!((map__58893 == null))))?(((((map__58893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58893):map__58893);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58893__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58893__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58893__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var seq__58902 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__58903 = null;
var count__58904 = (0);
var i__58905 = (0);
while(true){
if((i__58905 < count__58904)){
var remote = chunk__58903.cljs$core$IIndexed$_nth$arity$2(null,i__58905);
var queue_59859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_59860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_59861 = fulcro.client.impl.data_fetch.mark_parallel_loading_BANG_(remote,reconciler);
var seq__59027_59866 = cljs.core.seq(parallel_payload_59861);
var chunk__59028_59867 = null;
var count__59029_59868 = (0);
var i__59030_59869 = (0);
while(true){
if((i__59030_59869 < count__59029_59868)){
var map__59054_59871 = chunk__59028_59867.cljs$core$IIndexed$_nth$arity$2(null,i__59030_59869);
var map__59054_59872__$1 = (((((!((map__59054_59871 == null))))?(((((map__59054_59871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59054_59871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59054_59871):map__59054_59871);
var payload_59873 = map__59054_59872__$1;
var query_59874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59054_59872__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load_59875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59054_59872__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error_59876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59054_59872__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors_59877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59054_59872__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id_59878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59054_59872__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var on_load_SINGLEQUOTE__59891 = ((function (seq__59027_59866,chunk__59028_59867,count__59029_59868,i__59030_59869,seq__58902,chunk__58903,count__58904,i__58905,map__59054_59871,map__59054_59872__$1,payload_59873,query_59874,on_load_59875,on_error_59876,load_descriptors_59877,abort_id_59878,queue_59859,network_59860,parallel_payload_59861,remote,map__58893,map__58893__$1,send_queues,reconciler,networking){
return (function (p1__58890_SHARP_){
return (on_load_59875.cljs$core$IFn$_invoke$arity$2 ? on_load_59875.cljs$core$IFn$_invoke$arity$2(p1__58890_SHARP_,load_descriptors_59877) : on_load_59875.call(null,p1__58890_SHARP_,load_descriptors_59877));
});})(seq__59027_59866,chunk__59028_59867,count__59029_59868,i__59030_59869,seq__58902,chunk__58903,count__58904,i__58905,map__59054_59871,map__59054_59872__$1,payload_59873,query_59874,on_load_59875,on_error_59876,load_descriptors_59877,abort_id_59878,queue_59859,network_59860,parallel_payload_59861,remote,map__58893,map__58893__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__59892 = ((function (seq__59027_59866,chunk__59028_59867,count__59029_59868,i__59030_59869,seq__58902,chunk__58903,count__58904,i__58905,on_load_SINGLEQUOTE__59891,map__59054_59871,map__59054_59872__$1,payload_59873,query_59874,on_load_59875,on_error_59876,load_descriptors_59877,abort_id_59878,queue_59859,network_59860,parallel_payload_59861,remote,map__58893,map__58893__$1,send_queues,reconciler,networking){
return (function (p1__58891_SHARP_){
return (on_error_59876.cljs$core$IFn$_invoke$arity$2 ? on_error_59876.cljs$core$IFn$_invoke$arity$2(p1__58891_SHARP_,load_descriptors_59877) : on_error_59876.call(null,p1__58891_SHARP_,load_descriptors_59877));
});})(seq__59027_59866,chunk__59028_59867,count__59029_59868,i__59030_59869,seq__58902,chunk__58903,count__58904,i__58905,on_load_SINGLEQUOTE__59891,map__59054_59871,map__59054_59872__$1,payload_59873,query_59874,on_load_59875,on_error_59876,load_descriptors_59877,abort_id_59878,queue_59859,network_59860,parallel_payload_59861,remote,map__58893,map__58893__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_59860,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload_59873,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),query_59874,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_load_SINGLEQUOTE__59891,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error_SINGLEQUOTE__59892,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_59878], null));


var G__59925 = seq__59027_59866;
var G__59926 = chunk__59028_59867;
var G__59927 = count__59029_59868;
var G__59928 = (i__59030_59869 + (1));
seq__59027_59866 = G__59925;
chunk__59028_59867 = G__59926;
count__59029_59868 = G__59927;
i__59030_59869 = G__59928;
continue;
} else {
var temp__5720__auto___59930 = cljs.core.seq(seq__59027_59866);
if(temp__5720__auto___59930){
var seq__59027_59931__$1 = temp__5720__auto___59930;
if(cljs.core.chunked_seq_QMARK_(seq__59027_59931__$1)){
var c__4550__auto___59933 = cljs.core.chunk_first(seq__59027_59931__$1);
var G__59935 = cljs.core.chunk_rest(seq__59027_59931__$1);
var G__59936 = c__4550__auto___59933;
var G__59937 = cljs.core.count(c__4550__auto___59933);
var G__59938 = (0);
seq__59027_59866 = G__59935;
chunk__59028_59867 = G__59936;
count__59029_59868 = G__59937;
i__59030_59869 = G__59938;
continue;
} else {
var map__59064_59943 = cljs.core.first(seq__59027_59931__$1);
var map__59064_59944__$1 = (((((!((map__59064_59943 == null))))?(((((map__59064_59943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59064_59943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59064_59943):map__59064_59943);
var payload_59945 = map__59064_59944__$1;
var query_59946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59064_59944__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load_59947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59064_59944__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error_59948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59064_59944__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors_59949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59064_59944__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id_59950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59064_59944__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var on_load_SINGLEQUOTE__59962 = ((function (seq__59027_59866,chunk__59028_59867,count__59029_59868,i__59030_59869,seq__58902,chunk__58903,count__58904,i__58905,map__59064_59943,map__59064_59944__$1,payload_59945,query_59946,on_load_59947,on_error_59948,load_descriptors_59949,abort_id_59950,seq__59027_59931__$1,temp__5720__auto___59930,queue_59859,network_59860,parallel_payload_59861,remote,map__58893,map__58893__$1,send_queues,reconciler,networking){
return (function (p1__58890_SHARP_){
return (on_load_59947.cljs$core$IFn$_invoke$arity$2 ? on_load_59947.cljs$core$IFn$_invoke$arity$2(p1__58890_SHARP_,load_descriptors_59949) : on_load_59947.call(null,p1__58890_SHARP_,load_descriptors_59949));
});})(seq__59027_59866,chunk__59028_59867,count__59029_59868,i__59030_59869,seq__58902,chunk__58903,count__58904,i__58905,map__59064_59943,map__59064_59944__$1,payload_59945,query_59946,on_load_59947,on_error_59948,load_descriptors_59949,abort_id_59950,seq__59027_59931__$1,temp__5720__auto___59930,queue_59859,network_59860,parallel_payload_59861,remote,map__58893,map__58893__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__59963 = ((function (seq__59027_59866,chunk__59028_59867,count__59029_59868,i__59030_59869,seq__58902,chunk__58903,count__58904,i__58905,on_load_SINGLEQUOTE__59962,map__59064_59943,map__59064_59944__$1,payload_59945,query_59946,on_load_59947,on_error_59948,load_descriptors_59949,abort_id_59950,seq__59027_59931__$1,temp__5720__auto___59930,queue_59859,network_59860,parallel_payload_59861,remote,map__58893,map__58893__$1,send_queues,reconciler,networking){
return (function (p1__58891_SHARP_){
return (on_error_59948.cljs$core$IFn$_invoke$arity$2 ? on_error_59948.cljs$core$IFn$_invoke$arity$2(p1__58891_SHARP_,load_descriptors_59949) : on_error_59948.call(null,p1__58891_SHARP_,load_descriptors_59949));
});})(seq__59027_59866,chunk__59028_59867,count__59029_59868,i__59030_59869,seq__58902,chunk__58903,count__58904,i__58905,on_load_SINGLEQUOTE__59962,map__59064_59943,map__59064_59944__$1,payload_59945,query_59946,on_load_59947,on_error_59948,load_descriptors_59949,abort_id_59950,seq__59027_59931__$1,temp__5720__auto___59930,queue_59859,network_59860,parallel_payload_59861,remote,map__58893,map__58893__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_59860,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload_59945,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),query_59946,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_load_SINGLEQUOTE__59962,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error_SINGLEQUOTE__59963,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_59950], null));


var G__59976 = cljs.core.next(seq__59027_59931__$1);
var G__59977 = null;
var G__59978 = (0);
var G__59979 = (0);
seq__59027_59866 = G__59976;
chunk__59028_59867 = G__59977;
count__59029_59868 = G__59978;
i__59030_59869 = G__59979;
continue;
}
} else {
}
}
break;
}

var fetch_payload_59983 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_59983)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_59859,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_59983,new cljs.core.Keyword(null,"networking","networking",586110628),network_59860));

var G__59986 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_59983 = G__59986;
continue;
} else {
}
break;
}


var G__59988 = seq__58902;
var G__59989 = chunk__58903;
var G__59990 = count__58904;
var G__59991 = (i__58905 + (1));
seq__58902 = G__59988;
chunk__58903 = G__59989;
count__58904 = G__59990;
i__58905 = G__59991;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__58902);
if(temp__5720__auto__){
var seq__58902__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58902__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58902__$1);
var G__59995 = cljs.core.chunk_rest(seq__58902__$1);
var G__59996 = c__4550__auto__;
var G__59997 = cljs.core.count(c__4550__auto__);
var G__59998 = (0);
seq__58902 = G__59995;
chunk__58903 = G__59996;
count__58904 = G__59997;
i__58905 = G__59998;
continue;
} else {
var remote = cljs.core.first(seq__58902__$1);
var queue_59999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_60000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_60001 = fulcro.client.impl.data_fetch.mark_parallel_loading_BANG_(remote,reconciler);
var seq__59070_60008 = cljs.core.seq(parallel_payload_60001);
var chunk__59071_60009 = null;
var count__59072_60010 = (0);
var i__59073_60011 = (0);
while(true){
if((i__59073_60011 < count__59072_60010)){
var map__59088_60012 = chunk__59071_60009.cljs$core$IIndexed$_nth$arity$2(null,i__59073_60011);
var map__59088_60013__$1 = (((((!((map__59088_60012 == null))))?(((((map__59088_60012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59088_60012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59088_60012):map__59088_60012);
var payload_60014 = map__59088_60013__$1;
var query_60015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59088_60013__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load_60016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59088_60013__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error_60017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59088_60013__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors_60018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59088_60013__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id_60020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59088_60013__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var on_load_SINGLEQUOTE__60033 = ((function (seq__59070_60008,chunk__59071_60009,count__59072_60010,i__59073_60011,seq__58902,chunk__58903,count__58904,i__58905,map__59088_60012,map__59088_60013__$1,payload_60014,query_60015,on_load_60016,on_error_60017,load_descriptors_60018,abort_id_60020,queue_59999,network_60000,parallel_payload_60001,remote,seq__58902__$1,temp__5720__auto__,map__58893,map__58893__$1,send_queues,reconciler,networking){
return (function (p1__58890_SHARP_){
return (on_load_60016.cljs$core$IFn$_invoke$arity$2 ? on_load_60016.cljs$core$IFn$_invoke$arity$2(p1__58890_SHARP_,load_descriptors_60018) : on_load_60016.call(null,p1__58890_SHARP_,load_descriptors_60018));
});})(seq__59070_60008,chunk__59071_60009,count__59072_60010,i__59073_60011,seq__58902,chunk__58903,count__58904,i__58905,map__59088_60012,map__59088_60013__$1,payload_60014,query_60015,on_load_60016,on_error_60017,load_descriptors_60018,abort_id_60020,queue_59999,network_60000,parallel_payload_60001,remote,seq__58902__$1,temp__5720__auto__,map__58893,map__58893__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__60034 = ((function (seq__59070_60008,chunk__59071_60009,count__59072_60010,i__59073_60011,seq__58902,chunk__58903,count__58904,i__58905,on_load_SINGLEQUOTE__60033,map__59088_60012,map__59088_60013__$1,payload_60014,query_60015,on_load_60016,on_error_60017,load_descriptors_60018,abort_id_60020,queue_59999,network_60000,parallel_payload_60001,remote,seq__58902__$1,temp__5720__auto__,map__58893,map__58893__$1,send_queues,reconciler,networking){
return (function (p1__58891_SHARP_){
return (on_error_60017.cljs$core$IFn$_invoke$arity$2 ? on_error_60017.cljs$core$IFn$_invoke$arity$2(p1__58891_SHARP_,load_descriptors_60018) : on_error_60017.call(null,p1__58891_SHARP_,load_descriptors_60018));
});})(seq__59070_60008,chunk__59071_60009,count__59072_60010,i__59073_60011,seq__58902,chunk__58903,count__58904,i__58905,on_load_SINGLEQUOTE__60033,map__59088_60012,map__59088_60013__$1,payload_60014,query_60015,on_load_60016,on_error_60017,load_descriptors_60018,abort_id_60020,queue_59999,network_60000,parallel_payload_60001,remote,seq__58902__$1,temp__5720__auto__,map__58893,map__58893__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_60000,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload_60014,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),query_60015,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_load_SINGLEQUOTE__60033,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error_SINGLEQUOTE__60034,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_60020], null));


var G__60051 = seq__59070_60008;
var G__60052 = chunk__59071_60009;
var G__60053 = count__59072_60010;
var G__60054 = (i__59073_60011 + (1));
seq__59070_60008 = G__60051;
chunk__59071_60009 = G__60052;
count__59072_60010 = G__60053;
i__59073_60011 = G__60054;
continue;
} else {
var temp__5720__auto___60055__$1 = cljs.core.seq(seq__59070_60008);
if(temp__5720__auto___60055__$1){
var seq__59070_60056__$1 = temp__5720__auto___60055__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59070_60056__$1)){
var c__4550__auto___60057 = cljs.core.chunk_first(seq__59070_60056__$1);
var G__60058 = cljs.core.chunk_rest(seq__59070_60056__$1);
var G__60059 = c__4550__auto___60057;
var G__60060 = cljs.core.count(c__4550__auto___60057);
var G__60061 = (0);
seq__59070_60008 = G__60058;
chunk__59071_60009 = G__60059;
count__59072_60010 = G__60060;
i__59073_60011 = G__60061;
continue;
} else {
var map__59092_60062 = cljs.core.first(seq__59070_60056__$1);
var map__59092_60063__$1 = (((((!((map__59092_60062 == null))))?(((((map__59092_60062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59092_60062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59092_60062):map__59092_60062);
var payload_60064 = map__59092_60063__$1;
var query_60065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59092_60063__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load_60066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59092_60063__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error_60067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59092_60063__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors_60068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59092_60063__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id_60069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59092_60063__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var on_load_SINGLEQUOTE__60070 = ((function (seq__59070_60008,chunk__59071_60009,count__59072_60010,i__59073_60011,seq__58902,chunk__58903,count__58904,i__58905,map__59092_60062,map__59092_60063__$1,payload_60064,query_60065,on_load_60066,on_error_60067,load_descriptors_60068,abort_id_60069,seq__59070_60056__$1,temp__5720__auto___60055__$1,queue_59999,network_60000,parallel_payload_60001,remote,seq__58902__$1,temp__5720__auto__,map__58893,map__58893__$1,send_queues,reconciler,networking){
return (function (p1__58890_SHARP_){
return (on_load_60066.cljs$core$IFn$_invoke$arity$2 ? on_load_60066.cljs$core$IFn$_invoke$arity$2(p1__58890_SHARP_,load_descriptors_60068) : on_load_60066.call(null,p1__58890_SHARP_,load_descriptors_60068));
});})(seq__59070_60008,chunk__59071_60009,count__59072_60010,i__59073_60011,seq__58902,chunk__58903,count__58904,i__58905,map__59092_60062,map__59092_60063__$1,payload_60064,query_60065,on_load_60066,on_error_60067,load_descriptors_60068,abort_id_60069,seq__59070_60056__$1,temp__5720__auto___60055__$1,queue_59999,network_60000,parallel_payload_60001,remote,seq__58902__$1,temp__5720__auto__,map__58893,map__58893__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__60071 = ((function (seq__59070_60008,chunk__59071_60009,count__59072_60010,i__59073_60011,seq__58902,chunk__58903,count__58904,i__58905,on_load_SINGLEQUOTE__60070,map__59092_60062,map__59092_60063__$1,payload_60064,query_60065,on_load_60066,on_error_60067,load_descriptors_60068,abort_id_60069,seq__59070_60056__$1,temp__5720__auto___60055__$1,queue_59999,network_60000,parallel_payload_60001,remote,seq__58902__$1,temp__5720__auto__,map__58893,map__58893__$1,send_queues,reconciler,networking){
return (function (p1__58891_SHARP_){
return (on_error_60067.cljs$core$IFn$_invoke$arity$2 ? on_error_60067.cljs$core$IFn$_invoke$arity$2(p1__58891_SHARP_,load_descriptors_60068) : on_error_60067.call(null,p1__58891_SHARP_,load_descriptors_60068));
});})(seq__59070_60008,chunk__59071_60009,count__59072_60010,i__59073_60011,seq__58902,chunk__58903,count__58904,i__58905,on_load_SINGLEQUOTE__60070,map__59092_60062,map__59092_60063__$1,payload_60064,query_60065,on_load_60066,on_error_60067,load_descriptors_60068,abort_id_60069,seq__59070_60056__$1,temp__5720__auto___60055__$1,queue_59999,network_60000,parallel_payload_60001,remote,seq__58902__$1,temp__5720__auto__,map__58893,map__58893__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_60000,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload_60064,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),query_60065,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_load_SINGLEQUOTE__60070,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error_SINGLEQUOTE__60071,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_60069], null));


var G__60079 = cljs.core.next(seq__59070_60056__$1);
var G__60080 = null;
var G__60081 = (0);
var G__60082 = (0);
seq__59070_60008 = G__60079;
chunk__59071_60009 = G__60080;
count__59072_60010 = G__60081;
i__59073_60011 = G__60082;
continue;
}
} else {
}
}
break;
}

var fetch_payload_60084 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_60084)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_59999,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_60084,new cljs.core.Keyword(null,"networking","networking",586110628),network_60000));

var G__60085 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_60084 = G__60085;
continue;
} else {
}
break;
}


var G__60086 = cljs.core.next(seq__58902__$1);
var G__60087 = null;
var G__60088 = (0);
var G__60089 = (0);
seq__58902 = G__60086;
chunk__58903 = G__60087;
count__58904 = G__60088;
i__58905 = G__60089;
continue;
}
} else {
return null;
}
}
break;
}
});
fulcro.client.impl.application.detect_errant_remotes = (function fulcro$client$impl$application$detect_errant_remotes(p__59102){
var map__59103 = p__59102;
var map__59103__$1 = (((((!((map__59103 == null))))?(((((map__59103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59103):map__59103);
var app = map__59103__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59103__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59103__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var state = fulcro.client.primitives.app_state(reconciler);
var all_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.Keyword("fulcro","ready-to-load","fulcro/ready-to-load",127104696));
var item_remotes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(fulcro.client.impl.data_fetch.data_remote),all_items);
var all_remotes = cljs.core.set(cljs.core.keys(send_queues));
var invalid_remotes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(item_remotes,all_remotes);
if(cljs.core.truth_(cljs.core.not_empty(invalid_remotes))){
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),217], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Use of invalid remote(s) detected! ",invalid_remotes], 0));
}catch (e59107){if((e59107 instanceof Error)){
var e__48124__auto__ = e59107;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),217], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto__], 0));
} else {
throw e59107;

}
}} else {
return null;
}
});
/**
 * Puts queries/mutations (and their corresponding callbacks) onto the send queue. The networking code will pull these
 *   off one at a time and send them through the real networking layer. Reads are guaranteed to *follow* writes.
 */
fulcro.client.impl.application.server_send = (function fulcro$client$impl$application$server_send(app,remote_tx_map,merge_result_callback){
fulcro.client.impl.application.detect_errant_remotes(app);

fulcro.client.impl.application.enqueue_mutations(app,remote_tx_map,merge_result_callback);

return fulcro.client.impl.application.enqueue_reads(app);
});
fulcro.client.impl.application.is_sequential_QMARK_ = (function fulcro$client$impl$application$is_sequential_QMARK_(network){
if((((!((network == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === network.fulcro$client$network$NetworkBehavior$))))?true:(((!network.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(fulcro.client.network.NetworkBehavior,network):false)):cljs.core.native_satisfies_QMARK_(fulcro.client.network.NetworkBehavior,network))){
return fulcro.client.network.serialize_requests_QMARK_(network);
} else {
return true;
}
});
/**
 * Sends a network payload. There are two kinds of payloads in Fulcro. The first is
 *   for reads, which are tracked by load descriptors in the app state. These load descriptors
 *   tell the plumbing how to handle the response, and expect to only be merged in once. Mutations
 *   do not have a payload, and can technically receive progress updates from the network. The built-in
 *   networking does not (currently) give progress events, but plugin networking can. It is currently not
 *   supported to give an update on a load, so this function is careful to detect that a payload is a send
 *   and turns all but the last update into a no-op. The send-complete function comes from the
 *   network sequential processing loop, and when called unblocks the network processing to allow the
 *   next request to go. Be very careful with this code, as bugs will cause applications to stop responding
 *   to remote requests.
 */
fulcro.client.impl.application._send_payload = (function fulcro$client$impl$application$_send_payload(network,reconciler,payload,send_complete){
var map__59117 = payload;
var map__59117__$1 = (((((!((map__59117 == null))))?(((((map__59117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59117):map__59117);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59117__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59117__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59117__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59117__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59117__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var merge_data = (cljs.core.truth_(load_descriptors)?((function (map__59117,map__59117__$1,query,on_load,on_error,load_descriptors,abort_id){
return (function (p1__59111_SHARP_){
return (on_load.cljs$core$IFn$_invoke$arity$2 ? on_load.cljs$core$IFn$_invoke$arity$2(p1__59111_SHARP_,load_descriptors) : on_load.call(null,p1__59111_SHARP_,load_descriptors));
});})(map__59117,map__59117__$1,query,on_load,on_error,load_descriptors,abort_id))
:((function (map__59117,map__59117__$1,query,on_load,on_error,load_descriptors,abort_id){
return (function (p1__59112_SHARP_,p2__59113_SHARP_){
return (on_load.cljs$core$IFn$_invoke$arity$2 ? on_load.cljs$core$IFn$_invoke$arity$2(p1__59112_SHARP_,p2__59113_SHARP_) : on_load.call(null,p1__59112_SHARP_,p2__59113_SHARP_));
});})(map__59117,map__59117__$1,query,on_load,on_error,load_descriptors,abort_id))
);
var on_update = (cljs.core.truth_(load_descriptors)?cljs.core.identity:merge_data);
var on_error__$1 = (cljs.core.truth_(load_descriptors)?((function (map__59117,map__59117__$1,query,on_load,on_error,load_descriptors,abort_id,merge_data,on_update){
return (function (p1__59115_SHARP_){
return (on_error.cljs$core$IFn$_invoke$arity$2 ? on_error.cljs$core$IFn$_invoke$arity$2(p1__59115_SHARP_,load_descriptors) : on_error.call(null,p1__59115_SHARP_,load_descriptors));
});})(map__59117,map__59117__$1,query,on_load,on_error,load_descriptors,abort_id,merge_data,on_update))
:on_error);
var on_error__$2 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(send_complete,on_error__$1);
var on_done = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(send_complete,merge_data);
if(fulcro.client.impl.data_fetch.is_deferred_transaction_QMARK_(query)){
var G__59127_60103 = cljs.core.PersistentArrayMap.EMPTY;
(on_done.cljs$core$IFn$_invoke$arity$1 ? on_done.cljs$core$IFn$_invoke$arity$1(G__59127_60103) : on_done.call(null,G__59127_60103));

if(cljs.core.truth_(fulcro.client.impl.application.is_sequential_QMARK_(network))){
return null;
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),256], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Attempt to defer a transaction on a non-sequential remote. `ptransact!` will fail to work correctly with `serial? false` remotes."], 0));
}catch (e59128){if((e59128 instanceof Error)){
var e__48124__auto__ = e59128;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),256], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto__], 0));
} else {
throw e59128;

}
}}
} else {
return fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload,new cljs.core.Keyword(null,"tx","tx",466630418),query,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_done,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error__$2,new cljs.core.Keyword(null,"on-load","on-load",1415151594),on_update,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id], null));
}
});
/**
 * Starts a async go loop that sends network requests on networking object's request queue.
 * Gives the appearance of a separate networking 'thread' using core async.
 */
fulcro.client.impl.application.start_network_sequential_processing = (function fulcro$client$impl$application$start_network_sequential_processing(p__59131){
var map__59132 = p__59131;
var map__59132__$1 = (((((!((map__59132 == null))))?(((((map__59132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59132):map__59132);
var app = map__59132__$1;
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59132__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59132__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59132__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var response_channels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59132__$1,new cljs.core.Keyword(null,"response-channels","response-channels",-1871059128));
var seq__59134 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__59135 = null;
var count__59136 = (0);
var i__59137 = (0);
while(true){
if((i__59137 < count__59136)){
var remote = chunk__59135.cljs$core$IIndexed$_nth$arity$2(null,i__59137);
var queue_60120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_60121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var sequential_QMARK__60122 = fulcro.client.impl.application.is_sequential_QMARK_(network_60121);
var response_channel_60123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_60124 = (cljs.core.truth_(sequential_QMARK__60122)?((function (seq__59134,chunk__59135,count__59136,i__59137,queue_60120,network_60121,sequential_QMARK__60122,response_channel_60123,remote,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var c__44617__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__59134,chunk__59135,count__59136,i__59137,c__44617__auto__,queue_60120,network_60121,sequential_QMARK__60122,response_channel_60123,remote,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (seq__59134,chunk__59135,count__59136,i__59137,c__44617__auto__,queue_60120,network_60121,sequential_QMARK__60122,response_channel_60123,remote,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_59267){
var state_val_59268 = (state_59267[(1)]);
if((state_val_59268 === (1))){
var state_59267__$1 = state_59267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59267__$1,(2),response_channel_60123,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_59268 === (2))){
var inst_59264 = (state_59267[(2)]);
var state_59267__$1 = state_59267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59267__$1,inst_59264);
} else {
return null;
}
}
});})(seq__59134,chunk__59135,count__59136,i__59137,c__44617__auto__,queue_60120,network_60121,sequential_QMARK__60122,response_channel_60123,remote,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__59134,chunk__59135,count__59136,i__59137,switch__44304__auto__,c__44617__auto__,queue_60120,network_60121,sequential_QMARK__60122,response_channel_60123,remote,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____0 = (function (){
var statearr_59273 = [null,null,null,null,null,null,null];
(statearr_59273[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__);

(statearr_59273[(1)] = (1));

return statearr_59273;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____1 = (function (state_59267){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_59267);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e59274){if((e59274 instanceof Object)){
var ex__44308__auto__ = e59274;
var statearr_59275_60136 = state_59267;
(statearr_59275_60136[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59274;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60139 = state_59267;
state_59267 = G__60139;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__ = function(state_59267){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____1.call(this,state_59267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__;
})()
;})(seq__59134,chunk__59135,count__59136,i__59137,switch__44304__auto__,c__44617__auto__,queue_60120,network_60121,sequential_QMARK__60122,response_channel_60123,remote,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__44619__auto__ = (function (){var statearr_59285 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_59285[(6)] = c__44617__auto__);

return statearr_59285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(seq__59134,chunk__59135,count__59136,i__59137,c__44617__auto__,queue_60120,network_60121,sequential_QMARK__60122,response_channel_60123,remote,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels))
);

return c__44617__auto__;
});})(seq__59134,chunk__59135,count__59136,i__59137,queue_60120,network_60121,sequential_QMARK__60122,response_channel_60123,remote,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels))
:cljs.core.identity);
var c__44617__auto___60143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__59134,chunk__59135,count__59136,i__59137,c__44617__auto___60143,queue_60120,network_60121,sequential_QMARK__60122,response_channel_60123,send_complete_60124,remote,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (seq__59134,chunk__59135,count__59136,i__59137,c__44617__auto___60143,queue_60120,network_60121,sequential_QMARK__60122,response_channel_60123,send_complete_60124,remote,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_59306){
var state_val_59308 = (state_59306[(1)]);
if((state_val_59308 === (7))){
var inst_59297 = (state_59306[(2)]);
var state_59306__$1 = (function (){var statearr_59313 = state_59306;
(statearr_59313[(7)] = inst_59297);

return statearr_59313;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59306__$1,(9),queue_60120);
} else {
if((state_val_59308 === (1))){
var state_59306__$1 = state_59306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59306__$1,(2),queue_60120);
} else {
if((state_val_59308 === (4))){
var inst_59302 = (state_59306[(2)]);
var state_59306__$1 = state_59306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59306__$1,inst_59302);
} else {
if((state_val_59308 === (6))){
var state_59306__$1 = state_59306;
var statearr_59314_60149 = state_59306__$1;
(statearr_59314_60149[(2)] = null);

(statearr_59314_60149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59308 === (3))){
var inst_59288 = (state_59306[(8)]);
var inst_59290 = fulcro.client.impl.application._send_payload(network_60121,reconciler,inst_59288,send_complete_60124);
var inst_59291 = fulcro.client.primitives.pop_pending_request(reconciler,remote);
var state_59306__$1 = (function (){var statearr_59320 = state_59306;
(statearr_59320[(9)] = inst_59290);

(statearr_59320[(10)] = inst_59291);

return statearr_59320;
})();
if(cljs.core.truth_(sequential_QMARK__60122)){
var statearr_59321_60153 = state_59306__$1;
(statearr_59321_60153[(1)] = (5));

} else {
var statearr_59322_60154 = state_59306__$1;
(statearr_59322_60154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59308 === (2))){
var inst_59287 = (state_59306[(2)]);
var inst_59288 = inst_59287;
var state_59306__$1 = (function (){var statearr_59324 = state_59306;
(statearr_59324[(8)] = inst_59288);

return statearr_59324;
})();
var statearr_59325_60156 = state_59306__$1;
(statearr_59325_60156[(2)] = null);

(statearr_59325_60156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59308 === (9))){
var inst_59299 = (state_59306[(2)]);
var inst_59288 = inst_59299;
var state_59306__$1 = (function (){var statearr_59327 = state_59306;
(statearr_59327[(8)] = inst_59288);

return statearr_59327;
})();
var statearr_59331_60158 = state_59306__$1;
(statearr_59331_60158[(2)] = null);

(statearr_59331_60158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59308 === (5))){
var state_59306__$1 = state_59306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59306__$1,(8),response_channel_60123);
} else {
if((state_val_59308 === (8))){
var inst_59294 = (state_59306[(2)]);
var state_59306__$1 = state_59306;
var statearr_59338_60159 = state_59306__$1;
(statearr_59338_60159[(2)] = inst_59294);

(statearr_59338_60159[(1)] = (7));


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
}
}
});})(seq__59134,chunk__59135,count__59136,i__59137,c__44617__auto___60143,queue_60120,network_60121,sequential_QMARK__60122,response_channel_60123,send_complete_60124,remote,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__59134,chunk__59135,count__59136,i__59137,switch__44304__auto__,c__44617__auto___60143,queue_60120,network_60121,sequential_QMARK__60122,response_channel_60123,send_complete_60124,remote,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____0 = (function (){
var statearr_59345 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59345[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__);

(statearr_59345[(1)] = (1));

return statearr_59345;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____1 = (function (state_59306){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_59306);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e59348){if((e59348 instanceof Object)){
var ex__44308__auto__ = e59348;
var statearr_59349_60165 = state_59306;
(statearr_59349_60165[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59348;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60171 = state_59306;
state_59306 = G__60171;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__ = function(state_59306){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____1.call(this,state_59306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__;
})()
;})(seq__59134,chunk__59135,count__59136,i__59137,switch__44304__auto__,c__44617__auto___60143,queue_60120,network_60121,sequential_QMARK__60122,response_channel_60123,send_complete_60124,remote,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__44619__auto__ = (function (){var statearr_59350 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_59350[(6)] = c__44617__auto___60143);

return statearr_59350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(seq__59134,chunk__59135,count__59136,i__59137,c__44617__auto___60143,queue_60120,network_60121,sequential_QMARK__60122,response_channel_60123,send_complete_60124,remote,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels))
);



var G__60176 = seq__59134;
var G__60177 = chunk__59135;
var G__60178 = count__59136;
var G__60179 = (i__59137 + (1));
seq__59134 = G__60176;
chunk__59135 = G__60177;
count__59136 = G__60178;
i__59137 = G__60179;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__59134);
if(temp__5720__auto__){
var seq__59134__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59134__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59134__$1);
var G__60182 = cljs.core.chunk_rest(seq__59134__$1);
var G__60183 = c__4550__auto__;
var G__60184 = cljs.core.count(c__4550__auto__);
var G__60185 = (0);
seq__59134 = G__60182;
chunk__59135 = G__60183;
count__59136 = G__60184;
i__59137 = G__60185;
continue;
} else {
var remote = cljs.core.first(seq__59134__$1);
var queue_60186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_60187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var sequential_QMARK__60188 = fulcro.client.impl.application.is_sequential_QMARK_(network_60187);
var response_channel_60189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_60190 = (cljs.core.truth_(sequential_QMARK__60188)?((function (seq__59134,chunk__59135,count__59136,i__59137,queue_60186,network_60187,sequential_QMARK__60188,response_channel_60189,remote,seq__59134__$1,temp__5720__auto__,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var c__44617__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__59134,chunk__59135,count__59136,i__59137,c__44617__auto__,queue_60186,network_60187,sequential_QMARK__60188,response_channel_60189,remote,seq__59134__$1,temp__5720__auto__,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (seq__59134,chunk__59135,count__59136,i__59137,c__44617__auto__,queue_60186,network_60187,sequential_QMARK__60188,response_channel_60189,remote,seq__59134__$1,temp__5720__auto__,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_59356){
var state_val_59357 = (state_59356[(1)]);
if((state_val_59357 === (1))){
var state_59356__$1 = state_59356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59356__$1,(2),response_channel_60189,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_59357 === (2))){
var inst_59354 = (state_59356[(2)]);
var state_59356__$1 = state_59356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59356__$1,inst_59354);
} else {
return null;
}
}
});})(seq__59134,chunk__59135,count__59136,i__59137,c__44617__auto__,queue_60186,network_60187,sequential_QMARK__60188,response_channel_60189,remote,seq__59134__$1,temp__5720__auto__,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__59134,chunk__59135,count__59136,i__59137,switch__44304__auto__,c__44617__auto__,queue_60186,network_60187,sequential_QMARK__60188,response_channel_60189,remote,seq__59134__$1,temp__5720__auto__,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____0 = (function (){
var statearr_59366 = [null,null,null,null,null,null,null];
(statearr_59366[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__);

(statearr_59366[(1)] = (1));

return statearr_59366;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____1 = (function (state_59356){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_59356);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e59367){if((e59367 instanceof Object)){
var ex__44308__auto__ = e59367;
var statearr_59369_60200 = state_59356;
(statearr_59369_60200[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59367;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60201 = state_59356;
state_59356 = G__60201;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__ = function(state_59356){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____1.call(this,state_59356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__;
})()
;})(seq__59134,chunk__59135,count__59136,i__59137,switch__44304__auto__,c__44617__auto__,queue_60186,network_60187,sequential_QMARK__60188,response_channel_60189,remote,seq__59134__$1,temp__5720__auto__,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__44619__auto__ = (function (){var statearr_59371 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_59371[(6)] = c__44617__auto__);

return statearr_59371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(seq__59134,chunk__59135,count__59136,i__59137,c__44617__auto__,queue_60186,network_60187,sequential_QMARK__60188,response_channel_60189,remote,seq__59134__$1,temp__5720__auto__,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels))
);

return c__44617__auto__;
});})(seq__59134,chunk__59135,count__59136,i__59137,queue_60186,network_60187,sequential_QMARK__60188,response_channel_60189,remote,seq__59134__$1,temp__5720__auto__,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels))
:cljs.core.identity);
var c__44617__auto___60210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__59134,chunk__59135,count__59136,i__59137,c__44617__auto___60210,queue_60186,network_60187,sequential_QMARK__60188,response_channel_60189,send_complete_60190,remote,seq__59134__$1,temp__5720__auto__,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (seq__59134,chunk__59135,count__59136,i__59137,c__44617__auto___60210,queue_60186,network_60187,sequential_QMARK__60188,response_channel_60189,send_complete_60190,remote,seq__59134__$1,temp__5720__auto__,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_59391){
var state_val_59392 = (state_59391[(1)]);
if((state_val_59392 === (7))){
var inst_59383 = (state_59391[(2)]);
var state_59391__$1 = (function (){var statearr_59399 = state_59391;
(statearr_59399[(7)] = inst_59383);

return statearr_59399;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59391__$1,(9),queue_60186);
} else {
if((state_val_59392 === (1))){
var state_59391__$1 = state_59391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59391__$1,(2),queue_60186);
} else {
if((state_val_59392 === (4))){
var inst_59389 = (state_59391[(2)]);
var state_59391__$1 = state_59391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59391__$1,inst_59389);
} else {
if((state_val_59392 === (6))){
var state_59391__$1 = state_59391;
var statearr_59402_60229 = state_59391__$1;
(statearr_59402_60229[(2)] = null);

(statearr_59402_60229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (3))){
var inst_59374 = (state_59391[(8)]);
var inst_59376 = fulcro.client.impl.application._send_payload(network_60187,reconciler,inst_59374,send_complete_60190);
var inst_59377 = fulcro.client.primitives.pop_pending_request(reconciler,remote);
var state_59391__$1 = (function (){var statearr_59403 = state_59391;
(statearr_59403[(9)] = inst_59377);

(statearr_59403[(10)] = inst_59376);

return statearr_59403;
})();
if(cljs.core.truth_(sequential_QMARK__60188)){
var statearr_59404_60234 = state_59391__$1;
(statearr_59404_60234[(1)] = (5));

} else {
var statearr_59405_60235 = state_59391__$1;
(statearr_59405_60235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (2))){
var inst_59373 = (state_59391[(2)]);
var inst_59374 = inst_59373;
var state_59391__$1 = (function (){var statearr_59406 = state_59391;
(statearr_59406[(8)] = inst_59374);

return statearr_59406;
})();
var statearr_59407_60238 = state_59391__$1;
(statearr_59407_60238[(2)] = null);

(statearr_59407_60238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (9))){
var inst_59385 = (state_59391[(2)]);
var inst_59374 = inst_59385;
var state_59391__$1 = (function (){var statearr_59408 = state_59391;
(statearr_59408[(8)] = inst_59374);

return statearr_59408;
})();
var statearr_59410_60247 = state_59391__$1;
(statearr_59410_60247[(2)] = null);

(statearr_59410_60247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (5))){
var state_59391__$1 = state_59391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59391__$1,(8),response_channel_60189);
} else {
if((state_val_59392 === (8))){
var inst_59380 = (state_59391[(2)]);
var state_59391__$1 = state_59391;
var statearr_59411_60255 = state_59391__$1;
(statearr_59411_60255[(2)] = inst_59380);

(statearr_59411_60255[(1)] = (7));


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
}
}
});})(seq__59134,chunk__59135,count__59136,i__59137,c__44617__auto___60210,queue_60186,network_60187,sequential_QMARK__60188,response_channel_60189,send_complete_60190,remote,seq__59134__$1,temp__5720__auto__,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__59134,chunk__59135,count__59136,i__59137,switch__44304__auto__,c__44617__auto___60210,queue_60186,network_60187,sequential_QMARK__60188,response_channel_60189,send_complete_60190,remote,seq__59134__$1,temp__5720__auto__,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____0 = (function (){
var statearr_59412 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59412[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__);

(statearr_59412[(1)] = (1));

return statearr_59412;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____1 = (function (state_59391){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_59391);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e59413){if((e59413 instanceof Object)){
var ex__44308__auto__ = e59413;
var statearr_59420_60276 = state_59391;
(statearr_59420_60276[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59413;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60285 = state_59391;
state_59391 = G__60285;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__ = function(state_59391){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____1.call(this,state_59391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__44305__auto__;
})()
;})(seq__59134,chunk__59135,count__59136,i__59137,switch__44304__auto__,c__44617__auto___60210,queue_60186,network_60187,sequential_QMARK__60188,response_channel_60189,send_complete_60190,remote,seq__59134__$1,temp__5720__auto__,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__44619__auto__ = (function (){var statearr_59423 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_59423[(6)] = c__44617__auto___60210);

return statearr_59423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(seq__59134,chunk__59135,count__59136,i__59137,c__44617__auto___60210,queue_60186,network_60187,sequential_QMARK__60188,response_channel_60189,send_complete_60190,remote,seq__59134__$1,temp__5720__auto__,map__59132,map__59132__$1,app,networking,reconciler,send_queues,response_channels))
);



var G__60303 = cljs.core.next(seq__59134__$1);
var G__60304 = null;
var G__60305 = (0);
var G__60306 = (0);
seq__59134 = G__60303;
chunk__59135 = G__60304;
count__59136 = G__60305;
i__59137 = G__60306;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * The reconciler's send method calls FulcroApplication/server-send, which itself requires a reconciler with a
 *   send method already defined. This creates a catch-22 / circular dependency on the reconciler and :send field within
 *   the reconciler.
 * 
 *   To resolve the issue, we def an atom pointing to the reconciler that the send method will deref each time it is
 *   called. This allows us to define the reconciler with a send method that, at the time of initialization, has an app
 *   that points to a nil reconciler. By the end of this function, the app's reconciler reference has been properly set.
 */
fulcro.client.impl.application.generate_reconciler = (function fulcro$client$impl$application$generate_reconciler(p__59425,initial_state,parser,p__59426){
var map__59427 = p__59425;
var map__59427__$1 = (((((!((map__59427 == null))))?(((((map__59427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59427):map__59427);
var app = map__59427__$1;
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59427__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var mutation_merge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59427__$1,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322));
var map__59428 = p__59426;
var map__59428__$1 = (((((!((map__59428 == null))))?(((((map__59428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59428):map__59428);
var reconciler_options = map__59428__$1;
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59428__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743));
var rec_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var remotes = cljs.core.keys(send_queues);
var tempid_migrate = ((function (rec_atom,remotes,map__59427,map__59427__$1,app,send_queues,mutation_merge,map__59428,map__59428__$1,reconciler_options,migrate){
return (function (pure,_,tempids){
var seq__59437_60333 = cljs.core.seq(cljs.core.vals(send_queues));
var chunk__59438_60334 = null;
var count__59439_60335 = (0);
var i__59440_60336 = (0);
while(true){
if((i__59440_60336 < count__59439_60335)){
var queue_60342 = chunk__59438_60334.cljs$core$IIndexed$_nth$arity$2(null,i__59440_60336);
fulcro.client.primitives.rewrite_tempids_in_request_queue(queue_60342,tempids);


var G__60344 = seq__59437_60333;
var G__60345 = chunk__59438_60334;
var G__60346 = count__59439_60335;
var G__60347 = (i__59440_60336 + (1));
seq__59437_60333 = G__60344;
chunk__59438_60334 = G__60345;
count__59439_60335 = G__60346;
i__59440_60336 = G__60347;
continue;
} else {
var temp__5720__auto___60354 = cljs.core.seq(seq__59437_60333);
if(temp__5720__auto___60354){
var seq__59437_60356__$1 = temp__5720__auto___60354;
if(cljs.core.chunked_seq_QMARK_(seq__59437_60356__$1)){
var c__4550__auto___60361 = cljs.core.chunk_first(seq__59437_60356__$1);
var G__60362 = cljs.core.chunk_rest(seq__59437_60356__$1);
var G__60363 = c__4550__auto___60361;
var G__60364 = cljs.core.count(c__4550__auto___60361);
var G__60365 = (0);
seq__59437_60333 = G__60362;
chunk__59438_60334 = G__60363;
count__59439_60335 = G__60364;
i__59440_60336 = G__60365;
continue;
} else {
var queue_60370 = cljs.core.first(seq__59437_60356__$1);
fulcro.client.primitives.rewrite_tempids_in_request_queue(queue_60370,tempids);


var G__60376 = cljs.core.next(seq__59437_60356__$1);
var G__60377 = null;
var G__60378 = (0);
var G__60379 = (0);
seq__59437_60333 = G__60376;
chunk__59438_60334 = G__60377;
count__59439_60335 = G__60378;
i__59440_60336 = G__60379;
continue;
}
} else {
}
}
break;
}

var state_migrate = (function (){var or__4131__auto__ = migrate;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return fulcro.client.primitives.resolve_tempids;
}
})();
return (state_migrate.cljs$core$IFn$_invoke$arity$2 ? state_migrate.cljs$core$IFn$_invoke$arity$2(pure,tempids) : state_migrate.call(null,pure,tempids));
});})(rec_atom,remotes,map__59427,map__59427__$1,app,send_queues,mutation_merge,map__59428,map__59428__$1,reconciler_options,migrate))
;
var complete_initial_state = (function (){var set_default_locale = ((function (rec_atom,remotes,tempid_migrate,map__59427,map__59427__$1,app,send_queues,mutation_merge,map__59428,map__59428__$1,reconciler_options,migrate){
return (function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.Keyword(null,"en","en",88457073)));
});})(rec_atom,remotes,tempid_migrate,map__59427,map__59427__$1,app,send_queues,mutation_merge,map__59428,map__59428__$1,reconciler_options,migrate))
;
var set_network_markers = ((function (set_default_locale,rec_atom,remotes,tempid_migrate,map__59427,map__59427__$1,app,send_queues,mutation_merge,map__59428,map__59428__$1,reconciler_options,migrate){
return (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword("fulcro.client.network","status","fulcro.client.network/status",570358457),cljs.core.zipmap(remotes,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idle","idle",-2007156861))));
});})(set_default_locale,rec_atom,remotes,tempid_migrate,map__59427,map__59427__$1,app,send_queues,mutation_merge,map__59428,map__59428__$1,reconciler_options,migrate))
;
var is_atom_QMARK_ = fulcro.util.atom_QMARK_(initial_state);
if(is_atom_QMARK_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(initial_state,set_default_locale);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(initial_state,set_network_markers);

return initial_state;
} else {
return set_network_markers(set_default_locale(initial_state));
}
})();
var config = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,reconciler_options,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"migrate","migrate",-207110743),tempid_migrate,new cljs.core.Keyword(null,"state","state",-1988618099),complete_initial_state,new cljs.core.Keyword(null,"send","send",-652151114),((function (rec_atom,remotes,tempid_migrate,complete_initial_state,map__59427,map__59427__$1,app,send_queues,mutation_merge,map__59428,map__59428__$1,reconciler_options,migrate){
return (function (sends_keyed_by_remote,result_merge_callback){
return fulcro.client.impl.application.server_send(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.deref(rec_atom)),sends_keyed_by_remote,result_merge_callback);
});})(rec_atom,remotes,tempid_migrate,complete_initial_state,map__59427,map__59427__$1,app,send_queues,mutation_merge,map__59428,map__59428__$1,reconciler_options,migrate))
,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"remotes","remotes",1132366312),remotes,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),((function (rec_atom,remotes,tempid_migrate,complete_initial_state,map__59427,map__59427__$1,app,send_queues,mutation_merge,map__59428,map__59428__$1,reconciler_options,migrate){
return (function (reconciler,app_state,ident,props){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,ident,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.sweep_one,cljs.core.merge),props);
});})(rec_atom,remotes,tempid_migrate,complete_initial_state,map__59427,map__59427__$1,app,send_queues,mutation_merge,map__59428,map__59428__$1,reconciler_options,migrate))
,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),((function (rec_atom,remotes,tempid_migrate,complete_initial_state,map__59427,map__59427__$1,app,send_queues,mutation_merge,map__59428,map__59428__$1,reconciler_options,migrate){
return (function (target,source){
return fulcro.client.primitives.merge_handler(mutation_merge,target,source);
});})(rec_atom,remotes,tempid_migrate,complete_initial_state,map__59427,map__59427__$1,app,send_queues,mutation_merge,map__59428,map__59428__$1,reconciler_options,migrate))
,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null)], 0));
var rec = fulcro.client.primitives.reconciler(config);
cljs.core.reset_BANG_(rec_atom,rec);

return rec;
});
fulcro.client.impl.application.initialize_global_error_callbacks = (function fulcro$client$impl$application$initialize_global_error_callbacks(app){
var seq__59462 = cljs.core.seq(cljs.core.keys(new cljs.core.Keyword(null,"networking","networking",586110628).cljs$core$IFn$_invoke$arity$1(app)));
var chunk__59463 = null;
var count__59464 = (0);
var i__59465 = (0);
while(true){
if((i__59465 < count__59464)){
var remote = chunk__59463.cljs$core$IIndexed$_nth$arity$2(null,i__59465);
var cb_atom_60420 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),remote,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(fulcro.util.atom_QMARK_(cb_atom_60420)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_60420,((function (seq__59462,chunk__59463,count__59464,i__59465,cb_atom_60420,remote){
return (function (p1__59461_SHARP_){
if(cljs.core.fn_QMARK_(p1__59461_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__59461_SHARP_,fulcro.client.primitives.app_state(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__59462,chunk__59463,count__59464,i__59465,cb_atom_60420,remote))
);
} else {
}


var G__60429 = seq__59462;
var G__60430 = chunk__59463;
var G__60431 = count__59464;
var G__60432 = (i__59465 + (1));
seq__59462 = G__60429;
chunk__59463 = G__60430;
count__59464 = G__60431;
i__59465 = G__60432;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__59462);
if(temp__5720__auto__){
var seq__59462__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59462__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59462__$1);
var G__60433 = cljs.core.chunk_rest(seq__59462__$1);
var G__60434 = c__4550__auto__;
var G__60435 = cljs.core.count(c__4550__auto__);
var G__60436 = (0);
seq__59462 = G__60433;
chunk__59463 = G__60434;
count__59464 = G__60435;
i__59465 = G__60436;
continue;
} else {
var remote = cljs.core.first(seq__59462__$1);
var cb_atom_60437 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),remote,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(fulcro.util.atom_QMARK_(cb_atom_60437)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_60437,((function (seq__59462,chunk__59463,count__59464,i__59465,cb_atom_60437,remote,seq__59462__$1,temp__5720__auto__){
return (function (p1__59461_SHARP_){
if(cljs.core.fn_QMARK_(p1__59461_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__59461_SHARP_,fulcro.client.primitives.app_state(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__59462,chunk__59463,count__59464,i__59465,cb_atom_60437,remote,seq__59462__$1,temp__5720__auto__))
);
} else {
}


var G__60440 = cljs.core.next(seq__59462__$1);
var G__60441 = null;
var G__60442 = (0);
var G__60443 = (0);
seq__59462 = G__60440;
chunk__59463 = G__60441;
count__59464 = G__60442;
i__59465 = G__60443;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Read function for the built-in parser.
 * 
 *   *** NOTE: This function only runs when it is called without a target -- it is not triggered for remote reads. To
 *   trigger a remote read, use the `fulcro/data-fetch` namespace. ***
 * 
 *   If a user-read is supplied, *it will be allowed* to trigger remote reads. This is not recommended, as you
 *   will probably have to augment the networking layer to get it to do what you mean. Use `load` instead. You have
 *   been warned. Triggering remote reads is allowed, but discouraged and unsupported.
 * 
 *   Returns the current locale when reading the :ui/locale keyword. Otherwise pulls data out of the app-state.
 *   
 */
fulcro.client.impl.application.read_local = (function fulcro$client$impl$application$read_local(user_read,p__59479,dkey,params){
var map__59480 = p__59479;
var map__59480__$1 = (((((!((map__59480 == null))))?(((((map__59480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59480):map__59480);
var env = map__59480__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59480__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59480__$1,new cljs.core.Keyword(null,"target","target",253001721));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59480__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59480__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var temp__5718__auto__ = (user_read.cljs$core$IFn$_invoke$arity$3 ? user_read.cljs$core$IFn$_invoke$arity$3(env,dkey,params) : user_read.call(null,env,dkey,params));
if(cljs.core.truth_(temp__5718__auto__)){
var custom_result = temp__5718__auto__;
return custom_result;
} else {
if(cljs.core.not(target)){
var top_level_prop = (query == null);
var key = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return dkey;
}
})();
var by_ident_QMARK_ = fulcro.util.ident_QMARK_(key);
var union_QMARK_ = cljs.core.map_QMARK_(query);
var data = ((by_ident_QMARK_)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),key):cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),key));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),((union_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([key,query])], null),cljs.core.deref(state),cljs.core.deref(state)),key):((top_level_prop)?data:fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,data,cljs.core.deref(state))
))], null);
} else {
return null;
}
}
});
/**
 * This is the entry point for writes. In general this is simply a call to the multi-method
 *   defined by Fulcro (mutate); however, Fulcro supports the concept of a global `post-mutate`
 *   function that will be called anytime the general mutate has an action that is desired. This
 *   can be useful, for example, in cases where you have some post-processing that needs
 *   to happen for a given (sub)set of mutations (that perhaps you did not define).
 */
fulcro.client.impl.application.write_entry_point = (function fulcro$client$impl$application$write_entry_point(env,k,params){
var rv = (function (){try{return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(env,k,params) : fulcro.client.mutations.mutate.call(null,env,k,params));
}catch (e59484){var e = e59484;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),372], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mutation ",k," failed with exception",e], 0));
}catch (e59485){if((e59485 instanceof Error)){
var e__48124__auto___60455 = e59485;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),372], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___60455], 0));
} else {
throw e59485;

}
}
return null;
}})();
var action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(rv);
if(cljs.core.truth_(action)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rv,new cljs.core.Keyword(null,"action","action",-811238024),((function (rv,action){
return (function (){
try{var action_result = (action.cljs$core$IFn$_invoke$arity$3 ? action.cljs$core$IFn$_invoke$arity$3(env,k,params) : action.call(null,env,k,params));
try{(fulcro.client.mutations.post_mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.post_mutate.cljs$core$IFn$_invoke$arity$3(env,k,params) : fulcro.client.mutations.post_mutate.call(null,env,k,params));
}catch (e59490){var e_60464 = e59490;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),381], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Post mutate failed on dispatch to ",k], 0));
}catch (e59491){if((e59491 instanceof Error)){
var e__48124__auto___60465 = e59491;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),381], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___60465], 0));
} else {
throw e59491;

}
}}
return action_result;
}catch (e59487){var e = e59487;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),384], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mutation ",k," failed with exception"], 0));
}catch (e59488){if((e59488 instanceof Error)){
var e__48124__auto___60468 = e59488;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),384], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___60468], 0));
} else {
throw e59488;

}
}
if(cljs.core.truth_(goog.DEBUG)){
console.error(e);
} else {
}

throw e;
}});})(rv,action))
);
} else {
return rv;
}
});

//# sourceMappingURL=fulcro.client.impl.application.js.map
