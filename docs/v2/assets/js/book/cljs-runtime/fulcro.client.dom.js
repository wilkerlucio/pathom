goog.provide('fulcro.client.dom');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('fulcro.util');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('fulcro.client.dom_common');





































































































































































































fulcro.client.dom.element_marker = goog.object.get(React.createElement("div",null),"$$typeof");
/**
 * Returns true if the given arg is a react element.
 */
fulcro.client.dom.element_QMARK_ = (function fulcro$client$dom$element_QMARK_(x){
return ((cljs.core.object_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fulcro.client.dom.element_marker,goog.object.get(x,"$$typeof"))));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__52957#","p1__52957#",415838489,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__52957#","p1__52957#",415838489,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__52957#","p1__52957#",415838489,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__52958#","p1__52958#",1081375953,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__52958#","p1__52958#",1081375953,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__52958#","p1__52958#",1081375953,null))))))),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__52959#","p1__52959#",-1168899517,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__52959#","p1__52959#",-1168899517,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__52959#","p1__52959#",-1168899517,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__52959#","p1__52959#",-1168899517,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(cljs.core.keyword_QMARK_,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-object","js-object",1830199158)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,(function (p1__52957_SHARP_){
return ((cljs.core.map_QMARK_(p1__52957_SHARP_)) && ((!(fulcro.client.dom.element_QMARK_(p1__52957_SHARP_)))));
}),(function (p1__52958_SHARP_){
return ((cljs.core.object_QMARK_(p1__52958_SHARP_)) && ((!(fulcro.client.dom.element_QMARK_(p1__52958_SHARP_)))));
})], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__52957#","p1__52957#",415838489,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__52957#","p1__52957#",415838489,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__52957#","p1__52957#",415838489,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__52958#","p1__52958#",1081375953,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__52958#","p1__52958#",1081375953,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__52958#","p1__52958#",1081375953,null))))))),cljs.spec.alpha.rep_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__52959#","p1__52959#",-1168899517,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__52959#","p1__52959#",-1168899517,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__52959#","p1__52959#",-1168899517,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__52959#","p1__52959#",-1168899517,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"element","element",1974019749)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.number_QMARK_,(function (p1__52959_SHARP_){
return ((cljs.core.vector_QMARK_(p1__52959_SHARP_)) || (cljs.core.seq_QMARK_(p1__52959_SHARP_)) || (cljs.core.array_QMARK_(p1__52959_SHARP_)));
}),cljs.core.nil_QMARK_,fulcro.client.dom.element_QMARK_], null),null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__52957#","p1__52957#",415838489,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__52957#","p1__52957#",415838489,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__52957#","p1__52957#",415838489,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__52958#","p1__52958#",1081375953,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__52958#","p1__52958#",1081375953,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__52958#","p1__52958#",1081375953,null))))))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__52959#","p1__52959#",-1168899517,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__52959#","p1__52959#",-1168899517,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__52959#","p1__52959#",-1168899517,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__52959#","p1__52959#",-1168899517,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null)))], null)));
/**
 * Equivalent to React.render
 */
fulcro.client.dom.render = (function fulcro$client$dom$render(component,el){
return ReactDOM.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must require cljsjs.react.dom.server to use this function.
 */
fulcro.client.dom.render_to_str = (function fulcro$client$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
fulcro.client.dom.node = (function fulcro$client$dom$node(var_args){
var G__53027 = arguments.length;
switch (G__53027) {
case 1:
return fulcro.client.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return ReactDOM.findDOMNode(component);
});

fulcro.client.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__53033 = component.refs;
var G__53033__$1 = (((G__53033 == null))?null:goog.object.get(G__53033,name));
if((G__53033__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__53033__$1);
}
});

fulcro.client.dom.node.cljs$lang$maxFixedArity = 2;

/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
fulcro.client.dom.create_element = (function fulcro$client$dom$create_element(var_args){
var G__53039 = arguments.length;
switch (G__53039) {
case 1:
return fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___55752 = arguments.length;
var i__4731__auto___55753 = (0);
while(true){
if((i__4731__auto___55753 < len__4730__auto___55752)){
args_arr__4751__auto__.push((arguments[i__4731__auto___55753]));

var G__55754 = (i__4731__auto___55753 + (1));
i__4731__auto___55753 = G__55754;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
});

fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return React.createElement(tag,opts);
});

fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return React.createElement(tag,opts,children);
});

/** @this {Function} */
fulcro.client.dom.create_element.cljs$lang$applyTo = (function (seq53035){
var G__53036 = cljs.core.first(seq53035);
var seq53035__$1 = cljs.core.next(seq53035);
var G__53037 = cljs.core.first(seq53035__$1);
var seq53035__$2 = cljs.core.next(seq53035__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53036,G__53037,seq53035__$2);
});

fulcro.client.dom.create_element.cljs$lang$maxFixedArity = (2);

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
fulcro.client.dom.convert_props = (function fulcro$client$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
fulcro.client.dom.macro_create_element_STAR_ = (function fulcro$client$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return React.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
fulcro.client.dom.update_state = (function fulcro$client$dom$update_state(component,next_props,value){
var on_change = goog.object.getValueByKeys(component,"state","onChange");
var next_state = ({});
var inputRef = goog.object.get(next_props,"inputRef");
goog.object.extend(next_state,next_props,({"onChange": on_change}));

goog.object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
goog.object.remove(next_state,"inputRef");

goog.object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(next_state);
});
if((typeof fulcro !== 'undefined') && (typeof fulcro.client !== 'undefined') && (typeof fulcro.client.dom !== 'undefined') && (typeof fulcro.client.dom.form_elements_QMARK_ !== 'undefined')){
} else {
fulcro.client.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
fulcro.client.dom.is_form_element_QMARK_ = (function fulcro$client$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4120__auto__ = tag;
if(cljs.core.truth_(and__4120__auto__)){
var G__53049 = clojure.string.lower_case(tag);
return (fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__53049) : fulcro.client.dom.form_elements_QMARK_.call(null,G__53049));
} else {
return and__4120__auto__;
}
});
fulcro.client.dom.wrap_form_element = (function fulcro$client$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
this$.state = (function (){var state = ({"ref": goog.object.get(props,"inputRef")});
goog.object.extend(state,props,({"onChange": goog.bind(goog.object.get(this$,"onChange"),this$)}));

goog.object.remove(state,"inputRef");

return state;
})();

return React.Component.apply(this$,arguments);
});
ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join('');

goog.inherits(ctor,React.Component);

var x53053_55770 = ctor.prototype;
x53053_55770.onChange = ((function (x53053_55770,ctor){
return (function (event){
var this$ = this;
var temp__5720__auto__ = this$.props.onChange;
if(cljs.core.truth_(temp__5720__auto__)){
var handler = temp__5720__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return fulcro.client.dom.update_state(this$,this$.props,goog.object.getValueByKeys(event,"target","value"));
} else {
return null;
}
});})(x53053_55770,ctor))
;

x53053_55770.componentWillReceiveProps = ((function (x53053_55770,ctor){
return (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(fulcro.client.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,((function (state_value,this_node,this$,x53053_55770,ctor){
return (function (p1__53051_SHARP_){
return fulcro.client.dom.is_form_element_QMARK_(p1__53051_SHARP_);
});})(state_value,this_node,this$,x53053_55770,ctor))
));
var element_value = goog.object.get(value_node,"value");
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return fulcro.client.dom.update_state(this$,new_props,element_value);
} else {
return fulcro.client.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
});})(x53053_55770,ctor))
;

x53053_55770.render = ((function (x53053_55770,ctor){
return (function (){
var this$ = this;
return React.createElement(element,this$.state);
});})(x53053_55770,ctor))
;


var real_factory = React.createFactory(ctor);
return ((function (real_factory,ctor){
return (function() { 
var G__55774__delegate = function (props,children){
var temp__5718__auto__ = goog.object.get(props,"ref");
if(cljs.core.truth_(temp__5718__auto__)){
var r = temp__5718__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
goog.object.extend(p,props);

goog.object.set(p,"inputRef",r);

goog.object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
};
var G__55774 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__55779__i = 0, G__55779__a = new Array(arguments.length -  1);
while (G__55779__i < G__55779__a.length) {G__55779__a[G__55779__i] = arguments[G__55779__i + 1]; ++G__55779__i;}
  children = new cljs.core.IndexedSeq(G__55779__a,0,null);
} 
return G__55774__delegate.call(this,props,children);};
G__55774.cljs$lang$maxFixedArity = 1;
G__55774.cljs$lang$applyTo = (function (arglist__55780){
var props = cljs.core.first(arglist__55780);
var children = cljs.core.rest(arglist__55780);
return G__55774__delegate(props,children);
});
G__55774.cljs$core$IFn$_invoke$arity$variadic = G__55774__delegate;
return G__55774;
})()
;
;})(real_factory,ctor))
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
fulcro.client.dom.wrapped_input = fulcro.client.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
fulcro.client.dom.wrapped_textarea = fulcro.client.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
fulcro.client.dom.wrapped_option = fulcro.client.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
fulcro.client.dom.wrapped_select = fulcro.client.dom.wrap_form_element("select");
fulcro.client.dom.arr_append_STAR_ = (function fulcro$client$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
fulcro.client.dom.arr_append = (function fulcro$client$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(fulcro.client.dom.arr_append_STAR_,arr,fulcro.util.force_children(tail));
});
/**
 * Used internally by element generation.
 */
fulcro.client.dom.macro_create_wrapped_form_element = (function fulcro$client$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__53060 = tag;
switch (G__53060) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fulcro.client.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fulcro.client.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fulcro.client.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fulcro.client.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53060)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
fulcro.client.dom.macro_create_element = (function fulcro$client$dom$macro_create_element(var_args){
var G__53064 = arguments.length;
switch (G__53064) {
case 2:
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
});

fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__53066 = args;
var seq__53067 = cljs.core.seq(vec__53066);
var first__53068 = cljs.core.first(seq__53067);
var seq__53067__$1 = cljs.core.next(seq__53067);
var head = first__53068;
var tail = seq__53067__$1;
var f = (cljs.core.truth_((fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : fulcro.client.dom.form_elements_QMARK_.call(null,type)))?fulcro.client.dom.macro_create_wrapped_form_element:fulcro.client.dom.macro_create_element_STAR_);
if((head == null)){
var G__53070 = (function (){var G__53071 = [type,fulcro.client.dom_common.add_kwprops_to_props(({}),csskw)];
fulcro.client.dom.arr_append(G__53071,tail);

return G__53071;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53070) : f.call(null,G__53070));
} else {
if(fulcro.client.dom.element_QMARK_(head)){
var G__53072 = (function (){var G__53073 = [type,fulcro.client.dom_common.add_kwprops_to_props(({}),csskw)];
fulcro.client.dom.arr_append(G__53073,args);

return G__53073;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53072) : f.call(null,G__53072));
} else {
if(cljs.core.object_QMARK_(head)){
var G__53075 = (function (){var G__53076 = [type,fulcro.client.dom_common.add_kwprops_to_props(head,csskw)];
fulcro.client.dom.arr_append(G__53076,tail);

return G__53076;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53075) : f.call(null,G__53075));
} else {
if(cljs.core.map_QMARK_(head)){
var G__53077 = (function (){var G__53078 = [type,cljs.core.clj__GT_js(fulcro.client.dom_common.add_kwprops_to_props(fulcro.client.dom_common.interpret_classes(head),csskw))];
fulcro.client.dom.arr_append(G__53078,tail);

return G__53078;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53077) : f.call(null,G__53077));
} else {
var G__53080 = (function (){var G__53081 = [type,fulcro.client.dom_common.add_kwprops_to_props(({}),csskw)];
fulcro.client.dom.arr_append(G__53081,args);

return G__53081;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53080) : f.call(null,G__53080));

}
}
}
}
});

fulcro.client.dom.macro_create_element.cljs$lang$maxFixedArity = 3;

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.form = (function fulcro$client$dom$form(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55791 = arguments.length;
var i__4731__auto___55792 = (0);
while(true){
if((i__4731__auto___55792 < len__4730__auto___55791)){
args__4736__auto__.push((arguments[i__4731__auto___55792]));

var G__55794 = (i__4731__auto___55792 + (1));
i__4731__auto___55792 = G__55794;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53093 = conformed_args__51664__auto__;
var map__53093__$1 = (((((!((map__53093 == null))))?(((((map__53093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53093):map__53093);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53093__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53093__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53093__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.form.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.form.cljs$lang$applyTo = (function (seq53090){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53090));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.audio = (function fulcro$client$dom$audio(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55796 = arguments.length;
var i__4731__auto___55797 = (0);
while(true){
if((i__4731__auto___55797 < len__4730__auto___55796)){
args__4736__auto__.push((arguments[i__4731__auto___55797]));

var G__55798 = (i__4731__auto___55797 + (1));
i__4731__auto___55797 = G__55798;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53104 = conformed_args__51664__auto__;
var map__53104__$1 = (((((!((map__53104 == null))))?(((((map__53104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53104):map__53104);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53104__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53104__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53104__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.audio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.audio.cljs$lang$applyTo = (function (seq53100){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53100));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.input = (function fulcro$client$dom$input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55804 = arguments.length;
var i__4731__auto___55805 = (0);
while(true){
if((i__4731__auto___55805 < len__4730__auto___55804)){
args__4736__auto__.push((arguments[i__4731__auto___55805]));

var G__55806 = (i__4731__auto___55805 + (1));
i__4731__auto___55805 = G__55806;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53110 = conformed_args__51664__auto__;
var map__53110__$1 = (((((!((map__53110 == null))))?(((((map__53110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53110):map__53110);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53110__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53110__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53110__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.input.cljs$lang$applyTo = (function (seq53107){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53107));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.menuitem = (function fulcro$client$dom$menuitem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55808 = arguments.length;
var i__4731__auto___55809 = (0);
while(true){
if((i__4731__auto___55809 < len__4730__auto___55808)){
args__4736__auto__.push((arguments[i__4731__auto___55809]));

var G__55812 = (i__4731__auto___55809 + (1));
i__4731__auto___55809 = G__55812;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53118 = conformed_args__51664__auto__;
var map__53118__$1 = (((((!((map__53118 == null))))?(((((map__53118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53118):map__53118);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.menuitem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.menuitem.cljs$lang$applyTo = (function (seq53114){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53114));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.radialGradient = (function fulcro$client$dom$radialGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55815 = arguments.length;
var i__4731__auto___55816 = (0);
while(true){
if((i__4731__auto___55816 < len__4730__auto___55815)){
args__4736__auto__.push((arguments[i__4731__auto___55816]));

var G__55817 = (i__4731__auto___55816 + (1));
i__4731__auto___55816 = G__55817;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53126 = conformed_args__51664__auto__;
var map__53126__$1 = (((((!((map__53126 == null))))?(((((map__53126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53126):map__53126);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53126__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53126__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53126__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.radialGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.radialGradient.cljs$lang$applyTo = (function (seq53125){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53125));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feMerge = (function fulcro$client$dom$feMerge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55821 = arguments.length;
var i__4731__auto___55825 = (0);
while(true){
if((i__4731__auto___55825 < len__4730__auto___55821)){
args__4736__auto__.push((arguments[i__4731__auto___55825]));

var G__55832 = (i__4731__auto___55825 + (1));
i__4731__auto___55825 = G__55832;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53135 = conformed_args__51664__auto__;
var map__53135__$1 = (((((!((map__53135 == null))))?(((((map__53135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53135):map__53135);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53135__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53135__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53135__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feMerge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feMerge.cljs$lang$applyTo = (function (seq53133){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53133));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.set = (function fulcro$client$dom$set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55840 = arguments.length;
var i__4731__auto___55841 = (0);
while(true){
if((i__4731__auto___55841 < len__4730__auto___55840)){
args__4736__auto__.push((arguments[i__4731__auto___55841]));

var G__55842 = (i__4731__auto___55841 + (1));
i__4731__auto___55841 = G__55842;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53146 = conformed_args__51664__auto__;
var map__53146__$1 = (((((!((map__53146 == null))))?(((((map__53146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53146):map__53146);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53146__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53146__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53146__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.set.cljs$lang$applyTo = (function (seq53141){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53141));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feSpecularLighting = (function fulcro$client$dom$feSpecularLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55848 = arguments.length;
var i__4731__auto___55849 = (0);
while(true){
if((i__4731__auto___55849 < len__4730__auto___55848)){
args__4736__auto__.push((arguments[i__4731__auto___55849]));

var G__55850 = (i__4731__auto___55849 + (1));
i__4731__auto___55849 = G__55850;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53165 = conformed_args__51664__auto__;
var map__53165__$1 = (((((!((map__53165 == null))))?(((((map__53165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53165):map__53165);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53165__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53165__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53165__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq53161){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53161));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.base = (function fulcro$client$dom$base(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55856 = arguments.length;
var i__4731__auto___55857 = (0);
while(true){
if((i__4731__auto___55857 < len__4730__auto___55856)){
args__4736__auto__.push((arguments[i__4731__auto___55857]));

var G__55863 = (i__4731__auto___55857 + (1));
i__4731__auto___55857 = G__55863;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53187 = conformed_args__51664__auto__;
var map__53187__$1 = (((((!((map__53187 == null))))?(((((map__53187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53187):map__53187);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53187__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53187__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53187__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.base.cljs$lang$applyTo = (function (seq53179){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53179));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.h1 = (function fulcro$client$dom$h1(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55870 = arguments.length;
var i__4731__auto___55871 = (0);
while(true){
if((i__4731__auto___55871 < len__4730__auto___55870)){
args__4736__auto__.push((arguments[i__4731__auto___55871]));

var G__55872 = (i__4731__auto___55871 + (1));
i__4731__auto___55871 = G__55872;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53201 = conformed_args__51664__auto__;
var map__53201__$1 = (((((!((map__53201 == null))))?(((((map__53201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53201):map__53201);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53201__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53201__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53201__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.h1.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h1.cljs$lang$applyTo = (function (seq53199){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53199));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feOffset = (function fulcro$client$dom$feOffset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55884 = arguments.length;
var i__4731__auto___55885 = (0);
while(true){
if((i__4731__auto___55885 < len__4730__auto___55884)){
args__4736__auto__.push((arguments[i__4731__auto___55885]));

var G__55886 = (i__4731__auto___55885 + (1));
i__4731__auto___55885 = G__55886;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53209 = conformed_args__51664__auto__;
var map__53209__$1 = (((((!((map__53209 == null))))?(((((map__53209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53209):map__53209);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53209__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53209__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53209__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feOffset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feOffset.cljs$lang$applyTo = (function (seq53206){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53206));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.embed = (function fulcro$client$dom$embed(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55888 = arguments.length;
var i__4731__auto___55889 = (0);
while(true){
if((i__4731__auto___55889 < len__4730__auto___55888)){
args__4736__auto__.push((arguments[i__4731__auto___55889]));

var G__55890 = (i__4731__auto___55889 + (1));
i__4731__auto___55889 = G__55890;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53216 = conformed_args__51664__auto__;
var map__53216__$1 = (((((!((map__53216 == null))))?(((((map__53216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53216):map__53216);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53216__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53216__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53216__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.embed.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.embed.cljs$lang$applyTo = (function (seq53215){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53215));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.animateMotion = (function fulcro$client$dom$animateMotion(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55900 = arguments.length;
var i__4731__auto___55902 = (0);
while(true){
if((i__4731__auto___55902 < len__4730__auto___55900)){
args__4736__auto__.push((arguments[i__4731__auto___55902]));

var G__55903 = (i__4731__auto___55902 + (1));
i__4731__auto___55902 = G__55903;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53227 = conformed_args__51664__auto__;
var map__53227__$1 = (((((!((map__53227 == null))))?(((((map__53227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53227):map__53227);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53227__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53227__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53227__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.animateMotion.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.animateMotion.cljs$lang$applyTo = (function (seq53224){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53224));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.h3 = (function fulcro$client$dom$h3(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55915 = arguments.length;
var i__4731__auto___55916 = (0);
while(true){
if((i__4731__auto___55916 < len__4730__auto___55915)){
args__4736__auto__.push((arguments[i__4731__auto___55916]));

var G__55917 = (i__4731__auto___55916 + (1));
i__4731__auto___55916 = G__55917;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53235 = conformed_args__51664__auto__;
var map__53235__$1 = (((((!((map__53235 == null))))?(((((map__53235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53235):map__53235);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53235__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53235__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53235__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.h3.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h3.cljs$lang$applyTo = (function (seq53232){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53232));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.body = (function fulcro$client$dom$body(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55924 = arguments.length;
var i__4731__auto___55925 = (0);
while(true){
if((i__4731__auto___55925 < len__4730__auto___55924)){
args__4736__auto__.push((arguments[i__4731__auto___55925]));

var G__55928 = (i__4731__auto___55925 + (1));
i__4731__auto___55925 = G__55928;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53248 = conformed_args__51664__auto__;
var map__53248__$1 = (((((!((map__53248 == null))))?(((((map__53248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53248):map__53248);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53248__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53248__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53248__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.body.cljs$lang$applyTo = (function (seq53242){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53242));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.hkern = (function fulcro$client$dom$hkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55936 = arguments.length;
var i__4731__auto___55937 = (0);
while(true){
if((i__4731__auto___55937 < len__4730__auto___55936)){
args__4736__auto__.push((arguments[i__4731__auto___55937]));

var G__55943 = (i__4731__auto___55937 + (1));
i__4731__auto___55937 = G__55943;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53254 = conformed_args__51664__auto__;
var map__53254__$1 = (((((!((map__53254 == null))))?(((((map__53254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53254):map__53254);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53254__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53254__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53254__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.hkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.hkern.cljs$lang$applyTo = (function (seq53251){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53251));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.keygen = (function fulcro$client$dom$keygen(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55947 = arguments.length;
var i__4731__auto___55948 = (0);
while(true){
if((i__4731__auto___55948 < len__4730__auto___55947)){
args__4736__auto__.push((arguments[i__4731__auto___55948]));

var G__55949 = (i__4731__auto___55948 + (1));
i__4731__auto___55948 = G__55949;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53273 = conformed_args__51664__auto__;
var map__53273__$1 = (((((!((map__53273 == null))))?(((((map__53273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53273):map__53273);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53273__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53273__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53273__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.keygen.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.keygen.cljs$lang$applyTo = (function (seq53267){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53267));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.font_face_format = (function fulcro$client$dom$font_face_format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55957 = arguments.length;
var i__4731__auto___55958 = (0);
while(true){
if((i__4731__auto___55958 < len__4730__auto___55957)){
args__4736__auto__.push((arguments[i__4731__auto___55958]));

var G__55959 = (i__4731__auto___55958 + (1));
i__4731__auto___55958 = G__55959;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53278 = conformed_args__51664__auto__;
var map__53278__$1 = (((((!((map__53278 == null))))?(((((map__53278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53278):map__53278);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53278__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53278__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53278__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.font_face_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.font_face_format.cljs$lang$applyTo = (function (seq53276){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53276));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feFuncA = (function fulcro$client$dom$feFuncA(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55962 = arguments.length;
var i__4731__auto___55964 = (0);
while(true){
if((i__4731__auto___55964 < len__4730__auto___55962)){
args__4736__auto__.push((arguments[i__4731__auto___55964]));

var G__55965 = (i__4731__auto___55964 + (1));
i__4731__auto___55964 = G__55965;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53289 = conformed_args__51664__auto__;
var map__53289__$1 = (((((!((map__53289 == null))))?(((((map__53289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53289):map__53289);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53289__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53289__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53289__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feFuncA.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feFuncA.cljs$lang$applyTo = (function (seq53284){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53284));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.progress = (function fulcro$client$dom$progress(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55967 = arguments.length;
var i__4731__auto___55968 = (0);
while(true){
if((i__4731__auto___55968 < len__4730__auto___55967)){
args__4736__auto__.push((arguments[i__4731__auto___55968]));

var G__55969 = (i__4731__auto___55968 + (1));
i__4731__auto___55968 = G__55969;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53295 = conformed_args__51664__auto__;
var map__53295__$1 = (((((!((map__53295 == null))))?(((((map__53295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53295):map__53295);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53295__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53295__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53295__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.progress.cljs$lang$applyTo = (function (seq53293){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53293));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.main = (function fulcro$client$dom$main(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55976 = arguments.length;
var i__4731__auto___55977 = (0);
while(true){
if((i__4731__auto___55977 < len__4730__auto___55976)){
args__4736__auto__.push((arguments[i__4731__auto___55977]));

var G__55978 = (i__4731__auto___55977 + (1));
i__4731__auto___55977 = G__55978;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53301 = conformed_args__51664__auto__;
var map__53301__$1 = (((((!((map__53301 == null))))?(((((map__53301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53301):map__53301);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53301__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53301__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53301__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.main.cljs$lang$applyTo = (function (seq53300){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53300));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.cite = (function fulcro$client$dom$cite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55986 = arguments.length;
var i__4731__auto___55987 = (0);
while(true){
if((i__4731__auto___55987 < len__4730__auto___55986)){
args__4736__auto__.push((arguments[i__4731__auto___55987]));

var G__55988 = (i__4731__auto___55987 + (1));
i__4731__auto___55987 = G__55988;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53310 = conformed_args__51664__auto__;
var map__53310__$1 = (((((!((map__53310 == null))))?(((((map__53310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53310):map__53310);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53310__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53310__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53310__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.cite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.cite.cljs$lang$applyTo = (function (seq53309){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53309));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.rect = (function fulcro$client$dom$rect(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55990 = arguments.length;
var i__4731__auto___55991 = (0);
while(true){
if((i__4731__auto___55991 < len__4730__auto___55990)){
args__4736__auto__.push((arguments[i__4731__auto___55991]));

var G__55994 = (i__4731__auto___55991 + (1));
i__4731__auto___55991 = G__55994;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53319 = conformed_args__51664__auto__;
var map__53319__$1 = (((((!((map__53319 == null))))?(((((map__53319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53319):map__53319);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53319__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53319__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53319__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.rect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.rect.cljs$lang$applyTo = (function (seq53318){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53318));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.tref = (function fulcro$client$dom$tref(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55998 = arguments.length;
var i__4731__auto___56000 = (0);
while(true){
if((i__4731__auto___56000 < len__4730__auto___55998)){
args__4736__auto__.push((arguments[i__4731__auto___56000]));

var G__56001 = (i__4731__auto___56000 + (1));
i__4731__auto___56000 = G__56001;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53333 = conformed_args__51664__auto__;
var map__53333__$1 = (((((!((map__53333 == null))))?(((((map__53333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53333):map__53333);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53333__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53333__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53333__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.tref.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.tref.cljs$lang$applyTo = (function (seq53326){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53326));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.meshpatch = (function fulcro$client$dom$meshpatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56006 = arguments.length;
var i__4731__auto___56008 = (0);
while(true){
if((i__4731__auto___56008 < len__4730__auto___56006)){
args__4736__auto__.push((arguments[i__4731__auto___56008]));

var G__56009 = (i__4731__auto___56008 + (1));
i__4731__auto___56008 = G__56009;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53343 = conformed_args__51664__auto__;
var map__53343__$1 = (((((!((map__53343 == null))))?(((((map__53343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53343):map__53343);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53343__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53343__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53343__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.meshpatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.meshpatch.cljs$lang$applyTo = (function (seq53339){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53339));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.polyline = (function fulcro$client$dom$polyline(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56018 = arguments.length;
var i__4731__auto___56019 = (0);
while(true){
if((i__4731__auto___56019 < len__4730__auto___56018)){
args__4736__auto__.push((arguments[i__4731__auto___56019]));

var G__56020 = (i__4731__auto___56019 + (1));
i__4731__auto___56019 = G__56020;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53350 = conformed_args__51664__auto__;
var map__53350__$1 = (((((!((map__53350 == null))))?(((((map__53350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53350):map__53350);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53350__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53350__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53350__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.polyline.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.polyline.cljs$lang$applyTo = (function (seq53346){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53346));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.metadata = (function fulcro$client$dom$metadata(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56029 = arguments.length;
var i__4731__auto___56030 = (0);
while(true){
if((i__4731__auto___56030 < len__4730__auto___56029)){
args__4736__auto__.push((arguments[i__4731__auto___56030]));

var G__56031 = (i__4731__auto___56030 + (1));
i__4731__auto___56030 = G__56031;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53356 = conformed_args__51664__auto__;
var map__53356__$1 = (((((!((map__53356 == null))))?(((((map__53356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53356):map__53356);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53356__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53356__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53356__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.metadata.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.metadata.cljs$lang$applyTo = (function (seq53354){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53354));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.map = (function fulcro$client$dom$map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56035 = arguments.length;
var i__4731__auto___56036 = (0);
while(true){
if((i__4731__auto___56036 < len__4730__auto___56035)){
args__4736__auto__.push((arguments[i__4731__auto___56036]));

var G__56037 = (i__4731__auto___56036 + (1));
i__4731__auto___56036 = G__56037;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53365 = conformed_args__51664__auto__;
var map__53365__$1 = (((((!((map__53365 == null))))?(((((map__53365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53365):map__53365);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53365__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53365__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53365__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.map.cljs$lang$applyTo = (function (seq53362){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53362));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.object = (function fulcro$client$dom$object(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56040 = arguments.length;
var i__4731__auto___56041 = (0);
while(true){
if((i__4731__auto___56041 < len__4730__auto___56040)){
args__4736__auto__.push((arguments[i__4731__auto___56041]));

var G__56042 = (i__4731__auto___56041 + (1));
i__4731__auto___56041 = G__56042;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53374 = conformed_args__51664__auto__;
var map__53374__$1 = (((((!((map__53374 == null))))?(((((map__53374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53374):map__53374);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53374__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53374__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53374__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.object.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.object.cljs$lang$applyTo = (function (seq53371){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53371));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.i = (function fulcro$client$dom$i(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56049 = arguments.length;
var i__4731__auto___56050 = (0);
while(true){
if((i__4731__auto___56050 < len__4730__auto___56049)){
args__4736__auto__.push((arguments[i__4731__auto___56050]));

var G__56053 = (i__4731__auto___56050 + (1));
i__4731__auto___56050 = G__56053;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53381 = conformed_args__51664__auto__;
var map__53381__$1 = (((((!((map__53381 == null))))?(((((map__53381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53381):map__53381);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53381__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53381__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53381__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.i.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.i.cljs$lang$applyTo = (function (seq53379){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53379));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.font_face_name = (function fulcro$client$dom$font_face_name(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56060 = arguments.length;
var i__4731__auto___56061 = (0);
while(true){
if((i__4731__auto___56061 < len__4730__auto___56060)){
args__4736__auto__.push((arguments[i__4731__auto___56061]));

var G__56062 = (i__4731__auto___56061 + (1));
i__4731__auto___56061 = G__56062;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53388 = conformed_args__51664__auto__;
var map__53388__$1 = (((((!((map__53388 == null))))?(((((map__53388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53388):map__53388);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53388__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53388__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53388__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.font_face_name.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.font_face_name.cljs$lang$applyTo = (function (seq53386){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53386));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.p = (function fulcro$client$dom$p(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56066 = arguments.length;
var i__4731__auto___56067 = (0);
while(true){
if((i__4731__auto___56067 < len__4730__auto___56066)){
args__4736__auto__.push((arguments[i__4731__auto___56067]));

var G__56068 = (i__4731__auto___56067 + (1));
i__4731__auto___56067 = G__56068;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53391 = conformed_args__51664__auto__;
var map__53391__$1 = (((((!((map__53391 == null))))?(((((map__53391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53391):map__53391);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53391__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53391__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53391__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.p.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.p.cljs$lang$applyTo = (function (seq53390){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53390));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feFuncR = (function fulcro$client$dom$feFuncR(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56076 = arguments.length;
var i__4731__auto___56077 = (0);
while(true){
if((i__4731__auto___56077 < len__4730__auto___56076)){
args__4736__auto__.push((arguments[i__4731__auto___56077]));

var G__56078 = (i__4731__auto___56077 + (1));
i__4731__auto___56077 = G__56078;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53394 = conformed_args__51664__auto__;
var map__53394__$1 = (((((!((map__53394 == null))))?(((((map__53394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53394):map__53394);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53394__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53394__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53394__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feFuncR.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feFuncR.cljs$lang$applyTo = (function (seq53393){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53393));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.hatchpath = (function fulcro$client$dom$hatchpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56082 = arguments.length;
var i__4731__auto___56083 = (0);
while(true){
if((i__4731__auto___56083 < len__4730__auto___56082)){
args__4736__auto__.push((arguments[i__4731__auto___56083]));

var G__56084 = (i__4731__auto___56083 + (1));
i__4731__auto___56083 = G__56084;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53397 = conformed_args__51664__auto__;
var map__53397__$1 = (((((!((map__53397 == null))))?(((((map__53397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53397):map__53397);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53397__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53397__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53397__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.hatchpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.hatchpath.cljs$lang$applyTo = (function (seq53396){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53396));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.altGlyphItem = (function fulcro$client$dom$altGlyphItem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56088 = arguments.length;
var i__4731__auto___56089 = (0);
while(true){
if((i__4731__auto___56089 < len__4730__auto___56088)){
args__4736__auto__.push((arguments[i__4731__auto___56089]));

var G__56090 = (i__4731__auto___56089 + (1));
i__4731__auto___56089 = G__56090;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53400 = conformed_args__51664__auto__;
var map__53400__$1 = (((((!((map__53400 == null))))?(((((map__53400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53400):map__53400);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53400__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53400__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53400__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.altGlyphItem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.altGlyphItem.cljs$lang$applyTo = (function (seq53399){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53399));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.nav = (function fulcro$client$dom$nav(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56094 = arguments.length;
var i__4731__auto___56095 = (0);
while(true){
if((i__4731__auto___56095 < len__4730__auto___56094)){
args__4736__auto__.push((arguments[i__4731__auto___56095]));

var G__56097 = (i__4731__auto___56095 + (1));
i__4731__auto___56095 = G__56097;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53405 = conformed_args__51664__auto__;
var map__53405__$1 = (((((!((map__53405 == null))))?(((((map__53405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53405):map__53405);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53405__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53405__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53405__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.nav.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.nav.cljs$lang$applyTo = (function (seq53402){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53402));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.ruby = (function fulcro$client$dom$ruby(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56103 = arguments.length;
var i__4731__auto___56104 = (0);
while(true){
if((i__4731__auto___56104 < len__4730__auto___56103)){
args__4736__auto__.push((arguments[i__4731__auto___56104]));

var G__56105 = (i__4731__auto___56104 + (1));
i__4731__auto___56104 = G__56105;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53412 = conformed_args__51664__auto__;
var map__53412__$1 = (((((!((map__53412 == null))))?(((((map__53412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53412):map__53412);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.ruby.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.ruby.cljs$lang$applyTo = (function (seq53411){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53411));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.switch$ = (function fulcro$client$dom$switch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56114 = arguments.length;
var i__4731__auto___56115 = (0);
while(true){
if((i__4731__auto___56115 < len__4730__auto___56114)){
args__4736__auto__.push((arguments[i__4731__auto___56115]));

var G__56116 = (i__4731__auto___56115 + (1));
i__4731__auto___56115 = G__56116;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53419 = conformed_args__51664__auto__;
var map__53419__$1 = (((((!((map__53419 == null))))?(((((map__53419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53419):map__53419);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53419__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53419__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53419__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.switch$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.switch$.cljs$lang$applyTo = (function (seq53417){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53417));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.a = (function fulcro$client$dom$a(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56127 = arguments.length;
var i__4731__auto___56128 = (0);
while(true){
if((i__4731__auto___56128 < len__4730__auto___56127)){
args__4736__auto__.push((arguments[i__4731__auto___56128]));

var G__56131 = (i__4731__auto___56128 + (1));
i__4731__auto___56128 = G__56131;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53425 = conformed_args__51664__auto__;
var map__53425__$1 = (((((!((map__53425 == null))))?(((((map__53425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53425):map__53425);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53425__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53425__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53425__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.a.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.a.cljs$lang$applyTo = (function (seq53423){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53423));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.view = (function fulcro$client$dom$view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56135 = arguments.length;
var i__4731__auto___56136 = (0);
while(true){
if((i__4731__auto___56136 < len__4730__auto___56135)){
args__4736__auto__.push((arguments[i__4731__auto___56136]));

var G__56137 = (i__4731__auto___56136 + (1));
i__4731__auto___56136 = G__56137;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53432 = conformed_args__51664__auto__;
var map__53432__$1 = (((((!((map__53432 == null))))?(((((map__53432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53432):map__53432);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53432__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53432__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53432__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.view.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.view.cljs$lang$applyTo = (function (seq53429){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53429));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.menu = (function fulcro$client$dom$menu(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56141 = arguments.length;
var i__4731__auto___56143 = (0);
while(true){
if((i__4731__auto___56143 < len__4730__auto___56141)){
args__4736__auto__.push((arguments[i__4731__auto___56143]));

var G__56144 = (i__4731__auto___56143 + (1));
i__4731__auto___56143 = G__56144;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53439 = conformed_args__51664__auto__;
var map__53439__$1 = (((((!((map__53439 == null))))?(((((map__53439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53439):map__53439);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53439__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53439__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53439__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.menu.cljs$lang$applyTo = (function (seq53435){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53435));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.blockquote = (function fulcro$client$dom$blockquote(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56146 = arguments.length;
var i__4731__auto___56147 = (0);
while(true){
if((i__4731__auto___56147 < len__4730__auto___56146)){
args__4736__auto__.push((arguments[i__4731__auto___56147]));

var G__56148 = (i__4731__auto___56147 + (1));
i__4731__auto___56147 = G__56148;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53454 = conformed_args__51664__auto__;
var map__53454__$1 = (((((!((map__53454 == null))))?(((((map__53454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53454):map__53454);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53454__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53454__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53454__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.blockquote.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.blockquote.cljs$lang$applyTo = (function (seq53451){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53451));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.img = (function fulcro$client$dom$img(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56151 = arguments.length;
var i__4731__auto___56152 = (0);
while(true){
if((i__4731__auto___56152 < len__4730__auto___56151)){
args__4736__auto__.push((arguments[i__4731__auto___56152]));

var G__56154 = (i__4731__auto___56152 + (1));
i__4731__auto___56152 = G__56154;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53460 = conformed_args__51664__auto__;
var map__53460__$1 = (((((!((map__53460 == null))))?(((((map__53460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53460):map__53460);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53460__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53460__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53460__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.img.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.img.cljs$lang$applyTo = (function (seq53459){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53459));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feFuncG = (function fulcro$client$dom$feFuncG(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56162 = arguments.length;
var i__4731__auto___56163 = (0);
while(true){
if((i__4731__auto___56163 < len__4730__auto___56162)){
args__4736__auto__.push((arguments[i__4731__auto___56163]));

var G__56164 = (i__4731__auto___56163 + (1));
i__4731__auto___56163 = G__56164;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53477 = conformed_args__51664__auto__;
var map__53477__$1 = (((((!((map__53477 == null))))?(((((map__53477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53477):map__53477);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53477__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53477__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53477__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feFuncG.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feFuncG.cljs$lang$applyTo = (function (seq53470){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53470));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.text = (function fulcro$client$dom$text(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56169 = arguments.length;
var i__4731__auto___56170 = (0);
while(true){
if((i__4731__auto___56170 < len__4730__auto___56169)){
args__4736__auto__.push((arguments[i__4731__auto___56170]));

var G__56171 = (i__4731__auto___56170 + (1));
i__4731__auto___56170 = G__56171;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53486 = conformed_args__51664__auto__;
var map__53486__$1 = (((((!((map__53486 == null))))?(((((map__53486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53486):map__53486);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53486__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53486__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53486__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.text.cljs$lang$applyTo = (function (seq53481){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53481));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.span = (function fulcro$client$dom$span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56177 = arguments.length;
var i__4731__auto___56178 = (0);
while(true){
if((i__4731__auto___56178 < len__4730__auto___56177)){
args__4736__auto__.push((arguments[i__4731__auto___56178]));

var G__56179 = (i__4731__auto___56178 + (1));
i__4731__auto___56178 = G__56179;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53508 = conformed_args__51664__auto__;
var map__53508__$1 = (((((!((map__53508 == null))))?(((((map__53508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53508):map__53508);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53508__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53508__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53508__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.span.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.span.cljs$lang$applyTo = (function (seq53492){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53492));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.track = (function fulcro$client$dom$track(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56186 = arguments.length;
var i__4731__auto___56187 = (0);
while(true){
if((i__4731__auto___56187 < len__4730__auto___56186)){
args__4736__auto__.push((arguments[i__4731__auto___56187]));

var G__56188 = (i__4731__auto___56187 + (1));
i__4731__auto___56187 = G__56188;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53516 = conformed_args__51664__auto__;
var map__53516__$1 = (((((!((map__53516 == null))))?(((((map__53516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53516):map__53516);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53516__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53516__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53516__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.track.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.track.cljs$lang$applyTo = (function (seq53514){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53514));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.data = (function fulcro$client$dom$data(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56195 = arguments.length;
var i__4731__auto___56196 = (0);
while(true){
if((i__4731__auto___56196 < len__4730__auto___56195)){
args__4736__auto__.push((arguments[i__4731__auto___56196]));

var G__56198 = (i__4731__auto___56196 + (1));
i__4731__auto___56196 = G__56198;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53550 = conformed_args__51664__auto__;
var map__53550__$1 = (((((!((map__53550 == null))))?(((((map__53550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53550):map__53550);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53550__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53550__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53550__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.data.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.data.cljs$lang$applyTo = (function (seq53536){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53536));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.u = (function fulcro$client$dom$u(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56214 = arguments.length;
var i__4731__auto___56215 = (0);
while(true){
if((i__4731__auto___56215 < len__4730__auto___56214)){
args__4736__auto__.push((arguments[i__4731__auto___56215]));

var G__56216 = (i__4731__auto___56215 + (1));
i__4731__auto___56215 = G__56216;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53585 = conformed_args__51664__auto__;
var map__53585__$1 = (((((!((map__53585 == null))))?(((((map__53585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53585):map__53585);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53585__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53585__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53585__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.u.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.u.cljs$lang$applyTo = (function (seq53571){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53571));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.dl = (function fulcro$client$dom$dl(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56218 = arguments.length;
var i__4731__auto___56219 = (0);
while(true){
if((i__4731__auto___56219 < len__4730__auto___56218)){
args__4736__auto__.push((arguments[i__4731__auto___56219]));

var G__56220 = (i__4731__auto___56219 + (1));
i__4731__auto___56219 = G__56220;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53602 = conformed_args__51664__auto__;
var map__53602__$1 = (((((!((map__53602 == null))))?(((((map__53602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53602):map__53602);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53602__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53602__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53602__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.dl.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.dl.cljs$lang$applyTo = (function (seq53601){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53601));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.select = (function fulcro$client$dom$select(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56224 = arguments.length;
var i__4731__auto___56225 = (0);
while(true){
if((i__4731__auto___56225 < len__4730__auto___56224)){
args__4736__auto__.push((arguments[i__4731__auto___56225]));

var G__56226 = (i__4731__auto___56225 + (1));
i__4731__auto___56225 = G__56226;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53607 = conformed_args__51664__auto__;
var map__53607__$1 = (((((!((map__53607 == null))))?(((((map__53607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53607):map__53607);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53607__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53607__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53607__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.select.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.select.cljs$lang$applyTo = (function (seq53606){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53606));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.polygon = (function fulcro$client$dom$polygon(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56235 = arguments.length;
var i__4731__auto___56236 = (0);
while(true){
if((i__4731__auto___56236 < len__4730__auto___56235)){
args__4736__auto__.push((arguments[i__4731__auto___56236]));

var G__56237 = (i__4731__auto___56236 + (1));
i__4731__auto___56236 = G__56237;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53647 = conformed_args__51664__auto__;
var map__53647__$1 = (((((!((map__53647 == null))))?(((((map__53647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53647):map__53647);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53647__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53647__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53647__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.polygon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.polygon.cljs$lang$applyTo = (function (seq53642){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53642));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.pattern = (function fulcro$client$dom$pattern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56246 = arguments.length;
var i__4731__auto___56247 = (0);
while(true){
if((i__4731__auto___56247 < len__4730__auto___56246)){
args__4736__auto__.push((arguments[i__4731__auto___56247]));

var G__56249 = (i__4731__auto___56247 + (1));
i__4731__auto___56247 = G__56249;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53671 = conformed_args__51664__auto__;
var map__53671__$1 = (((((!((map__53671 == null))))?(((((map__53671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53671):map__53671);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53671__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53671__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53671__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.pattern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.pattern.cljs$lang$applyTo = (function (seq53656){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53656));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.html = (function fulcro$client$dom$html(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56253 = arguments.length;
var i__4731__auto___56254 = (0);
while(true){
if((i__4731__auto___56254 < len__4730__auto___56253)){
args__4736__auto__.push((arguments[i__4731__auto___56254]));

var G__56255 = (i__4731__auto___56254 + (1));
i__4731__auto___56254 = G__56255;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53705 = conformed_args__51664__auto__;
var map__53705__$1 = (((((!((map__53705 == null))))?(((((map__53705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53705):map__53705);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53705__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53705__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53705__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.html.cljs$lang$applyTo = (function (seq53692){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53692));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.foreignObject = (function fulcro$client$dom$foreignObject(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56257 = arguments.length;
var i__4731__auto___56258 = (0);
while(true){
if((i__4731__auto___56258 < len__4730__auto___56257)){
args__4736__auto__.push((arguments[i__4731__auto___56258]));

var G__56259 = (i__4731__auto___56258 + (1));
i__4731__auto___56258 = G__56259;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53738 = conformed_args__51664__auto__;
var map__53738__$1 = (((((!((map__53738 == null))))?(((((map__53738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53738):map__53738);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53738__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53738__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53738__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.foreignObject.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.foreignObject.cljs$lang$applyTo = (function (seq53724){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53724));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.thead = (function fulcro$client$dom$thead(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56261 = arguments.length;
var i__4731__auto___56262 = (0);
while(true){
if((i__4731__auto___56262 < len__4730__auto___56261)){
args__4736__auto__.push((arguments[i__4731__auto___56262]));

var G__56263 = (i__4731__auto___56262 + (1));
i__4731__auto___56262 = G__56263;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53771 = conformed_args__51664__auto__;
var map__53771__$1 = (((((!((map__53771 == null))))?(((((map__53771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53771):map__53771);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53771__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53771__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53771__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.thead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.thead.cljs$lang$applyTo = (function (seq53757){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53757));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.path = (function fulcro$client$dom$path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56273 = arguments.length;
var i__4731__auto___56274 = (0);
while(true){
if((i__4731__auto___56274 < len__4730__auto___56273)){
args__4736__auto__.push((arguments[i__4731__auto___56274]));

var G__56275 = (i__4731__auto___56274 + (1));
i__4731__auto___56274 = G__56275;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53804 = conformed_args__51664__auto__;
var map__53804__$1 = (((((!((map__53804 == null))))?(((((map__53804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53804):map__53804);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53804__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53804__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53804__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.path.cljs$lang$applyTo = (function (seq53792){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53792));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.del = (function fulcro$client$dom$del(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56286 = arguments.length;
var i__4731__auto___56287 = (0);
while(true){
if((i__4731__auto___56287 < len__4730__auto___56286)){
args__4736__auto__.push((arguments[i__4731__auto___56287]));

var G__56288 = (i__4731__auto___56287 + (1));
i__4731__auto___56287 = G__56288;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53841 = conformed_args__51664__auto__;
var map__53841__$1 = (((((!((map__53841 == null))))?(((((map__53841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53841):map__53841);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53841__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53841__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53841__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.del.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.del.cljs$lang$applyTo = (function (seq53827){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53827));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.altGlyph = (function fulcro$client$dom$altGlyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56290 = arguments.length;
var i__4731__auto___56291 = (0);
while(true){
if((i__4731__auto___56291 < len__4730__auto___56290)){
args__4736__auto__.push((arguments[i__4731__auto___56291]));

var G__56292 = (i__4731__auto___56291 + (1));
i__4731__auto___56291 = G__56292;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53850 = conformed_args__51664__auto__;
var map__53850__$1 = (((((!((map__53850 == null))))?(((((map__53850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53850):map__53850);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53850__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53850__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53850__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.altGlyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.altGlyph.cljs$lang$applyTo = (function (seq53849){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53849));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.fieldset = (function fulcro$client$dom$fieldset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56299 = arguments.length;
var i__4731__auto___56300 = (0);
while(true){
if((i__4731__auto___56300 < len__4730__auto___56299)){
args__4736__auto__.push((arguments[i__4731__auto___56300]));

var G__56301 = (i__4731__auto___56300 + (1));
i__4731__auto___56300 = G__56301;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53853 = conformed_args__51664__auto__;
var map__53853__$1 = (((((!((map__53853 == null))))?(((((map__53853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53853):map__53853);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53853__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53853__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53853__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.fieldset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.fieldset.cljs$lang$applyTo = (function (seq53852){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53852));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.aside = (function fulcro$client$dom$aside(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56311 = arguments.length;
var i__4731__auto___56312 = (0);
while(true){
if((i__4731__auto___56312 < len__4730__auto___56311)){
args__4736__auto__.push((arguments[i__4731__auto___56312]));

var G__56313 = (i__4731__auto___56312 + (1));
i__4731__auto___56312 = G__56313;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53858 = conformed_args__51664__auto__;
var map__53858__$1 = (((((!((map__53858 == null))))?(((((map__53858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53858):map__53858);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53858__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53858__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.aside.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.aside.cljs$lang$applyTo = (function (seq53857){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53857));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feBlend = (function fulcro$client$dom$feBlend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56315 = arguments.length;
var i__4731__auto___56316 = (0);
while(true){
if((i__4731__auto___56316 < len__4730__auto___56315)){
args__4736__auto__.push((arguments[i__4731__auto___56316]));

var G__56317 = (i__4731__auto___56316 + (1));
i__4731__auto___56316 = G__56317;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53868 = conformed_args__51664__auto__;
var map__53868__$1 = (((((!((map__53868 == null))))?(((((map__53868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53868):map__53868);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53868__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53868__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53868__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feBlend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feBlend.cljs$lang$applyTo = (function (seq53862){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53862));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.figure = (function fulcro$client$dom$figure(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56319 = arguments.length;
var i__4731__auto___56320 = (0);
while(true){
if((i__4731__auto___56320 < len__4730__auto___56319)){
args__4736__auto__.push((arguments[i__4731__auto___56320]));

var G__56322 = (i__4731__auto___56320 + (1));
i__4731__auto___56320 = G__56322;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53882 = conformed_args__51664__auto__;
var map__53882__$1 = (((((!((map__53882 == null))))?(((((map__53882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53882):map__53882);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53882__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53882__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53882__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.figure.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.figure.cljs$lang$applyTo = (function (seq53874){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53874));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.textPath = (function fulcro$client$dom$textPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56329 = arguments.length;
var i__4731__auto___56330 = (0);
while(true){
if((i__4731__auto___56330 < len__4730__auto___56329)){
args__4736__auto__.push((arguments[i__4731__auto___56330]));

var G__56331 = (i__4731__auto___56330 + (1));
i__4731__auto___56330 = G__56331;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53897 = conformed_args__51664__auto__;
var map__53897__$1 = (((((!((map__53897 == null))))?(((((map__53897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53897):map__53897);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53897__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53897__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53897__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.textPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.textPath.cljs$lang$applyTo = (function (seq53894){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53894));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.figcaption = (function fulcro$client$dom$figcaption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56333 = arguments.length;
var i__4731__auto___56334 = (0);
while(true){
if((i__4731__auto___56334 < len__4730__auto___56333)){
args__4736__auto__.push((arguments[i__4731__auto___56334]));

var G__56336 = (i__4731__auto___56334 + (1));
i__4731__auto___56334 = G__56336;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53911 = conformed_args__51664__auto__;
var map__53911__$1 = (((((!((map__53911 == null))))?(((((map__53911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53911):map__53911);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53911__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53911__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53911__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.figcaption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.figcaption.cljs$lang$applyTo = (function (seq53906){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53906));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.mask = (function fulcro$client$dom$mask(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56339 = arguments.length;
var i__4731__auto___56340 = (0);
while(true){
if((i__4731__auto___56340 < len__4730__auto___56339)){
args__4736__auto__.push((arguments[i__4731__auto___56340]));

var G__56341 = (i__4731__auto___56340 + (1));
i__4731__auto___56340 = G__56341;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53927 = conformed_args__51664__auto__;
var map__53927__$1 = (((((!((map__53927 == null))))?(((((map__53927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53927):map__53927);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53927__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53927__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53927__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.mask.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.mask.cljs$lang$applyTo = (function (seq53925){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53925));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.q = (function fulcro$client$dom$q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56344 = arguments.length;
var i__4731__auto___56345 = (0);
while(true){
if((i__4731__auto___56345 < len__4730__auto___56344)){
args__4736__auto__.push((arguments[i__4731__auto___56345]));

var G__56346 = (i__4731__auto___56345 + (1));
i__4731__auto___56345 = G__56346;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53965 = conformed_args__51664__auto__;
var map__53965__$1 = (((((!((map__53965 == null))))?(((((map__53965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53965):map__53965);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53965__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53965__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53965__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.q.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.q.cljs$lang$applyTo = (function (seq53941){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53941));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.bdi = (function fulcro$client$dom$bdi(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56350 = arguments.length;
var i__4731__auto___56351 = (0);
while(true){
if((i__4731__auto___56351 < len__4730__auto___56350)){
args__4736__auto__.push((arguments[i__4731__auto___56351]));

var G__56352 = (i__4731__auto___56351 + (1));
i__4731__auto___56351 = G__56352;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53977 = conformed_args__51664__auto__;
var map__53977__$1 = (((((!((map__53977 == null))))?(((((map__53977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53977):map__53977);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53977__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53977__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53977__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.bdi.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.bdi.cljs$lang$applyTo = (function (seq53971){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53971));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feDistantLight = (function fulcro$client$dom$feDistantLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56355 = arguments.length;
var i__4731__auto___56356 = (0);
while(true){
if((i__4731__auto___56356 < len__4730__auto___56355)){
args__4736__auto__.push((arguments[i__4731__auto___56356]));

var G__56357 = (i__4731__auto___56356 + (1));
i__4731__auto___56356 = G__56357;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54008 = conformed_args__51664__auto__;
var map__54008__$1 = (((((!((map__54008 == null))))?(((((map__54008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54008):map__54008);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54008__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54008__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54008__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feDistantLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feDistantLight.cljs$lang$applyTo = (function (seq53995){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53995));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.video = (function fulcro$client$dom$video(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56360 = arguments.length;
var i__4731__auto___56361 = (0);
while(true){
if((i__4731__auto___56361 < len__4730__auto___56360)){
args__4736__auto__.push((arguments[i__4731__auto___56361]));

var G__56363 = (i__4731__auto___56361 + (1));
i__4731__auto___56361 = G__56363;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54050 = conformed_args__51664__auto__;
var map__54050__$1 = (((((!((map__54050 == null))))?(((((map__54050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54050):map__54050);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54050__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54050__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54050__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.video.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.video.cljs$lang$applyTo = (function (seq54033){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54033));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.address = (function fulcro$client$dom$address(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56367 = arguments.length;
var i__4731__auto___56368 = (0);
while(true){
if((i__4731__auto___56368 < len__4730__auto___56367)){
args__4736__auto__.push((arguments[i__4731__auto___56368]));

var G__56369 = (i__4731__auto___56368 + (1));
i__4731__auto___56368 = G__56369;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54085 = conformed_args__51664__auto__;
var map__54085__$1 = (((((!((map__54085 == null))))?(((((map__54085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54085):map__54085);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54085__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54085__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54085__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.address.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.address.cljs$lang$applyTo = (function (seq54072){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54072));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.caption = (function fulcro$client$dom$caption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56372 = arguments.length;
var i__4731__auto___56373 = (0);
while(true){
if((i__4731__auto___56373 < len__4730__auto___56372)){
args__4736__auto__.push((arguments[i__4731__auto___56373]));

var G__56374 = (i__4731__auto___56373 + (1));
i__4731__auto___56373 = G__56374;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54120 = conformed_args__51664__auto__;
var map__54120__$1 = (((((!((map__54120 == null))))?(((((map__54120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54120):map__54120);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54120__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54120__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54120__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.caption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.caption.cljs$lang$applyTo = (function (seq54106){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54106));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.dd = (function fulcro$client$dom$dd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56376 = arguments.length;
var i__4731__auto___56377 = (0);
while(true){
if((i__4731__auto___56377 < len__4730__auto___56376)){
args__4736__auto__.push((arguments[i__4731__auto___56377]));

var G__56378 = (i__4731__auto___56377 + (1));
i__4731__auto___56377 = G__56378;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54157 = conformed_args__51664__auto__;
var map__54157__$1 = (((((!((map__54157 == null))))?(((((map__54157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54157):map__54157);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54157__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54157__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54157__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.dd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.dd.cljs$lang$applyTo = (function (seq54143){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54143));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.rp = (function fulcro$client$dom$rp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56382 = arguments.length;
var i__4731__auto___56383 = (0);
while(true){
if((i__4731__auto___56383 < len__4730__auto___56382)){
args__4736__auto__.push((arguments[i__4731__auto___56383]));

var G__56384 = (i__4731__auto___56383 + (1));
i__4731__auto___56383 = G__56384;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54174 = conformed_args__51664__auto__;
var map__54174__$1 = (((((!((map__54174 == null))))?(((((map__54174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54174):map__54174);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54174__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54174__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54174__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.rp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.rp.cljs$lang$applyTo = (function (seq54173){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54173));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.hr = (function fulcro$client$dom$hr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56387 = arguments.length;
var i__4731__auto___56388 = (0);
while(true){
if((i__4731__auto___56388 < len__4730__auto___56387)){
args__4736__auto__.push((arguments[i__4731__auto___56388]));

var G__56389 = (i__4731__auto___56388 + (1));
i__4731__auto___56388 = G__56389;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54177 = conformed_args__51664__auto__;
var map__54177__$1 = (((((!((map__54177 == null))))?(((((map__54177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54177):map__54177);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54177__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54177__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54177__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.hr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.hr.cljs$lang$applyTo = (function (seq54176){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54176));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.meta = (function fulcro$client$dom$meta(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56392 = arguments.length;
var i__4731__auto___56393 = (0);
while(true){
if((i__4731__auto___56393 < len__4730__auto___56392)){
args__4736__auto__.push((arguments[i__4731__auto___56393]));

var G__56394 = (i__4731__auto___56393 + (1));
i__4731__auto___56393 = G__56394;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54182 = conformed_args__51664__auto__;
var map__54182__$1 = (((((!((map__54182 == null))))?(((((map__54182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54182):map__54182);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54182__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54182__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54182__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.meta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.meta.cljs$lang$applyTo = (function (seq54181){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54181));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.tbody = (function fulcro$client$dom$tbody(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56396 = arguments.length;
var i__4731__auto___56397 = (0);
while(true){
if((i__4731__auto___56397 < len__4730__auto___56396)){
args__4736__auto__.push((arguments[i__4731__auto___56397]));

var G__56398 = (i__4731__auto___56397 + (1));
i__4731__auto___56397 = G__56398;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54196 = conformed_args__51664__auto__;
var map__54196__$1 = (((((!((map__54196 == null))))?(((((map__54196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54196):map__54196);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54196__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54196__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54196__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.tbody.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.tbody.cljs$lang$applyTo = (function (seq54191){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54191));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.desc = (function fulcro$client$dom$desc(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56403 = arguments.length;
var i__4731__auto___56404 = (0);
while(true){
if((i__4731__auto___56404 < len__4730__auto___56403)){
args__4736__auto__.push((arguments[i__4731__auto___56404]));

var G__56405 = (i__4731__auto___56404 + (1));
i__4731__auto___56404 = G__56405;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54214 = conformed_args__51664__auto__;
var map__54214__$1 = (((((!((map__54214 == null))))?(((((map__54214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54214):map__54214);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54214__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54214__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54214__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.desc.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.desc.cljs$lang$applyTo = (function (seq54208){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54208));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.table = (function fulcro$client$dom$table(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56410 = arguments.length;
var i__4731__auto___56411 = (0);
while(true){
if((i__4731__auto___56411 < len__4730__auto___56410)){
args__4736__auto__.push((arguments[i__4731__auto___56411]));

var G__56412 = (i__4731__auto___56411 + (1));
i__4731__auto___56411 = G__56412;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54221 = conformed_args__51664__auto__;
var map__54221__$1 = (((((!((map__54221 == null))))?(((((map__54221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54221):map__54221);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54221__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54221__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54221__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.table.cljs$lang$applyTo = (function (seq54220){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54220));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.pre = (function fulcro$client$dom$pre(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56418 = arguments.length;
var i__4731__auto___56419 = (0);
while(true){
if((i__4731__auto___56419 < len__4730__auto___56418)){
args__4736__auto__.push((arguments[i__4731__auto___56419]));

var G__56420 = (i__4731__auto___56419 + (1));
i__4731__auto___56419 = G__56420;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54232 = conformed_args__51664__auto__;
var map__54232__$1 = (((((!((map__54232 == null))))?(((((map__54232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54232):map__54232);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54232__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54232__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54232__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.pre.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.pre.cljs$lang$applyTo = (function (seq54228){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54228));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.ul = (function fulcro$client$dom$ul(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56433 = arguments.length;
var i__4731__auto___56434 = (0);
while(true){
if((i__4731__auto___56434 < len__4730__auto___56433)){
args__4736__auto__.push((arguments[i__4731__auto___56434]));

var G__56437 = (i__4731__auto___56434 + (1));
i__4731__auto___56434 = G__56437;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54239 = conformed_args__51664__auto__;
var map__54239__$1 = (((((!((map__54239 == null))))?(((((map__54239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54239):map__54239);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54239__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54239__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54239__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.ul.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.ul.cljs$lang$applyTo = (function (seq54237){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54237));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feConvolveMatrix = (function fulcro$client$dom$feConvolveMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56448 = arguments.length;
var i__4731__auto___56449 = (0);
while(true){
if((i__4731__auto___56449 < len__4730__auto___56448)){
args__4736__auto__.push((arguments[i__4731__auto___56449]));

var G__56451 = (i__4731__auto___56449 + (1));
i__4731__auto___56449 = G__56451;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54246 = conformed_args__51664__auto__;
var map__54246__$1 = (((((!((map__54246 == null))))?(((((map__54246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54246):map__54246);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54246__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54246__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54246__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq54244){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54244));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.sup = (function fulcro$client$dom$sup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56455 = arguments.length;
var i__4731__auto___56456 = (0);
while(true){
if((i__4731__auto___56456 < len__4730__auto___56455)){
args__4736__auto__.push((arguments[i__4731__auto___56456]));

var G__56457 = (i__4731__auto___56456 + (1));
i__4731__auto___56456 = G__56457;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54255 = conformed_args__51664__auto__;
var map__54255__$1 = (((((!((map__54255 == null))))?(((((map__54255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54255):map__54255);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54255__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54255__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54255__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.sup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.sup.cljs$lang$applyTo = (function (seq54253){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54253));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.dfn = (function fulcro$client$dom$dfn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56461 = arguments.length;
var i__4731__auto___56462 = (0);
while(true){
if((i__4731__auto___56462 < len__4730__auto___56461)){
args__4736__auto__.push((arguments[i__4731__auto___56462]));

var G__56464 = (i__4731__auto___56462 + (1));
i__4731__auto___56462 = G__56464;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54267 = conformed_args__51664__auto__;
var map__54267__$1 = (((((!((map__54267 == null))))?(((((map__54267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54267):map__54267);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54267__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54267__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54267__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.dfn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.dfn.cljs$lang$applyTo = (function (seq54265){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54265));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.sub = (function fulcro$client$dom$sub(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56468 = arguments.length;
var i__4731__auto___56469 = (0);
while(true){
if((i__4731__auto___56469 < len__4730__auto___56468)){
args__4736__auto__.push((arguments[i__4731__auto___56469]));

var G__56470 = (i__4731__auto___56469 + (1));
i__4731__auto___56469 = G__56470;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54275 = conformed_args__51664__auto__;
var map__54275__$1 = (((((!((map__54275 == null))))?(((((map__54275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54275):map__54275);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54275__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54275__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54275__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.sub.cljs$lang$applyTo = (function (seq54274){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54274));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.mark = (function fulcro$client$dom$mark(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56476 = arguments.length;
var i__4731__auto___56477 = (0);
while(true){
if((i__4731__auto___56477 < len__4730__auto___56476)){
args__4736__auto__.push((arguments[i__4731__auto___56477]));

var G__56479 = (i__4731__auto___56477 + (1));
i__4731__auto___56477 = G__56479;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54285 = conformed_args__51664__auto__;
var map__54285__$1 = (((((!((map__54285 == null))))?(((((map__54285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54285):map__54285);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54285__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54285__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54285__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.mark.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.mark.cljs$lang$applyTo = (function (seq54283){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54283));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feDisplacementMap = (function fulcro$client$dom$feDisplacementMap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56485 = arguments.length;
var i__4731__auto___56486 = (0);
while(true){
if((i__4731__auto___56486 < len__4730__auto___56485)){
args__4736__auto__.push((arguments[i__4731__auto___56486]));

var G__56487 = (i__4731__auto___56486 + (1));
i__4731__auto___56486 = G__56487;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54299 = conformed_args__51664__auto__;
var map__54299__$1 = (((((!((map__54299 == null))))?(((((map__54299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54299):map__54299);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54299__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54299__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54299__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq54294){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54294));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.unknown = (function fulcro$client$dom$unknown(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56490 = arguments.length;
var i__4731__auto___56491 = (0);
while(true){
if((i__4731__auto___56491 < len__4730__auto___56490)){
args__4736__auto__.push((arguments[i__4731__auto___56491]));

var G__56492 = (i__4731__auto___56491 + (1));
i__4731__auto___56491 = G__56492;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54322 = conformed_args__51664__auto__;
var map__54322__$1 = (((((!((map__54322 == null))))?(((((map__54322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54322):map__54322);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54322__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54322__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54322__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.unknown.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.unknown.cljs$lang$applyTo = (function (seq54312){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54312));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.script = (function fulcro$client$dom$script(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56496 = arguments.length;
var i__4731__auto___56497 = (0);
while(true){
if((i__4731__auto___56497 < len__4730__auto___56496)){
args__4736__auto__.push((arguments[i__4731__auto___56497]));

var G__56499 = (i__4731__auto___56497 + (1));
i__4731__auto___56497 = G__56499;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54333 = conformed_args__51664__auto__;
var map__54333__$1 = (((((!((map__54333 == null))))?(((((map__54333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54333):map__54333);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54333__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54333__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54333__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.script.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.script.cljs$lang$applyTo = (function (seq54326){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54326));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feTurbulence = (function fulcro$client$dom$feTurbulence(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56505 = arguments.length;
var i__4731__auto___56506 = (0);
while(true){
if((i__4731__auto___56506 < len__4730__auto___56505)){
args__4736__auto__.push((arguments[i__4731__auto___56506]));

var G__56507 = (i__4731__auto___56506 + (1));
i__4731__auto___56506 = G__56507;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54346 = conformed_args__51664__auto__;
var map__54346__$1 = (((((!((map__54346 == null))))?(((((map__54346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54346):map__54346);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54346__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54346__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54346__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feTurbulence.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feTurbulence.cljs$lang$applyTo = (function (seq54345){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54345));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.big = (function fulcro$client$dom$big(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56508 = arguments.length;
var i__4731__auto___56509 = (0);
while(true){
if((i__4731__auto___56509 < len__4730__auto___56508)){
args__4736__auto__.push((arguments[i__4731__auto___56509]));

var G__56510 = (i__4731__auto___56509 + (1));
i__4731__auto___56509 = G__56510;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54353 = conformed_args__51664__auto__;
var map__54353__$1 = (((((!((map__54353 == null))))?(((((map__54353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54353):map__54353);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54353__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54353__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54353__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.big.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.big.cljs$lang$applyTo = (function (seq54350){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54350));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.button = (function fulcro$client$dom$button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56515 = arguments.length;
var i__4731__auto___56516 = (0);
while(true){
if((i__4731__auto___56516 < len__4730__auto___56515)){
args__4736__auto__.push((arguments[i__4731__auto___56516]));

var G__56517 = (i__4731__auto___56516 + (1));
i__4731__auto___56516 = G__56517;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54369 = conformed_args__51664__auto__;
var map__54369__$1 = (((((!((map__54369 == null))))?(((((map__54369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54369):map__54369);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54369__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54369__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54369__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.button.cljs$lang$applyTo = (function (seq54363){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54363));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.font_face_uri = (function fulcro$client$dom$font_face_uri(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56518 = arguments.length;
var i__4731__auto___56519 = (0);
while(true){
if((i__4731__auto___56519 < len__4730__auto___56518)){
args__4736__auto__.push((arguments[i__4731__auto___56519]));

var G__56521 = (i__4731__auto___56519 + (1));
i__4731__auto___56519 = G__56521;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54384 = conformed_args__51664__auto__;
var map__54384__$1 = (((((!((map__54384 == null))))?(((((map__54384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54384):map__54384);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54384__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54384__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54384__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.font_face_uri.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.font_face_uri.cljs$lang$applyTo = (function (seq54377){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54377));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.wbr = (function fulcro$client$dom$wbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56522 = arguments.length;
var i__4731__auto___56524 = (0);
while(true){
if((i__4731__auto___56524 < len__4730__auto___56522)){
args__4736__auto__.push((arguments[i__4731__auto___56524]));

var G__56526 = (i__4731__auto___56524 + (1));
i__4731__auto___56524 = G__56526;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54396 = conformed_args__51664__auto__;
var map__54396__$1 = (((((!((map__54396 == null))))?(((((map__54396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54396):map__54396);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54396__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54396__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54396__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.wbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.wbr.cljs$lang$applyTo = (function (seq54394){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54394));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.symbol = (function fulcro$client$dom$symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56537 = arguments.length;
var i__4731__auto___56538 = (0);
while(true){
if((i__4731__auto___56538 < len__4730__auto___56537)){
args__4736__auto__.push((arguments[i__4731__auto___56538]));

var G__56540 = (i__4731__auto___56538 + (1));
i__4731__auto___56538 = G__56540;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54405 = conformed_args__51664__auto__;
var map__54405__$1 = (((((!((map__54405 == null))))?(((((map__54405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54405):map__54405);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54405__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54405__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54405__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.symbol.cljs$lang$applyTo = (function (seq54400){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54400));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.strong = (function fulcro$client$dom$strong(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56543 = arguments.length;
var i__4731__auto___56544 = (0);
while(true){
if((i__4731__auto___56544 < len__4730__auto___56543)){
args__4736__auto__.push((arguments[i__4731__auto___56544]));

var G__56545 = (i__4731__auto___56544 + (1));
i__4731__auto___56544 = G__56545;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54412 = conformed_args__51664__auto__;
var map__54412__$1 = (((((!((map__54412 == null))))?(((((map__54412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54412):map__54412);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.strong.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.strong.cljs$lang$applyTo = (function (seq54407){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54407));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.use = (function fulcro$client$dom$use(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56553 = arguments.length;
var i__4731__auto___56554 = (0);
while(true){
if((i__4731__auto___56554 < len__4730__auto___56553)){
args__4736__auto__.push((arguments[i__4731__auto___56554]));

var G__56556 = (i__4731__auto___56554 + (1));
i__4731__auto___56554 = G__56556;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54425 = conformed_args__51664__auto__;
var map__54425__$1 = (((((!((map__54425 == null))))?(((((map__54425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54425):map__54425);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54425__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54425__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54425__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.use.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.use.cljs$lang$applyTo = (function (seq54421){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54421));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.solidcolor = (function fulcro$client$dom$solidcolor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56565 = arguments.length;
var i__4731__auto___56567 = (0);
while(true){
if((i__4731__auto___56567 < len__4730__auto___56565)){
args__4736__auto__.push((arguments[i__4731__auto___56567]));

var G__56569 = (i__4731__auto___56567 + (1));
i__4731__auto___56567 = G__56569;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54440 = conformed_args__51664__auto__;
var map__54440__$1 = (((((!((map__54440 == null))))?(((((map__54440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54440):map__54440);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54440__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54440__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54440__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.solidcolor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.solidcolor.cljs$lang$applyTo = (function (seq54439){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54439));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.fePointLight = (function fulcro$client$dom$fePointLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56580 = arguments.length;
var i__4731__auto___56581 = (0);
while(true){
if((i__4731__auto___56581 < len__4730__auto___56580)){
args__4736__auto__.push((arguments[i__4731__auto___56581]));

var G__56582 = (i__4731__auto___56581 + (1));
i__4731__auto___56581 = G__56582;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54448 = conformed_args__51664__auto__;
var map__54448__$1 = (((((!((map__54448 == null))))?(((((map__54448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54448):map__54448);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54448__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54448__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54448__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.fePointLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.fePointLight.cljs$lang$applyTo = (function (seq54446){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54446));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.li = (function fulcro$client$dom$li(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56586 = arguments.length;
var i__4731__auto___56587 = (0);
while(true){
if((i__4731__auto___56587 < len__4730__auto___56586)){
args__4736__auto__.push((arguments[i__4731__auto___56587]));

var G__56592 = (i__4731__auto___56587 + (1));
i__4731__auto___56587 = G__56592;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54461 = conformed_args__51664__auto__;
var map__54461__$1 = (((((!((map__54461 == null))))?(((((map__54461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54461):map__54461);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54461__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54461__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54461__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.li.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.li.cljs$lang$applyTo = (function (seq54458){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54458));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.dt = (function fulcro$client$dom$dt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56603 = arguments.length;
var i__4731__auto___56604 = (0);
while(true){
if((i__4731__auto___56604 < len__4730__auto___56603)){
args__4736__auto__.push((arguments[i__4731__auto___56604]));

var G__56605 = (i__4731__auto___56604 + (1));
i__4731__auto___56604 = G__56605;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54485 = conformed_args__51664__auto__;
var map__54485__$1 = (((((!((map__54485 == null))))?(((((map__54485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54485):map__54485);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54485__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54485__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54485__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.dt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.dt.cljs$lang$applyTo = (function (seq54471){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54471));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feFuncB = (function fulcro$client$dom$feFuncB(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56616 = arguments.length;
var i__4731__auto___56617 = (0);
while(true){
if((i__4731__auto___56617 < len__4730__auto___56616)){
args__4736__auto__.push((arguments[i__4731__auto___56617]));

var G__56618 = (i__4731__auto___56617 + (1));
i__4731__auto___56617 = G__56618;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54499 = conformed_args__51664__auto__;
var map__54499__$1 = (((((!((map__54499 == null))))?(((((map__54499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54499):map__54499);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54499__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54499__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54499__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feFuncB.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feFuncB.cljs$lang$applyTo = (function (seq54496){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54496));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.marker = (function fulcro$client$dom$marker(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56620 = arguments.length;
var i__4731__auto___56621 = (0);
while(true){
if((i__4731__auto___56621 < len__4730__auto___56620)){
args__4736__auto__.push((arguments[i__4731__auto___56621]));

var G__56622 = (i__4731__auto___56621 + (1));
i__4731__auto___56621 = G__56622;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54507 = conformed_args__51664__auto__;
var map__54507__$1 = (((((!((map__54507 == null))))?(((((map__54507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54507):map__54507);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54507__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54507__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54507__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.marker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.marker.cljs$lang$applyTo = (function (seq54504){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54504));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feComponentTransfer = (function fulcro$client$dom$feComponentTransfer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56625 = arguments.length;
var i__4731__auto___56626 = (0);
while(true){
if((i__4731__auto___56626 < len__4730__auto___56625)){
args__4736__auto__.push((arguments[i__4731__auto___56626]));

var G__56627 = (i__4731__auto___56626 + (1));
i__4731__auto___56626 = G__56627;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54517 = conformed_args__51664__auto__;
var map__54517__$1 = (((((!((map__54517 == null))))?(((((map__54517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54517):map__54517);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54517__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54517__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54517__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq54511){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54511));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.td = (function fulcro$client$dom$td(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56631 = arguments.length;
var i__4731__auto___56632 = (0);
while(true){
if((i__4731__auto___56632 < len__4730__auto___56631)){
args__4736__auto__.push((arguments[i__4731__auto___56632]));

var G__56634 = (i__4731__auto___56632 + (1));
i__4731__auto___56632 = G__56634;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54537 = conformed_args__51664__auto__;
var map__54537__$1 = (((((!((map__54537 == null))))?(((((map__54537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54537):map__54537);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54537__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54537__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54537__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.td.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.td.cljs$lang$applyTo = (function (seq54531){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54531));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.tr = (function fulcro$client$dom$tr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56638 = arguments.length;
var i__4731__auto___56639 = (0);
while(true){
if((i__4731__auto___56639 < len__4730__auto___56638)){
args__4736__auto__.push((arguments[i__4731__auto___56639]));

var G__56643 = (i__4731__auto___56639 + (1));
i__4731__auto___56639 = G__56643;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54566 = conformed_args__51664__auto__;
var map__54566__$1 = (((((!((map__54566 == null))))?(((((map__54566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54566):map__54566);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54566__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54566__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54566__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.tr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.tr.cljs$lang$applyTo = (function (seq54554){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54554));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.circle = (function fulcro$client$dom$circle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56652 = arguments.length;
var i__4731__auto___56653 = (0);
while(true){
if((i__4731__auto___56653 < len__4730__auto___56652)){
args__4736__auto__.push((arguments[i__4731__auto___56653]));

var G__56654 = (i__4731__auto___56653 + (1));
i__4731__auto___56653 = G__56654;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54577 = conformed_args__51664__auto__;
var map__54577__$1 = (((((!((map__54577 == null))))?(((((map__54577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54577):map__54577);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54577__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54577__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54577__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.circle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.circle.cljs$lang$applyTo = (function (seq54572){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54572));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.section = (function fulcro$client$dom$section(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56659 = arguments.length;
var i__4731__auto___56660 = (0);
while(true){
if((i__4731__auto___56660 < len__4730__auto___56659)){
args__4736__auto__.push((arguments[i__4731__auto___56660]));

var G__56661 = (i__4731__auto___56660 + (1));
i__4731__auto___56660 = G__56661;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54589 = conformed_args__51664__auto__;
var map__54589__$1 = (((((!((map__54589 == null))))?(((((map__54589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54589):map__54589);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54589__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54589__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54589__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.section.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.section.cljs$lang$applyTo = (function (seq54584){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54584));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feDropShadow = (function fulcro$client$dom$feDropShadow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56666 = arguments.length;
var i__4731__auto___56667 = (0);
while(true){
if((i__4731__auto___56667 < len__4730__auto___56666)){
args__4736__auto__.push((arguments[i__4731__auto___56667]));

var G__56668 = (i__4731__auto___56667 + (1));
i__4731__auto___56667 = G__56668;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54596 = conformed_args__51664__auto__;
var map__54596__$1 = (((((!((map__54596 == null))))?(((((map__54596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54596):map__54596);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54596__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54596__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54596__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feDropShadow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feDropShadow.cljs$lang$applyTo = (function (seq54594){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54594));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.th = (function fulcro$client$dom$th(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56674 = arguments.length;
var i__4731__auto___56678 = (0);
while(true){
if((i__4731__auto___56678 < len__4730__auto___56674)){
args__4736__auto__.push((arguments[i__4731__auto___56678]));

var G__56680 = (i__4731__auto___56678 + (1));
i__4731__auto___56678 = G__56680;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54604 = conformed_args__51664__auto__;
var map__54604__$1 = (((((!((map__54604 == null))))?(((((map__54604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54604):map__54604);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54604__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54604__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54604__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.th.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.th.cljs$lang$applyTo = (function (seq54600){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54600));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.time = (function fulcro$client$dom$time(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56681 = arguments.length;
var i__4731__auto___56682 = (0);
while(true){
if((i__4731__auto___56682 < len__4730__auto___56681)){
args__4736__auto__.push((arguments[i__4731__auto___56682]));

var G__56683 = (i__4731__auto___56682 + (1));
i__4731__auto___56682 = G__56683;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54614 = conformed_args__51664__auto__;
var map__54614__$1 = (((((!((map__54614 == null))))?(((((map__54614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54614):map__54614);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54614__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54614__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54614__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.time.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.time.cljs$lang$applyTo = (function (seq54609){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54609));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.optgroup = (function fulcro$client$dom$optgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56689 = arguments.length;
var i__4731__auto___56690 = (0);
while(true){
if((i__4731__auto___56690 < len__4730__auto___56689)){
args__4736__auto__.push((arguments[i__4731__auto___56690]));

var G__56691 = (i__4731__auto___56690 + (1));
i__4731__auto___56690 = G__56691;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54620 = conformed_args__51664__auto__;
var map__54620__$1 = (((((!((map__54620 == null))))?(((((map__54620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54620):map__54620);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54620__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54620__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54620__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.optgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.optgroup.cljs$lang$applyTo = (function (seq54619){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54619));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.iframe = (function fulcro$client$dom$iframe(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56700 = arguments.length;
var i__4731__auto___56701 = (0);
while(true){
if((i__4731__auto___56701 < len__4730__auto___56700)){
args__4736__auto__.push((arguments[i__4731__auto___56701]));

var G__56702 = (i__4731__auto___56701 + (1));
i__4731__auto___56701 = G__56702;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54635 = conformed_args__51664__auto__;
var map__54635__$1 = (((((!((map__54635 == null))))?(((((map__54635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54635):map__54635);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54635__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54635__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54635__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.iframe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.iframe.cljs$lang$applyTo = (function (seq54627){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54627));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.color_profile = (function fulcro$client$dom$color_profile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56710 = arguments.length;
var i__4731__auto___56711 = (0);
while(true){
if((i__4731__auto___56711 < len__4730__auto___56710)){
args__4736__auto__.push((arguments[i__4731__auto___56711]));

var G__56712 = (i__4731__auto___56711 + (1));
i__4731__auto___56711 = G__56712;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54652 = conformed_args__51664__auto__;
var map__54652__$1 = (((((!((map__54652 == null))))?(((((map__54652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54652):map__54652);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54652__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54652__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54652__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.color_profile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.color_profile.cljs$lang$applyTo = (function (seq54650){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54650));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.legend = (function fulcro$client$dom$legend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56714 = arguments.length;
var i__4731__auto___56715 = (0);
while(true){
if((i__4731__auto___56715 < len__4730__auto___56714)){
args__4736__auto__.push((arguments[i__4731__auto___56715]));

var G__56716 = (i__4731__auto___56715 + (1));
i__4731__auto___56715 = G__56716;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54659 = conformed_args__51664__auto__;
var map__54659__$1 = (((((!((map__54659 == null))))?(((((map__54659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54659):map__54659);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54659__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54659__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54659__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.legend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.legend.cljs$lang$applyTo = (function (seq54658){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54658));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.em = (function fulcro$client$dom$em(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56721 = arguments.length;
var i__4731__auto___56722 = (0);
while(true){
if((i__4731__auto___56722 < len__4730__auto___56721)){
args__4736__auto__.push((arguments[i__4731__auto___56722]));

var G__56724 = (i__4731__auto___56722 + (1));
i__4731__auto___56722 = G__56724;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54676 = conformed_args__51664__auto__;
var map__54676__$1 = (((((!((map__54676 == null))))?(((((map__54676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54676):map__54676);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54676__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54676__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54676__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.em.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.em.cljs$lang$applyTo = (function (seq54675){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54675));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.kbd = (function fulcro$client$dom$kbd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56729 = arguments.length;
var i__4731__auto___56730 = (0);
while(true){
if((i__4731__auto___56730 < len__4730__auto___56729)){
args__4736__auto__.push((arguments[i__4731__auto___56730]));

var G__56731 = (i__4731__auto___56730 + (1));
i__4731__auto___56730 = G__56731;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54689 = conformed_args__51664__auto__;
var map__54689__$1 = (((((!((map__54689 == null))))?(((((map__54689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54689):map__54689);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54689__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54689__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54689__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.kbd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.kbd.cljs$lang$applyTo = (function (seq54686){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54686));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.article = (function fulcro$client$dom$article(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56735 = arguments.length;
var i__4731__auto___56736 = (0);
while(true){
if((i__4731__auto___56736 < len__4730__auto___56735)){
args__4736__auto__.push((arguments[i__4731__auto___56736]));

var G__56737 = (i__4731__auto___56736 + (1));
i__4731__auto___56736 = G__56737;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54715 = conformed_args__51664__auto__;
var map__54715__$1 = (((((!((map__54715 == null))))?(((((map__54715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54715):map__54715);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54715__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54715__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54715__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.article.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.article.cljs$lang$applyTo = (function (seq54702){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54702));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.animateColor = (function fulcro$client$dom$animateColor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56739 = arguments.length;
var i__4731__auto___56740 = (0);
while(true){
if((i__4731__auto___56740 < len__4730__auto___56739)){
args__4736__auto__.push((arguments[i__4731__auto___56740]));

var G__56742 = (i__4731__auto___56740 + (1));
i__4731__auto___56740 = G__56742;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54729 = conformed_args__51664__auto__;
var map__54729__$1 = (((((!((map__54729 == null))))?(((((map__54729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54729):map__54729);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54729__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54729__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54729__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.animateColor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.animateColor.cljs$lang$applyTo = (function (seq54719){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54719));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.clipPath = (function fulcro$client$dom$clipPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56744 = arguments.length;
var i__4731__auto___56745 = (0);
while(true){
if((i__4731__auto___56745 < len__4730__auto___56744)){
args__4736__auto__.push((arguments[i__4731__auto___56745]));

var G__56748 = (i__4731__auto___56745 + (1));
i__4731__auto___56745 = G__56748;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54740 = conformed_args__51664__auto__;
var map__54740__$1 = (((((!((map__54740 == null))))?(((((map__54740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54740):map__54740);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54740__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54740__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54740__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.clipPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.clipPath.cljs$lang$applyTo = (function (seq54735){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54735));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.abbr = (function fulcro$client$dom$abbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56751 = arguments.length;
var i__4731__auto___56752 = (0);
while(true){
if((i__4731__auto___56752 < len__4730__auto___56751)){
args__4736__auto__.push((arguments[i__4731__auto___56752]));

var G__56753 = (i__4731__auto___56752 + (1));
i__4731__auto___56752 = G__56753;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54769 = conformed_args__51664__auto__;
var map__54769__$1 = (((((!((map__54769 == null))))?(((((map__54769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54769):map__54769);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54769__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54769__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54769__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.abbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.abbr.cljs$lang$applyTo = (function (seq54758){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54758));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.altGlyphDef = (function fulcro$client$dom$altGlyphDef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56759 = arguments.length;
var i__4731__auto___56760 = (0);
while(true){
if((i__4731__auto___56760 < len__4730__auto___56759)){
args__4736__auto__.push((arguments[i__4731__auto___56760]));

var G__56761 = (i__4731__auto___56760 + (1));
i__4731__auto___56760 = G__56761;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54776 = conformed_args__51664__auto__;
var map__54776__$1 = (((((!((map__54776 == null))))?(((((map__54776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54776):map__54776);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54776__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54776__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54776__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.altGlyphDef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.altGlyphDef.cljs$lang$applyTo = (function (seq54773){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54773));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.meshrow = (function fulcro$client$dom$meshrow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56766 = arguments.length;
var i__4731__auto___56767 = (0);
while(true){
if((i__4731__auto___56767 < len__4730__auto___56766)){
args__4736__auto__.push((arguments[i__4731__auto___56767]));

var G__56768 = (i__4731__auto___56767 + (1));
i__4731__auto___56767 = G__56768;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54791 = conformed_args__51664__auto__;
var map__54791__$1 = (((((!((map__54791 == null))))?(((((map__54791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54791):map__54791);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54791__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54791__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54791__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.meshrow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.meshrow.cljs$lang$applyTo = (function (seq54787){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54787));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.cursor = (function fulcro$client$dom$cursor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56772 = arguments.length;
var i__4731__auto___56773 = (0);
while(true){
if((i__4731__auto___56773 < len__4730__auto___56772)){
args__4736__auto__.push((arguments[i__4731__auto___56773]));

var G__56774 = (i__4731__auto___56773 + (1));
i__4731__auto___56773 = G__56774;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54825 = conformed_args__51664__auto__;
var map__54825__$1 = (((((!((map__54825 == null))))?(((((map__54825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54825):map__54825);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54825__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54825__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54825__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.cursor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.cursor.cljs$lang$applyTo = (function (seq54814){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54814));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.animate = (function fulcro$client$dom$animate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56784 = arguments.length;
var i__4731__auto___56785 = (0);
while(true){
if((i__4731__auto___56785 < len__4730__auto___56784)){
args__4736__auto__.push((arguments[i__4731__auto___56785]));

var G__56786 = (i__4731__auto___56785 + (1));
i__4731__auto___56785 = G__56786;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54832 = conformed_args__51664__auto__;
var map__54832__$1 = (((((!((map__54832 == null))))?(((((map__54832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54832):map__54832);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54832__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54832__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54832__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.animate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.animate.cljs$lang$applyTo = (function (seq54829){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54829));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.source = (function fulcro$client$dom$source(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56798 = arguments.length;
var i__4731__auto___56799 = (0);
while(true){
if((i__4731__auto___56799 < len__4730__auto___56798)){
args__4736__auto__.push((arguments[i__4731__auto___56799]));

var G__56801 = (i__4731__auto___56799 + (1));
i__4731__auto___56799 = G__56801;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54839 = conformed_args__51664__auto__;
var map__54839__$1 = (((((!((map__54839 == null))))?(((((map__54839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54839):map__54839);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54839__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54839__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54839__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.source.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.source.cljs$lang$applyTo = (function (seq54836){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54836));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.output = (function fulcro$client$dom$output(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56805 = arguments.length;
var i__4731__auto___56812 = (0);
while(true){
if((i__4731__auto___56812 < len__4730__auto___56805)){
args__4736__auto__.push((arguments[i__4731__auto___56812]));

var G__56813 = (i__4731__auto___56812 + (1));
i__4731__auto___56812 = G__56813;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54850 = conformed_args__51664__auto__;
var map__54850__$1 = (((((!((map__54850 == null))))?(((((map__54850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54850):map__54850);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54850__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54850__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54850__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.output.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.output.cljs$lang$applyTo = (function (seq54843){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54843));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.font_face = (function fulcro$client$dom$font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56815 = arguments.length;
var i__4731__auto___56816 = (0);
while(true){
if((i__4731__auto___56816 < len__4730__auto___56815)){
args__4736__auto__.push((arguments[i__4731__auto___56816]));

var G__56817 = (i__4731__auto___56816 + (1));
i__4731__auto___56816 = G__56817;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54869 = conformed_args__51664__auto__;
var map__54869__$1 = (((((!((map__54869 == null))))?(((((map__54869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54869):map__54869);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54869__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54869__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54869__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.font_face.cljs$lang$applyTo = (function (seq54861){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54861));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feMergeNode = (function fulcro$client$dom$feMergeNode(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56830 = arguments.length;
var i__4731__auto___56831 = (0);
while(true){
if((i__4731__auto___56831 < len__4730__auto___56830)){
args__4736__auto__.push((arguments[i__4731__auto___56831]));

var G__56832 = (i__4731__auto___56831 + (1));
i__4731__auto___56831 = G__56832;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54877 = conformed_args__51664__auto__;
var map__54877__$1 = (((((!((map__54877 == null))))?(((((map__54877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54877):map__54877);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54877__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54877__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54877__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feMergeNode.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feMergeNode.cljs$lang$applyTo = (function (seq54874){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54874));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feSpotLight = (function fulcro$client$dom$feSpotLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56847 = arguments.length;
var i__4731__auto___56849 = (0);
while(true){
if((i__4731__auto___56849 < len__4730__auto___56847)){
args__4736__auto__.push((arguments[i__4731__auto___56849]));

var G__56850 = (i__4731__auto___56849 + (1));
i__4731__auto___56849 = G__56850;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54885 = conformed_args__51664__auto__;
var map__54885__$1 = (((((!((map__54885 == null))))?(((((map__54885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54885):map__54885);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54885__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54885__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54885__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feSpotLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feSpotLight.cljs$lang$applyTo = (function (seq54881){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54881));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.header = (function fulcro$client$dom$header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56852 = arguments.length;
var i__4731__auto___56853 = (0);
while(true){
if((i__4731__auto___56853 < len__4730__auto___56852)){
args__4736__auto__.push((arguments[i__4731__auto___56853]));

var G__56854 = (i__4731__auto___56853 + (1));
i__4731__auto___56853 = G__56854;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54891 = conformed_args__51664__auto__;
var map__54891__$1 = (((((!((map__54891 == null))))?(((((map__54891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54891):map__54891);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54891__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54891__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54891__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.header.cljs$lang$applyTo = (function (seq54887){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54887));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.datalist = (function fulcro$client$dom$datalist(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56855 = arguments.length;
var i__4731__auto___56856 = (0);
while(true){
if((i__4731__auto___56856 < len__4730__auto___56855)){
args__4736__auto__.push((arguments[i__4731__auto___56856]));

var G__56857 = (i__4731__auto___56856 + (1));
i__4731__auto___56856 = G__56857;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54906 = conformed_args__51664__auto__;
var map__54906__$1 = (((((!((map__54906 == null))))?(((((map__54906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54906):map__54906);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54906__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54906__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54906__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.datalist.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.datalist.cljs$lang$applyTo = (function (seq54901){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54901));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.tfoot = (function fulcro$client$dom$tfoot(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56870 = arguments.length;
var i__4731__auto___56871 = (0);
while(true){
if((i__4731__auto___56871 < len__4730__auto___56870)){
args__4736__auto__.push((arguments[i__4731__auto___56871]));

var G__56872 = (i__4731__auto___56871 + (1));
i__4731__auto___56871 = G__56872;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54913 = conformed_args__51664__auto__;
var map__54913__$1 = (((((!((map__54913 == null))))?(((((map__54913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54913):map__54913);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54913__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54913__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54913__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.tfoot.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.tfoot.cljs$lang$applyTo = (function (seq54911){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54911));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.s = (function fulcro$client$dom$s(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56877 = arguments.length;
var i__4731__auto___56878 = (0);
while(true){
if((i__4731__auto___56878 < len__4730__auto___56877)){
args__4736__auto__.push((arguments[i__4731__auto___56878]));

var G__56881 = (i__4731__auto___56878 + (1));
i__4731__auto___56878 = G__56881;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54921 = conformed_args__51664__auto__;
var map__54921__$1 = (((((!((map__54921 == null))))?(((((map__54921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54921):map__54921);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54921__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54921__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54921__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.s.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.s.cljs$lang$applyTo = (function (seq54916){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54916));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.hatch = (function fulcro$client$dom$hatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56884 = arguments.length;
var i__4731__auto___56885 = (0);
while(true){
if((i__4731__auto___56885 < len__4730__auto___56884)){
args__4736__auto__.push((arguments[i__4731__auto___56885]));

var G__56886 = (i__4731__auto___56885 + (1));
i__4731__auto___56885 = G__56886;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54928 = conformed_args__51664__auto__;
var map__54928__$1 = (((((!((map__54928 == null))))?(((((map__54928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54928):map__54928);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54928__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54928__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54928__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.hatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.hatch.cljs$lang$applyTo = (function (seq54926){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54926));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.ins = (function fulcro$client$dom$ins(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56887 = arguments.length;
var i__4731__auto___56888 = (0);
while(true){
if((i__4731__auto___56888 < len__4730__auto___56887)){
args__4736__auto__.push((arguments[i__4731__auto___56888]));

var G__56889 = (i__4731__auto___56888 + (1));
i__4731__auto___56888 = G__56889;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54939 = conformed_args__51664__auto__;
var map__54939__$1 = (((((!((map__54939 == null))))?(((((map__54939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54939):map__54939);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54939__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54939__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54939__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.ins.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.ins.cljs$lang$applyTo = (function (seq54936){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54936));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.footer = (function fulcro$client$dom$footer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56893 = arguments.length;
var i__4731__auto___56894 = (0);
while(true){
if((i__4731__auto___56894 < len__4730__auto___56893)){
args__4736__auto__.push((arguments[i__4731__auto___56894]));

var G__56897 = (i__4731__auto___56894 + (1));
i__4731__auto___56894 = G__56897;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54959 = conformed_args__51664__auto__;
var map__54959__$1 = (((((!((map__54959 == null))))?(((((map__54959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54959):map__54959);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54959__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54959__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54959__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.footer.cljs$lang$applyTo = (function (seq54949){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54949));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.mpath = (function fulcro$client$dom$mpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56901 = arguments.length;
var i__4731__auto___56902 = (0);
while(true){
if((i__4731__auto___56902 < len__4730__auto___56901)){
args__4736__auto__.push((arguments[i__4731__auto___56902]));

var G__56905 = (i__4731__auto___56902 + (1));
i__4731__auto___56902 = G__56905;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54971 = conformed_args__51664__auto__;
var map__54971__$1 = (((((!((map__54971 == null))))?(((((map__54971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54971):map__54971);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54971__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54971__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54971__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.mpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.mpath.cljs$lang$applyTo = (function (seq54963){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54963));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.title = (function fulcro$client$dom$title(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56906 = arguments.length;
var i__4731__auto___56907 = (0);
while(true){
if((i__4731__auto___56907 < len__4730__auto___56906)){
args__4736__auto__.push((arguments[i__4731__auto___56907]));

var G__56908 = (i__4731__auto___56907 + (1));
i__4731__auto___56907 = G__56908;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54988 = conformed_args__51664__auto__;
var map__54988__$1 = (((((!((map__54988 == null))))?(((((map__54988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54988):map__54988);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54988__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54988__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54988__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.title.cljs$lang$applyTo = (function (seq54977){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54977));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.h5 = (function fulcro$client$dom$h5(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56913 = arguments.length;
var i__4731__auto___56914 = (0);
while(true){
if((i__4731__auto___56914 < len__4730__auto___56913)){
args__4736__auto__.push((arguments[i__4731__auto___56914]));

var G__56915 = (i__4731__auto___56914 + (1));
i__4731__auto___56914 = G__56915;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54998 = conformed_args__51664__auto__;
var map__54998__$1 = (((((!((map__54998 == null))))?(((((map__54998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54998):map__54998);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54998__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54998__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54998__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.h5.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h5.cljs$lang$applyTo = (function (seq54993){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54993));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.meshgradient = (function fulcro$client$dom$meshgradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56923 = arguments.length;
var i__4731__auto___56924 = (0);
while(true){
if((i__4731__auto___56924 < len__4730__auto___56923)){
args__4736__auto__.push((arguments[i__4731__auto___56924]));

var G__56925 = (i__4731__auto___56924 + (1));
i__4731__auto___56924 = G__56925;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55010 = conformed_args__51664__auto__;
var map__55010__$1 = (((((!((map__55010 == null))))?(((((map__55010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55010):map__55010);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55010__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55010__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55010__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.meshgradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.meshgradient.cljs$lang$applyTo = (function (seq55007){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55007));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.canvas = (function fulcro$client$dom$canvas(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56931 = arguments.length;
var i__4731__auto___56932 = (0);
while(true){
if((i__4731__auto___56932 < len__4730__auto___56931)){
args__4736__auto__.push((arguments[i__4731__auto___56932]));

var G__56933 = (i__4731__auto___56932 + (1));
i__4731__auto___56932 = G__56933;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55030 = conformed_args__51664__auto__;
var map__55030__$1 = (((((!((map__55030 == null))))?(((((map__55030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55030):map__55030);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55030__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55030__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55030__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.canvas.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.canvas.cljs$lang$applyTo = (function (seq55027){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55027));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.param = (function fulcro$client$dom$param(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56938 = arguments.length;
var i__4731__auto___56939 = (0);
while(true){
if((i__4731__auto___56939 < len__4730__auto___56938)){
args__4736__auto__.push((arguments[i__4731__auto___56939]));

var G__56940 = (i__4731__auto___56939 + (1));
i__4731__auto___56939 = G__56940;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55044 = conformed_args__51664__auto__;
var map__55044__$1 = (((((!((map__55044 == null))))?(((((map__55044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55044):map__55044);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55044__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55044__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55044__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.param.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.param.cljs$lang$applyTo = (function (seq55039){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55039));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.font = (function fulcro$client$dom$font(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56947 = arguments.length;
var i__4731__auto___56950 = (0);
while(true){
if((i__4731__auto___56950 < len__4730__auto___56947)){
args__4736__auto__.push((arguments[i__4731__auto___56950]));

var G__56951 = (i__4731__auto___56950 + (1));
i__4731__auto___56950 = G__56951;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55062 = conformed_args__51664__auto__;
var map__55062__$1 = (((((!((map__55062 == null))))?(((((map__55062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55062):map__55062);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55062__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55062__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55062__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.font.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.font.cljs$lang$applyTo = (function (seq55055){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55055));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.div = (function fulcro$client$dom$div(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56954 = arguments.length;
var i__4731__auto___56955 = (0);
while(true){
if((i__4731__auto___56955 < len__4730__auto___56954)){
args__4736__auto__.push((arguments[i__4731__auto___56955]));

var G__56956 = (i__4731__auto___56955 + (1));
i__4731__auto___56955 = G__56956;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55071 = conformed_args__51664__auto__;
var map__55071__$1 = (((((!((map__55071 == null))))?(((((map__55071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55071):map__55071);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55071__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55071__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55071__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.div.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.div.cljs$lang$applyTo = (function (seq55068){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55068));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.option = (function fulcro$client$dom$option(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56959 = arguments.length;
var i__4731__auto___56960 = (0);
while(true){
if((i__4731__auto___56960 < len__4730__auto___56959)){
args__4736__auto__.push((arguments[i__4731__auto___56960]));

var G__56961 = (i__4731__auto___56960 + (1));
i__4731__auto___56960 = G__56961;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55078 = conformed_args__51664__auto__;
var map__55078__$1 = (((((!((map__55078 == null))))?(((((map__55078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55078):map__55078);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55078__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55078__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55078__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.option.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.option.cljs$lang$applyTo = (function (seq55075){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55075));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feFlood = (function fulcro$client$dom$feFlood(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56964 = arguments.length;
var i__4731__auto___56965 = (0);
while(true){
if((i__4731__auto___56965 < len__4730__auto___56964)){
args__4736__auto__.push((arguments[i__4731__auto___56965]));

var G__56966 = (i__4731__auto___56965 + (1));
i__4731__auto___56965 = G__56966;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55085 = conformed_args__51664__auto__;
var map__55085__$1 = (((((!((map__55085 == null))))?(((((map__55085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55085):map__55085);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55085__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55085__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55085__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feFlood.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feFlood.cljs$lang$applyTo = (function (seq55082){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55082));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.summary = (function fulcro$client$dom$summary(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56969 = arguments.length;
var i__4731__auto___56970 = (0);
while(true){
if((i__4731__auto___56970 < len__4730__auto___56969)){
args__4736__auto__.push((arguments[i__4731__auto___56970]));

var G__56971 = (i__4731__auto___56970 + (1));
i__4731__auto___56970 = G__56971;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55094 = conformed_args__51664__auto__;
var map__55094__$1 = (((((!((map__55094 == null))))?(((((map__55094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55094):map__55094);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55094__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55094__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55094__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.summary.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.summary.cljs$lang$applyTo = (function (seq55090){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55090));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feMorphology = (function fulcro$client$dom$feMorphology(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56974 = arguments.length;
var i__4731__auto___56975 = (0);
while(true){
if((i__4731__auto___56975 < len__4730__auto___56974)){
args__4736__auto__.push((arguments[i__4731__auto___56975]));

var G__56976 = (i__4731__auto___56975 + (1));
i__4731__auto___56975 = G__56976;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55109 = conformed_args__51664__auto__;
var map__55109__$1 = (((((!((map__55109 == null))))?(((((map__55109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55109):map__55109);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55109__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55109__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55109__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feMorphology.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feMorphology.cljs$lang$applyTo = (function (seq55103){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55103));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.samp = (function fulcro$client$dom$samp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56980 = arguments.length;
var i__4731__auto___56981 = (0);
while(true){
if((i__4731__auto___56981 < len__4730__auto___56980)){
args__4736__auto__.push((arguments[i__4731__auto___56981]));

var G__56982 = (i__4731__auto___56981 + (1));
i__4731__auto___56981 = G__56982;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55119 = conformed_args__51664__auto__;
var map__55119__$1 = (((((!((map__55119 == null))))?(((((map__55119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55119):map__55119);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55119__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55119__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55119__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.samp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.samp.cljs$lang$applyTo = (function (seq55113){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55113));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.glyphRef = (function fulcro$client$dom$glyphRef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56983 = arguments.length;
var i__4731__auto___56984 = (0);
while(true){
if((i__4731__auto___56984 < len__4730__auto___56983)){
args__4736__auto__.push((arguments[i__4731__auto___56984]));

var G__56987 = (i__4731__auto___56984 + (1));
i__4731__auto___56984 = G__56987;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55135 = conformed_args__51664__auto__;
var map__55135__$1 = (((((!((map__55135 == null))))?(((((map__55135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55135):map__55135);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55135__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55135__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55135__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.glyphRef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.glyphRef.cljs$lang$applyTo = (function (seq55133){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55133));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.small = (function fulcro$client$dom$small(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56991 = arguments.length;
var i__4731__auto___56992 = (0);
while(true){
if((i__4731__auto___56992 < len__4730__auto___56991)){
args__4736__auto__.push((arguments[i__4731__auto___56992]));

var G__56993 = (i__4731__auto___56992 + (1));
i__4731__auto___56992 = G__56993;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55143 = conformed_args__51664__auto__;
var map__55143__$1 = (((((!((map__55143 == null))))?(((((map__55143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55143):map__55143);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55143__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55143__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55143__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.small.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.small.cljs$lang$applyTo = (function (seq55140){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55140));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.style = (function fulcro$client$dom$style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56994 = arguments.length;
var i__4731__auto___56995 = (0);
while(true){
if((i__4731__auto___56995 < len__4730__auto___56994)){
args__4736__auto__.push((arguments[i__4731__auto___56995]));

var G__56996 = (i__4731__auto___56995 + (1));
i__4731__auto___56995 = G__56996;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55160 = conformed_args__51664__auto__;
var map__55160__$1 = (((((!((map__55160 == null))))?(((((map__55160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55160):map__55160);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55160__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55160__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55160__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.style.cljs$lang$applyTo = (function (seq55148){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55148));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.textarea = (function fulcro$client$dom$textarea(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57005 = arguments.length;
var i__4731__auto___57006 = (0);
while(true){
if((i__4731__auto___57006 < len__4730__auto___57005)){
args__4736__auto__.push((arguments[i__4731__auto___57006]));

var G__57007 = (i__4731__auto___57006 + (1));
i__4731__auto___57006 = G__57007;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55172 = conformed_args__51664__auto__;
var map__55172__$1 = (((((!((map__55172 == null))))?(((((map__55172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55172):map__55172);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55172__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55172__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55172__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.textarea.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.textarea.cljs$lang$applyTo = (function (seq55167){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55167));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feGaussianBlur = (function fulcro$client$dom$feGaussianBlur(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57012 = arguments.length;
var i__4731__auto___57013 = (0);
while(true){
if((i__4731__auto___57013 < len__4730__auto___57012)){
args__4736__auto__.push((arguments[i__4731__auto___57013]));

var G__57015 = (i__4731__auto___57013 + (1));
i__4731__auto___57013 = G__57015;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55186 = conformed_args__51664__auto__;
var map__55186__$1 = (((((!((map__55186 == null))))?(((((map__55186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55186):map__55186);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55186__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55186__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55186__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq55179){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55179));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.h4 = (function fulcro$client$dom$h4(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57022 = arguments.length;
var i__4731__auto___57023 = (0);
while(true){
if((i__4731__auto___57023 < len__4730__auto___57022)){
args__4736__auto__.push((arguments[i__4731__auto___57023]));

var G__57024 = (i__4731__auto___57023 + (1));
i__4731__auto___57023 = G__57024;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55207 = conformed_args__51664__auto__;
var map__55207__$1 = (((((!((map__55207 == null))))?(((((map__55207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55207):map__55207);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55207__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55207__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55207__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.h4.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h4.cljs$lang$applyTo = (function (seq55201){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55201));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.head = (function fulcro$client$dom$head(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57026 = arguments.length;
var i__4731__auto___57027 = (0);
while(true){
if((i__4731__auto___57027 < len__4730__auto___57026)){
args__4736__auto__.push((arguments[i__4731__auto___57027]));

var G__57028 = (i__4731__auto___57027 + (1));
i__4731__auto___57027 = G__57028;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55225 = conformed_args__51664__auto__;
var map__55225__$1 = (((((!((map__55225 == null))))?(((((map__55225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55225):map__55225);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55225__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55225__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55225__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.head.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.head.cljs$lang$applyTo = (function (seq55213){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55213));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.g = (function fulcro$client$dom$g(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57029 = arguments.length;
var i__4731__auto___57030 = (0);
while(true){
if((i__4731__auto___57030 < len__4730__auto___57029)){
args__4736__auto__.push((arguments[i__4731__auto___57030]));

var G__57031 = (i__4731__auto___57030 + (1));
i__4731__auto___57030 = G__57031;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55266 = conformed_args__51664__auto__;
var map__55266__$1 = (((((!((map__55266 == null))))?(((((map__55266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55266):map__55266);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55266__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55266__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55266__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.g.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.g.cljs$lang$applyTo = (function (seq55257){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55257));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.missing_glyph = (function fulcro$client$dom$missing_glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57038 = arguments.length;
var i__4731__auto___57039 = (0);
while(true){
if((i__4731__auto___57039 < len__4730__auto___57038)){
args__4736__auto__.push((arguments[i__4731__auto___57039]));

var G__57040 = (i__4731__auto___57039 + (1));
i__4731__auto___57039 = G__57040;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55281 = conformed_args__51664__auto__;
var map__55281__$1 = (((((!((map__55281 == null))))?(((((map__55281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55281):map__55281);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55281__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55281__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55281__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.missing_glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.missing_glyph.cljs$lang$applyTo = (function (seq55278){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55278));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.stop = (function fulcro$client$dom$stop(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57053 = arguments.length;
var i__4731__auto___57054 = (0);
while(true){
if((i__4731__auto___57054 < len__4730__auto___57053)){
args__4736__auto__.push((arguments[i__4731__auto___57054]));

var G__57055 = (i__4731__auto___57054 + (1));
i__4731__auto___57054 = G__57055;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55299 = conformed_args__51664__auto__;
var map__55299__$1 = (((((!((map__55299 == null))))?(((((map__55299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55299):map__55299);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55299__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55299__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55299__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.stop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.stop.cljs$lang$applyTo = (function (seq55290){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55290));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feDiffuseLighting = (function fulcro$client$dom$feDiffuseLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57063 = arguments.length;
var i__4731__auto___57064 = (0);
while(true){
if((i__4731__auto___57064 < len__4730__auto___57063)){
args__4736__auto__.push((arguments[i__4731__auto___57064]));

var G__57065 = (i__4731__auto___57064 + (1));
i__4731__auto___57064 = G__57065;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55314 = conformed_args__51664__auto__;
var map__55314__$1 = (((((!((map__55314 == null))))?(((((map__55314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55314):map__55314);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55314__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55314__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55314__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq55310){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55310));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.filter = (function fulcro$client$dom$filter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57069 = arguments.length;
var i__4731__auto___57070 = (0);
while(true){
if((i__4731__auto___57070 < len__4730__auto___57069)){
args__4736__auto__.push((arguments[i__4731__auto___57070]));

var G__57071 = (i__4731__auto___57070 + (1));
i__4731__auto___57070 = G__57071;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55333 = conformed_args__51664__auto__;
var map__55333__$1 = (((((!((map__55333 == null))))?(((((map__55333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55333):map__55333);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55333__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55333__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55333__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.filter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.filter.cljs$lang$applyTo = (function (seq55323){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55323));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feComposite = (function fulcro$client$dom$feComposite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57085 = arguments.length;
var i__4731__auto___57086 = (0);
while(true){
if((i__4731__auto___57086 < len__4730__auto___57085)){
args__4736__auto__.push((arguments[i__4731__auto___57086]));

var G__57091 = (i__4731__auto___57086 + (1));
i__4731__auto___57086 = G__57091;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55346 = conformed_args__51664__auto__;
var map__55346__$1 = (((((!((map__55346 == null))))?(((((map__55346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55346):map__55346);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55346__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55346__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55346__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feComposite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feComposite.cljs$lang$applyTo = (function (seq55345){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55345));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.mesh = (function fulcro$client$dom$mesh(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57106 = arguments.length;
var i__4731__auto___57107 = (0);
while(true){
if((i__4731__auto___57107 < len__4730__auto___57106)){
args__4736__auto__.push((arguments[i__4731__auto___57107]));

var G__57111 = (i__4731__auto___57107 + (1));
i__4731__auto___57107 = G__57111;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55349 = conformed_args__51664__auto__;
var map__55349__$1 = (((((!((map__55349 == null))))?(((((map__55349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55349):map__55349);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55349__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55349__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55349__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.mesh.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.mesh.cljs$lang$applyTo = (function (seq55348){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55348));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.var$ = (function fulcro$client$dom$var(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57117 = arguments.length;
var i__4731__auto___57118 = (0);
while(true){
if((i__4731__auto___57118 < len__4730__auto___57117)){
args__4736__auto__.push((arguments[i__4731__auto___57118]));

var G__57119 = (i__4731__auto___57118 + (1));
i__4731__auto___57118 = G__57119;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55369 = conformed_args__51664__auto__;
var map__55369__$1 = (((((!((map__55369 == null))))?(((((map__55369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55369):map__55369);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55369__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55369__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55369__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.var$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.var$.cljs$lang$applyTo = (function (seq55354){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55354));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.tspan = (function fulcro$client$dom$tspan(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57120 = arguments.length;
var i__4731__auto___57121 = (0);
while(true){
if((i__4731__auto___57121 < len__4730__auto___57120)){
args__4736__auto__.push((arguments[i__4731__auto___57121]));

var G__57122 = (i__4731__auto___57121 + (1));
i__4731__auto___57121 = G__57122;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55380 = conformed_args__51664__auto__;
var map__55380__$1 = (((((!((map__55380 == null))))?(((((map__55380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55380):map__55380);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55380__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55380__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55380__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.tspan.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.tspan.cljs$lang$applyTo = (function (seq55376){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55376));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.ol = (function fulcro$client$dom$ol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57123 = arguments.length;
var i__4731__auto___57124 = (0);
while(true){
if((i__4731__auto___57124 < len__4730__auto___57123)){
args__4736__auto__.push((arguments[i__4731__auto___57124]));

var G__57125 = (i__4731__auto___57124 + (1));
i__4731__auto___57124 = G__57125;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55389 = conformed_args__51664__auto__;
var map__55389__$1 = (((((!((map__55389 == null))))?(((((map__55389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55389):map__55389);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55389__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55389__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55389__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.ol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.ol.cljs$lang$applyTo = (function (seq55387){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55387));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.details = (function fulcro$client$dom$details(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57127 = arguments.length;
var i__4731__auto___57128 = (0);
while(true){
if((i__4731__auto___57128 < len__4730__auto___57127)){
args__4736__auto__.push((arguments[i__4731__auto___57128]));

var G__57129 = (i__4731__auto___57128 + (1));
i__4731__auto___57128 = G__57129;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55398 = conformed_args__51664__auto__;
var map__55398__$1 = (((((!((map__55398 == null))))?(((((map__55398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55398):map__55398);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55398__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55398__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55398__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.details.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.details.cljs$lang$applyTo = (function (seq55393){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55393));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.line = (function fulcro$client$dom$line(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57130 = arguments.length;
var i__4731__auto___57131 = (0);
while(true){
if((i__4731__auto___57131 < len__4730__auto___57130)){
args__4736__auto__.push((arguments[i__4731__auto___57131]));

var G__57132 = (i__4731__auto___57131 + (1));
i__4731__auto___57131 = G__57132;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55407 = conformed_args__51664__auto__;
var map__55407__$1 = (((((!((map__55407 == null))))?(((((map__55407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55407):map__55407);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55407__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55407__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55407__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.line.cljs$lang$applyTo = (function (seq55402){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55402));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.col = (function fulcro$client$dom$col(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57133 = arguments.length;
var i__4731__auto___57134 = (0);
while(true){
if((i__4731__auto___57134 < len__4730__auto___57133)){
args__4736__auto__.push((arguments[i__4731__auto___57134]));

var G__57136 = (i__4731__auto___57134 + (1));
i__4731__auto___57134 = G__57136;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55412 = conformed_args__51664__auto__;
var map__55412__$1 = (((((!((map__55412 == null))))?(((((map__55412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55412):map__55412);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.col.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.col.cljs$lang$applyTo = (function (seq55411){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55411));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.label = (function fulcro$client$dom$label(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57139 = arguments.length;
var i__4731__auto___57140 = (0);
while(true){
if((i__4731__auto___57140 < len__4730__auto___57139)){
args__4736__auto__.push((arguments[i__4731__auto___57140]));

var G__57142 = (i__4731__auto___57140 + (1));
i__4731__auto___57140 = G__57142;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55421 = conformed_args__51664__auto__;
var map__55421__$1 = (((((!((map__55421 == null))))?(((((map__55421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55421):map__55421);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55421__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55421__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55421__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.label.cljs$lang$applyTo = (function (seq55419){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55419));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.picture = (function fulcro$client$dom$picture(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57144 = arguments.length;
var i__4731__auto___57145 = (0);
while(true){
if((i__4731__auto___57145 < len__4730__auto___57144)){
args__4736__auto__.push((arguments[i__4731__auto___57145]));

var G__57146 = (i__4731__auto___57145 + (1));
i__4731__auto___57145 = G__57146;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55427 = conformed_args__51664__auto__;
var map__55427__$1 = (((((!((map__55427 == null))))?(((((map__55427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55427):map__55427);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55427__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55427__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55427__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.picture.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.picture.cljs$lang$applyTo = (function (seq55424){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55424));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.rt = (function fulcro$client$dom$rt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57150 = arguments.length;
var i__4731__auto___57151 = (0);
while(true){
if((i__4731__auto___57151 < len__4730__auto___57150)){
args__4736__auto__.push((arguments[i__4731__auto___57151]));

var G__57152 = (i__4731__auto___57151 + (1));
i__4731__auto___57151 = G__57152;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55436 = conformed_args__51664__auto__;
var map__55436__$1 = (((((!((map__55436 == null))))?(((((map__55436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55436):map__55436);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55436__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55436__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55436__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.rt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.rt.cljs$lang$applyTo = (function (seq55431){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55431));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.h6 = (function fulcro$client$dom$h6(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57153 = arguments.length;
var i__4731__auto___57154 = (0);
while(true){
if((i__4731__auto___57154 < len__4730__auto___57153)){
args__4736__auto__.push((arguments[i__4731__auto___57154]));

var G__57155 = (i__4731__auto___57154 + (1));
i__4731__auto___57154 = G__57155;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55443 = conformed_args__51664__auto__;
var map__55443__$1 = (((((!((map__55443 == null))))?(((((map__55443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55443):map__55443);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55443__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55443__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55443__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.h6.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h6.cljs$lang$applyTo = (function (seq55441){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55441));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.vkern = (function fulcro$client$dom$vkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57156 = arguments.length;
var i__4731__auto___57157 = (0);
while(true){
if((i__4731__auto___57157 < len__4730__auto___57156)){
args__4736__auto__.push((arguments[i__4731__auto___57157]));

var G__57158 = (i__4731__auto___57157 + (1));
i__4731__auto___57157 = G__57158;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55449 = conformed_args__51664__auto__;
var map__55449__$1 = (((((!((map__55449 == null))))?(((((map__55449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55449):map__55449);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55449__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55449__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55449__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.vkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.vkern.cljs$lang$applyTo = (function (seq55447){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55447));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.link = (function fulcro$client$dom$link(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57161 = arguments.length;
var i__4731__auto___57162 = (0);
while(true){
if((i__4731__auto___57162 < len__4730__auto___57161)){
args__4736__auto__.push((arguments[i__4731__auto___57162]));

var G__57163 = (i__4731__auto___57162 + (1));
i__4731__auto___57162 = G__57163;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55454 = conformed_args__51664__auto__;
var map__55454__$1 = (((((!((map__55454 == null))))?(((((map__55454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55454):map__55454);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55454__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55454__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55454__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.link.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.link.cljs$lang$applyTo = (function (seq55452){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55452));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.defs = (function fulcro$client$dom$defs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57164 = arguments.length;
var i__4731__auto___57165 = (0);
while(true){
if((i__4731__auto___57165 < len__4730__auto___57164)){
args__4736__auto__.push((arguments[i__4731__auto___57165]));

var G__57166 = (i__4731__auto___57165 + (1));
i__4731__auto___57165 = G__57166;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55459 = conformed_args__51664__auto__;
var map__55459__$1 = (((((!((map__55459 == null))))?(((((map__55459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55459):map__55459);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55459__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55459__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55459__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.defs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.defs.cljs$lang$applyTo = (function (seq55457){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55457));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.glyph = (function fulcro$client$dom$glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57169 = arguments.length;
var i__4731__auto___57170 = (0);
while(true){
if((i__4731__auto___57170 < len__4730__auto___57169)){
args__4736__auto__.push((arguments[i__4731__auto___57170]));

var G__57171 = (i__4731__auto___57170 + (1));
i__4731__auto___57170 = G__57171;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55467 = conformed_args__51664__auto__;
var map__55467__$1 = (((((!((map__55467 == null))))?(((((map__55467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55467):map__55467);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55467__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55467__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55467__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.glyph.cljs$lang$applyTo = (function (seq55463){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55463));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.colgroup = (function fulcro$client$dom$colgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57174 = arguments.length;
var i__4731__auto___57175 = (0);
while(true){
if((i__4731__auto___57175 < len__4730__auto___57174)){
args__4736__auto__.push((arguments[i__4731__auto___57175]));

var G__57176 = (i__4731__auto___57175 + (1));
i__4731__auto___57175 = G__57176;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55473 = conformed_args__51664__auto__;
var map__55473__$1 = (((((!((map__55473 == null))))?(((((map__55473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55473):map__55473);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55473__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55473__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55473__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.colgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.colgroup.cljs$lang$applyTo = (function (seq55470){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55470));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.meter = (function fulcro$client$dom$meter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57179 = arguments.length;
var i__4731__auto___57180 = (0);
while(true){
if((i__4731__auto___57180 < len__4730__auto___57179)){
args__4736__auto__.push((arguments[i__4731__auto___57180]));

var G__57181 = (i__4731__auto___57180 + (1));
i__4731__auto___57180 = G__57181;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55481 = conformed_args__51664__auto__;
var map__55481__$1 = (((((!((map__55481 == null))))?(((((map__55481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55481):map__55481);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55481__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55481__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55481__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.meter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.meter.cljs$lang$applyTo = (function (seq55479){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55479));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.bdo = (function fulcro$client$dom$bdo(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57183 = arguments.length;
var i__4731__auto___57184 = (0);
while(true){
if((i__4731__auto___57184 < len__4730__auto___57183)){
args__4736__auto__.push((arguments[i__4731__auto___57184]));

var G__57185 = (i__4731__auto___57184 + (1));
i__4731__auto___57184 = G__57185;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55492 = conformed_args__51664__auto__;
var map__55492__$1 = (((((!((map__55492 == null))))?(((((map__55492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55492):map__55492);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55492__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55492__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55492__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.bdo.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.bdo.cljs$lang$applyTo = (function (seq55487){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55487));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feImage = (function fulcro$client$dom$feImage(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57190 = arguments.length;
var i__4731__auto___57191 = (0);
while(true){
if((i__4731__auto___57191 < len__4730__auto___57190)){
args__4736__auto__.push((arguments[i__4731__auto___57191]));

var G__57192 = (i__4731__auto___57191 + (1));
i__4731__auto___57191 = G__57192;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55503 = conformed_args__51664__auto__;
var map__55503__$1 = (((((!((map__55503 == null))))?(((((map__55503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55503):map__55503);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55503__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55503__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55503__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feImage.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feImage.cljs$lang$applyTo = (function (seq55496){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55496));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.b = (function fulcro$client$dom$b(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57193 = arguments.length;
var i__4731__auto___57194 = (0);
while(true){
if((i__4731__auto___57194 < len__4730__auto___57193)){
args__4736__auto__.push((arguments[i__4731__auto___57194]));

var G__57195 = (i__4731__auto___57194 + (1));
i__4731__auto___57194 = G__57195;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55511 = conformed_args__51664__auto__;
var map__55511__$1 = (((((!((map__55511 == null))))?(((((map__55511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55511):map__55511);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55511__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55511__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55511__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.b.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.b.cljs$lang$applyTo = (function (seq55509){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55509));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.svg = (function fulcro$client$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57198 = arguments.length;
var i__4731__auto___57199 = (0);
while(true){
if((i__4731__auto___57199 < len__4730__auto___57198)){
args__4736__auto__.push((arguments[i__4731__auto___57199]));

var G__57200 = (i__4731__auto___57199 + (1));
i__4731__auto___57199 = G__57200;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55516 = conformed_args__51664__auto__;
var map__55516__$1 = (((((!((map__55516 == null))))?(((((map__55516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55516):map__55516);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55516__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55516__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55516__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.svg.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.svg.cljs$lang$applyTo = (function (seq55513){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55513));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feTile = (function fulcro$client$dom$feTile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57204 = arguments.length;
var i__4731__auto___57205 = (0);
while(true){
if((i__4731__auto___57205 < len__4730__auto___57204)){
args__4736__auto__.push((arguments[i__4731__auto___57205]));

var G__57206 = (i__4731__auto___57205 + (1));
i__4731__auto___57205 = G__57206;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55524 = conformed_args__51664__auto__;
var map__55524__$1 = (((((!((map__55524 == null))))?(((((map__55524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55524):map__55524);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55524__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55524__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55524__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feTile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feTile.cljs$lang$applyTo = (function (seq55522){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55522));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.ellipse = (function fulcro$client$dom$ellipse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57208 = arguments.length;
var i__4731__auto___57209 = (0);
while(true){
if((i__4731__auto___57209 < len__4730__auto___57208)){
args__4736__auto__.push((arguments[i__4731__auto___57209]));

var G__57210 = (i__4731__auto___57209 + (1));
i__4731__auto___57209 = G__57210;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55537 = conformed_args__51664__auto__;
var map__55537__$1 = (((((!((map__55537 == null))))?(((((map__55537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55537):map__55537);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55537__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55537__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55537__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.ellipse.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.ellipse.cljs$lang$applyTo = (function (seq55534){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55534));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.code = (function fulcro$client$dom$code(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57211 = arguments.length;
var i__4731__auto___57212 = (0);
while(true){
if((i__4731__auto___57212 < len__4730__auto___57211)){
args__4736__auto__.push((arguments[i__4731__auto___57212]));

var G__57213 = (i__4731__auto___57212 + (1));
i__4731__auto___57212 = G__57213;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55545 = conformed_args__51664__auto__;
var map__55545__$1 = (((((!((map__55545 == null))))?(((((map__55545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55545):map__55545);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55545__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55545__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55545__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.code.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.code.cljs$lang$applyTo = (function (seq55542){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55542));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.dialog = (function fulcro$client$dom$dialog(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57214 = arguments.length;
var i__4731__auto___57215 = (0);
while(true){
if((i__4731__auto___57215 < len__4730__auto___57214)){
args__4736__auto__.push((arguments[i__4731__auto___57215]));

var G__57216 = (i__4731__auto___57215 + (1));
i__4731__auto___57215 = G__57216;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55557 = conformed_args__51664__auto__;
var map__55557__$1 = (((((!((map__55557 == null))))?(((((map__55557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55557):map__55557);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55557__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55557__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55557__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.dialog.cljs$lang$applyTo = (function (seq55554){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55554));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.linearGradient = (function fulcro$client$dom$linearGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57218 = arguments.length;
var i__4731__auto___57219 = (0);
while(true){
if((i__4731__auto___57219 < len__4730__auto___57218)){
args__4736__auto__.push((arguments[i__4731__auto___57219]));

var G__57221 = (i__4731__auto___57219 + (1));
i__4731__auto___57219 = G__57221;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55571 = conformed_args__51664__auto__;
var map__55571__$1 = (((((!((map__55571 == null))))?(((((map__55571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55571):map__55571);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55571__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55571__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55571__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.linearGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.linearGradient.cljs$lang$applyTo = (function (seq55567){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55567));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.discard = (function fulcro$client$dom$discard(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57224 = arguments.length;
var i__4731__auto___57225 = (0);
while(true){
if((i__4731__auto___57225 < len__4730__auto___57224)){
args__4736__auto__.push((arguments[i__4731__auto___57225]));

var G__57226 = (i__4731__auto___57225 + (1));
i__4731__auto___57225 = G__57226;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55581 = conformed_args__51664__auto__;
var map__55581__$1 = (((((!((map__55581 == null))))?(((((map__55581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55581):map__55581);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55581__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55581__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55581__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.discard.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.discard.cljs$lang$applyTo = (function (seq55576){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55576));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.font_face_src = (function fulcro$client$dom$font_face_src(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57229 = arguments.length;
var i__4731__auto___57230 = (0);
while(true){
if((i__4731__auto___57230 < len__4730__auto___57229)){
args__4736__auto__.push((arguments[i__4731__auto___57230]));

var G__57231 = (i__4731__auto___57230 + (1));
i__4731__auto___57230 = G__57231;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55608 = conformed_args__51664__auto__;
var map__55608__$1 = (((((!((map__55608 == null))))?(((((map__55608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55608):map__55608);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55608__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55608__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55608__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.font_face_src.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.font_face_src.cljs$lang$applyTo = (function (seq55598){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55598));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.noscript = (function fulcro$client$dom$noscript(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57233 = arguments.length;
var i__4731__auto___57234 = (0);
while(true){
if((i__4731__auto___57234 < len__4730__auto___57233)){
args__4736__auto__.push((arguments[i__4731__auto___57234]));

var G__57235 = (i__4731__auto___57234 + (1));
i__4731__auto___57234 = G__57235;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55612 = conformed_args__51664__auto__;
var map__55612__$1 = (((((!((map__55612 == null))))?(((((map__55612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55612):map__55612);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55612__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55612__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55612__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.noscript.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.noscript.cljs$lang$applyTo = (function (seq55610){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55610));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.animateTransform = (function fulcro$client$dom$animateTransform(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57236 = arguments.length;
var i__4731__auto___57237 = (0);
while(true){
if((i__4731__auto___57237 < len__4730__auto___57236)){
args__4736__auto__.push((arguments[i__4731__auto___57237]));

var G__57238 = (i__4731__auto___57237 + (1));
i__4731__auto___57237 = G__57238;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55618 = conformed_args__51664__auto__;
var map__55618__$1 = (((((!((map__55618 == null))))?(((((map__55618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55618):map__55618);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55618__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55618__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55618__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.animateTransform.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.animateTransform.cljs$lang$applyTo = (function (seq55615){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55615));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.feColorMatrix = (function fulcro$client$dom$feColorMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57239 = arguments.length;
var i__4731__auto___57241 = (0);
while(true){
if((i__4731__auto___57241 < len__4730__auto___57239)){
args__4736__auto__.push((arguments[i__4731__auto___57241]));

var G__57242 = (i__4731__auto___57241 + (1));
i__4731__auto___57241 = G__57242;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55630 = conformed_args__51664__auto__;
var map__55630__$1 = (((((!((map__55630 == null))))?(((((map__55630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55630):map__55630);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55630__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55630__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55630__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.feColorMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feColorMatrix.cljs$lang$applyTo = (function (seq55628){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55628));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.h2 = (function fulcro$client$dom$h2(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57248 = arguments.length;
var i__4731__auto___57249 = (0);
while(true){
if((i__4731__auto___57249 < len__4730__auto___57248)){
args__4736__auto__.push((arguments[i__4731__auto___57249]));

var G__57250 = (i__4731__auto___57249 + (1));
i__4731__auto___57249 = G__57250;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55643 = conformed_args__51664__auto__;
var map__55643__$1 = (((((!((map__55643 == null))))?(((((map__55643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55643):map__55643);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55643__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55643__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55643__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.h2.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h2.cljs$lang$applyTo = (function (seq55640){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55640));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.area = (function fulcro$client$dom$area(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57252 = arguments.length;
var i__4731__auto___57253 = (0);
while(true){
if((i__4731__auto___57253 < len__4730__auto___57252)){
args__4736__auto__.push((arguments[i__4731__auto___57253]));

var G__57254 = (i__4731__auto___57253 + (1));
i__4731__auto___57253 = G__57254;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55655 = conformed_args__51664__auto__;
var map__55655__$1 = (((((!((map__55655 == null))))?(((((map__55655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55655):map__55655);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55655__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55655__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55655__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.area.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.area.cljs$lang$applyTo = (function (seq55653){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55653));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.br = (function fulcro$client$dom$br(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57259 = arguments.length;
var i__4731__auto___57260 = (0);
while(true){
if((i__4731__auto___57260 < len__4730__auto___57259)){
args__4736__auto__.push((arguments[i__4731__auto___57260]));

var G__57261 = (i__4731__auto___57260 + (1));
i__4731__auto___57260 = G__57261;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55665 = conformed_args__51664__auto__;
var map__55665__$1 = (((((!((map__55665 == null))))?(((((map__55665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55665):map__55665);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55665__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55665__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55665__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.br.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.br.cljs$lang$applyTo = (function (seq55659){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55659));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.dom.image = (function fulcro$client$dom$image(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57265 = arguments.length;
var i__4731__auto___57266 = (0);
while(true){
if((i__4731__auto___57266 < len__4730__auto___57265)){
args__4736__auto__.push((arguments[i__4731__auto___57266]));

var G__57267 = (i__4731__auto___57266 + (1));
i__4731__auto___57266 = G__57267;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__55673 = conformed_args__51664__auto__;
var map__55673__$1 = (((((!((map__55673 == null))))?(((((map__55673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55673):map__55673);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55673__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55673__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55673__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.dom.image.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.image.cljs$lang$applyTo = (function (seq55671){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55671));
});


//# sourceMappingURL=fulcro.client.dom.js.map
