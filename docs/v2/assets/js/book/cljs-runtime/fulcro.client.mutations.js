goog.provide('fulcro.client.mutations');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('fulcro.util');
goog.require('fulcro.logging');
goog.require('fulcro.client.primitives');
goog.require('shadow.loader');
goog.require('fulcro.client.impl.protocols');
goog.require('fulcro.client.impl.parser');
goog.require('clojure.string');
if((typeof fulcro !== 'undefined') && (typeof fulcro.client !== 'undefined') && (typeof fulcro.client.mutations !== 'undefined') && (typeof fulcro.client.mutations.mutate !== 'undefined')){
} else {
fulcro.client.mutations.mutate = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__65931 = cljs.core.get_global_hierarchy;
return (fexpr__65931.cljs$core$IFn$_invoke$arity$0 ? fexpr__65931.cljs$core$IFn$_invoke$arity$0() : fexpr__65931.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("fulcro.client.mutations","mutate"),fulcro.client.primitives.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
if((typeof fulcro !== 'undefined') && (typeof fulcro.client !== 'undefined') && (typeof fulcro.client.mutations !== 'undefined') && (typeof fulcro.client.mutations.post_mutate !== 'undefined')){
} else {
fulcro.client.mutations.post_mutate = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__65936 = cljs.core.get_global_hierarchy;
return (fexpr__65936.cljs$core$IFn$_invoke$arity$0 ? fexpr__65936.cljs$core$IFn$_invoke$arity$0() : fexpr__65936.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("fulcro.client.mutations","post-mutate"),fulcro.client.primitives.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
fulcro.client.mutations.post_mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (env,k,p){
return null;
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("fulcro.client.mutations","set-props","fulcro.client.mutations/set-props",-1739323709,null),(function (fulcro_incoming_env,_,params){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__65946 = fulcro_incoming_env;
var map__65946__$1 = (((((!((map__65946 == null))))?(((((map__65946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65946):map__65946);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65946__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65946__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__65946,map__65946__$1,state,ref){
return (function (){
if((ref == null)){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.mutations",new cljs.core.Keyword(null,"line","line",212345235),125], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ui/set-props requires component to have an ident."], 0));
}catch (e65956){if((e65956 instanceof Error)){
var e__55143__auto___66216 = e65956;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.mutations",new cljs.core.Keyword(null,"line","line",212345235),125], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__55143__auto___66216], 0));
} else {
throw e65956;

}
}} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,ref,((function (map__65946,map__65946__$1,state,ref){
return (function (st){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([st,params], 0));
});})(map__65946,map__65946__$1,state,ref))
);
});})(map__65946,map__65946__$1,state,ref))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("fulcro.client.mutations","toggle","fulcro.client.mutations/toggle",-1176623641,null),(function (fulcro_incoming_env,_,p__65964){
var map__65965 = p__65964;
var map__65965__$1 = (((((!((map__65965 == null))))?(((((map__65965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65965):map__65965);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65965__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__65969 = fulcro_incoming_env;
var map__65969__$1 = (((((!((map__65969 == null))))?(((((map__65969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65969):map__65969);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65969__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65969__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__65969,map__65969__$1,state,ref,map__65965,map__65965__$1,field){
return (function (){
if((ref == null)){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.mutations",new cljs.core.Keyword(null,"line","line",212345235),134], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ui/toggle requires component to have an ident."], 0));
}catch (e65974){if((e65974 instanceof Error)){
var e__55143__auto___66224 = e65974;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.mutations",new cljs.core.Keyword(null,"line","line",212345235),134], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__55143__auto___66224], 0));
} else {
throw e65974;

}
}} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,field),cljs.core.not);
});})(map__65969,map__65969__$1,state,ref,map__65965,map__65965__$1,field))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__65980,k,_){
var map__65981 = p__65980;
var map__65981__$1 = (((((!((map__65981 == null))))?(((((map__65981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65981):map__65981);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65981__$1,new cljs.core.Keyword(null,"target","target",253001721));
if((target == null)){
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.mutations",new cljs.core.Keyword(null,"line","line",212345235),139], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unknown app state mutation. Have you required the file with your mutations?",k], 0));
}catch (e65989){if((e65989 instanceof Error)){
var e__55143__auto__ = e65989;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.mutations",new cljs.core.Keyword(null,"line","line",212345235),139], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__55143__auto__], 0));
} else {
throw e65989;

}
}} else {
return null;
}
}));
/**
 * Toggle the given boolean `field` on the specified component. It is recommended you use this function only on
 *   UI-related data (e.g. form checkbox checked status) and write clear top-level transactions for anything more complicated.
 */
fulcro.client.mutations.toggle_BANG_ = (function fulcro$client$mutations$toggle_BANG_(comp,field){
return fulcro.client.primitives.compressible_transact_BANG_(comp,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.mutations","toggle","fulcro.client.mutations/toggle",-1176623641,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"field","field",-1302436500),null,(1),null)),(new cljs.core.List(null,field,null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});
/**
 * Set a raw value on the given `field` of a `component`. It is recommended you use this function only on
 *   UI-related data (e.g. form inputs that are used by the UI, and not persisted data). Changes made via these
 *   helpers are compressed in the history.
 */
fulcro.client.mutations.set_value_BANG_ = (function fulcro$client$mutations$set_value_BANG_(component,field,value){
return fulcro.client.primitives.compressible_transact_BANG_(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.mutations","set-props","fulcro.client.mutations/set-props",-1739323709,null),null,(1),null)),(new cljs.core.List(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([field,value]),null,(1),null))))),null,(1),null)))))));
});
/**
 * Helper for set-integer!, use that instead. It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 */
fulcro.client.mutations.ensure_integer = (function fulcro$client$mutations$ensure_integer(v){
var rv = parseInt(v);
if(cljs.core.truth_(isNaN(rv))){
return (0);
} else {
return rv;
}
});
fulcro.client.mutations.target_value = (function fulcro$client$mutations$target_value(evt){
return evt.target.value;
});
/**
 * Set the given integer on the given `field` of a `component`. Allows same parameters as `set-string!`.
 * 
 * It is recommended you use this function only on UI-related data (e.g. data that is used for display purposes)
 * and write clear top-level transactions for anything else. Calls to this are compressed in history.
 */
fulcro.client.mutations.set_integer_BANG_ = (function fulcro$client$mutations$set_integer_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66236 = arguments.length;
var i__4731__auto___66238 = (0);
while(true){
if((i__4731__auto___66238 < len__4730__auto___66236)){
args__4736__auto__.push((arguments[i__4731__auto___66238]));

var G__66239 = (i__4731__auto___66238 + (1));
i__4731__auto___66238 = G__66239;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fulcro.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fulcro.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__66022){
var map__66023 = p__66022;
var map__66023__$1 = (((((!((map__66023 == null))))?(((((map__66023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66023):map__66023);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66023__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66023__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = event;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var and__4120__auto____$1 = event;
if(cljs.core.truth_(and__4120__auto____$1)){
return value;
} else {
return and__4120__auto____$1;
}
})());
} else {
return and__4120__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = fulcro.client.mutations.ensure_integer((cljs.core.truth_(event)?fulcro.client.mutations.target_value(event):value));
return fulcro.client.mutations.set_value_BANG_(component,field,value__$1);
});

fulcro.client.mutations.set_integer_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.client.mutations.set_integer_BANG_.cljs$lang$applyTo = (function (seq66018){
var G__66019 = cljs.core.first(seq66018);
var seq66018__$1 = cljs.core.next(seq66018);
var G__66020 = cljs.core.first(seq66018__$1);
var seq66018__$2 = cljs.core.next(seq66018__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66019,G__66020,seq66018__$2);
});

fulcro.client.mutations.ensure_double = (function fulcro$client$mutations$ensure_double(v){
var rv = parseFloat(v);
if(cljs.core.truth_(isNaN(rv))){
return (0);
} else {
return rv;
}
});
/**
 * Set the given double on the given `field` of a `component`. Allows same parameters as `set-string!`.
 * 
 * It is recommended you use this function only on UI-related data (e.g. data that is used for display purposes)
 * and write clear top-level transactions for anything else. Calls to this are compressed in history.
 */
fulcro.client.mutations.set_double_BANG_ = (function fulcro$client$mutations$set_double_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66246 = arguments.length;
var i__4731__auto___66247 = (0);
while(true){
if((i__4731__auto___66247 < len__4730__auto___66246)){
args__4736__auto__.push((arguments[i__4731__auto___66247]));

var G__66248 = (i__4731__auto___66247 + (1));
i__4731__auto___66247 = G__66248;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fulcro.client.mutations.set_double_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fulcro.client.mutations.set_double_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__66045){
var map__66056 = p__66045;
var map__66056__$1 = (((((!((map__66056 == null))))?(((((map__66056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66056):map__66056);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66056__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66056__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = event;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var and__4120__auto____$1 = event;
if(cljs.core.truth_(and__4120__auto____$1)){
return value;
} else {
return and__4120__auto____$1;
}
})());
} else {
return and__4120__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = fulcro.client.mutations.ensure_double((cljs.core.truth_(event)?fulcro.client.mutations.target_value(event):value));
return fulcro.client.mutations.set_value_BANG_(component,field,value__$1);
});

fulcro.client.mutations.set_double_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.client.mutations.set_double_BANG_.cljs$lang$applyTo = (function (seq66037){
var G__66038 = cljs.core.first(seq66037);
var seq66037__$1 = cljs.core.next(seq66037);
var G__66039 = cljs.core.first(seq66037__$1);
var seq66037__$2 = cljs.core.next(seq66037__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66038,G__66039,seq66037__$2);
});

/**
 * Set a string on the given `field` of a `component`. The string can be literal via named parameter `:value` or
 *   can be auto-extracted from a UI event using the named parameter `:event`
 * 
 *   Examples
 * 
 *   ```
 *   (set-string! this :ui/name :value "Hello") ; set from literal (or var)
 *   (set-string! this :ui/name :event evt) ; extract from UI event target value
 *   ```
 * 
 *   It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 *   Calls to this are compressed in history.
 */
fulcro.client.mutations.set_string_BANG_ = (function fulcro$client$mutations$set_string_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66266 = arguments.length;
var i__4731__auto___66267 = (0);
while(true){
if((i__4731__auto___66267 < len__4730__auto___66266)){
args__4736__auto__.push((arguments[i__4731__auto___66267]));

var G__66268 = (i__4731__auto___66267 + (1));
i__4731__auto___66267 = G__66268;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fulcro.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fulcro.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__66077){
var map__66079 = p__66077;
var map__66079__$1 = (((((!((map__66079 == null))))?(((((map__66079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66079):map__66079);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66079__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66079__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = event;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var and__4120__auto____$1 = event;
if(cljs.core.truth_(and__4120__auto____$1)){
return value;
} else {
return and__4120__auto____$1;
}
})());
} else {
return and__4120__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = (cljs.core.truth_(event)?fulcro.client.mutations.target_value(event):value);
return fulcro.client.mutations.set_value_BANG_(component,field,value__$1);
});

fulcro.client.mutations.set_string_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.client.mutations.set_string_BANG_.cljs$lang$applyTo = (function (seq66066){
var G__66067 = cljs.core.first(seq66066);
var seq66066__$1 = cljs.core.next(seq66066);
var G__66068 = cljs.core.first(seq66066__$1);
var seq66066__$2 = cljs.core.next(seq66066__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66067,G__66068,seq66066__$2);
});

fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("fulcro.client.mutations","set-query!","fulcro.client.mutations/set-query!",1750034612,null),(function (fulcro_incoming_env,_,p__66109){
var map__66111 = p__66109;
var map__66111__$1 = (((((!((map__66111 == null))))?(((((map__66111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66111):map__66111);
var queryid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66111__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66111__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66111__$1,new cljs.core.Keyword(null,"params","params",710516235));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__66114 = fulcro_incoming_env;
var map__66114__$1 = (((((!((map__66114 == null))))?(((((map__66114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66114):map__66114);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66114__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66114__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__66114,map__66114__$1,reconciler,state,map__66111,map__66111__$1,queryid,query,params){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.set_query_STAR_,queryid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"params","params",710516235),params], null));

if(cljs.core.truth_(reconciler)){
return fulcro.client.impl.protocols.reindex_BANG_(reconciler);
} else {
return null;
}
});})(map__66114,map__66114__$1,reconciler,state,map__66111,map__66111__$1,queryid,query,params))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("fulcro.client.mutations","merge!","fulcro.client.mutations/merge!",137581651,null),(function (fulcro_incoming_env,_,p__66120){
var map__66121 = p__66120;
var map__66121__$1 = (((((!((map__66121 == null))))?(((((map__66121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66121):map__66121);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66121__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66121__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66121__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__66126 = fulcro_incoming_env;
var map__66126__$1 = (((((!((map__66126 == null))))?(((((map__66126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66126):map__66126);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66126__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__66126,map__66126__$1,reconciler,map__66121,map__66121__$1,query,data_tree,remote){
return (function (){
var state = fulcro.client.primitives.app_state(reconciler);
var map__66133 = fulcro.client.primitives.merge_STAR_(reconciler,cljs.core.deref(state),data_tree,query);
var map__66133__$1 = (((((!((map__66133 == null))))?(((((map__66133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66133):map__66133);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66133__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66133__$1,new cljs.core.Keyword(null,"next","next",-117701485));
fulcro.client.impl.protocols.queue_BANG_(reconciler,keys,remote);

cljs.core.reset_BANG_(state,next);

if((remote == null)){
return null;
} else {
return fulcro.client.impl.protocols.reconcile_BANG_(reconciler,remote);
}
});})(map__66126,map__66126__$1,reconciler,map__66121,map__66121__$1,query,data_tree,remote))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("fulcro.client.mutations","send-history","fulcro.client.mutations/send-history",1441439026,null),(function (fulcro_incoming_env,_,params){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__66143 = fulcro_incoming_env;
var map__66143__$1 = (((((!((map__66143 == null))))?(((((map__66143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66143):map__66143);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66143__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66143__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66143__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function (){var history = cljs.core.deref(fulcro.client.primitives.get_history(reconciler));
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"history","history",-247395220),history);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"params","params",710516235),params__$1);
})()], null);
})()], 0));
}));
/**
 * Indicate the the remote operation will return a value of the given component type. The server-side mutation need
 *   simply return a tree matching that component's query and it will auto-merge into state. The ast param MUST be a query ast
 *   containing exactly one mutation that is *not* already a mutation join. The state is required for looking up dynamic queries, and
 *   may be nil if you use only static queries.
 */
fulcro.client.mutations.returning = (function fulcro$client$mutations$returning(ast,state,class$){
if((new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? (-> ast :key))"));
}

var map__66154 = ast;
var map__66154__$1 = (((((!((map__66154 == null))))?(((((map__66154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66154):map__66154);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66154__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66154__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66154__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_SINGLEQUOTE_ = (function (){var G__66157 = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(class$,state);
if(cljs.core.truth_(query)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(G__66157,((function (G__66157,map__66154,map__66154__$1,key,params,query){
return (function (p1__66152_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(query),p1__66152_SHARP_], 0));
});})(G__66157,map__66154,map__66154__$1,key,params,query))
);
} else {
return G__66157;
}
})();
return fulcro.client.primitives.query__GT_ast1(cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,key,null,(1),null)),(new cljs.core.List(null,params,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,query_SINGLEQUOTE_,null,(1),null)))))),null,(1),null)))))));
});
/**
 * Set's a target for the return value from the mutation to be merged into. This can be combined with returning to define
 *   a path to insert the new entry.
 */
fulcro.client.mutations.with_target = (function fulcro$client$mutations$with_target(ast,target){
if((new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? (-> ast :key))"));
}

var map__66163 = ast;
var map__66163__$1 = (((((!((map__66163 == null))))?(((((map__66163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66163):map__66163);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66163__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66163__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66163__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_SINGLEQUOTE_ = (cljs.core.truth_(query)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(query,cljs.core.assoc,new cljs.core.Keyword("fulcro.client.impl.data-fetch","target","fulcro.client.impl.data-fetch/target",1805324748),target):cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","target","fulcro.client.impl.data-fetch/target",1805324748),target], null)));
return fulcro.client.primitives.query__GT_ast1(cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,key,null,(1),null)),(new cljs.core.List(null,params,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,query_SINGLEQUOTE_,null,(1),null)))))),null,(1),null)))))));
});
/**
 * Modify an AST containing a single mutation, changing it's parameters to those given as an argument.
 */
fulcro.client.mutations.with_params = (function fulcro$client$mutations$with_params(ast,params){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"params","params",710516235),params);
});
fulcro.client.mutations.is_call_QMARK_ = (function fulcro$client$mutations$is_call_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && ((cljs.core.first(expr) instanceof cljs.core.Symbol)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(expr))) || (cljs.core.map_QMARK_(cljs.core.second(expr))))));
});
/**
 * Modifies the AST node to enable progressive updates (if available) about the response download progress.
 *   `progress-mutation` is a call expression (e.g. `(f {})`) for a mutation, which can include the normal parameter
 *   map. This mutation mutation will be triggered on each progress step. It will receive
 *   one call when the request is sent, followed by zero or more progress events from the low-level network layer,
 *   and one call when the request is done (with any status). The first and last calls are guaranteed.
 * 
 *   An extra parameter keyed at `fulcro.client.network/progress` will be included that contains a :progress key
 *   (:sending, :receiving, :complete, or :failed), and a status that will be dependent on the network implementation
 *   (e.g. a google XhrIO progress event).
 */
fulcro.client.mutations.with_progressive_updates = (function fulcro$client$mutations$with_progressive_updates(ast,progress_mutation){
if((new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? (-> ast :key))"));
}

if(fulcro.client.mutations.is_call_QMARK_(progress_mutation)){
} else {
throw (new Error("Assert failed: (is-call? progress-mutation)"));
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$6(ast,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.vary_meta,cljs.core.assoc,new cljs.core.Keyword("fulcro.client.network","progress-mutation","fulcro.client.network/progress-mutation",-1587455677),progress_mutation);
});
/**
 * Given a remote transaction containing one or more remote mutations, returns a local transaction of zero or
 *   more mutations that should be run to provide a progress update. The `progress` argument will be added to
 *   each resulting mutation in parameters as `:fulcro.client.network/progress`.
 */
fulcro.client.mutations.progressive_update_transaction = (function fulcro$client$mutations$progressive_update_transaction(network_transaction,progress){
var add_progress = (function (expr){
var ast = fulcro.client.impl.parser.expr__GT_ast(expr);
var ast_2 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(ast,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc,new cljs.core.Keyword("fulcro.client.network","progress","fulcro.client.network/progress",2047285121),progress);
return fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1(ast_2);
});
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (add_progress){
return (function (m){
var G__66191 = m;
var G__66191__$1 = (((G__66191 == null))?null:cljs.core.seq(G__66191));
var G__66191__$2 = (((G__66191__$1 == null))?null:cljs.core.first(G__66191__$1));
var G__66191__$3 = (((G__66191__$2 == null))?null:cljs.core.meta(G__66191__$2));
var G__66191__$4 = (((G__66191__$3 == null))?null:new cljs.core.Keyword("fulcro.client.network","progress-mutation","fulcro.client.network/progress-mutation",-1587455677).cljs$core$IFn$_invoke$arity$1(G__66191__$3));
if((G__66191__$4 == null)){
return null;
} else {
return add_progress(G__66191__$4);
}
});})(add_progress))
,network_transaction));
});
/**
 * Modifies the mutation to enable network-level aborts. The id is a user-defined ID (any type) that identifies
 *   things that can be aborted on networking. IDs need not be unique per node, though aborting an ID that refers to
 *   more than one in-flight request will abort them all.
 */
fulcro.client.mutations.with_abort_id = (function fulcro$client$mutations$with_abort_id(ast,id){
if((new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? (-> ast :key))"));
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$6(ast,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.vary_meta,cljs.core.assoc,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267),id);
});
/**
 * Returns a set of abort IDs from the given transaction.
 */
fulcro.client.mutations.abort_ids = (function fulcro$client$mutations$abort_ids(tx){
return cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (m){
var G__66198 = m;
var G__66198__$1 = (((G__66198 == null))?null:cljs.core.seq(G__66198));
var G__66198__$2 = (((G__66198__$1 == null))?null:cljs.core.first(G__66198__$1));
var G__66198__$3 = (((G__66198__$2 == null))?null:cljs.core.meta(G__66198__$2));
if((G__66198__$3 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267).cljs$core$IFn$_invoke$arity$1(G__66198__$3);
}
}),tx));
});
/**
 * Removes an ident, if it exists, from a list of idents in app state. This
 *   function is safe to use within mutations.
 */
fulcro.client.mutations.remove_ident_STAR_ = (function fulcro$client$mutations$remove_ident_STAR_(state_map,ident,path_to_idents){
if(cljs.core.map_QMARK_(state_map)){
} else {
throw (new Error("Assert failed: (map? state-map)"));
}

var new_list = (function (old_list){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66199_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident,p1__66199_SHARP_);
}),old_list));
});
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state_map,path_to_idents,new_list);
});
/**
 * Integrate an ident into any number of places in the app state. This function is safe to use within mutation
 *   implementations as a general helper function.
 * 
 *   The named parameters can be specified any number of times. They are:
 * 
 *   - append:  A vector (path) to a list in your app state where this new object's ident should be appended. Will not append
 *   the ident if that ident is already in the list.
 *   - prepend: A vector (path) to a list in your app state where this new object's ident should be prepended. Will not append
 *   the ident if that ident is already in the list.
 *   - replace: A vector (path) to a specific location in app-state where this object's ident should be placed. Can target a to-one or to-many.
 * If the target is a vector element then that element must already exist in the vector.
 */
fulcro.client.mutations.integrate_ident_STAR_ = (function fulcro$client$mutations$integrate_ident_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66351 = arguments.length;
var i__4731__auto___66352 = (0);
while(true){
if((i__4731__auto___66352 < len__4730__auto___66351)){
args__4736__auto__.push((arguments[i__4731__auto___66352]));

var G__66353 = (i__4731__auto___66352 + (1));
i__4731__auto___66352 = G__66353;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fulcro.client.mutations.integrate_ident_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fulcro.client.mutations.integrate_ident_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (state,ident,named_parameters){
if(cljs.core.map_QMARK_(state)){
} else {
throw (new Error("Assert failed: (map? state)"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(fulcro.util.__integrate_ident_impl__,state,ident,named_parameters);
});

fulcro.client.mutations.integrate_ident_STAR_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.client.mutations.integrate_ident_STAR_.cljs$lang$applyTo = (function (seq66201){
var G__66202 = cljs.core.first(seq66201);
var seq66201__$1 = cljs.core.next(seq66201);
var G__66203 = cljs.core.first(seq66201__$1);
var seq66201__$2 = cljs.core.next(seq66201__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66202,G__66203,seq66201__$2);
});


//# sourceMappingURL=fulcro.client.mutations.js.map
