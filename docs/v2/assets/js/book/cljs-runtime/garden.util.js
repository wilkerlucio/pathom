goog.provide('garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46856 = arguments.length;
var i__4731__auto___46857 = (0);
while(true){
if((i__4731__auto___46857 < len__4730__auto___46856)){
args__4736__auto__.push((arguments[i__4731__auto___46857]));

var G__46858 = (i__4731__auto___46857 + (1));
i__4731__auto___46857 = G__46858;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

garden.util.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.util.format.cljs$lang$applyTo = (function (seq46544){
var G__46545 = cljs.core.first(seq46544);
var seq46544__$1 = cljs.core.next(seq46544);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46545,seq46544__$1);
});


/**
 * @interface
 */
garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if((((!((this$ == null)))) && ((!((this$.garden$util$ToString$to_str$arity$1 == null)))))){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (garden.util.to_str[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (garden.util.to_str["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
});

goog.object.set(garden.util.ToString,"_",true);

goog.object.set(garden.util.to_str,"_",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(garden.util.ToString,"null",true);

goog.object.set(garden.util.to_str,"null",(function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46869 = arguments.length;
var i__4731__auto___46870 = (0);
while(true){
if((i__4731__auto___46870 < len__4730__auto___46869)){
args__4736__auto__.push((arguments[i__4731__auto___46870]));

var G__46872 = (i__4731__auto___46870 + (1));
i__4731__auto___46870 = G__46872;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.util.to_str,args));
});

garden.util.as_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.util.as_str.cljs$lang$applyTo = (function (seq46562){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46562));
});

/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46875 = arguments.length;
var i__4731__auto___46876 = (0);
while(true){
if((i__4731__auto___46876 < len__4730__auto___46875)){
args__4736__auto__.push((arguments[i__4731__auto___46876]));

var G__46877 = (i__4731__auto___46876 + (1));
i__4731__auto___46876 = G__46877;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__46571){
var vec__46572 = p__46571;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46572,(0),null);
var radix__$1 = (function (){var or__4131__auto__ = radix;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.util.string__GT_int.cljs$lang$applyTo = (function (seq46569){
var G__46570 = cljs.core.first(seq46569);
var seq46569__$1 = cljs.core.next(seq46569);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46570,seq46569__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46885 = arguments.length;
var i__4731__auto___46886 = (0);
while(true){
if((i__4731__auto___46886 < len__4730__auto___46885)){
args__4736__auto__.push((arguments[i__4731__auto___46886]));

var G__46888 = (i__4731__auto___46886 + (1));
i__4731__auto___46886 = G__46888;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__46586){
var vec__46587 = p__46586;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46587,(0),null);
var radix__$1 = (function (){var or__4131__auto__ = radix;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.util.int__GT_string.cljs$lang$applyTo = (function (seq46575){
var G__46576 = cljs.core.first(seq46575);
var seq46575__$1 = cljs.core.next(seq46575);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46576,seq46575__$1);
});

/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__4523__auto__ = (function garden$util$comma_join_$_iter__46597(s__46598){
return (new cljs.core.LazySeq(null,(function (){
var s__46598__$1 = s__46598;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__46598__$1);
if(temp__5720__auto__){
var s__46598__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46598__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__46598__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__46600 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__46599 = (0);
while(true){
if((i__46599 < size__4522__auto__)){
var x = cljs.core._nth(c__4521__auto__,i__46599);
cljs.core.chunk_append(b__46600,((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)));

var G__46901 = (i__46599 + (1));
i__46599 = G__46901;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46600),garden$util$comma_join_$_iter__46597(cljs.core.chunk_rest(s__46598__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46600),null);
}
} else {
var x = cljs.core.first(s__46598__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)),garden$util$comma_join_$_iter__46597(cljs.core.rest(s__46598__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && ((!(cljs.core.record_QMARK_(x)))));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
return ((garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403))));
});
/**
 * True if `x` is a CSS `@supports` rule.
 */
garden.util.at_supports_QMARK_ = (function garden$util$at_supports_QMARK_(x){
return ((garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"feature","feature",27242652))));
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
return ((garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012))));
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
return ((garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709))));
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return garden.util.prefix(p__$1,s);
} else {
return garden.util.prefix(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_(n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__4222__auto__ = a;
var y__4223__auto__ = b;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var top = (function (){var x__4219__auto__ = a;
var y__4220__auto__ = b;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__46798 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46798,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46798,(1),null);
var x__4219__auto__ = a__$1;
var y__4220__auto__ = (function (){var x__4222__auto__ = b__$1;
var y__4223__auto__ = n;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46928 = arguments.length;
var i__4731__auto___46929 = (0);
while(true){
if((i__4731__auto___46929 < len__4730__auto___46928)){
args__4736__auto__.push((arguments[i__4731__auto___46929]));

var G__46931 = (i__4731__auto___46929 + (1));
i__4731__auto___46929 = G__46931;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
});

garden.util.average.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
garden.util.average.cljs$lang$applyTo = (function (seq46809){
var G__46810 = cljs.core.first(seq46809);
var seq46809__$1 = cljs.core.next(seq46809);
var G__46811 = cljs.core.first(seq46809__$1);
var seq46809__$2 = cljs.core.next(seq46809__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46810,G__46811,seq46809__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46938 = arguments.length;
var i__4731__auto___46939 = (0);
while(true){
if((i__4731__auto___46939 < len__4730__auto___46938)){
args__4736__auto__.push((arguments[i__4731__auto___46939]));

var G__46940 = (i__4731__auto___46939 + (1));
i__4731__auto___46939 = G__46940;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = ((function (v_original_seqs){
return (function garden$util$step(v_seqs){
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
var G__46944 = (i - (1));
var G__46945 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__46944;
v_seqs__$2 = G__46945;
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
return garden$util$step(increment(v_seqs));
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

garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.util.cartesian_product.cljs$lang$applyTo = (function (seq46835){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46835));
});


//# sourceMappingURL=garden.util.js.map
