goog.provide('ghostwheel.threading_macros');
goog.require('cljs.core');
goog.require('ghostwheel.logging');
goog.require('ghostwheel.utils');
ghostwheel.threading_macros.log_threading_header = (function ghostwheel$threading_macros$log_threading_header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___85914 = arguments.length;
var i__4731__auto___85915 = (0);
while(true){
if((i__4731__auto___85915 < len__4730__auto___85914)){
args__4736__auto__.push((arguments[i__4731__auto___85915]));

var G__85918 = (i__4731__auto___85915 + (1));
i__4731__auto___85915 = G__85918;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return ghostwheel.threading_macros.log_threading_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

ghostwheel.threading_macros.log_threading_header.cljs$core$IFn$_invoke$arity$variadic = (function (threading_type,expr,p__85877){
var vec__85878 = p__85877;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85878,(0),null);
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(threading_type)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),(cljs.core.truth_(name)?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null));
});

ghostwheel.threading_macros.log_threading_header.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
ghostwheel.threading_macros.log_threading_header.cljs$lang$applyTo = (function (seq85871){
var G__85873 = cljs.core.first(seq85871);
var seq85871__$1 = cljs.core.next(seq85871);
var G__85874 = cljs.core.first(seq85871__$1);
var seq85871__$2 = cljs.core.next(seq85871__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__85873,G__85874,seq85871__$2);
});

ghostwheel.threading_macros.log_cond_step = (function ghostwheel$threading_macros$log_cond_step(var_args){
var args__4736__auto__ = [];
var len__4730__auto___85923 = arguments.length;
var i__4731__auto___85925 = (0);
while(true){
if((i__4731__auto___85925 < len__4730__auto___85923)){
args__4736__auto__.push((arguments[i__4731__auto___85925]));

var G__85926 = (i__4731__auto___85925 + (1));
i__4731__auto___85925 = G__85926;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return ghostwheel.threading_macros.log_cond_step.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

ghostwheel.threading_macros.log_cond_step.cljs$core$IFn$_invoke$arity$variadic = (function (test,step,data,p__85893){
var vec__85894 = p__85893;
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85894,(0),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("ghostwheel.logging","pr-clog","ghostwheel.logging/pr-clog",-1989385842,null),null,(1),null)),(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(step)].join(''),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,data,null,(1),null)),(new cljs.core.List(null,style,null,(1),null))], 0))));
});

ghostwheel.threading_macros.log_cond_step.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
ghostwheel.threading_macros.log_cond_step.cljs$lang$applyTo = (function (seq85887){
var G__85888 = cljs.core.first(seq85887);
var seq85887__$1 = cljs.core.next(seq85887);
var G__85889 = cljs.core.first(seq85887__$1);
var seq85887__$2 = cljs.core.next(seq85887__$1);
var G__85890 = cljs.core.first(seq85887__$2);
var seq85887__$3 = cljs.core.next(seq85887__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__85888,G__85889,G__85890,seq85887__$3);
});

ghostwheel.threading_macros.log_some_step = (function ghostwheel$threading_macros$log_some_step(some_step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("ghostwheel.logging","pr-clog","ghostwheel.logging/pr-clog",-1989385842,null),null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,some_step)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,some_step,null,(1),null))], 0))));
});

//# sourceMappingURL=ghostwheel.threading_macros.js.map
