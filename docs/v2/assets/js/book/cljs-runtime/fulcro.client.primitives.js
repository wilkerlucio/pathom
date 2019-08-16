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
}catch (e56049){if((e56049 instanceof Error)){
var e__48124__auto__ = e56049;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),87], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto__], 0));
} else {
throw e56049;

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
var G__56063 = (((((!((class$ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$primitives$InitialAppState$))))?true:false):false))?fulcro.client.primitives.initial_state(class$,params):null);
if((G__56063 == null)){
return null;
} else {
return cljs.core.with_meta(G__56063,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"computed","computed",-1482016762),true], null));
}
});
/**
 * Returns true if the given initial state was computed from a call to get-initial-state.
 */
fulcro.client.primitives.computed_initial_state_QMARK_ = (function fulcro$client$primitives$computed_initial_state_QMARK_(s){
var and__4120__auto__ = cljs.core.map_QMARK_(s);
if(and__4120__auto__){
var G__56068 = s;
var G__56068__$1 = (((G__56068 == null))?null:cljs.core.meta(G__56068));
if((G__56068__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"computed","computed",-1482016762).cljs$core$IFn$_invoke$arity$1(G__56068__$1);
}
} else {
return and__4120__auto__;
}
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.primitives","ident","fulcro.client.primitives/ident",-1688940366),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"missing","missing",362507769),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Symbol("fulcro.util","ident?","fulcro.util/ident?",-2064561335,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"missing","missing",362507769),new cljs.core.Keyword(null,"ident","ident",-742346)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol("fulcro.util","ident?","fulcro.util/ident?",-2064561335,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,fulcro.util.ident_QMARK_], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.primitives","transaction","fulcro.client.primitives/transaction",1435510665),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__56075#","p1__56075#",-477806618,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"p1__56075#","p1__56075#",-477806618,null)),cljs.core.list(new cljs.core.Symbol("fulcro.util","mutation?","fulcro.util/mutation?",-1077955232,null),new cljs.core.Symbol(null,"p1__56075#","p1__56075#",-477806618,null)))),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__56075#","p1__56075#",-477806618,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"p1__56075#","p1__56075#",-477806618,null)),cljs.core.list(new cljs.core.Symbol("util","mutation?","util/mutation?",-1080424299,null),new cljs.core.Symbol(null,"p1__56075#","p1__56075#",-477806618,null)))),(function (p1__56075_SHARP_){
return (((p1__56075_SHARP_ instanceof cljs.core.Keyword)) || (fulcro.util.mutation_QMARK_(p1__56075_SHARP_)));
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56080){
return cljs.core.vector_QMARK_(G__56080);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("fulcro.util","mutation?","fulcro.util/mutation?",-1077955232,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.primitives","pessimistic?","fulcro.client.primitives/pessimistic?",-804432644),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("fulcro.client.primitives","tempid?","fulcro.client.primitives/tempid?",-1763280099,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"tempid?","tempid?",2034653313,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("fulcro.client.primitives","tempid?","fulcro.client.primitives/tempid?",-1763280099,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.primitives.tempid_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56085){
return cljs.core.map_QMARK_(G__56085);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
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
fulcro.client.primitives.add_basis_time_STAR_ = (function fulcro$client$primitives$add_basis_time_STAR_(p__56094,props,time){
var map__56096 = p__56094;
var map__56096__$1 = (((((!((map__56096 == null))))?(((((map__56096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56096):map__56096);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56096__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.map_QMARK_(props)){
if(cljs.core.seq(children)){
var children__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))):children);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.into.cljs$core$IFn$_invoke$arity$3(props,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (children__$1,map__56096,map__56096__$1,children){
return (function (p1__56090_SHARP_){
return cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__56090_SHARP_));
});})(children__$1,map__56096,map__56096__$1,children))
),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (children__$1,map__56096,map__56096__$1,children){
return (function (p__56102){
var map__56103 = p__56102;
var map__56103__$1 = (((((!((map__56103 == null))))?(((((map__56103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56103):map__56103);
var ast = map__56103__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56103__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56103__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,key);
var ast__$1 = (function (){var G__56106 = ast;
var G__56106__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56106,new cljs.core.Keyword(null,"children","children",-940561982),children__$1):G__56106);
if(cljs.core.pos_int_QMARK_(query)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56106__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__56106,G__56106__$1,x,map__56103,map__56103__$1,ast,key,query,children__$1,map__56096,map__56096__$1,children){
return (function (p1__56091_SHARP_){
var G__56107 = p1__56091_SHARP_;
if(cljs.core.pos_int_QMARK_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__56091_SHARP_))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__56107,new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.dec);
} else {
return G__56107;
}
});})(G__56106,G__56106__$1,x,map__56103,map__56103__$1,ast,key,query,children__$1,map__56096,map__56096__$1,children))
,children__$1));
} else {
return G__56106__$1;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,((cljs.core.sequential_QMARK_(x))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (x,ast__$1,map__56103,map__56103__$1,ast,key,query,children__$1,map__56096,map__56096__$1,children){
return (function (p1__56092_SHARP_){
return (fulcro.client.primitives.add_basis_time_STAR_.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.primitives.add_basis_time_STAR_.cljs$core$IFn$_invoke$arity$3(ast__$1,p1__56092_SHARP_,time) : fulcro.client.primitives.add_basis_time_STAR_.call(null,ast__$1,p1__56092_SHARP_,time));
});})(x,ast__$1,map__56103,map__56103__$1,ast,key,query,children__$1,map__56096,map__56096__$1,children))
,x):(fulcro.client.primitives.add_basis_time_STAR_.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.primitives.add_basis_time_STAR_.cljs$core$IFn$_invoke$arity$3(ast__$1,x,time) : fulcro.client.primitives.add_basis_time_STAR_.call(null,ast__$1,x,time)))], null);
});})(children__$1,map__56096,map__56096__$1,children))
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
var G__56112 = arguments.length;
switch (G__56112) {
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
var vec__56137 = split_on_static(dt__$1);
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56137,(0),null);
var vec__56140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56137,(1),null);
var seq__56141 = cljs.core.seq(vec__56140);
var first__56142 = cljs.core.first(seq__56141);
var seq__56141__$1 = cljs.core.next(seq__56141);
var _ = first__56142;
var first__56142__$1 = cljs.core.first(seq__56141__$1);
var seq__56141__$2 = cljs.core.next(seq__56141__$1);
var sym = first__56142__$1;
var remaining = seq__56141__$2;
var post = vec__56140;
var dt_SINGLEQUOTE___$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(dt_SINGLEQUOTE_,pre);
if(cljs.core.seq(post)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym,new cljs.core.Symbol(null,"field","field",338095027,null))){
var vec__56143 = cljs.core.split_at((2),remaining);
var field_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56143,(0),null);
var dt__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56143,(1),null);
var G__56992 = cljs.core.seq(dt__$2);
var G__56993 = dt_SINGLEQUOTE___$1;
var G__56994 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields","fields",-1932066230)], null),cljs.core.conj,cljs.core.vec(field_info));
dt__$1 = G__56992;
dt_SINGLEQUOTE_ = G__56993;
statics = G__56994;
continue;
} else {
if((sym instanceof cljs.core.Symbol)){
var vec__56146 = split_on_symbol(remaining);
var protocol_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56146,(0),null);
var dt__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56146,(1),null);
var G__57001 = cljs.core.seq(dt__$2);
var G__57002 = dt_SINGLEQUOTE___$1;
var G__57003 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocols","protocols",-5615896)], null),cljs.core.into,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null),protocol_info));
dt__$1 = G__57001;
dt_SINGLEQUOTE_ = G__57002;
statics = G__57003;
continue;
} else {
throw (new Error("Malformed static"));

}
}
} else {
var G__57009 = null;
var G__57010 = dt_SINGLEQUOTE___$1;
var G__57011 = statics;
dt__$1 = G__57009;
dt_SINGLEQUOTE_ = G__57010;
statics = G__57011;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dt","dt",-368444759),dt_SINGLEQUOTE_,new cljs.core.Keyword(null,"statics","statics",-1984882809),statics], null);
}
break;
}
});
fulcro.client.primitives.validate_statics = (function fulcro$client$primitives$validate_statics(dt){
var temp__5720__auto__ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["IQuery",null,"Ident",null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56151_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56151_SHARP_),/\//));
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
return cljs.core.boolean$((function (){var G__56212 = x;
var G__56212__$1 = (((G__56212 == null))?null:G__56212.prototype);
if((G__56212__$1 == null)){
return null;
} else {
return G__56212__$1.fulcro$isComponent;
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
var G__56220 = c.props;
var G__56221 = k;
return goog.object.get(G__56220,G__56221);
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
var map__56227 = cljs.core.group_by((function (p1__56226_SHARP_){
return cljs.core.vector_QMARK_(cljs.core.first(p1__56226_SHARP_));
}),res);
var map__56227__$1 = (((((!((map__56227 == null))))?(((((map__56227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56227):map__56227);
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56227__$1,true);
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56227__$1,false);
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
var G__56235 = cljs.core.deref(x);
return (fulcro.client.primitives.any__GT_reconciler.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.any__GT_reconciler.cljs$core$IFn$_invoke$arity$1(G__56235) : fulcro.client.primitives.any__GT_reconciler.call(null,G__56235));
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

var G__56242 = component.props;
var G__56243 = "fulcro$value";
return goog.object.get(G__56242,G__56243);
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
fulcro.client.primitives.get_state = (function fulcro$client$primitives$get_state(var_args){
var G__56247 = arguments.length;
switch (G__56247) {
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
var G__57042 = fulcro.client.primitives.parent(c__$1);
c__$1 = G__57042;
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
var G__56256 = arguments.length;
switch (G__56256) {
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
}catch (e56257){if((e56257 instanceof Error)){
var e__48124__auto__ = e56257;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),653], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto__], 0));
} else {
throw e56257;

}
}}
});

fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2 = (function (class$,props){
if((((!((class$ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$primitives$Ident$))))?true:false):false)){
var id = fulcro.client.primitives.ident(class$,props);
if((!(fulcro.util.ident_QMARK_(id)))){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),666], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-ident returned an invalid ident for class:",class$], 0));
}catch (e56262){if((e56262 instanceof Error)){
var e__48124__auto___57047 = e56262;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),666], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___57047], 0));
} else {
throw e56262;

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
}catch (e56263){if((e56263 instanceof Error)){
var e__48124__auto__ = e56263;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),668], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto__], 0));
} else {
throw e56263;

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
}catch (e56267){if((e56267 instanceof Error)){
var e__48124__auto__ = e56267;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),680], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto__], 0));
} else {
throw e56267;

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
var len__4730__auto___57052 = arguments.length;
var i__4731__auto___57053 = (0);
while(true){
if((i__4731__auto___57053 < len__4730__auto___57052)){
args__4736__auto__.push((arguments[i__4731__auto___57053]));

var G__57055 = (i__4731__auto___57053 + (1));
i__4731__auto___57053 = G__57055;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.primitives.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.primitives.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__56272 = ((cljs.core.map_QMARK_(cljs.core.first(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.rest(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({}),args], null));
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56272,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56272,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,React.Fragment,cljs.core.clj__GT_js(props),children);
});

fulcro.client.primitives.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.primitives.fragment.cljs$lang$applyTo = (function (seq56271){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56271));
});

fulcro.client.primitives.create_element = (function fulcro$client$primitives$create_element(class$,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,class$,props,children);
});
/**
 * Create a factory constructor from a component class created with
 *    defui.
 */
fulcro.client.primitives.factory = (function fulcro$client$primitives$factory(var_args){
var G__56282 = arguments.length;
switch (G__56282) {
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

fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__56283){
var map__56284 = p__56283;
var map__56284__$1 = (((((!((map__56284 == null))))?(((((map__56284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56284):map__56284);
var opts = map__56284__$1;
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56284__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56284__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332));
var instrument_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56284__$1,new cljs.core.Keyword(null,"instrument?","instrument?",-1835582396),true);
var qualifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56284__$1,new cljs.core.Keyword(null,"qualifier","qualifier",125841738));
if(cljs.core.fn_QMARK_(class$)){
} else {
throw (new Error("Assert failed: (fn? class)"));
}

return cljs.core.with_meta(((function (map__56284,map__56284__$1,opts,validator,keyfn,instrument_QMARK_,qualifier){
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
var G__56289 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"factory","factory",63933746),fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"instrument?","instrument?",-1835582396),false))], null);
return (fulcro.client.primitives._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1(G__56289) : fulcro.client.primitives._STAR_instrument_STAR_.call(null,G__56289));
} else {
var key = (((!((keyfn == null))))?(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(props) : keyfn.call(null,props)):fulcro.client.primitives.compute_react_key(class$,props));
var ref = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__56290 = ref;
if((ref instanceof cljs.core.Keyword)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56290);
} else {
return G__56290;
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
var G__57067__i = 0, G__57067__a = new Array(arguments.length -  1);
while (G__57067__i < G__57067__a.length) {G__57067__a[G__57067__i] = arguments[G__57067__i + 1]; ++G__57067__i;}
  children = new cljs.core.IndexedSeq(G__57067__a,0,null);
} 
return fulcro$client$primitives$element_factory__delegate.call(this,props,children);};
fulcro$client$primitives$element_factory.cljs$lang$maxFixedArity = 1;
fulcro$client$primitives$element_factory.cljs$lang$applyTo = (function (arglist__57068){
var props = cljs.core.first(arglist__57068);
var children = cljs.core.rest(arglist__57068);
return fulcro$client$primitives$element_factory__delegate(props,children);
});
fulcro$client$primitives$element_factory.cljs$core$IFn$_invoke$arity$variadic = fulcro$client$primitives$element_factory__delegate;
return fulcro$client$primitives$element_factory;
})()
;})(map__56284,map__56284__$1,opts,validator,keyfn,instrument_QMARK_,qualifier))
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
var G__56301 = arguments.length;
switch (G__56301) {
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
var _STAR_query_state_STAR__orig_val__56305 = fulcro.client.primitives._STAR_query_state_STAR_;
var _STAR_query_state_STAR__temp_val__56306 = state_map;
fulcro.client.primitives._STAR_query_state_STAR_ = _STAR_query_state_STAR__temp_val__56306;

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
}finally {fulcro.client.primitives._STAR_query_state_STAR_ = _STAR_query_state_STAR__orig_val__56305;
}});

fulcro.client.primitives.get_query.cljs$lang$maxFixedArity = 2;

fulcro.client.primitives.link_element = (function fulcro$client$primitives$link_element(element){
return clojure.walk.prewalk((function fulcro$client$primitives$link_element_$_link_element_helper(ele){
var map__56309 = cljs.core.meta(ele);
var map__56309__$1 = (((((!((map__56309 == null))))?(((((map__56309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56309):map__56309);
var queryid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56309__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
if(cljs.core.truth_(queryid)){
return queryid;
} else {
return ele;
}
}),element);
});
fulcro.client.primitives.deep_merge = (function fulcro$client$primitives$deep_merge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57082 = arguments.length;
var i__4731__auto___57083 = (0);
while(true){
if((i__4731__auto___57083 < len__4730__auto___57082)){
args__4736__auto__.push((arguments[i__4731__auto___57083]));

var G__57084 = (i__4731__auto___57083 + (1));
i__4731__auto___57083 = G__57084;
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
fulcro.client.primitives.deep_merge.cljs$lang$applyTo = (function (seq56312){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56312));
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
return (function fulcro$client$primitives$normalize_query_elements_$_normalize_query_elements_reducer_$_normalize_union_reducer(s,p__56319){
var vec__56320 = p__56319;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56320,(0),null);
var subquery = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56320,(1),null);
return (fulcro.client.primitives.normalize_query.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.normalize_query.cljs$core$IFn$_invoke$arity$2(s,subquery) : fulcro.client.primitives.normalize_query.call(null,s,subquery));
});})(union_alternates,union_meta,normalized_union_alternates,union_query_id,parameterized_QMARK_,raw_element))
,state,union_alternates)], 0));
} else {
if(fulcro.util.join_QMARK_(raw_element)){
var G__56323 = state;
var G__56324 = fulcro.util.join_value(raw_element);
return (fulcro.client.primitives.normalize_query.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.normalize_query.cljs$core$IFn$_invoke$arity$2(G__56323,G__56324) : fulcro.client.primitives.normalize_query.call(null,G__56323,G__56324));
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
var temp__5718__auto__ = (function (){var G__56328 = query;
var G__56328__$1 = (((G__56328 == null))?null:cljs.core.meta(G__56328));
if((G__56328__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__56328__$1);
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
fulcro.client.primitives.set_query_STAR_ = (function fulcro$client$primitives$set_query_STAR_(state_map,class_or_factory,p__56332){
var map__56333 = p__56332;
var map__56333__$1 = (((((!((map__56333 == null))))?(((((map__56333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56333):map__56333);
var args = map__56333__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56333__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var queryid = (((class_or_factory == null))?null:(cljs.core.truth_((function (){var G__56335 = class_or_factory;
var G__56335__$1 = (((G__56335 == null))?null:cljs.core.meta(G__56335));
if((G__56335__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__56335__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
}
})())?(function (){var G__56336 = class_or_factory;
var G__56336__$1 = (((G__56336 == null))?null:cljs.core.meta(G__56336));
if((G__56336__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__56336__$1);
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
var setq_STAR_ = ((function (queryid,component,map__56333,map__56333__$1,args,query){
return (function (state){
return fulcro.client.primitives.normalize_query(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),cljs.core.dissoc,queryid),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(query,cljs.core.assoc,new cljs.core.Keyword(null,"queryid","queryid",-271432056),queryid,new cljs.core.Keyword(null,"component","component",1555936782),component));
});})(queryid,component,map__56333,map__56333__$1,args,query))
;
if(typeof queryid === 'string'){
var G__56340 = state_map;
if(cljs.core.contains_QMARK_(args,new cljs.core.Keyword(null,"query","query",-1288509510))){
return setq_STAR_(G__56340);
} else {
return G__56340;
}
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),924], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Set query failed. There was no query ID. Use a class or factory for the second argument."], 0));
}catch (e56341){if((e56341 instanceof Error)){
var e__48124__auto___57093 = e56341;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),924], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___57093], 0));
} else {
throw e56341;

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
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__56355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(ident));
var G__56356 = data__$1;
var G__56357 = refs;
var G__56358 = union_seen;
var G__56359 = transform;
return (fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$5 ? fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$5(G__56355,G__56356,G__56357,G__56358,G__56359) : fulcro.client.primitives.normalize_STAR_.call(null,G__56355,G__56356,G__56357,G__56358,G__56359));
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
var vec__56384 = fulcro.util.join_entry(expr);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56384,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56384,(1),null);
var recursive_QMARK_ = fulcro.util.recursion_QMARK_(sel);
var union_entry = ((fulcro.util.union_QMARK_(expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?(((!((union_seen == null))))?union_seen:query):sel);
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sel__$1));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,k);
if(((recursive_QMARK_) && (fulcro.util.ident_QMARK_(v)))){
var G__57103 = cljs.core.next(q);
var G__57104 = ret;
q = G__57103;
ret = G__57104;
continue;
} else {
if(cljs.core.map_QMARK_(v)){
var x = (fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$5 ? fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$5(sel__$1,v,refs,union_entry,transform) : fulcro.client.primitives.normalize_STAR_.call(null,sel__$1,v,refs,union_entry,transform));
if((!((((class$ == null)) || ((!((((!((class$ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$primitives$Ident$))))?true:false):false)))))))){
var i = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(class$,x);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(i),cljs.core.second(i)], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));

var G__57107 = cljs.core.next(q);
var G__57108 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,i);
q = G__57107;
ret = G__57108;
continue;
} else {
var G__57109 = cljs.core.next(q);
var G__57110 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,x);
q = G__57109;
ret = G__57110;
continue;
}
} else {
if(((cljs.core.vector_QMARK_(v)) && ((!(fulcro.util.ident_QMARK_(v)))) && ((!(fulcro.util.ident_QMARK_(cljs.core.first(v))))))){
var xs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,vec__56384,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (p1__56348_SHARP_){
return (fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$5 ? fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$5(sel__$1,p1__56348_SHARP_,refs,union_entry,transform) : fulcro.client.primitives.normalize_STAR_.call(null,sel__$1,p1__56348_SHARP_,refs,union_entry,transform));
});})(q,ret,vec__56384,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
),v);
if((!((((class$ == null)) || ((!((((!((class$ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$primitives$Ident$))))?true:false):false)))))))){
var is = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,xs,vec__56384,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (p1__56350_SHARP_){
return fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(class$,p1__56350_SHARP_);
});})(q,ret,xs,vec__56384,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
),xs);
if(cljs.core.vector_QMARK_(sel__$1)){
if(cljs.core.empty_QMARK_(is)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__56384,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (refs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__56384,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (m,p__56397){
var vec__56398 = p__56397;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56398,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56398,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__56384,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
,refs__$1,cljs.core.zipmap(is,xs));
});})(q,ret,is,xs,vec__56384,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
);
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__56384,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__56384,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (ret__$1,p__56401){
var vec__56402 = p__56401;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56402,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56402,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__56384,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
,refs_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__56384,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
);
}

var G__57118 = cljs.core.next(q);
var G__57119 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,is);
q = G__57118;
ret = G__57119;
continue;
} else {
var G__57120 = cljs.core.next(q);
var G__57121 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,xs);
q = G__57120;
ret = G__57121;
continue;
}
} else {
if((v == null)){
var G__57122 = cljs.core.next(q);
var G__57123 = ret;
q = G__57122;
ret = G__57123;
continue;
} else {
var G__57124 = cljs.core.next(q);
var G__57125 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__57124;
ret = G__57125;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_(expr))?cljs.core.first(expr):expr);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,k);
if((v == null)){
var G__57126 = cljs.core.next(q);
var G__57127 = ret;
q = G__57126;
ret = G__57127;
continue;
} else {
var G__57128 = cljs.core.next(q);
var G__57129 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__57128;
ret = G__57129;
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
var G__56409 = arguments.length;
switch (G__56409) {
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
})():((cljs.core.seq_QMARK_(expr))?(new cljs.core.List(null,(function (){var G__56416 = cljs.core.first(expr);
var G__56417 = ks;
var G__56418 = null;
var G__56419 = null;
return (fulcro.client.primitives.focused_join.cljs$core$IFn$_invoke$arity$4 ? fulcro.client.primitives.focused_join.cljs$core$IFn$_invoke$arity$4(G__56416,G__56417,G__56418,G__56419) : fulcro.client.primitives.focused_join.call(null,G__56416,G__56417,G__56418,G__56419));
})(),(new cljs.core.List(null,cljs.core.second(expr),null,(1),null)),(2),null)):expr
));
var G__56420 = expr_SINGLEQUOTE_;
if((!((expr_meta == null)))){
return cljs.core.with_meta(G__56420,expr_meta);
} else {
return G__56420;
}
});
fulcro.client.primitives.focus_query_STAR_ = (function fulcro$client$primitives$focus_query_STAR_(query,path,union_expr){
if(cljs.core.empty_QMARK_(path)){
return query;
} else {
var vec__56424 = path;
var seq__56425 = cljs.core.seq(vec__56424);
var first__56426 = cljs.core.first(seq__56425);
var seq__56425__$1 = cljs.core.next(seq__56425);
var k = first__56426;
var ks = seq__56425__$1;
var match = ((function (vec__56424,seq__56425,first__56426,seq__56425__$1,k,ks){
return (function fulcro$client$primitives$focus_query_STAR__$_match(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,fulcro.util.join_key(x));
});})(vec__56424,seq__56425,first__56426,seq__56425__$1,k,ks))
;
var value = ((function (vec__56424,seq__56425,first__56426,seq__56425__$1,k,ks){
return (function fulcro$client$primitives$focus_query_STAR__$_value(x){
return fulcro.client.primitives.focused_join(x,ks,query,union_expr);
});})(vec__56424,seq__56425,first__56426,seq__56425__$1,k,ks))
;
if(cljs.core.map_QMARK_(query)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,(function (){var G__56430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,k);
var G__56431 = ks;
var G__56432 = query;
return (fulcro.client.primitives.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.primitives.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3(G__56430,G__56431,G__56432) : fulcro.client.primitives.focus_query_STAR_.call(null,G__56430,G__56431,G__56432));
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
var s_index = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__56433_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"union-key","union-key",1529707234).cljs$core$IFn$_invoke$arity$1(p1__56433_SHARP_),p1__56433_SHARP_],null));
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s_index){
return (function (children,p__56437){
var map__56438 = p__56437;
var map__56438__$1 = (((((!((map__56438 == null))))?(((((map__56438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56438):map__56438);
var union_entry = map__56438__$1;
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56438__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
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
var q_index = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__56440_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__56440_SHARP_),p1__56440_SHARP_],null));
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(query_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q_index){
return (function (children,p__56441){
var map__56442 = p__56441;
var map__56442__$1 = (((((!((map__56442 == null))))?(((((map__56442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56442):map__56442);
var focus = map__56442__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56442__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56442__$1,new cljs.core.Keyword(null,"type","type",1174270348));
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
var G__56444 = fulcro.client.primitives.focus_subquery_STAR_(query_ast,sub_ast);
return (fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1(G__56444) : fulcro.client.primitives.ast__GT_query.call(null,G__56444));
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
var G__56445 = expr;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(expr))){
return cljs.core.first(G__56445);
} else {
return G__56445;
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
return clojure.zip.zipper((function (p1__56446_SHARP_){
return ((cljs.core.vector_QMARK_(p1__56446_SHARP_)) || (cljs.core.map_QMARK_(p1__56446_SHARP_)) || (cljs.core.seq_QMARK_(p1__56446_SHARP_)));
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
var G__57173 = clojure.zip.right(loc__$1);
loc__$1 = G__57173;
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
var G__57189 = clojure.zip.down(loc);
var G__57190 = path__$1;
loc = G__57189;
path__$1 = G__57190;
continue;
} else {
var vec__56451 = path__$1;
var seq__56452 = cljs.core.seq(vec__56451);
var first__56453 = cljs.core.first(seq__56452);
var seq__56452__$1 = cljs.core.next(seq__56452);
var k = first__56453;
var ks = seq__56452__$1;
var k_SINGLEQUOTE_ = fulcro.client.primitives.expr__GT_key(node);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,k_SINGLEQUOTE_)){
if(((cljs.core.map_QMARK_(node)) || (((cljs.core.seq_QMARK_(node)) && (cljs.core.map_QMARK_(cljs.core.first(node))))))){
var loc_SINGLEQUOTE_ = fulcro.client.primitives.move_to_key((function (){var G__56454 = loc;
if(cljs.core.seq_QMARK_(node)){
return clojure.zip.down(G__56454);
} else {
return G__56454;
}
})(),k);
var node_SINGLEQUOTE_ = clojure.zip.node(loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_(node_SINGLEQUOTE_)){
if(cljs.core.seq(ks)){
var G__57196 = clojure.zip.replace(loc_SINGLEQUOTE_,clojure.zip.node(fulcro.client.primitives.move_to_key(loc_SINGLEQUOTE_,cljs.core.first(ks))));
var G__57197 = cljs.core.next(ks);
loc = G__57196;
path__$1 = G__57197;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__57198 = loc_SINGLEQUOTE_;
var G__57199 = ks;
loc = G__57198;
path__$1 = G__57199;
continue;
}
} else {
var G__57200 = clojure.zip.right(clojure.zip.down(clojure.zip.down(clojure.zip.down(loc))));
var G__57201 = ks;
loc = G__57200;
path__$1 = G__57201;
continue;
}
} else {
var G__57202 = clojure.zip.right(loc);
var G__57203 = path__$1;
loc = G__57202;
path__$1 = G__57203;
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
var node_SINGLEQUOTE_ = (function (){var G__56455 = node;
if(typeof node === 'number'){
return (G__56455 - (1));
} else {
return G__56455;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56456){
var vec__56457 = p__56456;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56457,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56457,(1),null);
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
var G__57205 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(data__$1) : map_ident.call(null,data__$1)));
var G__57206 = (limit - (1));
data__$1 = G__57205;
limit = G__57206;
continue;
} else {
return data__$1;
}
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1257], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An infinite loop was detected in your app state on ident: ",data__$1], 0));
}catch (e56463){if((e56463 instanceof Error)){
var e__48124__auto___57211 = e56463;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1257], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___57211], 0));
} else {
throw e56463;

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
var map__56464 = cljs.core.group_by(fulcro.util.join_QMARK_,query);
var map__56464__$1 = (((((!((map__56464 == null))))?(((((map__56464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56464):map__56464);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56464__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56464__$1,true);
var props__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__56464,map__56464__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__56460_SHARP_){
var G__56466 = p1__56460_SHARP_;
if(cljs.core.seq_QMARK_(p1__56460_SHARP_)){
return cljs.core.first(G__56466);
} else {
return G__56466;
}
});})(map__56464,map__56464__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq(joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((!((joins__$1 == null)))){
var join = cljs.core.first(joins__$1);
var vec__56470 = fulcro.util.join_entry(join);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56470,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56470,(1),null);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ident,key);
var G__57224 = cljs.core.next(joins__$1);
var G__57225 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,(fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(sel,v,refs,map_ident,idents_seen,union_expr,recurse_key) : fulcro.client.primitives.denormalize_STAR_.call(null,sel,v,refs,map_ident,idents_seen,union_expr,recurse_key)));
joins__$1 = G__57224;
ret = G__57225;
continue;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(ident,props__$1),ret], 0));
}
break;
}
}
} else {
var ident_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(ident) : map_ident.call(null,ident)));
var query__$1 = (function (){var G__56473 = query;
if(cljs.core.truth_(union_recur_QMARK_)){
return fulcro.client.primitives.reduce_union_recursion_depth(G__56473,recurse_key);
} else {
return G__56473;
}
})();
var union_seen_SINGLEQUOTE_ = (function (){var G__56474 = union_expr;
if(cljs.core.truth_(union_recur_QMARK_)){
return fulcro.client.primitives.reduce_union_recursion_depth(G__56474,recurse_key);
} else {
return G__56474;
}
})();
var query_SINGLEQUOTE_ = (function (){var G__56475 = query__$1;
if(cljs.core.map_QMARK_(query__$1)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__56475,cljs.core.first(ident));
} else {
return G__56475;
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
var G__56476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(recur_ident));
var G__56477 = data__$1;
var G__56478 = refs;
var G__56479 = map_ident;
var G__56480 = idents_seen;
var G__56481 = union_expr;
var G__56482 = recurse_key;
return (fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(G__56476,G__56477,G__56478,G__56479,G__56480,G__56481,G__56482) : fulcro.client.primitives.denormalize_STAR_.call(null,G__56476,G__56477,G__56478,G__56479,G__56480,G__56481,G__56482));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data__$1;
} else {
var map__56483 = cljs.core.group_by(((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__56461_SHARP_){
return ((fulcro.util.join_QMARK_(p1__56461_SHARP_)) || (fulcro.util.ident_QMARK_(p1__56461_SHARP_)) || (((cljs.core.seq_QMARK_(p1__56461_SHARP_)) && (fulcro.util.ident_QMARK_(cljs.core.first(p1__56461_SHARP_))))));
});})(union_recur_QMARK_,recur_ident,data__$1))
,query);
var map__56483__$1 = (((((!((map__56483 == null))))?(((((map__56483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56483):map__56483);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56483__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56483__$1,true);
var props__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__56483,map__56483__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__56462_SHARP_){
var G__56485 = p1__56462_SHARP_;
if(cljs.core.seq_QMARK_(p1__56462_SHARP_)){
return cljs.core.first(G__56485);
} else {
return G__56485;
}
});})(map__56483,map__56483__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq(joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((!((joins__$1 == null)))){
var join = cljs.core.first(joins__$1);
var join__$1 = (function (){var G__56501 = join;
if(cljs.core.seq_QMARK_(join)){
return cljs.core.first(G__56501);
} else {
return G__56501;
}
})();
var join__$2 = (function (){var G__56502 = join__$1;
if(fulcro.util.ident_QMARK_(join__$1)){
return cljs.core.PersistentHashMap.fromArrays([G__56502],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)]);
} else {
return G__56502;
}
})();
var vec__56498 = fulcro.util.join_entry(join__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56498,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56498,(1),null);
var recurse_QMARK_ = fulcro.util.recursion_QMARK_(sel);
var recurse_key__$1 = ((recurse_QMARK_)?key:null);
var v = ((fulcro.util.ident_QMARK_(key))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(key)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(refs,cljs.core.first(key)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(key) : map_ident.call(null,key)))):cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,key));
var key__$1 = (function (){var G__56503 = key;
if(fulcro.util.unique_ident_QMARK_(key)){
return cljs.core.first(G__56503);
} else {
return G__56503;
}
})();
var v__$1 = ((fulcro.client.primitives.mappable_ident_QMARK_(refs,v))?(function (){var v__$1 = v;
var limit = (100);
while(true){
if(cljs.core.pos_int_QMARK_(limit)){
var next = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(v__$1) : map_ident.call(null,v__$1)));
if(fulcro.client.primitives.mappable_ident_QMARK_(refs,next)){
var G__57243 = next;
var G__57244 = (limit - (1));
v__$1 = G__57243;
limit = G__57244;
continue;
} else {
return (map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(v__$1) : map_ident.call(null,v__$1));
}
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1326], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An ident loop was detected in your app state on ident:",v__$1], 0));
}catch (e56505){if((e56505 instanceof Error)){
var e__48124__auto___57252 = e56505;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1326], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___57252], 0));
} else {
throw e56505;

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
var G__57263 = cljs.core.next(joins__$1);
var G__57264 = ret;
joins__$1 = G__57263;
ret = G__57264;
continue;
} else {
if(graph_loop_QMARK_){
var G__57266 = cljs.core.next(joins__$1);
var G__57267 = ret;
joins__$1 = G__57266;
ret = G__57267;
continue;
} else {
if((v__$1 == null)){
var G__57270 = cljs.core.next(joins__$1);
var G__57271 = ret;
joins__$1 = G__57270;
ret = G__57271;
continue;
} else {
var G__57272 = cljs.core.next(joins__$1);
var G__57273 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key__$1,(fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1) : fulcro.client.primitives.denormalize_STAR_.call(null,sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1)));
joins__$1 = G__57272;
ret = G__57273;
continue;

}
}
}
} else {
var temp__5718__auto__ = cljs.core.some(((function (joins__$1,ret,map__56483,map__56483__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1){
return (function (p__56506){
var vec__56507 = p__56506;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56507,(0),null);
var identset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56507,(1),null);
if(cljs.core.contains_QMARK_(identset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,k))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),k], null));
} else {
return null;
}
});})(joins__$1,ret,map__56483,map__56483__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1))
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
var G__56511 = arguments.length;
switch (G__56511) {
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
return clojure.walk.prewalk((function (p1__56512_SHARP_){
if(cljs.core.truth_((fulcro.client.primitives.tempid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.tempid_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__56512_SHARP_) : fulcro.client.primitives.tempid_QMARK_.call(null,p1__56512_SHARP_)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(tid__GT_rid,p1__56512_SHARP_,p1__56512_SHARP_);
} else {
return p1__56512_SHARP_;
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
var G__57287 = cljs.core.async.poll_BANG_(queue);
var G__57288 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(entries,fulcro.client.primitives.resolve_tempids(entry,tempid_map));
entry = G__57287;
entries = G__57288;
continue;
} else {
if(cljs.core.seq(entries)){
var seq__56521 = cljs.core.seq(entries);
var chunk__56522 = null;
var count__56523 = (0);
var i__56524 = (0);
while(true){
if((i__56524 < count__56523)){
var e = chunk__56522.cljs$core$IIndexed$_nth$arity$2(null,i__56524);
if(cljs.core.truth_(cljs.core.async.offer_BANG_(queue,e))){
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1408], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unable to put request back on network queue during tempid rewrite!"], 0));
}catch (e56527){if((e56527 instanceof Error)){
var e__48124__auto___57300 = e56527;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1408], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___57300], 0));
} else {
throw e56527;

}
}}


var G__57301 = seq__56521;
var G__57302 = chunk__56522;
var G__57303 = count__56523;
var G__57304 = (i__56524 + (1));
seq__56521 = G__57301;
chunk__56522 = G__57302;
count__56523 = G__57303;
i__56524 = G__57304;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__56521);
if(temp__5720__auto__){
var seq__56521__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56521__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56521__$1);
var G__57305 = cljs.core.chunk_rest(seq__56521__$1);
var G__57306 = c__4550__auto__;
var G__57307 = cljs.core.count(c__4550__auto__);
var G__57308 = (0);
seq__56521 = G__57305;
chunk__56522 = G__57306;
count__56523 = G__57307;
i__56524 = G__57308;
continue;
} else {
var e = cljs.core.first(seq__56521__$1);
if(cljs.core.truth_(cljs.core.async.offer_BANG_(queue,e))){
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1408], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unable to put request back on network queue during tempid rewrite!"], 0));
}catch (e56528){if((e56528 instanceof Error)){
var e__48124__auto___57311 = e56528;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1408], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___57311], 0));
} else {
throw e56528;

}
}}


var G__57312 = cljs.core.next(seq__56521__$1);
var G__57313 = null;
var G__57314 = (0);
var G__57315 = (0);
seq__56521 = G__57312;
chunk__56522 = G__57313;
count__56523 = G__57314;
i__56524 = G__57315;
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
var G__56529 = kw__$1;
var G__56529__$1 = (((G__56529 == null))?null:cljs.core.namespace(G__56529));
if((G__56529__$1 == null)){
return null;
} else {
return cljs.core.re_find(/^ui(?:\.|$)/,G__56529__$1);
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
var G__56530 = drop_ui_children(ast);
return (fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1(G__56530) : fulcro.client.primitives.ast__GT_query.call(null,G__56530));
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
var mock_missing_object = (function (){var G__56531 = cljs.core.PersistentArrayMap.EMPTY;
var G__56532 = fulcro.util.join_value(element__$1);
return (fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(G__56531,G__56532) : fulcro.client.primitives.mark_missing.call(null,G__56531,G__56532));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,fulcro.util.join_key(element__$1),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mock_missing_object,missing_entity], 0)));
} else {
if(((fulcro.util.join_QMARK_(element__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),cljs.core.get.cljs$core$IFn$_invoke$arity$3(result__$1,fulcro.util.join_key(element__$1),new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,fulcro.util.join_key(element__$1),new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912));
} else {
if(((fulcro.util.join_QMARK_(element__$1)) && (cljs.core.vector_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,fulcro.util.join_key(element__$1)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,fulcro.util.join_key(element__$1),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (element__$1,result_key,result_value,missing_entity){
return (function (item){
var G__56533 = item;
var G__56534 = fulcro.util.join_value(element__$1);
return (fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(G__56533,G__56534) : fulcro.client.primitives.mark_missing.call(null,G__56533,G__56534));
});})(element__$1,result_key,result_value,missing_entity))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,fulcro.util.join_key(element__$1))));
} else {
if(((fulcro.util.join_QMARK_(element__$1)) && (cljs.core.map_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,fulcro.util.join_key(element__$1)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,fulcro.util.join_key(element__$1),(function (){var G__56535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,fulcro.util.join_key(element__$1));
var G__56536 = fulcro.util.join_value(element__$1);
return (fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(G__56535,G__56536) : fulcro.client.primitives.mark_missing.call(null,G__56535,G__56536));
})());
} else {
if(((fulcro.util.join_QMARK_(element__$1)) && (cljs.core.vector_QMARK_(fulcro.util.join_value(element__$1))) && ((!(((cljs.core.map_QMARK_(result_value)) || (cljs.core.vector_QMARK_(result_value)))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,(function (){var G__56537 = cljs.core.PersistentArrayMap.EMPTY;
var G__56538 = fulcro.util.join_value(element__$1);
return (fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(G__56537,G__56538) : fulcro.client.primitives.mark_missing.call(null,G__56537,G__56538));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__56539){
var vec__56540 = p__56539;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56540,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56540,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__56543){
var vec__56544 = p__56543;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56544,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56544,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__56547){
var vec__56548 = p__56547;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56548,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56548,(1),null);
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
var source_to_merge = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__56552){
var vec__56553 = p__56552;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56553,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56553,(1),null);
return (!((k instanceof cljs.core.Symbol)));
}),source));
var merged_state = fulcro.client.primitives.sweep_merge(target,source_to_merge);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (source_to_merge,merged_state){
return (function (acc,p__56556){
var vec__56557 = p__56556;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56557,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56557,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = mutation_merge;
if(cljs.core.truth_(and__4120__auto__)){
return (k instanceof cljs.core.Symbol);
} else {
return and__4120__auto__;
}
})())){
var temp__5718__auto__ = (function (){var G__56560 = acc;
var G__56561 = k;
var G__56562 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(v,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205)], 0));
return (mutation_merge.cljs$core$IFn$_invoke$arity$3 ? mutation_merge.cljs$core$IFn$_invoke$arity$3(G__56560,G__56561,G__56562) : mutation_merge.call(null,G__56560,G__56561,G__56562));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var updated_state = temp__5718__auto__;
return updated_state;
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1652], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Return value handler for",k,"returned nil. Ignored."], 0));
}catch (e56563){if((e56563 instanceof Error)){
var e__48124__auto___57384 = e56563;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1652], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___57384], 0));
} else {
throw e56563;

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
var G__56564 = fulcro.client.primitives.sweep_merge(updated_state,db);
var G__56564__$1 = (cljs.core.truth_(target)?fulcro.client.impl.data_targeting.process_target.cljs$core$IFn$_invoke$arity$3(G__56564,idnt,target):G__56564);
if(cljs.core.not(target)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56564__$1,db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([idnt], 0));
} else {
return G__56564__$1;
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
var map__56567 = config;
var map__56567__$1 = (((((!((map__56567 == null))))?(((((map__56567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56567):map__56567);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56567__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862));
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56567__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315));
var ident_joins = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__56567,map__56567__$1,merge_ident,indexer){
return (function (p1__56565_SHARP_){
var G__56569 = p1__56565_SHARP_;
if(cljs.core.seq_QMARK_(p1__56565_SHARP_)){
return cljs.core.first(G__56569);
} else {
return G__56569;
}
});})(map__56567,map__56567__$1,merge_ident,indexer))
),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (map__56567,map__56567__$1,merge_ident,indexer){
return (function (p1__56566_SHARP_){
return ((fulcro.util.join_QMARK_(p1__56566_SHARP_)) && (fulcro.util.ident_QMARK_(fulcro.util.join_key(p1__56566_SHARP_))));
});})(map__56567,map__56567__$1,merge_ident,indexer))
)),query);
var step = ((function (map__56567,map__56567__$1,merge_ident,indexer,ident_joins){
return (function fulcro$client$primitives$merge_idents_$_step(tree_SINGLEQUOTE_,p__56577){
var vec__56578 = p__56577;
var ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56578,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56578,(1),null);
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
var G__56582 = (merge_ident.cljs$core$IFn$_invoke$arity$4 ? merge_ident.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_) : merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_));
var G__56583 = refs__$1;
var fexpr__56581 = new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config);
return (fexpr__56581.cljs$core$IFn$_invoke$arity$2 ? fexpr__56581.cljs$core$IFn$_invoke$arity$2(G__56582,G__56583) : fexpr__56581.call(null,G__56582,G__56583));
} else {
return (merge_ident.cljs$core$IFn$_invoke$arity$4 ? merge_ident.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ident,props) : merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props));
}
});})(map__56567,map__56567__$1,merge_ident,indexer,ident_joins))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,tree,refs);
});
/**
 * PRIVATE. DO NOT USE.
 */
fulcro.client.primitives._merge_novelty = (function fulcro$client$primitives$_merge_novelty(var_args){
var G__56585 = arguments.length;
switch (G__56585) {
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
var G__56586 = state_map;
var G__56587 = (function (){var or__4131__auto__ = query;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return root_query;
}
})();
var G__56588 = tempids;
return (migrate.cljs$core$IFn$_invoke$arity$3 ? migrate.cljs$core$IFn$_invoke$arity$3(G__56586,G__56587,G__56588) : migrate.call(null,G__56586,G__56587,G__56588));
} else {
return state_map;
}
})();
return fulcro.client.primitives._merge_novelty.cljs$core$IFn$_invoke$arity$4(reconciler,state,result_tree,query);
});

fulcro.client.primitives._merge_novelty.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,state_map,result_tree,query){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__56589 = fulcro.client.primitives.sift_idents(result_tree);
var idts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56589,(0),null);
var result_tree__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56589,(1),null);
var normalized_result = (cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))?fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$4((function (){var or__4131__auto__ = query;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)));
}
})(),result_tree__$1,true,fulcro.client.primitives.pre_merge_transform(state_map)):result_tree__$1);
var G__56593 = fulcro.client.primitives.merge_idents(fulcro.client.primitives.merge_mutation_joins(state_map,query,result_tree__$1),config,idts,query);
var G__56594 = normalized_result;
var fexpr__56592 = new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config);
return (fexpr__56592.cljs$core$IFn$_invoke$arity$2 ? fexpr__56592.cljs$core$IFn$_invoke$arity$2(G__56593,G__56594) : fexpr__56592.call(null,G__56593,G__56594));
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
var G__56596 = arguments.length;
switch (G__56596) {
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
var temp__5720__auto___57413 = (function (){var G__56597 = ele;
var G__56597__$1 = (((G__56597 == null))?null:cljs.core.meta(G__56597));
if((G__56597__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__56597__$1);
}
})();
if(cljs.core.truth_(temp__5720__auto___57413)){
var component_57414 = temp__5720__auto___57413;
var ks_57415 = fulcro.client.primitives.gather_keys(ele);
var seq__56598_57416 = cljs.core.seq(ks_57415);
var chunk__56599_57417 = null;
var count__56600_57418 = (0);
var i__56601_57419 = (0);
while(true){
if((i__56601_57419 < count__56600_57418)){
var k_57420 = chunk__56599_57417.cljs$core$IIndexed$_nth$arity$2(null,i__56601_57419);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(prop__GT_classes,cljs.core.update,k_57420,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([component_57414], 0));


var G__57421 = seq__56598_57416;
var G__57422 = chunk__56599_57417;
var G__57423 = count__56600_57418;
var G__57424 = (i__56601_57419 + (1));
seq__56598_57416 = G__57421;
chunk__56599_57417 = G__57422;
count__56600_57418 = G__57423;
i__56601_57419 = G__57424;
continue;
} else {
var temp__5720__auto___57425__$1 = cljs.core.seq(seq__56598_57416);
if(temp__5720__auto___57425__$1){
var seq__56598_57426__$1 = temp__5720__auto___57425__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56598_57426__$1)){
var c__4550__auto___57428 = cljs.core.chunk_first(seq__56598_57426__$1);
var G__57429 = cljs.core.chunk_rest(seq__56598_57426__$1);
var G__57430 = c__4550__auto___57428;
var G__57431 = cljs.core.count(c__4550__auto___57428);
var G__57432 = (0);
seq__56598_57416 = G__57429;
chunk__56599_57417 = G__57430;
count__56600_57418 = G__57431;
i__56601_57419 = G__57432;
continue;
} else {
var k_57433 = cljs.core.first(seq__56598_57426__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(prop__GT_classes,cljs.core.update,k_57433,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([component_57414], 0));


var G__57434 = cljs.core.next(seq__56598_57426__$1);
var G__57435 = null;
var G__57436 = (0);
var G__57437 = (0);
seq__56598_57416 = G__57434;
chunk__56599_57417 = G__57435;
count__56600_57418 = G__57436;
i__56601_57419 = G__57437;
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
}catch (e56609){if((e56609 instanceof Error)){
var e__48124__auto___57441 = e56609;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1783], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___57441], 0));
} else {
throw e56609;

}
}}

if((!((cljs.core.second(ident) == null)))){
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1789], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["component ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c.constructor.displayName),"'s ident (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ident),") has a `nil` second element."," This warning can be safely ignored if that is intended."].join('')], 0));
}catch (e56610){if((e56610 instanceof Error)){
var e__48124__auto___57444 = e56610;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1789], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___57444], 0));
} else {
throw e56610;

}
}}

return ident;
})():null);
if((!((ident == null)))){
var G__56611 = indexes__$2;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__56611,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
} else {
return G__56611;
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
var G__56613 = indexes__$2;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__56613,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.disj,c);
} else {
return G__56613;
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
return (function (p1__56602_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),p1__56602_SHARP_], null));
});})(indexes__$1,___$1))
),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(cljs.core.into),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),k], null),cljs.core.PersistentHashSet.EMPTY),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),k], null)));
}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k56604,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__56614 = k56604;
var G__56614__$1 = (((G__56614 instanceof cljs.core.Keyword))?G__56614.fqn:null);
switch (G__56614__$1) {
case "indexes":
return self__.indexes;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56604,else__4388__auto__);

}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__56615){
var vec__56616 = p__56615;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56616,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56616,(1),null);
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

fulcro.client.primitives.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56603){
var self__ = this;
var G__56603__$1 = this;
return (new cljs.core.RecordIter((0),G__56603__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__56619 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-535195966 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__56619(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56605,other56606){
var self__ = this;
var this56605__$1 = this;
return (((!((other56606 == null)))) && ((this56605__$1.constructor === other56606.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56605__$1.indexes,other56606.indexes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56605__$1.__extmap,other56606.__extmap)));
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

fulcro.client.primitives.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__56603){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__56620 = cljs.core.keyword_identical_QMARK_;
var expr__56621 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__56623 = new cljs.core.Keyword(null,"indexes","indexes",1496475545);
var G__56624 = expr__56621;
return (pred__56620.cljs$core$IFn$_invoke$arity$2 ? pred__56620.cljs$core$IFn$_invoke$arity$2(G__56623,G__56624) : pred__56620.call(null,G__56623,G__56624));
})())){
return (new fulcro.client.primitives.Indexer(G__56603,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.client.primitives.Indexer(self__.indexes,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__56603),null));
}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes,null))], null),self__.__extmap));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__56603){
var self__ = this;
var this__4384__auto____$1 = this;
return (new fulcro.client.primitives.Indexer(self__.indexes,G__56603,self__.__extmap,self__.__hash));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
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
fulcro.client.primitives.map__GT_Indexer = (function fulcro$client$primitives$map__GT_Indexer(G__56607){
var extmap__4424__auto__ = (function (){var G__56625 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56607,new cljs.core.Keyword(null,"indexes","indexes",1496475545));
if(cljs.core.record_QMARK_(G__56607)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56625);
} else {
return G__56625;
}
})();
return (new fulcro.client.primitives.Indexer(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(G__56607),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
fulcro.client.primitives.gather_sends = (function fulcro$client$primitives$gather_sends(p__56627,q,remotes,tx_time){
var map__56628 = p__56627;
var map__56628__$1 = (((((!((map__56628 == null))))?(((((map__56628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56628):map__56628);
var env = map__56628__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56628__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__56628,map__56628__$1,env,parser){
return (function (p1__56626_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__56626_SHARP_,(function (){var G__56630 = (parser.cljs$core$IFn$_invoke$arity$3 ? parser.cljs$core$IFn$_invoke$arity$3(env,q,p1__56626_SHARP_) : parser.call(null,env,q,p1__56626_SHARP_));
if((G__56630 == null)){
return null;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__56630,cljs.core.assoc,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456),tx_time);
}
})()],null));
});})(map__56628,map__56628__$1,env,parser))
),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (map__56628,map__56628__$1,env,parser){
return (function (p__56631){
var vec__56632 = p__56631;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56632,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56632,(1),null);
return (cljs.core.count(v) > (0));
});})(map__56628,map__56628__$1,env,parser))
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
return (fulcro.client.primitives._STAR_raf_STAR_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives._STAR_raf_STAR_.cljs$core$IFn$_invoke$arity$1(f) : fulcro.client.primitives._STAR_raf_STAR_.call(null,f));
} else {
if((!((typeof requestAnimationFrame !== 'undefined')))){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
});
var throttle_57461 = (new goog.async.Throttle((function (reconciler){
return fulcro.client.primitives._queue_render_BANG_((function (){
return fulcro.client.impl.protocols.reconcile_BANG_.cljs$core$IFn$_invoke$arity$1(reconciler);
}));
}),(16)));
fulcro.client.primitives.schedule_render_BANG_ = ((function (throttle_57461){
return (function fulcro$client$primitives$schedule_render_BANG_(reconciler){
return throttle_57461.fire(reconciler);
});})(throttle_57461))
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
fulcro.client.primitives.fulcro_ui__GT_props = (function fulcro$client$primitives$fulcro_ui__GT_props(p__56635,c){
var map__56636 = p__56635;
var map__56636__$1 = (((((!((map__56636 == null))))?(((((map__56636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56636):map__56636);
var env = map__56636__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56636__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56636__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ui = (((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.fulcro$client$primitives$Ident$))))?true:false):false))?(function (){var id = fulcro.client.primitives.ident(c,fulcro.client.primitives.props(c));
var has_tempid_QMARK_ = (function (){var G__56639 = cljs.core.second(id);
return (fulcro.client.primitives.tempid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.tempid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__56639) : fulcro.client.primitives.tempid_QMARK_.call(null,G__56639));
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
var result = (function (){var G__56640 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"replacement-root-path","replacement-root-path",-1563938351),data_path);
var G__56641 = query;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__56640,G__56641) : parser.call(null,G__56640,G__56641));
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
var G__56642 = props;
if((!(cljs.core.empty_QMARK_(computed_map)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__56642,cljs.core.assoc,new cljs.core.Keyword("fulcro.client.primitives","computed","fulcro.client.primitives/computed",201987962),computed_map);
} else {
return G__56642;
}
} else {
var G__56643 = props;
if((!(cljs.core.empty_QMARK_(computed_map)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56643,new cljs.core.Keyword("fulcro.client.primitives","computed","fulcro.client.primitives/computed",201987962),computed_map);
} else {
return G__56643;
}
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
fulcro.client.primitives.get_computed = (function fulcro$client$primitives$get_computed(var_args){
var G__56645 = arguments.length;
switch (G__56645) {
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
var props = (function (){var G__56646 = x;
if(fulcro.client.primitives.component_QMARK_(x)){
return fulcro.client.primitives.props(G__56646);
} else {
return G__56646;
}
})();
var ks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","computed","fulcro.client.primitives/computed",201987962)], null),(function (){var G__56647 = k_or_ks;
if((!(cljs.core.sequential_QMARK_(k_or_ks)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__56647],null));
} else {
return G__56647;
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
var G__56649 = arguments.length;
switch (G__56649) {
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
var G__57471 = null;
var G__57471__1 = (function (props){
return (real_factory.cljs$core$IFn$_invoke$arity$1 ? real_factory.cljs$core$IFn$_invoke$arity$1(props) : real_factory.call(null,props));
});
var G__57471__2 = (function (props,computed_props){
var G__56650 = fulcro.client.primitives.computed(props,computed_props);
return (real_factory.cljs$core$IFn$_invoke$arity$1 ? real_factory.cljs$core$IFn$_invoke$arity$1(G__56650) : real_factory.call(null,G__56650));
});
var G__57471__3 = (function() { 
var G__57472__delegate = function (props,computed_props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,fulcro.client.primitives.computed(props,computed_props),children);
};
var G__57472 = function (props,computed_props,var_args){
var children = null;
if (arguments.length > 2) {
var G__57473__i = 0, G__57473__a = new Array(arguments.length -  2);
while (G__57473__i < G__57473__a.length) {G__57473__a[G__57473__i] = arguments[G__57473__i + 2]; ++G__57473__i;}
  children = new cljs.core.IndexedSeq(G__57473__a,0,null);
} 
return G__57472__delegate.call(this,props,computed_props,children);};
G__57472.cljs$lang$maxFixedArity = 2;
G__57472.cljs$lang$applyTo = (function (arglist__57474){
var props = cljs.core.first(arglist__57474);
arglist__57474 = cljs.core.next(arglist__57474);
var computed_props = cljs.core.first(arglist__57474);
var children = cljs.core.rest(arglist__57474);
return G__57472__delegate(props,computed_props,children);
});
G__57472.cljs$core$IFn$_invoke$arity$variadic = G__57472__delegate;
return G__57472;
})()
;
G__57471 = function(props,computed_props,var_args){
var children = var_args;
switch(arguments.length){
case 1:
return G__57471__1.call(this,props);
case 2:
return G__57471__2.call(this,props,computed_props);
default:
var G__57476 = null;
if (arguments.length > 2) {
var G__57477__i = 0, G__57477__a = new Array(arguments.length -  2);
while (G__57477__i < G__57477__a.length) {G__57477__a[G__57477__i] = arguments[G__57477__i + 2]; ++G__57477__i;}
G__57476 = new cljs.core.IndexedSeq(G__57477__a,0,null);
}
return G__57471__3.cljs$core$IFn$_invoke$arity$variadic(props,computed_props, G__57476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__57471.cljs$lang$maxFixedArity = 2;
G__57471.cljs$lang$applyTo = G__57471__3.cljs$lang$applyTo;
G__57471.cljs$core$IFn$_invoke$arity$1 = G__57471__1;
G__57471.cljs$core$IFn$_invoke$arity$2 = G__57471__2;
G__57471.cljs$core$IFn$_invoke$arity$variadic = G__57471__3.cljs$core$IFn$_invoke$arity$variadic;
return G__57471;
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
var G__56652 = arguments.length;
switch (G__56652) {
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
}catch (e56653){var e = e56653;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1941], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Component",c,"threw an exception while rendering "], 0));
}catch (e56654){if((e56654 instanceof Error)){
var e__48124__auto___57481 = e56654;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1941], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___57481], 0));
} else {
throw e56654;

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
var get_path = (function (p1__56655_SHARP_){
var G__56656 = p1__56655_SHARP_;
var G__56656__$1 = (((G__56656 == null))?null:fulcro.client.primitives.props(G__56656));
var G__56656__$2 = (((G__56656__$1 == null))?null:cljs.core.meta(G__56656__$1));
if((G__56656__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.client.impl.parser","data-path","fulcro.client.impl.parser/data-path",1793359026).cljs$core$IFn$_invoke$arity$1(G__56656__$2);
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
var map__56660 = cljs.core.deref(reconciler_state);
var map__56660__$1 = (((((!((map__56660 == null))))?(((((map__56660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56660):map__56660);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56660__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var render_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56660__$1,new cljs.core.Keyword(null,"render-props","render-props",-249976873));
var root__$1 = ((fulcro.client.primitives.component_QMARK_(root))?root:(fulcro.client.primitives.class__GT_any.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.class__GT_any.cljs$core$IFn$_invoke$arity$2(reconciler,root) : fulcro.client.primitives.class__GT_any.call(null,reconciler,root)));
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var queued_components = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (reconciler_state,map__56660,map__56660__$1,root,render_props,root__$1,config){
return (function (p1__56657_SHARP_){
return fulcro.client.impl.protocols.key__GT_components(new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(config),p1__56657_SHARP_);
});})(reconciler_state,map__56660,map__56660__$1,root,render_props,root__$1,config))
),((function (reconciler_state,map__56660,map__56660__$1,root,render_props,root__$1,config){
return (function (p1__56658_SHARP_,p2__56659_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__56658_SHARP_,p2__56659_SHARP_);
});})(reconciler_state,map__56660,map__56660__$1,root,render_props,root__$1,config))
,cljs.core.PersistentHashSet.EMPTY,refresh_queue);
var mounted_components = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.mounted_QMARK_,queued_components);
var data_path = ((function (reconciler_state,map__56660,map__56660__$1,root,render_props,root__$1,config,queued_components,mounted_components){
return (function (c){
var G__56662 = c;
var G__56662__$1 = (((G__56662 == null))?null:fulcro.client.primitives.props(G__56662));
var G__56662__$2 = (((G__56662__$1 == null))?null:cljs.core.meta(G__56662__$1));
if((G__56662__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.client.impl.parser","data-path","fulcro.client.impl.parser/data-path",1793359026).cljs$core$IFn$_invoke$arity$1(G__56662__$2);
}
});})(reconciler_state,map__56660,map__56660__$1,root,render_props,root__$1,config,queued_components,mounted_components))
;
var parent_with_path = ((function (reconciler_state,map__56660,map__56660__$1,root,render_props,root__$1,config,queued_components,mounted_components,data_path){
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
var G__57487 = fulcro.client.primitives.parent(p);
p = G__57487;
continue;
} else {
return root__$1;

}
}
break;
}
});})(reconciler_state,map__56660,map__56660__$1,root,render_props,root__$1,config,queued_components,mounted_components,data_path))
;
var refreshable_components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (reconciler_state,map__56660,map__56660__$1,root,render_props,root__$1,config,queued_components,mounted_components,data_path,parent_with_path){
return (function (result,c){
if(cljs.core.truth_(data_path(c))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,c);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,parent_with_path(c));
}
});})(reconciler_state,map__56660,map__56660__$1,root,render_props,root__$1,config,queued_components,mounted_components,data_path,parent_with_path))
,cljs.core.PersistentVector.EMPTY,mounted_components);
var env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives._to_env(config),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler);
if(cljs.core.truth_(root__$1)){
var old_tree = fulcro.client.primitives.props(root__$1);
var components = fulcro.client.primitives.dedup_components_by_path(refreshable_components);
var updated_tree = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_tree,components,reconciler_state,map__56660,map__56660__$1,root,render_props,root__$1,config,queued_components,mounted_components,data_path,parent_with_path,refreshable_components,env){
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
}catch (e56663){if((e56663 instanceof Error)){
var e__48124__auto___57491 = e56663;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2010], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___57491], 0));
} else {
throw e56663;

}
}} else {
}

return cljs.core.reduced(null);
} else {
return cljs.core.assoc_in(tree,target_path,next_props);
}
});})(old_tree,components,reconciler_state,map__56660,map__56660__$1,root,render_props,root__$1,config,queued_components,mounted_components,data_path,parent_with_path,refreshable_components,env))
,old_tree,components);
if(cljs.core.truth_(updated_tree)){
return (render_props.cljs$core$IFn$_invoke$arity$1 ? render_props.cljs$core$IFn$_invoke$arity$1(updated_tree) : render_props.call(null,updated_tree));
} else {
var start = cljs.core.inst_ms((new Date()));
var _ = (render_root.cljs$core$IFn$_invoke$arity$0 ? render_root.cljs$core$IFn$_invoke$arity$0() : render_root.call(null));
var end = cljs.core.inst_ms((new Date()));
if(((end - start) > (20))){
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2021], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Root render took ",(end - start),"ms"], 0));
}catch (e56664){if((e56664 instanceof Error)){
var e__48124__auto__ = e56664;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2021], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto__], 0));
} else {
throw e56664;

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
fulcro.client.primitives._reconciler_normalize_initial_state = (function fulcro$client$primitives$_reconciler_normalize_initial_state(p__56665,root_class){
var map__56666 = p__56665;
var map__56666__$1 = (((((!((map__56666 == null))))?(((((map__56666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56666):map__56666);
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56666__$1,new cljs.core.Keyword(null,"config","config",994861415));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56666__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
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

fulcro.client.primitives.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k56670,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__56674 = k56670;
var G__56674__$1 = (((G__56674 instanceof cljs.core.Keyword))?G__56674.fqn:null);
switch (G__56674__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56670,else__4388__auto__);

}
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__56675){
var vec__56676 = p__56675;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56676,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56676,(1),null);
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

var G__56680 = sends;
var G__56681 = ((function (G__56680,sends,this$__$1){
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
;})(G__56680,sends,this$__$1))
;
var fexpr__56679 = new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__56679.cljs$core$IFn$_invoke$arity$2 ? fexpr__56679.cljs$core$IFn$_invoke$arity$2(G__56680,G__56681) : fexpr__56679.call(null,G__56680,G__56681));
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
}catch (e56682){if((e56682 instanceof Error)){
var e__48124__auto__ = e56682;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2159], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto__], 0));
} else {
throw e56682;

}
}}
});})(reconciler_state,components_to_refresh,render_mode,force_root_QMARK_,blind_refresh_QMARK_,rendered_root_QMARK_,this$__$1))
;
if((!((remote == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),remote], null),cljs.core.PersistentVector.EMPTY);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY);
}

var _STAR_blindly_render_STAR__orig_val__56683 = fulcro.client.primitives._STAR_blindly_render_STAR_;
var _STAR_blindly_render_STAR__temp_val__56684 = blind_refresh_QMARK_;
fulcro.client.primitives._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR__temp_val__56684;

try{if(force_root_QMARK_){
return render_root();
} else {
return fulcro.client.primitives._optimal_render(this$__$1,components_to_refresh,render_root);
}
}finally {fulcro.client.primitives._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR__orig_val__56683;
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
var _STAR_reconciler_STAR__orig_val__56685 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_shared_STAR__orig_val__56686 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__56687 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_reconciler_STAR__temp_val__56688 = this$__$1;
var _STAR_shared_STAR__temp_val__56689 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config))?(function (){var fexpr__56691 = new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__56691.cljs$core$IFn$_invoke$arity$1 ? fexpr__56691.cljs$core$IFn$_invoke$arity$1(data) : fexpr__56691.call(null,data));
})():null)], 0));
var _STAR_instrument_STAR__temp_val__56690 = new cljs.core.Keyword(null,"instrument","instrument",-960698844).cljs$core$IFn$_invoke$arity$1(self__.config);
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__56688;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__56689;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__56690;

try{var hydrate_QMARK___$1 = new cljs.core.Keyword(null,"hydrate?","hydrate?",-57042185).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(data));
var render_function = (cljs.core.truth_(hydrate_QMARK___$1)?new cljs.core.Keyword(null,"root-hydrate","root-hydrate",-1597214367).cljs$core$IFn$_invoke$arity$1(self__.config):new cljs.core.Keyword(null,"root-render","root-render",835981146).cljs$core$IFn$_invoke$arity$1(self__.config));
var c = (((!((target == null))))?(function (){var G__56692 = (rctor.cljs$core$IFn$_invoke$arity$1 ? rctor.cljs$core$IFn$_invoke$arity$1(data) : rctor.call(null,data));
var G__56693 = target;
return (render_function.cljs$core$IFn$_invoke$arity$2 ? render_function.cljs$core$IFn$_invoke$arity$2(G__56692,G__56693) : render_function.call(null,G__56692,G__56693));
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
}finally {fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__56687;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__56686;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__56685;
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
var root_props = (function (){var fexpr__56694 = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__56694.cljs$core$IFn$_invoke$arity$2 ? fexpr__56694.cljs$core$IFn$_invoke$arity$2(env,root_query) : fexpr__56694.call(null,env,root_query));
})();
if(cljs.core.empty_QMARK_(root_props)){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2086], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["WARNING: Root props were empty. Your root query returned no data!"], 0));
}catch (e56695){if((e56695 instanceof Error)){
var e__48124__auto___57512 = e56695;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2086], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___57512], 0));
} else {
throw e56695;

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
return (function (p1__56668_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56668_SHARP_,new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword(null,"root","root",-448657453)),new cljs.core.Keyword(null,"remove","remove",-131428414));
});})(renderf,parsef,ret,rctor,guid,hydrate_QMARK_,this$__$1))
);

if((target == null)){
return null;
} else {
var fexpr__56696 = new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789).cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__56696.cljs$core$IFn$_invoke$arity$1 ? fexpr__56696.cljs$core$IFn$_invoke$arity$1(target) : fexpr__56696.call(null,target));
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

parsef.cljs$core$IFn$_invoke$arity$1(hydrate_QMARK_);

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

fulcro.client.primitives.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56669){
var self__ = this;
var G__56669__$1 = this;
return (new cljs.core.RecordIter((0),G__56669__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"history","history",-247395220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__56697 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (775628851 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__56697(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56671,other56672){
var self__ = this;
var this56671__$1 = this;
return (((!((other56672 == null)))) && ((this56671__$1.constructor === other56672.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56671__$1.config,other56672.config)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56671__$1.state,other56672.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56671__$1.history,other56672.history)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56671__$1.__extmap,other56672.__extmap)));
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

fulcro.client.primitives.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__56669){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__56698 = cljs.core.keyword_identical_QMARK_;
var expr__56699 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__56701 = new cljs.core.Keyword(null,"config","config",994861415);
var G__56702 = expr__56699;
return (pred__56698.cljs$core$IFn$_invoke$arity$2 ? pred__56698.cljs$core$IFn$_invoke$arity$2(G__56701,G__56702) : pred__56698.call(null,G__56701,G__56702));
})())){
return (new fulcro.client.primitives.Reconciler(G__56669,self__.state,self__.history,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56703 = new cljs.core.Keyword(null,"state","state",-1988618099);
var G__56704 = expr__56699;
return (pred__56698.cljs$core$IFn$_invoke$arity$2 ? pred__56698.cljs$core$IFn$_invoke$arity$2(G__56703,G__56704) : pred__56698.call(null,G__56703,G__56704));
})())){
return (new fulcro.client.primitives.Reconciler(self__.config,G__56669,self__.history,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56705 = new cljs.core.Keyword(null,"history","history",-247395220);
var G__56706 = expr__56699;
return (pred__56698.cljs$core$IFn$_invoke$arity$2 ? pred__56698.cljs$core$IFn$_invoke$arity$2(G__56705,G__56706) : pred__56698.call(null,G__56705,G__56706));
})())){
return (new fulcro.client.primitives.Reconciler(self__.config,self__.state,G__56669,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.client.primitives.Reconciler(self__.config,self__.state,self__.history,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__56669),null));
}
}
}
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"config","config",994861415),self__.config,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"history","history",-247395220),self__.history,null))], null),self__.__extmap));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__56669){
var self__ = this;
var this__4384__auto____$1 = this;
return (new fulcro.client.primitives.Reconciler(self__.config,self__.state,self__.history,G__56669,self__.__extmap,self__.__hash));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
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
fulcro.client.primitives.map__GT_Reconciler = (function fulcro$client$primitives$map__GT_Reconciler(G__56673){
var extmap__4424__auto__ = (function (){var G__56707 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56673,new cljs.core.Keyword(null,"config","config",994861415),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"history","history",-247395220)], 0));
if(cljs.core.record_QMARK_(G__56673)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56707);
} else {
return G__56707;
}
})();
return (new fulcro.client.primitives.Reconciler(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__56673),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__56673),new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(G__56673),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
fulcro.client.primitives.reconciler = (function fulcro$client$primitives$reconciler(p__56715){
var map__56716 = p__56715;
var map__56716__$1 = (((((!((map__56716 == null))))?(((((map__56716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56716):map__56716);
var config = map__56716__$1;
var root_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56716__$1,new cljs.core.Keyword(null,"root-render","root-render",835981146),((function (map__56716,map__56716__$1,config){
return (function (p1__56710_SHARP_,p2__56711_SHARP_){
return ReactDOM.render(p1__56710_SHARP_,p2__56711_SHARP_);
});})(map__56716,map__56716__$1,config))
);
var normalize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56716__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051));
var query_transform_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56716__$1,new cljs.core.Keyword(null,"query-transform-default","query-transform-default",-1684574273));
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56716__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var root_hydrate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56716__$1,new cljs.core.Keyword(null,"root-hydrate","root-hydrate",-1597214367),((function (map__56716,map__56716__$1,config,root_render,normalize,query_transform_default,tx_listen){
return (function (p1__56712_SHARP_,p2__56713_SHARP_){
return ReactDOM.hydrate(p1__56712_SHARP_,p2__56713_SHARP_);
});})(map__56716,map__56716__$1,config,root_render,normalize,query_transform_default,tx_listen))
);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56716__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var merge_sends = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56716__$1,new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),((function (map__56716,map__56716__$1,config,root_render,normalize,query_transform_default,tx_listen,root_hydrate,instrument){
return (function (p1__56708_SHARP_,p2__56709_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__56708_SHARP_,p2__56709_SHARP_], 0));
});})(map__56716,map__56716__$1,config,root_render,normalize,query_transform_default,tx_listen,root_hydrate,instrument))
);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56716__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862));
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56716__$1,new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576)], null));
var render_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56716__$1,new cljs.core.Keyword(null,"render-mode","render-mode",-151613976),new cljs.core.Keyword(null,"normal","normal",-1519123858));
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56716__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56716__$1,new cljs.core.Keyword(null,"history","history",-247395220),(200));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56716__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var lifecycle = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56716__$1,new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205),null);
var shared_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56716__$1,new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144));
var load_marker_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56716__$1,new cljs.core.Keyword(null,"load-marker-default","load-marker-default",335781105));
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56716__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56716__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var root_unmount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56716__$1,new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),((function (map__56716,map__56716__$1,config,root_render,normalize,query_transform_default,tx_listen,root_hydrate,instrument,merge_sends,merge_ident,remotes,render_mode,migrate,history,state,lifecycle,shared_fn,load_marker_default,parser,id){
return (function (p1__56714_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__56714_SHARP_);
});})(map__56716,map__56716__$1,config,root_render,normalize,query_transform_default,tx_listen,root_hydrate,instrument,merge_sends,merge_ident,remotes,render_mode,migrate,history,state,lifecycle,shared_fn,load_marker_default,parser,id))
);
var send = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56716__$1,new cljs.core.Keyword(null,"send","send",-652151114));
var merge_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56716__$1,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161));
var hydrate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56716__$1,new cljs.core.Keyword(null,"hydrate?","hydrate?",-57042185),false);
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56716__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
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
var v = (function (){var fexpr__56721 = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(cfg);
return (fexpr__56721.cljs$core$IFn$_invoke$arity$2 ? fexpr__56721.cljs$core$IFn$_invoke$arity$2(env,tx) : fexpr__56721.call(null,env,tx));
})();
var declared_refreshes = (function (){var or__4131__auto__ = (function (){var G__56723 = v;
var G__56723__$1 = (((G__56723 == null))?null:cljs.core.meta(G__56723));
var G__56723__$2 = (((G__56723__$1 == null))?null:new cljs.core.Keyword("fulcro.client.primitives","refresh","fulcro.client.primitives/refresh",481513561).cljs$core$IFn$_invoke$arity$1(G__56723__$1));
if((G__56723__$2 == null)){
return null;
} else {
return cljs.core.vec(G__56723__$2);
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
var xs = (function (){var G__56724 = follow_on_reads;
var G__56724__$1 = (((!((c == null))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56724,c):G__56724);
if((!((ref__$1 == null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56724__$1,ref__$1);
} else {
return G__56724__$1;
}
})();
var history_step = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("fulcro.history","tx","fulcro.history/tx",1485693993),tx,new cljs.core.Keyword("fulcro.history","client-time","fulcro.history/client-time",1879420278),(new Date()),new cljs.core.Keyword("fulcro.history","network-sends","fulcro.history/network-sends",-234790789),snds,new cljs.core.Keyword("fulcro.history","db-before","fulcro.history/db-before",650457365),old_state,new cljs.core.Keyword("fulcro.history","db-after","fulcro.history/db-after",-1774997361),new_state], null);
if(cljs.core.truth_(history)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(history,fulcro.history.record_history_step,tx_time,history_step);
} else {
}

fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,cljs.core.into.cljs$core$IFn$_invoke$arity$3(xs,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(v)));

if(cljs.core.empty_QMARK_(snds)){
} else {
var seq__56725_57538 = cljs.core.seq(snds);
var chunk__56726_57539 = null;
var count__56727_57540 = (0);
var i__56728_57541 = (0);
while(true){
if((i__56728_57541 < count__56727_57540)){
var vec__56735_57543 = chunk__56726_57539.cljs$core$IIndexed$_nth$arity$2(null,i__56728_57541);
var remote_57544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56735_57543,(0),null);
var __57545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56735_57543,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.client.primitives.get_network_activity(reconciler),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remote_57544,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"active","active",1895962068));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","status","fulcro.client.network/status",570358457),remote_57544], null),new cljs.core.Keyword(null,"active","active",1895962068));

fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,xs,remote_57544);


var G__57546 = seq__56725_57538;
var G__57547 = chunk__56726_57539;
var G__57548 = count__56727_57540;
var G__57549 = (i__56728_57541 + (1));
seq__56725_57538 = G__57546;
chunk__56726_57539 = G__57547;
count__56727_57540 = G__57548;
i__56728_57541 = G__57549;
continue;
} else {
var temp__5720__auto___57550 = cljs.core.seq(seq__56725_57538);
if(temp__5720__auto___57550){
var seq__56725_57551__$1 = temp__5720__auto___57550;
if(cljs.core.chunked_seq_QMARK_(seq__56725_57551__$1)){
var c__4550__auto___57552 = cljs.core.chunk_first(seq__56725_57551__$1);
var G__57553 = cljs.core.chunk_rest(seq__56725_57551__$1);
var G__57554 = c__4550__auto___57552;
var G__57555 = cljs.core.count(c__4550__auto___57552);
var G__57556 = (0);
seq__56725_57538 = G__57553;
chunk__56726_57539 = G__57554;
count__56727_57540 = G__57555;
i__56728_57541 = G__57556;
continue;
} else {
var vec__56738_57558 = cljs.core.first(seq__56725_57551__$1);
var remote_57559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56738_57558,(0),null);
var __57560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56738_57558,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.client.primitives.get_network_activity(reconciler),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remote_57559,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"active","active",1895962068));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","status","fulcro.client.network/status",570358457),remote_57559], null),new cljs.core.Keyword(null,"active","active",1895962068));

fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,xs,remote_57559);


var G__57561 = cljs.core.next(seq__56725_57551__$1);
var G__57562 = null;
var G__57563 = (0);
var G__57564 = (0);
seq__56725_57538 = G__57561;
chunk__56726_57539 = G__57562;
count__56727_57540 = G__57563;
i__56728_57541 = G__57564;
continue;
}
} else {
}
}
break;
}

fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","status","fulcro.client.network/status",570358457)], null));

fulcro.client.impl.protocols.queue_sends_BANG_(reconciler,snds);

fulcro.client.primitives.schedule_sends_BANG_(reconciler);
}

var temp__5720__auto___57566 = new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__5720__auto___57566)){
var f_57568 = temp__5720__auto___57566;
var tx_data_57569 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_state], null)], 0));
var G__56741_57570 = tx_data_57569;
var G__56742_57571 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(history_step,new cljs.core.Keyword(null,"tx","tx",466630418),tx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ret","ret",-468222814),v], 0));
(f_57568.cljs$core$IFn$_invoke$arity$2 ? f_57568.cljs$core$IFn$_invoke$arity$2(G__56741_57570,G__56742_57571) : f_57568.call(null,G__56741_57570,G__56742_57571));
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
var G__56745 = expr;
if(fulcro.util.mutation_QMARK_(expr)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__56745,cljs.core.assoc,new cljs.core.Keyword(null,"mutator","mutator",-1326825366),ident__$1);
} else {
return G__56745;
}
});
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__56743_SHARP_){
return annotate(p1__56743_SHARP_,ident);
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
var G__56747 = arguments.length;
switch (G__56747) {
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

var tx__$1 = (function (){var G__56748 = tx;
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
return fulcro.client.primitives.annotate_mutations(G__56748,fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(x));
} else {
return G__56748;
}
})();
if(fulcro.client.primitives.reconciler_QMARK_(x)){
return fulcro.client.primitives.transact_STAR_(x,null,null,tx__$1);
} else {
if((!(fulcro.client.primitives.some_hasquery_QMARK_(x)))){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2410], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["transact! should be called on a component","that implements IQuery or has a parent that","implements IQuery"].join('')], 0));
}catch (e56751){if((e56751 instanceof Error)){
var e__48124__auto___57576 = e56751;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2410], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___57576], 0));
} else {
throw e56751;

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
var vec__56756 = (((((!((p == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === p.fulcro$client$impl$protocols$ITxIntercept$))))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,fulcro.client.impl.protocols.tx_intercept(p,tx__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$2], null));
var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56756,(0),null);
var tx__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56756,(1),null);
var G__57578 = fulcro.client.primitives.parent(p);
var G__57579 = x_SINGLEQUOTE_;
var G__57580 = tx__$3;
p = G__57578;
x__$1 = G__57579;
tx__$2 = G__57580;
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
var G__56761 = arguments.length;
switch (G__56761) {
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
var G__56763 = arguments.length;
switch (G__56763) {
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

var update_fn_57586 = (function (component,f,args){
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
fulcro.client.primitives.update_state_BANG_ = ((function (update_fn_57586){
return (function fulcro$client$primitives$update_state_BANG_(var_args){
var G__56768 = arguments.length;
switch (G__56768) {
case 2:
return fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___57590 = arguments.length;
var i__4731__auto___57591 = (0);
while(true){
if((i__4731__auto___57591 < len__4730__auto___57590)){
args_arr__4751__auto__.push((arguments[i__4731__auto___57591]));

var G__57592 = (i__4731__auto___57591 + (1));
i__4731__auto___57591 = G__57592;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});})(update_fn_57586))
;

fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (update_fn_57586){
return (function (component,f){
return update_fn_57586(component,f,cljs.core.PersistentVector.EMPTY);
});})(update_fn_57586))
;

fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = ((function (update_fn_57586){
return (function (component,f,args){
return update_fn_57586(component,f,args);
});})(update_fn_57586))
;

/** @this {Function} */
fulcro.client.primitives.update_state_BANG_.cljs$lang$applyTo = ((function (update_fn_57586){
return (function (seq56765){
var G__56766 = cljs.core.first(seq56765);
var seq56765__$1 = cljs.core.next(seq56765);
var G__56767 = cljs.core.first(seq56765__$1);
var seq56765__$2 = cljs.core.next(seq56765__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56766,G__56767,seq56765__$2);
});})(update_fn_57586))
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
var G__56769 = component;
var G__56769__$1 = (((G__56769 == null))?null:fulcro.client.primitives.get_reconciler(G__56769));
var G__56769__$2 = (((G__56769__$1 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__56769__$1));
var G__56769__$3 = (((G__56769__$2 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__56769__$2));
if((G__56769__$3 == null)){
return null;
} else {
return cljs.core.deref(G__56769__$3);
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
var _STAR_blindly_render_STAR__orig_val__56770 = fulcro.client.primitives._STAR_blindly_render_STAR_;
var _STAR_blindly_render_STAR__temp_val__56771 = true;
fulcro.client.primitives._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR__temp_val__56771;

try{return (render.cljs$core$IFn$_invoke$arity$0 ? render.cljs$core$IFn$_invoke$arity$0() : render.call(null));
}finally {fulcro.client.primitives._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR__orig_val__56770;
}} else {
return null;
}
});
/**
 * Return a temporary id.
 */
fulcro.client.primitives.tempid = (function fulcro$client$primitives$tempid(var_args){
var G__56773 = arguments.length;
switch (G__56773) {
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
var G__56775 = arguments.length;
switch (G__56775) {
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
var G__56777 = arguments.length;
switch (G__56777) {
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
fulcro.client.primitives.parser = (function fulcro$client$primitives$parser(p__56778){
var map__56779 = p__56778;
var map__56779__$1 = (((((!((map__56779 == null))))?(((((map__56779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56779):map__56779);
var opts = map__56779__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56779__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56779__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
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
var G__56782 = arguments.length;
switch (G__56782) {
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

var temp__5720__auto___57605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fulcro.client.primitives.roots),target);
if(cljs.core.truth_(temp__5720__auto___57605)){
var old_reconciler_57607 = temp__5720__auto___57605;
(fulcro.client.primitives.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2(old_reconciler_57607,target) : fulcro.client.primitives.remove_root_BANG_.call(null,old_reconciler_57607,target));
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
var G__56784 = arguments.length;
switch (G__56784) {
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

var shared = (function (){var G__56785 = component.props;
var G__56786 = "fulcro$shared";
return goog.object.get(G__56785,G__56786);
})();
var ks = (function (){var G__56787 = k_or_ks;
if((!(cljs.core.sequential_QMARK_(k_or_ks)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__56787],null));
} else {
return G__56787;
}
})();
var G__56788 = shared;
if((!(cljs.core.empty_QMARK_(ks)))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__56788,ks);
} else {
return G__56788;
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
var G__56790 = arguments.length;
switch (G__56790) {
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

var cst = (function (){var G__56791 = component;
var G__56791__$1 = (((G__56791 == null))?null:G__56791.state);
if((G__56791__$1 == null)){
return null;
} else {
return goog.object.get(G__56791__$1,"fulcro$state");
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
var G__56792 = component.refs;
if((G__56792 == null)){
return null;
} else {
return goog.object.get(G__56792,name);
}
});
/**
 * Set a dynamic query. Alters the query, and then rebuilds internal indexes.
 * 
 *   `x` is anything that any->reconciler accepts.
 */
fulcro.client.primitives.set_query_BANG_ = (function fulcro$client$primitives$set_query_BANG_(x,class_or_factory,p__56793){
var map__56794 = p__56793;
var map__56794__$1 = (((((!((map__56794 == null))))?(((((map__56794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56794):map__56794);
var opts = map__56794__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56794__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56794__$1,new cljs.core.Keyword(null,"params","params",710516235));
var follow_on_reads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56794__$1,new cljs.core.Keyword(null,"follow-on-reads","follow-on-reads",-2113573300));
var reconciler = fulcro.client.primitives.any__GT_reconciler(x);
var state_atom = fulcro.client.primitives.app_state(reconciler);
var queryid = ((typeof class_or_factory === 'string')?class_or_factory:(cljs.core.truth_((function (){var G__56796 = class_or_factory;
var G__56796__$1 = (((G__56796 == null))?null:cljs.core.meta(G__56796));
if((G__56796__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__56796__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
}
})())?(function (){var G__56797 = class_or_factory;
var G__56797__$1 = (((G__56797 == null))?null:cljs.core.meta(G__56797));
if((G__56797__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__56797__$1);
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
}catch (e56798){if((e56798 instanceof Error)){
var e__48124__auto__ = e56798;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2690], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto__], 0));
} else {
throw e56798;

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
var G__56802 = arguments.length;
switch (G__56802) {
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

fulcro.client.primitives.pessimistic_transaction__GT_transaction.cljs$core$IFn$_invoke$arity$2 = (function (tx,p__56803){
var map__56804 = p__56803;
var map__56804__$1 = (((((!((map__56804 == null))))?(((((map__56804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56804):map__56804);
var options = map__56804__$1;
var valid_remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56804__$1,new cljs.core.Keyword(null,"valid-remotes","valid-remotes",-1188757845),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),null], null), null));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56804__$1,new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.PersistentArrayMap.EMPTY);
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56804__$1,new cljs.core.Keyword(null,"state-map","state-map",-1313872128),cljs.core.PersistentArrayMap.EMPTY);
var ast_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.query__GT_ast(tx));
var map__56806 = cljs.core.group_by(((function (ast_nodes,map__56804,map__56804__$1,options,valid_remotes,env,state_map){
return (function (p1__56799_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__56799_SHARP_));
});})(ast_nodes,map__56804,map__56804__$1,options,valid_remotes,env,state_map))
,ast_nodes);
var map__56806__$1 = (((((!((map__56806 == null))))?(((((map__56806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56806):map__56806);
var ast_calls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56806__$1,true);
var ast_reads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56806__$1,false);
var ast_follow_on_reads = fulcro.client.primitives.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),ast_reads], null));
var remote_for_ast_call = ((function (ast_nodes,map__56806,map__56806__$1,ast_calls,ast_reads,ast_follow_on_reads,map__56804,map__56804__$1,options,valid_remotes,env,state_map){
return (function (c){
var map__56815 = c;
var map__56815__$1 = (((((!((map__56815 == null))))?(((((map__56815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56815):map__56815);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56815__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var mutation_remotes = (function (){var or__4131__auto__ = (function (){var G__56818 = (((typeof fulcro !== 'undefined') && (typeof fulcro.client !== 'undefined') && (typeof fulcro.client.data_fetch !== 'undefined') && (typeof fulcro.client.data_fetch.mutation_remotes !== 'undefined'))?(new cljs.core.Var(((function (map__56815,map__56815__$1,dispatch_key,ast_nodes,map__56806,map__56806__$1,ast_calls,ast_reads,ast_follow_on_reads,map__56804,map__56804__$1,options,valid_remotes,env,state_map){
return (function (){
return fulcro.client.data_fetch.mutation_remotes;
});})(map__56815,map__56815__$1,dispatch_key,ast_nodes,map__56806,map__56806__$1,ast_calls,ast_reads,ast_follow_on_reads,map__56804,map__56804__$1,options,valid_remotes,env,state_map))
,cljs.core.with_meta(new cljs.core.Symbol("fulcro.client.data-fetch","mutation-remotes","fulcro.client.data-fetch/mutation-remotes",-1956965793,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null);
if((G__56818 == null)){
return null;
} else {
return cljs.core.deref(G__56818);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__56815,map__56815__$1,dispatch_key,ast_nodes,map__56806,map__56806__$1,ast_calls,ast_reads,ast_follow_on_reads,map__56804,map__56804__$1,options,valid_remotes,env,state_map){
return (function (state_map__$1,sym){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2713], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["FAILED TO FIND mutation-remotes. CANNOT DERIVE REMOTES FOR ptransact! Assuming :remote"], 0));
}catch (e56819){if((e56819 instanceof Error)){
var e__48124__auto___57624 = e56819;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2713], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___57624], 0));
} else {
throw e56819;

}
}
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),null], null), null);
});
;})(or__4131__auto__,map__56815,map__56815__$1,dispatch_key,ast_nodes,map__56806,map__56806__$1,ast_calls,ast_reads,ast_follow_on_reads,map__56804,map__56804__$1,options,valid_remotes,env,state_map))
}
})();
var remotes = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("fallback",cljs.core.name(dispatch_key)))?cljs.core.PersistentHashSet.EMPTY:(mutation_remotes.cljs$core$IFn$_invoke$arity$3 ? mutation_remotes.cljs$core$IFn$_invoke$arity$3(state_map,c,valid_remotes) : mutation_remotes.call(null,state_map,c,valid_remotes)));
if(cljs.core.seq(remotes)){
return cljs.core.first(remotes);
} else {
return null;
}
});})(ast_nodes,map__56806,map__56806__$1,ast_calls,ast_reads,ast_follow_on_reads,map__56804,map__56804__$1,options,valid_remotes,env,state_map))
;
var is_local_QMARK_ = ((function (ast_nodes,map__56806,map__56806__$1,ast_calls,ast_reads,ast_follow_on_reads,remote_for_ast_call,map__56804,map__56804__$1,options,valid_remotes,env,state_map){
return (function (c){
return cljs.core.not(remote_for_ast_call(c));
});})(ast_nodes,map__56806,map__56806__$1,ast_calls,ast_reads,ast_follow_on_reads,remote_for_ast_call,map__56804,map__56804__$1,options,valid_remotes,env,state_map))
;
var vec__56807 = cljs.core.split_with(is_local_QMARK_,ast_calls);
var ast_local_calls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56807,(0),null);
var ast_remaining_calls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56807,(1),null);
var ast_first_remote_call = (function (){var G__56820 = ast_remaining_calls;
if((G__56820 == null)){
return null;
} else {
return cljs.core.first(G__56820);
}
})();
var remote = (function (){var G__56821 = ast_first_remote_call;
if((G__56821 == null)){
return null;
} else {
return remote_for_ast_call(G__56821);
}
})();
var unprocessed_call_asts = cljs.core.vec(cljs.core.rest(ast_remaining_calls));
var vec__56810 = cljs.core.split_with(is_local_QMARK_,unprocessed_call_asts);
var possible_fallback_asts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56810,(0),null);
var distant_call_asts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56810,(1),null);
var map__56813 = cljs.core.group_by(((function (ast_nodes,map__56806,map__56806__$1,ast_calls,ast_reads,ast_follow_on_reads,remote_for_ast_call,is_local_QMARK_,vec__56807,ast_local_calls,ast_remaining_calls,ast_first_remote_call,remote,unprocessed_call_asts,vec__56810,possible_fallback_asts,distant_call_asts,map__56804,map__56804__$1,options,valid_remotes,env,state_map){
return (function (p1__56800_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("fallback",cljs.core.name(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(p1__56800_SHARP_)));
});})(ast_nodes,map__56806,map__56806__$1,ast_calls,ast_reads,ast_follow_on_reads,remote_for_ast_call,is_local_QMARK_,vec__56807,ast_local_calls,ast_remaining_calls,ast_first_remote_call,remote,unprocessed_call_asts,vec__56810,possible_fallback_asts,distant_call_asts,map__56804,map__56804__$1,options,valid_remotes,env,state_map))
,possible_fallback_asts);
var map__56813__$1 = (((((!((map__56813 == null))))?(((((map__56813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56813):map__56813);
var fallback_asts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56813__$1,true);
var following_call_asts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56813__$1,false);
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
var G__56824 = arguments.length;
switch (G__56824) {
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
var remotes = (function (){var G__56825 = reconciler;
var G__56825__$1 = (((G__56825 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__56825));
var G__56825__$2 = (((G__56825__$1 == null))?null:new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(G__56825__$1));
if((G__56825__$2 == null)){
return null;
} else {
return cljs.core.set(G__56825__$2);
}
})();
var ptx = fulcro.client.primitives.pessimistic_transaction__GT_transaction.cljs$core$IFn$_invoke$arity$2(tx,(function (){var G__56826 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valid-remotes","valid-remotes",-1188757845),remotes,new cljs.core.Keyword(null,"state-map","state-map",-1313872128),state_map], null);
if(cljs.core.truth_(ref)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56826,new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null));
} else {
return G__56826;
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
return (function fulcro$client$primitives$make_state_map_$_value_of_STAR_(p__56835){
var vec__56836 = p__56835;
var isk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56836,(0),null);
var isv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56836,(1),null);
var param_name = ((function (vec__56836,isk,isv,join_keys,init_keys,is_child_QMARK_){
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
});})(vec__56836,isk,isv,join_keys,init_keys,is_child_QMARK_))
;
var substitute = ((function (param_name,vec__56836,isk,isv,join_keys,init_keys,is_child_QMARK_){
return (function (ele){
var temp__5718__auto__ = param_name(ele);
if(cljs.core.truth_(temp__5718__auto__)){
var k = temp__5718__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,k);
} else {
return ele;
}
});})(param_name,vec__56836,isk,isv,join_keys,init_keys,is_child_QMARK_))
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__56836,isk,isv,join_keys,init_keys,is_child_QMARK_){
return (function (m){
return fulcro.client.primitives.get_initial_state(child_class,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(fulcro$client$primitives$make_state_map_$_value_of_STAR_,m)));
});})(param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__56836,isk,isv,join_keys,init_keys,is_child_QMARK_))
,isv)], null);
} else {
if(((cljs.core.vector_QMARK_(param_value)) && (is_child_QMARK_(isk)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__56836,isk,isv,join_keys,init_keys,is_child_QMARK_){
return (function (params__$1){
if(cljs.core.truth_(fulcro.client.primitives.computed_initial_state_QMARK_(params__$1))){
return params__$1;
} else {
return fulcro.client.primitives.get_initial_state(child_class,params__$1);
}
});})(param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__56836,isk,isv,join_keys,init_keys,is_child_QMARK_))
,param_value)], null);
} else {
if(cljs.core.vector_QMARK_(isv)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__56836,isk,isv,join_keys,init_keys,is_child_QMARK_){
return (function (ele){
return substitute(ele);
});})(param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__56836,isk,isv,join_keys,init_keys,is_child_QMARK_))
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
var len__4730__auto___57640 = arguments.length;
var i__4731__auto___57641 = (0);
while(true){
if((i__4731__auto___57641 < len__4730__auto___57640)){
args__4736__auto__.push((arguments[i__4731__auto___57641]));

var G__57642 = (i__4731__auto___57641 + (1));
i__4731__auto___57641 = G__57642;
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
}catch (e56845){if((e56845 instanceof Error)){
var e__48124__auto___57644 = e56845;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),3238], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___57644], 0));
} else {
throw e56845;

}
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(fulcro.util.__integrate_ident_impl__,state,ident,named_parameters);
});

fulcro.client.primitives.integrate_ident.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.client.primitives.integrate_ident.cljs$lang$applyTo = (function (seq56842){
var G__56843 = cljs.core.first(seq56842);
var seq56842__$1 = cljs.core.next(seq56842);
var G__56844 = cljs.core.first(seq56842__$1);
var seq56842__$2 = cljs.core.next(seq56842__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56843,G__56844,seq56842__$2);
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
var len__4730__auto___57648 = arguments.length;
var i__4731__auto___57649 = (0);
while(true){
if((i__4731__auto___57649 < len__4730__auto___57648)){
args__4736__auto__.push((arguments[i__4731__auto___57649]));

var G__57650 = (i__4731__auto___57649 + (1));
i__4731__auto___57649 = G__57650;
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
}catch (e56849){if((e56849 instanceof Error)){
var e__48124__auto___57652 = e56849;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),3278], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___57652], 0));
} else {
throw e56849;

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
fulcro.client.primitives.integrate_ident_BANG_.cljs$lang$applyTo = (function (seq56846){
var G__56847 = cljs.core.first(seq56846);
var seq56846__$1 = cljs.core.next(seq56846);
var G__56848 = cljs.core.first(seq56846__$1);
var seq56846__$2 = cljs.core.next(seq56846__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56847,G__56848,seq56846__$2);
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
var len__4730__auto___57654 = arguments.length;
var i__4731__auto___57655 = (0);
while(true){
if((i__4731__auto___57655 < len__4730__auto___57654)){
args__4736__auto__.push((arguments[i__4731__auto___57655]));

var G__57656 = (i__4731__auto___57655 + (1));
i__4731__auto___57655 = G__57656;
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
var G__56855 = fulcro.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state_map,table_entries], 0));
if(cljs.core.seq(named_parameters)){
var fexpr__56856 = ((function (G__56855,query,state_to_merge,table_entries,top_ident,temp__5718__auto__){
return (function (p1__56850_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(fulcro.util.__integrate_ident_impl__,p1__56850_SHARP_,top_ident,named_parameters);
});})(G__56855,query,state_to_merge,table_entries,top_ident,temp__5718__auto__))
;
return fexpr__56856(G__56855);
} else {
return G__56855;
}
} else {
return state_map;
}
});

fulcro.client.primitives.merge_component.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fulcro.client.primitives.merge_component.cljs$lang$applyTo = (function (seq56851){
var G__56852 = cljs.core.first(seq56851);
var seq56851__$1 = cljs.core.next(seq56851);
var G__56853 = cljs.core.first(seq56851__$1);
var seq56851__$2 = cljs.core.next(seq56851__$1);
var G__56854 = cljs.core.first(seq56851__$2);
var seq56851__$3 = cljs.core.next(seq56851__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56852,G__56853,G__56854,seq56851__$3);
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
var len__4730__auto___57660 = arguments.length;
var i__4731__auto___57661 = (0);
while(true){
if((i__4731__auto___57661 < len__4730__auto___57660)){
args__4736__auto__.push((arguments[i__4731__auto___57661]));

var G__57662 = (i__4731__auto___57661 + (1));
i__4731__auto___57661 = G__57662;
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
}catch (e56861){if((e56861 instanceof Error)){
var e__48124__auto__ = e56861;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),3335], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto__], 0));
} else {
throw e56861;

}
}} else {
var ident = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(component,object_data);
var reconciler__$1 = ((cljs.core.contains_QMARK_(reconciler,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966)))?new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(reconciler):reconciler);
var state = fulcro.client.primitives.app_state(reconciler__$1);
var data_path_keys = cljs.core.vec(cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters))))));
var map__56862 = fulcro.client.primitives._preprocess_merge(state,component,object_data);
var map__56862__$1 = (((((!((map__56862 == null))))?(((((map__56862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56862):map__56862);
var merge_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56862__$1,new cljs.core.Keyword(null,"merge-data","merge-data",1760143734));
var merge_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56862__$1,new cljs.core.Keyword(null,"merge-query","merge-query",610171663));
fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler__$1,merge_data,merge_query);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (ident,reconciler__$1,state,data_path_keys,map__56862,map__56862__$1,merge_data,merge_query){
return (function (s){
var st = s;
var st__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(fulcro.util.__integrate_ident_impl__,st,ident,named_parameters);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(st__$1,new cljs.core.Keyword("fulcro","merge","fulcro/merge",-1037375858));
});})(ident,reconciler__$1,state,data_path_keys,map__56862,map__56862__$1,merge_data,merge_query))
);

fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data_path_keys,ident));

return cljs.core.deref(state);
}
});

fulcro.client.primitives.merge_component_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fulcro.client.primitives.merge_component_BANG_.cljs$lang$applyTo = (function (seq56857){
var G__56858 = cljs.core.first(seq56857);
var seq56857__$1 = cljs.core.next(seq56857);
var G__56859 = cljs.core.first(seq56857__$1);
var seq56857__$2 = cljs.core.next(seq56857__$1);
var G__56860 = cljs.core.first(seq56857__$2);
var seq56857__$3 = cljs.core.next(seq56857__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56858,G__56859,G__56860,seq56857__$3);
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
var fulcro$client$primitives$merge_alternate_unions_$_walk_ast__3 = (function (p__56871,visitor,parent_union){
var map__56872 = p__56871;
var map__56872__$1 = (((((!((map__56872 == null))))?(((((map__56872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56872):map__56872);
var parent_ast = map__56872__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56872__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56872__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56872__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56872__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56872__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56872__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
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
var seq__56874 = cljs.core.seq(children);
var chunk__56875 = null;
var count__56876 = (0);
var i__56877 = (0);
while(true){
if((i__56877 < count__56876)){
var ast = chunk__56875.cljs$core$IIndexed$_nth$arity$2(null,i__56877);
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


var G__57670 = seq__56874;
var G__57671 = chunk__56875;
var G__57672 = count__56876;
var G__57673 = (i__56877 + (1));
seq__56874 = G__57670;
chunk__56875 = G__57671;
count__56876 = G__57672;
i__56877 = G__57673;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__56874);
if(temp__5720__auto__){
var seq__56874__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56874__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56874__$1);
var G__57676 = cljs.core.chunk_rest(seq__56874__$1);
var G__57677 = c__4550__auto__;
var G__57678 = cljs.core.count(c__4550__auto__);
var G__57679 = (0);
seq__56874 = G__57676;
chunk__56875 = G__57677;
count__56876 = G__57678;
i__56877 = G__57679;
continue;
} else {
var ast = cljs.core.first(seq__56874__$1);
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


var G__57680 = cljs.core.next(seq__56874__$1);
var G__57681 = null;
var G__57682 = (0);
var G__57683 = (0);
seq__56874 = G__57680;
chunk__56875 = G__57681;
count__56876 = G__57682;
i__56877 = G__57683;
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
fulcro$client$primitives$merge_alternate_unions_$_walk_ast = function(p__56871,visitor,parent_union){
switch(arguments.length){
case 2:
return fulcro$client$primitives$merge_alternate_unions_$_walk_ast__2.call(this,p__56871,visitor);
case 3:
return fulcro$client$primitives$merge_alternate_unions_$_walk_ast__3.call(this,p__56871,visitor,parent_union);
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
return walk_ast.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.query__GT_ast(fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(root_component)),merge_union);
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
fulcro.client.primitives.default_component_prototype = (function (){var obj56893 = ({"shouldComponentUpdate":(function (next_props,next_state){
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
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__56894 = this$.state;
var G__56895 = "fulcro$state";
return goog.object.get(G__56894,G__56895);
})(),next_state__$1);
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
return obj56893;
})();

//# sourceMappingURL=fulcro.client.primitives.js.map
