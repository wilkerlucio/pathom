goog.provide('com.wsscode.pathom.viz.ui.context');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.gen.alpha');
goog.require('fulcro.client.primitives');
goog.require('goog.object');
com.wsscode.pathom.viz.ui.context.contains_js_keys = (function com$wsscode$pathom$viz$ui$context$contains_js_keys(obj,keys){
return cljs.core.every_QMARK_((function (p1__48701_SHARP_){
return goog.object.containsKey(obj,p1__48701_SHARP_);
}),keys);
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.ui.context","context","com.wsscode.pathom.viz.ui.context/context",-602480537),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__48702#","p1__48702#",-1688003924,null)], null),cljs.core.list(new cljs.core.Symbol("com.wsscode.pathom.viz.ui.context","contains-js-keys","com.wsscode.pathom.viz.ui.context/contains-js-keys",-1404962250,null),new cljs.core.Symbol(null,"p1__48702#","p1__48702#",-1688003924,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Consumer","Provider"], null))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.gen.alpha","return","cljs.spec.gen.alpha/return",1565518169,null),cljs.core.list(new cljs.core.Symbol("com.wsscode.pathom.viz.ui.context","new-context","com.wsscode.pathom.viz.ui.context/new-context",-1781575965,null))))),cljs.spec.alpha.with_gen((function (p1__48702_SHARP_){
return com.wsscode.pathom.viz.ui.context.contains_js_keys(p1__48702_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Consumer","Provider"], null));
}),(function (){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.viz.ui.context.new_context.cljs$core$IFn$_invoke$arity$0 ? com.wsscode.pathom.viz.ui.context.new_context.cljs$core$IFn$_invoke$arity$0() : com.wsscode.pathom.viz.ui.context.new_context.call(null))], 0));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.ui.context","value","com.wsscode.pathom.viz.ui.context/value",249783257),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
/**
 * Provides interop with a React component that takes a render function as its
 * child.
 * If you pass props in, it applies the equivalent of the #js reader to them.
 * You must convert any nested data structures to a JS obj if desired.
 */
com.wsscode.pathom.viz.ui.context.child_as_fn = (function com$wsscode$pathom$viz$ui$context$child_as_fn(var_args){
var G__48704 = arguments.length;
switch (G__48704) {
case 2:
return com.wsscode.pathom.viz.ui.context.child_as_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom.viz.ui.context.child_as_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.viz.ui.context.child_as_fn.cljs$core$IFn$_invoke$arity$2 = (function (Component,render){
return fulcro.client.primitives.create_element(Component,({"children": (function() { 
var G__48726__delegate = function (v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render,v);
};
var G__48726 = function (var_args){
var v = null;
if (arguments.length > 0) {
var G__48727__i = 0, G__48727__a = new Array(arguments.length -  0);
while (G__48727__i < G__48727__a.length) {G__48727__a[G__48727__i] = arguments[G__48727__i + 0]; ++G__48727__i;}
  v = new cljs.core.IndexedSeq(G__48727__a,0,null);
} 
return G__48726__delegate.call(this,v);};
G__48726.cljs$lang$maxFixedArity = 0;
G__48726.cljs$lang$applyTo = (function (arglist__48728){
var v = cljs.core.seq(arglist__48728);
return G__48726__delegate(v);
});
G__48726.cljs$core$IFn$_invoke$arity$variadic = G__48726__delegate;
return G__48726;
})()
}),cljs.core.PersistentVector.EMPTY);
});

com.wsscode.pathom.viz.ui.context.child_as_fn.cljs$core$IFn$_invoke$arity$3 = (function (Component,props,render){
return fulcro.client.primitives.create_element(Component,cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),(function() { 
var G__48731__delegate = function (v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render,v);
};
var G__48731 = function (var_args){
var v = null;
if (arguments.length > 0) {
var G__48732__i = 0, G__48732__a = new Array(arguments.length -  0);
while (G__48732__i < G__48732__a.length) {G__48732__a[G__48732__i] = arguments[G__48732__i + 0]; ++G__48732__i;}
  v = new cljs.core.IndexedSeq(G__48732__a,0,null);
} 
return G__48731__delegate.call(this,v);};
G__48731.cljs$lang$maxFixedArity = 0;
G__48731.cljs$lang$applyTo = (function (arglist__48734){
var v = cljs.core.seq(arglist__48734);
return G__48731__delegate(v);
});
G__48731.cljs$core$IFn$_invoke$arity$variadic = G__48731__delegate;
return G__48731;
})()
], null),props], 0))),cljs.core.PersistentVector.EMPTY);
});

com.wsscode.pathom.viz.ui.context.child_as_fn.cljs$lang$maxFixedArity = 3;

/**
 * Creates a new React context
 */
com.wsscode.pathom.viz.ui.context.new_context = (function com$wsscode$pathom$viz$ui$context$new_context(var_args){
var G__48706 = arguments.length;
switch (G__48706) {
case 0:
return com.wsscode.pathom.viz.ui.context.new_context.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.wsscode.pathom.viz.ui.context.new_context.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.viz.ui.context.new_context.cljs$core$IFn$_invoke$arity$0 = (function (){
return module$node_modules$react$index.createContext();
});

com.wsscode.pathom.viz.ui.context.new_context.cljs$core$IFn$_invoke$arity$1 = (function (initial_value){
return module$node_modules$react$index.createContext(initial_value);
});

com.wsscode.pathom.viz.ui.context.new_context.cljs$lang$maxFixedArity = 1;

/**
 * A component that serves as a provider for the provided context.
 * (def my-context (create))
 * (defn parent-component []
 *   (provider {:context my-context :value  "initial state"}
 *     (dom/div "children")))
 */
com.wsscode.pathom.viz.ui.context.provider = (function com$wsscode$pathom$viz$ui$context$provider(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48739 = arguments.length;
var i__4731__auto___48740 = (0);
while(true){
if((i__4731__auto___48740 < len__4730__auto___48739)){
args__4736__auto__.push((arguments[i__4731__auto___48740]));

var G__48741 = (i__4731__auto___48740 + (1));
i__4731__auto___48740 = G__48741;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return com.wsscode.pathom.viz.ui.context.provider.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

com.wsscode.pathom.viz.ui.context.provider.cljs$core$IFn$_invoke$arity$variadic = (function (p__48709,children){
var map__48710 = p__48709;
var map__48710__$1 = (((((!((map__48710 == null))))?(((((map__48710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48710):map__48710);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48710__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.context","context","com.wsscode.pathom.viz.ui.context/context",-602480537));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48710__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.context","value","com.wsscode.pathom.viz.ui.context/value",249783257));
return fulcro.client.primitives.create_element(goog.object.get(context,"Provider"),({"value": value}),children);
});

com.wsscode.pathom.viz.ui.context.provider.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
com.wsscode.pathom.viz.ui.context.provider.cljs$lang$applyTo = (function (seq48707){
var G__48708 = cljs.core.first(seq48707);
var seq48707__$1 = cljs.core.next(seq48707);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48708,seq48707__$1);
});

/**
 * A component that serves as a consumer for the provided context.
 * Takes a render function as it's second parameter that will be called with
 * the context value, and should return hiccup syntax.
 * (def my-context (create))
 * (defn my-component []
 *  (consumer {:context my-context}
 *   (fn [context-state]
 *    (dom/div "The state is: " context-state))))
 */
com.wsscode.pathom.viz.ui.context.consumer = (function com$wsscode$pathom$viz$ui$context$consumer(p__48712,render_fn){
var map__48713 = p__48712;
var map__48713__$1 = (((((!((map__48713 == null))))?(((((map__48713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48713):map__48713);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48713__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.context","context","com.wsscode.pathom.viz.ui.context/context",-602480537));
return com.wsscode.pathom.viz.ui.context.child_as_fn.cljs$core$IFn$_invoke$arity$2(goog.object.get(context,"Consumer"),render_fn);
});

//# sourceMappingURL=com.wsscode.pathom.viz.ui.context.js.map
