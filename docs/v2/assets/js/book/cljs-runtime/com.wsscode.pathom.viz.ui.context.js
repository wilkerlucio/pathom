goog.provide('com.wsscode.pathom.viz.ui.context');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.gen.alpha');
goog.require('fulcro.client.primitives');
goog.require('goog.object');
com.wsscode.pathom.viz.ui.context.contains_js_keys = (function com$wsscode$pathom$viz$ui$context$contains_js_keys(obj,keys){
return cljs.core.every_QMARK_((function (p1__75634_SHARP_){
return goog.object.containsKey(obj,p1__75634_SHARP_);
}),keys);
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.ui.context","context","com.wsscode.pathom.viz.ui.context/context",-602480537),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__75641#","p1__75641#",-1117746700,null)], null),cljs.core.list(new cljs.core.Symbol("com.wsscode.pathom.viz.ui.context","contains-js-keys","com.wsscode.pathom.viz.ui.context/contains-js-keys",-1404962250,null),new cljs.core.Symbol(null,"p1__75641#","p1__75641#",-1117746700,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Consumer","Provider"], null))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.gen.alpha","return","cljs.spec.gen.alpha/return",1565518169,null),cljs.core.list(new cljs.core.Symbol("com.wsscode.pathom.viz.ui.context","new-context","com.wsscode.pathom.viz.ui.context/new-context",-1781575965,null))))),cljs.spec.alpha.with_gen((function (p1__75641_SHARP_){
return com.wsscode.pathom.viz.ui.context.contains_js_keys(p1__75641_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Consumer","Provider"], null));
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
var G__75647 = arguments.length;
switch (G__75647) {
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
var G__75686__delegate = function (v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render,v);
};
var G__75686 = function (var_args){
var v = null;
if (arguments.length > 0) {
var G__75689__i = 0, G__75689__a = new Array(arguments.length -  0);
while (G__75689__i < G__75689__a.length) {G__75689__a[G__75689__i] = arguments[G__75689__i + 0]; ++G__75689__i;}
  v = new cljs.core.IndexedSeq(G__75689__a,0,null);
} 
return G__75686__delegate.call(this,v);};
G__75686.cljs$lang$maxFixedArity = 0;
G__75686.cljs$lang$applyTo = (function (arglist__75690){
var v = cljs.core.seq(arglist__75690);
return G__75686__delegate(v);
});
G__75686.cljs$core$IFn$_invoke$arity$variadic = G__75686__delegate;
return G__75686;
})()
}),cljs.core.PersistentVector.EMPTY);
});

com.wsscode.pathom.viz.ui.context.child_as_fn.cljs$core$IFn$_invoke$arity$3 = (function (Component,props,render){
return fulcro.client.primitives.create_element(Component,cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),(function() { 
var G__75691__delegate = function (v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render,v);
};
var G__75691 = function (var_args){
var v = null;
if (arguments.length > 0) {
var G__75692__i = 0, G__75692__a = new Array(arguments.length -  0);
while (G__75692__i < G__75692__a.length) {G__75692__a[G__75692__i] = arguments[G__75692__i + 0]; ++G__75692__i;}
  v = new cljs.core.IndexedSeq(G__75692__a,0,null);
} 
return G__75691__delegate.call(this,v);};
G__75691.cljs$lang$maxFixedArity = 0;
G__75691.cljs$lang$applyTo = (function (arglist__75695){
var v = cljs.core.seq(arglist__75695);
return G__75691__delegate(v);
});
G__75691.cljs$core$IFn$_invoke$arity$variadic = G__75691__delegate;
return G__75691;
})()
], null),props], 0))),cljs.core.PersistentVector.EMPTY);
});

com.wsscode.pathom.viz.ui.context.child_as_fn.cljs$lang$maxFixedArity = 3;

/**
 * Creates a new React context
 */
com.wsscode.pathom.viz.ui.context.new_context = (function com$wsscode$pathom$viz$ui$context$new_context(var_args){
var G__75656 = arguments.length;
switch (G__75656) {
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
var len__4730__auto___75697 = arguments.length;
var i__4731__auto___75698 = (0);
while(true){
if((i__4731__auto___75698 < len__4730__auto___75697)){
args__4736__auto__.push((arguments[i__4731__auto___75698]));

var G__75699 = (i__4731__auto___75698 + (1));
i__4731__auto___75698 = G__75699;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return com.wsscode.pathom.viz.ui.context.provider.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

com.wsscode.pathom.viz.ui.context.provider.cljs$core$IFn$_invoke$arity$variadic = (function (p__75665,children){
var map__75666 = p__75665;
var map__75666__$1 = (((((!((map__75666 == null))))?(((((map__75666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75666):map__75666);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75666__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.context","context","com.wsscode.pathom.viz.ui.context/context",-602480537));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75666__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.context","value","com.wsscode.pathom.viz.ui.context/value",249783257));
return fulcro.client.primitives.create_element(goog.object.get(context,"Provider"),({"value": value}),children);
});

com.wsscode.pathom.viz.ui.context.provider.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
com.wsscode.pathom.viz.ui.context.provider.cljs$lang$applyTo = (function (seq75660){
var G__75661 = cljs.core.first(seq75660);
var seq75660__$1 = cljs.core.next(seq75660);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75661,seq75660__$1);
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
com.wsscode.pathom.viz.ui.context.consumer = (function com$wsscode$pathom$viz$ui$context$consumer(p__75672,render_fn){
var map__75673 = p__75672;
var map__75673__$1 = (((((!((map__75673 == null))))?(((((map__75673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75673):map__75673);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75673__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.context","context","com.wsscode.pathom.viz.ui.context/context",-602480537));
return com.wsscode.pathom.viz.ui.context.child_as_fn.cljs$core$IFn$_invoke$arity$2(goog.object.get(context,"Consumer"),render_fn);
});

//# sourceMappingURL=com.wsscode.pathom.viz.ui.context.js.map
