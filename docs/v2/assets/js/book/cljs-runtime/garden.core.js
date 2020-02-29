goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50646 = arguments.length;
var i__4731__auto___50647 = (0);
while(true){
if((i__4731__auto___50647 < len__4730__auto___50646)){
args__4736__auto__.push((arguments[i__4731__auto___50647]));

var G__50651 = (i__4731__auto___50647 + (1));
i__4731__auto___50647 = G__50651;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.core.css.cljs$lang$applyTo = (function (seq50641){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50641));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50652 = arguments.length;
var i__4731__auto___50653 = (0);
while(true){
if((i__4731__auto___50653 < len__4730__auto___50652)){
args__4736__auto__.push((arguments[i__4731__auto___50653]));

var G__50656 = (i__4731__auto___50653 + (1));
i__4731__auto___50653 = G__50656;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style(maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.core.style.cljs$lang$applyTo = (function (seq50644){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50644));
});


//# sourceMappingURL=garden.core.js.map
