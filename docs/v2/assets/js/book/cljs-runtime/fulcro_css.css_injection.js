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
return (function (p1__60453_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("fulcro-css.css-injection","depth","fulcro-css.css-injection/depth",1176672176),new cljs.core.Keyword("fulcro-css.css-injection","breadth","fulcro-css.css-injection/breadth",401097606),new cljs.core.Keyword("fulcro-css.css-injection","component","fulcro-css.css-injection/component",-518469322)],[(depth + (1)),breadth,p1__60453_SHARP_]);
});})(includes))
),includes),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (includes){
return (function (p1__60454_SHARP_){
var G__60461 = p1__60454_SHARP_;
var G__60462 = breadth;
var G__60463 = (depth + (1));
return (fulcro_css.css_injection.component_css_includes_with_depth.cljs$core$IFn$_invoke$arity$3 ? fulcro_css.css_injection.component_css_includes_with_depth.cljs$core$IFn$_invoke$arity$3(G__60461,G__60462,G__60463) : fulcro_css.css_injection.component_css_includes_with_depth.call(null,G__60461,G__60462,G__60463));
});})(includes))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([includes], 0)));
});
/**
 * Scan the given component and return an ordered vector of the css rules in depth-first order.
 *   `order` can be :depth-first (default) or :breadth-first
 */
fulcro_css.css_injection.find_css_nodes = (function fulcro_css$css_injection$find_css_nodes(p__60469){
var map__60471 = p__60469;
var map__60471__$1 = (((((!((map__60471 == null))))?(((((map__60471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60471):map__60471);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60471__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60471__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60471__$1,new cljs.core.Keyword(null,"state-map","state-map",-1313872128));
var query = ((cljs.core.map_QMARK_(state_map))?fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(component,state_map):fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(component));
var ast = fulcro.client.primitives.query__GT_ast(query);
var breadth = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var traverse = ((function (query,ast,breadth,map__60471,map__60471__$1,component,order,state_map){
return (function fulcro_css$css_injection$find_css_nodes_$_traverse_STAR_(p__60478,depth){
var map__60479 = p__60478;
var map__60479__$1 = (((((!((map__60479 == null))))?(((((map__60479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60479):map__60479);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60479__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60479__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var and__4120__auto__ = component__$1;
if(cljs.core.truth_(and__4120__auto__)){
return (fulcro_css.css.CSS_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro_css.css.CSS_QMARK_.cljs$core$IFn$_invoke$arity$1(component__$1) : fulcro_css.css.CSS_QMARK_.call(null,component__$1));
} else {
return and__4120__auto__;
}
})())?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro-css.css-injection","depth","fulcro-css.css-injection/depth",1176672176),depth,new cljs.core.Keyword("fulcro-css.css-injection","breadth","fulcro-css.css-injection/breadth",401097606),cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(breadth,cljs.core.inc),new cljs.core.Keyword("fulcro-css.css-injection","component","fulcro-css.css-injection/component",-518469322),component__$1], null)], null),fulcro_css.css_injection.component_css_includes_with_depth(component__$1,cljs.core.deref(breadth),depth)):cljs.core.PersistentVector.EMPTY),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (map__60479,map__60479__$1,children,component__$1,query,ast,breadth,map__60471,map__60471__$1,component,order,state_map){
return (function (p1__60466_SHARP_){
return fulcro_css$css_injection$find_css_nodes_$_traverse_STAR_(p1__60466_SHARP_,(depth + (1)));
});})(map__60479,map__60479__$1,children,component__$1,query,ast,breadth,map__60471,map__60471__$1,component,order,state_map))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq(children)], 0)));
});})(query,ast,breadth,map__60471,map__60471__$1,component,order,state_map))
;
var nodes = traverse(ast,(0));
var ordered_nodes = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(order,new cljs.core.Keyword(null,"breadth-first","breadth-first",141527627)))?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro-css.css-injection","breadth","fulcro-css.css-injection/breadth",401097606),nodes):cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (query,ast,breadth,traverse,nodes,map__60471,map__60471__$1,component,order,state_map){
return (function (p1__60467_SHARP_){
return (- new cljs.core.Keyword("fulcro-css.css-injection","depth","fulcro-css.css-injection/depth",1176672176).cljs$core$IFn$_invoke$arity$1(p1__60467_SHARP_));
});})(query,ast,breadth,traverse,nodes,map__60471,map__60471__$1,component,order,state_map))
,nodes));
var unique_nodes = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro-css.css-injection","component","fulcro-css.css-injection/component",-518469322),ordered_nodes));
if(cljs.core.truth_(query)){
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro-css.css-injection",new cljs.core.Keyword(null,"line","line",212345235),42], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Auto-include was used for CSS, but the component had no query! No CSS Found."], 0));
}catch (e60488){if((e60488 instanceof Error)){
var e__48124__auto___60651 = e60488;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro-css.css-injection",new cljs.core.Keyword(null,"line","line",212345235),42], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48124__auto___60651], 0));
} else {
throw e60488;

}
}}

return unique_nodes;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("fulcro-css.css-injection","find-css-nodes","fulcro-css.css-injection/find-css-nodes",-1611178617,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),cljs.core.seq_QMARK_,null,null),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),null,null,null));
var get_rules_60659 = (function (components){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__60495_SHARP_,p2__60496_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__60495_SHARP_,fulcro_css.css.get_css_rules(p2__60496_SHARP_));
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
fulcro_css.css_injection.compute_css = ((function (get_rules_60659){
return (function fulcro_css$css_injection$compute_css(props){
var map__60502 = props;
var map__60502__$1 = (((((!((map__60502 == null))))?(((((map__60502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60502):map__60502);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60502__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var auto_include_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60502__$1,new cljs.core.Keyword(null,"auto-include?","auto-include?",-351901260));
var rules = ((auto_include_QMARK_ === false)?(function (){var G__60505 = component;
if((G__60505 == null)){
return null;
} else {
return fulcro_css.css.get_css(G__60505);
}
})():(function (){var G__60506 = fulcro_css.css_injection.find_css_nodes(props);
if((G__60506 == null)){
return null;
} else {
return get_rules_60659(G__60506);
}
})());
var css = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rules], 0));
return css;
});})(get_rules_60659))
;
if((typeof fulcro_css !== 'undefined') && (typeof fulcro_css.css_injection !== 'undefined') && (typeof fulcro_css.css_injection.StyleElement !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro_css.css_injection.StyleElement = (function fulcro_css$css_injection$StyleElement(){
var this__55957__auto__ = this;
React.Component.apply(this__55957__auto__,arguments);

if((!((this__55957__auto__.initLocalState == null)))){
this__55957__auto__.state = this__55957__auto__.initLocalState();
} else {
this__55957__auto__.state = ({});
}

return this__55957__auto__;
});

var G__60527_60664 = fulcro_css.css_injection.StyleElement.prototype;
var G__60528_60665 = React.Component.prototype;
var G__60529_60666 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__60527_60664,G__60528_60665,G__60529_60666);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("fulcro-css.css-injection","StyleElement","fulcro-css.css-injection/StyleElement",-325653727),fulcro_css.css_injection.StyleElement);

var x60533_60668 = fulcro_css.css_injection.StyleElement.prototype;
x60533_60668.render = ((function (x60533_60668){
return (function (){
var this__54322__auto__ = this;
var this$ = this__54322__auto__;
var _STAR_reconciler_STAR__orig_val__60535 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__60536 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__60537 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__60538 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__60539 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__60540 = fulcro.client.primitives.get_reconciler(this__54322__auto__);
var _STAR_depth_STAR__temp_val__60541 = (fulcro.client.primitives.depth(this__54322__auto__) + (1));
var _STAR_shared_STAR__temp_val__60542 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__54322__auto__);
var _STAR_instrument_STAR__temp_val__60543 = fulcro.client.primitives.instrument(this__54322__auto__);
var _STAR_parent_STAR__temp_val__60546 = this__54322__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__60540;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__60541;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__60542;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__60543;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__60546;

try{var map__60548 = fulcro.client.primitives.props(this$);
var map__60548__$1 = (((((!((map__60548 == null))))?(((((map__60548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60548):map__60548);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60548__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60548__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"css","css",1135045163))], null)], null)], null),null);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__60539;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__60538;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__60537;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__60536;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__60535;
}});})(x60533_60668))
;

x60533_60668.componentDidMount = ((function (x60533_60668){
return (function (){
var this__54306__auto__ = this;
var this$ = this__54306__auto__;
var reconciler__54307__auto__ = fulcro.client.primitives.get_reconciler(this__54306__auto__);
var lifecycle__54308__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__54307__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var indexer__54309__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__54307__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
goog.object.set(this__54306__auto__,"fulcro$mounted",true);

if((indexer__54309__auto__ == null)){
} else {
fulcro.client.impl.protocols.index_component_BANG_(indexer__54309__auto__,this__54306__auto__);
}

if(cljs.core.truth_(lifecycle__54308__auto__)){
var G__60600_60685 = this__54306__auto__;
var G__60601_60686 = new cljs.core.Keyword(null,"mount","mount",-1560582470);
(lifecycle__54308__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__54308__auto__.cljs$core$IFn$_invoke$arity$2(G__60600_60685,G__60601_60686) : lifecycle__54308__auto__.call(null,G__60600_60685,G__60601_60686));
} else {
}

var css = fulcro_css.css_injection.compute_css(fulcro.client.primitives.props(this$));
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),css], null));
});})(x60533_60668))
;


fulcro_css.css_injection.StyleElement.prototype.constructor = fulcro_css.css_injection.StyleElement;

fulcro_css.css_injection.StyleElement.prototype.constructor.displayName = "fulcro-css.css-injection/StyleElement";

fulcro_css.css_injection.StyleElement.prototype.fulcro$isComponent = true;

var x60605_60695 = fulcro_css.css_injection.StyleElement;


var x60606_60696 = fulcro_css.css_injection.StyleElement.prototype;


fulcro_css.css_injection.StyleElement.cljs$lang$type = true;

fulcro_css.css_injection.StyleElement.cljs$lang$ctorStr = "fulcro-css.css-injection/StyleElement";

fulcro_css.css_injection.StyleElement.cljs$lang$ctorPrWriter = (function (this__55960__auto__,writer__55961__auto__,opt__55962__auto__){
return cljs.core._write(writer__55961__auto__,"fulcro-css.css-injection/StyleElement");
});
var factory_60699 = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(fulcro_css.css_injection.StyleElement);
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
fulcro_css.css_injection.style_element = ((function (factory_60699){
return (function fulcro_css$css_injection$style_element(props){
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(props);
var props__$1 = (function (){var G__60612 = props;
if(fulcro.client.primitives.component_QMARK_(component)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60612,new cljs.core.Keyword(null,"state-map","state-map",-1313872128),(function (){var G__60614 = component;
if((G__60614 == null)){
return null;
} else {
return fulcro.client.primitives.component__GT_state_map(G__60614);
}
})()),new cljs.core.Keyword(null,"component","component",1555936782),fulcro.client.primitives.react_type);
} else {
return G__60612;
}
})();
return (factory_60699.cljs$core$IFn$_invoke$arity$1 ? factory_60699.cljs$core$IFn$_invoke$arity$1(props__$1) : factory_60699.call(null,props__$1));
});})(factory_60699))
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
