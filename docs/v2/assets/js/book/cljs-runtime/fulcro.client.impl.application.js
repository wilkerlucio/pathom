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
fulcro.client.impl.application.fallback_handler = (function fulcro$client$impl$application$fallback_handler(p__59073,query){
var map__59074 = p__59073;
var map__59074__$1 = (((((!((map__59074 == null))))?(((((map__59074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59074):map__59074);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59074__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return ((function (map__59074,map__59074__$1,reconciler){
return (function (error){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.client.primitives.app_state(reconciler),cljs.core.assoc,new cljs.core.Keyword("fulcro","server-error","fulcro/server-error",-1254037316),error);

var temp__5718__auto__ = fulcro.client.primitives.fallback_tx(query,error);
if(cljs.core.truth_(temp__5718__auto__)){
var q = temp__5718__auto__;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),25], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Transaction failed. Running fallback.",q], 0));
}catch (e59083){if((e59083 instanceof Error)){
var e__48920__auto___59954 = e59083;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),25], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___59954], 0));
} else {
throw e59083;

}
}
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,q);
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),27], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Fallback triggered, but no fallbacks were defined."], 0));
}catch (e59084){if((e59084 instanceof Error)){
var e__48920__auto__ = e59084;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),27], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto__], 0));
} else {
throw e59084;

}
}}
});
;})(map__59074,map__59074__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
fulcro.client.impl.application._enqueue = (function fulcro$client$impl$application$_enqueue(reconciler,remote,q,v){
fulcro.client.primitives.add_pending_request(reconciler,remote,v);

var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__){
return (function (state_59090){
var state_val_59091 = (state_59090[(1)]);
if((state_val_59091 === (1))){
var state_59090__$1 = state_59090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59090__$1,(2),q,v);
} else {
if((state_val_59091 === (2))){
var inst_59088 = (state_59090[(2)]);
var state_59090__$1 = state_59090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59090__$1,inst_59088);
} else {
return null;
}
}
});})(c__45808__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__){
return (function() {
var fulcro$client$impl$application$_enqueue_$_state_machine__45526__auto__ = null;
var fulcro$client$impl$application$_enqueue_$_state_machine__45526__auto____0 = (function (){
var statearr_59094 = [null,null,null,null,null,null,null];
(statearr_59094[(0)] = fulcro$client$impl$application$_enqueue_$_state_machine__45526__auto__);

(statearr_59094[(1)] = (1));

return statearr_59094;
});
var fulcro$client$impl$application$_enqueue_$_state_machine__45526__auto____1 = (function (state_59090){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_59090);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e59098){if((e59098 instanceof Object)){
var ex__45529__auto__ = e59098;
var statearr_59099_59984 = state_59090;
(statearr_59099_59984[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59098;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59985 = state_59090;
state_59090 = G__59985;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
fulcro$client$impl$application$_enqueue_$_state_machine__45526__auto__ = function(state_59090){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$_enqueue_$_state_machine__45526__auto____0.call(this);
case 1:
return fulcro$client$impl$application$_enqueue_$_state_machine__45526__auto____1.call(this,state_59090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$impl$application$_enqueue_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$_enqueue_$_state_machine__45526__auto____0;
fulcro$client$impl$application$_enqueue_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$_enqueue_$_state_machine__45526__auto____1;
return fulcro$client$impl$application$_enqueue_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__))
})();
var state__45810__auto__ = (function (){var statearr_59100 = f__45809__auto__();
(statearr_59100[(6)] = c__45808__auto__);

return statearr_59100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__))
);

return c__45808__auto__;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("fulcro.client.impl.application","-enqueue","fulcro.client.impl.application/-enqueue",-1535560443,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"any?","any?",-1959531460),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"any?","any?",-1959531460),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"payload","payload",-383036092)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any?","any?",-1959531460),cljs.core.keyword_QMARK_,cljs.core.any_QMARK_,new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any?","any?",-1959531460),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"any?","any?",-1959531460),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * Do a properly-plumbed network send. This function recursively strips ui attributes from the tx and pushes the tx over
 *   the network. It installs the given on-load and on-error handlers to deal with the network response. DEPRECATED: If
 *   you're doing something really low-level with networking, use send-with-history-tracking.
 */
fulcro.client.impl.application.real_send = (function fulcro$client$impl$application$real_send(var_args){
var G__59112 = arguments.length;
switch (G__59112) {
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

fulcro.client.impl.application.real_send.cljs$core$IFn$_invoke$arity$2 = (function (net,p__59113){
var map__59114 = p__59113;
var map__59114__$1 = (((((!((map__59114 == null))))?(((((map__59114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59114):map__59114);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59114__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59114__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var on_done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59114__$1,new cljs.core.Keyword(null,"on-done","on-done",-699252077));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59114__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59114__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59114__$1,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819));
var progress_tx = ((function (map__59114,map__59114__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (p1__59110_SHARP_){
return fulcro.client.mutations.progressive_update_transaction(tx,p1__59110_SHARP_);
});})(map__59114,map__59114__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
;
var tx__$1 = fulcro.client.primitives.strip_ui(tx);
if((((!((net == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === net.fulcro$client$network$ProgressiveTransfer$))))?true:false):false)){
return fulcro.client.network.updating_send(net,tx__$1,on_done,on_error,on_load);
} else {
if((((!((net == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === net.fulcro$client$network$FulcroNetwork$))))?true:false):false)){
return fulcro.client.network.send(net,tx__$1,on_done,on_error);
} else {
if((((!((net == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === net.fulcro$client$network$FulcroRemoteI$))))?true:false):false)){
var on_done__$1 = ((function (progress_tx,tx__$1,map__59114,map__59114__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (p__59124){
var map__59125 = p__59124;
var map__59125__$1 = (((((!((map__59125 == null))))?(((((map__59125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59125):map__59125);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59125__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var transaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59125__$1,new cljs.core.Keyword(null,"transaction","transaction",1777321997));
return (on_done.cljs$core$IFn$_invoke$arity$2 ? on_done.cljs$core$IFn$_invoke$arity$2(body,transaction) : on_done.call(null,body,transaction));
});})(progress_tx,tx__$1,map__59114,map__59114__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
;
var on_error__$1 = ((function (on_done__$1,progress_tx,tx__$1,map__59114,map__59114__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (p__59128){
var map__59129 = p__59128;
var map__59129__$1 = (((((!((map__59129 == null))))?(((((map__59129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59129):map__59129);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59129__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(body) : on_error.call(null,body));
});})(on_done__$1,progress_tx,tx__$1,map__59114,map__59114__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
;
var on_load__$1 = ((function (on_done__$1,on_error__$1,progress_tx,tx__$1,map__59114,map__59114__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (progress){
if(cljs.core.truth_(reconciler)){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,progress_tx(progress));
} else {
return null;
}
});})(on_done__$1,on_error__$1,progress_tx,tx__$1,map__59114,map__59114__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
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
var G__59137 = arguments.length;
switch (G__59137) {
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

fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2 = (function (net,p__59139){
var map__59140 = p__59139;
var map__59140__$1 = (((((!((map__59140 == null))))?(((((map__59140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59140):map__59140);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59140__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59140__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59140__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var on_done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59140__$1,new cljs.core.Keyword(null,"on-done","on-done",-699252077));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59140__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59140__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var map__59143 = payload;
var map__59143__$1 = (((((!((map__59143 == null))))?(((((map__59143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59143):map__59143);
var history_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59143__$1,new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564));
var tx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59143__$1,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59143__$1,new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012));
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59143__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var uuid = fulcro.util.unique_key();
var network_activity = fulcro.client.primitives.get_network_activity(reconciler);
var with_network_activity_tracking = ((function (map__59143,map__59143__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__59140,map__59140__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (handler){
return ((function (map__59143,map__59143__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__59140,map__59140__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (resp,items_or_tx){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(network_activity,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remote,new cljs.core.Keyword(null,"active-requests","active-requests",1354177961)], null),((function (map__59143,map__59143__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__59140,map__59140__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (p1__59133_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59133_SHARP_,uuid);
});})(map__59143,map__59143__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__59140,map__59140__$1,reconciler,payload,tx,on_done,on_error,on_load))
);

setTimeout(((function (map__59143,map__59143__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__59140,map__59140__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"active-requests","active-requests",1354177961).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(network_activity),remote))),(0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.client.primitives.app_state(reconciler),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","status","fulcro.client.network/status",570358457),remote], null),new cljs.core.Keyword(null,"idle","idle",-2007156861));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(network_activity,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remote,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"idle","idle",-2007156861));

return fulcro.client.impl.protocols.queue_BANG_(reconciler,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","status","fulcro.client.network/status",570358457)], null));
} else {
return null;
}
});})(map__59143,map__59143__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__59140,map__59140__$1,reconciler,payload,tx,on_done,on_error,on_load))
,(0));

return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(resp,items_or_tx) : handler.call(null,resp,items_or_tx));
});
;})(map__59143,map__59143__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__59140,map__59140__$1,reconciler,payload,tx,on_done,on_error,on_load))
});})(map__59143,map__59143__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__59140,map__59140__$1,reconciler,payload,tx,on_done,on_error,on_load))
;
var with_history_recording = ((function (map__59143,map__59143__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,with_network_activity_tracking,map__59140,map__59140__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (handler){
return ((function (map__59143,map__59143__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,with_network_activity_tracking,map__59140,map__59140__$1,reconciler,payload,tx,on_done,on_error,on_load){
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
;})(map__59143,map__59143__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,with_network_activity_tracking,map__59140,map__59140__$1,reconciler,payload,tx,on_done,on_error,on_load))
});})(map__59143,map__59143__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,with_network_activity_tracking,map__59140,map__59140__$1,reconciler,payload,tx,on_done,on_error,on_load))
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
}catch (e59152){if((e59152 instanceof Error)){
var e__48920__auto___60074 = e59152;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),89], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___60074], 0));
} else {
throw e59152;

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
}catch (e59163){if((e59163 instanceof Error)){
var e__48920__auto___60089 = e59163;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),112], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___60089], 0));
} else {
throw e59163;

}
}
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx], null);
} else {
if(cljs.core.empty_QMARK_(tx)){
return cljs.core.PersistentVector.EMPTY;
} else {
var dispatch_symbols = (function (tx__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_)),(function (){var G__59165 = tx__$1;
var G__59165__$1 = (((G__59165 == null))?null:fulcro.client.primitives.query__GT_ast(G__59165));
if((G__59165__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__59165__$1);
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
var map__59164 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (dispatch_symbols,compatible_abort_QMARK_,can_be_included_QMARK_){
return (function (p__59179,expr){
var map__59180 = p__59179;
var map__59180__$1 = (((((!((map__59180 == null))))?(((((map__59180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59180):map__59180);
var acc = map__59180__$1;
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59180__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
if(can_be_included_QMARK_(current,expr)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.conj,expr);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"transactions","transactions",-1425846118),cljs.core.conj,current),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr], null));
}
});})(dispatch_symbols,compatible_abort_QMARK_,can_be_included_QMARK_))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transactions","transactions",-1425846118),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.PersistentVector.EMPTY], null),tx);
var map__59164__$1 = (((((!((map__59164 == null))))?(((((map__59164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59164):map__59164);
var transactions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59164__$1,new cljs.core.Keyword(null,"transactions","transactions",-1425846118));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59164__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
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
fulcro.client.impl.application.enqueue_mutations = (function fulcro$client$impl$application$enqueue_mutations(p__59194,remote_tx_map,cb){
var map__59195 = p__59194;
var map__59195__$1 = (((((!((map__59195 == null))))?(((((map__59195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59195):map__59195);
var app = map__59195__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59195__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59195__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var history = fulcro.client.primitives.get_history(reconciler);
var seq__59200 = cljs.core.seq(cljs.core.keys(remote_tx_map));
var chunk__59201 = null;
var count__59202 = (0);
var i__59203 = (0);
while(true){
if((i__59203 < count__59202)){
var remote = chunk__59201.cljs$core$IIndexed$_nth$arity$2(null,i__59203);
var queue_60108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_60109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var refresh_set_60110 = (function (){var or__4131__auto__ = (function (){var G__59253 = full_remote_transaction_60109;
var G__59253__$1 = (((G__59253 == null))?null:cljs.core.meta(G__59253));
var G__59253__$2 = (((G__59253__$1 == null))?null:new cljs.core.Keyword("fulcro.client.primitives","refresh","fulcro.client.primitives/refresh",481513561).cljs$core$IFn$_invoke$arity$1(G__59253__$1));
if((G__59253__$2 == null)){
return null;
} else {
return cljs.core.vec(G__59253__$2);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var tx_time_60111 = (function (){var G__59257 = full_remote_transaction_60109;
var G__59257__$1 = (((G__59257 == null))?null:cljs.core.meta(G__59257));
if((G__59257__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456).cljs$core$IFn$_invoke$arity$1(G__59257__$1);
}
})();
var fallback_60112 = fulcro.client.impl.application.fallback_handler(app,full_remote_transaction_60109);
var desired_remote_mutations_60113 = fulcro.client.primitives.remove_loads_and_fallbacks(full_remote_transaction_60109);
var tx_list_60114 = fulcro.client.impl.application.split_mutations(desired_remote_mutations_60113);
var has_mutations_QMARK__60115 = ((function (seq__59200,chunk__59201,count__59202,i__59203,queue_60108,full_remote_transaction_60109,refresh_set_60110,tx_time_60111,fallback_60112,desired_remote_mutations_60113,tx_list_60114,remote,history,map__59195,map__59195__$1,app,reconciler,send_queues){
return (function (tx){
return (cljs.core.count(tx) > (0));
});})(seq__59200,chunk__59201,count__59202,i__59203,queue_60108,full_remote_transaction_60109,refresh_set_60110,tx_time_60111,fallback_60112,desired_remote_mutations_60113,tx_list_60114,remote,history,map__59195,map__59195__$1,app,reconciler,send_queues))
;
var payload_60116 = ((function (seq__59200,chunk__59201,count__59202,i__59203,queue_60108,full_remote_transaction_60109,refresh_set_60110,tx_time_60111,fallback_60112,desired_remote_mutations_60113,tx_list_60114,has_mutations_QMARK__60115,remote,history,map__59195,map__59195__$1,app,reconciler,send_queues){
return (function (tx){
var abort_id = (function (){var G__59261 = tx;
var G__59261__$1 = (((G__59261 == null))?null:fulcro.client.mutations.abort_ids(G__59261));
if((G__59261__$1 == null)){
return null;
} else {
return cljs.core.first(G__59261__$1);
}
})();
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),tx,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456),tx_time_60111,new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564),history,new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012),remote,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267),abort_id,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603),((function (seq__59200,chunk__59201,count__59202,i__59203,abort_id,queue_60108,full_remote_transaction_60109,refresh_set_60110,tx_time_60111,fallback_60112,desired_remote_mutations_60113,tx_list_60114,has_mutations_QMARK__60115,remote,history,map__59195,map__59195__$1,app,reconciler,send_queues){
return (function (result,mtx){
var G__59263 = result;
var G__59264 = (function (){var or__4131__auto__ = mtx;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return tx;
}
})();
var G__59265 = remote;
return (cb.cljs$core$IFn$_invoke$arity$3 ? cb.cljs$core$IFn$_invoke$arity$3(G__59263,G__59264,G__59265) : cb.call(null,G__59263,G__59264,G__59265));
});})(seq__59200,chunk__59201,count__59202,i__59203,abort_id,queue_60108,full_remote_transaction_60109,refresh_set_60110,tx_time_60111,fallback_60112,desired_remote_mutations_60113,tx_list_60114,has_mutations_QMARK__60115,remote,history,map__59195,map__59195__$1,app,reconciler,send_queues))
,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629),((function (seq__59200,chunk__59201,count__59202,i__59203,abort_id,queue_60108,full_remote_transaction_60109,refresh_set_60110,tx_time_60111,fallback_60112,desired_remote_mutations_60113,tx_list_60114,has_mutations_QMARK__60115,remote,history,map__59195,map__59195__$1,app,reconciler,send_queues){
return (function (result){
return fallback_60112(result);
});})(seq__59200,chunk__59201,count__59202,i__59203,abort_id,queue_60108,full_remote_transaction_60109,refresh_set_60110,tx_time_60111,fallback_60112,desired_remote_mutations_60113,tx_list_60114,has_mutations_QMARK__60115,remote,history,map__59195,map__59195__$1,app,reconciler,send_queues))
], null);
});})(seq__59200,chunk__59201,count__59202,i__59203,queue_60108,full_remote_transaction_60109,refresh_set_60110,tx_time_60111,fallback_60112,desired_remote_mutations_60113,tx_list_60114,has_mutations_QMARK__60115,remote,history,map__59195,map__59195__$1,app,reconciler,send_queues))
;
var seq__59266_60125 = cljs.core.seq(tx_list_60114);
var chunk__59267_60126 = null;
var count__59268_60127 = (0);
var i__59269_60128 = (0);
while(true){
if((i__59269_60128 < count__59268_60127)){
var tx_60129 = chunk__59267_60126.cljs$core$IIndexed$_nth$arity$2(null,i__59269_60128);
if(has_mutations_QMARK__60115(tx_60129)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_60108,payload_60116(tx_60129));
} else {
}


var G__60131 = seq__59266_60125;
var G__60132 = chunk__59267_60126;
var G__60133 = count__59268_60127;
var G__60134 = (i__59269_60128 + (1));
seq__59266_60125 = G__60131;
chunk__59267_60126 = G__60132;
count__59268_60127 = G__60133;
i__59269_60128 = G__60134;
continue;
} else {
var temp__5720__auto___60135 = cljs.core.seq(seq__59266_60125);
if(temp__5720__auto___60135){
var seq__59266_60136__$1 = temp__5720__auto___60135;
if(cljs.core.chunked_seq_QMARK_(seq__59266_60136__$1)){
var c__4550__auto___60137 = cljs.core.chunk_first(seq__59266_60136__$1);
var G__60138 = cljs.core.chunk_rest(seq__59266_60136__$1);
var G__60139 = c__4550__auto___60137;
var G__60140 = cljs.core.count(c__4550__auto___60137);
var G__60141 = (0);
seq__59266_60125 = G__60138;
chunk__59267_60126 = G__60139;
count__59268_60127 = G__60140;
i__59269_60128 = G__60141;
continue;
} else {
var tx_60142 = cljs.core.first(seq__59266_60136__$1);
if(has_mutations_QMARK__60115(tx_60142)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_60108,payload_60116(tx_60142));
} else {
}


var G__60143 = cljs.core.next(seq__59266_60136__$1);
var G__60144 = null;
var G__60145 = (0);
var G__60146 = (0);
seq__59266_60125 = G__60143;
chunk__59267_60126 = G__60144;
count__59268_60127 = G__60145;
i__59269_60128 = G__60146;
continue;
}
} else {
}
}
break;
}


var G__60148 = seq__59200;
var G__60149 = chunk__59201;
var G__60150 = count__59202;
var G__60151 = (i__59203 + (1));
seq__59200 = G__60148;
chunk__59201 = G__60149;
count__59202 = G__60150;
i__59203 = G__60151;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__59200);
if(temp__5720__auto__){
var seq__59200__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59200__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59200__$1);
var G__60153 = cljs.core.chunk_rest(seq__59200__$1);
var G__60154 = c__4550__auto__;
var G__60155 = cljs.core.count(c__4550__auto__);
var G__60156 = (0);
seq__59200 = G__60153;
chunk__59201 = G__60154;
count__59202 = G__60155;
i__59203 = G__60156;
continue;
} else {
var remote = cljs.core.first(seq__59200__$1);
var queue_60161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_60162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var refresh_set_60163 = (function (){var or__4131__auto__ = (function (){var G__59287 = full_remote_transaction_60162;
var G__59287__$1 = (((G__59287 == null))?null:cljs.core.meta(G__59287));
var G__59287__$2 = (((G__59287__$1 == null))?null:new cljs.core.Keyword("fulcro.client.primitives","refresh","fulcro.client.primitives/refresh",481513561).cljs$core$IFn$_invoke$arity$1(G__59287__$1));
if((G__59287__$2 == null)){
return null;
} else {
return cljs.core.vec(G__59287__$2);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var tx_time_60164 = (function (){var G__59292 = full_remote_transaction_60162;
var G__59292__$1 = (((G__59292 == null))?null:cljs.core.meta(G__59292));
if((G__59292__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456).cljs$core$IFn$_invoke$arity$1(G__59292__$1);
}
})();
var fallback_60165 = fulcro.client.impl.application.fallback_handler(app,full_remote_transaction_60162);
var desired_remote_mutations_60166 = fulcro.client.primitives.remove_loads_and_fallbacks(full_remote_transaction_60162);
var tx_list_60167 = fulcro.client.impl.application.split_mutations(desired_remote_mutations_60166);
var has_mutations_QMARK__60168 = ((function (seq__59200,chunk__59201,count__59202,i__59203,queue_60161,full_remote_transaction_60162,refresh_set_60163,tx_time_60164,fallback_60165,desired_remote_mutations_60166,tx_list_60167,remote,seq__59200__$1,temp__5720__auto__,history,map__59195,map__59195__$1,app,reconciler,send_queues){
return (function (tx){
return (cljs.core.count(tx) > (0));
});})(seq__59200,chunk__59201,count__59202,i__59203,queue_60161,full_remote_transaction_60162,refresh_set_60163,tx_time_60164,fallback_60165,desired_remote_mutations_60166,tx_list_60167,remote,seq__59200__$1,temp__5720__auto__,history,map__59195,map__59195__$1,app,reconciler,send_queues))
;
var payload_60169 = ((function (seq__59200,chunk__59201,count__59202,i__59203,queue_60161,full_remote_transaction_60162,refresh_set_60163,tx_time_60164,fallback_60165,desired_remote_mutations_60166,tx_list_60167,has_mutations_QMARK__60168,remote,seq__59200__$1,temp__5720__auto__,history,map__59195,map__59195__$1,app,reconciler,send_queues){
return (function (tx){
var abort_id = (function (){var G__59295 = tx;
var G__59295__$1 = (((G__59295 == null))?null:fulcro.client.mutations.abort_ids(G__59295));
if((G__59295__$1 == null)){
return null;
} else {
return cljs.core.first(G__59295__$1);
}
})();
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),tx,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456),tx_time_60164,new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564),history,new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012),remote,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267),abort_id,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603),((function (seq__59200,chunk__59201,count__59202,i__59203,abort_id,queue_60161,full_remote_transaction_60162,refresh_set_60163,tx_time_60164,fallback_60165,desired_remote_mutations_60166,tx_list_60167,has_mutations_QMARK__60168,remote,seq__59200__$1,temp__5720__auto__,history,map__59195,map__59195__$1,app,reconciler,send_queues){
return (function (result,mtx){
var G__59303 = result;
var G__59304 = (function (){var or__4131__auto__ = mtx;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return tx;
}
})();
var G__59305 = remote;
return (cb.cljs$core$IFn$_invoke$arity$3 ? cb.cljs$core$IFn$_invoke$arity$3(G__59303,G__59304,G__59305) : cb.call(null,G__59303,G__59304,G__59305));
});})(seq__59200,chunk__59201,count__59202,i__59203,abort_id,queue_60161,full_remote_transaction_60162,refresh_set_60163,tx_time_60164,fallback_60165,desired_remote_mutations_60166,tx_list_60167,has_mutations_QMARK__60168,remote,seq__59200__$1,temp__5720__auto__,history,map__59195,map__59195__$1,app,reconciler,send_queues))
,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629),((function (seq__59200,chunk__59201,count__59202,i__59203,abort_id,queue_60161,full_remote_transaction_60162,refresh_set_60163,tx_time_60164,fallback_60165,desired_remote_mutations_60166,tx_list_60167,has_mutations_QMARK__60168,remote,seq__59200__$1,temp__5720__auto__,history,map__59195,map__59195__$1,app,reconciler,send_queues){
return (function (result){
return fallback_60165(result);
});})(seq__59200,chunk__59201,count__59202,i__59203,abort_id,queue_60161,full_remote_transaction_60162,refresh_set_60163,tx_time_60164,fallback_60165,desired_remote_mutations_60166,tx_list_60167,has_mutations_QMARK__60168,remote,seq__59200__$1,temp__5720__auto__,history,map__59195,map__59195__$1,app,reconciler,send_queues))
], null);
});})(seq__59200,chunk__59201,count__59202,i__59203,queue_60161,full_remote_transaction_60162,refresh_set_60163,tx_time_60164,fallback_60165,desired_remote_mutations_60166,tx_list_60167,has_mutations_QMARK__60168,remote,seq__59200__$1,temp__5720__auto__,history,map__59195,map__59195__$1,app,reconciler,send_queues))
;
var seq__59307_60179 = cljs.core.seq(tx_list_60167);
var chunk__59308_60180 = null;
var count__59309_60181 = (0);
var i__59310_60182 = (0);
while(true){
if((i__59310_60182 < count__59309_60181)){
var tx_60183 = chunk__59308_60180.cljs$core$IIndexed$_nth$arity$2(null,i__59310_60182);
if(has_mutations_QMARK__60168(tx_60183)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_60161,payload_60169(tx_60183));
} else {
}


var G__60185 = seq__59307_60179;
var G__60186 = chunk__59308_60180;
var G__60187 = count__59309_60181;
var G__60188 = (i__59310_60182 + (1));
seq__59307_60179 = G__60185;
chunk__59308_60180 = G__60186;
count__59309_60181 = G__60187;
i__59310_60182 = G__60188;
continue;
} else {
var temp__5720__auto___60189__$1 = cljs.core.seq(seq__59307_60179);
if(temp__5720__auto___60189__$1){
var seq__59307_60190__$1 = temp__5720__auto___60189__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59307_60190__$1)){
var c__4550__auto___60191 = cljs.core.chunk_first(seq__59307_60190__$1);
var G__60192 = cljs.core.chunk_rest(seq__59307_60190__$1);
var G__60193 = c__4550__auto___60191;
var G__60194 = cljs.core.count(c__4550__auto___60191);
var G__60195 = (0);
seq__59307_60179 = G__60192;
chunk__59308_60180 = G__60193;
count__59309_60181 = G__60194;
i__59310_60182 = G__60195;
continue;
} else {
var tx_60199 = cljs.core.first(seq__59307_60190__$1);
if(has_mutations_QMARK__60168(tx_60199)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_60161,payload_60169(tx_60199));
} else {
}


var G__60201 = cljs.core.next(seq__59307_60190__$1);
var G__60202 = null;
var G__60203 = (0);
var G__60204 = (0);
seq__59307_60179 = G__60201;
chunk__59308_60180 = G__60202;
count__59309_60181 = G__60203;
i__59310_60182 = G__60204;
continue;
}
} else {
}
}
break;
}


var G__60206 = cljs.core.next(seq__59200__$1);
var G__60207 = null;
var G__60208 = (0);
var G__60209 = (0);
seq__59200 = G__60206;
chunk__59201 = G__60207;
count__59202 = G__60208;
i__59203 = G__60209;
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
fulcro.client.impl.application.enqueue_reads = (function fulcro$client$impl$application$enqueue_reads(p__59338){
var map__59339 = p__59338;
var map__59339__$1 = (((((!((map__59339 == null))))?(((((map__59339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59339):map__59339);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59339__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59339__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59339__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var seq__59341 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__59342 = null;
var count__59343 = (0);
var i__59344 = (0);
while(true){
if((i__59344 < count__59343)){
var remote = chunk__59342.cljs$core$IIndexed$_nth$arity$2(null,i__59344);
var queue_60211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_60212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_60213 = fulcro.client.impl.data_fetch.mark_parallel_loading_BANG_(remote,reconciler);
var seq__59435_60214 = cljs.core.seq(parallel_payload_60213);
var chunk__59436_60215 = null;
var count__59437_60216 = (0);
var i__59438_60217 = (0);
while(true){
if((i__59438_60217 < count__59437_60216)){
var map__59456_60218 = chunk__59436_60215.cljs$core$IIndexed$_nth$arity$2(null,i__59438_60217);
var map__59456_60219__$1 = (((((!((map__59456_60218 == null))))?(((((map__59456_60218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59456_60218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59456_60218):map__59456_60218);
var payload_60220 = map__59456_60219__$1;
var query_60221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59456_60219__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load_60222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59456_60219__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error_60223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59456_60219__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors_60224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59456_60219__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id_60225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59456_60219__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var on_load_SINGLEQUOTE__60230 = ((function (seq__59435_60214,chunk__59436_60215,count__59437_60216,i__59438_60217,seq__59341,chunk__59342,count__59343,i__59344,map__59456_60218,map__59456_60219__$1,payload_60220,query_60221,on_load_60222,on_error_60223,load_descriptors_60224,abort_id_60225,queue_60211,network_60212,parallel_payload_60213,remote,map__59339,map__59339__$1,send_queues,reconciler,networking){
return (function (p1__59332_SHARP_){
return (on_load_60222.cljs$core$IFn$_invoke$arity$2 ? on_load_60222.cljs$core$IFn$_invoke$arity$2(p1__59332_SHARP_,load_descriptors_60224) : on_load_60222.call(null,p1__59332_SHARP_,load_descriptors_60224));
});})(seq__59435_60214,chunk__59436_60215,count__59437_60216,i__59438_60217,seq__59341,chunk__59342,count__59343,i__59344,map__59456_60218,map__59456_60219__$1,payload_60220,query_60221,on_load_60222,on_error_60223,load_descriptors_60224,abort_id_60225,queue_60211,network_60212,parallel_payload_60213,remote,map__59339,map__59339__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__60231 = ((function (seq__59435_60214,chunk__59436_60215,count__59437_60216,i__59438_60217,seq__59341,chunk__59342,count__59343,i__59344,on_load_SINGLEQUOTE__60230,map__59456_60218,map__59456_60219__$1,payload_60220,query_60221,on_load_60222,on_error_60223,load_descriptors_60224,abort_id_60225,queue_60211,network_60212,parallel_payload_60213,remote,map__59339,map__59339__$1,send_queues,reconciler,networking){
return (function (p1__59333_SHARP_){
return (on_error_60223.cljs$core$IFn$_invoke$arity$2 ? on_error_60223.cljs$core$IFn$_invoke$arity$2(p1__59333_SHARP_,load_descriptors_60224) : on_error_60223.call(null,p1__59333_SHARP_,load_descriptors_60224));
});})(seq__59435_60214,chunk__59436_60215,count__59437_60216,i__59438_60217,seq__59341,chunk__59342,count__59343,i__59344,on_load_SINGLEQUOTE__60230,map__59456_60218,map__59456_60219__$1,payload_60220,query_60221,on_load_60222,on_error_60223,load_descriptors_60224,abort_id_60225,queue_60211,network_60212,parallel_payload_60213,remote,map__59339,map__59339__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_60212,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload_60220,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),query_60221,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_load_SINGLEQUOTE__60230,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error_SINGLEQUOTE__60231,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_60225], null));


var G__60234 = seq__59435_60214;
var G__60235 = chunk__59436_60215;
var G__60236 = count__59437_60216;
var G__60237 = (i__59438_60217 + (1));
seq__59435_60214 = G__60234;
chunk__59436_60215 = G__60235;
count__59437_60216 = G__60236;
i__59438_60217 = G__60237;
continue;
} else {
var temp__5720__auto___60238 = cljs.core.seq(seq__59435_60214);
if(temp__5720__auto___60238){
var seq__59435_60239__$1 = temp__5720__auto___60238;
if(cljs.core.chunked_seq_QMARK_(seq__59435_60239__$1)){
var c__4550__auto___60240 = cljs.core.chunk_first(seq__59435_60239__$1);
var G__60242 = cljs.core.chunk_rest(seq__59435_60239__$1);
var G__60243 = c__4550__auto___60240;
var G__60244 = cljs.core.count(c__4550__auto___60240);
var G__60245 = (0);
seq__59435_60214 = G__60242;
chunk__59436_60215 = G__60243;
count__59437_60216 = G__60244;
i__59438_60217 = G__60245;
continue;
} else {
var map__59461_60249 = cljs.core.first(seq__59435_60239__$1);
var map__59461_60250__$1 = (((((!((map__59461_60249 == null))))?(((((map__59461_60249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59461_60249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59461_60249):map__59461_60249);
var payload_60251 = map__59461_60250__$1;
var query_60252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59461_60250__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load_60253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59461_60250__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error_60254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59461_60250__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors_60255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59461_60250__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id_60256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59461_60250__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var on_load_SINGLEQUOTE__60258 = ((function (seq__59435_60214,chunk__59436_60215,count__59437_60216,i__59438_60217,seq__59341,chunk__59342,count__59343,i__59344,map__59461_60249,map__59461_60250__$1,payload_60251,query_60252,on_load_60253,on_error_60254,load_descriptors_60255,abort_id_60256,seq__59435_60239__$1,temp__5720__auto___60238,queue_60211,network_60212,parallel_payload_60213,remote,map__59339,map__59339__$1,send_queues,reconciler,networking){
return (function (p1__59332_SHARP_){
return (on_load_60253.cljs$core$IFn$_invoke$arity$2 ? on_load_60253.cljs$core$IFn$_invoke$arity$2(p1__59332_SHARP_,load_descriptors_60255) : on_load_60253.call(null,p1__59332_SHARP_,load_descriptors_60255));
});})(seq__59435_60214,chunk__59436_60215,count__59437_60216,i__59438_60217,seq__59341,chunk__59342,count__59343,i__59344,map__59461_60249,map__59461_60250__$1,payload_60251,query_60252,on_load_60253,on_error_60254,load_descriptors_60255,abort_id_60256,seq__59435_60239__$1,temp__5720__auto___60238,queue_60211,network_60212,parallel_payload_60213,remote,map__59339,map__59339__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__60259 = ((function (seq__59435_60214,chunk__59436_60215,count__59437_60216,i__59438_60217,seq__59341,chunk__59342,count__59343,i__59344,on_load_SINGLEQUOTE__60258,map__59461_60249,map__59461_60250__$1,payload_60251,query_60252,on_load_60253,on_error_60254,load_descriptors_60255,abort_id_60256,seq__59435_60239__$1,temp__5720__auto___60238,queue_60211,network_60212,parallel_payload_60213,remote,map__59339,map__59339__$1,send_queues,reconciler,networking){
return (function (p1__59333_SHARP_){
return (on_error_60254.cljs$core$IFn$_invoke$arity$2 ? on_error_60254.cljs$core$IFn$_invoke$arity$2(p1__59333_SHARP_,load_descriptors_60255) : on_error_60254.call(null,p1__59333_SHARP_,load_descriptors_60255));
});})(seq__59435_60214,chunk__59436_60215,count__59437_60216,i__59438_60217,seq__59341,chunk__59342,count__59343,i__59344,on_load_SINGLEQUOTE__60258,map__59461_60249,map__59461_60250__$1,payload_60251,query_60252,on_load_60253,on_error_60254,load_descriptors_60255,abort_id_60256,seq__59435_60239__$1,temp__5720__auto___60238,queue_60211,network_60212,parallel_payload_60213,remote,map__59339,map__59339__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_60212,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload_60251,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),query_60252,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_load_SINGLEQUOTE__60258,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error_SINGLEQUOTE__60259,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_60256], null));


var G__60262 = cljs.core.next(seq__59435_60239__$1);
var G__60263 = null;
var G__60264 = (0);
var G__60265 = (0);
seq__59435_60214 = G__60262;
chunk__59436_60215 = G__60263;
count__59437_60216 = G__60264;
i__59438_60217 = G__60265;
continue;
}
} else {
}
}
break;
}

var fetch_payload_60266 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_60266)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_60211,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_60266,new cljs.core.Keyword(null,"networking","networking",586110628),network_60212));

var G__60267 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_60266 = G__60267;
continue;
} else {
}
break;
}


var G__60268 = seq__59341;
var G__60269 = chunk__59342;
var G__60270 = count__59343;
var G__60271 = (i__59344 + (1));
seq__59341 = G__60268;
chunk__59342 = G__60269;
count__59343 = G__60270;
i__59344 = G__60271;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__59341);
if(temp__5720__auto__){
var seq__59341__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59341__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59341__$1);
var G__60275 = cljs.core.chunk_rest(seq__59341__$1);
var G__60276 = c__4550__auto__;
var G__60277 = cljs.core.count(c__4550__auto__);
var G__60278 = (0);
seq__59341 = G__60275;
chunk__59342 = G__60276;
count__59343 = G__60277;
i__59344 = G__60278;
continue;
} else {
var remote = cljs.core.first(seq__59341__$1);
var queue_60279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_60280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_60281 = fulcro.client.impl.data_fetch.mark_parallel_loading_BANG_(remote,reconciler);
var seq__59465_60284 = cljs.core.seq(parallel_payload_60281);
var chunk__59466_60285 = null;
var count__59467_60286 = (0);
var i__59468_60287 = (0);
while(true){
if((i__59468_60287 < count__59467_60286)){
var map__59477_60288 = chunk__59466_60285.cljs$core$IIndexed$_nth$arity$2(null,i__59468_60287);
var map__59477_60289__$1 = (((((!((map__59477_60288 == null))))?(((((map__59477_60288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59477_60288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59477_60288):map__59477_60288);
var payload_60290 = map__59477_60289__$1;
var query_60291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59477_60289__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load_60292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59477_60289__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error_60293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59477_60289__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors_60294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59477_60289__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id_60295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59477_60289__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var on_load_SINGLEQUOTE__60298 = ((function (seq__59465_60284,chunk__59466_60285,count__59467_60286,i__59468_60287,seq__59341,chunk__59342,count__59343,i__59344,map__59477_60288,map__59477_60289__$1,payload_60290,query_60291,on_load_60292,on_error_60293,load_descriptors_60294,abort_id_60295,queue_60279,network_60280,parallel_payload_60281,remote,seq__59341__$1,temp__5720__auto__,map__59339,map__59339__$1,send_queues,reconciler,networking){
return (function (p1__59332_SHARP_){
return (on_load_60292.cljs$core$IFn$_invoke$arity$2 ? on_load_60292.cljs$core$IFn$_invoke$arity$2(p1__59332_SHARP_,load_descriptors_60294) : on_load_60292.call(null,p1__59332_SHARP_,load_descriptors_60294));
});})(seq__59465_60284,chunk__59466_60285,count__59467_60286,i__59468_60287,seq__59341,chunk__59342,count__59343,i__59344,map__59477_60288,map__59477_60289__$1,payload_60290,query_60291,on_load_60292,on_error_60293,load_descriptors_60294,abort_id_60295,queue_60279,network_60280,parallel_payload_60281,remote,seq__59341__$1,temp__5720__auto__,map__59339,map__59339__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__60299 = ((function (seq__59465_60284,chunk__59466_60285,count__59467_60286,i__59468_60287,seq__59341,chunk__59342,count__59343,i__59344,on_load_SINGLEQUOTE__60298,map__59477_60288,map__59477_60289__$1,payload_60290,query_60291,on_load_60292,on_error_60293,load_descriptors_60294,abort_id_60295,queue_60279,network_60280,parallel_payload_60281,remote,seq__59341__$1,temp__5720__auto__,map__59339,map__59339__$1,send_queues,reconciler,networking){
return (function (p1__59333_SHARP_){
return (on_error_60293.cljs$core$IFn$_invoke$arity$2 ? on_error_60293.cljs$core$IFn$_invoke$arity$2(p1__59333_SHARP_,load_descriptors_60294) : on_error_60293.call(null,p1__59333_SHARP_,load_descriptors_60294));
});})(seq__59465_60284,chunk__59466_60285,count__59467_60286,i__59468_60287,seq__59341,chunk__59342,count__59343,i__59344,on_load_SINGLEQUOTE__60298,map__59477_60288,map__59477_60289__$1,payload_60290,query_60291,on_load_60292,on_error_60293,load_descriptors_60294,abort_id_60295,queue_60279,network_60280,parallel_payload_60281,remote,seq__59341__$1,temp__5720__auto__,map__59339,map__59339__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_60280,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload_60290,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),query_60291,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_load_SINGLEQUOTE__60298,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error_SINGLEQUOTE__60299,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_60295], null));


var G__60302 = seq__59465_60284;
var G__60303 = chunk__59466_60285;
var G__60304 = count__59467_60286;
var G__60305 = (i__59468_60287 + (1));
seq__59465_60284 = G__60302;
chunk__59466_60285 = G__60303;
count__59467_60286 = G__60304;
i__59468_60287 = G__60305;
continue;
} else {
var temp__5720__auto___60307__$1 = cljs.core.seq(seq__59465_60284);
if(temp__5720__auto___60307__$1){
var seq__59465_60308__$1 = temp__5720__auto___60307__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59465_60308__$1)){
var c__4550__auto___60309 = cljs.core.chunk_first(seq__59465_60308__$1);
var G__60310 = cljs.core.chunk_rest(seq__59465_60308__$1);
var G__60311 = c__4550__auto___60309;
var G__60312 = cljs.core.count(c__4550__auto___60309);
var G__60313 = (0);
seq__59465_60284 = G__60310;
chunk__59466_60285 = G__60311;
count__59467_60286 = G__60312;
i__59468_60287 = G__60313;
continue;
} else {
var map__59481_60314 = cljs.core.first(seq__59465_60308__$1);
var map__59481_60315__$1 = (((((!((map__59481_60314 == null))))?(((((map__59481_60314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59481_60314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59481_60314):map__59481_60314);
var payload_60316 = map__59481_60315__$1;
var query_60317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59481_60315__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load_60318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59481_60315__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error_60319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59481_60315__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors_60320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59481_60315__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id_60321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59481_60315__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var on_load_SINGLEQUOTE__60322 = ((function (seq__59465_60284,chunk__59466_60285,count__59467_60286,i__59468_60287,seq__59341,chunk__59342,count__59343,i__59344,map__59481_60314,map__59481_60315__$1,payload_60316,query_60317,on_load_60318,on_error_60319,load_descriptors_60320,abort_id_60321,seq__59465_60308__$1,temp__5720__auto___60307__$1,queue_60279,network_60280,parallel_payload_60281,remote,seq__59341__$1,temp__5720__auto__,map__59339,map__59339__$1,send_queues,reconciler,networking){
return (function (p1__59332_SHARP_){
return (on_load_60318.cljs$core$IFn$_invoke$arity$2 ? on_load_60318.cljs$core$IFn$_invoke$arity$2(p1__59332_SHARP_,load_descriptors_60320) : on_load_60318.call(null,p1__59332_SHARP_,load_descriptors_60320));
});})(seq__59465_60284,chunk__59466_60285,count__59467_60286,i__59468_60287,seq__59341,chunk__59342,count__59343,i__59344,map__59481_60314,map__59481_60315__$1,payload_60316,query_60317,on_load_60318,on_error_60319,load_descriptors_60320,abort_id_60321,seq__59465_60308__$1,temp__5720__auto___60307__$1,queue_60279,network_60280,parallel_payload_60281,remote,seq__59341__$1,temp__5720__auto__,map__59339,map__59339__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__60323 = ((function (seq__59465_60284,chunk__59466_60285,count__59467_60286,i__59468_60287,seq__59341,chunk__59342,count__59343,i__59344,on_load_SINGLEQUOTE__60322,map__59481_60314,map__59481_60315__$1,payload_60316,query_60317,on_load_60318,on_error_60319,load_descriptors_60320,abort_id_60321,seq__59465_60308__$1,temp__5720__auto___60307__$1,queue_60279,network_60280,parallel_payload_60281,remote,seq__59341__$1,temp__5720__auto__,map__59339,map__59339__$1,send_queues,reconciler,networking){
return (function (p1__59333_SHARP_){
return (on_error_60319.cljs$core$IFn$_invoke$arity$2 ? on_error_60319.cljs$core$IFn$_invoke$arity$2(p1__59333_SHARP_,load_descriptors_60320) : on_error_60319.call(null,p1__59333_SHARP_,load_descriptors_60320));
});})(seq__59465_60284,chunk__59466_60285,count__59467_60286,i__59468_60287,seq__59341,chunk__59342,count__59343,i__59344,on_load_SINGLEQUOTE__60322,map__59481_60314,map__59481_60315__$1,payload_60316,query_60317,on_load_60318,on_error_60319,load_descriptors_60320,abort_id_60321,seq__59465_60308__$1,temp__5720__auto___60307__$1,queue_60279,network_60280,parallel_payload_60281,remote,seq__59341__$1,temp__5720__auto__,map__59339,map__59339__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_60280,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload_60316,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),query_60317,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_load_SINGLEQUOTE__60322,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error_SINGLEQUOTE__60323,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_60321], null));


var G__60330 = cljs.core.next(seq__59465_60308__$1);
var G__60331 = null;
var G__60332 = (0);
var G__60333 = (0);
seq__59465_60284 = G__60330;
chunk__59466_60285 = G__60331;
count__59467_60286 = G__60332;
i__59468_60287 = G__60333;
continue;
}
} else {
}
}
break;
}

var fetch_payload_60335 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_60335)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_60279,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_60335,new cljs.core.Keyword(null,"networking","networking",586110628),network_60280));

var G__60343 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_60335 = G__60343;
continue;
} else {
}
break;
}


var G__60344 = cljs.core.next(seq__59341__$1);
var G__60345 = null;
var G__60346 = (0);
var G__60347 = (0);
seq__59341 = G__60344;
chunk__59342 = G__60345;
count__59343 = G__60346;
i__59344 = G__60347;
continue;
}
} else {
return null;
}
}
break;
}
});
fulcro.client.impl.application.detect_errant_remotes = (function fulcro$client$impl$application$detect_errant_remotes(p__59484){
var map__59485 = p__59484;
var map__59485__$1 = (((((!((map__59485 == null))))?(((((map__59485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59485):map__59485);
var app = map__59485__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59485__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59485__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var state = fulcro.client.primitives.app_state(reconciler);
var all_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.Keyword("fulcro","ready-to-load","fulcro/ready-to-load",127104696));
var item_remotes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(fulcro.client.impl.data_fetch.data_remote),all_items);
var all_remotes = cljs.core.set(cljs.core.keys(send_queues));
var invalid_remotes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(item_remotes,all_remotes);
if(cljs.core.truth_(cljs.core.not_empty(invalid_remotes))){
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),217], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Use of invalid remote(s) detected! ",invalid_remotes], 0));
}catch (e59499){if((e59499 instanceof Error)){
var e__48920__auto__ = e59499;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),217], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto__], 0));
} else {
throw e59499;

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
var map__59515 = payload;
var map__59515__$1 = (((((!((map__59515 == null))))?(((((map__59515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59515):map__59515);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59515__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59515__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59515__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59515__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59515__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var merge_data = (cljs.core.truth_(load_descriptors)?((function (map__59515,map__59515__$1,query,on_load,on_error,load_descriptors,abort_id){
return (function (p1__59510_SHARP_){
return (on_load.cljs$core$IFn$_invoke$arity$2 ? on_load.cljs$core$IFn$_invoke$arity$2(p1__59510_SHARP_,load_descriptors) : on_load.call(null,p1__59510_SHARP_,load_descriptors));
});})(map__59515,map__59515__$1,query,on_load,on_error,load_descriptors,abort_id))
:((function (map__59515,map__59515__$1,query,on_load,on_error,load_descriptors,abort_id){
return (function (p1__59511_SHARP_,p2__59512_SHARP_){
return (on_load.cljs$core$IFn$_invoke$arity$2 ? on_load.cljs$core$IFn$_invoke$arity$2(p1__59511_SHARP_,p2__59512_SHARP_) : on_load.call(null,p1__59511_SHARP_,p2__59512_SHARP_));
});})(map__59515,map__59515__$1,query,on_load,on_error,load_descriptors,abort_id))
);
var on_update = (cljs.core.truth_(load_descriptors)?cljs.core.identity:merge_data);
var on_error__$1 = (cljs.core.truth_(load_descriptors)?((function (map__59515,map__59515__$1,query,on_load,on_error,load_descriptors,abort_id,merge_data,on_update){
return (function (p1__59513_SHARP_){
return (on_error.cljs$core$IFn$_invoke$arity$2 ? on_error.cljs$core$IFn$_invoke$arity$2(p1__59513_SHARP_,load_descriptors) : on_error.call(null,p1__59513_SHARP_,load_descriptors));
});})(map__59515,map__59515__$1,query,on_load,on_error,load_descriptors,abort_id,merge_data,on_update))
:on_error);
var on_error__$2 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(send_complete,on_error__$1);
var on_done = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(send_complete,merge_data);
if(fulcro.client.impl.data_fetch.is_deferred_transaction_QMARK_(query)){
on_done(cljs.core.PersistentArrayMap.EMPTY);

if(cljs.core.truth_(fulcro.client.impl.application.is_sequential_QMARK_(network))){
return null;
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),256], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Attempt to defer a transaction on a non-sequential remote. `ptransact!` will fail to work correctly with `serial? false` remotes."], 0));
}catch (e59522){if((e59522 instanceof Error)){
var e__48920__auto__ = e59522;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),256], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto__], 0));
} else {
throw e59522;

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
fulcro.client.impl.application.start_network_sequential_processing = (function fulcro$client$impl$application$start_network_sequential_processing(p__59524){
var map__59525 = p__59524;
var map__59525__$1 = (((((!((map__59525 == null))))?(((((map__59525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59525):map__59525);
var app = map__59525__$1;
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59525__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59525__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59525__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var response_channels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59525__$1,new cljs.core.Keyword(null,"response-channels","response-channels",-1871059128));
var seq__59537 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__59538 = null;
var count__59539 = (0);
var i__59540 = (0);
while(true){
if((i__59540 < count__59539)){
var remote = chunk__59538.cljs$core$IIndexed$_nth$arity$2(null,i__59540);
var queue_60467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_60468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var sequential_QMARK__60469 = fulcro.client.impl.application.is_sequential_QMARK_(network_60468);
var response_channel_60470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_60471 = (cljs.core.truth_(sequential_QMARK__60469)?((function (seq__59537,chunk__59538,count__59539,i__59540,queue_60467,network_60468,sequential_QMARK__60469,response_channel_60470,remote,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__59537,chunk__59538,count__59539,i__59540,c__45808__auto__,queue_60467,network_60468,sequential_QMARK__60469,response_channel_60470,remote,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (seq__59537,chunk__59538,count__59539,i__59540,c__45808__auto__,queue_60467,network_60468,sequential_QMARK__60469,response_channel_60470,remote,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_59676){
var state_val_59677 = (state_59676[(1)]);
if((state_val_59677 === (1))){
var state_59676__$1 = state_59676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59676__$1,(2),response_channel_60470,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_59677 === (2))){
var inst_59674 = (state_59676[(2)]);
var state_59676__$1 = state_59676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59676__$1,inst_59674);
} else {
return null;
}
}
});})(seq__59537,chunk__59538,count__59539,i__59540,c__45808__auto__,queue_60467,network_60468,sequential_QMARK__60469,response_channel_60470,remote,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__59537,chunk__59538,count__59539,i__59540,switch__45525__auto__,c__45808__auto__,queue_60467,network_60468,sequential_QMARK__60469,response_channel_60470,remote,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____0 = (function (){
var statearr_59686 = [null,null,null,null,null,null,null];
(statearr_59686[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__);

(statearr_59686[(1)] = (1));

return statearr_59686;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____1 = (function (state_59676){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_59676);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e59687){if((e59687 instanceof Object)){
var ex__45529__auto__ = e59687;
var statearr_59688_60499 = state_59676;
(statearr_59688_60499[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59687;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60501 = state_59676;
state_59676 = G__60501;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__ = function(state_59676){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____1.call(this,state_59676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__;
})()
;})(seq__59537,chunk__59538,count__59539,i__59540,switch__45525__auto__,c__45808__auto__,queue_60467,network_60468,sequential_QMARK__60469,response_channel_60470,remote,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__45810__auto__ = (function (){var statearr_59691 = f__45809__auto__();
(statearr_59691[(6)] = c__45808__auto__);

return statearr_59691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(seq__59537,chunk__59538,count__59539,i__59540,c__45808__auto__,queue_60467,network_60468,sequential_QMARK__60469,response_channel_60470,remote,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels))
);

return c__45808__auto__;
});})(seq__59537,chunk__59538,count__59539,i__59540,queue_60467,network_60468,sequential_QMARK__60469,response_channel_60470,remote,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels))
:cljs.core.identity);
var c__45808__auto___60504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__59537,chunk__59538,count__59539,i__59540,c__45808__auto___60504,queue_60467,network_60468,sequential_QMARK__60469,response_channel_60470,send_complete_60471,remote,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (seq__59537,chunk__59538,count__59539,i__59540,c__45808__auto___60504,queue_60467,network_60468,sequential_QMARK__60469,response_channel_60470,send_complete_60471,remote,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_59713){
var state_val_59714 = (state_59713[(1)]);
if((state_val_59714 === (7))){
var inst_59706 = (state_59713[(2)]);
var state_59713__$1 = (function (){var statearr_59718 = state_59713;
(statearr_59718[(7)] = inst_59706);

return statearr_59718;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59713__$1,(9),queue_60467);
} else {
if((state_val_59714 === (1))){
var state_59713__$1 = state_59713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59713__$1,(2),queue_60467);
} else {
if((state_val_59714 === (4))){
var inst_59711 = (state_59713[(2)]);
var state_59713__$1 = state_59713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59713__$1,inst_59711);
} else {
if((state_val_59714 === (6))){
var state_59713__$1 = state_59713;
var statearr_59719_60513 = state_59713__$1;
(statearr_59719_60513[(2)] = null);

(statearr_59719_60513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59714 === (3))){
var inst_59697 = (state_59713[(8)]);
var inst_59699 = fulcro.client.impl.application._send_payload(network_60468,reconciler,inst_59697,send_complete_60471);
var inst_59700 = fulcro.client.primitives.pop_pending_request(reconciler,remote);
var state_59713__$1 = (function (){var statearr_59720 = state_59713;
(statearr_59720[(9)] = inst_59700);

(statearr_59720[(10)] = inst_59699);

return statearr_59720;
})();
if(cljs.core.truth_(sequential_QMARK__60469)){
var statearr_59721_60514 = state_59713__$1;
(statearr_59721_60514[(1)] = (5));

} else {
var statearr_59722_60519 = state_59713__$1;
(statearr_59722_60519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59714 === (2))){
var inst_59696 = (state_59713[(2)]);
var inst_59697 = inst_59696;
var state_59713__$1 = (function (){var statearr_59724 = state_59713;
(statearr_59724[(8)] = inst_59697);

return statearr_59724;
})();
var statearr_59725_60522 = state_59713__$1;
(statearr_59725_60522[(2)] = null);

(statearr_59725_60522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59714 === (9))){
var inst_59708 = (state_59713[(2)]);
var inst_59697 = inst_59708;
var state_59713__$1 = (function (){var statearr_59726 = state_59713;
(statearr_59726[(8)] = inst_59697);

return statearr_59726;
})();
var statearr_59727_60523 = state_59713__$1;
(statearr_59727_60523[(2)] = null);

(statearr_59727_60523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59714 === (5))){
var state_59713__$1 = state_59713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59713__$1,(8),response_channel_60470);
} else {
if((state_val_59714 === (8))){
var inst_59703 = (state_59713[(2)]);
var state_59713__$1 = state_59713;
var statearr_59728_60526 = state_59713__$1;
(statearr_59728_60526[(2)] = inst_59703);

(statearr_59728_60526[(1)] = (7));


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
});})(seq__59537,chunk__59538,count__59539,i__59540,c__45808__auto___60504,queue_60467,network_60468,sequential_QMARK__60469,response_channel_60470,send_complete_60471,remote,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__59537,chunk__59538,count__59539,i__59540,switch__45525__auto__,c__45808__auto___60504,queue_60467,network_60468,sequential_QMARK__60469,response_channel_60470,send_complete_60471,remote,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____0 = (function (){
var statearr_59731 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59731[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__);

(statearr_59731[(1)] = (1));

return statearr_59731;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____1 = (function (state_59713){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_59713);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e59732){if((e59732 instanceof Object)){
var ex__45529__auto__ = e59732;
var statearr_59733_60531 = state_59713;
(statearr_59733_60531[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59732;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60532 = state_59713;
state_59713 = G__60532;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__ = function(state_59713){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____1.call(this,state_59713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__;
})()
;})(seq__59537,chunk__59538,count__59539,i__59540,switch__45525__auto__,c__45808__auto___60504,queue_60467,network_60468,sequential_QMARK__60469,response_channel_60470,send_complete_60471,remote,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__45810__auto__ = (function (){var statearr_59735 = f__45809__auto__();
(statearr_59735[(6)] = c__45808__auto___60504);

return statearr_59735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(seq__59537,chunk__59538,count__59539,i__59540,c__45808__auto___60504,queue_60467,network_60468,sequential_QMARK__60469,response_channel_60470,send_complete_60471,remote,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels))
);



var G__60537 = seq__59537;
var G__60538 = chunk__59538;
var G__60539 = count__59539;
var G__60540 = (i__59540 + (1));
seq__59537 = G__60537;
chunk__59538 = G__60538;
count__59539 = G__60539;
i__59540 = G__60540;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__59537);
if(temp__5720__auto__){
var seq__59537__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59537__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59537__$1);
var G__60541 = cljs.core.chunk_rest(seq__59537__$1);
var G__60542 = c__4550__auto__;
var G__60543 = cljs.core.count(c__4550__auto__);
var G__60544 = (0);
seq__59537 = G__60541;
chunk__59538 = G__60542;
count__59539 = G__60543;
i__59540 = G__60544;
continue;
} else {
var remote = cljs.core.first(seq__59537__$1);
var queue_60546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_60547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var sequential_QMARK__60548 = fulcro.client.impl.application.is_sequential_QMARK_(network_60547);
var response_channel_60549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_60550 = (cljs.core.truth_(sequential_QMARK__60548)?((function (seq__59537,chunk__59538,count__59539,i__59540,queue_60546,network_60547,sequential_QMARK__60548,response_channel_60549,remote,seq__59537__$1,temp__5720__auto__,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__59537,chunk__59538,count__59539,i__59540,c__45808__auto__,queue_60546,network_60547,sequential_QMARK__60548,response_channel_60549,remote,seq__59537__$1,temp__5720__auto__,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (seq__59537,chunk__59538,count__59539,i__59540,c__45808__auto__,queue_60546,network_60547,sequential_QMARK__60548,response_channel_60549,remote,seq__59537__$1,temp__5720__auto__,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_59741){
var state_val_59742 = (state_59741[(1)]);
if((state_val_59742 === (1))){
var state_59741__$1 = state_59741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59741__$1,(2),response_channel_60549,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_59742 === (2))){
var inst_59739 = (state_59741[(2)]);
var state_59741__$1 = state_59741;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59741__$1,inst_59739);
} else {
return null;
}
}
});})(seq__59537,chunk__59538,count__59539,i__59540,c__45808__auto__,queue_60546,network_60547,sequential_QMARK__60548,response_channel_60549,remote,seq__59537__$1,temp__5720__auto__,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__59537,chunk__59538,count__59539,i__59540,switch__45525__auto__,c__45808__auto__,queue_60546,network_60547,sequential_QMARK__60548,response_channel_60549,remote,seq__59537__$1,temp__5720__auto__,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____0 = (function (){
var statearr_59743 = [null,null,null,null,null,null,null];
(statearr_59743[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__);

(statearr_59743[(1)] = (1));

return statearr_59743;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____1 = (function (state_59741){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_59741);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e59745){if((e59745 instanceof Object)){
var ex__45529__auto__ = e59745;
var statearr_59746_60556 = state_59741;
(statearr_59746_60556[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59745;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60557 = state_59741;
state_59741 = G__60557;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__ = function(state_59741){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____1.call(this,state_59741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__;
})()
;})(seq__59537,chunk__59538,count__59539,i__59540,switch__45525__auto__,c__45808__auto__,queue_60546,network_60547,sequential_QMARK__60548,response_channel_60549,remote,seq__59537__$1,temp__5720__auto__,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__45810__auto__ = (function (){var statearr_59747 = f__45809__auto__();
(statearr_59747[(6)] = c__45808__auto__);

return statearr_59747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(seq__59537,chunk__59538,count__59539,i__59540,c__45808__auto__,queue_60546,network_60547,sequential_QMARK__60548,response_channel_60549,remote,seq__59537__$1,temp__5720__auto__,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels))
);

return c__45808__auto__;
});})(seq__59537,chunk__59538,count__59539,i__59540,queue_60546,network_60547,sequential_QMARK__60548,response_channel_60549,remote,seq__59537__$1,temp__5720__auto__,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels))
:cljs.core.identity);
var c__45808__auto___60560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__59537,chunk__59538,count__59539,i__59540,c__45808__auto___60560,queue_60546,network_60547,sequential_QMARK__60548,response_channel_60549,send_complete_60550,remote,seq__59537__$1,temp__5720__auto__,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (seq__59537,chunk__59538,count__59539,i__59540,c__45808__auto___60560,queue_60546,network_60547,sequential_QMARK__60548,response_channel_60549,send_complete_60550,remote,seq__59537__$1,temp__5720__auto__,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_59770){
var state_val_59771 = (state_59770[(1)]);
if((state_val_59771 === (7))){
var inst_59763 = (state_59770[(2)]);
var state_59770__$1 = (function (){var statearr_59774 = state_59770;
(statearr_59774[(7)] = inst_59763);

return statearr_59774;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59770__$1,(9),queue_60546);
} else {
if((state_val_59771 === (1))){
var state_59770__$1 = state_59770;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59770__$1,(2),queue_60546);
} else {
if((state_val_59771 === (4))){
var inst_59768 = (state_59770[(2)]);
var state_59770__$1 = state_59770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59770__$1,inst_59768);
} else {
if((state_val_59771 === (6))){
var state_59770__$1 = state_59770;
var statearr_59778_60568 = state_59770__$1;
(statearr_59778_60568[(2)] = null);

(statearr_59778_60568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59771 === (3))){
var inst_59753 = (state_59770[(8)]);
var inst_59756 = fulcro.client.impl.application._send_payload(network_60547,reconciler,inst_59753,send_complete_60550);
var inst_59757 = fulcro.client.primitives.pop_pending_request(reconciler,remote);
var state_59770__$1 = (function (){var statearr_59780 = state_59770;
(statearr_59780[(9)] = inst_59756);

(statearr_59780[(10)] = inst_59757);

return statearr_59780;
})();
if(cljs.core.truth_(sequential_QMARK__60548)){
var statearr_59781_60571 = state_59770__$1;
(statearr_59781_60571[(1)] = (5));

} else {
var statearr_59782_60572 = state_59770__$1;
(statearr_59782_60572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59771 === (2))){
var inst_59752 = (state_59770[(2)]);
var inst_59753 = inst_59752;
var state_59770__$1 = (function (){var statearr_59783 = state_59770;
(statearr_59783[(8)] = inst_59753);

return statearr_59783;
})();
var statearr_59784_60575 = state_59770__$1;
(statearr_59784_60575[(2)] = null);

(statearr_59784_60575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59771 === (9))){
var inst_59765 = (state_59770[(2)]);
var inst_59753 = inst_59765;
var state_59770__$1 = (function (){var statearr_59785 = state_59770;
(statearr_59785[(8)] = inst_59753);

return statearr_59785;
})();
var statearr_59786_60576 = state_59770__$1;
(statearr_59786_60576[(2)] = null);

(statearr_59786_60576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59771 === (5))){
var state_59770__$1 = state_59770;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59770__$1,(8),response_channel_60549);
} else {
if((state_val_59771 === (8))){
var inst_59760 = (state_59770[(2)]);
var state_59770__$1 = state_59770;
var statearr_59789_60577 = state_59770__$1;
(statearr_59789_60577[(2)] = inst_59760);

(statearr_59789_60577[(1)] = (7));


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
});})(seq__59537,chunk__59538,count__59539,i__59540,c__45808__auto___60560,queue_60546,network_60547,sequential_QMARK__60548,response_channel_60549,send_complete_60550,remote,seq__59537__$1,temp__5720__auto__,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__59537,chunk__59538,count__59539,i__59540,switch__45525__auto__,c__45808__auto___60560,queue_60546,network_60547,sequential_QMARK__60548,response_channel_60549,send_complete_60550,remote,seq__59537__$1,temp__5720__auto__,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____0 = (function (){
var statearr_59790 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59790[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__);

(statearr_59790[(1)] = (1));

return statearr_59790;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____1 = (function (state_59770){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_59770);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e59791){if((e59791 instanceof Object)){
var ex__45529__auto__ = e59791;
var statearr_59792_60581 = state_59770;
(statearr_59792_60581[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59791;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60584 = state_59770;
state_59770 = G__60584;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__ = function(state_59770){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____1.call(this,state_59770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__45526__auto__;
})()
;})(seq__59537,chunk__59538,count__59539,i__59540,switch__45525__auto__,c__45808__auto___60560,queue_60546,network_60547,sequential_QMARK__60548,response_channel_60549,send_complete_60550,remote,seq__59537__$1,temp__5720__auto__,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__45810__auto__ = (function (){var statearr_59794 = f__45809__auto__();
(statearr_59794[(6)] = c__45808__auto___60560);

return statearr_59794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(seq__59537,chunk__59538,count__59539,i__59540,c__45808__auto___60560,queue_60546,network_60547,sequential_QMARK__60548,response_channel_60549,send_complete_60550,remote,seq__59537__$1,temp__5720__auto__,map__59525,map__59525__$1,app,networking,reconciler,send_queues,response_channels))
);



var G__60586 = cljs.core.next(seq__59537__$1);
var G__60587 = null;
var G__60588 = (0);
var G__60589 = (0);
seq__59537 = G__60586;
chunk__59538 = G__60587;
count__59539 = G__60588;
i__59540 = G__60589;
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
fulcro.client.impl.application.generate_reconciler = (function fulcro$client$impl$application$generate_reconciler(p__59796,initial_state,parser,p__59797){
var map__59798 = p__59796;
var map__59798__$1 = (((((!((map__59798 == null))))?(((((map__59798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59798):map__59798);
var app = map__59798__$1;
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59798__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var mutation_merge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59798__$1,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322));
var map__59799 = p__59797;
var map__59799__$1 = (((((!((map__59799 == null))))?(((((map__59799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59799):map__59799);
var reconciler_options = map__59799__$1;
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59799__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743));
var rec_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var remotes = cljs.core.keys(send_queues);
var tempid_migrate = ((function (rec_atom,remotes,map__59798,map__59798__$1,app,send_queues,mutation_merge,map__59799,map__59799__$1,reconciler_options,migrate){
return (function (pure,_,tempids){
var seq__59813_60592 = cljs.core.seq(cljs.core.vals(send_queues));
var chunk__59814_60593 = null;
var count__59815_60594 = (0);
var i__59816_60595 = (0);
while(true){
if((i__59816_60595 < count__59815_60594)){
var queue_60600 = chunk__59814_60593.cljs$core$IIndexed$_nth$arity$2(null,i__59816_60595);
fulcro.client.primitives.rewrite_tempids_in_request_queue(queue_60600,tempids);


var G__60601 = seq__59813_60592;
var G__60602 = chunk__59814_60593;
var G__60603 = count__59815_60594;
var G__60604 = (i__59816_60595 + (1));
seq__59813_60592 = G__60601;
chunk__59814_60593 = G__60602;
count__59815_60594 = G__60603;
i__59816_60595 = G__60604;
continue;
} else {
var temp__5720__auto___60606 = cljs.core.seq(seq__59813_60592);
if(temp__5720__auto___60606){
var seq__59813_60608__$1 = temp__5720__auto___60606;
if(cljs.core.chunked_seq_QMARK_(seq__59813_60608__$1)){
var c__4550__auto___60609 = cljs.core.chunk_first(seq__59813_60608__$1);
var G__60610 = cljs.core.chunk_rest(seq__59813_60608__$1);
var G__60611 = c__4550__auto___60609;
var G__60612 = cljs.core.count(c__4550__auto___60609);
var G__60613 = (0);
seq__59813_60592 = G__60610;
chunk__59814_60593 = G__60611;
count__59815_60594 = G__60612;
i__59816_60595 = G__60613;
continue;
} else {
var queue_60614 = cljs.core.first(seq__59813_60608__$1);
fulcro.client.primitives.rewrite_tempids_in_request_queue(queue_60614,tempids);


var G__60615 = cljs.core.next(seq__59813_60608__$1);
var G__60616 = null;
var G__60617 = (0);
var G__60618 = (0);
seq__59813_60592 = G__60615;
chunk__59814_60593 = G__60616;
count__59815_60594 = G__60617;
i__59816_60595 = G__60618;
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
});})(rec_atom,remotes,map__59798,map__59798__$1,app,send_queues,mutation_merge,map__59799,map__59799__$1,reconciler_options,migrate))
;
var complete_initial_state = (function (){var set_default_locale = ((function (rec_atom,remotes,tempid_migrate,map__59798,map__59798__$1,app,send_queues,mutation_merge,map__59799,map__59799__$1,reconciler_options,migrate){
return (function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.Keyword(null,"en","en",88457073)));
});})(rec_atom,remotes,tempid_migrate,map__59798,map__59798__$1,app,send_queues,mutation_merge,map__59799,map__59799__$1,reconciler_options,migrate))
;
var set_network_markers = ((function (set_default_locale,rec_atom,remotes,tempid_migrate,map__59798,map__59798__$1,app,send_queues,mutation_merge,map__59799,map__59799__$1,reconciler_options,migrate){
return (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword("fulcro.client.network","status","fulcro.client.network/status",570358457),cljs.core.zipmap(remotes,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idle","idle",-2007156861))));
});})(set_default_locale,rec_atom,remotes,tempid_migrate,map__59798,map__59798__$1,app,send_queues,mutation_merge,map__59799,map__59799__$1,reconciler_options,migrate))
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
var config = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,reconciler_options,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"migrate","migrate",-207110743),tempid_migrate,new cljs.core.Keyword(null,"state","state",-1988618099),complete_initial_state,new cljs.core.Keyword(null,"send","send",-652151114),((function (rec_atom,remotes,tempid_migrate,complete_initial_state,map__59798,map__59798__$1,app,send_queues,mutation_merge,map__59799,map__59799__$1,reconciler_options,migrate){
return (function (sends_keyed_by_remote,result_merge_callback){
return fulcro.client.impl.application.server_send(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.deref(rec_atom)),sends_keyed_by_remote,result_merge_callback);
});})(rec_atom,remotes,tempid_migrate,complete_initial_state,map__59798,map__59798__$1,app,send_queues,mutation_merge,map__59799,map__59799__$1,reconciler_options,migrate))
,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"remotes","remotes",1132366312),remotes,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),((function (rec_atom,remotes,tempid_migrate,complete_initial_state,map__59798,map__59798__$1,app,send_queues,mutation_merge,map__59799,map__59799__$1,reconciler_options,migrate){
return (function (reconciler,app_state,ident,props){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,ident,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.sweep_one,cljs.core.merge),props);
});})(rec_atom,remotes,tempid_migrate,complete_initial_state,map__59798,map__59798__$1,app,send_queues,mutation_merge,map__59799,map__59799__$1,reconciler_options,migrate))
,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),((function (rec_atom,remotes,tempid_migrate,complete_initial_state,map__59798,map__59798__$1,app,send_queues,mutation_merge,map__59799,map__59799__$1,reconciler_options,migrate){
return (function (target,source){
return fulcro.client.primitives.merge_handler(mutation_merge,target,source);
});})(rec_atom,remotes,tempid_migrate,complete_initial_state,map__59798,map__59798__$1,app,send_queues,mutation_merge,map__59799,map__59799__$1,reconciler_options,migrate))
,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null)], 0));
var rec = fulcro.client.primitives.reconciler(config);
cljs.core.reset_BANG_(rec_atom,rec);

return rec;
});
fulcro.client.impl.application.initialize_global_error_callbacks = (function fulcro$client$impl$application$initialize_global_error_callbacks(app){
var seq__59843 = cljs.core.seq(cljs.core.keys(new cljs.core.Keyword(null,"networking","networking",586110628).cljs$core$IFn$_invoke$arity$1(app)));
var chunk__59844 = null;
var count__59845 = (0);
var i__59846 = (0);
while(true){
if((i__59846 < count__59845)){
var remote = chunk__59844.cljs$core$IIndexed$_nth$arity$2(null,i__59846);
var cb_atom_60637 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),remote,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(fulcro.util.atom_QMARK_(cb_atom_60637)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_60637,((function (seq__59843,chunk__59844,count__59845,i__59846,cb_atom_60637,remote){
return (function (p1__59842_SHARP_){
if(cljs.core.fn_QMARK_(p1__59842_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__59842_SHARP_,fulcro.client.primitives.app_state(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__59843,chunk__59844,count__59845,i__59846,cb_atom_60637,remote))
);
} else {
}


var G__60640 = seq__59843;
var G__60641 = chunk__59844;
var G__60642 = count__59845;
var G__60643 = (i__59846 + (1));
seq__59843 = G__60640;
chunk__59844 = G__60641;
count__59845 = G__60642;
i__59846 = G__60643;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__59843);
if(temp__5720__auto__){
var seq__59843__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59843__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59843__$1);
var G__60646 = cljs.core.chunk_rest(seq__59843__$1);
var G__60647 = c__4550__auto__;
var G__60648 = cljs.core.count(c__4550__auto__);
var G__60649 = (0);
seq__59843 = G__60646;
chunk__59844 = G__60647;
count__59845 = G__60648;
i__59846 = G__60649;
continue;
} else {
var remote = cljs.core.first(seq__59843__$1);
var cb_atom_60653 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),remote,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(fulcro.util.atom_QMARK_(cb_atom_60653)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_60653,((function (seq__59843,chunk__59844,count__59845,i__59846,cb_atom_60653,remote,seq__59843__$1,temp__5720__auto__){
return (function (p1__59842_SHARP_){
if(cljs.core.fn_QMARK_(p1__59842_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__59842_SHARP_,fulcro.client.primitives.app_state(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__59843,chunk__59844,count__59845,i__59846,cb_atom_60653,remote,seq__59843__$1,temp__5720__auto__))
);
} else {
}


var G__60655 = cljs.core.next(seq__59843__$1);
var G__60656 = null;
var G__60657 = (0);
var G__60658 = (0);
seq__59843 = G__60655;
chunk__59844 = G__60656;
count__59845 = G__60657;
i__59846 = G__60658;
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
fulcro.client.impl.application.read_local = (function fulcro$client$impl$application$read_local(user_read,p__59872,dkey,params){
var map__59873 = p__59872;
var map__59873__$1 = (((((!((map__59873 == null))))?(((((map__59873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59873):map__59873);
var env = map__59873__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59873__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59873__$1,new cljs.core.Keyword(null,"target","target",253001721));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59873__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59873__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
}catch (e59880){var e = e59880;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),372], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mutation ",k," failed with exception",e], 0));
}catch (e59881){if((e59881 instanceof Error)){
var e__48920__auto___60668 = e59881;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),372], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___60668], 0));
} else {
throw e59881;

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
}catch (e59897){var e_60669 = e59897;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),381], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Post mutate failed on dispatch to ",k], 0));
}catch (e59899){if((e59899 instanceof Error)){
var e__48920__auto___60671 = e59899;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),381], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___60671], 0));
} else {
throw e59899;

}
}}
return action_result;
}catch (e59885){var e = e59885;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),384], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mutation ",k," failed with exception"], 0));
}catch (e59886){if((e59886 instanceof Error)){
var e__48920__auto___60672 = e59886;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),384], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___60672], 0));
} else {
throw e59886;

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
