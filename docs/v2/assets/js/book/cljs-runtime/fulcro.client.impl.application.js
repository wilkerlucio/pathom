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
fulcro.client.impl.application.fallback_handler = (function fulcro$client$impl$application$fallback_handler(p__67282,query){
var map__67283 = p__67282;
var map__67283__$1 = (((((!((map__67283 == null))))?(((((map__67283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67283):map__67283);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67283__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return ((function (map__67283,map__67283__$1,reconciler){
return (function (error){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.client.primitives.app_state(reconciler),cljs.core.assoc,new cljs.core.Keyword("fulcro","server-error","fulcro/server-error",-1254037316),error);

var temp__5718__auto__ = fulcro.client.primitives.fallback_tx(query,error);
if(cljs.core.truth_(temp__5718__auto__)){
var q = temp__5718__auto__;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),25], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Transaction failed. Running fallback.",q], 0));
}catch (e67298){if((e67298 instanceof Error)){
var e__55143__auto___68750 = e67298;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),25], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__55143__auto___68750], 0));
} else {
throw e67298;

}
}
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,q);
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),27], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Fallback triggered, but no fallbacks were defined."], 0));
}catch (e67300){if((e67300 instanceof Error)){
var e__55143__auto__ = e67300;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),27], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__55143__auto__], 0));
} else {
throw e67300;

}
}}
});
;})(map__67283,map__67283__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
fulcro.client.impl.application._enqueue = (function fulcro$client$impl$application$_enqueue(reconciler,remote,q,v){
fulcro.client.primitives.add_pending_request(reconciler,remote,v);

var c__51169__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto__){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto__){
return (function (state_67314){
var state_val_67315 = (state_67314[(1)]);
if((state_val_67315 === (1))){
var state_67314__$1 = state_67314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67314__$1,(2),q,v);
} else {
if((state_val_67315 === (2))){
var inst_67312 = (state_67314[(2)]);
var state_67314__$1 = state_67314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67314__$1,inst_67312);
} else {
return null;
}
}
});})(c__51169__auto__))
;
return ((function (switch__50952__auto__,c__51169__auto__){
return (function() {
var fulcro$client$impl$application$_enqueue_$_state_machine__50953__auto__ = null;
var fulcro$client$impl$application$_enqueue_$_state_machine__50953__auto____0 = (function (){
var statearr_67320 = [null,null,null,null,null,null,null];
(statearr_67320[(0)] = fulcro$client$impl$application$_enqueue_$_state_machine__50953__auto__);

(statearr_67320[(1)] = (1));

return statearr_67320;
});
var fulcro$client$impl$application$_enqueue_$_state_machine__50953__auto____1 = (function (state_67314){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_67314);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e67324){if((e67324 instanceof Object)){
var ex__50956__auto__ = e67324;
var statearr_67325_68760 = state_67314;
(statearr_67325_68760[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67324;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68761 = state_67314;
state_67314 = G__68761;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
fulcro$client$impl$application$_enqueue_$_state_machine__50953__auto__ = function(state_67314){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$_enqueue_$_state_machine__50953__auto____0.call(this);
case 1:
return fulcro$client$impl$application$_enqueue_$_state_machine__50953__auto____1.call(this,state_67314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$impl$application$_enqueue_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$_enqueue_$_state_machine__50953__auto____0;
fulcro$client$impl$application$_enqueue_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$_enqueue_$_state_machine__50953__auto____1;
return fulcro$client$impl$application$_enqueue_$_state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto__))
})();
var state__51171__auto__ = (function (){var statearr_67330 = f__51170__auto__();
(statearr_67330[(6)] = c__51169__auto__);

return statearr_67330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto__))
);

return c__51169__auto__;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("fulcro.client.impl.application","-enqueue","fulcro.client.impl.application/-enqueue",-1535560443,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"any?","any?",-1959531460),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"any?","any?",-1959531460),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"payload","payload",-383036092)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any?","any?",-1959531460),cljs.core.keyword_QMARK_,cljs.core.any_QMARK_,new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any?","any?",-1959531460),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"any?","any?",-1959531460),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * Do a properly-plumbed network send. This function recursively strips ui attributes from the tx and pushes the tx over
 *   the network. It installs the given on-load and on-error handlers to deal with the network response. DEPRECATED: If
 *   you're doing something really low-level with networking, use send-with-history-tracking.
 */
fulcro.client.impl.application.real_send = (function fulcro$client$impl$application$real_send(var_args){
var G__67348 = arguments.length;
switch (G__67348) {
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

fulcro.client.impl.application.real_send.cljs$core$IFn$_invoke$arity$2 = (function (net,p__67351){
var map__67353 = p__67351;
var map__67353__$1 = (((((!((map__67353 == null))))?(((((map__67353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67353):map__67353);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67353__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67353__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var on_done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67353__$1,new cljs.core.Keyword(null,"on-done","on-done",-699252077));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67353__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67353__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67353__$1,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819));
var progress_tx = ((function (map__67353,map__67353__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (p1__67341_SHARP_){
return fulcro.client.mutations.progressive_update_transaction(tx,p1__67341_SHARP_);
});})(map__67353,map__67353__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
;
var tx__$1 = fulcro.client.primitives.strip_ui(tx);
if((((!((net == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === net.fulcro$client$network$ProgressiveTransfer$))))?true:false):false)){
return fulcro.client.network.updating_send(net,tx__$1,on_done,on_error,on_load);
} else {
if((((!((net == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === net.fulcro$client$network$FulcroNetwork$))))?true:false):false)){
return fulcro.client.network.send(net,tx__$1,on_done,on_error);
} else {
if((((!((net == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === net.fulcro$client$network$FulcroRemoteI$))))?true:false):false)){
var on_done__$1 = ((function (progress_tx,tx__$1,map__67353,map__67353__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (p__67373){
var map__67374 = p__67373;
var map__67374__$1 = (((((!((map__67374 == null))))?(((((map__67374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67374):map__67374);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67374__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var transaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67374__$1,new cljs.core.Keyword(null,"transaction","transaction",1777321997));
return (on_done.cljs$core$IFn$_invoke$arity$2 ? on_done.cljs$core$IFn$_invoke$arity$2(body,transaction) : on_done.call(null,body,transaction));
});})(progress_tx,tx__$1,map__67353,map__67353__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
;
var on_error__$1 = ((function (on_done__$1,progress_tx,tx__$1,map__67353,map__67353__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (p__67397){
var map__67402 = p__67397;
var map__67402__$1 = (((((!((map__67402 == null))))?(((((map__67402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67402):map__67402);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67402__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(body) : on_error.call(null,body));
});})(on_done__$1,progress_tx,tx__$1,map__67353,map__67353__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
;
var on_load__$1 = ((function (on_done__$1,on_error__$1,progress_tx,tx__$1,map__67353,map__67353__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (progress){
if(cljs.core.truth_(reconciler)){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,progress_tx(progress));
} else {
return null;
}
});})(on_done__$1,on_error__$1,progress_tx,tx__$1,map__67353,map__67353__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
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
var G__67419 = arguments.length;
switch (G__67419) {
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

fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2 = (function (net,p__67421){
var map__67423 = p__67421;
var map__67423__$1 = (((((!((map__67423 == null))))?(((((map__67423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67423):map__67423);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67423__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67423__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67423__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var on_done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67423__$1,new cljs.core.Keyword(null,"on-done","on-done",-699252077));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67423__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67423__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var map__67432 = payload;
var map__67432__$1 = (((((!((map__67432 == null))))?(((((map__67432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67432):map__67432);
var history_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67432__$1,new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564));
var tx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67432__$1,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67432__$1,new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012));
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67432__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var uuid = fulcro.util.unique_key();
var network_activity = fulcro.client.primitives.get_network_activity(reconciler);
var with_network_activity_tracking = ((function (map__67432,map__67432__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__67423,map__67423__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (handler){
return ((function (map__67432,map__67432__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__67423,map__67423__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (resp,items_or_tx){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(network_activity,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remote,new cljs.core.Keyword(null,"active-requests","active-requests",1354177961)], null),((function (map__67432,map__67432__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__67423,map__67423__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (p1__67411_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__67411_SHARP_,uuid);
});})(map__67432,map__67432__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__67423,map__67423__$1,reconciler,payload,tx,on_done,on_error,on_load))
);

setTimeout(((function (map__67432,map__67432__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__67423,map__67423__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"active-requests","active-requests",1354177961).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(network_activity),remote))),(0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.client.primitives.app_state(reconciler),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","status","fulcro.client.network/status",570358457),remote], null),new cljs.core.Keyword(null,"idle","idle",-2007156861));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(network_activity,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remote,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"idle","idle",-2007156861));

return fulcro.client.impl.protocols.queue_BANG_(reconciler,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","status","fulcro.client.network/status",570358457)], null));
} else {
return null;
}
});})(map__67432,map__67432__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__67423,map__67423__$1,reconciler,payload,tx,on_done,on_error,on_load))
,(0));

return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(resp,items_or_tx) : handler.call(null,resp,items_or_tx));
});
;})(map__67432,map__67432__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__67423,map__67423__$1,reconciler,payload,tx,on_done,on_error,on_load))
});})(map__67432,map__67432__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__67423,map__67423__$1,reconciler,payload,tx,on_done,on_error,on_load))
;
var with_history_recording = ((function (map__67432,map__67432__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,with_network_activity_tracking,map__67423,map__67423__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (handler){
return ((function (map__67432,map__67432__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,with_network_activity_tracking,map__67423,map__67423__$1,reconciler,payload,tx,on_done,on_error,on_load){
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
;})(map__67432,map__67432__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,with_network_activity_tracking,map__67423,map__67423__$1,reconciler,payload,tx,on_done,on_error,on_load))
});})(map__67432,map__67432__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,with_network_activity_tracking,map__67423,map__67423__$1,reconciler,payload,tx,on_done,on_error,on_load))
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
}catch (e67446){if((e67446 instanceof Error)){
var e__55143__auto___68825 = e67446;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),89], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__55143__auto___68825], 0));
} else {
throw e67446;

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
}catch (e67502){if((e67502 instanceof Error)){
var e__55143__auto___68835 = e67502;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),112], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__55143__auto___68835], 0));
} else {
throw e67502;

}
}
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx], null);
} else {
if(cljs.core.empty_QMARK_(tx)){
return cljs.core.PersistentVector.EMPTY;
} else {
var dispatch_symbols = (function (tx__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_)),(function (){var G__67513 = tx__$1;
var G__67513__$1 = (((G__67513 == null))?null:fulcro.client.primitives.query__GT_ast(G__67513));
if((G__67513__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__67513__$1);
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
var map__67508 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (dispatch_symbols,compatible_abort_QMARK_,can_be_included_QMARK_){
return (function (p__67541,expr){
var map__67542 = p__67541;
var map__67542__$1 = (((((!((map__67542 == null))))?(((((map__67542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67542):map__67542);
var acc = map__67542__$1;
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67542__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
if(can_be_included_QMARK_(current,expr)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.conj,expr);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"transactions","transactions",-1425846118),cljs.core.conj,current),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr], null));
}
});})(dispatch_symbols,compatible_abort_QMARK_,can_be_included_QMARK_))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transactions","transactions",-1425846118),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.PersistentVector.EMPTY], null),tx);
var map__67508__$1 = (((((!((map__67508 == null))))?(((((map__67508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67508):map__67508);
var transactions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67508__$1,new cljs.core.Keyword(null,"transactions","transactions",-1425846118));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67508__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
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
fulcro.client.impl.application.enqueue_mutations = (function fulcro$client$impl$application$enqueue_mutations(p__67557,remote_tx_map,cb){
var map__67558 = p__67557;
var map__67558__$1 = (((((!((map__67558 == null))))?(((((map__67558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67558):map__67558);
var app = map__67558__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67558__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67558__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var history = fulcro.client.primitives.get_history(reconciler);
var seq__67562 = cljs.core.seq(cljs.core.keys(remote_tx_map));
var chunk__67563 = null;
var count__67564 = (0);
var i__67565 = (0);
while(true){
if((i__67565 < count__67564)){
var remote = chunk__67563.cljs$core$IIndexed$_nth$arity$2(null,i__67565);
var queue_68858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_68859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var refresh_set_68860 = (function (){var or__4131__auto__ = (function (){var G__67700 = full_remote_transaction_68859;
var G__67700__$1 = (((G__67700 == null))?null:cljs.core.meta(G__67700));
var G__67700__$2 = (((G__67700__$1 == null))?null:new cljs.core.Keyword("fulcro.client.primitives","refresh","fulcro.client.primitives/refresh",481513561).cljs$core$IFn$_invoke$arity$1(G__67700__$1));
if((G__67700__$2 == null)){
return null;
} else {
return cljs.core.vec(G__67700__$2);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var tx_time_68861 = (function (){var G__67707 = full_remote_transaction_68859;
var G__67707__$1 = (((G__67707 == null))?null:cljs.core.meta(G__67707));
if((G__67707__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456).cljs$core$IFn$_invoke$arity$1(G__67707__$1);
}
})();
var fallback_68862 = fulcro.client.impl.application.fallback_handler(app,full_remote_transaction_68859);
var desired_remote_mutations_68863 = fulcro.client.primitives.remove_loads_and_fallbacks(full_remote_transaction_68859);
var tx_list_68864 = fulcro.client.impl.application.split_mutations(desired_remote_mutations_68863);
var has_mutations_QMARK__68865 = ((function (seq__67562,chunk__67563,count__67564,i__67565,queue_68858,full_remote_transaction_68859,refresh_set_68860,tx_time_68861,fallback_68862,desired_remote_mutations_68863,tx_list_68864,remote,history,map__67558,map__67558__$1,app,reconciler,send_queues){
return (function (tx){
return (cljs.core.count(tx) > (0));
});})(seq__67562,chunk__67563,count__67564,i__67565,queue_68858,full_remote_transaction_68859,refresh_set_68860,tx_time_68861,fallback_68862,desired_remote_mutations_68863,tx_list_68864,remote,history,map__67558,map__67558__$1,app,reconciler,send_queues))
;
var payload_68866 = ((function (seq__67562,chunk__67563,count__67564,i__67565,queue_68858,full_remote_transaction_68859,refresh_set_68860,tx_time_68861,fallback_68862,desired_remote_mutations_68863,tx_list_68864,has_mutations_QMARK__68865,remote,history,map__67558,map__67558__$1,app,reconciler,send_queues){
return (function (tx){
var abort_id = (function (){var G__67729 = tx;
var G__67729__$1 = (((G__67729 == null))?null:fulcro.client.mutations.abort_ids(G__67729));
if((G__67729__$1 == null)){
return null;
} else {
return cljs.core.first(G__67729__$1);
}
})();
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),tx,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456),tx_time_68861,new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564),history,new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012),remote,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267),abort_id,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603),((function (seq__67562,chunk__67563,count__67564,i__67565,abort_id,queue_68858,full_remote_transaction_68859,refresh_set_68860,tx_time_68861,fallback_68862,desired_remote_mutations_68863,tx_list_68864,has_mutations_QMARK__68865,remote,history,map__67558,map__67558__$1,app,reconciler,send_queues){
return (function (result,mtx){
var G__67730 = result;
var G__67731 = (function (){var or__4131__auto__ = mtx;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return tx;
}
})();
var G__67732 = remote;
return (cb.cljs$core$IFn$_invoke$arity$3 ? cb.cljs$core$IFn$_invoke$arity$3(G__67730,G__67731,G__67732) : cb.call(null,G__67730,G__67731,G__67732));
});})(seq__67562,chunk__67563,count__67564,i__67565,abort_id,queue_68858,full_remote_transaction_68859,refresh_set_68860,tx_time_68861,fallback_68862,desired_remote_mutations_68863,tx_list_68864,has_mutations_QMARK__68865,remote,history,map__67558,map__67558__$1,app,reconciler,send_queues))
,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629),((function (seq__67562,chunk__67563,count__67564,i__67565,abort_id,queue_68858,full_remote_transaction_68859,refresh_set_68860,tx_time_68861,fallback_68862,desired_remote_mutations_68863,tx_list_68864,has_mutations_QMARK__68865,remote,history,map__67558,map__67558__$1,app,reconciler,send_queues){
return (function (result){
return fallback_68862(result);
});})(seq__67562,chunk__67563,count__67564,i__67565,abort_id,queue_68858,full_remote_transaction_68859,refresh_set_68860,tx_time_68861,fallback_68862,desired_remote_mutations_68863,tx_list_68864,has_mutations_QMARK__68865,remote,history,map__67558,map__67558__$1,app,reconciler,send_queues))
], null);
});})(seq__67562,chunk__67563,count__67564,i__67565,queue_68858,full_remote_transaction_68859,refresh_set_68860,tx_time_68861,fallback_68862,desired_remote_mutations_68863,tx_list_68864,has_mutations_QMARK__68865,remote,history,map__67558,map__67558__$1,app,reconciler,send_queues))
;
var seq__67733_68885 = cljs.core.seq(tx_list_68864);
var chunk__67734_68886 = null;
var count__67735_68887 = (0);
var i__67736_68888 = (0);
while(true){
if((i__67736_68888 < count__67735_68887)){
var tx_68889 = chunk__67734_68886.cljs$core$IIndexed$_nth$arity$2(null,i__67736_68888);
if(has_mutations_QMARK__68865(tx_68889)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_68858,payload_68866(tx_68889));
} else {
}


var G__68890 = seq__67733_68885;
var G__68891 = chunk__67734_68886;
var G__68892 = count__67735_68887;
var G__68893 = (i__67736_68888 + (1));
seq__67733_68885 = G__68890;
chunk__67734_68886 = G__68891;
count__67735_68887 = G__68892;
i__67736_68888 = G__68893;
continue;
} else {
var temp__5720__auto___68896 = cljs.core.seq(seq__67733_68885);
if(temp__5720__auto___68896){
var seq__67733_68897__$1 = temp__5720__auto___68896;
if(cljs.core.chunked_seq_QMARK_(seq__67733_68897__$1)){
var c__4550__auto___68898 = cljs.core.chunk_first(seq__67733_68897__$1);
var G__68899 = cljs.core.chunk_rest(seq__67733_68897__$1);
var G__68900 = c__4550__auto___68898;
var G__68901 = cljs.core.count(c__4550__auto___68898);
var G__68902 = (0);
seq__67733_68885 = G__68899;
chunk__67734_68886 = G__68900;
count__67735_68887 = G__68901;
i__67736_68888 = G__68902;
continue;
} else {
var tx_68904 = cljs.core.first(seq__67733_68897__$1);
if(has_mutations_QMARK__68865(tx_68904)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_68858,payload_68866(tx_68904));
} else {
}


var G__68905 = cljs.core.next(seq__67733_68897__$1);
var G__68906 = null;
var G__68907 = (0);
var G__68908 = (0);
seq__67733_68885 = G__68905;
chunk__67734_68886 = G__68906;
count__67735_68887 = G__68907;
i__67736_68888 = G__68908;
continue;
}
} else {
}
}
break;
}


var G__68909 = seq__67562;
var G__68910 = chunk__67563;
var G__68911 = count__67564;
var G__68912 = (i__67565 + (1));
seq__67562 = G__68909;
chunk__67563 = G__68910;
count__67564 = G__68911;
i__67565 = G__68912;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__67562);
if(temp__5720__auto__){
var seq__67562__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67562__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__67562__$1);
var G__68914 = cljs.core.chunk_rest(seq__67562__$1);
var G__68915 = c__4550__auto__;
var G__68916 = cljs.core.count(c__4550__auto__);
var G__68917 = (0);
seq__67562 = G__68914;
chunk__67563 = G__68915;
count__67564 = G__68916;
i__67565 = G__68917;
continue;
} else {
var remote = cljs.core.first(seq__67562__$1);
var queue_68919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_68920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var refresh_set_68921 = (function (){var or__4131__auto__ = (function (){var G__67784 = full_remote_transaction_68920;
var G__67784__$1 = (((G__67784 == null))?null:cljs.core.meta(G__67784));
var G__67784__$2 = (((G__67784__$1 == null))?null:new cljs.core.Keyword("fulcro.client.primitives","refresh","fulcro.client.primitives/refresh",481513561).cljs$core$IFn$_invoke$arity$1(G__67784__$1));
if((G__67784__$2 == null)){
return null;
} else {
return cljs.core.vec(G__67784__$2);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var tx_time_68922 = (function (){var G__67790 = full_remote_transaction_68920;
var G__67790__$1 = (((G__67790 == null))?null:cljs.core.meta(G__67790));
if((G__67790__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456).cljs$core$IFn$_invoke$arity$1(G__67790__$1);
}
})();
var fallback_68923 = fulcro.client.impl.application.fallback_handler(app,full_remote_transaction_68920);
var desired_remote_mutations_68924 = fulcro.client.primitives.remove_loads_and_fallbacks(full_remote_transaction_68920);
var tx_list_68925 = fulcro.client.impl.application.split_mutations(desired_remote_mutations_68924);
var has_mutations_QMARK__68926 = ((function (seq__67562,chunk__67563,count__67564,i__67565,queue_68919,full_remote_transaction_68920,refresh_set_68921,tx_time_68922,fallback_68923,desired_remote_mutations_68924,tx_list_68925,remote,seq__67562__$1,temp__5720__auto__,history,map__67558,map__67558__$1,app,reconciler,send_queues){
return (function (tx){
return (cljs.core.count(tx) > (0));
});})(seq__67562,chunk__67563,count__67564,i__67565,queue_68919,full_remote_transaction_68920,refresh_set_68921,tx_time_68922,fallback_68923,desired_remote_mutations_68924,tx_list_68925,remote,seq__67562__$1,temp__5720__auto__,history,map__67558,map__67558__$1,app,reconciler,send_queues))
;
var payload_68927 = ((function (seq__67562,chunk__67563,count__67564,i__67565,queue_68919,full_remote_transaction_68920,refresh_set_68921,tx_time_68922,fallback_68923,desired_remote_mutations_68924,tx_list_68925,has_mutations_QMARK__68926,remote,seq__67562__$1,temp__5720__auto__,history,map__67558,map__67558__$1,app,reconciler,send_queues){
return (function (tx){
var abort_id = (function (){var G__67801 = tx;
var G__67801__$1 = (((G__67801 == null))?null:fulcro.client.mutations.abort_ids(G__67801));
if((G__67801__$1 == null)){
return null;
} else {
return cljs.core.first(G__67801__$1);
}
})();
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),tx,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456),tx_time_68922,new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564),history,new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012),remote,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267),abort_id,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603),((function (seq__67562,chunk__67563,count__67564,i__67565,abort_id,queue_68919,full_remote_transaction_68920,refresh_set_68921,tx_time_68922,fallback_68923,desired_remote_mutations_68924,tx_list_68925,has_mutations_QMARK__68926,remote,seq__67562__$1,temp__5720__auto__,history,map__67558,map__67558__$1,app,reconciler,send_queues){
return (function (result,mtx){
var G__67804 = result;
var G__67805 = (function (){var or__4131__auto__ = mtx;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return tx;
}
})();
var G__67806 = remote;
return (cb.cljs$core$IFn$_invoke$arity$3 ? cb.cljs$core$IFn$_invoke$arity$3(G__67804,G__67805,G__67806) : cb.call(null,G__67804,G__67805,G__67806));
});})(seq__67562,chunk__67563,count__67564,i__67565,abort_id,queue_68919,full_remote_transaction_68920,refresh_set_68921,tx_time_68922,fallback_68923,desired_remote_mutations_68924,tx_list_68925,has_mutations_QMARK__68926,remote,seq__67562__$1,temp__5720__auto__,history,map__67558,map__67558__$1,app,reconciler,send_queues))
,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629),((function (seq__67562,chunk__67563,count__67564,i__67565,abort_id,queue_68919,full_remote_transaction_68920,refresh_set_68921,tx_time_68922,fallback_68923,desired_remote_mutations_68924,tx_list_68925,has_mutations_QMARK__68926,remote,seq__67562__$1,temp__5720__auto__,history,map__67558,map__67558__$1,app,reconciler,send_queues){
return (function (result){
return fallback_68923(result);
});})(seq__67562,chunk__67563,count__67564,i__67565,abort_id,queue_68919,full_remote_transaction_68920,refresh_set_68921,tx_time_68922,fallback_68923,desired_remote_mutations_68924,tx_list_68925,has_mutations_QMARK__68926,remote,seq__67562__$1,temp__5720__auto__,history,map__67558,map__67558__$1,app,reconciler,send_queues))
], null);
});})(seq__67562,chunk__67563,count__67564,i__67565,queue_68919,full_remote_transaction_68920,refresh_set_68921,tx_time_68922,fallback_68923,desired_remote_mutations_68924,tx_list_68925,has_mutations_QMARK__68926,remote,seq__67562__$1,temp__5720__auto__,history,map__67558,map__67558__$1,app,reconciler,send_queues))
;
var seq__67808_68939 = cljs.core.seq(tx_list_68925);
var chunk__67809_68940 = null;
var count__67810_68941 = (0);
var i__67811_68942 = (0);
while(true){
if((i__67811_68942 < count__67810_68941)){
var tx_68945 = chunk__67809_68940.cljs$core$IIndexed$_nth$arity$2(null,i__67811_68942);
if(has_mutations_QMARK__68926(tx_68945)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_68919,payload_68927(tx_68945));
} else {
}


var G__68946 = seq__67808_68939;
var G__68947 = chunk__67809_68940;
var G__68948 = count__67810_68941;
var G__68949 = (i__67811_68942 + (1));
seq__67808_68939 = G__68946;
chunk__67809_68940 = G__68947;
count__67810_68941 = G__68948;
i__67811_68942 = G__68949;
continue;
} else {
var temp__5720__auto___68954__$1 = cljs.core.seq(seq__67808_68939);
if(temp__5720__auto___68954__$1){
var seq__67808_68955__$1 = temp__5720__auto___68954__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67808_68955__$1)){
var c__4550__auto___68956 = cljs.core.chunk_first(seq__67808_68955__$1);
var G__68957 = cljs.core.chunk_rest(seq__67808_68955__$1);
var G__68958 = c__4550__auto___68956;
var G__68959 = cljs.core.count(c__4550__auto___68956);
var G__68960 = (0);
seq__67808_68939 = G__68957;
chunk__67809_68940 = G__68958;
count__67810_68941 = G__68959;
i__67811_68942 = G__68960;
continue;
} else {
var tx_68961 = cljs.core.first(seq__67808_68955__$1);
if(has_mutations_QMARK__68926(tx_68961)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_68919,payload_68927(tx_68961));
} else {
}


var G__68962 = cljs.core.next(seq__67808_68955__$1);
var G__68963 = null;
var G__68964 = (0);
var G__68965 = (0);
seq__67808_68939 = G__68962;
chunk__67809_68940 = G__68963;
count__67810_68941 = G__68964;
i__67811_68942 = G__68965;
continue;
}
} else {
}
}
break;
}


var G__68967 = cljs.core.next(seq__67562__$1);
var G__68968 = null;
var G__68969 = (0);
var G__68970 = (0);
seq__67562 = G__68967;
chunk__67563 = G__68968;
count__67564 = G__68969;
i__67565 = G__68970;
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
fulcro.client.impl.application.enqueue_reads = (function fulcro$client$impl$application$enqueue_reads(p__67842){
var map__67843 = p__67842;
var map__67843__$1 = (((((!((map__67843 == null))))?(((((map__67843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67843):map__67843);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67843__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67843__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67843__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var seq__67847 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__67848 = null;
var count__67849 = (0);
var i__67850 = (0);
while(true){
if((i__67850 < count__67849)){
var remote = chunk__67848.cljs$core$IIndexed$_nth$arity$2(null,i__67850);
var queue_68980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_68981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_68982 = fulcro.client.impl.data_fetch.mark_parallel_loading_BANG_(remote,reconciler);
var seq__67971_68983 = cljs.core.seq(parallel_payload_68982);
var chunk__67972_68984 = null;
var count__67973_68985 = (0);
var i__67974_68986 = (0);
while(true){
if((i__67974_68986 < count__67973_68985)){
var map__67995_68989 = chunk__67972_68984.cljs$core$IIndexed$_nth$arity$2(null,i__67974_68986);
var map__67995_68990__$1 = (((((!((map__67995_68989 == null))))?(((((map__67995_68989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67995_68989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67995_68989):map__67995_68989);
var payload_68991 = map__67995_68990__$1;
var query_68992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67995_68990__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load_68993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67995_68990__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error_68994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67995_68990__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors_68995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67995_68990__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id_68996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67995_68990__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var on_load_SINGLEQUOTE__69007 = ((function (seq__67971_68983,chunk__67972_68984,count__67973_68985,i__67974_68986,seq__67847,chunk__67848,count__67849,i__67850,map__67995_68989,map__67995_68990__$1,payload_68991,query_68992,on_load_68993,on_error_68994,load_descriptors_68995,abort_id_68996,queue_68980,network_68981,parallel_payload_68982,remote,map__67843,map__67843__$1,send_queues,reconciler,networking){
return (function (p1__67840_SHARP_){
return (on_load_68993.cljs$core$IFn$_invoke$arity$2 ? on_load_68993.cljs$core$IFn$_invoke$arity$2(p1__67840_SHARP_,load_descriptors_68995) : on_load_68993.call(null,p1__67840_SHARP_,load_descriptors_68995));
});})(seq__67971_68983,chunk__67972_68984,count__67973_68985,i__67974_68986,seq__67847,chunk__67848,count__67849,i__67850,map__67995_68989,map__67995_68990__$1,payload_68991,query_68992,on_load_68993,on_error_68994,load_descriptors_68995,abort_id_68996,queue_68980,network_68981,parallel_payload_68982,remote,map__67843,map__67843__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__69008 = ((function (seq__67971_68983,chunk__67972_68984,count__67973_68985,i__67974_68986,seq__67847,chunk__67848,count__67849,i__67850,on_load_SINGLEQUOTE__69007,map__67995_68989,map__67995_68990__$1,payload_68991,query_68992,on_load_68993,on_error_68994,load_descriptors_68995,abort_id_68996,queue_68980,network_68981,parallel_payload_68982,remote,map__67843,map__67843__$1,send_queues,reconciler,networking){
return (function (p1__67841_SHARP_){
return (on_error_68994.cljs$core$IFn$_invoke$arity$2 ? on_error_68994.cljs$core$IFn$_invoke$arity$2(p1__67841_SHARP_,load_descriptors_68995) : on_error_68994.call(null,p1__67841_SHARP_,load_descriptors_68995));
});})(seq__67971_68983,chunk__67972_68984,count__67973_68985,i__67974_68986,seq__67847,chunk__67848,count__67849,i__67850,on_load_SINGLEQUOTE__69007,map__67995_68989,map__67995_68990__$1,payload_68991,query_68992,on_load_68993,on_error_68994,load_descriptors_68995,abort_id_68996,queue_68980,network_68981,parallel_payload_68982,remote,map__67843,map__67843__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_68981,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload_68991,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),query_68992,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_load_SINGLEQUOTE__69007,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error_SINGLEQUOTE__69008,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_68996], null));


var G__69024 = seq__67971_68983;
var G__69025 = chunk__67972_68984;
var G__69026 = count__67973_68985;
var G__69027 = (i__67974_68986 + (1));
seq__67971_68983 = G__69024;
chunk__67972_68984 = G__69025;
count__67973_68985 = G__69026;
i__67974_68986 = G__69027;
continue;
} else {
var temp__5720__auto___69032 = cljs.core.seq(seq__67971_68983);
if(temp__5720__auto___69032){
var seq__67971_69033__$1 = temp__5720__auto___69032;
if(cljs.core.chunked_seq_QMARK_(seq__67971_69033__$1)){
var c__4550__auto___69034 = cljs.core.chunk_first(seq__67971_69033__$1);
var G__69036 = cljs.core.chunk_rest(seq__67971_69033__$1);
var G__69037 = c__4550__auto___69034;
var G__69038 = cljs.core.count(c__4550__auto___69034);
var G__69039 = (0);
seq__67971_68983 = G__69036;
chunk__67972_68984 = G__69037;
count__67973_68985 = G__69038;
i__67974_68986 = G__69039;
continue;
} else {
var map__68010_69044 = cljs.core.first(seq__67971_69033__$1);
var map__68010_69045__$1 = (((((!((map__68010_69044 == null))))?(((((map__68010_69044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68010_69044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68010_69044):map__68010_69044);
var payload_69046 = map__68010_69045__$1;
var query_69047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68010_69045__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load_69048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68010_69045__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error_69049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68010_69045__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors_69050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68010_69045__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id_69051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68010_69045__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var on_load_SINGLEQUOTE__69055 = ((function (seq__67971_68983,chunk__67972_68984,count__67973_68985,i__67974_68986,seq__67847,chunk__67848,count__67849,i__67850,map__68010_69044,map__68010_69045__$1,payload_69046,query_69047,on_load_69048,on_error_69049,load_descriptors_69050,abort_id_69051,seq__67971_69033__$1,temp__5720__auto___69032,queue_68980,network_68981,parallel_payload_68982,remote,map__67843,map__67843__$1,send_queues,reconciler,networking){
return (function (p1__67840_SHARP_){
return (on_load_69048.cljs$core$IFn$_invoke$arity$2 ? on_load_69048.cljs$core$IFn$_invoke$arity$2(p1__67840_SHARP_,load_descriptors_69050) : on_load_69048.call(null,p1__67840_SHARP_,load_descriptors_69050));
});})(seq__67971_68983,chunk__67972_68984,count__67973_68985,i__67974_68986,seq__67847,chunk__67848,count__67849,i__67850,map__68010_69044,map__68010_69045__$1,payload_69046,query_69047,on_load_69048,on_error_69049,load_descriptors_69050,abort_id_69051,seq__67971_69033__$1,temp__5720__auto___69032,queue_68980,network_68981,parallel_payload_68982,remote,map__67843,map__67843__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__69056 = ((function (seq__67971_68983,chunk__67972_68984,count__67973_68985,i__67974_68986,seq__67847,chunk__67848,count__67849,i__67850,on_load_SINGLEQUOTE__69055,map__68010_69044,map__68010_69045__$1,payload_69046,query_69047,on_load_69048,on_error_69049,load_descriptors_69050,abort_id_69051,seq__67971_69033__$1,temp__5720__auto___69032,queue_68980,network_68981,parallel_payload_68982,remote,map__67843,map__67843__$1,send_queues,reconciler,networking){
return (function (p1__67841_SHARP_){
return (on_error_69049.cljs$core$IFn$_invoke$arity$2 ? on_error_69049.cljs$core$IFn$_invoke$arity$2(p1__67841_SHARP_,load_descriptors_69050) : on_error_69049.call(null,p1__67841_SHARP_,load_descriptors_69050));
});})(seq__67971_68983,chunk__67972_68984,count__67973_68985,i__67974_68986,seq__67847,chunk__67848,count__67849,i__67850,on_load_SINGLEQUOTE__69055,map__68010_69044,map__68010_69045__$1,payload_69046,query_69047,on_load_69048,on_error_69049,load_descriptors_69050,abort_id_69051,seq__67971_69033__$1,temp__5720__auto___69032,queue_68980,network_68981,parallel_payload_68982,remote,map__67843,map__67843__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_68981,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload_69046,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),query_69047,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_load_SINGLEQUOTE__69055,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error_SINGLEQUOTE__69056,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_69051], null));


var G__69058 = cljs.core.next(seq__67971_69033__$1);
var G__69059 = null;
var G__69060 = (0);
var G__69061 = (0);
seq__67971_68983 = G__69058;
chunk__67972_68984 = G__69059;
count__67973_68985 = G__69060;
i__67974_68986 = G__69061;
continue;
}
} else {
}
}
break;
}

var fetch_payload_69062 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_69062)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_68980,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_69062,new cljs.core.Keyword(null,"networking","networking",586110628),network_68981));

var G__69063 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_69062 = G__69063;
continue;
} else {
}
break;
}


var G__69065 = seq__67847;
var G__69066 = chunk__67848;
var G__69067 = count__67849;
var G__69068 = (i__67850 + (1));
seq__67847 = G__69065;
chunk__67848 = G__69066;
count__67849 = G__69067;
i__67850 = G__69068;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__67847);
if(temp__5720__auto__){
var seq__67847__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67847__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__67847__$1);
var G__69070 = cljs.core.chunk_rest(seq__67847__$1);
var G__69071 = c__4550__auto__;
var G__69072 = cljs.core.count(c__4550__auto__);
var G__69073 = (0);
seq__67847 = G__69070;
chunk__67848 = G__69071;
count__67849 = G__69072;
i__67850 = G__69073;
continue;
} else {
var remote = cljs.core.first(seq__67847__$1);
var queue_69075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_69076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_69077 = fulcro.client.impl.data_fetch.mark_parallel_loading_BANG_(remote,reconciler);
var seq__68032_69079 = cljs.core.seq(parallel_payload_69077);
var chunk__68033_69080 = null;
var count__68034_69081 = (0);
var i__68035_69082 = (0);
while(true){
if((i__68035_69082 < count__68034_69081)){
var map__68048_69084 = chunk__68033_69080.cljs$core$IIndexed$_nth$arity$2(null,i__68035_69082);
var map__68048_69085__$1 = (((((!((map__68048_69084 == null))))?(((((map__68048_69084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68048_69084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68048_69084):map__68048_69084);
var payload_69086 = map__68048_69085__$1;
var query_69087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68048_69085__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load_69088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68048_69085__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error_69089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68048_69085__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors_69090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68048_69085__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id_69091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68048_69085__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var on_load_SINGLEQUOTE__69095 = ((function (seq__68032_69079,chunk__68033_69080,count__68034_69081,i__68035_69082,seq__67847,chunk__67848,count__67849,i__67850,map__68048_69084,map__68048_69085__$1,payload_69086,query_69087,on_load_69088,on_error_69089,load_descriptors_69090,abort_id_69091,queue_69075,network_69076,parallel_payload_69077,remote,seq__67847__$1,temp__5720__auto__,map__67843,map__67843__$1,send_queues,reconciler,networking){
return (function (p1__67840_SHARP_){
return (on_load_69088.cljs$core$IFn$_invoke$arity$2 ? on_load_69088.cljs$core$IFn$_invoke$arity$2(p1__67840_SHARP_,load_descriptors_69090) : on_load_69088.call(null,p1__67840_SHARP_,load_descriptors_69090));
});})(seq__68032_69079,chunk__68033_69080,count__68034_69081,i__68035_69082,seq__67847,chunk__67848,count__67849,i__67850,map__68048_69084,map__68048_69085__$1,payload_69086,query_69087,on_load_69088,on_error_69089,load_descriptors_69090,abort_id_69091,queue_69075,network_69076,parallel_payload_69077,remote,seq__67847__$1,temp__5720__auto__,map__67843,map__67843__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__69096 = ((function (seq__68032_69079,chunk__68033_69080,count__68034_69081,i__68035_69082,seq__67847,chunk__67848,count__67849,i__67850,on_load_SINGLEQUOTE__69095,map__68048_69084,map__68048_69085__$1,payload_69086,query_69087,on_load_69088,on_error_69089,load_descriptors_69090,abort_id_69091,queue_69075,network_69076,parallel_payload_69077,remote,seq__67847__$1,temp__5720__auto__,map__67843,map__67843__$1,send_queues,reconciler,networking){
return (function (p1__67841_SHARP_){
return (on_error_69089.cljs$core$IFn$_invoke$arity$2 ? on_error_69089.cljs$core$IFn$_invoke$arity$2(p1__67841_SHARP_,load_descriptors_69090) : on_error_69089.call(null,p1__67841_SHARP_,load_descriptors_69090));
});})(seq__68032_69079,chunk__68033_69080,count__68034_69081,i__68035_69082,seq__67847,chunk__67848,count__67849,i__67850,on_load_SINGLEQUOTE__69095,map__68048_69084,map__68048_69085__$1,payload_69086,query_69087,on_load_69088,on_error_69089,load_descriptors_69090,abort_id_69091,queue_69075,network_69076,parallel_payload_69077,remote,seq__67847__$1,temp__5720__auto__,map__67843,map__67843__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_69076,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload_69086,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),query_69087,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_load_SINGLEQUOTE__69095,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error_SINGLEQUOTE__69096,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_69091], null));


var G__69118 = seq__68032_69079;
var G__69119 = chunk__68033_69080;
var G__69120 = count__68034_69081;
var G__69121 = (i__68035_69082 + (1));
seq__68032_69079 = G__69118;
chunk__68033_69080 = G__69119;
count__68034_69081 = G__69120;
i__68035_69082 = G__69121;
continue;
} else {
var temp__5720__auto___69128__$1 = cljs.core.seq(seq__68032_69079);
if(temp__5720__auto___69128__$1){
var seq__68032_69129__$1 = temp__5720__auto___69128__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68032_69129__$1)){
var c__4550__auto___69131 = cljs.core.chunk_first(seq__68032_69129__$1);
var G__69133 = cljs.core.chunk_rest(seq__68032_69129__$1);
var G__69134 = c__4550__auto___69131;
var G__69135 = cljs.core.count(c__4550__auto___69131);
var G__69136 = (0);
seq__68032_69079 = G__69133;
chunk__68033_69080 = G__69134;
count__68034_69081 = G__69135;
i__68035_69082 = G__69136;
continue;
} else {
var map__68053_69142 = cljs.core.first(seq__68032_69129__$1);
var map__68053_69143__$1 = (((((!((map__68053_69142 == null))))?(((((map__68053_69142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68053_69142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68053_69142):map__68053_69142);
var payload_69144 = map__68053_69143__$1;
var query_69145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68053_69143__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load_69146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68053_69143__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error_69147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68053_69143__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors_69148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68053_69143__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id_69149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68053_69143__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var on_load_SINGLEQUOTE__69158 = ((function (seq__68032_69079,chunk__68033_69080,count__68034_69081,i__68035_69082,seq__67847,chunk__67848,count__67849,i__67850,map__68053_69142,map__68053_69143__$1,payload_69144,query_69145,on_load_69146,on_error_69147,load_descriptors_69148,abort_id_69149,seq__68032_69129__$1,temp__5720__auto___69128__$1,queue_69075,network_69076,parallel_payload_69077,remote,seq__67847__$1,temp__5720__auto__,map__67843,map__67843__$1,send_queues,reconciler,networking){
return (function (p1__67840_SHARP_){
return (on_load_69146.cljs$core$IFn$_invoke$arity$2 ? on_load_69146.cljs$core$IFn$_invoke$arity$2(p1__67840_SHARP_,load_descriptors_69148) : on_load_69146.call(null,p1__67840_SHARP_,load_descriptors_69148));
});})(seq__68032_69079,chunk__68033_69080,count__68034_69081,i__68035_69082,seq__67847,chunk__67848,count__67849,i__67850,map__68053_69142,map__68053_69143__$1,payload_69144,query_69145,on_load_69146,on_error_69147,load_descriptors_69148,abort_id_69149,seq__68032_69129__$1,temp__5720__auto___69128__$1,queue_69075,network_69076,parallel_payload_69077,remote,seq__67847__$1,temp__5720__auto__,map__67843,map__67843__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__69159 = ((function (seq__68032_69079,chunk__68033_69080,count__68034_69081,i__68035_69082,seq__67847,chunk__67848,count__67849,i__67850,on_load_SINGLEQUOTE__69158,map__68053_69142,map__68053_69143__$1,payload_69144,query_69145,on_load_69146,on_error_69147,load_descriptors_69148,abort_id_69149,seq__68032_69129__$1,temp__5720__auto___69128__$1,queue_69075,network_69076,parallel_payload_69077,remote,seq__67847__$1,temp__5720__auto__,map__67843,map__67843__$1,send_queues,reconciler,networking){
return (function (p1__67841_SHARP_){
return (on_error_69147.cljs$core$IFn$_invoke$arity$2 ? on_error_69147.cljs$core$IFn$_invoke$arity$2(p1__67841_SHARP_,load_descriptors_69148) : on_error_69147.call(null,p1__67841_SHARP_,load_descriptors_69148));
});})(seq__68032_69079,chunk__68033_69080,count__68034_69081,i__68035_69082,seq__67847,chunk__67848,count__67849,i__67850,on_load_SINGLEQUOTE__69158,map__68053_69142,map__68053_69143__$1,payload_69144,query_69145,on_load_69146,on_error_69147,load_descriptors_69148,abort_id_69149,seq__68032_69129__$1,temp__5720__auto___69128__$1,queue_69075,network_69076,parallel_payload_69077,remote,seq__67847__$1,temp__5720__auto__,map__67843,map__67843__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_69076,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload_69144,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),query_69145,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_load_SINGLEQUOTE__69158,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error_SINGLEQUOTE__69159,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_69149], null));


var G__69176 = cljs.core.next(seq__68032_69129__$1);
var G__69177 = null;
var G__69178 = (0);
var G__69179 = (0);
seq__68032_69079 = G__69176;
chunk__68033_69080 = G__69177;
count__68034_69081 = G__69178;
i__68035_69082 = G__69179;
continue;
}
} else {
}
}
break;
}

var fetch_payload_69181 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_69181)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_69075,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_69181,new cljs.core.Keyword(null,"networking","networking",586110628),network_69076));

var G__69183 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_69181 = G__69183;
continue;
} else {
}
break;
}


var G__69184 = cljs.core.next(seq__67847__$1);
var G__69185 = null;
var G__69186 = (0);
var G__69187 = (0);
seq__67847 = G__69184;
chunk__67848 = G__69185;
count__67849 = G__69186;
i__67850 = G__69187;
continue;
}
} else {
return null;
}
}
break;
}
});
fulcro.client.impl.application.detect_errant_remotes = (function fulcro$client$impl$application$detect_errant_remotes(p__68067){
var map__68069 = p__68067;
var map__68069__$1 = (((((!((map__68069 == null))))?(((((map__68069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68069):map__68069);
var app = map__68069__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68069__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68069__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var state = fulcro.client.primitives.app_state(reconciler);
var all_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.Keyword("fulcro","ready-to-load","fulcro/ready-to-load",127104696));
var item_remotes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(fulcro.client.impl.data_fetch.data_remote),all_items);
var all_remotes = cljs.core.set(cljs.core.keys(send_queues));
var invalid_remotes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(item_remotes,all_remotes);
if(cljs.core.truth_(cljs.core.not_empty(invalid_remotes))){
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),217], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Use of invalid remote(s) detected! ",invalid_remotes], 0));
}catch (e68087){if((e68087 instanceof Error)){
var e__55143__auto__ = e68087;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),217], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__55143__auto__], 0));
} else {
throw e68087;

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
var map__68104 = payload;
var map__68104__$1 = (((((!((map__68104 == null))))?(((((map__68104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68104):map__68104);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68104__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68104__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68104__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68104__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68104__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var merge_data = (cljs.core.truth_(load_descriptors)?((function (map__68104,map__68104__$1,query,on_load,on_error,load_descriptors,abort_id){
return (function (p1__68099_SHARP_){
return (on_load.cljs$core$IFn$_invoke$arity$2 ? on_load.cljs$core$IFn$_invoke$arity$2(p1__68099_SHARP_,load_descriptors) : on_load.call(null,p1__68099_SHARP_,load_descriptors));
});})(map__68104,map__68104__$1,query,on_load,on_error,load_descriptors,abort_id))
:((function (map__68104,map__68104__$1,query,on_load,on_error,load_descriptors,abort_id){
return (function (p1__68100_SHARP_,p2__68101_SHARP_){
return (on_load.cljs$core$IFn$_invoke$arity$2 ? on_load.cljs$core$IFn$_invoke$arity$2(p1__68100_SHARP_,p2__68101_SHARP_) : on_load.call(null,p1__68100_SHARP_,p2__68101_SHARP_));
});})(map__68104,map__68104__$1,query,on_load,on_error,load_descriptors,abort_id))
);
var on_update = (cljs.core.truth_(load_descriptors)?cljs.core.identity:merge_data);
var on_error__$1 = (cljs.core.truth_(load_descriptors)?((function (map__68104,map__68104__$1,query,on_load,on_error,load_descriptors,abort_id,merge_data,on_update){
return (function (p1__68102_SHARP_){
return (on_error.cljs$core$IFn$_invoke$arity$2 ? on_error.cljs$core$IFn$_invoke$arity$2(p1__68102_SHARP_,load_descriptors) : on_error.call(null,p1__68102_SHARP_,load_descriptors));
});})(map__68104,map__68104__$1,query,on_load,on_error,load_descriptors,abort_id,merge_data,on_update))
:on_error);
var on_error__$2 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(send_complete,on_error__$1);
var on_done = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(send_complete,merge_data);
if(fulcro.client.impl.data_fetch.is_deferred_transaction_QMARK_(query)){
on_done(cljs.core.PersistentArrayMap.EMPTY);

if(cljs.core.truth_(fulcro.client.impl.application.is_sequential_QMARK_(network))){
return null;
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),256], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Attempt to defer a transaction on a non-sequential remote. `ptransact!` will fail to work correctly with `serial? false` remotes."], 0));
}catch (e68110){if((e68110 instanceof Error)){
var e__55143__auto__ = e68110;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),256], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__55143__auto__], 0));
} else {
throw e68110;

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
fulcro.client.impl.application.start_network_sequential_processing = (function fulcro$client$impl$application$start_network_sequential_processing(p__68120){
var map__68121 = p__68120;
var map__68121__$1 = (((((!((map__68121 == null))))?(((((map__68121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68121):map__68121);
var app = map__68121__$1;
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68121__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68121__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68121__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var response_channels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68121__$1,new cljs.core.Keyword(null,"response-channels","response-channels",-1871059128));
var seq__68129 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__68130 = null;
var count__68131 = (0);
var i__68132 = (0);
while(true){
if((i__68132 < count__68131)){
var remote = chunk__68130.cljs$core$IIndexed$_nth$arity$2(null,i__68132);
var queue_69360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_69361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var sequential_QMARK__69362 = fulcro.client.impl.application.is_sequential_QMARK_(network_69361);
var response_channel_69363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_69364 = (cljs.core.truth_(sequential_QMARK__69362)?((function (seq__68129,chunk__68130,count__68131,i__68132,queue_69360,network_69361,sequential_QMARK__69362,response_channel_69363,remote,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var c__51169__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__68129,chunk__68130,count__68131,i__68132,c__51169__auto__,queue_69360,network_69361,sequential_QMARK__69362,response_channel_69363,remote,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (seq__68129,chunk__68130,count__68131,i__68132,c__51169__auto__,queue_69360,network_69361,sequential_QMARK__69362,response_channel_69363,remote,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_68351){
var state_val_68353 = (state_68351[(1)]);
if((state_val_68353 === (1))){
var state_68351__$1 = state_68351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68351__$1,(2),response_channel_69363,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_68353 === (2))){
var inst_68349 = (state_68351[(2)]);
var state_68351__$1 = state_68351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68351__$1,inst_68349);
} else {
return null;
}
}
});})(seq__68129,chunk__68130,count__68131,i__68132,c__51169__auto__,queue_69360,network_69361,sequential_QMARK__69362,response_channel_69363,remote,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__68129,chunk__68130,count__68131,i__68132,switch__50952__auto__,c__51169__auto__,queue_69360,network_69361,sequential_QMARK__69362,response_channel_69363,remote,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____0 = (function (){
var statearr_68364 = [null,null,null,null,null,null,null];
(statearr_68364[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__);

(statearr_68364[(1)] = (1));

return statearr_68364;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____1 = (function (state_68351){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_68351);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e68366){if((e68366 instanceof Object)){
var ex__50956__auto__ = e68366;
var statearr_68367_69389 = state_68351;
(statearr_68367_69389[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68366;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69392 = state_68351;
state_68351 = G__69392;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__ = function(state_68351){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____1.call(this,state_68351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__;
})()
;})(seq__68129,chunk__68130,count__68131,i__68132,switch__50952__auto__,c__51169__auto__,queue_69360,network_69361,sequential_QMARK__69362,response_channel_69363,remote,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__51171__auto__ = (function (){var statearr_68376 = f__51170__auto__();
(statearr_68376[(6)] = c__51169__auto__);

return statearr_68376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(seq__68129,chunk__68130,count__68131,i__68132,c__51169__auto__,queue_69360,network_69361,sequential_QMARK__69362,response_channel_69363,remote,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels))
);

return c__51169__auto__;
});})(seq__68129,chunk__68130,count__68131,i__68132,queue_69360,network_69361,sequential_QMARK__69362,response_channel_69363,remote,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels))
:cljs.core.identity);
var c__51169__auto___69400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__68129,chunk__68130,count__68131,i__68132,c__51169__auto___69400,queue_69360,network_69361,sequential_QMARK__69362,response_channel_69363,send_complete_69364,remote,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (seq__68129,chunk__68130,count__68131,i__68132,c__51169__auto___69400,queue_69360,network_69361,sequential_QMARK__69362,response_channel_69363,send_complete_69364,remote,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_68400){
var state_val_68401 = (state_68400[(1)]);
if((state_val_68401 === (7))){
var inst_68391 = (state_68400[(2)]);
var state_68400__$1 = (function (){var statearr_68411 = state_68400;
(statearr_68411[(7)] = inst_68391);

return statearr_68411;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68400__$1,(9),queue_69360);
} else {
if((state_val_68401 === (1))){
var state_68400__$1 = state_68400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68400__$1,(2),queue_69360);
} else {
if((state_val_68401 === (4))){
var inst_68397 = (state_68400[(2)]);
var state_68400__$1 = state_68400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68400__$1,inst_68397);
} else {
if((state_val_68401 === (6))){
var state_68400__$1 = state_68400;
var statearr_68419_69408 = state_68400__$1;
(statearr_68419_69408[(2)] = null);

(statearr_68419_69408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68401 === (3))){
var inst_68382 = (state_68400[(8)]);
var inst_68384 = fulcro.client.impl.application._send_payload(network_69361,reconciler,inst_68382,send_complete_69364);
var inst_68385 = fulcro.client.primitives.pop_pending_request(reconciler,remote);
var state_68400__$1 = (function (){var statearr_68423 = state_68400;
(statearr_68423[(9)] = inst_68384);

(statearr_68423[(10)] = inst_68385);

return statearr_68423;
})();
if(cljs.core.truth_(sequential_QMARK__69362)){
var statearr_68428_69414 = state_68400__$1;
(statearr_68428_69414[(1)] = (5));

} else {
var statearr_68429_69416 = state_68400__$1;
(statearr_68429_69416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68401 === (2))){
var inst_68381 = (state_68400[(2)]);
var inst_68382 = inst_68381;
var state_68400__$1 = (function (){var statearr_68432 = state_68400;
(statearr_68432[(8)] = inst_68382);

return statearr_68432;
})();
var statearr_68433_69417 = state_68400__$1;
(statearr_68433_69417[(2)] = null);

(statearr_68433_69417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68401 === (9))){
var inst_68394 = (state_68400[(2)]);
var inst_68382 = inst_68394;
var state_68400__$1 = (function (){var statearr_68439 = state_68400;
(statearr_68439[(8)] = inst_68382);

return statearr_68439;
})();
var statearr_68443_69422 = state_68400__$1;
(statearr_68443_69422[(2)] = null);

(statearr_68443_69422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68401 === (5))){
var state_68400__$1 = state_68400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68400__$1,(8),response_channel_69363);
} else {
if((state_val_68401 === (8))){
var inst_68388 = (state_68400[(2)]);
var state_68400__$1 = state_68400;
var statearr_68445_69428 = state_68400__$1;
(statearr_68445_69428[(2)] = inst_68388);

(statearr_68445_69428[(1)] = (7));


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
});})(seq__68129,chunk__68130,count__68131,i__68132,c__51169__auto___69400,queue_69360,network_69361,sequential_QMARK__69362,response_channel_69363,send_complete_69364,remote,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__68129,chunk__68130,count__68131,i__68132,switch__50952__auto__,c__51169__auto___69400,queue_69360,network_69361,sequential_QMARK__69362,response_channel_69363,send_complete_69364,remote,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____0 = (function (){
var statearr_68451 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_68451[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__);

(statearr_68451[(1)] = (1));

return statearr_68451;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____1 = (function (state_68400){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_68400);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e68456){if((e68456 instanceof Object)){
var ex__50956__auto__ = e68456;
var statearr_68458_69442 = state_68400;
(statearr_68458_69442[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69444 = state_68400;
state_68400 = G__69444;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__ = function(state_68400){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____1.call(this,state_68400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__;
})()
;})(seq__68129,chunk__68130,count__68131,i__68132,switch__50952__auto__,c__51169__auto___69400,queue_69360,network_69361,sequential_QMARK__69362,response_channel_69363,send_complete_69364,remote,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__51171__auto__ = (function (){var statearr_68465 = f__51170__auto__();
(statearr_68465[(6)] = c__51169__auto___69400);

return statearr_68465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(seq__68129,chunk__68130,count__68131,i__68132,c__51169__auto___69400,queue_69360,network_69361,sequential_QMARK__69362,response_channel_69363,send_complete_69364,remote,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels))
);



var G__69451 = seq__68129;
var G__69452 = chunk__68130;
var G__69453 = count__68131;
var G__69454 = (i__68132 + (1));
seq__68129 = G__69451;
chunk__68130 = G__69452;
count__68131 = G__69453;
i__68132 = G__69454;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__68129);
if(temp__5720__auto__){
var seq__68129__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68129__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__68129__$1);
var G__69456 = cljs.core.chunk_rest(seq__68129__$1);
var G__69457 = c__4550__auto__;
var G__69458 = cljs.core.count(c__4550__auto__);
var G__69459 = (0);
seq__68129 = G__69456;
chunk__68130 = G__69457;
count__68131 = G__69458;
i__68132 = G__69459;
continue;
} else {
var remote = cljs.core.first(seq__68129__$1);
var queue_69460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_69461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var sequential_QMARK__69462 = fulcro.client.impl.application.is_sequential_QMARK_(network_69461);
var response_channel_69463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_69464 = (cljs.core.truth_(sequential_QMARK__69462)?((function (seq__68129,chunk__68130,count__68131,i__68132,queue_69460,network_69461,sequential_QMARK__69462,response_channel_69463,remote,seq__68129__$1,temp__5720__auto__,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var c__51169__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__68129,chunk__68130,count__68131,i__68132,c__51169__auto__,queue_69460,network_69461,sequential_QMARK__69462,response_channel_69463,remote,seq__68129__$1,temp__5720__auto__,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (seq__68129,chunk__68130,count__68131,i__68132,c__51169__auto__,queue_69460,network_69461,sequential_QMARK__69462,response_channel_69463,remote,seq__68129__$1,temp__5720__auto__,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_68477){
var state_val_68478 = (state_68477[(1)]);
if((state_val_68478 === (1))){
var state_68477__$1 = state_68477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68477__$1,(2),response_channel_69463,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_68478 === (2))){
var inst_68475 = (state_68477[(2)]);
var state_68477__$1 = state_68477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68477__$1,inst_68475);
} else {
return null;
}
}
});})(seq__68129,chunk__68130,count__68131,i__68132,c__51169__auto__,queue_69460,network_69461,sequential_QMARK__69462,response_channel_69463,remote,seq__68129__$1,temp__5720__auto__,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__68129,chunk__68130,count__68131,i__68132,switch__50952__auto__,c__51169__auto__,queue_69460,network_69461,sequential_QMARK__69462,response_channel_69463,remote,seq__68129__$1,temp__5720__auto__,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____0 = (function (){
var statearr_68501 = [null,null,null,null,null,null,null];
(statearr_68501[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__);

(statearr_68501[(1)] = (1));

return statearr_68501;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____1 = (function (state_68477){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_68477);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e68503){if((e68503 instanceof Object)){
var ex__50956__auto__ = e68503;
var statearr_68510_69490 = state_68477;
(statearr_68510_69490[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68503;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69491 = state_68477;
state_68477 = G__69491;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__ = function(state_68477){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____1.call(this,state_68477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__;
})()
;})(seq__68129,chunk__68130,count__68131,i__68132,switch__50952__auto__,c__51169__auto__,queue_69460,network_69461,sequential_QMARK__69462,response_channel_69463,remote,seq__68129__$1,temp__5720__auto__,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__51171__auto__ = (function (){var statearr_68512 = f__51170__auto__();
(statearr_68512[(6)] = c__51169__auto__);

return statearr_68512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(seq__68129,chunk__68130,count__68131,i__68132,c__51169__auto__,queue_69460,network_69461,sequential_QMARK__69462,response_channel_69463,remote,seq__68129__$1,temp__5720__auto__,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels))
);

return c__51169__auto__;
});})(seq__68129,chunk__68130,count__68131,i__68132,queue_69460,network_69461,sequential_QMARK__69462,response_channel_69463,remote,seq__68129__$1,temp__5720__auto__,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels))
:cljs.core.identity);
var c__51169__auto___69492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__68129,chunk__68130,count__68131,i__68132,c__51169__auto___69492,queue_69460,network_69461,sequential_QMARK__69462,response_channel_69463,send_complete_69464,remote,seq__68129__$1,temp__5720__auto__,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (seq__68129,chunk__68130,count__68131,i__68132,c__51169__auto___69492,queue_69460,network_69461,sequential_QMARK__69462,response_channel_69463,send_complete_69464,remote,seq__68129__$1,temp__5720__auto__,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_68540){
var state_val_68541 = (state_68540[(1)]);
if((state_val_68541 === (7))){
var inst_68532 = (state_68540[(2)]);
var state_68540__$1 = (function (){var statearr_68545 = state_68540;
(statearr_68545[(7)] = inst_68532);

return statearr_68545;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68540__$1,(9),queue_69460);
} else {
if((state_val_68541 === (1))){
var state_68540__$1 = state_68540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68540__$1,(2),queue_69460);
} else {
if((state_val_68541 === (4))){
var inst_68537 = (state_68540[(2)]);
var state_68540__$1 = state_68540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68540__$1,inst_68537);
} else {
if((state_val_68541 === (6))){
var state_68540__$1 = state_68540;
var statearr_68556_69495 = state_68540__$1;
(statearr_68556_69495[(2)] = null);

(statearr_68556_69495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68541 === (3))){
var inst_68522 = (state_68540[(8)]);
var inst_68524 = fulcro.client.impl.application._send_payload(network_69461,reconciler,inst_68522,send_complete_69464);
var inst_68525 = fulcro.client.primitives.pop_pending_request(reconciler,remote);
var state_68540__$1 = (function (){var statearr_68573 = state_68540;
(statearr_68573[(9)] = inst_68524);

(statearr_68573[(10)] = inst_68525);

return statearr_68573;
})();
if(cljs.core.truth_(sequential_QMARK__69462)){
var statearr_68578_69503 = state_68540__$1;
(statearr_68578_69503[(1)] = (5));

} else {
var statearr_68580_69504 = state_68540__$1;
(statearr_68580_69504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68541 === (2))){
var inst_68521 = (state_68540[(2)]);
var inst_68522 = inst_68521;
var state_68540__$1 = (function (){var statearr_68583 = state_68540;
(statearr_68583[(8)] = inst_68522);

return statearr_68583;
})();
var statearr_68585_69507 = state_68540__$1;
(statearr_68585_69507[(2)] = null);

(statearr_68585_69507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68541 === (9))){
var inst_68534 = (state_68540[(2)]);
var inst_68522 = inst_68534;
var state_68540__$1 = (function (){var statearr_68596 = state_68540;
(statearr_68596[(8)] = inst_68522);

return statearr_68596;
})();
var statearr_68597_69509 = state_68540__$1;
(statearr_68597_69509[(2)] = null);

(statearr_68597_69509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68541 === (5))){
var state_68540__$1 = state_68540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68540__$1,(8),response_channel_69463);
} else {
if((state_val_68541 === (8))){
var inst_68529 = (state_68540[(2)]);
var state_68540__$1 = state_68540;
var statearr_68598_69516 = state_68540__$1;
(statearr_68598_69516[(2)] = inst_68529);

(statearr_68598_69516[(1)] = (7));


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
});})(seq__68129,chunk__68130,count__68131,i__68132,c__51169__auto___69492,queue_69460,network_69461,sequential_QMARK__69462,response_channel_69463,send_complete_69464,remote,seq__68129__$1,temp__5720__auto__,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__68129,chunk__68130,count__68131,i__68132,switch__50952__auto__,c__51169__auto___69492,queue_69460,network_69461,sequential_QMARK__69462,response_channel_69463,send_complete_69464,remote,seq__68129__$1,temp__5720__auto__,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____0 = (function (){
var statearr_68602 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_68602[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__);

(statearr_68602[(1)] = (1));

return statearr_68602;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____1 = (function (state_68540){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_68540);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e68604){if((e68604 instanceof Object)){
var ex__50956__auto__ = e68604;
var statearr_68605_69520 = state_68540;
(statearr_68605_69520[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68604;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69522 = state_68540;
state_68540 = G__69522;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__ = function(state_68540){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____1.call(this,state_68540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__50953__auto__;
})()
;})(seq__68129,chunk__68130,count__68131,i__68132,switch__50952__auto__,c__51169__auto___69492,queue_69460,network_69461,sequential_QMARK__69462,response_channel_69463,send_complete_69464,remote,seq__68129__$1,temp__5720__auto__,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__51171__auto__ = (function (){var statearr_68609 = f__51170__auto__();
(statearr_68609[(6)] = c__51169__auto___69492);

return statearr_68609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(seq__68129,chunk__68130,count__68131,i__68132,c__51169__auto___69492,queue_69460,network_69461,sequential_QMARK__69462,response_channel_69463,send_complete_69464,remote,seq__68129__$1,temp__5720__auto__,map__68121,map__68121__$1,app,networking,reconciler,send_queues,response_channels))
);



var G__69527 = cljs.core.next(seq__68129__$1);
var G__69528 = null;
var G__69529 = (0);
var G__69530 = (0);
seq__68129 = G__69527;
chunk__68130 = G__69528;
count__68131 = G__69529;
i__68132 = G__69530;
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
fulcro.client.impl.application.generate_reconciler = (function fulcro$client$impl$application$generate_reconciler(p__68619,initial_state,parser,p__68620){
var map__68621 = p__68619;
var map__68621__$1 = (((((!((map__68621 == null))))?(((((map__68621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68621):map__68621);
var app = map__68621__$1;
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68621__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var mutation_merge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68621__$1,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322));
var map__68622 = p__68620;
var map__68622__$1 = (((((!((map__68622 == null))))?(((((map__68622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68622):map__68622);
var reconciler_options = map__68622__$1;
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68622__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743));
var rec_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var remotes = cljs.core.keys(send_queues);
var tempid_migrate = ((function (rec_atom,remotes,map__68621,map__68621__$1,app,send_queues,mutation_merge,map__68622,map__68622__$1,reconciler_options,migrate){
return (function (pure,_,tempids){
var seq__68630_69535 = cljs.core.seq(cljs.core.vals(send_queues));
var chunk__68631_69536 = null;
var count__68632_69537 = (0);
var i__68633_69538 = (0);
while(true){
if((i__68633_69538 < count__68632_69537)){
var queue_69541 = chunk__68631_69536.cljs$core$IIndexed$_nth$arity$2(null,i__68633_69538);
fulcro.client.primitives.rewrite_tempids_in_request_queue(queue_69541,tempids);


var G__69542 = seq__68630_69535;
var G__69543 = chunk__68631_69536;
var G__69544 = count__68632_69537;
var G__69545 = (i__68633_69538 + (1));
seq__68630_69535 = G__69542;
chunk__68631_69536 = G__69543;
count__68632_69537 = G__69544;
i__68633_69538 = G__69545;
continue;
} else {
var temp__5720__auto___69548 = cljs.core.seq(seq__68630_69535);
if(temp__5720__auto___69548){
var seq__68630_69553__$1 = temp__5720__auto___69548;
if(cljs.core.chunked_seq_QMARK_(seq__68630_69553__$1)){
var c__4550__auto___69554 = cljs.core.chunk_first(seq__68630_69553__$1);
var G__69555 = cljs.core.chunk_rest(seq__68630_69553__$1);
var G__69556 = c__4550__auto___69554;
var G__69557 = cljs.core.count(c__4550__auto___69554);
var G__69558 = (0);
seq__68630_69535 = G__69555;
chunk__68631_69536 = G__69556;
count__68632_69537 = G__69557;
i__68633_69538 = G__69558;
continue;
} else {
var queue_69559 = cljs.core.first(seq__68630_69553__$1);
fulcro.client.primitives.rewrite_tempids_in_request_queue(queue_69559,tempids);


var G__69560 = cljs.core.next(seq__68630_69553__$1);
var G__69561 = null;
var G__69562 = (0);
var G__69563 = (0);
seq__68630_69535 = G__69560;
chunk__68631_69536 = G__69561;
count__68632_69537 = G__69562;
i__68633_69538 = G__69563;
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
});})(rec_atom,remotes,map__68621,map__68621__$1,app,send_queues,mutation_merge,map__68622,map__68622__$1,reconciler_options,migrate))
;
var complete_initial_state = (function (){var set_default_locale = ((function (rec_atom,remotes,tempid_migrate,map__68621,map__68621__$1,app,send_queues,mutation_merge,map__68622,map__68622__$1,reconciler_options,migrate){
return (function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.Keyword(null,"en","en",88457073)));
});})(rec_atom,remotes,tempid_migrate,map__68621,map__68621__$1,app,send_queues,mutation_merge,map__68622,map__68622__$1,reconciler_options,migrate))
;
var set_network_markers = ((function (set_default_locale,rec_atom,remotes,tempid_migrate,map__68621,map__68621__$1,app,send_queues,mutation_merge,map__68622,map__68622__$1,reconciler_options,migrate){
return (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword("fulcro.client.network","status","fulcro.client.network/status",570358457),cljs.core.zipmap(remotes,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idle","idle",-2007156861))));
});})(set_default_locale,rec_atom,remotes,tempid_migrate,map__68621,map__68621__$1,app,send_queues,mutation_merge,map__68622,map__68622__$1,reconciler_options,migrate))
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
var config = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,reconciler_options,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"migrate","migrate",-207110743),tempid_migrate,new cljs.core.Keyword(null,"state","state",-1988618099),complete_initial_state,new cljs.core.Keyword(null,"send","send",-652151114),((function (rec_atom,remotes,tempid_migrate,complete_initial_state,map__68621,map__68621__$1,app,send_queues,mutation_merge,map__68622,map__68622__$1,reconciler_options,migrate){
return (function (sends_keyed_by_remote,result_merge_callback){
return fulcro.client.impl.application.server_send(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.deref(rec_atom)),sends_keyed_by_remote,result_merge_callback);
});})(rec_atom,remotes,tempid_migrate,complete_initial_state,map__68621,map__68621__$1,app,send_queues,mutation_merge,map__68622,map__68622__$1,reconciler_options,migrate))
,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"remotes","remotes",1132366312),remotes,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),((function (rec_atom,remotes,tempid_migrate,complete_initial_state,map__68621,map__68621__$1,app,send_queues,mutation_merge,map__68622,map__68622__$1,reconciler_options,migrate){
return (function (reconciler,app_state,ident,props){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,ident,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.sweep_one,cljs.core.merge),props);
});})(rec_atom,remotes,tempid_migrate,complete_initial_state,map__68621,map__68621__$1,app,send_queues,mutation_merge,map__68622,map__68622__$1,reconciler_options,migrate))
,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),((function (rec_atom,remotes,tempid_migrate,complete_initial_state,map__68621,map__68621__$1,app,send_queues,mutation_merge,map__68622,map__68622__$1,reconciler_options,migrate){
return (function (target,source){
return fulcro.client.primitives.merge_handler(mutation_merge,target,source);
});})(rec_atom,remotes,tempid_migrate,complete_initial_state,map__68621,map__68621__$1,app,send_queues,mutation_merge,map__68622,map__68622__$1,reconciler_options,migrate))
,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null)], 0));
var rec = fulcro.client.primitives.reconciler(config);
cljs.core.reset_BANG_(rec_atom,rec);

return rec;
});
fulcro.client.impl.application.initialize_global_error_callbacks = (function fulcro$client$impl$application$initialize_global_error_callbacks(app){
var seq__68677 = cljs.core.seq(cljs.core.keys(new cljs.core.Keyword(null,"networking","networking",586110628).cljs$core$IFn$_invoke$arity$1(app)));
var chunk__68678 = null;
var count__68679 = (0);
var i__68680 = (0);
while(true){
if((i__68680 < count__68679)){
var remote = chunk__68678.cljs$core$IIndexed$_nth$arity$2(null,i__68680);
var cb_atom_69592 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),remote,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(fulcro.util.atom_QMARK_(cb_atom_69592)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_69592,((function (seq__68677,chunk__68678,count__68679,i__68680,cb_atom_69592,remote){
return (function (p1__68674_SHARP_){
if(cljs.core.fn_QMARK_(p1__68674_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__68674_SHARP_,fulcro.client.primitives.app_state(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__68677,chunk__68678,count__68679,i__68680,cb_atom_69592,remote))
);
} else {
}


var G__69598 = seq__68677;
var G__69599 = chunk__68678;
var G__69600 = count__68679;
var G__69601 = (i__68680 + (1));
seq__68677 = G__69598;
chunk__68678 = G__69599;
count__68679 = G__69600;
i__68680 = G__69601;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__68677);
if(temp__5720__auto__){
var seq__68677__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68677__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__68677__$1);
var G__69605 = cljs.core.chunk_rest(seq__68677__$1);
var G__69606 = c__4550__auto__;
var G__69607 = cljs.core.count(c__4550__auto__);
var G__69608 = (0);
seq__68677 = G__69605;
chunk__68678 = G__69606;
count__68679 = G__69607;
i__68680 = G__69608;
continue;
} else {
var remote = cljs.core.first(seq__68677__$1);
var cb_atom_69612 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),remote,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(fulcro.util.atom_QMARK_(cb_atom_69612)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_69612,((function (seq__68677,chunk__68678,count__68679,i__68680,cb_atom_69612,remote,seq__68677__$1,temp__5720__auto__){
return (function (p1__68674_SHARP_){
if(cljs.core.fn_QMARK_(p1__68674_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__68674_SHARP_,fulcro.client.primitives.app_state(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__68677,chunk__68678,count__68679,i__68680,cb_atom_69612,remote,seq__68677__$1,temp__5720__auto__))
);
} else {
}


var G__69617 = cljs.core.next(seq__68677__$1);
var G__69618 = null;
var G__69619 = (0);
var G__69620 = (0);
seq__68677 = G__69617;
chunk__68678 = G__69618;
count__68679 = G__69619;
i__68680 = G__69620;
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
fulcro.client.impl.application.read_local = (function fulcro$client$impl$application$read_local(user_read,p__68698,dkey,params){
var map__68707 = p__68698;
var map__68707__$1 = (((((!((map__68707 == null))))?(((((map__68707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68707):map__68707);
var env = map__68707__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68707__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68707__$1,new cljs.core.Keyword(null,"target","target",253001721));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68707__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68707__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
var rv = (function (){try{return fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(env,k,params);
}catch (e68720){var e = e68720;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),372], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mutation ",k," failed with exception",e], 0));
}catch (e68721){if((e68721 instanceof Error)){
var e__55143__auto___69634 = e68721;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),372], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__55143__auto___69634], 0));
} else {
throw e68721;

}
}
return null;
}})();
var action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(rv);
if(cljs.core.truth_(action)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rv,new cljs.core.Keyword(null,"action","action",-811238024),((function (rv,action){
return (function (){
try{var action_result = (action.cljs$core$IFn$_invoke$arity$3 ? action.cljs$core$IFn$_invoke$arity$3(env,k,params) : action.call(null,env,k,params));
try{fulcro.client.mutations.post_mutate.cljs$core$IFn$_invoke$arity$3(env,k,params);
}catch (e68726){var e_69636 = e68726;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),381], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Post mutate failed on dispatch to ",k], 0));
}catch (e68727){if((e68727 instanceof Error)){
var e__55143__auto___69639 = e68727;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),381], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__55143__auto___69639], 0));
} else {
throw e68727;

}
}}
return action_result;
}catch (e68722){var e = e68722;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),384], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mutation ",k," failed with exception"], 0));
}catch (e68724){if((e68724 instanceof Error)){
var e__55143__auto___69644 = e68724;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),384], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__55143__auto___69644], 0));
} else {
throw e68724;

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
