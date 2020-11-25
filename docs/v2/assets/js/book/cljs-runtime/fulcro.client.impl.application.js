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
fulcro.client.impl.application.fallback_handler = (function fulcro$client$impl$application$fallback_handler(p__59957,query){
var map__59958 = p__59957;
var map__59958__$1 = (((((!((map__59958 == null))))?(((((map__59958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59958):map__59958);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59958__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return ((function (map__59958,map__59958__$1,reconciler){
return (function (error){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.client.primitives.app_state(reconciler),cljs.core.assoc,new cljs.core.Keyword("fulcro","server-error","fulcro/server-error",-1254037316),error);

var temp__5718__auto__ = fulcro.client.primitives.fallback_tx(query,error);
if(cljs.core.truth_(temp__5718__auto__)){
var q = temp__5718__auto__;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),25], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Transaction failed. Running fallback.",q], 0));
}catch (e59967){if((e59967 instanceof Error)){
var e__47187__auto___61326 = e59967;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),25], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__47187__auto___61326], 0));
} else {
throw e59967;

}
}
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,q);
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),27], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Fallback triggered, but no fallbacks were defined."], 0));
}catch (e59972){if((e59972 instanceof Error)){
var e__47187__auto__ = e59972;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),27], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__47187__auto__], 0));
} else {
throw e59972;

}
}}
});
;})(map__59958,map__59958__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
fulcro.client.impl.application._enqueue = (function fulcro$client$impl$application$_enqueue(reconciler,remote,q,v){
fulcro.client.primitives.add_pending_request(reconciler,remote,v);

var c__50615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto__){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto__){
return (function (state_59983){
var state_val_59984 = (state_59983[(1)]);
if((state_val_59984 === (1))){
var state_59983__$1 = state_59983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59983__$1,(2),q,v);
} else {
if((state_val_59984 === (2))){
var inst_59981 = (state_59983[(2)]);
var state_59983__$1 = state_59983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59983__$1,inst_59981);
} else {
return null;
}
}
});})(c__50615__auto__))
;
return ((function (switch__48679__auto__,c__50615__auto__){
return (function() {
var fulcro$client$impl$application$_enqueue_$_state_machine__48680__auto__ = null;
var fulcro$client$impl$application$_enqueue_$_state_machine__48680__auto____0 = (function (){
var statearr_59991 = [null,null,null,null,null,null,null];
(statearr_59991[(0)] = fulcro$client$impl$application$_enqueue_$_state_machine__48680__auto__);

(statearr_59991[(1)] = (1));

return statearr_59991;
});
var fulcro$client$impl$application$_enqueue_$_state_machine__48680__auto____1 = (function (state_59983){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_59983);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e59994){var ex__48683__auto__ = e59994;
var statearr_59995_61332 = state_59983;
(statearr_59995_61332[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_59983[(4)]))){
var statearr_59997_61334 = state_59983;
(statearr_59997_61334[(1)] = cljs.core.first((state_59983[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61336 = state_59983;
state_59983 = G__61336;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
fulcro$client$impl$application$_enqueue_$_state_machine__48680__auto__ = function(state_59983){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$_enqueue_$_state_machine__48680__auto____0.call(this);
case 1:
return fulcro$client$impl$application$_enqueue_$_state_machine__48680__auto____1.call(this,state_59983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$impl$application$_enqueue_$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$_enqueue_$_state_machine__48680__auto____0;
fulcro$client$impl$application$_enqueue_$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$_enqueue_$_state_machine__48680__auto____1;
return fulcro$client$impl$application$_enqueue_$_state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto__))
})();
var state__50617__auto__ = (function (){var statearr_60000 = f__50616__auto__();
(statearr_60000[(6)] = c__50615__auto__);

return statearr_60000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto__))
);

return c__50615__auto__;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("fulcro.client.impl.application","-enqueue","fulcro.client.impl.application/-enqueue",-1535560443,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"any?","any?",-1959531460),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"any?","any?",-1959531460),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"payload","payload",-383036092)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any?","any?",-1959531460),cljs.core.keyword_QMARK_,cljs.core.any_QMARK_,new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any?","any?",-1959531460),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"any?","any?",-1959531460),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * Do a properly-plumbed network send. This function recursively strips ui attributes from the tx and pushes the tx over
 *   the network. It installs the given on-load and on-error handlers to deal with the network response. DEPRECATED: If
 *   you're doing something really low-level with networking, use send-with-history-tracking.
 */
fulcro.client.impl.application.real_send = (function fulcro$client$impl$application$real_send(var_args){
var G__60019 = arguments.length;
switch (G__60019) {
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

fulcro.client.impl.application.real_send.cljs$core$IFn$_invoke$arity$2 = (function (net,p__60022){
var map__60023 = p__60022;
var map__60023__$1 = (((((!((map__60023 == null))))?(((((map__60023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60023):map__60023);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60023__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60023__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var on_done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60023__$1,new cljs.core.Keyword(null,"on-done","on-done",-699252077));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60023__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60023__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60023__$1,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819));
var progress_tx = ((function (map__60023,map__60023__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (p1__60014_SHARP_){
return fulcro.client.mutations.progressive_update_transaction(tx,p1__60014_SHARP_);
});})(map__60023,map__60023__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
;
var tx__$1 = fulcro.client.primitives.strip_ui(tx);
if((((!((net == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === net.fulcro$client$network$ProgressiveTransfer$))))?true:false):false)){
return fulcro.client.network.updating_send(net,tx__$1,on_done,on_error,on_load);
} else {
if((((!((net == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === net.fulcro$client$network$FulcroNetwork$))))?true:false):false)){
return fulcro.client.network.send(net,tx__$1,on_done,on_error);
} else {
if((((!((net == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === net.fulcro$client$network$FulcroRemoteI$))))?true:false):false)){
var on_done__$1 = ((function (progress_tx,tx__$1,map__60023,map__60023__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (p__60038){
var map__60039 = p__60038;
var map__60039__$1 = (((((!((map__60039 == null))))?(((((map__60039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60039):map__60039);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60039__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var transaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60039__$1,new cljs.core.Keyword(null,"transaction","transaction",1777321997));
return (on_done.cljs$core$IFn$_invoke$arity$2 ? on_done.cljs$core$IFn$_invoke$arity$2(body,transaction) : on_done.call(null,body,transaction));
});})(progress_tx,tx__$1,map__60023,map__60023__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
;
var on_error__$1 = ((function (on_done__$1,progress_tx,tx__$1,map__60023,map__60023__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (p__60045){
var map__60046 = p__60045;
var map__60046__$1 = (((((!((map__60046 == null))))?(((((map__60046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60046):map__60046);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60046__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(body) : on_error.call(null,body));
});})(on_done__$1,progress_tx,tx__$1,map__60023,map__60023__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
;
var on_load__$1 = ((function (on_done__$1,on_error__$1,progress_tx,tx__$1,map__60023,map__60023__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (progress){
if(cljs.core.truth_(reconciler)){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,progress_tx(progress));
} else {
return null;
}
});})(on_done__$1,on_error__$1,progress_tx,tx__$1,map__60023,map__60023__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
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
var G__60064 = arguments.length;
switch (G__60064) {
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

fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2 = (function (net,p__60067){
var map__60069 = p__60067;
var map__60069__$1 = (((((!((map__60069 == null))))?(((((map__60069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60069):map__60069);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60069__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60069__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60069__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var on_done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60069__$1,new cljs.core.Keyword(null,"on-done","on-done",-699252077));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60069__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60069__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var map__60075 = payload;
var map__60075__$1 = (((((!((map__60075 == null))))?(((((map__60075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60075):map__60075);
var history_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60075__$1,new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564));
var tx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60075__$1,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60075__$1,new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012));
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60075__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var uuid = fulcro.util.unique_key();
var network_activity = fulcro.client.primitives.get_network_activity(reconciler);
var with_network_activity_tracking = ((function (map__60075,map__60075__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__60069,map__60069__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (handler){
return ((function (map__60075,map__60075__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__60069,map__60069__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (resp,items_or_tx){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(network_activity,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remote,new cljs.core.Keyword(null,"active-requests","active-requests",1354177961)], null),((function (map__60075,map__60075__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__60069,map__60069__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (p1__60057_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60057_SHARP_,uuid);
});})(map__60075,map__60075__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__60069,map__60069__$1,reconciler,payload,tx,on_done,on_error,on_load))
);

setTimeout(((function (map__60075,map__60075__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__60069,map__60069__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"active-requests","active-requests",1354177961).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(network_activity),remote))),(0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.client.primitives.app_state(reconciler),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","status","fulcro.client.network/status",570358457),remote], null),new cljs.core.Keyword(null,"idle","idle",-2007156861));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(network_activity,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remote,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"idle","idle",-2007156861));

return fulcro.client.impl.protocols.queue_BANG_(reconciler,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","status","fulcro.client.network/status",570358457)], null));
} else {
return null;
}
});})(map__60075,map__60075__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__60069,map__60069__$1,reconciler,payload,tx,on_done,on_error,on_load))
,(0));

return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(resp,items_or_tx) : handler.call(null,resp,items_or_tx));
});
;})(map__60075,map__60075__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__60069,map__60069__$1,reconciler,payload,tx,on_done,on_error,on_load))
});})(map__60075,map__60075__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,map__60069,map__60069__$1,reconciler,payload,tx,on_done,on_error,on_load))
;
var with_history_recording = ((function (map__60075,map__60075__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,with_network_activity_tracking,map__60069,map__60069__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (handler){
return ((function (map__60075,map__60075__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,with_network_activity_tracking,map__60069,map__60069__$1,reconciler,payload,tx,on_done,on_error,on_load){
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
;})(map__60075,map__60075__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,with_network_activity_tracking,map__60069,map__60069__$1,reconciler,payload,tx,on_done,on_error,on_load))
});})(map__60075,map__60075__$1,history_atom,tx_time,remote,abort_id,uuid,network_activity,with_network_activity_tracking,map__60069,map__60069__$1,reconciler,payload,tx,on_done,on_error,on_load))
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
}catch (e60088){if((e60088 instanceof Error)){
var e__47187__auto___61383 = e60088;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),89], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__47187__auto___61383], 0));
} else {
throw e60088;

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
}catch (e60107){if((e60107 instanceof Error)){
var e__47187__auto___61390 = e60107;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),112], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__47187__auto___61390], 0));
} else {
throw e60107;

}
}
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx], null);
} else {
if(cljs.core.empty_QMARK_(tx)){
return cljs.core.PersistentVector.EMPTY;
} else {
var dispatch_symbols = (function (tx__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_)),(function (){var G__60112 = tx__$1;
var G__60112__$1 = (((G__60112 == null))?null:fulcro.client.primitives.query__GT_ast(G__60112));
if((G__60112__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__60112__$1);
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
var map__60110 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (dispatch_symbols,compatible_abort_QMARK_,can_be_included_QMARK_){
return (function (p__60125,expr){
var map__60126 = p__60125;
var map__60126__$1 = (((((!((map__60126 == null))))?(((((map__60126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60126):map__60126);
var acc = map__60126__$1;
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60126__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
if(can_be_included_QMARK_(current,expr)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.conj,expr);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"transactions","transactions",-1425846118),cljs.core.conj,current),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr], null));
}
});})(dispatch_symbols,compatible_abort_QMARK_,can_be_included_QMARK_))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transactions","transactions",-1425846118),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.PersistentVector.EMPTY], null),tx);
var map__60110__$1 = (((((!((map__60110 == null))))?(((((map__60110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60110):map__60110);
var transactions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60110__$1,new cljs.core.Keyword(null,"transactions","transactions",-1425846118));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60110__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
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
fulcro.client.impl.application.enqueue_mutations = (function fulcro$client$impl$application$enqueue_mutations(p__60141,remote_tx_map,cb){
var map__60142 = p__60141;
var map__60142__$1 = (((((!((map__60142 == null))))?(((((map__60142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60142):map__60142);
var app = map__60142__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60142__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60142__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var history = fulcro.client.primitives.get_history(reconciler);
var seq__60148 = cljs.core.seq(cljs.core.keys(remote_tx_map));
var chunk__60149 = null;
var count__60150 = (0);
var i__60151 = (0);
while(true){
if((i__60151 < count__60150)){
var remote = chunk__60149.cljs$core$IIndexed$_nth$arity$2(null,i__60151);
var queue_61403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_61404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var refresh_set_61405 = (function (){var or__4131__auto__ = (function (){var G__60227 = full_remote_transaction_61404;
var G__60227__$1 = (((G__60227 == null))?null:cljs.core.meta(G__60227));
var G__60227__$2 = (((G__60227__$1 == null))?null:new cljs.core.Keyword("fulcro.client.primitives","refresh","fulcro.client.primitives/refresh",481513561).cljs$core$IFn$_invoke$arity$1(G__60227__$1));
if((G__60227__$2 == null)){
return null;
} else {
return cljs.core.vec(G__60227__$2);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var tx_time_61406 = (function (){var G__60231 = full_remote_transaction_61404;
var G__60231__$1 = (((G__60231 == null))?null:cljs.core.meta(G__60231));
if((G__60231__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456).cljs$core$IFn$_invoke$arity$1(G__60231__$1);
}
})();
var fallback_61407 = fulcro.client.impl.application.fallback_handler(app,full_remote_transaction_61404);
var desired_remote_mutations_61408 = fulcro.client.primitives.remove_loads_and_fallbacks(full_remote_transaction_61404);
var tx_list_61409 = fulcro.client.impl.application.split_mutations(desired_remote_mutations_61408);
var has_mutations_QMARK__61410 = ((function (seq__60148,chunk__60149,count__60150,i__60151,queue_61403,full_remote_transaction_61404,refresh_set_61405,tx_time_61406,fallback_61407,desired_remote_mutations_61408,tx_list_61409,remote,history,map__60142,map__60142__$1,app,reconciler,send_queues){
return (function (tx){
return (cljs.core.count(tx) > (0));
});})(seq__60148,chunk__60149,count__60150,i__60151,queue_61403,full_remote_transaction_61404,refresh_set_61405,tx_time_61406,fallback_61407,desired_remote_mutations_61408,tx_list_61409,remote,history,map__60142,map__60142__$1,app,reconciler,send_queues))
;
var payload_61411 = ((function (seq__60148,chunk__60149,count__60150,i__60151,queue_61403,full_remote_transaction_61404,refresh_set_61405,tx_time_61406,fallback_61407,desired_remote_mutations_61408,tx_list_61409,has_mutations_QMARK__61410,remote,history,map__60142,map__60142__$1,app,reconciler,send_queues){
return (function (tx){
var abort_id = (function (){var G__60239 = tx;
var G__60239__$1 = (((G__60239 == null))?null:fulcro.client.mutations.abort_ids(G__60239));
if((G__60239__$1 == null)){
return null;
} else {
return cljs.core.first(G__60239__$1);
}
})();
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),tx,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456),tx_time_61406,new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564),history,new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012),remote,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267),abort_id,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603),((function (seq__60148,chunk__60149,count__60150,i__60151,abort_id,queue_61403,full_remote_transaction_61404,refresh_set_61405,tx_time_61406,fallback_61407,desired_remote_mutations_61408,tx_list_61409,has_mutations_QMARK__61410,remote,history,map__60142,map__60142__$1,app,reconciler,send_queues){
return (function (result,mtx){
var G__60246 = result;
var G__60247 = (function (){var or__4131__auto__ = mtx;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return tx;
}
})();
var G__60248 = remote;
return (cb.cljs$core$IFn$_invoke$arity$3 ? cb.cljs$core$IFn$_invoke$arity$3(G__60246,G__60247,G__60248) : cb.call(null,G__60246,G__60247,G__60248));
});})(seq__60148,chunk__60149,count__60150,i__60151,abort_id,queue_61403,full_remote_transaction_61404,refresh_set_61405,tx_time_61406,fallback_61407,desired_remote_mutations_61408,tx_list_61409,has_mutations_QMARK__61410,remote,history,map__60142,map__60142__$1,app,reconciler,send_queues))
,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629),((function (seq__60148,chunk__60149,count__60150,i__60151,abort_id,queue_61403,full_remote_transaction_61404,refresh_set_61405,tx_time_61406,fallback_61407,desired_remote_mutations_61408,tx_list_61409,has_mutations_QMARK__61410,remote,history,map__60142,map__60142__$1,app,reconciler,send_queues){
return (function (result){
return fallback_61407(result);
});})(seq__60148,chunk__60149,count__60150,i__60151,abort_id,queue_61403,full_remote_transaction_61404,refresh_set_61405,tx_time_61406,fallback_61407,desired_remote_mutations_61408,tx_list_61409,has_mutations_QMARK__61410,remote,history,map__60142,map__60142__$1,app,reconciler,send_queues))
], null);
});})(seq__60148,chunk__60149,count__60150,i__60151,queue_61403,full_remote_transaction_61404,refresh_set_61405,tx_time_61406,fallback_61407,desired_remote_mutations_61408,tx_list_61409,has_mutations_QMARK__61410,remote,history,map__60142,map__60142__$1,app,reconciler,send_queues))
;
var seq__60255_61471 = cljs.core.seq(tx_list_61409);
var chunk__60256_61472 = null;
var count__60257_61473 = (0);
var i__60258_61474 = (0);
while(true){
if((i__60258_61474 < count__60257_61473)){
var tx_61478 = chunk__60256_61472.cljs$core$IIndexed$_nth$arity$2(null,i__60258_61474);
if(has_mutations_QMARK__61410(tx_61478)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_61403,payload_61411(tx_61478));
} else {
}


var G__61485 = seq__60255_61471;
var G__61486 = chunk__60256_61472;
var G__61487 = count__60257_61473;
var G__61488 = (i__60258_61474 + (1));
seq__60255_61471 = G__61485;
chunk__60256_61472 = G__61486;
count__60257_61473 = G__61487;
i__60258_61474 = G__61488;
continue;
} else {
var temp__5720__auto___61490 = cljs.core.seq(seq__60255_61471);
if(temp__5720__auto___61490){
var seq__60255_61499__$1 = temp__5720__auto___61490;
if(cljs.core.chunked_seq_QMARK_(seq__60255_61499__$1)){
var c__4550__auto___61500 = cljs.core.chunk_first(seq__60255_61499__$1);
var G__61501 = cljs.core.chunk_rest(seq__60255_61499__$1);
var G__61502 = c__4550__auto___61500;
var G__61503 = cljs.core.count(c__4550__auto___61500);
var G__61504 = (0);
seq__60255_61471 = G__61501;
chunk__60256_61472 = G__61502;
count__60257_61473 = G__61503;
i__60258_61474 = G__61504;
continue;
} else {
var tx_61509 = cljs.core.first(seq__60255_61499__$1);
if(has_mutations_QMARK__61410(tx_61509)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_61403,payload_61411(tx_61509));
} else {
}


var G__61511 = cljs.core.next(seq__60255_61499__$1);
var G__61512 = null;
var G__61513 = (0);
var G__61514 = (0);
seq__60255_61471 = G__61511;
chunk__60256_61472 = G__61512;
count__60257_61473 = G__61513;
i__60258_61474 = G__61514;
continue;
}
} else {
}
}
break;
}


var G__61515 = seq__60148;
var G__61516 = chunk__60149;
var G__61517 = count__60150;
var G__61518 = (i__60151 + (1));
seq__60148 = G__61515;
chunk__60149 = G__61516;
count__60150 = G__61517;
i__60151 = G__61518;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__60148);
if(temp__5720__auto__){
var seq__60148__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60148__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60148__$1);
var G__61523 = cljs.core.chunk_rest(seq__60148__$1);
var G__61524 = c__4550__auto__;
var G__61525 = cljs.core.count(c__4550__auto__);
var G__61526 = (0);
seq__60148 = G__61523;
chunk__60149 = G__61524;
count__60150 = G__61525;
i__60151 = G__61526;
continue;
} else {
var remote = cljs.core.first(seq__60148__$1);
var queue_61532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_61533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var refresh_set_61534 = (function (){var or__4131__auto__ = (function (){var G__60298 = full_remote_transaction_61533;
var G__60298__$1 = (((G__60298 == null))?null:cljs.core.meta(G__60298));
var G__60298__$2 = (((G__60298__$1 == null))?null:new cljs.core.Keyword("fulcro.client.primitives","refresh","fulcro.client.primitives/refresh",481513561).cljs$core$IFn$_invoke$arity$1(G__60298__$1));
if((G__60298__$2 == null)){
return null;
} else {
return cljs.core.vec(G__60298__$2);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var tx_time_61535 = (function (){var G__60300 = full_remote_transaction_61533;
var G__60300__$1 = (((G__60300 == null))?null:cljs.core.meta(G__60300));
if((G__60300__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456).cljs$core$IFn$_invoke$arity$1(G__60300__$1);
}
})();
var fallback_61536 = fulcro.client.impl.application.fallback_handler(app,full_remote_transaction_61533);
var desired_remote_mutations_61537 = fulcro.client.primitives.remove_loads_and_fallbacks(full_remote_transaction_61533);
var tx_list_61538 = fulcro.client.impl.application.split_mutations(desired_remote_mutations_61537);
var has_mutations_QMARK__61539 = ((function (seq__60148,chunk__60149,count__60150,i__60151,queue_61532,full_remote_transaction_61533,refresh_set_61534,tx_time_61535,fallback_61536,desired_remote_mutations_61537,tx_list_61538,remote,seq__60148__$1,temp__5720__auto__,history,map__60142,map__60142__$1,app,reconciler,send_queues){
return (function (tx){
return (cljs.core.count(tx) > (0));
});})(seq__60148,chunk__60149,count__60150,i__60151,queue_61532,full_remote_transaction_61533,refresh_set_61534,tx_time_61535,fallback_61536,desired_remote_mutations_61537,tx_list_61538,remote,seq__60148__$1,temp__5720__auto__,history,map__60142,map__60142__$1,app,reconciler,send_queues))
;
var payload_61540 = ((function (seq__60148,chunk__60149,count__60150,i__60151,queue_61532,full_remote_transaction_61533,refresh_set_61534,tx_time_61535,fallback_61536,desired_remote_mutations_61537,tx_list_61538,has_mutations_QMARK__61539,remote,seq__60148__$1,temp__5720__auto__,history,map__60142,map__60142__$1,app,reconciler,send_queues){
return (function (tx){
var abort_id = (function (){var G__60310 = tx;
var G__60310__$1 = (((G__60310 == null))?null:fulcro.client.mutations.abort_ids(G__60310));
if((G__60310__$1 == null)){
return null;
} else {
return cljs.core.first(G__60310__$1);
}
})();
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),tx,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456),tx_time_61535,new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564),history,new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012),remote,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267),abort_id,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603),((function (seq__60148,chunk__60149,count__60150,i__60151,abort_id,queue_61532,full_remote_transaction_61533,refresh_set_61534,tx_time_61535,fallback_61536,desired_remote_mutations_61537,tx_list_61538,has_mutations_QMARK__61539,remote,seq__60148__$1,temp__5720__auto__,history,map__60142,map__60142__$1,app,reconciler,send_queues){
return (function (result,mtx){
var G__60312 = result;
var G__60313 = (function (){var or__4131__auto__ = mtx;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return tx;
}
})();
var G__60314 = remote;
return (cb.cljs$core$IFn$_invoke$arity$3 ? cb.cljs$core$IFn$_invoke$arity$3(G__60312,G__60313,G__60314) : cb.call(null,G__60312,G__60313,G__60314));
});})(seq__60148,chunk__60149,count__60150,i__60151,abort_id,queue_61532,full_remote_transaction_61533,refresh_set_61534,tx_time_61535,fallback_61536,desired_remote_mutations_61537,tx_list_61538,has_mutations_QMARK__61539,remote,seq__60148__$1,temp__5720__auto__,history,map__60142,map__60142__$1,app,reconciler,send_queues))
,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629),((function (seq__60148,chunk__60149,count__60150,i__60151,abort_id,queue_61532,full_remote_transaction_61533,refresh_set_61534,tx_time_61535,fallback_61536,desired_remote_mutations_61537,tx_list_61538,has_mutations_QMARK__61539,remote,seq__60148__$1,temp__5720__auto__,history,map__60142,map__60142__$1,app,reconciler,send_queues){
return (function (result){
return fallback_61536(result);
});})(seq__60148,chunk__60149,count__60150,i__60151,abort_id,queue_61532,full_remote_transaction_61533,refresh_set_61534,tx_time_61535,fallback_61536,desired_remote_mutations_61537,tx_list_61538,has_mutations_QMARK__61539,remote,seq__60148__$1,temp__5720__auto__,history,map__60142,map__60142__$1,app,reconciler,send_queues))
], null);
});})(seq__60148,chunk__60149,count__60150,i__60151,queue_61532,full_remote_transaction_61533,refresh_set_61534,tx_time_61535,fallback_61536,desired_remote_mutations_61537,tx_list_61538,has_mutations_QMARK__61539,remote,seq__60148__$1,temp__5720__auto__,history,map__60142,map__60142__$1,app,reconciler,send_queues))
;
var seq__60315_61627 = cljs.core.seq(tx_list_61538);
var chunk__60316_61628 = null;
var count__60317_61629 = (0);
var i__60318_61630 = (0);
while(true){
if((i__60318_61630 < count__60317_61629)){
var tx_61631 = chunk__60316_61628.cljs$core$IIndexed$_nth$arity$2(null,i__60318_61630);
if(has_mutations_QMARK__61539(tx_61631)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_61532,payload_61540(tx_61631));
} else {
}


var G__61632 = seq__60315_61627;
var G__61633 = chunk__60316_61628;
var G__61634 = count__60317_61629;
var G__61635 = (i__60318_61630 + (1));
seq__60315_61627 = G__61632;
chunk__60316_61628 = G__61633;
count__60317_61629 = G__61634;
i__60318_61630 = G__61635;
continue;
} else {
var temp__5720__auto___61637__$1 = cljs.core.seq(seq__60315_61627);
if(temp__5720__auto___61637__$1){
var seq__60315_61642__$1 = temp__5720__auto___61637__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60315_61642__$1)){
var c__4550__auto___61643 = cljs.core.chunk_first(seq__60315_61642__$1);
var G__61645 = cljs.core.chunk_rest(seq__60315_61642__$1);
var G__61646 = c__4550__auto___61643;
var G__61647 = cljs.core.count(c__4550__auto___61643);
var G__61648 = (0);
seq__60315_61627 = G__61645;
chunk__60316_61628 = G__61646;
count__60317_61629 = G__61647;
i__60318_61630 = G__61648;
continue;
} else {
var tx_61654 = cljs.core.first(seq__60315_61642__$1);
if(has_mutations_QMARK__61539(tx_61654)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_61532,payload_61540(tx_61654));
} else {
}


var G__61655 = cljs.core.next(seq__60315_61642__$1);
var G__61656 = null;
var G__61657 = (0);
var G__61658 = (0);
seq__60315_61627 = G__61655;
chunk__60316_61628 = G__61656;
count__60317_61629 = G__61657;
i__60318_61630 = G__61658;
continue;
}
} else {
}
}
break;
}


var G__61660 = cljs.core.next(seq__60148__$1);
var G__61661 = null;
var G__61662 = (0);
var G__61663 = (0);
seq__60148 = G__61660;
chunk__60149 = G__61661;
count__60150 = G__61662;
i__60151 = G__61663;
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
fulcro.client.impl.application.enqueue_reads = (function fulcro$client$impl$application$enqueue_reads(p__60340){
var map__60341 = p__60340;
var map__60341__$1 = (((((!((map__60341 == null))))?(((((map__60341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60341):map__60341);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60341__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60341__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60341__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var seq__60356 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__60357 = null;
var count__60358 = (0);
var i__60359 = (0);
while(true){
if((i__60359 < count__60358)){
var remote = chunk__60357.cljs$core$IIndexed$_nth$arity$2(null,i__60359);
var queue_61685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_61686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_61687 = fulcro.client.impl.data_fetch.mark_parallel_loading_BANG_(remote,reconciler);
var seq__60490_61690 = cljs.core.seq(parallel_payload_61687);
var chunk__60491_61692 = null;
var count__60492_61693 = (0);
var i__60493_61694 = (0);
while(true){
if((i__60493_61694 < count__60492_61693)){
var map__60507_61701 = chunk__60491_61692.cljs$core$IIndexed$_nth$arity$2(null,i__60493_61694);
var map__60507_61702__$1 = (((((!((map__60507_61701 == null))))?(((((map__60507_61701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60507_61701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60507_61701):map__60507_61701);
var payload_61703 = map__60507_61702__$1;
var query_61704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60507_61702__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load_61705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60507_61702__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error_61706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60507_61702__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors_61707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60507_61702__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id_61708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60507_61702__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var on_load_SINGLEQUOTE__61732 = ((function (seq__60490_61690,chunk__60491_61692,count__60492_61693,i__60493_61694,seq__60356,chunk__60357,count__60358,i__60359,map__60507_61701,map__60507_61702__$1,payload_61703,query_61704,on_load_61705,on_error_61706,load_descriptors_61707,abort_id_61708,queue_61685,network_61686,parallel_payload_61687,remote,map__60341,map__60341__$1,send_queues,reconciler,networking){
return (function (p1__60336_SHARP_){
return (on_load_61705.cljs$core$IFn$_invoke$arity$2 ? on_load_61705.cljs$core$IFn$_invoke$arity$2(p1__60336_SHARP_,load_descriptors_61707) : on_load_61705.call(null,p1__60336_SHARP_,load_descriptors_61707));
});})(seq__60490_61690,chunk__60491_61692,count__60492_61693,i__60493_61694,seq__60356,chunk__60357,count__60358,i__60359,map__60507_61701,map__60507_61702__$1,payload_61703,query_61704,on_load_61705,on_error_61706,load_descriptors_61707,abort_id_61708,queue_61685,network_61686,parallel_payload_61687,remote,map__60341,map__60341__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__61733 = ((function (seq__60490_61690,chunk__60491_61692,count__60492_61693,i__60493_61694,seq__60356,chunk__60357,count__60358,i__60359,on_load_SINGLEQUOTE__61732,map__60507_61701,map__60507_61702__$1,payload_61703,query_61704,on_load_61705,on_error_61706,load_descriptors_61707,abort_id_61708,queue_61685,network_61686,parallel_payload_61687,remote,map__60341,map__60341__$1,send_queues,reconciler,networking){
return (function (p1__60337_SHARP_){
return (on_error_61706.cljs$core$IFn$_invoke$arity$2 ? on_error_61706.cljs$core$IFn$_invoke$arity$2(p1__60337_SHARP_,load_descriptors_61707) : on_error_61706.call(null,p1__60337_SHARP_,load_descriptors_61707));
});})(seq__60490_61690,chunk__60491_61692,count__60492_61693,i__60493_61694,seq__60356,chunk__60357,count__60358,i__60359,on_load_SINGLEQUOTE__61732,map__60507_61701,map__60507_61702__$1,payload_61703,query_61704,on_load_61705,on_error_61706,load_descriptors_61707,abort_id_61708,queue_61685,network_61686,parallel_payload_61687,remote,map__60341,map__60341__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_61686,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload_61703,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),query_61704,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_load_SINGLEQUOTE__61732,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error_SINGLEQUOTE__61733,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_61708], null));


var G__61779 = seq__60490_61690;
var G__61780 = chunk__60491_61692;
var G__61781 = count__60492_61693;
var G__61782 = (i__60493_61694 + (1));
seq__60490_61690 = G__61779;
chunk__60491_61692 = G__61780;
count__60492_61693 = G__61781;
i__60493_61694 = G__61782;
continue;
} else {
var temp__5720__auto___61787 = cljs.core.seq(seq__60490_61690);
if(temp__5720__auto___61787){
var seq__60490_61789__$1 = temp__5720__auto___61787;
if(cljs.core.chunked_seq_QMARK_(seq__60490_61789__$1)){
var c__4550__auto___61790 = cljs.core.chunk_first(seq__60490_61789__$1);
var G__61792 = cljs.core.chunk_rest(seq__60490_61789__$1);
var G__61793 = c__4550__auto___61790;
var G__61794 = cljs.core.count(c__4550__auto___61790);
var G__61795 = (0);
seq__60490_61690 = G__61792;
chunk__60491_61692 = G__61793;
count__60492_61693 = G__61794;
i__60493_61694 = G__61795;
continue;
} else {
var map__60552_61800 = cljs.core.first(seq__60490_61789__$1);
var map__60552_61801__$1 = (((((!((map__60552_61800 == null))))?(((((map__60552_61800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60552_61800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60552_61800):map__60552_61800);
var payload_61802 = map__60552_61801__$1;
var query_61803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60552_61801__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load_61804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60552_61801__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error_61805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60552_61801__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors_61806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60552_61801__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id_61807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60552_61801__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var on_load_SINGLEQUOTE__61835 = ((function (seq__60490_61690,chunk__60491_61692,count__60492_61693,i__60493_61694,seq__60356,chunk__60357,count__60358,i__60359,map__60552_61800,map__60552_61801__$1,payload_61802,query_61803,on_load_61804,on_error_61805,load_descriptors_61806,abort_id_61807,seq__60490_61789__$1,temp__5720__auto___61787,queue_61685,network_61686,parallel_payload_61687,remote,map__60341,map__60341__$1,send_queues,reconciler,networking){
return (function (p1__60336_SHARP_){
return (on_load_61804.cljs$core$IFn$_invoke$arity$2 ? on_load_61804.cljs$core$IFn$_invoke$arity$2(p1__60336_SHARP_,load_descriptors_61806) : on_load_61804.call(null,p1__60336_SHARP_,load_descriptors_61806));
});})(seq__60490_61690,chunk__60491_61692,count__60492_61693,i__60493_61694,seq__60356,chunk__60357,count__60358,i__60359,map__60552_61800,map__60552_61801__$1,payload_61802,query_61803,on_load_61804,on_error_61805,load_descriptors_61806,abort_id_61807,seq__60490_61789__$1,temp__5720__auto___61787,queue_61685,network_61686,parallel_payload_61687,remote,map__60341,map__60341__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__61836 = ((function (seq__60490_61690,chunk__60491_61692,count__60492_61693,i__60493_61694,seq__60356,chunk__60357,count__60358,i__60359,on_load_SINGLEQUOTE__61835,map__60552_61800,map__60552_61801__$1,payload_61802,query_61803,on_load_61804,on_error_61805,load_descriptors_61806,abort_id_61807,seq__60490_61789__$1,temp__5720__auto___61787,queue_61685,network_61686,parallel_payload_61687,remote,map__60341,map__60341__$1,send_queues,reconciler,networking){
return (function (p1__60337_SHARP_){
return (on_error_61805.cljs$core$IFn$_invoke$arity$2 ? on_error_61805.cljs$core$IFn$_invoke$arity$2(p1__60337_SHARP_,load_descriptors_61806) : on_error_61805.call(null,p1__60337_SHARP_,load_descriptors_61806));
});})(seq__60490_61690,chunk__60491_61692,count__60492_61693,i__60493_61694,seq__60356,chunk__60357,count__60358,i__60359,on_load_SINGLEQUOTE__61835,map__60552_61800,map__60552_61801__$1,payload_61802,query_61803,on_load_61804,on_error_61805,load_descriptors_61806,abort_id_61807,seq__60490_61789__$1,temp__5720__auto___61787,queue_61685,network_61686,parallel_payload_61687,remote,map__60341,map__60341__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_61686,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload_61802,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),query_61803,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_load_SINGLEQUOTE__61835,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error_SINGLEQUOTE__61836,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_61807], null));


var G__61873 = cljs.core.next(seq__60490_61789__$1);
var G__61875 = null;
var G__61876 = (0);
var G__61877 = (0);
seq__60490_61690 = G__61873;
chunk__60491_61692 = G__61875;
count__60492_61693 = G__61876;
i__60493_61694 = G__61877;
continue;
}
} else {
}
}
break;
}

var fetch_payload_61881 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_61881)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_61685,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_61881,new cljs.core.Keyword(null,"networking","networking",586110628),network_61686));

var G__61887 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_61881 = G__61887;
continue;
} else {
}
break;
}


var G__61891 = seq__60356;
var G__61892 = chunk__60357;
var G__61893 = count__60358;
var G__61894 = (i__60359 + (1));
seq__60356 = G__61891;
chunk__60357 = G__61892;
count__60358 = G__61893;
i__60359 = G__61894;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__60356);
if(temp__5720__auto__){
var seq__60356__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60356__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60356__$1);
var G__61903 = cljs.core.chunk_rest(seq__60356__$1);
var G__61904 = c__4550__auto__;
var G__61905 = cljs.core.count(c__4550__auto__);
var G__61906 = (0);
seq__60356 = G__61903;
chunk__60357 = G__61904;
count__60358 = G__61905;
i__60359 = G__61906;
continue;
} else {
var remote = cljs.core.first(seq__60356__$1);
var queue_61913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_61914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_61915 = fulcro.client.impl.data_fetch.mark_parallel_loading_BANG_(remote,reconciler);
var seq__60565_61921 = cljs.core.seq(parallel_payload_61915);
var chunk__60566_61922 = null;
var count__60567_61923 = (0);
var i__60568_61924 = (0);
while(true){
if((i__60568_61924 < count__60567_61923)){
var map__60592_61932 = chunk__60566_61922.cljs$core$IIndexed$_nth$arity$2(null,i__60568_61924);
var map__60592_61933__$1 = (((((!((map__60592_61932 == null))))?(((((map__60592_61932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60592_61932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60592_61932):map__60592_61932);
var payload_61934 = map__60592_61933__$1;
var query_61935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60592_61933__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load_61936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60592_61933__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error_61937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60592_61933__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors_61938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60592_61933__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id_61939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60592_61933__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var on_load_SINGLEQUOTE__61959 = ((function (seq__60565_61921,chunk__60566_61922,count__60567_61923,i__60568_61924,seq__60356,chunk__60357,count__60358,i__60359,map__60592_61932,map__60592_61933__$1,payload_61934,query_61935,on_load_61936,on_error_61937,load_descriptors_61938,abort_id_61939,queue_61913,network_61914,parallel_payload_61915,remote,seq__60356__$1,temp__5720__auto__,map__60341,map__60341__$1,send_queues,reconciler,networking){
return (function (p1__60336_SHARP_){
return (on_load_61936.cljs$core$IFn$_invoke$arity$2 ? on_load_61936.cljs$core$IFn$_invoke$arity$2(p1__60336_SHARP_,load_descriptors_61938) : on_load_61936.call(null,p1__60336_SHARP_,load_descriptors_61938));
});})(seq__60565_61921,chunk__60566_61922,count__60567_61923,i__60568_61924,seq__60356,chunk__60357,count__60358,i__60359,map__60592_61932,map__60592_61933__$1,payload_61934,query_61935,on_load_61936,on_error_61937,load_descriptors_61938,abort_id_61939,queue_61913,network_61914,parallel_payload_61915,remote,seq__60356__$1,temp__5720__auto__,map__60341,map__60341__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__61960 = ((function (seq__60565_61921,chunk__60566_61922,count__60567_61923,i__60568_61924,seq__60356,chunk__60357,count__60358,i__60359,on_load_SINGLEQUOTE__61959,map__60592_61932,map__60592_61933__$1,payload_61934,query_61935,on_load_61936,on_error_61937,load_descriptors_61938,abort_id_61939,queue_61913,network_61914,parallel_payload_61915,remote,seq__60356__$1,temp__5720__auto__,map__60341,map__60341__$1,send_queues,reconciler,networking){
return (function (p1__60337_SHARP_){
return (on_error_61937.cljs$core$IFn$_invoke$arity$2 ? on_error_61937.cljs$core$IFn$_invoke$arity$2(p1__60337_SHARP_,load_descriptors_61938) : on_error_61937.call(null,p1__60337_SHARP_,load_descriptors_61938));
});})(seq__60565_61921,chunk__60566_61922,count__60567_61923,i__60568_61924,seq__60356,chunk__60357,count__60358,i__60359,on_load_SINGLEQUOTE__61959,map__60592_61932,map__60592_61933__$1,payload_61934,query_61935,on_load_61936,on_error_61937,load_descriptors_61938,abort_id_61939,queue_61913,network_61914,parallel_payload_61915,remote,seq__60356__$1,temp__5720__auto__,map__60341,map__60341__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_61914,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload_61934,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),query_61935,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_load_SINGLEQUOTE__61959,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error_SINGLEQUOTE__61960,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_61939], null));


var G__62019 = seq__60565_61921;
var G__62020 = chunk__60566_61922;
var G__62021 = count__60567_61923;
var G__62022 = (i__60568_61924 + (1));
seq__60565_61921 = G__62019;
chunk__60566_61922 = G__62020;
count__60567_61923 = G__62021;
i__60568_61924 = G__62022;
continue;
} else {
var temp__5720__auto___62023__$1 = cljs.core.seq(seq__60565_61921);
if(temp__5720__auto___62023__$1){
var seq__60565_62024__$1 = temp__5720__auto___62023__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60565_62024__$1)){
var c__4550__auto___62026 = cljs.core.chunk_first(seq__60565_62024__$1);
var G__62027 = cljs.core.chunk_rest(seq__60565_62024__$1);
var G__62028 = c__4550__auto___62026;
var G__62029 = cljs.core.count(c__4550__auto___62026);
var G__62030 = (0);
seq__60565_61921 = G__62027;
chunk__60566_61922 = G__62028;
count__60567_61923 = G__62029;
i__60568_61924 = G__62030;
continue;
} else {
var map__60602_62032 = cljs.core.first(seq__60565_62024__$1);
var map__60602_62033__$1 = (((((!((map__60602_62032 == null))))?(((((map__60602_62032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60602_62032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60602_62032):map__60602_62032);
var payload_62034 = map__60602_62033__$1;
var query_62035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60602_62033__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load_62036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60602_62033__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error_62037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60602_62033__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors_62038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60602_62033__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id_62039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60602_62033__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var on_load_SINGLEQUOTE__62040 = ((function (seq__60565_61921,chunk__60566_61922,count__60567_61923,i__60568_61924,seq__60356,chunk__60357,count__60358,i__60359,map__60602_62032,map__60602_62033__$1,payload_62034,query_62035,on_load_62036,on_error_62037,load_descriptors_62038,abort_id_62039,seq__60565_62024__$1,temp__5720__auto___62023__$1,queue_61913,network_61914,parallel_payload_61915,remote,seq__60356__$1,temp__5720__auto__,map__60341,map__60341__$1,send_queues,reconciler,networking){
return (function (p1__60336_SHARP_){
return (on_load_62036.cljs$core$IFn$_invoke$arity$2 ? on_load_62036.cljs$core$IFn$_invoke$arity$2(p1__60336_SHARP_,load_descriptors_62038) : on_load_62036.call(null,p1__60336_SHARP_,load_descriptors_62038));
});})(seq__60565_61921,chunk__60566_61922,count__60567_61923,i__60568_61924,seq__60356,chunk__60357,count__60358,i__60359,map__60602_62032,map__60602_62033__$1,payload_62034,query_62035,on_load_62036,on_error_62037,load_descriptors_62038,abort_id_62039,seq__60565_62024__$1,temp__5720__auto___62023__$1,queue_61913,network_61914,parallel_payload_61915,remote,seq__60356__$1,temp__5720__auto__,map__60341,map__60341__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__62041 = ((function (seq__60565_61921,chunk__60566_61922,count__60567_61923,i__60568_61924,seq__60356,chunk__60357,count__60358,i__60359,on_load_SINGLEQUOTE__62040,map__60602_62032,map__60602_62033__$1,payload_62034,query_62035,on_load_62036,on_error_62037,load_descriptors_62038,abort_id_62039,seq__60565_62024__$1,temp__5720__auto___62023__$1,queue_61913,network_61914,parallel_payload_61915,remote,seq__60356__$1,temp__5720__auto__,map__60341,map__60341__$1,send_queues,reconciler,networking){
return (function (p1__60337_SHARP_){
return (on_error_62037.cljs$core$IFn$_invoke$arity$2 ? on_error_62037.cljs$core$IFn$_invoke$arity$2(p1__60337_SHARP_,load_descriptors_62038) : on_error_62037.call(null,p1__60337_SHARP_,load_descriptors_62038));
});})(seq__60565_61921,chunk__60566_61922,count__60567_61923,i__60568_61924,seq__60356,chunk__60357,count__60358,i__60359,on_load_SINGLEQUOTE__62040,map__60602_62032,map__60602_62033__$1,payload_62034,query_62035,on_load_62036,on_error_62037,load_descriptors_62038,abort_id_62039,seq__60565_62024__$1,temp__5720__auto___62023__$1,queue_61913,network_61914,parallel_payload_61915,remote,seq__60356__$1,temp__5720__auto__,map__60341,map__60341__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_61914,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload_62034,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),query_62035,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_load_SINGLEQUOTE__62040,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error_SINGLEQUOTE__62041,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_62039], null));


var G__62049 = cljs.core.next(seq__60565_62024__$1);
var G__62050 = null;
var G__62051 = (0);
var G__62052 = (0);
seq__60565_61921 = G__62049;
chunk__60566_61922 = G__62050;
count__60567_61923 = G__62051;
i__60568_61924 = G__62052;
continue;
}
} else {
}
}
break;
}

var fetch_payload_62053 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_62053)){
fulcro.client.impl.application._enqueue(reconciler,remote,queue_61913,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_62053,new cljs.core.Keyword(null,"networking","networking",586110628),network_61914));

var G__62054 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_62053 = G__62054;
continue;
} else {
}
break;
}


var G__62055 = cljs.core.next(seq__60356__$1);
var G__62056 = null;
var G__62057 = (0);
var G__62058 = (0);
seq__60356 = G__62055;
chunk__60357 = G__62056;
count__60358 = G__62057;
i__60359 = G__62058;
continue;
}
} else {
return null;
}
}
break;
}
});
fulcro.client.impl.application.detect_errant_remotes = (function fulcro$client$impl$application$detect_errant_remotes(p__60619){
var map__60621 = p__60619;
var map__60621__$1 = (((((!((map__60621 == null))))?(((((map__60621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60621):map__60621);
var app = map__60621__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60621__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60621__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var state = fulcro.client.primitives.app_state(reconciler);
var all_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.Keyword("fulcro","ready-to-load","fulcro/ready-to-load",127104696));
var item_remotes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(fulcro.client.impl.data_fetch.data_remote),all_items);
var all_remotes = cljs.core.set(cljs.core.keys(send_queues));
var invalid_remotes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(item_remotes,all_remotes);
if(cljs.core.truth_(cljs.core.not_empty(invalid_remotes))){
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),217], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Use of invalid remote(s) detected! ",invalid_remotes], 0));
}catch (e60629){if((e60629 instanceof Error)){
var e__47187__auto__ = e60629;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),217], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__47187__auto__], 0));
} else {
throw e60629;

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
var map__60649 = payload;
var map__60649__$1 = (((((!((map__60649 == null))))?(((((map__60649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60649):map__60649);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60649__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60649__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60649__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60649__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60649__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var merge_data = (cljs.core.truth_(load_descriptors)?((function (map__60649,map__60649__$1,query,on_load,on_error,load_descriptors,abort_id){
return (function (p1__60645_SHARP_){
return (on_load.cljs$core$IFn$_invoke$arity$2 ? on_load.cljs$core$IFn$_invoke$arity$2(p1__60645_SHARP_,load_descriptors) : on_load.call(null,p1__60645_SHARP_,load_descriptors));
});})(map__60649,map__60649__$1,query,on_load,on_error,load_descriptors,abort_id))
:((function (map__60649,map__60649__$1,query,on_load,on_error,load_descriptors,abort_id){
return (function (p1__60646_SHARP_,p2__60647_SHARP_){
return (on_load.cljs$core$IFn$_invoke$arity$2 ? on_load.cljs$core$IFn$_invoke$arity$2(p1__60646_SHARP_,p2__60647_SHARP_) : on_load.call(null,p1__60646_SHARP_,p2__60647_SHARP_));
});})(map__60649,map__60649__$1,query,on_load,on_error,load_descriptors,abort_id))
);
var on_update = (cljs.core.truth_(load_descriptors)?cljs.core.identity:merge_data);
var on_error__$1 = (cljs.core.truth_(load_descriptors)?((function (map__60649,map__60649__$1,query,on_load,on_error,load_descriptors,abort_id,merge_data,on_update){
return (function (p1__60648_SHARP_){
return (on_error.cljs$core$IFn$_invoke$arity$2 ? on_error.cljs$core$IFn$_invoke$arity$2(p1__60648_SHARP_,load_descriptors) : on_error.call(null,p1__60648_SHARP_,load_descriptors));
});})(map__60649,map__60649__$1,query,on_load,on_error,load_descriptors,abort_id,merge_data,on_update))
:on_error);
var on_error__$2 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(send_complete,on_error__$1);
var on_done = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(send_complete,merge_data);
if(fulcro.client.impl.data_fetch.is_deferred_transaction_QMARK_(query)){
on_done(cljs.core.PersistentArrayMap.EMPTY);

if(cljs.core.truth_(fulcro.client.impl.application.is_sequential_QMARK_(network))){
return null;
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),256], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Attempt to defer a transaction on a non-sequential remote. `ptransact!` will fail to work correctly with `serial? false` remotes."], 0));
}catch (e60655){if((e60655 instanceof Error)){
var e__47187__auto__ = e60655;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),256], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__47187__auto__], 0));
} else {
throw e60655;

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
fulcro.client.impl.application.start_network_sequential_processing = (function fulcro$client$impl$application$start_network_sequential_processing(p__60662){
var map__60663 = p__60662;
var map__60663__$1 = (((((!((map__60663 == null))))?(((((map__60663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60663):map__60663);
var app = map__60663__$1;
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60663__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60663__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60663__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var response_channels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60663__$1,new cljs.core.Keyword(null,"response-channels","response-channels",-1871059128));
var seq__60666 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__60667 = null;
var count__60668 = (0);
var i__60669 = (0);
while(true){
if((i__60669 < count__60668)){
var remote = chunk__60667.cljs$core$IIndexed$_nth$arity$2(null,i__60669);
var queue_62084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_62085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var sequential_QMARK__62086 = fulcro.client.impl.application.is_sequential_QMARK_(network_62085);
var response_channel_62087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_62088 = (cljs.core.truth_(sequential_QMARK__62086)?((function (seq__60666,chunk__60667,count__60668,i__60669,queue_62084,network_62085,sequential_QMARK__62086,response_channel_62087,remote,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var c__50615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__60666,chunk__60667,count__60668,i__60669,c__50615__auto__,queue_62084,network_62085,sequential_QMARK__62086,response_channel_62087,remote,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (seq__60666,chunk__60667,count__60668,i__60669,c__50615__auto__,queue_62084,network_62085,sequential_QMARK__62086,response_channel_62087,remote,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_60830){
var state_val_60831 = (state_60830[(1)]);
if((state_val_60831 === (1))){
var state_60830__$1 = state_60830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60830__$1,(2),response_channel_62087,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_60831 === (2))){
var inst_60828 = (state_60830[(2)]);
var state_60830__$1 = state_60830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60830__$1,inst_60828);
} else {
return null;
}
}
});})(seq__60666,chunk__60667,count__60668,i__60669,c__50615__auto__,queue_62084,network_62085,sequential_QMARK__62086,response_channel_62087,remote,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__60666,chunk__60667,count__60668,i__60669,switch__48679__auto__,c__50615__auto__,queue_62084,network_62085,sequential_QMARK__62086,response_channel_62087,remote,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____0 = (function (){
var statearr_60839 = [null,null,null,null,null,null,null];
(statearr_60839[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__);

(statearr_60839[(1)] = (1));

return statearr_60839;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____1 = (function (state_60830){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_60830);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e60841){var ex__48683__auto__ = e60841;
var statearr_60842_62098 = state_60830;
(statearr_60842_62098[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_60830[(4)]))){
var statearr_60844_62101 = state_60830;
(statearr_60844_62101[(1)] = cljs.core.first((state_60830[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62103 = state_60830;
state_60830 = G__62103;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__ = function(state_60830){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____1.call(this,state_60830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__;
})()
;})(seq__60666,chunk__60667,count__60668,i__60669,switch__48679__auto__,c__50615__auto__,queue_62084,network_62085,sequential_QMARK__62086,response_channel_62087,remote,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__50617__auto__ = (function (){var statearr_60846 = f__50616__auto__();
(statearr_60846[(6)] = c__50615__auto__);

return statearr_60846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(seq__60666,chunk__60667,count__60668,i__60669,c__50615__auto__,queue_62084,network_62085,sequential_QMARK__62086,response_channel_62087,remote,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels))
);

return c__50615__auto__;
});})(seq__60666,chunk__60667,count__60668,i__60669,queue_62084,network_62085,sequential_QMARK__62086,response_channel_62087,remote,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels))
:cljs.core.identity);
var c__50615__auto___62105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__60666,chunk__60667,count__60668,i__60669,c__50615__auto___62105,queue_62084,network_62085,sequential_QMARK__62086,response_channel_62087,send_complete_62088,remote,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (seq__60666,chunk__60667,count__60668,i__60669,c__50615__auto___62105,queue_62084,network_62085,sequential_QMARK__62086,response_channel_62087,send_complete_62088,remote,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_60875){
var state_val_60876 = (state_60875[(1)]);
if((state_val_60876 === (7))){
var inst_60861 = (state_60875[(2)]);
var state_60875__$1 = (function (){var statearr_60907 = state_60875;
(statearr_60907[(7)] = inst_60861);

return statearr_60907;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60875__$1,(9),queue_62084);
} else {
if((state_val_60876 === (1))){
var state_60875__$1 = state_60875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60875__$1,(2),queue_62084);
} else {
if((state_val_60876 === (4))){
var inst_60873 = (state_60875[(2)]);
var state_60875__$1 = state_60875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60875__$1,inst_60873);
} else {
if((state_val_60876 === (6))){
var state_60875__$1 = state_60875;
var statearr_60931_62112 = state_60875__$1;
(statearr_60931_62112[(2)] = null);

(statearr_60931_62112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60876 === (3))){
var inst_60851 = (state_60875[(8)]);
var inst_60853 = fulcro.client.impl.application._send_payload(network_62085,reconciler,inst_60851,send_complete_62088);
var inst_60854 = fulcro.client.primitives.pop_pending_request(reconciler,remote);
var state_60875__$1 = (function (){var statearr_60936 = state_60875;
(statearr_60936[(9)] = inst_60854);

(statearr_60936[(10)] = inst_60853);

return statearr_60936;
})();
if(cljs.core.truth_(sequential_QMARK__62086)){
var statearr_60937_62116 = state_60875__$1;
(statearr_60937_62116[(1)] = (5));

} else {
var statearr_60938_62118 = state_60875__$1;
(statearr_60938_62118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60876 === (2))){
var inst_60850 = (state_60875[(2)]);
var inst_60851 = inst_60850;
var state_60875__$1 = (function (){var statearr_60939 = state_60875;
(statearr_60939[(8)] = inst_60851);

return statearr_60939;
})();
var statearr_60940_62119 = state_60875__$1;
(statearr_60940_62119[(2)] = null);

(statearr_60940_62119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60876 === (9))){
var inst_60865 = (state_60875[(2)]);
var inst_60851 = inst_60865;
var state_60875__$1 = (function (){var statearr_60941 = state_60875;
(statearr_60941[(8)] = inst_60851);

return statearr_60941;
})();
var statearr_60942_62123 = state_60875__$1;
(statearr_60942_62123[(2)] = null);

(statearr_60942_62123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60876 === (5))){
var state_60875__$1 = state_60875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60875__$1,(8),response_channel_62087);
} else {
if((state_val_60876 === (8))){
var inst_60858 = (state_60875[(2)]);
var state_60875__$1 = state_60875;
var statearr_60954_62124 = state_60875__$1;
(statearr_60954_62124[(2)] = inst_60858);

(statearr_60954_62124[(1)] = (7));


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
});})(seq__60666,chunk__60667,count__60668,i__60669,c__50615__auto___62105,queue_62084,network_62085,sequential_QMARK__62086,response_channel_62087,send_complete_62088,remote,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__60666,chunk__60667,count__60668,i__60669,switch__48679__auto__,c__50615__auto___62105,queue_62084,network_62085,sequential_QMARK__62086,response_channel_62087,send_complete_62088,remote,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____0 = (function (){
var statearr_60961 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60961[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__);

(statearr_60961[(1)] = (1));

return statearr_60961;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____1 = (function (state_60875){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_60875);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e60981){var ex__48683__auto__ = e60981;
var statearr_60985_62131 = state_60875;
(statearr_60985_62131[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_60875[(4)]))){
var statearr_60987_62133 = state_60875;
(statearr_60987_62133[(1)] = cljs.core.first((state_60875[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62135 = state_60875;
state_60875 = G__62135;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__ = function(state_60875){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____1.call(this,state_60875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__;
})()
;})(seq__60666,chunk__60667,count__60668,i__60669,switch__48679__auto__,c__50615__auto___62105,queue_62084,network_62085,sequential_QMARK__62086,response_channel_62087,send_complete_62088,remote,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__50617__auto__ = (function (){var statearr_60999 = f__50616__auto__();
(statearr_60999[(6)] = c__50615__auto___62105);

return statearr_60999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(seq__60666,chunk__60667,count__60668,i__60669,c__50615__auto___62105,queue_62084,network_62085,sequential_QMARK__62086,response_channel_62087,send_complete_62088,remote,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels))
);



var G__62139 = seq__60666;
var G__62140 = chunk__60667;
var G__62141 = count__60668;
var G__62142 = (i__60669 + (1));
seq__60666 = G__62139;
chunk__60667 = G__62140;
count__60668 = G__62141;
i__60669 = G__62142;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__60666);
if(temp__5720__auto__){
var seq__60666__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60666__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60666__$1);
var G__62144 = cljs.core.chunk_rest(seq__60666__$1);
var G__62145 = c__4550__auto__;
var G__62146 = cljs.core.count(c__4550__auto__);
var G__62147 = (0);
seq__60666 = G__62144;
chunk__60667 = G__62145;
count__60668 = G__62146;
i__60669 = G__62147;
continue;
} else {
var remote = cljs.core.first(seq__60666__$1);
var queue_62149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_62150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var sequential_QMARK__62151 = fulcro.client.impl.application.is_sequential_QMARK_(network_62150);
var response_channel_62152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_62153 = (cljs.core.truth_(sequential_QMARK__62151)?((function (seq__60666,chunk__60667,count__60668,i__60669,queue_62149,network_62150,sequential_QMARK__62151,response_channel_62152,remote,seq__60666__$1,temp__5720__auto__,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var c__50615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__60666,chunk__60667,count__60668,i__60669,c__50615__auto__,queue_62149,network_62150,sequential_QMARK__62151,response_channel_62152,remote,seq__60666__$1,temp__5720__auto__,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (seq__60666,chunk__60667,count__60668,i__60669,c__50615__auto__,queue_62149,network_62150,sequential_QMARK__62151,response_channel_62152,remote,seq__60666__$1,temp__5720__auto__,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_61058){
var state_val_61059 = (state_61058[(1)]);
if((state_val_61059 === (1))){
var state_61058__$1 = state_61058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61058__$1,(2),response_channel_62152,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_61059 === (2))){
var inst_61048 = (state_61058[(2)]);
var state_61058__$1 = state_61058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61058__$1,inst_61048);
} else {
return null;
}
}
});})(seq__60666,chunk__60667,count__60668,i__60669,c__50615__auto__,queue_62149,network_62150,sequential_QMARK__62151,response_channel_62152,remote,seq__60666__$1,temp__5720__auto__,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__60666,chunk__60667,count__60668,i__60669,switch__48679__auto__,c__50615__auto__,queue_62149,network_62150,sequential_QMARK__62151,response_channel_62152,remote,seq__60666__$1,temp__5720__auto__,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____0 = (function (){
var statearr_61097 = [null,null,null,null,null,null,null];
(statearr_61097[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__);

(statearr_61097[(1)] = (1));

return statearr_61097;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____1 = (function (state_61058){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_61058);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e61112){var ex__48683__auto__ = e61112;
var statearr_61113_62160 = state_61058;
(statearr_61113_62160[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_61058[(4)]))){
var statearr_61119_62161 = state_61058;
(statearr_61119_62161[(1)] = cljs.core.first((state_61058[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62164 = state_61058;
state_61058 = G__62164;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__ = function(state_61058){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____1.call(this,state_61058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__;
})()
;})(seq__60666,chunk__60667,count__60668,i__60669,switch__48679__auto__,c__50615__auto__,queue_62149,network_62150,sequential_QMARK__62151,response_channel_62152,remote,seq__60666__$1,temp__5720__auto__,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__50617__auto__ = (function (){var statearr_61146 = f__50616__auto__();
(statearr_61146[(6)] = c__50615__auto__);

return statearr_61146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(seq__60666,chunk__60667,count__60668,i__60669,c__50615__auto__,queue_62149,network_62150,sequential_QMARK__62151,response_channel_62152,remote,seq__60666__$1,temp__5720__auto__,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels))
);

return c__50615__auto__;
});})(seq__60666,chunk__60667,count__60668,i__60669,queue_62149,network_62150,sequential_QMARK__62151,response_channel_62152,remote,seq__60666__$1,temp__5720__auto__,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels))
:cljs.core.identity);
var c__50615__auto___62169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__60666,chunk__60667,count__60668,i__60669,c__50615__auto___62169,queue_62149,network_62150,sequential_QMARK__62151,response_channel_62152,send_complete_62153,remote,seq__60666__$1,temp__5720__auto__,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (seq__60666,chunk__60667,count__60668,i__60669,c__50615__auto___62169,queue_62149,network_62150,sequential_QMARK__62151,response_channel_62152,send_complete_62153,remote,seq__60666__$1,temp__5720__auto__,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_61192){
var state_val_61193 = (state_61192[(1)]);
if((state_val_61193 === (7))){
var inst_61185 = (state_61192[(2)]);
var state_61192__$1 = (function (){var statearr_61197 = state_61192;
(statearr_61197[(7)] = inst_61185);

return statearr_61197;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61192__$1,(9),queue_62149);
} else {
if((state_val_61193 === (1))){
var state_61192__$1 = state_61192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61192__$1,(2),queue_62149);
} else {
if((state_val_61193 === (4))){
var inst_61190 = (state_61192[(2)]);
var state_61192__$1 = state_61192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61192__$1,inst_61190);
} else {
if((state_val_61193 === (6))){
var state_61192__$1 = state_61192;
var statearr_61199_62177 = state_61192__$1;
(statearr_61199_62177[(2)] = null);

(statearr_61199_62177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61193 === (3))){
var inst_61165 = (state_61192[(8)]);
var inst_61174 = fulcro.client.impl.application._send_payload(network_62150,reconciler,inst_61165,send_complete_62153);
var inst_61178 = fulcro.client.primitives.pop_pending_request(reconciler,remote);
var state_61192__$1 = (function (){var statearr_61200 = state_61192;
(statearr_61200[(9)] = inst_61174);

(statearr_61200[(10)] = inst_61178);

return statearr_61200;
})();
if(cljs.core.truth_(sequential_QMARK__62151)){
var statearr_61201_62180 = state_61192__$1;
(statearr_61201_62180[(1)] = (5));

} else {
var statearr_61202_62181 = state_61192__$1;
(statearr_61202_62181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61193 === (2))){
var inst_61164 = (state_61192[(2)]);
var inst_61165 = inst_61164;
var state_61192__$1 = (function (){var statearr_61203 = state_61192;
(statearr_61203[(8)] = inst_61165);

return statearr_61203;
})();
var statearr_61205_62183 = state_61192__$1;
(statearr_61205_62183[(2)] = null);

(statearr_61205_62183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61193 === (9))){
var inst_61187 = (state_61192[(2)]);
var inst_61165 = inst_61187;
var state_61192__$1 = (function (){var statearr_61206 = state_61192;
(statearr_61206[(8)] = inst_61165);

return statearr_61206;
})();
var statearr_61208_62187 = state_61192__$1;
(statearr_61208_62187[(2)] = null);

(statearr_61208_62187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61193 === (5))){
var state_61192__$1 = state_61192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61192__$1,(8),response_channel_62152);
} else {
if((state_val_61193 === (8))){
var inst_61182 = (state_61192[(2)]);
var state_61192__$1 = state_61192;
var statearr_61211_62189 = state_61192__$1;
(statearr_61211_62189[(2)] = inst_61182);

(statearr_61211_62189[(1)] = (7));


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
});})(seq__60666,chunk__60667,count__60668,i__60669,c__50615__auto___62169,queue_62149,network_62150,sequential_QMARK__62151,response_channel_62152,send_complete_62153,remote,seq__60666__$1,temp__5720__auto__,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__60666,chunk__60667,count__60668,i__60669,switch__48679__auto__,c__50615__auto___62169,queue_62149,network_62150,sequential_QMARK__62151,response_channel_62152,send_complete_62153,remote,seq__60666__$1,temp__5720__auto__,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____0 = (function (){
var statearr_61214 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61214[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__);

(statearr_61214[(1)] = (1));

return statearr_61214;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____1 = (function (state_61192){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_61192);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e61217){var ex__48683__auto__ = e61217;
var statearr_61218_62199 = state_61192;
(statearr_61218_62199[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_61192[(4)]))){
var statearr_61219_62202 = state_61192;
(statearr_61219_62202[(1)] = cljs.core.first((state_61192[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62205 = state_61192;
state_61192 = G__62205;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__ = function(state_61192){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____1.call(this,state_61192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__48680__auto__;
})()
;})(seq__60666,chunk__60667,count__60668,i__60669,switch__48679__auto__,c__50615__auto___62169,queue_62149,network_62150,sequential_QMARK__62151,response_channel_62152,send_complete_62153,remote,seq__60666__$1,temp__5720__auto__,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__50617__auto__ = (function (){var statearr_61223 = f__50616__auto__();
(statearr_61223[(6)] = c__50615__auto___62169);

return statearr_61223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(seq__60666,chunk__60667,count__60668,i__60669,c__50615__auto___62169,queue_62149,network_62150,sequential_QMARK__62151,response_channel_62152,send_complete_62153,remote,seq__60666__$1,temp__5720__auto__,map__60663,map__60663__$1,app,networking,reconciler,send_queues,response_channels))
);



var G__62207 = cljs.core.next(seq__60666__$1);
var G__62208 = null;
var G__62209 = (0);
var G__62210 = (0);
seq__60666 = G__62207;
chunk__60667 = G__62208;
count__60668 = G__62209;
i__60669 = G__62210;
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
fulcro.client.impl.application.generate_reconciler = (function fulcro$client$impl$application$generate_reconciler(p__61230,initial_state,parser,p__61231){
var map__61234 = p__61230;
var map__61234__$1 = (((((!((map__61234 == null))))?(((((map__61234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61234):map__61234);
var app = map__61234__$1;
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61234__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var mutation_merge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61234__$1,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322));
var map__61235 = p__61231;
var map__61235__$1 = (((((!((map__61235 == null))))?(((((map__61235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61235):map__61235);
var reconciler_options = map__61235__$1;
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61235__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743));
var rec_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var remotes = cljs.core.keys(send_queues);
var tempid_migrate = ((function (rec_atom,remotes,map__61234,map__61234__$1,app,send_queues,mutation_merge,map__61235,map__61235__$1,reconciler_options,migrate){
return (function (pure,_,tempids){
var seq__61244_62221 = cljs.core.seq(cljs.core.vals(send_queues));
var chunk__61245_62222 = null;
var count__61246_62223 = (0);
var i__61247_62224 = (0);
while(true){
if((i__61247_62224 < count__61246_62223)){
var queue_62225 = chunk__61245_62222.cljs$core$IIndexed$_nth$arity$2(null,i__61247_62224);
fulcro.client.primitives.rewrite_tempids_in_request_queue(queue_62225,tempids);


var G__62226 = seq__61244_62221;
var G__62227 = chunk__61245_62222;
var G__62228 = count__61246_62223;
var G__62229 = (i__61247_62224 + (1));
seq__61244_62221 = G__62226;
chunk__61245_62222 = G__62227;
count__61246_62223 = G__62228;
i__61247_62224 = G__62229;
continue;
} else {
var temp__5720__auto___62230 = cljs.core.seq(seq__61244_62221);
if(temp__5720__auto___62230){
var seq__61244_62232__$1 = temp__5720__auto___62230;
if(cljs.core.chunked_seq_QMARK_(seq__61244_62232__$1)){
var c__4550__auto___62233 = cljs.core.chunk_first(seq__61244_62232__$1);
var G__62235 = cljs.core.chunk_rest(seq__61244_62232__$1);
var G__62236 = c__4550__auto___62233;
var G__62237 = cljs.core.count(c__4550__auto___62233);
var G__62238 = (0);
seq__61244_62221 = G__62235;
chunk__61245_62222 = G__62236;
count__61246_62223 = G__62237;
i__61247_62224 = G__62238;
continue;
} else {
var queue_62240 = cljs.core.first(seq__61244_62232__$1);
fulcro.client.primitives.rewrite_tempids_in_request_queue(queue_62240,tempids);


var G__62241 = cljs.core.next(seq__61244_62232__$1);
var G__62242 = null;
var G__62243 = (0);
var G__62244 = (0);
seq__61244_62221 = G__62241;
chunk__61245_62222 = G__62242;
count__61246_62223 = G__62243;
i__61247_62224 = G__62244;
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
});})(rec_atom,remotes,map__61234,map__61234__$1,app,send_queues,mutation_merge,map__61235,map__61235__$1,reconciler_options,migrate))
;
var complete_initial_state = (function (){var set_default_locale = ((function (rec_atom,remotes,tempid_migrate,map__61234,map__61234__$1,app,send_queues,mutation_merge,map__61235,map__61235__$1,reconciler_options,migrate){
return (function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.Keyword(null,"en","en",88457073)));
});})(rec_atom,remotes,tempid_migrate,map__61234,map__61234__$1,app,send_queues,mutation_merge,map__61235,map__61235__$1,reconciler_options,migrate))
;
var set_network_markers = ((function (set_default_locale,rec_atom,remotes,tempid_migrate,map__61234,map__61234__$1,app,send_queues,mutation_merge,map__61235,map__61235__$1,reconciler_options,migrate){
return (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword("fulcro.client.network","status","fulcro.client.network/status",570358457),cljs.core.zipmap(remotes,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idle","idle",-2007156861))));
});})(set_default_locale,rec_atom,remotes,tempid_migrate,map__61234,map__61234__$1,app,send_queues,mutation_merge,map__61235,map__61235__$1,reconciler_options,migrate))
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
var config = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,reconciler_options,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"migrate","migrate",-207110743),tempid_migrate,new cljs.core.Keyword(null,"state","state",-1988618099),complete_initial_state,new cljs.core.Keyword(null,"send","send",-652151114),((function (rec_atom,remotes,tempid_migrate,complete_initial_state,map__61234,map__61234__$1,app,send_queues,mutation_merge,map__61235,map__61235__$1,reconciler_options,migrate){
return (function (sends_keyed_by_remote,result_merge_callback){
return fulcro.client.impl.application.server_send(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.deref(rec_atom)),sends_keyed_by_remote,result_merge_callback);
});})(rec_atom,remotes,tempid_migrate,complete_initial_state,map__61234,map__61234__$1,app,send_queues,mutation_merge,map__61235,map__61235__$1,reconciler_options,migrate))
,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"remotes","remotes",1132366312),remotes,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),((function (rec_atom,remotes,tempid_migrate,complete_initial_state,map__61234,map__61234__$1,app,send_queues,mutation_merge,map__61235,map__61235__$1,reconciler_options,migrate){
return (function (reconciler,app_state,ident,props){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,ident,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.sweep_one,cljs.core.merge),props);
});})(rec_atom,remotes,tempid_migrate,complete_initial_state,map__61234,map__61234__$1,app,send_queues,mutation_merge,map__61235,map__61235__$1,reconciler_options,migrate))
,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),((function (rec_atom,remotes,tempid_migrate,complete_initial_state,map__61234,map__61234__$1,app,send_queues,mutation_merge,map__61235,map__61235__$1,reconciler_options,migrate){
return (function (target,source){
return fulcro.client.primitives.merge_handler(mutation_merge,target,source);
});})(rec_atom,remotes,tempid_migrate,complete_initial_state,map__61234,map__61234__$1,app,send_queues,mutation_merge,map__61235,map__61235__$1,reconciler_options,migrate))
,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null)], 0));
var rec = fulcro.client.primitives.reconciler(config);
cljs.core.reset_BANG_(rec_atom,rec);

return rec;
});
fulcro.client.impl.application.initialize_global_error_callbacks = (function fulcro$client$impl$application$initialize_global_error_callbacks(app){
var seq__61269 = cljs.core.seq(cljs.core.keys(new cljs.core.Keyword(null,"networking","networking",586110628).cljs$core$IFn$_invoke$arity$1(app)));
var chunk__61270 = null;
var count__61271 = (0);
var i__61272 = (0);
while(true){
if((i__61272 < count__61271)){
var remote = chunk__61270.cljs$core$IIndexed$_nth$arity$2(null,i__61272);
var cb_atom_62270 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),remote,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(fulcro.util.atom_QMARK_(cb_atom_62270)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_62270,((function (seq__61269,chunk__61270,count__61271,i__61272,cb_atom_62270,remote){
return (function (p1__61267_SHARP_){
if(cljs.core.fn_QMARK_(p1__61267_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__61267_SHARP_,fulcro.client.primitives.app_state(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__61269,chunk__61270,count__61271,i__61272,cb_atom_62270,remote))
);
} else {
}


var G__62275 = seq__61269;
var G__62276 = chunk__61270;
var G__62277 = count__61271;
var G__62278 = (i__61272 + (1));
seq__61269 = G__62275;
chunk__61270 = G__62276;
count__61271 = G__62277;
i__61272 = G__62278;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__61269);
if(temp__5720__auto__){
var seq__61269__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61269__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61269__$1);
var G__62279 = cljs.core.chunk_rest(seq__61269__$1);
var G__62280 = c__4550__auto__;
var G__62281 = cljs.core.count(c__4550__auto__);
var G__62282 = (0);
seq__61269 = G__62279;
chunk__61270 = G__62280;
count__61271 = G__62281;
i__61272 = G__62282;
continue;
} else {
var remote = cljs.core.first(seq__61269__$1);
var cb_atom_62284 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),remote,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(fulcro.util.atom_QMARK_(cb_atom_62284)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_62284,((function (seq__61269,chunk__61270,count__61271,i__61272,cb_atom_62284,remote,seq__61269__$1,temp__5720__auto__){
return (function (p1__61267_SHARP_){
if(cljs.core.fn_QMARK_(p1__61267_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__61267_SHARP_,fulcro.client.primitives.app_state(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__61269,chunk__61270,count__61271,i__61272,cb_atom_62284,remote,seq__61269__$1,temp__5720__auto__))
);
} else {
}


var G__62290 = cljs.core.next(seq__61269__$1);
var G__62291 = null;
var G__62292 = (0);
var G__62293 = (0);
seq__61269 = G__62290;
chunk__61270 = G__62291;
count__61271 = G__62292;
i__61272 = G__62293;
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
fulcro.client.impl.application.read_local = (function fulcro$client$impl$application$read_local(user_read,p__61289,dkey,params){
var map__61290 = p__61289;
var map__61290__$1 = (((((!((map__61290 == null))))?(((((map__61290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61290):map__61290);
var env = map__61290__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61290__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61290__$1,new cljs.core.Keyword(null,"target","target",253001721));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61290__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61290__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
}catch (e61302){var e = e61302;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),372], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mutation ",k," failed with exception",e], 0));
}catch (e61303){if((e61303 instanceof Error)){
var e__47187__auto___62313 = e61303;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),372], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__47187__auto___62313], 0));
} else {
throw e61303;

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
}catch (e61312){var e_62314 = e61312;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),381], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Post mutate failed on dispatch to ",k], 0));
}catch (e61314){if((e61314 instanceof Error)){
var e__47187__auto___62316 = e61314;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),381], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__47187__auto___62316], 0));
} else {
throw e61314;

}
}}
return action_result;
}catch (e61305){var e = e61305;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),384], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mutation ",k," failed with exception"], 0));
}catch (e61308){if((e61308 instanceof Error)){
var e__47187__auto___62319 = e61308;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),384], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__47187__auto___62319], 0));
} else {
throw e61308;

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
