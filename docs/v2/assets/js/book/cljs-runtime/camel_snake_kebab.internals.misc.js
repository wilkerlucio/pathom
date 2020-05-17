goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71937 = arguments.length;
var i__4731__auto___71938 = (0);
while(true){
if((i__4731__auto___71938 < len__4730__auto___71937)){
args__4736__auto__.push((arguments[i__4731__auto___71938]));

var G__71939 = (i__4731__auto___71938 + (1));
i__4731__auto___71938 = G__71939;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__71920){
var map__71922 = p__71920;
var map__71922__$1 = (((((!((map__71922 == null))))?(((((map__71922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71922):map__71922);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71922__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__71925 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__71926 = cljs.core.seq(vec__71925);
var first__71927 = cljs.core.first(seq__71926);
var seq__71926__$1 = cljs.core.next(seq__71926);
var first = first__71927;
var rest = seq__71926__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq71910){
var G__71911 = cljs.core.first(seq71910);
var seq71910__$1 = cljs.core.next(seq71910);
var G__71912 = cljs.core.first(seq71910__$1);
var seq71910__$2 = cljs.core.next(seq71910__$1);
var G__71913 = cljs.core.first(seq71910__$2);
var seq71910__$3 = cljs.core.next(seq71910__$2);
var G__71914 = cljs.core.first(seq71910__$3);
var seq71910__$4 = cljs.core.next(seq71910__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71911,G__71912,G__71913,G__71914,seq71910__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__4131__auto__ = (function (){var G__71935 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__71935) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__71935));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
