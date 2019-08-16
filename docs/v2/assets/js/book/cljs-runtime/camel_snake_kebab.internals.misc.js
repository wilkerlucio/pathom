goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63558 = arguments.length;
var i__4731__auto___63560 = (0);
while(true){
if((i__4731__auto___63560 < len__4730__auto___63558)){
args__4736__auto__.push((arguments[i__4731__auto___63560]));

var G__63561 = (i__4731__auto___63560 + (1));
i__4731__auto___63560 = G__63561;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__63528){
var map__63530 = p__63528;
var map__63530__$1 = (((((!((map__63530 == null))))?(((((map__63530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63530):map__63530);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63530__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__63537 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__63538 = cljs.core.seq(vec__63537);
var first__63539 = cljs.core.first(seq__63538);
var seq__63538__$1 = cljs.core.next(seq__63538);
var first = first__63539;
var rest = seq__63538__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq63516){
var G__63517 = cljs.core.first(seq63516);
var seq63516__$1 = cljs.core.next(seq63516);
var G__63518 = cljs.core.first(seq63516__$1);
var seq63516__$2 = cljs.core.next(seq63516__$1);
var G__63519 = cljs.core.first(seq63516__$2);
var seq63516__$3 = cljs.core.next(seq63516__$2);
var G__63520 = cljs.core.first(seq63516__$3);
var seq63516__$4 = cljs.core.next(seq63516__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63517,G__63518,G__63519,G__63520,seq63516__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__4131__auto__ = (function (){var G__63553 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__63553) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__63553));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
