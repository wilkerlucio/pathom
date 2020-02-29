goog.provide('fulcro.inspect.helpers');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.mutations');
goog.require('fulcro.inspect.lib.local_storage');
fulcro.inspect.helpers.om_ident_QMARK_ = (function fulcro$inspect$helpers$om_ident_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x))) && ((cljs.core.first(x) instanceof cljs.core.Keyword)));
});
fulcro.inspect.helpers.query_component = (function fulcro$inspect$helpers$query_component(var_args){
var G__58326 = arguments.length;
switch (G__58326) {
case 1:
return fulcro.inspect.helpers.query_component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.inspect.helpers.query_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.inspect.helpers.query_component.cljs$core$IFn$_invoke$arity$1 = (function (this$){
var component = fulcro.client.primitives.react_type(this$);
var ref = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$);
var state = cljs.core.deref(fulcro.client.primitives.app_state(fulcro.client.primitives.get_reconciler(this$)));
var query = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(component);
return fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ref),state);
});

fulcro.inspect.helpers.query_component.cljs$core$IFn$_invoke$arity$2 = (function (this$,focus_path){
var component = fulcro.client.primitives.react_type(this$);
var ref = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$);
var state = cljs.core.deref(fulcro.client.primitives.app_state(fulcro.client.primitives.get_reconciler(this$)));
var query = fulcro.client.primitives.focus_query(fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(component),focus_path);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ref),state),focus_path);
});

fulcro.inspect.helpers.query_component.cljs$lang$maxFixedArity = 2;

fulcro.inspect.helpers.swap_entity_BANG_ = (function fulcro$inspect$helpers$swap_entity_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___58553 = arguments.length;
var i__4731__auto___58554 = (0);
while(true){
if((i__4731__auto___58554 < len__4730__auto___58553)){
args__4736__auto__.push((arguments[i__4731__auto___58554]));

var G__58555 = (i__4731__auto___58554 + (1));
i__4731__auto___58554 = G__58555;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__58338,args){
var map__58339 = p__58338;
var map__58339__$1 = (((((!((map__58339 == null))))?(((((map__58339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58339):map__58339);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58339__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58339__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,state,cljs.core.update_in,ref,args);
});

fulcro.inspect.helpers.swap_entity_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
fulcro.inspect.helpers.swap_entity_BANG_.cljs$lang$applyTo = (function (seq58334){
var G__58335 = cljs.core.first(seq58334);
var seq58334__$1 = cljs.core.next(seq58334);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58335,seq58334__$1);
});

fulcro.inspect.helpers.resolve_path = (function fulcro$inspect$helpers$resolve_path(state,path){
var G__58349 = path;
var vec__58350 = G__58349;
var seq__58351 = cljs.core.seq(vec__58350);
var first__58352 = cljs.core.first(seq__58351);
var seq__58351__$1 = cljs.core.next(seq__58351);
var h = first__58352;
var t = seq__58351__$1;
var new_path = cljs.core.PersistentVector.EMPTY;
var G__58349__$1 = G__58349;
var new_path__$1 = new_path;
while(true){
var vec__58366 = G__58349__$1;
var seq__58367 = cljs.core.seq(vec__58366);
var first__58368 = cljs.core.first(seq__58367);
var seq__58367__$1 = cljs.core.next(seq__58367);
var h__$1 = first__58368;
var t__$1 = seq__58367__$1;
var new_path__$2 = new_path__$1;
if(cljs.core.truth_(h__$1)){
var np = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_path__$2,h__$1);
var c = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,np);
if(fulcro.inspect.helpers.om_ident_QMARK_(c)){
var G__58572 = t__$1;
var G__58573 = c;
G__58349__$1 = G__58572;
new_path__$1 = G__58573;
continue;
} else {
var G__58576 = t__$1;
var G__58577 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_path__$2,h__$1);
G__58349__$1 = G__58576;
new_path__$1 = G__58577;
continue;
}
} else {
return new_path__$2;
}
break;
}
});
/**
 * Like get-in, but will resolve path before reading it.
 */
fulcro.inspect.helpers.get_in_path = (function fulcro$inspect$helpers$get_in_path(state,path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,fulcro.inspect.helpers.resolve_path(state,path));
});
fulcro.inspect.helpers.swap_in_BANG_ = (function fulcro$inspect$helpers$swap_in_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___58579 = arguments.length;
var i__4731__auto___58580 = (0);
while(true){
if((i__4731__auto___58580 < len__4730__auto___58579)){
args__4736__auto__.push((arguments[i__4731__auto___58580]));

var G__58581 = (i__4731__auto___58580 + (1));
i__4731__auto___58580 = G__58581;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fulcro.inspect.helpers.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fulcro.inspect.helpers.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__58380,path,args){
var map__58381 = p__58380;
var map__58381__$1 = (((((!((map__58381 == null))))?(((((map__58381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58381):map__58381);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58381__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58381__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var path__$1 = fulcro.inspect.helpers.resolve_path(cljs.core.deref(state),cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref,path));
if(cljs.core.truth_((function (){var and__4120__auto__ = path__$1;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),path__$1);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,state,cljs.core.update_in,path__$1,args);
} else {
return null;
}
});

fulcro.inspect.helpers.swap_in_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.inspect.helpers.swap_in_BANG_.cljs$lang$applyTo = (function (seq58374){
var G__58375 = cljs.core.first(seq58374);
var seq58374__$1 = cljs.core.next(seq58374);
var G__58376 = cljs.core.first(seq58374__$1);
var seq58374__$2 = cljs.core.next(seq58374__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58375,G__58376,seq58374__$2);
});

/**
 * Integrate an ident into any number of places in the app state. This function is safe to use within mutation
 *   implementations as a general helper function.
 *   The named parameters can be specified any number of times. They are:
 *   - set: A vector (path) to a list in your app state where this new object's ident should be set.
 *   - append:  A vector (path) to a list in your app state where this new object's ident should be appended. Will not append
 *   the ident if that ident is already in the list.
 *   - prepend: A vector (path) to a list in your app state where this new object's ident should be prepended. Will not append
 *   the ident if that ident is already in the list.
 *   - replace: A vector (path) to a specific location in app-state where this object's ident should be placed. Can target a to-one or to-many.
 * If the target is a vector element then that element must already exist in the vector.
 */
fulcro.inspect.helpers.integrate_ident = (function fulcro$inspect$helpers$integrate_ident(var_args){
var args__4736__auto__ = [];
var len__4730__auto___58605 = arguments.length;
var i__4731__auto___58606 = (0);
while(true){
if((i__4731__auto___58606 < len__4730__auto___58605)){
args__4736__auto__.push((arguments[i__4731__auto___58606]));

var G__58607 = (i__4731__auto___58606 + (1));
i__4731__auto___58606 = G__58607;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fulcro.inspect.helpers.integrate_ident.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fulcro.inspect.helpers.integrate_ident.cljs$core$IFn$_invoke$arity$variadic = (function (state,ident,named_parameters){
if(cljs.core.map_QMARK_(state)){
} else {
throw (new Error("Assert failed: (map? state)"));
}

var actions = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (actions){
return (function (state__$1,p__58398){
var vec__58399 = p__58398;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58399,(0),null);
var data_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58399,(1),null);
var already_has_ident_at_path_QMARK_ = ((function (vec__58399,command,data_path,actions){
return (function (data_path__$1){
return cljs.core.some(((function (vec__58399,command,data_path,actions){
return (function (p1__58385_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__58385_SHARP_,ident);
});})(vec__58399,command,data_path,actions))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path__$1));
});})(vec__58399,command,data_path,actions))
;
var G__58403 = command;
var G__58403__$1 = (((G__58403 instanceof cljs.core.Keyword))?G__58403.fqn:null);
switch (G__58403__$1) {
case "set":
return cljs.core.assoc_in(state__$1,data_path,ident);

break;
case "prepend":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_(data_path))){
return state__$1;
} else {
if(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path))){
} else {
throw (new Error(["Assert failed: ",["Path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path)," for prepend must target an app-state vector."].join(''),"\n","(vector? (get-in state data-path))"].join('')));
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__$1,data_path,((function (G__58403,G__58403__$1,already_has_ident_at_path_QMARK_,vec__58399,command,data_path,actions){
return (function (p1__58386_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident], null),p1__58386_SHARP_);
});})(G__58403,G__58403__$1,already_has_ident_at_path_QMARK_,vec__58399,command,data_path,actions))
);
}

break;
case "append":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_(data_path))){
return state__$1;
} else {
if(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path))){
} else {
throw (new Error(["Assert failed: ",["Path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path)," for append must target an app-state vector."].join(''),"\n","(vector? (get-in state data-path))"].join('')));
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,data_path,cljs.core.conj,ident);
}

break;
case "replace":
var path_to_vector = cljs.core.butlast(data_path);
var to_many_QMARK_ = ((cljs.core.seq(path_to_vector)) && (cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,path_to_vector))));
var index = cljs.core.last(data_path);
var vector = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,path_to_vector);
if(cljs.core.vector_QMARK_(data_path)){
} else {
throw (new Error(["Assert failed: ",["Replacement path must be a vector. You passed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path)].join(''),"\n","(vector? data-path)"].join('')));
}

if(to_many_QMARK_){
if(cljs.core.vector_QMARK_(vector)){
} else {
throw (new Error(["Assert failed: ","Path for replacement must be a vector","\n","(vector? vector)"].join('')));
}

if(typeof index === 'number'){
} else {
throw (new Error(["Assert failed: ","Path for replacement must end in a vector index","\n","(number? index)"].join('')));
}

if(cljs.core.contains_QMARK_(vector,index)){
} else {
throw (new Error(["Assert failed: ",["Target vector for replacement does not have an item at index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),"\n","(contains? vector index)"].join('')));
}
} else {
}

return cljs.core.assoc_in(state__$1,data_path,ident);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown post-op to merge-state!: ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),command,new cljs.core.Keyword(null,"arg","arg",-1747261837),data_path], null));

}
});})(actions))
,state,actions);
});

fulcro.inspect.helpers.integrate_ident.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.inspect.helpers.integrate_ident.cljs$lang$applyTo = (function (seq58388){
var G__58389 = cljs.core.first(seq58388);
var seq58388__$1 = cljs.core.next(seq58388);
var G__58390 = cljs.core.first(seq58388__$1);
var seq58388__$2 = cljs.core.next(seq58388__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58389,G__58390,seq58388__$2);
});

fulcro.inspect.helpers.merge_entity = (function fulcro$inspect$helpers$merge_entity(var_args){
var args__4736__auto__ = [];
var len__4730__auto___58643 = arguments.length;
var i__4731__auto___58644 = (0);
while(true){
if((i__4731__auto___58644 < len__4730__auto___58643)){
args__4736__auto__.push((arguments[i__4731__auto___58644]));

var G__58645 = (i__4731__auto___58644 + (1));
i__4731__auto___58644 = G__58645;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return fulcro.inspect.helpers.merge_entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

fulcro.inspect.helpers.merge_entity.cljs$core$IFn$_invoke$arity$variadic = (function (state,x,data,named_parameters){

var idents = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$3((function (){
if((typeof fulcro !== 'undefined') && (typeof fulcro.inspect !== 'undefined') && (typeof fulcro.inspect.helpers !== 'undefined') && (typeof fulcro.inspect.helpers.t_fulcro$inspect$helpers58445 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {fulcro.client.primitives.IQuery}
 * @implements {cljs.core.IWithMeta}
*/
fulcro.inspect.helpers.t_fulcro$inspect$helpers58445 = (function (state,x,data,named_parameters,meta58446){
this.state = state;
this.x = x;
this.data = data;
this.named_parameters = named_parameters;
this.meta58446 = meta58446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
fulcro.inspect.helpers.t_fulcro$inspect$helpers58445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58447,meta58446__$1){
var self__ = this;
var _58447__$1 = this;
return (new fulcro.inspect.helpers.t_fulcro$inspect$helpers58445(self__.state,self__.x,self__.data,self__.named_parameters,meta58446__$1));
});

fulcro.inspect.helpers.t_fulcro$inspect$helpers58445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58447){
var self__ = this;
var _58447__$1 = this;
return self__.meta58446;
});

fulcro.inspect.helpers.t_fulcro$inspect$helpers58445.prototype.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.inspect.helpers.t_fulcro$inspect$helpers58445.prototype.fulcro$client$primitives$IQuery$query$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.helpers","root","fulcro.inspect.helpers/root",-1338874925),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(self__.x)], null)], null);
});

fulcro.inspect.helpers.t_fulcro$inspect$helpers58445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"named-parameters","named-parameters",2053922585,null),new cljs.core.Symbol(null,"meta58446","meta58446",-29041962,null)], null);
});

fulcro.inspect.helpers.t_fulcro$inspect$helpers58445.cljs$lang$type = true;

fulcro.inspect.helpers.t_fulcro$inspect$helpers58445.cljs$lang$ctorStr = "fulcro.inspect.helpers/t_fulcro$inspect$helpers58445";

fulcro.inspect.helpers.t_fulcro$inspect$helpers58445.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"fulcro.inspect.helpers/t_fulcro$inspect$helpers58445");
});

/**
 * Positional factory function for fulcro.inspect.helpers/t_fulcro$inspect$helpers58445.
 */
fulcro.inspect.helpers.__GT_t_fulcro$inspect$helpers58445 = (function fulcro$inspect$helpers$__GT_t_fulcro$inspect$helpers58445(state__$1,x__$1,data__$1,named_parameters__$1,meta58446){
return (new fulcro.inspect.helpers.t_fulcro$inspect$helpers58445(state__$1,x__$1,data__$1,named_parameters__$1,meta58446));
});

}

return (new fulcro.inspect.helpers.t_fulcro$inspect$helpers58445(state,x,data,named_parameters,cljs.core.PersistentArrayMap.EMPTY));
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.helpers","root","fulcro.inspect.helpers/root",-1338874925),data], null),true),new cljs.core.Keyword("fulcro.inspect.helpers","root","fulcro.inspect.helpers/root",-1338874925),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("fulcro.client.primitives","tables","fulcro.client.primitives/tables",-1418944816)], 0));
var root_ident = fulcro.client.primitives.ident(x,data);
var state__$1 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,idents], 0));
if(cljs.core.seq(named_parameters)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(fulcro.inspect.helpers.integrate_ident,state__$1,root_ident,named_parameters);
} else {
return state__$1;
}
});

fulcro.inspect.helpers.merge_entity.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fulcro.inspect.helpers.merge_entity.cljs$lang$applyTo = (function (seq58429){
var G__58430 = cljs.core.first(seq58429);
var seq58429__$1 = cljs.core.next(seq58429);
var G__58431 = cljs.core.first(seq58429__$1);
var seq58429__$2 = cljs.core.next(seq58429__$1);
var G__58432 = cljs.core.first(seq58429__$2);
var seq58429__$3 = cljs.core.next(seq58429__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58430,G__58431,G__58432,seq58429__$3);
});

fulcro.inspect.helpers.create_entity_BANG_ = (function fulcro$inspect$helpers$create_entity_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___58653 = arguments.length;
var i__4731__auto___58654 = (0);
while(true){
if((i__4731__auto___58654 < len__4730__auto___58653)){
args__4736__auto__.push((arguments[i__4731__auto___58654]));

var G__58655 = (i__4731__auto___58654 + (1));
i__4731__auto___58654 = G__58655;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return fulcro.inspect.helpers.create_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

fulcro.inspect.helpers.create_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__58478,x,data,named_parameters){
var map__58479 = p__58478;
var map__58479__$1 = (((((!((map__58479 == null))))?(((((map__58479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58479):map__58479);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58479__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58479__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var named_parameters__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__58479,map__58479__$1,state,ref){
return (function (p__58483){
var vec__58484 = p__58483;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58484,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58484,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,path)], null);
});})(map__58479,map__58479__$1,state,ref))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters)));
var data_SINGLEQUOTE_ = (cljs.core.truth_(new cljs.core.Keyword("fulcro.inspect.helpers","initialized","fulcro.inspect.helpers/initialized",-1739021626).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(data)))?data:fulcro.client.primitives.get_initial_state(x,data));
cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.swap_BANG_,state,fulcro.inspect.helpers.merge_entity,x,data_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([named_parameters__$1], 0));

return data_SINGLEQUOTE_;
});

fulcro.inspect.helpers.create_entity_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fulcro.inspect.helpers.create_entity_BANG_.cljs$lang$applyTo = (function (seq58463){
var G__58464 = cljs.core.first(seq58463);
var seq58463__$1 = cljs.core.next(seq58463);
var G__58465 = cljs.core.first(seq58463__$1);
var seq58463__$2 = cljs.core.next(seq58463__$1);
var G__58466 = cljs.core.first(seq58463__$2);
var seq58463__$3 = cljs.core.next(seq58463__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58464,G__58465,G__58466,seq58463__$3);
});

fulcro.inspect.helpers.dissoc_in = (function fulcro$inspect$helpers$dissoc_in(m,path){
var G__58492 = m;
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,cljs.core.butlast(path)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__58492,cljs.core.butlast(path),cljs.core.dissoc,cljs.core.last(path));
} else {
return G__58492;
}
});
fulcro.inspect.helpers.deep_remove_ref = (function fulcro$inspect$helpers$deep_remove_ref(state,ref){

var item = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ref);
var idents = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$1(((function (item){
return (function (v){
if(fulcro.inspect.helpers.om_ident_QMARK_(v)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
} else {
if(((cljs.core.vector_QMARK_(v)) && (cljs.core.every_QMARK_(fulcro.inspect.helpers.om_ident_QMARK_,v)))){
return v;
} else {
return null;
}
}
});})(item))
),cljs.core.cat),cljs.core.vals(item));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (item,idents){
return (function (s,i){
return (fulcro.inspect.helpers.deep_remove_ref.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.helpers.deep_remove_ref.cljs$core$IFn$_invoke$arity$2(s,i) : fulcro.inspect.helpers.deep_remove_ref.call(null,s,i));
});})(item,idents))
,fulcro.inspect.helpers.dissoc_in(state,ref),idents);
});
fulcro.inspect.helpers.remove_edge_BANG_ = (function fulcro$inspect$helpers$remove_edge_BANG_(p__58501,field){
var map__58502 = p__58501;
var map__58502__$1 = (((((!((map__58502 == null))))?(((((map__58502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58502):map__58502);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58502__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58502__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var children = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,field));
if(fulcro.inspect.helpers.om_ident_QMARK_(children)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (children,map__58502,map__58502__$1,state,ref){
return (function (p1__58496_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__58496_SHARP_,ref,cljs.core.dissoc,field);
});})(children,map__58502,map__58502__$1,state,ref))
,((function (children,map__58502,map__58502__$1,state,ref){
return (function (p1__58497_SHARP_){
return fulcro.inspect.helpers.deep_remove_ref(p1__58497_SHARP_,children);
});})(children,map__58502,map__58502__$1,state,ref))
));
} else {
if(cljs.core.seq(children)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (children,map__58502,map__58502__$1,state,ref){
return (function (p1__58498_SHARP_){
return cljs.core.assoc_in(p1__58498_SHARP_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,field),cljs.core.PersistentVector.EMPTY);
});})(children,map__58502,map__58502__$1,state,ref))
,((function (children,map__58502,map__58502__$1,state,ref){
return (function (p1__58499_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(fulcro.inspect.helpers.deep_remove_ref,p1__58499_SHARP_,children);
});})(children,map__58502,map__58502__$1,state,ref))
));
} else {
return null;
}
}
});
fulcro.inspect.helpers.vec_remove_index = (function fulcro$inspect$helpers$vec_remove_index(i,v){

return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(i + (1)),cljs.core.count(v))));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("fulcro.inspect.helpers","persistent-set-props","fulcro.inspect.helpers/persistent-set-props",-1753072879,null),(function (fulcro_incoming_env,_,p__58513){
var map__58515 = p__58513;
var map__58515__$1 = (((((!((map__58515 == null))))?(((((map__58515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58515):map__58515);
var local_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58515__$1,new cljs.core.Keyword("fulcro.inspect.helpers","local-key","fulcro.inspect.helpers/local-key",-858551382));
var storage_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58515__$1,new cljs.core.Keyword("fulcro.inspect.helpers","storage-key","fulcro.inspect.helpers/storage-key",1801490937));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58515__$1,new cljs.core.Keyword("fulcro.inspect.helpers","value","fulcro.inspect.helpers/value",1147993961));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = fulcro_incoming_env;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env,map__58515,map__58515__$1,local_key,storage_key,value){
return (function (){
fulcro.inspect.lib.local_storage.set_BANG_(storage_key,value);

return fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc,local_key,value], 0));
});})(env,map__58515,map__58515__$1,local_key,storage_key,value))
], null);
})()], 0));
}));
fulcro.inspect.helpers.persistent_set_BANG_ = (function fulcro$inspect$helpers$persistent_set_BANG_(comp,local_key,storage_key,value){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(comp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.helpers","persistent-set-props","fulcro.inspect.helpers/persistent-set-props",-1753072879,null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.helpers","local-key","fulcro.inspect.helpers/local-key",-858551382),local_key,new cljs.core.Keyword("fulcro.inspect.helpers","storage-key","fulcro.inspect.helpers/storage-key",1801490937),storage_key,new cljs.core.Keyword("fulcro.inspect.helpers","value","fulcro.inspect.helpers/value",1147993961),value], null),null,(1),null)),(2),null)),local_key], null));
});
fulcro.inspect.helpers.normalize_id = (function fulcro$inspect$helpers$normalize_id(id){
var temp__5718__auto__ = cljs.core.re_find(/(.+?)(-\d+)$/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__58521 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58521,(0),null);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58521,(1),null);
if((id instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(prefix,(1)));
} else {
if((id instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(prefix);
} else {
return prefix;

}
}
} else {
return id;
}
});
/**
 * Extracts the app uuid from a ident.
 */
fulcro.inspect.helpers.ref_app_uuid = (function fulcro$inspect$helpers$ref_app_uuid(ref){
if(((cljs.core.vector_QMARK_(ref)) && (cljs.core.vector_QMARK_(cljs.core.second(ref))))){
} else {
throw (new Error(["Assert failed: ","Ref with app it must be in the format: [:id-key [::app-id app-id]]","\n","(and (vector? ref) (vector? (second ref)))"].join('')));
}

var vec__58525 = ref;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58525,(0),null);
var vec__58528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58525,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58528,(0),null);
var app_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58528,(1),null);
return app_id;
});
fulcro.inspect.helpers.ref_app_id = (function fulcro$inspect$helpers$ref_app_id(state,ref){
var app_uuid = fulcro.inspect.helpers.ref_app_uuid(ref);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","id","fulcro.inspect.ui.inspector/id",-803234094),app_uuid,new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233)], null));
});
/**
 * Read app uuid from a component
 */
fulcro.inspect.helpers.comp_app_uuid = (function fulcro$inspect$helpers$comp_app_uuid(comp){
return fulcro.inspect.helpers.ref_app_uuid(fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(comp));
});
fulcro.inspect.helpers.all_apps = (function fulcro$inspect$helpers$all_apps(state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","multi-inspector","fulcro.inspect.ui.multi-inspector/multi-inspector",1353666037),"main",new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","inspectors","fulcro.inspect.ui.multi-inspector/inspectors",-1565317572)], null));
});
fulcro.inspect.helpers.matching_apps = (function fulcro$inspect$helpers$matching_apps(state,app_id){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filterv((function (p1__58533_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app_id,new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,p1__58533_SHARP_)));
}),fulcro.inspect.helpers.all_apps(state)));
});
fulcro.inspect.helpers.update_matching_apps = (function fulcro$inspect$helpers$update_matching_apps(state,app_id,f){
var apps = fulcro.inspect.helpers.matching_apps(state,app_id);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (apps){
return (function (s,app){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(s,app) : f.call(null,s,app));
});})(apps))
,state,apps);
});
fulcro.inspect.helpers.remote_mutation = (function fulcro$inspect$helpers$remote_mutation(p__58537,key){
var map__58538 = p__58537;
var map__58538__$1 = (((((!((map__58538 == null))))?(((((map__58538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58538):map__58538);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58538__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58538__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"key","key",-1516042587),key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491)], null),fulcro.inspect.helpers.ref_app_uuid(ref));
});
fulcro.inspect.helpers.pprint = (function fulcro$inspect$helpers$pprint(x){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__58541_58686 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__58542_58687 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__58543_58688 = true;
var _STAR_print_fn_STAR__temp_val__58544_58689 = ((function (_STAR_print_newline_STAR__orig_val__58541_58686,_STAR_print_fn_STAR__orig_val__58542_58687,_STAR_print_newline_STAR__temp_val__58543_58688,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__58541_58686,_STAR_print_fn_STAR__orig_val__58542_58687,_STAR_print_newline_STAR__temp_val__58543_58688,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__58543_58688;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__58544_58689;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__58542_58687;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__58541_58686;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});

//# sourceMappingURL=fulcro.inspect.helpers.js.map
