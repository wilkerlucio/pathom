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





































































































































































































fulcro.client.dom.element_marker = (function (){var G__52056 = React.createElement("div",null);
var G__52057 = "$$typeof";
return goog.object.get(G__52056,G__52057);
})();
/**
 * Returns true if the given arg is a react element.
 */
fulcro.client.dom.element_QMARK_ = (function fulcro$client$dom$element_QMARK_(x){
return ((cljs.core.object_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fulcro.client.dom.element_marker,goog.object.get(x,"$$typeof"))));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__52062#","p1__52062#",-940083611,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__52062#","p1__52062#",-940083611,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__52062#","p1__52062#",-940083611,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__52063#","p1__52063#",-1400434101,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__52063#","p1__52063#",-1400434101,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__52063#","p1__52063#",-1400434101,null))))))),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__52064#","p1__52064#",1175805750,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__52064#","p1__52064#",1175805750,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__52064#","p1__52064#",1175805750,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__52064#","p1__52064#",1175805750,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(cljs.core.keyword_QMARK_,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-object","js-object",1830199158)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,(function (p1__52062_SHARP_){
return ((cljs.core.map_QMARK_(p1__52062_SHARP_)) && ((!(fulcro.client.dom.element_QMARK_(p1__52062_SHARP_)))));
}),(function (p1__52063_SHARP_){
return ((cljs.core.object_QMARK_(p1__52063_SHARP_)) && ((!(fulcro.client.dom.element_QMARK_(p1__52063_SHARP_)))));
})], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__52062#","p1__52062#",-940083611,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__52062#","p1__52062#",-940083611,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__52062#","p1__52062#",-940083611,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__52063#","p1__52063#",-1400434101,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__52063#","p1__52063#",-1400434101,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__52063#","p1__52063#",-1400434101,null))))))),cljs.spec.alpha.rep_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__52064#","p1__52064#",1175805750,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__52064#","p1__52064#",1175805750,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__52064#","p1__52064#",1175805750,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__52064#","p1__52064#",1175805750,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"element","element",1974019749)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.number_QMARK_,(function (p1__52064_SHARP_){
return ((cljs.core.vector_QMARK_(p1__52064_SHARP_)) || (cljs.core.seq_QMARK_(p1__52064_SHARP_)) || (cljs.core.array_QMARK_(p1__52064_SHARP_)));
}),cljs.core.nil_QMARK_,fulcro.client.dom.element_QMARK_], null),null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__52062#","p1__52062#",-940083611,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__52062#","p1__52062#",-940083611,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__52062#","p1__52062#",-940083611,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__52063#","p1__52063#",-1400434101,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__52063#","p1__52063#",-1400434101,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__52063#","p1__52063#",-1400434101,null))))))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__52064#","p1__52064#",1175805750,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__52064#","p1__52064#",1175805750,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__52064#","p1__52064#",1175805750,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__52064#","p1__52064#",1175805750,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null)))], null)));
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
var G__52139 = arguments.length;
switch (G__52139) {
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
var G__52142 = component.refs;
var G__52142__$1 = (((G__52142 == null))?null:goog.object.get(G__52142,name));
if((G__52142__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__52142__$1);
}
});

fulcro.client.dom.node.cljs$lang$maxFixedArity = 2;

/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
fulcro.client.dom.create_element = (function fulcro$client$dom$create_element(var_args){
var G__52149 = arguments.length;
switch (G__52149) {
case 1:
return fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___54880 = arguments.length;
var i__4731__auto___54881 = (0);
while(true){
if((i__4731__auto___54881 < len__4730__auto___54880)){
args_arr__4751__auto__.push((arguments[i__4731__auto___54881]));

var G__54882 = (i__4731__auto___54881 + (1));
i__4731__auto___54881 = G__54882;
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
fulcro.client.dom.create_element.cljs$lang$applyTo = (function (seq52146){
var G__52147 = cljs.core.first(seq52146);
var seq52146__$1 = cljs.core.next(seq52146);
var G__52148 = cljs.core.first(seq52146__$1);
var seq52146__$2 = cljs.core.next(seq52146__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52147,G__52148,seq52146__$2);
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
var G__52155_54885 = next_state;
var G__52156_54886 = next_props;
var G__52157_54887 = ({"onChange": on_change});
goog.object.extend(G__52155_54885,G__52156_54886,G__52157_54887);

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
var G__52160 = clojure.string.lower_case(tag);
return (fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__52160) : fulcro.client.dom.form_elements_QMARK_.call(null,G__52160));
} else {
return and__4120__auto__;
}
});
fulcro.client.dom.wrap_form_element = (function fulcro$client$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
this$.state = (function (){var state = ({"ref": goog.object.get(props,"inputRef")});
var G__52164_54893 = state;
var G__52165_54894 = props;
var G__52166_54895 = ({"onChange": (function (){var G__52167 = goog.object.get(this$,"onChange");
var G__52168 = this$;
return goog.bind(G__52167,G__52168);
})()});
goog.object.extend(G__52164_54893,G__52165_54894,G__52166_54895);

goog.object.remove(state,"inputRef");

return state;
})();

return React.Component.apply(this$,arguments);
});
ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join('');

goog.inherits(ctor,React.Component);

var x52169_54897 = ctor.prototype;
x52169_54897.onChange = ((function (x52169_54897,ctor){
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
});})(x52169_54897,ctor))
;

x52169_54897.componentWillReceiveProps = ((function (x52169_54897,ctor){
return (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(fulcro.client.dom.is_form_element_QMARK_(this_node))?this_node:(function (){var G__52175 = this_node;
var G__52176 = ((function (G__52175,state_value,this_node,this$,x52169_54897,ctor){
return (function (p1__52161_SHARP_){
return fulcro.client.dom.is_form_element_QMARK_(p1__52161_SHARP_);
});})(G__52175,state_value,this_node,this$,x52169_54897,ctor))
;
return goog.dom.findNode(G__52175,G__52176);
})());
var element_value = goog.object.get(value_node,"value");
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return fulcro.client.dom.update_state(this$,new_props,element_value);
} else {
return fulcro.client.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
});})(x52169_54897,ctor))
;

x52169_54897.render = ((function (x52169_54897,ctor){
return (function (){
var this$ = this;
return React.createElement(element,this$.state);
});})(x52169_54897,ctor))
;


var real_factory = React.createFactory(ctor);
return ((function (real_factory,ctor){
return (function() { 
var G__54900__delegate = function (props,children){
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
var G__54900 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__54904__i = 0, G__54904__a = new Array(arguments.length -  1);
while (G__54904__i < G__54904__a.length) {G__54904__a[G__54904__i] = arguments[G__54904__i + 1]; ++G__54904__i;}
  children = new cljs.core.IndexedSeq(G__54904__a,0,null);
} 
return G__54900__delegate.call(this,props,children);};
G__54900.cljs$lang$maxFixedArity = 1;
G__54900.cljs$lang$applyTo = (function (arglist__54905){
var props = cljs.core.first(arglist__54905);
var children = cljs.core.rest(arglist__54905);
return G__54900__delegate(props,children);
});
G__54900.cljs$core$IFn$_invoke$arity$variadic = G__54900__delegate;
return G__54900;
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
var G__52187 = tag;
switch (G__52187) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52187)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
fulcro.client.dom.macro_create_element = (function fulcro$client$dom$macro_create_element(var_args){
var G__52191 = arguments.length;
switch (G__52191) {
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
var vec__52193 = args;
var seq__52194 = cljs.core.seq(vec__52193);
var first__52195 = cljs.core.first(seq__52194);
var seq__52194__$1 = cljs.core.next(seq__52194);
var head = first__52195;
var tail = seq__52194__$1;
var f = (cljs.core.truth_((fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : fulcro.client.dom.form_elements_QMARK_.call(null,type)))?fulcro.client.dom.macro_create_wrapped_form_element:fulcro.client.dom.macro_create_element_STAR_);
if((head == null)){
var G__52196 = (function (){var G__52197 = [type,fulcro.client.dom_common.add_kwprops_to_props(({}),csskw)];
fulcro.client.dom.arr_append(G__52197,tail);

return G__52197;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52196) : f.call(null,G__52196));
} else {
if(fulcro.client.dom.element_QMARK_(head)){
var G__52198 = (function (){var G__52199 = [type,fulcro.client.dom_common.add_kwprops_to_props(({}),csskw)];
fulcro.client.dom.arr_append(G__52199,args);

return G__52199;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52198) : f.call(null,G__52198));
} else {
if(cljs.core.object_QMARK_(head)){
var G__52201 = (function (){var G__52202 = [type,fulcro.client.dom_common.add_kwprops_to_props(head,csskw)];
fulcro.client.dom.arr_append(G__52202,tail);

return G__52202;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52201) : f.call(null,G__52201));
} else {
if(cljs.core.map_QMARK_(head)){
var G__52204 = (function (){var G__52205 = [type,cljs.core.clj__GT_js(fulcro.client.dom_common.add_kwprops_to_props(fulcro.client.dom_common.interpret_classes(head),csskw))];
fulcro.client.dom.arr_append(G__52205,tail);

return G__52205;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52204) : f.call(null,G__52204));
} else {
var G__52206 = (function (){var G__52207 = [type,fulcro.client.dom_common.add_kwprops_to_props(({}),csskw)];
fulcro.client.dom.arr_append(G__52207,args);

return G__52207;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52206) : f.call(null,G__52206));

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
var len__4730__auto___54914 = arguments.length;
var i__4731__auto___54915 = (0);
while(true){
if((i__4731__auto___54915 < len__4730__auto___54914)){
args__4736__auto__.push((arguments[i__4731__auto___54915]));

var G__54916 = (i__4731__auto___54915 + (1));
i__4731__auto___54915 = G__54916;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52219 = conformed_args__50743__auto__;
var map__52219__$1 = (((((!((map__52219 == null))))?(((((map__52219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52219):map__52219);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52219__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52219__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52219__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.form.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.form.cljs$lang$applyTo = (function (seq52214){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52214));
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
var len__4730__auto___54919 = arguments.length;
var i__4731__auto___54920 = (0);
while(true){
if((i__4731__auto___54920 < len__4730__auto___54919)){
args__4736__auto__.push((arguments[i__4731__auto___54920]));

var G__54921 = (i__4731__auto___54920 + (1));
i__4731__auto___54920 = G__54921;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52227 = conformed_args__50743__auto__;
var map__52227__$1 = (((((!((map__52227 == null))))?(((((map__52227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52227):map__52227);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52227__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52227__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52227__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.audio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.audio.cljs$lang$applyTo = (function (seq52222){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52222));
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
var len__4730__auto___54939 = arguments.length;
var i__4731__auto___54940 = (0);
while(true){
if((i__4731__auto___54940 < len__4730__auto___54939)){
args__4736__auto__.push((arguments[i__4731__auto___54940]));

var G__54941 = (i__4731__auto___54940 + (1));
i__4731__auto___54940 = G__54941;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52234 = conformed_args__50743__auto__;
var map__52234__$1 = (((((!((map__52234 == null))))?(((((map__52234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52234):map__52234);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52234__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52234__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52234__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.input.cljs$lang$applyTo = (function (seq52230){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52230));
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
var len__4730__auto___54952 = arguments.length;
var i__4731__auto___54953 = (0);
while(true){
if((i__4731__auto___54953 < len__4730__auto___54952)){
args__4736__auto__.push((arguments[i__4731__auto___54953]));

var G__54954 = (i__4731__auto___54953 + (1));
i__4731__auto___54953 = G__54954;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52244 = conformed_args__50743__auto__;
var map__52244__$1 = (((((!((map__52244 == null))))?(((((map__52244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52244):map__52244);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52244__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52244__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52244__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.menuitem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.menuitem.cljs$lang$applyTo = (function (seq52238){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52238));
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
var len__4730__auto___54966 = arguments.length;
var i__4731__auto___54967 = (0);
while(true){
if((i__4731__auto___54967 < len__4730__auto___54966)){
args__4736__auto__.push((arguments[i__4731__auto___54967]));

var G__54968 = (i__4731__auto___54967 + (1));
i__4731__auto___54967 = G__54968;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52263 = conformed_args__50743__auto__;
var map__52263__$1 = (((((!((map__52263 == null))))?(((((map__52263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52263):map__52263);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52263__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52263__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52263__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.radialGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.radialGradient.cljs$lang$applyTo = (function (seq52257){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52257));
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
var len__4730__auto___54979 = arguments.length;
var i__4731__auto___54980 = (0);
while(true){
if((i__4731__auto___54980 < len__4730__auto___54979)){
args__4736__auto__.push((arguments[i__4731__auto___54980]));

var G__54981 = (i__4731__auto___54980 + (1));
i__4731__auto___54980 = G__54981;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52287 = conformed_args__50743__auto__;
var map__52287__$1 = (((((!((map__52287 == null))))?(((((map__52287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52287):map__52287);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52287__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52287__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52287__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feMerge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feMerge.cljs$lang$applyTo = (function (seq52275){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52275));
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
var len__4730__auto___54984 = arguments.length;
var i__4731__auto___54985 = (0);
while(true){
if((i__4731__auto___54985 < len__4730__auto___54984)){
args__4736__auto__.push((arguments[i__4731__auto___54985]));

var G__54986 = (i__4731__auto___54985 + (1));
i__4731__auto___54985 = G__54986;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52297 = conformed_args__50743__auto__;
var map__52297__$1 = (((((!((map__52297 == null))))?(((((map__52297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52297):map__52297);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52297__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52297__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52297__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.set.cljs$lang$applyTo = (function (seq52295){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52295));
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
var len__4730__auto___54996 = arguments.length;
var i__4731__auto___54997 = (0);
while(true){
if((i__4731__auto___54997 < len__4730__auto___54996)){
args__4736__auto__.push((arguments[i__4731__auto___54997]));

var G__54999 = (i__4731__auto___54997 + (1));
i__4731__auto___54997 = G__54999;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52305 = conformed_args__50743__auto__;
var map__52305__$1 = (((((!((map__52305 == null))))?(((((map__52305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52305):map__52305);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52305__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52305__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52305__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq52302){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52302));
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
var len__4730__auto___55011 = arguments.length;
var i__4731__auto___55012 = (0);
while(true){
if((i__4731__auto___55012 < len__4730__auto___55011)){
args__4736__auto__.push((arguments[i__4731__auto___55012]));

var G__55013 = (i__4731__auto___55012 + (1));
i__4731__auto___55012 = G__55013;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52314 = conformed_args__50743__auto__;
var map__52314__$1 = (((((!((map__52314 == null))))?(((((map__52314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52314):map__52314);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52314__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52314__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52314__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.base.cljs$lang$applyTo = (function (seq52311){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52311));
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
var len__4730__auto___55020 = arguments.length;
var i__4731__auto___55021 = (0);
while(true){
if((i__4731__auto___55021 < len__4730__auto___55020)){
args__4736__auto__.push((arguments[i__4731__auto___55021]));

var G__55022 = (i__4731__auto___55021 + (1));
i__4731__auto___55021 = G__55022;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52324 = conformed_args__50743__auto__;
var map__52324__$1 = (((((!((map__52324 == null))))?(((((map__52324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52324):map__52324);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52324__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52324__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52324__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.h1.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h1.cljs$lang$applyTo = (function (seq52322){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52322));
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
var len__4730__auto___55032 = arguments.length;
var i__4731__auto___55033 = (0);
while(true){
if((i__4731__auto___55033 < len__4730__auto___55032)){
args__4736__auto__.push((arguments[i__4731__auto___55033]));

var G__55036 = (i__4731__auto___55033 + (1));
i__4731__auto___55033 = G__55036;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52332 = conformed_args__50743__auto__;
var map__52332__$1 = (((((!((map__52332 == null))))?(((((map__52332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52332):map__52332);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52332__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52332__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52332__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feOffset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feOffset.cljs$lang$applyTo = (function (seq52328){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52328));
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
var len__4730__auto___55043 = arguments.length;
var i__4731__auto___55044 = (0);
while(true){
if((i__4731__auto___55044 < len__4730__auto___55043)){
args__4736__auto__.push((arguments[i__4731__auto___55044]));

var G__55045 = (i__4731__auto___55044 + (1));
i__4731__auto___55044 = G__55045;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52344 = conformed_args__50743__auto__;
var map__52344__$1 = (((((!((map__52344 == null))))?(((((map__52344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52344):map__52344);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52344__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52344__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52344__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.embed.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.embed.cljs$lang$applyTo = (function (seq52340){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52340));
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
var len__4730__auto___55053 = arguments.length;
var i__4731__auto___55054 = (0);
while(true){
if((i__4731__auto___55054 < len__4730__auto___55053)){
args__4736__auto__.push((arguments[i__4731__auto___55054]));

var G__55055 = (i__4731__auto___55054 + (1));
i__4731__auto___55054 = G__55055;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52354 = conformed_args__50743__auto__;
var map__52354__$1 = (((((!((map__52354 == null))))?(((((map__52354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52354):map__52354);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52354__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52354__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52354__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.animateMotion.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.animateMotion.cljs$lang$applyTo = (function (seq52349){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52349));
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
var len__4730__auto___55059 = arguments.length;
var i__4731__auto___55060 = (0);
while(true){
if((i__4731__auto___55060 < len__4730__auto___55059)){
args__4736__auto__.push((arguments[i__4731__auto___55060]));

var G__55061 = (i__4731__auto___55060 + (1));
i__4731__auto___55060 = G__55061;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52369 = conformed_args__50743__auto__;
var map__52369__$1 = (((((!((map__52369 == null))))?(((((map__52369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52369):map__52369);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52369__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52369__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52369__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.h3.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h3.cljs$lang$applyTo = (function (seq52364){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52364));
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
var len__4730__auto___55063 = arguments.length;
var i__4731__auto___55064 = (0);
while(true){
if((i__4731__auto___55064 < len__4730__auto___55063)){
args__4736__auto__.push((arguments[i__4731__auto___55064]));

var G__55065 = (i__4731__auto___55064 + (1));
i__4731__auto___55064 = G__55065;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52378 = conformed_args__50743__auto__;
var map__52378__$1 = (((((!((map__52378 == null))))?(((((map__52378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52378):map__52378);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52378__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52378__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52378__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.body.cljs$lang$applyTo = (function (seq52373){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52373));
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
var len__4730__auto___55072 = arguments.length;
var i__4731__auto___55073 = (0);
while(true){
if((i__4731__auto___55073 < len__4730__auto___55072)){
args__4736__auto__.push((arguments[i__4731__auto___55073]));

var G__55074 = (i__4731__auto___55073 + (1));
i__4731__auto___55073 = G__55074;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52387 = conformed_args__50743__auto__;
var map__52387__$1 = (((((!((map__52387 == null))))?(((((map__52387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52387):map__52387);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52387__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52387__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52387__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.hkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.hkern.cljs$lang$applyTo = (function (seq52384){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52384));
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
var len__4730__auto___55083 = arguments.length;
var i__4731__auto___55084 = (0);
while(true){
if((i__4731__auto___55084 < len__4730__auto___55083)){
args__4736__auto__.push((arguments[i__4731__auto___55084]));

var G__55085 = (i__4731__auto___55084 + (1));
i__4731__auto___55084 = G__55085;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52394 = conformed_args__50743__auto__;
var map__52394__$1 = (((((!((map__52394 == null))))?(((((map__52394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52394):map__52394);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52394__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52394__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52394__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.keygen.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.keygen.cljs$lang$applyTo = (function (seq52391){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52391));
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
var len__4730__auto___55088 = arguments.length;
var i__4731__auto___55089 = (0);
while(true){
if((i__4731__auto___55089 < len__4730__auto___55088)){
args__4736__auto__.push((arguments[i__4731__auto___55089]));

var G__55090 = (i__4731__auto___55089 + (1));
i__4731__auto___55089 = G__55090;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52403 = conformed_args__50743__auto__;
var map__52403__$1 = (((((!((map__52403 == null))))?(((((map__52403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52403):map__52403);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52403__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52403__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52403__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.font_face_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.font_face_format.cljs$lang$applyTo = (function (seq52400){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52400));
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
var len__4730__auto___55095 = arguments.length;
var i__4731__auto___55096 = (0);
while(true){
if((i__4731__auto___55096 < len__4730__auto___55095)){
args__4736__auto__.push((arguments[i__4731__auto___55096]));

var G__55097 = (i__4731__auto___55096 + (1));
i__4731__auto___55096 = G__55097;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52412 = conformed_args__50743__auto__;
var map__52412__$1 = (((((!((map__52412 == null))))?(((((map__52412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52412):map__52412);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feFuncA.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feFuncA.cljs$lang$applyTo = (function (seq52409){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52409));
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
var len__4730__auto___55103 = arguments.length;
var i__4731__auto___55104 = (0);
while(true){
if((i__4731__auto___55104 < len__4730__auto___55103)){
args__4736__auto__.push((arguments[i__4731__auto___55104]));

var G__55106 = (i__4731__auto___55104 + (1));
i__4731__auto___55104 = G__55106;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52421 = conformed_args__50743__auto__;
var map__52421__$1 = (((((!((map__52421 == null))))?(((((map__52421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52421):map__52421);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52421__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52421__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52421__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.progress.cljs$lang$applyTo = (function (seq52416){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52416));
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
var len__4730__auto___55113 = arguments.length;
var i__4731__auto___55114 = (0);
while(true){
if((i__4731__auto___55114 < len__4730__auto___55113)){
args__4736__auto__.push((arguments[i__4731__auto___55114]));

var G__55116 = (i__4731__auto___55114 + (1));
i__4731__auto___55114 = G__55116;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52434 = conformed_args__50743__auto__;
var map__52434__$1 = (((((!((map__52434 == null))))?(((((map__52434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52434):map__52434);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52434__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52434__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52434__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.main.cljs$lang$applyTo = (function (seq52431){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52431));
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
var len__4730__auto___55125 = arguments.length;
var i__4731__auto___55126 = (0);
while(true){
if((i__4731__auto___55126 < len__4730__auto___55125)){
args__4736__auto__.push((arguments[i__4731__auto___55126]));

var G__55127 = (i__4731__auto___55126 + (1));
i__4731__auto___55126 = G__55127;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52444 = conformed_args__50743__auto__;
var map__52444__$1 = (((((!((map__52444 == null))))?(((((map__52444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52444):map__52444);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52444__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52444__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52444__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.cite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.cite.cljs$lang$applyTo = (function (seq52439){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52439));
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
var len__4730__auto___55131 = arguments.length;
var i__4731__auto___55132 = (0);
while(true){
if((i__4731__auto___55132 < len__4730__auto___55131)){
args__4736__auto__.push((arguments[i__4731__auto___55132]));

var G__55133 = (i__4731__auto___55132 + (1));
i__4731__auto___55132 = G__55133;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52449 = conformed_args__50743__auto__;
var map__52449__$1 = (((((!((map__52449 == null))))?(((((map__52449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52449):map__52449);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52449__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52449__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52449__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.rect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.rect.cljs$lang$applyTo = (function (seq52448){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52448));
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
var len__4730__auto___55135 = arguments.length;
var i__4731__auto___55136 = (0);
while(true){
if((i__4731__auto___55136 < len__4730__auto___55135)){
args__4736__auto__.push((arguments[i__4731__auto___55136]));

var G__55138 = (i__4731__auto___55136 + (1));
i__4731__auto___55136 = G__55138;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52458 = conformed_args__50743__auto__;
var map__52458__$1 = (((((!((map__52458 == null))))?(((((map__52458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52458):map__52458);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52458__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52458__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52458__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.tref.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.tref.cljs$lang$applyTo = (function (seq52456){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52456));
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
var len__4730__auto___55145 = arguments.length;
var i__4731__auto___55146 = (0);
while(true){
if((i__4731__auto___55146 < len__4730__auto___55145)){
args__4736__auto__.push((arguments[i__4731__auto___55146]));

var G__55147 = (i__4731__auto___55146 + (1));
i__4731__auto___55146 = G__55147;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52467 = conformed_args__50743__auto__;
var map__52467__$1 = (((((!((map__52467 == null))))?(((((map__52467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52467):map__52467);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52467__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52467__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52467__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.meshpatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.meshpatch.cljs$lang$applyTo = (function (seq52464){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52464));
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
var len__4730__auto___55156 = arguments.length;
var i__4731__auto___55157 = (0);
while(true){
if((i__4731__auto___55157 < len__4730__auto___55156)){
args__4736__auto__.push((arguments[i__4731__auto___55157]));

var G__55158 = (i__4731__auto___55157 + (1));
i__4731__auto___55157 = G__55158;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52475 = conformed_args__50743__auto__;
var map__52475__$1 = (((((!((map__52475 == null))))?(((((map__52475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52475):map__52475);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52475__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52475__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52475__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.polyline.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.polyline.cljs$lang$applyTo = (function (seq52473){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52473));
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
var len__4730__auto___55162 = arguments.length;
var i__4731__auto___55163 = (0);
while(true){
if((i__4731__auto___55163 < len__4730__auto___55162)){
args__4736__auto__.push((arguments[i__4731__auto___55163]));

var G__55164 = (i__4731__auto___55163 + (1));
i__4731__auto___55163 = G__55164;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52481 = conformed_args__50743__auto__;
var map__52481__$1 = (((((!((map__52481 == null))))?(((((map__52481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52481):map__52481);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52481__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52481__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52481__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.metadata.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.metadata.cljs$lang$applyTo = (function (seq52480){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52480));
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
var len__4730__auto___55168 = arguments.length;
var i__4731__auto___55169 = (0);
while(true){
if((i__4731__auto___55169 < len__4730__auto___55168)){
args__4736__auto__.push((arguments[i__4731__auto___55169]));

var G__55174 = (i__4731__auto___55169 + (1));
i__4731__auto___55169 = G__55174;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52484 = conformed_args__50743__auto__;
var map__52484__$1 = (((((!((map__52484 == null))))?(((((map__52484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52484):map__52484);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52484__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52484__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52484__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.map.cljs$lang$applyTo = (function (seq52483){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52483));
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
var len__4730__auto___55178 = arguments.length;
var i__4731__auto___55179 = (0);
while(true){
if((i__4731__auto___55179 < len__4730__auto___55178)){
args__4736__auto__.push((arguments[i__4731__auto___55179]));

var G__55180 = (i__4731__auto___55179 + (1));
i__4731__auto___55179 = G__55180;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52487 = conformed_args__50743__auto__;
var map__52487__$1 = (((((!((map__52487 == null))))?(((((map__52487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52487):map__52487);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52487__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52487__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52487__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.object.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.object.cljs$lang$applyTo = (function (seq52486){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52486));
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
var len__4730__auto___55184 = arguments.length;
var i__4731__auto___55185 = (0);
while(true){
if((i__4731__auto___55185 < len__4730__auto___55184)){
args__4736__auto__.push((arguments[i__4731__auto___55185]));

var G__55186 = (i__4731__auto___55185 + (1));
i__4731__auto___55185 = G__55186;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52490 = conformed_args__50743__auto__;
var map__52490__$1 = (((((!((map__52490 == null))))?(((((map__52490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52490):map__52490);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52490__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52490__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52490__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.i.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.i.cljs$lang$applyTo = (function (seq52489){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52489));
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
var len__4730__auto___55190 = arguments.length;
var i__4731__auto___55191 = (0);
while(true){
if((i__4731__auto___55191 < len__4730__auto___55190)){
args__4736__auto__.push((arguments[i__4731__auto___55191]));

var G__55192 = (i__4731__auto___55191 + (1));
i__4731__auto___55191 = G__55192;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52493 = conformed_args__50743__auto__;
var map__52493__$1 = (((((!((map__52493 == null))))?(((((map__52493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52493):map__52493);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52493__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52493__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52493__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.font_face_name.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.font_face_name.cljs$lang$applyTo = (function (seq52492){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52492));
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
var len__4730__auto___55197 = arguments.length;
var i__4731__auto___55198 = (0);
while(true){
if((i__4731__auto___55198 < len__4730__auto___55197)){
args__4736__auto__.push((arguments[i__4731__auto___55198]));

var G__55200 = (i__4731__auto___55198 + (1));
i__4731__auto___55198 = G__55200;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52501 = conformed_args__50743__auto__;
var map__52501__$1 = (((((!((map__52501 == null))))?(((((map__52501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52501):map__52501);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52501__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52501__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52501__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.p.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.p.cljs$lang$applyTo = (function (seq52495){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52495));
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
var len__4730__auto___55209 = arguments.length;
var i__4731__auto___55210 = (0);
while(true){
if((i__4731__auto___55210 < len__4730__auto___55209)){
args__4736__auto__.push((arguments[i__4731__auto___55210]));

var G__55211 = (i__4731__auto___55210 + (1));
i__4731__auto___55210 = G__55211;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52509 = conformed_args__50743__auto__;
var map__52509__$1 = (((((!((map__52509 == null))))?(((((map__52509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52509):map__52509);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52509__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52509__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52509__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feFuncR.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feFuncR.cljs$lang$applyTo = (function (seq52505){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52505));
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
var len__4730__auto___55220 = arguments.length;
var i__4731__auto___55221 = (0);
while(true){
if((i__4731__auto___55221 < len__4730__auto___55220)){
args__4736__auto__.push((arguments[i__4731__auto___55221]));

var G__55222 = (i__4731__auto___55221 + (1));
i__4731__auto___55221 = G__55222;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52516 = conformed_args__50743__auto__;
var map__52516__$1 = (((((!((map__52516 == null))))?(((((map__52516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52516):map__52516);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52516__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52516__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52516__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.hatchpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.hatchpath.cljs$lang$applyTo = (function (seq52513){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52513));
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
var len__4730__auto___55229 = arguments.length;
var i__4731__auto___55230 = (0);
while(true){
if((i__4731__auto___55230 < len__4730__auto___55229)){
args__4736__auto__.push((arguments[i__4731__auto___55230]));

var G__55231 = (i__4731__auto___55230 + (1));
i__4731__auto___55230 = G__55231;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52522 = conformed_args__50743__auto__;
var map__52522__$1 = (((((!((map__52522 == null))))?(((((map__52522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52522):map__52522);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52522__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52522__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52522__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.altGlyphItem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.altGlyphItem.cljs$lang$applyTo = (function (seq52519){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52519));
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
var len__4730__auto___55236 = arguments.length;
var i__4731__auto___55238 = (0);
while(true){
if((i__4731__auto___55238 < len__4730__auto___55236)){
args__4736__auto__.push((arguments[i__4731__auto___55238]));

var G__55239 = (i__4731__auto___55238 + (1));
i__4731__auto___55238 = G__55239;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52529 = conformed_args__50743__auto__;
var map__52529__$1 = (((((!((map__52529 == null))))?(((((map__52529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52529):map__52529);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52529__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52529__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52529__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.nav.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.nav.cljs$lang$applyTo = (function (seq52525){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52525));
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
var len__4730__auto___55242 = arguments.length;
var i__4731__auto___55243 = (0);
while(true){
if((i__4731__auto___55243 < len__4730__auto___55242)){
args__4736__auto__.push((arguments[i__4731__auto___55243]));

var G__55244 = (i__4731__auto___55243 + (1));
i__4731__auto___55243 = G__55244;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52546 = conformed_args__50743__auto__;
var map__52546__$1 = (((((!((map__52546 == null))))?(((((map__52546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52546):map__52546);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.ruby.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.ruby.cljs$lang$applyTo = (function (seq52541){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52541));
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
var len__4730__auto___55247 = arguments.length;
var i__4731__auto___55248 = (0);
while(true){
if((i__4731__auto___55248 < len__4730__auto___55247)){
args__4736__auto__.push((arguments[i__4731__auto___55248]));

var G__55249 = (i__4731__auto___55248 + (1));
i__4731__auto___55248 = G__55249;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52554 = conformed_args__50743__auto__;
var map__52554__$1 = (((((!((map__52554 == null))))?(((((map__52554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52554):map__52554);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52554__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52554__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52554__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.switch$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.switch$.cljs$lang$applyTo = (function (seq52549){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52549));
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
var len__4730__auto___55258 = arguments.length;
var i__4731__auto___55259 = (0);
while(true){
if((i__4731__auto___55259 < len__4730__auto___55258)){
args__4736__auto__.push((arguments[i__4731__auto___55259]));

var G__55260 = (i__4731__auto___55259 + (1));
i__4731__auto___55259 = G__55260;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52567 = conformed_args__50743__auto__;
var map__52567__$1 = (((((!((map__52567 == null))))?(((((map__52567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52567):map__52567);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52567__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52567__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52567__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.a.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.a.cljs$lang$applyTo = (function (seq52566){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52566));
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
var len__4730__auto___55262 = arguments.length;
var i__4731__auto___55263 = (0);
while(true){
if((i__4731__auto___55263 < len__4730__auto___55262)){
args__4736__auto__.push((arguments[i__4731__auto___55263]));

var G__55265 = (i__4731__auto___55263 + (1));
i__4731__auto___55263 = G__55265;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52578 = conformed_args__50743__auto__;
var map__52578__$1 = (((((!((map__52578 == null))))?(((((map__52578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52578):map__52578);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52578__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52578__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52578__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.view.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.view.cljs$lang$applyTo = (function (seq52575){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52575));
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
var len__4730__auto___55273 = arguments.length;
var i__4731__auto___55274 = (0);
while(true){
if((i__4731__auto___55274 < len__4730__auto___55273)){
args__4736__auto__.push((arguments[i__4731__auto___55274]));

var G__55275 = (i__4731__auto___55274 + (1));
i__4731__auto___55274 = G__55275;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52600 = conformed_args__50743__auto__;
var map__52600__$1 = (((((!((map__52600 == null))))?(((((map__52600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52600):map__52600);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52600__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52600__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52600__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.menu.cljs$lang$applyTo = (function (seq52597){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52597));
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
var len__4730__auto___55282 = arguments.length;
var i__4731__auto___55283 = (0);
while(true){
if((i__4731__auto___55283 < len__4730__auto___55282)){
args__4736__auto__.push((arguments[i__4731__auto___55283]));

var G__55284 = (i__4731__auto___55283 + (1));
i__4731__auto___55283 = G__55284;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52624 = conformed_args__50743__auto__;
var map__52624__$1 = (((((!((map__52624 == null))))?(((((map__52624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52624):map__52624);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52624__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52624__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52624__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.blockquote.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.blockquote.cljs$lang$applyTo = (function (seq52609){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52609));
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
var len__4730__auto___55288 = arguments.length;
var i__4731__auto___55289 = (0);
while(true){
if((i__4731__auto___55289 < len__4730__auto___55288)){
args__4736__auto__.push((arguments[i__4731__auto___55289]));

var G__55290 = (i__4731__auto___55289 + (1));
i__4731__auto___55289 = G__55290;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52659 = conformed_args__50743__auto__;
var map__52659__$1 = (((((!((map__52659 == null))))?(((((map__52659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52659):map__52659);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52659__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52659__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52659__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.img.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.img.cljs$lang$applyTo = (function (seq52643){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52643));
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
var len__4730__auto___55296 = arguments.length;
var i__4731__auto___55297 = (0);
while(true){
if((i__4731__auto___55297 < len__4730__auto___55296)){
args__4736__auto__.push((arguments[i__4731__auto___55297]));

var G__55301 = (i__4731__auto___55297 + (1));
i__4731__auto___55297 = G__55301;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52689 = conformed_args__50743__auto__;
var map__52689__$1 = (((((!((map__52689 == null))))?(((((map__52689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52689):map__52689);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52689__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52689__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52689__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feFuncG.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feFuncG.cljs$lang$applyTo = (function (seq52681){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52681));
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
var len__4730__auto___55313 = arguments.length;
var i__4731__auto___55314 = (0);
while(true){
if((i__4731__auto___55314 < len__4730__auto___55313)){
args__4736__auto__.push((arguments[i__4731__auto___55314]));

var G__55315 = (i__4731__auto___55314 + (1));
i__4731__auto___55314 = G__55315;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52694 = conformed_args__50743__auto__;
var map__52694__$1 = (((((!((map__52694 == null))))?(((((map__52694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52694):map__52694);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52694__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52694__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52694__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.text.cljs$lang$applyTo = (function (seq52691){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52691));
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
var len__4730__auto___55317 = arguments.length;
var i__4731__auto___55318 = (0);
while(true){
if((i__4731__auto___55318 < len__4730__auto___55317)){
args__4736__auto__.push((arguments[i__4731__auto___55318]));

var G__55319 = (i__4731__auto___55318 + (1));
i__4731__auto___55318 = G__55319;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52732 = conformed_args__50743__auto__;
var map__52732__$1 = (((((!((map__52732 == null))))?(((((map__52732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52732):map__52732);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52732__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52732__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52732__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.span.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.span.cljs$lang$applyTo = (function (seq52729){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52729));
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
var len__4730__auto___55323 = arguments.length;
var i__4731__auto___55324 = (0);
while(true){
if((i__4731__auto___55324 < len__4730__auto___55323)){
args__4736__auto__.push((arguments[i__4731__auto___55324]));

var G__55325 = (i__4731__auto___55324 + (1));
i__4731__auto___55324 = G__55325;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52752 = conformed_args__50743__auto__;
var map__52752__$1 = (((((!((map__52752 == null))))?(((((map__52752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52752):map__52752);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52752__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52752__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52752__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.track.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.track.cljs$lang$applyTo = (function (seq52737){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52737));
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
var len__4730__auto___55327 = arguments.length;
var i__4731__auto___55328 = (0);
while(true){
if((i__4731__auto___55328 < len__4730__auto___55327)){
args__4736__auto__.push((arguments[i__4731__auto___55328]));

var G__55329 = (i__4731__auto___55328 + (1));
i__4731__auto___55328 = G__55329;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52786 = conformed_args__50743__auto__;
var map__52786__$1 = (((((!((map__52786 == null))))?(((((map__52786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52786):map__52786);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52786__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52786__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52786__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.data.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.data.cljs$lang$applyTo = (function (seq52772){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52772));
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
var len__4730__auto___55339 = arguments.length;
var i__4731__auto___55340 = (0);
while(true){
if((i__4731__auto___55340 < len__4730__auto___55339)){
args__4736__auto__.push((arguments[i__4731__auto___55340]));

var G__55341 = (i__4731__auto___55340 + (1));
i__4731__auto___55340 = G__55341;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52822 = conformed_args__50743__auto__;
var map__52822__$1 = (((((!((map__52822 == null))))?(((((map__52822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52822):map__52822);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52822__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52822__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52822__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.u.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.u.cljs$lang$applyTo = (function (seq52805){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52805));
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
var len__4730__auto___55348 = arguments.length;
var i__4731__auto___55351 = (0);
while(true){
if((i__4731__auto___55351 < len__4730__auto___55348)){
args__4736__auto__.push((arguments[i__4731__auto___55351]));

var G__55352 = (i__4731__auto___55351 + (1));
i__4731__auto___55351 = G__55352;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52855 = conformed_args__50743__auto__;
var map__52855__$1 = (((((!((map__52855 == null))))?(((((map__52855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52855):map__52855);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52855__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52855__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52855__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.dl.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.dl.cljs$lang$applyTo = (function (seq52839){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52839));
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
var len__4730__auto___55355 = arguments.length;
var i__4731__auto___55356 = (0);
while(true){
if((i__4731__auto___55356 < len__4730__auto___55355)){
args__4736__auto__.push((arguments[i__4731__auto___55356]));

var G__55357 = (i__4731__auto___55356 + (1));
i__4731__auto___55356 = G__55357;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52892 = conformed_args__50743__auto__;
var map__52892__$1 = (((((!((map__52892 == null))))?(((((map__52892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52892):map__52892);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52892__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52892__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52892__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.select.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.select.cljs$lang$applyTo = (function (seq52877){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52877));
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
var len__4730__auto___55359 = arguments.length;
var i__4731__auto___55360 = (0);
while(true){
if((i__4731__auto___55360 < len__4730__auto___55359)){
args__4736__auto__.push((arguments[i__4731__auto___55360]));

var G__55361 = (i__4731__auto___55360 + (1));
i__4731__auto___55360 = G__55361;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52933 = conformed_args__50743__auto__;
var map__52933__$1 = (((((!((map__52933 == null))))?(((((map__52933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52933):map__52933);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52933__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52933__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52933__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.polygon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.polygon.cljs$lang$applyTo = (function (seq52915){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52915));
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
var len__4730__auto___55363 = arguments.length;
var i__4731__auto___55364 = (0);
while(true){
if((i__4731__auto___55364 < len__4730__auto___55363)){
args__4736__auto__.push((arguments[i__4731__auto___55364]));

var G__55365 = (i__4731__auto___55364 + (1));
i__4731__auto___55364 = G__55365;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52937 = conformed_args__50743__auto__;
var map__52937__$1 = (((((!((map__52937 == null))))?(((((map__52937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52937):map__52937);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52937__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52937__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52937__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.pattern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.pattern.cljs$lang$applyTo = (function (seq52936){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52936));
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
var len__4730__auto___55375 = arguments.length;
var i__4731__auto___55376 = (0);
while(true){
if((i__4731__auto___55376 < len__4730__auto___55375)){
args__4736__auto__.push((arguments[i__4731__auto___55376]));

var G__55377 = (i__4731__auto___55376 + (1));
i__4731__auto___55376 = G__55377;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52942 = conformed_args__50743__auto__;
var map__52942__$1 = (((((!((map__52942 == null))))?(((((map__52942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52942):map__52942);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52942__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52942__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52942__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.html.cljs$lang$applyTo = (function (seq52939){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52939));
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
var len__4730__auto___55388 = arguments.length;
var i__4731__auto___55389 = (0);
while(true){
if((i__4731__auto___55389 < len__4730__auto___55388)){
args__4736__auto__.push((arguments[i__4731__auto___55389]));

var G__55390 = (i__4731__auto___55389 + (1));
i__4731__auto___55389 = G__55390;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52947 = conformed_args__50743__auto__;
var map__52947__$1 = (((((!((map__52947 == null))))?(((((map__52947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52947):map__52947);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52947__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52947__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52947__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.foreignObject.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.foreignObject.cljs$lang$applyTo = (function (seq52944){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52944));
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
var len__4730__auto___55392 = arguments.length;
var i__4731__auto___55393 = (0);
while(true){
if((i__4731__auto___55393 < len__4730__auto___55392)){
args__4736__auto__.push((arguments[i__4731__auto___55393]));

var G__55394 = (i__4731__auto___55393 + (1));
i__4731__auto___55393 = G__55394;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52966 = conformed_args__50743__auto__;
var map__52966__$1 = (((((!((map__52966 == null))))?(((((map__52966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52966):map__52966);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52966__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52966__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52966__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.thead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.thead.cljs$lang$applyTo = (function (seq52958){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52958));
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
var len__4730__auto___55401 = arguments.length;
var i__4731__auto___55402 = (0);
while(true){
if((i__4731__auto___55402 < len__4730__auto___55401)){
args__4736__auto__.push((arguments[i__4731__auto___55402]));

var G__55403 = (i__4731__auto___55402 + (1));
i__4731__auto___55402 = G__55403;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52981 = conformed_args__50743__auto__;
var map__52981__$1 = (((((!((map__52981 == null))))?(((((map__52981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52981):map__52981);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52981__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52981__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52981__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.path.cljs$lang$applyTo = (function (seq52978){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52978));
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
var len__4730__auto___55410 = arguments.length;
var i__4731__auto___55411 = (0);
while(true){
if((i__4731__auto___55411 < len__4730__auto___55410)){
args__4736__auto__.push((arguments[i__4731__auto___55411]));

var G__55412 = (i__4731__auto___55411 + (1));
i__4731__auto___55411 = G__55412;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__52995 = conformed_args__50743__auto__;
var map__52995__$1 = (((((!((map__52995 == null))))?(((((map__52995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52995):map__52995);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52995__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52995__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52995__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.del.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.del.cljs$lang$applyTo = (function (seq52990){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52990));
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
var len__4730__auto___55416 = arguments.length;
var i__4731__auto___55417 = (0);
while(true){
if((i__4731__auto___55417 < len__4730__auto___55416)){
args__4736__auto__.push((arguments[i__4731__auto___55417]));

var G__55419 = (i__4731__auto___55417 + (1));
i__4731__auto___55417 = G__55419;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53013 = conformed_args__50743__auto__;
var map__53013__$1 = (((((!((map__53013 == null))))?(((((map__53013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53013):map__53013);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53013__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53013__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53013__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.altGlyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.altGlyph.cljs$lang$applyTo = (function (seq53010){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53010));
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
var len__4730__auto___55421 = arguments.length;
var i__4731__auto___55422 = (0);
while(true){
if((i__4731__auto___55422 < len__4730__auto___55421)){
args__4736__auto__.push((arguments[i__4731__auto___55422]));

var G__55423 = (i__4731__auto___55422 + (1));
i__4731__auto___55422 = G__55423;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53051 = conformed_args__50743__auto__;
var map__53051__$1 = (((((!((map__53051 == null))))?(((((map__53051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53051):map__53051);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53051__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53051__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53051__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.fieldset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.fieldset.cljs$lang$applyTo = (function (seq53048){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53048));
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
var len__4730__auto___55428 = arguments.length;
var i__4731__auto___55429 = (0);
while(true){
if((i__4731__auto___55429 < len__4730__auto___55428)){
args__4736__auto__.push((arguments[i__4731__auto___55429]));

var G__55432 = (i__4731__auto___55429 + (1));
i__4731__auto___55429 = G__55432;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53066 = conformed_args__50743__auto__;
var map__53066__$1 = (((((!((map__53066 == null))))?(((((map__53066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53066):map__53066);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53066__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53066__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53066__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.aside.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.aside.cljs$lang$applyTo = (function (seq53055){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53055));
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
var len__4730__auto___55434 = arguments.length;
var i__4731__auto___55435 = (0);
while(true){
if((i__4731__auto___55435 < len__4730__auto___55434)){
args__4736__auto__.push((arguments[i__4731__auto___55435]));

var G__55436 = (i__4731__auto___55435 + (1));
i__4731__auto___55435 = G__55436;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53101 = conformed_args__50743__auto__;
var map__53101__$1 = (((((!((map__53101 == null))))?(((((map__53101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53101):map__53101);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53101__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53101__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53101__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feBlend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feBlend.cljs$lang$applyTo = (function (seq53089){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53089));
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
var len__4730__auto___55440 = arguments.length;
var i__4731__auto___55441 = (0);
while(true){
if((i__4731__auto___55441 < len__4730__auto___55440)){
args__4736__auto__.push((arguments[i__4731__auto___55441]));

var G__55442 = (i__4731__auto___55441 + (1));
i__4731__auto___55441 = G__55442;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53140 = conformed_args__50743__auto__;
var map__53140__$1 = (((((!((map__53140 == null))))?(((((map__53140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53140):map__53140);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53140__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53140__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53140__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.figure.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.figure.cljs$lang$applyTo = (function (seq53123){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53123));
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
var len__4730__auto___55444 = arguments.length;
var i__4731__auto___55445 = (0);
while(true){
if((i__4731__auto___55445 < len__4730__auto___55444)){
args__4736__auto__.push((arguments[i__4731__auto___55445]));

var G__55446 = (i__4731__auto___55445 + (1));
i__4731__auto___55445 = G__55446;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53174 = conformed_args__50743__auto__;
var map__53174__$1 = (((((!((map__53174 == null))))?(((((map__53174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53174):map__53174);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53174__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53174__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53174__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.textPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.textPath.cljs$lang$applyTo = (function (seq53160){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53160));
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
var len__4730__auto___55450 = arguments.length;
var i__4731__auto___55451 = (0);
while(true){
if((i__4731__auto___55451 < len__4730__auto___55450)){
args__4736__auto__.push((arguments[i__4731__auto___55451]));

var G__55452 = (i__4731__auto___55451 + (1));
i__4731__auto___55451 = G__55452;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53212 = conformed_args__50743__auto__;
var map__53212__$1 = (((((!((map__53212 == null))))?(((((map__53212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53212):map__53212);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53212__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53212__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53212__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.figcaption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.figcaption.cljs$lang$applyTo = (function (seq53195){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53195));
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
var len__4730__auto___55455 = arguments.length;
var i__4731__auto___55456 = (0);
while(true){
if((i__4731__auto___55456 < len__4730__auto___55455)){
args__4736__auto__.push((arguments[i__4731__auto___55456]));

var G__55457 = (i__4731__auto___55456 + (1));
i__4731__auto___55456 = G__55457;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53247 = conformed_args__50743__auto__;
var map__53247__$1 = (((((!((map__53247 == null))))?(((((map__53247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53247):map__53247);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53247__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53247__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53247__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.mask.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.mask.cljs$lang$applyTo = (function (seq53232){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53232));
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
var len__4730__auto___55461 = arguments.length;
var i__4731__auto___55462 = (0);
while(true){
if((i__4731__auto___55462 < len__4730__auto___55461)){
args__4736__auto__.push((arguments[i__4731__auto___55462]));

var G__55463 = (i__4731__auto___55462 + (1));
i__4731__auto___55462 = G__55463;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53258 = conformed_args__50743__auto__;
var map__53258__$1 = (((((!((map__53258 == null))))?(((((map__53258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53258):map__53258);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53258__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53258__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53258__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.q.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.q.cljs$lang$applyTo = (function (seq53257){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53257));
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
var len__4730__auto___55466 = arguments.length;
var i__4731__auto___55467 = (0);
while(true){
if((i__4731__auto___55467 < len__4730__auto___55466)){
args__4736__auto__.push((arguments[i__4731__auto___55467]));

var G__55468 = (i__4731__auto___55467 + (1));
i__4731__auto___55467 = G__55468;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53263 = conformed_args__50743__auto__;
var map__53263__$1 = (((((!((map__53263 == null))))?(((((map__53263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53263):map__53263);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53263__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53263__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53263__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.bdi.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.bdi.cljs$lang$applyTo = (function (seq53260){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53260));
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
var len__4730__auto___55472 = arguments.length;
var i__4731__auto___55473 = (0);
while(true){
if((i__4731__auto___55473 < len__4730__auto___55472)){
args__4736__auto__.push((arguments[i__4731__auto___55473]));

var G__55474 = (i__4731__auto___55473 + (1));
i__4731__auto___55473 = G__55474;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53266 = conformed_args__50743__auto__;
var map__53266__$1 = (((((!((map__53266 == null))))?(((((map__53266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53266):map__53266);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53266__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53266__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53266__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feDistantLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feDistantLight.cljs$lang$applyTo = (function (seq53265){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53265));
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
var len__4730__auto___55477 = arguments.length;
var i__4731__auto___55478 = (0);
while(true){
if((i__4731__auto___55478 < len__4730__auto___55477)){
args__4736__auto__.push((arguments[i__4731__auto___55478]));

var G__55479 = (i__4731__auto___55478 + (1));
i__4731__auto___55478 = G__55479;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53276 = conformed_args__50743__auto__;
var map__53276__$1 = (((((!((map__53276 == null))))?(((((map__53276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53276):map__53276);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53276__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53276__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53276__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.video.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.video.cljs$lang$applyTo = (function (seq53270){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53270));
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
var len__4730__auto___55481 = arguments.length;
var i__4731__auto___55482 = (0);
while(true){
if((i__4731__auto___55482 < len__4730__auto___55481)){
args__4736__auto__.push((arguments[i__4731__auto___55482]));

var G__55483 = (i__4731__auto___55482 + (1));
i__4731__auto___55482 = G__55483;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53295 = conformed_args__50743__auto__;
var map__53295__$1 = (((((!((map__53295 == null))))?(((((map__53295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53295):map__53295);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53295__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53295__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53295__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.address.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.address.cljs$lang$applyTo = (function (seq53282){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53282));
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
var len__4730__auto___55487 = arguments.length;
var i__4731__auto___55488 = (0);
while(true){
if((i__4731__auto___55488 < len__4730__auto___55487)){
args__4736__auto__.push((arguments[i__4731__auto___55488]));

var G__55489 = (i__4731__auto___55488 + (1));
i__4731__auto___55488 = G__55489;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53305 = conformed_args__50743__auto__;
var map__53305__$1 = (((((!((map__53305 == null))))?(((((map__53305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53305):map__53305);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53305__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53305__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53305__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.caption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.caption.cljs$lang$applyTo = (function (seq53302){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53302));
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
var len__4730__auto___55492 = arguments.length;
var i__4731__auto___55493 = (0);
while(true){
if((i__4731__auto___55493 < len__4730__auto___55492)){
args__4736__auto__.push((arguments[i__4731__auto___55493]));

var G__55494 = (i__4731__auto___55493 + (1));
i__4731__auto___55493 = G__55494;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53315 = conformed_args__50743__auto__;
var map__53315__$1 = (((((!((map__53315 == null))))?(((((map__53315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53315):map__53315);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53315__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53315__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53315__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.dd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.dd.cljs$lang$applyTo = (function (seq53309){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53309));
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
var len__4730__auto___55497 = arguments.length;
var i__4731__auto___55498 = (0);
while(true){
if((i__4731__auto___55498 < len__4730__auto___55497)){
args__4736__auto__.push((arguments[i__4731__auto___55498]));

var G__55499 = (i__4731__auto___55498 + (1));
i__4731__auto___55498 = G__55499;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53323 = conformed_args__50743__auto__;
var map__53323__$1 = (((((!((map__53323 == null))))?(((((map__53323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53323):map__53323);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53323__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53323__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53323__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.rp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.rp.cljs$lang$applyTo = (function (seq53319){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53319));
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
var len__4730__auto___55501 = arguments.length;
var i__4731__auto___55502 = (0);
while(true){
if((i__4731__auto___55502 < len__4730__auto___55501)){
args__4736__auto__.push((arguments[i__4731__auto___55502]));

var G__55503 = (i__4731__auto___55502 + (1));
i__4731__auto___55502 = G__55503;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53330 = conformed_args__50743__auto__;
var map__53330__$1 = (((((!((map__53330 == null))))?(((((map__53330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53330):map__53330);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53330__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53330__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53330__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.hr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.hr.cljs$lang$applyTo = (function (seq53327){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53327));
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
var len__4730__auto___55508 = arguments.length;
var i__4731__auto___55509 = (0);
while(true){
if((i__4731__auto___55509 < len__4730__auto___55508)){
args__4736__auto__.push((arguments[i__4731__auto___55509]));

var G__55510 = (i__4731__auto___55509 + (1));
i__4731__auto___55509 = G__55510;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53339 = conformed_args__50743__auto__;
var map__53339__$1 = (((((!((map__53339 == null))))?(((((map__53339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53339):map__53339);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53339__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53339__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53339__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.meta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.meta.cljs$lang$applyTo = (function (seq53337){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53337));
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
var len__4730__auto___55515 = arguments.length;
var i__4731__auto___55516 = (0);
while(true){
if((i__4731__auto___55516 < len__4730__auto___55515)){
args__4736__auto__.push((arguments[i__4731__auto___55516]));

var G__55518 = (i__4731__auto___55516 + (1));
i__4731__auto___55516 = G__55518;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53351 = conformed_args__50743__auto__;
var map__53351__$1 = (((((!((map__53351 == null))))?(((((map__53351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53351):map__53351);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53351__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53351__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53351__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.tbody.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.tbody.cljs$lang$applyTo = (function (seq53349){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53349));
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
var len__4730__auto___55523 = arguments.length;
var i__4731__auto___55524 = (0);
while(true){
if((i__4731__auto___55524 < len__4730__auto___55523)){
args__4736__auto__.push((arguments[i__4731__auto___55524]));

var G__55525 = (i__4731__auto___55524 + (1));
i__4731__auto___55524 = G__55525;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53359 = conformed_args__50743__auto__;
var map__53359__$1 = (((((!((map__53359 == null))))?(((((map__53359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53359):map__53359);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53359__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53359__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53359__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.desc.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.desc.cljs$lang$applyTo = (function (seq53358){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53358));
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
var len__4730__auto___55540 = arguments.length;
var i__4731__auto___55541 = (0);
while(true){
if((i__4731__auto___55541 < len__4730__auto___55540)){
args__4736__auto__.push((arguments[i__4731__auto___55541]));

var G__55543 = (i__4731__auto___55541 + (1));
i__4731__auto___55541 = G__55543;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53370 = conformed_args__50743__auto__;
var map__53370__$1 = (((((!((map__53370 == null))))?(((((map__53370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53370):map__53370);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53370__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53370__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53370__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.table.cljs$lang$applyTo = (function (seq53367){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53367));
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
var len__4730__auto___55555 = arguments.length;
var i__4731__auto___55557 = (0);
while(true){
if((i__4731__auto___55557 < len__4730__auto___55555)){
args__4736__auto__.push((arguments[i__4731__auto___55557]));

var G__55558 = (i__4731__auto___55557 + (1));
i__4731__auto___55557 = G__55558;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53383 = conformed_args__50743__auto__;
var map__53383__$1 = (((((!((map__53383 == null))))?(((((map__53383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53383):map__53383);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53383__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53383__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53383__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.pre.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.pre.cljs$lang$applyTo = (function (seq53376){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53376));
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
var len__4730__auto___55560 = arguments.length;
var i__4731__auto___55561 = (0);
while(true){
if((i__4731__auto___55561 < len__4730__auto___55560)){
args__4736__auto__.push((arguments[i__4731__auto___55561]));

var G__55562 = (i__4731__auto___55561 + (1));
i__4731__auto___55561 = G__55562;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53406 = conformed_args__50743__auto__;
var map__53406__$1 = (((((!((map__53406 == null))))?(((((map__53406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53406):map__53406);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53406__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53406__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53406__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.ul.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.ul.cljs$lang$applyTo = (function (seq53393){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53393));
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
var len__4730__auto___55567 = arguments.length;
var i__4731__auto___55568 = (0);
while(true){
if((i__4731__auto___55568 < len__4730__auto___55567)){
args__4736__auto__.push((arguments[i__4731__auto___55568]));

var G__55569 = (i__4731__auto___55568 + (1));
i__4731__auto___55568 = G__55569;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53412 = conformed_args__50743__auto__;
var map__53412__$1 = (((((!((map__53412 == null))))?(((((map__53412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53412):map__53412);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq53408){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53408));
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
var len__4730__auto___55573 = arguments.length;
var i__4731__auto___55574 = (0);
while(true){
if((i__4731__auto___55574 < len__4730__auto___55573)){
args__4736__auto__.push((arguments[i__4731__auto___55574]));

var G__55575 = (i__4731__auto___55574 + (1));
i__4731__auto___55574 = G__55575;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53430 = conformed_args__50743__auto__;
var map__53430__$1 = (((((!((map__53430 == null))))?(((((map__53430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53430):map__53430);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53430__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53430__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53430__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.sup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.sup.cljs$lang$applyTo = (function (seq53424){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53424));
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
var len__4730__auto___55584 = arguments.length;
var i__4731__auto___55587 = (0);
while(true){
if((i__4731__auto___55587 < len__4730__auto___55584)){
args__4736__auto__.push((arguments[i__4731__auto___55587]));

var G__55588 = (i__4731__auto___55587 + (1));
i__4731__auto___55587 = G__55588;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53437 = conformed_args__50743__auto__;
var map__53437__$1 = (((((!((map__53437 == null))))?(((((map__53437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53437):map__53437);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53437__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53437__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53437__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.dfn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.dfn.cljs$lang$applyTo = (function (seq53434){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53434));
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
var len__4730__auto___55590 = arguments.length;
var i__4731__auto___55591 = (0);
while(true){
if((i__4731__auto___55591 < len__4730__auto___55590)){
args__4736__auto__.push((arguments[i__4731__auto___55591]));

var G__55592 = (i__4731__auto___55591 + (1));
i__4731__auto___55591 = G__55592;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53453 = conformed_args__50743__auto__;
var map__53453__$1 = (((((!((map__53453 == null))))?(((((map__53453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53453):map__53453);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53453__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53453__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53453__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.sub.cljs$lang$applyTo = (function (seq53447){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53447));
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
var len__4730__auto___55595 = arguments.length;
var i__4731__auto___55596 = (0);
while(true){
if((i__4731__auto___55596 < len__4730__auto___55595)){
args__4736__auto__.push((arguments[i__4731__auto___55596]));

var G__55599 = (i__4731__auto___55596 + (1));
i__4731__auto___55596 = G__55599;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53468 = conformed_args__50743__auto__;
var map__53468__$1 = (((((!((map__53468 == null))))?(((((map__53468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53468):map__53468);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53468__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53468__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53468__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.mark.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.mark.cljs$lang$applyTo = (function (seq53460){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53460));
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
var len__4730__auto___55604 = arguments.length;
var i__4731__auto___55605 = (0);
while(true){
if((i__4731__auto___55605 < len__4730__auto___55604)){
args__4736__auto__.push((arguments[i__4731__auto___55605]));

var G__55608 = (i__4731__auto___55605 + (1));
i__4731__auto___55605 = G__55608;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53480 = conformed_args__50743__auto__;
var map__53480__$1 = (((((!((map__53480 == null))))?(((((map__53480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53480):map__53480);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53480__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53480__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53480__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq53477){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53477));
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
var len__4730__auto___55610 = arguments.length;
var i__4731__auto___55611 = (0);
while(true){
if((i__4731__auto___55611 < len__4730__auto___55610)){
args__4736__auto__.push((arguments[i__4731__auto___55611]));

var G__55612 = (i__4731__auto___55611 + (1));
i__4731__auto___55611 = G__55612;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53488 = conformed_args__50743__auto__;
var map__53488__$1 = (((((!((map__53488 == null))))?(((((map__53488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53488):map__53488);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53488__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53488__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53488__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.unknown.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.unknown.cljs$lang$applyTo = (function (seq53484){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53484));
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
var len__4730__auto___55617 = arguments.length;
var i__4731__auto___55618 = (0);
while(true){
if((i__4731__auto___55618 < len__4730__auto___55617)){
args__4736__auto__.push((arguments[i__4731__auto___55618]));

var G__55619 = (i__4731__auto___55618 + (1));
i__4731__auto___55618 = G__55619;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53496 = conformed_args__50743__auto__;
var map__53496__$1 = (((((!((map__53496 == null))))?(((((map__53496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53496):map__53496);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53496__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53496__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53496__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.script.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.script.cljs$lang$applyTo = (function (seq53491){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53491));
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
var len__4730__auto___55621 = arguments.length;
var i__4731__auto___55622 = (0);
while(true){
if((i__4731__auto___55622 < len__4730__auto___55621)){
args__4736__auto__.push((arguments[i__4731__auto___55622]));

var G__55623 = (i__4731__auto___55622 + (1));
i__4731__auto___55622 = G__55623;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53509 = conformed_args__50743__auto__;
var map__53509__$1 = (((((!((map__53509 == null))))?(((((map__53509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53509):map__53509);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53509__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53509__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53509__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feTurbulence.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feTurbulence.cljs$lang$applyTo = (function (seq53505){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53505));
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
var len__4730__auto___55626 = arguments.length;
var i__4731__auto___55627 = (0);
while(true){
if((i__4731__auto___55627 < len__4730__auto___55626)){
args__4736__auto__.push((arguments[i__4731__auto___55627]));

var G__55629 = (i__4731__auto___55627 + (1));
i__4731__auto___55627 = G__55629;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53528 = conformed_args__50743__auto__;
var map__53528__$1 = (((((!((map__53528 == null))))?(((((map__53528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53528):map__53528);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53528__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53528__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53528__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.big.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.big.cljs$lang$applyTo = (function (seq53523){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53523));
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
var len__4730__auto___55640 = arguments.length;
var i__4731__auto___55641 = (0);
while(true){
if((i__4731__auto___55641 < len__4730__auto___55640)){
args__4736__auto__.push((arguments[i__4731__auto___55641]));

var G__55642 = (i__4731__auto___55641 + (1));
i__4731__auto___55641 = G__55642;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53540 = conformed_args__50743__auto__;
var map__53540__$1 = (((((!((map__53540 == null))))?(((((map__53540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53540):map__53540);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53540__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53540__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53540__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.button.cljs$lang$applyTo = (function (seq53531){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53531));
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
var len__4730__auto___55645 = arguments.length;
var i__4731__auto___55646 = (0);
while(true){
if((i__4731__auto___55646 < len__4730__auto___55645)){
args__4736__auto__.push((arguments[i__4731__auto___55646]));

var G__55647 = (i__4731__auto___55646 + (1));
i__4731__auto___55646 = G__55647;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53559 = conformed_args__50743__auto__;
var map__53559__$1 = (((((!((map__53559 == null))))?(((((map__53559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53559):map__53559);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53559__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53559__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53559__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.font_face_uri.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.font_face_uri.cljs$lang$applyTo = (function (seq53546){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53546));
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
var len__4730__auto___55656 = arguments.length;
var i__4731__auto___55658 = (0);
while(true){
if((i__4731__auto___55658 < len__4730__auto___55656)){
args__4736__auto__.push((arguments[i__4731__auto___55658]));

var G__55661 = (i__4731__auto___55658 + (1));
i__4731__auto___55658 = G__55661;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53578 = conformed_args__50743__auto__;
var map__53578__$1 = (((((!((map__53578 == null))))?(((((map__53578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53578):map__53578);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53578__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53578__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53578__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.wbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.wbr.cljs$lang$applyTo = (function (seq53577){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53577));
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
var len__4730__auto___55669 = arguments.length;
var i__4731__auto___55671 = (0);
while(true){
if((i__4731__auto___55671 < len__4730__auto___55669)){
args__4736__auto__.push((arguments[i__4731__auto___55671]));

var G__55673 = (i__4731__auto___55671 + (1));
i__4731__auto___55671 = G__55673;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53588 = conformed_args__50743__auto__;
var map__53588__$1 = (((((!((map__53588 == null))))?(((((map__53588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53588):map__53588);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53588__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53588__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53588__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.symbol.cljs$lang$applyTo = (function (seq53584){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53584));
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
var len__4730__auto___55682 = arguments.length;
var i__4731__auto___55683 = (0);
while(true){
if((i__4731__auto___55683 < len__4730__auto___55682)){
args__4736__auto__.push((arguments[i__4731__auto___55683]));

var G__55684 = (i__4731__auto___55683 + (1));
i__4731__auto___55683 = G__55684;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53598 = conformed_args__50743__auto__;
var map__53598__$1 = (((((!((map__53598 == null))))?(((((map__53598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53598):map__53598);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53598__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53598__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53598__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.strong.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.strong.cljs$lang$applyTo = (function (seq53592){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53592));
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
var len__4730__auto___55692 = arguments.length;
var i__4731__auto___55693 = (0);
while(true){
if((i__4731__auto___55693 < len__4730__auto___55692)){
args__4736__auto__.push((arguments[i__4731__auto___55693]));

var G__55695 = (i__4731__auto___55693 + (1));
i__4731__auto___55693 = G__55695;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53619 = conformed_args__50743__auto__;
var map__53619__$1 = (((((!((map__53619 == null))))?(((((map__53619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53619):map__53619);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53619__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53619__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53619__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.use.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.use.cljs$lang$applyTo = (function (seq53617){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53617));
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
var len__4730__auto___55705 = arguments.length;
var i__4731__auto___55707 = (0);
while(true){
if((i__4731__auto___55707 < len__4730__auto___55705)){
args__4736__auto__.push((arguments[i__4731__auto___55707]));

var G__55709 = (i__4731__auto___55707 + (1));
i__4731__auto___55707 = G__55709;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53647 = conformed_args__50743__auto__;
var map__53647__$1 = (((((!((map__53647 == null))))?(((((map__53647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53647):map__53647);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53647__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53647__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53647__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.solidcolor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.solidcolor.cljs$lang$applyTo = (function (seq53638){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53638));
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
var len__4730__auto___55718 = arguments.length;
var i__4731__auto___55719 = (0);
while(true){
if((i__4731__auto___55719 < len__4730__auto___55718)){
args__4736__auto__.push((arguments[i__4731__auto___55719]));

var G__55720 = (i__4731__auto___55719 + (1));
i__4731__auto___55719 = G__55720;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53659 = conformed_args__50743__auto__;
var map__53659__$1 = (((((!((map__53659 == null))))?(((((map__53659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53659):map__53659);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53659__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53659__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53659__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.fePointLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.fePointLight.cljs$lang$applyTo = (function (seq53655){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53655));
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
var len__4730__auto___55722 = arguments.length;
var i__4731__auto___55723 = (0);
while(true){
if((i__4731__auto___55723 < len__4730__auto___55722)){
args__4736__auto__.push((arguments[i__4731__auto___55723]));

var G__55724 = (i__4731__auto___55723 + (1));
i__4731__auto___55723 = G__55724;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53672 = conformed_args__50743__auto__;
var map__53672__$1 = (((((!((map__53672 == null))))?(((((map__53672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53672):map__53672);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53672__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53672__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53672__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.li.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.li.cljs$lang$applyTo = (function (seq53666){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53666));
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
var len__4730__auto___55730 = arguments.length;
var i__4731__auto___55731 = (0);
while(true){
if((i__4731__auto___55731 < len__4730__auto___55730)){
args__4736__auto__.push((arguments[i__4731__auto___55731]));

var G__55732 = (i__4731__auto___55731 + (1));
i__4731__auto___55731 = G__55732;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53678 = conformed_args__50743__auto__;
var map__53678__$1 = (((((!((map__53678 == null))))?(((((map__53678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53678):map__53678);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53678__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53678__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53678__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.dt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.dt.cljs$lang$applyTo = (function (seq53675){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53675));
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
var len__4730__auto___55734 = arguments.length;
var i__4731__auto___55736 = (0);
while(true){
if((i__4731__auto___55736 < len__4730__auto___55734)){
args__4736__auto__.push((arguments[i__4731__auto___55736]));

var G__55737 = (i__4731__auto___55736 + (1));
i__4731__auto___55736 = G__55737;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53686 = conformed_args__50743__auto__;
var map__53686__$1 = (((((!((map__53686 == null))))?(((((map__53686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53686):map__53686);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53686__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53686__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53686__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feFuncB.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feFuncB.cljs$lang$applyTo = (function (seq53683){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53683));
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
var len__4730__auto___55746 = arguments.length;
var i__4731__auto___55747 = (0);
while(true){
if((i__4731__auto___55747 < len__4730__auto___55746)){
args__4736__auto__.push((arguments[i__4731__auto___55747]));

var G__55748 = (i__4731__auto___55747 + (1));
i__4731__auto___55747 = G__55748;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53696 = conformed_args__50743__auto__;
var map__53696__$1 = (((((!((map__53696 == null))))?(((((map__53696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53696):map__53696);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53696__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53696__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53696__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.marker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.marker.cljs$lang$applyTo = (function (seq53694){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53694));
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
var len__4730__auto___55757 = arguments.length;
var i__4731__auto___55759 = (0);
while(true){
if((i__4731__auto___55759 < len__4730__auto___55757)){
args__4736__auto__.push((arguments[i__4731__auto___55759]));

var G__55760 = (i__4731__auto___55759 + (1));
i__4731__auto___55759 = G__55760;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53702 = conformed_args__50743__auto__;
var map__53702__$1 = (((((!((map__53702 == null))))?(((((map__53702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53702):map__53702);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53702__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53702__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53702__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq53700){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53700));
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
var len__4730__auto___55765 = arguments.length;
var i__4731__auto___55766 = (0);
while(true){
if((i__4731__auto___55766 < len__4730__auto___55765)){
args__4736__auto__.push((arguments[i__4731__auto___55766]));

var G__55767 = (i__4731__auto___55766 + (1));
i__4731__auto___55766 = G__55767;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53717 = conformed_args__50743__auto__;
var map__53717__$1 = (((((!((map__53717 == null))))?(((((map__53717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53717):map__53717);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53717__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53717__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53717__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.td.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.td.cljs$lang$applyTo = (function (seq53713){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53713));
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
var len__4730__auto___55772 = arguments.length;
var i__4731__auto___55773 = (0);
while(true){
if((i__4731__auto___55773 < len__4730__auto___55772)){
args__4736__auto__.push((arguments[i__4731__auto___55773]));

var G__55774 = (i__4731__auto___55773 + (1));
i__4731__auto___55773 = G__55774;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53733 = conformed_args__50743__auto__;
var map__53733__$1 = (((((!((map__53733 == null))))?(((((map__53733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53733):map__53733);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53733__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53733__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53733__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.tr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.tr.cljs$lang$applyTo = (function (seq53731){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53731));
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
var len__4730__auto___55780 = arguments.length;
var i__4731__auto___55781 = (0);
while(true){
if((i__4731__auto___55781 < len__4730__auto___55780)){
args__4736__auto__.push((arguments[i__4731__auto___55781]));

var G__55782 = (i__4731__auto___55781 + (1));
i__4731__auto___55781 = G__55782;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53740 = conformed_args__50743__auto__;
var map__53740__$1 = (((((!((map__53740 == null))))?(((((map__53740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53740):map__53740);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53740__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53740__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53740__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.circle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.circle.cljs$lang$applyTo = (function (seq53739){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53739));
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
var len__4730__auto___55788 = arguments.length;
var i__4731__auto___55789 = (0);
while(true){
if((i__4731__auto___55789 < len__4730__auto___55788)){
args__4736__auto__.push((arguments[i__4731__auto___55789]));

var G__55790 = (i__4731__auto___55789 + (1));
i__4731__auto___55789 = G__55790;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53759 = conformed_args__50743__auto__;
var map__53759__$1 = (((((!((map__53759 == null))))?(((((map__53759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53759):map__53759);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53759__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53759__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53759__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.section.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.section.cljs$lang$applyTo = (function (seq53756){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53756));
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
var len__4730__auto___55799 = arguments.length;
var i__4731__auto___55800 = (0);
while(true){
if((i__4731__auto___55800 < len__4730__auto___55799)){
args__4736__auto__.push((arguments[i__4731__auto___55800]));

var G__55801 = (i__4731__auto___55800 + (1));
i__4731__auto___55800 = G__55801;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53772 = conformed_args__50743__auto__;
var map__53772__$1 = (((((!((map__53772 == null))))?(((((map__53772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53772):map__53772);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53772__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53772__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53772__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feDropShadow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feDropShadow.cljs$lang$applyTo = (function (seq53767){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53767));
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
var len__4730__auto___55809 = arguments.length;
var i__4731__auto___55810 = (0);
while(true){
if((i__4731__auto___55810 < len__4730__auto___55809)){
args__4736__auto__.push((arguments[i__4731__auto___55810]));

var G__55811 = (i__4731__auto___55810 + (1));
i__4731__auto___55810 = G__55811;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53796 = conformed_args__50743__auto__;
var map__53796__$1 = (((((!((map__53796 == null))))?(((((map__53796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53796):map__53796);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53796__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53796__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53796__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.th.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.th.cljs$lang$applyTo = (function (seq53783){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53783));
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
var len__4730__auto___55812 = arguments.length;
var i__4731__auto___55813 = (0);
while(true){
if((i__4731__auto___55813 < len__4730__auto___55812)){
args__4736__auto__.push((arguments[i__4731__auto___55813]));

var G__55815 = (i__4731__auto___55813 + (1));
i__4731__auto___55813 = G__55815;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53808 = conformed_args__50743__auto__;
var map__53808__$1 = (((((!((map__53808 == null))))?(((((map__53808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53808):map__53808);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53808__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53808__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53808__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.time.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.time.cljs$lang$applyTo = (function (seq53800){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53800));
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
var len__4730__auto___55820 = arguments.length;
var i__4731__auto___55821 = (0);
while(true){
if((i__4731__auto___55821 < len__4730__auto___55820)){
args__4736__auto__.push((arguments[i__4731__auto___55821]));

var G__55822 = (i__4731__auto___55821 + (1));
i__4731__auto___55821 = G__55822;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53819 = conformed_args__50743__auto__;
var map__53819__$1 = (((((!((map__53819 == null))))?(((((map__53819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53819):map__53819);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53819__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53819__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53819__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.optgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.optgroup.cljs$lang$applyTo = (function (seq53816){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53816));
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
var len__4730__auto___55828 = arguments.length;
var i__4731__auto___55829 = (0);
while(true){
if((i__4731__auto___55829 < len__4730__auto___55828)){
args__4736__auto__.push((arguments[i__4731__auto___55829]));

var G__55830 = (i__4731__auto___55829 + (1));
i__4731__auto___55829 = G__55830;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53850 = conformed_args__50743__auto__;
var map__53850__$1 = (((((!((map__53850 == null))))?(((((map__53850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53850):map__53850);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53850__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53850__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53850__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.iframe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.iframe.cljs$lang$applyTo = (function (seq53848){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53848));
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
var len__4730__auto___55834 = arguments.length;
var i__4731__auto___55835 = (0);
while(true){
if((i__4731__auto___55835 < len__4730__auto___55834)){
args__4736__auto__.push((arguments[i__4731__auto___55835]));

var G__55836 = (i__4731__auto___55835 + (1));
i__4731__auto___55835 = G__55836;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53866 = conformed_args__50743__auto__;
var map__53866__$1 = (((((!((map__53866 == null))))?(((((map__53866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53866):map__53866);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53866__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53866__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53866__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.color_profile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.color_profile.cljs$lang$applyTo = (function (seq53860){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53860));
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
var len__4730__auto___55839 = arguments.length;
var i__4731__auto___55840 = (0);
while(true){
if((i__4731__auto___55840 < len__4730__auto___55839)){
args__4736__auto__.push((arguments[i__4731__auto___55840]));

var G__55841 = (i__4731__auto___55840 + (1));
i__4731__auto___55840 = G__55841;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53891 = conformed_args__50743__auto__;
var map__53891__$1 = (((((!((map__53891 == null))))?(((((map__53891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53891):map__53891);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53891__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53891__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53891__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.legend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.legend.cljs$lang$applyTo = (function (seq53876){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53876));
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
var len__4730__auto___55843 = arguments.length;
var i__4731__auto___55845 = (0);
while(true){
if((i__4731__auto___55845 < len__4730__auto___55843)){
args__4736__auto__.push((arguments[i__4731__auto___55845]));

var G__55847 = (i__4731__auto___55845 + (1));
i__4731__auto___55845 = G__55847;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53908 = conformed_args__50743__auto__;
var map__53908__$1 = (((((!((map__53908 == null))))?(((((map__53908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53908):map__53908);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53908__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53908__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53908__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.em.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.em.cljs$lang$applyTo = (function (seq53905){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53905));
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
var len__4730__auto___55850 = arguments.length;
var i__4731__auto___55851 = (0);
while(true){
if((i__4731__auto___55851 < len__4730__auto___55850)){
args__4736__auto__.push((arguments[i__4731__auto___55851]));

var G__55852 = (i__4731__auto___55851 + (1));
i__4731__auto___55851 = G__55852;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53917 = conformed_args__50743__auto__;
var map__53917__$1 = (((((!((map__53917 == null))))?(((((map__53917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53917):map__53917);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53917__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53917__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53917__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.kbd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.kbd.cljs$lang$applyTo = (function (seq53912){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53912));
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
var len__4730__auto___55858 = arguments.length;
var i__4731__auto___55859 = (0);
while(true){
if((i__4731__auto___55859 < len__4730__auto___55858)){
args__4736__auto__.push((arguments[i__4731__auto___55859]));

var G__55861 = (i__4731__auto___55859 + (1));
i__4731__auto___55859 = G__55861;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53930 = conformed_args__50743__auto__;
var map__53930__$1 = (((((!((map__53930 == null))))?(((((map__53930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53930):map__53930);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53930__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53930__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53930__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.article.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.article.cljs$lang$applyTo = (function (seq53922){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53922));
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
var len__4730__auto___55865 = arguments.length;
var i__4731__auto___55866 = (0);
while(true){
if((i__4731__auto___55866 < len__4730__auto___55865)){
args__4736__auto__.push((arguments[i__4731__auto___55866]));

var G__55867 = (i__4731__auto___55866 + (1));
i__4731__auto___55866 = G__55867;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53947 = conformed_args__50743__auto__;
var map__53947__$1 = (((((!((map__53947 == null))))?(((((map__53947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53947):map__53947);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53947__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53947__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53947__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.animateColor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.animateColor.cljs$lang$applyTo = (function (seq53939){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53939));
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
var len__4730__auto___55871 = arguments.length;
var i__4731__auto___55872 = (0);
while(true){
if((i__4731__auto___55872 < len__4730__auto___55871)){
args__4736__auto__.push((arguments[i__4731__auto___55872]));

var G__55877 = (i__4731__auto___55872 + (1));
i__4731__auto___55872 = G__55877;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53954 = conformed_args__50743__auto__;
var map__53954__$1 = (((((!((map__53954 == null))))?(((((map__53954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53954):map__53954);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53954__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53954__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53954__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.clipPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.clipPath.cljs$lang$applyTo = (function (seq53951){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53951));
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
return fulcro.client.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53961 = conformed_args__50743__auto__;
var map__53961__$1 = (((((!((map__53961 == null))))?(((((map__53961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53961):map__53961);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53961__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53961__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53961__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.abbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.abbr.cljs$lang$applyTo = (function (seq53957){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53957));
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
var len__4730__auto___55898 = arguments.length;
var i__4731__auto___55899 = (0);
while(true){
if((i__4731__auto___55899 < len__4730__auto___55898)){
args__4736__auto__.push((arguments[i__4731__auto___55899]));

var G__55900 = (i__4731__auto___55899 + (1));
i__4731__auto___55899 = G__55900;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53968 = conformed_args__50743__auto__;
var map__53968__$1 = (((((!((map__53968 == null))))?(((((map__53968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53968):map__53968);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53968__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53968__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53968__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.altGlyphDef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.altGlyphDef.cljs$lang$applyTo = (function (seq53965){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53965));
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
var len__4730__auto___55910 = arguments.length;
var i__4731__auto___55911 = (0);
while(true){
if((i__4731__auto___55911 < len__4730__auto___55910)){
args__4736__auto__.push((arguments[i__4731__auto___55911]));

var G__55912 = (i__4731__auto___55911 + (1));
i__4731__auto___55911 = G__55912;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53983 = conformed_args__50743__auto__;
var map__53983__$1 = (((((!((map__53983 == null))))?(((((map__53983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53983):map__53983);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53983__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53983__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53983__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.meshrow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.meshrow.cljs$lang$applyTo = (function (seq53974){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53974));
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
var len__4730__auto___55914 = arguments.length;
var i__4731__auto___55915 = (0);
while(true){
if((i__4731__auto___55915 < len__4730__auto___55914)){
args__4736__auto__.push((arguments[i__4731__auto___55915]));

var G__55916 = (i__4731__auto___55915 + (1));
i__4731__auto___55915 = G__55916;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53990 = conformed_args__50743__auto__;
var map__53990__$1 = (((((!((map__53990 == null))))?(((((map__53990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53990):map__53990);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53990__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53990__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53990__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.cursor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.cursor.cljs$lang$applyTo = (function (seq53986){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53986));
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
var len__4730__auto___55929 = arguments.length;
var i__4731__auto___55930 = (0);
while(true){
if((i__4731__auto___55930 < len__4730__auto___55929)){
args__4736__auto__.push((arguments[i__4731__auto___55930]));

var G__55932 = (i__4731__auto___55930 + (1));
i__4731__auto___55930 = G__55932;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__53999 = conformed_args__50743__auto__;
var map__53999__$1 = (((((!((map__53999 == null))))?(((((map__53999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53999):map__53999);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53999__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53999__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53999__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.animate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.animate.cljs$lang$applyTo = (function (seq53994){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53994));
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
return fulcro.client.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54006 = conformed_args__50743__auto__;
var map__54006__$1 = (((((!((map__54006 == null))))?(((((map__54006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54006):map__54006);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54006__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54006__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54006__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.source.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.source.cljs$lang$applyTo = (function (seq54004){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54004));
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
var len__4730__auto___55951 = arguments.length;
var i__4731__auto___55952 = (0);
while(true){
if((i__4731__auto___55952 < len__4730__auto___55951)){
args__4736__auto__.push((arguments[i__4731__auto___55952]));

var G__55953 = (i__4731__auto___55952 + (1));
i__4731__auto___55952 = G__55953;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54017 = conformed_args__50743__auto__;
var map__54017__$1 = (((((!((map__54017 == null))))?(((((map__54017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54017):map__54017);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54017__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54017__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54017__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.output.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.output.cljs$lang$applyTo = (function (seq54014){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54014));
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
var len__4730__auto___55954 = arguments.length;
var i__4731__auto___55955 = (0);
while(true){
if((i__4731__auto___55955 < len__4730__auto___55954)){
args__4736__auto__.push((arguments[i__4731__auto___55955]));

var G__55956 = (i__4731__auto___55955 + (1));
i__4731__auto___55955 = G__55956;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54037 = conformed_args__50743__auto__;
var map__54037__$1 = (((((!((map__54037 == null))))?(((((map__54037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54037):map__54037);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54037__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54037__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54037__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.font_face.cljs$lang$applyTo = (function (seq54027){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54027));
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
var len__4730__auto___55963 = arguments.length;
var i__4731__auto___55966 = (0);
while(true){
if((i__4731__auto___55966 < len__4730__auto___55963)){
args__4736__auto__.push((arguments[i__4731__auto___55966]));

var G__55970 = (i__4731__auto___55966 + (1));
i__4731__auto___55966 = G__55970;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54049 = conformed_args__50743__auto__;
var map__54049__$1 = (((((!((map__54049 == null))))?(((((map__54049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54049):map__54049);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54049__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54049__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54049__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feMergeNode.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feMergeNode.cljs$lang$applyTo = (function (seq54041){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54041));
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
var len__4730__auto___55974 = arguments.length;
var i__4731__auto___55975 = (0);
while(true){
if((i__4731__auto___55975 < len__4730__auto___55974)){
args__4736__auto__.push((arguments[i__4731__auto___55975]));

var G__55976 = (i__4731__auto___55975 + (1));
i__4731__auto___55975 = G__55976;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54059 = conformed_args__50743__auto__;
var map__54059__$1 = (((((!((map__54059 == null))))?(((((map__54059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54059):map__54059);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54059__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54059__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54059__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feSpotLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feSpotLight.cljs$lang$applyTo = (function (seq54055){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54055));
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
var len__4730__auto___55983 = arguments.length;
var i__4731__auto___55984 = (0);
while(true){
if((i__4731__auto___55984 < len__4730__auto___55983)){
args__4736__auto__.push((arguments[i__4731__auto___55984]));

var G__55985 = (i__4731__auto___55984 + (1));
i__4731__auto___55984 = G__55985;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54074 = conformed_args__50743__auto__;
var map__54074__$1 = (((((!((map__54074 == null))))?(((((map__54074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54074):map__54074);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54074__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54074__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54074__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.header.cljs$lang$applyTo = (function (seq54071){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54071));
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
return fulcro.client.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54088 = conformed_args__50743__auto__;
var map__54088__$1 = (((((!((map__54088 == null))))?(((((map__54088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54088):map__54088);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54088__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54088__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54088__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.datalist.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.datalist.cljs$lang$applyTo = (function (seq54083){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54083));
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
var len__4730__auto___55991 = arguments.length;
var i__4731__auto___55992 = (0);
while(true){
if((i__4731__auto___55992 < len__4730__auto___55991)){
args__4736__auto__.push((arguments[i__4731__auto___55992]));

var G__55994 = (i__4731__auto___55992 + (1));
i__4731__auto___55992 = G__55994;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54106 = conformed_args__50743__auto__;
var map__54106__$1 = (((((!((map__54106 == null))))?(((((map__54106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54106):map__54106);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54106__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54106__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54106__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.tfoot.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.tfoot.cljs$lang$applyTo = (function (seq54104){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54104));
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
var len__4730__auto___55998 = arguments.length;
var i__4731__auto___55999 = (0);
while(true){
if((i__4731__auto___55999 < len__4730__auto___55998)){
args__4736__auto__.push((arguments[i__4731__auto___55999]));

var G__56000 = (i__4731__auto___55999 + (1));
i__4731__auto___55999 = G__56000;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54120 = conformed_args__50743__auto__;
var map__54120__$1 = (((((!((map__54120 == null))))?(((((map__54120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54120):map__54120);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54120__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54120__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54120__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.s.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.s.cljs$lang$applyTo = (function (seq54117){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54117));
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
var len__4730__auto___56005 = arguments.length;
var i__4731__auto___56006 = (0);
while(true){
if((i__4731__auto___56006 < len__4730__auto___56005)){
args__4736__auto__.push((arguments[i__4731__auto___56006]));

var G__56007 = (i__4731__auto___56006 + (1));
i__4731__auto___56006 = G__56007;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54140 = conformed_args__50743__auto__;
var map__54140__$1 = (((((!((map__54140 == null))))?(((((map__54140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54140):map__54140);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54140__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54140__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54140__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.hatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.hatch.cljs$lang$applyTo = (function (seq54130){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54130));
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
var len__4730__auto___56012 = arguments.length;
var i__4731__auto___56013 = (0);
while(true){
if((i__4731__auto___56013 < len__4730__auto___56012)){
args__4736__auto__.push((arguments[i__4731__auto___56013]));

var G__56014 = (i__4731__auto___56013 + (1));
i__4731__auto___56013 = G__56014;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54149 = conformed_args__50743__auto__;
var map__54149__$1 = (((((!((map__54149 == null))))?(((((map__54149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54149):map__54149);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54149__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54149__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54149__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.ins.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.ins.cljs$lang$applyTo = (function (seq54144){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54144));
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
var len__4730__auto___56023 = arguments.length;
var i__4731__auto___56024 = (0);
while(true){
if((i__4731__auto___56024 < len__4730__auto___56023)){
args__4736__auto__.push((arguments[i__4731__auto___56024]));

var G__56025 = (i__4731__auto___56024 + (1));
i__4731__auto___56024 = G__56025;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54156 = conformed_args__50743__auto__;
var map__54156__$1 = (((((!((map__54156 == null))))?(((((map__54156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54156):map__54156);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54156__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54156__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54156__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.footer.cljs$lang$applyTo = (function (seq54153){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54153));
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
var len__4730__auto___56033 = arguments.length;
var i__4731__auto___56034 = (0);
while(true){
if((i__4731__auto___56034 < len__4730__auto___56033)){
args__4736__auto__.push((arguments[i__4731__auto___56034]));

var G__56035 = (i__4731__auto___56034 + (1));
i__4731__auto___56034 = G__56035;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54163 = conformed_args__50743__auto__;
var map__54163__$1 = (((((!((map__54163 == null))))?(((((map__54163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54163):map__54163);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54163__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54163__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54163__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.mpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.mpath.cljs$lang$applyTo = (function (seq54160){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54160));
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
var len__4730__auto___56043 = arguments.length;
var i__4731__auto___56046 = (0);
while(true){
if((i__4731__auto___56046 < len__4730__auto___56043)){
args__4736__auto__.push((arguments[i__4731__auto___56046]));

var G__56047 = (i__4731__auto___56046 + (1));
i__4731__auto___56046 = G__56047;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54173 = conformed_args__50743__auto__;
var map__54173__$1 = (((((!((map__54173 == null))))?(((((map__54173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54173):map__54173);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54173__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54173__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54173__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.title.cljs$lang$applyTo = (function (seq54168){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54168));
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
var len__4730__auto___56050 = arguments.length;
var i__4731__auto___56051 = (0);
while(true){
if((i__4731__auto___56051 < len__4730__auto___56050)){
args__4736__auto__.push((arguments[i__4731__auto___56051]));

var G__56052 = (i__4731__auto___56051 + (1));
i__4731__auto___56051 = G__56052;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54188 = conformed_args__50743__auto__;
var map__54188__$1 = (((((!((map__54188 == null))))?(((((map__54188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54188):map__54188);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54188__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54188__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54188__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.h5.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h5.cljs$lang$applyTo = (function (seq54184){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54184));
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
var len__4730__auto___56055 = arguments.length;
var i__4731__auto___56056 = (0);
while(true){
if((i__4731__auto___56056 < len__4730__auto___56055)){
args__4736__auto__.push((arguments[i__4731__auto___56056]));

var G__56057 = (i__4731__auto___56056 + (1));
i__4731__auto___56056 = G__56057;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54203 = conformed_args__50743__auto__;
var map__54203__$1 = (((((!((map__54203 == null))))?(((((map__54203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54203):map__54203);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54203__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54203__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54203__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.meshgradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.meshgradient.cljs$lang$applyTo = (function (seq54194){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54194));
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
var len__4730__auto___56060 = arguments.length;
var i__4731__auto___56062 = (0);
while(true){
if((i__4731__auto___56062 < len__4730__auto___56060)){
args__4736__auto__.push((arguments[i__4731__auto___56062]));

var G__56064 = (i__4731__auto___56062 + (1));
i__4731__auto___56062 = G__56064;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54215 = conformed_args__50743__auto__;
var map__54215__$1 = (((((!((map__54215 == null))))?(((((map__54215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54215):map__54215);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54215__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54215__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54215__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.canvas.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.canvas.cljs$lang$applyTo = (function (seq54212){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54212));
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
var len__4730__auto___56069 = arguments.length;
var i__4731__auto___56070 = (0);
while(true){
if((i__4731__auto___56070 < len__4730__auto___56069)){
args__4736__auto__.push((arguments[i__4731__auto___56070]));

var G__56071 = (i__4731__auto___56070 + (1));
i__4731__auto___56070 = G__56071;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54222 = conformed_args__50743__auto__;
var map__54222__$1 = (((((!((map__54222 == null))))?(((((map__54222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54222):map__54222);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54222__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54222__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54222__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.param.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.param.cljs$lang$applyTo = (function (seq54220){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54220));
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
return fulcro.client.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54242 = conformed_args__50743__auto__;
var map__54242__$1 = (((((!((map__54242 == null))))?(((((map__54242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54242):map__54242);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54242__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54242__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54242__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.font.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.font.cljs$lang$applyTo = (function (seq54237){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54237));
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
return fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54251 = conformed_args__50743__auto__;
var map__54251__$1 = (((((!((map__54251 == null))))?(((((map__54251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54251):map__54251);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54251__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54251__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54251__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.div.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.div.cljs$lang$applyTo = (function (seq54249){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54249));
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
var len__4730__auto___56086 = arguments.length;
var i__4731__auto___56087 = (0);
while(true){
if((i__4731__auto___56087 < len__4730__auto___56086)){
args__4736__auto__.push((arguments[i__4731__auto___56087]));

var G__56088 = (i__4731__auto___56087 + (1));
i__4731__auto___56087 = G__56088;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54270 = conformed_args__50743__auto__;
var map__54270__$1 = (((((!((map__54270 == null))))?(((((map__54270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54270):map__54270);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54270__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54270__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54270__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.option.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.option.cljs$lang$applyTo = (function (seq54257){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54257));
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
var len__4730__auto___56099 = arguments.length;
var i__4731__auto___56100 = (0);
while(true){
if((i__4731__auto___56100 < len__4730__auto___56099)){
args__4736__auto__.push((arguments[i__4731__auto___56100]));

var G__56101 = (i__4731__auto___56100 + (1));
i__4731__auto___56100 = G__56101;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54289 = conformed_args__50743__auto__;
var map__54289__$1 = (((((!((map__54289 == null))))?(((((map__54289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54289):map__54289);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54289__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54289__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54289__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feFlood.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feFlood.cljs$lang$applyTo = (function (seq54279){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54279));
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
var len__4730__auto___56108 = arguments.length;
var i__4731__auto___56109 = (0);
while(true){
if((i__4731__auto___56109 < len__4730__auto___56108)){
args__4736__auto__.push((arguments[i__4731__auto___56109]));

var G__56110 = (i__4731__auto___56109 + (1));
i__4731__auto___56109 = G__56110;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54324 = conformed_args__50743__auto__;
var map__54324__$1 = (((((!((map__54324 == null))))?(((((map__54324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54324):map__54324);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54324__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54324__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54324__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.summary.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.summary.cljs$lang$applyTo = (function (seq54291){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54291));
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
var len__4730__auto___56113 = arguments.length;
var i__4731__auto___56114 = (0);
while(true){
if((i__4731__auto___56114 < len__4730__auto___56113)){
args__4736__auto__.push((arguments[i__4731__auto___56114]));

var G__56115 = (i__4731__auto___56114 + (1));
i__4731__auto___56114 = G__56115;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54345 = conformed_args__50743__auto__;
var map__54345__$1 = (((((!((map__54345 == null))))?(((((map__54345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54345):map__54345);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54345__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54345__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54345__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feMorphology.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feMorphology.cljs$lang$applyTo = (function (seq54335){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54335));
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
var len__4730__auto___56116 = arguments.length;
var i__4731__auto___56117 = (0);
while(true){
if((i__4731__auto___56117 < len__4730__auto___56116)){
args__4736__auto__.push((arguments[i__4731__auto___56117]));

var G__56118 = (i__4731__auto___56117 + (1));
i__4731__auto___56117 = G__56118;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54365 = conformed_args__50743__auto__;
var map__54365__$1 = (((((!((map__54365 == null))))?(((((map__54365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54365):map__54365);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54365__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54365__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54365__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.samp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.samp.cljs$lang$applyTo = (function (seq54356){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54356));
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
var len__4730__auto___56119 = arguments.length;
var i__4731__auto___56120 = (0);
while(true){
if((i__4731__auto___56120 < len__4730__auto___56119)){
args__4736__auto__.push((arguments[i__4731__auto___56120]));

var G__56121 = (i__4731__auto___56120 + (1));
i__4731__auto___56120 = G__56121;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54378 = conformed_args__50743__auto__;
var map__54378__$1 = (((((!((map__54378 == null))))?(((((map__54378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54378):map__54378);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54378__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54378__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54378__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.glyphRef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.glyphRef.cljs$lang$applyTo = (function (seq54368){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54368));
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
var len__4730__auto___56134 = arguments.length;
var i__4731__auto___56135 = (0);
while(true){
if((i__4731__auto___56135 < len__4730__auto___56134)){
args__4736__auto__.push((arguments[i__4731__auto___56135]));

var G__56136 = (i__4731__auto___56135 + (1));
i__4731__auto___56135 = G__56136;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54398 = conformed_args__50743__auto__;
var map__54398__$1 = (((((!((map__54398 == null))))?(((((map__54398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54398):map__54398);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54398__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54398__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54398__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.small.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.small.cljs$lang$applyTo = (function (seq54389){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54389));
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
var len__4730__auto___56149 = arguments.length;
var i__4731__auto___56150 = (0);
while(true){
if((i__4731__auto___56150 < len__4730__auto___56149)){
args__4736__auto__.push((arguments[i__4731__auto___56150]));

var G__56152 = (i__4731__auto___56150 + (1));
i__4731__auto___56150 = G__56152;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54413 = conformed_args__50743__auto__;
var map__54413__$1 = (((((!((map__54413 == null))))?(((((map__54413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54413):map__54413);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54413__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54413__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54413__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.style.cljs$lang$applyTo = (function (seq54403){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54403));
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
var len__4730__auto___56154 = arguments.length;
var i__4731__auto___56155 = (0);
while(true){
if((i__4731__auto___56155 < len__4730__auto___56154)){
args__4736__auto__.push((arguments[i__4731__auto___56155]));

var G__56157 = (i__4731__auto___56155 + (1));
i__4731__auto___56155 = G__56157;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54424 = conformed_args__50743__auto__;
var map__54424__$1 = (((((!((map__54424 == null))))?(((((map__54424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54424):map__54424);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54424__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54424__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54424__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.textarea.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.textarea.cljs$lang$applyTo = (function (seq54423){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54423));
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
var len__4730__auto___56172 = arguments.length;
var i__4731__auto___56173 = (0);
while(true){
if((i__4731__auto___56173 < len__4730__auto___56172)){
args__4736__auto__.push((arguments[i__4731__auto___56173]));

var G__56174 = (i__4731__auto___56173 + (1));
i__4731__auto___56173 = G__56174;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54431 = conformed_args__50743__auto__;
var map__54431__$1 = (((((!((map__54431 == null))))?(((((map__54431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54431):map__54431);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54431__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54431__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54431__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq54426){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54426));
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
var len__4730__auto___56193 = arguments.length;
var i__4731__auto___56194 = (0);
while(true){
if((i__4731__auto___56194 < len__4730__auto___56193)){
args__4736__auto__.push((arguments[i__4731__auto___56194]));

var G__56195 = (i__4731__auto___56194 + (1));
i__4731__auto___56194 = G__56195;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54452 = conformed_args__50743__auto__;
var map__54452__$1 = (((((!((map__54452 == null))))?(((((map__54452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54452):map__54452);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54452__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54452__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54452__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.h4.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h4.cljs$lang$applyTo = (function (seq54446){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54446));
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
var len__4730__auto___56204 = arguments.length;
var i__4731__auto___56205 = (0);
while(true){
if((i__4731__auto___56205 < len__4730__auto___56204)){
args__4736__auto__.push((arguments[i__4731__auto___56205]));

var G__56206 = (i__4731__auto___56205 + (1));
i__4731__auto___56205 = G__56206;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54463 = conformed_args__50743__auto__;
var map__54463__$1 = (((((!((map__54463 == null))))?(((((map__54463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54463):map__54463);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54463__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54463__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54463__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.head.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.head.cljs$lang$applyTo = (function (seq54459){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54459));
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
var len__4730__auto___56207 = arguments.length;
var i__4731__auto___56208 = (0);
while(true){
if((i__4731__auto___56208 < len__4730__auto___56207)){
args__4736__auto__.push((arguments[i__4731__auto___56208]));

var G__56209 = (i__4731__auto___56208 + (1));
i__4731__auto___56208 = G__56209;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54469 = conformed_args__50743__auto__;
var map__54469__$1 = (((((!((map__54469 == null))))?(((((map__54469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54469):map__54469);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54469__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54469__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54469__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.g.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.g.cljs$lang$applyTo = (function (seq54466){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54466));
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
var len__4730__auto___56210 = arguments.length;
var i__4731__auto___56211 = (0);
while(true){
if((i__4731__auto___56211 < len__4730__auto___56210)){
args__4736__auto__.push((arguments[i__4731__auto___56211]));

var G__56213 = (i__4731__auto___56211 + (1));
i__4731__auto___56211 = G__56213;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54478 = conformed_args__50743__auto__;
var map__54478__$1 = (((((!((map__54478 == null))))?(((((map__54478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54478):map__54478);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54478__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54478__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54478__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.missing_glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.missing_glyph.cljs$lang$applyTo = (function (seq54473){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54473));
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
return fulcro.client.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54485 = conformed_args__50743__auto__;
var map__54485__$1 = (((((!((map__54485 == null))))?(((((map__54485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54485):map__54485);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54485__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54485__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54485__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.stop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.stop.cljs$lang$applyTo = (function (seq54480){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54480));
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
var len__4730__auto___56217 = arguments.length;
var i__4731__auto___56218 = (0);
while(true){
if((i__4731__auto___56218 < len__4730__auto___56217)){
args__4736__auto__.push((arguments[i__4731__auto___56218]));

var G__56219 = (i__4731__auto___56218 + (1));
i__4731__auto___56218 = G__56219;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54493 = conformed_args__50743__auto__;
var map__54493__$1 = (((((!((map__54493 == null))))?(((((map__54493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54493):map__54493);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq54489){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54489));
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
var len__4730__auto___56223 = arguments.length;
var i__4731__auto___56224 = (0);
while(true){
if((i__4731__auto___56224 < len__4730__auto___56223)){
args__4736__auto__.push((arguments[i__4731__auto___56224]));

var G__56225 = (i__4731__auto___56224 + (1));
i__4731__auto___56224 = G__56225;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54499 = conformed_args__50743__auto__;
var map__54499__$1 = (((((!((map__54499 == null))))?(((((map__54499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54499):map__54499);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54499__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54499__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54499__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.filter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.filter.cljs$lang$applyTo = (function (seq54497){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54497));
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
var len__4730__auto___56229 = arguments.length;
var i__4731__auto___56230 = (0);
while(true){
if((i__4731__auto___56230 < len__4730__auto___56229)){
args__4736__auto__.push((arguments[i__4731__auto___56230]));

var G__56231 = (i__4731__auto___56230 + (1));
i__4731__auto___56230 = G__56231;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54506 = conformed_args__50743__auto__;
var map__54506__$1 = (((((!((map__54506 == null))))?(((((map__54506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54506):map__54506);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54506__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54506__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54506__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feComposite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feComposite.cljs$lang$applyTo = (function (seq54502){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54502));
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
var len__4730__auto___56236 = arguments.length;
var i__4731__auto___56237 = (0);
while(true){
if((i__4731__auto___56237 < len__4730__auto___56236)){
args__4736__auto__.push((arguments[i__4731__auto___56237]));

var G__56238 = (i__4731__auto___56237 + (1));
i__4731__auto___56237 = G__56238;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54514 = conformed_args__50743__auto__;
var map__54514__$1 = (((((!((map__54514 == null))))?(((((map__54514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54514):map__54514);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54514__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54514__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54514__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.mesh.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.mesh.cljs$lang$applyTo = (function (seq54512){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54512));
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
var len__4730__auto___56239 = arguments.length;
var i__4731__auto___56240 = (0);
while(true){
if((i__4731__auto___56240 < len__4730__auto___56239)){
args__4736__auto__.push((arguments[i__4731__auto___56240]));

var G__56241 = (i__4731__auto___56240 + (1));
i__4731__auto___56240 = G__56241;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54521 = conformed_args__50743__auto__;
var map__54521__$1 = (((((!((map__54521 == null))))?(((((map__54521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54521):map__54521);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54521__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54521__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54521__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.var$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.var$.cljs$lang$applyTo = (function (seq54519){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54519));
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
var len__4730__auto___56245 = arguments.length;
var i__4731__auto___56246 = (0);
while(true){
if((i__4731__auto___56246 < len__4730__auto___56245)){
args__4736__auto__.push((arguments[i__4731__auto___56246]));

var G__56248 = (i__4731__auto___56246 + (1));
i__4731__auto___56246 = G__56248;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54527 = conformed_args__50743__auto__;
var map__54527__$1 = (((((!((map__54527 == null))))?(((((map__54527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54527):map__54527);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54527__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54527__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54527__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.tspan.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.tspan.cljs$lang$applyTo = (function (seq54525){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54525));
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
var len__4730__auto___56249 = arguments.length;
var i__4731__auto___56250 = (0);
while(true){
if((i__4731__auto___56250 < len__4730__auto___56249)){
args__4736__auto__.push((arguments[i__4731__auto___56250]));

var G__56251 = (i__4731__auto___56250 + (1));
i__4731__auto___56250 = G__56251;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54532 = conformed_args__50743__auto__;
var map__54532__$1 = (((((!((map__54532 == null))))?(((((map__54532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54532):map__54532);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54532__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54532__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54532__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.ol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.ol.cljs$lang$applyTo = (function (seq54530){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54530));
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
var len__4730__auto___56252 = arguments.length;
var i__4731__auto___56253 = (0);
while(true){
if((i__4731__auto___56253 < len__4730__auto___56252)){
args__4736__auto__.push((arguments[i__4731__auto___56253]));

var G__56254 = (i__4731__auto___56253 + (1));
i__4731__auto___56253 = G__56254;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54537 = conformed_args__50743__auto__;
var map__54537__$1 = (((((!((map__54537 == null))))?(((((map__54537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54537):map__54537);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54537__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54537__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54537__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.details.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.details.cljs$lang$applyTo = (function (seq54535){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54535));
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
var len__4730__auto___56258 = arguments.length;
var i__4731__auto___56259 = (0);
while(true){
if((i__4731__auto___56259 < len__4730__auto___56258)){
args__4736__auto__.push((arguments[i__4731__auto___56259]));

var G__56260 = (i__4731__auto___56259 + (1));
i__4731__auto___56259 = G__56260;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54542 = conformed_args__50743__auto__;
var map__54542__$1 = (((((!((map__54542 == null))))?(((((map__54542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54542):map__54542);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54542__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54542__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54542__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.line.cljs$lang$applyTo = (function (seq54539){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54539));
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
var len__4730__auto___56264 = arguments.length;
var i__4731__auto___56265 = (0);
while(true){
if((i__4731__auto___56265 < len__4730__auto___56264)){
args__4736__auto__.push((arguments[i__4731__auto___56265]));

var G__56266 = (i__4731__auto___56265 + (1));
i__4731__auto___56265 = G__56266;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54549 = conformed_args__50743__auto__;
var map__54549__$1 = (((((!((map__54549 == null))))?(((((map__54549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54549):map__54549);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54549__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54549__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54549__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.col.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.col.cljs$lang$applyTo = (function (seq54547){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54547));
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
var len__4730__auto___56268 = arguments.length;
var i__4731__auto___56269 = (0);
while(true){
if((i__4731__auto___56269 < len__4730__auto___56268)){
args__4736__auto__.push((arguments[i__4731__auto___56269]));

var G__56270 = (i__4731__auto___56269 + (1));
i__4731__auto___56269 = G__56270;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54558 = conformed_args__50743__auto__;
var map__54558__$1 = (((((!((map__54558 == null))))?(((((map__54558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54558):map__54558);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54558__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54558__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54558__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.label.cljs$lang$applyTo = (function (seq54553){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54553));
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
var len__4730__auto___56275 = arguments.length;
var i__4731__auto___56276 = (0);
while(true){
if((i__4731__auto___56276 < len__4730__auto___56275)){
args__4736__auto__.push((arguments[i__4731__auto___56276]));

var G__56277 = (i__4731__auto___56276 + (1));
i__4731__auto___56276 = G__56277;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54564 = conformed_args__50743__auto__;
var map__54564__$1 = (((((!((map__54564 == null))))?(((((map__54564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54564):map__54564);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54564__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54564__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54564__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.picture.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.picture.cljs$lang$applyTo = (function (seq54561){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54561));
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
var len__4730__auto___56278 = arguments.length;
var i__4731__auto___56279 = (0);
while(true){
if((i__4731__auto___56279 < len__4730__auto___56278)){
args__4736__auto__.push((arguments[i__4731__auto___56279]));

var G__56280 = (i__4731__auto___56279 + (1));
i__4731__auto___56279 = G__56280;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54573 = conformed_args__50743__auto__;
var map__54573__$1 = (((((!((map__54573 == null))))?(((((map__54573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54573):map__54573);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54573__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54573__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54573__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.rt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.rt.cljs$lang$applyTo = (function (seq54571){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54571));
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
return fulcro.client.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54584 = conformed_args__50743__auto__;
var map__54584__$1 = (((((!((map__54584 == null))))?(((((map__54584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54584):map__54584);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54584__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54584__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54584__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.h6.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h6.cljs$lang$applyTo = (function (seq54577){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54577));
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
var len__4730__auto___56291 = arguments.length;
var i__4731__auto___56292 = (0);
while(true){
if((i__4731__auto___56292 < len__4730__auto___56291)){
args__4736__auto__.push((arguments[i__4731__auto___56292]));

var G__56293 = (i__4731__auto___56292 + (1));
i__4731__auto___56292 = G__56293;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54591 = conformed_args__50743__auto__;
var map__54591__$1 = (((((!((map__54591 == null))))?(((((map__54591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54591):map__54591);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54591__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54591__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54591__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.vkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.vkern.cljs$lang$applyTo = (function (seq54588){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54588));
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
var len__4730__auto___56294 = arguments.length;
var i__4731__auto___56295 = (0);
while(true){
if((i__4731__auto___56295 < len__4730__auto___56294)){
args__4736__auto__.push((arguments[i__4731__auto___56295]));

var G__56296 = (i__4731__auto___56295 + (1));
i__4731__auto___56295 = G__56296;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54597 = conformed_args__50743__auto__;
var map__54597__$1 = (((((!((map__54597 == null))))?(((((map__54597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54597):map__54597);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54597__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54597__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54597__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.link.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.link.cljs$lang$applyTo = (function (seq54594){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54594));
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
var len__4730__auto___56297 = arguments.length;
var i__4731__auto___56298 = (0);
while(true){
if((i__4731__auto___56298 < len__4730__auto___56297)){
args__4736__auto__.push((arguments[i__4731__auto___56298]));

var G__56299 = (i__4731__auto___56298 + (1));
i__4731__auto___56298 = G__56299;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54604 = conformed_args__50743__auto__;
var map__54604__$1 = (((((!((map__54604 == null))))?(((((map__54604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54604):map__54604);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54604__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54604__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54604__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.defs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.defs.cljs$lang$applyTo = (function (seq54601){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54601));
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
var len__4730__auto___56302 = arguments.length;
var i__4731__auto___56303 = (0);
while(true){
if((i__4731__auto___56303 < len__4730__auto___56302)){
args__4736__auto__.push((arguments[i__4731__auto___56303]));

var G__56304 = (i__4731__auto___56303 + (1));
i__4731__auto___56303 = G__56304;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54616 = conformed_args__50743__auto__;
var map__54616__$1 = (((((!((map__54616 == null))))?(((((map__54616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54616):map__54616);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54616__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54616__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54616__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.glyph.cljs$lang$applyTo = (function (seq54608){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54608));
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
var len__4730__auto___56307 = arguments.length;
var i__4731__auto___56308 = (0);
while(true){
if((i__4731__auto___56308 < len__4730__auto___56307)){
args__4736__auto__.push((arguments[i__4731__auto___56308]));

var G__56310 = (i__4731__auto___56308 + (1));
i__4731__auto___56308 = G__56310;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54624 = conformed_args__50743__auto__;
var map__54624__$1 = (((((!((map__54624 == null))))?(((((map__54624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54624):map__54624);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54624__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54624__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54624__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.colgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.colgroup.cljs$lang$applyTo = (function (seq54620){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54620));
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
var len__4730__auto___56313 = arguments.length;
var i__4731__auto___56314 = (0);
while(true){
if((i__4731__auto___56314 < len__4730__auto___56313)){
args__4736__auto__.push((arguments[i__4731__auto___56314]));

var G__56315 = (i__4731__auto___56314 + (1));
i__4731__auto___56314 = G__56315;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54634 = conformed_args__50743__auto__;
var map__54634__$1 = (((((!((map__54634 == null))))?(((((map__54634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54634):map__54634);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54634__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54634__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54634__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.meter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.meter.cljs$lang$applyTo = (function (seq54628){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54628));
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
var len__4730__auto___56316 = arguments.length;
var i__4731__auto___56317 = (0);
while(true){
if((i__4731__auto___56317 < len__4730__auto___56316)){
args__4736__auto__.push((arguments[i__4731__auto___56317]));

var G__56318 = (i__4731__auto___56317 + (1));
i__4731__auto___56317 = G__56318;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54643 = conformed_args__50743__auto__;
var map__54643__$1 = (((((!((map__54643 == null))))?(((((map__54643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54643):map__54643);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54643__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54643__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54643__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.bdo.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.bdo.cljs$lang$applyTo = (function (seq54640){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54640));
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
var len__4730__auto___56325 = arguments.length;
var i__4731__auto___56326 = (0);
while(true){
if((i__4731__auto___56326 < len__4730__auto___56325)){
args__4736__auto__.push((arguments[i__4731__auto___56326]));

var G__56327 = (i__4731__auto___56326 + (1));
i__4731__auto___56326 = G__56327;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54658 = conformed_args__50743__auto__;
var map__54658__$1 = (((((!((map__54658 == null))))?(((((map__54658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54658):map__54658);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54658__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54658__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54658__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feImage.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feImage.cljs$lang$applyTo = (function (seq54654){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54654));
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
return fulcro.client.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54673 = conformed_args__50743__auto__;
var map__54673__$1 = (((((!((map__54673 == null))))?(((((map__54673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54673):map__54673);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54673__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54673__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54673__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.b.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.b.cljs$lang$applyTo = (function (seq54664){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54664));
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
var len__4730__auto___56337 = arguments.length;
var i__4731__auto___56338 = (0);
while(true){
if((i__4731__auto___56338 < len__4730__auto___56337)){
args__4736__auto__.push((arguments[i__4731__auto___56338]));

var G__56339 = (i__4731__auto___56338 + (1));
i__4731__auto___56338 = G__56339;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54692 = conformed_args__50743__auto__;
var map__54692__$1 = (((((!((map__54692 == null))))?(((((map__54692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54692):map__54692);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54692__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54692__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54692__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.svg.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.svg.cljs$lang$applyTo = (function (seq54683){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54683));
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
var len__4730__auto___56342 = arguments.length;
var i__4731__auto___56343 = (0);
while(true){
if((i__4731__auto___56343 < len__4730__auto___56342)){
args__4736__auto__.push((arguments[i__4731__auto___56343]));

var G__56344 = (i__4731__auto___56343 + (1));
i__4731__auto___56343 = G__56344;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54696 = conformed_args__50743__auto__;
var map__54696__$1 = (((((!((map__54696 == null))))?(((((map__54696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54696):map__54696);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54696__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54696__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54696__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feTile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feTile.cljs$lang$applyTo = (function (seq54694){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54694));
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
var len__4730__auto___56345 = arguments.length;
var i__4731__auto___56346 = (0);
while(true){
if((i__4731__auto___56346 < len__4730__auto___56345)){
args__4736__auto__.push((arguments[i__4731__auto___56346]));

var G__56347 = (i__4731__auto___56346 + (1));
i__4731__auto___56346 = G__56347;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54702 = conformed_args__50743__auto__;
var map__54702__$1 = (((((!((map__54702 == null))))?(((((map__54702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54702):map__54702);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54702__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54702__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54702__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.ellipse.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.ellipse.cljs$lang$applyTo = (function (seq54701){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54701));
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
var len__4730__auto___56351 = arguments.length;
var i__4731__auto___56352 = (0);
while(true){
if((i__4731__auto___56352 < len__4730__auto___56351)){
args__4736__auto__.push((arguments[i__4731__auto___56352]));

var G__56353 = (i__4731__auto___56352 + (1));
i__4731__auto___56352 = G__56353;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54715 = conformed_args__50743__auto__;
var map__54715__$1 = (((((!((map__54715 == null))))?(((((map__54715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54715):map__54715);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54715__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54715__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54715__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.code.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.code.cljs$lang$applyTo = (function (seq54712){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54712));
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
var len__4730__auto___56363 = arguments.length;
var i__4731__auto___56364 = (0);
while(true){
if((i__4731__auto___56364 < len__4730__auto___56363)){
args__4736__auto__.push((arguments[i__4731__auto___56364]));

var G__56365 = (i__4731__auto___56364 + (1));
i__4731__auto___56364 = G__56365;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54727 = conformed_args__50743__auto__;
var map__54727__$1 = (((((!((map__54727 == null))))?(((((map__54727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54727):map__54727);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54727__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54727__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54727__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.dialog.cljs$lang$applyTo = (function (seq54724){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54724));
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
var len__4730__auto___56368 = arguments.length;
var i__4731__auto___56370 = (0);
while(true){
if((i__4731__auto___56370 < len__4730__auto___56368)){
args__4736__auto__.push((arguments[i__4731__auto___56370]));

var G__56371 = (i__4731__auto___56370 + (1));
i__4731__auto___56370 = G__56371;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54738 = conformed_args__50743__auto__;
var map__54738__$1 = (((((!((map__54738 == null))))?(((((map__54738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54738):map__54738);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54738__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54738__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54738__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.linearGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.linearGradient.cljs$lang$applyTo = (function (seq54736){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54736));
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
var len__4730__auto___56378 = arguments.length;
var i__4731__auto___56382 = (0);
while(true){
if((i__4731__auto___56382 < len__4730__auto___56378)){
args__4736__auto__.push((arguments[i__4731__auto___56382]));

var G__56383 = (i__4731__auto___56382 + (1));
i__4731__auto___56382 = G__56383;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54745 = conformed_args__50743__auto__;
var map__54745__$1 = (((((!((map__54745 == null))))?(((((map__54745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54745):map__54745);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54745__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54745__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54745__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.discard.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.discard.cljs$lang$applyTo = (function (seq54743){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54743));
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
var len__4730__auto___56387 = arguments.length;
var i__4731__auto___56388 = (0);
while(true){
if((i__4731__auto___56388 < len__4730__auto___56387)){
args__4736__auto__.push((arguments[i__4731__auto___56388]));

var G__56390 = (i__4731__auto___56388 + (1));
i__4731__auto___56388 = G__56390;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54756 = conformed_args__50743__auto__;
var map__54756__$1 = (((((!((map__54756 == null))))?(((((map__54756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54756):map__54756);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54756__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54756__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54756__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.font_face_src.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.font_face_src.cljs$lang$applyTo = (function (seq54754){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54754));
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
var len__4730__auto___56394 = arguments.length;
var i__4731__auto___56395 = (0);
while(true){
if((i__4731__auto___56395 < len__4730__auto___56394)){
args__4736__auto__.push((arguments[i__4731__auto___56395]));

var G__56396 = (i__4731__auto___56395 + (1));
i__4731__auto___56395 = G__56396;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54769 = conformed_args__50743__auto__;
var map__54769__$1 = (((((!((map__54769 == null))))?(((((map__54769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54769):map__54769);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54769__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54769__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54769__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.noscript.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.noscript.cljs$lang$applyTo = (function (seq54766){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54766));
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
var len__4730__auto___56405 = arguments.length;
var i__4731__auto___56406 = (0);
while(true){
if((i__4731__auto___56406 < len__4730__auto___56405)){
args__4736__auto__.push((arguments[i__4731__auto___56406]));

var G__56407 = (i__4731__auto___56406 + (1));
i__4731__auto___56406 = G__56407;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54780 = conformed_args__50743__auto__;
var map__54780__$1 = (((((!((map__54780 == null))))?(((((map__54780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54780):map__54780);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54780__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54780__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54780__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.animateTransform.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.animateTransform.cljs$lang$applyTo = (function (seq54773){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54773));
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
return fulcro.client.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54789 = conformed_args__50743__auto__;
var map__54789__$1 = (((((!((map__54789 == null))))?(((((map__54789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54789):map__54789);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54789__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54789__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54789__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.feColorMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feColorMatrix.cljs$lang$applyTo = (function (seq54786){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54786));
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
var len__4730__auto___56413 = arguments.length;
var i__4731__auto___56414 = (0);
while(true){
if((i__4731__auto___56414 < len__4730__auto___56413)){
args__4736__auto__.push((arguments[i__4731__auto___56414]));

var G__56415 = (i__4731__auto___56414 + (1));
i__4731__auto___56414 = G__56415;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54807 = conformed_args__50743__auto__;
var map__54807__$1 = (((((!((map__54807 == null))))?(((((map__54807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54807):map__54807);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54807__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54807__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54807__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.h2.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h2.cljs$lang$applyTo = (function (seq54797){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54797));
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
var len__4730__auto___56421 = arguments.length;
var i__4731__auto___56422 = (0);
while(true){
if((i__4731__auto___56422 < len__4730__auto___56421)){
args__4736__auto__.push((arguments[i__4731__auto___56422]));

var G__56423 = (i__4731__auto___56422 + (1));
i__4731__auto___56422 = G__56423;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54827 = conformed_args__50743__auto__;
var map__54827__$1 = (((((!((map__54827 == null))))?(((((map__54827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54827):map__54827);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54827__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54827__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54827__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.area.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.area.cljs$lang$applyTo = (function (seq54818){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54818));
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
var len__4730__auto___56427 = arguments.length;
var i__4731__auto___56428 = (0);
while(true){
if((i__4731__auto___56428 < len__4730__auto___56427)){
args__4736__auto__.push((arguments[i__4731__auto___56428]));

var G__56429 = (i__4731__auto___56428 + (1));
i__4731__auto___56428 = G__56429;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54839 = conformed_args__50743__auto__;
var map__54839__$1 = (((((!((map__54839 == null))))?(((((map__54839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54839):map__54839);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54839__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54839__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54839__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.br.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.br.cljs$lang$applyTo = (function (seq54832){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54832));
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
var len__4730__auto___56434 = arguments.length;
var i__4731__auto___56435 = (0);
while(true){
if((i__4731__auto___56435 < len__4730__auto___56434)){
args__4736__auto__.push((arguments[i__4731__auto___56435]));

var G__56436 = (i__4731__auto___56435 + (1));
i__4731__auto___56435 = G__56436;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__54851 = conformed_args__50743__auto__;
var map__54851__$1 = (((((!((map__54851 == null))))?(((((map__54851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54851):map__54851);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54851__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54851__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54851__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.dom.image.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.image.cljs$lang$applyTo = (function (seq54850){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54850));
});


//# sourceMappingURL=fulcro.client.dom.js.map
