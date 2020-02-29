goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__61016){
var map__61018 = p__61016;
var map__61018__$1 = (((((!((map__61018 == null))))?(((((map__61018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61018):map__61018);
var m = map__61018__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61018__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61018__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__61023_61503 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61024_61504 = null;
var count__61025_61505 = (0);
var i__61026_61506 = (0);
while(true){
if((i__61026_61506 < count__61025_61505)){
var f_61517 = chunk__61024_61504.cljs$core$IIndexed$_nth$arity$2(null,i__61026_61506);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_61517], 0));


var G__61520 = seq__61023_61503;
var G__61521 = chunk__61024_61504;
var G__61522 = count__61025_61505;
var G__61523 = (i__61026_61506 + (1));
seq__61023_61503 = G__61520;
chunk__61024_61504 = G__61521;
count__61025_61505 = G__61522;
i__61026_61506 = G__61523;
continue;
} else {
var temp__5720__auto___61530 = cljs.core.seq(seq__61023_61503);
if(temp__5720__auto___61530){
var seq__61023_61534__$1 = temp__5720__auto___61530;
if(cljs.core.chunked_seq_QMARK_(seq__61023_61534__$1)){
var c__4550__auto___61535 = cljs.core.chunk_first(seq__61023_61534__$1);
var G__61540 = cljs.core.chunk_rest(seq__61023_61534__$1);
var G__61541 = c__4550__auto___61535;
var G__61542 = cljs.core.count(c__4550__auto___61535);
var G__61543 = (0);
seq__61023_61503 = G__61540;
chunk__61024_61504 = G__61541;
count__61025_61505 = G__61542;
i__61026_61506 = G__61543;
continue;
} else {
var f_61548 = cljs.core.first(seq__61023_61534__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_61548], 0));


var G__61549 = cljs.core.next(seq__61023_61534__$1);
var G__61550 = null;
var G__61551 = (0);
var G__61552 = (0);
seq__61023_61503 = G__61549;
chunk__61024_61504 = G__61550;
count__61025_61505 = G__61551;
i__61026_61506 = G__61552;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_61557 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_61557], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_61557)))?cljs.core.second(arglists_61557):arglists_61557)], 0));
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
var seq__61044_61559 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61045_61560 = null;
var count__61046_61561 = (0);
var i__61047_61562 = (0);
while(true){
if((i__61047_61562 < count__61046_61561)){
var vec__61082_61563 = chunk__61045_61560.cljs$core$IIndexed$_nth$arity$2(null,i__61047_61562);
var name_61564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61082_61563,(0),null);
var map__61085_61565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61082_61563,(1),null);
var map__61085_61566__$1 = (((((!((map__61085_61565 == null))))?(((((map__61085_61565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61085_61565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61085_61565):map__61085_61565);
var doc_61567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61085_61566__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61085_61566__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_61564], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_61568], 0));

if(cljs.core.truth_(doc_61567)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_61567], 0));
} else {
}


var G__61571 = seq__61044_61559;
var G__61572 = chunk__61045_61560;
var G__61573 = count__61046_61561;
var G__61574 = (i__61047_61562 + (1));
seq__61044_61559 = G__61571;
chunk__61045_61560 = G__61572;
count__61046_61561 = G__61573;
i__61047_61562 = G__61574;
continue;
} else {
var temp__5720__auto___61578 = cljs.core.seq(seq__61044_61559);
if(temp__5720__auto___61578){
var seq__61044_61579__$1 = temp__5720__auto___61578;
if(cljs.core.chunked_seq_QMARK_(seq__61044_61579__$1)){
var c__4550__auto___61580 = cljs.core.chunk_first(seq__61044_61579__$1);
var G__61581 = cljs.core.chunk_rest(seq__61044_61579__$1);
var G__61582 = c__4550__auto___61580;
var G__61583 = cljs.core.count(c__4550__auto___61580);
var G__61584 = (0);
seq__61044_61559 = G__61581;
chunk__61045_61560 = G__61582;
count__61046_61561 = G__61583;
i__61047_61562 = G__61584;
continue;
} else {
var vec__61096_61585 = cljs.core.first(seq__61044_61579__$1);
var name_61586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61096_61585,(0),null);
var map__61099_61587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61096_61585,(1),null);
var map__61099_61588__$1 = (((((!((map__61099_61587 == null))))?(((((map__61099_61587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61099_61587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61099_61587):map__61099_61587);
var doc_61589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61099_61588__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61099_61588__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_61586], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_61590], 0));

if(cljs.core.truth_(doc_61589)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_61589], 0));
} else {
}


var G__61592 = cljs.core.next(seq__61044_61579__$1);
var G__61593 = null;
var G__61594 = (0);
var G__61595 = (0);
seq__61044_61559 = G__61592;
chunk__61045_61560 = G__61593;
count__61046_61561 = G__61594;
i__61047_61562 = G__61595;
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

var seq__61107 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__61108 = null;
var count__61109 = (0);
var i__61110 = (0);
while(true){
if((i__61110 < count__61109)){
var role = chunk__61108.cljs$core$IIndexed$_nth$arity$2(null,i__61110);
var temp__5720__auto___61597__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___61597__$1)){
var spec_61598 = temp__5720__auto___61597__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_61598)], 0));
} else {
}


var G__61600 = seq__61107;
var G__61601 = chunk__61108;
var G__61602 = count__61109;
var G__61603 = (i__61110 + (1));
seq__61107 = G__61600;
chunk__61108 = G__61601;
count__61109 = G__61602;
i__61110 = G__61603;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__61107);
if(temp__5720__auto____$1){
var seq__61107__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__61107__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61107__$1);
var G__61604 = cljs.core.chunk_rest(seq__61107__$1);
var G__61605 = c__4550__auto__;
var G__61606 = cljs.core.count(c__4550__auto__);
var G__61607 = (0);
seq__61107 = G__61604;
chunk__61108 = G__61605;
count__61109 = G__61606;
i__61110 = G__61607;
continue;
} else {
var role = cljs.core.first(seq__61107__$1);
var temp__5720__auto___61608__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___61608__$2)){
var spec_61609 = temp__5720__auto___61608__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_61609)], 0));
} else {
}


var G__61610 = cljs.core.next(seq__61107__$1);
var G__61611 = null;
var G__61612 = (0);
var G__61613 = (0);
seq__61107 = G__61610;
chunk__61108 = G__61611;
count__61109 = G__61612;
i__61110 = G__61613;
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
var G__61616 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__61617 = cljs.core.ex_cause(t);
via = G__61616;
t = G__61617;
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
var map__61208 = datafied_throwable;
var map__61208__$1 = (((((!((map__61208 == null))))?(((((map__61208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61208):map__61208);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61208__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61208__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61208__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__61209 = cljs.core.last(via);
var map__61209__$1 = (((((!((map__61209 == null))))?(((((map__61209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61209):map__61209);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61209__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61209__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61209__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__61210 = data;
var map__61210__$1 = (((((!((map__61210 == null))))?(((((map__61210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61210):map__61210);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61210__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61210__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61210__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__61211 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__61211__$1 = (((((!((map__61211 == null))))?(((((map__61211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61211):map__61211);
var top_data = map__61211__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61211__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__61225 = phase;
var G__61225__$1 = (((G__61225 instanceof cljs.core.Keyword))?G__61225.fqn:null);
switch (G__61225__$1) {
case "read-source":
var map__61237 = data;
var map__61237__$1 = (((((!((map__61237 == null))))?(((((map__61237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61237):map__61237);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61237__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61237__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__61247 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__61247__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61247,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__61247);
var G__61247__$2 = (cljs.core.truth_((function (){var fexpr__61252 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61252.cljs$core$IFn$_invoke$arity$1 ? fexpr__61252.cljs$core$IFn$_invoke$arity$1(source) : fexpr__61252.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61247__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__61247__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61247__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__61247__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__61262 = top_data;
var G__61262__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61262,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__61262);
var G__61262__$2 = (cljs.core.truth_((function (){var fexpr__61264 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61264.cljs$core$IFn$_invoke$arity$1 ? fexpr__61264.cljs$core$IFn$_invoke$arity$1(source) : fexpr__61264.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61262__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__61262__$1);
var G__61262__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61262__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__61262__$2);
var G__61262__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61262__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__61262__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61262__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__61262__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__61283 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61283,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61283,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61283,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61283,(3),null);
var G__61287 = top_data;
var G__61287__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61287,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__61287);
var G__61287__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61287__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__61287__$1);
var G__61287__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61287__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__61287__$2);
var G__61287__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61287__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__61287__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61287__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__61287__$4;
}

break;
case "execution":
var vec__61296 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61296,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61296,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61296,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61296,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__61296,source__$1,method,file,line,G__61225,G__61225__$1,map__61208,map__61208__$1,via,trace,phase,map__61209,map__61209__$1,type,message,data,map__61210,map__61210__$1,problems,fn,caller,map__61211,map__61211__$1,top_data,source){
return (function (p1__61204_SHARP_){
var or__4131__auto__ = (p1__61204_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__61300 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61300.cljs$core$IFn$_invoke$arity$1 ? fexpr__61300.cljs$core$IFn$_invoke$arity$1(p1__61204_SHARP_) : fexpr__61300.call(null,p1__61204_SHARP_));
}
});})(vec__61296,source__$1,method,file,line,G__61225,G__61225__$1,map__61208,map__61208__$1,via,trace,phase,map__61209,map__61209__$1,type,message,data,map__61210,map__61210__$1,problems,fn,caller,map__61211,map__61211__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__61304 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__61304__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61304,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__61304);
var G__61304__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61304__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__61304__$1);
var G__61304__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61304__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__61304__$2);
var G__61304__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61304__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__61304__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61304__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__61304__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61225__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__61354){
var map__61356 = p__61354;
var map__61356__$1 = (((((!((map__61356 == null))))?(((((map__61356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61356):map__61356);
var triage_data = map__61356__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__61373 = phase;
var G__61373__$1 = (((G__61373 instanceof cljs.core.Keyword))?G__61373.fqn:null);
switch (G__61373__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__61375 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__61376 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61377 = loc;
var G__61378 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__61383_61674 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__61384_61675 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__61385_61676 = true;
var _STAR_print_fn_STAR__temp_val__61386_61677 = ((function (_STAR_print_newline_STAR__orig_val__61383_61674,_STAR_print_fn_STAR__orig_val__61384_61675,_STAR_print_newline_STAR__temp_val__61385_61676,sb__4661__auto__,G__61375,G__61376,G__61377,G__61373,G__61373__$1,loc,class_name,simple_class,cause_type,format,map__61356,map__61356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__61383_61674,_STAR_print_fn_STAR__orig_val__61384_61675,_STAR_print_newline_STAR__temp_val__61385_61676,sb__4661__auto__,G__61375,G__61376,G__61377,G__61373,G__61373__$1,loc,class_name,simple_class,cause_type,format,map__61356,map__61356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61385_61676;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61386_61677;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__61383_61674,_STAR_print_fn_STAR__orig_val__61384_61675,_STAR_print_newline_STAR__temp_val__61385_61676,_STAR_print_fn_STAR__temp_val__61386_61677,sb__4661__auto__,G__61375,G__61376,G__61377,G__61373,G__61373__$1,loc,class_name,simple_class,cause_type,format,map__61356,map__61356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__61383_61674,_STAR_print_fn_STAR__orig_val__61384_61675,_STAR_print_newline_STAR__temp_val__61385_61676,_STAR_print_fn_STAR__temp_val__61386_61677,sb__4661__auto__,G__61375,G__61376,G__61377,G__61373,G__61373__$1,loc,class_name,simple_class,cause_type,format,map__61356,map__61356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__61330_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__61330_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__61383_61674,_STAR_print_fn_STAR__orig_val__61384_61675,_STAR_print_newline_STAR__temp_val__61385_61676,_STAR_print_fn_STAR__temp_val__61386_61677,sb__4661__auto__,G__61375,G__61376,G__61377,G__61373,G__61373__$1,loc,class_name,simple_class,cause_type,format,map__61356,map__61356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__61383_61674,_STAR_print_fn_STAR__orig_val__61384_61675,_STAR_print_newline_STAR__temp_val__61385_61676,_STAR_print_fn_STAR__temp_val__61386_61677,sb__4661__auto__,G__61375,G__61376,G__61377,G__61373,G__61373__$1,loc,class_name,simple_class,cause_type,format,map__61356,map__61356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61384_61675;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61383_61674;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__61375,G__61376,G__61377,G__61378) : format.call(null,G__61375,G__61376,G__61377,G__61378));

break;
case "macroexpansion":
var G__61406 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__61407 = cause_type;
var G__61408 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61409 = loc;
var G__61410 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61406,G__61407,G__61408,G__61409,G__61410) : format.call(null,G__61406,G__61407,G__61408,G__61409,G__61410));

break;
case "compile-syntax-check":
var G__61411 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__61412 = cause_type;
var G__61413 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61414 = loc;
var G__61415 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61411,G__61412,G__61413,G__61414,G__61415) : format.call(null,G__61411,G__61412,G__61413,G__61414,G__61415));

break;
case "compilation":
var G__61416 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__61417 = cause_type;
var G__61418 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61419 = loc;
var G__61420 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61416,G__61417,G__61418,G__61419,G__61420) : format.call(null,G__61416,G__61417,G__61418,G__61419,G__61420));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__61431 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__61432 = symbol;
var G__61433 = loc;
var G__61434 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__61435_61687 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__61436_61688 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__61437_61689 = true;
var _STAR_print_fn_STAR__temp_val__61438_61690 = ((function (_STAR_print_newline_STAR__orig_val__61435_61687,_STAR_print_fn_STAR__orig_val__61436_61688,_STAR_print_newline_STAR__temp_val__61437_61689,sb__4661__auto__,G__61431,G__61432,G__61433,G__61373,G__61373__$1,loc,class_name,simple_class,cause_type,format,map__61356,map__61356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__61435_61687,_STAR_print_fn_STAR__orig_val__61436_61688,_STAR_print_newline_STAR__temp_val__61437_61689,sb__4661__auto__,G__61431,G__61432,G__61433,G__61373,G__61373__$1,loc,class_name,simple_class,cause_type,format,map__61356,map__61356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61437_61689;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61438_61690;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__61435_61687,_STAR_print_fn_STAR__orig_val__61436_61688,_STAR_print_newline_STAR__temp_val__61437_61689,_STAR_print_fn_STAR__temp_val__61438_61690,sb__4661__auto__,G__61431,G__61432,G__61433,G__61373,G__61373__$1,loc,class_name,simple_class,cause_type,format,map__61356,map__61356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__61435_61687,_STAR_print_fn_STAR__orig_val__61436_61688,_STAR_print_newline_STAR__temp_val__61437_61689,_STAR_print_fn_STAR__temp_val__61438_61690,sb__4661__auto__,G__61431,G__61432,G__61433,G__61373,G__61373__$1,loc,class_name,simple_class,cause_type,format,map__61356,map__61356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__61342_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__61342_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__61435_61687,_STAR_print_fn_STAR__orig_val__61436_61688,_STAR_print_newline_STAR__temp_val__61437_61689,_STAR_print_fn_STAR__temp_val__61438_61690,sb__4661__auto__,G__61431,G__61432,G__61433,G__61373,G__61373__$1,loc,class_name,simple_class,cause_type,format,map__61356,map__61356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__61435_61687,_STAR_print_fn_STAR__orig_val__61436_61688,_STAR_print_newline_STAR__temp_val__61437_61689,_STAR_print_fn_STAR__temp_val__61438_61690,sb__4661__auto__,G__61431,G__61432,G__61433,G__61373,G__61373__$1,loc,class_name,simple_class,cause_type,format,map__61356,map__61356__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61436_61688;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61435_61687;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__61431,G__61432,G__61433,G__61434) : format.call(null,G__61431,G__61432,G__61433,G__61434));
} else {
var G__61457 = "Execution error%s at %s(%s).\n%s\n";
var G__61458 = cause_type;
var G__61459 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61460 = loc;
var G__61461 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61457,G__61458,G__61459,G__61460,G__61461) : format.call(null,G__61457,G__61458,G__61459,G__61460,G__61461));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61373__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
