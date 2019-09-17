goog.provide('com.wsscode.common.combinatorics');
goog.require('cljs.core');
/**
 * All the ways to take one item from each sequence
 */
com.wsscode.common.combinatorics.cartesian_product = (function com$wsscode$common$combinatorics$cartesian_product(var_args){
var args__4736__auto__ = [];
var len__4730__auto___45029 = arguments.length;
var i__4731__auto___45030 = (0);
while(true){
if((i__4731__auto___45030 < len__4730__auto___45029)){
args__4736__auto__.push((arguments[i__4731__auto___45030]));

var G__45031 = (i__4731__auto___45030 + (1));
i__4731__auto___45030 = G__45031;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.wsscode.common.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.wsscode.common.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = ((function (v_original_seqs){
return (function com$wsscode$common$combinatorics$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5718__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5718__auto__){
var rst = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__45034 = (i - (1));
var G__45035 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__45034;
v_seqs__$2 = G__45035;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return com$wsscode$common$combinatorics$step(increment(v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step(v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

com.wsscode.common.combinatorics.cartesian_product.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.wsscode.common.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq45022){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45022));
});


//# sourceMappingURL=com.wsscode.common.combinatorics.js.map
