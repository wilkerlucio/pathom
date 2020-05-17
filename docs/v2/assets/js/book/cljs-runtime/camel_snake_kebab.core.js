goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73315 = arguments.length;
var i__4731__auto___73317 = (0);
while(true){
if((i__4731__auto___73317 < len__4730__auto___73315)){
args__4736__auto__.push((arguments[i__4731__auto___73317]));

var G__73318 = (i__4731__auto___73317 + (1));
i__4731__auto___73317 = G__73318;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq72340){
var G__72342 = cljs.core.first(seq72340);
var seq72340__$1 = cljs.core.next(seq72340);
var G__72343 = cljs.core.first(seq72340__$1);
var seq72340__$2 = cljs.core.next(seq72340__$1);
var G__72344 = cljs.core.first(seq72340__$2);
var seq72340__$3 = cljs.core.next(seq72340__$2);
var G__72345 = cljs.core.first(seq72340__$3);
var seq72340__$4 = cljs.core.next(seq72340__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72342,G__72343,G__72344,G__72345,seq72340__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73326 = arguments.length;
var i__4731__auto___73327 = (0);
while(true){
if((i__4731__auto___73327 < len__4730__auto___73326)){
args__4736__auto__.push((arguments[i__4731__auto___73327]));

var G__73328 = (i__4731__auto___73327 + (1));
i__4731__auto___73327 = G__73328;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__72256__auto__,rest__72257__auto__){
var convert_case__72258__auto__ = (function (p1__72255__72259__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__72255__72259__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72257__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__72256__auto__,convert_case__72258__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq72432){
var G__72433 = cljs.core.first(seq72432);
var seq72432__$1 = cljs.core.next(seq72432);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72433,seq72432__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73333 = arguments.length;
var i__4731__auto___73334 = (0);
while(true){
if((i__4731__auto___73334 < len__4730__auto___73333)){
args__4736__auto__.push((arguments[i__4731__auto___73334]));

var G__73335 = (i__4731__auto___73334 + (1));
i__4731__auto___73334 = G__73335;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__72271__auto__,rest__72272__auto__){
if((!((s__72271__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__72271__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__72271__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72272__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq72509){
var G__72510 = cljs.core.first(seq72509);
var seq72509__$1 = cljs.core.next(seq72509);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72510,seq72509__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73342 = arguments.length;
var i__4731__auto___73343 = (0);
while(true){
if((i__4731__auto___73343 < len__4730__auto___73342)){
args__4736__auto__.push((arguments[i__4731__auto___73343]));

var G__73344 = (i__4731__auto___73343 + (1));
i__4731__auto___73343 = G__73344;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__72271__auto__,rest__72272__auto__){
if((!((s__72271__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__72271__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__72271__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72272__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq72599){
var G__72602 = cljs.core.first(seq72599);
var seq72599__$1 = cljs.core.next(seq72599);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72602,seq72599__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73350 = arguments.length;
var i__4731__auto___73352 = (0);
while(true){
if((i__4731__auto___73352 < len__4730__auto___73350)){
args__4736__auto__.push((arguments[i__4731__auto___73352]));

var G__73355 = (i__4731__auto___73352 + (1));
i__4731__auto___73352 = G__73355;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__72271__auto__,rest__72272__auto__){
if((!((s__72271__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__72271__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__72271__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72272__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq72669){
var G__72672 = cljs.core.first(seq72669);
var seq72669__$1 = cljs.core.next(seq72669);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72672,seq72669__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73361 = arguments.length;
var i__4731__auto___73362 = (0);
while(true){
if((i__4731__auto___73362 < len__4730__auto___73361)){
args__4736__auto__.push((arguments[i__4731__auto___73362]));

var G__73364 = (i__4731__auto___73362 + (1));
i__4731__auto___73362 = G__73364;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__72256__auto__,rest__72257__auto__){
var convert_case__72258__auto__ = (function (p1__72255__72259__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__72255__72259__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72257__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__72256__auto__,convert_case__72258__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq72774){
var G__72775 = cljs.core.first(seq72774);
var seq72774__$1 = cljs.core.next(seq72774);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72775,seq72774__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73371 = arguments.length;
var i__4731__auto___73373 = (0);
while(true){
if((i__4731__auto___73373 < len__4730__auto___73371)){
args__4736__auto__.push((arguments[i__4731__auto___73373]));

var G__73374 = (i__4731__auto___73373 + (1));
i__4731__auto___73373 = G__73374;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__72271__auto__,rest__72272__auto__){
if((!((s__72271__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__72271__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__72271__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72272__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq72875){
var G__72878 = cljs.core.first(seq72875);
var seq72875__$1 = cljs.core.next(seq72875);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72878,seq72875__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73383 = arguments.length;
var i__4731__auto___73384 = (0);
while(true){
if((i__4731__auto___73384 < len__4730__auto___73383)){
args__4736__auto__.push((arguments[i__4731__auto___73384]));

var G__73386 = (i__4731__auto___73384 + (1));
i__4731__auto___73384 = G__73386;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__72271__auto__,rest__72272__auto__){
if((!((s__72271__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__72271__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__72271__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72272__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq72899){
var G__72900 = cljs.core.first(seq72899);
var seq72899__$1 = cljs.core.next(seq72899);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72900,seq72899__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73395 = arguments.length;
var i__4731__auto___73397 = (0);
while(true){
if((i__4731__auto___73397 < len__4730__auto___73395)){
args__4736__auto__.push((arguments[i__4731__auto___73397]));

var G__73398 = (i__4731__auto___73397 + (1));
i__4731__auto___73397 = G__73398;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__72271__auto__,rest__72272__auto__){
if((!((s__72271__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__72271__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__72271__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72272__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq72915){
var G__72916 = cljs.core.first(seq72915);
var seq72915__$1 = cljs.core.next(seq72915);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72916,seq72915__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73407 = arguments.length;
var i__4731__auto___73408 = (0);
while(true){
if((i__4731__auto___73408 < len__4730__auto___73407)){
args__4736__auto__.push((arguments[i__4731__auto___73408]));

var G__73410 = (i__4731__auto___73408 + (1));
i__4731__auto___73408 = G__73410;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__72256__auto__,rest__72257__auto__){
var convert_case__72258__auto__ = (function (p1__72255__72259__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__72255__72259__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72257__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__72256__auto__,convert_case__72258__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq72943){
var G__72944 = cljs.core.first(seq72943);
var seq72943__$1 = cljs.core.next(seq72943);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72944,seq72943__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73418 = arguments.length;
var i__4731__auto___73419 = (0);
while(true){
if((i__4731__auto___73419 < len__4730__auto___73418)){
args__4736__auto__.push((arguments[i__4731__auto___73419]));

var G__73420 = (i__4731__auto___73419 + (1));
i__4731__auto___73419 = G__73420;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__72271__auto__,rest__72272__auto__){
if((!((s__72271__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__72271__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__72271__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72272__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq72964){
var G__72965 = cljs.core.first(seq72964);
var seq72964__$1 = cljs.core.next(seq72964);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72965,seq72964__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73427 = arguments.length;
var i__4731__auto___73428 = (0);
while(true){
if((i__4731__auto___73428 < len__4730__auto___73427)){
args__4736__auto__.push((arguments[i__4731__auto___73428]));

var G__73429 = (i__4731__auto___73428 + (1));
i__4731__auto___73428 = G__73429;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__72271__auto__,rest__72272__auto__){
if((!((s__72271__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__72271__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__72271__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72272__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq72978){
var G__72979 = cljs.core.first(seq72978);
var seq72978__$1 = cljs.core.next(seq72978);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72979,seq72978__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73434 = arguments.length;
var i__4731__auto___73435 = (0);
while(true){
if((i__4731__auto___73435 < len__4730__auto___73434)){
args__4736__auto__.push((arguments[i__4731__auto___73435]));

var G__73437 = (i__4731__auto___73435 + (1));
i__4731__auto___73435 = G__73437;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__72271__auto__,rest__72272__auto__){
if((!((s__72271__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__72271__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__72271__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72272__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq72998){
var G__72999 = cljs.core.first(seq72998);
var seq72998__$1 = cljs.core.next(seq72998);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72999,seq72998__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73447 = arguments.length;
var i__4731__auto___73448 = (0);
while(true){
if((i__4731__auto___73448 < len__4730__auto___73447)){
args__4736__auto__.push((arguments[i__4731__auto___73448]));

var G__73449 = (i__4731__auto___73448 + (1));
i__4731__auto___73448 = G__73449;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__72256__auto__,rest__72257__auto__){
var convert_case__72258__auto__ = (function (p1__72255__72259__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__72255__72259__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72257__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__72256__auto__,convert_case__72258__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq73039){
var G__73040 = cljs.core.first(seq73039);
var seq73039__$1 = cljs.core.next(seq73039);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73040,seq73039__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73460 = arguments.length;
var i__4731__auto___73461 = (0);
while(true){
if((i__4731__auto___73461 < len__4730__auto___73460)){
args__4736__auto__.push((arguments[i__4731__auto___73461]));

var G__73462 = (i__4731__auto___73461 + (1));
i__4731__auto___73461 = G__73462;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__72271__auto__,rest__72272__auto__){
if((!((s__72271__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__72271__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__72271__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72272__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq73060){
var G__73061 = cljs.core.first(seq73060);
var seq73060__$1 = cljs.core.next(seq73060);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73061,seq73060__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73479 = arguments.length;
var i__4731__auto___73481 = (0);
while(true){
if((i__4731__auto___73481 < len__4730__auto___73479)){
args__4736__auto__.push((arguments[i__4731__auto___73481]));

var G__73486 = (i__4731__auto___73481 + (1));
i__4731__auto___73481 = G__73486;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__72271__auto__,rest__72272__auto__){
if((!((s__72271__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__72271__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__72271__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72272__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq73085){
var G__73086 = cljs.core.first(seq73085);
var seq73085__$1 = cljs.core.next(seq73085);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73086,seq73085__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73501 = arguments.length;
var i__4731__auto___73502 = (0);
while(true){
if((i__4731__auto___73502 < len__4730__auto___73501)){
args__4736__auto__.push((arguments[i__4731__auto___73502]));

var G__73503 = (i__4731__auto___73502 + (1));
i__4731__auto___73502 = G__73503;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__72271__auto__,rest__72272__auto__){
if((!((s__72271__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__72271__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__72271__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72272__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq73102){
var G__73103 = cljs.core.first(seq73102);
var seq73102__$1 = cljs.core.next(seq73102);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73103,seq73102__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73511 = arguments.length;
var i__4731__auto___73513 = (0);
while(true){
if((i__4731__auto___73513 < len__4730__auto___73511)){
args__4736__auto__.push((arguments[i__4731__auto___73513]));

var G__73515 = (i__4731__auto___73513 + (1));
i__4731__auto___73513 = G__73515;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__72256__auto__,rest__72257__auto__){
var convert_case__72258__auto__ = (function (p1__72255__72259__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__72255__72259__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72257__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__72256__auto__,convert_case__72258__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq73113){
var G__73114 = cljs.core.first(seq73113);
var seq73113__$1 = cljs.core.next(seq73113);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73114,seq73113__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73518 = arguments.length;
var i__4731__auto___73519 = (0);
while(true){
if((i__4731__auto___73519 < len__4730__auto___73518)){
args__4736__auto__.push((arguments[i__4731__auto___73519]));

var G__73524 = (i__4731__auto___73519 + (1));
i__4731__auto___73519 = G__73524;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__72271__auto__,rest__72272__auto__){
if((!((s__72271__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__72271__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__72271__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72272__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq73136){
var G__73137 = cljs.core.first(seq73136);
var seq73136__$1 = cljs.core.next(seq73136);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73137,seq73136__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73530 = arguments.length;
var i__4731__auto___73531 = (0);
while(true){
if((i__4731__auto___73531 < len__4730__auto___73530)){
args__4736__auto__.push((arguments[i__4731__auto___73531]));

var G__73533 = (i__4731__auto___73531 + (1));
i__4731__auto___73531 = G__73533;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__72271__auto__,rest__72272__auto__){
if((!((s__72271__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__72271__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__72271__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72272__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq73145){
var G__73146 = cljs.core.first(seq73145);
var seq73145__$1 = cljs.core.next(seq73145);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73146,seq73145__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73541 = arguments.length;
var i__4731__auto___73542 = (0);
while(true){
if((i__4731__auto___73542 < len__4730__auto___73541)){
args__4736__auto__.push((arguments[i__4731__auto___73542]));

var G__73551 = (i__4731__auto___73542 + (1));
i__4731__auto___73542 = G__73551;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__72271__auto__,rest__72272__auto__){
if((!((s__72271__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__72271__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__72271__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72272__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq73166){
var G__73168 = cljs.core.first(seq73166);
var seq73166__$1 = cljs.core.next(seq73166);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73168,seq73166__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73573 = arguments.length;
var i__4731__auto___73574 = (0);
while(true){
if((i__4731__auto___73574 < len__4730__auto___73573)){
args__4736__auto__.push((arguments[i__4731__auto___73574]));

var G__73575 = (i__4731__auto___73574 + (1));
i__4731__auto___73574 = G__73575;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__72256__auto__,rest__72257__auto__){
var convert_case__72258__auto__ = (function (p1__72255__72259__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__72255__72259__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72257__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__72256__auto__,convert_case__72258__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq73185){
var G__73186 = cljs.core.first(seq73185);
var seq73185__$1 = cljs.core.next(seq73185);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73186,seq73185__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73580 = arguments.length;
var i__4731__auto___73582 = (0);
while(true){
if((i__4731__auto___73582 < len__4730__auto___73580)){
args__4736__auto__.push((arguments[i__4731__auto___73582]));

var G__73583 = (i__4731__auto___73582 + (1));
i__4731__auto___73582 = G__73583;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__72271__auto__,rest__72272__auto__){
if((!((s__72271__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__72271__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__72271__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72272__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq73201){
var G__73202 = cljs.core.first(seq73201);
var seq73201__$1 = cljs.core.next(seq73201);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73202,seq73201__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73588 = arguments.length;
var i__4731__auto___73590 = (0);
while(true){
if((i__4731__auto___73590 < len__4730__auto___73588)){
args__4736__auto__.push((arguments[i__4731__auto___73590]));

var G__73591 = (i__4731__auto___73590 + (1));
i__4731__auto___73590 = G__73591;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__72271__auto__,rest__72272__auto__){
if((!((s__72271__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__72271__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__72271__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72272__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq73218){
var G__73219 = cljs.core.first(seq73218);
var seq73218__$1 = cljs.core.next(seq73218);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73219,seq73218__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73602 = arguments.length;
var i__4731__auto___73603 = (0);
while(true){
if((i__4731__auto___73603 < len__4730__auto___73602)){
args__4736__auto__.push((arguments[i__4731__auto___73603]));

var G__73604 = (i__4731__auto___73603 + (1));
i__4731__auto___73603 = G__73604;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__72271__auto__,rest__72272__auto__){
if((!((s__72271__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__72271__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__72271__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72272__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq73230){
var G__73231 = cljs.core.first(seq73230);
var seq73230__$1 = cljs.core.next(seq73230);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73231,seq73230__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73614 = arguments.length;
var i__4731__auto___73615 = (0);
while(true){
if((i__4731__auto___73615 < len__4730__auto___73614)){
args__4736__auto__.push((arguments[i__4731__auto___73615]));

var G__73617 = (i__4731__auto___73615 + (1));
i__4731__auto___73615 = G__73617;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__72256__auto__,rest__72257__auto__){
var convert_case__72258__auto__ = (function (p1__72255__72259__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__72255__72259__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72257__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__72256__auto__,convert_case__72258__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq73249){
var G__73250 = cljs.core.first(seq73249);
var seq73249__$1 = cljs.core.next(seq73249);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73250,seq73249__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73625 = arguments.length;
var i__4731__auto___73626 = (0);
while(true){
if((i__4731__auto___73626 < len__4730__auto___73625)){
args__4736__auto__.push((arguments[i__4731__auto___73626]));

var G__73627 = (i__4731__auto___73626 + (1));
i__4731__auto___73626 = G__73627;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__72271__auto__,rest__72272__auto__){
if((!((s__72271__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__72271__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__72271__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72272__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq73262){
var G__73263 = cljs.core.first(seq73262);
var seq73262__$1 = cljs.core.next(seq73262);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73263,seq73262__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73631 = arguments.length;
var i__4731__auto___73632 = (0);
while(true){
if((i__4731__auto___73632 < len__4730__auto___73631)){
args__4736__auto__.push((arguments[i__4731__auto___73632]));

var G__73633 = (i__4731__auto___73632 + (1));
i__4731__auto___73632 = G__73633;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__72271__auto__,rest__72272__auto__){
if((!((s__72271__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__72271__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__72271__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72272__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq73276){
var G__73277 = cljs.core.first(seq73276);
var seq73276__$1 = cljs.core.next(seq73276);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73277,seq73276__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73639 = arguments.length;
var i__4731__auto___73641 = (0);
while(true){
if((i__4731__auto___73641 < len__4730__auto___73639)){
args__4736__auto__.push((arguments[i__4731__auto___73641]));

var G__73643 = (i__4731__auto___73641 + (1));
i__4731__auto___73641 = G__73643;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__72271__auto__,rest__72272__auto__){
if((!((s__72271__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__72271__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__72271__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__72272__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq73295){
var G__73296 = cljs.core.first(seq73295);
var seq73295__$1 = cljs.core.next(seq73295);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73296,seq73295__$1);
});


//# sourceMappingURL=camel_snake_kebab.core.js.map
