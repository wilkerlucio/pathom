goog.provide('fulcro.client.primitives');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Throttle');
goog.require('cljsjs.react');
goog.require('goog.object');
goog.require('fulcro_css.css_protocols');
goog.require('fulcro_css.css_implementation');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('fulcro.history');
goog.require('fulcro.logging');
goog.require('fulcro.tempid');
goog.require('fulcro.transit');
goog.require('clojure.zip');
goog.require('fulcro.client.impl.data_targeting');
goog.require('fulcro.client.impl.protocols');
goog.require('fulcro.client.impl.parser');
goog.require('fulcro.client.network');
goog.require('fulcro.util');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cognitect.transit');










if((typeof fulcro !== 'undefined') && (typeof fulcro.client !== 'undefined') && (typeof fulcro.client.primitives !== 'undefined') && (typeof fulcro.client.primitives.component_registry !== 'undefined')){
} else {
fulcro.client.primitives.component_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Add a component to Fulcro's component registry.  This is used by defsc and defui to ensure that all Fulcro classes
 *   that have been compiled (transitively required) will be accessible for lookup by name.  Not meant for public use,
 *   unless you're creating your own component macro that doesn't directly leverage defsc/defui.
 */
fulcro.client.primitives._register_component_BANG_ = (function fulcro$client$primitives$_register_component_BANG_(k,component_class){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.client.primitives.component_registry,cljs.core.assoc,k,component_class);

return component_class;
});
/**
 * Look up the given component in Fulcro's global component registry. Will only be able to find components that have
 *   been (transitively) required by your application.
 * 
 *   `classname` can be a fully-qualified keyword or symbol.
 */
fulcro.client.primitives.classname__GT_class = (function fulcro$client$primitives$classname__GT_class(classname){
if((classname instanceof cljs.core.Keyword)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fulcro.client.primitives.component_registry),classname);
} else {
if((classname instanceof cljs.core.Symbol)){
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(classname),cljs.core.name(classname));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fulcro.client.primitives.component_registry),k);
} else {
return null;

}
}
});

/**
 * @interface
 */
fulcro.client.primitives.Ident = function(){};

/**
 * Return the ident for this component
 */
fulcro.client.primitives.ident = (function fulcro$client$primitives$ident(this$,props){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$primitives$Ident$ident$arity$2 == null)))))){
return this$.fulcro$client$primitives$Ident$ident$arity$2(this$,props);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.primitives.ident[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,props) : m__4434__auto__.call(null,this$,props));
} else {
var m__4431__auto__ = (fulcro.client.primitives.ident["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,props) : m__4431__auto__.call(null,this$,props));
} else {
throw cljs.core.missing_protocol("Ident.ident",this$);
}
}
}
});


/**
 * @interface
 */
fulcro.client.primitives.IQuery = function(){};

/**
 * Return the component's unbound static query
 */
fulcro.client.primitives.query = (function fulcro$client$primitives$query(this$){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$primitives$IQuery$query$arity$1 == null)))))){
return this$.fulcro$client$primitives$IQuery$query$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.primitives.query[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (fulcro.client.primitives.query["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
fulcro.client.primitives.InitialAppState = function(){};

/**
 * Get the initial state to be used for this component in app state. You are responsible for composing these together.
 */
fulcro.client.primitives.initial_state = (function fulcro$client$primitives$initial_state(clz,params){
if((((!((clz == null)))) && ((!((clz.fulcro$client$primitives$InitialAppState$initial_state$arity$2 == null)))))){
return clz.fulcro$client$primitives$InitialAppState$initial_state$arity$2(clz,params);
} else {
var x__4433__auto__ = (((clz == null))?null:clz);
var m__4434__auto__ = (fulcro.client.primitives.initial_state[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(clz,params) : m__4434__auto__.call(null,clz,params));
} else {
var m__4431__auto__ = (fulcro.client.primitives.initial_state["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(clz,params) : m__4431__auto__.call(null,clz,params));
} else {
throw cljs.core.missing_protocol("InitialAppState.initial-state",clz);
}
}
}
});


/**
 * @interface
 */
fulcro.client.primitives.IPreMerge = function(){};

/**
 * Modify data before merging.
 */
fulcro.client.primitives.pre_merge_STAR_ = (function fulcro$client$primitives$pre_merge_STAR_(this$,data){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 == null)))))){
return this$.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2(this$,data);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.primitives.pre_merge_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,data) : m__4434__auto__.call(null,this$,data));
} else {
var m__4431__auto__ = (fulcro.client.primitives.pre_merge_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,data) : m__4431__auto__.call(null,this$,data));
} else {
throw cljs.core.missing_protocol("IPreMerge.pre-merge*",this$);
}
}
}
});

fulcro.client.primitives.pre_merge = (function fulcro$client$primitives$pre_merge(class$,data){
if((((!((class$ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$primitives$IPreMerge$))))?true:false):false)){
return fulcro.client.primitives.pre_merge_STAR_(class$,data);
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),87], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["pre-merge called with something that is either not a class or does not implement pre-merge: ",class$], 0));
}catch (e56953){if((e56953 instanceof Error)){
var e__48920__auto__ = e56953;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),87], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto__], 0));
} else {
throw e56953;

}
}}
});
fulcro.client.primitives.has_initial_app_state_QMARK_ = (function fulcro$client$primitives$has_initial_app_state_QMARK_(component){
if((!((component == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.fulcro$client$primitives$InitialAppState$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
fulcro.client.primitives.has_ident_QMARK_ = (function fulcro$client$primitives$has_ident_QMARK_(component){
if((!((component == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.fulcro$client$primitives$Ident$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
fulcro.client.primitives.has_query_QMARK_ = (function fulcro$client$primitives$has_query_QMARK_(component){
if((!((component == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.fulcro$client$primitives$IQuery$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
fulcro.client.primitives.has_pre_merge_QMARK_ = (function fulcro$client$primitives$has_pre_merge_QMARK_(component){
if((!((component == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.fulcro$client$primitives$IPreMerge$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Get the initial state of a component. Needed because calling the protocol method from a defui component in clj will not work as expected.
 */
fulcro.client.primitives.get_initial_state = (function fulcro$client$primitives$get_initial_state(class$,params){
var G__56967 = (((((!((class$ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$primitives$InitialAppState$))))?true:false):false))?fulcro.client.primitives.initial_state(class$,params):null);
if((G__56967 == null)){
return null;
} else {
return cljs.core.with_meta(G__56967,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"computed","computed",-1482016762),true], null));
}
});
/**
 * Returns true if the given initial state was computed from a call to get-initial-state.
 */
fulcro.client.primitives.computed_initial_state_QMARK_ = (function fulcro$client$primitives$computed_initial_state_QMARK_(s){
var and__4120__auto__ = cljs.core.map_QMARK_(s);
if(and__4120__auto__){
var G__56973 = s;
var G__56973__$1 = (((G__56973 == null))?null:cljs.core.meta(G__56973));
if((G__56973__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"computed","computed",-1482016762).cljs$core$IFn$_invoke$arity$1(G__56973__$1);
}
} else {
return and__4120__auto__;
}
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.primitives","ident","fulcro.client.primitives/ident",-1688940366),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"missing","missing",362507769),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Symbol("fulcro.util","ident?","fulcro.util/ident?",-2064561335,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"missing","missing",362507769),new cljs.core.Keyword(null,"ident","ident",-742346)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol("fulcro.util","ident?","fulcro.util/ident?",-2064561335,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,fulcro.util.ident_QMARK_], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.primitives","transaction","fulcro.client.primitives/transaction",1435510665),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__56979#","p1__56979#",-291958645,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"p1__56979#","p1__56979#",-291958645,null)),cljs.core.list(new cljs.core.Symbol("fulcro.util","mutation?","fulcro.util/mutation?",-1077955232,null),new cljs.core.Symbol(null,"p1__56979#","p1__56979#",-291958645,null)))),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__56979#","p1__56979#",-291958645,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"p1__56979#","p1__56979#",-291958645,null)),cljs.core.list(new cljs.core.Symbol("util","mutation?","util/mutation?",-1080424299,null),new cljs.core.Symbol(null,"p1__56979#","p1__56979#",-291958645,null)))),(function (p1__56979_SHARP_){
return (((p1__56979_SHARP_ instanceof cljs.core.Keyword)) || (fulcro.util.mutation_QMARK_(p1__56979_SHARP_)));
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56986){
return cljs.core.vector_QMARK_(G__56986);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("fulcro.util","mutation?","fulcro.util/mutation?",-1077955232,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.primitives","pessimistic?","fulcro.client.primitives/pessimistic?",-804432644),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("fulcro.client.primitives","tempid?","fulcro.client.primitives/tempid?",-1763280099,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"tempid?","tempid?",2034653313,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("fulcro.client.primitives","tempid?","fulcro.client.primitives/tempid?",-1763280099,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.primitives.tempid_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56990){
return cljs.core.map_QMARK_(G__56990);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13080__auto__,v__13081__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13081__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("fulcro.client.primitives","tempid?","fulcro.client.primitives/tempid?",-1763280099,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),null));
/**
 * pass-through function for getting history, that enables testing (cannot mock protocols easily)
 */
fulcro.client.primitives.get_history = (function fulcro$client$primitives$get_history(reconciler){
if(cljs.core.truth_(reconciler)){
return fulcro.client.impl.protocols.get_history(reconciler);
} else {
return null;
}
});
/**
 * 
 */
fulcro.client.primitives.get_network_activity = (function fulcro$client$primitives$get_network_activity(reconciler){
if(cljs.core.truth_(reconciler)){
return fulcro.client.impl.protocols.get_network_activity(reconciler);
} else {
return null;
}
});
fulcro.client.primitives.add_basis_time_STAR_ = (function fulcro$client$primitives$add_basis_time_STAR_(p__57002,props,time){
var map__57003 = p__57002;
var map__57003__$1 = (((((!((map__57003 == null))))?(((((map__57003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57003):map__57003);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57003__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.map_QMARK_(props)){
if(cljs.core.seq(children)){
var children__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))):children);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.into.cljs$core$IFn$_invoke$arity$3(props,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (children__$1,map__57003,map__57003__$1,children){
return (function (p1__56998_SHARP_){
return cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__56998_SHARP_));
});})(children__$1,map__57003,map__57003__$1,children))
),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (children__$1,map__57003,map__57003__$1,children){
return (function (p__57008){
var map__57009 = p__57008;
var map__57009__$1 = (((((!((map__57009 == null))))?(((((map__57009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57009):map__57009);
var ast = map__57009__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57009__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57009__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,key);
var ast__$1 = (function (){var G__57011 = ast;
var G__57011__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57011,new cljs.core.Keyword(null,"children","children",-940561982),children__$1):G__57011);
if(cljs.core.pos_int_QMARK_(query)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57011__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__57011,G__57011__$1,x,map__57009,map__57009__$1,ast,key,query,children__$1,map__57003,map__57003__$1,children){
return (function (p1__57000_SHARP_){
var G__57016 = p1__57000_SHARP_;
if(cljs.core.pos_int_QMARK_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__57000_SHARP_))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__57016,new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.dec);
} else {
return G__57016;
}
});})(G__57011,G__57011__$1,x,map__57009,map__57009__$1,ast,key,query,children__$1,map__57003,map__57003__$1,children))
,children__$1));
} else {
return G__57011__$1;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,((cljs.core.sequential_QMARK_(x))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (x,ast__$1,map__57009,map__57009__$1,ast,key,query,children__$1,map__57003,map__57003__$1,children){
return (function (p1__57001_SHARP_){
return (fulcro.client.primitives.add_basis_time_STAR_.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.primitives.add_basis_time_STAR_.cljs$core$IFn$_invoke$arity$3(ast__$1,p1__57001_SHARP_,time) : fulcro.client.primitives.add_basis_time_STAR_.call(null,ast__$1,p1__57001_SHARP_,time));
});})(x,ast__$1,map__57009,map__57009__$1,ast,key,query,children__$1,map__57003,map__57003__$1,children))
,x):(fulcro.client.primitives.add_basis_time_STAR_.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.primitives.add_basis_time_STAR_.cljs$core$IFn$_invoke$arity$3(ast__$1,x,time) : fulcro.client.primitives.add_basis_time_STAR_.call(null,ast__$1,x,time)))], null);
});})(children__$1,map__57003,map__57003__$1,children))
)),children__$1),cljs.core.assoc,new cljs.core.Keyword("fulcro.client.primitives","time","fulcro.client.primitives/time",-138753010),time);
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(props,cljs.core.assoc,new cljs.core.Keyword("fulcro.client.primitives","time","fulcro.client.primitives/time",-138753010),time);
}
} else {
return props;
}
});
/**
 * Recursively add the given basis time to all of the maps in the props. This is part of the UI refresh optimization
 *   algorithm. Children that refresh in isolation could be mis-drawn if a parent subsequently does a re-render without
 *   a query (e.g. local state change). The basis times allow us to detect and avoid that.
 */
fulcro.client.primitives.add_basis_time = (function fulcro$client$primitives$add_basis_time(var_args){
var G__57021 = arguments.length;
switch (G__57021) {
case 2:
return fulcro.client.primitives.add_basis_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.primitives.add_basis_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.add_basis_time.cljs$core$IFn$_invoke$arity$2 = (function (props,time){
return clojure.walk.prewalk((function (ele){
if(cljs.core.map_QMARK_(ele)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(ele,cljs.core.assoc,new cljs.core.Keyword("fulcro.client.primitives","time","fulcro.client.primitives/time",-138753010),time);
} else {
return ele;
}
}),props);
});

fulcro.client.primitives.add_basis_time.cljs$core$IFn$_invoke$arity$3 = (function (q,props,time){
return fulcro.client.primitives.add_basis_time_STAR_((fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1(q) : fulcro.client.primitives.query__GT_ast.call(null,q)),props,time);
});

fulcro.client.primitives.add_basis_time.cljs$lang$maxFixedArity = 3;

/**
 * Returns the basis time from the given props, or ::unset if not available.
 */
fulcro.client.primitives.get_basis_time = (function fulcro$client$primitives$get_basis_time(props){
var or__4131__auto__ = new cljs.core.Keyword("fulcro.client.primitives","time","fulcro.client.primitives/time",-138753010).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"unset","unset",-513298114);
}
});
/**
 * get the current basis time from the reconciler. Used instead of calling the protocol method `basis-t` to facilitate testing.
 */
fulcro.client.primitives.get_current_time = (function fulcro$client$primitives$get_current_time(reconciler){
return fulcro.client.impl.protocols.basis_t(reconciler);
});
/**
 * Collect the static declarations from the defui.
 */
fulcro.client.primitives.collect_statics = (function fulcro$client$primitives$collect_statics(dt){
var split_on_static = (function fulcro$client$primitives$collect_statics_$_split_on_static(forms){
return cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"static","static",-1440077198,null),"null"], null), null)),forms);
});
var split_on_symbol = (function fulcro$client$primitives$collect_statics_$_split_on_symbol(forms){
return cljs.core.split_with(cljs.core.complement(cljs.core.symbol_QMARK_),forms);
});
var dt__$1 = cljs.core.seq(dt);
var dt_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
var statics = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"protocols","protocols",-5615896),cljs.core.PersistentVector.EMPTY], null);
while(true){
if(dt__$1){
var vec__57047 = split_on_static(dt__$1);
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57047,(0),null);
var vec__57050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57047,(1),null);
var seq__57051 = cljs.core.seq(vec__57050);
var first__57052 = cljs.core.first(seq__57051);
var seq__57051__$1 = cljs.core.next(seq__57051);
var _ = first__57052;
var first__57052__$1 = cljs.core.first(seq__57051__$1);
var seq__57051__$2 = cljs.core.next(seq__57051__$1);
var sym = first__57052__$1;
var remaining = seq__57051__$2;
var post = vec__57050;
var dt_SINGLEQUOTE___$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(dt_SINGLEQUOTE_,pre);
if(cljs.core.seq(post)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym,new cljs.core.Symbol(null,"field","field",338095027,null))){
var vec__57056 = cljs.core.split_at((2),remaining);
var field_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57056,(0),null);
var dt__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57056,(1),null);
var G__57816 = cljs.core.seq(dt__$2);
var G__57817 = dt_SINGLEQUOTE___$1;
var G__57818 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields","fields",-1932066230)], null),cljs.core.conj,cljs.core.vec(field_info));
dt__$1 = G__57816;
dt_SINGLEQUOTE_ = G__57817;
statics = G__57818;
continue;
} else {
if((sym instanceof cljs.core.Symbol)){
var vec__57059 = split_on_symbol(remaining);
var protocol_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57059,(0),null);
var dt__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57059,(1),null);
var G__57820 = cljs.core.seq(dt__$2);
var G__57821 = dt_SINGLEQUOTE___$1;
var G__57822 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocols","protocols",-5615896)], null),cljs.core.into,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null),protocol_info));
dt__$1 = G__57820;
dt_SINGLEQUOTE_ = G__57821;
statics = G__57822;
continue;
} else {
throw (new Error("Malformed static"));

}
}
} else {
var G__57825 = null;
var G__57826 = dt_SINGLEQUOTE___$1;
var G__57827 = statics;
dt__$1 = G__57825;
dt_SINGLEQUOTE_ = G__57826;
statics = G__57827;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dt","dt",-368444759),dt_SINGLEQUOTE_,new cljs.core.Keyword(null,"statics","statics",-1984882809),statics], null);
}
break;
}
});
fulcro.client.primitives.validate_statics = (function fulcro$client$primitives$validate_statics(dt){
var temp__5720__auto__ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["IQuery",null,"Ident",null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57062_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__57062_SHARP_),/\//));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,dt)));
if(cljs.core.truth_(temp__5720__auto__)){
var invalid = temp__5720__auto__;
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(invalid)," protocol declaration must appear with `static`."].join('')));
} else {
return null;
}
});
fulcro.client.primitives.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
fulcro.client.primitives._STAR_raf_STAR_ = null;
fulcro.client.primitives._STAR_reconciler_STAR_ = null;
fulcro.client.primitives._STAR_parent_STAR_ = null;
fulcro.client.primitives._STAR_blindly_render_STAR_ = false;
fulcro.client.primitives._STAR_shared_STAR_ = null;
fulcro.client.primitives._STAR_instrument_STAR_ = null;
fulcro.client.primitives._STAR_depth_STAR_ = (0);
fulcro.client.primitives.compute_react_key = (function fulcro$client$primitives$compute_react_key(cl,props){
var temp__5718__auto__ = new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5718__auto__)){
var rk = temp__5718__auto__;
return rk;
} else {
var temp__5718__auto____$1 = new cljs.core.Keyword("fulcro.client.impl.parser","data-path","fulcro.client.impl.parser/data-path",1793359026).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props));
if(cljs.core.truth_(temp__5718__auto____$1)){
var idx = temp__5718__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cl.name),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Returns true if the argument is a component. A component is defined as a *mounted React-based javascript component*.
 * This function returns false for component classes, and also returns false for the output of a Fulcro component factory.
 */
fulcro.client.primitives.component_QMARK_ = (function fulcro$client$primitives$component_QMARK_(x){
if((!((x == null)))){
return x.fulcro$isComponent === true;
} else {
return false;
}
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.primitives","component","fulcro.client.primitives/component",2031982986),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),new cljs.core.Symbol("fulcro.client.primitives","component?","fulcro.client.primitives/component?",-1611256591,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [({"fulcro$isComponent": true}),"null"], null), null)))),cljs.spec.alpha.with_gen(fulcro.client.primitives.component_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([({"fulcro$isComponent": true})]));
})));
/**
 * Returns true if the given `x` is a `defsc` or `defui` component class definition.
 */
fulcro.client.primitives.component_class_QMARK_ = (function fulcro$client$primitives$component_class_QMARK_(x){
return cljs.core.boolean$((function (){var G__57126 = x;
var G__57126__$1 = (((G__57126 == null))?null:G__57126.prototype);
if((G__57126__$1 == null)){
return null;
} else {
return G__57126__$1.fulcro$isComponent;
}
})() === true);
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.primitives","component-class","fulcro.client.primitives/component-class",282793212),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),new cljs.core.Symbol("fulcro.client.primitives","component-class?","fulcro.client.primitives/component-class?",-48802048,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [({"prototype": ({"fulcro$isComponent": true})}),"null"], null), null)))),cljs.spec.alpha.with_gen(fulcro.client.primitives.component_class_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([({"prototype": ({"fulcro$isComponent": true})})]));
})));
/**
 * Returns the component type, regardless of whether the component has been
 *    mounted
 */
fulcro.client.primitives.react_type = (function fulcro$client$primitives$react_type(x){
var or__4131__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.type(x);
}
});
fulcro.client.primitives.state = (function fulcro$client$primitives$state(c){
if(fulcro.client.primitives.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.state;
});
/**
 * PRIVATE: Do not use. GET a RAW react prop
 */
fulcro.client.primitives.get_raw_react_prop = (function fulcro$client$primitives$get_raw_react_prop(c,k){
return goog.object.get(c.props,k);
});
/**
 * Returns true if x is a reconciler.
 */
fulcro.client.primitives.reconciler_QMARK_ = (function fulcro$client$primitives$reconciler_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.fulcro$client$impl$protocols$IReconciler$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
fulcro.client.primitives.get_indexer = (function fulcro$client$primitives$get_indexer(reconciler){
if(fulcro.client.primitives.reconciler_QMARK_(reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
fulcro.client.primitives.sift_idents = (function fulcro$client$primitives$sift_idents(res){
var map__57138 = cljs.core.group_by((function (p1__57137_SHARP_){
return cljs.core.vector_QMARK_(cljs.core.first(p1__57137_SHARP_));
}),res);
var map__57138__$1 = (((((!((map__57138 == null))))?(((((map__57138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57138):map__57138);
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57138__$1,true);
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57138__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,idents),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
/**
 * Attempt to coerce `x` to a reconciler.  Legal inputs are a fulcro application, reconciler, a mounted component, a
 *   map with a :reconciler key, or an atom holding any of the above.
 */
fulcro.client.primitives.any__GT_reconciler = (function fulcro$client$primitives$any__GT_reconciler(x){
if(fulcro.client.primitives.component_QMARK_(x)){
return fulcro.client.primitives.get_raw_react_prop(x,"fulcro$reconciler");
} else {
if(fulcro.client.primitives.reconciler_QMARK_(x)){
return x;
} else {
if((function (){var and__4120__auto__ = (((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (512))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IAssociative$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,x));
if(and__4120__auto__){
return cljs.core.contains_QMARK_(x,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
} else {
return and__4120__auto__;
}
})()){
return new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(x);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x))){
var G__57149 = cljs.core.deref(x);
return (fulcro.client.primitives.any__GT_reconciler.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.any__GT_reconciler.cljs$core$IFn$_invoke$arity$1(G__57149) : fulcro.client.primitives.any__GT_reconciler.call(null,G__57149));
} else {
return null;
}
}
}
}
});
/**
 * Pull a reconciler from a mounted component. See also `any->reconciler`.
 */
fulcro.client.primitives.get_reconciler = (function fulcro$client$primitives$get_reconciler(c){
return fulcro.client.primitives.any__GT_reconciler(c);
});
/**
 * Returns the parent component.
 */
fulcro.client.primitives.parent = (function fulcro$client$primitives$parent(component){
return fulcro.client.primitives.get_raw_react_prop(component,"fulcro$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 * the mount root.
 */
fulcro.client.primitives.depth = (function fulcro$client$primitives$depth(component){
if(fulcro.client.primitives.component_QMARK_(component)){
return fulcro.client.primitives.get_raw_react_prop(component,"fulcro$depth");
} else {
return null;
}
});
/**
 * Returns the components React key.
 */
fulcro.client.primitives.react_key = (function fulcro$client$primitives$react_key(component){
return fulcro.client.primitives.get_raw_react_prop(component,"fulcro$reactKey");
});
/**
 * Return a components props.
 */
fulcro.client.primitives.props = (function fulcro$client$primitives$props(component){
if(fulcro.client.primitives.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return goog.object.get(component.props,"fulcro$value");
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
fulcro.client.primitives.get_state = (function fulcro$client$primitives$get_state(var_args){
var G__57160 = arguments.length;
switch (G__57160) {
case 1:
return fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(fulcro.client.primitives.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = (function (){var temp__5720__auto__ = component.state;
if(cljs.core.truth_(temp__5720__auto__)){
var state = temp__5720__auto__;
return goog.object.get(state,"fulcro$state");
} else {
return null;
}
})();
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cst,((cljs.core.sequential_QMARK_(k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

fulcro.client.primitives.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Get the statically-declared query of IQuery from a given class.
 */
fulcro.client.primitives.get_static_query = (function fulcro$client$primitives$get_static_query(c){
if(fulcro.client.primitives.has_query_QMARK_){
} else {
throw (new Error("Assert failed: has-query?"));
}

if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

return fulcro.client.primitives.query(c);
});
/**
 * Returns true if the given component or one of its parents has a query.
 */
fulcro.client.primitives.some_hasquery_QMARK_ = (function fulcro$client$primitives$some_hasquery_QMARK_(c){
var c__$1 = c;
while(true){
if((c__$1 == null)){
return false;
} else {
if(fulcro.client.primitives.has_query_QMARK_(c__$1)){
return true;
} else {
var G__57871 = fulcro.client.primitives.parent(c__$1);
c__$1 = G__57871;
continue;

}
}
break;
}
});
/**
 * Get the ident for a mounted component OR using a component class.
 * 
 *   That arity-2 will return the ident using the supplied props map.
 * 
 *   The single-arity version should only be used with a mounted component (e.g. `this` from `render`), and will derive the
 *   props that were sent to it most recently.
 */
fulcro.client.primitives.get_ident = (function fulcro$client$primitives$get_ident(var_args){
var G__57168 = arguments.length;
switch (G__57168) {
case 1:
return fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(fulcro.client.primitives.component_QMARK_(x)){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var temp__5718__auto__ = fulcro.client.primitives.props(x);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
return fulcro.client.primitives.ident(x,m);
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),653], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-ident was invoked on component with nil props (this could mean it wasn't yet mounted): ",x], 0));
}catch (e57172){if((e57172 instanceof Error)){
var e__48920__auto__ = e57172;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),653], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto__], 0));
} else {
throw e57172;

}
}}
});

fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2 = (function (class$,props){
if((((!((class$ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$primitives$Ident$))))?true:false):false)){
var id = fulcro.client.primitives.ident(class$,props);
if((!(fulcro.util.ident_QMARK_(id)))){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),666], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-ident returned an invalid ident for class:",class$], 0));
}catch (e57177){if((e57177 instanceof Error)){
var e__48920__auto___57882 = e57177;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),666], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___57882], 0));
} else {
throw e57177;

}
}} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),cljs.core.second(id))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(id),null], null);
} else {
return id;
}
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),668], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-ident called with something that is either not a class or does not implement ident: ",class$], 0));
}catch (e57178){if((e57178 instanceof Error)){
var e__48920__auto__ = e57178;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),668], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto__], 0));
} else {
throw e57178;

}
}}
});

fulcro.client.primitives.get_ident.cljs$lang$maxFixedArity = 2;

/**
 * Returns a string version of the given react component's name.
 */
fulcro.client.primitives.component_name = (function fulcro$client$primitives$component_name(class$){
return class$.displayName;
});
/**
 * Returns a string ID for the query of the given class with qualifier
 */
fulcro.client.primitives.query_id = (function fulcro$client$primitives$query_id(class$,qualifier){
if((class$ == null)){
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),680], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Query ID received no class (if you see this warning, it probably means metadata was lost on your query)",cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY)], 0));
}catch (e57182){if((e57182 instanceof Error)){
var e__48920__auto__ = e57182;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),680], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto__], 0));
} else {
throw e57182;

}
}} else {
var temp__5720__auto__ = fulcro.client.primitives.component_name(class$);
if(cljs.core.truth_(temp__5720__auto__)){
var classname = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(classname),(cljs.core.truth_(qualifier)?["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualifier)].join(''):null)].join('');
} else {
return null;
}
}
});
/**
 * Wraps children in a React.Fragment. Props are optional, like normal DOM elements.
 */
fulcro.client.primitives.fragment = (function fulcro$client$primitives$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57888 = arguments.length;
var i__4731__auto___57889 = (0);
while(true){
if((i__4731__auto___57889 < len__4730__auto___57888)){
args__4736__auto__.push((arguments[i__4731__auto___57889]));

var G__57890 = (i__4731__auto___57889 + (1));
i__4731__auto___57889 = G__57890;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.primitives.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.primitives.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__57187 = ((cljs.core.map_QMARK_(cljs.core.first(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.rest(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({}),args], null));
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57187,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57187,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,React.Fragment,cljs.core.clj__GT_js(props),children);
});

fulcro.client.primitives.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.primitives.fragment.cljs$lang$applyTo = (function (seq57186){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57186));
});

fulcro.client.primitives.create_element = (function fulcro$client$primitives$create_element(class$,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,class$,props,children);
});
/**
 * Create a factory constructor from a component class created with
 *    defui.
 */
fulcro.client.primitives.factory = (function fulcro$client$primitives$factory(var_args){
var G__57197 = arguments.length;
switch (G__57197) {
case 1:
return fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(class$,null);
});

fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__57201){
var map__57202 = p__57201;
var map__57202__$1 = (((((!((map__57202 == null))))?(((((map__57202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57202):map__57202);
var opts = map__57202__$1;
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57202__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57202__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332));
var instrument_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57202__$1,new cljs.core.Keyword(null,"instrument?","instrument?",-1835582396),true);
var qualifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57202__$1,new cljs.core.Keyword(null,"qualifier","qualifier",125841738));
if(cljs.core.fn_QMARK_(class$)){
} else {
throw (new Error("Assert failed: (fn? class)"));
}

return cljs.core.with_meta(((function (map__57202,map__57202__$1,opts,validator,keyfn,instrument_QMARK_,qualifier){
return (function() { 
var fulcro$client$primitives$element_factory__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_((validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(props) : validator.call(null,props)))){
} else {
throw (new Error("Assert failed: (validator props)"));
}
}

if(cljs.core.truth_((function (){var and__4120__auto__ = fulcro.client.primitives._STAR_instrument_STAR_;
if(cljs.core.truth_(and__4120__auto__)){
return instrument_QMARK_;
} else {
return and__4120__auto__;
}
})())){
return fulcro.client.primitives._STAR_instrument_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"factory","factory",63933746),fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"instrument?","instrument?",-1835582396),false))], null));
} else {
var key = (((!((keyfn == null))))?(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(props) : keyfn.call(null,props)):fulcro.client.primitives.compute_react_key(class$,props));
var ref = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__57207 = ref;
if((ref instanceof cljs.core.Keyword)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57207);
} else {
return G__57207;
}
})();
return fulcro.client.primitives.create_element(class$,({"fulcro$reactKey": key, "fulcro$queryid": fulcro.client.primitives.query_id(class$,qualifier), "key": key, "ref": ref__$1, "fulcro$reconciler": fulcro.client.primitives._STAR_reconciler_STAR_, "fulcro$instrument": fulcro.client.primitives._STAR_instrument_STAR_, "fulcro$parent": fulcro.client.primitives._STAR_parent_STAR_, "fulcro$depth": fulcro.client.primitives._STAR_depth_STAR_, "fulcro$value": props, "fulcro$shared": fulcro.client.primitives._STAR_shared_STAR_}),(function (){var or__4131__auto__ = fulcro.util.force_children(children);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
}
};
var fulcro$client$primitives$element_factory = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__57903__i = 0, G__57903__a = new Array(arguments.length -  1);
while (G__57903__i < G__57903__a.length) {G__57903__a[G__57903__i] = arguments[G__57903__i + 1]; ++G__57903__i;}
  children = new cljs.core.IndexedSeq(G__57903__a,0,null);
} 
return fulcro$client$primitives$element_factory__delegate.call(this,props,children);};
fulcro$client$primitives$element_factory.cljs$lang$maxFixedArity = 1;
fulcro$client$primitives$element_factory.cljs$lang$applyTo = (function (arglist__57904){
var props = cljs.core.first(arglist__57904);
var children = cljs.core.rest(arglist__57904);
return fulcro$client$primitives$element_factory__delegate(props,children);
});
fulcro$client$primitives$element_factory.cljs$core$IFn$_invoke$arity$variadic = fulcro$client$primitives$element_factory__delegate;
return fulcro$client$primitives$element_factory;
})()
;})(map__57202,map__57202__$1,opts,validator,keyfn,instrument_QMARK_,qualifier))
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"queryid","queryid",-271432056),fulcro.client.primitives.query_id(class$,qualifier),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),qualifier], null));
});

fulcro.client.primitives.factory.cljs$lang$maxFixedArity = 2;

/**
 * Takes a state map that may contain normalized queries and a query ID. Returns the stored query or nil.
 */
fulcro.client.primitives.denormalize_query = (function fulcro$client$primitives$denormalize_query(state_map,ID){
var get_stored_query = (function (id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),id,new cljs.core.Keyword(null,"query","query",-1288509510)], null));
});
var temp__5720__auto__ = get_stored_query(ID);
if(cljs.core.truth_(temp__5720__auto__)){
var normalized_query = temp__5720__auto__;
return clojure.walk.prewalk(((function (normalized_query,temp__5720__auto__,get_stored_query){
return (function (ele){
var temp__5718__auto__ = (function (){var and__4120__auto__ = typeof ele === 'string';
if(and__4120__auto__){
return get_stored_query(ele);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var q = temp__5718__auto__;
return q;
} else {
return ele;
}
});})(normalized_query,temp__5720__auto__,get_stored_query))
,normalized_query);
} else {
return null;
}
});
fulcro.client.primitives.get_query_by_id = (function fulcro$client$primitives$get_query_by_id(state_map,class$,queryid){
var query = (function (){var or__4131__auto__ = fulcro.client.primitives.denormalize_query(state_map,queryid);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return fulcro.client.primitives.get_static_query(class$);
}
})();
return cljs.core.with_meta(query,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),class$,new cljs.core.Keyword(null,"queryid","queryid",-271432056),queryid], null));
});
fulcro.client.primitives.is_factory_QMARK_ = (function fulcro$client$primitives$is_factory_QMARK_(class_or_factory){
return ((cljs.core.fn_QMARK_(class_or_factory)) && (cljs.core.contains_QMARK_(cljs.core.meta(class_or_factory),new cljs.core.Keyword(null,"qualifier","qualifier",125841738))));
});
fulcro.client.primitives._STAR_query_state_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
/**
 * Get the query id that is cached in the component's props.
 */
fulcro.client.primitives.get_query_id = (function fulcro$client$primitives$get_query_id(component){
if(fulcro.client.primitives.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return fulcro.client.primitives.get_raw_react_prop(component,"fulcro$queryid");
});
/**
 * Get the query for the given class or factory. If called without a state map, then you'll get the declared static
 *   query of the class. If a state map is supplied, then the dynamically set queries in that state will result in
 *   the current dynamically-set query according to that state.
 */
fulcro.client.primitives.get_query = (function fulcro$client$primitives$get_query(var_args){
var G__57220 = arguments.length;
switch (G__57220) {
case 1:
return fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1 = (function (class_or_factory){
return fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(class_or_factory,fulcro.client.primitives._STAR_query_state_STAR_);
});

fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2 = (function (class_or_factory,state_map){
var _STAR_query_state_STAR__orig_val__57222 = fulcro.client.primitives._STAR_query_state_STAR_;
var _STAR_query_state_STAR__temp_val__57223 = state_map;
fulcro.client.primitives._STAR_query_state_STAR_ = _STAR_query_state_STAR__temp_val__57223;

try{var class$ = ((fulcro.client.primitives.is_factory_QMARK_(class_or_factory))?new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_or_factory)):((fulcro.client.primitives.component_QMARK_(class_or_factory))?fulcro.client.primitives.react_type(class_or_factory):class_or_factory
));
var qualifier = ((fulcro.client.primitives.is_factory_QMARK_(class_or_factory))?new cljs.core.Keyword(null,"qualifier","qualifier",125841738).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_or_factory)):null);
var queryid = ((fulcro.client.primitives.component_QMARK_(class_or_factory))?fulcro.client.primitives.get_query_id(class_or_factory):fulcro.client.primitives.query_id(class$,qualifier));
if(cljs.core.truth_((function (){var and__4120__auto__ = class$;
if(cljs.core.truth_(and__4120__auto__)){
return fulcro.client.primitives.has_query_QMARK_(class$);
} else {
return and__4120__auto__;
}
})())){
return fulcro.client.primitives.get_query_by_id(state_map,class$,queryid);
} else {
return null;
}
}finally {fulcro.client.primitives._STAR_query_state_STAR_ = _STAR_query_state_STAR__orig_val__57222;
}});

fulcro.client.primitives.get_query.cljs$lang$maxFixedArity = 2;

fulcro.client.primitives.link_element = (function fulcro$client$primitives$link_element(element){
return clojure.walk.prewalk((function fulcro$client$primitives$link_element_$_link_element_helper(ele){
var map__57227 = cljs.core.meta(ele);
var map__57227__$1 = (((((!((map__57227 == null))))?(((((map__57227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57227):map__57227);
var queryid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57227__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
if(cljs.core.truth_(queryid)){
return queryid;
} else {
return ele;
}
}),element);
});
fulcro.client.primitives.deep_merge = (function fulcro$client$primitives$deep_merge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57917 = arguments.length;
var i__4731__auto___57918 = (0);
while(true){
if((i__4731__auto___57918 < len__4730__auto___57917)){
args__4736__auto__.push((arguments[i__4731__auto___57918]));

var G__57919 = (i__4731__auto___57918 + (1));
i__4731__auto___57918 = G__57919;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.primitives.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.primitives.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (xs){

if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,xs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,fulcro.client.primitives.deep_merge,xs);
} else {
return cljs.core.last(xs);
}
});

fulcro.client.primitives.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.primitives.deep_merge.cljs$lang$applyTo = (function (seq57232){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57232));
});

/**
 * Determines if there are query elements in the present query that need to be normalized as well. If so, it does so.
 *   Returns the new state map.
 */
fulcro.client.primitives.normalize_query_elements = (function fulcro$client$primitives$normalize_query_elements(state_map,query){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function fulcro$client$primitives$normalize_query_elements_$_normalize_query_elements_reducer(state,ele){
var parameterized_QMARK_ = cljs.core.seq_QMARK_(ele);
var raw_element = ((parameterized_QMARK_)?cljs.core.first(ele):ele);
if(fulcro.util.union_QMARK_(raw_element)){
var union_alternates = cljs.core.first(cljs.core.vals(raw_element));
var union_meta = cljs.core.meta(union_alternates);
var normalized_union_alternates = cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.link_element,union_alternates)),union_meta);
var union_query_id = new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(union_alternates));
if(cljs.core.truth_(union_query_id)){
} else {
throw (new Error(["Assert failed: ","Union query has an ID. Did you use extended get-query?","\n","union-query-id"].join('')));
}

return fulcro.client.primitives.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),cljs.core.PersistentArrayMap.createAsIfByAssoc([union_query_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),normalized_union_alternates,new cljs.core.Keyword(null,"id","id",-1388402092),union_query_id], null)])], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (union_alternates,union_meta,normalized_union_alternates,union_query_id,parameterized_QMARK_,raw_element){
return (function fulcro$client$primitives$normalize_query_elements_$_normalize_query_elements_reducer_$_normalize_union_reducer(s,p__57240){
var vec__57243 = p__57240;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57243,(0),null);
var subquery = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57243,(1),null);
return (fulcro.client.primitives.normalize_query.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.normalize_query.cljs$core$IFn$_invoke$arity$2(s,subquery) : fulcro.client.primitives.normalize_query.call(null,s,subquery));
});})(union_alternates,union_meta,normalized_union_alternates,union_query_id,parameterized_QMARK_,raw_element))
,state,union_alternates)], 0));
} else {
if(fulcro.util.join_QMARK_(raw_element)){
var G__57246 = state;
var G__57247 = fulcro.util.join_value(raw_element);
return (fulcro.client.primitives.normalize_query.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.normalize_query.cljs$core$IFn$_invoke$arity$2(G__57246,G__57247) : fulcro.client.primitives.normalize_query.call(null,G__57246,G__57247));
} else {
return state;

}
}
}),state_map,query);
});
/**
 * Find all of the elements (only at the top level) of the given query and replace them
 *   with their query ID
 */
fulcro.client.primitives.link_query = (function fulcro$client$primitives$link_query(query){
var metadata = cljs.core.meta(query);
return cljs.core.with_meta(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.link_element,query),metadata);
});
/**
 * Given a state map and a query, returns a state map with the query normalized into the database. Query fragments
 *   that already appear in the state will not be added. 
 */
fulcro.client.primitives.normalize_query = (function fulcro$client$primitives$normalize_query(state_map,query){
var new_state = fulcro.client.primitives.normalize_query_elements(state_map,query);
var new_state__$1 = (((new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249).cljs$core$IFn$_invoke$arity$1(new_state) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),cljs.core.PersistentArrayMap.EMPTY):new_state);
var top_query = fulcro.client.primitives.link_query(query);
var temp__5718__auto__ = (function (){var G__57251 = query;
var G__57251__$1 = (((G__57251 == null))?null:cljs.core.meta(G__57251));
if((G__57251__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__57251__$1);
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var queryid = temp__5718__auto__;
return fulcro.client.primitives.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),cljs.core.PersistentArrayMap.createAsIfByAssoc([queryid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),top_query,new cljs.core.Keyword(null,"id","id",-1388402092),queryid], null)])], null),new_state__$1], 0));
} else {
return new_state__$1;
}
});
/**
 * Put a query in app state.
 *   NOTE: Indexes must be rebuilt after setting a query, so this function should primarily be used to build
 *   up an initial app state.
 */
fulcro.client.primitives.set_query_STAR_ = (function fulcro$client$primitives$set_query_STAR_(state_map,class_or_factory,p__57255){
var map__57256 = p__57255;
var map__57256__$1 = (((((!((map__57256 == null))))?(((((map__57256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57256):map__57256);
var args = map__57256__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57256__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var queryid = (((class_or_factory == null))?null:(cljs.core.truth_((function (){var G__57258 = class_or_factory;
var G__57258__$1 = (((G__57258 == null))?null:cljs.core.meta(G__57258));
if((G__57258__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__57258__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
}
})())?(function (){var G__57262 = class_or_factory;
var G__57262__$1 = (((G__57262 == null))?null:cljs.core.meta(G__57262));
if((G__57262__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__57262__$1);
}
})():fulcro.client.primitives.query_id(class_or_factory,null)
));
var component = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_or_factory));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return class_or_factory;
}
})();
var setq_STAR_ = ((function (queryid,component,map__57256,map__57256__$1,args,query){
return (function (state){
return fulcro.client.primitives.normalize_query(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),cljs.core.dissoc,queryid),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(query,cljs.core.assoc,new cljs.core.Keyword(null,"queryid","queryid",-271432056),queryid,new cljs.core.Keyword(null,"component","component",1555936782),component));
});})(queryid,component,map__57256,map__57256__$1,args,query))
;
if(typeof queryid === 'string'){
var G__57263 = state_map;
if(cljs.core.contains_QMARK_(args,new cljs.core.Keyword(null,"query","query",-1288509510))){
return setq_STAR_(G__57263);
} else {
return G__57263;
}
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),924], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Set query failed. There was no query ID. Use a class or factory for the second argument."], 0));
}catch (e57264){if((e57264 instanceof Error)){
var e__48920__auto___57938 = e57264;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),924], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___57938], 0));
} else {
throw e57264;

}
}
return state_map;
}
});
/**
 * Gather the keys that would be considered part of the refresh set for the given query.
 * 
 *   E.g. [:a {:j [:b]} {:u {:x [:l] :y [:k]}}] ==> #{:a :j :u}
 */
fulcro.client.primitives.gather_keys = (function fulcro$client$primitives$gather_keys(query){
if(cljs.core.vector_QMARK_(query)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function fulcro$client$primitives$gather_keys_$_gather_keys_reducer(rv,e){
if((e instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rv,e);
} else {
if(((fulcro.util.ident_QMARK_(e)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(e))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rv,cljs.core.first(e));
} else {
if(((cljs.core.list_QMARK_(e)) && ((cljs.core.first(e) instanceof cljs.core.Keyword)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rv,cljs.core.first(e));
} else {
if(((fulcro.util.join_QMARK_(e)) && (fulcro.util.ident_QMARK_(fulcro.util.join_key(e))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(fulcro.util.join_key(e)))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rv,cljs.core.first(fulcro.util.join_key(e)));
} else {
if(((fulcro.util.join_QMARK_(e)) && ((fulcro.util.join_key(e) instanceof cljs.core.Keyword)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rv,fulcro.util.join_key(e));
} else {
return rv;

}
}
}
}
}
}),cljs.core.PersistentHashSet.EMPTY,query);
} else {
if(cljs.core.map_QMARK_(query)){
return cljs.core.set(cljs.core.keys(query));
} else {
return cljs.core.PersistentHashSet.EMPTY;

}
}
});
fulcro.client.primitives.normalize_STAR_ = (function fulcro$client$primitives$normalize_STAR_(query,data,refs,union_seen,transform){
var data__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = transform;
if(cljs.core.truth_(and__4120__auto__)){
return (!(cljs.core.vector_QMARK_(data)));
} else {
return and__4120__auto__;
}
})())?(transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(query,data) : transform.call(null,query,data)):data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data__$1;
} else {
if(cljs.core.map_QMARK_(query)){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
var ident = (((((!((class$ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$primitives$Ident$))))?true:false):false))?fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(class$,data__$1):null);
if((!((ident == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__57272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(ident));
var G__57273 = data__$1;
var G__57274 = refs;
var G__57275 = union_seen;
var G__57276 = transform;
return (fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$5 ? fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$5(G__57272,G__57273,G__57274,G__57275,G__57276) : fulcro.client.primitives.normalize_STAR_.call(null,G__57272,G__57273,G__57274,G__57275,G__57276));
})(),cljs.core.assoc,new cljs.core.Keyword("fulcro.client.primitives","tag","fulcro.client.primitives/tag",649496853),cljs.core.first(ident));
} else {
throw (new Error("Union components must implement Ident"));
}
} else {
if(cljs.core.vector_QMARK_(data__$1)){
return data__$1;
} else {
var q = cljs.core.seq(query);
var ret = data__$1;
while(true){
if((!((q == null)))){
var expr = cljs.core.first(q);
if(fulcro.util.join_QMARK_(expr)){
var vec__57292 = fulcro.util.join_entry(expr);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57292,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57292,(1),null);
var recursive_QMARK_ = fulcro.util.recursion_QMARK_(sel);
var union_entry = ((fulcro.util.union_QMARK_(expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?(((!((union_seen == null))))?union_seen:query):sel);
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sel__$1));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,k);
if(((recursive_QMARK_) && (fulcro.util.ident_QMARK_(v)))){
var G__57945 = cljs.core.next(q);
var G__57946 = ret;
q = G__57945;
ret = G__57946;
continue;
} else {
if(cljs.core.map_QMARK_(v)){
var x = (fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$5 ? fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$5(sel__$1,v,refs,union_entry,transform) : fulcro.client.primitives.normalize_STAR_.call(null,sel__$1,v,refs,union_entry,transform));
if((!((((class$ == null)) || ((!((((!((class$ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$primitives$Ident$))))?true:false):false)))))))){
var i = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(class$,x);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(i),cljs.core.second(i)], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));

var G__57947 = cljs.core.next(q);
var G__57948 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,i);
q = G__57947;
ret = G__57948;
continue;
} else {
var G__57949 = cljs.core.next(q);
var G__57950 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,x);
q = G__57949;
ret = G__57950;
continue;
}
} else {
if(((cljs.core.vector_QMARK_(v)) && ((!(fulcro.util.ident_QMARK_(v)))) && ((!(fulcro.util.ident_QMARK_(cljs.core.first(v))))))){
var xs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,vec__57292,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (p1__57268_SHARP_){
return (fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$5 ? fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$5(sel__$1,p1__57268_SHARP_,refs,union_entry,transform) : fulcro.client.primitives.normalize_STAR_.call(null,sel__$1,p1__57268_SHARP_,refs,union_entry,transform));
});})(q,ret,vec__57292,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
),v);
if((!((((class$ == null)) || ((!((((!((class$ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$primitives$Ident$))))?true:false):false)))))))){
var is = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,xs,vec__57292,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (p1__57270_SHARP_){
return fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(class$,p1__57270_SHARP_);
});})(q,ret,xs,vec__57292,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
),xs);
if(cljs.core.vector_QMARK_(sel__$1)){
if(cljs.core.empty_QMARK_(is)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__57292,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (refs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__57292,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (m,p__57299){
var vec__57300 = p__57299;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57300,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57300,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__57292,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
,refs__$1,cljs.core.zipmap(is,xs));
});})(q,ret,is,xs,vec__57292,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
);
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__57292,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__57292,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (ret__$1,p__57303){
var vec__57304 = p__57303;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57304,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57304,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__57292,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
,refs_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__57292,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
);
}

var G__57958 = cljs.core.next(q);
var G__57959 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,is);
q = G__57958;
ret = G__57959;
continue;
} else {
var G__57960 = cljs.core.next(q);
var G__57961 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,xs);
q = G__57960;
ret = G__57961;
continue;
}
} else {
if((v == null)){
var G__57962 = cljs.core.next(q);
var G__57963 = ret;
q = G__57962;
ret = G__57963;
continue;
} else {
var G__57964 = cljs.core.next(q);
var G__57965 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__57964;
ret = G__57965;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_(expr))?cljs.core.first(expr):expr);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,k);
if((v == null)){
var G__57968 = cljs.core.next(q);
var G__57969 = ret;
q = G__57968;
ret = G__57969;
continue;
} else {
var G__57970 = cljs.core.next(q);
var G__57971 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__57970;
ret = G__57971;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
/**
 * Given a component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
fulcro.client.primitives.tree__GT_db = (function fulcro$client$primitives$tree__GT_db(var_args){
var G__57308 = arguments.length;
switch (G__57308) {
case 2:
return fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$3(x,data,false);
});

fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
return fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$4(x,data,merge_idents,null);
});

fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$4 = (function (x,data,merge_idents,transform){
var refs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var x__$1 = ((cljs.core.vector_QMARK_(x))?x:fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(x,data));
var ret = fulcro.client.primitives.normalize_STAR_(x__$1,data,refs,null,transform);
if(merge_idents){
var refs_SINGLEQUOTE_ = cljs.core.deref(refs);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ret,refs_SINGLEQUOTE_], 0));
} else {
return cljs.core.with_meta(ret,cljs.core.deref(refs));
}
});

fulcro.client.primitives.tree__GT_db.cljs$lang$maxFixedArity = 4;

fulcro.client.primitives.focused_join = (function fulcro$client$primitives$focused_join(expr,ks,full_expr,union_expr){
var expr_meta = cljs.core.meta(expr);
var expr_SINGLEQUOTE_ = ((cljs.core.map_QMARK_(expr))?(function (){var join_value = cljs.core.second(cljs.core.first(expr));
var join_value__$1 = ((((fulcro.util.recursion_QMARK_(join_value)) && (cljs.core.seq(ks))))?(((!((union_expr == null))))?union_expr:full_expr):join_value);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.ffirst(expr),(fulcro.client.primitives.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.primitives.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3(join_value__$1,ks,null) : fulcro.client.primitives.focus_query_STAR_.call(null,join_value__$1,ks,null))]);
})():((cljs.core.seq_QMARK_(expr))?(new cljs.core.List(null,(function (){var G__57309 = cljs.core.first(expr);
var G__57310 = ks;
var G__57311 = null;
var G__57312 = null;
return (fulcro.client.primitives.focused_join.cljs$core$IFn$_invoke$arity$4 ? fulcro.client.primitives.focused_join.cljs$core$IFn$_invoke$arity$4(G__57309,G__57310,G__57311,G__57312) : fulcro.client.primitives.focused_join.call(null,G__57309,G__57310,G__57311,G__57312));
})(),(new cljs.core.List(null,cljs.core.second(expr),null,(1),null)),(2),null)):expr
));
var G__57313 = expr_SINGLEQUOTE_;
if((!((expr_meta == null)))){
return cljs.core.with_meta(G__57313,expr_meta);
} else {
return G__57313;
}
});
fulcro.client.primitives.focus_query_STAR_ = (function fulcro$client$primitives$focus_query_STAR_(query,path,union_expr){
if(cljs.core.empty_QMARK_(path)){
return query;
} else {
var vec__57314 = path;
var seq__57315 = cljs.core.seq(vec__57314);
var first__57316 = cljs.core.first(seq__57315);
var seq__57315__$1 = cljs.core.next(seq__57315);
var k = first__57316;
var ks = seq__57315__$1;
var match = ((function (vec__57314,seq__57315,first__57316,seq__57315__$1,k,ks){
return (function fulcro$client$primitives$focus_query_STAR__$_match(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,fulcro.util.join_key(x));
});})(vec__57314,seq__57315,first__57316,seq__57315__$1,k,ks))
;
var value = ((function (vec__57314,seq__57315,first__57316,seq__57315__$1,k,ks){
return (function fulcro$client$primitives$focus_query_STAR__$_value(x){
return fulcro.client.primitives.focused_join(x,ks,query,union_expr);
});})(vec__57314,seq__57315,first__57316,seq__57315__$1,k,ks))
;
if(cljs.core.map_QMARK_(query)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,(function (){var G__57317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,k);
var G__57318 = ks;
var G__57319 = query;
return (fulcro.client.primitives.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.primitives.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3(G__57317,G__57318,G__57319) : fulcro.client.primitives.focus_query_STAR_.call(null,G__57317,G__57318,G__57319));
})()]);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(match),cljs.core.map.cljs$core$IFn$_invoke$arity$1(value),cljs.core.take.cljs$core$IFn$_invoke$arity$1((1))),query);
}
}
});
/**
 * Given a query, focus it along the specified path.
 * 
 *   Examples:
 *  (focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (fulcro.client.primitives/focus-query [{:foo [:bar :baz]} :woz] [:foo :bar])
 *  => [{:foo [:bar]}]
 */
fulcro.client.primitives.focus_query = (function fulcro$client$primitives$focus_query(query,path){
return fulcro.client.primitives.focus_query_STAR_(query,path,null);
});
fulcro.client.primitives.focus_subquery_union_STAR_ = (function fulcro$client$primitives$focus_subquery_union_STAR_(query_ast,sub_ast){
var s_index = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__57320_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"union-key","union-key",1529707234).cljs$core$IFn$_invoke$arity$1(p1__57320_SHARP_),p1__57320_SHARP_],null));
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s_index){
return (function (children,p__57321){
var map__57322 = p__57321;
var map__57322__$1 = (((((!((map__57322 == null))))?(((((map__57322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57322):map__57322);
var union_entry = map__57322__$1;
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57322__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_index,union_key);
if(cljs.core.truth_(temp__5718__auto__)){
var sub = temp__5718__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,(fulcro.client.primitives.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2(union_entry,sub) : fulcro.client.primitives.focus_subquery_STAR_.call(null,union_entry,sub)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,union_entry);
}
});})(s_index))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(query_ast)));
});
fulcro.client.primitives.focus_subquery_STAR_ = (function fulcro$client$primitives$focus_subquery_STAR_(query_ast,sub_ast){
var q_index = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__57324_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__57324_SHARP_),p1__57324_SHARP_],null));
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(query_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q_index){
return (function (children,p__57325){
var map__57326 = p__57325;
var map__57326__$1 = (((((!((map__57326 == null))))?(((((map__57326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57326):map__57326);
var focus = map__57326__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57326__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57326__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(q_index,key);
if(cljs.core.truth_(temp__5718__auto__)){
var source = temp__5718__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"join","join",-758861890),type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(source)], 0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,(fulcro.client.primitives.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2(source,focus) : fulcro.client.primitives.focus_subquery_STAR_.call(null,source,focus)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"union","union",2142937499),type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(source)], 0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,fulcro.client.primitives.focus_subquery_union_STAR_(source,focus));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,source);

}
}
} else {
return children;
}
});})(q_index))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast)));
});
/**
 * Given a query, focus it along the specified query expression.
 * 
 *   Examples:
 *  (focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (fulcro.client.primitives/focus-query [{:foo [:bar :baz]} :woz] [{:foo [:bar]} :woz])
 *  => [{:foo [:bar]} :woz]
 */
fulcro.client.primitives.focus_subquery = (function fulcro$client$primitives$focus_subquery(query,sub_query){
var query_ast = (fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1(query) : fulcro.client.primitives.query__GT_ast.call(null,query));
var sub_ast = (fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1(sub_query) : fulcro.client.primitives.query__GT_ast.call(null,sub_query));
var G__57328 = fulcro.client.primitives.focus_subquery_STAR_(query_ast,sub_ast);
return (fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1(G__57328) : fulcro.client.primitives.ast__GT_query.call(null,G__57328));
});
/**
 * Given a query expression return its key.
 */
fulcro.client.primitives.expr__GT_key = (function fulcro$client$primitives$expr__GT_key(expr){
if((expr instanceof cljs.core.Keyword)){
return expr;
} else {
if(cljs.core.map_QMARK_(expr)){
return cljs.core.ffirst(expr);
} else {
if(cljs.core.seq_QMARK_(expr)){
var expr_SINGLEQUOTE_ = cljs.core.first(expr);
if(cljs.core.map_QMARK_(expr_SINGLEQUOTE_)){
return cljs.core.ffirst(expr_SINGLEQUOTE_);
} else {
return null;
}
} else {
if(fulcro.util.ident_QMARK_(expr)){
var G__57329 = expr;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(expr))){
return cljs.core.first(G__57329);
} else {
return G__57329;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid query expr ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
});
/**
 * Return a zipper on a query expression.
 */
fulcro.client.primitives.query_zip = (function fulcro$client$primitives$query_zip(root){
return clojure.zip.zipper((function (p1__57330_SHARP_){
return ((cljs.core.vector_QMARK_(p1__57330_SHARP_)) || (cljs.core.map_QMARK_(p1__57330_SHARP_)) || (cljs.core.seq_QMARK_(p1__57330_SHARP_)));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_(node))?cljs.core.vec(children):((cljs.core.map_QMARK_(node))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_(node))?children:null)));
return cljs.core.with_meta(ret,cljs.core.meta(node));
}),root);
});
/**
 * Move from the current zipper location to the specified key. loc must be a
 * hash map node.
 */
fulcro.client.primitives.move_to_key = (function fulcro$client$primitives$move_to_key(loc,k){
var loc__$1 = clojure.zip.down(loc);
while(true){
var node = clojure.zip.node(loc__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.first(node))){
return clojure.zip.right(clojure.zip.down(loc__$1));
} else {
var G__57985 = clojure.zip.right(loc__$1);
loc__$1 = G__57985;
continue;
}
break;
}
});
/**
 * Given a query and a path into a query return a zipper focused at the location
 * specified by the path. This location can be replaced to customize / alter
 * the query.
 */
fulcro.client.primitives.query_template = (function fulcro$client$primitives$query_template(query,path){
var query_template_STAR_ = (function fulcro$client$primitives$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_(path__$1)){
return loc;
} else {
var node = clojure.zip.node(loc);
if(cljs.core.vector_QMARK_(node)){
var G__57986 = clojure.zip.down(loc);
var G__57987 = path__$1;
loc = G__57986;
path__$1 = G__57987;
continue;
} else {
var vec__57335 = path__$1;
var seq__57336 = cljs.core.seq(vec__57335);
var first__57337 = cljs.core.first(seq__57336);
var seq__57336__$1 = cljs.core.next(seq__57336);
var k = first__57337;
var ks = seq__57336__$1;
var k_SINGLEQUOTE_ = fulcro.client.primitives.expr__GT_key(node);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,k_SINGLEQUOTE_)){
if(((cljs.core.map_QMARK_(node)) || (((cljs.core.seq_QMARK_(node)) && (cljs.core.map_QMARK_(cljs.core.first(node))))))){
var loc_SINGLEQUOTE_ = fulcro.client.primitives.move_to_key((function (){var G__57338 = loc;
if(cljs.core.seq_QMARK_(node)){
return clojure.zip.down(G__57338);
} else {
return G__57338;
}
})(),k);
var node_SINGLEQUOTE_ = clojure.zip.node(loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_(node_SINGLEQUOTE_)){
if(cljs.core.seq(ks)){
var G__57988 = clojure.zip.replace(loc_SINGLEQUOTE_,clojure.zip.node(fulcro.client.primitives.move_to_key(loc_SINGLEQUOTE_,cljs.core.first(ks))));
var G__57989 = cljs.core.next(ks);
loc = G__57988;
path__$1 = G__57989;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__57990 = loc_SINGLEQUOTE_;
var G__57991 = ks;
loc = G__57990;
path__$1 = G__57991;
continue;
}
} else {
var G__57992 = clojure.zip.right(clojure.zip.down(clojure.zip.down(clojure.zip.down(loc))));
var G__57993 = ks;
loc = G__57992;
path__$1 = G__57993;
continue;
}
} else {
var G__57994 = clojure.zip.right(loc);
var G__57995 = path__$1;
loc = G__57994;
path__$1 = G__57995;
continue;
}
}
}
break;
}
});
return query_template_STAR_(fulcro.client.primitives.query_zip(query),path);
});
fulcro.client.primitives.replace = (function fulcro$client$primitives$replace(template,new_query){
return clojure.zip.root(clojure.zip.replace(template,new_query));
});
/**
 * Changes a join on key k with depth limit from [:a {:k n}] to [:a {:k (dec n)}]
 */
fulcro.client.primitives.reduce_query_depth = (function fulcro$client$primitives$reduce_query_depth(q,k){
if((!(cljs.core.empty_QMARK_(fulcro.client.primitives.focus_query(q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)))))){
var pos = fulcro.client.primitives.query_template(q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var node = clojure.zip.node(pos);
var node_SINGLEQUOTE_ = (function (){var G__57339 = node;
if(typeof node === 'number'){
return (G__57339 - (1));
} else {
return G__57339;
}
})();
return fulcro.client.primitives.replace(pos,node_SINGLEQUOTE_);
} else {
return q;
}
});
/**
 * Given a union expression decrement each of the query roots by one if it
 * is recursive.
 */
fulcro.client.primitives.reduce_union_recursion_depth = (function fulcro$client$primitives$reduce_union_recursion_depth(union_expr,recursion_key){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__57340){
var vec__57341 = p__57340;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57341,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57341,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fulcro.client.primitives.reduce_query_depth(q,recursion_key)], null);
}),union_expr));
});
fulcro.client.primitives.mappable_ident_QMARK_ = (function fulcro$client$primitives$mappable_ident_QMARK_(refs,ident){
return ((fulcro.util.ident_QMARK_(ident)) && (cljs.core.contains_QMARK_(refs,cljs.core.first(ident))));
});
/**
 * Denormalize a data based on query. refs is a data structure which maps idents
 * to their values. map-ident is a function taking a ident to another ident,
 * used during tempid transition. idents-seen is the set of idents encountered,
 * used to limit recursion. union-expr is the current union expression being
 * evaluated. recurse-key is key representing the current recursive query being
 * evaluted.
 */
fulcro.client.primitives.denormalize_STAR_ = (function fulcro$client$primitives$denormalize_STAR_(query,data,refs,map_ident,idents_seen,union_expr,recurse_key){
var union_recur_QMARK_ = (function (){var and__4120__auto__ = union_expr;
if(cljs.core.truth_(and__4120__auto__)){
return recurse_key;
} else {
return and__4120__auto__;
}
})();
var recur_ident = (cljs.core.truth_(union_recur_QMARK_)?data:null);
var data__$1 = (function (){var data__$1 = data;
var limit = (100);
while(true){
if(cljs.core.pos_int_QMARK_(limit)){
if(fulcro.client.primitives.mappable_ident_QMARK_(refs,data__$1)){
var G__57998 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(data__$1) : map_ident.call(null,data__$1)));
var G__57999 = (limit - (1));
data__$1 = G__57998;
limit = G__57999;
continue;
} else {
return data__$1;
}
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1257], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An infinite loop was detected in your app state on ident: ",data__$1], 0));
}catch (e57347){if((e57347 instanceof Error)){
var e__48920__auto___58000 = e57347;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1257], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___58000], 0));
} else {
throw e57347;

}
}
return cljs.core.PersistentArrayMap.EMPTY;
}
break;
}
})();
if(cljs.core.vector_QMARK_(data__$1)){
var step = ((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (ident){
if((!(fulcro.client.primitives.mappable_ident_QMARK_(refs,ident)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null))){
return ident;
} else {
var map__57348 = cljs.core.group_by(fulcro.util.join_QMARK_,query);
var map__57348__$1 = (((((!((map__57348 == null))))?(((((map__57348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57348):map__57348);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57348__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57348__$1,true);
var props__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__57348,map__57348__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__57344_SHARP_){
var G__57350 = p1__57344_SHARP_;
if(cljs.core.seq_QMARK_(p1__57344_SHARP_)){
return cljs.core.first(G__57350);
} else {
return G__57350;
}
});})(map__57348,map__57348__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq(joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((!((joins__$1 == null)))){
var join = cljs.core.first(joins__$1);
var vec__57354 = fulcro.util.join_entry(join);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57354,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57354,(1),null);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ident,key);
var G__58006 = cljs.core.next(joins__$1);
var G__58007 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,(fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(sel,v,refs,map_ident,idents_seen,union_expr,recurse_key) : fulcro.client.primitives.denormalize_STAR_.call(null,sel,v,refs,map_ident,idents_seen,union_expr,recurse_key)));
joins__$1 = G__58006;
ret = G__58007;
continue;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(ident,props__$1),ret], 0));
}
break;
}
}
} else {
var ident_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(ident) : map_ident.call(null,ident)));
var query__$1 = (function (){var G__57357 = query;
if(cljs.core.truth_(union_recur_QMARK_)){
return fulcro.client.primitives.reduce_union_recursion_depth(G__57357,recurse_key);
} else {
return G__57357;
}
})();
var union_seen_SINGLEQUOTE_ = (function (){var G__57358 = union_expr;
if(cljs.core.truth_(union_recur_QMARK_)){
return fulcro.client.primitives.reduce_union_recursion_depth(G__57358,recurse_key);
} else {
return G__57358;
}
})();
var query_SINGLEQUOTE_ = (function (){var G__57359 = query__$1;
if(cljs.core.map_QMARK_(query__$1)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__57359,cljs.core.first(ident));
} else {
return G__57359;
}
})();
return (fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null) : fulcro.client.primitives.denormalize_STAR_.call(null,query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null));
}
});})(union_recur_QMARK_,recur_ident,data__$1))
;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(step),data__$1);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.map_QMARK_(query);
if(and__4120__auto__){
return union_recur_QMARK_;
} else {
return and__4120__auto__;
}
})())){
var G__57360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(recur_ident));
var G__57361 = data__$1;
var G__57362 = refs;
var G__57363 = map_ident;
var G__57364 = idents_seen;
var G__57365 = union_expr;
var G__57366 = recurse_key;
return (fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(G__57360,G__57361,G__57362,G__57363,G__57364,G__57365,G__57366) : fulcro.client.primitives.denormalize_STAR_.call(null,G__57360,G__57361,G__57362,G__57363,G__57364,G__57365,G__57366));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data__$1;
} else {
var map__57367 = cljs.core.group_by(((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__57345_SHARP_){
return ((fulcro.util.join_QMARK_(p1__57345_SHARP_)) || (fulcro.util.ident_QMARK_(p1__57345_SHARP_)) || (((cljs.core.seq_QMARK_(p1__57345_SHARP_)) && (fulcro.util.ident_QMARK_(cljs.core.first(p1__57345_SHARP_))))));
});})(union_recur_QMARK_,recur_ident,data__$1))
,query);
var map__57367__$1 = (((((!((map__57367 == null))))?(((((map__57367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57367):map__57367);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57367__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57367__$1,true);
var props__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__57367,map__57367__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__57346_SHARP_){
var G__57369 = p1__57346_SHARP_;
if(cljs.core.seq_QMARK_(p1__57346_SHARP_)){
return cljs.core.first(G__57369);
} else {
return G__57369;
}
});})(map__57367,map__57367__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq(joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((!((joins__$1 == null)))){
var join = cljs.core.first(joins__$1);
var join__$1 = (function (){var G__57385 = join;
if(cljs.core.seq_QMARK_(join)){
return cljs.core.first(G__57385);
} else {
return G__57385;
}
})();
var join__$2 = (function (){var G__57386 = join__$1;
if(fulcro.util.ident_QMARK_(join__$1)){
return cljs.core.PersistentHashMap.fromArrays([G__57386],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)]);
} else {
return G__57386;
}
})();
var vec__57382 = fulcro.util.join_entry(join__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57382,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57382,(1),null);
var recurse_QMARK_ = fulcro.util.recursion_QMARK_(sel);
var recurse_key__$1 = ((recurse_QMARK_)?key:null);
var v = ((fulcro.util.ident_QMARK_(key))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(key)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(refs,cljs.core.first(key)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(key) : map_ident.call(null,key)))):cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,key));
var key__$1 = (function (){var G__57387 = key;
if(fulcro.util.unique_ident_QMARK_(key)){
return cljs.core.first(G__57387);
} else {
return G__57387;
}
})();
var v__$1 = ((fulcro.client.primitives.mappable_ident_QMARK_(refs,v))?(function (){var v__$1 = v;
var limit = (100);
while(true){
if(cljs.core.pos_int_QMARK_(limit)){
var next = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(v__$1) : map_ident.call(null,v__$1)));
if(fulcro.client.primitives.mappable_ident_QMARK_(refs,next)){
var G__58035 = next;
var G__58036 = (limit - (1));
v__$1 = G__58035;
limit = G__58036;
continue;
} else {
return (map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(v__$1) : map_ident.call(null,v__$1));
}
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1326], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An ident loop was detected in your app state on ident:",v__$1], 0));
}catch (e57389){if((e57389 instanceof Error)){
var e__48920__auto___58043 = e57389;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1326], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___58043], 0));
} else {
throw e57389;

}
}
return cljs.core.PersistentArrayMap.EMPTY;
}
break;
}
})():v);
var limit = ((typeof sel === 'number')?sel:new cljs.core.Keyword(null,"none","none",1333468478));
var union_entry = ((fulcro.util.union_QMARK_(join__$2))?sel:((recurse_QMARK_)?union_expr:null));
var sel__$1 = ((recurse_QMARK_)?(((!((union_expr == null))))?union_entry:fulcro.client.primitives.reduce_query_depth(query,key__$1)):((((fulcro.client.primitives.mappable_ident_QMARK_(refs,v__$1)) && (fulcro.util.union_QMARK_(join__$2))))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sel,cljs.core.first(v__$1)):((((fulcro.util.ident_QMARK_(key__$1)) && (fulcro.util.union_QMARK_(join__$2))))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sel,cljs.core.first(key__$1)):sel
)));
var graph_loop_QMARK_ = ((recurse_QMARK_) && (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(idents_seen,key__$1)),v__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"none","none",1333468478),limit)));
var idents_seen__$1 = ((((fulcro.client.primitives.mappable_ident_QMARK_(refs,v__$1)) && (recurse_QMARK_)))?cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(idents_seen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),key__$1], null),v__$1):idents_seen);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),limit)){
var G__58048 = cljs.core.next(joins__$1);
var G__58049 = ret;
joins__$1 = G__58048;
ret = G__58049;
continue;
} else {
if(graph_loop_QMARK_){
var G__58050 = cljs.core.next(joins__$1);
var G__58051 = ret;
joins__$1 = G__58050;
ret = G__58051;
continue;
} else {
if((v__$1 == null)){
var G__58052 = cljs.core.next(joins__$1);
var G__58053 = ret;
joins__$1 = G__58052;
ret = G__58053;
continue;
} else {
var G__58054 = cljs.core.next(joins__$1);
var G__58055 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key__$1,(fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1) : fulcro.client.primitives.denormalize_STAR_.call(null,sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1)));
joins__$1 = G__58054;
ret = G__58055;
continue;

}
}
}
} else {
var temp__5718__auto__ = cljs.core.some(((function (joins__$1,ret,map__57367,map__57367__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1){
return (function (p__57390){
var vec__57391 = p__57390;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57391,(0),null);
var identset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57391,(1),null);
if(cljs.core.contains_QMARK_(identset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,k))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),k], null));
} else {
return null;
}
});})(joins__$1,ret,map__57367,map__57367__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(idents_seen,new cljs.core.Keyword(null,"last-ident","last-ident",534500972)));
if(cljs.core.truth_(temp__5718__auto__)){
var looped_key = temp__5718__auto__;
return looped_key;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(data__$1,props__$1),ret], 0));
}
}
break;
}
}

}
}
});
/**
 * Given a query, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
fulcro.client.primitives.db__GT_tree = (function fulcro$client$primitives$db__GT_tree(var_args){
var G__57395 = arguments.length;
switch (G__57395) {
case 3:
return fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$3 = (function (query,data,refs){
if(cljs.core.map_QMARK_(refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return fulcro.client.primitives.denormalize_STAR_(query,data,refs,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$4 = (function (query,data,refs,map_ident){
if(cljs.core.map_QMARK_(refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return fulcro.client.primitives.denormalize_STAR_(query,data,refs,map_ident,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

fulcro.client.primitives.db__GT_tree.cljs$lang$maxFixedArity = 4;

/**
 * Get any component from the indexer that matches the ref.
 */
fulcro.client.primitives.ref__GT_any = (function fulcro$client$primitives$ref__GT_any(x,ref){
var reconciler = fulcro.client.primitives.any__GT_reconciler(x);
var indexer = fulcro.client.primitives.get_indexer(reconciler);
return cljs.core.first(fulcro.client.impl.protocols.key__GT_components(indexer,ref));
});
/**
 * Replaces all tempids in app-state with the ids returned by the server.
 */
fulcro.client.primitives.resolve_tempids = (function fulcro$client$primitives$resolve_tempids(state,tid__GT_rid){
if(cljs.core.empty_QMARK_(tid__GT_rid)){
return state;
} else {
return clojure.walk.prewalk((function (p1__57396_SHARP_){
if(cljs.core.truth_((fulcro.client.primitives.tempid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.tempid_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__57396_SHARP_) : fulcro.client.primitives.tempid_QMARK_.call(null,p1__57396_SHARP_)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(tid__GT_rid,p1__57396_SHARP_,p1__57396_SHARP_);
} else {
return p1__57396_SHARP_;
}
}),state);
}
});
/**
 * Rewrite any pending requests in the request queue to account for the fact that a response might have
 *   changed ids that are expressed in the mutations of that queue. tempid-map MUST be a map from om
 *   tempid to real ids, not idents.
 */
fulcro.client.primitives.rewrite_tempids_in_request_queue = (function fulcro$client$primitives$rewrite_tempids_in_request_queue(queue,tempid_map){
var entry = cljs.core.async.poll_BANG_(queue);
var entries = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(entry)){
var G__58073 = cljs.core.async.poll_BANG_(queue);
var G__58074 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(entries,fulcro.client.primitives.resolve_tempids(entry,tempid_map));
entry = G__58073;
entries = G__58074;
continue;
} else {
if(cljs.core.seq(entries)){
var seq__57405 = cljs.core.seq(entries);
var chunk__57406 = null;
var count__57407 = (0);
var i__57408 = (0);
while(true){
if((i__57408 < count__57407)){
var e = chunk__57406.cljs$core$IIndexed$_nth$arity$2(null,i__57408);
if(cljs.core.truth_(cljs.core.async.offer_BANG_(queue,e))){
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1408], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unable to put request back on network queue during tempid rewrite!"], 0));
}catch (e57411){if((e57411 instanceof Error)){
var e__48920__auto___58077 = e57411;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1408], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___58077], 0));
} else {
throw e57411;

}
}}


var G__58079 = seq__57405;
var G__58080 = chunk__57406;
var G__58081 = count__57407;
var G__58082 = (i__57408 + (1));
seq__57405 = G__58079;
chunk__57406 = G__58080;
count__57407 = G__58081;
i__57408 = G__58082;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__57405);
if(temp__5720__auto__){
var seq__57405__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57405__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57405__$1);
var G__58086 = cljs.core.chunk_rest(seq__57405__$1);
var G__58087 = c__4550__auto__;
var G__58088 = cljs.core.count(c__4550__auto__);
var G__58089 = (0);
seq__57405 = G__58086;
chunk__57406 = G__58087;
count__57407 = G__58088;
i__57408 = G__58089;
continue;
} else {
var e = cljs.core.first(seq__57405__$1);
if(cljs.core.truth_(cljs.core.async.offer_BANG_(queue,e))){
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1408], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unable to put request back on network queue during tempid rewrite!"], 0));
}catch (e57412){if((e57412 instanceof Error)){
var e__48920__auto___58092 = e57412;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1408], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___58092], 0));
} else {
throw e57412;

}
}}


var G__58093 = cljs.core.next(seq__57405__$1);
var G__58094 = null;
var G__58095 = (0);
var G__58096 = (0);
seq__57405 = G__58093;
chunk__57406 = G__58094;
count__57407 = G__58095;
i__57408 = G__58096;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
break;
}
});
/**
 * Removes all fulcro/load and tx/fallback mutations from the query
 */
fulcro.client.primitives.remove_loads_and_fallbacks = (function fulcro$client$primitives$remove_loads_and_fallbacks(query){
var symbols_to_filter = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("fulcro","load","fulcro/load",-1361504416,null),null,new cljs.core.Symbol("fulcro.client.data-fetch","load","fulcro.client.data-fetch/load",-1506599212,null),null,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),null,new cljs.core.Symbol("fulcro.client.data-fetch","fallback","fulcro.client.data-fetch/fallback",1556791555,null),null], null), null);
var ast = (fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1(query) : fulcro.client.primitives.query__GT_ast.call(null,query));
var children = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var new_children = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (symbols_to_filter,ast,children){
return (function (child){
return (!(cljs.core.contains_QMARK_(symbols_to_filter,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(child))));
});})(symbols_to_filter,ast,children))
,children);
var new_ast = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),new_children);
return (fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1(new_ast) : fulcro.client.primitives.ast__GT_query.call(null,new_ast));
});
fulcro.client.primitives.fallback_tx = (function fulcro$client$primitives$fallback_tx(tx,resp){

var symbols_to_find = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),null,new cljs.core.Symbol("fulcro.client.data-fetch","fallback","fulcro.client.data-fetch/fallback",1556791555,null),null], null), null);
var ast = (fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1(tx) : fulcro.client.primitives.query__GT_ast.call(null,tx));
var children = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var new_children = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (symbols_to_find,ast,children){
return (function (ast__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(ast__$1,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc,new cljs.core.Keyword(null,"execute","execute",-129499188),true,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resp], 0));
});})(symbols_to_find,ast,children))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (symbols_to_find,ast,children){
return (function (child){
return cljs.core.contains_QMARK_(symbols_to_find,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(child));
});})(symbols_to_find,ast,children))
,children));
var new_ast = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),new_children);
var fallback_tx = (fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1(new_ast) : fulcro.client.primitives.ast__GT_query.call(null,new_ast));
if(cljs.core.truth_(cljs.core.not_empty(fallback_tx))){
return fallback_tx;
} else {
return null;
}
});
/**
 * Check the given keyword to see if it is in the :ui namespace.
 */
fulcro.client.primitives.is_ui_query_fragment_QMARK_ = (function fulcro$client$primitives$is_ui_query_fragment_QMARK_(kw){
var kw__$1 = ((cljs.core.map_QMARK_(kw))?cljs.core.first(cljs.core.keys(kw)):kw);
if((kw__$1 instanceof cljs.core.Keyword)){
var G__57413 = kw__$1;
var G__57413__$1 = (((G__57413 == null))?null:cljs.core.namespace(G__57413));
if((G__57413__$1 == null)){
return null;
} else {
return cljs.core.re_find(/^ui(?:\.|$)/,G__57413__$1);
}
} else {
return null;
}
});
/**
 * Returns a new query with fragments that are in the `ui` namespace removed.
 */
fulcro.client.primitives.strip_ui = (function fulcro$client$primitives$strip_ui(query){
var ast = (fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1(query) : fulcro.client.primitives.query__GT_ast.call(null,query));
var drop_ui_children = ((function (ast){
return (function fulcro$client$primitives$strip_ui_$_drop_ui_children(ast_node){
var children = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ast){
return (function (acc,n){
if(cljs.core.truth_(fulcro.client.primitives.is_ui_query_fragment_QMARK_(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(n)))){
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,fulcro$client$primitives$strip_ui_$_drop_ui_children(n));
}
});})(ast))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast_node));
if(cljs.core.seq(children)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast_node,new cljs.core.Keyword(null,"children","children",-940561982),children);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast_node,new cljs.core.Keyword(null,"children","children",-940561982));
}
});})(ast))
;
var G__57414 = drop_ui_children(ast);
return (fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1(G__57414) : fulcro.client.primitives.ast__GT_query.call(null,G__57414));
});
fulcro.client.primitives.nf = new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912);
/**
 * Given x, return x value unless it's ::prim/not-found, in which case it returns nil.
 * 
 *   This is useful when you wanna do a nil check but you are in a position where the value
 *   could be ::prim/not-found (and you want to consider it as nil). A common pattern
 *   looks like: `(or (prim/nilify-not-found x) 10)
 */
fulcro.client.primitives.nilify_not_found = (function fulcro$client$primitives$nilify_not_found(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912))){
return null;
} else {
return x;
}
});
/**
 * Returns data with meta-data marking it as a leaf in the result.
 */
fulcro.client.primitives.as_leaf = (function fulcro$client$primitives$as_leaf(data){
if(cljs.core.coll_QMARK_(data)){
return cljs.core.with_meta(data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro","leaf","fulcro/leaf",-2094500471),true], null));
} else {
return data;
}
});
/**
 * Returns true iff the given data is marked as a leaf in the result (according to the query). Requires pre-marking.
 */
fulcro.client.primitives.leaf_QMARK_ = (function fulcro$client$primitives$leaf_QMARK_(data){
return (((!(cljs.core.coll_QMARK_(data)))) || (cljs.core.empty_QMARK_(data)) || (((cljs.core.coll_QMARK_(data)) && (cljs.core.boolean$(new cljs.core.Keyword("fulcro","leaf","fulcro/leaf",-2094500471).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(data)))))));
});
/**
 * Turn a union query into a query that attempts to encompass all possible things that might be queried
 */
fulcro.client.primitives.union__GT_query = (function fulcro$client$primitives$union__GT_query(union_query){
return cljs.core.vec(cljs.core.set(cljs.core.flatten(cljs.core.vals(union_query))));
});
/**
 * Recursively walk the query and response marking anything that was *asked for* in the query but is *not* in the response as missing.
 *   The merge process (which happens later in the plumbing) looks for these markers as indicators to remove any existing
 *   data in the database (which has provably disappeared).
 * 
 *   The naive approach to data merging (even recursive) would fail to remove such data.
 * 
 *   Returns the result with missing markers in place (which are then used/removed in a later stage).
 */
fulcro.client.primitives.mark_missing = (function fulcro$client$primitives$mark_missing(result,query){
var missing_entity = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","type","fulcro.client.impl.data-fetch/type",296514265),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null)], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (missing_entity){
return (function (result__$1,element){
var element__$1 = ((cljs.core.list_QMARK_(element))?cljs.core.first(element):element
);
var result_key = (((element__$1 instanceof cljs.core.Keyword))?element__$1:((fulcro.util.join_QMARK_(element__$1))?fulcro.util.join_key(element__$1):null
));
var result_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,result_key);
if(((((fulcro.util.ident_QMARK_(result_key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(result_key))))) || (((fulcro.util.ident_QMARK_(element__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(element__$1))))))){
return result__$1;
} else {
if(cljs.core.truth_(fulcro.client.primitives.is_ui_query_fragment_QMARK_(result_key))){
return result__$1;
} else {
if((((element__$1 instanceof cljs.core.Keyword)) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,element__$1) == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,element__$1,new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912));
} else {
if(((fulcro.util.join_QMARK_(element__$1)) && (((typeof fulcro.util.join_value(element__$1) === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),fulcro.util.join_value(element__$1))))))){
var k = fulcro.util.join_key(element__$1);
var result_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,k);
if((result_SINGLEQUOTE_ == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,k,new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912));
} else {
if(cljs.core.vector_QMARK_(result_SINGLEQUOTE_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (k,result_SINGLEQUOTE_,element__$1,result_key,result_value,missing_entity){
return (function (item){
return (fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(item,query) : fulcro.client.primitives.mark_missing.call(null,item,query));
});})(k,result_SINGLEQUOTE_,element__$1,result_key,result_value,missing_entity))
,result_SINGLEQUOTE_));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,k,(fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(result_SINGLEQUOTE_,query) : fulcro.client.primitives.mark_missing.call(null,result_SINGLEQUOTE_,query)));

}
}
} else {
if(((fulcro.util.ident_QMARK_(element__$1)) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,element__$1) == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,element__$1,missing_entity);
} else {
if(fulcro.util.union_QMARK_(element__$1)){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912));
var to_one_QMARK_ = cljs.core.map_QMARK_(v);
var to_many_QMARK_ = cljs.core.vector_QMARK_(v);
var wide_query = fulcro.client.primitives.union__GT_query(fulcro.util.join_value(element__$1));
if(to_one_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,(fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(v,wide_query) : fulcro.client.primitives.mark_missing.call(null,v,wide_query)));
} else {
if(to_many_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (v,to_one_QMARK_,to_many_QMARK_,wide_query,element__$1,result_key,result_value,missing_entity){
return (function (i){
return (fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(i,wide_query) : fulcro.client.primitives.mark_missing.call(null,i,wide_query));
});})(v,to_one_QMARK_,to_many_QMARK_,wide_query,element__$1,result_key,result_value,missing_entity))
,v));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912));
} else {
return result__$1;

}
}
}
} else {
if(((fulcro.util.join_QMARK_(element__$1)) && (fulcro.util.ident_QMARK_(fulcro.util.join_key(element__$1))) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,fulcro.util.join_key(element__$1)) == null)))){
var mock_missing_object = (function (){var G__57415 = cljs.core.PersistentArrayMap.EMPTY;
var G__57416 = fulcro.util.join_value(element__$1);
return (fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(G__57415,G__57416) : fulcro.client.primitives.mark_missing.call(null,G__57415,G__57416));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,fulcro.util.join_key(element__$1),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mock_missing_object,missing_entity], 0)));
} else {
if(((fulcro.util.join_QMARK_(element__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),cljs.core.get.cljs$core$IFn$_invoke$arity$3(result__$1,fulcro.util.join_key(element__$1),new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,fulcro.util.join_key(element__$1),new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912));
} else {
if(((fulcro.util.join_QMARK_(element__$1)) && (cljs.core.vector_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,fulcro.util.join_key(element__$1)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,fulcro.util.join_key(element__$1),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (element__$1,result_key,result_value,missing_entity){
return (function (item){
var G__57417 = item;
var G__57418 = fulcro.util.join_value(element__$1);
return (fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(G__57417,G__57418) : fulcro.client.primitives.mark_missing.call(null,G__57417,G__57418));
});})(element__$1,result_key,result_value,missing_entity))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,fulcro.util.join_key(element__$1))));
} else {
if(((fulcro.util.join_QMARK_(element__$1)) && (cljs.core.map_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,fulcro.util.join_key(element__$1)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,fulcro.util.join_key(element__$1),(function (){var G__57419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,fulcro.util.join_key(element__$1));
var G__57420 = fulcro.util.join_value(element__$1);
return (fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(G__57419,G__57420) : fulcro.client.primitives.mark_missing.call(null,G__57419,G__57420));
})());
} else {
if(((fulcro.util.join_QMARK_(element__$1)) && (cljs.core.vector_QMARK_(fulcro.util.join_value(element__$1))) && ((!(((cljs.core.map_QMARK_(result_value)) || (cljs.core.vector_QMARK_(result_value)))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,(function (){var G__57421 = cljs.core.PersistentArrayMap.EMPTY;
var G__57422 = fulcro.util.join_value(element__$1);
return (fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(G__57421,G__57422) : fulcro.client.primitives.mark_missing.call(null,G__57421,G__57422));
})());
} else {
if(cljs.core.truth_(result_key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,fulcro.client.primitives.as_leaf);
} else {
return result__$1;

}
}
}
}
}
}
}
}
}
}
}
}
});})(missing_entity))
,result,query);
});
/**
 * Remove not-found keys from m (non-recursive)
 */
fulcro.client.primitives.sweep_one = (function fulcro$client$primitives$sweep_one(m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__57423){
var vec__57424 = p__57423;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57424,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57424,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tempids","tempids",1767509089),k)))){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}
}),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta(m)),m);
} else {
if(cljs.core.vector_QMARK_(m)){
return cljs.core.with_meta(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.sweep_one,m),cljs.core.meta(m));
} else {
return m;

}
}
});
/**
 * Remove all of the not-found keys (recursively) from v, stopping at marked leaves (if present)
 */
fulcro.client.primitives.sweep = (function fulcro$client$primitives$sweep(m){
if(fulcro.client.primitives.leaf_QMARK_(m)){
return fulcro.client.primitives.sweep_one(m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__57427){
var vec__57428 = p__57427;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57428,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57428,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tempids","tempids",1767509089),k)))){
return acc;
} else {
if(((fulcro.util.ident_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),cljs.core.second(v))))){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(fulcro.client.primitives.sweep.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.sweep.cljs$core$IFn$_invoke$arity$1(v) : fulcro.client.primitives.sweep.call(null,v)));

}
}
}),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta(m)),m);
} else {
if(cljs.core.vector_QMARK_(m)){
return cljs.core.with_meta(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.sweep,m),cljs.core.meta(m));
} else {
return m;

}
}
}
});
/**
 * Do a recursive merge of source into target, but remove any target data that is marked as missing in the response. The
 *   missing marker is generated in the source when something has been asked for in the query, but had no value in the
 *   response. This allows us to correctly remove 'empty' data from the database without accidentally removing something
 *   that may still exist on the server (in truth we don't know its status, since it wasn't asked for, but we leave
 *   it as our 'best guess')
 */
fulcro.client.primitives.sweep_merge = (function fulcro$client$primitives$sweep_merge(target,source){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__57431){
var vec__57432 = p__57431;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57432,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57432,(1),null);
var existing_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,key);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"tempids","tempids",1767509089))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912))))){
return acc;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_value,new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,key);
} else {
if(((fulcro.util.ident_QMARK_(new_value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),cljs.core.second(new_value))))){
return acc;
} else {
if(fulcro.client.primitives.leaf_QMARK_(new_value)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,fulcro.client.primitives.sweep_one(new_value));
} else {
if(((cljs.core.map_QMARK_(existing_value)) && (cljs.core.map_QMARK_(new_value)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,key,fulcro.client.primitives.sweep_merge,new_value);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,fulcro.client.primitives.sweep(new_value));

}
}
}
}
}
}),target,source);
});
fulcro.client.primitives.component_pre_merge = (function fulcro$client$primitives$component_pre_merge(class$,query,state,data){
if(fulcro.client.primitives.has_pre_merge_QMARK_(class$)){
var entity = (((((!((class$ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$primitives$Ident$))))?true:false):false))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(class$,data)):null);
return fulcro.client.primitives.pre_merge(class$,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),state,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724),entity,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582),data,new cljs.core.Keyword(null,"query","query",-1288509510),query], null));
} else {
return data;
}
});
/**
 * Transform function that modifies data using component pre-merge hook.
 */
fulcro.client.primitives.pre_merge_transform = (function fulcro$client$primitives$pre_merge_transform(state){
return (function fulcro$client$primitives$pre_merge_transform_$_pre_merge_transform_internal(query,data){
var temp__5718__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
if(cljs.core.truth_(temp__5718__auto__)){
var class$ = temp__5718__auto__;
return fulcro.client.primitives.component_pre_merge(class$,query,state,data);
} else {
return data;
}
});
});
/**
 * Handle merging incoming data, but be sure to sweep it of values that are marked missing. Also triggers the given mutation-merge
 *   if available.
 */
fulcro.client.primitives.merge_handler = (function fulcro$client$primitives$merge_handler(mutation_merge,target,source){
var source_to_merge = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__57436){
var vec__57437 = p__57436;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57437,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57437,(1),null);
return (!((k instanceof cljs.core.Symbol)));
}),source));
var merged_state = fulcro.client.primitives.sweep_merge(target,source_to_merge);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (source_to_merge,merged_state){
return (function (acc,p__57440){
var vec__57441 = p__57440;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57441,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57441,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = mutation_merge;
if(cljs.core.truth_(and__4120__auto__)){
return (k instanceof cljs.core.Symbol);
} else {
return and__4120__auto__;
}
})())){
var temp__5718__auto__ = (function (){var G__57444 = acc;
var G__57445 = k;
var G__57446 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(v,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205)], 0));
return (mutation_merge.cljs$core$IFn$_invoke$arity$3 ? mutation_merge.cljs$core$IFn$_invoke$arity$3(G__57444,G__57445,G__57446) : mutation_merge.call(null,G__57444,G__57445,G__57446));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var updated_state = temp__5718__auto__;
return updated_state;
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1652], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Return value handler for",k,"returned nil. Ignored."], 0));
}catch (e57447){if((e57447 instanceof Error)){
var e__48920__auto___58193 = e57447;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1652], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___58193], 0));
} else {
throw e57447;

}
}
return acc;
}
} else {
return acc;
}
});})(source_to_merge,merged_state))
,merged_state,source);
});
/**
 * Merge all of the mutations that were joined with a query
 */
fulcro.client.primitives.merge_mutation_joins = (function fulcro$client$primitives$merge_mutation_joins(state,query,data_tree){
if(cljs.core.map_QMARK_(data_tree)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (updated_state,query_element){
var k = (function (){var and__4120__auto__ = fulcro.util.mutation_join_QMARK_(query_element);
if(and__4120__auto__){
return fulcro.util.join_key(query_element);
} else {
return and__4120__auto__;
}
})();
var subtree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,k);
if(cljs.core.truth_((function (){var and__4120__auto__ = k;
if(cljs.core.truth_(and__4120__auto__)){
return subtree;
} else {
return and__4120__auto__;
}
})())){
var subquery = fulcro.util.join_value(query_element);
var target = new cljs.core.Keyword("fulcro.client.impl.data-fetch","target","fulcro.client.impl.data-fetch/target",1805324748).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(subquery));
var idnt = new cljs.core.Keyword("fulcro.client.primitives","temporary-key","fulcro.client.primitives/temporary-key",485271105);
var norm_query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([idnt,subquery])], null);
var norm_tree = cljs.core.PersistentArrayMap.createAsIfByAssoc([idnt,subtree]);
var norm_tree_marked = fulcro.client.primitives.mark_missing(norm_tree,norm_query);
var db = fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$4(norm_query,norm_tree_marked,true,fulcro.client.primitives.pre_merge_transform(state));
var G__57448 = fulcro.client.primitives.sweep_merge(updated_state,db);
var G__57448__$1 = (cljs.core.truth_(target)?fulcro.client.impl.data_targeting.process_target.cljs$core$IFn$_invoke$arity$3(G__57448,idnt,target):G__57448);
if(cljs.core.not(target)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57448__$1,db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([idnt], 0));
} else {
return G__57448__$1;
}
} else {
return updated_state;
}
}),state,query);
} else {
return state;
}
});
fulcro.client.primitives.merge_idents = (function fulcro$client$primitives$merge_idents(tree,config,refs,query){
var map__57451 = config;
var map__57451__$1 = (((((!((map__57451 == null))))?(((((map__57451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57451):map__57451);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57451__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862));
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57451__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315));
var ident_joins = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__57451,map__57451__$1,merge_ident,indexer){
return (function (p1__57449_SHARP_){
var G__57453 = p1__57449_SHARP_;
if(cljs.core.seq_QMARK_(p1__57449_SHARP_)){
return cljs.core.first(G__57453);
} else {
return G__57453;
}
});})(map__57451,map__57451__$1,merge_ident,indexer))
),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (map__57451,map__57451__$1,merge_ident,indexer){
return (function (p1__57450_SHARP_){
return ((fulcro.util.join_QMARK_(p1__57450_SHARP_)) && (fulcro.util.ident_QMARK_(fulcro.util.join_key(p1__57450_SHARP_))));
});})(map__57451,map__57451__$1,merge_ident,indexer))
)),query);
var step = ((function (map__57451,map__57451__$1,merge_ident,indexer,ident_joins){
return (function fulcro$client$primitives$merge_idents_$_step(tree_SINGLEQUOTE_,p__57461){
var vec__57462 = p__57461;
var ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57462,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57462,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))){
var c_or_q = (function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ident_joins,ident);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return fulcro.client.primitives.ref__GT_any(indexer,ident);
}
})();
var props_SINGLEQUOTE_ = fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$4(c_or_q,props,false,fulcro.client.primitives.pre_merge_transform(tree));
var refs__$1 = cljs.core.meta(props_SINGLEQUOTE_);
var G__57466 = (merge_ident.cljs$core$IFn$_invoke$arity$4 ? merge_ident.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_) : merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_));
var G__57467 = refs__$1;
var fexpr__57465 = new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config);
return (fexpr__57465.cljs$core$IFn$_invoke$arity$2 ? fexpr__57465.cljs$core$IFn$_invoke$arity$2(G__57466,G__57467) : fexpr__57465.call(null,G__57466,G__57467));
} else {
return (merge_ident.cljs$core$IFn$_invoke$arity$4 ? merge_ident.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ident,props) : merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props));
}
});})(map__57451,map__57451__$1,merge_ident,indexer,ident_joins))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,tree,refs);
});
/**
 * PRIVATE. DO NOT USE.
 */
fulcro.client.primitives._merge_novelty = (function fulcro$client$primitives$_merge_novelty(var_args){
var G__57469 = arguments.length;
switch (G__57469) {
case 5:
return fulcro.client.primitives._merge_novelty.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return fulcro.client.primitives._merge_novelty.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives._merge_novelty.cljs$core$IFn$_invoke$arity$5 = (function (reconciler,state_map,result_tree,query,tempids){
var state = (function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"migrate","migrate",-207110743).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
if(cljs.core.truth_(temp__5718__auto__)){
var migrate = temp__5718__auto__;
var root_component = (fulcro.client.primitives.app_root.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.app_root.cljs$core$IFn$_invoke$arity$1(reconciler) : fulcro.client.primitives.app_root.call(null,reconciler));
var root_query = (cljs.core.truth_(query)?null:fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(root_component,state_map));
var G__57470 = state_map;
var G__57471 = (function (){var or__4131__auto__ = query;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return root_query;
}
})();
var G__57472 = tempids;
return (migrate.cljs$core$IFn$_invoke$arity$3 ? migrate.cljs$core$IFn$_invoke$arity$3(G__57470,G__57471,G__57472) : migrate.call(null,G__57470,G__57471,G__57472));
} else {
return state_map;
}
})();
return fulcro.client.primitives._merge_novelty.cljs$core$IFn$_invoke$arity$4(reconciler,state,result_tree,query);
});

fulcro.client.primitives._merge_novelty.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,state_map,result_tree,query){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__57473 = fulcro.client.primitives.sift_idents(result_tree);
var idts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57473,(0),null);
var result_tree__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57473,(1),null);
var normalized_result = (cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))?fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$4((function (){var or__4131__auto__ = query;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)));
}
})(),result_tree__$1,true,fulcro.client.primitives.pre_merge_transform(state_map)):result_tree__$1);
var G__57477 = fulcro.client.primitives.merge_idents(fulcro.client.primitives.merge_mutation_joins(state_map,query,result_tree__$1),config,idts,query);
var G__57478 = normalized_result;
var fexpr__57476 = new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config);
return (fexpr__57476.cljs$core$IFn$_invoke$arity$2 ? fexpr__57476.cljs$core$IFn$_invoke$arity$2(G__57477,G__57478) : fexpr__57476.call(null,G__57477,G__57478));
});

fulcro.client.primitives._merge_novelty.cljs$lang$maxFixedArity = 5;

fulcro.client.primitives.get_tempids = (function fulcro$client$primitives$get_tempids(m){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"tempids","tempids",1767509089));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205));
}
});
/**
 * Internal implementation of merge. Given a reconciler, state (map), result, and query returns a map of the:
 * 
 *   `:keys` to refresh
 *   `:next` state
 *   and `::tempids` that need to be migrated
 */
fulcro.client.primitives.merge_STAR_ = (function fulcro$client$primitives$merge_STAR_(reconciler,state,res,query){
var tempids = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_tempids,cljs.core.second),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.first),res)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(res)),new cljs.core.Keyword(null,"next","next",-117701485),fulcro.client.primitives._merge_novelty.cljs$core$IFn$_invoke$arity$5(reconciler,state,res,query,tempids),new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),tempids], null);
});
/**
 * Merge an arbitrary data-tree that conforms to the shape of the given query.
 * 
 *   query - A query, derived from defui components, that can be used to normalized a tree of data.
 *   data-tree - A tree of data that matches the nested shape of query
 *   remote - No longer used. May be passed, but is ignored.
 */
fulcro.client.primitives.merge_BANG_ = (function fulcro$client$primitives$merge_BANG_(var_args){
var G__57480 = arguments.length;
switch (G__57480) {
case 2:
return fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,data_tree){
return fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,data_tree,null);
});

fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,data_tree,query){
return fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$4(reconciler,data_tree,query,null);
});

fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,data_tree,query,remote){
var tx = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.mutations","merge!","fulcro.client.mutations/merge!",137581651,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-tree","data-tree",1311167582),data_tree,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"remote","remote",-1593576576),remote], null),null,(1),null))))),null,(1),null))))));
return (fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,tx) : fulcro.client.primitives.transact_BANG_.call(null,reconciler,tx));
});

fulcro.client.primitives.merge_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Build an index from property to class using the (annotated) query.
 */
fulcro.client.primitives.build_prop__GT_class_index_BANG_ = (function fulcro$client$primitives$build_prop__GT_class_index_BANG_(prop__GT_classes,query){
return clojure.walk.prewalk((function fulcro$client$primitives$build_prop__GT_class_index_BANG__$_index_walk_helper(ele){
var temp__5720__auto___58246 = (function (){var G__57481 = ele;
var G__57481__$1 = (((G__57481 == null))?null:cljs.core.meta(G__57481));
if((G__57481__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__57481__$1);
}
})();
if(cljs.core.truth_(temp__5720__auto___58246)){
var component_58247 = temp__5720__auto___58246;
var ks_58249 = fulcro.client.primitives.gather_keys(ele);
var seq__57482_58250 = cljs.core.seq(ks_58249);
var chunk__57483_58251 = null;
var count__57484_58252 = (0);
var i__57485_58253 = (0);
while(true){
if((i__57485_58253 < count__57484_58252)){
var k_58256 = chunk__57483_58251.cljs$core$IIndexed$_nth$arity$2(null,i__57485_58253);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(prop__GT_classes,cljs.core.update,k_58256,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([component_58247], 0));


var G__58257 = seq__57482_58250;
var G__58258 = chunk__57483_58251;
var G__58259 = count__57484_58252;
var G__58260 = (i__57485_58253 + (1));
seq__57482_58250 = G__58257;
chunk__57483_58251 = G__58258;
count__57484_58252 = G__58259;
i__57485_58253 = G__58260;
continue;
} else {
var temp__5720__auto___58263__$1 = cljs.core.seq(seq__57482_58250);
if(temp__5720__auto___58263__$1){
var seq__57482_58264__$1 = temp__5720__auto___58263__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57482_58264__$1)){
var c__4550__auto___58265 = cljs.core.chunk_first(seq__57482_58264__$1);
var G__58266 = cljs.core.chunk_rest(seq__57482_58264__$1);
var G__58267 = c__4550__auto___58265;
var G__58268 = cljs.core.count(c__4550__auto___58265);
var G__58269 = (0);
seq__57482_58250 = G__58266;
chunk__57483_58251 = G__58267;
count__57484_58252 = G__58268;
i__57485_58253 = G__58269;
continue;
} else {
var k_58270 = cljs.core.first(seq__57482_58264__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(prop__GT_classes,cljs.core.update,k_58270,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([component_58247], 0));


var G__58271 = cljs.core.next(seq__57482_58264__$1);
var G__58272 = null;
var G__58273 = (0);
var G__58274 = (0);
seq__57482_58250 = G__58271;
chunk__57483_58251 = G__58272;
count__57484_58252 = G__58273;
i__57485_58253 = G__58274;
continue;
}
} else {
}
}
break;
}
} else {
}

return ele;
}),query);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {fulcro.client.impl.protocols.IIndexer}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fulcro.client.primitives.Indexer = (function (indexes,__meta,__extmap,__hash){
this.indexes = indexes;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
fulcro.client.primitives.Indexer.prototype.fulcro$client$impl$protocols$IIndexer$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.client.primitives.Indexer.prototype.fulcro$client$impl$protocols$IIndexer$indexes$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

fulcro.client.primitives.Indexer.prototype.fulcro$client$impl$protocols$IIndexer$index_root$arity$2 = (function (this$,root_class){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(this$__$1))){
} else {
throw (new Error(["Assert failed: ","State map is in `this` for indexing root","\n","(:state this)"].join('')));
}

var prop__GT_classes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var rootq = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(root_class,null),state_map);
fulcro.client.primitives.build_prop__GT_class_index_BANG_(prop__GT_classes,rootq);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),cljs.core.deref(prop__GT_classes)], null));
});

fulcro.client.primitives.Indexer.prototype.fulcro$client$impl$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.indexes,((function (___$1){
return (function fulcro$client$primitives$component_indexer(indexes__$1){
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),fulcro.client.primitives.react_type(c)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ident = (((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.fulcro$client$primitives$Ident$))))?true:false):false))?(function (){var ident = fulcro.client.primitives.ident(c,fulcro.client.primitives.props(c));
if(fulcro.util.ident_QMARK_(ident)){
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1783], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["malformed Ident. An ident must be a vector of ","two elements (a keyword and an EDN value). Check ","the Ident implementation of component `",c.constructor.displayName,"`."], 0));
}catch (e57493){if((e57493 instanceof Error)){
var e__48920__auto___58294 = e57493;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1783], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___58294], 0));
} else {
throw e57493;

}
}}

if((!((cljs.core.second(ident) == null)))){
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1789], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["component ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c.constructor.displayName),"'s ident (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ident),") has a `nil` second element."," This warning can be safely ignored if that is intended."].join('')], 0));
}catch (e57494){if((e57494 instanceof Error)){
var e__48920__auto___58295 = e57494;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1789], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___58295], 0));
} else {
throw e57494;

}
}}

return ident;
})():null);
if((!((ident == null)))){
var G__57495 = indexes__$2;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__57495,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
} else {
return G__57495;
}
} else {
return indexes__$2;
}
});})(___$1))
);
});

fulcro.client.primitives.Indexer.prototype.fulcro$client$impl$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.indexes,((function (___$1){
return (function fulcro$client$primitives$drop_component_helper(indexes__$1){
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),fulcro.client.primitives.react_type(c)], null),cljs.core.disj,c);
var ident = (((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.fulcro$client$primitives$Ident$))))?true:false):false))?fulcro.client.primitives.ident(c,fulcro.client.primitives.props(c)):null);
if((!((ident == null)))){
var G__57497 = indexes__$2;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__57497,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.disj,c);
} else {
return G__57497;
}
} else {
return indexes__$2;
}
});})(___$1))
);
});

fulcro.client.primitives.Indexer.prototype.fulcro$client$impl$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = cljs.core.deref(self__.indexes);
if(fulcro.client.primitives.component_QMARK_(k)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([k]);
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (indexes__$1,___$1){
return (function (p1__57486_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),p1__57486_SHARP_], null));
});})(indexes__$1,___$1))
),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(cljs.core.into),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),k], null),cljs.core.PersistentHashSet.EMPTY),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),k], null)));
}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k57488,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__57498 = k57488;
var G__57498__$1 = (((G__57498 instanceof cljs.core.Keyword))?G__57498.fqn:null);
switch (G__57498__$1) {
case "indexes":
return self__.indexes;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57488,else__4388__auto__);

}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__57499){
var vec__57500 = p__57499;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57500,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57500,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#fulcro.client.primitives.Indexer{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null))], null),self__.__extmap));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57487){
var self__ = this;
var G__57487__$1 = this;
return (new cljs.core.RecordIter((0),G__57487__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new fulcro.client.primitives.Indexer(self__.indexes,self__.__meta,self__.__extmap,self__.__hash));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-535195966 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
(this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57489,other57490){
var self__ = this;
var this57489__$1 = this;
return (((!((other57490 == null)))) && ((this57489__$1.constructor === other57490.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57489__$1.indexes,other57490.indexes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57489__$1.__extmap,other57490.__extmap)));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new fulcro.client.primitives.Indexer(self__.indexes,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__57487){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__57503 = cljs.core.keyword_identical_QMARK_;
var expr__57504 = k__4393__auto__;
if(cljs.core.truth_((pred__57503.cljs$core$IFn$_invoke$arity$2 ? pred__57503.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545),expr__57504) : pred__57503.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),expr__57504)))){
return (new fulcro.client.primitives.Indexer(G__57487,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.client.primitives.Indexer(self__.indexes,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__57487),null));
}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes,null))], null),self__.__extmap));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__57487){
var self__ = this;
var this__4384__auto____$1 = this;
return (new fulcro.client.primitives.Indexer(self__.indexes,G__57487,self__.__extmap,self__.__hash));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4391__auto__,(0)),cljs.core._nth(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.indexes);
});

fulcro.client.primitives.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"indexes","indexes",-1157960224,null)], null);
});

fulcro.client.primitives.Indexer.cljs$lang$type = true;

fulcro.client.primitives.Indexer.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"fulcro.client.primitives/Indexer",null,(1),null));
});

fulcro.client.primitives.Indexer.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"fulcro.client.primitives/Indexer");
});

/**
 * Positional factory function for fulcro.client.primitives/Indexer.
 */
fulcro.client.primitives.__GT_Indexer = (function fulcro$client$primitives$__GT_Indexer(indexes){
return (new fulcro.client.primitives.Indexer(indexes,null,null,null));
});

/**
 * Factory function for fulcro.client.primitives/Indexer, taking a map of keywords to field values.
 */
fulcro.client.primitives.map__GT_Indexer = (function fulcro$client$primitives$map__GT_Indexer(G__57491){
var extmap__4424__auto__ = (function (){var G__57506 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57491,new cljs.core.Keyword(null,"indexes","indexes",1496475545));
if(cljs.core.record_QMARK_(G__57491)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57506);
} else {
return G__57506;
}
})();
return (new fulcro.client.primitives.Indexer(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(G__57491),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * PRIVATE: do not use.
 */
fulcro.client.primitives._to_env = (function fulcro$client$primitives$_to_env(x){
var config = ((fulcro.client.primitives.reconciler_QMARK_(x))?new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys(config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"parser","parser",-1543495310)], null));
});
/**
 * Given an environment, a query and a set of remotes return a hash map of remotes
 * mapped to the query specific to that remote.
 */
fulcro.client.primitives.gather_sends = (function fulcro$client$primitives$gather_sends(p__57508,q,remotes,tx_time){
var map__57509 = p__57508;
var map__57509__$1 = (((((!((map__57509 == null))))?(((((map__57509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57509):map__57509);
var env = map__57509__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57509__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__57509,map__57509__$1,env,parser){
return (function (p1__57507_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__57507_SHARP_,(function (){var G__57511 = (parser.cljs$core$IFn$_invoke$arity$3 ? parser.cljs$core$IFn$_invoke$arity$3(env,q,p1__57507_SHARP_) : parser.call(null,env,q,p1__57507_SHARP_));
if((G__57511 == null)){
return null;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__57511,cljs.core.assoc,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456),tx_time);
}
})()],null));
});})(map__57509,map__57509__$1,env,parser))
),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (map__57509,map__57509__$1,env,parser){
return (function (p__57512){
var vec__57513 = p__57512;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57513,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57513,(1),null);
return (cljs.core.count(v) > (0));
});})(map__57509,map__57509__$1,env,parser))
)),remotes);
});
fulcro.client.primitives.schedule_sends_BANG_ = (function fulcro$client$primitives$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(fulcro.client.impl.protocols.schedule_sends_BANG_(reconciler))){
return setTimeout((function (){
return fulcro.client.impl.protocols.send_BANG_(reconciler);
}),(0));
} else {
return null;
}
});
/**
 * PRIVATE.
 */
fulcro.client.primitives._queue_render_BANG_ = (function fulcro$client$primitives$_queue_render_BANG_(f){
if(cljs.core.fn_QMARK_(fulcro.client.primitives._STAR_raf_STAR_)){
return fulcro.client.primitives._STAR_raf_STAR_.call(null,f);
} else {
if((!((typeof requestAnimationFrame !== 'undefined')))){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
});
var throttle_58325 = (new goog.async.Throttle((function (reconciler){
return fulcro.client.primitives._queue_render_BANG_((function (){
return fulcro.client.impl.protocols.reconcile_BANG_(reconciler);
}));
}),(16)));
fulcro.client.primitives.schedule_render_BANG_ = ((function (throttle_58325){
return (function fulcro$client$primitives$schedule_render_BANG_(reconciler){
return throttle_58325.fire(reconciler);
});})(throttle_58325))
;
/**
 * Returns true if the component is mounted.
 */
fulcro.client.primitives.mounted_QMARK_ = (function fulcro$client$primitives$mounted_QMARK_(x){
return ((fulcro.client.primitives.component_QMARK_(x)) && (cljs.core.boolean$(goog.object.get(x,"fulcro$mounted"))));
});
/**
 * Finds props for a given component. Returns ::no-ident if the component has
 *   no ident (which prevents localized update). This eliminates the need for
 *   path data.
 */
fulcro.client.primitives.fulcro_ui__GT_props = (function fulcro$client$primitives$fulcro_ui__GT_props(p__57516,c){
var map__57517 = p__57516;
var map__57517__$1 = (((((!((map__57517 == null))))?(((((map__57517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57517):map__57517);
var env = map__57517__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57517__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57517__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ui = (((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.fulcro$client$primitives$Ident$))))?true:false):false))?(function (){var id = fulcro.client.primitives.ident(c,fulcro.client.primitives.props(c));
var has_tempid_QMARK_ = (function (){var G__57520 = cljs.core.second(id);
return (fulcro.client.primitives.tempid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.tempid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__57520) : fulcro.client.primitives.tempid_QMARK_.call(null,G__57520));
})();
var query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([id,fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(c,cljs.core.deref(state))])], null);
var data_path = new cljs.core.Keyword("fulcro.client.impl.parser","data-path","fulcro.client.impl.parser/data-path",1793359026).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fulcro.client.primitives.props(c)));
var remap_happened_QMARK_ = (function (){var and__4120__auto__ = has_tempid_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),id) == null);
} else {
return and__4120__auto__;
}
})();
var result = (function (){var G__57521 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"replacement-root-path","replacement-root-path",-1563938351),data_path);
var G__57522 = query;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__57521,G__57522) : parser.call(null,G__57521,G__57522));
})();
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,id);
if(cljs.core.truth_((function (){var or__4131__auto__ = (!(cljs.core.vector_QMARK_(id)));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (cljs.core.second(id) == null);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return remap_happened_QMARK_;
}
}
})())){
return new cljs.core.Keyword("fulcro.client.primitives","no-ident","fulcro.client.primitives/no-ident",1180553616);
} else {
return value;
}
})():null);
var or__4131__auto__ = ui;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("fulcro.client.primitives","no-ident","fulcro.client.primitives/no-ident",1180553616);
}
});
/**
 * Add computed properties to props. Note will replace any pre-existing
 * computed properties.
 */
fulcro.client.primitives.computed = (function fulcro$client$primitives$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_(props)){
var G__57523 = props;
if((!(cljs.core.empty_QMARK_(computed_map)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__57523,cljs.core.assoc,new cljs.core.Keyword("fulcro.client.primitives","computed","fulcro.client.primitives/computed",201987962),computed_map);
} else {
return G__57523;
}
} else {
var G__57524 = props;
if((!(cljs.core.empty_QMARK_(computed_map)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57524,new cljs.core.Keyword("fulcro.client.primitives","computed","fulcro.client.primitives/computed",201987962),computed_map);
} else {
return G__57524;
}
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
fulcro.client.primitives.get_computed = (function fulcro$client$primitives$get_computed(var_args){
var G__57526 = arguments.length;
switch (G__57526) {
case 1:
return fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentVector.EMPTY);
});

fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__57527 = x;
if(fulcro.client.primitives.component_QMARK_(x)){
return fulcro.client.primitives.props(G__57527);
} else {
return G__57527;
}
})();
var ks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","computed","fulcro.client.primitives/computed",201987962)], null),(function (){var G__57528 = k_or_ks;
if((!(cljs.core.sequential_QMARK_(k_or_ks)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__57528],null));
} else {
return G__57528;
}
})());
if(cljs.core.vector_QMARK_(props)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(props),ks);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,ks);
}
}
});

fulcro.client.primitives.get_computed.cljs$lang$maxFixedArity = 2;

/**
 * Similar to factory, but returns a function with the signature
 *   [props computed & children] instead of default [props & children].
 *   This makes easier to send computed.
 */
fulcro.client.primitives.computed_factory = (function fulcro$client$primitives$computed_factory(var_args){
var G__57530 = arguments.length;
switch (G__57530) {
case 1:
return fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.PersistentArrayMap.EMPTY);
});

fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,options){
var real_factory = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(class$,options);
return ((function (real_factory){
return (function() {
var G__58355 = null;
var G__58355__1 = (function (props){
return (real_factory.cljs$core$IFn$_invoke$arity$1 ? real_factory.cljs$core$IFn$_invoke$arity$1(props) : real_factory.call(null,props));
});
var G__58355__2 = (function (props,computed_props){
var G__57531 = fulcro.client.primitives.computed(props,computed_props);
return (real_factory.cljs$core$IFn$_invoke$arity$1 ? real_factory.cljs$core$IFn$_invoke$arity$1(G__57531) : real_factory.call(null,G__57531));
});
var G__58355__3 = (function() { 
var G__58361__delegate = function (props,computed_props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,fulcro.client.primitives.computed(props,computed_props),children);
};
var G__58361 = function (props,computed_props,var_args){
var children = null;
if (arguments.length > 2) {
var G__58364__i = 0, G__58364__a = new Array(arguments.length -  2);
while (G__58364__i < G__58364__a.length) {G__58364__a[G__58364__i] = arguments[G__58364__i + 2]; ++G__58364__i;}
  children = new cljs.core.IndexedSeq(G__58364__a,0,null);
} 
return G__58361__delegate.call(this,props,computed_props,children);};
G__58361.cljs$lang$maxFixedArity = 2;
G__58361.cljs$lang$applyTo = (function (arglist__58365){
var props = cljs.core.first(arglist__58365);
arglist__58365 = cljs.core.next(arglist__58365);
var computed_props = cljs.core.first(arglist__58365);
var children = cljs.core.rest(arglist__58365);
return G__58361__delegate(props,computed_props,children);
});
G__58361.cljs$core$IFn$_invoke$arity$variadic = G__58361__delegate;
return G__58361;
})()
;
G__58355 = function(props,computed_props,var_args){
var children = var_args;
switch(arguments.length){
case 1:
return G__58355__1.call(this,props);
case 2:
return G__58355__2.call(this,props,computed_props);
default:
var G__58369 = null;
if (arguments.length > 2) {
var G__58370__i = 0, G__58370__a = new Array(arguments.length -  2);
while (G__58370__i < G__58370__a.length) {G__58370__a[G__58370__i] = arguments[G__58370__i + 2]; ++G__58370__i;}
G__58369 = new cljs.core.IndexedSeq(G__58370__a,0,null);
}
return G__58355__3.cljs$core$IFn$_invoke$arity$variadic(props,computed_props, G__58369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__58355.cljs$lang$maxFixedArity = 2;
G__58355.cljs$lang$applyTo = G__58355__3.cljs$lang$applyTo;
G__58355.cljs$core$IFn$_invoke$arity$1 = G__58355__1;
G__58355.cljs$core$IFn$_invoke$arity$2 = G__58355__2;
G__58355.cljs$core$IFn$_invoke$arity$variadic = G__58355__3.cljs$core$IFn$_invoke$arity$variadic;
return G__58355;
})()
;})(real_factory))
});

fulcro.client.primitives.computed_factory.cljs$lang$maxFixedArity = 2;

/**
 * Returns the component's children.
 */
fulcro.client.primitives.children = (function fulcro$client$primitives$children(component){
var cs = component.props.children;
if(((cljs.core.coll_QMARK_(cs)) || (cljs.core.array_QMARK_(cs)))){
return cs;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cs], null);
}
});
/**
 * An exception-protected React .forceUpdate
 */
fulcro.client.primitives.force_update = (function fulcro$client$primitives$force_update(var_args){
var G__57533 = arguments.length;
switch (G__57533) {
case 2:
return fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$2 = (function (c,cb){
try{return c.forceUpdate(cb);
}catch (e57534){var e = e57534;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1941], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Component",c,"threw an exception while rendering "], 0));
}catch (e57535){if((e57535 instanceof Error)){
var e__48920__auto___58378 = e57535;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1941], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___58378], 0));
} else {
throw e57535;

}
}
if(cljs.core.truth_(goog.DEBUG)){
return console.error(e);
} else {
return null;
}
}});

fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$1 = (function (c){
return fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$2(c,null);
});

fulcro.client.primitives.force_update.cljs$lang$maxFixedArity = 2;

/**
 * Remove components from the given list by removing those whose paths are encompassed by others. In other words,
 * remove components from the list when there is a parent of that component also in the list.
 */
fulcro.client.primitives.dedup_components_by_path = (function fulcro$client$primitives$dedup_components_by_path(components){
var get_path = (function (p1__57536_SHARP_){
var G__57537 = p1__57536_SHARP_;
var G__57537__$1 = (((G__57537 == null))?null:fulcro.client.primitives.props(G__57537));
var G__57537__$2 = (((G__57537__$1 == null))?null:cljs.core.meta(G__57537__$1));
if((G__57537__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.client.impl.parser","data-path","fulcro.client.impl.parser/data-path",1793359026).cljs$core$IFn$_invoke$arity$1(G__57537__$2);
}
});
var sorted_comps = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(get_path,components);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (get_path,sorted_comps){
return (function (acc,c){
var last_component = cljs.core.last(acc);
var prev_path = get_path(last_component);
var path = get_path(c);
var path_prefix = cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(prev_path),path);
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_component,c);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = prev_path;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_path,path_prefix);
} else {
return and__4120__auto__;
}
}
})())){
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,c);
}
});})(get_path,sorted_comps))
,cljs.core.PersistentVector.EMPTY,sorted_comps);
});
/**
 * PRIVATE.
 * 
 * Run an optimal render of the given `refresh-queue` (a list of idents and data query keywords). This function attempts
 * to refresh the minimum number of components according to the UI depth and state. If it cannot do targeted updates then
 * it will call `render-root` to render the entire UI. Other optimizations may apply in render-root.
 */
fulcro.client.primitives._optimal_render = (function fulcro$client$primitives$_optimal_render(reconciler,refresh_queue,render_root){
var reconciler_state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler);
var map__57541 = cljs.core.deref(reconciler_state);
var map__57541__$1 = (((((!((map__57541 == null))))?(((((map__57541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57541):map__57541);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57541__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var render_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57541__$1,new cljs.core.Keyword(null,"render-props","render-props",-249976873));
var root__$1 = ((fulcro.client.primitives.component_QMARK_(root))?root:(fulcro.client.primitives.class__GT_any.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.class__GT_any.cljs$core$IFn$_invoke$arity$2(reconciler,root) : fulcro.client.primitives.class__GT_any.call(null,reconciler,root)));
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var queued_components = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (reconciler_state,map__57541,map__57541__$1,root,render_props,root__$1,config){
return (function (p1__57538_SHARP_){
return fulcro.client.impl.protocols.key__GT_components(new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(config),p1__57538_SHARP_);
});})(reconciler_state,map__57541,map__57541__$1,root,render_props,root__$1,config))
),((function (reconciler_state,map__57541,map__57541__$1,root,render_props,root__$1,config){
return (function (p1__57539_SHARP_,p2__57540_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__57539_SHARP_,p2__57540_SHARP_);
});})(reconciler_state,map__57541,map__57541__$1,root,render_props,root__$1,config))
,cljs.core.PersistentHashSet.EMPTY,refresh_queue);
var mounted_components = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.mounted_QMARK_,queued_components);
var data_path = ((function (reconciler_state,map__57541,map__57541__$1,root,render_props,root__$1,config,queued_components,mounted_components){
return (function (c){
var G__57543 = c;
var G__57543__$1 = (((G__57543 == null))?null:fulcro.client.primitives.props(G__57543));
var G__57543__$2 = (((G__57543__$1 == null))?null:cljs.core.meta(G__57543__$1));
if((G__57543__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.client.impl.parser","data-path","fulcro.client.impl.parser/data-path",1793359026).cljs$core$IFn$_invoke$arity$1(G__57543__$2);
}
});})(reconciler_state,map__57541,map__57541__$1,root,render_props,root__$1,config,queued_components,mounted_components))
;
var parent_with_path = ((function (reconciler_state,map__57541,map__57541__$1,root,render_props,root__$1,config,queued_components,mounted_components,data_path){
return (function fulcro$client$primitives$_optimal_render_$_pwp(c){
var p = fulcro.client.primitives.parent(c);
while(true){
if(cljs.core.truth_((function (){var and__4120__auto__ = p;
if(cljs.core.truth_(and__4120__auto__)){
return data_path(p);
} else {
return and__4120__auto__;
}
})())){
return p;
} else {
if(cljs.core.truth_(p)){
var G__58392 = fulcro.client.primitives.parent(p);
p = G__58392;
continue;
} else {
return root__$1;

}
}
break;
}
});})(reconciler_state,map__57541,map__57541__$1,root,render_props,root__$1,config,queued_components,mounted_components,data_path))
;
var refreshable_components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (reconciler_state,map__57541,map__57541__$1,root,render_props,root__$1,config,queued_components,mounted_components,data_path,parent_with_path){
return (function (result,c){
if(cljs.core.truth_(data_path(c))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,c);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,parent_with_path(c));
}
});})(reconciler_state,map__57541,map__57541__$1,root,render_props,root__$1,config,queued_components,mounted_components,data_path,parent_with_path))
,cljs.core.PersistentVector.EMPTY,mounted_components);
var env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives._to_env(config),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler);
if(cljs.core.truth_(root__$1)){
var old_tree = fulcro.client.primitives.props(root__$1);
var components = fulcro.client.primitives.dedup_components_by_path(refreshable_components);
var updated_tree = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_tree,components,reconciler_state,map__57541,map__57541__$1,root,render_props,root__$1,config,queued_components,mounted_components,data_path,parent_with_path,refreshable_components,env){
return (function (tree,c){
var component_props = fulcro.client.primitives.props(c);
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(component_props);
var target_path = data_path(c);
var next_raw_props = fulcro.client.primitives.fulcro_ui__GT_props(env,c);
var force_root_QMARK_ = ((cljs.core.not(target_path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","no-ident","fulcro.client.primitives/no-ident",1180553616),next_raw_props)));
var next_props = ((force_root_QMARK_)?null:fulcro.client.primitives.computed(next_raw_props,computed));
if(force_root_QMARK_){
if(cljs.core.not(target_path)){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2010], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Optimal render skipping optimizations because component does not have a target path",c], 0));
}catch (e57544){if((e57544 instanceof Error)){
var e__48920__auto___58404 = e57544;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2010], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___58404], 0));
} else {
throw e57544;

}
}} else {
}

return cljs.core.reduced(null);
} else {
return cljs.core.assoc_in(tree,target_path,next_props);
}
});})(old_tree,components,reconciler_state,map__57541,map__57541__$1,root,render_props,root__$1,config,queued_components,mounted_components,data_path,parent_with_path,refreshable_components,env))
,old_tree,components);
if(cljs.core.truth_(updated_tree)){
return (render_props.cljs$core$IFn$_invoke$arity$1 ? render_props.cljs$core$IFn$_invoke$arity$1(updated_tree) : render_props.call(null,updated_tree));
} else {
var start = cljs.core.inst_ms((new Date()));
var _ = (render_root.cljs$core$IFn$_invoke$arity$0 ? render_root.cljs$core$IFn$_invoke$arity$0() : render_root.call(null));
var end = cljs.core.inst_ms((new Date()));
if(((end - start) > (20))){
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2021], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Root render took ",(end - start),"ms"], 0));
}catch (e57545){if((e57545 instanceof Error)){
var e__48920__auto__ = e57545;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2021], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto__], 0));
} else {
throw e57545;

}
}} else {
return null;
}
}
} else {
return null;
}
});
/**
 * PRIVATE
 */
fulcro.client.primitives._reconciler_normalize_initial_state = (function fulcro$client$primitives$_reconciler_normalize_initial_state(p__57546,root_class){
var map__57547 = p__57546;
var map__57547__$1 = (((((!((map__57547 == null))))?(((((map__57547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57547):map__57547);
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57547__$1,new cljs.core.Keyword(null,"config","config",994861415));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57547__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
} else {
return and__4120__auto__;
}
})())){
var app_state = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(config));
var new_state = fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$4(root_class,app_state,true,fulcro.client.primitives.pre_merge_transform(app_state));
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(config),new_state);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),true);
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {fulcro.client.impl.protocols.IReconciler}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fulcro.client.primitives.Reconciler = (function (config,state,history,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.history = history;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
fulcro.client.primitives.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k57551,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__57555 = k57551;
var G__57555__$1 = (((G__57555 instanceof cljs.core.Keyword))?G__57555.fqn:null);
switch (G__57555__$1) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
case "history":
return self__.history;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57551,else__4388__auto__);

}
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__57556){
var vec__57557 = p__57556;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57557,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57557,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$queue_BANG_$arity$2 = (function (this$,ks){
var self__ = this;
var this$__$1 = this;
return this$__$1.fulcro$client$impl$protocols$IReconciler$queue_BANG_$arity$3(null,ks,null);
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$queue_BANG_$arity$3 = (function (_,ks,remote){
var self__ = this;
var ___$1 = this;
if((!((remote == null)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),remote], null),cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
}
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765)], null),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202).cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sends], 0));
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$get_history$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.history;
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state));
if(cljs.core.empty_QMARK_(sends)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (sends,this$__$1){
return (function fulcro$client$primitives$clear_queue_fn(state__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),false);
});})(sends,this$__$1))
);

var G__57561 = sends;
var G__57562 = ((function (G__57561,sends,this$__$1){
return (function() {
var fulcro$client$primitives$send_cb = null;
var fulcro$client$primitives$send_cb__1 = (function (resp){
return fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,resp,null);
});
var fulcro$client$primitives$send_cb__2 = (function (resp,query){
return fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,resp,query);
});
var fulcro$client$primitives$send_cb__3 = (function (resp,query,remote){
if((remote == null)){
} else {
this$__$1.fulcro$client$impl$protocols$IReconciler$queue_BANG_$arity$3(null,cljs.core.keys(resp),remote);
}

fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$4(this$__$1,resp,query,remote);

return this$__$1.fulcro$client$impl$protocols$IReconciler$reconcile_BANG_$arity$2(null,remote);
});
fulcro$client$primitives$send_cb = function(resp,query,remote){
switch(arguments.length){
case 1:
return fulcro$client$primitives$send_cb__1.call(this,resp);
case 2:
return fulcro$client$primitives$send_cb__2.call(this,resp,query);
case 3:
return fulcro$client$primitives$send_cb__3.call(this,resp,query,remote);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$primitives$send_cb.cljs$core$IFn$_invoke$arity$1 = fulcro$client$primitives$send_cb__1;
fulcro$client$primitives$send_cb.cljs$core$IFn$_invoke$arity$2 = fulcro$client$primitives$send_cb__2;
fulcro$client$primitives$send_cb.cljs$core$IFn$_invoke$arity$3 = fulcro$client$primitives$send_cb__3;
return fulcro$client$primitives$send_cb;
})()
;})(G__57561,sends,this$__$1))
;
var fexpr__57560 = new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__57560.cljs$core$IFn$_invoke$arity$2 ? fexpr__57560.cljs$core$IFn$_invoke$arity$2(G__57561,G__57562) : fexpr__57560.call(null,G__57561,G__57562));
}
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$get_network_activity$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"network-activity","network-activity",437299571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state));
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.fulcro$client$impl$protocols$IReconciler$reconcile_BANG_$arity$2(null,null);
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$reconcile_BANG_$arity$2 = (function (this$,remote){
var self__ = this;
var this$__$1 = this;
var reconciler_state = cljs.core.deref(self__.state);
var components_to_refresh = (((!((remote == null))))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),remote], null)):new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(reconciler_state));
var render_mode = new cljs.core.Keyword(null,"render-mode","render-mode",-151613976).cljs$core$IFn$_invoke$arity$1(self__.config);
var force_root_QMARK_ = ((cljs.core.empty_QMARK_(components_to_refresh)) || (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keyframe","keyframe",1957083746),null,new cljs.core.Keyword(null,"brutal","brutal",-361671204),null], null), null),render_mode)) || (fulcro.client.primitives._STAR_blindly_render_STAR_));
var blind_refresh_QMARK_ = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brutal","brutal",-361671204),null], null), null),render_mode)) || (fulcro.client.primitives._STAR_blindly_render_STAR_));
var rendered_root_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var render_root = ((function (reconciler_state,components_to_refresh,render_mode,force_root_QMARK_,blind_refresh_QMARK_,rendered_root_QMARK_,this$__$1){
return (function (){
var temp__5718__auto__ = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(reconciler_state);
if(cljs.core.truth_(temp__5718__auto__)){
var do_render = temp__5718__auto__;
if(cljs.core.truth_(cljs.core.deref(rendered_root_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(rendered_root_QMARK_,true);

return (do_render.cljs$core$IFn$_invoke$arity$0 ? do_render.cljs$core$IFn$_invoke$arity$0() : do_render.call(null));
}
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2159], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Render skipped. Renderer was nil. Possibly a hot code reload?"], 0));
}catch (e57563){if((e57563 instanceof Error)){
var e__48920__auto__ = e57563;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2159], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto__], 0));
} else {
throw e57563;

}
}}
});})(reconciler_state,components_to_refresh,render_mode,force_root_QMARK_,blind_refresh_QMARK_,rendered_root_QMARK_,this$__$1))
;
if((!((remote == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),remote], null),cljs.core.PersistentVector.EMPTY);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY);
}

var _STAR_blindly_render_STAR__orig_val__57564 = fulcro.client.primitives._STAR_blindly_render_STAR_;
var _STAR_blindly_render_STAR__temp_val__57565 = blind_refresh_QMARK_;
fulcro.client.primitives._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR__temp_val__57565;

try{if(force_root_QMARK_){
return render_root();
} else {
return fulcro.client.primitives._optimal_render(this$__$1,components_to_refresh,render_root);
}
}finally {fulcro.client.primitives._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR__orig_val__57564;
}});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$tick_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update,new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.inc);
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not(new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),true);

return true;
} else {
return false;
}
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state));
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var rctor = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(root_class);
var guid = (function (){var or__4131__auto__ = this$__$1.fulcro$client$impl$protocols$IReconciler$get_id$arity$1(null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return fulcro.util.unique_key();
}
})();
var hydrate_QMARK_ = new cljs.core.Keyword(null,"hydrate?","hydrate?",-57042185).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(this$__$1.fulcro$client$impl$protocols$IReconciler$get_id$arity$1(null))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),guid);
}

if(fulcro.client.primitives.has_query_QMARK_(root_class)){
fulcro.client.impl.protocols.index_root(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config))),root_class);
} else {
}

fulcro.client.primitives._reconciler_normalize_initial_state(this$__$1,root_class);

var renderf = ((function (ret,rctor,guid,hydrate_QMARK_,this$__$1){
return (function fulcro$client$primitives$render_fn(data){
var _STAR_reconciler_STAR__orig_val__57566 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_shared_STAR__orig_val__57567 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57568 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_reconciler_STAR__temp_val__57569 = this$__$1;
var _STAR_shared_STAR__temp_val__57570 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config))?(function (){var fexpr__57572 = new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__57572.cljs$core$IFn$_invoke$arity$1 ? fexpr__57572.cljs$core$IFn$_invoke$arity$1(data) : fexpr__57572.call(null,data));
})():null)], 0));
var _STAR_instrument_STAR__temp_val__57571 = new cljs.core.Keyword(null,"instrument","instrument",-960698844).cljs$core$IFn$_invoke$arity$1(self__.config);
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57569;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57570;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57571;

try{var hydrate_QMARK___$1 = new cljs.core.Keyword(null,"hydrate?","hydrate?",-57042185).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(data));
var render_function = (cljs.core.truth_(hydrate_QMARK___$1)?new cljs.core.Keyword(null,"root-hydrate","root-hydrate",-1597214367).cljs$core$IFn$_invoke$arity$1(self__.config):new cljs.core.Keyword(null,"root-render","root-render",835981146).cljs$core$IFn$_invoke$arity$1(self__.config));
var c = (((!((target == null))))?(function (){var G__57573 = (rctor.cljs$core$IFn$_invoke$arity$1 ? rctor.cljs$core$IFn$_invoke$arity$1(data) : rctor.call(null,data));
var G__57574 = target;
return (render_function.cljs$core$IFn$_invoke$arity$2 ? render_function.cljs$core$IFn$_invoke$arity$2(G__57573,G__57574) : render_function.call(null,G__57573,G__57574));
})():(((cljs.core.deref(ret) == null))?(rctor.cljs$core$IFn$_invoke$arity$1 ? rctor.cljs$core$IFn$_invoke$arity$1(data) : rctor.call(null,data)):(function (){var temp__5720__auto__ = cljs.core.deref(ret);
if(cljs.core.truth_(temp__5720__auto__)){
var c_SINGLEQUOTE_ = temp__5720__auto__;
if(fulcro.client.primitives.mounted_QMARK_(c_SINGLEQUOTE_)){
return fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$2(c_SINGLEQUOTE_,data);
} else {
return null;
}
} else {
return null;
}
})()
));
if((((cljs.core.deref(ret) == null)) && ((!((c == null)))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"root","root",-448657453),c);

return cljs.core.reset_BANG_(ret,c);
} else {
return null;
}
}finally {fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57568;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57567;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57566;
}});})(ret,rctor,guid,hydrate_QMARK_,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,hydrate_QMARK_,this$__$1){
return (function() {
var fulcro$client$primitives$parse_fn = null;
var fulcro$client$primitives$parse_fn__0 = (function (){
return fulcro$client$primitives$parse_fn.cljs$core$IFn$_invoke$arity$1(false);
});
var fulcro$client$primitives$parse_fn__1 = (function (hydrate_QMARK___$1){
var root_query = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(rctor,cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
if((((root_query == null)) || (cljs.core.vector_QMARK_(root_query)))){
} else {
throw (new Error(["Assert failed: ","Application root query must be a vector","\n","(or (nil? root-query) (vector? root-query))"].join('')));
}

if((!((root_query == null)))){
var env = fulcro.client.primitives._to_env(self__.config);
var root_props = (function (){var fexpr__57575 = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__57575.cljs$core$IFn$_invoke$arity$2 ? fexpr__57575.cljs$core$IFn$_invoke$arity$2(env,root_query) : fexpr__57575.call(null,env,root_query));
})();
if(cljs.core.empty_QMARK_(root_props)){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2086], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["WARNING: Root props were empty. Your root query returned no data!"], 0));
}catch (e57576){if((e57576 instanceof Error)){
var e__48920__auto___58500 = e57576;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2086], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___58500], 0));
} else {
throw e57576;

}
}} else {
}

return renderf(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(root_props,cljs.core.assoc,new cljs.core.Keyword(null,"hydrate?","hydrate?",-57042185),hydrate_QMARK___$1));
} else {
return renderf(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)),cljs.core.assoc,new cljs.core.Keyword(null,"hydrate?","hydrate?",-57042185),hydrate_QMARK___$1));
}
});
fulcro$client$primitives$parse_fn = function(hydrate_QMARK___$1){
switch(arguments.length){
case 0:
return fulcro$client$primitives$parse_fn__0.call(this);
case 1:
return fulcro$client$primitives$parse_fn__1.call(this,hydrate_QMARK___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$primitives$parse_fn.cljs$core$IFn$_invoke$arity$0 = fulcro$client$primitives$parse_fn__0;
fulcro$client$primitives$parse_fn.cljs$core$IFn$_invoke$arity$1 = fulcro$client$primitives$parse_fn__1;
return fulcro$client$primitives$parse_fn;
})()
;})(renderf,ret,rctor,guid,hydrate_QMARK_,this$__$1))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"render","render",-1408033454),parsef,new cljs.core.Keyword(null,"root","root",-448657453),root_class,new cljs.core.Keyword(null,"render-props","render-props",-249976873),renderf,new cljs.core.Keyword(null,"remove","remove",-131428414),((function (renderf,parsef,ret,rctor,guid,hydrate_QMARK_,this$__$1){
return (function fulcro$client$primitives$remove_fn(){
cljs.core.remove_watch(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),this$__$1.fulcro$client$impl$protocols$IReconciler$get_id$arity$1(null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (renderf,parsef,ret,rctor,guid,hydrate_QMARK_,this$__$1){
return (function (p1__57549_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__57549_SHARP_,new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword(null,"root","root",-448657453)),new cljs.core.Keyword(null,"remove","remove",-131428414));
});})(renderf,parsef,ret,rctor,guid,hydrate_QMARK_,this$__$1))
);

if((target == null)){
return null;
} else {
var fexpr__57577 = new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789).cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__57577.cljs$core$IFn$_invoke$arity$1 ? fexpr__57577.cljs$core$IFn$_invoke$arity$1(target) : fexpr__57577.call(null,target));
}
});})(renderf,parsef,ret,rctor,guid,hydrate_QMARK_,this$__$1))
], null));

cljs.core.add_watch(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),this$__$1.fulcro$client$impl$protocols$IReconciler$get_id$arity$1(null),((function (renderf,parsef,ret,rctor,guid,hydrate_QMARK_,this$__$1){
return (function fulcro$client$primitives$add_fn(_,___$1,___$2,___$3){
if((!(fulcro.client.primitives.has_query_QMARK_(root_class)))){
return fulcro.client.primitives._queue_render_BANG_(parsef);
} else {
this$__$1.fulcro$client$impl$protocols$IReconciler$tick_BANG_$arity$1(null);

return fulcro.client.primitives.schedule_render_BANG_(this$__$1);
}
});})(renderf,parsef,ret,rctor,guid,hydrate_QMARK_,this$__$1))
);

parsef(hydrate_QMARK_);

return cljs.core.deref(ret);
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$reindex_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.state),new cljs.core.Keyword(null,"root","root",-448657453));
var root_class = fulcro.client.primitives.react_type(root);
if(fulcro.client.primitives.has_query_QMARK_(root)){
var indexer = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config);
return fulcro.client.impl.protocols.index_root(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(indexer,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config))),root_class);
} else {
return null;
}
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__5720__auto__ = new cljs.core.Keyword(null,"remove","remove",-131428414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state));
if(cljs.core.truth_(temp__5720__auto__)){
var remove = temp__5720__auto__;
return (remove.cljs$core$IFn$_invoke$arity$0 ? remove.cljs$core$IFn$_invoke$arity$0() : remove.call(null));
} else {
return null;
}
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$get_id$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#fulcro.client.primitives.Reconciler{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"history","history",-247395220),self__.history],null))], null),self__.__extmap));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57550){
var self__ = this;
var G__57550__$1 = this;
return (new cljs.core.RecordIter((0),G__57550__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"history","history",-247395220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new fulcro.client.primitives.Reconciler(self__.config,self__.state,self__.history,self__.__meta,self__.__extmap,self__.__hash));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (775628851 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
(this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57552,other57553){
var self__ = this;
var this57552__$1 = this;
return (((!((other57553 == null)))) && ((this57552__$1.constructor === other57553.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57552__$1.config,other57553.config)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57552__$1.state,other57553.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57552__$1.history,other57553.history)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57552__$1.__extmap,other57553.__extmap)));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"history","history",-247395220),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new fulcro.client.primitives.Reconciler(self__.config,self__.state,self__.history,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__57550){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__57578 = cljs.core.keyword_identical_QMARK_;
var expr__57579 = k__4393__auto__;
if(cljs.core.truth_((pred__57578.cljs$core$IFn$_invoke$arity$2 ? pred__57578.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"config","config",994861415),expr__57579) : pred__57578.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__57579)))){
return (new fulcro.client.primitives.Reconciler(G__57550,self__.state,self__.history,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57578.cljs$core$IFn$_invoke$arity$2 ? pred__57578.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__57579) : pred__57578.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__57579)))){
return (new fulcro.client.primitives.Reconciler(self__.config,G__57550,self__.history,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57578.cljs$core$IFn$_invoke$arity$2 ? pred__57578.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"history","history",-247395220),expr__57579) : pred__57578.call(null,new cljs.core.Keyword(null,"history","history",-247395220),expr__57579)))){
return (new fulcro.client.primitives.Reconciler(self__.config,self__.state,G__57550,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.client.primitives.Reconciler(self__.config,self__.state,self__.history,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__57550),null));
}
}
}
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"config","config",994861415),self__.config,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"history","history",-247395220),self__.history,null))], null),self__.__extmap));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__57550){
var self__ = this;
var this__4384__auto____$1 = this;
return (new fulcro.client.primitives.Reconciler(self__.config,self__.state,self__.history,G__57550,self__.__extmap,self__.__hash));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4391__auto__,(0)),cljs.core._nth(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config));
});

fulcro.client.primitives.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"history","history",1393136307,null)], null);
});

fulcro.client.primitives.Reconciler.cljs$lang$type = true;

fulcro.client.primitives.Reconciler.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"fulcro.client.primitives/Reconciler",null,(1),null));
});

fulcro.client.primitives.Reconciler.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"fulcro.client.primitives/Reconciler");
});

/**
 * Positional factory function for fulcro.client.primitives/Reconciler.
 */
fulcro.client.primitives.__GT_Reconciler = (function fulcro$client$primitives$__GT_Reconciler(config,state,history){
return (new fulcro.client.primitives.Reconciler(config,state,history,null,null,null));
});

/**
 * Factory function for fulcro.client.primitives/Reconciler, taking a map of keywords to field values.
 */
fulcro.client.primitives.map__GT_Reconciler = (function fulcro$client$primitives$map__GT_Reconciler(G__57554){
var extmap__4424__auto__ = (function (){var G__57581 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57554,new cljs.core.Keyword(null,"config","config",994861415),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"history","history",-247395220)], 0));
if(cljs.core.record_QMARK_(G__57554)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57581);
} else {
return G__57581;
}
})();
return (new fulcro.client.primitives.Reconciler(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__57554),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__57554),new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(G__57554),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Construct a reconciler from a configuration map.
 * 
 * Required parameters:
 *   :state        - the application state. If IAtom value is not supplied the
 *                   data will be normalized into the default database format
 *                   using the root query. This can be disabled by explicitly
 *                   setting the optional :normalize parameter to false.
 *   :parser       - the parser to be used
 * 
 * Optional parameters:
 *   :id           - a unique ID that this reconciler will be known as. Used to resolve global variable usage when more than one app is on a page. If
 *                   left unspecified it will default to a random UUID.
 *   :shared       - a map of global shared properties for the component tree.
 *   :shared-fn    - a function to compute global shared properties from the root props.
 *                   the result is merged with :shared.
 *   :send         - required only if the parser will return a non-empty value when
 *                   run against the supplied :remotes. send is a function of two
 *                   arguments, the map of remote expressions keyed by remote target
 *                   and a callback which should be invoked with the result from each
 *                   remote target. Note this means the callback can be invoked
 *                   multiple times to support parallel fetching and incremental
 *                   loading if desired. The callback should take the response as the
 *                   first argument and the the query that was sent as the second
 *                   argument.
 *   :history      - A positive integer. The number of history steps to keep in memory.
 *   :normalize    - whether the state should be normalized. If true it is assumed
 *                   all novelty introduced into the system will also need
 *                   normalization.
 *   :remotes      - a vector of keywords representing remote services which can
 *                   evaluate query expressions. Defaults to [:remote]
 *   :hydrate?     - Bolean. When true, it indicates the the first render should assume the server pre-rendered a DOM,
 *                   which will cause a call to hydrate instead of render (React 16+).
 *   :root-render  - the root render function. Defaults to ReactDOM.render
 *   :root-hydrate - the root hydrate function. Defaults to ReactDOM.hydrate. Only used on initial render, and only if `:hydrate?` is true.
 *   :root-unmount - the root unmount function. Defaults to
 *                   ReactDOM.unmountComponentAtNode
 *   :render-mode  - :normal - fastest, and the default. Components with idents can refresh in isolation.
 *                             shouldComponentUpdate returns false if state/data are unchanged. Follow-on reads are
 *                             required to refresh non-local concerns.
 *                   :keyframe - Every data change runs a root-level query and re-renders from root.
 *                               shouldComponentUpdate is the same as :default. Follow-on reads are *not* needed for
 *                               non-local UI refresh.
 *                   :brutal - Every data change runs a root-level query, and re-renders from root. shouldComponentUpdate
 *                             always returns true, forcing full React diff. Not really useful for anything but benchmarking.
 *   :lifecycle    - A function (fn [component event]) that is called when react components either :mount or :unmount. Useful for debugging tools.
 *   :tx-listen    - a function of 2 arguments that will listen to transactions.
 *                   The first argument is the parser's env map also containing
 *                   the old and new state. The second argument is a history-step (see history). It also contains
 *                   a couple of legacy fields for bw compatibility with 1.0.
 */
fulcro.client.primitives.reconciler = (function fulcro$client$primitives$reconciler(p__57589){
var map__57590 = p__57589;
var map__57590__$1 = (((((!((map__57590 == null))))?(((((map__57590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57590):map__57590);
var config = map__57590__$1;
var root_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57590__$1,new cljs.core.Keyword(null,"root-render","root-render",835981146),((function (map__57590,map__57590__$1,config){
return (function (p1__57584_SHARP_,p2__57585_SHARP_){
return ReactDOM.render(p1__57584_SHARP_,p2__57585_SHARP_);
});})(map__57590,map__57590__$1,config))
);
var normalize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57590__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051));
var query_transform_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57590__$1,new cljs.core.Keyword(null,"query-transform-default","query-transform-default",-1684574273));
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57590__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var root_hydrate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57590__$1,new cljs.core.Keyword(null,"root-hydrate","root-hydrate",-1597214367),((function (map__57590,map__57590__$1,config,root_render,normalize,query_transform_default,tx_listen){
return (function (p1__57586_SHARP_,p2__57587_SHARP_){
return ReactDOM.hydrate(p1__57586_SHARP_,p2__57587_SHARP_);
});})(map__57590,map__57590__$1,config,root_render,normalize,query_transform_default,tx_listen))
);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57590__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var merge_sends = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57590__$1,new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),((function (map__57590,map__57590__$1,config,root_render,normalize,query_transform_default,tx_listen,root_hydrate,instrument){
return (function (p1__57582_SHARP_,p2__57583_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__57582_SHARP_,p2__57583_SHARP_], 0));
});})(map__57590,map__57590__$1,config,root_render,normalize,query_transform_default,tx_listen,root_hydrate,instrument))
);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57590__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862));
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57590__$1,new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576)], null));
var render_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57590__$1,new cljs.core.Keyword(null,"render-mode","render-mode",-151613976),new cljs.core.Keyword(null,"normal","normal",-1519123858));
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57590__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57590__$1,new cljs.core.Keyword(null,"history","history",-247395220),(200));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57590__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var lifecycle = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57590__$1,new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205),null);
var shared_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57590__$1,new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144));
var load_marker_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57590__$1,new cljs.core.Keyword(null,"load-marker-default","load-marker-default",335781105));
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57590__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57590__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var root_unmount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57590__$1,new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),((function (map__57590,map__57590__$1,config,root_render,normalize,query_transform_default,tx_listen,root_hydrate,instrument,merge_sends,merge_ident,remotes,render_mode,migrate,history,state,lifecycle,shared_fn,load_marker_default,parser,id){
return (function (p1__57588_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__57588_SHARP_);
});})(map__57590,map__57590__$1,config,root_render,normalize,query_transform_default,tx_listen,root_hydrate,instrument,merge_sends,merge_ident,remotes,render_mode,migrate,history,state,lifecycle,shared_fn,load_marker_default,parser,id))
);
var send = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57590__$1,new cljs.core.Keyword(null,"send","send",-652151114));
var merge_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57590__$1,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161));
var hydrate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57590__$1,new cljs.core.Keyword(null,"hydrate?","hydrate?",-57042185),false);
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57590__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var idxr = fulcro.client.primitives.map__GT_Indexer(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null));
var norm_QMARK_ = (((!((state == null))))?(((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === state.cljs$core$IAtom$))))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state));
var ret = (new fulcro.client.primitives.Reconciler(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"root-hydrate","root-hydrate",-1597214367),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"render-mode","render-mode",-151613976),new cljs.core.Keyword(null,"migrate","migrate",-207110743),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205),new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144),new cljs.core.Keyword(null,"load-marker-default","load-marker-default",335781105),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"indexer","indexer",-1774914315),new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),new cljs.core.Keyword(null,"hydrate?","hydrate?",-57042185),new cljs.core.Keyword(null,"root-render","root-render",835981146),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"query-transform-default","query-transform-default",-1684574273)],[root_hydrate,true,instrument,merge_ident,merge_sends,remotes,render_mode,migrate,state_SINGLEQUOTE_,lifecycle,shared_fn,load_marker_default,parser,idxr,root_unmount,send,shared,merge_tree,hydrate_QMARK_,root_render,(function (){var or__4131__auto__ = (!(norm_QMARK_));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return normalize;
}
})(),tx_listen,query_transform_default]),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"normalized","normalized",-1887621663),new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"pending-requests","pending-requests",779048051),new cljs.core.Keyword(null,"network-activity","network-activity",437299571),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"target","target",253001721)],[norm_QMARK_,cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.zipmap(remotes,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"active-requests","active-requests",1354177961),cljs.core.PersistentArrayMap.EMPTY], null)))),null,id,(0),null])),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(fulcro.history.new_history(history)),null,null,null));
return ret;
});
/**
 * Adds request to a queue in the reconciler. This queue is *not* used
 *   for internal processing, only because the contents of core.async channels
 *   are opaque.
 */
fulcro.client.primitives.add_pending_request = (function fulcro$client$primitives$add_pending_request(reconciler,remote,request){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending-requests","pending-requests",779048051),remote], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([request], 0));
});
/**
 * Pops request from a queue in the reconciler. This queue is *not* used
 *   for internal processing, only because the contents of core.async channels
 *   are opaque.
 */
fulcro.client.primitives.pop_pending_request = (function fulcro$client$primitives$pop_pending_request(reconciler,remote){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending-requests","pending-requests",779048051),remote], null),cljs.core.pop);
});
/**
 * Internal implementation detail of transact!. Call that function instead.
 */
fulcro.client.primitives.transact_STAR_ = (function fulcro$client$primitives$transact_STAR_(reconciler,c,ref,tx){
if(cljs.core.truth_(reconciler)){
fulcro.client.impl.protocols.tick_BANG_(reconciler);

var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var ref__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = c;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = (((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.fulcro$client$primitives$Ident$))))?true:false):false);
if(and__4120__auto____$1){
return cljs.core.not(ref);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?fulcro.client.primitives.ident(c,fulcro.client.primitives.props(c)):ref);
var env = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.primitives._to_env(cfg),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"component","component",1555936782),c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null):null)], 0));
var old_state = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg));
var history = fulcro.client.primitives.get_history(reconciler);
var v = (function (){var fexpr__57595 = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(cfg);
return (fexpr__57595.cljs$core$IFn$_invoke$arity$2 ? fexpr__57595.cljs$core$IFn$_invoke$arity$2(env,tx) : fexpr__57595.call(null,env,tx));
})();
var declared_refreshes = (function (){var or__4131__auto__ = (function (){var G__57597 = v;
var G__57597__$1 = (((G__57597 == null))?null:cljs.core.meta(G__57597));
var G__57597__$2 = (((G__57597__$1 == null))?null:new cljs.core.Keyword("fulcro.client.primitives","refresh","fulcro.client.primitives/refresh",481513561).cljs$core$IFn$_invoke$arity$1(G__57597__$1));
if((G__57597__$2 == null)){
return null;
} else {
return cljs.core.vec(G__57597__$2);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var follow_on_reads = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(declared_refreshes,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,tx));
var tx_time = fulcro.client.primitives.get_current_time(reconciler);
var snds = fulcro.client.primitives.gather_sends(env,tx,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg),tx_time);
var new_state = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg));
var xs = (function (){var G__57598 = follow_on_reads;
var G__57598__$1 = (((!((c == null))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__57598,c):G__57598);
if((!((ref__$1 == null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__57598__$1,ref__$1);
} else {
return G__57598__$1;
}
})();
var history_step = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("fulcro.history","tx","fulcro.history/tx",1485693993),tx,new cljs.core.Keyword("fulcro.history","client-time","fulcro.history/client-time",1879420278),(new Date()),new cljs.core.Keyword("fulcro.history","network-sends","fulcro.history/network-sends",-234790789),snds,new cljs.core.Keyword("fulcro.history","db-before","fulcro.history/db-before",650457365),old_state,new cljs.core.Keyword("fulcro.history","db-after","fulcro.history/db-after",-1774997361),new_state], null);
if(cljs.core.truth_(history)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(history,fulcro.history.record_history_step,tx_time,history_step);
} else {
}

fulcro.client.impl.protocols.queue_BANG_(reconciler,cljs.core.into.cljs$core$IFn$_invoke$arity$3(xs,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(v)));

if(cljs.core.empty_QMARK_(snds)){
} else {
var seq__57599_58609 = cljs.core.seq(snds);
var chunk__57600_58610 = null;
var count__57601_58611 = (0);
var i__57602_58612 = (0);
while(true){
if((i__57602_58612 < count__57601_58611)){
var vec__57609_58613 = chunk__57600_58610.cljs$core$IIndexed$_nth$arity$2(null,i__57602_58612);
var remote_58614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57609_58613,(0),null);
var __58615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57609_58613,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.client.primitives.get_network_activity(reconciler),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remote_58614,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"active","active",1895962068));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","status","fulcro.client.network/status",570358457),remote_58614], null),new cljs.core.Keyword(null,"active","active",1895962068));

fulcro.client.impl.protocols.queue_BANG_(reconciler,xs,remote_58614);


var G__58617 = seq__57599_58609;
var G__58618 = chunk__57600_58610;
var G__58619 = count__57601_58611;
var G__58620 = (i__57602_58612 + (1));
seq__57599_58609 = G__58617;
chunk__57600_58610 = G__58618;
count__57601_58611 = G__58619;
i__57602_58612 = G__58620;
continue;
} else {
var temp__5720__auto___58622 = cljs.core.seq(seq__57599_58609);
if(temp__5720__auto___58622){
var seq__57599_58623__$1 = temp__5720__auto___58622;
if(cljs.core.chunked_seq_QMARK_(seq__57599_58623__$1)){
var c__4550__auto___58625 = cljs.core.chunk_first(seq__57599_58623__$1);
var G__58626 = cljs.core.chunk_rest(seq__57599_58623__$1);
var G__58627 = c__4550__auto___58625;
var G__58628 = cljs.core.count(c__4550__auto___58625);
var G__58629 = (0);
seq__57599_58609 = G__58626;
chunk__57600_58610 = G__58627;
count__57601_58611 = G__58628;
i__57602_58612 = G__58629;
continue;
} else {
var vec__57612_58631 = cljs.core.first(seq__57599_58623__$1);
var remote_58632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57612_58631,(0),null);
var __58633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57612_58631,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.client.primitives.get_network_activity(reconciler),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remote_58632,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"active","active",1895962068));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","status","fulcro.client.network/status",570358457),remote_58632], null),new cljs.core.Keyword(null,"active","active",1895962068));

fulcro.client.impl.protocols.queue_BANG_(reconciler,xs,remote_58632);


var G__58634 = cljs.core.next(seq__57599_58623__$1);
var G__58635 = null;
var G__58636 = (0);
var G__58637 = (0);
seq__57599_58609 = G__58634;
chunk__57600_58610 = G__58635;
count__57601_58611 = G__58636;
i__57602_58612 = G__58637;
continue;
}
} else {
}
}
break;
}

fulcro.client.impl.protocols.queue_BANG_(reconciler,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","status","fulcro.client.network/status",570358457)], null));

fulcro.client.impl.protocols.queue_sends_BANG_(reconciler,snds);

fulcro.client.primitives.schedule_sends_BANG_(reconciler);
}

var temp__5720__auto___58638 = new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__5720__auto___58638)){
var f_58639 = temp__5720__auto___58638;
var tx_data_58640 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_state], null)], 0));
var G__57615_58641 = tx_data_58640;
var G__57616_58642 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(history_step,new cljs.core.Keyword(null,"tx","tx",466630418),tx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ret","ret",-468222814),v], 0));
(f_58639.cljs$core$IFn$_invoke$arity$2 ? f_58639.cljs$core$IFn$_invoke$arity$2(G__57615_58641,G__57616_58642) : f_58639.call(null,G__57615_58641,G__57616_58642));
} else {
}

return v;
} else {
return null;
}
});
/**
 * Given a query expression annotate all mutations by adding a :mutator -> ident
 * entry to the metadata of each mutation expression in the query.
 */
fulcro.client.primitives.annotate_mutations = (function fulcro$client$primitives$annotate_mutations(tx,ident){
var annotate = (function fulcro$client$primitives$annotate_mutations_$_annotate(expr,ident__$1){
var G__57619 = expr;
if(fulcro.util.mutation_QMARK_(expr)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__57619,cljs.core.assoc,new cljs.core.Keyword(null,"mutator","mutator",-1326825366),ident__$1);
} else {
return G__57619;
}
});
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__57617_SHARP_){
return annotate(p1__57617_SHARP_,ident);
})),tx),cljs.core.meta(tx));
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering.
 * 
 * Example:
 * 
 *   (transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 * 
 *  NOTE: transact! is not safe to call from within mutations unless you defer it inside of a setTimeout. This is
 *  because otherwise you could potentially nest calls of swap! that will cause unexpected results. In general it
 *  the model of Fulcro is such that a call transact! within a mutation is technically just bad design. If you
 *  need pessimistic UI control, see ptransact! instead.
 */
fulcro.client.primitives.transact_BANG_ = (function fulcro$client$primitives$transact_BANG_(var_args){
var G__57621 = arguments.length;
switch (G__57621) {
case 2:
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(((fulcro.client.primitives.component_QMARK_(x)) || (fulcro.client.primitives.reconciler_QMARK_(x)))){
} else {
throw (new Error("Assert failed: (or (component? x) (reconciler? x))"));
}

if(cljs.core.vector_QMARK_(tx)){
} else {
throw (new Error("Assert failed: (vector? tx)"));
}

var tx__$1 = (function (){var G__57622 = tx;
if((function (){var and__4120__auto__ = fulcro.client.primitives.component_QMARK_(x);
if(and__4120__auto__){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.fulcro$client$primitives$Ident$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(fulcro.client.primitives.Ident,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(fulcro.client.primitives.Ident,x);
}
} else {
return and__4120__auto__;
}
})()){
return fulcro.client.primitives.annotate_mutations(G__57622,fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(x));
} else {
return G__57622;
}
})();
if(fulcro.client.primitives.reconciler_QMARK_(x)){
return fulcro.client.primitives.transact_STAR_(x,null,null,tx__$1);
} else {
if((!(fulcro.client.primitives.some_hasquery_QMARK_(x)))){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2410], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["transact! should be called on a component","that implements IQuery or has a parent that","implements IQuery"].join('')], 0));
}catch (e57625){if((e57625 instanceof Error)){
var e__48920__auto___58652 = e57625;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2410], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___58652], 0));
} else {
throw e57625;

}
}
return fulcro.client.primitives.transact_STAR_(fulcro.client.primitives.get_reconciler(x),null,null,tx__$1);
} else {
var p = fulcro.client.primitives.parent(x);
var x__$1 = x;
var tx__$2 = tx__$1;
while(true){
if((p == null)){
var r = fulcro.client.primitives.get_reconciler(x__$1);
return fulcro.client.primitives.transact_STAR_(r,x__$1,null,tx__$2);
} else {
var vec__57630 = (((((!((p == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === p.fulcro$client$impl$protocols$ITxIntercept$))))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,fulcro.client.impl.protocols.tx_intercept(p,tx__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$2], null));
var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57630,(0),null);
var tx__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57630,(1),null);
var G__58657 = fulcro.client.primitives.parent(p);
var G__58658 = x_SINGLEQUOTE_;
var G__58659 = tx__$3;
p = G__58657;
x__$1 = G__58658;
tx__$2 = G__58659;
continue;
}
break;
}

}
}
});

fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return fulcro.client.primitives.transact_STAR_(r,null,ref,tx);
});

fulcro.client.primitives.transact_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Identical to `transact!`, but marks the history edge as compressible. This means that if more than one
 *   adjacent history transition edge is compressible, only the more recent of the sequence of them is kept. This
 *   is useful for things like form input fields, where storing every keystoke in history is undesirable.
 * 
 *   NOTE: history events that trigger remote interactions are not compressible, since they may be needed for
 *   automatic network error recovery handling..
 */
fulcro.client.primitives.compressible_transact_BANG_ = (function fulcro$client$primitives$compressible_transact_BANG_(comp_or_reconciler,tx){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(comp_or_reconciler,fulcro.history.compressible_tx(tx));
});
/**
 * Shallow merge new-state into the state of this component. This is asynchronous and will NOT be reflected by
 *   `get-state` immediately, since the underlying React setState and will trigger an refresh
 *   according to React rules (see React dos for the version you're using).
 * 
 *   This function manages a cljs map within React props, and does the shallow merge by key, so setting state:
 * 
 *   {:x 1}
 * 
 *   against an existing state of {:y 2} will yield:
 * 
 *   {:x 1 :y 2}
 * 
 *   The callback is as described in the React docs (it is invoked after the state is updated).
 * 
 *   If you want to control the update function itself, use `update-state!`.
 * 
 *   If you're wanting low-level js interop to affect low-level js props: use React's `setState`.
 */
fulcro.client.primitives.set_state_BANG_ = (function fulcro$client$primitives$set_state_BANG_(var_args){
var G__57635 = arguments.length;
switch (G__57635) {
case 3:
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,callback){
if(fulcro.client.primitives.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return component.setState((function (prev_state,props){
return ({"fulcro$state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([goog.object.get(prev_state,"fulcro$state"),new_state], 0))});
}),callback);
});

fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
if(fulcro.client.primitives.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(component,new_state,null);
});

fulcro.client.primitives.set_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * DEPRECATED: Use set-state! which *is* a React-level primitive now.
 */
fulcro.client.primitives.react_set_state_BANG_ = (function fulcro$client$primitives$react_set_state_BANG_(var_args){
var G__57637 = arguments.length;
switch (G__57637) {
case 2:
return fulcro.client.primitives.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.primitives.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return fulcro.client.primitives.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3(component,new_state,null);
});

fulcro.client.primitives.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(component,new_state,cb);
});

fulcro.client.primitives.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;

var update_fn_58664 = (function (component,f,args){
return component.setState((function (prev_state,props){
return ({"fulcro$state": cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,goog.object.get(prev_state,"fulcro$state"),args)});
}));
});
/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 * 
 *  This function affects a managed cljs map maintained in React state.  If you want to affect the low-level
 *  js state itself use React's own `.setState` on the component.
 */
fulcro.client.primitives.update_state_BANG_ = ((function (update_fn_58664){
return (function fulcro$client$primitives$update_state_BANG_(var_args){
var G__57642 = arguments.length;
switch (G__57642) {
case 2:
return fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___58667 = arguments.length;
var i__4731__auto___58668 = (0);
while(true){
if((i__4731__auto___58668 < len__4730__auto___58667)){
args_arr__4751__auto__.push((arguments[i__4731__auto___58668]));

var G__58669 = (i__4731__auto___58668 + (1));
i__4731__auto___58668 = G__58669;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});})(update_fn_58664))
;

fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (update_fn_58664){
return (function (component,f){
return update_fn_58664(component,f,cljs.core.PersistentVector.EMPTY);
});})(update_fn_58664))
;

fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = ((function (update_fn_58664){
return (function (component,f,args){
return update_fn_58664(component,f,args);
});})(update_fn_58664))
;

/** @this {Function} */
fulcro.client.primitives.update_state_BANG_.cljs$lang$applyTo = ((function (update_fn_58664){
return (function (seq57639){
var G__57640 = cljs.core.first(seq57639);
var seq57639__$1 = cljs.core.next(seq57639);
var G__57641 = cljs.core.first(seq57639__$1);
var seq57639__$2 = cljs.core.next(seq57639__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57640,G__57641,seq57639__$2);
});})(update_fn_58664))
;

fulcro.client.primitives.update_state_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Return the state atom.
 * 
 * x can be anything that any->reconciler works with.
 */
fulcro.client.primitives.app_state = (function fulcro$client$primitives$app_state(x){
return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.any__GT_reconciler(x)));
});
/**
 * Get the normalized database state as a map. Requires a mounted component instance.
 */
fulcro.client.primitives.component__GT_state_map = (function fulcro$client$primitives$component__GT_state_map(component){
var G__57643 = component;
var G__57643__$1 = (((G__57643 == null))?null:fulcro.client.primitives.get_reconciler(G__57643));
var G__57643__$2 = (((G__57643__$1 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__57643__$1));
var G__57643__$3 = (((G__57643__$2 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__57643__$2));
if((G__57643__$3 == null)){
return null;
} else {
return cljs.core.deref(G__57643__$3);
}
});
/**
 * Return the application's root component. Argument can be anything that any->reconciler accepts.
 */
fulcro.client.primitives.app_root = (function fulcro$client$primitives$app_root(reconcilerish){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.any__GT_reconciler(reconcilerish))),new cljs.core.Keyword(null,"root","root",-448657453));
});
/**
 * Given a query expression convert it into an AST.
 */
fulcro.client.primitives.query__GT_ast = (function fulcro$client$primitives$query__GT_ast(query_expr){
return fulcro.client.impl.parser.query__GT_ast(query_expr);
});
/**
 * Call query->ast and return the first children.
 */
fulcro.client.primitives.query__GT_ast1 = (function fulcro$client$primitives$query__GT_ast1(query_expr){
return cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.query__GT_ast(query_expr)));
});
fulcro.client.primitives.ast__GT_query = (function fulcro$client$primitives$ast__GT_query(query_ast){

return fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(query_ast,true);
});
/**
 * Force a re-render of the root. Runs a root query, disables shouldComponentUpdate, and renders the root component.
 * This effectively forces React to do a full VDOM diff. Useful for things like changing locales where there are no
 * real data changes, but the UI still needs to refresh.
 * recomputing :shared.
 * 
 * Argument can be anything that any->reconciler accepts.
 */
fulcro.client.primitives.force_root_render_BANG_ = (function fulcro$client$primitives$force_root_render_BANG_(reconcilerish){
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.any__GT_reconciler(reconcilerish))),new cljs.core.Keyword(null,"render","render",-1408033454));
if(cljs.core.truth_(temp__5720__auto__)){
var render = temp__5720__auto__;
var _STAR_blindly_render_STAR__orig_val__57644 = fulcro.client.primitives._STAR_blindly_render_STAR_;
var _STAR_blindly_render_STAR__temp_val__57645 = true;
fulcro.client.primitives._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR__temp_val__57645;

try{return (render.cljs$core$IFn$_invoke$arity$0 ? render.cljs$core$IFn$_invoke$arity$0() : render.call(null));
}finally {fulcro.client.primitives._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR__orig_val__57644;
}} else {
return null;
}
});
/**
 * Return a temporary id.
 */
fulcro.client.primitives.tempid = (function fulcro$client$primitives$tempid(var_args){
var G__57647 = arguments.length;
switch (G__57647) {
case 0:
return fulcro.client.primitives.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return fulcro.client.primitives.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return fulcro.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
});

fulcro.client.primitives.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return fulcro.tempid.tempid.cljs$core$IFn$_invoke$arity$1(id);
});

fulcro.client.primitives.tempid.cljs$lang$maxFixedArity = 1;

/**
 * Return true if x is a tempid, false otherwise
 */
fulcro.client.primitives.tempid_QMARK_ = (function fulcro$client$primitives$tempid_QMARK_(x){
return fulcro.tempid.tempid_QMARK_(x);
});
/**
 * Create a transit reader. This reader can handler the tempid type.
 *    Can pass transit reader customization opts map.
 */
fulcro.client.primitives.reader = (function fulcro$client$primitives$reader(var_args){
var G__57649 = arguments.length;
switch (G__57649) {
case 0:
return fulcro.client.primitives.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return fulcro.client.primitives.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return fulcro.transit.reader.cljs$core$IFn$_invoke$arity$0();
});

fulcro.client.primitives.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return fulcro.transit.reader.cljs$core$IFn$_invoke$arity$1(opts);
});

fulcro.client.primitives.reader.cljs$lang$maxFixedArity = 1;

/**
 * Create a transit writer. This writer can handler the tempid type.
 * Can pass transit writer customization opts map.
 */
fulcro.client.primitives.writer = (function fulcro$client$primitives$writer(var_args){
var G__57651 = arguments.length;
switch (G__57651) {
case 0:
return fulcro.client.primitives.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return fulcro.client.primitives.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return fulcro.transit.writer.cljs$core$IFn$_invoke$arity$0();
});

fulcro.client.primitives.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return fulcro.transit.writer.cljs$core$IFn$_invoke$arity$1(opts);
});

fulcro.client.primitives.writer.cljs$lang$maxFixedArity = 1;

/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
fulcro.client.primitives.dispatch = (function fulcro$client$primitives$dispatch(_,key,___$1){
return key;
});
/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 * 
 * The mutation functions return a map keyed by:
 * 
 * `:action` - The lambda to run to do the local optimistic version of that mutation
 * any-keyword-matching-a-remote - A boolean true or AST expression of the thing to run on the named remote.
 * :refresh - A vector of namespaced keywords of data that was/will be changed by this mutation
 * 
 * When the parser runs on mutations it collects the `:refresh` list into the metadata of the results
 * under the :fulcro.client.primitives/refresh key.
 */
fulcro.client.primitives.parser = (function fulcro$client$primitives$parser(p__57652){
var map__57653 = p__57652;
var map__57653__$1 = (((((!((map__57653 == null))))?(((((map__57653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57653):map__57653);
var opts = map__57653__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57653__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57653__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
if(cljs.core.map_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (map? opts)"));
}

return fulcro.client.impl.parser.parser(opts);
});
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
fulcro.client.primitives.add_root_BANG_ = (function fulcro$client$primitives$add_root_BANG_(var_args){
var G__57656 = arguments.length;
switch (G__57656) {
case 3:
return fulcro.client.primitives.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return fulcro.client.primitives.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return fulcro.client.primitives.add_root_BANG_.cljs$core$IFn$_invoke$arity$4(reconciler,root_class,target,null);
});

fulcro.client.primitives.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(fulcro.client.primitives.reconciler_QMARK_(reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

if(cljs.core.fn_QMARK_(root_class)){
} else {
throw (new Error("Assert failed: (fn? root-class)"));
}

var temp__5720__auto___58694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fulcro.client.primitives.roots),target);
if(cljs.core.truth_(temp__5720__auto___58694)){
var old_reconciler_58695 = temp__5720__auto___58694;
(fulcro.client.primitives.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2(old_reconciler_58695,target) : fulcro.client.primitives.remove_root_BANG_.call(null,old_reconciler_58695,target));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.client.primitives.roots,cljs.core.assoc,target,reconciler);

return fulcro.client.impl.protocols.add_root_BANG_(reconciler,root_class,target,options);
});

fulcro.client.primitives.add_root_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
fulcro.client.primitives.remove_root_BANG_ = (function fulcro$client$primitives$remove_root_BANG_(reconciler,target){
return fulcro.client.impl.protocols.remove_root_BANG_(reconciler,target);
});
/**
 * Return the global shared properties of the root. See :shared and
 * :shared-fn reconciler options.
 */
fulcro.client.primitives.shared = (function fulcro$client$primitives$shared(var_args){
var G__57658 = arguments.length;
switch (G__57658) {
case 1:
return fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(fulcro.client.primitives.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var shared = goog.object.get(component.props,"fulcro$shared");
var ks = (function (){var G__57659 = k_or_ks;
if((!(cljs.core.sequential_QMARK_(k_or_ks)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__57659],null));
} else {
return G__57659;
}
})();
var G__57660 = shared;
if((!(cljs.core.empty_QMARK_(ks)))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__57660,ks);
} else {
return G__57660;
}
});

fulcro.client.primitives.shared.cljs$lang$maxFixedArity = 2;

fulcro.client.primitives.instrument = (function fulcro$client$primitives$instrument(component){
if(fulcro.client.primitives.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return fulcro.client.primitives.get_raw_react_prop(component,"fulcro$instrument");
});
/**
 * Get any component from the indexer that matches the component class.
 *   `x` can be anything that any->reconciler will accept.
 */
fulcro.client.primitives.class__GT_any = (function fulcro$client$primitives$class__GT_any(x,class$){
var reconciler = fulcro.client.primitives.any__GT_reconciler(x);
var indexer = fulcro.client.primitives.get_indexer(reconciler);
return cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),class$], null)));
});
/**
 * Get any component from the indexer that matches the component class.
 *   `x` can be anything that any->reconciler works with.
 */
fulcro.client.primitives.class__GT_all = (function fulcro$client$primitives$class__GT_all(x,class$){
var indexer = fulcro.client.primitives.get_indexer(fulcro.client.primitives.any__GT_reconciler(x));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),class$], null));
});
/**
 * Return all components for a given ref. `x` is anything any->reconciler accepts.
 */
fulcro.client.primitives.ref__GT_components = (function fulcro$client$primitives$ref__GT_components(x,ref){
if((ref == null)){
return null;
} else {
var indexer = fulcro.client.primitives.get_indexer(fulcro.client.primitives.any__GT_reconciler(x));
return fulcro.client.impl.protocols.key__GT_components(indexer,ref);
}
});
/**
 * Get the rendered state of component. fulcro.client.primitives/get-state always returns the
 * up-to-date state.
 */
fulcro.client.primitives.get_rendered_state = (function fulcro$client$primitives$get_rendered_state(var_args){
var G__57662 = arguments.length;
switch (G__57662) {
case 1:
return fulcro.client.primitives.get_rendered_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.primitives.get_rendered_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.get_rendered_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return fulcro.client.primitives.get_rendered_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

fulcro.client.primitives.get_rendered_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(fulcro.client.primitives.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = (function (){var G__57663 = component;
var G__57663__$1 = (((G__57663 == null))?null:G__57663.state);
if((G__57663__$1 == null)){
return null;
} else {
return goog.object.get(G__57663__$1,"fulcro$state");
}
})();
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cst,((cljs.core.sequential_QMARK_(k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

fulcro.client.primitives.get_rendered_state.cljs$lang$maxFixedArity = 2;

fulcro.client.primitives.nil_or_map_QMARK_ = (function fulcro$client$primitives$nil_or_map_QMARK_(x){
return (((x == null)) || (cljs.core.map_QMARK_(x)));
});
/**
 * Returns the component associated with a component's React ref.
 */
fulcro.client.primitives.react_ref = (function fulcro$client$primitives$react_ref(component,name){
var G__57664 = component.refs;
if((G__57664 == null)){
return null;
} else {
return goog.object.get(G__57664,name);
}
});
/**
 * Set a dynamic query. Alters the query, and then rebuilds internal indexes.
 * 
 *   `x` is anything that any->reconciler accepts.
 */
fulcro.client.primitives.set_query_BANG_ = (function fulcro$client$primitives$set_query_BANG_(x,class_or_factory,p__57665){
var map__57666 = p__57665;
var map__57666__$1 = (((((!((map__57666 == null))))?(((((map__57666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57666):map__57666);
var opts = map__57666__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57666__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57666__$1,new cljs.core.Keyword(null,"params","params",710516235));
var follow_on_reads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57666__$1,new cljs.core.Keyword(null,"follow-on-reads","follow-on-reads",-2113573300));
var reconciler = fulcro.client.primitives.any__GT_reconciler(x);
var state_atom = fulcro.client.primitives.app_state(reconciler);
var queryid = ((typeof class_or_factory === 'string')?class_or_factory:(cljs.core.truth_((function (){var G__57668 = class_or_factory;
var G__57668__$1 = (((G__57668 == null))?null:cljs.core.meta(G__57668));
if((G__57668__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__57668__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
}
})())?(function (){var G__57669 = class_or_factory;
var G__57669__$1 = (((G__57669 == null))?null:cljs.core.meta(G__57669));
if((G__57669__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__57669__$1);
}
})():fulcro.client.primitives.query_id(class_or_factory,null)
));
if(cljs.core.truth_((function (){var and__4120__auto__ = typeof queryid === 'string';
if(and__4120__auto__){
var or__4131__auto__ = query;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return params;
}
} else {
return and__4120__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,fulcro.client.primitives.set_query_STAR_,class_or_factory,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queryid","queryid",-271432056),queryid,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"params","params",710516235),params], null));

fulcro.client.impl.protocols.reindex_BANG_(reconciler);

return fulcro.client.primitives.force_root_render_BANG_(reconciler);
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2690], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unable to set query. Invalid arguments."], 0));
}catch (e57670){if((e57670 instanceof Error)){
var e__48920__auto__ = e57670;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2690], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto__], 0));
} else {
throw e57670;

}
}}
});
/**
 * Converts a sequence of calls as if each call should run in sequence (deferring even the optimistic side until
 *   the prior calls have completed in a full-stack manner), and returns a tx that can be submitted via the normal
 *   `transact!`.
 * 
 *   The options map can contain:
 *   `valid-remotes` is a set of remote names in your application. Defaults to `#{:remote}`
 *   `env` is a map that is merged into the deferred transaction's `env`
 * 
 *   WARNING: If a mutation tries to interact with more than one simultaneous remote, the current implementation will wait
 *   until the *first* one of them completes (selected in a non-deterministic fashion), not all.
 */
fulcro.client.primitives.pessimistic_transaction__GT_transaction = (function fulcro$client$primitives$pessimistic_transaction__GT_transaction(var_args){
var G__57674 = arguments.length;
switch (G__57674) {
case 1:
return fulcro.client.primitives.pessimistic_transaction__GT_transaction.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.primitives.pessimistic_transaction__GT_transaction.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.pessimistic_transaction__GT_transaction.cljs$core$IFn$_invoke$arity$1 = (function (tx){
return fulcro.client.primitives.pessimistic_transaction__GT_transaction.cljs$core$IFn$_invoke$arity$2(tx,null);
});

fulcro.client.primitives.pessimistic_transaction__GT_transaction.cljs$core$IFn$_invoke$arity$2 = (function (tx,p__57675){
var map__57676 = p__57675;
var map__57676__$1 = (((((!((map__57676 == null))))?(((((map__57676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57676):map__57676);
var options = map__57676__$1;
var valid_remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57676__$1,new cljs.core.Keyword(null,"valid-remotes","valid-remotes",-1188757845),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),null], null), null));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57676__$1,new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.PersistentArrayMap.EMPTY);
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57676__$1,new cljs.core.Keyword(null,"state-map","state-map",-1313872128),cljs.core.PersistentArrayMap.EMPTY);
var ast_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.query__GT_ast(tx));
var map__57678 = cljs.core.group_by(((function (ast_nodes,map__57676,map__57676__$1,options,valid_remotes,env,state_map){
return (function (p1__57671_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__57671_SHARP_));
});})(ast_nodes,map__57676,map__57676__$1,options,valid_remotes,env,state_map))
,ast_nodes);
var map__57678__$1 = (((((!((map__57678 == null))))?(((((map__57678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57678):map__57678);
var ast_calls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57678__$1,true);
var ast_reads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57678__$1,false);
var ast_follow_on_reads = fulcro.client.primitives.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),ast_reads], null));
var remote_for_ast_call = ((function (ast_nodes,map__57678,map__57678__$1,ast_calls,ast_reads,ast_follow_on_reads,map__57676,map__57676__$1,options,valid_remotes,env,state_map){
return (function (c){
var map__57687 = c;
var map__57687__$1 = (((((!((map__57687 == null))))?(((((map__57687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57687):map__57687);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57687__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var mutation_remotes = (function (){var or__4131__auto__ = (function (){var G__57690 = (((typeof fulcro !== 'undefined') && (typeof fulcro.client !== 'undefined') && (typeof fulcro.client.data_fetch !== 'undefined') && (typeof fulcro.client.data_fetch.mutation_remotes !== 'undefined'))?(new cljs.core.Var(((function (map__57687,map__57687__$1,dispatch_key,ast_nodes,map__57678,map__57678__$1,ast_calls,ast_reads,ast_follow_on_reads,map__57676,map__57676__$1,options,valid_remotes,env,state_map){
return (function (){
return fulcro.client.data_fetch.mutation_remotes;
});})(map__57687,map__57687__$1,dispatch_key,ast_nodes,map__57678,map__57678__$1,ast_calls,ast_reads,ast_follow_on_reads,map__57676,map__57676__$1,options,valid_remotes,env,state_map))
,cljs.core.with_meta(new cljs.core.Symbol("fulcro.client.data-fetch","mutation-remotes","fulcro.client.data-fetch/mutation-remotes",-1956965793,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null);
if((G__57690 == null)){
return null;
} else {
return cljs.core.deref(G__57690);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__57687,map__57687__$1,dispatch_key,ast_nodes,map__57678,map__57678__$1,ast_calls,ast_reads,ast_follow_on_reads,map__57676,map__57676__$1,options,valid_remotes,env,state_map){
return (function (state_map__$1,sym){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2713], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["FAILED TO FIND mutation-remotes. CANNOT DERIVE REMOTES FOR ptransact! Assuming :remote"], 0));
}catch (e57691){if((e57691 instanceof Error)){
var e__48920__auto___58748 = e57691;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2713], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___58748], 0));
} else {
throw e57691;

}
}
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),null], null), null);
});
;})(or__4131__auto__,map__57687,map__57687__$1,dispatch_key,ast_nodes,map__57678,map__57678__$1,ast_calls,ast_reads,ast_follow_on_reads,map__57676,map__57676__$1,options,valid_remotes,env,state_map))
}
})();
var remotes = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("fallback",cljs.core.name(dispatch_key)))?cljs.core.PersistentHashSet.EMPTY:(mutation_remotes.cljs$core$IFn$_invoke$arity$3 ? mutation_remotes.cljs$core$IFn$_invoke$arity$3(state_map,c,valid_remotes) : mutation_remotes.call(null,state_map,c,valid_remotes)));
if(cljs.core.seq(remotes)){
return cljs.core.first(remotes);
} else {
return null;
}
});})(ast_nodes,map__57678,map__57678__$1,ast_calls,ast_reads,ast_follow_on_reads,map__57676,map__57676__$1,options,valid_remotes,env,state_map))
;
var is_local_QMARK_ = ((function (ast_nodes,map__57678,map__57678__$1,ast_calls,ast_reads,ast_follow_on_reads,remote_for_ast_call,map__57676,map__57676__$1,options,valid_remotes,env,state_map){
return (function (c){
return cljs.core.not(remote_for_ast_call(c));
});})(ast_nodes,map__57678,map__57678__$1,ast_calls,ast_reads,ast_follow_on_reads,remote_for_ast_call,map__57676,map__57676__$1,options,valid_remotes,env,state_map))
;
var vec__57679 = cljs.core.split_with(is_local_QMARK_,ast_calls);
var ast_local_calls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57679,(0),null);
var ast_remaining_calls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57679,(1),null);
var ast_first_remote_call = (function (){var G__57692 = ast_remaining_calls;
if((G__57692 == null)){
return null;
} else {
return cljs.core.first(G__57692);
}
})();
var remote = (function (){var G__57693 = ast_first_remote_call;
if((G__57693 == null)){
return null;
} else {
return remote_for_ast_call(G__57693);
}
})();
var unprocessed_call_asts = cljs.core.vec(cljs.core.rest(ast_remaining_calls));
var vec__57682 = cljs.core.split_with(is_local_QMARK_,unprocessed_call_asts);
var possible_fallback_asts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57682,(0),null);
var distant_call_asts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57682,(1),null);
var map__57685 = cljs.core.group_by(((function (ast_nodes,map__57678,map__57678__$1,ast_calls,ast_reads,ast_follow_on_reads,remote_for_ast_call,is_local_QMARK_,vec__57679,ast_local_calls,ast_remaining_calls,ast_first_remote_call,remote,unprocessed_call_asts,vec__57682,possible_fallback_asts,distant_call_asts,map__57676,map__57676__$1,options,valid_remotes,env,state_map){
return (function (p1__57672_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("fallback",cljs.core.name(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(p1__57672_SHARP_)));
});})(ast_nodes,map__57678,map__57678__$1,ast_calls,ast_reads,ast_follow_on_reads,remote_for_ast_call,is_local_QMARK_,vec__57679,ast_local_calls,ast_remaining_calls,ast_first_remote_call,remote,unprocessed_call_asts,vec__57682,possible_fallback_asts,distant_call_asts,map__57676,map__57676__$1,options,valid_remotes,env,state_map))
,possible_fallback_asts);
var map__57685__$1 = (((((!((map__57685 == null))))?(((((map__57685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57685):map__57685);
var fallback_asts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57685__$1,true);
var following_call_asts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57685__$1,false);
var unprocessed_tx = fulcro.client.primitives.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(following_call_asts,distant_call_asts)], null));
var calls_to_run_now = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ast_local_calls,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast_first_remote_call], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fallback_asts], 0)));
var tx_for_calls = fulcro.client.primitives.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),calls_to_run_now], null));
var tx_to_run_now = cljs.core.into.cljs$core$IFn$_invoke$arity$2(tx_for_calls,ast_follow_on_reads);
var tx_to_defer = cljs.core.into.cljs$core$IFn$_invoke$arity$2(unprocessed_tx,ast_follow_on_reads);
var defer_QMARK_ = cljs.core.seq(unprocessed_call_asts);
var deferred_params = ((defer_QMARK_)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote,new cljs.core.Keyword(null,"tx","tx",466630418),fulcro.client.primitives.pessimistic_transaction__GT_transaction.cljs$core$IFn$_invoke$arity$2(tx_to_defer,options)], null)], 0)):null);
if(defer_QMARK_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tx_to_run_now,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.data-fetch","deferred-transaction","fulcro.client.data-fetch/deferred-transaction",574929731,null),null,(1),null)),(new cljs.core.List(null,deferred_params,null,(1),null))))),null,(1),null)))))));
} else {
return tx_to_run_now;
}
});

fulcro.client.primitives.pessimistic_transaction__GT_transaction.cljs$lang$maxFixedArity = 2;

/**
 * Like `transact!`, but ensures each call completes (in a full-stack, pessimistic manner) before the next call starts
 *   in any way. Note that two calls of this function have no guaranteed relationship to each other. They could end up
 *   intermingled at runtime. The only guarantee is that for *a single call* to `ptransact!`, the calls in the given tx will run
 *   pessimistically (one at a time) in the order given. Follow-on reads in the given transaction will be repeated after each remote
 *   interaction.
 * 
 *   `comp-or-reconciler` a mounted component or reconciler
 *   `tx` the tx to run
 *   `ref` the ident (ref context) in which to run the transaction (including all deferrals)
 * 
 *   NOTE: `ptransact!` *is* safe to use from within mutations (e.g. for retry behavior).
 *   WARNINGS: Mutations that interact with more than one remote *at the same time* will only wait for one of the remotes to finish.
 *   Also, mutations that just issue loads should *not* be used. This function defers pessimistic *writes*, not reads.
 */
fulcro.client.primitives.ptransact_BANG_ = (function fulcro$client$primitives$ptransact_BANG_(var_args){
var G__57696 = arguments.length;
switch (G__57696) {
case 2:
return fulcro.client.primitives.ptransact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.primitives.ptransact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.ptransact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (comp_or_reconciler,tx){
var ref = ((((fulcro.client.primitives.component_QMARK_(comp_or_reconciler)) && (fulcro.client.primitives.has_ident_QMARK_(comp_or_reconciler))))?fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(comp_or_reconciler):null);
return fulcro.client.primitives.ptransact_BANG_.cljs$core$IFn$_invoke$arity$3(comp_or_reconciler,ref,tx);
});

fulcro.client.primitives.ptransact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (comp_or_reconciler,ref,tx){
var reconciler = ((fulcro.client.primitives.reconciler_QMARK_(comp_or_reconciler))?comp_or_reconciler:fulcro.client.primitives.get_reconciler(comp_or_reconciler));
var state_map = cljs.core.deref(fulcro.client.primitives.app_state(reconciler));
var remotes = (function (){var G__57697 = reconciler;
var G__57697__$1 = (((G__57697 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__57697));
var G__57697__$2 = (((G__57697__$1 == null))?null:new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(G__57697__$1));
if((G__57697__$2 == null)){
return null;
} else {
return cljs.core.set(G__57697__$2);
}
})();
var ptx = fulcro.client.primitives.pessimistic_transaction__GT_transaction.cljs$core$IFn$_invoke$arity$2(tx,(function (){var G__57698 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valid-remotes","valid-remotes",-1188757845),remotes,new cljs.core.Keyword(null,"state-map","state-map",-1313872128),state_map], null);
if(cljs.core.truth_(ref)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57698,new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null));
} else {
return G__57698;
}
})());
return setTimeout(((function (reconciler,state_map,remotes,ptx){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(comp_or_reconciler,ptx);
});})(reconciler,state_map,remotes,ptx))
,(0));
});

fulcro.client.primitives.ptransact_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Build a component's initial state using the defsc initial-state-data from
 *   options, the children from options, and the params from the invocation of get-initial-state.
 */
fulcro.client.primitives.make_state_map = (function fulcro$client$primitives$make_state_map(initial_state,children_by_query_key,params){
var join_keys = cljs.core.set(cljs.core.keys(children_by_query_key));
var init_keys = cljs.core.set(cljs.core.keys(initial_state));
var is_child_QMARK_ = ((function (join_keys,init_keys){
return (function (k){
return cljs.core.contains_QMARK_(join_keys,k);
});})(join_keys,init_keys))
;
var value_of = ((function (join_keys,init_keys,is_child_QMARK_){
return (function fulcro$client$primitives$make_state_map_$_value_of_STAR_(p__57707){
var vec__57708 = p__57707;
var isk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57708,(0),null);
var isv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57708,(1),null);
var param_name = ((function (vec__57708,isk,isv,join_keys,init_keys,is_child_QMARK_){
return (function (v){
var and__4120__auto__ = (v instanceof cljs.core.Keyword);
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("param",cljs.core.namespace(v));
if(and__4120__auto____$1){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(v));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});})(vec__57708,isk,isv,join_keys,init_keys,is_child_QMARK_))
;
var substitute = ((function (param_name,vec__57708,isk,isv,join_keys,init_keys,is_child_QMARK_){
return (function (ele){
var temp__5718__auto__ = param_name(ele);
if(cljs.core.truth_(temp__5718__auto__)){
var k = temp__5718__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,k);
} else {
return ele;
}
});})(param_name,vec__57708,isk,isv,join_keys,init_keys,is_child_QMARK_))
;
var param_key = param_name(isv);
var param_exists_QMARK_ = cljs.core.contains_QMARK_(params,param_key);
var param_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,param_key);
var child_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(children_by_query_key,isk);
if(cljs.core.truth_((function (){var and__4120__auto__ = param_key;
if(cljs.core.truth_(and__4120__auto__)){
return (!(param_exists_QMARK_));
} else {
return and__4120__auto__;
}
})())){
return null;
} else {
if(((cljs.core.map_QMARK_(isv)) && (is_child_QMARK_(isk)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,fulcro.client.primitives.get_initial_state(child_class,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(fulcro$client$primitives$make_state_map_$_value_of_STAR_,isv)))], null);
} else {
if(cljs.core.map_QMARK_(isv)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(fulcro$client$primitives$make_state_map_$_value_of_STAR_,isv))], null);
} else {
if(((cljs.core.vector_QMARK_(isv)) && (is_child_QMARK_(isk)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__57708,isk,isv,join_keys,init_keys,is_child_QMARK_){
return (function (m){
return fulcro.client.primitives.get_initial_state(child_class,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(fulcro$client$primitives$make_state_map_$_value_of_STAR_,m)));
});})(param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__57708,isk,isv,join_keys,init_keys,is_child_QMARK_))
,isv)], null);
} else {
if(((cljs.core.vector_QMARK_(param_value)) && (is_child_QMARK_(isk)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__57708,isk,isv,join_keys,init_keys,is_child_QMARK_){
return (function (params__$1){
if(cljs.core.truth_(fulcro.client.primitives.computed_initial_state_QMARK_(params__$1))){
return params__$1;
} else {
return fulcro.client.primitives.get_initial_state(child_class,params__$1);
}
});})(param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__57708,isk,isv,join_keys,init_keys,is_child_QMARK_))
,param_value)], null);
} else {
if(cljs.core.vector_QMARK_(isv)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__57708,isk,isv,join_keys,init_keys,is_child_QMARK_){
return (function (ele){
return substitute(ele);
});})(param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__57708,isk,isv,join_keys,init_keys,is_child_QMARK_))
,isv)], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = param_key;
if(cljs.core.truth_(and__4120__auto__)){
return ((is_child_QMARK_(isk)) && (param_exists_QMARK_));
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,(cljs.core.truth_(fulcro.client.primitives.computed_initial_state_QMARK_(param_value))?param_value:fulcro.client.primitives.get_initial_state(child_class,param_value))], null);
} else {
if(cljs.core.truth_(param_key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,param_value], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,isv], null);

}
}
}
}
}
}
}
}
});})(join_keys,init_keys,is_child_QMARK_))
;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(value_of,initial_state));
});
/**
 * DEPRECATED: Use fulcro.client.mutations/integrate-ident* in your mutations instead.
 */
fulcro.client.primitives.integrate_ident = (function fulcro$client$primitives$integrate_ident(var_args){
var args__4736__auto__ = [];
var len__4730__auto___58833 = arguments.length;
var i__4731__auto___58835 = (0);
while(true){
if((i__4731__auto___58835 < len__4730__auto___58833)){
args__4736__auto__.push((arguments[i__4731__auto___58835]));

var G__58836 = (i__4731__auto___58835 + (1));
i__4731__auto___58835 = G__58836;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fulcro.client.primitives.integrate_ident.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fulcro.client.primitives.integrate_ident.cljs$core$IFn$_invoke$arity$variadic = (function (state,ident,named_parameters){
if(cljs.core.map_QMARK_(state)){
} else {
throw (new Error("Assert failed: (map? state)"));
}

try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),3238], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["integrate-ident is deprecated and will be removed in the future.","Please use fulcro.client.mutations/integrate-ident* in your mutations instead."], 0));
}catch (e57717){if((e57717 instanceof Error)){
var e__48920__auto___58841 = e57717;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),3238], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___58841], 0));
} else {
throw e57717;

}
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(fulcro.util.__integrate_ident_impl__,state,ident,named_parameters);
});

fulcro.client.primitives.integrate_ident.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.client.primitives.integrate_ident.cljs$lang$applyTo = (function (seq57714){
var G__57715 = cljs.core.first(seq57714);
var seq57714__$1 = cljs.core.next(seq57714);
var G__57716 = cljs.core.first(seq57714__$1);
var seq57714__$2 = cljs.core.next(seq57714__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57715,G__57716,seq57714__$2);
});

/**
 * Calculates the query that can be used to pull (or merge) a component with an ident
 *   to/from a normalized app database. Requires a tree of data that represents the instance of
 *   the component in question (e.g. ident will work on it)
 */
fulcro.client.primitives.component_merge_query = (function fulcro$client$primitives$component_merge_query(component,object_data){
var ident = fulcro.client.primitives.ident(component,object_data);
var object_query = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(component);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,object_query])], null);
});
/**
 * PRIVATE.
 * 
 *   Does the steps necessary to honor the data merge technique defined by Fulcro with respect
 *   to data overwrites in the app database.
 */
fulcro.client.primitives._preprocess_merge = (function fulcro$client$primitives$_preprocess_merge(state_atom,component,object_data){
var ident = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(component,object_data);
var object_query = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(component);
var object_query__$1 = ((cljs.core.map_QMARK_(object_query))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_query], null):object_query);
var base_query = fulcro.client.primitives.component_merge_query(component,object_data);
var merge_query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro","merge","fulcro/merge",-1037375858),base_query], null)], null);
var existing_data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$3(base_query,cljs.core.deref(state_atom),cljs.core.deref(state_atom)),ident,cljs.core.PersistentArrayMap.EMPTY);
var marked_data = fulcro.client.primitives.mark_missing(object_data,object_query__$1);
var merge_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro","merge","fulcro/merge",-1037375858),cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,fulcro.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([existing_data,marked_data], 0))])], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"merge-query","merge-query",610171663),merge_query,new cljs.core.Keyword(null,"merge-data","merge-data",1760143734),merge_data], null);
});
/**
 * Returns TRUE when x is an atom.
 */
fulcro.client.primitives.is_atom_QMARK_ = (function fulcro$client$primitives$is_atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
/**
 * DEPRECATED: Use fulcro.client.mutations/integrate-ident* in your mutations instead.
 */
fulcro.client.primitives.integrate_ident_BANG_ = (function fulcro$client$primitives$integrate_ident_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___58851 = arguments.length;
var i__4731__auto___58852 = (0);
while(true){
if((i__4731__auto___58852 < len__4730__auto___58851)){
args__4736__auto__.push((arguments[i__4731__auto___58852]));

var G__58854 = (i__4731__auto___58852 + (1));
i__4731__auto___58852 = G__58854;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fulcro.client.primitives.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fulcro.client.primitives.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,ident,named_parameters){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),3278], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["integrate-ident! is deprecated and will be removed in the future.","Please use fulcro.client.mutations/integrate-ident* in your mutations instead."], 0));
}catch (e57721){if((e57721 instanceof Error)){
var e__48920__auto___58858 = e57721;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),3278], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto___58858], 0));
} else {
throw e57721;

}
}
if(fulcro.client.primitives.is_atom_QMARK_(state)){
} else {
throw (new Error(["Assert failed: ","The state has to be an atom. Use 'integrate-ident' instead.","\n","(is-atom? state)"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,state,fulcro.util.__integrate_ident_impl__,ident,named_parameters);
});

fulcro.client.primitives.integrate_ident_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.client.primitives.integrate_ident_BANG_.cljs$lang$applyTo = (function (seq57718){
var G__57719 = cljs.core.first(seq57718);
var seq57718__$1 = cljs.core.next(seq57718);
var G__57720 = cljs.core.first(seq57718__$1);
var seq57718__$2 = cljs.core.next(seq57718__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57719,G__57720,seq57718__$2);
});

/**
 * Given a state map of the application database, a component, and a tree of component-data: normalizes
 * the tree of data and merges the component table entries into the state, returning a new state map.
 * Since there is not an implied root, the component itself won't be linked into your graph (though it will
 * remain correctly linked for its own consistency).
 * Therefore, this function is just for dropping normalized things into tables
 * when they themselves have a recursive nature. This function is useful when you want to create a new component instance
 * and put it in the database, but the component instance has recursive normalized state. This is a basically a
 * thin wrapper around `prim/tree->db`.
 * 
 * See also integrate-ident, integrate-ident!, and merge-component!
 */
fulcro.client.primitives.merge_component = (function fulcro$client$primitives$merge_component(var_args){
var args__4736__auto__ = [];
var len__4730__auto___58871 = arguments.length;
var i__4731__auto___58872 = (0);
while(true){
if((i__4731__auto___58872 < len__4730__auto___58871)){
args__4736__auto__.push((arguments[i__4731__auto___58872]));

var G__58874 = (i__4731__auto___58872 + (1));
i__4731__auto___58872 = G__58874;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return fulcro.client.primitives.merge_component.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

fulcro.client.primitives.merge_component.cljs$core$IFn$_invoke$arity$variadic = (function (state_map,component,component_data,named_parameters){
var temp__5718__auto__ = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(component,component_data);
if(cljs.core.truth_(temp__5718__auto__)){
var top_ident = temp__5718__auto__;
var query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([top_ident,fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(component)])], null);
var state_to_merge = cljs.core.PersistentArrayMap.createAsIfByAssoc([top_ident,component_data]);
var table_entries = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$4(query,state_to_merge,true,fulcro.client.primitives.pre_merge_transform(state_map)),new cljs.core.Keyword("fulcro.client.primitives","tables","fulcro.client.primitives/tables",-1418944816),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([top_ident], 0));
var G__57727 = fulcro.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state_map,table_entries], 0));
if(cljs.core.seq(named_parameters)){
return ((function (G__57727,query,state_to_merge,table_entries,top_ident,temp__5718__auto__){
return (function (p1__57722_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(fulcro.util.__integrate_ident_impl__,p1__57722_SHARP_,top_ident,named_parameters);
});})(G__57727,query,state_to_merge,table_entries,top_ident,temp__5718__auto__))
(G__57727);
} else {
return G__57727;
}
} else {
return state_map;
}
});

fulcro.client.primitives.merge_component.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fulcro.client.primitives.merge_component.cljs$lang$applyTo = (function (seq57723){
var G__57724 = cljs.core.first(seq57723);
var seq57723__$1 = cljs.core.next(seq57723);
var G__57725 = cljs.core.first(seq57723__$1);
var seq57723__$2 = cljs.core.next(seq57723__$1);
var G__57726 = cljs.core.first(seq57723__$2);
var seq57723__$3 = cljs.core.next(seq57723__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57724,G__57725,G__57726,seq57723__$3);
});

/**
 * Normalize and merge a (sub)tree of application state into the application using a known UI component's query and ident.
 * 
 *   This utility function obtains the ident of the incoming object-data using the UI component's ident function. Once obtained,
 *   it uses the component's query and ident to normalize the data and place the resulting objects in the correct tables.
 *   It is also quite common to want those new objects to be linked into lists in other spot in app state, so this function
 *   supports optional named parameters for doing this. These named parameters can be repeated as many times as you like in order
 *   to place the ident of the new object into other data structures of app state.
 * 
 *   This function honors the data merge story for Fulcro: attributes that are queried for but do not appear in the
 *   data will be removed from the application. This function also uses the initial state for the component as a base
 *   for merge if there was no state for the object already in the database.
 * 
 *   This function will also trigger re-renders of components that directly render object merged, as well as any components
 *   into which you integrate that data via the named-parameters.
 * 
 *   This function is primarily meant to be used from things like server push and setTimeout/setInterval, where you're outside
 *   of the normal mutation story. Do not use this function within abstract mutations.
 * 
 *   - reconciler: A reconciler
 *   - component: The class of the component that corresponsds to the data. Must have an ident.
 *   - object-data: A map (tree) of data to merge. Will be normalized for you.
 *   - named-parameter: Post-processing ident integration steps. see integrate-ident!
 * 
 *   Any keywords that appear in ident integration steps will be added to the re-render queue.
 * 
 *   See also `fulcro.client.primitives/merge!`.
 *   
 */
fulcro.client.primitives.merge_component_BANG_ = (function fulcro$client$primitives$merge_component_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___58884 = arguments.length;
var i__4731__auto___58885 = (0);
while(true){
if((i__4731__auto___58885 < len__4730__auto___58884)){
args__4736__auto__.push((arguments[i__4731__auto___58885]));

var G__58887 = (i__4731__auto___58885 + (1));
i__4731__auto___58885 = G__58887;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return fulcro.client.primitives.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

fulcro.client.primitives.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (reconciler,component,object_data,named_parameters){
if((!(fulcro.client.primitives.has_ident_QMARK_(component)))){
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),3335], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["merge-component!: component must implement Ident. Merge skipped."], 0));
}catch (e57732){if((e57732 instanceof Error)){
var e__48920__auto__ = e57732;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),3335], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto__], 0));
} else {
throw e57732;

}
}} else {
var ident = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(component,object_data);
var reconciler__$1 = ((cljs.core.contains_QMARK_(reconciler,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966)))?new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(reconciler):reconciler);
var state = fulcro.client.primitives.app_state(reconciler__$1);
var data_path_keys = cljs.core.vec(cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters))))));
var map__57733 = fulcro.client.primitives._preprocess_merge(state,component,object_data);
var map__57733__$1 = (((((!((map__57733 == null))))?(((((map__57733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57733):map__57733);
var merge_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57733__$1,new cljs.core.Keyword(null,"merge-data","merge-data",1760143734));
var merge_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57733__$1,new cljs.core.Keyword(null,"merge-query","merge-query",610171663));
fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler__$1,merge_data,merge_query);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (ident,reconciler__$1,state,data_path_keys,map__57733,map__57733__$1,merge_data,merge_query){
return (function (s){
var st = s;
var st__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(fulcro.util.__integrate_ident_impl__,st,ident,named_parameters);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(st__$1,new cljs.core.Keyword("fulcro","merge","fulcro/merge",-1037375858));
});})(ident,reconciler__$1,state,data_path_keys,map__57733,map__57733__$1,merge_data,merge_query))
);

fulcro.client.impl.protocols.queue_BANG_(reconciler__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data_path_keys,ident));

return cljs.core.deref(state);
}
});

fulcro.client.primitives.merge_component_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fulcro.client.primitives.merge_component_BANG_.cljs$lang$applyTo = (function (seq57728){
var G__57729 = cljs.core.first(seq57728);
var seq57728__$1 = cljs.core.next(seq57728);
var G__57730 = cljs.core.first(seq57728__$1);
var seq57728__$2 = cljs.core.next(seq57728__$1);
var G__57731 = cljs.core.first(seq57728__$2);
var seq57728__$3 = cljs.core.next(seq57728__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57729,G__57730,G__57731,seq57728__$3);
});

/**
 * Walks the given query and calls (merge-fn parent-union-component union-child-initial-state) for each non-default element of a union that has initial app state.
 *   You probably want to use merge-alternate-union-elements[!] on a state map or app.
 */
fulcro.client.primitives.merge_alternate_unions = (function fulcro$client$primitives$merge_alternate_unions(merge_fn,root_component){
var walk_ast = (function() {
var fulcro$client$primitives$merge_alternate_unions_$_walk_ast = null;
var fulcro$client$primitives$merge_alternate_unions_$_walk_ast__2 = (function (ast,visitor){
return fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,null);
});
var fulcro$client$primitives$merge_alternate_unions_$_walk_ast__3 = (function (p__57742,visitor,parent_union){
var map__57743 = p__57742;
var map__57743__$1 = (((((!((map__57743 == null))))?(((((map__57743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57743):map__57743);
var parent_ast = map__57743__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57743__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57743__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57743__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57743__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57743__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57743__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.truth_((function (){var and__4120__auto__ = component;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = parent_union;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union-entry","union-entry",223335750),type);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
(visitor.cljs$core$IFn$_invoke$arity$2 ? visitor.cljs$core$IFn$_invoke$arity$2(component,parent_union) : visitor.call(null,component,parent_union));
} else {
}

if(cljs.core.truth_(children)){
var seq__57745 = cljs.core.seq(children);
var chunk__57746 = null;
var count__57747 = (0);
var i__57748 = (0);
while(true){
if((i__57748 < count__57747)){
var ast = chunk__57746.cljs$core$IIndexed$_nth$arity$2(null,i__57748);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"union","union",2142937499))){
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,component);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"union-entry","union-entry",223335750))){
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,parent_union);
} else {
if(cljs.core.truth_(ast)){
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,null);
} else {
}
}
}


var G__58918 = seq__57745;
var G__58919 = chunk__57746;
var G__58920 = count__57747;
var G__58921 = (i__57748 + (1));
seq__57745 = G__58918;
chunk__57746 = G__58919;
count__57747 = G__58920;
i__57748 = G__58921;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__57745);
if(temp__5720__auto__){
var seq__57745__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57745__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57745__$1);
var G__58924 = cljs.core.chunk_rest(seq__57745__$1);
var G__58925 = c__4550__auto__;
var G__58926 = cljs.core.count(c__4550__auto__);
var G__58927 = (0);
seq__57745 = G__58924;
chunk__57746 = G__58925;
count__57747 = G__58926;
i__57748 = G__58927;
continue;
} else {
var ast = cljs.core.first(seq__57745__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"union","union",2142937499))){
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,component);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"union-entry","union-entry",223335750))){
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,parent_union);
} else {
if(cljs.core.truth_(ast)){
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,null);
} else {
}
}
}


var G__58932 = cljs.core.next(seq__57745__$1);
var G__58933 = null;
var G__58934 = (0);
var G__58935 = (0);
seq__57745 = G__58932;
chunk__57746 = G__58933;
count__57747 = G__58934;
i__57748 = G__58935;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
fulcro$client$primitives$merge_alternate_unions_$_walk_ast = function(p__57742,visitor,parent_union){
switch(arguments.length){
case 2:
return fulcro$client$primitives$merge_alternate_unions_$_walk_ast__2.call(this,p__57742,visitor);
case 3:
return fulcro$client$primitives$merge_alternate_unions_$_walk_ast__3.call(this,p__57742,visitor,parent_union);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$2 = fulcro$client$primitives$merge_alternate_unions_$_walk_ast__2;
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3 = fulcro$client$primitives$merge_alternate_unions_$_walk_ast__3;
return fulcro$client$primitives$merge_alternate_unions_$_walk_ast;
})()
;
var merge_union = (function fulcro$client$primitives$merge_alternate_unions_$_merge_union(component,parent_union){
var default_initial_state = (function (){var and__4120__auto__ = parent_union;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = fulcro.client.primitives.has_initial_app_state_QMARK_(parent_union);
if(and__4120__auto____$1){
return fulcro.client.primitives.get_initial_state(parent_union,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
var to_many_QMARK_ = cljs.core.vector_QMARK_(default_initial_state);
var component_initial_state = (function (){var and__4120__auto__ = component;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = fulcro.client.primitives.has_initial_app_state_QMARK_(component);
if(and__4120__auto____$1){
return fulcro.client.primitives.get_initial_state(component,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4120__auto__ = component;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = component_initial_state;
if(cljs.core.truth_(and__4120__auto____$1)){
var and__4120__auto____$2 = parent_union;
if(cljs.core.truth_(and__4120__auto____$2)){
return (((!(to_many_QMARK_))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(default_initial_state,component_initial_state)));
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return (merge_fn.cljs$core$IFn$_invoke$arity$2 ? merge_fn.cljs$core$IFn$_invoke$arity$2(parent_union,component_initial_state) : merge_fn.call(null,parent_union,component_initial_state));
} else {
return null;
}
});
return walk_ast(fulcro.client.primitives.query__GT_ast(fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(root_component)),merge_union);
});
/**
 * Walks the query and initial state of root-component and merges the alternate sides of unions with initial state into
 *   the application state database. See also `merge-alternate-union-elements`, which can be used on a state map and
 *   is handy for server-side rendering. This function side-effects on your app, and returns nothing.
 */
fulcro.client.primitives.merge_alternate_union_elements_BANG_ = (function fulcro$client$primitives$merge_alternate_union_elements_BANG_(app,root_component){
return fulcro.client.primitives.merge_alternate_unions(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.merge_component_BANG_,app),root_component);
});
/**
 * Just like merge-alternate-union-elements!, but usable from within mutations and on server-side rendering. Ensures
 *   that when a component has initial state it will end up in the state map, even if it isn't currently in the
 *   initial state of the union component (which can only point to one at a time).
 */
fulcro.client.primitives.merge_alternate_union_elements = (function fulcro$client$primitives$merge_alternate_union_elements(state_map,root_component){
var initial_state = fulcro.client.primitives.get_initial_state(root_component,null);
var state_map_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state_map);
var merge_to_state = ((function (initial_state,state_map_atom){
return (function (comp,tree){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_map_atom,fulcro.client.primitives.merge_component,comp,tree);
});})(initial_state,state_map_atom))
;
var _ = fulcro.client.primitives.merge_alternate_unions(merge_to_state,root_component);
var new_state = cljs.core.deref(state_map_atom);
return new_state;
});
fulcro.client.primitives.default_component_prototype = (function (){var obj57764 = ({"shouldComponentUpdate":(function (next_props,next_state){
var this$ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children = next_props.children;
var next_props__$1 = goog.object.get(next_props,"fulcro$value");
var current_props = fulcro.client.primitives.props(this$);
var props_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props,next_props__$1);
var next_state__$1 = goog.object.get(next_state,"fulcro$state");
var state_changed_QMARK_ = (function (){var and__4120__auto__ = this$.state;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(this$.state,"fulcro$state"),next_state__$1);
} else {
return and__4120__auto__;
}
})();
var children_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this$.props.children,next_children);
var or__4131__auto__ = props_changed_QMARK_;
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = state_changed_QMARK_;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return children_changed_QMARK_;
}
}
}
}),"componentDidUpdate":(function (prev_props,prev_state){
var this$ = this;
var prev_props__$1 = goog.object.get(prev_props,"fulcro$value");
if((((!((this$ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.fulcro$client$primitives$Ident$))))?true:false):false)){
var old_ident = fulcro.client.primitives.ident(this$,prev_props__$1);
var next_ident = fulcro.client.primitives.ident(this$,fulcro.client.primitives.props(this$));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_ident,next_ident)){
var idxr = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr == null)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr),((function (idxr,old_ident,next_ident,prev_props__$1,this$){
return (function (indexes){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),old_ident], null),cljs.core.disj,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this$);
});})(idxr,old_ident,next_ident,prev_props__$1,this$))
);
}
} else {
return null;
}
} else {
return null;
}
}),"componentDidMount":(function (){
var this$ = this;
goog.object.set(this$,"fulcro$mounted",true);

var indexer = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer,this$);
}
}),"componentWillUnmount":(function (){
var this$ = this;
var r = fulcro.client.primitives.get_reconciler(this$);
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg);
var indexer = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg);
goog.object.set(this$,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__4120__auto__ = (!((st == null)));
if(and__4120__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queries","queries",1446291995),this$], null));
} else {
return and__4120__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queries","queries",1446291995)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
} else {
}

if((indexer == null)){
return null;
} else {
return fulcro.client.impl.protocols.drop_component_BANG_(indexer,this$);
}
})});
return obj57764;
})();

//# sourceMappingURL=fulcro.client.primitives.js.map
