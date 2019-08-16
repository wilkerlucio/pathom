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
var len__4730__auto___65215 = arguments.length;
var i__4731__auto___65216 = (0);
while(true){
if((i__4731__auto___65216 < len__4730__auto___65215)){
args__4736__auto__.push((arguments[i__4731__auto___65216]));

var G__65219 = (i__4731__auto___65216 + (1));
i__4731__auto___65216 = G__65219;
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
camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq64374){
var G__64375 = cljs.core.first(seq64374);
var seq64374__$1 = cljs.core.next(seq64374);
var G__64376 = cljs.core.first(seq64374__$1);
var seq64374__$2 = cljs.core.next(seq64374__$1);
var G__64377 = cljs.core.first(seq64374__$2);
var seq64374__$3 = cljs.core.next(seq64374__$2);
var G__64378 = cljs.core.first(seq64374__$3);
var seq64374__$4 = cljs.core.next(seq64374__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64375,G__64376,G__64377,G__64378,seq64374__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65229 = arguments.length;
var i__4731__auto___65230 = (0);
while(true){
if((i__4731__auto___65230 < len__4730__auto___65229)){
args__4736__auto__.push((arguments[i__4731__auto___65230]));

var G__65231 = (i__4731__auto___65230 + (1));
i__4731__auto___65230 = G__65231;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__64169__auto__,rest__64170__auto__){
var convert_case__64171__auto__ = (function (p1__64168__64172__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__64168__64172__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64170__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__64169__auto__,convert_case__64171__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq64417){
var G__64418 = cljs.core.first(seq64417);
var seq64417__$1 = cljs.core.next(seq64417);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64418,seq64417__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65240 = arguments.length;
var i__4731__auto___65241 = (0);
while(true){
if((i__4731__auto___65241 < len__4730__auto___65240)){
args__4736__auto__.push((arguments[i__4731__auto___65241]));

var G__65242 = (i__4731__auto___65241 + (1));
i__4731__auto___65241 = G__65242;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__64231__auto__,rest__64232__auto__){
if((!((s__64231__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64231__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__64231__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64232__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq64439){
var G__64440 = cljs.core.first(seq64439);
var seq64439__$1 = cljs.core.next(seq64439);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64440,seq64439__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65248 = arguments.length;
var i__4731__auto___65249 = (0);
while(true){
if((i__4731__auto___65249 < len__4730__auto___65248)){
args__4736__auto__.push((arguments[i__4731__auto___65249]));

var G__65251 = (i__4731__auto___65249 + (1));
i__4731__auto___65249 = G__65251;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__64231__auto__,rest__64232__auto__){
if((!((s__64231__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64231__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__64231__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64232__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq64475){
var G__64476 = cljs.core.first(seq64475);
var seq64475__$1 = cljs.core.next(seq64475);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64476,seq64475__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65258 = arguments.length;
var i__4731__auto___65260 = (0);
while(true){
if((i__4731__auto___65260 < len__4730__auto___65258)){
args__4736__auto__.push((arguments[i__4731__auto___65260]));

var G__65263 = (i__4731__auto___65260 + (1));
i__4731__auto___65260 = G__65263;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__64231__auto__,rest__64232__auto__){
if((!((s__64231__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64231__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__64231__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64232__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq64491){
var G__64492 = cljs.core.first(seq64491);
var seq64491__$1 = cljs.core.next(seq64491);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64492,seq64491__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65270 = arguments.length;
var i__4731__auto___65272 = (0);
while(true){
if((i__4731__auto___65272 < len__4730__auto___65270)){
args__4736__auto__.push((arguments[i__4731__auto___65272]));

var G__65273 = (i__4731__auto___65272 + (1));
i__4731__auto___65272 = G__65273;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__64169__auto__,rest__64170__auto__){
var convert_case__64171__auto__ = (function (p1__64168__64172__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__64168__64172__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64170__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__64169__auto__,convert_case__64171__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq64502){
var G__64503 = cljs.core.first(seq64502);
var seq64502__$1 = cljs.core.next(seq64502);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64503,seq64502__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65282 = arguments.length;
var i__4731__auto___65283 = (0);
while(true){
if((i__4731__auto___65283 < len__4730__auto___65282)){
args__4736__auto__.push((arguments[i__4731__auto___65283]));

var G__65285 = (i__4731__auto___65283 + (1));
i__4731__auto___65283 = G__65285;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__64231__auto__,rest__64232__auto__){
if((!((s__64231__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64231__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__64231__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64232__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq64519){
var G__64520 = cljs.core.first(seq64519);
var seq64519__$1 = cljs.core.next(seq64519);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64520,seq64519__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65290 = arguments.length;
var i__4731__auto___65291 = (0);
while(true){
if((i__4731__auto___65291 < len__4730__auto___65290)){
args__4736__auto__.push((arguments[i__4731__auto___65291]));

var G__65293 = (i__4731__auto___65291 + (1));
i__4731__auto___65291 = G__65293;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__64231__auto__,rest__64232__auto__){
if((!((s__64231__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64231__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__64231__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64232__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq64528){
var G__64529 = cljs.core.first(seq64528);
var seq64528__$1 = cljs.core.next(seq64528);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64529,seq64528__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65299 = arguments.length;
var i__4731__auto___65300 = (0);
while(true){
if((i__4731__auto___65300 < len__4730__auto___65299)){
args__4736__auto__.push((arguments[i__4731__auto___65300]));

var G__65302 = (i__4731__auto___65300 + (1));
i__4731__auto___65300 = G__65302;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__64231__auto__,rest__64232__auto__){
if((!((s__64231__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64231__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__64231__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64232__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq64568){
var G__64569 = cljs.core.first(seq64568);
var seq64568__$1 = cljs.core.next(seq64568);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64569,seq64568__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65309 = arguments.length;
var i__4731__auto___65310 = (0);
while(true){
if((i__4731__auto___65310 < len__4730__auto___65309)){
args__4736__auto__.push((arguments[i__4731__auto___65310]));

var G__65311 = (i__4731__auto___65310 + (1));
i__4731__auto___65310 = G__65311;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__64169__auto__,rest__64170__auto__){
var convert_case__64171__auto__ = (function (p1__64168__64172__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__64168__64172__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64170__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__64169__auto__,convert_case__64171__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq64595){
var G__64596 = cljs.core.first(seq64595);
var seq64595__$1 = cljs.core.next(seq64595);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64596,seq64595__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65318 = arguments.length;
var i__4731__auto___65320 = (0);
while(true){
if((i__4731__auto___65320 < len__4730__auto___65318)){
args__4736__auto__.push((arguments[i__4731__auto___65320]));

var G__65324 = (i__4731__auto___65320 + (1));
i__4731__auto___65320 = G__65324;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__64231__auto__,rest__64232__auto__){
if((!((s__64231__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64231__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__64231__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64232__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq64623){
var G__64624 = cljs.core.first(seq64623);
var seq64623__$1 = cljs.core.next(seq64623);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64624,seq64623__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65330 = arguments.length;
var i__4731__auto___65331 = (0);
while(true){
if((i__4731__auto___65331 < len__4730__auto___65330)){
args__4736__auto__.push((arguments[i__4731__auto___65331]));

var G__65332 = (i__4731__auto___65331 + (1));
i__4731__auto___65331 = G__65332;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__64231__auto__,rest__64232__auto__){
if((!((s__64231__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64231__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__64231__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64232__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq64641){
var G__64642 = cljs.core.first(seq64641);
var seq64641__$1 = cljs.core.next(seq64641);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64642,seq64641__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65341 = arguments.length;
var i__4731__auto___65342 = (0);
while(true){
if((i__4731__auto___65342 < len__4730__auto___65341)){
args__4736__auto__.push((arguments[i__4731__auto___65342]));

var G__65345 = (i__4731__auto___65342 + (1));
i__4731__auto___65342 = G__65345;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__64231__auto__,rest__64232__auto__){
if((!((s__64231__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64231__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__64231__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64232__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq64656){
var G__64657 = cljs.core.first(seq64656);
var seq64656__$1 = cljs.core.next(seq64656);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64657,seq64656__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65351 = arguments.length;
var i__4731__auto___65352 = (0);
while(true){
if((i__4731__auto___65352 < len__4730__auto___65351)){
args__4736__auto__.push((arguments[i__4731__auto___65352]));

var G__65353 = (i__4731__auto___65352 + (1));
i__4731__auto___65352 = G__65353;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__64169__auto__,rest__64170__auto__){
var convert_case__64171__auto__ = (function (p1__64168__64172__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__64168__64172__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64170__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__64169__auto__,convert_case__64171__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq64671){
var G__64672 = cljs.core.first(seq64671);
var seq64671__$1 = cljs.core.next(seq64671);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64672,seq64671__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65360 = arguments.length;
var i__4731__auto___65361 = (0);
while(true){
if((i__4731__auto___65361 < len__4730__auto___65360)){
args__4736__auto__.push((arguments[i__4731__auto___65361]));

var G__65363 = (i__4731__auto___65361 + (1));
i__4731__auto___65361 = G__65363;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__64231__auto__,rest__64232__auto__){
if((!((s__64231__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64231__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__64231__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64232__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq64685){
var G__64686 = cljs.core.first(seq64685);
var seq64685__$1 = cljs.core.next(seq64685);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64686,seq64685__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65372 = arguments.length;
var i__4731__auto___65373 = (0);
while(true){
if((i__4731__auto___65373 < len__4730__auto___65372)){
args__4736__auto__.push((arguments[i__4731__auto___65373]));

var G__65374 = (i__4731__auto___65373 + (1));
i__4731__auto___65373 = G__65374;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__64231__auto__,rest__64232__auto__){
if((!((s__64231__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64231__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__64231__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64232__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq64696){
var G__64697 = cljs.core.first(seq64696);
var seq64696__$1 = cljs.core.next(seq64696);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64697,seq64696__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65383 = arguments.length;
var i__4731__auto___65384 = (0);
while(true){
if((i__4731__auto___65384 < len__4730__auto___65383)){
args__4736__auto__.push((arguments[i__4731__auto___65384]));

var G__65387 = (i__4731__auto___65384 + (1));
i__4731__auto___65384 = G__65387;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__64231__auto__,rest__64232__auto__){
if((!((s__64231__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64231__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__64231__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64232__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq64708){
var G__64710 = cljs.core.first(seq64708);
var seq64708__$1 = cljs.core.next(seq64708);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64710,seq64708__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65396 = arguments.length;
var i__4731__auto___65397 = (0);
while(true){
if((i__4731__auto___65397 < len__4730__auto___65396)){
args__4736__auto__.push((arguments[i__4731__auto___65397]));

var G__65399 = (i__4731__auto___65397 + (1));
i__4731__auto___65397 = G__65399;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__64169__auto__,rest__64170__auto__){
var convert_case__64171__auto__ = (function (p1__64168__64172__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__64168__64172__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64170__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__64169__auto__,convert_case__64171__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq64718){
var G__64719 = cljs.core.first(seq64718);
var seq64718__$1 = cljs.core.next(seq64718);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64719,seq64718__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65404 = arguments.length;
var i__4731__auto___65405 = (0);
while(true){
if((i__4731__auto___65405 < len__4730__auto___65404)){
args__4736__auto__.push((arguments[i__4731__auto___65405]));

var G__65406 = (i__4731__auto___65405 + (1));
i__4731__auto___65405 = G__65406;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__64231__auto__,rest__64232__auto__){
if((!((s__64231__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64231__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__64231__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64232__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq64728){
var G__64729 = cljs.core.first(seq64728);
var seq64728__$1 = cljs.core.next(seq64728);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64729,seq64728__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65414 = arguments.length;
var i__4731__auto___65415 = (0);
while(true){
if((i__4731__auto___65415 < len__4730__auto___65414)){
args__4736__auto__.push((arguments[i__4731__auto___65415]));

var G__65416 = (i__4731__auto___65415 + (1));
i__4731__auto___65415 = G__65416;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__64231__auto__,rest__64232__auto__){
if((!((s__64231__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64231__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__64231__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64232__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq64774){
var G__64775 = cljs.core.first(seq64774);
var seq64774__$1 = cljs.core.next(seq64774);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64775,seq64774__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65425 = arguments.length;
var i__4731__auto___65426 = (0);
while(true){
if((i__4731__auto___65426 < len__4730__auto___65425)){
args__4736__auto__.push((arguments[i__4731__auto___65426]));

var G__65427 = (i__4731__auto___65426 + (1));
i__4731__auto___65426 = G__65427;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__64231__auto__,rest__64232__auto__){
if((!((s__64231__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64231__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__64231__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64232__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq64840){
var G__64841 = cljs.core.first(seq64840);
var seq64840__$1 = cljs.core.next(seq64840);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64841,seq64840__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65436 = arguments.length;
var i__4731__auto___65437 = (0);
while(true){
if((i__4731__auto___65437 < len__4730__auto___65436)){
args__4736__auto__.push((arguments[i__4731__auto___65437]));

var G__65439 = (i__4731__auto___65437 + (1));
i__4731__auto___65437 = G__65439;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__64169__auto__,rest__64170__auto__){
var convert_case__64171__auto__ = (function (p1__64168__64172__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__64168__64172__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64170__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__64169__auto__,convert_case__64171__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq64907){
var G__64909 = cljs.core.first(seq64907);
var seq64907__$1 = cljs.core.next(seq64907);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64909,seq64907__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65445 = arguments.length;
var i__4731__auto___65446 = (0);
while(true){
if((i__4731__auto___65446 < len__4730__auto___65445)){
args__4736__auto__.push((arguments[i__4731__auto___65446]));

var G__65447 = (i__4731__auto___65446 + (1));
i__4731__auto___65446 = G__65447;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__64231__auto__,rest__64232__auto__){
if((!((s__64231__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64231__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__64231__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64232__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq64994){
var G__64995 = cljs.core.first(seq64994);
var seq64994__$1 = cljs.core.next(seq64994);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64995,seq64994__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65450 = arguments.length;
var i__4731__auto___65451 = (0);
while(true){
if((i__4731__auto___65451 < len__4730__auto___65450)){
args__4736__auto__.push((arguments[i__4731__auto___65451]));

var G__65453 = (i__4731__auto___65451 + (1));
i__4731__auto___65451 = G__65453;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__64231__auto__,rest__64232__auto__){
if((!((s__64231__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64231__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__64231__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64232__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq65044){
var G__65045 = cljs.core.first(seq65044);
var seq65044__$1 = cljs.core.next(seq65044);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65045,seq65044__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65460 = arguments.length;
var i__4731__auto___65461 = (0);
while(true){
if((i__4731__auto___65461 < len__4730__auto___65460)){
args__4736__auto__.push((arguments[i__4731__auto___65461]));

var G__65463 = (i__4731__auto___65461 + (1));
i__4731__auto___65461 = G__65463;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__64231__auto__,rest__64232__auto__){
if((!((s__64231__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64231__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__64231__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64232__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq65101){
var G__65102 = cljs.core.first(seq65101);
var seq65101__$1 = cljs.core.next(seq65101);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65102,seq65101__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65468 = arguments.length;
var i__4731__auto___65469 = (0);
while(true){
if((i__4731__auto___65469 < len__4730__auto___65468)){
args__4736__auto__.push((arguments[i__4731__auto___65469]));

var G__65470 = (i__4731__auto___65469 + (1));
i__4731__auto___65469 = G__65470;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__64169__auto__,rest__64170__auto__){
var convert_case__64171__auto__ = (function (p1__64168__64172__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__64168__64172__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64170__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__64169__auto__,convert_case__64171__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq65185){
var G__65186 = cljs.core.first(seq65185);
var seq65185__$1 = cljs.core.next(seq65185);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65186,seq65185__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65478 = arguments.length;
var i__4731__auto___65479 = (0);
while(true){
if((i__4731__auto___65479 < len__4730__auto___65478)){
args__4736__auto__.push((arguments[i__4731__auto___65479]));

var G__65481 = (i__4731__auto___65479 + (1));
i__4731__auto___65479 = G__65481;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__64231__auto__,rest__64232__auto__){
if((!((s__64231__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64231__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__64231__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64232__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq65194){
var G__65195 = cljs.core.first(seq65194);
var seq65194__$1 = cljs.core.next(seq65194);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65195,seq65194__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65486 = arguments.length;
var i__4731__auto___65487 = (0);
while(true){
if((i__4731__auto___65487 < len__4730__auto___65486)){
args__4736__auto__.push((arguments[i__4731__auto___65487]));

var G__65488 = (i__4731__auto___65487 + (1));
i__4731__auto___65487 = G__65488;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__64231__auto__,rest__64232__auto__){
if((!((s__64231__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64231__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__64231__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64232__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq65200){
var G__65201 = cljs.core.first(seq65200);
var seq65200__$1 = cljs.core.next(seq65200);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65201,seq65200__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65493 = arguments.length;
var i__4731__auto___65494 = (0);
while(true){
if((i__4731__auto___65494 < len__4730__auto___65493)){
args__4736__auto__.push((arguments[i__4731__auto___65494]));

var G__65495 = (i__4731__auto___65494 + (1));
i__4731__auto___65494 = G__65495;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__64231__auto__,rest__64232__auto__){
if((!((s__64231__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64231__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__64231__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64232__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq65210){
var G__65211 = cljs.core.first(seq65210);
var seq65210__$1 = cljs.core.next(seq65210);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65211,seq65210__$1);
});


//# sourceMappingURL=camel_snake_kebab.core.js.map
