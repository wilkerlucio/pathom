goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__66467){
var map__66468 = p__66467;
var map__66468__$1 = (((((!((map__66468 == null))))?(((((map__66468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66468):map__66468);
var m = map__66468__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66468__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66468__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__66471_66751 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66472_66752 = null;
var count__66473_66753 = (0);
var i__66474_66754 = (0);
while(true){
if((i__66474_66754 < count__66473_66753)){
var f_66755 = chunk__66472_66752.cljs$core$IIndexed$_nth$arity$2(null,i__66474_66754);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_66755], 0));


var G__66756 = seq__66471_66751;
var G__66757 = chunk__66472_66752;
var G__66758 = count__66473_66753;
var G__66759 = (i__66474_66754 + (1));
seq__66471_66751 = G__66756;
chunk__66472_66752 = G__66757;
count__66473_66753 = G__66758;
i__66474_66754 = G__66759;
continue;
} else {
var temp__5720__auto___66761 = cljs.core.seq(seq__66471_66751);
if(temp__5720__auto___66761){
var seq__66471_66762__$1 = temp__5720__auto___66761;
if(cljs.core.chunked_seq_QMARK_(seq__66471_66762__$1)){
var c__4550__auto___66763 = cljs.core.chunk_first(seq__66471_66762__$1);
var G__66764 = cljs.core.chunk_rest(seq__66471_66762__$1);
var G__66765 = c__4550__auto___66763;
var G__66766 = cljs.core.count(c__4550__auto___66763);
var G__66767 = (0);
seq__66471_66751 = G__66764;
chunk__66472_66752 = G__66765;
count__66473_66753 = G__66766;
i__66474_66754 = G__66767;
continue;
} else {
var f_66768 = cljs.core.first(seq__66471_66762__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_66768], 0));


var G__66770 = cljs.core.next(seq__66471_66762__$1);
var G__66771 = null;
var G__66772 = (0);
var G__66773 = (0);
seq__66471_66751 = G__66770;
chunk__66472_66752 = G__66771;
count__66473_66753 = G__66772;
i__66474_66754 = G__66773;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_66779 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_66779], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_66779)))?cljs.core.second(arglists_66779):arglists_66779)], 0));
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
var seq__66488_66786 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66489_66787 = null;
var count__66490_66788 = (0);
var i__66491_66789 = (0);
while(true){
if((i__66491_66789 < count__66490_66788)){
var vec__66525_66790 = chunk__66489_66787.cljs$core$IIndexed$_nth$arity$2(null,i__66491_66789);
var name_66791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66525_66790,(0),null);
var map__66528_66792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66525_66790,(1),null);
var map__66528_66793__$1 = (((((!((map__66528_66792 == null))))?(((((map__66528_66792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66528_66792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66528_66792):map__66528_66792);
var doc_66794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66528_66793__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66528_66793__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_66791], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_66795], 0));

if(cljs.core.truth_(doc_66794)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_66794], 0));
} else {
}


var G__66797 = seq__66488_66786;
var G__66798 = chunk__66489_66787;
var G__66799 = count__66490_66788;
var G__66800 = (i__66491_66789 + (1));
seq__66488_66786 = G__66797;
chunk__66489_66787 = G__66798;
count__66490_66788 = G__66799;
i__66491_66789 = G__66800;
continue;
} else {
var temp__5720__auto___66801 = cljs.core.seq(seq__66488_66786);
if(temp__5720__auto___66801){
var seq__66488_66802__$1 = temp__5720__auto___66801;
if(cljs.core.chunked_seq_QMARK_(seq__66488_66802__$1)){
var c__4550__auto___66804 = cljs.core.chunk_first(seq__66488_66802__$1);
var G__66805 = cljs.core.chunk_rest(seq__66488_66802__$1);
var G__66806 = c__4550__auto___66804;
var G__66807 = cljs.core.count(c__4550__auto___66804);
var G__66808 = (0);
seq__66488_66786 = G__66805;
chunk__66489_66787 = G__66806;
count__66490_66788 = G__66807;
i__66491_66789 = G__66808;
continue;
} else {
var vec__66534_66814 = cljs.core.first(seq__66488_66802__$1);
var name_66815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66534_66814,(0),null);
var map__66537_66816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66534_66814,(1),null);
var map__66537_66817__$1 = (((((!((map__66537_66816 == null))))?(((((map__66537_66816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66537_66816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66537_66816):map__66537_66816);
var doc_66818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66537_66817__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66537_66817__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_66815], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_66819], 0));

if(cljs.core.truth_(doc_66818)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_66818], 0));
} else {
}


var G__66828 = cljs.core.next(seq__66488_66802__$1);
var G__66829 = null;
var G__66830 = (0);
var G__66831 = (0);
seq__66488_66786 = G__66828;
chunk__66489_66787 = G__66829;
count__66490_66788 = G__66830;
i__66491_66789 = G__66831;
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

var seq__66544 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__66545 = null;
var count__66546 = (0);
var i__66547 = (0);
while(true){
if((i__66547 < count__66546)){
var role = chunk__66545.cljs$core$IIndexed$_nth$arity$2(null,i__66547);
var temp__5720__auto___66840__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___66840__$1)){
var spec_66843 = temp__5720__auto___66840__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_66843)], 0));
} else {
}


var G__66848 = seq__66544;
var G__66849 = chunk__66545;
var G__66850 = count__66546;
var G__66851 = (i__66547 + (1));
seq__66544 = G__66848;
chunk__66545 = G__66849;
count__66546 = G__66850;
i__66547 = G__66851;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__66544);
if(temp__5720__auto____$1){
var seq__66544__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__66544__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__66544__$1);
var G__66853 = cljs.core.chunk_rest(seq__66544__$1);
var G__66854 = c__4550__auto__;
var G__66855 = cljs.core.count(c__4550__auto__);
var G__66856 = (0);
seq__66544 = G__66853;
chunk__66545 = G__66854;
count__66546 = G__66855;
i__66547 = G__66856;
continue;
} else {
var role = cljs.core.first(seq__66544__$1);
var temp__5720__auto___66858__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___66858__$2)){
var spec_66861 = temp__5720__auto___66858__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_66861)], 0));
} else {
}


var G__66863 = cljs.core.next(seq__66544__$1);
var G__66864 = null;
var G__66865 = (0);
var G__66866 = (0);
seq__66544 = G__66863;
chunk__66545 = G__66864;
count__66546 = G__66865;
i__66547 = G__66866;
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
var G__66877 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__66878 = cljs.core.ex_cause(t);
via = G__66877;
t = G__66878;
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
var map__66577 = datafied_throwable;
var map__66577__$1 = (((((!((map__66577 == null))))?(((((map__66577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66577):map__66577);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66577__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66577__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66577__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__66578 = cljs.core.last(via);
var map__66578__$1 = (((((!((map__66578 == null))))?(((((map__66578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66578):map__66578);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66578__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66578__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66578__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__66579 = data;
var map__66579__$1 = (((((!((map__66579 == null))))?(((((map__66579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66579):map__66579);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66579__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66579__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66579__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__66580 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__66580__$1 = (((((!((map__66580 == null))))?(((((map__66580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66580):map__66580);
var top_data = map__66580__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66580__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__66589 = phase;
var G__66589__$1 = (((G__66589 instanceof cljs.core.Keyword))?G__66589.fqn:null);
switch (G__66589__$1) {
case "read-source":
var map__66590 = data;
var map__66590__$1 = (((((!((map__66590 == null))))?(((((map__66590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66590):map__66590);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66590__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66590__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__66600 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__66600__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66600,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__66600);
var G__66600__$2 = (cljs.core.truth_((function (){var fexpr__66613 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__66613.cljs$core$IFn$_invoke$arity$1 ? fexpr__66613.cljs$core$IFn$_invoke$arity$1(source) : fexpr__66613.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__66600__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__66600__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66600__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__66600__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__66622 = top_data;
var G__66622__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66622,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__66622);
var G__66622__$2 = (cljs.core.truth_((function (){var fexpr__66631 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__66631.cljs$core$IFn$_invoke$arity$1 ? fexpr__66631.cljs$core$IFn$_invoke$arity$1(source) : fexpr__66631.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__66622__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__66622__$1);
var G__66622__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66622__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__66622__$2);
var G__66622__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66622__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__66622__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66622__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__66622__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__66640 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66640,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66640,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66640,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66640,(3),null);
var G__66643 = top_data;
var G__66643__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66643,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__66643);
var G__66643__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66643__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__66643__$1);
var G__66643__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66643__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__66643__$2);
var G__66643__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66643__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__66643__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66643__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__66643__$4;
}

break;
case "execution":
var vec__66651 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66651,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66651,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66651,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66651,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__66651,source__$1,method,file,line,G__66589,G__66589__$1,map__66577,map__66577__$1,via,trace,phase,map__66578,map__66578__$1,type,message,data,map__66579,map__66579__$1,problems,fn,caller,map__66580,map__66580__$1,top_data,source){
return (function (p1__66574_SHARP_){
var or__4131__auto__ = (p1__66574_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__66660 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__66660.cljs$core$IFn$_invoke$arity$1 ? fexpr__66660.cljs$core$IFn$_invoke$arity$1(p1__66574_SHARP_) : fexpr__66660.call(null,p1__66574_SHARP_));
}
});})(vec__66651,source__$1,method,file,line,G__66589,G__66589__$1,map__66577,map__66577__$1,via,trace,phase,map__66578,map__66578__$1,type,message,data,map__66579,map__66579__$1,problems,fn,caller,map__66580,map__66580__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__66664 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__66664__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66664,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__66664);
var G__66664__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66664__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__66664__$1);
var G__66664__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66664__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__66664__$2);
var G__66664__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66664__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__66664__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66664__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__66664__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66589__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__66678){
var map__66679 = p__66678;
var map__66679__$1 = (((((!((map__66679 == null))))?(((((map__66679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66679):map__66679);
var triage_data = map__66679__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66679__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66679__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66679__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66679__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66679__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66679__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66679__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66679__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__66692 = phase;
var G__66692__$1 = (((G__66692 instanceof cljs.core.Keyword))?G__66692.fqn:null);
switch (G__66692__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__66693 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__66694 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__66695 = loc;
var G__66696 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__66697_66938 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__66698_66939 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__66699_66940 = true;
var _STAR_print_fn_STAR__temp_val__66700_66941 = ((function (_STAR_print_newline_STAR__orig_val__66697_66938,_STAR_print_fn_STAR__orig_val__66698_66939,_STAR_print_newline_STAR__temp_val__66699_66940,sb__4661__auto__,G__66693,G__66694,G__66695,G__66692,G__66692__$1,loc,class_name,simple_class,cause_type,format,map__66679,map__66679__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__66697_66938,_STAR_print_fn_STAR__orig_val__66698_66939,_STAR_print_newline_STAR__temp_val__66699_66940,sb__4661__auto__,G__66693,G__66694,G__66695,G__66692,G__66692__$1,loc,class_name,simple_class,cause_type,format,map__66679,map__66679__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__66699_66940;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__66700_66941;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__66697_66938,_STAR_print_fn_STAR__orig_val__66698_66939,_STAR_print_newline_STAR__temp_val__66699_66940,_STAR_print_fn_STAR__temp_val__66700_66941,sb__4661__auto__,G__66693,G__66694,G__66695,G__66692,G__66692__$1,loc,class_name,simple_class,cause_type,format,map__66679,map__66679__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__66697_66938,_STAR_print_fn_STAR__orig_val__66698_66939,_STAR_print_newline_STAR__temp_val__66699_66940,_STAR_print_fn_STAR__temp_val__66700_66941,sb__4661__auto__,G__66693,G__66694,G__66695,G__66692,G__66692__$1,loc,class_name,simple_class,cause_type,format,map__66679,map__66679__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__66676_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__66676_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__66697_66938,_STAR_print_fn_STAR__orig_val__66698_66939,_STAR_print_newline_STAR__temp_val__66699_66940,_STAR_print_fn_STAR__temp_val__66700_66941,sb__4661__auto__,G__66693,G__66694,G__66695,G__66692,G__66692__$1,loc,class_name,simple_class,cause_type,format,map__66679,map__66679__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__66697_66938,_STAR_print_fn_STAR__orig_val__66698_66939,_STAR_print_newline_STAR__temp_val__66699_66940,_STAR_print_fn_STAR__temp_val__66700_66941,sb__4661__auto__,G__66693,G__66694,G__66695,G__66692,G__66692__$1,loc,class_name,simple_class,cause_type,format,map__66679,map__66679__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__66698_66939;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__66697_66938;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__66693,G__66694,G__66695,G__66696) : format.call(null,G__66693,G__66694,G__66695,G__66696));

break;
case "macroexpansion":
var G__66705 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__66706 = cause_type;
var G__66707 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__66708 = loc;
var G__66709 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__66705,G__66706,G__66707,G__66708,G__66709) : format.call(null,G__66705,G__66706,G__66707,G__66708,G__66709));

break;
case "compile-syntax-check":
var G__66710 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__66711 = cause_type;
var G__66712 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__66713 = loc;
var G__66714 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__66710,G__66711,G__66712,G__66713,G__66714) : format.call(null,G__66710,G__66711,G__66712,G__66713,G__66714));

break;
case "compilation":
var G__66717 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__66718 = cause_type;
var G__66719 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__66720 = loc;
var G__66721 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__66717,G__66718,G__66719,G__66720,G__66721) : format.call(null,G__66717,G__66718,G__66719,G__66720,G__66721));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__66722 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__66723 = symbol;
var G__66724 = loc;
var G__66725 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__66726_66958 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__66727_66959 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__66728_66960 = true;
var _STAR_print_fn_STAR__temp_val__66729_66961 = ((function (_STAR_print_newline_STAR__orig_val__66726_66958,_STAR_print_fn_STAR__orig_val__66727_66959,_STAR_print_newline_STAR__temp_val__66728_66960,sb__4661__auto__,G__66722,G__66723,G__66724,G__66692,G__66692__$1,loc,class_name,simple_class,cause_type,format,map__66679,map__66679__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__66726_66958,_STAR_print_fn_STAR__orig_val__66727_66959,_STAR_print_newline_STAR__temp_val__66728_66960,sb__4661__auto__,G__66722,G__66723,G__66724,G__66692,G__66692__$1,loc,class_name,simple_class,cause_type,format,map__66679,map__66679__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__66728_66960;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__66729_66961;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__66726_66958,_STAR_print_fn_STAR__orig_val__66727_66959,_STAR_print_newline_STAR__temp_val__66728_66960,_STAR_print_fn_STAR__temp_val__66729_66961,sb__4661__auto__,G__66722,G__66723,G__66724,G__66692,G__66692__$1,loc,class_name,simple_class,cause_type,format,map__66679,map__66679__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__66726_66958,_STAR_print_fn_STAR__orig_val__66727_66959,_STAR_print_newline_STAR__temp_val__66728_66960,_STAR_print_fn_STAR__temp_val__66729_66961,sb__4661__auto__,G__66722,G__66723,G__66724,G__66692,G__66692__$1,loc,class_name,simple_class,cause_type,format,map__66679,map__66679__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__66677_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__66677_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__66726_66958,_STAR_print_fn_STAR__orig_val__66727_66959,_STAR_print_newline_STAR__temp_val__66728_66960,_STAR_print_fn_STAR__temp_val__66729_66961,sb__4661__auto__,G__66722,G__66723,G__66724,G__66692,G__66692__$1,loc,class_name,simple_class,cause_type,format,map__66679,map__66679__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__66726_66958,_STAR_print_fn_STAR__orig_val__66727_66959,_STAR_print_newline_STAR__temp_val__66728_66960,_STAR_print_fn_STAR__temp_val__66729_66961,sb__4661__auto__,G__66722,G__66723,G__66724,G__66692,G__66692__$1,loc,class_name,simple_class,cause_type,format,map__66679,map__66679__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__66727_66959;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__66726_66958;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__66722,G__66723,G__66724,G__66725) : format.call(null,G__66722,G__66723,G__66724,G__66725));
} else {
var G__66733 = "Execution error%s at %s(%s).\n%s\n";
var G__66734 = cause_type;
var G__66735 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__66736 = loc;
var G__66737 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__66733,G__66734,G__66735,G__66736,G__66737) : format.call(null,G__66733,G__66734,G__66735,G__66736,G__66737));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66692__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
