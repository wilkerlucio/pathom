goog.provide('fulcro.inspect.lib.local_storage');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('fulcro.inspect.remote.transit');
fulcro.inspect.lib.local_storage.read_transit = (function fulcro$inspect$lib$local_storage$read_transit(s){
return fulcro.inspect.remote.transit.read(s);
});
fulcro.inspect.lib.local_storage.write_transit = (function fulcro$inspect$lib$local_storage$write_transit(x){
return fulcro.inspect.remote.transit.write(x);
});
fulcro.inspect.lib.local_storage.local_storage = window.localStorage;
fulcro.inspect.lib.local_storage.get = (function fulcro$inspect$lib$local_storage$get(var_args){
var G__60107 = arguments.length;
switch (G__60107) {
case 1:
return fulcro.inspect.lib.local_storage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.inspect.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.inspect.lib.local_storage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return fulcro.inspect.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2(key,null);
});

fulcro.inspect.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,default$){
var temp__5718__auto__ = fulcro.inspect.lib.local_storage.local_storage.getItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)));
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
} else {
return default$;
}
});

fulcro.inspect.lib.local_storage.get.cljs$lang$maxFixedArity = 2;

fulcro.inspect.lib.local_storage.set_BANG_ = (function fulcro$inspect$lib$local_storage$set_BANG_(key,value){
return fulcro.inspect.lib.local_storage.local_storage.setItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
fulcro.inspect.lib.local_storage.update_BANG_ = (function fulcro$inspect$lib$local_storage$update_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60131 = arguments.length;
var i__4731__auto___60132 = (0);
while(true){
if((i__4731__auto___60132 < len__4730__auto___60131)){
args__4736__auto__.push((arguments[i__4731__auto___60132]));

var G__60133 = (i__4731__auto___60132 + (1));
i__4731__auto___60132 = G__60133;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fulcro.inspect.lib.local_storage.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fulcro.inspect.lib.local_storage.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
return fulcro.inspect.lib.local_storage.local_storage.setItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,fulcro.inspect.lib.local_storage.get.cljs$core$IFn$_invoke$arity$1(key),args)], 0)));
});

fulcro.inspect.lib.local_storage.update_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.inspect.lib.local_storage.update_BANG_.cljs$lang$applyTo = (function (seq60111){
var G__60112 = cljs.core.first(seq60111);
var seq60111__$1 = cljs.core.next(seq60111);
var G__60113 = cljs.core.first(seq60111__$1);
var seq60111__$2 = cljs.core.next(seq60111__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60112,G__60113,seq60111__$2);
});

fulcro.inspect.lib.local_storage.remove_BANG_ = (function fulcro$inspect$lib$local_storage$remove_BANG_(key){
return fulcro.inspect.lib.local_storage.local_storage.removeItem(key);
});
fulcro.inspect.lib.local_storage.tget = (function fulcro$inspect$lib$local_storage$tget(var_args){
var G__60117 = arguments.length;
switch (G__60117) {
case 1:
return fulcro.inspect.lib.local_storage.tget.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.inspect.lib.local_storage.tget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.inspect.lib.local_storage.tget.cljs$core$IFn$_invoke$arity$1 = (function (key){
return fulcro.inspect.lib.local_storage.tget.cljs$core$IFn$_invoke$arity$2(key,null);
});

fulcro.inspect.lib.local_storage.tget.cljs$core$IFn$_invoke$arity$2 = (function (key,default$){
var temp__5718__auto__ = fulcro.inspect.lib.local_storage.local_storage.getItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)));
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return fulcro.inspect.lib.local_storage.read_transit(value);
} else {
return default$;
}
});

fulcro.inspect.lib.local_storage.tget.cljs$lang$maxFixedArity = 2;

fulcro.inspect.lib.local_storage.tset_BANG_ = (function fulcro$inspect$lib$local_storage$tset_BANG_(key,value){
return fulcro.inspect.lib.local_storage.local_storage.setItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)),fulcro.inspect.lib.local_storage.write_transit(value));
});

//# sourceMappingURL=fulcro.inspect.lib.local_storage.js.map
