goog.provide('fulcro_css.css_injection');
goog.require('cljs.core');
goog.require('fulcro.client.primitives');
goog.require('cljs.spec.alpha');
goog.require('garden.core');
goog.require('fulcro_css.css');
goog.require('fulcro.logging');
goog.require('fulcro.client.dom');
fulcro_css.css_injection.component_css_includes_with_depth = (function fulcro_css$css_injection$component_css_includes_with_depth(component,breadth,depth){
var includes = (fulcro_css.css.get_includes.cljs$core$IFn$_invoke$arity$1 ? fulcro_css.css.get_includes.cljs$core$IFn$_invoke$arity$1(component) : fulcro_css.css.get_includes.call(null,component));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (includes){
return (function (p1__58046_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("fulcro-css.css-injection","depth","fulcro-css.css-injection/depth",1176672176),new cljs.core.Keyword("fulcro-css.css-injection","breadth","fulcro-css.css-injection/breadth",401097606),new cljs.core.Keyword("fulcro-css.css-injection","component","fulcro-css.css-injection/component",-518469322)],[(depth + (1)),breadth,p1__58046_SHARP_]);
});})(includes))
),includes),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (includes){
return (function (p1__58047_SHARP_){
var G__58053 = p1__58047_SHARP_;
var G__58054 = breadth;
var G__58055 = (depth + (1));
return (fulcro_css.css_injection.component_css_includes_with_depth.cljs$core$IFn$_invoke$arity$3 ? fulcro_css.css_injection.component_css_includes_with_depth.cljs$core$IFn$_invoke$arity$3(G__58053,G__58054,G__58055) : fulcro_css.css_injection.component_css_includes_with_depth.call(null,G__58053,G__58054,G__58055));
});})(includes))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([includes], 0)));
});
/**
 * Scan the given component and return an ordered vector of the css rules in depth-first order.
 *   `order` can be :depth-first (default) or :breadth-first
 */
fulcro_css.css_injection.find_css_nodes = (function fulcro_css$css_injection$find_css_nodes(p__58063){
var map__58065 = p__58063;
var map__58065__$1 = (((((!((map__58065 == null))))?(((((map__58065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58065):map__58065);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58065__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58065__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58065__$1,new cljs.core.Keyword(null,"state-map","state-map",-1313872128));
var query = ((cljs.core.map_QMARK_(state_map))?fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(component,state_map):fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(component));
var ast = fulcro.client.primitives.query__GT_ast(query);
var breadth = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var traverse = ((function (query,ast,breadth,map__58065,map__58065__$1,component,order,state_map){
return (function fulcro_css$css_injection$find_css_nodes_$_traverse_STAR_(p__58079,depth){
var map__58081 = p__58079;
var map__58081__$1 = (((((!((map__58081 == null))))?(((((map__58081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58081):map__58081);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58081__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58081__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var and__4120__auto__ = component__$1;
if(cljs.core.truth_(and__4120__auto__)){
return (fulcro_css.css.CSS_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro_css.css.CSS_QMARK_.cljs$core$IFn$_invoke$arity$1(component__$1) : fulcro_css.css.CSS_QMARK_.call(null,component__$1));
} else {
return and__4120__auto__;
}
})())?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro-css.css-injection","depth","fulcro-css.css-injection/depth",1176672176),depth,new cljs.core.Keyword("fulcro-css.css-injection","breadth","fulcro-css.css-injection/breadth",401097606),cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(breadth,cljs.core.inc),new cljs.core.Keyword("fulcro-css.css-injection","component","fulcro-css.css-injection/component",-518469322),component__$1], null)], null),fulcro_css.css_injection.component_css_includes_with_depth(component__$1,cljs.core.deref(breadth),depth)):cljs.core.PersistentVector.EMPTY),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (map__58081,map__58081__$1,children,component__$1,query,ast,breadth,map__58065,map__58065__$1,component,order,state_map){
return (function (p1__58060_SHARP_){
return fulcro_css$css_injection$find_css_nodes_$_traverse_STAR_(p1__58060_SHARP_,(depth + (1)));
});})(map__58081,map__58081__$1,children,component__$1,query,ast,breadth,map__58065,map__58065__$1,component,order,state_map))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq(children)], 0)));
});})(query,ast,breadth,map__58065,map__58065__$1,component,order,state_map))
;
var nodes = traverse(ast,(0));
var ordered_nodes = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(order,new cljs.core.Keyword(null,"breadth-first","breadth-first",141527627)))?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro-css.css-injection","breadth","fulcro-css.css-injection/breadth",401097606),nodes):cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (query,ast,breadth,traverse,nodes,map__58065,map__58065__$1,component,order,state_map){
return (function (p1__58062_SHARP_){
return (- new cljs.core.Keyword("fulcro-css.css-injection","depth","fulcro-css.css-injection/depth",1176672176).cljs$core$IFn$_invoke$arity$1(p1__58062_SHARP_));
});})(query,ast,breadth,traverse,nodes,map__58065,map__58065__$1,component,order,state_map))
,nodes));
var unique_nodes = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro-css.css-injection","component","fulcro-css.css-injection/component",-518469322),ordered_nodes));
if(cljs.core.truth_(query)){
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro-css.css-injection",new cljs.core.Keyword(null,"line","line",212345235),42], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Auto-include was used for CSS, but the component had no query! No CSS Found."], 0));
}catch (e58089){if((e58089 instanceof Error)){
var e__47187__auto___58295 = e58089;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro-css.css-injection",new cljs.core.Keyword(null,"line","line",212345235),42], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__47187__auto___58295], 0));
} else {
throw e58089;

}
}}

return unique_nodes;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("fulcro-css.css-injection","find-css-nodes","fulcro-css.css-injection/find-css-nodes",-1611178617,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),cljs.core.seq_QMARK_,null,null),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),null,null,null));
var get_rules_58301 = (function (components){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__58113_SHARP_,p2__58115_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__58113_SHARP_,fulcro_css.css.get_css_rules(p2__58115_SHARP_));
}),cljs.core.PersistentVector.EMPTY,components);
});
/**
 * Compute the stringified CSS based on the given props. This can be used to generate a
 *  server-side version of CSS for the initial DOM, and is used the other injection functions to compute
 *  the CSS.
 * 
 *  Props are as described in `style-element`.
 *  
 */
fulcro_css.css_injection.compute_css = ((function (get_rules_58301){
return (function fulcro_css$css_injection$compute_css(props){
var map__58118 = props;
var map__58118__$1 = (((((!((map__58118 == null))))?(((((map__58118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58118):map__58118);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58118__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var auto_include_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58118__$1,new cljs.core.Keyword(null,"auto-include?","auto-include?",-351901260));
var rules = ((auto_include_QMARK_ === false)?(function (){var G__58123 = component;
if((G__58123 == null)){
return null;
} else {
return fulcro_css.css.get_css(G__58123);
}
})():(function (){var G__58124 = fulcro_css.css_injection.find_css_nodes(props);
if((G__58124 == null)){
return null;
} else {
return get_rules_58301(G__58124);
}
})());
var css = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rules], 0));
return css;
});})(get_rules_58301))
;
if((typeof fulcro_css !== 'undefined') && (typeof fulcro_css.css_injection !== 'undefined') && (typeof fulcro_css.css_injection.StyleElement !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro_css.css_injection.StyleElement = (function fulcro_css$css_injection$StyleElement(){
var this__56082__auto__ = this;
React.Component.apply(this__56082__auto__,arguments);

if((!((this__56082__auto__.initLocalState == null)))){
this__56082__auto__.state = this__56082__auto__.initLocalState();
} else {
this__56082__auto__.state = ({});
}

return this__56082__auto__;
});

goog.object.extend(fulcro_css.css_injection.StyleElement.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("fulcro-css.css-injection","StyleElement","fulcro-css.css-injection/StyleElement",-325653727),fulcro_css.css_injection.StyleElement);

var x58138_58330 = fulcro_css.css_injection.StyleElement.prototype;
x58138_58330.render = ((function (x58138_58330){
return (function (){
var this__55000__auto__ = this;
var this$ = this__55000__auto__;
var _STAR_reconciler_STAR__orig_val__58142 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58143 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58144 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58145 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58146 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58147 = fulcro.client.primitives.get_reconciler(this__55000__auto__);
var _STAR_depth_STAR__temp_val__58148 = (fulcro.client.primitives.depth(this__55000__auto__) + (1));
var _STAR_shared_STAR__temp_val__58149 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__55000__auto__);
var _STAR_instrument_STAR__temp_val__58150 = fulcro.client.primitives.instrument(this__55000__auto__);
var _STAR_parent_STAR__temp_val__58151 = this__55000__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58147;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58148;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58149;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58150;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58151;

try{var map__58154 = fulcro.client.primitives.props(this$);
var map__58154__$1 = (((((!((map__58154 == null))))?(((((map__58154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58154):map__58154);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58154__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58154__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"css","css",1135045163))], null)], null)], null),null);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58146;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58145;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58144;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58143;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58142;
}});})(x58138_58330))
;

x58138_58330.componentDidMount = ((function (x58138_58330){
return (function (){
var this__54984__auto__ = this;
var this$ = this__54984__auto__;
var reconciler__54985__auto__ = fulcro.client.primitives.get_reconciler(this__54984__auto__);
var lifecycle__54986__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__54985__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var indexer__54987__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__54985__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
goog.object.set(this__54984__auto__,"fulcro$mounted",true);

if((indexer__54987__auto__ == null)){
} else {
fulcro.client.impl.protocols.index_component_BANG_(indexer__54987__auto__,this__54984__auto__);
}

if(cljs.core.truth_(lifecycle__54986__auto__)){
(lifecycle__54986__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__54986__auto__.cljs$core$IFn$_invoke$arity$2(this__54984__auto__,new cljs.core.Keyword(null,"mount","mount",-1560582470)) : lifecycle__54986__auto__.call(null,this__54984__auto__,new cljs.core.Keyword(null,"mount","mount",-1560582470)));
} else {
}

var css = fulcro_css.css_injection.compute_css(fulcro.client.primitives.props(this$));
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),css], null));
});})(x58138_58330))
;


fulcro_css.css_injection.StyleElement.prototype.constructor = fulcro_css.css_injection.StyleElement;

fulcro_css.css_injection.StyleElement.prototype.constructor.displayName = "fulcro-css.css-injection/StyleElement";

fulcro_css.css_injection.StyleElement.prototype.fulcro$isComponent = true;

var x58223_58381 = fulcro_css.css_injection.StyleElement;


var x58225_58382 = fulcro_css.css_injection.StyleElement.prototype;


fulcro_css.css_injection.StyleElement.cljs$lang$type = true;

fulcro_css.css_injection.StyleElement.cljs$lang$ctorStr = "fulcro-css.css-injection/StyleElement";

fulcro_css.css_injection.StyleElement.cljs$lang$ctorPrWriter = (function (this__56085__auto__,writer__56086__auto__,opt__56087__auto__){
return cljs.core._write(writer__56086__auto__,"fulcro-css.css-injection/StyleElement");
});
var factory_58392 = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(fulcro_css.css_injection.StyleElement);
/**
 * Renders a style element. Valid props are:
 * 
 *   - `:component`: (REQUIRED) The UI component to pull CSS from. Class or instance allowed.
 *   - `:order`: (optional)  `:depth-first` (default) or `:breadth-first` (legacy order)
 *   - `:react-key` : (optional) A React key. Changing the key will force it to update the CSS (which is otherwise caches for performance)
 *   - `:auto-include?`: (optional) When set to true (default) it will use the component query to recursively scan for
 *     CSS instead of explicit includes. When set to (exactly) `false` then it ONLY uses the user-declared inclusions on
 *     the component.
 * 
 *  The resulting React style element avoids re-rendering unless the props change, and the CSS is cached at component mount; therefore
 *  this element will avoid all overhead on refresh. In development you may wish to have the CSS change on hot code reload, in which case
 *  you can simply change the `:react-key` on the props to force a re-mount (which will recompute the CSS).
 *  
 */
fulcro_css.css_injection.style_element = ((function (factory_58392){
return (function fulcro_css$css_injection$style_element(props){
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(props);
var props__$1 = (function (){var G__58230 = props;
if(fulcro.client.primitives.component_QMARK_(component)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58230,new cljs.core.Keyword(null,"state-map","state-map",-1313872128),(function (){var G__58231 = component;
if((G__58231 == null)){
return null;
} else {
return fulcro.client.primitives.component__GT_state_map(G__58231);
}
})()),new cljs.core.Keyword(null,"component","component",1555936782),fulcro.client.primitives.react_type);
} else {
return G__58230;
}
})();
return (factory_58392.cljs$core$IFn$_invoke$arity$1 ? factory_58392.cljs$core$IFn$_invoke$arity$1(props__$1) : factory_58392.call(null,props__$1));
});})(factory_58392))
;
/**
 * (Re)place the STYLE element with the provided ID on the document's low-level DOM with the co-located CSS of
 *   the specified component.
 * 
 *   The `options` is the same as passed to `style-element`.
 * 
 *   ONLY WORKS FOR CLJS, since otherwise there is no DOM to change.
 */
fulcro_css.css_injection.upsert_css = (function fulcro_css$css_injection$upsert_css(id,options){
fulcro_css.css.remove_from_dom(id);

var style_ele = document.createElement("style");
var css = fulcro_css.css_injection.compute_css(options);
style_ele.innerHTML = css;

style_ele.setAttribute("id",id);

return document.body.appendChild(style_ele);
});

//# sourceMappingURL=fulcro_css.css_injection.js.map
