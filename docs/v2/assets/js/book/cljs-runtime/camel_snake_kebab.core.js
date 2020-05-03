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
var len__4730__auto___65538 = arguments.length;
var i__4731__auto___65539 = (0);
while(true){
if((i__4731__auto___65539 < len__4730__auto___65538)){
args__4736__auto__.push((arguments[i__4731__auto___65539]));

var G__65546 = (i__4731__auto___65539 + (1));
i__4731__auto___65539 = G__65546;
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
camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq64480){
var G__64481 = cljs.core.first(seq64480);
var seq64480__$1 = cljs.core.next(seq64480);
var G__64482 = cljs.core.first(seq64480__$1);
var seq64480__$2 = cljs.core.next(seq64480__$1);
var G__64483 = cljs.core.first(seq64480__$2);
var seq64480__$3 = cljs.core.next(seq64480__$2);
var G__64484 = cljs.core.first(seq64480__$3);
var seq64480__$4 = cljs.core.next(seq64480__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64481,G__64482,G__64483,G__64484,seq64480__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65581 = arguments.length;
var i__4731__auto___65583 = (0);
while(true){
if((i__4731__auto___65583 < len__4730__auto___65581)){
args__4736__auto__.push((arguments[i__4731__auto___65583]));

var G__65588 = (i__4731__auto___65583 + (1));
i__4731__auto___65583 = G__65588;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__64402__auto__,rest__64403__auto__){
var convert_case__64404__auto__ = (function (p1__64401__64405__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__64401__64405__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64403__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__64402__auto__,convert_case__64404__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq64521){
var G__64522 = cljs.core.first(seq64521);
var seq64521__$1 = cljs.core.next(seq64521);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64522,seq64521__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65614 = arguments.length;
var i__4731__auto___65616 = (0);
while(true){
if((i__4731__auto___65616 < len__4730__auto___65614)){
args__4736__auto__.push((arguments[i__4731__auto___65616]));

var G__65622 = (i__4731__auto___65616 + (1));
i__4731__auto___65616 = G__65622;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__64417__auto__,rest__64418__auto__){
if((!((s__64417__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64417__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__64417__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64418__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq64586){
var G__64589 = cljs.core.first(seq64586);
var seq64586__$1 = cljs.core.next(seq64586);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64589,seq64586__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65646 = arguments.length;
var i__4731__auto___65648 = (0);
while(true){
if((i__4731__auto___65648 < len__4730__auto___65646)){
args__4736__auto__.push((arguments[i__4731__auto___65648]));

var G__65656 = (i__4731__auto___65648 + (1));
i__4731__auto___65648 = G__65656;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__64417__auto__,rest__64418__auto__){
if((!((s__64417__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64417__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__64417__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64418__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq64674){
var G__64675 = cljs.core.first(seq64674);
var seq64674__$1 = cljs.core.next(seq64674);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64675,seq64674__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65683 = arguments.length;
var i__4731__auto___65686 = (0);
while(true){
if((i__4731__auto___65686 < len__4730__auto___65683)){
args__4736__auto__.push((arguments[i__4731__auto___65686]));

var G__65689 = (i__4731__auto___65686 + (1));
i__4731__auto___65686 = G__65689;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__64417__auto__,rest__64418__auto__){
if((!((s__64417__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64417__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__64417__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64418__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq64744){
var G__64745 = cljs.core.first(seq64744);
var seq64744__$1 = cljs.core.next(seq64744);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64745,seq64744__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65718 = arguments.length;
var i__4731__auto___65719 = (0);
while(true){
if((i__4731__auto___65719 < len__4730__auto___65718)){
args__4736__auto__.push((arguments[i__4731__auto___65719]));

var G__65720 = (i__4731__auto___65719 + (1));
i__4731__auto___65719 = G__65720;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__64402__auto__,rest__64403__auto__){
var convert_case__64404__auto__ = (function (p1__64401__64405__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__64401__64405__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64403__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__64402__auto__,convert_case__64404__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq64812){
var G__64816 = cljs.core.first(seq64812);
var seq64812__$1 = cljs.core.next(seq64812);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64816,seq64812__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65725 = arguments.length;
var i__4731__auto___65726 = (0);
while(true){
if((i__4731__auto___65726 < len__4730__auto___65725)){
args__4736__auto__.push((arguments[i__4731__auto___65726]));

var G__65728 = (i__4731__auto___65726 + (1));
i__4731__auto___65726 = G__65728;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__64417__auto__,rest__64418__auto__){
if((!((s__64417__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64417__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__64417__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64418__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq64869){
var G__64870 = cljs.core.first(seq64869);
var seq64869__$1 = cljs.core.next(seq64869);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64870,seq64869__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65735 = arguments.length;
var i__4731__auto___65736 = (0);
while(true){
if((i__4731__auto___65736 < len__4730__auto___65735)){
args__4736__auto__.push((arguments[i__4731__auto___65736]));

var G__65737 = (i__4731__auto___65736 + (1));
i__4731__auto___65736 = G__65737;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__64417__auto__,rest__64418__auto__){
if((!((s__64417__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64417__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__64417__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64418__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq64898){
var G__64899 = cljs.core.first(seq64898);
var seq64898__$1 = cljs.core.next(seq64898);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64899,seq64898__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65744 = arguments.length;
var i__4731__auto___65745 = (0);
while(true){
if((i__4731__auto___65745 < len__4730__auto___65744)){
args__4736__auto__.push((arguments[i__4731__auto___65745]));

var G__65747 = (i__4731__auto___65745 + (1));
i__4731__auto___65745 = G__65747;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__64417__auto__,rest__64418__auto__){
if((!((s__64417__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64417__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__64417__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64418__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq64931){
var G__64932 = cljs.core.first(seq64931);
var seq64931__$1 = cljs.core.next(seq64931);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64932,seq64931__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65752 = arguments.length;
var i__4731__auto___65754 = (0);
while(true){
if((i__4731__auto___65754 < len__4730__auto___65752)){
args__4736__auto__.push((arguments[i__4731__auto___65754]));

var G__65755 = (i__4731__auto___65754 + (1));
i__4731__auto___65754 = G__65755;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__64402__auto__,rest__64403__auto__){
var convert_case__64404__auto__ = (function (p1__64401__64405__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__64401__64405__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64403__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__64402__auto__,convert_case__64404__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq64947){
var G__64948 = cljs.core.first(seq64947);
var seq64947__$1 = cljs.core.next(seq64947);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64948,seq64947__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65762 = arguments.length;
var i__4731__auto___65763 = (0);
while(true){
if((i__4731__auto___65763 < len__4730__auto___65762)){
args__4736__auto__.push((arguments[i__4731__auto___65763]));

var G__65764 = (i__4731__auto___65763 + (1));
i__4731__auto___65763 = G__65764;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__64417__auto__,rest__64418__auto__){
if((!((s__64417__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64417__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__64417__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64418__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq64974){
var G__64975 = cljs.core.first(seq64974);
var seq64974__$1 = cljs.core.next(seq64974);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64975,seq64974__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65772 = arguments.length;
var i__4731__auto___65773 = (0);
while(true){
if((i__4731__auto___65773 < len__4730__auto___65772)){
args__4736__auto__.push((arguments[i__4731__auto___65773]));

var G__65776 = (i__4731__auto___65773 + (1));
i__4731__auto___65773 = G__65776;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__64417__auto__,rest__64418__auto__){
if((!((s__64417__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64417__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__64417__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64418__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq64991){
var G__64992 = cljs.core.first(seq64991);
var seq64991__$1 = cljs.core.next(seq64991);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64992,seq64991__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65786 = arguments.length;
var i__4731__auto___65788 = (0);
while(true){
if((i__4731__auto___65788 < len__4730__auto___65786)){
args__4736__auto__.push((arguments[i__4731__auto___65788]));

var G__65790 = (i__4731__auto___65788 + (1));
i__4731__auto___65788 = G__65790;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__64417__auto__,rest__64418__auto__){
if((!((s__64417__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64417__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__64417__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64418__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq65014){
var G__65015 = cljs.core.first(seq65014);
var seq65014__$1 = cljs.core.next(seq65014);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65015,seq65014__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65802 = arguments.length;
var i__4731__auto___65803 = (0);
while(true){
if((i__4731__auto___65803 < len__4730__auto___65802)){
args__4736__auto__.push((arguments[i__4731__auto___65803]));

var G__65804 = (i__4731__auto___65803 + (1));
i__4731__auto___65803 = G__65804;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__64402__auto__,rest__64403__auto__){
var convert_case__64404__auto__ = (function (p1__64401__64405__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__64401__64405__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64403__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__64402__auto__,convert_case__64404__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq65045){
var G__65046 = cljs.core.first(seq65045);
var seq65045__$1 = cljs.core.next(seq65045);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65046,seq65045__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65809 = arguments.length;
var i__4731__auto___65810 = (0);
while(true){
if((i__4731__auto___65810 < len__4730__auto___65809)){
args__4736__auto__.push((arguments[i__4731__auto___65810]));

var G__65811 = (i__4731__auto___65810 + (1));
i__4731__auto___65810 = G__65811;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__64417__auto__,rest__64418__auto__){
if((!((s__64417__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64417__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__64417__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64418__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq65060){
var G__65062 = cljs.core.first(seq65060);
var seq65060__$1 = cljs.core.next(seq65060);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65062,seq65060__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65818 = arguments.length;
var i__4731__auto___65820 = (0);
while(true){
if((i__4731__auto___65820 < len__4730__auto___65818)){
args__4736__auto__.push((arguments[i__4731__auto___65820]));

var G__65822 = (i__4731__auto___65820 + (1));
i__4731__auto___65820 = G__65822;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__64417__auto__,rest__64418__auto__){
if((!((s__64417__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64417__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__64417__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64418__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq65077){
var G__65078 = cljs.core.first(seq65077);
var seq65077__$1 = cljs.core.next(seq65077);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65078,seq65077__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65827 = arguments.length;
var i__4731__auto___65829 = (0);
while(true){
if((i__4731__auto___65829 < len__4730__auto___65827)){
args__4736__auto__.push((arguments[i__4731__auto___65829]));

var G__65831 = (i__4731__auto___65829 + (1));
i__4731__auto___65829 = G__65831;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__64417__auto__,rest__64418__auto__){
if((!((s__64417__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64417__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__64417__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64418__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq65092){
var G__65093 = cljs.core.first(seq65092);
var seq65092__$1 = cljs.core.next(seq65092);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65093,seq65092__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65842 = arguments.length;
var i__4731__auto___65843 = (0);
while(true){
if((i__4731__auto___65843 < len__4730__auto___65842)){
args__4736__auto__.push((arguments[i__4731__auto___65843]));

var G__65845 = (i__4731__auto___65843 + (1));
i__4731__auto___65843 = G__65845;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__64402__auto__,rest__64403__auto__){
var convert_case__64404__auto__ = (function (p1__64401__64405__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__64401__64405__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64403__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__64402__auto__,convert_case__64404__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq65112){
var G__65113 = cljs.core.first(seq65112);
var seq65112__$1 = cljs.core.next(seq65112);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65113,seq65112__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65855 = arguments.length;
var i__4731__auto___65856 = (0);
while(true){
if((i__4731__auto___65856 < len__4730__auto___65855)){
args__4736__auto__.push((arguments[i__4731__auto___65856]));

var G__65857 = (i__4731__auto___65856 + (1));
i__4731__auto___65856 = G__65857;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__64417__auto__,rest__64418__auto__){
if((!((s__64417__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64417__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__64417__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64418__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq65124){
var G__65125 = cljs.core.first(seq65124);
var seq65124__$1 = cljs.core.next(seq65124);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65125,seq65124__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65867 = arguments.length;
var i__4731__auto___65868 = (0);
while(true){
if((i__4731__auto___65868 < len__4730__auto___65867)){
args__4736__auto__.push((arguments[i__4731__auto___65868]));

var G__65870 = (i__4731__auto___65868 + (1));
i__4731__auto___65868 = G__65870;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__64417__auto__,rest__64418__auto__){
if((!((s__64417__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64417__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__64417__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64418__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq65140){
var G__65141 = cljs.core.first(seq65140);
var seq65140__$1 = cljs.core.next(seq65140);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65141,seq65140__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65883 = arguments.length;
var i__4731__auto___65885 = (0);
while(true){
if((i__4731__auto___65885 < len__4730__auto___65883)){
args__4736__auto__.push((arguments[i__4731__auto___65885]));

var G__65887 = (i__4731__auto___65885 + (1));
i__4731__auto___65885 = G__65887;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__64417__auto__,rest__64418__auto__){
if((!((s__64417__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64417__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__64417__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64418__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq65151){
var G__65152 = cljs.core.first(seq65151);
var seq65151__$1 = cljs.core.next(seq65151);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65152,seq65151__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65896 = arguments.length;
var i__4731__auto___65897 = (0);
while(true){
if((i__4731__auto___65897 < len__4730__auto___65896)){
args__4736__auto__.push((arguments[i__4731__auto___65897]));

var G__65899 = (i__4731__auto___65897 + (1));
i__4731__auto___65897 = G__65899;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__64402__auto__,rest__64403__auto__){
var convert_case__64404__auto__ = (function (p1__64401__64405__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__64401__64405__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64403__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__64402__auto__,convert_case__64404__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq65166){
var G__65167 = cljs.core.first(seq65166);
var seq65166__$1 = cljs.core.next(seq65166);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65167,seq65166__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65909 = arguments.length;
var i__4731__auto___65910 = (0);
while(true){
if((i__4731__auto___65910 < len__4730__auto___65909)){
args__4736__auto__.push((arguments[i__4731__auto___65910]));

var G__65911 = (i__4731__auto___65910 + (1));
i__4731__auto___65910 = G__65911;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__64417__auto__,rest__64418__auto__){
if((!((s__64417__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64417__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__64417__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64418__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq65178){
var G__65179 = cljs.core.first(seq65178);
var seq65178__$1 = cljs.core.next(seq65178);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65179,seq65178__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65917 = arguments.length;
var i__4731__auto___65918 = (0);
while(true){
if((i__4731__auto___65918 < len__4730__auto___65917)){
args__4736__auto__.push((arguments[i__4731__auto___65918]));

var G__65919 = (i__4731__auto___65918 + (1));
i__4731__auto___65918 = G__65919;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__64417__auto__,rest__64418__auto__){
if((!((s__64417__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64417__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__64417__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64418__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq65188){
var G__65189 = cljs.core.first(seq65188);
var seq65188__$1 = cljs.core.next(seq65188);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65189,seq65188__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65925 = arguments.length;
var i__4731__auto___65926 = (0);
while(true){
if((i__4731__auto___65926 < len__4730__auto___65925)){
args__4736__auto__.push((arguments[i__4731__auto___65926]));

var G__65929 = (i__4731__auto___65926 + (1));
i__4731__auto___65926 = G__65929;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__64417__auto__,rest__64418__auto__){
if((!((s__64417__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64417__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__64417__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64418__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq65198){
var G__65199 = cljs.core.first(seq65198);
var seq65198__$1 = cljs.core.next(seq65198);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65199,seq65198__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65935 = arguments.length;
var i__4731__auto___65936 = (0);
while(true){
if((i__4731__auto___65936 < len__4730__auto___65935)){
args__4736__auto__.push((arguments[i__4731__auto___65936]));

var G__65937 = (i__4731__auto___65936 + (1));
i__4731__auto___65936 = G__65937;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__64402__auto__,rest__64403__auto__){
var convert_case__64404__auto__ = (function (p1__64401__64405__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__64401__64405__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64403__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__64402__auto__,convert_case__64404__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq65215){
var G__65217 = cljs.core.first(seq65215);
var seq65215__$1 = cljs.core.next(seq65215);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65217,seq65215__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65942 = arguments.length;
var i__4731__auto___65943 = (0);
while(true){
if((i__4731__auto___65943 < len__4730__auto___65942)){
args__4736__auto__.push((arguments[i__4731__auto___65943]));

var G__65944 = (i__4731__auto___65943 + (1));
i__4731__auto___65943 = G__65944;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__64417__auto__,rest__64418__auto__){
if((!((s__64417__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64417__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__64417__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64418__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq65274){
var G__65276 = cljs.core.first(seq65274);
var seq65274__$1 = cljs.core.next(seq65274);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65276,seq65274__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65953 = arguments.length;
var i__4731__auto___65954 = (0);
while(true){
if((i__4731__auto___65954 < len__4730__auto___65953)){
args__4736__auto__.push((arguments[i__4731__auto___65954]));

var G__65956 = (i__4731__auto___65954 + (1));
i__4731__auto___65954 = G__65956;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__64417__auto__,rest__64418__auto__){
if((!((s__64417__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64417__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__64417__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64418__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq65338){
var G__65340 = cljs.core.first(seq65338);
var seq65338__$1 = cljs.core.next(seq65338);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65340,seq65338__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65959 = arguments.length;
var i__4731__auto___65960 = (0);
while(true){
if((i__4731__auto___65960 < len__4730__auto___65959)){
args__4736__auto__.push((arguments[i__4731__auto___65960]));

var G__65961 = (i__4731__auto___65960 + (1));
i__4731__auto___65960 = G__65961;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__64417__auto__,rest__64418__auto__){
if((!((s__64417__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__64417__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__64417__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__64418__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq65394){
var G__65395 = cljs.core.first(seq65394);
var seq65394__$1 = cljs.core.next(seq65394);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65395,seq65394__$1);
});


//# sourceMappingURL=camel_snake_kebab.core.js.map
