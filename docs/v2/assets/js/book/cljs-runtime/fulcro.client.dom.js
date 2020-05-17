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
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__60069#","p1__60069#",-1448045112,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__60069#","p1__60069#",-1448045112,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__60069#","p1__60069#",-1448045112,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__60070#","p1__60070#",-976190679,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__60070#","p1__60070#",-976190679,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__60070#","p1__60070#",-976190679,null))))))),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__60071#","p1__60071#",415247514,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__60071#","p1__60071#",415247514,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__60071#","p1__60071#",415247514,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__60071#","p1__60071#",415247514,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(cljs.core.keyword_QMARK_,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-object","js-object",1830199158)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,(function (p1__60069_SHARP_){
return ((cljs.core.map_QMARK_(p1__60069_SHARP_)) && ((!(fulcro.client.dom.element_QMARK_(p1__60069_SHARP_)))));
}),(function (p1__60070_SHARP_){
return ((cljs.core.object_QMARK_(p1__60070_SHARP_)) && ((!(fulcro.client.dom.element_QMARK_(p1__60070_SHARP_)))));
})], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__60069#","p1__60069#",-1448045112,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__60069#","p1__60069#",-1448045112,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__60069#","p1__60069#",-1448045112,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__60070#","p1__60070#",-976190679,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__60070#","p1__60070#",-976190679,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__60070#","p1__60070#",-976190679,null))))))),cljs.spec.alpha.rep_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__60071#","p1__60071#",415247514,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__60071#","p1__60071#",415247514,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__60071#","p1__60071#",415247514,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__60071#","p1__60071#",415247514,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"element","element",1974019749)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.number_QMARK_,(function (p1__60071_SHARP_){
return ((cljs.core.vector_QMARK_(p1__60071_SHARP_)) || (cljs.core.seq_QMARK_(p1__60071_SHARP_)) || (cljs.core.array_QMARK_(p1__60071_SHARP_)));
}),cljs.core.nil_QMARK_,fulcro.client.dom.element_QMARK_], null),null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__60069#","p1__60069#",-1448045112,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__60069#","p1__60069#",-1448045112,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__60069#","p1__60069#",-1448045112,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__60070#","p1__60070#",-976190679,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__60070#","p1__60070#",-976190679,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__60070#","p1__60070#",-976190679,null))))))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__60071#","p1__60071#",415247514,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__60071#","p1__60071#",415247514,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__60071#","p1__60071#",415247514,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__60071#","p1__60071#",415247514,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null)))], null)));
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
var G__60145 = arguments.length;
switch (G__60145) {
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
var G__60148 = component.refs;
var G__60148__$1 = (((G__60148 == null))?null:goog.object.get(G__60148,name));
if((G__60148__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__60148__$1);
}
});

fulcro.client.dom.node.cljs$lang$maxFixedArity = 2;

/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
fulcro.client.dom.create_element = (function fulcro$client$dom$create_element(var_args){
var G__60155 = arguments.length;
switch (G__60155) {
case 1:
return fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___63191 = arguments.length;
var i__4731__auto___63192 = (0);
while(true){
if((i__4731__auto___63192 < len__4730__auto___63191)){
args_arr__4751__auto__.push((arguments[i__4731__auto___63192]));

var G__63193 = (i__4731__auto___63192 + (1));
i__4731__auto___63192 = G__63193;
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
fulcro.client.dom.create_element.cljs$lang$applyTo = (function (seq60151){
var G__60152 = cljs.core.first(seq60151);
var seq60151__$1 = cljs.core.next(seq60151);
var G__60153 = cljs.core.first(seq60151__$1);
var seq60151__$2 = cljs.core.next(seq60151__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60152,G__60153,seq60151__$2);
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
var G__60160 = clojure.string.lower_case(tag);
return (fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__60160) : fulcro.client.dom.form_elements_QMARK_.call(null,G__60160));
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

var x60162_63212 = ctor.prototype;
x60162_63212.onChange = ((function (x60162_63212,ctor){
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
});})(x60162_63212,ctor))
;

x60162_63212.componentWillReceiveProps = ((function (x60162_63212,ctor){
return (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(fulcro.client.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,((function (state_value,this_node,this$,x60162_63212,ctor){
return (function (p1__60161_SHARP_){
return fulcro.client.dom.is_form_element_QMARK_(p1__60161_SHARP_);
});})(state_value,this_node,this$,x60162_63212,ctor))
));
var element_value = goog.object.get(value_node,"value");
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return fulcro.client.dom.update_state(this$,new_props,element_value);
} else {
return fulcro.client.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
});})(x60162_63212,ctor))
;

x60162_63212.render = ((function (x60162_63212,ctor){
return (function (){
var this$ = this;
return React.createElement(element,this$.state);
});})(x60162_63212,ctor))
;


var real_factory = React.createFactory(ctor);
return ((function (real_factory,ctor){
return (function() { 
var G__63217__delegate = function (props,children){
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
var G__63217 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__63221__i = 0, G__63221__a = new Array(arguments.length -  1);
while (G__63221__i < G__63221__a.length) {G__63221__a[G__63221__i] = arguments[G__63221__i + 1]; ++G__63221__i;}
  children = new cljs.core.IndexedSeq(G__63221__a,0,null);
} 
return G__63217__delegate.call(this,props,children);};
G__63217.cljs$lang$maxFixedArity = 1;
G__63217.cljs$lang$applyTo = (function (arglist__63223){
var props = cljs.core.first(arglist__63223);
var children = cljs.core.rest(arglist__63223);
return G__63217__delegate(props,children);
});
G__63217.cljs$core$IFn$_invoke$arity$variadic = G__63217__delegate;
return G__63217;
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
var G__60170 = tag;
switch (G__60170) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60170)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
fulcro.client.dom.macro_create_element = (function fulcro$client$dom$macro_create_element(var_args){
var G__60172 = arguments.length;
switch (G__60172) {
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
var vec__60175 = args;
var seq__60176 = cljs.core.seq(vec__60175);
var first__60177 = cljs.core.first(seq__60176);
var seq__60176__$1 = cljs.core.next(seq__60176);
var head = first__60177;
var tail = seq__60176__$1;
var f = (cljs.core.truth_((fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : fulcro.client.dom.form_elements_QMARK_.call(null,type)))?fulcro.client.dom.macro_create_wrapped_form_element:fulcro.client.dom.macro_create_element_STAR_);
if((head == null)){
var G__60180 = (function (){var G__60181 = [type,fulcro.client.dom_common.add_kwprops_to_props(({}),csskw)];
fulcro.client.dom.arr_append(G__60181,tail);

return G__60181;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60180) : f.call(null,G__60180));
} else {
if(fulcro.client.dom.element_QMARK_(head)){
var G__60184 = (function (){var G__60185 = [type,fulcro.client.dom_common.add_kwprops_to_props(({}),csskw)];
fulcro.client.dom.arr_append(G__60185,args);

return G__60185;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60184) : f.call(null,G__60184));
} else {
if(cljs.core.object_QMARK_(head)){
var G__60187 = (function (){var G__60188 = [type,fulcro.client.dom_common.add_kwprops_to_props(head,csskw)];
fulcro.client.dom.arr_append(G__60188,tail);

return G__60188;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60187) : f.call(null,G__60187));
} else {
if(cljs.core.map_QMARK_(head)){
var G__60189 = (function (){var G__60190 = [type,cljs.core.clj__GT_js(fulcro.client.dom_common.add_kwprops_to_props(fulcro.client.dom_common.interpret_classes(head),csskw))];
fulcro.client.dom.arr_append(G__60190,tail);

return G__60190;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60189) : f.call(null,G__60189));
} else {
var G__60191 = (function (){var G__60192 = [type,fulcro.client.dom_common.add_kwprops_to_props(({}),csskw)];
fulcro.client.dom.arr_append(G__60192,args);

return G__60192;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60191) : f.call(null,G__60191));

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
var len__4730__auto___63231 = arguments.length;
var i__4731__auto___63232 = (0);
while(true){
if((i__4731__auto___63232 < len__4730__auto___63231)){
args__4736__auto__.push((arguments[i__4731__auto___63232]));

var G__63233 = (i__4731__auto___63232 + (1));
i__4731__auto___63232 = G__63233;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60237 = conformed_args__58615__auto__;
var map__60237__$1 = (((((!((map__60237 == null))))?(((((map__60237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60237):map__60237);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60237__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60237__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60237__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.form.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.form.cljs$lang$applyTo = (function (seq60227){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60227));
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
var len__4730__auto___63242 = arguments.length;
var i__4731__auto___63243 = (0);
while(true){
if((i__4731__auto___63243 < len__4730__auto___63242)){
args__4736__auto__.push((arguments[i__4731__auto___63243]));

var G__63244 = (i__4731__auto___63243 + (1));
i__4731__auto___63243 = G__63244;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60259 = conformed_args__58615__auto__;
var map__60259__$1 = (((((!((map__60259 == null))))?(((((map__60259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60259):map__60259);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60259__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60259__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60259__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.audio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.audio.cljs$lang$applyTo = (function (seq60252){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60252));
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
var len__4730__auto___63246 = arguments.length;
var i__4731__auto___63247 = (0);
while(true){
if((i__4731__auto___63247 < len__4730__auto___63246)){
args__4736__auto__.push((arguments[i__4731__auto___63247]));

var G__63248 = (i__4731__auto___63247 + (1));
i__4731__auto___63247 = G__63248;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60274 = conformed_args__58615__auto__;
var map__60274__$1 = (((((!((map__60274 == null))))?(((((map__60274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60274):map__60274);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60274__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60274__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60274__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.input.cljs$lang$applyTo = (function (seq60269){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60269));
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
var len__4730__auto___63255 = arguments.length;
var i__4731__auto___63256 = (0);
while(true){
if((i__4731__auto___63256 < len__4730__auto___63255)){
args__4736__auto__.push((arguments[i__4731__auto___63256]));

var G__63259 = (i__4731__auto___63256 + (1));
i__4731__auto___63256 = G__63259;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60285 = conformed_args__58615__auto__;
var map__60285__$1 = (((((!((map__60285 == null))))?(((((map__60285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60285):map__60285);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60285__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60285__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60285__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.menuitem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.menuitem.cljs$lang$applyTo = (function (seq60279){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60279));
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
var len__4730__auto___63266 = arguments.length;
var i__4731__auto___63267 = (0);
while(true){
if((i__4731__auto___63267 < len__4730__auto___63266)){
args__4736__auto__.push((arguments[i__4731__auto___63267]));

var G__63268 = (i__4731__auto___63267 + (1));
i__4731__auto___63267 = G__63268;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60294 = conformed_args__58615__auto__;
var map__60294__$1 = (((((!((map__60294 == null))))?(((((map__60294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60294):map__60294);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60294__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60294__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60294__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.radialGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.radialGradient.cljs$lang$applyTo = (function (seq60291){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60291));
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
var len__4730__auto___63272 = arguments.length;
var i__4731__auto___63273 = (0);
while(true){
if((i__4731__auto___63273 < len__4730__auto___63272)){
args__4736__auto__.push((arguments[i__4731__auto___63273]));

var G__63274 = (i__4731__auto___63273 + (1));
i__4731__auto___63273 = G__63274;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60301 = conformed_args__58615__auto__;
var map__60301__$1 = (((((!((map__60301 == null))))?(((((map__60301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60301):map__60301);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60301__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60301__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60301__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feMerge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feMerge.cljs$lang$applyTo = (function (seq60298){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60298));
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
var len__4730__auto___63285 = arguments.length;
var i__4731__auto___63286 = (0);
while(true){
if((i__4731__auto___63286 < len__4730__auto___63285)){
args__4736__auto__.push((arguments[i__4731__auto___63286]));

var G__63291 = (i__4731__auto___63286 + (1));
i__4731__auto___63286 = G__63291;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60309 = conformed_args__58615__auto__;
var map__60309__$1 = (((((!((map__60309 == null))))?(((((map__60309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60309):map__60309);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60309__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60309__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.set.cljs$lang$applyTo = (function (seq60306){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60306));
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
var len__4730__auto___63297 = arguments.length;
var i__4731__auto___63298 = (0);
while(true){
if((i__4731__auto___63298 < len__4730__auto___63297)){
args__4736__auto__.push((arguments[i__4731__auto___63298]));

var G__63299 = (i__4731__auto___63298 + (1));
i__4731__auto___63298 = G__63299;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60326 = conformed_args__58615__auto__;
var map__60326__$1 = (((((!((map__60326 == null))))?(((((map__60326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60326):map__60326);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60326__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60326__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60326__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq60319){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60319));
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
var len__4730__auto___63303 = arguments.length;
var i__4731__auto___63304 = (0);
while(true){
if((i__4731__auto___63304 < len__4730__auto___63303)){
args__4736__auto__.push((arguments[i__4731__auto___63304]));

var G__63306 = (i__4731__auto___63304 + (1));
i__4731__auto___63304 = G__63306;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60334 = conformed_args__58615__auto__;
var map__60334__$1 = (((((!((map__60334 == null))))?(((((map__60334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60334):map__60334);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60334__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60334__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60334__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.base.cljs$lang$applyTo = (function (seq60331){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60331));
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
var len__4730__auto___63315 = arguments.length;
var i__4731__auto___63316 = (0);
while(true){
if((i__4731__auto___63316 < len__4730__auto___63315)){
args__4736__auto__.push((arguments[i__4731__auto___63316]));

var G__63317 = (i__4731__auto___63316 + (1));
i__4731__auto___63316 = G__63317;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60342 = conformed_args__58615__auto__;
var map__60342__$1 = (((((!((map__60342 == null))))?(((((map__60342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60342):map__60342);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60342__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60342__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60342__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.h1.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h1.cljs$lang$applyTo = (function (seq60340){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60340));
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
var len__4730__auto___63326 = arguments.length;
var i__4731__auto___63327 = (0);
while(true){
if((i__4731__auto___63327 < len__4730__auto___63326)){
args__4736__auto__.push((arguments[i__4731__auto___63327]));

var G__63328 = (i__4731__auto___63327 + (1));
i__4731__auto___63327 = G__63328;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60350 = conformed_args__58615__auto__;
var map__60350__$1 = (((((!((map__60350 == null))))?(((((map__60350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60350):map__60350);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60350__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60350__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60350__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feOffset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feOffset.cljs$lang$applyTo = (function (seq60349){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60349));
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
var len__4730__auto___63333 = arguments.length;
var i__4731__auto___63334 = (0);
while(true){
if((i__4731__auto___63334 < len__4730__auto___63333)){
args__4736__auto__.push((arguments[i__4731__auto___63334]));

var G__63335 = (i__4731__auto___63334 + (1));
i__4731__auto___63334 = G__63335;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60362 = conformed_args__58615__auto__;
var map__60362__$1 = (((((!((map__60362 == null))))?(((((map__60362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60362):map__60362);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60362__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60362__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60362__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.embed.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.embed.cljs$lang$applyTo = (function (seq60358){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60358));
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
var len__4730__auto___63337 = arguments.length;
var i__4731__auto___63338 = (0);
while(true){
if((i__4731__auto___63338 < len__4730__auto___63337)){
args__4736__auto__.push((arguments[i__4731__auto___63338]));

var G__63339 = (i__4731__auto___63338 + (1));
i__4731__auto___63338 = G__63339;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60372 = conformed_args__58615__auto__;
var map__60372__$1 = (((((!((map__60372 == null))))?(((((map__60372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60372):map__60372);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60372__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60372__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60372__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.animateMotion.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.animateMotion.cljs$lang$applyTo = (function (seq60366){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60366));
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
var len__4730__auto___63341 = arguments.length;
var i__4731__auto___63342 = (0);
while(true){
if((i__4731__auto___63342 < len__4730__auto___63341)){
args__4736__auto__.push((arguments[i__4731__auto___63342]));

var G__63343 = (i__4731__auto___63342 + (1));
i__4731__auto___63342 = G__63343;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60394 = conformed_args__58615__auto__;
var map__60394__$1 = (((((!((map__60394 == null))))?(((((map__60394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60394):map__60394);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60394__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60394__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60394__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.h3.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h3.cljs$lang$applyTo = (function (seq60385){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60385));
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
var len__4730__auto___63353 = arguments.length;
var i__4731__auto___63354 = (0);
while(true){
if((i__4731__auto___63354 < len__4730__auto___63353)){
args__4736__auto__.push((arguments[i__4731__auto___63354]));

var G__63358 = (i__4731__auto___63354 + (1));
i__4731__auto___63354 = G__63358;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60417 = conformed_args__58615__auto__;
var map__60417__$1 = (((((!((map__60417 == null))))?(((((map__60417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60417):map__60417);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60417__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60417__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60417__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.body.cljs$lang$applyTo = (function (seq60408){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60408));
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
var len__4730__auto___63366 = arguments.length;
var i__4731__auto___63367 = (0);
while(true){
if((i__4731__auto___63367 < len__4730__auto___63366)){
args__4736__auto__.push((arguments[i__4731__auto___63367]));

var G__63368 = (i__4731__auto___63367 + (1));
i__4731__auto___63367 = G__63368;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60428 = conformed_args__58615__auto__;
var map__60428__$1 = (((((!((map__60428 == null))))?(((((map__60428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60428):map__60428);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60428__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60428__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60428__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.hkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.hkern.cljs$lang$applyTo = (function (seq60424){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60424));
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
var len__4730__auto___63375 = arguments.length;
var i__4731__auto___63376 = (0);
while(true){
if((i__4731__auto___63376 < len__4730__auto___63375)){
args__4736__auto__.push((arguments[i__4731__auto___63376]));

var G__63378 = (i__4731__auto___63376 + (1));
i__4731__auto___63376 = G__63378;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60437 = conformed_args__58615__auto__;
var map__60437__$1 = (((((!((map__60437 == null))))?(((((map__60437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60437):map__60437);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60437__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60437__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60437__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.keygen.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.keygen.cljs$lang$applyTo = (function (seq60432){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60432));
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
var len__4730__auto___63381 = arguments.length;
var i__4731__auto___63382 = (0);
while(true){
if((i__4731__auto___63382 < len__4730__auto___63381)){
args__4736__auto__.push((arguments[i__4731__auto___63382]));

var G__63384 = (i__4731__auto___63382 + (1));
i__4731__auto___63382 = G__63384;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60448 = conformed_args__58615__auto__;
var map__60448__$1 = (((((!((map__60448 == null))))?(((((map__60448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60448):map__60448);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60448__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60448__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60448__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.font_face_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.font_face_format.cljs$lang$applyTo = (function (seq60442){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60442));
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
var len__4730__auto___63391 = arguments.length;
var i__4731__auto___63392 = (0);
while(true){
if((i__4731__auto___63392 < len__4730__auto___63391)){
args__4736__auto__.push((arguments[i__4731__auto___63392]));

var G__63393 = (i__4731__auto___63392 + (1));
i__4731__auto___63392 = G__63393;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60457 = conformed_args__58615__auto__;
var map__60457__$1 = (((((!((map__60457 == null))))?(((((map__60457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60457):map__60457);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60457__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60457__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60457__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feFuncA.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feFuncA.cljs$lang$applyTo = (function (seq60453){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60453));
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
var len__4730__auto___63396 = arguments.length;
var i__4731__auto___63397 = (0);
while(true){
if((i__4731__auto___63397 < len__4730__auto___63396)){
args__4736__auto__.push((arguments[i__4731__auto___63397]));

var G__63398 = (i__4731__auto___63397 + (1));
i__4731__auto___63397 = G__63398;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60469 = conformed_args__58615__auto__;
var map__60469__$1 = (((((!((map__60469 == null))))?(((((map__60469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60469):map__60469);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60469__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60469__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60469__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.progress.cljs$lang$applyTo = (function (seq60464){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60464));
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
var len__4730__auto___63403 = arguments.length;
var i__4731__auto___63404 = (0);
while(true){
if((i__4731__auto___63404 < len__4730__auto___63403)){
args__4736__auto__.push((arguments[i__4731__auto___63404]));

var G__63407 = (i__4731__auto___63404 + (1));
i__4731__auto___63404 = G__63407;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60478 = conformed_args__58615__auto__;
var map__60478__$1 = (((((!((map__60478 == null))))?(((((map__60478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60478):map__60478);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60478__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60478__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60478__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.main.cljs$lang$applyTo = (function (seq60474){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60474));
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
var len__4730__auto___63410 = arguments.length;
var i__4731__auto___63411 = (0);
while(true){
if((i__4731__auto___63411 < len__4730__auto___63410)){
args__4736__auto__.push((arguments[i__4731__auto___63411]));

var G__63412 = (i__4731__auto___63411 + (1));
i__4731__auto___63411 = G__63412;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60495 = conformed_args__58615__auto__;
var map__60495__$1 = (((((!((map__60495 == null))))?(((((map__60495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60495):map__60495);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60495__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60495__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60495__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.cite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.cite.cljs$lang$applyTo = (function (seq60493){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60493));
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
var len__4730__auto___63416 = arguments.length;
var i__4731__auto___63417 = (0);
while(true){
if((i__4731__auto___63417 < len__4730__auto___63416)){
args__4736__auto__.push((arguments[i__4731__auto___63417]));

var G__63418 = (i__4731__auto___63417 + (1));
i__4731__auto___63417 = G__63418;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60503 = conformed_args__58615__auto__;
var map__60503__$1 = (((((!((map__60503 == null))))?(((((map__60503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60503):map__60503);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60503__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60503__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60503__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.rect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.rect.cljs$lang$applyTo = (function (seq60499){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60499));
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
var len__4730__auto___63422 = arguments.length;
var i__4731__auto___63423 = (0);
while(true){
if((i__4731__auto___63423 < len__4730__auto___63422)){
args__4736__auto__.push((arguments[i__4731__auto___63423]));

var G__63424 = (i__4731__auto___63423 + (1));
i__4731__auto___63423 = G__63424;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60512 = conformed_args__58615__auto__;
var map__60512__$1 = (((((!((map__60512 == null))))?(((((map__60512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60512):map__60512);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60512__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60512__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60512__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.tref.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.tref.cljs$lang$applyTo = (function (seq60509){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60509));
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
var len__4730__auto___63428 = arguments.length;
var i__4731__auto___63429 = (0);
while(true){
if((i__4731__auto___63429 < len__4730__auto___63428)){
args__4736__auto__.push((arguments[i__4731__auto___63429]));

var G__63430 = (i__4731__auto___63429 + (1));
i__4731__auto___63429 = G__63430;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60519 = conformed_args__58615__auto__;
var map__60519__$1 = (((((!((map__60519 == null))))?(((((map__60519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60519):map__60519);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60519__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60519__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60519__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.meshpatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.meshpatch.cljs$lang$applyTo = (function (seq60518){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60518));
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
var len__4730__auto___63433 = arguments.length;
var i__4731__auto___63434 = (0);
while(true){
if((i__4731__auto___63434 < len__4730__auto___63433)){
args__4736__auto__.push((arguments[i__4731__auto___63434]));

var G__63436 = (i__4731__auto___63434 + (1));
i__4731__auto___63434 = G__63436;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60529 = conformed_args__58615__auto__;
var map__60529__$1 = (((((!((map__60529 == null))))?(((((map__60529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60529):map__60529);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60529__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60529__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60529__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.polyline.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.polyline.cljs$lang$applyTo = (function (seq60526){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60526));
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
var len__4730__auto___63441 = arguments.length;
var i__4731__auto___63442 = (0);
while(true){
if((i__4731__auto___63442 < len__4730__auto___63441)){
args__4736__auto__.push((arguments[i__4731__auto___63442]));

var G__63443 = (i__4731__auto___63442 + (1));
i__4731__auto___63442 = G__63443;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60539 = conformed_args__58615__auto__;
var map__60539__$1 = (((((!((map__60539 == null))))?(((((map__60539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60539):map__60539);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60539__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60539__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60539__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.metadata.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.metadata.cljs$lang$applyTo = (function (seq60536){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60536));
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
var len__4730__auto___63444 = arguments.length;
var i__4731__auto___63446 = (0);
while(true){
if((i__4731__auto___63446 < len__4730__auto___63444)){
args__4736__auto__.push((arguments[i__4731__auto___63446]));

var G__63448 = (i__4731__auto___63446 + (1));
i__4731__auto___63446 = G__63448;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60554 = conformed_args__58615__auto__;
var map__60554__$1 = (((((!((map__60554 == null))))?(((((map__60554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60554):map__60554);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60554__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60554__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60554__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.map.cljs$lang$applyTo = (function (seq60545){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60545));
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
var len__4730__auto___63450 = arguments.length;
var i__4731__auto___63451 = (0);
while(true){
if((i__4731__auto___63451 < len__4730__auto___63450)){
args__4736__auto__.push((arguments[i__4731__auto___63451]));

var G__63452 = (i__4731__auto___63451 + (1));
i__4731__auto___63451 = G__63452;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60566 = conformed_args__58615__auto__;
var map__60566__$1 = (((((!((map__60566 == null))))?(((((map__60566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60566):map__60566);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60566__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60566__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60566__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.object.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.object.cljs$lang$applyTo = (function (seq60561){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60561));
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
var len__4730__auto___63456 = arguments.length;
var i__4731__auto___63457 = (0);
while(true){
if((i__4731__auto___63457 < len__4730__auto___63456)){
args__4736__auto__.push((arguments[i__4731__auto___63457]));

var G__63459 = (i__4731__auto___63457 + (1));
i__4731__auto___63457 = G__63459;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60571 = conformed_args__58615__auto__;
var map__60571__$1 = (((((!((map__60571 == null))))?(((((map__60571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60571):map__60571);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60571__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60571__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60571__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.i.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.i.cljs$lang$applyTo = (function (seq60570){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60570));
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
var len__4730__auto___63461 = arguments.length;
var i__4731__auto___63462 = (0);
while(true){
if((i__4731__auto___63462 < len__4730__auto___63461)){
args__4736__auto__.push((arguments[i__4731__auto___63462]));

var G__63464 = (i__4731__auto___63462 + (1));
i__4731__auto___63462 = G__63464;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60580 = conformed_args__58615__auto__;
var map__60580__$1 = (((((!((map__60580 == null))))?(((((map__60580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60580):map__60580);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60580__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60580__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60580__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.font_face_name.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.font_face_name.cljs$lang$applyTo = (function (seq60579){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60579));
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
var len__4730__auto___63466 = arguments.length;
var i__4731__auto___63467 = (0);
while(true){
if((i__4731__auto___63467 < len__4730__auto___63466)){
args__4736__auto__.push((arguments[i__4731__auto___63467]));

var G__63468 = (i__4731__auto___63467 + (1));
i__4731__auto___63467 = G__63468;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60592 = conformed_args__58615__auto__;
var map__60592__$1 = (((((!((map__60592 == null))))?(((((map__60592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60592):map__60592);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60592__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60592__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60592__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.p.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.p.cljs$lang$applyTo = (function (seq60588){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60588));
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
var len__4730__auto___63472 = arguments.length;
var i__4731__auto___63473 = (0);
while(true){
if((i__4731__auto___63473 < len__4730__auto___63472)){
args__4736__auto__.push((arguments[i__4731__auto___63473]));

var G__63474 = (i__4731__auto___63473 + (1));
i__4731__auto___63473 = G__63474;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60599 = conformed_args__58615__auto__;
var map__60599__$1 = (((((!((map__60599 == null))))?(((((map__60599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60599):map__60599);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60599__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60599__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60599__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feFuncR.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feFuncR.cljs$lang$applyTo = (function (seq60595){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60595));
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
var len__4730__auto___63479 = arguments.length;
var i__4731__auto___63480 = (0);
while(true){
if((i__4731__auto___63480 < len__4730__auto___63479)){
args__4736__auto__.push((arguments[i__4731__auto___63480]));

var G__63481 = (i__4731__auto___63480 + (1));
i__4731__auto___63480 = G__63481;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60603 = conformed_args__58615__auto__;
var map__60603__$1 = (((((!((map__60603 == null))))?(((((map__60603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60603):map__60603);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60603__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60603__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60603__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.hatchpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.hatchpath.cljs$lang$applyTo = (function (seq60602){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60602));
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
var len__4730__auto___63487 = arguments.length;
var i__4731__auto___63488 = (0);
while(true){
if((i__4731__auto___63488 < len__4730__auto___63487)){
args__4736__auto__.push((arguments[i__4731__auto___63488]));

var G__63490 = (i__4731__auto___63488 + (1));
i__4731__auto___63488 = G__63490;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60606 = conformed_args__58615__auto__;
var map__60606__$1 = (((((!((map__60606 == null))))?(((((map__60606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60606):map__60606);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60606__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60606__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60606__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.altGlyphItem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.altGlyphItem.cljs$lang$applyTo = (function (seq60605){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60605));
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
var len__4730__auto___63503 = arguments.length;
var i__4731__auto___63505 = (0);
while(true){
if((i__4731__auto___63505 < len__4730__auto___63503)){
args__4736__auto__.push((arguments[i__4731__auto___63505]));

var G__63506 = (i__4731__auto___63505 + (1));
i__4731__auto___63505 = G__63506;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60609 = conformed_args__58615__auto__;
var map__60609__$1 = (((((!((map__60609 == null))))?(((((map__60609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60609):map__60609);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60609__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60609__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60609__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.nav.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.nav.cljs$lang$applyTo = (function (seq60608){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60608));
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
var len__4730__auto___63516 = arguments.length;
var i__4731__auto___63517 = (0);
while(true){
if((i__4731__auto___63517 < len__4730__auto___63516)){
args__4736__auto__.push((arguments[i__4731__auto___63517]));

var G__63518 = (i__4731__auto___63517 + (1));
i__4731__auto___63517 = G__63518;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60618 = conformed_args__58615__auto__;
var map__60618__$1 = (((((!((map__60618 == null))))?(((((map__60618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60618):map__60618);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60618__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60618__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60618__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.ruby.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.ruby.cljs$lang$applyTo = (function (seq60616){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60616));
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
var len__4730__auto___63526 = arguments.length;
var i__4731__auto___63527 = (0);
while(true){
if((i__4731__auto___63527 < len__4730__auto___63526)){
args__4736__auto__.push((arguments[i__4731__auto___63527]));

var G__63528 = (i__4731__auto___63527 + (1));
i__4731__auto___63527 = G__63528;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60627 = conformed_args__58615__auto__;
var map__60627__$1 = (((((!((map__60627 == null))))?(((((map__60627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60627):map__60627);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60627__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60627__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60627__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.switch$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.switch$.cljs$lang$applyTo = (function (seq60624){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60624));
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
var len__4730__auto___63529 = arguments.length;
var i__4731__auto___63530 = (0);
while(true){
if((i__4731__auto___63530 < len__4730__auto___63529)){
args__4736__auto__.push((arguments[i__4731__auto___63530]));

var G__63532 = (i__4731__auto___63530 + (1));
i__4731__auto___63530 = G__63532;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60634 = conformed_args__58615__auto__;
var map__60634__$1 = (((((!((map__60634 == null))))?(((((map__60634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60634):map__60634);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60634__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60634__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60634__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.a.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.a.cljs$lang$applyTo = (function (seq60631){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60631));
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
var len__4730__auto___63539 = arguments.length;
var i__4731__auto___63540 = (0);
while(true){
if((i__4731__auto___63540 < len__4730__auto___63539)){
args__4736__auto__.push((arguments[i__4731__auto___63540]));

var G__63541 = (i__4731__auto___63540 + (1));
i__4731__auto___63540 = G__63541;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60642 = conformed_args__58615__auto__;
var map__60642__$1 = (((((!((map__60642 == null))))?(((((map__60642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60642):map__60642);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60642__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60642__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60642__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.view.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.view.cljs$lang$applyTo = (function (seq60638){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60638));
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
var len__4730__auto___63547 = arguments.length;
var i__4731__auto___63548 = (0);
while(true){
if((i__4731__auto___63548 < len__4730__auto___63547)){
args__4736__auto__.push((arguments[i__4731__auto___63548]));

var G__63550 = (i__4731__auto___63548 + (1));
i__4731__auto___63548 = G__63550;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60660 = conformed_args__58615__auto__;
var map__60660__$1 = (((((!((map__60660 == null))))?(((((map__60660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60660):map__60660);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60660__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60660__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60660__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.menu.cljs$lang$applyTo = (function (seq60656){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60656));
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
var len__4730__auto___63556 = arguments.length;
var i__4731__auto___63557 = (0);
while(true){
if((i__4731__auto___63557 < len__4730__auto___63556)){
args__4736__auto__.push((arguments[i__4731__auto___63557]));

var G__63558 = (i__4731__auto___63557 + (1));
i__4731__auto___63557 = G__63558;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60667 = conformed_args__58615__auto__;
var map__60667__$1 = (((((!((map__60667 == null))))?(((((map__60667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60667):map__60667);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60667__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60667__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60667__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.blockquote.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.blockquote.cljs$lang$applyTo = (function (seq60662){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60662));
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
var len__4730__auto___63561 = arguments.length;
var i__4731__auto___63562 = (0);
while(true){
if((i__4731__auto___63562 < len__4730__auto___63561)){
args__4736__auto__.push((arguments[i__4731__auto___63562]));

var G__63563 = (i__4731__auto___63562 + (1));
i__4731__auto___63562 = G__63563;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60680 = conformed_args__58615__auto__;
var map__60680__$1 = (((((!((map__60680 == null))))?(((((map__60680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60680):map__60680);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60680__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60680__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60680__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.img.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.img.cljs$lang$applyTo = (function (seq60679){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60679));
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
var len__4730__auto___63566 = arguments.length;
var i__4731__auto___63567 = (0);
while(true){
if((i__4731__auto___63567 < len__4730__auto___63566)){
args__4736__auto__.push((arguments[i__4731__auto___63567]));

var G__63569 = (i__4731__auto___63567 + (1));
i__4731__auto___63567 = G__63569;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60693 = conformed_args__58615__auto__;
var map__60693__$1 = (((((!((map__60693 == null))))?(((((map__60693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60693):map__60693);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60693__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60693__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60693__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feFuncG.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feFuncG.cljs$lang$applyTo = (function (seq60688){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60688));
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
var len__4730__auto___63576 = arguments.length;
var i__4731__auto___63577 = (0);
while(true){
if((i__4731__auto___63577 < len__4730__auto___63576)){
args__4736__auto__.push((arguments[i__4731__auto___63577]));

var G__63578 = (i__4731__auto___63577 + (1));
i__4731__auto___63577 = G__63578;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60716 = conformed_args__58615__auto__;
var map__60716__$1 = (((((!((map__60716 == null))))?(((((map__60716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60716):map__60716);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60716__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60716__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60716__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.text.cljs$lang$applyTo = (function (seq60711){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60711));
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
var len__4730__auto___63581 = arguments.length;
var i__4731__auto___63582 = (0);
while(true){
if((i__4731__auto___63582 < len__4730__auto___63581)){
args__4736__auto__.push((arguments[i__4731__auto___63582]));

var G__63583 = (i__4731__auto___63582 + (1));
i__4731__auto___63582 = G__63583;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60752 = conformed_args__58615__auto__;
var map__60752__$1 = (((((!((map__60752 == null))))?(((((map__60752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60752):map__60752);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60752__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60752__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60752__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.span.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.span.cljs$lang$applyTo = (function (seq60738){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60738));
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
var len__4730__auto___63586 = arguments.length;
var i__4731__auto___63587 = (0);
while(true){
if((i__4731__auto___63587 < len__4730__auto___63586)){
args__4736__auto__.push((arguments[i__4731__auto___63587]));

var G__63588 = (i__4731__auto___63587 + (1));
i__4731__auto___63587 = G__63588;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60790 = conformed_args__58615__auto__;
var map__60790__$1 = (((((!((map__60790 == null))))?(((((map__60790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60790):map__60790);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60790__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60790__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60790__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.track.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.track.cljs$lang$applyTo = (function (seq60774){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60774));
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
var len__4730__auto___63590 = arguments.length;
var i__4731__auto___63591 = (0);
while(true){
if((i__4731__auto___63591 < len__4730__auto___63590)){
args__4736__auto__.push((arguments[i__4731__auto___63591]));

var G__63592 = (i__4731__auto___63591 + (1));
i__4731__auto___63591 = G__63592;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60804 = conformed_args__58615__auto__;
var map__60804__$1 = (((((!((map__60804 == null))))?(((((map__60804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60804):map__60804);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60804__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60804__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60804__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.data.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.data.cljs$lang$applyTo = (function (seq60801){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60801));
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
var len__4730__auto___63605 = arguments.length;
var i__4731__auto___63606 = (0);
while(true){
if((i__4731__auto___63606 < len__4730__auto___63605)){
args__4736__auto__.push((arguments[i__4731__auto___63606]));

var G__63607 = (i__4731__auto___63606 + (1));
i__4731__auto___63606 = G__63607;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60844 = conformed_args__58615__auto__;
var map__60844__$1 = (((((!((map__60844 == null))))?(((((map__60844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60844):map__60844);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60844__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60844__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60844__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.u.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.u.cljs$lang$applyTo = (function (seq60838){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60838));
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
var len__4730__auto___63611 = arguments.length;
var i__4731__auto___63612 = (0);
while(true){
if((i__4731__auto___63612 < len__4730__auto___63611)){
args__4736__auto__.push((arguments[i__4731__auto___63612]));

var G__63613 = (i__4731__auto___63612 + (1));
i__4731__auto___63612 = G__63613;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60869 = conformed_args__58615__auto__;
var map__60869__$1 = (((((!((map__60869 == null))))?(((((map__60869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60869):map__60869);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60869__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60869__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60869__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.dl.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.dl.cljs$lang$applyTo = (function (seq60855){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60855));
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
var len__4730__auto___63622 = arguments.length;
var i__4731__auto___63623 = (0);
while(true){
if((i__4731__auto___63623 < len__4730__auto___63622)){
args__4736__auto__.push((arguments[i__4731__auto___63623]));

var G__63624 = (i__4731__auto___63623 + (1));
i__4731__auto___63623 = G__63624;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60905 = conformed_args__58615__auto__;
var map__60905__$1 = (((((!((map__60905 == null))))?(((((map__60905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60905):map__60905);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60905__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60905__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60905__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.select.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.select.cljs$lang$applyTo = (function (seq60890){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60890));
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
var len__4730__auto___63634 = arguments.length;
var i__4731__auto___63636 = (0);
while(true){
if((i__4731__auto___63636 < len__4730__auto___63634)){
args__4736__auto__.push((arguments[i__4731__auto___63636]));

var G__63637 = (i__4731__auto___63636 + (1));
i__4731__auto___63636 = G__63637;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60941 = conformed_args__58615__auto__;
var map__60941__$1 = (((((!((map__60941 == null))))?(((((map__60941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60941):map__60941);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60941__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60941__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60941__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.polygon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.polygon.cljs$lang$applyTo = (function (seq60926){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60926));
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
var len__4730__auto___63648 = arguments.length;
var i__4731__auto___63649 = (0);
while(true){
if((i__4731__auto___63649 < len__4730__auto___63648)){
args__4736__auto__.push((arguments[i__4731__auto___63649]));

var G__63650 = (i__4731__auto___63649 + (1));
i__4731__auto___63649 = G__63650;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60977 = conformed_args__58615__auto__;
var map__60977__$1 = (((((!((map__60977 == null))))?(((((map__60977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60977):map__60977);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60977__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60977__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60977__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.pattern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.pattern.cljs$lang$applyTo = (function (seq60961){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60961));
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
var len__4730__auto___63658 = arguments.length;
var i__4731__auto___63659 = (0);
while(true){
if((i__4731__auto___63659 < len__4730__auto___63658)){
args__4736__auto__.push((arguments[i__4731__auto___63659]));

var G__63660 = (i__4731__auto___63659 + (1));
i__4731__auto___63659 = G__63660;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61016 = conformed_args__58615__auto__;
var map__61016__$1 = (((((!((map__61016 == null))))?(((((map__61016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61016):map__61016);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61016__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61016__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61016__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.html.cljs$lang$applyTo = (function (seq60998){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60998));
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
var len__4730__auto___63671 = arguments.length;
var i__4731__auto___63672 = (0);
while(true){
if((i__4731__auto___63672 < len__4730__auto___63671)){
args__4736__auto__.push((arguments[i__4731__auto___63672]));

var G__63674 = (i__4731__auto___63672 + (1));
i__4731__auto___63672 = G__63674;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61044 = conformed_args__58615__auto__;
var map__61044__$1 = (((((!((map__61044 == null))))?(((((map__61044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61044):map__61044);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61044__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61044__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61044__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.foreignObject.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.foreignObject.cljs$lang$applyTo = (function (seq61036){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61036));
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
var len__4730__auto___63684 = arguments.length;
var i__4731__auto___63685 = (0);
while(true){
if((i__4731__auto___63685 < len__4730__auto___63684)){
args__4736__auto__.push((arguments[i__4731__auto___63685]));

var G__63686 = (i__4731__auto___63685 + (1));
i__4731__auto___63685 = G__63686;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61049 = conformed_args__58615__auto__;
var map__61049__$1 = (((((!((map__61049 == null))))?(((((map__61049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61049):map__61049);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61049__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61049__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61049__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.thead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.thead.cljs$lang$applyTo = (function (seq61046){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61046));
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
var len__4730__auto___63688 = arguments.length;
var i__4731__auto___63689 = (0);
while(true){
if((i__4731__auto___63689 < len__4730__auto___63688)){
args__4736__auto__.push((arguments[i__4731__auto___63689]));

var G__63690 = (i__4731__auto___63689 + (1));
i__4731__auto___63689 = G__63690;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61059 = conformed_args__58615__auto__;
var map__61059__$1 = (((((!((map__61059 == null))))?(((((map__61059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61059):map__61059);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61059__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61059__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61059__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.path.cljs$lang$applyTo = (function (seq61051){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61051));
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
var len__4730__auto___63696 = arguments.length;
var i__4731__auto___63697 = (0);
while(true){
if((i__4731__auto___63697 < len__4730__auto___63696)){
args__4736__auto__.push((arguments[i__4731__auto___63697]));

var G__63698 = (i__4731__auto___63697 + (1));
i__4731__auto___63697 = G__63698;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61083 = conformed_args__58615__auto__;
var map__61083__$1 = (((((!((map__61083 == null))))?(((((map__61083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61083):map__61083);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61083__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61083__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61083__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.del.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.del.cljs$lang$applyTo = (function (seq61072){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61072));
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
var len__4730__auto___63703 = arguments.length;
var i__4731__auto___63704 = (0);
while(true){
if((i__4731__auto___63704 < len__4730__auto___63703)){
args__4736__auto__.push((arguments[i__4731__auto___63704]));

var G__63705 = (i__4731__auto___63704 + (1));
i__4731__auto___63704 = G__63705;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61099 = conformed_args__58615__auto__;
var map__61099__$1 = (((((!((map__61099 == null))))?(((((map__61099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61099):map__61099);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61099__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61099__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61099__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.altGlyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.altGlyph.cljs$lang$applyTo = (function (seq61094){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61094));
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
var len__4730__auto___63717 = arguments.length;
var i__4731__auto___63718 = (0);
while(true){
if((i__4731__auto___63718 < len__4730__auto___63717)){
args__4736__auto__.push((arguments[i__4731__auto___63718]));

var G__63719 = (i__4731__auto___63718 + (1));
i__4731__auto___63718 = G__63719;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61119 = conformed_args__58615__auto__;
var map__61119__$1 = (((((!((map__61119 == null))))?(((((map__61119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61119):map__61119);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61119__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61119__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61119__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.fieldset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.fieldset.cljs$lang$applyTo = (function (seq61114){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61114));
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
var len__4730__auto___63724 = arguments.length;
var i__4731__auto___63725 = (0);
while(true){
if((i__4731__auto___63725 < len__4730__auto___63724)){
args__4736__auto__.push((arguments[i__4731__auto___63725]));

var G__63726 = (i__4731__auto___63725 + (1));
i__4731__auto___63725 = G__63726;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61157 = conformed_args__58615__auto__;
var map__61157__$1 = (((((!((map__61157 == null))))?(((((map__61157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61157):map__61157);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61157__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61157__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61157__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.aside.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.aside.cljs$lang$applyTo = (function (seq61154){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61154));
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
var len__4730__auto___63731 = arguments.length;
var i__4731__auto___63732 = (0);
while(true){
if((i__4731__auto___63732 < len__4730__auto___63731)){
args__4736__auto__.push((arguments[i__4731__auto___63732]));

var G__63733 = (i__4731__auto___63732 + (1));
i__4731__auto___63732 = G__63733;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61192 = conformed_args__58615__auto__;
var map__61192__$1 = (((((!((map__61192 == null))))?(((((map__61192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61192):map__61192);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61192__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61192__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61192__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feBlend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feBlend.cljs$lang$applyTo = (function (seq61175){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61175));
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
var len__4730__auto___63743 = arguments.length;
var i__4731__auto___63744 = (0);
while(true){
if((i__4731__auto___63744 < len__4730__auto___63743)){
args__4736__auto__.push((arguments[i__4731__auto___63744]));

var G__63745 = (i__4731__auto___63744 + (1));
i__4731__auto___63744 = G__63745;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61233 = conformed_args__58615__auto__;
var map__61233__$1 = (((((!((map__61233 == null))))?(((((map__61233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61233):map__61233);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61233__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61233__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61233__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.figure.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.figure.cljs$lang$applyTo = (function (seq61217){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61217));
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
var len__4730__auto___63746 = arguments.length;
var i__4731__auto___63747 = (0);
while(true){
if((i__4731__auto___63747 < len__4730__auto___63746)){
args__4736__auto__.push((arguments[i__4731__auto___63747]));

var G__63748 = (i__4731__auto___63747 + (1));
i__4731__auto___63747 = G__63748;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61269 = conformed_args__58615__auto__;
var map__61269__$1 = (((((!((map__61269 == null))))?(((((map__61269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61269):map__61269);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61269__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61269__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61269__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.textPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.textPath.cljs$lang$applyTo = (function (seq61254){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61254));
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
var len__4730__auto___63755 = arguments.length;
var i__4731__auto___63758 = (0);
while(true){
if((i__4731__auto___63758 < len__4730__auto___63755)){
args__4736__auto__.push((arguments[i__4731__auto___63758]));

var G__63762 = (i__4731__auto___63758 + (1));
i__4731__auto___63758 = G__63762;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61305 = conformed_args__58615__auto__;
var map__61305__$1 = (((((!((map__61305 == null))))?(((((map__61305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61305):map__61305);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61305__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61305__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61305__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.figcaption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.figcaption.cljs$lang$applyTo = (function (seq61290){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61290));
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
var len__4730__auto___63772 = arguments.length;
var i__4731__auto___63773 = (0);
while(true){
if((i__4731__auto___63773 < len__4730__auto___63772)){
args__4736__auto__.push((arguments[i__4731__auto___63773]));

var G__63774 = (i__4731__auto___63773 + (1));
i__4731__auto___63773 = G__63774;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61342 = conformed_args__58615__auto__;
var map__61342__$1 = (((((!((map__61342 == null))))?(((((map__61342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61342):map__61342);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61342__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61342__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61342__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.mask.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.mask.cljs$lang$applyTo = (function (seq61327){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61327));
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
var len__4730__auto___63775 = arguments.length;
var i__4731__auto___63776 = (0);
while(true){
if((i__4731__auto___63776 < len__4730__auto___63775)){
args__4736__auto__.push((arguments[i__4731__auto___63776]));

var G__63777 = (i__4731__auto___63776 + (1));
i__4731__auto___63776 = G__63777;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61359 = conformed_args__58615__auto__;
var map__61359__$1 = (((((!((map__61359 == null))))?(((((map__61359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61359):map__61359);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61359__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61359__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61359__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.q.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.q.cljs$lang$applyTo = (function (seq61358){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61358));
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
var len__4730__auto___63783 = arguments.length;
var i__4731__auto___63784 = (0);
while(true){
if((i__4731__auto___63784 < len__4730__auto___63783)){
args__4736__auto__.push((arguments[i__4731__auto___63784]));

var G__63785 = (i__4731__auto___63784 + (1));
i__4731__auto___63784 = G__63785;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61364 = conformed_args__58615__auto__;
var map__61364__$1 = (((((!((map__61364 == null))))?(((((map__61364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61364):map__61364);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61364__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61364__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61364__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.bdi.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.bdi.cljs$lang$applyTo = (function (seq61361){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61361));
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
var len__4730__auto___63791 = arguments.length;
var i__4731__auto___63792 = (0);
while(true){
if((i__4731__auto___63792 < len__4730__auto___63791)){
args__4736__auto__.push((arguments[i__4731__auto___63792]));

var G__63793 = (i__4731__auto___63792 + (1));
i__4731__auto___63792 = G__63793;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61378 = conformed_args__58615__auto__;
var map__61378__$1 = (((((!((map__61378 == null))))?(((((map__61378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61378):map__61378);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61378__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61378__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61378__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feDistantLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feDistantLight.cljs$lang$applyTo = (function (seq61373){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61373));
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
var len__4730__auto___63797 = arguments.length;
var i__4731__auto___63798 = (0);
while(true){
if((i__4731__auto___63798 < len__4730__auto___63797)){
args__4736__auto__.push((arguments[i__4731__auto___63798]));

var G__63800 = (i__4731__auto___63798 + (1));
i__4731__auto___63798 = G__63800;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61398 = conformed_args__58615__auto__;
var map__61398__$1 = (((((!((map__61398 == null))))?(((((map__61398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61398):map__61398);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61398__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61398__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61398__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.video.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.video.cljs$lang$applyTo = (function (seq61395){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61395));
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
var len__4730__auto___63802 = arguments.length;
var i__4731__auto___63803 = (0);
while(true){
if((i__4731__auto___63803 < len__4730__auto___63802)){
args__4736__auto__.push((arguments[i__4731__auto___63803]));

var G__63804 = (i__4731__auto___63803 + (1));
i__4731__auto___63803 = G__63804;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61407 = conformed_args__58615__auto__;
var map__61407__$1 = (((((!((map__61407 == null))))?(((((map__61407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61407):map__61407);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61407__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61407__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61407__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.address.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.address.cljs$lang$applyTo = (function (seq61402){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61402));
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
var len__4730__auto___63809 = arguments.length;
var i__4731__auto___63810 = (0);
while(true){
if((i__4731__auto___63810 < len__4730__auto___63809)){
args__4736__auto__.push((arguments[i__4731__auto___63810]));

var G__63811 = (i__4731__auto___63810 + (1));
i__4731__auto___63810 = G__63811;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61418 = conformed_args__58615__auto__;
var map__61418__$1 = (((((!((map__61418 == null))))?(((((map__61418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61418):map__61418);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61418__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61418__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61418__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.caption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.caption.cljs$lang$applyTo = (function (seq61414){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61414));
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
var len__4730__auto___63818 = arguments.length;
var i__4731__auto___63819 = (0);
while(true){
if((i__4731__auto___63819 < len__4730__auto___63818)){
args__4736__auto__.push((arguments[i__4731__auto___63819]));

var G__63820 = (i__4731__auto___63819 + (1));
i__4731__auto___63819 = G__63820;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61430 = conformed_args__58615__auto__;
var map__61430__$1 = (((((!((map__61430 == null))))?(((((map__61430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61430):map__61430);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61430__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61430__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61430__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.dd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.dd.cljs$lang$applyTo = (function (seq61424){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61424));
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
var len__4730__auto___63825 = arguments.length;
var i__4731__auto___63826 = (0);
while(true){
if((i__4731__auto___63826 < len__4730__auto___63825)){
args__4736__auto__.push((arguments[i__4731__auto___63826]));

var G__63827 = (i__4731__auto___63826 + (1));
i__4731__auto___63826 = G__63827;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61443 = conformed_args__58615__auto__;
var map__61443__$1 = (((((!((map__61443 == null))))?(((((map__61443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61443):map__61443);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61443__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61443__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61443__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.rp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.rp.cljs$lang$applyTo = (function (seq61441){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61441));
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
var len__4730__auto___63828 = arguments.length;
var i__4731__auto___63831 = (0);
while(true){
if((i__4731__auto___63831 < len__4730__auto___63828)){
args__4736__auto__.push((arguments[i__4731__auto___63831]));

var G__63833 = (i__4731__auto___63831 + (1));
i__4731__auto___63831 = G__63833;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61451 = conformed_args__58615__auto__;
var map__61451__$1 = (((((!((map__61451 == null))))?(((((map__61451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61451):map__61451);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.hr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.hr.cljs$lang$applyTo = (function (seq61448){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61448));
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
var len__4730__auto___63843 = arguments.length;
var i__4731__auto___63844 = (0);
while(true){
if((i__4731__auto___63844 < len__4730__auto___63843)){
args__4736__auto__.push((arguments[i__4731__auto___63844]));

var G__63845 = (i__4731__auto___63844 + (1));
i__4731__auto___63844 = G__63845;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61462 = conformed_args__58615__auto__;
var map__61462__$1 = (((((!((map__61462 == null))))?(((((map__61462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61462):map__61462);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61462__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61462__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61462__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.meta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.meta.cljs$lang$applyTo = (function (seq61459){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61459));
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
var len__4730__auto___63857 = arguments.length;
var i__4731__auto___63858 = (0);
while(true){
if((i__4731__auto___63858 < len__4730__auto___63857)){
args__4736__auto__.push((arguments[i__4731__auto___63858]));

var G__63859 = (i__4731__auto___63858 + (1));
i__4731__auto___63858 = G__63859;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61475 = conformed_args__58615__auto__;
var map__61475__$1 = (((((!((map__61475 == null))))?(((((map__61475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61475):map__61475);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61475__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61475__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61475__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.tbody.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.tbody.cljs$lang$applyTo = (function (seq61471){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61471));
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
var len__4730__auto___63864 = arguments.length;
var i__4731__auto___63865 = (0);
while(true){
if((i__4731__auto___63865 < len__4730__auto___63864)){
args__4736__auto__.push((arguments[i__4731__auto___63865]));

var G__63866 = (i__4731__auto___63865 + (1));
i__4731__auto___63865 = G__63866;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61498 = conformed_args__58615__auto__;
var map__61498__$1 = (((((!((map__61498 == null))))?(((((map__61498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61498):map__61498);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61498__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61498__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61498__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.desc.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.desc.cljs$lang$applyTo = (function (seq61489){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61489));
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
var len__4730__auto___63874 = arguments.length;
var i__4731__auto___63875 = (0);
while(true){
if((i__4731__auto___63875 < len__4730__auto___63874)){
args__4736__auto__.push((arguments[i__4731__auto___63875]));

var G__63876 = (i__4731__auto___63875 + (1));
i__4731__auto___63875 = G__63876;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61511 = conformed_args__58615__auto__;
var map__61511__$1 = (((((!((map__61511 == null))))?(((((map__61511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61511):map__61511);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61511__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61511__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61511__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.table.cljs$lang$applyTo = (function (seq61503){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61503));
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
var len__4730__auto___63889 = arguments.length;
var i__4731__auto___63890 = (0);
while(true){
if((i__4731__auto___63890 < len__4730__auto___63889)){
args__4736__auto__.push((arguments[i__4731__auto___63890]));

var G__63891 = (i__4731__auto___63890 + (1));
i__4731__auto___63890 = G__63891;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61524 = conformed_args__58615__auto__;
var map__61524__$1 = (((((!((map__61524 == null))))?(((((map__61524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61524):map__61524);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61524__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61524__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61524__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.pre.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.pre.cljs$lang$applyTo = (function (seq61521){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61521));
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
var len__4730__auto___63907 = arguments.length;
var i__4731__auto___63908 = (0);
while(true){
if((i__4731__auto___63908 < len__4730__auto___63907)){
args__4736__auto__.push((arguments[i__4731__auto___63908]));

var G__63909 = (i__4731__auto___63908 + (1));
i__4731__auto___63908 = G__63909;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61533 = conformed_args__58615__auto__;
var map__61533__$1 = (((((!((map__61533 == null))))?(((((map__61533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61533):map__61533);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61533__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61533__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61533__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.ul.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.ul.cljs$lang$applyTo = (function (seq61527){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61527));
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
var len__4730__auto___63911 = arguments.length;
var i__4731__auto___63912 = (0);
while(true){
if((i__4731__auto___63912 < len__4730__auto___63911)){
args__4736__auto__.push((arguments[i__4731__auto___63912]));

var G__63913 = (i__4731__auto___63912 + (1));
i__4731__auto___63912 = G__63913;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61549 = conformed_args__58615__auto__;
var map__61549__$1 = (((((!((map__61549 == null))))?(((((map__61549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61549):map__61549);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61549__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61549__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61549__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq61544){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61544));
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
var len__4730__auto___63915 = arguments.length;
var i__4731__auto___63916 = (0);
while(true){
if((i__4731__auto___63916 < len__4730__auto___63915)){
args__4736__auto__.push((arguments[i__4731__auto___63916]));

var G__63919 = (i__4731__auto___63916 + (1));
i__4731__auto___63916 = G__63919;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61565 = conformed_args__58615__auto__;
var map__61565__$1 = (((((!((map__61565 == null))))?(((((map__61565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61565):map__61565);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61565__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61565__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61565__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.sup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.sup.cljs$lang$applyTo = (function (seq61559){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61559));
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
var len__4730__auto___63931 = arguments.length;
var i__4731__auto___63932 = (0);
while(true){
if((i__4731__auto___63932 < len__4730__auto___63931)){
args__4736__auto__.push((arguments[i__4731__auto___63932]));

var G__63933 = (i__4731__auto___63932 + (1));
i__4731__auto___63932 = G__63933;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61572 = conformed_args__58615__auto__;
var map__61572__$1 = (((((!((map__61572 == null))))?(((((map__61572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61572):map__61572);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61572__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61572__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61572__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.dfn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.dfn.cljs$lang$applyTo = (function (seq61571){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61571));
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
var len__4730__auto___63939 = arguments.length;
var i__4731__auto___63940 = (0);
while(true){
if((i__4731__auto___63940 < len__4730__auto___63939)){
args__4736__auto__.push((arguments[i__4731__auto___63940]));

var G__63941 = (i__4731__auto___63940 + (1));
i__4731__auto___63940 = G__63941;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61581 = conformed_args__58615__auto__;
var map__61581__$1 = (((((!((map__61581 == null))))?(((((map__61581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61581):map__61581);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61581__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61581__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61581__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.sub.cljs$lang$applyTo = (function (seq61578){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61578));
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
var len__4730__auto___63943 = arguments.length;
var i__4731__auto___63944 = (0);
while(true){
if((i__4731__auto___63944 < len__4730__auto___63943)){
args__4736__auto__.push((arguments[i__4731__auto___63944]));

var G__63945 = (i__4731__auto___63944 + (1));
i__4731__auto___63944 = G__63945;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61593 = conformed_args__58615__auto__;
var map__61593__$1 = (((((!((map__61593 == null))))?(((((map__61593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61593):map__61593);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61593__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61593__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61593__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.mark.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.mark.cljs$lang$applyTo = (function (seq61587){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61587));
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
var len__4730__auto___63947 = arguments.length;
var i__4731__auto___63948 = (0);
while(true){
if((i__4731__auto___63948 < len__4730__auto___63947)){
args__4736__auto__.push((arguments[i__4731__auto___63948]));

var G__63951 = (i__4731__auto___63948 + (1));
i__4731__auto___63948 = G__63951;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61613 = conformed_args__58615__auto__;
var map__61613__$1 = (((((!((map__61613 == null))))?(((((map__61613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61613):map__61613);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61613__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61613__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61613__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq61606){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61606));
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
var len__4730__auto___63957 = arguments.length;
var i__4731__auto___63960 = (0);
while(true){
if((i__4731__auto___63960 < len__4730__auto___63957)){
args__4736__auto__.push((arguments[i__4731__auto___63960]));

var G__63961 = (i__4731__auto___63960 + (1));
i__4731__auto___63960 = G__63961;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61628 = conformed_args__58615__auto__;
var map__61628__$1 = (((((!((map__61628 == null))))?(((((map__61628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61628):map__61628);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61628__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61628__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61628__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.unknown.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.unknown.cljs$lang$applyTo = (function (seq61620){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61620));
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
var len__4730__auto___63962 = arguments.length;
var i__4731__auto___63963 = (0);
while(true){
if((i__4731__auto___63963 < len__4730__auto___63962)){
args__4736__auto__.push((arguments[i__4731__auto___63963]));

var G__63964 = (i__4731__auto___63963 + (1));
i__4731__auto___63963 = G__63964;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61650 = conformed_args__58615__auto__;
var map__61650__$1 = (((((!((map__61650 == null))))?(((((map__61650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61650):map__61650);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61650__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61650__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61650__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.script.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.script.cljs$lang$applyTo = (function (seq61636){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61636));
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
var len__4730__auto___63965 = arguments.length;
var i__4731__auto___63966 = (0);
while(true){
if((i__4731__auto___63966 < len__4730__auto___63965)){
args__4736__auto__.push((arguments[i__4731__auto___63966]));

var G__63967 = (i__4731__auto___63966 + (1));
i__4731__auto___63966 = G__63967;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61669 = conformed_args__58615__auto__;
var map__61669__$1 = (((((!((map__61669 == null))))?(((((map__61669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61669):map__61669);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61669__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61669__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61669__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feTurbulence.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feTurbulence.cljs$lang$applyTo = (function (seq61666){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61666));
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
var len__4730__auto___63968 = arguments.length;
var i__4731__auto___63969 = (0);
while(true){
if((i__4731__auto___63969 < len__4730__auto___63968)){
args__4736__auto__.push((arguments[i__4731__auto___63969]));

var G__63970 = (i__4731__auto___63969 + (1));
i__4731__auto___63969 = G__63970;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61678 = conformed_args__58615__auto__;
var map__61678__$1 = (((((!((map__61678 == null))))?(((((map__61678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61678):map__61678);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61678__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61678__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61678__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.big.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.big.cljs$lang$applyTo = (function (seq61674){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61674));
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
var len__4730__auto___63971 = arguments.length;
var i__4731__auto___63972 = (0);
while(true){
if((i__4731__auto___63972 < len__4730__auto___63971)){
args__4736__auto__.push((arguments[i__4731__auto___63972]));

var G__63973 = (i__4731__auto___63972 + (1));
i__4731__auto___63972 = G__63973;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61692 = conformed_args__58615__auto__;
var map__61692__$1 = (((((!((map__61692 == null))))?(((((map__61692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61692):map__61692);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61692__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61692__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61692__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.button.cljs$lang$applyTo = (function (seq61684){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61684));
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
var len__4730__auto___63974 = arguments.length;
var i__4731__auto___63975 = (0);
while(true){
if((i__4731__auto___63975 < len__4730__auto___63974)){
args__4736__auto__.push((arguments[i__4731__auto___63975]));

var G__63976 = (i__4731__auto___63975 + (1));
i__4731__auto___63975 = G__63976;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61718 = conformed_args__58615__auto__;
var map__61718__$1 = (((((!((map__61718 == null))))?(((((map__61718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61718):map__61718);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61718__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61718__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61718__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.font_face_uri.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.font_face_uri.cljs$lang$applyTo = (function (seq61706){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61706));
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
var len__4730__auto___63978 = arguments.length;
var i__4731__auto___63979 = (0);
while(true){
if((i__4731__auto___63979 < len__4730__auto___63978)){
args__4736__auto__.push((arguments[i__4731__auto___63979]));

var G__63981 = (i__4731__auto___63979 + (1));
i__4731__auto___63979 = G__63981;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61742 = conformed_args__58615__auto__;
var map__61742__$1 = (((((!((map__61742 == null))))?(((((map__61742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61742):map__61742);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61742__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61742__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61742__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.wbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.wbr.cljs$lang$applyTo = (function (seq61735){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61735));
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
var len__4730__auto___63988 = arguments.length;
var i__4731__auto___63989 = (0);
while(true){
if((i__4731__auto___63989 < len__4730__auto___63988)){
args__4736__auto__.push((arguments[i__4731__auto___63989]));

var G__63991 = (i__4731__auto___63989 + (1));
i__4731__auto___63989 = G__63991;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61753 = conformed_args__58615__auto__;
var map__61753__$1 = (((((!((map__61753 == null))))?(((((map__61753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61753):map__61753);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61753__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61753__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61753__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.symbol.cljs$lang$applyTo = (function (seq61748){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61748));
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
var len__4730__auto___63995 = arguments.length;
var i__4731__auto___63996 = (0);
while(true){
if((i__4731__auto___63996 < len__4730__auto___63995)){
args__4736__auto__.push((arguments[i__4731__auto___63996]));

var G__63997 = (i__4731__auto___63996 + (1));
i__4731__auto___63996 = G__63997;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61763 = conformed_args__58615__auto__;
var map__61763__$1 = (((((!((map__61763 == null))))?(((((map__61763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61763):map__61763);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61763__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61763__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61763__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.strong.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.strong.cljs$lang$applyTo = (function (seq61761){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61761));
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
var len__4730__auto___64001 = arguments.length;
var i__4731__auto___64002 = (0);
while(true){
if((i__4731__auto___64002 < len__4730__auto___64001)){
args__4736__auto__.push((arguments[i__4731__auto___64002]));

var G__64004 = (i__4731__auto___64002 + (1));
i__4731__auto___64002 = G__64004;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61771 = conformed_args__58615__auto__;
var map__61771__$1 = (((((!((map__61771 == null))))?(((((map__61771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61771):map__61771);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61771__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61771__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61771__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.use.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.use.cljs$lang$applyTo = (function (seq61767){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61767));
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
var len__4730__auto___64008 = arguments.length;
var i__4731__auto___64009 = (0);
while(true){
if((i__4731__auto___64009 < len__4730__auto___64008)){
args__4736__auto__.push((arguments[i__4731__auto___64009]));

var G__64010 = (i__4731__auto___64009 + (1));
i__4731__auto___64009 = G__64010;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61782 = conformed_args__58615__auto__;
var map__61782__$1 = (((((!((map__61782 == null))))?(((((map__61782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61782):map__61782);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61782__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61782__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61782__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.solidcolor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.solidcolor.cljs$lang$applyTo = (function (seq61776){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61776));
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
var len__4730__auto___64012 = arguments.length;
var i__4731__auto___64013 = (0);
while(true){
if((i__4731__auto___64013 < len__4730__auto___64012)){
args__4736__auto__.push((arguments[i__4731__auto___64013]));

var G__64014 = (i__4731__auto___64013 + (1));
i__4731__auto___64013 = G__64014;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61788 = conformed_args__58615__auto__;
var map__61788__$1 = (((((!((map__61788 == null))))?(((((map__61788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61788):map__61788);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61788__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61788__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61788__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.fePointLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.fePointLight.cljs$lang$applyTo = (function (seq61786){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61786));
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
var len__4730__auto___64019 = arguments.length;
var i__4731__auto___64020 = (0);
while(true){
if((i__4731__auto___64020 < len__4730__auto___64019)){
args__4736__auto__.push((arguments[i__4731__auto___64020]));

var G__64021 = (i__4731__auto___64020 + (1));
i__4731__auto___64020 = G__64021;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61802 = conformed_args__58615__auto__;
var map__61802__$1 = (((((!((map__61802 == null))))?(((((map__61802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61802):map__61802);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61802__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61802__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61802__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.li.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.li.cljs$lang$applyTo = (function (seq61798){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61798));
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
var len__4730__auto___64028 = arguments.length;
var i__4731__auto___64029 = (0);
while(true){
if((i__4731__auto___64029 < len__4730__auto___64028)){
args__4736__auto__.push((arguments[i__4731__auto___64029]));

var G__64030 = (i__4731__auto___64029 + (1));
i__4731__auto___64029 = G__64030;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61819 = conformed_args__58615__auto__;
var map__61819__$1 = (((((!((map__61819 == null))))?(((((map__61819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61819):map__61819);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61819__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61819__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61819__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.dt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.dt.cljs$lang$applyTo = (function (seq61817){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61817));
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
var len__4730__auto___64036 = arguments.length;
var i__4731__auto___64037 = (0);
while(true){
if((i__4731__auto___64037 < len__4730__auto___64036)){
args__4736__auto__.push((arguments[i__4731__auto___64037]));

var G__64039 = (i__4731__auto___64037 + (1));
i__4731__auto___64037 = G__64039;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61826 = conformed_args__58615__auto__;
var map__61826__$1 = (((((!((map__61826 == null))))?(((((map__61826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61826):map__61826);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61826__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61826__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61826__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feFuncB.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feFuncB.cljs$lang$applyTo = (function (seq61824){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61824));
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
var len__4730__auto___64053 = arguments.length;
var i__4731__auto___64054 = (0);
while(true){
if((i__4731__auto___64054 < len__4730__auto___64053)){
args__4736__auto__.push((arguments[i__4731__auto___64054]));

var G__64055 = (i__4731__auto___64054 + (1));
i__4731__auto___64054 = G__64055;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61845 = conformed_args__58615__auto__;
var map__61845__$1 = (((((!((map__61845 == null))))?(((((map__61845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61845):map__61845);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61845__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61845__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61845__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.marker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.marker.cljs$lang$applyTo = (function (seq61842){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61842));
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
var len__4730__auto___64060 = arguments.length;
var i__4731__auto___64061 = (0);
while(true){
if((i__4731__auto___64061 < len__4730__auto___64060)){
args__4736__auto__.push((arguments[i__4731__auto___64061]));

var G__64062 = (i__4731__auto___64061 + (1));
i__4731__auto___64061 = G__64062;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61858 = conformed_args__58615__auto__;
var map__61858__$1 = (((((!((map__61858 == null))))?(((((map__61858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61858):map__61858);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61858__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61858__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq61853){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61853));
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
var len__4730__auto___64068 = arguments.length;
var i__4731__auto___64069 = (0);
while(true){
if((i__4731__auto___64069 < len__4730__auto___64068)){
args__4736__auto__.push((arguments[i__4731__auto___64069]));

var G__64070 = (i__4731__auto___64069 + (1));
i__4731__auto___64069 = G__64070;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61884 = conformed_args__58615__auto__;
var map__61884__$1 = (((((!((map__61884 == null))))?(((((map__61884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61884):map__61884);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61884__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61884__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61884__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.td.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.td.cljs$lang$applyTo = (function (seq61881){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61881));
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
var len__4730__auto___64078 = arguments.length;
var i__4731__auto___64079 = (0);
while(true){
if((i__4731__auto___64079 < len__4730__auto___64078)){
args__4736__auto__.push((arguments[i__4731__auto___64079]));

var G__64080 = (i__4731__auto___64079 + (1));
i__4731__auto___64079 = G__64080;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61900 = conformed_args__58615__auto__;
var map__61900__$1 = (((((!((map__61900 == null))))?(((((map__61900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61900):map__61900);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61900__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61900__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61900__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.tr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.tr.cljs$lang$applyTo = (function (seq61897){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61897));
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
var len__4730__auto___64081 = arguments.length;
var i__4731__auto___64082 = (0);
while(true){
if((i__4731__auto___64082 < len__4730__auto___64081)){
args__4736__auto__.push((arguments[i__4731__auto___64082]));

var G__64083 = (i__4731__auto___64082 + (1));
i__4731__auto___64082 = G__64083;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61930 = conformed_args__58615__auto__;
var map__61930__$1 = (((((!((map__61930 == null))))?(((((map__61930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61930):map__61930);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61930__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61930__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61930__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.circle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.circle.cljs$lang$applyTo = (function (seq61914){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61914));
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
var len__4730__auto___64100 = arguments.length;
var i__4731__auto___64104 = (0);
while(true){
if((i__4731__auto___64104 < len__4730__auto___64100)){
args__4736__auto__.push((arguments[i__4731__auto___64104]));

var G__64105 = (i__4731__auto___64104 + (1));
i__4731__auto___64104 = G__64105;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61947 = conformed_args__58615__auto__;
var map__61947__$1 = (((((!((map__61947 == null))))?(((((map__61947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61947):map__61947);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61947__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61947__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61947__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.section.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.section.cljs$lang$applyTo = (function (seq61937){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61937));
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
var len__4730__auto___64123 = arguments.length;
var i__4731__auto___64127 = (0);
while(true){
if((i__4731__auto___64127 < len__4730__auto___64123)){
args__4736__auto__.push((arguments[i__4731__auto___64127]));

var G__64128 = (i__4731__auto___64127 + (1));
i__4731__auto___64127 = G__64128;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61970 = conformed_args__58615__auto__;
var map__61970__$1 = (((((!((map__61970 == null))))?(((((map__61970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61970):map__61970);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61970__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61970__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61970__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feDropShadow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feDropShadow.cljs$lang$applyTo = (function (seq61955){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61955));
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
var len__4730__auto___64135 = arguments.length;
var i__4731__auto___64136 = (0);
while(true){
if((i__4731__auto___64136 < len__4730__auto___64135)){
args__4736__auto__.push((arguments[i__4731__auto___64136]));

var G__64137 = (i__4731__auto___64136 + (1));
i__4731__auto___64136 = G__64137;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61989 = conformed_args__58615__auto__;
var map__61989__$1 = (((((!((map__61989 == null))))?(((((map__61989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61989):map__61989);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61989__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61989__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61989__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.th.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.th.cljs$lang$applyTo = (function (seq61988){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61988));
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
var len__4730__auto___64150 = arguments.length;
var i__4731__auto___64152 = (0);
while(true){
if((i__4731__auto___64152 < len__4730__auto___64150)){
args__4736__auto__.push((arguments[i__4731__auto___64152]));

var G__64153 = (i__4731__auto___64152 + (1));
i__4731__auto___64152 = G__64153;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61998 = conformed_args__58615__auto__;
var map__61998__$1 = (((((!((map__61998 == null))))?(((((map__61998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61998):map__61998);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61998__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61998__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61998__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.time.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.time.cljs$lang$applyTo = (function (seq61996){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61996));
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
var len__4730__auto___64170 = arguments.length;
var i__4731__auto___64171 = (0);
while(true){
if((i__4731__auto___64171 < len__4730__auto___64170)){
args__4736__auto__.push((arguments[i__4731__auto___64171]));

var G__64173 = (i__4731__auto___64171 + (1));
i__4731__auto___64171 = G__64173;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62012 = conformed_args__58615__auto__;
var map__62012__$1 = (((((!((map__62012 == null))))?(((((map__62012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62012):map__62012);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62012__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62012__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62012__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.optgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.optgroup.cljs$lang$applyTo = (function (seq62004){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62004));
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
var len__4730__auto___64191 = arguments.length;
var i__4731__auto___64193 = (0);
while(true){
if((i__4731__auto___64193 < len__4730__auto___64191)){
args__4736__auto__.push((arguments[i__4731__auto___64193]));

var G__64198 = (i__4731__auto___64193 + (1));
i__4731__auto___64193 = G__64198;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62030 = conformed_args__58615__auto__;
var map__62030__$1 = (((((!((map__62030 == null))))?(((((map__62030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62030):map__62030);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62030__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62030__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62030__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.iframe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.iframe.cljs$lang$applyTo = (function (seq62018){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62018));
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
var len__4730__auto___64204 = arguments.length;
var i__4731__auto___64205 = (0);
while(true){
if((i__4731__auto___64205 < len__4730__auto___64204)){
args__4736__auto__.push((arguments[i__4731__auto___64205]));

var G__64206 = (i__4731__auto___64205 + (1));
i__4731__auto___64205 = G__64206;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62038 = conformed_args__58615__auto__;
var map__62038__$1 = (((((!((map__62038 == null))))?(((((map__62038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62038):map__62038);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62038__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62038__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62038__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.color_profile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.color_profile.cljs$lang$applyTo = (function (seq62034){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62034));
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
var len__4730__auto___64210 = arguments.length;
var i__4731__auto___64211 = (0);
while(true){
if((i__4731__auto___64211 < len__4730__auto___64210)){
args__4736__auto__.push((arguments[i__4731__auto___64211]));

var G__64216 = (i__4731__auto___64211 + (1));
i__4731__auto___64211 = G__64216;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62046 = conformed_args__58615__auto__;
var map__62046__$1 = (((((!((map__62046 == null))))?(((((map__62046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62046):map__62046);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62046__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62046__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62046__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.legend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.legend.cljs$lang$applyTo = (function (seq62043){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62043));
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
var len__4730__auto___64225 = arguments.length;
var i__4731__auto___64226 = (0);
while(true){
if((i__4731__auto___64226 < len__4730__auto___64225)){
args__4736__auto__.push((arguments[i__4731__auto___64226]));

var G__64227 = (i__4731__auto___64226 + (1));
i__4731__auto___64226 = G__64227;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62055 = conformed_args__58615__auto__;
var map__62055__$1 = (((((!((map__62055 == null))))?(((((map__62055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62055):map__62055);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62055__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62055__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62055__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.em.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.em.cljs$lang$applyTo = (function (seq62050){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62050));
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
var len__4730__auto___64229 = arguments.length;
var i__4731__auto___64230 = (0);
while(true){
if((i__4731__auto___64230 < len__4730__auto___64229)){
args__4736__auto__.push((arguments[i__4731__auto___64230]));

var G__64231 = (i__4731__auto___64230 + (1));
i__4731__auto___64230 = G__64231;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62069 = conformed_args__58615__auto__;
var map__62069__$1 = (((((!((map__62069 == null))))?(((((map__62069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62069):map__62069);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62069__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62069__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62069__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.kbd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.kbd.cljs$lang$applyTo = (function (seq62065){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62065));
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
var len__4730__auto___64237 = arguments.length;
var i__4731__auto___64238 = (0);
while(true){
if((i__4731__auto___64238 < len__4730__auto___64237)){
args__4736__auto__.push((arguments[i__4731__auto___64238]));

var G__64239 = (i__4731__auto___64238 + (1));
i__4731__auto___64238 = G__64239;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62079 = conformed_args__58615__auto__;
var map__62079__$1 = (((((!((map__62079 == null))))?(((((map__62079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62079):map__62079);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62079__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62079__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62079__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.article.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.article.cljs$lang$applyTo = (function (seq62074){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62074));
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
var len__4730__auto___64241 = arguments.length;
var i__4731__auto___64242 = (0);
while(true){
if((i__4731__auto___64242 < len__4730__auto___64241)){
args__4736__auto__.push((arguments[i__4731__auto___64242]));

var G__64243 = (i__4731__auto___64242 + (1));
i__4731__auto___64242 = G__64243;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62087 = conformed_args__58615__auto__;
var map__62087__$1 = (((((!((map__62087 == null))))?(((((map__62087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62087):map__62087);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62087__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62087__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62087__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.animateColor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.animateColor.cljs$lang$applyTo = (function (seq62084){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62084));
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
var len__4730__auto___64247 = arguments.length;
var i__4731__auto___64248 = (0);
while(true){
if((i__4731__auto___64248 < len__4730__auto___64247)){
args__4736__auto__.push((arguments[i__4731__auto___64248]));

var G__64249 = (i__4731__auto___64248 + (1));
i__4731__auto___64248 = G__64249;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62105 = conformed_args__58615__auto__;
var map__62105__$1 = (((((!((map__62105 == null))))?(((((map__62105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62105):map__62105);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62105__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62105__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62105__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.clipPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.clipPath.cljs$lang$applyTo = (function (seq62096){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62096));
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
var len__4730__auto___64253 = arguments.length;
var i__4731__auto___64254 = (0);
while(true){
if((i__4731__auto___64254 < len__4730__auto___64253)){
args__4736__auto__.push((arguments[i__4731__auto___64254]));

var G__64255 = (i__4731__auto___64254 + (1));
i__4731__auto___64254 = G__64255;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62126 = conformed_args__58615__auto__;
var map__62126__$1 = (((((!((map__62126 == null))))?(((((map__62126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62126):map__62126);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62126__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62126__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62126__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.abbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.abbr.cljs$lang$applyTo = (function (seq62116){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62116));
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
var len__4730__auto___64257 = arguments.length;
var i__4731__auto___64258 = (0);
while(true){
if((i__4731__auto___64258 < len__4730__auto___64257)){
args__4736__auto__.push((arguments[i__4731__auto___64258]));

var G__64259 = (i__4731__auto___64258 + (1));
i__4731__auto___64258 = G__64259;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62146 = conformed_args__58615__auto__;
var map__62146__$1 = (((((!((map__62146 == null))))?(((((map__62146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62146):map__62146);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62146__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62146__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62146__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.altGlyphDef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.altGlyphDef.cljs$lang$applyTo = (function (seq62133){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62133));
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
var len__4730__auto___64264 = arguments.length;
var i__4731__auto___64265 = (0);
while(true){
if((i__4731__auto___64265 < len__4730__auto___64264)){
args__4736__auto__.push((arguments[i__4731__auto___64265]));

var G__64266 = (i__4731__auto___64265 + (1));
i__4731__auto___64265 = G__64266;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62160 = conformed_args__58615__auto__;
var map__62160__$1 = (((((!((map__62160 == null))))?(((((map__62160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62160):map__62160);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62160__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62160__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62160__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.meshrow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.meshrow.cljs$lang$applyTo = (function (seq62152){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62152));
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
var len__4730__auto___64269 = arguments.length;
var i__4731__auto___64270 = (0);
while(true){
if((i__4731__auto___64270 < len__4730__auto___64269)){
args__4736__auto__.push((arguments[i__4731__auto___64270]));

var G__64271 = (i__4731__auto___64270 + (1));
i__4731__auto___64270 = G__64271;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62180 = conformed_args__58615__auto__;
var map__62180__$1 = (((((!((map__62180 == null))))?(((((map__62180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62180):map__62180);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62180__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62180__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62180__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.cursor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.cursor.cljs$lang$applyTo = (function (seq62173){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62173));
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
var len__4730__auto___64273 = arguments.length;
var i__4731__auto___64274 = (0);
while(true){
if((i__4731__auto___64274 < len__4730__auto___64273)){
args__4736__auto__.push((arguments[i__4731__auto___64274]));

var G__64277 = (i__4731__auto___64274 + (1));
i__4731__auto___64274 = G__64277;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62197 = conformed_args__58615__auto__;
var map__62197__$1 = (((((!((map__62197 == null))))?(((((map__62197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62197):map__62197);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62197__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62197__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62197__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.animate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.animate.cljs$lang$applyTo = (function (seq62191){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62191));
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
var len__4730__auto___64282 = arguments.length;
var i__4731__auto___64283 = (0);
while(true){
if((i__4731__auto___64283 < len__4730__auto___64282)){
args__4736__auto__.push((arguments[i__4731__auto___64283]));

var G__64285 = (i__4731__auto___64283 + (1));
i__4731__auto___64283 = G__64285;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62218 = conformed_args__58615__auto__;
var map__62218__$1 = (((((!((map__62218 == null))))?(((((map__62218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62218):map__62218);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62218__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62218__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62218__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.source.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.source.cljs$lang$applyTo = (function (seq62213){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62213));
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
var len__4730__auto___64288 = arguments.length;
var i__4731__auto___64289 = (0);
while(true){
if((i__4731__auto___64289 < len__4730__auto___64288)){
args__4736__auto__.push((arguments[i__4731__auto___64289]));

var G__64291 = (i__4731__auto___64289 + (1));
i__4731__auto___64289 = G__64291;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62225 = conformed_args__58615__auto__;
var map__62225__$1 = (((((!((map__62225 == null))))?(((((map__62225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62225):map__62225);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62225__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62225__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62225__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.output.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.output.cljs$lang$applyTo = (function (seq62222){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62222));
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
var len__4730__auto___64294 = arguments.length;
var i__4731__auto___64295 = (0);
while(true){
if((i__4731__auto___64295 < len__4730__auto___64294)){
args__4736__auto__.push((arguments[i__4731__auto___64295]));

var G__64296 = (i__4731__auto___64295 + (1));
i__4731__auto___64295 = G__64296;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62234 = conformed_args__58615__auto__;
var map__62234__$1 = (((((!((map__62234 == null))))?(((((map__62234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62234):map__62234);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62234__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62234__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62234__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.font_face.cljs$lang$applyTo = (function (seq62231){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62231));
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
var len__4730__auto___64299 = arguments.length;
var i__4731__auto___64300 = (0);
while(true){
if((i__4731__auto___64300 < len__4730__auto___64299)){
args__4736__auto__.push((arguments[i__4731__auto___64300]));

var G__64301 = (i__4731__auto___64300 + (1));
i__4731__auto___64300 = G__64301;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62250 = conformed_args__58615__auto__;
var map__62250__$1 = (((((!((map__62250 == null))))?(((((map__62250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62250):map__62250);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62250__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62250__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62250__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feMergeNode.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feMergeNode.cljs$lang$applyTo = (function (seq62242){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62242));
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
var len__4730__auto___64303 = arguments.length;
var i__4731__auto___64307 = (0);
while(true){
if((i__4731__auto___64307 < len__4730__auto___64303)){
args__4736__auto__.push((arguments[i__4731__auto___64307]));

var G__64308 = (i__4731__auto___64307 + (1));
i__4731__auto___64307 = G__64308;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62263 = conformed_args__58615__auto__;
var map__62263__$1 = (((((!((map__62263 == null))))?(((((map__62263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62263):map__62263);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62263__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62263__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62263__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feSpotLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feSpotLight.cljs$lang$applyTo = (function (seq62258){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62258));
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
var len__4730__auto___64321 = arguments.length;
var i__4731__auto___64322 = (0);
while(true){
if((i__4731__auto___64322 < len__4730__auto___64321)){
args__4736__auto__.push((arguments[i__4731__auto___64322]));

var G__64323 = (i__4731__auto___64322 + (1));
i__4731__auto___64322 = G__64323;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62281 = conformed_args__58615__auto__;
var map__62281__$1 = (((((!((map__62281 == null))))?(((((map__62281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62281):map__62281);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62281__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62281__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62281__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.header.cljs$lang$applyTo = (function (seq62276){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62276));
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
var len__4730__auto___64340 = arguments.length;
var i__4731__auto___64341 = (0);
while(true){
if((i__4731__auto___64341 < len__4730__auto___64340)){
args__4736__auto__.push((arguments[i__4731__auto___64341]));

var G__64342 = (i__4731__auto___64341 + (1));
i__4731__auto___64341 = G__64342;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62290 = conformed_args__58615__auto__;
var map__62290__$1 = (((((!((map__62290 == null))))?(((((map__62290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62290):map__62290);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62290__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62290__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62290__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.datalist.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.datalist.cljs$lang$applyTo = (function (seq62286){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62286));
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
var len__4730__auto___64346 = arguments.length;
var i__4731__auto___64347 = (0);
while(true){
if((i__4731__auto___64347 < len__4730__auto___64346)){
args__4736__auto__.push((arguments[i__4731__auto___64347]));

var G__64348 = (i__4731__auto___64347 + (1));
i__4731__auto___64347 = G__64348;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62310 = conformed_args__58615__auto__;
var map__62310__$1 = (((((!((map__62310 == null))))?(((((map__62310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62310):map__62310);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62310__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62310__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62310__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.tfoot.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.tfoot.cljs$lang$applyTo = (function (seq62302){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62302));
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
var len__4730__auto___64350 = arguments.length;
var i__4731__auto___64351 = (0);
while(true){
if((i__4731__auto___64351 < len__4730__auto___64350)){
args__4736__auto__.push((arguments[i__4731__auto___64351]));

var G__64352 = (i__4731__auto___64351 + (1));
i__4731__auto___64351 = G__64352;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62322 = conformed_args__58615__auto__;
var map__62322__$1 = (((((!((map__62322 == null))))?(((((map__62322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62322):map__62322);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62322__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62322__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62322__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.s.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.s.cljs$lang$applyTo = (function (seq62317){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62317));
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
var len__4730__auto___64353 = arguments.length;
var i__4731__auto___64354 = (0);
while(true){
if((i__4731__auto___64354 < len__4730__auto___64353)){
args__4736__auto__.push((arguments[i__4731__auto___64354]));

var G__64355 = (i__4731__auto___64354 + (1));
i__4731__auto___64354 = G__64355;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62345 = conformed_args__58615__auto__;
var map__62345__$1 = (((((!((map__62345 == null))))?(((((map__62345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62345):map__62345);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62345__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62345__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62345__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.hatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.hatch.cljs$lang$applyTo = (function (seq62335){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62335));
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
var len__4730__auto___64362 = arguments.length;
var i__4731__auto___64363 = (0);
while(true){
if((i__4731__auto___64363 < len__4730__auto___64362)){
args__4736__auto__.push((arguments[i__4731__auto___64363]));

var G__64364 = (i__4731__auto___64363 + (1));
i__4731__auto___64363 = G__64364;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62357 = conformed_args__58615__auto__;
var map__62357__$1 = (((((!((map__62357 == null))))?(((((map__62357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62357):map__62357);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62357__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62357__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62357__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.ins.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.ins.cljs$lang$applyTo = (function (seq62356){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62356));
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
var len__4730__auto___64367 = arguments.length;
var i__4731__auto___64368 = (0);
while(true){
if((i__4731__auto___64368 < len__4730__auto___64367)){
args__4736__auto__.push((arguments[i__4731__auto___64368]));

var G__64369 = (i__4731__auto___64368 + (1));
i__4731__auto___64368 = G__64369;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62401 = conformed_args__58615__auto__;
var map__62401__$1 = (((((!((map__62401 == null))))?(((((map__62401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62401):map__62401);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62401__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62401__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62401__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.footer.cljs$lang$applyTo = (function (seq62391){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62391));
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
var len__4730__auto___64372 = arguments.length;
var i__4731__auto___64373 = (0);
while(true){
if((i__4731__auto___64373 < len__4730__auto___64372)){
args__4736__auto__.push((arguments[i__4731__auto___64373]));

var G__64374 = (i__4731__auto___64373 + (1));
i__4731__auto___64373 = G__64374;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62422 = conformed_args__58615__auto__;
var map__62422__$1 = (((((!((map__62422 == null))))?(((((map__62422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62422):map__62422);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62422__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62422__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62422__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.mpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.mpath.cljs$lang$applyTo = (function (seq62412){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62412));
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
var len__4730__auto___64378 = arguments.length;
var i__4731__auto___64379 = (0);
while(true){
if((i__4731__auto___64379 < len__4730__auto___64378)){
args__4736__auto__.push((arguments[i__4731__auto___64379]));

var G__64380 = (i__4731__auto___64379 + (1));
i__4731__auto___64379 = G__64380;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62434 = conformed_args__58615__auto__;
var map__62434__$1 = (((((!((map__62434 == null))))?(((((map__62434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62434):map__62434);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62434__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62434__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62434__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.title.cljs$lang$applyTo = (function (seq62432){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62432));
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
var len__4730__auto___64381 = arguments.length;
var i__4731__auto___64382 = (0);
while(true){
if((i__4731__auto___64382 < len__4730__auto___64381)){
args__4736__auto__.push((arguments[i__4731__auto___64382]));

var G__64383 = (i__4731__auto___64382 + (1));
i__4731__auto___64382 = G__64383;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62454 = conformed_args__58615__auto__;
var map__62454__$1 = (((((!((map__62454 == null))))?(((((map__62454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62454):map__62454);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62454__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62454__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62454__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.h5.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h5.cljs$lang$applyTo = (function (seq62445){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62445));
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
var len__4730__auto___64385 = arguments.length;
var i__4731__auto___64386 = (0);
while(true){
if((i__4731__auto___64386 < len__4730__auto___64385)){
args__4736__auto__.push((arguments[i__4731__auto___64386]));

var G__64390 = (i__4731__auto___64386 + (1));
i__4731__auto___64386 = G__64390;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62467 = conformed_args__58615__auto__;
var map__62467__$1 = (((((!((map__62467 == null))))?(((((map__62467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62467):map__62467);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62467__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62467__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62467__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.meshgradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.meshgradient.cljs$lang$applyTo = (function (seq62465){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62465));
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
var len__4730__auto___64393 = arguments.length;
var i__4731__auto___64394 = (0);
while(true){
if((i__4731__auto___64394 < len__4730__auto___64393)){
args__4736__auto__.push((arguments[i__4731__auto___64394]));

var G__64395 = (i__4731__auto___64394 + (1));
i__4731__auto___64394 = G__64395;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62489 = conformed_args__58615__auto__;
var map__62489__$1 = (((((!((map__62489 == null))))?(((((map__62489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62489):map__62489);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62489__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62489__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62489__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.canvas.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.canvas.cljs$lang$applyTo = (function (seq62478){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62478));
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
var len__4730__auto___64397 = arguments.length;
var i__4731__auto___64398 = (0);
while(true){
if((i__4731__auto___64398 < len__4730__auto___64397)){
args__4736__auto__.push((arguments[i__4731__auto___64398]));

var G__64400 = (i__4731__auto___64398 + (1));
i__4731__auto___64398 = G__64400;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62493 = conformed_args__58615__auto__;
var map__62493__$1 = (((((!((map__62493 == null))))?(((((map__62493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62493):map__62493);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62493__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62493__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62493__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.param.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.param.cljs$lang$applyTo = (function (seq62491){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62491));
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
var len__4730__auto___64405 = arguments.length;
var i__4731__auto___64406 = (0);
while(true){
if((i__4731__auto___64406 < len__4730__auto___64405)){
args__4736__auto__.push((arguments[i__4731__auto___64406]));

var G__64407 = (i__4731__auto___64406 + (1));
i__4731__auto___64406 = G__64407;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62516 = conformed_args__58615__auto__;
var map__62516__$1 = (((((!((map__62516 == null))))?(((((map__62516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62516):map__62516);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62516__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62516__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62516__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.font.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.font.cljs$lang$applyTo = (function (seq62510){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62510));
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
var len__4730__auto___64410 = arguments.length;
var i__4731__auto___64411 = (0);
while(true){
if((i__4731__auto___64411 < len__4730__auto___64410)){
args__4736__auto__.push((arguments[i__4731__auto___64411]));

var G__64412 = (i__4731__auto___64411 + (1));
i__4731__auto___64411 = G__64412;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62528 = conformed_args__58615__auto__;
var map__62528__$1 = (((((!((map__62528 == null))))?(((((map__62528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62528):map__62528);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62528__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62528__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62528__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.div.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.div.cljs$lang$applyTo = (function (seq62522){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62522));
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
var len__4730__auto___64413 = arguments.length;
var i__4731__auto___64414 = (0);
while(true){
if((i__4731__auto___64414 < len__4730__auto___64413)){
args__4736__auto__.push((arguments[i__4731__auto___64414]));

var G__64415 = (i__4731__auto___64414 + (1));
i__4731__auto___64414 = G__64415;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62534 = conformed_args__58615__auto__;
var map__62534__$1 = (((((!((map__62534 == null))))?(((((map__62534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62534):map__62534);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62534__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62534__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62534__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.option.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.option.cljs$lang$applyTo = (function (seq62531){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62531));
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
var len__4730__auto___64419 = arguments.length;
var i__4731__auto___64420 = (0);
while(true){
if((i__4731__auto___64420 < len__4730__auto___64419)){
args__4736__auto__.push((arguments[i__4731__auto___64420]));

var G__64421 = (i__4731__auto___64420 + (1));
i__4731__auto___64420 = G__64421;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62543 = conformed_args__58615__auto__;
var map__62543__$1 = (((((!((map__62543 == null))))?(((((map__62543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62543):map__62543);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62543__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62543__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62543__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feFlood.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feFlood.cljs$lang$applyTo = (function (seq62542){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62542));
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
var len__4730__auto___64428 = arguments.length;
var i__4731__auto___64429 = (0);
while(true){
if((i__4731__auto___64429 < len__4730__auto___64428)){
args__4736__auto__.push((arguments[i__4731__auto___64429]));

var G__64430 = (i__4731__auto___64429 + (1));
i__4731__auto___64429 = G__64430;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62552 = conformed_args__58615__auto__;
var map__62552__$1 = (((((!((map__62552 == null))))?(((((map__62552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62552):map__62552);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62552__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62552__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62552__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.summary.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.summary.cljs$lang$applyTo = (function (seq62551){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62551));
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
var len__4730__auto___64435 = arguments.length;
var i__4731__auto___64436 = (0);
while(true){
if((i__4731__auto___64436 < len__4730__auto___64435)){
args__4736__auto__.push((arguments[i__4731__auto___64436]));

var G__64438 = (i__4731__auto___64436 + (1));
i__4731__auto___64436 = G__64438;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62560 = conformed_args__58615__auto__;
var map__62560__$1 = (((((!((map__62560 == null))))?(((((map__62560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62560):map__62560);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62560__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62560__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62560__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feMorphology.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feMorphology.cljs$lang$applyTo = (function (seq62559){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62559));
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
var len__4730__auto___64441 = arguments.length;
var i__4731__auto___64442 = (0);
while(true){
if((i__4731__auto___64442 < len__4730__auto___64441)){
args__4736__auto__.push((arguments[i__4731__auto___64442]));

var G__64443 = (i__4731__auto___64442 + (1));
i__4731__auto___64442 = G__64443;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62568 = conformed_args__58615__auto__;
var map__62568__$1 = (((((!((map__62568 == null))))?(((((map__62568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62568):map__62568);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62568__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62568__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62568__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.samp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.samp.cljs$lang$applyTo = (function (seq62564){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62564));
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
var len__4730__auto___64452 = arguments.length;
var i__4731__auto___64453 = (0);
while(true){
if((i__4731__auto___64453 < len__4730__auto___64452)){
args__4736__auto__.push((arguments[i__4731__auto___64453]));

var G__64454 = (i__4731__auto___64453 + (1));
i__4731__auto___64453 = G__64454;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62578 = conformed_args__58615__auto__;
var map__62578__$1 = (((((!((map__62578 == null))))?(((((map__62578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62578):map__62578);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62578__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62578__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62578__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.glyphRef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.glyphRef.cljs$lang$applyTo = (function (seq62575){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62575));
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
var len__4730__auto___64458 = arguments.length;
var i__4731__auto___64459 = (0);
while(true){
if((i__4731__auto___64459 < len__4730__auto___64458)){
args__4736__auto__.push((arguments[i__4731__auto___64459]));

var G__64460 = (i__4731__auto___64459 + (1));
i__4731__auto___64459 = G__64460;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62585 = conformed_args__58615__auto__;
var map__62585__$1 = (((((!((map__62585 == null))))?(((((map__62585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62585):map__62585);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62585__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62585__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62585__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.small.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.small.cljs$lang$applyTo = (function (seq62582){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62582));
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
var len__4730__auto___64463 = arguments.length;
var i__4731__auto___64464 = (0);
while(true){
if((i__4731__auto___64464 < len__4730__auto___64463)){
args__4736__auto__.push((arguments[i__4731__auto___64464]));

var G__64465 = (i__4731__auto___64464 + (1));
i__4731__auto___64464 = G__64465;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62591 = conformed_args__58615__auto__;
var map__62591__$1 = (((((!((map__62591 == null))))?(((((map__62591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62591):map__62591);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62591__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62591__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62591__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.style.cljs$lang$applyTo = (function (seq62589){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62589));
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
var len__4730__auto___64469 = arguments.length;
var i__4731__auto___64473 = (0);
while(true){
if((i__4731__auto___64473 < len__4730__auto___64469)){
args__4736__auto__.push((arguments[i__4731__auto___64473]));

var G__64474 = (i__4731__auto___64473 + (1));
i__4731__auto___64473 = G__64474;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62596 = conformed_args__58615__auto__;
var map__62596__$1 = (((((!((map__62596 == null))))?(((((map__62596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62596):map__62596);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62596__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62596__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62596__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.textarea.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.textarea.cljs$lang$applyTo = (function (seq62594){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62594));
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
var len__4730__auto___64479 = arguments.length;
var i__4731__auto___64480 = (0);
while(true){
if((i__4731__auto___64480 < len__4730__auto___64479)){
args__4736__auto__.push((arguments[i__4731__auto___64480]));

var G__64481 = (i__4731__auto___64480 + (1));
i__4731__auto___64480 = G__64481;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62604 = conformed_args__58615__auto__;
var map__62604__$1 = (((((!((map__62604 == null))))?(((((map__62604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62604):map__62604);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62604__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62604__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62604__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq62600){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62600));
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
var len__4730__auto___64484 = arguments.length;
var i__4731__auto___64485 = (0);
while(true){
if((i__4731__auto___64485 < len__4730__auto___64484)){
args__4736__auto__.push((arguments[i__4731__auto___64485]));

var G__64486 = (i__4731__auto___64485 + (1));
i__4731__auto___64485 = G__64486;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62611 = conformed_args__58615__auto__;
var map__62611__$1 = (((((!((map__62611 == null))))?(((((map__62611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62611):map__62611);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62611__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62611__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62611__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.h4.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h4.cljs$lang$applyTo = (function (seq62609){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62609));
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
var len__4730__auto___64491 = arguments.length;
var i__4731__auto___64492 = (0);
while(true){
if((i__4731__auto___64492 < len__4730__auto___64491)){
args__4736__auto__.push((arguments[i__4731__auto___64492]));

var G__64493 = (i__4731__auto___64492 + (1));
i__4731__auto___64492 = G__64493;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62621 = conformed_args__58615__auto__;
var map__62621__$1 = (((((!((map__62621 == null))))?(((((map__62621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62621):map__62621);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62621__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62621__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62621__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.head.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.head.cljs$lang$applyTo = (function (seq62617){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62617));
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
var len__4730__auto___64498 = arguments.length;
var i__4731__auto___64499 = (0);
while(true){
if((i__4731__auto___64499 < len__4730__auto___64498)){
args__4736__auto__.push((arguments[i__4731__auto___64499]));

var G__64501 = (i__4731__auto___64499 + (1));
i__4731__auto___64499 = G__64501;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62629 = conformed_args__58615__auto__;
var map__62629__$1 = (((((!((map__62629 == null))))?(((((map__62629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62629):map__62629);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62629__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62629__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62629__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.g.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.g.cljs$lang$applyTo = (function (seq62628){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62628));
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
var len__4730__auto___64505 = arguments.length;
var i__4731__auto___64507 = (0);
while(true){
if((i__4731__auto___64507 < len__4730__auto___64505)){
args__4736__auto__.push((arguments[i__4731__auto___64507]));

var G__64511 = (i__4731__auto___64507 + (1));
i__4731__auto___64507 = G__64511;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62643 = conformed_args__58615__auto__;
var map__62643__$1 = (((((!((map__62643 == null))))?(((((map__62643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62643):map__62643);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62643__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62643__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62643__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.missing_glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.missing_glyph.cljs$lang$applyTo = (function (seq62639){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62639));
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
var len__4730__auto___64522 = arguments.length;
var i__4731__auto___64523 = (0);
while(true){
if((i__4731__auto___64523 < len__4730__auto___64522)){
args__4736__auto__.push((arguments[i__4731__auto___64523]));

var G__64524 = (i__4731__auto___64523 + (1));
i__4731__auto___64523 = G__64524;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62650 = conformed_args__58615__auto__;
var map__62650__$1 = (((((!((map__62650 == null))))?(((((map__62650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62650):map__62650);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62650__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62650__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62650__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.stop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.stop.cljs$lang$applyTo = (function (seq62647){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62647));
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
var len__4730__auto___64529 = arguments.length;
var i__4731__auto___64530 = (0);
while(true){
if((i__4731__auto___64530 < len__4730__auto___64529)){
args__4736__auto__.push((arguments[i__4731__auto___64530]));

var G__64531 = (i__4731__auto___64530 + (1));
i__4731__auto___64530 = G__64531;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62658 = conformed_args__58615__auto__;
var map__62658__$1 = (((((!((map__62658 == null))))?(((((map__62658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62658):map__62658);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62658__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62658__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62658__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq62656){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62656));
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
var len__4730__auto___64533 = arguments.length;
var i__4731__auto___64534 = (0);
while(true){
if((i__4731__auto___64534 < len__4730__auto___64533)){
args__4736__auto__.push((arguments[i__4731__auto___64534]));

var G__64535 = (i__4731__auto___64534 + (1));
i__4731__auto___64534 = G__64535;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62671 = conformed_args__58615__auto__;
var map__62671__$1 = (((((!((map__62671 == null))))?(((((map__62671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62671):map__62671);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62671__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62671__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62671__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.filter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.filter.cljs$lang$applyTo = (function (seq62668){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62668));
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
var len__4730__auto___64543 = arguments.length;
var i__4731__auto___64544 = (0);
while(true){
if((i__4731__auto___64544 < len__4730__auto___64543)){
args__4736__auto__.push((arguments[i__4731__auto___64544]));

var G__64545 = (i__4731__auto___64544 + (1));
i__4731__auto___64544 = G__64545;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62681 = conformed_args__58615__auto__;
var map__62681__$1 = (((((!((map__62681 == null))))?(((((map__62681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62681):map__62681);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62681__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62681__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62681__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feComposite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feComposite.cljs$lang$applyTo = (function (seq62676){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62676));
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
var len__4730__auto___64547 = arguments.length;
var i__4731__auto___64548 = (0);
while(true){
if((i__4731__auto___64548 < len__4730__auto___64547)){
args__4736__auto__.push((arguments[i__4731__auto___64548]));

var G__64549 = (i__4731__auto___64548 + (1));
i__4731__auto___64548 = G__64549;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62692 = conformed_args__58615__auto__;
var map__62692__$1 = (((((!((map__62692 == null))))?(((((map__62692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62692):map__62692);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62692__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62692__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62692__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.mesh.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.mesh.cljs$lang$applyTo = (function (seq62690){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62690));
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
var len__4730__auto___64552 = arguments.length;
var i__4731__auto___64553 = (0);
while(true){
if((i__4731__auto___64553 < len__4730__auto___64552)){
args__4736__auto__.push((arguments[i__4731__auto___64553]));

var G__64554 = (i__4731__auto___64553 + (1));
i__4731__auto___64553 = G__64554;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62705 = conformed_args__58615__auto__;
var map__62705__$1 = (((((!((map__62705 == null))))?(((((map__62705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62705):map__62705);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62705__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62705__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62705__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.var$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.var$.cljs$lang$applyTo = (function (seq62704){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62704));
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
var len__4730__auto___64559 = arguments.length;
var i__4731__auto___64560 = (0);
while(true){
if((i__4731__auto___64560 < len__4730__auto___64559)){
args__4736__auto__.push((arguments[i__4731__auto___64560]));

var G__64561 = (i__4731__auto___64560 + (1));
i__4731__auto___64560 = G__64561;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62722 = conformed_args__58615__auto__;
var map__62722__$1 = (((((!((map__62722 == null))))?(((((map__62722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62722):map__62722);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62722__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62722__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62722__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.tspan.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.tspan.cljs$lang$applyTo = (function (seq62712){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62712));
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
var len__4730__auto___64566 = arguments.length;
var i__4731__auto___64567 = (0);
while(true){
if((i__4731__auto___64567 < len__4730__auto___64566)){
args__4736__auto__.push((arguments[i__4731__auto___64567]));

var G__64568 = (i__4731__auto___64567 + (1));
i__4731__auto___64567 = G__64568;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62742 = conformed_args__58615__auto__;
var map__62742__$1 = (((((!((map__62742 == null))))?(((((map__62742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62742):map__62742);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62742__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62742__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62742__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.ol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.ol.cljs$lang$applyTo = (function (seq62733){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62733));
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
var len__4730__auto___64570 = arguments.length;
var i__4731__auto___64571 = (0);
while(true){
if((i__4731__auto___64571 < len__4730__auto___64570)){
args__4736__auto__.push((arguments[i__4731__auto___64571]));

var G__64572 = (i__4731__auto___64571 + (1));
i__4731__auto___64571 = G__64572;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62746 = conformed_args__58615__auto__;
var map__62746__$1 = (((((!((map__62746 == null))))?(((((map__62746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62746):map__62746);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62746__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62746__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62746__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.details.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.details.cljs$lang$applyTo = (function (seq62744){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62744));
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
var len__4730__auto___64577 = arguments.length;
var i__4731__auto___64578 = (0);
while(true){
if((i__4731__auto___64578 < len__4730__auto___64577)){
args__4736__auto__.push((arguments[i__4731__auto___64578]));

var G__64579 = (i__4731__auto___64578 + (1));
i__4731__auto___64578 = G__64579;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62759 = conformed_args__58615__auto__;
var map__62759__$1 = (((((!((map__62759 == null))))?(((((map__62759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62759):map__62759);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62759__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62759__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62759__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.line.cljs$lang$applyTo = (function (seq62751){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62751));
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
var len__4730__auto___64580 = arguments.length;
var i__4731__auto___64581 = (0);
while(true){
if((i__4731__auto___64581 < len__4730__auto___64580)){
args__4736__auto__.push((arguments[i__4731__auto___64581]));

var G__64582 = (i__4731__auto___64581 + (1));
i__4731__auto___64581 = G__64582;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62770 = conformed_args__58615__auto__;
var map__62770__$1 = (((((!((map__62770 == null))))?(((((map__62770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62770):map__62770);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62770__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62770__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62770__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.col.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.col.cljs$lang$applyTo = (function (seq62764){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62764));
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
var len__4730__auto___64585 = arguments.length;
var i__4731__auto___64589 = (0);
while(true){
if((i__4731__auto___64589 < len__4730__auto___64585)){
args__4736__auto__.push((arguments[i__4731__auto___64589]));

var G__64590 = (i__4731__auto___64589 + (1));
i__4731__auto___64589 = G__64590;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62785 = conformed_args__58615__auto__;
var map__62785__$1 = (((((!((map__62785 == null))))?(((((map__62785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62785):map__62785);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62785__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62785__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62785__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.label.cljs$lang$applyTo = (function (seq62778){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62778));
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
var len__4730__auto___64592 = arguments.length;
var i__4731__auto___64593 = (0);
while(true){
if((i__4731__auto___64593 < len__4730__auto___64592)){
args__4736__auto__.push((arguments[i__4731__auto___64593]));

var G__64596 = (i__4731__auto___64593 + (1));
i__4731__auto___64593 = G__64596;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62792 = conformed_args__58615__auto__;
var map__62792__$1 = (((((!((map__62792 == null))))?(((((map__62792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62792):map__62792);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62792__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62792__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62792__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.picture.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.picture.cljs$lang$applyTo = (function (seq62788){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62788));
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
var len__4730__auto___64599 = arguments.length;
var i__4731__auto___64600 = (0);
while(true){
if((i__4731__auto___64600 < len__4730__auto___64599)){
args__4736__auto__.push((arguments[i__4731__auto___64600]));

var G__64601 = (i__4731__auto___64600 + (1));
i__4731__auto___64600 = G__64601;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62803 = conformed_args__58615__auto__;
var map__62803__$1 = (((((!((map__62803 == null))))?(((((map__62803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62803):map__62803);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62803__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62803__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62803__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.rt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.rt.cljs$lang$applyTo = (function (seq62801){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62801));
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
var len__4730__auto___64613 = arguments.length;
var i__4731__auto___64614 = (0);
while(true){
if((i__4731__auto___64614 < len__4730__auto___64613)){
args__4736__auto__.push((arguments[i__4731__auto___64614]));

var G__64619 = (i__4731__auto___64614 + (1));
i__4731__auto___64614 = G__64619;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62816 = conformed_args__58615__auto__;
var map__62816__$1 = (((((!((map__62816 == null))))?(((((map__62816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62816):map__62816);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62816__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62816__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62816__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.h6.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h6.cljs$lang$applyTo = (function (seq62813){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62813));
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
var len__4730__auto___64632 = arguments.length;
var i__4731__auto___64633 = (0);
while(true){
if((i__4731__auto___64633 < len__4730__auto___64632)){
args__4736__auto__.push((arguments[i__4731__auto___64633]));

var G__64638 = (i__4731__auto___64633 + (1));
i__4731__auto___64633 = G__64638;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62828 = conformed_args__58615__auto__;
var map__62828__$1 = (((((!((map__62828 == null))))?(((((map__62828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62828):map__62828);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62828__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62828__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62828__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.vkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.vkern.cljs$lang$applyTo = (function (seq62820){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62820));
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
var len__4730__auto___64661 = arguments.length;
var i__4731__auto___64662 = (0);
while(true){
if((i__4731__auto___64662 < len__4730__auto___64661)){
args__4736__auto__.push((arguments[i__4731__auto___64662]));

var G__64663 = (i__4731__auto___64662 + (1));
i__4731__auto___64662 = G__64663;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62840 = conformed_args__58615__auto__;
var map__62840__$1 = (((((!((map__62840 == null))))?(((((map__62840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62840):map__62840);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62840__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62840__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62840__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.link.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.link.cljs$lang$applyTo = (function (seq62835){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62835));
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
var len__4730__auto___64668 = arguments.length;
var i__4731__auto___64669 = (0);
while(true){
if((i__4731__auto___64669 < len__4730__auto___64668)){
args__4736__auto__.push((arguments[i__4731__auto___64669]));

var G__64670 = (i__4731__auto___64669 + (1));
i__4731__auto___64669 = G__64670;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62857 = conformed_args__58615__auto__;
var map__62857__$1 = (((((!((map__62857 == null))))?(((((map__62857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62857):map__62857);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62857__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62857__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62857__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.defs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.defs.cljs$lang$applyTo = (function (seq62853){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62853));
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
var len__4730__auto___64677 = arguments.length;
var i__4731__auto___64678 = (0);
while(true){
if((i__4731__auto___64678 < len__4730__auto___64677)){
args__4736__auto__.push((arguments[i__4731__auto___64678]));

var G__64680 = (i__4731__auto___64678 + (1));
i__4731__auto___64678 = G__64680;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62877 = conformed_args__58615__auto__;
var map__62877__$1 = (((((!((map__62877 == null))))?(((((map__62877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62877):map__62877);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62877__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62877__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62877__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.glyph.cljs$lang$applyTo = (function (seq62873){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62873));
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
var len__4730__auto___64683 = arguments.length;
var i__4731__auto___64684 = (0);
while(true){
if((i__4731__auto___64684 < len__4730__auto___64683)){
args__4736__auto__.push((arguments[i__4731__auto___64684]));

var G__64685 = (i__4731__auto___64684 + (1));
i__4731__auto___64684 = G__64685;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62895 = conformed_args__58615__auto__;
var map__62895__$1 = (((((!((map__62895 == null))))?(((((map__62895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62895):map__62895);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62895__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62895__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62895__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.colgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.colgroup.cljs$lang$applyTo = (function (seq62887){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62887));
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
var len__4730__auto___64690 = arguments.length;
var i__4731__auto___64691 = (0);
while(true){
if((i__4731__auto___64691 < len__4730__auto___64690)){
args__4736__auto__.push((arguments[i__4731__auto___64691]));

var G__64692 = (i__4731__auto___64691 + (1));
i__4731__auto___64691 = G__64692;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62899 = conformed_args__58615__auto__;
var map__62899__$1 = (((((!((map__62899 == null))))?(((((map__62899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62899):map__62899);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62899__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62899__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62899__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.meter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.meter.cljs$lang$applyTo = (function (seq62897){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62897));
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
var len__4730__auto___64698 = arguments.length;
var i__4731__auto___64699 = (0);
while(true){
if((i__4731__auto___64699 < len__4730__auto___64698)){
args__4736__auto__.push((arguments[i__4731__auto___64699]));

var G__64701 = (i__4731__auto___64699 + (1));
i__4731__auto___64699 = G__64701;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62913 = conformed_args__58615__auto__;
var map__62913__$1 = (((((!((map__62913 == null))))?(((((map__62913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62913):map__62913);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62913__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62913__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62913__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.bdo.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.bdo.cljs$lang$applyTo = (function (seq62906){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62906));
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
var len__4730__auto___64704 = arguments.length;
var i__4731__auto___64705 = (0);
while(true){
if((i__4731__auto___64705 < len__4730__auto___64704)){
args__4736__auto__.push((arguments[i__4731__auto___64705]));

var G__64706 = (i__4731__auto___64705 + (1));
i__4731__auto___64705 = G__64706;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62924 = conformed_args__58615__auto__;
var map__62924__$1 = (((((!((map__62924 == null))))?(((((map__62924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62924):map__62924);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62924__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62924__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62924__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feImage.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feImage.cljs$lang$applyTo = (function (seq62920){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62920));
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
var len__4730__auto___64707 = arguments.length;
var i__4731__auto___64708 = (0);
while(true){
if((i__4731__auto___64708 < len__4730__auto___64707)){
args__4736__auto__.push((arguments[i__4731__auto___64708]));

var G__64709 = (i__4731__auto___64708 + (1));
i__4731__auto___64708 = G__64709;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62934 = conformed_args__58615__auto__;
var map__62934__$1 = (((((!((map__62934 == null))))?(((((map__62934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62934):map__62934);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62934__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62934__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62934__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.b.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.b.cljs$lang$applyTo = (function (seq62931){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62931));
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
var len__4730__auto___64714 = arguments.length;
var i__4731__auto___64715 = (0);
while(true){
if((i__4731__auto___64715 < len__4730__auto___64714)){
args__4736__auto__.push((arguments[i__4731__auto___64715]));

var G__64716 = (i__4731__auto___64715 + (1));
i__4731__auto___64715 = G__64716;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62943 = conformed_args__58615__auto__;
var map__62943__$1 = (((((!((map__62943 == null))))?(((((map__62943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62943):map__62943);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62943__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62943__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62943__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.svg.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.svg.cljs$lang$applyTo = (function (seq62940){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62940));
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
var len__4730__auto___64719 = arguments.length;
var i__4731__auto___64720 = (0);
while(true){
if((i__4731__auto___64720 < len__4730__auto___64719)){
args__4736__auto__.push((arguments[i__4731__auto___64720]));

var G__64721 = (i__4731__auto___64720 + (1));
i__4731__auto___64720 = G__64721;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62952 = conformed_args__58615__auto__;
var map__62952__$1 = (((((!((map__62952 == null))))?(((((map__62952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62952):map__62952);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62952__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62952__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62952__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feTile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feTile.cljs$lang$applyTo = (function (seq62950){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62950));
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
var len__4730__auto___64723 = arguments.length;
var i__4731__auto___64724 = (0);
while(true){
if((i__4731__auto___64724 < len__4730__auto___64723)){
args__4736__auto__.push((arguments[i__4731__auto___64724]));

var G__64725 = (i__4731__auto___64724 + (1));
i__4731__auto___64724 = G__64725;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62960 = conformed_args__58615__auto__;
var map__62960__$1 = (((((!((map__62960 == null))))?(((((map__62960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62960):map__62960);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62960__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62960__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62960__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.ellipse.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.ellipse.cljs$lang$applyTo = (function (seq62957){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62957));
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
var len__4730__auto___64731 = arguments.length;
var i__4731__auto___64732 = (0);
while(true){
if((i__4731__auto___64732 < len__4730__auto___64731)){
args__4736__auto__.push((arguments[i__4731__auto___64732]));

var G__64733 = (i__4731__auto___64732 + (1));
i__4731__auto___64732 = G__64733;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62981 = conformed_args__58615__auto__;
var map__62981__$1 = (((((!((map__62981 == null))))?(((((map__62981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62981):map__62981);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62981__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62981__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62981__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.code.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.code.cljs$lang$applyTo = (function (seq62964){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62964));
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
var len__4730__auto___64736 = arguments.length;
var i__4731__auto___64737 = (0);
while(true){
if((i__4731__auto___64737 < len__4730__auto___64736)){
args__4736__auto__.push((arguments[i__4731__auto___64737]));

var G__64738 = (i__4731__auto___64737 + (1));
i__4731__auto___64737 = G__64738;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62995 = conformed_args__58615__auto__;
var map__62995__$1 = (((((!((map__62995 == null))))?(((((map__62995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62995):map__62995);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62995__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62995__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62995__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.dialog.cljs$lang$applyTo = (function (seq62986){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62986));
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
var len__4730__auto___64744 = arguments.length;
var i__4731__auto___64746 = (0);
while(true){
if((i__4731__auto___64746 < len__4730__auto___64744)){
args__4736__auto__.push((arguments[i__4731__auto___64746]));

var G__64747 = (i__4731__auto___64746 + (1));
i__4731__auto___64746 = G__64747;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__63011 = conformed_args__58615__auto__;
var map__63011__$1 = (((((!((map__63011 == null))))?(((((map__63011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63011):map__63011);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63011__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63011__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63011__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.linearGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.linearGradient.cljs$lang$applyTo = (function (seq63007){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63007));
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
var len__4730__auto___64749 = arguments.length;
var i__4731__auto___64750 = (0);
while(true){
if((i__4731__auto___64750 < len__4730__auto___64749)){
args__4736__auto__.push((arguments[i__4731__auto___64750]));

var G__64752 = (i__4731__auto___64750 + (1));
i__4731__auto___64750 = G__64752;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__63024 = conformed_args__58615__auto__;
var map__63024__$1 = (((((!((map__63024 == null))))?(((((map__63024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63024):map__63024);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63024__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63024__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63024__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.discard.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.discard.cljs$lang$applyTo = (function (seq63022){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63022));
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
var len__4730__auto___64754 = arguments.length;
var i__4731__auto___64755 = (0);
while(true){
if((i__4731__auto___64755 < len__4730__auto___64754)){
args__4736__auto__.push((arguments[i__4731__auto___64755]));

var G__64756 = (i__4731__auto___64755 + (1));
i__4731__auto___64755 = G__64756;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__63042 = conformed_args__58615__auto__;
var map__63042__$1 = (((((!((map__63042 == null))))?(((((map__63042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63042):map__63042);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63042__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63042__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63042__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.font_face_src.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.font_face_src.cljs$lang$applyTo = (function (seq63030){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63030));
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
var len__4730__auto___64757 = arguments.length;
var i__4731__auto___64758 = (0);
while(true){
if((i__4731__auto___64758 < len__4730__auto___64757)){
args__4736__auto__.push((arguments[i__4731__auto___64758]));

var G__64759 = (i__4731__auto___64758 + (1));
i__4731__auto___64758 = G__64759;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__63057 = conformed_args__58615__auto__;
var map__63057__$1 = (((((!((map__63057 == null))))?(((((map__63057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63057):map__63057);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63057__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63057__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63057__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.noscript.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.noscript.cljs$lang$applyTo = (function (seq63051){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63051));
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
var len__4730__auto___64760 = arguments.length;
var i__4731__auto___64761 = (0);
while(true){
if((i__4731__auto___64761 < len__4730__auto___64760)){
args__4736__auto__.push((arguments[i__4731__auto___64761]));

var G__64762 = (i__4731__auto___64761 + (1));
i__4731__auto___64761 = G__64762;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__63077 = conformed_args__58615__auto__;
var map__63077__$1 = (((((!((map__63077 == null))))?(((((map__63077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63077):map__63077);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63077__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63077__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63077__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.animateTransform.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.animateTransform.cljs$lang$applyTo = (function (seq63068){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63068));
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
var len__4730__auto___64764 = arguments.length;
var i__4731__auto___64765 = (0);
while(true){
if((i__4731__auto___64765 < len__4730__auto___64764)){
args__4736__auto__.push((arguments[i__4731__auto___64765]));

var G__64766 = (i__4731__auto___64765 + (1));
i__4731__auto___64765 = G__64766;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__63087 = conformed_args__58615__auto__;
var map__63087__$1 = (((((!((map__63087 == null))))?(((((map__63087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63087):map__63087);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63087__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63087__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63087__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.feColorMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.feColorMatrix.cljs$lang$applyTo = (function (seq63079){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63079));
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
var len__4730__auto___64770 = arguments.length;
var i__4731__auto___64771 = (0);
while(true){
if((i__4731__auto___64771 < len__4730__auto___64770)){
args__4736__auto__.push((arguments[i__4731__auto___64771]));

var G__64773 = (i__4731__auto___64771 + (1));
i__4731__auto___64771 = G__64773;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__63093 = conformed_args__58615__auto__;
var map__63093__$1 = (((((!((map__63093 == null))))?(((((map__63093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63093):map__63093);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63093__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63093__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63093__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.h2.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h2.cljs$lang$applyTo = (function (seq63092){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63092));
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
var len__4730__auto___64777 = arguments.length;
var i__4731__auto___64778 = (0);
while(true){
if((i__4731__auto___64778 < len__4730__auto___64777)){
args__4736__auto__.push((arguments[i__4731__auto___64778]));

var G__64780 = (i__4731__auto___64778 + (1));
i__4731__auto___64778 = G__64780;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__63104 = conformed_args__58615__auto__;
var map__63104__$1 = (((((!((map__63104 == null))))?(((((map__63104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63104):map__63104);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63104__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63104__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63104__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.area.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.area.cljs$lang$applyTo = (function (seq63098){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63098));
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
var len__4730__auto___64785 = arguments.length;
var i__4731__auto___64786 = (0);
while(true){
if((i__4731__auto___64786 < len__4730__auto___64785)){
args__4736__auto__.push((arguments[i__4731__auto___64786]));

var G__64788 = (i__4731__auto___64786 + (1));
i__4731__auto___64786 = G__64788;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__63114 = conformed_args__58615__auto__;
var map__63114__$1 = (((((!((map__63114 == null))))?(((((map__63114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63114):map__63114);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63114__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63114__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63114__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.br.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.br.cljs$lang$applyTo = (function (seq63113){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63113));
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
var len__4730__auto___64796 = arguments.length;
var i__4731__auto___64797 = (0);
while(true){
if((i__4731__auto___64797 < len__4730__auto___64796)){
args__4736__auto__.push((arguments[i__4731__auto___64797]));

var G__64798 = (i__4731__auto___64797 + (1));
i__4731__auto___64797 = G__64798;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__63123 = conformed_args__58615__auto__;
var map__63123__$1 = (((((!((map__63123 == null))))?(((((map__63123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63123):map__63123);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63123__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63123__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63123__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.dom.image.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.image.cljs$lang$applyTo = (function (seq63121){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63121));
});


//# sourceMappingURL=fulcro.client.dom.js.map
