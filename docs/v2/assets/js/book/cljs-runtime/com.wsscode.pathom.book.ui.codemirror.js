goog.provide('com.wsscode.pathom.book.ui.codemirror');
goog.require('cljs.core');
var module$node_modules$codemirror_graphql$mode=shadow.js.require("module$node_modules$codemirror_graphql$mode", {});
goog.require('com.wsscode.pathom.viz.codemirror');
goog.require('fulcro.client.primitives');
com.wsscode.pathom.book.ui.codemirror.prop_call = (function com$wsscode$pathom$book$ui$codemirror$prop_call(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56539 = arguments.length;
var i__4731__auto___56540 = (0);
while(true){
if((i__4731__auto___56540 < len__4730__auto___56539)){
args__4736__auto__.push((arguments[i__4731__auto___56540]));

var G__56541 = (i__4731__auto___56540 + (1));
i__4731__auto___56540 = G__56541;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.book.ui.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.book.ui.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic = (function (comp,name,args){
var temp__5720__auto__ = (function (){var G__56514 = fulcro.client.primitives.props(comp);
return (name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(G__56514) : name.call(null,G__56514));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
return null;
}
});

com.wsscode.pathom.book.ui.codemirror.prop_call.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.book.ui.codemirror.prop_call.cljs$lang$applyTo = (function (seq56511){
var G__56512 = cljs.core.first(seq56511);
var seq56511__$1 = cljs.core.next(seq56511);
var G__56513 = cljs.core.first(seq56511__$1);
var seq56511__$2 = cljs.core.next(seq56511__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56512,G__56513,seq56511__$2);
});

com.wsscode.pathom.book.ui.codemirror.html_props = (function com$wsscode$pathom$book$ui$codemirror$html_props(props){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__56517){
var vec__56521 = p__56517;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56521,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56521,(1),null);
return cljs.core.namespace(k);
}),props)));
});
com.wsscode.pathom.book.ui.codemirror.graphql = (function com$wsscode$pathom$book$ui$codemirror$graphql(props){
var options = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","lineNumbers","com.wsscode.pathom.viz.codemirror/lineNumbers",1787881928),true,new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","mode","com.wsscode.pathom.viz.codemirror/mode",-832300412),"graphql"], null);
var G__56536 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.book.ui.codemirror","options","com.wsscode.pathom.book.ui.codemirror/options",1285599140),((function (options){
return (function (p1__56525_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,p1__56525_SHARP_], 0));
});})(options))
);
return (com.wsscode.pathom.viz.codemirror.editor.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.codemirror.editor.cljs$core$IFn$_invoke$arity$1(G__56536) : com.wsscode.pathom.viz.codemirror.editor.call(null,G__56536));
});
com.wsscode.pathom.book.ui.codemirror.clojure = (function com$wsscode$pathom$book$ui$codemirror$clojure(props){
return com.wsscode.pathom.viz.codemirror.clojure(props);
});

//# sourceMappingURL=com.wsscode.pathom.book.ui.codemirror.js.map
