goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__57744){
var map__57745 = p__57744;
var map__57745__$1 = (((((!((map__57745 == null))))?(((((map__57745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57745):map__57745);
var m = map__57745__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57745__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57745__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__57750_58017 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__57751_58018 = null;
var count__57752_58019 = (0);
var i__57753_58020 = (0);
while(true){
if((i__57753_58020 < count__57752_58019)){
var f_58021 = chunk__57751_58018.cljs$core$IIndexed$_nth$arity$2(null,i__57753_58020);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_58021], 0));


var G__58022 = seq__57750_58017;
var G__58023 = chunk__57751_58018;
var G__58024 = count__57752_58019;
var G__58025 = (i__57753_58020 + (1));
seq__57750_58017 = G__58022;
chunk__57751_58018 = G__58023;
count__57752_58019 = G__58024;
i__57753_58020 = G__58025;
continue;
} else {
var temp__5720__auto___58026 = cljs.core.seq(seq__57750_58017);
if(temp__5720__auto___58026){
var seq__57750_58027__$1 = temp__5720__auto___58026;
if(cljs.core.chunked_seq_QMARK_(seq__57750_58027__$1)){
var c__4550__auto___58028 = cljs.core.chunk_first(seq__57750_58027__$1);
var G__58029 = cljs.core.chunk_rest(seq__57750_58027__$1);
var G__58030 = c__4550__auto___58028;
var G__58031 = cljs.core.count(c__4550__auto___58028);
var G__58032 = (0);
seq__57750_58017 = G__58029;
chunk__57751_58018 = G__58030;
count__57752_58019 = G__58031;
i__57753_58020 = G__58032;
continue;
} else {
var f_58033 = cljs.core.first(seq__57750_58027__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_58033], 0));


var G__58034 = cljs.core.next(seq__57750_58027__$1);
var G__58035 = null;
var G__58036 = (0);
var G__58037 = (0);
seq__57750_58017 = G__58034;
chunk__57751_58018 = G__58035;
count__57752_58019 = G__58036;
i__57753_58020 = G__58037;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_58040 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_58040], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_58040)))?cljs.core.second(arglists_58040):arglists_58040)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__57761_58050 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__57762_58051 = null;
var count__57763_58052 = (0);
var i__57764_58053 = (0);
while(true){
if((i__57764_58053 < count__57763_58052)){
var vec__57790_58061 = chunk__57762_58051.cljs$core$IIndexed$_nth$arity$2(null,i__57764_58053);
var name_58062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57790_58061,(0),null);
var map__57793_58063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57790_58061,(1),null);
var map__57793_58064__$1 = (((((!((map__57793_58063 == null))))?(((((map__57793_58063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57793_58063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57793_58063):map__57793_58063);
var doc_58065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57793_58064__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_58066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57793_58064__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_58062], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_58066], 0));

if(cljs.core.truth_(doc_58065)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_58065], 0));
} else {
}


var G__58069 = seq__57761_58050;
var G__58070 = chunk__57762_58051;
var G__58071 = count__57763_58052;
var G__58072 = (i__57764_58053 + (1));
seq__57761_58050 = G__58069;
chunk__57762_58051 = G__58070;
count__57763_58052 = G__58071;
i__57764_58053 = G__58072;
continue;
} else {
var temp__5720__auto___58073 = cljs.core.seq(seq__57761_58050);
if(temp__5720__auto___58073){
var seq__57761_58074__$1 = temp__5720__auto___58073;
if(cljs.core.chunked_seq_QMARK_(seq__57761_58074__$1)){
var c__4550__auto___58075 = cljs.core.chunk_first(seq__57761_58074__$1);
var G__58076 = cljs.core.chunk_rest(seq__57761_58074__$1);
var G__58077 = c__4550__auto___58075;
var G__58078 = cljs.core.count(c__4550__auto___58075);
var G__58079 = (0);
seq__57761_58050 = G__58076;
chunk__57762_58051 = G__58077;
count__57763_58052 = G__58078;
i__57764_58053 = G__58079;
continue;
} else {
var vec__57804_58080 = cljs.core.first(seq__57761_58074__$1);
var name_58081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57804_58080,(0),null);
var map__57807_58082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57804_58080,(1),null);
var map__57807_58083__$1 = (((((!((map__57807_58082 == null))))?(((((map__57807_58082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57807_58082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57807_58082):map__57807_58082);
var doc_58084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57807_58083__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_58085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57807_58083__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_58081], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_58085], 0));

if(cljs.core.truth_(doc_58084)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_58084], 0));
} else {
}


var G__58088 = cljs.core.next(seq__57761_58074__$1);
var G__58089 = null;
var G__58090 = (0);
var G__58091 = (0);
seq__57761_58050 = G__58088;
chunk__57762_58051 = G__58089;
count__57763_58052 = G__58090;
i__57764_58053 = G__58091;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__57814 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__57815 = null;
var count__57816 = (0);
var i__57817 = (0);
while(true){
if((i__57817 < count__57816)){
var role = chunk__57815.cljs$core$IIndexed$_nth$arity$2(null,i__57817);
var temp__5720__auto___58098__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___58098__$1)){
var spec_58099 = temp__5720__auto___58098__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_58099)], 0));
} else {
}


var G__58101 = seq__57814;
var G__58102 = chunk__57815;
var G__58103 = count__57816;
var G__58104 = (i__57817 + (1));
seq__57814 = G__58101;
chunk__57815 = G__58102;
count__57816 = G__58103;
i__57817 = G__58104;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__57814);
if(temp__5720__auto____$1){
var seq__57814__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__57814__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57814__$1);
var G__58107 = cljs.core.chunk_rest(seq__57814__$1);
var G__58108 = c__4550__auto__;
var G__58109 = cljs.core.count(c__4550__auto__);
var G__58110 = (0);
seq__57814 = G__58107;
chunk__57815 = G__58108;
count__57816 = G__58109;
i__57817 = G__58110;
continue;
} else {
var role = cljs.core.first(seq__57814__$1);
var temp__5720__auto___58111__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___58111__$2)){
var spec_58112 = temp__5720__auto___58111__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_58112)], 0));
} else {
}


var G__58114 = cljs.core.next(seq__57814__$1);
var G__58115 = null;
var G__58116 = (0);
var G__58117 = (0);
seq__57814 = G__58114;
chunk__57815 = G__58115;
count__57816 = G__58116;
i__57817 = G__58117;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__58128 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__58129 = cljs.core.ex_cause(t);
via = G__58128;
t = G__58129;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__57863 = datafied_throwable;
var map__57863__$1 = (((((!((map__57863 == null))))?(((((map__57863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57863):map__57863);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57863__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57863__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57863__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__57864 = cljs.core.last(via);
var map__57864__$1 = (((((!((map__57864 == null))))?(((((map__57864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57864):map__57864);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57864__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57864__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57864__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__57865 = data;
var map__57865__$1 = (((((!((map__57865 == null))))?(((((map__57865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57865):map__57865);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57865__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57865__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57865__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__57866 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__57866__$1 = (((((!((map__57866 == null))))?(((((map__57866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57866):map__57866);
var top_data = map__57866__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57866__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__57883 = phase;
var G__57883__$1 = (((G__57883 instanceof cljs.core.Keyword))?G__57883.fqn:null);
switch (G__57883__$1) {
case "read-source":
var map__57887 = data;
var map__57887__$1 = (((((!((map__57887 == null))))?(((((map__57887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57887):map__57887);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57887__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57887__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__57891 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__57891__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57891,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__57891);
var G__57891__$2 = (cljs.core.truth_((function (){var fexpr__57895 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__57895.cljs$core$IFn$_invoke$arity$1 ? fexpr__57895.cljs$core$IFn$_invoke$arity$1(source) : fexpr__57895.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57891__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__57891__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57891__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__57891__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__57896 = top_data;
var G__57896__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57896,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__57896);
var G__57896__$2 = (cljs.core.truth_((function (){var fexpr__57897 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__57897.cljs$core$IFn$_invoke$arity$1 ? fexpr__57897.cljs$core$IFn$_invoke$arity$1(source) : fexpr__57897.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57896__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__57896__$1);
var G__57896__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57896__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__57896__$2);
var G__57896__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57896__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__57896__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57896__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__57896__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__57898 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57898,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57898,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57898,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57898,(3),null);
var G__57902 = top_data;
var G__57902__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57902,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__57902);
var G__57902__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57902__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__57902__$1);
var G__57902__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57902__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__57902__$2);
var G__57902__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57902__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__57902__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57902__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__57902__$4;
}

break;
case "execution":
var vec__57910 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57910,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57910,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57910,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57910,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__57910,source__$1,method,file,line,G__57883,G__57883__$1,map__57863,map__57863__$1,via,trace,phase,map__57864,map__57864__$1,type,message,data,map__57865,map__57865__$1,problems,fn,caller,map__57866,map__57866__$1,top_data,source){
return (function (p1__57855_SHARP_){
var or__4131__auto__ = (p1__57855_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__57916 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__57916.cljs$core$IFn$_invoke$arity$1 ? fexpr__57916.cljs$core$IFn$_invoke$arity$1(p1__57855_SHARP_) : fexpr__57916.call(null,p1__57855_SHARP_));
}
});})(vec__57910,source__$1,method,file,line,G__57883,G__57883__$1,map__57863,map__57863__$1,via,trace,phase,map__57864,map__57864__$1,type,message,data,map__57865,map__57865__$1,problems,fn,caller,map__57866,map__57866__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__57921 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__57921__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57921,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__57921);
var G__57921__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57921__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__57921__$1);
var G__57921__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57921__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__57921__$2);
var G__57921__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57921__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__57921__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57921__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__57921__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57883__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__57932){
var map__57933 = p__57932;
var map__57933__$1 = (((((!((map__57933 == null))))?(((((map__57933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57933):map__57933);
var triage_data = map__57933__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57933__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57933__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57933__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57933__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57933__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57933__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57933__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57933__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__57950 = phase;
var G__57950__$1 = (((G__57950 instanceof cljs.core.Keyword))?G__57950.fqn:null);
switch (G__57950__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__57951 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__57952 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57953 = loc;
var G__57954 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57960_58214 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57961_58215 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57962_58216 = true;
var _STAR_print_fn_STAR__temp_val__57963_58217 = ((function (_STAR_print_newline_STAR__orig_val__57960_58214,_STAR_print_fn_STAR__orig_val__57961_58215,_STAR_print_newline_STAR__temp_val__57962_58216,sb__4661__auto__,G__57951,G__57952,G__57953,G__57950,G__57950__$1,loc,class_name,simple_class,cause_type,format,map__57933,map__57933__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__57960_58214,_STAR_print_fn_STAR__orig_val__57961_58215,_STAR_print_newline_STAR__temp_val__57962_58216,sb__4661__auto__,G__57951,G__57952,G__57953,G__57950,G__57950__$1,loc,class_name,simple_class,cause_type,format,map__57933,map__57933__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57962_58216;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57963_58217;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__57960_58214,_STAR_print_fn_STAR__orig_val__57961_58215,_STAR_print_newline_STAR__temp_val__57962_58216,_STAR_print_fn_STAR__temp_val__57963_58217,sb__4661__auto__,G__57951,G__57952,G__57953,G__57950,G__57950__$1,loc,class_name,simple_class,cause_type,format,map__57933,map__57933__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__57960_58214,_STAR_print_fn_STAR__orig_val__57961_58215,_STAR_print_newline_STAR__temp_val__57962_58216,_STAR_print_fn_STAR__temp_val__57963_58217,sb__4661__auto__,G__57951,G__57952,G__57953,G__57950,G__57950__$1,loc,class_name,simple_class,cause_type,format,map__57933,map__57933__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__57926_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__57926_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__57960_58214,_STAR_print_fn_STAR__orig_val__57961_58215,_STAR_print_newline_STAR__temp_val__57962_58216,_STAR_print_fn_STAR__temp_val__57963_58217,sb__4661__auto__,G__57951,G__57952,G__57953,G__57950,G__57950__$1,loc,class_name,simple_class,cause_type,format,map__57933,map__57933__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__57960_58214,_STAR_print_fn_STAR__orig_val__57961_58215,_STAR_print_newline_STAR__temp_val__57962_58216,_STAR_print_fn_STAR__temp_val__57963_58217,sb__4661__auto__,G__57951,G__57952,G__57953,G__57950,G__57950__$1,loc,class_name,simple_class,cause_type,format,map__57933,map__57933__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57961_58215;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57960_58214;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__57951,G__57952,G__57953,G__57954) : format.call(null,G__57951,G__57952,G__57953,G__57954));

break;
case "macroexpansion":
var G__57972 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__57973 = cause_type;
var G__57974 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57975 = loc;
var G__57976 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57972,G__57973,G__57974,G__57975,G__57976) : format.call(null,G__57972,G__57973,G__57974,G__57975,G__57976));

break;
case "compile-syntax-check":
var G__57978 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__57979 = cause_type;
var G__57980 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57981 = loc;
var G__57982 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57978,G__57979,G__57980,G__57981,G__57982) : format.call(null,G__57978,G__57979,G__57980,G__57981,G__57982));

break;
case "compilation":
var G__57986 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__57987 = cause_type;
var G__57988 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57989 = loc;
var G__57990 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57986,G__57987,G__57988,G__57989,G__57990) : format.call(null,G__57986,G__57987,G__57988,G__57989,G__57990));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__57992 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__57993 = symbol;
var G__57994 = loc;
var G__57995 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57996_58232 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57997_58233 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57998_58234 = true;
var _STAR_print_fn_STAR__temp_val__57999_58235 = ((function (_STAR_print_newline_STAR__orig_val__57996_58232,_STAR_print_fn_STAR__orig_val__57997_58233,_STAR_print_newline_STAR__temp_val__57998_58234,sb__4661__auto__,G__57992,G__57993,G__57994,G__57950,G__57950__$1,loc,class_name,simple_class,cause_type,format,map__57933,map__57933__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__57996_58232,_STAR_print_fn_STAR__orig_val__57997_58233,_STAR_print_newline_STAR__temp_val__57998_58234,sb__4661__auto__,G__57992,G__57993,G__57994,G__57950,G__57950__$1,loc,class_name,simple_class,cause_type,format,map__57933,map__57933__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57998_58234;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57999_58235;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__57996_58232,_STAR_print_fn_STAR__orig_val__57997_58233,_STAR_print_newline_STAR__temp_val__57998_58234,_STAR_print_fn_STAR__temp_val__57999_58235,sb__4661__auto__,G__57992,G__57993,G__57994,G__57950,G__57950__$1,loc,class_name,simple_class,cause_type,format,map__57933,map__57933__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__57996_58232,_STAR_print_fn_STAR__orig_val__57997_58233,_STAR_print_newline_STAR__temp_val__57998_58234,_STAR_print_fn_STAR__temp_val__57999_58235,sb__4661__auto__,G__57992,G__57993,G__57994,G__57950,G__57950__$1,loc,class_name,simple_class,cause_type,format,map__57933,map__57933__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__57927_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__57927_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__57996_58232,_STAR_print_fn_STAR__orig_val__57997_58233,_STAR_print_newline_STAR__temp_val__57998_58234,_STAR_print_fn_STAR__temp_val__57999_58235,sb__4661__auto__,G__57992,G__57993,G__57994,G__57950,G__57950__$1,loc,class_name,simple_class,cause_type,format,map__57933,map__57933__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__57996_58232,_STAR_print_fn_STAR__orig_val__57997_58233,_STAR_print_newline_STAR__temp_val__57998_58234,_STAR_print_fn_STAR__temp_val__57999_58235,sb__4661__auto__,G__57992,G__57993,G__57994,G__57950,G__57950__$1,loc,class_name,simple_class,cause_type,format,map__57933,map__57933__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57997_58233;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57996_58232;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__57992,G__57993,G__57994,G__57995) : format.call(null,G__57992,G__57993,G__57994,G__57995));
} else {
var G__58001 = "Execution error%s at %s(%s).\n%s\n";
var G__58002 = cause_type;
var G__58003 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__58004 = loc;
var G__58005 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__58001,G__58002,G__58003,G__58004,G__58005) : format.call(null,G__58001,G__58002,G__58003,G__58004,G__58005));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57950__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
