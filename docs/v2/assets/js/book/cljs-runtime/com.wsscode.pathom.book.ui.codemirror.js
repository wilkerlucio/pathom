goog.provide('com.wsscode.pathom.book.ui.codemirror');
goog.require('cljs.core');
var module$node_modules$codemirror_graphql$mode=shadow.js.require("module$node_modules$codemirror_graphql$mode", {});
goog.require('com.wsscode.pathom.viz.codemirror');
goog.require('fulcro.client.primitives');
com.wsscode.pathom.book.ui.codemirror.prop_call = (function com$wsscode$pathom$book$ui$codemirror$prop_call(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54714 = arguments.length;
var i__4731__auto___54715 = (0);
while(true){
if((i__4731__auto___54715 < len__4730__auto___54714)){
args__4736__auto__.push((arguments[i__4731__auto___54715]));

var G__54716 = (i__4731__auto___54715 + (1));
i__4731__auto___54715 = G__54716;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.book.ui.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.book.ui.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic = (function (comp,name,args){
var temp__5720__auto__ = (function (){var G__54678 = fulcro.client.primitives.props(comp);
return (name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(G__54678) : name.call(null,G__54678));
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
com.wsscode.pathom.book.ui.codemirror.prop_call.cljs$lang$applyTo = (function (seq54671){
var G__54672 = cljs.core.first(seq54671);
var seq54671__$1 = cljs.core.next(seq54671);
var G__54673 = cljs.core.first(seq54671__$1);
var seq54671__$2 = cljs.core.next(seq54671__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54672,G__54673,seq54671__$2);
});

com.wsscode.pathom.book.ui.codemirror.html_props = (function com$wsscode$pathom$book$ui$codemirror$html_props(props){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__54697){
var vec__54698 = p__54697;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54698,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54698,(1),null);
return cljs.core.namespace(k);
}),props)));
});
com.wsscode.pathom.book.ui.codemirror.graphql = (function com$wsscode$pathom$book$ui$codemirror$graphql(props){
var options = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","lineNumbers","com.wsscode.pathom.viz.codemirror/lineNumbers",1787881928),true,new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","mode","com.wsscode.pathom.viz.codemirror/mode",-832300412),"graphql"], null);
var G__54705 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.book.ui.codemirror","options","com.wsscode.pathom.book.ui.codemirror/options",1285599140),((function (options){
return (function (p1__54702_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,p1__54702_SHARP_], 0));
});})(options))
);
return (com.wsscode.pathom.viz.codemirror.editor.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.codemirror.editor.cljs$core$IFn$_invoke$arity$1(G__54705) : com.wsscode.pathom.viz.codemirror.editor.call(null,G__54705));
});
com.wsscode.pathom.book.ui.codemirror.clojure = (function com$wsscode$pathom$book$ui$codemirror$clojure(props){
return com.wsscode.pathom.viz.codemirror.clojure(props);
});

//# sourceMappingURL=com.wsscode.pathom.book.ui.codemirror.js.map
