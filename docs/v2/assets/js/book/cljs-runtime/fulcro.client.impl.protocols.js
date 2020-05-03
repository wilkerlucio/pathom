goog.provide('fulcro.client.impl.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
fulcro.client.impl.protocols.IIndexer = function(){};

/**
 * Get the indexes out of the indexer
 */
fulcro.client.impl.protocols.indexes = (function fulcro$client$impl$protocols$indexes(this$){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$impl$protocols$IIndexer$indexes$arity$1 == null)))))){
return this$.fulcro$client$impl$protocols$IIndexer$indexes$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.impl.protocols.indexes[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.indexes["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IIndexer.indexes",this$);
}
}
}
});

/**
 * Index the entire root query
 */
fulcro.client.impl.protocols.index_root = (function fulcro$client$impl$protocols$index_root(this$,x){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$impl$protocols$IIndexer$index_root$arity$2 == null)))))){
return this$.fulcro$client$impl$protocols$IIndexer$index_root$arity$2(this$,x);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.impl.protocols.index_root[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__4434__auto__.call(null,this$,x));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.index_root["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__4431__auto__.call(null,this$,x));
} else {
throw cljs.core.missing_protocol("IIndexer.index-root",this$);
}
}
}
});

/**
 * Add the given active UI component to the index
 */
fulcro.client.impl.protocols.index_component_BANG_ = (function fulcro$client$impl$protocols$index_component_BANG_(this$,component){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$impl$protocols$IIndexer$index_component_BANG_$arity$2 == null)))))){
return this$.fulcro$client$impl$protocols$IIndexer$index_component_BANG_$arity$2(this$,component);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.impl.protocols.index_component_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,component) : m__4434__auto__.call(null,this$,component));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.index_component_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,component) : m__4431__auto__.call(null,this$,component));
} else {
throw cljs.core.missing_protocol("IIndexer.index-component!",this$);
}
}
}
});

/**
 * Drop the given UI component from the index
 */
fulcro.client.impl.protocols.drop_component_BANG_ = (function fulcro$client$impl$protocols$drop_component_BANG_(this$,component){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$impl$protocols$IIndexer$drop_component_BANG_$arity$2 == null)))))){
return this$.fulcro$client$impl$protocols$IIndexer$drop_component_BANG_$arity$2(this$,component);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.impl.protocols.drop_component_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,component) : m__4434__auto__.call(null,this$,component));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.drop_component_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,component) : m__4431__auto__.call(null,this$,component));
} else {
throw cljs.core.missing_protocol("IIndexer.drop-component!",this$);
}
}
}
});

/**
 * Get the ident for the given component (UNIMPLEMENTED AT PRESENT)
 */
fulcro.client.impl.protocols.ref_for = (function fulcro$client$impl$protocols$ref_for(this$,component){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$impl$protocols$IIndexer$ref_for$arity$2 == null)))))){
return this$.fulcro$client$impl$protocols$IIndexer$ref_for$arity$2(this$,component);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.impl.protocols.ref_for[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,component) : m__4434__auto__.call(null,this$,component));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.ref_for["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,component) : m__4431__auto__.call(null,this$,component));
} else {
throw cljs.core.missing_protocol("IIndexer.ref-for",this$);
}
}
}
});

/**
 * Find all components that query for the given keyword or ident.
 */
fulcro.client.impl.protocols.key__GT_components = (function fulcro$client$impl$protocols$key__GT_components(this$,k){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$impl$protocols$IIndexer$key__GT_components$arity$2 == null)))))){
return this$.fulcro$client$impl$protocols$IIndexer$key__GT_components$arity$2(this$,k);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.impl.protocols.key__GT_components[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,k) : m__4434__auto__.call(null,this$,k));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.key__GT_components["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,k) : m__4431__auto__.call(null,this$,k));
} else {
throw cljs.core.missing_protocol("IIndexer.key->components",this$);
}
}
}
});


/**
 * @interface
 */
fulcro.client.impl.protocols.IReconciler = function(){};

/**
 * Cause the current basis time to advance
 */
fulcro.client.impl.protocols.tick_BANG_ = (function fulcro$client$impl$protocols$tick_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$impl$protocols$IReconciler$tick_BANG_$arity$1 == null)))))){
return this$.fulcro$client$impl$protocols$IReconciler$tick_BANG_$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.impl.protocols.tick_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.tick_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IReconciler.tick!",this$);
}
}
}
});

/**
 * Get the unique ID of this reconciler. Used to resolve multiple running apps on a page. Defaults to the root class and a UUID.
 */
fulcro.client.impl.protocols.get_id = (function fulcro$client$impl$protocols$get_id(this$){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$impl$protocols$IReconciler$get_id$arity$1 == null)))))){
return this$.fulcro$client$impl$protocols$IReconciler$get_id$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.impl.protocols.get_id[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.get_id["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IReconciler.get-id",this$);
}
}
}
});

/**
 * Returns the current history atom
 */
fulcro.client.impl.protocols.get_history = (function fulcro$client$impl$protocols$get_history(this$){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$impl$protocols$IReconciler$get_history$arity$1 == null)))))){
return this$.fulcro$client$impl$protocols$IReconciler$get_history$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.impl.protocols.get_history[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.get_history["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IReconciler.get-history",this$);
}
}
}
});

/**
 * Returns an atom containing network activity info.
 */
fulcro.client.impl.protocols.get_network_activity = (function fulcro$client$impl$protocols$get_network_activity(this$){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$impl$protocols$IReconciler$get_network_activity$arity$1 == null)))))){
return this$.fulcro$client$impl$protocols$IReconciler$get_network_activity$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.impl.protocols.get_network_activity[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.get_network_activity["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IReconciler.get-network-activity",this$);
}
}
}
});

fulcro.client.impl.protocols.basis_t = (function fulcro$client$impl$protocols$basis_t(this$){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$impl$protocols$IReconciler$basis_t$arity$1 == null)))))){
return this$.fulcro$client$impl$protocols$IReconciler$basis_t$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.impl.protocols.basis_t[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.basis_t["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IReconciler.basis-t",this$);
}
}
}
});

fulcro.client.impl.protocols.add_root_BANG_ = (function fulcro$client$impl$protocols$add_root_BANG_(reconciler,root_class,target,options){
if((((!((reconciler == null)))) && ((!((reconciler.fulcro$client$impl$protocols$IReconciler$add_root_BANG_$arity$4 == null)))))){
return reconciler.fulcro$client$impl$protocols$IReconciler$add_root_BANG_$arity$4(reconciler,root_class,target,options);
} else {
var x__4433__auto__ = (((reconciler == null))?null:reconciler);
var m__4434__auto__ = (fulcro.client.impl.protocols.add_root_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(reconciler,root_class,target,options) : m__4434__auto__.call(null,reconciler,root_class,target,options));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.add_root_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(reconciler,root_class,target,options) : m__4431__auto__.call(null,reconciler,root_class,target,options));
} else {
throw cljs.core.missing_protocol("IReconciler.add-root!",reconciler);
}
}
}
});

fulcro.client.impl.protocols.remove_root_BANG_ = (function fulcro$client$impl$protocols$remove_root_BANG_(reconciler,target){
if((((!((reconciler == null)))) && ((!((reconciler.fulcro$client$impl$protocols$IReconciler$remove_root_BANG_$arity$2 == null)))))){
return reconciler.fulcro$client$impl$protocols$IReconciler$remove_root_BANG_$arity$2(reconciler,target);
} else {
var x__4433__auto__ = (((reconciler == null))?null:reconciler);
var m__4434__auto__ = (fulcro.client.impl.protocols.remove_root_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(reconciler,target) : m__4434__auto__.call(null,reconciler,target));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.remove_root_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(reconciler,target) : m__4431__auto__.call(null,reconciler,target));
} else {
throw cljs.core.missing_protocol("IReconciler.remove-root!",reconciler);
}
}
}
});

/**
 * Schedule a render if one is not already scheduled.
 */
fulcro.client.impl.protocols.schedule_render_BANG_ = (function fulcro$client$impl$protocols$schedule_render_BANG_(reconciler){
if((((!((reconciler == null)))) && ((!((reconciler.fulcro$client$impl$protocols$IReconciler$schedule_render_BANG_$arity$1 == null)))))){
return reconciler.fulcro$client$impl$protocols$IReconciler$schedule_render_BANG_$arity$1(reconciler);
} else {
var x__4433__auto__ = (((reconciler == null))?null:reconciler);
var m__4434__auto__ = (fulcro.client.impl.protocols.schedule_render_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(reconciler) : m__4434__auto__.call(null,reconciler));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.schedule_render_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(reconciler) : m__4431__auto__.call(null,reconciler));
} else {
throw cljs.core.missing_protocol("IReconciler.schedule-render!",reconciler);
}
}
}
});

/**
 * Schedule a network interaction.
 */
fulcro.client.impl.protocols.schedule_sends_BANG_ = (function fulcro$client$impl$protocols$schedule_sends_BANG_(reconciler){
if((((!((reconciler == null)))) && ((!((reconciler.fulcro$client$impl$protocols$IReconciler$schedule_sends_BANG_$arity$1 == null)))))){
return reconciler.fulcro$client$impl$protocols$IReconciler$schedule_sends_BANG_$arity$1(reconciler);
} else {
var x__4433__auto__ = (((reconciler == null))?null:reconciler);
var m__4434__auto__ = (fulcro.client.impl.protocols.schedule_sends_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(reconciler) : m__4434__auto__.call(null,reconciler));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.schedule_sends_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(reconciler) : m__4431__auto__.call(null,reconciler));
} else {
throw cljs.core.missing_protocol("IReconciler.schedule-sends!",reconciler);
}
}
}
});

/**
 * Add the given ks to the given remote queue of things to be re-rendered. If remote is nil, add to the local UI queue
 */
fulcro.client.impl.protocols.queue_BANG_ = (function fulcro$client$impl$protocols$queue_BANG_(var_args){
var G__50623 = arguments.length;
switch (G__50623) {
case 2:
return fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,ks){
if((((!((reconciler == null)))) && ((!((reconciler.fulcro$client$impl$protocols$IReconciler$queue_BANG_$arity$2 == null)))))){
return reconciler.fulcro$client$impl$protocols$IReconciler$queue_BANG_$arity$2(reconciler,ks);
} else {
var x__4433__auto__ = (((reconciler == null))?null:reconciler);
var m__4434__auto__ = (fulcro.client.impl.protocols.queue_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(reconciler,ks) : m__4434__auto__.call(null,reconciler,ks));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.queue_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(reconciler,ks) : m__4431__auto__.call(null,reconciler,ks));
} else {
throw cljs.core.missing_protocol("IReconciler.queue!",reconciler);
}
}
}
});

fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,ks,remote){
if((((!((reconciler == null)))) && ((!((reconciler.fulcro$client$impl$protocols$IReconciler$queue_BANG_$arity$3 == null)))))){
return reconciler.fulcro$client$impl$protocols$IReconciler$queue_BANG_$arity$3(reconciler,ks,remote);
} else {
var x__4433__auto__ = (((reconciler == null))?null:reconciler);
var m__4434__auto__ = (fulcro.client.impl.protocols.queue_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(reconciler,ks,remote) : m__4434__auto__.call(null,reconciler,ks,remote));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.queue_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(reconciler,ks,remote) : m__4431__auto__.call(null,reconciler,ks,remote));
} else {
throw cljs.core.missing_protocol("IReconciler.queue!",reconciler);
}
}
}
});

fulcro.client.impl.protocols.queue_BANG_.cljs$lang$maxFixedArity = 3;


/**
 * Add the given map of remote->query sends to the queue of things to be sent
 */
fulcro.client.impl.protocols.queue_sends_BANG_ = (function fulcro$client$impl$protocols$queue_sends_BANG_(reconciler,sends){
if((((!((reconciler == null)))) && ((!((reconciler.fulcro$client$impl$protocols$IReconciler$queue_sends_BANG_$arity$2 == null)))))){
return reconciler.fulcro$client$impl$protocols$IReconciler$queue_sends_BANG_$arity$2(reconciler,sends);
} else {
var x__4433__auto__ = (((reconciler == null))?null:reconciler);
var m__4434__auto__ = (fulcro.client.impl.protocols.queue_sends_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(reconciler,sends) : m__4434__auto__.call(null,reconciler,sends));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.queue_sends_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(reconciler,sends) : m__4431__auto__.call(null,reconciler,sends));
} else {
throw cljs.core.missing_protocol("IReconciler.queue-sends!",reconciler);
}
}
}
});

/**
 * Reindex the active UI
 */
fulcro.client.impl.protocols.reindex_BANG_ = (function fulcro$client$impl$protocols$reindex_BANG_(reconciler){
if((((!((reconciler == null)))) && ((!((reconciler.fulcro$client$impl$protocols$IReconciler$reindex_BANG_$arity$1 == null)))))){
return reconciler.fulcro$client$impl$protocols$IReconciler$reindex_BANG_$arity$1(reconciler);
} else {
var x__4433__auto__ = (((reconciler == null))?null:reconciler);
var m__4434__auto__ = (fulcro.client.impl.protocols.reindex_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(reconciler) : m__4434__auto__.call(null,reconciler));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.reindex_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(reconciler) : m__4431__auto__.call(null,reconciler));
} else {
throw cljs.core.missing_protocol("IReconciler.reindex!",reconciler);
}
}
}
});

/**
 * Bring the UI up-to-date with respect to data changes in the given queue. If remote is nil, use local UI queue.
 */
fulcro.client.impl.protocols.reconcile_BANG_ = (function fulcro$client$impl$protocols$reconcile_BANG_(var_args){
var G__50643 = arguments.length;
switch (G__50643) {
case 1:
return fulcro.client.impl.protocols.reconcile_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.impl.protocols.reconcile_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.protocols.reconcile_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (reconciler){
if((((!((reconciler == null)))) && ((!((reconciler.fulcro$client$impl$protocols$IReconciler$reconcile_BANG_$arity$1 == null)))))){
return reconciler.fulcro$client$impl$protocols$IReconciler$reconcile_BANG_$arity$1(reconciler);
} else {
var x__4433__auto__ = (((reconciler == null))?null:reconciler);
var m__4434__auto__ = (fulcro.client.impl.protocols.reconcile_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(reconciler) : m__4434__auto__.call(null,reconciler));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.reconcile_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(reconciler) : m__4431__auto__.call(null,reconciler));
} else {
throw cljs.core.missing_protocol("IReconciler.reconcile!",reconciler);
}
}
}
});

fulcro.client.impl.protocols.reconcile_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,remote){
if((((!((reconciler == null)))) && ((!((reconciler.fulcro$client$impl$protocols$IReconciler$reconcile_BANG_$arity$2 == null)))))){
return reconciler.fulcro$client$impl$protocols$IReconciler$reconcile_BANG_$arity$2(reconciler,remote);
} else {
var x__4433__auto__ = (((reconciler == null))?null:reconciler);
var m__4434__auto__ = (fulcro.client.impl.protocols.reconcile_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(reconciler,remote) : m__4434__auto__.call(null,reconciler,remote));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.reconcile_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(reconciler,remote) : m__4431__auto__.call(null,reconciler,remote));
} else {
throw cljs.core.missing_protocol("IReconciler.reconcile!",reconciler);
}
}
}
});

fulcro.client.impl.protocols.reconcile_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * Send the actual queued network traffic to remotes
 */
fulcro.client.impl.protocols.send_BANG_ = (function fulcro$client$impl$protocols$send_BANG_(reconciler){
if((((!((reconciler == null)))) && ((!((reconciler.fulcro$client$impl$protocols$IReconciler$send_BANG_$arity$1 == null)))))){
return reconciler.fulcro$client$impl$protocols$IReconciler$send_BANG_$arity$1(reconciler);
} else {
var x__4433__auto__ = (((reconciler == null))?null:reconciler);
var m__4434__auto__ = (fulcro.client.impl.protocols.send_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(reconciler) : m__4434__auto__.call(null,reconciler));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.send_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(reconciler) : m__4431__auto__.call(null,reconciler));
} else {
throw cljs.core.missing_protocol("IReconciler.send!",reconciler);
}
}
}
});


/**
 * @interface
 */
fulcro.client.impl.protocols.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
fulcro.client.impl.protocols.tx_intercept = (function fulcro$client$impl$protocols$tx_intercept(c,tx){
if((((!((c == null)))) && ((!((c.fulcro$client$impl$protocols$ITxIntercept$tx_intercept$arity$2 == null)))))){
return c.fulcro$client$impl$protocols$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__4433__auto__ = (((c == null))?null:c);
var m__4434__auto__ = (fulcro.client.impl.protocols.tx_intercept[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(c,tx) : m__4434__auto__.call(null,c,tx));
} else {
var m__4431__auto__ = (fulcro.client.impl.protocols.tx_intercept["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(c,tx) : m__4431__auto__.call(null,c,tx));
} else {
throw cljs.core.missing_protocol("ITxIntercept.tx-intercept",c);
}
}
}
});


//# sourceMappingURL=fulcro.client.impl.protocols.js.map
