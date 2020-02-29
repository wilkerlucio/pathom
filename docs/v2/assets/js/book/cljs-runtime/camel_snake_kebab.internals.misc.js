goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63846 = arguments.length;
var i__4731__auto___63847 = (0);
while(true){
if((i__4731__auto___63847 < len__4730__auto___63846)){
args__4736__auto__.push((arguments[i__4731__auto___63847]));

var G__63850 = (i__4731__auto___63847 + (1));
i__4731__auto___63847 = G__63850;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__63825){
var map__63827 = p__63825;
var map__63827__$1 = (((((!((map__63827 == null))))?(((((map__63827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63827):map__63827);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63827__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__63832 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__63833 = cljs.core.seq(vec__63832);
var first__63834 = cljs.core.first(seq__63833);
var seq__63833__$1 = cljs.core.next(seq__63833);
var first = first__63834;
var rest = seq__63833__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq63818){
var G__63819 = cljs.core.first(seq63818);
var seq63818__$1 = cljs.core.next(seq63818);
var G__63820 = cljs.core.first(seq63818__$1);
var seq63818__$2 = cljs.core.next(seq63818__$1);
var G__63821 = cljs.core.first(seq63818__$2);
var seq63818__$3 = cljs.core.next(seq63818__$2);
var G__63822 = cljs.core.first(seq63818__$3);
var seq63818__$4 = cljs.core.next(seq63818__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63819,G__63820,G__63821,G__63822,seq63818__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__4131__auto__ = (function (){var G__63845 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__63845) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__63845));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
