goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__39227){
var vec__39228 = p__39227;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39228,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39228,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__39239 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39239,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39239,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39239,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__39298 = arguments.length;
switch (G__39298) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__39393_39658 = clojure.data.equality_partition;
var G__39394_39659 = "null";
var G__39395_39660 = ((function (G__39393_39658,G__39394_39659){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39393_39658,G__39394_39659))
;
goog.object.set(G__39393_39658,G__39394_39659,G__39395_39660);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__39403_39663 = clojure.data.equality_partition;
var G__39404_39664 = "string";
var G__39405_39665 = ((function (G__39403_39663,G__39404_39664){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39403_39663,G__39404_39664))
;
goog.object.set(G__39403_39663,G__39404_39664,G__39405_39665);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__39411_39668 = clojure.data.equality_partition;
var G__39412_39669 = "number";
var G__39413_39670 = ((function (G__39411_39668,G__39412_39669){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39411_39668,G__39412_39669))
;
goog.object.set(G__39411_39668,G__39412_39669,G__39413_39670);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__39423_39677 = clojure.data.equality_partition;
var G__39424_39678 = "array";
var G__39425_39679 = ((function (G__39423_39677,G__39424_39678){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__39423_39677,G__39424_39678))
;
goog.object.set(G__39423_39677,G__39424_39678,G__39425_39679);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__39431_39683 = clojure.data.equality_partition;
var G__39432_39684 = "function";
var G__39433_39685 = ((function (G__39431_39683,G__39432_39684){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39431_39683,G__39432_39684))
;
goog.object.set(G__39431_39683,G__39432_39684,G__39433_39685);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__39440_39690 = clojure.data.equality_partition;
var G__39441_39691 = "boolean";
var G__39442_39692 = ((function (G__39440_39690,G__39441_39691){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39440_39690,G__39441_39691))
;
goog.object.set(G__39440_39690,G__39441_39691,G__39442_39692);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__39447_39693 = clojure.data.equality_partition;
var G__39448_39694 = "_";
var G__39449_39695 = ((function (G__39447_39693,G__39448_39694){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__39447_39693,G__39448_39694))
;
goog.object.set(G__39447_39693,G__39448_39694,G__39449_39695);
goog.object.set(clojure.data.Diff,"null",true);

var G__39480_39712 = clojure.data.diff_similar;
var G__39481_39713 = "null";
var G__39482_39714 = ((function (G__39480_39712,G__39481_39713){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39480_39712,G__39481_39713))
;
goog.object.set(G__39480_39712,G__39481_39713,G__39482_39714);

goog.object.set(clojure.data.Diff,"string",true);

var G__39484_39717 = clojure.data.diff_similar;
var G__39485_39718 = "string";
var G__39486_39719 = ((function (G__39484_39717,G__39485_39718){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39484_39717,G__39485_39718))
;
goog.object.set(G__39484_39717,G__39485_39718,G__39486_39719);

goog.object.set(clojure.data.Diff,"number",true);

var G__39492_39728 = clojure.data.diff_similar;
var G__39493_39729 = "number";
var G__39494_39730 = ((function (G__39492_39728,G__39493_39729){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39492_39728,G__39493_39729))
;
goog.object.set(G__39492_39728,G__39493_39729,G__39494_39730);

goog.object.set(clojure.data.Diff,"array",true);

var G__39500_39742 = clojure.data.diff_similar;
var G__39501_39743 = "array";
var G__39502_39744 = ((function (G__39500_39742,G__39501_39743){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__39500_39742,G__39501_39743))
;
goog.object.set(G__39500_39742,G__39501_39743,G__39502_39744);

goog.object.set(clojure.data.Diff,"function",true);

var G__39507_39746 = clojure.data.diff_similar;
var G__39508_39747 = "function";
var G__39509_39748 = ((function (G__39507_39746,G__39508_39747){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39507_39746,G__39508_39747))
;
goog.object.set(G__39507_39746,G__39508_39747,G__39509_39748);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__39512_39751 = clojure.data.diff_similar;
var G__39513_39752 = "boolean";
var G__39514_39753 = ((function (G__39512_39751,G__39513_39752){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39512_39751,G__39513_39752))
;
goog.object.set(G__39512_39751,G__39513_39752,G__39514_39753);

goog.object.set(clojure.data.Diff,"_",true);

var G__39521_39759 = clojure.data.diff_similar;
var G__39522_39760 = "_";
var G__39523_39761 = ((function (G__39521_39759,G__39522_39760){
return (function (a,b){
var fexpr__39531 = (function (){var G__39532 = clojure.data.equality_partition(a);
var G__39532__$1 = (((G__39532 instanceof cljs.core.Keyword))?G__39532.fqn:null);
switch (G__39532__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39532__$1)].join('')));

}
})();
return (fexpr__39531.cljs$core$IFn$_invoke$arity$2 ? fexpr__39531.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__39531.call(null,a,b));
});})(G__39521_39759,G__39522_39760))
;
goog.object.set(G__39521_39759,G__39522_39760,G__39523_39761);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
